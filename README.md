# `Is WDS`

Check if a value is the string `"WDS"`, but with, as of 6/26/2025, every NPM package that contains the string `'is-wds'` in its package name and returns true if `"WDS"` is the input. (except for @thinkofvinoth/is-wds, which installed like 1000 packages from lerna, and a few other problematic packages)

## `Installation`
Install with your favorite package manager.
If it's NPM:
```bash
$ npm install @overkill/is-wds
```
If it's Yarn:
```bash
$ yarn add @overkill/is-wds
```

If it's--, wait, you probably know how to install a package. um, okay. MOVING On...

## `Usage`

just import it one of these ways:

```js

// CommonJS

var isWDS = require('@overkill/is-wds');
// or
var isWDS = require('@overkill/is-wds').default;
// or
var isWDS = require('@overkill/is-wds').isWDS;
// or
var { isWDS } = require('@overkill/is-wds');

// ESM

import isWDS from '@overkill/is-wds'
// or
import { isWDS } from '@overkill/is-wds'
```

then use it like this

```js
console.log(isWDS('WDS')) // true
console.log(isWDS('wds')) // false
console.log(isWDS('anything else')) // false
```

## Tests
To run tests, do a git clone and run npm test.

## contributing
contribute on the github repo
## license
mit licensed