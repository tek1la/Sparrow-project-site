import { Container, Grid } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import './Accessories.css'
import { accessories } from 'utils/accessoriesArray'

type Props = {}
const Accessories = (props: Props) => {
    return (
        <>
            <Container
                className="container"
                sx={{
                    padding: '120px 0',
                    position: 'relative',
                }}
            >
                <div className="accessories-title">
                    <h3>комплектуючі</h3>
                </div>
                <Grid container className="descript-wraper">
                    <Grid xs={6} item className="descript-description">
                        <div className="descript-text">
                            <div
                                className="descript-second-text"
                                style={{
                                    marginBottom: '15px',
                                }}
                            >
                                <p>
                                    Додатково комплектуємо акумуляторами 6S2P з
                                    елементів molicel.
                                </p>
                            </div>
                            <div className="descript-first-text">
                                <p>
                                    Елементи molicel INR-21700-P42A мають високу
                                    енергоємність, що забезпечує тривалу роботу
                                    БпЛА. Вони також здатні працювати в холоді
                                    до -40, що робить їх ідеальними для
                                    використання в зимових умовах.
                                </p>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={6} item className="descript-img">
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
                                    {accessories.map(
                                        ({
                                            id,
                                            rowName,
                                            description,
                                            header,
                                        }) => (
                                            <TableRow
                                                key={id}
                                                className={header}
                                            >
                                                <TableCell
                                                    sx={{
                                                        padding: '10px',
                                                        lineHeight: '1.38',
                                                        width: '50%',
                                                    }}
                                                    component="th"
                                                    scope="row"
                                                    className="table-cell"
                                                >
                                                    {rowName}
                                                </TableCell>
                                                <TableCell
                                                    sx={{
                                                        padding: '10px',
                                                        lineHeight: '1.38',
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
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default Accessories
