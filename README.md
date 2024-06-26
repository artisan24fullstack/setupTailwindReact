> How to Setup Tailwind CSS in React JS with VS Code

> Managing duplication and creating reusable abstractions.
- https://tailwindcss.com/docs/reusing-styles

> Creating a Custom Theme System With TailwindCSS
- https://www.locofy.ai/blog/create-a-custom-theme-with-tailwindcss

> A simple theme switcher in React for Tailwind CSS
- https://dev.to/danhawkins/a-simple-theme-switcher-in-react-for-tailwind-css-1349

> Configure design system in Tailwind
https://github.com/rodriguez-gaston/tailwind-design-system

> generator https://tailwind-generator.com/

> Building a “utility-first” design system
- https://uxdesign.cc/building-utility-first-design-systems-part-1-52ce020630b

> https://tailwindcomponents.com/


> Official plugins
https://tailwindcss.com/docs/plugins#official-plugins

--------------------------------------------------------------
1) Prerequisites Node.js and npm:

2) Step 1: Create a New React Application Using Vite
```
npx create-vite your-project-name --template react
ou
npx create-vite ./  --template react
Ok to proceed? (y) y
✔ Current directory is not empty. Please choose how to proceed: › Ignore files and continue
✔ Package name: … setuptailwindreact
```
3) npm install and npm run dev

4) install Tailwind CSS 

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- Install tailwindcss and its peer dependencies, 
- Then generate your tailwind.config.js and postcss.config.js files.

5) Configure your template paths

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
- Add the paths to all of your template files in your tailwind.config.js file.

6) Add the Tailwind directives to your CSS

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

7) Start your build process and using Tailwind in your project


```
npm run dev
and change in app
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

8) Official plugins
- Plugins can be added to your project by installing them via npm, then adding them to your tailwind.config.js file:


```
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ]
}
```


> npm install -D @tailwindcss/typography
- https://github.com/tailwindlabs/tailwindcss-typography?tab=readme-ov-file
- https://tailwindcss-typography.vercel.app/
- The official Tailwind CSS Typography plugin provides a set of prose classes you can use to add beautiful typographic defaults to any vanilla HTML you don’t control, like HTML rendered from Markdown, or pulled from a CMS.

> npm install -D @tailwindcss/forms
- https://github.com/tailwindlabs/tailwindcss-forms
- https://tailwindcss-forms.vercel.app/
- A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities.

