# AI Prompt Gear

Starlight-based documentation site for `aipromptgear.com`.

> 新增或更新任何公开内容前，请先阅读 [CONTENT_UPDATE_GUIDE.md](./CONTENT_UPDATE_GUIDE.md)。

## Focus

- Prompt workflows and reusable operator playbooks
- Model and API decision support
- Tooling, evaluation, and prompt operations

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

The production target is Cloudflare Workers Static Assets, configured by `wrangler.jsonc`:

```bash
npm run build
npm run cf:deploy
```

The deployed static asset directory is `dist`.
