import { Container, Grid } from '@mui/material'
import './Advantages.css'

type Props = {}
const Advantages = (props: Props) => {
    return (
        <>
            <Container
                className="container"
                sx={{
                    padding: '120px 0',
                }}
            >
                <Grid>
                    <div className="advantages-title">
                        <h3>основні переваги</h3>
                    </div>
                </Grid>
                <Grid
                    container
                    gap={3.5}
                    wrap="nowrap"
                    className="advantages-items-wraper"
                >
                    <Grid item sm={4} className="advantage-item">
                        <p>Максимальна точність ударів</p>
                    </Grid>
                    <Grid item sm={4} className="advantage-item">
                        <p>Надійність та стабільність</p>
                    </Grid>
                    <Grid item sm={4} className="advantage-item">
                        <p>Гнучкість та мобільність</p>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default Advantages
