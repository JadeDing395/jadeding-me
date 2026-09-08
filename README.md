# JadeDing 个人品牌主页

互动式个人品牌网站，技术栈为 Next.js + TypeScript + Tailwind CSS。内容统一维护在 `data/site.ts`。

## 运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

## 修改内容

- 文案、身份、链接、AI 项目：编辑 `data/site.ts`
- 个人照片或 AI 形象：把图片放到 `public/profile.jpg`，然后把 `data/site.ts` 里的 `portrait.src` 改成 `/profile.jpg`
