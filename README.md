This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Important Packages and Commands

### Prisma

```bash
npm install prisma
npx prisma init --datasource-provider sqlite
npx prisma migrate dev

# Your package.json may need to the following build step
# "build": "prisma generate && next build",

```

### Other packages

```bash
# Monaco Editor package
npm install @monaco-editor/react


```

## Caching mechanisms

- Time-Based caching
  - E.g. Home page of a social
- On-Demand cachine
  - constantly updated list view, route validation like our /snippets route everytime some create/edit/delete the snippet update the page
- Disable caching
  - Whne we want users to see update the data all time

## NexUI

```bash
npm install@nextui-org/react framer-motion

https://github.com/settings/applications/new

```
