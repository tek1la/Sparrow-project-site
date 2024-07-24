import { Container, Grid } from '@mui/material'
import { useState } from 'react'
import './Developments.css'

type Props = {}
const Developments = (props: Props) => {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null)
    const [imageStyle, setImageStyle] = useState<React.CSSProperties>({})

    // Обробник для наведення на рядок
    const handleMouseEnter = (event: React.MouseEvent, index: number) => {
        const { clientX, clientY } = event
        setHoveredItem(index)
        // Оновлюємо стилі картинки, щоб вона з'являлась біля мишки
        setImageStyle({
            display: 'block',
            left: `250px`, // Позиціонування картинки праворуч від курсора
            top: `-40px`, // Позиціонування картинки нижче від курсора
        })
    }

    // Обробник для покидання області рядка
    const handleMouseLeave = () => {
        setHoveredItem(null)
        setImageStyle({ display: 'none' }) // Сховати картинку
    }

    return (
        <>
            <Container
                className="container"
                sx={{
                    padding: '120px 0 80px',
                }}
            >
                <Grid container className="developments-wraper">
                    <Grid item sm={4}></Grid>
                    <Grid item sm={8} className="developments-title">
                        <h3>розробки та досягнення</h3>
                    </Grid>
                </Grid>
                <Grid className="developments-items-wraper">
                    <Grid container className="developments-item">
                        <Grid className="developments-item-cell" item sm={4}>
                            <p className="development-bold">Рік</p>
                        </Grid>
                        <Grid className="developments-item-cell" item sm={4}>
                            <p className="development-bold">Проект</p>
                        </Grid>
                        <Grid className="developments-item-cell" item sm={4}>
                            <p className="development-bold">Опис</p>
                        </Grid>
                    </Grid>
                    {[
                        {
                            year: '2022 рік',
                            project: 'Ударний БпАК “1В BOMBER”',
                            description:
                                'Отримав кодифікацію НАТО та ефективно виконує бойові завдання на лінії фронту',
                            imgSrc: 'img/dev-image1.jpg',
                        },
                        {
                            year: '2022 рік',
                            project: 'Ретранслятор для FPV з поворотною мачтою',
                            description:
                                'Допомагає пілотам на відстані керувати сигналом станції ретрансляції',
                            imgSrc: 'img/dev-image2.jpg',
                        },
                        {
                            year: '2022 рік',
                            project: 'Акумуляторні батареї',
                            description: 'Виготовили понад 32 000 одиниць.',
                            imgSrc: 'img/dev-image3.jpg',
                        },
                        {
                            year: '2022 рік',
                            project: 'Система скидання боєприпасів для FPV',
                            description:
                                'Система проходить тестування та модернізацію для підвищення ефективності місій',
                            imgSrc: 'img/dev-image4.jpg',
                        },
                        {
                            year: '2022 рік',
                            project: 'Допомога ЗСУ',
                            description:
                                'Передали понад 30 000 FPV, збільшили виробничі потужності до 15 000 дронів на місяць',
                            imgSrc: 'img/dev-image5.jpg',
                        },
                        {
                            year: '2022 рік',
                            project: 'Техно Хаб',
                            description:
                                'Підтримуємо партнерів у розвитку виробництва FPV, виконуючи їх розробку, тестування і збірку',
                            imgSrc: 'img/dev-image6.jpg',
                        },
                    ].map((item, index) => (
                        <Grid
                            container
                            className="developments-item developments-item-hover"
                            onMouseEnter={(e) => handleMouseEnter(e, index)}
                            onMouseLeave={handleMouseLeave}
                            key={index}
                        >
                            <Grid
                                className="developments-item-cell"
                                item
                                sm={4}
                            >
                                <p>{item.year}</p>
                            </Grid>
                            <Grid
                                className="developments-item-cell"
                                item
                                sm={4}
                            >
                                <p>{item.project}</p>
                            </Grid>
                            <Grid
                                className="developments-item-cell"
                                item
                                sm={4}
                            >
                                <p>{item.description}</p>
                            </Grid>
                            {hoveredItem === index && (
                                <img
                                    src={item.imgSrc}
                                    alt={item.project}
                                    style={imageStyle}
                                />
                            )}
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}
export default Developments
