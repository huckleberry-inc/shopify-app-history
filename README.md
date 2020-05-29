# Welcome to @huckleberry-inc/shopify-app-history 👋
![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> React router hooks for Shopify app

### 🏠 [Homepage](https://github.com/huckleberry-inc/shopify-app-history)

## Usage

```ts
import { useShopifyHistory } from '@huckleberry-inc/shopify-app-history';
import createApp from '@shopify/app-bridge';

const app = createApp({
  apiKey: 'API key from Shopify Partner Dashboard',
  shopOrigin,
});

// React hooks
const to = useShopifyHistory(app);

// You can use it in React Component
const jump = () => { to("/another_page") }
```

Also, You can check [React router API docs](https://reacttraining.com/react-router/web/guides/quick-start).

## Install

```sh
yarn add @huckleberry-inc/shopify-app-history
```

## Author

👤 **Huckleberry, inc. <dev@huckleberry-inc.com>**


## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/huckleberry-inc/shopify-app-history/issues). 

## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_