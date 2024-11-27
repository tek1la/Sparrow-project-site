import { Container, Grid, useMediaQuery } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import './BaseEquipment.css'
import { bpakEquip, reLinkEquip } from 'utils/basicEquip'

type Props = {
    path: string
}
const BaseEquipment = ({ path }: Props) => {
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
                <Grid container className="base-equip-wraper">
                    <Grid item sm={12} className="base-equip-title">
                        <h3>базова комплектація</h3>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid xs={12} item className="base-equip-description">
                        <div className="base-equip-text">
                            <div className="base-equip-first-text">
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
                                                {bpakEquip.map(
                                                    ({
                                                        id,
                                                        rowName,
                                                        number,
                                                        secondNumber,
                                                        secondRowName,
                                                    }) => (
                                                        <TableRow
                                                            className="table-row"
                                                            key={id}
                                                        >
                                                            <TableCell
                                                                component="th"
                                                                scope="row"
                                                                className="table-cell"
                                                            >
                                                                {number}
                                                            </TableCell>
                                                            <TableCell
                                                                component="th"
                                                                scope="row"
                                                                className="table-cell second-table-cell"
                                                            >
                                                                {rowName}
                                                            </TableCell>
                                                            <TableCell
                                                                className="table-cell second-table-cell"
                                                                component="th"
                                                                scope="row"
                                                                align="left"
                                                            >
                                                                {secondNumber}
                                                            </TableCell>
                                                            <TableCell
                                                                className="table-cell"
                                                                component="th"
                                                                scope="row"
                                                                align="left"
                                                            >
                                                                {secondRowName}
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                )}
                                            </TableBody>
                                        ) : null}
                                        {path === 'link' ? (
                                            <TableBody>
                                                {reLinkEquip.map(
                                                    ({
                                                        id,
                                                        rowName,
                                                        number,
                                                        secondNumber,
                                                        secondRowName,
                                                    }) => (
                                                        <TableRow
                                                            className="table-row"
                                                            key={id}
                                                        >
                                                            <TableCell
                                                                component="th"
                                                                scope="row"
                                                                className="table-cell"
                                                            >
                                                                {number}
                                                            </TableCell>
                                                            <TableCell
                                                                component="th"
                                                                scope="row"
                                                                className="table-cell second-table-cell"
                                                            >
                                                                {rowName}
                                                            </TableCell>
                                                            <TableCell
                                                                className="table-cell second-table-cell"
                                                                component="th"
                                                                scope="row"
                                                                align="left"
                                                            >
                                                                {secondNumber}
                                                            </TableCell>
                                                            <TableCell
                                                                className="table-cell"
                                                                component="th"
                                                                scope="row"
                                                                align="left"
                                                            >
                                                                {secondRowName}
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
                </Grid>
            </Container>
        </>
    )
}
export default BaseEquipment
