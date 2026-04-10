export default function CaseIntro({ caseData, allCases, onStart, navigate }) {
  const { meta, TYPE_LIBRARY, TYPE_IMAGES } = caseData;
  const allTypes = Object.values(TYPE_LIBRARY);

  return (
    <section className="screen active">
      <div className="hero card hero-minimal">
        <h1>{meta.name}</h1>
        <p className="hero-sub">{meta.desc}</p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', alignItems: 'center' }}>
          <button className="btn-primary" onClick={onStart}>开始测试</button>
          <select
            className="case-select"
            value=""
            onChange={(e) => { if (e.target.value) navigate('/c/' + e.target.value); }}
          >
            <option value="" disabled>切换风格</option>
            {allCases.filter(c => c.meta.id !== meta.id).map(c => (
              <option key={c.meta.id} value={c.meta.id}>
                {c.meta.name} — {c.meta.desc}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="marquee-section">
        <div className="marquee">
          <div className="marquee-track">
            {[...allTypes, ...allTypes].map((t, i) => (
              <div className="gallery-card" key={`${t.code}-${i}`}>
                {TYPE_IMAGES[t.code] && (
                  <img className="gallery-img" src={TYPE_IMAGES[t.code]} alt={t.code} loading="lazy" />
                )}
                <div className="gallery-code">{t.code}</div>
                <div className="gallery-cn">{t.cn}</div>
                <div className="gallery-intro">{t.intro}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <span>Powered by <a href="https://github.com/lovstudio/XBTI">XBTI</a></span>
      </footer>
    </section>
  );
}
