# next-chakra-ui

[![npm (tag)](https://img.shields.io/npm/v/next-chakra-ui/latest)](https://www.npmjs.com/package/next-chakra-ui)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/bjoluc/next-chakra-ui/build)](https://github.com/bjoluc/next-chakra-ui/actions)
[![codecov](https://codecov.io/gh/bjoluc/next-chakra-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/bjoluc/next-chakra-ui)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[Chakra UI](https://chakra-ui.com/) React components for [Next.js](https://nextjs.org/) (currently only link components)

## Motivation

In order for Chakra UI links to work in Next.js projects, they need to be wrapped in the [`next/link`](https://nextjs.org/docs/api-reference/next/link) component.
This package exports Chakra UI `Link` components that works as `next/link`s (so I don't ever copy-paste link components between projects again).
If you have ideas for other helpful (non-opinionated) components, feel free to contribute them!

## Installation

```
npm install next-chakra-ui
```

## Components

- [`Link`](main/src/Link.tsx): A Chakra UI [`Link`](https://chakra-ui.com/docs/components/link) component wrapped in a [`next/link`](https://nextjs.org/docs/api-reference/next/link)
- [`LinkButton`](main/src/LinkButton.tsx): A Chakra UI [`Button`](https://chakra-ui.com/docs/components/button) component wrapped in a [`next/link`](https://nextjs.org/docs/api-reference/next/link). It renders an HTML anchor element without composing Chakra UI's `Link`, so the button styling remains untouched.
- [`LinkIconButton`](main/src/LinkIconButton.tsx): A Chakra UI [`IconButton`](https://chakra-ui.com/docs/components/icon-button) component wrapped in a [`next/link`](https://nextjs.org/docs/api-reference/next/link). It renders an HTML anchor element without composing Chakra UI's `Link`, so the button styling remains untouched.
