import { useState, useEffect } from 'react';

const CDN = 'https://cdn.jsdelivr.net/gh/lovstudio/XBTI@main/cases';

function resolveImages(caseData) {
  const { meta, TYPE_IMAGES } = caseData;
  if (!TYPE_IMAGES) return caseData;
  const resolved = {};
  for (const [code, rel] of Object.entries(TYPE_IMAGES)) {
    resolved[code] = `${CDN}/${meta.id}/${rel}`;
  }
  return { ...caseData, TYPE_IMAGES: resolved };
}

export default function useCases() {
  const [cases, setCases] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const indexRes = await fetch(`${CDN}/index.json`);
        const metas = await indexRes.json();

        const all = await Promise.all(
          metas.map(async (meta) => {
            const res = await fetch(`${CDN}/${meta.id}/case.json`);
            return resolveImages(await res.json());
          })
        );

        if (!cancelled) setCases(all);
      } catch (e) {
        if (!cancelled) setError(e);
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  return { cases, error };
}
