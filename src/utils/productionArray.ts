export type Productions = {
    id: number
    title: string
    subTitle: string
    firstTitle: string
    secondTitle: string
    description: string
    productionImg: string
    path: string
}

export const productionArray: Productions[] = [
    {
        id: 1,
        title: "Ударний БпАК “1В БОМБЕР”",
        subTitle: "БпАК “1В Бомбер”",
        firstTitle: "ударний бпак",
        secondTitle: "“1в бомбер”",
        description: "Призначений для виконання ударних операції вдень та вночi в простих метеорологічних умовах, в умовах активного використання противником засобів радіоелектронної боротьби. ",
        productionImg: 'img/udarnyy-BPLA.jpg',
        path: 'bpak'
    },
    {
        id: 2,
        title: "ударні fpv дрони “ГОРОБЕЦЬ 8-10”",
        subTitle: "FPV “2А-3А Горобець”",
        firstTitle: "ударні fpv дрони",
        secondTitle: "“ГОРОБЕЦЬ 8-10”",
        description: 'Безпiлотні авiацiйний комплекс "2А-3А ГОРОБЕЦЬ" призначені для  виконання ударних операцій в різних метеорологічних умовах.',
        productionImg: "img/udarnyy-fpv.jpg",
        path: 'fpv'
    },
    {
        id: 3,
        title: "станція ретрансляції “FPV Re-Link”",
        subTitle: "“FPV Re-Link”",
        firstTitle: "станція ретрансляції",
        secondTitle: "“FPV Re-Link”",
        description: "Наземна станція призначена для посилення зв’язку здроном та забезпечення безпеки оператора БпЛА, під час виконання завдань з розвідки, ударних операцій і тд.",
        productionImg: 'img/fpv-re-link.jpg',
        path: 'link',
    },
    {
        id: 4,
        title: "акумуляторні збірки",
        subTitle: "Акумуляторні збірки",
        firstTitle: "акумуляторні",
        secondTitle: "збірки",
        description: "Акумуляторні збірки на елементах molicel INR-21700-P42A виготовляються з високоякісних матеріалів та проходять ретельне тестування. Це забезпечує їхню високу міцність та надійність.",
        productionImg: "img/battery.jpg",
        path: 'battery'
    },
    {
        id: 5,
        title: "Системи скидів “SDS-mini”",
        subTitle: "Скиди “SDS-mini”",
        firstTitle: "Системи скидів",
        secondTitle: "“SDS-mini”",
        description: "Система скидання боєприпасів - це не лише модернізація дронів, а й оптимізація робочого процесу. Здатність квадрокоптера ефективно та безпечно скидати боєприпаси відкриває нові можливості для військових.",
        productionImg: 'img/sds-mini.jpg',
        path: 'sdsMini'
    },
]