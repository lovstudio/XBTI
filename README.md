<p align="center">
  <img src="docs/images/cover.png" alt="NBTI Cover" width="100%">
</p>

<h1 align="center">NBTI 牛逼人格测试</h1>

<p align="center">
  <strong>测测你有多牛逼？20 种牛逼人格，等你来认领。</strong><br>
  <sub>30 道题 · 15 维度扫描 · 一键生成分享卡片 · 扫码即测</sub>
</p>

<p align="center">
  <a href="https://nbti.lovstudio.ai">nbti.lovstudio.ai</a> &middot;
  <a href="https://sbti.lovstudio.ai">姊妹项目 SBTI</a> &middot;
  <a href="https://space.bilibili.com/417038183">原作者 B站@蛆肉儿串儿</a>
</p>

---

## 什么是 NBTI？

NBTI 是 [SBTI 人格测试](https://sbti.lovstudio.ai) 的牛逼分支版本 —— 同一套 15 维度评分引擎，全新的 20 种牛逼人格类型。

> CEO（霸总）、GOAT（史诗级）、SIGMA（独狼）、NINJA（影忍）、BEAST（野兽）、PHOENIX（凤凰）、KING（帝王）、GENIUS（鬼才）、DRAMA（戏精）、CHILL（佛系）……

外加隐藏人格 **DRUNK-NB（醉仙）** 和兜底人格 **NB404（系统无法定义你的牛逼）**。

## 特色

- **30 道题逐题滑动** — 沉浸式答题体验，一题一屏
- **15 维度评分** — 自信膨胀度、野心驱动力、社交统治力等
- **反转题目设计** — 确保维度间分数有差异，结果更精准
- **分析过渡动画** — 答完后有"扫描牛逼基因序列"等趣味等待动画
- **分享卡片** — 包含人物形象、人格描述、QR 码（2x 高清）
- **扫码即看** — 分享链接编码在 URL hash 中，扫码查看报告 + 一键开测
- **隐藏人格** — 特定选项触发「醉仙」隐藏结局
- **22 张角色插画** — 低多边形风格，每种人格独立形象

## 技术栈

| 层 | 技术 |
|---|------|
| 框架 | React 19 + Vite 8 |
| 运行时 | Bun |
| 分享 | QR 码生成 + URL hash 编码 |
| 部署 | Vercel + Cloudflare DNS |
| 分支 | `nbti` (NBTI), `main` (SBTI 原版) |

## 本地开发

```bash
git checkout nbti
bun install
bun dev
```

构建：

```bash
bun run build
```

## 算法简介

1. 每道题对应一个维度（S1-S3、E1-E3、A1-A3、Ac1-Ac3、So1-So3）
2. 交替反转选项分值，确保维度间产生差异
3. 同维度得分求和，映射为 L（≤3）/ M（4）/ H（≥5）
4. 将用户 15 维向量与 20 种标准人格的模式向量做**曼哈顿距离**匹配
5. 距离最小者为匹配人格，相似度 = `(1 - distance/30) * 100%`
6. 酒鬼触发 → DRUNK-NB；匹配度 < 60% → NB404 兜底

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=lovstudio/SBTI&type=Date)](https://star-history.com/#lovstudio/SBTI&Date)

## License

Apache-2.0 &mdash; 原创内容版权归 [B站@蛆肉儿串儿](https://space.bilibili.com/417038183)，代码部分由 [lovstudio.ai](https://lovstudio.ai) 维护
