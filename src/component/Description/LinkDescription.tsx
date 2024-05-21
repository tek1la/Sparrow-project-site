import { Container, Grid } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import './Description.css'

type Props = {}
const LinkDescription = (props: Props) => {
    return (
        <>
            <Container
                className="container"
                sx={{
                    padding: '120px 0',
                    position: 'relative',
                }}
            >
                <div className="descript-title">
                    <h3>опис</h3>
                </div>
                <Grid
                    container
                    className="descript-wraper"
                    sx={{
                        flexDirection: 'column',
                    }}
                    style={{
                        gap: '60px',
                        marginBottom: '0',
                    }}
                >
                    <Grid
                        container
                        style={{
                            gap: '30px',
                            flexWrap: 'nowrap',
                        }}
                    >
                        <Grid
                            xs={6}
                            item
                            className="descript-description"
                            style={{
                                gap: '30px',
                                flexWrap: 'nowrap',
                            }}
                        >
                            <div className="descript-text">
                                <div
                                    className="descript-first-text"
                                    style={{
                                        marginBottom: '30px',
                                    }}
                                >
                                    <TableContainer
                                        component={Paper}
                                        className="link-table"
                                    >
                                        <Table
                                            sx={{ minWidth: 650 }}
                                            aria-label="simple table"
                                            style={{
                                                borderBottom: 'none',
                                            }}
                                        >
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell
                                                        component="th"
                                                        scope="row"
                                                        className="table-cell"
                                                    >
                                                        Виносний модуль
                                                        ретрансляції
                                                    </TableCell>
                                                    <TableCell
                                                        className="table-cell"
                                                        align="left"
                                                    >
                                                        1 шт
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell
                                                        className="table-cell"
                                                        component="th"
                                                        scope="row"
                                                    >
                                                        Магістраль управління
                                                        (кабель 40 м) та
                                                        <br />
                                                        модуль в апаратуру
                                                    </TableCell>
                                                    <TableCell
                                                        className="table-cell"
                                                        align="left"
                                                    >
                                                        1 шт
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell
                                                        className="table-cell"
                                                        component="th"
                                                        scope="row"
                                                    >
                                                        Антена 5.8 ГГц патч або
                                                        антена 1.2 ГГц патч
                                                    </TableCell>
                                                    <TableCell
                                                        className="table-cell"
                                                        align="left"
                                                    >
                                                        1 шт
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell
                                                        className="table-cell"
                                                        component="th"
                                                        scope="row"
                                                    >
                                                        Антена “хвильовий канал”
                                                        850-950 МГц або антена
                                                        “логоперіодична” 700-950
                                                        МГц
                                                    </TableCell>
                                                    <TableCell
                                                        className="table-cell"
                                                        align="left"
                                                    >
                                                        1 шт
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell
                                                        className="table-cell"
                                                        component="th"
                                                        scope="row"
                                                    >
                                                        Щогла + поворотний
                                                        механізм 8 м.
                                                    </TableCell>
                                                    <TableCell
                                                        className="table-cell"
                                                        align="left"
                                                    >
                                                        1 шт
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={6} item className="descript-first-text">
                            <p
                                style={{
                                    marginBottom: '30px',
                                }}
                            >
                                Наземна станція призначена для посилення зв’язку
                                з дроном та забезпечення безпеки оператора БпЛА,
                                під час виконання завдань з розвідки, ударних
                                операцій і тд. Станція ретрансляції “FPV
                                Re-Link” допоможе забезпечувати стабільний та
                                стійкий зв’язок оператора та БпЛА на відстані до
                                15 км та швидке перемикання між бортами БпАК.
                            </p>
                            <img
                                style={{
                                    width: '100%',
                                }}
                                src="./img/production/link_desc_img.png"
                                alt=""
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        style={{
                            gap: '30px',
                            flexWrap: 'nowrap',
                        }}
                    >
                        <Grid xs={6} item className="descript-first-text">
                            <p
                                style={{
                                    marginBottom: '0',
                                }}
                            >
                                Щогла облаштована поворотним механізмом, що
                                дозволяє дистанційно, з пульта керування,
                                повертати антену у потрібному напрямку, не
                                наражаючи при цьому на небезпеку пілота та
                                корегувати у режимі “онлайн” направлення сигналу
                                зв’язку.
                            </p>
                            <img
                                style={{
                                    marginTop: '25px',
                                }}
                                src="./img/production/link_desc_img_1.png"
                                alt="link"
                            />
                            <div
                                style={{
                                    marginTop: '15px',
                                    display: 'flex',
                                    gap: '15px',
                                }}
                            >
                                <img
                                    style={{
                                        borderRadius: '10px',
                                    }}
                                    src="./img/production/link_desc_img_2.jpg"
                                    alt="link"
                                />
                                <img
                                    style={{
                                        borderRadius: '10px',
                                    }}
                                    src="./img/production/link_desc_img_3.jpg"
                                    alt="link"
                                />
                            </div>
                        </Grid>
                        <Grid xs={6} item className="descript-img">
                            <img src="./img/link_desc_img.jpg" alt="bpla" />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default LinkDescription
