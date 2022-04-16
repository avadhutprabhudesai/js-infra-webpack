# Webpack CLI

Following command looks for src/index.js as an entry point, creates a bundle and outputs it to dist/main.js

```
webpack
```

If we wish to override this custom behavior, we must provide a config file. By default webpack looks for a config file with the name 'webpack.config.js'.

But we can provide a custom name as well. In case we name our file something else we need to tell webpack explicitly wit following command

```
webpack --config <path-to-config>
```

In order to make our lives easier, we can add these CLI commands as npm scripts

```
{
  ...,
  "scripts": {
    "build": "webpack",
    "build:config": "webpack --config custom.config.js"
  }
}
```
