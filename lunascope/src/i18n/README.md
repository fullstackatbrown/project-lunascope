# Translation Module for Lunascope

This module provides a modular, flexible translation system for the Lunascope application. It supports multiple languages and namespaces, with a simple API for adding translations and using them in components.

## Structure

```
src/i18n/
├── components/             # Translation-related components
│   └── LanguageButton.tsx  # Language switching button
├── locales/                # Translation files
│   ├── en/                 # English translations
│   │   ├── common.json     # Common translations
│   │   └── home.json       # Home page translations
│   └── es/                 # Spanish translations
│       ├── common.json     # Common translations
│       └── home.json       # Home page translations
├── config.ts               # Configuration settings
├── context.tsx             # Translation context
├── hooks.ts                # Custom hooks for using translations
├── provider.tsx            # Translation provider component
└── utils.ts                # Utility functions
```

## Usage

### Basic Usage

1. Wrap your application with the `TranslationProvider` in your root layout:

```tsx
// src/app/layout.tsx
import { TranslationProvider } from "../i18n/provider";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <TranslationProvider>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
```

2. Add the `LanguageButton` component where you want the language switcher to appear:

```tsx
import { LanguageButton } from "../i18n/components/LanguageButton";

export default function SomePage() {
  return (
    <div>
      <div className="absolute top-4 right-4">
        <LanguageButton />
      </div>
      {/* Rest of your page */}
    </div>
  );
}
```

3. Use the `useTranslation` hook to translate text in your components:

```tsx
'use client';

import { useTranslation } from "../i18n/hooks";

export default function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('home:welcome')}</h1>
      <p>{t('common:buttons.submit')}</p>
    </div>
  );
}
```

### Translation Keys

Translation keys follow the format `namespace:key`, where:
- `namespace` is the name of the translation file (e.g., `common`, `home`)
- `key` is the key within that file, which can be nested (e.g., `buttons.submit`)

If no namespace is provided, `common` is used as the default.

### Namespace-Specific Hook

For components that primarily use translations from a specific namespace, you can use the `useNamespaceTranslation` hook:

```tsx
'use client';

import { useNamespaceTranslation } from "../i18n/hooks";

export default function HomeComponent() {
  // Use the 'home' namespace by default
  const { t } = useNamespaceTranslation('home');
  
  return (
    <div>
      <h1>{t('welcome')}</h1> {/* No need for 'home:' prefix */}
      <button>{t('common:buttons.submit')}</button> {/* Can still use other namespaces */}
    </div>
  );
}
```

## Adding New Languages

To add a new language:

1. Add the language code to `supportedLanguages` in `config.ts`:

```ts
export const supportedLanguages = ['en', 'es', 'fr']; // Added 'fr' for French
```

2. Add the language name to `languageNames` in `config.ts`:

```ts
export const languageNames = {
  en: 'English',
  es: 'Español',
  fr: 'Français', // Added French
};
```

3. Create translation files for the new language:

```
src/i18n/locales/fr/
├── common.json
└── home.json
```

## Adding New Namespaces

To add a new namespace:

1. Add the namespace to `namespaces` in `config.ts`:

```ts
export const namespaces = ['common', 'home', 'about']; // Added 'about'
```

2. Create translation files for the new namespace in each language:

```
src/i18n/locales/en/about.json
src/i18n/locales/es/about.json
```

## Translation with Variables

You can include variables in your translations:

1. In your translation file:

```json
{
  "greeting": "Hello, {{name}}!",
  "items": "You have {{count}} items in your cart"
}
```

2. In your component:

```tsx
const { t } = useTranslation();

return (
  <div>
    <p>{t('common:greeting', { name: 'John' })}</p> {/* "Hello, John!" */}
    <p>{t('common:items', { count: 5 })}</p> {/* "You have 5 items in your cart" */}
  </div>
);
```

## Language Persistence

The user's language preference is stored in `localStorage` and will be remembered across page refreshes and visits.
