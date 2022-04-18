# Tree shaking

- Prior to ES6, module system was dynamic. i.e. We could conditionally import and export code.

```node
// Conditional import
var foo;
if (Math.random()) {
  foo = require('bar');
} else {
  foo = require('baz');
}

// Conditional export
if (Math.random()) {
  exports.bar = 2;
} else {
  exports.bar = 3;
}
```

- It is impossible to predict the import/export values of the variables in the modules without running the code.
- ES6 introduced new module system which was static. Meaning we could look at the import/export statements in the code and decide the values.
- This opened up tremendous possibilities for module bundlers in terms of making many judgements about the code and perform optimizations ahead of time.
- Tree shaking or dead-code elimination is one of such optimization a module bundler can apply if the code is written using ES6 module system.

## `Dead code vs Live code`

_Webpack treats following as live code_

- Importing a module and assigning it to an object and using that object

```node
import Math from './math';

Math.add(1, 2);
```

- Importing a third party package (even when it is not used) which does not follow the es modules system

```node
import 'lodash';
```

_Webpack treats following as dead code_

- importing a local module (A module which is created in the same codebase, es or any other) and not using it.

```node
import './my-local-module';
```

- importing a third party module which follows es module system and not using it.

```node
import 'loadsh-es';
import {join} 'loadsh-es';
import * as _'loadsh-es';
```

## `Side Effects`

Sometimes, webpack can flag some code as _dead_ code, but it might be needed somewhere else in a convoluted(re-exports) way.

Eliminating such code might have an adverse effect on the application. Such files are called as **side effects**.
By default, webpack considers all files as side effects and thus skips Tree shaking process altogether.

It is our responsibility to give webpack a list files which actually contain side effects.

This information can be provided by the **sideEffects** field in the package.json

This creates an issue with CSS imports

```node
import './style.css';
```

If we set sideEffects to false in package.json, this stylesheet entry is removed from the final bundle by webpack as it is considered _dead_ code.

There is another way to hint webpack about the side effets.

```node
module: {
  rules: [
    {
      test: /\.css$/i,
      use: [],
      sideEffects: true,
    },
  ];
}
```

Each rule in the config file accepts sideEffects prop. Using this we can tell webpack to keep unused imports of css files as is.

> Note: This issue does not occur for CSS modules

## `Enabling Tree Shaking`

- webpack config
  - set **mode: 'production'**
  - set **optmization.useExports: true**
- package.json config
  - set **sideEffects: false | [array of side effect fileNames]**

```

```
