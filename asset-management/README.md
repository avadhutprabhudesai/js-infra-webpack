# Asset Management

## Webpack modules

Webpack supports variety of modules natively.

- ES modules
- CommonJS modules
- Assets
  - images
  - fonts
  - svg

A module can depend on other types of modules. Webpack supports following ways to express a dependency

- import
- require()
- @import() in css/sass/less
- image url() in css/sass/less
- `<img src="" />` in html files

## Loaders

Sometimes, webpack might not support the dependency file type out of the box. e.g. A JS file may import CSS module or a .png image. In this case, webpack has no idea how to process those dependencies.

Loaders are programs which transform the source code of the module dep so that webpack can work with it.
Loaders can transpile JSX to ES5, or load images as URLs or load a css file/module.
There are a ton of loaders for various purposes.
e.g.

- css-loader to process css files/modules
- style-loader to inject processes css in the `<style></style>` tag in dist/index.html
- babel-loader to transpile JS and JSX files into compatible ECMA versions

## File Processing

Let's work with following dependencies

- js, jsx: babel-loader or esbuild-loader
- css: style-loader, css-loader
- css module: style-loader, css-loader
- @import in css file: style-loader, css-loader
- svg: asset/resource
