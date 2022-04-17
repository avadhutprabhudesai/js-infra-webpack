# Development

Webpack provides excellent tools for developers to use webpack features at development time.

- Create a bundle in a development mode
- Create source maps
- Providing a server which compiles/bundles/deploys app after every change in code.

## `development mode`

The 'mode' property in webpack config sets the mode of bundling. It can have one of the following values

- none
- development
- production

## `source-maps`

We keep our source code modular and compartmentalized to provide clear intention to each and every file and directory. However, when we create a bundle (prod or dev), webpack collates all our dependencies from the entry into 1 giant file.

While debugging, stack trace points to the location in the bundle which is not quite helpful as the code might have undergone uglification or minification process.

Source maps helps us to map the code in the bundle to code in the codebase.

webpack config has `devTool` option which provides serveral different option regarding source maps.

> Note: source map generation process affects build and rebuild time. Please read options table carefully.

## `Continuous build`

In development, we would love webpack to create bundles everytime we modify our code. There are 2 ways we can achieve this.

- **_watch_** mode
- **_webpack-dev-server_**
