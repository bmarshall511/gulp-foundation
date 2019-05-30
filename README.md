# gulp-foundation
> Starter Gulp build configuration with ZURB Foundation integration.

## Installation

**Building a WordPress theme?** Start with the [wordpress-foundation](https://github.com/bmarshall511/wordpress-foundation) starter theme, install gulp-foundation in the newly create theme, then rename to *assets*.

```sh
npm install
```

## Usage

Development:

```sh
gulp watch
```

Production:

```sh
gulp build
```

## Structure

* `src` - source directory, pre-compiled files. Should not be referenced directly.
 * `scss` - sass directory, contains all project scss files.
  * `components` - contains sass design components, intended to be structured as a componentized library. 
   * `_common.scss` - common helper classes. Optional.
  * `config` - contains sass config variables. None of the files in this directly should result in any output.
   * `_settings.scss` - Foundation base configuration variables.
   * `_variables.scss` - Custom global variables.
  * `core` - contains sass functions, mixins, variables, extendables, etc. None of the files in this directly should result in any output.
    * `_core.scss` - contains all core imports.
    * `_extendables.scss` - sass extendables.
    * `_functions.scss` - sass functions.
    * `_mixins.scss` - sass mixins.
  * `critical.scss` - critical (above-the-fold) styles, should be loaded as soon as possible, perferably inlined in the HTML.
  * `non-critical.scss` - non-critical (below-the-fold) styles, should be loaded asynchronously. See `index.html` for an example.
  * `print.scss` - print styles, should only be loaded for print media.
