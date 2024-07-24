import { Grid } from '@mui/material'
import SouthIcon from '@mui/icons-material/South'

type Props = {}
const AnimatedBtn = (props: Props) => {
    const scrollDown = () => {
        window.scrollBy({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth',
        })
    }
    return (
        <Grid
            className="down-btn-animated"
            sx={{
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                bottom: '30px',
                left: '0',
                right: '0',
            }}
        >
            <Grid
                onClick={scrollDown}
                sx={{
                    cursor: 'pointer',
                }}
            >
                <img src="img/arrow_bottom.svg" alt="" />
            </Grid>
        </Grid>
    )
}
export default AnimatedBtn
