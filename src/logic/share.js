import { dimensionOrder } from '../data/dimensions';
import { TYPE_LIBRARY } from '../data/types';

// Encode result into a compact URL hash
// Format: type,similarity,exact,LEVELS,special
// Example: CEO,77,10,HMHLHMMLHHMMLHM,0
export function encodeResult(result) {
  const levels = dimensionOrder.map(d => result.levels[d]).join('');
  const special = result.special ? '1' : '0';
  const code = result.finalType.code;
  const sim = result.bestNormal.similarity;
  const exact = result.bestNormal.exact;
  return btoa(`${code},${sim},${exact},${levels},${special}`);
}

export function buildShareURL(result) {
  const hash = encodeResult(result);
  const base = window.location.origin + window.location.pathname;
  return `${base}#r=${hash}`;
}

// Decode a share hash back into a displayable result
export function decodeShareHash(hash) {
  try {
    const decoded = atob(hash);
    const [code, simStr, exactStr, levels, special] = decoded.split(',');
    const type = TYPE_LIBRARY[code];
    if (!type || levels.length !== 15) return null;

    const levelsMap = {};
    const rawScores = {};
    dimensionOrder.forEach((dim, i) => {
      levelsMap[dim] = levels[i];
      rawScores[dim] = { L: 2, M: 4, H: 5 }[levels[i]] || 3;
    });

    return {
      rawScores,
      levels: levelsMap,
      bestNormal: { similarity: Number(simStr), exact: Number(exactStr) },
      finalType: type,
      modeKicker: special === '1'
        ? (code === 'DRUNK-NB' ? '隐藏人格已激活' : '系统强制兜底')
        : '你的牛逼人格',
      badge: `匹配度 ${simStr}% · 精准命中 ${exactStr}/15 维`,
      sub: special === '1'
        ? (code === 'DRUNK-NB' ? '乙醇亲和性过强，系统已直接跳过常规人格审判，授予你「醉仙」称号。' : '你的牛逼超出了算法的理解范围，系统已强制分配 NB404。')
        : '维度命中度较高，当前结果可视为你的第一牛逼画像。',
      special: special === '1',
      shared: true
    };
  } catch {
    return null;
  }
}
