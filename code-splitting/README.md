# Code splitting

Code splitting is a technique where we can specify number of bundles and code that should go in each bundle.
There are 3 general ways we can perform code splitting with webpack

- Entry points
- Prevent duplication
- Dynamic imports

## `Entry points`

Webpack creates one bundle per entry in the config file.
Common modules are duplicated in each bundle where common modules are used.

## `Prevent duplication`

- **Entry dependencies**
  - We can specify the dependencies manually with **_dependOn_** property
- **SplitChunksPlugin**
  - **_optimizations.splitChunks.chunks: 'all'_** detects common deps among multiple entries and creates a separate chunk automatically.
  - **_optimizations.splitChunks.minSize: 0_** instructs webpack to create a separate chunk even if the shared module is very tiny. Otherwise webpack just smartly refuses to create separate module if it is not of a considerable size.

## `Dynamic imports`

- We can import a module at runtime by using **import()** syntax.
- It returns a promise which resolves with the requested module.
- Even if a module is dynamically imported from multiple places, it is fetched only once from the server. Subsequent imports use the cached version
