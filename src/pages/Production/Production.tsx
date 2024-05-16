import { Container, Grid } from '@mui/material'
import SouthIcon from '@mui/icons-material/South'

type Props = {}
const Production = (props: Props) => {
    return (
        <>
            <div className="hero-wrapper">
                <div className="bg-wrapper">
                    <Container
                        className="container"
                        sx={{
                            height: '1024px',
                            paddingTop: '255px',
                        }}
                    >
                        <Grid
                            container
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <Grid
                                item
                                sx={{
                                    height: '205px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    position: 'relative',
                                }}
                            >
                                <p className="title-text">НАШЕ НЕБО</p>
                                <div className="title-text-bg"></div>
                            </Grid>
                            <Grid item>
                                <h1 className="title">
                                    УКРАЇНСЬКИЙ ВИРОБНИК СУЧАСНИХ УДАРНИХ БПЛА
                                </h1>
                            </Grid>
                            <Grid
                                item
                                sx={{
                                    height: '205px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    position: 'relative',
                                }}
                            >
                                <p className="title-text second-title-text">
                                    НАШІ ПРАВИЛА
                                </p>
                            </Grid>
                        </Grid>
                        <Grid
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '230px',
                            }}
                        >
                            <SouthIcon
                                sx={{
                                    border: '1px solid white',
                                    padding: '3px',
                                    borderRadius: '25px',
                                    color: 'white',
                                    height: '43px',
                                    width: '43px',
                                }}
                            />
                        </Grid>
                        <div className="second-title-text-bg"></div>
                    </Container>
                </div>
            </div>
        </>
    )
}
export default Production
