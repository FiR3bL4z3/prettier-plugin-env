# 📦 prettier-plugin-env

> A Prettier plugin for formatting environment variable files (`.env`), ensuring consistent quoting, alignment, and comments.

[![npm version](https://img.shields.io/npm/v/prettier-plugin-env.svg)](https://www.npmjs.com/package/prettier-plugin-env)
[![install size](https://img.shields.io/bundlephobia/minzip/prettier-plugin-env)](https://bundlephobia.com/package/prettier-plugin-env)
[![license](https://img.shields.io/npm/l/prettier-plugin-env)](LICENSE)

---

## 💡 Why use this?

- Auto‑formats `.env` files with Prettier.
- Auto orders key in alphabetical order.
- Aligns `KEY=VALUE` pairs neatly.
- Consistently quotes values when necessary.
- Preserves comments and blank lines.
- Helps maintain clean, version-controlled env files.

---

## 🚀 Install

```bash
npm install --save-dev prettier prettier-plugin-env
# or
yarn add --dev prettier prettier-plugin-env
# or
pnpm add --save-dev prettier prettier-plugin-env
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

## 🧪 Testing

Tests use Vitest. Run:

```bash
npm test
```

Ensure your test suite covers key formatting scenarios—quotes, alignment, comments preservation, edge cases.

---

## 📖 Examples

**Before `.env`**

```env
B=BB
# Comment for A
AAAAA=AA
# Comment for C
# Another comment for C
C=CC
# Comment for E
EE=EE

# Comment for D
DDD=DD
# Random trailing comment
```

**After formatting**

```env
# Comment for A
AAAAA = AA
B     = BB
# Comment for C
# Another comment for C
C     = CC

# Comment for D
DDD   = DD
# Comment for E
EE    = EE
# Random trailing comment
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

MIT © [Balázs Horváth](https://github.com/FiR3bL4z3)

---

## 🔗 Links

- [npm package](https://www.npmjs.com/package/prettier-plugin-env)
- [Changelog](CHANGELOG.md)
- [Issues](https://github.com/FiR3bL4z3/prettier-plugin-env/issues)

---

## 🧩 Related

- [Prettier Plugins – official docs](https://prettier.io/docs/plugins)
