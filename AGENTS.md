# Repository instructions

## 内容改动前置要求

任何新增、改写、合并或删除公开内容的任务，必须先完整阅读根目录的 [CONTENT_UPDATE_GUIDE.md](./CONTENT_UPDATE_GUIDE.md)，并按其中的选题、来源、日期、内部链接、构建和生产验收流程执行。

内容范围包括：

- `src/content/docs/**/*.mdx`
- `src/data/prompt-radar.ts`
- `src/data/prompt-library.ts`
- `src/data/image-prompt-patterns.ts`
- 与内容直接相关的 hub、搜索预览图、metadata、redirect 和 sitemap 配置

## 不可绕过的约束

- 优先刷新已有 URL，禁止创建搜索意图重复的近义页面。
- 不随意改已上线 slug；如确需迁移，必须增加永久重定向并更新全部内部链接。
- 模型、API、价格、限制、产品功能和供应商比较必须使用当日核验的一手来源。
- `datePublished` 不因刷新而改变；`lastReviewed` 只在完成实质事实复核后更新。
- 不伪造测试、经验、案例、排名、实时热度或产品能力。
- 不削弱 `scripts/search-quality-audit.mjs` 等质量检查来让内容通过。
- 不把每篇新内容加入顶级 sidebar；使用现有 hub 和内容集群。
- 不手改 `dist/` 或 `dist/pagefind/`。
- 本地 `HANDOFF.md` 可能是用户未跟踪文件；除非用户明确要求，否则不要修改、暂存或提交。

## 最低验证

```powershell
npm run audit:search-quality
npm run audit:content-value
npm run build
npm run audit:html-value
npx wrangler deploy --dry-run
git diff --check
```

部署和生产验收必须继续执行 `CONTENT_UPDATE_GUIDE.md` 中的完整清单。
