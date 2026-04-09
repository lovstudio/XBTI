import { useRef, useCallback } from 'react';
import { dimensionMeta, dimensionOrder, DIM_EXPLANATIONS } from '../data/dimensions';
import { TYPE_IMAGES } from '../data/types';
import { buildShareURL } from '../logic/share';
import QRCode from 'qrcode';

function wrapText(ctx, text, maxWidth) {
  const chars = text.split('');
  const lines = [];
  let line = '';
  for (const ch of chars) {
    const test = line + ch;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = ch;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

export default function ResultScreen({ result, onRestart, onHome }) {
  const type = result.finalType;
  const imageSrc = TYPE_IMAGES[type.code];
  const canvasRef = useRef(null);

  const generateShareCard = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const shareURL = buildShareURL(result);
    const qrDataURL = await QRCode.toDataURL(shareURL, {
      width: 280, margin: 1, color: { dark: '#4d6a53', light: '#f6faf6' }
    });

    const draw = (charImg, qrImg) => {
      const ctx = canvas.getContext('2d');
      const S = 2;
      const W = 640, H = 900;
      canvas.width = W * S;
      canvas.height = H * S;
      ctx.scale(S, S);

      // Background
      const bg = ctx.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0, '#f6faf6');
      bg.addColorStop(0.6, '#f0f7f1');
      bg.addColorStop(1, '#edf6ef');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Accent line at top
      const topLine = ctx.createLinearGradient(0, 0, W, 0);
      topLine.addColorStop(0, '#97b59c');
      topLine.addColorStop(0.5, '#4d6a53');
      topLine.addColorStop(1, '#97b59c');
      ctx.fillStyle = topLine;
      ctx.fillRect(0, 0, W, 4);

      // Title
      ctx.fillStyle = '#4d6a53';
      ctx.font = 'bold 16px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('NBTI 牛逼人格测试', W / 2, 40);

      // Character image (centered, prominent)
      let curY = 60;
      if (charImg) {
        const imgSize = 200;
        const imgX = (W - imgSize) / 2;
        ctx.save();
        ctx.beginPath();
        ctx.arc(W / 2, curY + imgSize / 2, imgSize / 2 + 4, 0, Math.PI * 2);
        ctx.fillStyle = '#dbe8dd';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(W / 2, curY + imgSize / 2, imgSize / 2, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(charImg, imgX, curY, imgSize, imgSize);
        ctx.restore();
        curY += imgSize + 16;
      }

      // Type code
      ctx.fillStyle = '#1e2a22';
      ctx.font = 'bold 56px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(type.code, W / 2, curY + 48);
      curY += 58;

      // Chinese name
      ctx.fillStyle = '#4d6a53';
      ctx.font = 'bold 26px sans-serif';
      ctx.fillText(type.cn, W / 2, curY + 24);
      curY += 36;

      // Intro
      ctx.fillStyle = '#6a786f';
      ctx.font = '15px sans-serif';
      const introLines = wrapText(ctx, type.intro, W - 120);
      introLines.forEach((line, i) => {
        ctx.fillText(line, W / 2, curY + 18 + i * 22);
      });
      curY += 18 + introLines.length * 22 + 8;

      // Match badge (pill shape)
      const badgeText = result.badge;
      ctx.font = 'bold 13px sans-serif';
      const badgeW = ctx.measureText(badgeText).width + 28;
      const badgeX = (W - badgeW) / 2;
      ctx.fillStyle = '#edf6ef';
      ctx.beginPath();
      ctx.roundRect(badgeX, curY, badgeW, 28, 14);
      ctx.fill();
      ctx.strokeStyle = '#dbe8dd';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(badgeX, curY, badgeW, 28, 14);
      ctx.stroke();
      ctx.fillStyle = '#4d6a53';
      ctx.fillText(badgeText, W / 2, curY + 19);
      curY += 44;

      // Separator
      ctx.strokeStyle = '#dbe8dd';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(80, curY);
      ctx.lineTo(W - 80, curY);
      ctx.stroke();
      curY += 20;

      // Personality description
      ctx.fillStyle = '#3a4a3e';
      ctx.font = '15px sans-serif';
      const descText = type.desc.length > 150 ? type.desc.slice(0, 147) + '…' : type.desc;
      const descLines = wrapText(ctx, descText, W - 120);
      descLines.forEach((line, i) => {
        ctx.fillText(line, W / 2, curY + 18 + i * 22);
      });
      curY += 18 + descLines.length * 22 + 24;

      // QR code + label
      if (qrImg) {
        const qrSize = 120;
        const qrX = (W - qrSize) / 2;
        ctx.drawImage(qrImg, qrX, curY, qrSize, qrSize);
        curY += qrSize + 12;
        ctx.fillStyle = '#97b59c';
        ctx.font = '13px sans-serif';
        ctx.fillText('扫码查看我的报告 & 测测你的牛逼人格', W / 2, curY);
      }

      // Footer
      ctx.fillStyle = '#b0bfb3';
      ctx.font = '12px sans-serif';
      ctx.fillText('测测你有多牛逼 → nbti.lovstudio.ai', W / 2, H - 24);

      // Download
      const link = document.createElement('a');
      link.download = `NBTI-${type.code}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };

    // Load QR code image
    const qrImg = new Image();
    qrImg.onload = () => {
      if (imageSrc) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => draw(img, qrImg);
        img.onerror = () => draw(null, qrImg);
        img.src = imageSrc;
      } else {
        draw(null, qrImg);
      }
    };
    qrImg.src = qrDataURL;
  }, [result, type, imageSrc]);

  const levelToPercent = (level) => ({ L: 20, M: 55, H: 92 }[level]);

  return (
    <section className="screen active">
      <div className="result-wrap card">
        <div className="result-layout">
          <div className="result-top">
            <div className={`poster-box${imageSrc ? '' : ' no-image'}`}>
              {imageSrc && (
                <img
                  className="poster-image"
                  src={imageSrc}
                  alt={`${type.code}（${type.cn}）`}
                />
              )}
              <div className="poster-caption">{type.intro}</div>
            </div>

            <div className="type-box">
              <div className="type-kicker">{result.modeKicker}</div>
              <div className="type-name">{type.code}（{type.cn}）</div>
              <div className="match">{result.badge}</div>
              <div className="type-subname">{result.sub}</div>
            </div>
          </div>

          <div className="analysis-box">
            <h3>你的牛逼解读</h3>
            <p>{type.desc}</p>
          </div>

          <div className="dim-box">
            <h3>十五维度扫描</h3>
            <div className="dim-list">
              {dimensionOrder.map(dim => {
                const level = result.levels[dim];
                return (
                  <div key={dim} className="dim-item">
                    <div className="dim-item-top">
                      <div className="dim-item-name">{dimensionMeta[dim].name}</div>
                      <div className="dim-item-score">{level} / {result.rawScores[dim]}分</div>
                    </div>
                    <div className="dim-bar-track">
                      <div className="dim-bar-fill" style={{ width: `${levelToPercent(level)}%` }} />
                    </div>
                    <p>{DIM_EXPLANATIONS[dim][level]}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="note-box">
            <h3>友情提示</h3>
            <p>
              {result.special
                ? '本测试纯属娱乐。隐藏人格和兜底人格都是算法的恶趣味，请勿当真。少喝酒，多喝水。'
                : '本测试纯属娱乐，别拿它当诊断、求职、相亲或人生规划依据。你可以笑，但别太当真。'}
            </p>
          </div>
        </div>

        <div className="result-actions">
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {result.shared ? (
              <button className="btn-primary" onClick={onRestart}>我也要测</button>
            ) : (
              <>
                <button className="btn-secondary" onClick={onRestart}>重新测试</button>
                <button className="btn-primary" onClick={generateShareCard}>生成分享卡片</button>
                <button className="btn-secondary" onClick={onHome}>回到首页</button>
              </>
            )}
          </div>
        </div>
      </div>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </section>
  );
}
