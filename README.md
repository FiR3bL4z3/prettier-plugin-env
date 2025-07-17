# 📦 prettier-plugin-env

> A Prettier plugin for formatting environment variable files (`.env`), ensuring consistent quoting, alignment, and comments.

[![npm version](https://img.shields.io/npm/v/prettier-plugin-env.svg)](https://www.npmjs.com/package/prettier-plugin-env)
[![install size](https://img.shields.io/bundlephobia/minzip/prettier-plugin-env)](https://bundlephobia.com/package/prettier-plugin-env)
[![license](https://img.shields.io/npm/l/prettier-plugin-env)](LICENSE)

---

## 💡 Why use this?

- Auto‑formats `.env` files with Prettier.
- Aligns `KEY=VALUE` pairs neatly.
- Consistently quotes values when needed.
- Preserves comments and blank lines.
- Helps maintain clean, version-controlled env files.

---

## 🚀 Install

```bash
npm install --save-dev prettier prettier-plugin-env
# or
yarn add --dev prettier prettier-plugin-env
```

---

## ⚙️ Usage

Add the plugin in your Prettier config (e.g., `.prettierrc`, `prettier.config.js`):

```jsonc
{
  "plugins": ["prettier-plugin-env"],
  "overrides": [
    {
      "files": ".env",
      "options": {
        "parser": "env",
      },
    },
  ],
}
```

Or via CLI:

```bash
npx prettier --write .env
```

---

## 🔧 Options

You can configure behavior through plugin-specific settings:

| Option           | Type                   | Default  | Description                                       |
| ---------------- | ---------------------- | -------- | ------------------------------------------------- |
| `align`          | `boolean`              | `true`   | If `true`, aligns `=` signs in key/value pairs.   |
| `quoteValues`    | `"always"` \| `"auto"` | `"auto"` | Whether to quote values—only if needed or always. |
| `endWithNewline` | `boolean`              | `true`   | Ensures file ends with newline.                   |

Example `.prettierrc.js`:

```js
module.exports = {
  plugins: ["prettier-plugin-env"],
  env: {
    align: true,
    quoteValues: "always",
    endWithNewline: true,
  },
};
```

---

## 🛡️ Compatibility

Works with Prettier v3.x and above. No additional peer dependencies required.

---

## 🔄 Integrate in CI

To ensure consistent formatting in CI workflows (GitHub Actions, GitLab CI, etc.):

```yaml
- run: npm install --save-dev prettier prettier-plugin-env
- run: npx prettier --check .env
```

---

## 🧪 Testing

Tests use Jest. Run:

```bash
npm test
```

Ensure your test suite covers key formatting scenarios—quotes, alignment, comments preservation, edge cases.

---

## 📖 Examples

**Before `.env`**

```env
DB_HOST=localhost
DB_PORT=5432
API_KEY=abc123 DEF
# Comment line
SOME_FLAG=true
```

**After formatting**

```env
DB_HOST    = "localhost"
DB_PORT    = 5432
API_KEY    = "abc123 DEF"
# Comment line
SOME_FLAG = true
```

---

## 🎯 Contributing

Contributions are welcome! 🙌

1. Fork the repo.
2. Create a branch: `git checkout -b feat/my-improvement`
3. Add tests & documentation.
4. Submit a PR — please follow Conventional Commits and version with SemVer.

---

## 📜 Release & Versioning

We follow **Semantic Versioning (semver)**: `MAJOR.MINOR.PATCH`

- 🐛 `PATCH` – Backward‑compatible bug fixes
- ✨ `MINOR` – New formatting or options
- ⚠️ `MAJOR` – Breaking changes (e.g., config API update)

---

## ✅ License

MIT © [Your Name](https://github.com/yourusername)

---

## 🔗 Links

- [npm package](https://www.npmjs.com/package/prettier-plugin-env)
- [Changelog](CHANGELOG.md)
- [Issues](https://github.com/yourusername/prettier-plugin-env/issues)

---

## 🧩 Related

- [Prettier Plugins – official docs](https://prettier.io/docs/plugins)
