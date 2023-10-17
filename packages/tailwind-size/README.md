# @mskelton/tailwind-size

[Tailwind](https://tailwindcss.com) plugin to set width/height identically.

## Installation

Install the plugin with your preferred package manager:

**npm**

```bash
npm install -D @mskelton/tailwind-size
```

**pnpm**

```bash
pnpm install -D @mskelton/tailwind-size
```

**Yarn**

```bash
yarn add -D @mskelton/tailwind-size
```

Then add the plugin to your `tailwind.config.js` file:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require("@mskelton/tailwind-size"),
    // ...
  ],
};
```

## Basic usage

```html
<p class="s-10">This element has the same width and height</p>
```
