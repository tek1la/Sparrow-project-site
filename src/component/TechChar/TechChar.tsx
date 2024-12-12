import { Container, Grid, useMediaQuery } from '@mui/material'
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
                          ? '100px 30px 70px'
                          : '120px 0 80px',
                    position: 'relative',
                }}
            >
                <Grid container className="tech-char-wraper">
                    <Grid item md={4} sm={0}></Grid>
                    <Grid item md={8} sm={12} className="tech-char-title">
                        <h3>технічні характеристики</h3>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid
                        xs={tableSize || 12}
                        item
                        className="tech-char-description"
                    >
                        <div className="tech-char-text">
                            <div className="tech-char-first-text">
                                <TableContainer
                                    component={Paper}
                                    className="link-table"
                                >
                                    <Table
                                        sx={{ minWidth: 650 }}
                                        aria-label="simple table"
                                    >
                                        {path === 'bpak' ? (
                                            <TableBody>
                                                {bpak.map(
                                                    ({
                                                        id,
                                                        rowName,
                                                        description,
                                                        number,
                                                    }) => (
                                                        <TableRow
                                                            className="table-row"
                                                            key={id}
                                                        >
                                                            <TableCell
                                                                sx={{
                                                                    lineHeight:
                                                                        '1.38',
                                                                    width: isMobile
                                                                        ? '8%'
                                                                        : '33.4%',
                                                                }}
                                                                component="th"
                                                                scope="row"
                                                                className="table-cell"
                                                            >
                                                                {number}
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{
                                                                    lineHeight:
                                                                        '1.38',
                                                                    width: '33.333%',
                                                                }}
                                                                component="th"
                                                                scope="row"
                                                                className="table-cell"
                                                            >
                                                                {rowName}
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{
                                                                    lineHeight:
                                                                        '1.38',
                                                                }}
                                                                className="table-cell"
                                                                component="th"
                                                                scope="row"
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
                                                        number,
                                                    }) => (
                                                        <TableRow
                                                            key={id}
                                                            className={header}
                                                        >
                                                            <TableCell
                                                                sx={{
                                                                    lineHeight:
                                                                        '1.38',
                                                                    width: '5%',
                                                                }}
                                                                component="th"
                                                                scope="row"
                                                                className="table-cell"
                                                            >
                                                                {number}
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{
                                                                    lineHeight:
                                                                        '1.38',
                                                                    width: '28.4%',
                                                                }}
                                                                component="th"
                                                                scope="row"
                                                                className="table-cell"
                                                            >
                                                                {rowName}
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{
                                                                    lineHeight:
                                                                        '1.38',
                                                                    width: '33.333%',
                                                                }}
                                                                className="table-cell"
                                                                align="left"
                                                            >
                                                                {description}
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{
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
                                                        number,
                                                    }) => (
                                                        <TableRow key={id}>
                                                            <TableCell
                                                                sx={{
                                                                    lineHeight:
                                                                        '1.38',
                                                                    width: isMobile
                                                                        ? '8%'
                                                                        : '33.4%',
                                                                }}
                                                                component="th"
                                                                scope="row"
                                                                className="table-cell"
                                                            >
                                                                {number}
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{
                                                                    lineHeight:
                                                                        '1.38',
                                                                    width: '33.3333%',
                                                                }}
                                                                className="table-cell"
                                                                align="left"
                                                            >
                                                                {rowName}
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{
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
                                                        secondDescription,
                                                        thirdDescription,
                                                        fourthDescription,
                                                        header,
                                                        number,
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
                                                                    width: '6%',
                                                                }}
                                                                component="th"
                                                                scope="row"
                                                                className="table-cell battery-table-cell"
                                                            >
                                                                {number}
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{
                                                                    padding:
                                                                        '10px',
                                                                    lineHeight:
                                                                        '1.38',
                                                                    width: '26.1%',
                                                                }}
                                                                component="th"
                                                                scope="row"
                                                                className="table-cell battery-table-cell"
                                                            >
                                                                {rowName}
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{
                                                                    padding:
                                                                        '10px',
                                                                    lineHeight:
                                                                        '1.38',
                                                                    width: '16%',
                                                                }}
                                                                className="table-cell battery-table-cell"
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
                                                                    width: '16%',
                                                                }}
                                                                className="table-cell battery-table-cell"
                                                                align="left"
                                                            >
                                                                {
                                                                    secondDescription
                                                                }
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{
                                                                    padding:
                                                                        '10px',
                                                                    lineHeight:
                                                                        '1.38',
                                                                    width: '16%',
                                                                }}
                                                                className="table-cell battery-table-cell"
                                                                align="left"
                                                            >
                                                                {
                                                                    thirdDescription
                                                                }
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{
                                                                    padding:
                                                                        '10px',
                                                                    lineHeight:
                                                                        '1.38',
                                                                    width: '16%',
                                                                }}
                                                                className="table-cell battery-table-cell"
                                                                align="left"
                                                            >
                                                                {
                                                                    fourthDescription
                                                                }
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                )}
                                            </TableBody>
                                        ) : null}
                                        {path === 'sdsMini' ? (
                                            <TableBody
                                                sx={{
                                                    width: '100%',
                                                }}
                                            >
                                                {sdsMini.map(
                                                    ({
                                                        id,
                                                        rowName,
                                                        description,
                                                        secondDescription,
                                                        thirdDescription,
                                                        number,
                                                        mainHeader,
                                                        secondRowName,
                                                        thirdRowName,
                                                    }) => (
                                                        <TableRow
                                                            key={id}
                                                            className="table-main"
                                                        >
                                                            {id === 6 ? (
                                                                <>
                                                                    <TableCell
                                                                        sx={{
                                                                            lineHeight:
                                                                                '1.38',
                                                                            width: isMobile
                                                                                ? '8%'
                                                                                : '33.4%',
                                                                        }}
                                                                        component="th"
                                                                        scope="row"
                                                                        className="table-cell"
                                                                    >
                                                                        {number}
                                                                    </TableCell>
                                                                    <TableCell
                                                                        colSpan={
                                                                            2
                                                                        }
                                                                        sx={{
                                                                            lineHeight:
                                                                                '1.38',
                                                                            width: '33.3333%',
                                                                        }}
                                                                        className="table-cell span-table-cell"
                                                                        align="left"
                                                                    >
                                                                        <Table size="small">
                                                                            <TableBody>
                                                                                <TableRow>
                                                                                    <TableCell
                                                                                        colSpan={
                                                                                            2
                                                                                        }
                                                                                        className="table-cell right-table-cell"
                                                                                        sx={{
                                                                                            fontWeight:
                                                                                                '700',
                                                                                        }}
                                                                                    >
                                                                                        {
                                                                                            mainHeader
                                                                                        }
                                                                                    </TableCell>
                                                                                </TableRow>
                                                                                <TableRow>
                                                                                    <TableCell
                                                                                        sx={{
                                                                                            lineHeight:
                                                                                                '1.38',
                                                                                            width: '50%',
                                                                                        }}
                                                                                        className="table-cell"
                                                                                    >
                                                                                        {
                                                                                            rowName
                                                                                        }
                                                                                    </TableCell>
                                                                                    <TableCell
                                                                                        className="table-cell right-table-cell"
                                                                                        align="left"
                                                                                    >
                                                                                        {
                                                                                            description
                                                                                        }
                                                                                    </TableCell>
                                                                                </TableRow>
                                                                                <TableRow>
                                                                                    <TableCell
                                                                                        sx={{
                                                                                            lineHeight:
                                                                                                '1.38',
                                                                                            width: '50%',
                                                                                        }}
                                                                                        className="table-cell"
                                                                                    >
                                                                                        {
                                                                                            secondRowName
                                                                                        }
                                                                                    </TableCell>
                                                                                    <TableCell
                                                                                        className="table-cell right-table-cell"
                                                                                        align="left"
                                                                                    >
                                                                                        {
                                                                                            secondDescription
                                                                                        }
                                                                                    </TableCell>
                                                                                </TableRow>
                                                                                <TableRow>
                                                                                    <TableCell
                                                                                        sx={{
                                                                                            lineHeight:
                                                                                                '1.38',
                                                                                            width: '50%',
                                                                                        }}
                                                                                        className="table-cell bottom-table-cell"
                                                                                    >
                                                                                        {
                                                                                            thirdRowName
                                                                                        }
                                                                                    </TableCell>
                                                                                    <TableCell
                                                                                        className="table-cell bottom-table-cell right-table-cell"
                                                                                        align="left"
                                                                                    >
                                                                                        {
                                                                                            thirdDescription
                                                                                        }
                                                                                    </TableCell>
                                                                                </TableRow>
                                                                            </TableBody>
                                                                        </Table>
                                                                    </TableCell>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <TableCell
                                                                        sx={{
                                                                            lineHeight:
                                                                                '1.38',
                                                                            width: isMobile
                                                                                ? '8%'
                                                                                : '33.4%',
                                                                        }}
                                                                        component="th"
                                                                        scope="row"
                                                                        className="table-cell"
                                                                    >
                                                                        {number}
                                                                    </TableCell>
                                                                    <TableCell
                                                                        sx={{
                                                                            lineHeight:
                                                                                '1.38',
                                                                            width: '33.3333%',
                                                                        }}
                                                                        className="table-cell"
                                                                        align="left"
                                                                    >
                                                                        {
                                                                            rowName
                                                                        }
                                                                    </TableCell>
                                                                    <TableCell
                                                                        sx={{
                                                                            lineHeight:
                                                                                '1.38',
                                                                            width: '33.3333%',
                                                                        }}
                                                                        className="table-cell"
                                                                        align="left"
                                                                    >
                                                                        {
                                                                            description
                                                                        }
                                                                    </TableCell>
                                                                </>
                                                            )}
                                                        </TableRow>
                                                    )
                                                )}
                                            </TableBody>
                                        ) : null}
                                    </Table>
                                    <div className="table-text-wraper">
                                        <p className="table-text">
                                            *комплектація та зовнішній вигляд
                                            можуть бути змінені вироюбником, з
                                            обов’язковим
                                            <br />
                                            дотриманням заявлених ТТХ виробу.
                                        </p>
                                    </div>
                                </TableContainer>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default TechChar
