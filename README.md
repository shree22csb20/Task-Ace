# React + TypeScript + Vite

# This is the SD PROJECT

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fat Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

Here’s what you need to do now:
Stage the changed README file
Run:

git add README.md
(or if you changed other files too, just run git add . to stage everything.)

Commit the changes
Run:

git commit -m "Updated README with new sentence"
Push to GitHub
Run:

git push -u origin main
Summary:

Step Command
Stage files git add .
Commit git commit -m "your message"
Push git push origin main
✅ After doing these three steps, your updated README will definitely show up on GitHub.

What you should do:
Stage all changes (both M and U files):

bash
Copy
Edit
git add .
(the . means "add all changes in this folder.")

Commit them:

bash
Copy
Edit
git commit -m "Add new files and update existing ones"
Push to GitHub:

bash
Copy
Edit
git push origin main
✅ After this:

The U and M symbols will disappear.

Git will consider your working directory clean.

All updates will be visible on GitHub.

Important:
If there are files you don't want to push (like temporary files), you should add them to .gitignore before doing git add ..

Otherwise, Git will push everything that's staged.
