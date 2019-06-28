# bootstrap-vuejs

[Bootstrap + Vue](https://bootstrap-vue.js.org/)  
[Vue CLI 3](https://bootstrap-vue.js.org/docs)  
`npx @vue/cli create my-project`  

`npm i bootstrap-vue`  

[components](https://bootstrap-vue.js.org/docs/components)  

## Usage

`$ npm run serve`
`$ yarn serve`

# Docs 

[Form Select](https://bootstrap-vue.js.org/docs/components/form-select/) - Bootstrap Vue  
[Input Groups](https://bootstrap-vue.js.org/docs/components/input-group/)

# npm 
`npm i vue-router`  
`npm install gh-pages --save-dev`  

package.json
```js
  "homepage": "https://jacobhsu.github.io/bootstrap-vuejs/",
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "deploy": "npm run build && gh-pages -d dist"
  },
```

vue.config.js
```js
module.exports = {
    publicPath: 'bootstrap-vuejs' 
}
```

`npm install --save vee-validate`

# References

[vue-i18n](https://kazupon.github.io/vue-i18n/)  `src\main.js`
npm [vue-i18n](https://www.npmjs.com/package/vue-i18n)  
[VeeValidate](https://baianat.github.io/vee-validate/) Template Based Validation Framework for Vue.js
[numeric](https://baianat.github.io/vee-validate/guide/rules.html#numeric)  
npm [vee-validate](https://www.npmjs.com/package/vee-validate)  
[Vue.js + VeeValidate - Form Validation Example](https://jasonwatmore.com/post/2018/08/01/vuejs-veevalidate-form-validation-example)  


Font Awesome [start](https://fontawesome.com/start) `public\index.html`

BV [List group](https://bootstrap-vue.js.org/docs/components/list-group/#list-groups-inside-cards)  
Bootstrap4 [List group](https://getbootstrap.com/docs/4.0/components/list-group/#Flush)  

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
