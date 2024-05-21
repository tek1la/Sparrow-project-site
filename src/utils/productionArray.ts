export type Productions = {
    id: number
    title: string
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
        firstTitle: "ударний бпак",
        secondTitle: "“1в бомбер”",
        description: "Призначений для виконання ударних операції вдень та вночi в простих метеорологічних умовах, в умовах активного використання противником засобів радіоелектронної боротьби. ",
        productionImg: 'img/udarnyy-BPLA.jpg',
        path: 'bpak'
    },
    {
        id: 2,
        title: "ударні fpv дрони “ГОРОБЕЦЬ 8-10”",
        firstTitle: "ударні fpv дрони",
        secondTitle: "“ГОРОБЕЦЬ 8-10”",
        description: 'Безпiлотні авiацiйний комплекс "2А-3А ГОРОБЕЦЬ" призначені для  виконання ударних операцій в різних метеорологічних умовах.',
        productionImg: "img/udarnyy-fpv.jpg",
        path: 'fpv'
    },
    {
        id: 3,
        title: "станція ретрансляції “FPV Re-Link”",
        firstTitle: "станція ретрансляції",
        secondTitle: "“FPV Re-Link”",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        productionImg: 'img/udarnyy-BPLA.jpg',
        path: 'link',
    },
    {
        id: 4,
        title: "акумуляторні збірки",
        firstTitle: "акумуляторні",
        secondTitle: "збірки",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        productionImg: "img/udarnyy-fpv.jpg",
        path: 'battery'
    },
    {
        id: 5,
        title: "Системи скидів “SDS-mini”",
        firstTitle: "Системи скидів",
        secondTitle: "“SDS-mini”",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        productionImg: 'img/udarnyy-BPLA.jpg',
        path: 'sds-mini'
    },
]