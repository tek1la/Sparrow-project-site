import { Container, Grid, useMediaQuery } from '@mui/material'
import { useState } from 'react'
import './Developments.css'

type Props = {}
const Developments = (props: Props) => {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null)
    const [imageStyle, setImageStyle] = useState<React.CSSProperties>({})

    // Обробник для наведення на рядок
    const handleMouseEnter = (event: React.MouseEvent, index: number) => {
        const { clientX, clientY } = event
        console.log(clientX, clientY)
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

    const isTablet = useMediaQuery('(max-width:1024px)')
    const isMobile = useMediaQuery('(max-width:545px)')

    return (
        <>
            <Container
                className="container"
                sx={{
                    padding: isMobile
                        ? '80px 15px 60px'
                        : isTablet
                          ? '120px 0 80px'
                          : '120px 0 80px',
                }}
            >
                <Grid container className="developments-wraper">
                    <Grid item lg={4} md={4} sm={0}></Grid>
                    <Grid
                        item
                        lg={8}
                        md={8}
                        sm={12}
                        className="developments-title"
                    >
                        <h3>розробки та досягнення</h3>
                    </Grid>
                </Grid>
                <Grid className="developments-items-wraper">
                    <Grid container className="developments-item">
                        <Grid
                            className="developments-item-cell"
                            item
                            lg={4}
                            md={4}
                            sm={1.5}
                            xs={1.5}
                        >
                            <p className="development-bold">Рік</p>
                        </Grid>
                        <Grid
                            className="developments-item-cell"
                            item
                            lg={4}
                            md={4}
                            sm={4.5}
                            xs={4.5}
                        >
                            <p className="development-bold">Проект</p>
                        </Grid>
                        <Grid
                            className="developments-item-cell"
                            item
                            lg={4}
                            md={4}
                            sm={6}
                            xs={6}
                        >
                            <p className="development-bold">Опис</p>
                        </Grid>
                    </Grid>
                    {[
                        {
                            year: '2022',
                            project: 'Ударний БпАК “1В BOMBER”',
                            description:
                                'Отримав кодифікацію НАТО та ефективно виконує бойові завдання на лінії фронту',
                            imgSrc: 'img/dev-image1.jpg',
                        },
                        {
                            year: '2022-2024',
                            project: 'Акумуляторні батареї',
                            description: 'Виготовили понад 32 000 одиниць.',
                            imgSrc: 'img/dev-image3.jpg',
                        },
                        {
                            year: '2022-2024',
                            project: 'FPV дрони',
                            description:
                                'Збільшили виробничі потужності до 15 000 дронів на місяць.',
                            imgSrc: 'img/dev-image5.jpg',
                        },
                        {
                            year: '2023-2024',
                            project: 'Ретранслятор для FPV з поворотною мачтою',
                            description:
                                'Допомагає пілотам на відстані керувати сигналом станції ретрансляції',
                            imgSrc: 'img/dev-image2.jpg',
                        },

                        {
                            year: '2023-2024',
                            project: 'Система скидання боєприпасів для FPV',
                            description:
                                'Система проходить тестування та модернізацію для підвищення ефективності місій',
                            imgSrc: 'img/dev-image4.jpg',
                        },

                        {
                            year: '2024',
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
                                lg={4}
                                md={4}
                                sm={1.5}
                                xs={1.5}
                            >
                                <p>{item.year}</p>
                            </Grid>
                            <Grid
                                className="developments-item-cell"
                                item
                                lg={4}
                                md={4}
                                sm={4.5}
                                xs={4.5}
                            >
                                <p>{item.project}</p>
                            </Grid>
                            <Grid
                                className="developments-item-cell"
                                item
                                lg={4}
                                md={4}
                                sm={6}
                                xs={6}
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
