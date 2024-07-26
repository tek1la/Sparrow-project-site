export type News = {
    id: number
    title: string
    description: string
    date: string
    source: string
    newsImg: string
}

export const NewsArray: News[] = [
    {
        id: 1,
        title: "За рік розробили дві моделі дронів",
        description: "Цей проєкт з розробки і випуску дронів розпочався влітку 2022 року. Тоді мова про виробництво ще не йшла, але згодом ми почали отримувати запити на поставку дронів.",
        date: "17 листопада 2023",
        source: "Суспільне Житомир",
        newsImg: "img/news-img-1.jpg"
    },
    {
        id: 2,
        title: "La guerra de Ucrania, la mayor batalla de drones de la historia",
        description: "Ucrania intenta replicar con audaces ataques en Rusia a la creciente ventaja de Moscú en la producción de aviones no tripulados.",
        date: "17 листопада 2023",
        source: "Суспільне Житомир",
        newsImg: "img/news-img-2.jpg"
    },
    {
        id: 3,
        title: "Ukraine's innovative use of drones ",
        description: "We believe in Ukrainian entrepreneurs and that only they can solve issues with logistics, with innovation, and I think that this will be our winning formula.",
        date: "5 грудня 2023",
        source: "ABC News",
        newsImg: "img/news-img-3.jpg"
    },
    {
        id: 4,
        title: `проєкт «Герої нашої Перемоги»`,
        description: "Знайомство зі справжніми героями безлічі фронтів, на яких точиться боротьба за нашу Свободу та Незалежність.",
        date: "19 червня 2023",
        source: "Житомирська ОДА",
        newsImg: 'img/news-img-4.jpg'
    },
    {
        id: 5,
        title: "Low on Ammo, Ukraine Plans Million Explosive Drones",
        description: "“With our economy? we cannot make tanks.” said Mykola Havryluk, chief executive of Sparrow Avia, a drone-production company.",
        date: "3 лютого 2024",
        source: "The Wall Street Journal",
        newsImg: "img/news-img-5.jpg"
    },
    {
        id: 6,
        title: "SPARROW AVIA: з чого все почалось.»",
        description: "У відео розповідаємо про історію нашої компанії, виробництво та плани на майбутнє. Ми віримо в те, що наші зусилля, команда та досвід допоможуть нам досягти цілей.",
        date: "12 квітня 2024",
        source: "",
        newsImg: 'img/news-img-6.jpg'
    },
    {
        id: 7,
        title: "Розробка дронів: як працює підприємство",
        description: 'Розробка ударних безпілотних комплексів та виготовлення акумулятори для FPV-дронів. За місяць виготовляємо до 30 БпАК.',
        date: "17 листопада 2023",
        source: "Суспільне Житомир",
        newsImg: "img/news-img-7.jpg"
    },
]