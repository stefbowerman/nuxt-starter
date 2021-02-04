# Nuxt Starter

A Nuxt js boilerplate application with some extra features bolted on.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Guide

#### Fonts

This project uses [webfontloader](https://github.com/typekit/webfontloader) for font loading.

1.  If you are using a `@font-face` font, then you will need to put the font files in `/static/fonts`
2.  Then define the `@font-face` rules in `/assets/styles/_fonts.scss`
3.  Set the names of the font families in `/plugins/web-font-loader.client.js`
4.  Uncomment the `web-font-loader.client.js` line in `nuxt.config.js:plugins`

For Typekit or google fonts, please see the [webfontloader](https://github.com/typekit/webfontloader) documentation.

#### SCSS Usage

SCSS is included in this project in two ways:

1. There is an `app.scss` file which is included globally on the site.  Use this file for any styles that are not specific to any pages or components.
2. All component styling can be done using scss by specifying the `lang` attribute on the style tag.  SCSS **mixins** and **variables** are automatically included in every component from their respective files inside the `~/styles` directory.

```SCSS
// Inside ~/components/{ name }.vue

<style lang="scss">
.selector {
  color: $scss-variable;
  @include mixin-name;
}
</style>
```