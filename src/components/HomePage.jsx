export default function HomePage({ cases, navigate }) {
  return (
    <section className="screen active">
      <div className="hero card hero-minimal">
        <h1>MBTI已经过时，XBTI来了！</h1>
        <p className="hero-sub">在财富自由之前，率先实现人格测试自由</p>
        <div className="hero-cta">
          <p>想创建你自己的人格测试？一行命令搞定：</p>
          <pre className="hero-cmd">npx skills add lovstudio/skills --skill lovstudio:xbti-creator</pre>
          <p className="hero-cta-hint">
            安装后输入 <code>/lovstudio:xbti-creator</code> 或直接说「帮我创建一个人格测试」，AI 自动生成完整测试并提交 PR。
          </p>
        </div>
      </div>

      <div className="case-list">
        {cases.map(c => {
          const allTypes = Object.values(c.TYPE_LIBRARY);
          const typesWithImg = allTypes.filter(t => c.TYPE_IMAGES[t.code]);
          return (
            <div
              className="case-poster"
              key={c.meta.id}
              onClick={() => navigate('/c/' + c.meta.id)}
            >
              <div className="poster-mosaic">
                {typesWithImg.map(t => (
                  <img
                    key={t.code}
                    className="poster-thumb"
                    src={c.TYPE_IMAGES[t.code]}
                    alt={t.code}
                    loading="lazy"
                  />
                ))}
              </div>
              <div className="poster-overlay">
                <h2 className="poster-title">{c.meta.name}</h2>
                <p className="poster-desc">{c.meta.desc}</p>
                <p className="poster-meta">by <a href={c.meta.authorUrl} onClick={e => e.stopPropagation()}>{c.meta.author}</a> · {allTypes.length} 种人格</p>
                <span className="poster-cta">开始测试 →</span>
              </div>
            </div>
          );
        })}
      </div>

      <footer className="site-footer">
        <span>Powered by <a href="https://github.com/lovstudio/XBTI">XBTI</a></span>
      </footer>
    </section>
  );
}
