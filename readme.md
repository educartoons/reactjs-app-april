## Install a ReactJS project using npm

```
npm create vite@latest
```

and now we need to install the dependencies using pnpm

```
pnpm install
```

For styling rules we need to install to our VSCODE the next extensions

- [x] Prettier - Code formatter
- [x] ESLint

Now we need to create in our root folder the next file **.prettierrc**

### For CSS styling we are going to use tailwindCSS

```
pnpm add -D tailwindcss postcss autoprefixer
```

and run the next command line

```
npx tailwindcss init
```

and install the next extensions to VSCODE

- [x] Tailwind CSS IntelliSense

## We need to create a **postcss.config.js** file

```
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
```
