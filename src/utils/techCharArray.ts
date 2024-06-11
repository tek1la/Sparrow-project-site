export type Table = {
    id: number
    rowName: string
    description: string
    secondDescription?: string
    thirdDescription?: string
    fourthDescription?: string
    header?: string
}

export const bpak: Table[] = [
    {
        id: 1,
        rowName: "Максимальна злітна маса",
        description: "33 кг",
    },
    {
        id: 2,
        rowName: "Максимальна тривалість польоту",
        description: "40 хв без навантаження 25-30 хв з навантаженням",
    },
    {
        id: 3,
        rowName: "Максимальна швидкість",
        description: "54 км/год 45 км/год",
    },
    {
        id: 4,
        rowName: "Радіус дії радіоканалу управління",
        description: "до 15 км",
    },
    {
        id: 5,
        rowName: "Максимальна висота польоту (AMSL)",
        description: "600 м",
    },
    {
        id: 6,
        rowName: "Максимальна протяжність польоту",
        description: "до 10 км",
    },
    {
        id: 7,
        rowName: "Максимально допустима швидкість вітру при старті",
        description: "10 м/с",
    },
    {
        id: 8,
        rowName: "Корисне навантаження",
        description: "2 міни 82 мм, 4 міни 60 мм, 4 РКГ-3, 4 ПТАБ-2,5, 12 вогів 40-60 мм, 1 протитанкова міна",
    },
    {
        id: 9,
        rowName: "Тепловізійна камера",
        description: "наявна",
    },
    {
        id: 10,
        rowName: "Нічна камера",
        description: "наявна",
    },
    {
        id: 11,
        rowName: "Гравітаційний приціл (показує прогнозоване попадіння снаряду)",
        description: "наявна",
    },
    {
        id: 12,
        rowName: "Стійкість до РЕБ і РЕП засобів",
        description: "ППРЧ зв'язок, пройшов усі випробування в умовах РЕБ і дослідження РЕП",
    },
    {
        id: 13,
        rowName: "Стійкість до завад навігації",
        description: "наявна",
    },
    {
        id: 14,
        rowName: "Швидкозмінні скиди корисного навантаження",
        description: "наявна",
    },
    {
        id: 15,
        rowName: "Виносна станція керування",
        description: "до 80 м",
    }
]

export const fpv: Table[] = [
    {
    id: 1,
    rowName: "",
    description: "“ГОРОБЕЦЬ 8”",
    secondDescription: "“ГОРОБЕЦЬ 10”",
    header: "table-header"
    },
    {
    id: 2,
    rowName: "Тактичний радiус дії",
    description: "15 км",
    secondDescription: "20 км",
    },
    {
    id: 3,
    rowName: "Час розгортання",
    description: "5 хв",
    secondDescription: "5 хв",
    },
    {
    id: 4,
    rowName: "Маса корисного навантаження",
    description: "до 2 кг",
    secondDescription: "до 3.5 кг",
    },
    {
    id: 5,
    rowName: "Маса БпЛА без акумулятора",
    description: "0.65 кг",
    secondDescription: "0.95 кг",
    },
    {
    id: 6,
    rowName: "Тип силової установки",
    description: "електрична",
    secondDescription: "електрична",
    },
    {
    id: 7,
    rowName: "Кількість акумуляторів",
    description: "1 шт",
    secondDescription: "1 шт",
    },
    {
    id: 8,
    rowName: "Загальна вага акумуляторів",
    description: "6s2p - 0.9 кг",
    secondDescription: "6s2p - 0.9 кг, 6s3p - 1.4 кг",
    },
    {
    id: 9,
    rowName: "Напруга живлення",
    description: "25 В",
    secondDescription: "25 В",
    },
    {
    id: 10,
    rowName: "Час заряджання акумулятора",
    description: "60 хв",
    secondDescription: "60 хв",
    },
    {
    id: 11,
    rowName: "Максимальна тривалість польоту БпЛА",
    description: "17 хв",
    secondDescription: "22 хв",
    },
    {
    id: 12,
    rowName: "Типова тривалість польоту БпЛА",
    description: "14 хв",
    secondDescription: "17 хв",
    },
    {
    id: 13,
    rowName: "Практична стеля БпЛА",
    description: "500 м",
    secondDescription: "500 м",
    },
    {
    id: 14,
    rowName: "Максимальна допустима швидкість БпЛА",
    description: "100 км",
    secondDescription: "110 км",
    },
    {
    id: 15,
    rowName: "Крейсерська швидкість БпЛА",
    description: "60 км",
    secondDescription: "60 км",
    },
    {
    id: 16,
    rowName: "Максимальна швидкість підйому",
    description: "8 м/сек",
    secondDescription: "8 м/сек",
    },
    {
    id: 17,
    rowName: "Максимальна швидкість спуску",
    description: "8 м/сек",
    secondDescription: "8 м/сек",
    },
    {
    id: 18,
    rowName: "Бойове напруження",
    description: "10 вильотів на добу",
    secondDescription: "10 вильотів на добу",
    },
    {
    id: 19,
    rowName: "Діапазони частот БпЛА:",
    description: "Управління: 915 МГц Телеметрія: 915 МГц Аналогове відео: 5.8 ГГц",
    secondDescription: "Управління: 915 МГц Телеметрія: 915 МГц Аналогове відео: 5.8 ГГц",
    },
    {
    id: 20,
    rowName: "Максимальна  дальність зв язку",
    description: "до 20 км",
    secondDescription: "до 20 км",
    },
]
export const link: Table[] = [
    {
    id: 1,
    rowName: "Повна транспортна маса комплекту",
    description: "до 40 кг",
    },
    {
    id: 2,
    rowName: "Транспортні габарити штативу у згорнутому стані",
    description: "висота - 1400 мм; ",
    },
    {
    id: 3,
    rowName: "Транспортні габарити кейсу",
    description: "висота - 120 мм; довжина та ширина  - 350 мм",
    },
    {
    id: 4,
    rowName: "Максимальна висота штативу",
    description: "до 8,5 м",
    },
    {
    id: 5,
    rowName: "Тип живлення - акумулятор",
    description: "від 4s ~ 14.8 V до 6s ~ 22.2 V",
    },
    {
    id: 6,
    rowName: "Час автономної роботи",
    description: "при використанні 6s тривалість роботи складатиме до 16 год*",
    },
    {
    id: 7,
    rowName: "Стандартна довжина кабелю",
    description: "40 м",
    },
    {
    id: 8,
    rowName: "Максимально допустима довжина кабелю",
    description: "до 100 м",
    },
    {
    id: 9,
    rowName: "Протоколи зв’язку на вибір:**",
    description: "",
    },
    {
    id: 10,
    rowName: "CRSF (S-PORT)",
    description: "модуль TBS CROSSFIRE модуль Happymodel Expresslrs",
    },
    {
    id: 11,
    rowName: "SBUS",
    description: "модуль Sine.link",
    },
    {
    id: 12,
    rowName: "Та інші радіомодулі, які підтримують ці два протоколи",
    description: "",
    },
    {
    id: 13,
    rowName: "Відеоприймач на вибір:",
    description: "",
    },
    {
    id: 14,
    rowName: "SKYZONE 1.2 GHz Diversity",
    description: "Частота: 1,2 ГГц; Кількість каналів: 9 (1080/1120/1160/1200/1240/ 1280/1320/1360/1258).",
    },
    {
    id: 15,
    rowName: "SKYZONE SteadyView X 5.8 Ghz",
    description: "Частота: 5.8 ГГц; Кількість каналів: 48.",
    }
]
export const battery: Table[] = [
    {
    id: 1,
    rowName: "Тип збірки",
    description: "4S2P",
    secondDescription: "6S1P",
    thirdDescription: "6S2P",
    fourthDescription: "6S3P",
    header: 'battery-table-header',
    },
    {
    id: 2,
    rowName: "Розміри",
    description: "145x45x45 мм",
    secondDescription: "75x65x45 мм",
    thirdDescription: "145x65x45 мм",
    fourthDescription: "215x65x45 мм"
    },
    {
    id: 3,
    rowName: "Вага",
    description: "570 грам",
    secondDescription: "470 грам",
    thirdDescription: "850 грам",
    fourthDescription: "1250 грам"
    },
    {
    id: 4,
    rowName: "Ємність акумулятора",
    description: "8400 мА/год",
    secondDescription: "4200 мА/год",
    thirdDescription: "8400 мА/год",
    fourthDescription: "12600 мА/год"
    },
    {
    id: 5,
    rowName: "Номінальна напруга",
    description: "14,8 В",
    secondDescription: "22,2 В",
    thirdDescription: "22,2 В",
    fourthDescription: "22,2 В"
    },
    {
    id: 6,
    rowName: "Мінімальна напруга",
    description: "10 В",
    secondDescription: "15 В",
    thirdDescription: "15 В",
    fourthDescription: "15 В"
    },
    {
    id: 7,
    rowName: "Максимальна напруга",
    description: "16,8 В",
    secondDescription: "25,2 В",
    thirdDescription: "25,2 В",
    fourthDescription: "25,2 В"
    },
    {
    id: 8,
    rowName: "Загальна ємність",
    description: "124 Вт/год",
    secondDescription: "93 Вт/год",
    thirdDescription: "186 Вт/год",
    fourthDescription: "280 Вт/год"
    },
    {
    id: 9,
    rowName: "Струм віддачі",
    description: "90 А",
    secondDescription: "45 А",
    thirdDescription: "90 А",
    fourthDescription: "135 А"
    },
    {
    id: 10,
    rowName: "Рекомендований струм зарядки",
    description: "8 А",
    secondDescription: "4 А",
    thirdDescription: "8 А",
    fourthDescription: "12 А"
    },
    {
    id: 11,
    rowName: "Температуриний діапазон розряду",
    description: "-40С до +60С",
    secondDescription: "-40С до +60С",
    thirdDescription: "-40С до +60С",
    fourthDescription: "-40С до +60С"
    },
    {
    id: 12,
    rowName: "Температуриний діапазон заряду",
    description: "0С до +45С",
    secondDescription: "0С до +45С",
    thirdDescription: "0С до +45С",
    fourthDescription: "0С до +45С"
    },
]
export const sdsMini: Table[] = [
    {
    id: 1,
    rowName: "Вага",
    description: "270 г",
    },
    {
    id: 2,
    rowName: "Матеріал",
    description: "Алюміній, ударостійкий полікарбонат",
    },
    {
    id: 3,
    rowName: "Габарити скида:",
    description: "",
    },
    {
    id: 4,
    rowName: "Ширина",
    description: "192 мм",
    },
    {
    id: 5,
    rowName: "Висота",
    description: "68 мм",
    },
    {
    id: 6,
    rowName: "Глибина",
    description: "88 мм",
    },
    {
    id: 7,
    rowName: "Відстань від дрона до боєприпаса",
    description: "17 мм",
    },
    {
    id: 8,
    rowName: "Виступ скида нижче дрона",
    description: "30 мм ",
    },
    {
    id: 9,
    rowName: "Діапазон діаметрів використовуваного вантажу",
    description: "від 42 мм до 82 мм",
    }
]