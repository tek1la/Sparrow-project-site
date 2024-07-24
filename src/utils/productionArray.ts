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
        subTitle: "Ударні БпЛА",
        firstTitle: "Ударний БпАК “1В Бомбер”",
        secondTitle: "",
        description: "Призначений для виконання ударних операції вдень та вночi в простих метеорологічних умовах, в умовах активного використання противником засобів радіоелектронної боротьби.",
        productionImg: 'img/udarnyy-BPLA.jpg',
        path: 'bpak'
    },
    {
        id: 2,
        title: "Ударні FPV дрони “ГОРОБЕЦЬ 8” та “ГОРОБЕЦЬ 10”",
        subTitle: "FPV - дрони",
        firstTitle: "Ударні FPV-дрони",
        secondTitle: "“Горобець 8” та “Горобець 10”",
        description: 'Безпiлотні авiацiйний комплекс "ГОРОБЕЦЬ 8"  та "ГОРОБЕЦЬ 10" призначені для  виконання ударних операцій в різних метеорологічних умовах.',
        productionImg: "img/udarnyy-fpv.jpg",
        path: 'fpv'
    },
    {
        id: 3,
        title: "Станція ретрансляції “FPV Re-Link”",
        subTitle: "Ретранслятори",
        firstTitle: "Станція ретрансляції",
        secondTitle: "“FPV Re-Link”",
        description: "Наземна станція призначена для посилення зв’язку з дроном та забезпечення безпеки оператора БпЛА, під час виконання завдань з розвідки, ударних операцій і тд.",
        productionImg: 'img/fpv-re-link.jpg',
        path: 'link',
    },
    {
        id: 4,
        title: "Акумуляторні збірки",
        subTitle: "Акумуляторні батареї",
        firstTitle: "Акумуляторні збірки",
        secondTitle: "",
        description: "Акумуляторні збірки на елементах molicel INR-21700-P42A виготовляються з високоякісних матеріалів та проходять ретельне тестування. Це забезпечує їхню високу міцність та надійність.",
        productionImg: "img/battery.jpg",
        path: 'battery'
    },
    {
        id: 5,
        title: "Системи скидів “SDS-mini”",
        subTitle: "Скиди",
        firstTitle: "Системи скидів “SDS-mini”",
        secondTitle: "",
        description: "Система скидання боєприпасів - це не лише модернізація дронів, а й оптимізація робочого процесу. Здатність квадрокоптера ефективно та безпечно скидати боєприпаси відкриває нові можливості для військових.",
        productionImg: 'img/sds-mini.jpg',
        path: 'sdsMini'
    },
]