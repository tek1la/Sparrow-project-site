import { Container, Grid } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import './TechChar.css'
import { bpak, fpv, link, battery, sdsMini } from 'utils/techCharArray'

type Props = {
    path: string
    tableSize?: number
    size?: number
}
const TechChar = ({ path, tableSize, size }: Props) => {
    return (
        <>
            <Container
                className="container"
                sx={{
                    padding: '120px 0',
                    position: 'relative',
                }}
            >
                <Grid>
                    <div className="tech-char-title">
                        <h3>
                            Технічні
                            <br />
                            характеристики
                        </h3>
                    </div>
                </Grid>
                <Grid
                    container
                    sx={{
                        gap: '30px',
                        flexWrap: 'nowrap',
                        alignItems: 'center',
                    }}
                >
                    <Grid
                        xs={tableSize || 8}
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
                                        {path === 'bpak' ? (
                                            <TableBody>
                                                {bpak.map(
                                                    ({
                                                        id,
                                                        rowName,
                                                        description,
                                                    }) => (
                                                        <TableRow key={id}>
                                                            <TableCell
                                                                sx={{
                                                                    padding:
                                                                        '10px',
                                                                    lineHeight:
                                                                        '1.38',
                                                                    width: '60%',
                                                                }}
                                                                component="th"
                                                                scope="row"
                                                                className="table-cell"
                                                            >
                                                                {rowName}
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{
                                                                    padding:
                                                                        '10px',
                                                                    lineHeight:
                                                                        '1.38',
                                                                }}
                                                                className="table-cell"
                                                                align="left"
                                                            >
                                                                {description}
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                )}
                                            </TableBody>
                                        ) : null}
                                        {path === 'fpv' ? (
                                            <TableBody>
                                                {fpv.map(
                                                    ({
                                                        id,
                                                        rowName,
                                                        description,
                                                        secondDescription,
                                                        header,
                                                    }) => (
                                                        <TableRow
                                                            key={id}
                                                            className={header}
                                                        >
                                                            <TableCell
                                                                sx={{
                                                                    padding:
                                                                        '10px',
                                                                    lineHeight:
                                                                        '1.38',
                                                                    width: '42%',
                                                                }}
                                                                component="th"
                                                                scope="row"
                                                                className="table-cell"
                                                            >
                                                                {rowName}
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{
                                                                    padding:
                                                                        '10px',
                                                                    lineHeight:
                                                                        '1.38',
                                                                }}
                                                                className="table-cell"
                                                                align="left"
                                                            >
                                                                {description}
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{
                                                                    padding:
                                                                        '10px',
                                                                    lineHeight:
                                                                        '1.38',
                                                                }}
                                                                className="table-cell"
                                                                align="left"
                                                            >
                                                                {
                                                                    secondDescription
                                                                }
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                )}
                                            </TableBody>
                                        ) : null}
                                        {path === 'link' ? (
                                            <TableBody>
                                                {link.map(
                                                    ({
                                                        id,
                                                        rowName,
                                                        description,
                                                    }) => (
                                                        <TableRow key={id}>
                                                            <TableCell
                                                                sx={{
                                                                    padding:
                                                                        '10px',
                                                                    lineHeight:
                                                                        '1.38',
                                                                    width: '60%',
                                                                }}
                                                                component="th"
                                                                scope="row"
                                                                className="table-cell"
                                                            >
                                                                {rowName}
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{
                                                                    padding:
                                                                        '10px',
                                                                    lineHeight:
                                                                        '1.38',
                                                                }}
                                                                className="table-cell"
                                                                align="left"
                                                            >
                                                                {description}
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                )}
                                            </TableBody>
                                        ) : null}
                                        {path === 'battery' ? (
                                            <TableBody>
                                                {battery.map(
                                                    ({
                                                        id,
                                                        rowName,
                                                        description,
                                                    }) => (
                                                        <TableRow key={id}>
                                                            <TableCell
                                                                sx={{
                                                                    padding:
                                                                        '10px',
                                                                    lineHeight:
                                                                        '1.38',
                                                                    width: '60%',
                                                                }}
                                                                component="th"
                                                                scope="row"
                                                                className="table-cell"
                                                            >
                                                                {rowName}
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{
                                                                    padding:
                                                                        '10px',
                                                                    lineHeight:
                                                                        '1.38',
                                                                }}
                                                                className="table-cell"
                                                                align="left"
                                                            >
                                                                {description}
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                )}
                                            </TableBody>
                                        ) : null}
                                        {path === 'sdsMini' ? (
                                            <TableBody>
                                                {sdsMini.map(
                                                    ({
                                                        id,
                                                        rowName,
                                                        description,
                                                    }) => (
                                                        <TableRow key={id}>
                                                            <TableCell
                                                                sx={{
                                                                    padding:
                                                                        '10px',
                                                                    lineHeight:
                                                                        '1.38',
                                                                    width: '60%',
                                                                }}
                                                                component="th"
                                                                scope="row"
                                                                className="table-cell"
                                                            >
                                                                {rowName}
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{
                                                                    padding:
                                                                        '10px',
                                                                    lineHeight:
                                                                        '1.38',
                                                                }}
                                                                className="table-cell"
                                                                align="left"
                                                            >
                                                                {description}
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                )}
                                            </TableBody>
                                        ) : null}
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={size || 4} item className="descript-first-text">
                        {path === 'bpak' ? (
                            <img
                                style={{
                                    width: '100%',
                                }}
                                src="./img/production/bpak-table-bg.png"
                                alt=""
                            />
                        ) : null}
                        {path === 'fpv' ? (
                            <img
                                style={{
                                    width: '100%',
                                }}
                                src="./img/production/fpv-table-bg.png"
                                alt=""
                            />
                        ) : null}
                        {path === 'link' ? (
                            <img
                                style={{
                                    width: '100%',
                                }}
                                src="./img/production/link-table-bg.png"
                                alt=""
                            />
                        ) : null}
                        {path === 'battery' ? (
                            <img
                                style={{
                                    width: '100%',
                                }}
                                src="./img/production/battery-table-bg.png"
                                alt=""
                            />
                        ) : null}
                        {path === 'sdsMini' ? (
                            <img
                                style={{
                                    width: '100%',
                                }}
                                src="./img/production/sdsMini-table-bg.png"
                                alt=""
                            />
                        ) : null}
                    </Grid>
                </Grid>
                {path === 'bpak' ? (
                    <Grid container>
                        <Grid item>
                            <img
                                src="./img/production/tech-char-img-1.jpg"
                                alt=""
                            />
                            <p>тепловізійна камера "PHOENIX EYE"</p>
                            <p>
                                Вона легко інтегрується з різноманітними
                                моделями БПЛА, працюючи як у день, так і вночі,
                                у будь-яких погодних умовах, що дозволяє
                                максимально розширити можливості розвідки та
                                спостереження в повітряному просторі.
                            </p>
                            <p>
                                Новаторська аналогова тепловізійна камера,
                                спеціально розроблена для безпілотних літальних
                                апаратів (БПЛА), що поєднує вищу роздільну
                                здатність та найвищу чутливість до теплового
                                випромінювання.
                            </p>
                            <p>
                                Ця універсальна камера забезпечує надзвичайно
                                чітке, деталізоване та високоякісне візуальне
                                представлення теплових об'єктів навіть у
                                найскладніших умовах.
                            </p>
                        </Grid>
                        <Grid item>
                            <img
                                src="./img/production/tech-char-img-2.jpg"
                                alt=""
                            />
                            <p>
                                Станція ретрансляції та керування “Sparrow Pro
                                Link”
                            </p>
                            <p>
                                Універсальна та інтуітивна система керування
                                безпілотними пристроями, ціль якої - підвищити
                                безпеку оператора завдяки розділенню модуля
                                передавача та керування на відстань до 80
                                метрів.
                            </p>
                            <p>
                                Захищений та адаптивний зв’язок з безпілотником,
                                за рахунок викориcтання дублювання каналів
                                відео, управління та телеметрії. Основний канал
                                передачі даних працює з технологією адаптивного
                                ППРЧ, що ускладнює подавлення сигналу управління
                                засобами РЕБ та виявлення засобами РЕР.
                            </p>
                            <p>
                                Станція ретрансляції та керування "Sparrow Pro
                                link" та ретрансляції призначена для БпАК "1В
                                БОМБЕР" та інших бортів виробництва ТОВ "СПРАРОУ
                                АВІА", але не обмежується в сумісності з іншими
                                розробками БпАК, що за рахунок простоти
                                використання та маштабування виробництва,
                                дозволить підвищити безпеку особистого складу
                                екіпажів БпАК.
                            </p>
                        </Grid>
                        <Grid item>
                            <img
                                src="./img/production/tech-char-img-3.jpg"
                                alt=""
                            />
                            <p>УНІВЕРСАЛЬНА МОДУЛЬНА СИСТЕМА СКИДУ “SDS-1”</p>
                            <p>
                                Швидкозмінна система скиду під 4 боєприпаси
                                калібру 60 мм або 2 боєприпаси 82 мм.
                            </p>
                            <p>УНІВЕРСАЛЬНА МОДУЛЬНА СИСТЕМА СКИДУ “SDS-2”</p>
                            <p>
                                Швидкозмінна система скиду під 4 касети по 3
                                боєприпаси калібру 40-50 м.
                            </p>
                        </Grid>
                    </Grid>
                ) : null}
            </Container>
        </>
    )
}
export default TechChar
