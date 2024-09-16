This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

npm i '../nextjs/compounds-main/packages/chemuix'

https://github.com/ionic-team/stencil/issues/1574

Install the Stencil package:

If you published the package to npm:

bash
Copy code
npm install your-stencil-package-name
If you used npm link, the package is already available in your node_modules.

Import the Stencil components in Next.js:

In your Next.js project, open your \_app.js or \_app.tsx and import the Stencil components loader to initialize the custom elements:

tsx
Copy code
import { useEffect } from 'react';
import { defineCustomElements } from 'your-stencil-package-name/loader';

function MyApp({ Component, pageProps }) {
useEffect(() => {
defineCustomElements(window); // This defines the custom elements globally
}, []);

return <Component {...pageProps} />;
}

export default MyApp;
This step ensures that your Stencil components are registered as custom elements with the browser.

Use Stencil components in Next.js pages:

Now you can use the Stencil components directly in your JSX files as if they were native HTML elements:

tsx
Copy code
export default function Home() {
return (

<div>
<h1>Hello from Next.js with Stencil Component</h1>
<my-component some-prop="Hello World"></my-component> {/_ Use the Stencil component _/}
</div>
);
}
Step 4: Handle TypeScript Support (Optional)
If you’re using TypeScript in your Next.js project and want to avoid warnings related to Stencil components:

Create a custom-elements.d.ts file:

In the root of your Next.js project, create a custom-elements.d.ts file to declare the custom Stencil components:

ts
Copy code
declare module 'your-stencil-package-name';
declare namespace JSX {
interface IntrinsicElements {
'my-component': any; // Declare your Stencil component here
}
}
Ensure tsconfig.json includes your declaration file:

json
Copy code
{
"include": [
"src", // Include your source directory
"custom-elements.d.ts" // Include the custom elements declaration
]
}
Step 5: Test Your Application

what worked:
clone
change pathway file to older one
build only chemuix
npm i path to chemuix
app.js loader and useffect and then pathway
