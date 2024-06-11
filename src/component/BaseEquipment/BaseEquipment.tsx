import {
    Container,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from '@mui/material'
import Paper from '@mui/material/Paper'
import './BaseEquipment.css'
import { bpakEquip } from 'utils/basicEquip'

type Props = {}
const BaseEquipment = (props: Props) => {
    return (
        <Container
            className="container"
            sx={{
                padding: '120px 0',
                position: 'relative',
            }}
        >
            <Grid>
                <div className="base-equip-title">
                    <h3>
                        базова
                        <br />
                        комплектація
                    </h3>
                </div>
            </Grid>
            <Grid
                container
                className="base-equip-wraper"
                sx={{
                    gap: '30px',
                    flexWrap: 'nowrap',
                    alignItems: 'center',
                }}
            >
                <Grid xs={6} item className="descript-description">
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
                                    aria-label="simple table"
                                    style={{
                                        borderBottom: 'none',
                                    }}
                                >
                                    <TableBody>
                                        {bpakEquip.map(
                                            ({ id, rowName, description }) => (
                                                <TableRow key={id}>
                                                    <TableCell
                                                        sx={{
                                                            padding: '10px',
                                                            lineHeight: '1.38',
                                                            width: '80%',
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
                        </div>
                    </div>
                </Grid>
                <Grid xs={6} item className="descript-description-player">
                    <div>
                        <a href="#main">
                            <img
                                src="./img/production/play-video-img.png"
                                alt=""
                            />
                        </a>
                    </div>
                </Grid>
                <div className="base-equip-bg-wraper"></div>
            </Grid>
        </Container>
    )
}
export default BaseEquipment
