# ⚡️ Next.js Starter Template

A scalable, maintainable, and modern Next.js starter with clear separation of concerns for UI primitives, shared logic, features, configuration, and styling.

Ideal for product teams and solo developers building full-featured, well-structured applications with ease and flexibility.

---

## ✨ Features

- ✅ App directory (Next.js 15.x)
- ✅ TypeScript, Tailwind CSS, and utility-first styling
- ✅ Flexible folder structure with clear boundaries
- ✅ Feature-first modularity
- ✅ Global design tokens and configuration
- ✅ Internationalization-ready
- ✅ Component-first development workflow
- ✅ MDX rendering support for documentation and content

---

## 🗂 Folder Structure

```
src/
├── app/                    # Next.js routing and layouts
│   └── (route segments)/
│
├── components/             # Reusable UI building blocks
│   ├── ui/                # Atomic elements (Button, Spinner, Toggle, etc.)
│   └── widgets/           # Composite blocks (Navbar, Footer, TeamGrid, etc.)
│
├── public/                # Static assets like images, favicons, or robots.txt
│
├── features/              # Domain-driven features
│   └── example-feature/
│       ├── components/    # Feature-specific UI (e.g. FeatureModal)
│       ├── actions/       # Server actions and API calls
│       ├── hooks/         # Local feature hooks
│       └── schemas/       # Zod validation schemas
│
├── shared/                # Global logic used across features
│   ├── hooks/             # Global hooks (e.g. useSession)
│   ├── types/             # Shared TypeScript types
│   └── ui/                # Cross-feature UI (e.g. UserAvatar)
│
├── lib/                   # Config, clients, and utilities
│   ├── api/               # API client setup and config
│   ├── database/          # Database client/server utils
│   └── utils.ts           # App-wide utility functions
│
├── data/                  # Static content and dictionaries
│   └── locales/           # Localization dictionaries (e.g. en.json, es.json)
│
├── constants/             # App-wide tokens and mappings
│   ├── tailwind.ts        # Tailwind spacing/class tokens (e.g. gap mappings)
│   ├── routes.ts          # Centralized route definitions
│   └── seo.ts             # Default meta and SEO config
│
├── config/                # Fonts, icons, theme config
│   ├── fonts.ts           # Font loading via next/font
│   └── icons.tsx          # Icon components or icon registry
│
├── providers/             # React context providers
│   └── theme-provider.tsx # Theme and other global providers
│
├── styles/                # Styling entry points
│   ├── globals.css        # Tailwind layers, base styles, resets
│   └── mdx.css            # Styles specifically for MDX content
│
└── middleware.ts          # Next.js middleware for auth, i18n, headers, etc.
```

---

## 📦 Component Placement Guidelines

**Widgets vs Features**: Widgets are UI composites reused across pages but not tied to a specific domain (e.g., Navbar, Footer). Features contain domain-specific logic and components.

| Component/Logic                 | Suggested Location                  |
| ------------------------------- | ----------------------------------- |
| **Theme Toggle Button**         | `components/ui/`                    |
| **Navbar / Footer**             | `components/widgets/`               |
| **Copy to Clipboard Button**    | `components/widgets/`               |
| **Reusable Loading Spinner**    | `components/ui/`                    |
| **Team Members Section**        | `components/widgets/`               |
| **User Avatar**                 | `shared/ui/`                        |
| **Contact Form**                | `features/contact/`                 |
| **Feature Modal & Button**      | `features/example-feature/`         |
| **Server Actions**              | `features/example-feature/actions/` |
| **Tailwind Class Maps**         | `constants/tailwind.ts`             |
| **Route Paths**                 | `constants/routes.ts`               |
| **Font Declarations**           | `config/fonts.ts`                   |
| **Icons Registry / Components** | `config/icons.tsx`                  |
| **Translation Config**          | `lib/i18n/`                         |
| **Dictionaries**                | `data/locales/`                     |

---

## 🌐 Localization

Organize all localization configuration and content like so:

- `lib/i18n/` → Localization setup and configuration
- `data/locales/` → JSON dictionaries per language (`en.json`, `es.json`, etc.)

---

## 🔧 Providers

The `providers/` directory contains React context providers that wrap your application:

- **Theme Provider** → Manages dark/light mode and theme switching
- **Auth Provider** → User authentication state management
- **Data Provider** → Global data fetching and caching
- **Feature Flags** → Feature toggle management

These providers should be added to your root layout to make their context available throughout the app.

```tsx
// app/layout.tsx
<ThemeProvider>
  <AuthProvider>{children}</AuthProvider>
</ThemeProvider>
```

---

## 📘 MDX Support

Custom MDX components should be defined in `components/mdx-components.tsx` and styled via `styles/mdx.css`. You can extend MDX syntax for callouts, code blocks, and other custom elements.

---

## ✅ Code Quality & Commit Conventions

This project enforces consistent and reliable code quality using:

- 🐶 **Husky** for Git hooks (`.husky/`)
- 🧹 **Lint-Staged** for fast pre-commit formatting (`.lint-staged.config.js`)
- 🎨 **Prettier** for consistent code style (`prettier.config.js`)
- 🧪 **ESLint** for static code analysis (`eslint.config.mjs`)
- 📝 **Commitlint** to enforce commit message standards (`commitlint.config.js`)

---

### 🧠 What Happens Automatically

| Git Hook     | Action                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------------- |
| `pre-commit` | Runs ESLint (with `--cache` and `--fix` for speed) and Prettier on staged files via `lint-staged` |
| `commit-msg` | Validates commit message against conventional commit rules via Commitlint                         |

You don’t need to run anything manually — just use `git commit`, and it’s all automated.

---

### ✍️ Commit Message Format

This project follows [**Conventional Commits**](https://www.conventionalcommits.org/) to standardize Git history and support automatic changelog generation.

#### ✅ Allowed Commit Types

| Type       | Description                                               |
| ---------- | --------------------------------------------------------- |
| `feat`     | A new feature                                             |
| `fix`      | A bug fix                                                 |
| `docs`     | Documentation-only changes                                |
| `style`    | Code style changes (formatting, missing semicolons, etc.) |
| `refactor` | Code changes that neither fix bugs nor add features       |
| `perf`     | Performance improvements                                  |
| `test`     | Adding or updating tests                                  |
| `build`    | Changes to build system or external dependencies          |
| `chore`    | Routine tasks such as dependency updates                  |
| `ci`       | Changes to CI/CD configuration or pipelines               |
| `revert`   | Reverts a previous commit                                 |

#### 🧪 Examples

````bash
git commit -m "feat: add dark mode toggle"
git commit -m "feat(navbar): add dark mode toggle"
git commit -m "fix: correct focus state on input field"
git commit -m "docs: update README usage section"
git commit -m "chore: bump dependencies"

## 🧪 Development

```bash
pnpm install
pnpm dev
````
