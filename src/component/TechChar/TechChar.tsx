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
            </Container>
        </>
    )
}
export default TechChar
