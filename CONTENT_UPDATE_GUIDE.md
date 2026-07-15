# AI Prompt Gear 内容更新执行指南

本指南适用于 `aipromptgear.com` 的新内容、旧内容刷新、Prompt Radar、Prompt Library 和 Image Prompt Patterns。任何内容改动都应先读本文件，再查看同目录下最接近的现有页面；不要把通用 SEO 模板直接套进项目。

## 1. 先判断是更新旧页，还是创建新页

内容入口主要有四类：

- 长篇参考内容：`src/content/docs/**/*.mdx`
- Prompt Radar：`src/data/prompt-radar.ts`
- Prompt Library：`src/data/prompt-library.ts`
- Image Prompt Patterns：`src/data/image-prompt-patterns.ts`

默认优先更新已有 URL。只有在问题、读者、决策阶段和答案结构都明显不同，并且现有页面无法完整承接时，才创建新页。

选题前至少做以下检查：

```powershell
rg -n -i "目标主题|同义词|产品名|模型名" src/content/docs src/data
rg -n "primaryKeyword:|problemSolved:|readerTakeaway:|canonicalCluster:" src/content/docs
```

使用 GSC 时，按“查询词 + 落地页”判断，而不是只看总点击：

1. 比较最近 28 天与前 28 天，必要时再看最近 3 个月与去年同期。
2. 记录相关查询的 impressions、clicks、CTR、average position，以及实际承接 URL。
3. 同一查询已有稳定展示页时，优先刷新该页；不要再造一个近义标题竞争。
4. 展示增长但 CTR 低：先检查标题、描述和答案是否匹配意图。
5. 排名或点击下降：先排除品牌词变化、季节性、SERP 变化和产品版本变化，再修改内容。
6. GSC 没有证据的新主题，必须由官方发布、明确用户任务或真实决策缺口支持；不能只因为关键词工具给出流量估算就发布。

GSC 导出和未公开业务数据不要放进 `src/content/docs/`。在工作记录或提交说明中保留：取数日期、时间窗口、查询、原落地页、采取“刷新/合并/新建”的原因。

## 2. 搜索意图与重复页防控

一页只解决一个清晰的专业决策。写作前先写出：

- 目标角色是谁；
- 他正在比较、选择、设计、部署还是运营什么；
- 页面要帮助其做出什么决定；
- 哪些情况不适用；
- 什么变化会触发下次复核。

AI Prompt Gear 不是新闻搬运站。热点应转化为长期有用的决策指南、比较框架、部署清单、评估方法或运行手册。不要创建只有产品名、版本名或相近问法不同的薄页。

发现两个页面意图重叠时：

1. 保留已有展示、外链、内部链接或内容更完整的 URL。
2. 把独有且有用的部分合并进保留页。
3. 更新所有内部链接。
4. 如确需删除或移动旧 URL，在 `public/_redirects` 增加到最终 HTTPS 规范 URL 的永久重定向。
5. 构建后确认旧 URL 不再进入 sitemap，新 URL 只有一个 canonical。

## 3. URL、canonical 与日期规则

`src/content/docs/` 下的文件路径直接决定路由：

- `src/content/docs/workflows/index.mdx` → `/workflows/`
- `src/content/docs/workflows/example.mdx` → `/workflows/example/`

项目由 `astro.config.mjs` 统一启用尾斜杠，canonical 由 `src/utils/seo.mjs` 和 `src/components/Head.astro` 自动生成。

- 已上线 slug 不因标题优化而改名。
- 内部链接直接写最终尾斜杠路径，例如 `/evaluation/example/`。
- 不手写第二套 canonical 或 JSON-LD。
- `datePublished` 是首次发布日，刷新旧页时不得改成今天。
- `lastReviewed` 只在完成事实核验并有实质更新时修改；修正标点、格式或链接不算实质复核。
- `market-signal` 页面必须保留真实时间边界；过期时更新、归档或合并，不能靠改日期伪装新鲜。

## 4. MDX frontmatter 与正文最低要求

新增普通参考页时，从同一内容集群中复制最接近的现有页面，再修改。不要删减 `scripts/search-quality-audit.mjs` 强制的字段。

```yaml
---
title: Clear decision-focused title
description: A specific description of the decision, boundary, and useful output.
referenceType: workflow
adProfile: workflow
commercialIntent: medium
reviewCadence: Quarterly review
primaryKeyword: one natural primary query
searchIntent: design
decisionStage: solution-aware
targetRoles:
  - AI product leads
  - Engineering managers
contentStatus: growing
problemSolved: A specific statement of the problem this page resolves for the named reader.
readerTakeaway: A specific statement of what the reader can decide or implement after reading.
keyQuestions:
  - First real decision question
  - Second real decision question
notFor:
  - A clearly excluded reader or use case
updateTriggers:
  - Official product or API behavior changes
  - New operational evidence changes the recommendation
authorKey: editorial-desk
editorKey: review-desk
datePublished: YYYY-MM-DD
lastReviewed: YYYY-MM-DD
contentCluster: workflows
canonicalCluster: workflows
pageType: workflow
lifecycle: evergreen
refreshPriority: medium
---
```

字段值必须符合 `src/content.config.ts` 的枚举。不要为通过校验随意扩展枚举；先选择真实匹配的现有类型。正文至少应包含：

- 开头直接回答，而不是大段行业背景；
- 决策标准、边界、失败模式和不适用情况；
- 能落地的表格、检查表、评分方法或步骤；
- 至少一个明确的下一步；
- 指向上级 hub、同级补充页和下游实施页的上下文链接；
- 对时效性事实的来源和核验日期。

`npm run audit:content-value` 会重点检查正文深度、H2、决策表、内部链接、`keyQuestions`、`notFor`、`updateTriggers`、`problemSolved` 和 `readerTakeaway`。不要用重复文字凑分。

## 5. E-E-A-T、来源与时效性内容

涉及模型、API、Codex、代理框架、价格、限制、安全策略、产品功能和供应商比较时，必须在写作当天重新查看来源。

来源优先级：

1. 官方文档、API reference、release notes、pricing、status 或安全说明；
2. 标准组织、原始研究论文、官方仓库和一手数据；
3. 有方法说明的可信二手分析，仅用于补充观点；
4. 社区帖子只能作为线索或案例，不能单独支撑关键结论。

执行规则：

- 写清适用产品、模型/API 版本以及“核验于 YYYY-MM-DD”。
- 价格、限额、可用地区、套餐和功能状态不能凭记忆填写。
- 比较页使用同一核验日期和同一比较维度，不把营销说法当测量结果。
- 无法核验的能力写成待确认项，不要推断为事实。
- 引用应链接到直接支持该句的页面，避免只链接供应商首页。
- 不长篇复制官方文档或他人 prompt；应总结、测试、重构并注明来源。
- 不伪造作者经验、测试数据、客户案例、转化效果或“我们实测”。只有保存了方法与结果的真实测试才能这样表述。

## 6. Prompt、工具和市场信号的专门规则

### Prompt Radar

编辑 `src/data/prompt-radar.ts` 时必须同步核对：

- `promptRadarLastUpdated` 与本轮实际复核日；
- 每条的 `updatedAt`、`model`、`sourceLabel`、`sourceUrl`；
- prompt 是否为原创改写，而非复制来源；
- `qualityChecks` 和 `failureModes` 是否能实际验证；
- `relatedLinks` 是否指向最终尾斜杠路径。

排名和 `heat` 是编辑判断，不得暗示为实时、全网或统计学排名，除非确有公开方法和数据。

### Prompt Library

编辑 `src/data/prompt-library.ts` 时保留 `sourceLabel` 和直接 `sourceUrl`。每个模板应有明确输入、允许动作、输出格式、失败边界和人工复核点。模型专属语法必须标注适用版本和核验日。

### Image Prompt Patterns

编辑 `src/data/image-prompt-patterns.ts` 时检查分类、slug、来源、图片比例、质量检查、失败模式和关联链接。不要用名人、品牌或社区作品制造未经授权的背书，也不要逐字搬运创作者 prompt。

## 7. Hub、内部链接与导航

长篇 MDX 新增后至少完成以下接线：

1. 从所属 hub 的 `src/content/docs/<cluster>/index.mdx` 链接到新页。
2. 从新页链接回所属 hub。
3. 从 1–3 个真正相关的现有页面加入上下文链接。
4. 必要时更新 `src/content/docs/clusters/*.mdx` 的跨集群路径。
5. 不要把每篇文章都塞进 `astro.config.mjs` 的顶级 sidebar；大型集合由 hub 承接。

链接锚文本应说明下一页能解决什么，不使用大量相同的精确关键词。

## 8. 搜索预览图、图片 sitemap 与 Pagefind

搜索预览图由以下文件共同管理：

- 生成脚本：`scripts/generate-search-preview-images.mjs`
- 产物：`public/search-previews/*-{16x9,4x3,1x1}.webp`
- 映射：`src/utils/site-meta.mjs`
- 选择逻辑：`src/utils/search-preview-images.mjs`
- 图片 sitemap：`src/pages/image-sitemap.xml.ts`

普通页面会按路由首段、`canonicalCluster`、`contentCluster` 或 `searchPreview.key` 复用现有图片组。只有新视觉确实带来信息差异时才增加图片组；不要为每篇文章批量生成近似图。

如新增或修改预览图：

```powershell
npm run assets:search-previews
git diff -- public/search-previews src/utils/site-meta.mjs
```

如在 frontmatter 指定图片，优先提供完整的 16:9、4:3、1:1 三种尺寸和准确 `alt`。构建后确认页面 OG 图、JSON-LD `ImageObject` 与 `image-sitemap.xml` 使用同一组真实存在的资源。

Starlight 构建时生成 Pagefind 索引。新增内容上线前确认：

```powershell
rg --files dist/pagefind | Select-Object -First 20
npm run preview -- --host 127.0.0.1 --port 4321
```

然后在本地站点的 Pagefind 搜索界面中，用新页面标题或独特术语实际搜索并打开结果。不要用 `rg` 搜 Pagefind 分片代替搜索测试；分片格式不是稳定的明文接口。不要手改 `dist/pagefind/`；它是构建产物。

## 9. 本地检查与上线

内容改动的固定顺序：

```powershell
npm run audit:search-quality
npm run audit:content-value
npm run build
npm run audit:html-value
npx wrangler deploy --dry-run
git diff --check
git status --short
```

说明：

- `npm run build` 已执行 `astro check`、静态构建和 Pagefind。
- `audit:search-quality` 与 `audit:html-value` 是发布阻断项。
- `audit:content-value` 是质量诊断；不能忽略与本次页面有关的弱项。
- 不要为了让审计通过而降低阈值或修改审计脚本。
- 只提交本次需要的文件；本地 `HANDOFF.md` 可能是用户未跟踪文件，不得编辑、暂存或提交，除非用户明确要求。

部署目标由根目录 `wrangler.jsonc` 定义，为 Cloudflare Workers Static Assets，目录是 `dist`。正常上线流程：

```powershell
git add <本次明确修改的文件>
git commit -m "Update <topic> content"
git push origin main
npm run cf:deploy
```

如果仓库之后改成 Git 集成自动部署，必须先确认当前唯一部署链路，避免一次提交触发两次不同配置的部署。上线后再运行 `npm run indexnow`，也只应由明确负责发布的人执行。

## 10. 生产验收

至少检查本次页面、所属 hub、首页和 sitemap：

```powershell
curl.exe -I https://aipromptgear.com/<changed-path>/
curl.exe -I https://aipromptgear.com/<hub>/
curl.exe -I https://aipromptgear.com/sitemap-index.xml
curl.exe -I https://aipromptgear.com/image-sitemap.xml
```

验收标准：

- 新页面和 hub 返回 `200`，旧 URL 如有迁移只经过一次永久重定向。
- canonical 是 `https://aipromptgear.com/.../`，没有重复 canonical。
- title、description、H1、OG 图片和正文与本次意图一致。
- JSON-LD 日期、作者、编辑者、图片和 breadcrumb 与页面一致。
- `sitemap-index.xml` 和 `image-sitemap.xml` 包含正确 URL；noindex 政策页不被误放入普通 sitemap。
- 页面能在站内 Pagefind 中用标题或独特术语搜到。
- 内部链接无 404，移动端表格、代码块和图片不溢出。
- GSC 只提交规范 URL；不要请求索引参数 URL、重定向 URL或重复页。

上线后记录部署版本和提交号。7–14 天后查看 GSC 的新查询匹配、展示与索引状态；重大改版应再比较 28 天窗口。短期波动不是继续改标题或新建近义页的理由。
