import { useState, useEffect } from 'react';

const MESSAGES = [
  '扫描牛逼基因序列…',
  '计算膨胀指数…',
  '校准灵魂重量…',
  '匹配牛逼人格库…',
  '生成你的牛逼画像…',
  '最终审判中…'
];

export default function AnalyzingScreen({ onDone }) {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex(i => {
        if (i >= MESSAGES.length - 1) {
          clearInterval(interval);
          setTimeout(onDone, 600);
          return i;
        }
        return i + 1;
      });
    }, 500);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <section className="screen active">
      <div className="hero card hero-minimal analyzing">
        <div className="analyze-spinner" />
        <h2 className="analyze-text">{MESSAGES[msgIndex]}</h2>
        <div className="analyze-bar">
          <span style={{ width: `${((msgIndex + 1) / MESSAGES.length) * 100}%` }} />
        </div>
      </div>
    </section>
  );
}
