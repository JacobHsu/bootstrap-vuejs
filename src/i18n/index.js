import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enUS from './en-US.js'
import zhTW from './zh-TW.js'


Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'zh-TW', //'en-US',
    messages: {
        'en-US': enUS,
        'zh-TW': zhTW,
    },
})
export default i18n