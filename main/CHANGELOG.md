# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.1](https://github.com/bjoluc/next-chakra-ui/compare/v2.0.0...v2.0.1) (2022-11-29)


### Bug Fixes

* Remove `"type": "module"` flag from `package.json` ([33d4d23](https://github.com/bjoluc/next-chakra-ui/commit/33d4d237202c466efad2a8f14be9eed29ae971e8))

## [2.0.0](https://github.com/bjoluc/next-chakra-ui/compare/v1.0.0...v2.0.0) (2022-11-29)


### ⚠ BREAKING CHANGES

* The `as` prop of `Link` and `LinkButton` is now passed to `next/link` instead of the composed ChakraUI components.

### Bug Fixes

* Prevent nested `a` tags on Next.js v13 and support the `as` prop of `next/link` ([06ef9ca](https://github.com/bjoluc/next-chakra-ui/commit/06ef9caca9dd4f5ed04a67608c732bbd7f6cce50))
