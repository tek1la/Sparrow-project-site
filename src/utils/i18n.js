import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    en: {
        translation: {
            hero_section_title1: 'OUR',
            hero_section_title2: 'THE SKY-OURS',
            hero_section_title3: 'REGULATIONS!',
            hero_section_title_text:
                'UKRAINIAN MANUFACTURER OF MODERN STRIKE UAVS',
        },
    },
    ua: {
        translation: {
            hero_section_title1: 'НАШЕ',
            hero_section_title2: 'НЕБО—НАШІ',
            hero_section_title3: 'ПРАВИЛА!',
            hero_section_title_text:
                'УКРАЇНСЬКИЙ ВИРОБНИК СУЧАСНИХ УДАРНИХ БПЛА',
        },
    },
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'ua', // Мова за замовчуванням
    fallbackLng: 'ua', // Мова, якщо переклад відсутній
    interpolation: {
        escapeValue: false, // React вже виконує escaping
    },
})

export default i18n
