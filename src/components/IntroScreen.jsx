export default function IntroScreen({ onStart }) {
  return (
    <section className="screen active">
      <div className="hero card hero-minimal">
        <div className="eyebrow">NBTI · 牛逼人格测试</div>
        <h1>你有多牛逼？</h1>
        <p className="hero-sub">
          30 道题 · 20 种牛逼人格 · 15 维度扫描<br />
          找到属于你的那种牛逼
        </p>
        <div className="hero-actions hero-actions-single">
          <button className="btn-primary" onClick={onStart}>开始测试</button>
        </div>
        <p className="hero-footer">
          基于 SBTI 算法改造 · 纯娱乐 · 别太当真
        </p>
      </div>
    </section>
  );
}
