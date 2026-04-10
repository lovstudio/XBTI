#!/usr/bin/env node
/**
 * Generate case.json + index.json from JS source modules.
 * Run after adding/editing a case: node scripts/build-cases.mjs
 */
import { writeFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CASES_DIR = join(ROOT, 'cases');

async function main() {
  // Auto-discover case directories (has index.js)
  const dirs = readdirSync(CASES_DIR).filter(d => {
    const p = join(CASES_DIR, d);
    return statSync(p).isDirectory() && readdirSync(p).includes('index.js');
  });

  const index = [];

  for (const id of dirs) {
    const mod = await import(join(CASES_DIR, id, 'index.js'));
    // Build TYPE_IMAGES from actual files in images/ directory
    const imagesDir = join(CASES_DIR, id, 'images');
    const imageFiles = existsSync(imagesDir) ? readdirSync(imagesDir) : [];
    const TYPE_IMAGES = {};
    for (const code of Object.keys(mod.TYPE_LIBRARY)) {
      const found = imageFiles.find(f => f.startsWith(code + '.') || f.startsWith(code.replace('!', '') + '.'));
      if (found) TYPE_IMAGES[code] = `images/${found}`;
    }

    const data = {
      meta: mod.meta,
      dimensionMeta: mod.dimensionMeta,
      dimensionOrder: mod.dimensionOrder,
      DIM_EXPLANATIONS: mod.DIM_EXPLANATIONS,
      questions: mod.questions,
      specialQuestions: mod.specialQuestions,
      DRUNK_TRIGGER_QUESTION_ID: mod.DRUNK_TRIGGER_QUESTION_ID,
      TYPE_LIBRARY: mod.TYPE_LIBRARY,
      TYPE_IMAGES,
      NORMAL_TYPES: mod.NORMAL_TYPES,
    };
    writeFileSync(join(CASES_DIR, id, 'case.json'), JSON.stringify(data));
    index.push(mod.meta);
    console.log(`  ${id}/case.json`);
  }

  writeFileSync(join(CASES_DIR, 'index.json'), JSON.stringify(index));
  console.log(`  index.json (${index.length} cases)`);
}

main().catch(e => { console.error(e); process.exit(1); });
