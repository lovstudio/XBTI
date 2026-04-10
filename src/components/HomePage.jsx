import { CASES } from '../../cases/registry';

export default function HomePage({ navigate }) {
  return (
    <section className="screen active">
      <div className="hero card hero-minimal">
        <h1>MBTI已经过时，XBTI来了！</h1>
        <p className="hero-sub">在财富自由之前，率先实现人格测试自由</p>
        <div className="hero-cta">
          <p>想创建你自己的人格测试？一行命令搞定：</p>
          <pre className="hero-cmd">npx skills add lovstudio/skills --skill xbti-creator</pre>
          <p className="hero-cta-hint">
            安装后输入 <code>/lovstudio:xbti-creator</code> 或直接说「帮我创建一个人格测试」，AI 自动生成完整测试并提交 PR。
          </p>
        </div>
      </div>

      <div className="case-list">
        {CASES.map(c => {
          const allTypes = Object.values(c.TYPE_LIBRARY);
          return (
            <div className="case-card card" key={c.meta.id}>
              <div className="case-header">
                <div>
                  <h2 className="case-name">{c.meta.name}</h2>
                  <p className="case-desc">{c.meta.desc} · by <a href={c.meta.authorUrl}>{c.meta.author}</a></p>
                </div>
                <button
                  className="btn-primary"
                  onClick={() => navigate('/' + c.meta.id)}
                >
                  开始测试
                </button>
              </div>
              <div className="marquee">
                <div className="marquee-track">
                  {[...allTypes, ...allTypes].map((t, i) => (
                    <div className="gallery-card" key={`${t.code}-${i}`}>
                      {c.TYPE_IMAGES[t.code] && (
                        <img className="gallery-img" src={c.TYPE_IMAGES[t.code]} alt={t.code} loading="lazy" />
                      )}
                      <div className="gallery-code">{t.code}</div>
                      <div className="gallery-cn">{t.cn}</div>
                    </div>
                  ))}
                </div>
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
