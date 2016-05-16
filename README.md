# Magento Frontend Development Using Gulp
Created by Connor Abdelnoor

## Purpose
Document easy gulp configuration for Magento 1 Theme development

## Requirments

* Node.js
* npm
* Gulp
* Magento 

### Theme
`scss`, `js`, and `images` for Magento site should be placed under
`<project root>/theme/name/default/source`. From there, everything will compiled into the correct file location.

### Available Frontend Tools

* Gulp
* Watch (Gulp-watch)
* Livereload (Gulp-livereload)
* Sass Compilation (Gulp-Sass)
* JS minify (Gulp-uglify)
* CSS minify (Gulp-cssmin)
* Image minify (Gulp-imagemin)

### Setup
This project uses Gulp to compile Sass and minify files. Frontend development tools are not included in the VM and should be installed locally.
* Gulp is only available as a node package so Node.js and NPM are required. Prefered installation method is using [homebrew](http://brew.sh/).
    * `brew install node`
    * `brew install npm`
* A `package.json` is included in the project. From the root, run `npm install` to install all listed packages
* All Gulp commands should be run locally and not from inside the vm.

### Building CSS and JavaScript

* `./node_modules/.bin/gulp` from the project root will build css and js files and minify images.
    - This command will minify and compile all scss, js, and images placed in the theme source directory
*  `./node_modules/.bin/gulp watch` From the project root will watch the heme source directory for changes and build css and js automatically.

#### Live Reload

* Using Gulp will also trigger Livereload if your browser has the livereload plugin and it is active. Find the necessary browser extension [here](http://livereload.com/).