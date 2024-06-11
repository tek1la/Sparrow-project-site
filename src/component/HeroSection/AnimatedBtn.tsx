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
            <SouthIcon
                onClick={scrollDown}
                sx={{
                    border: '1px solid white',
                    padding: '3px',
                    borderRadius: '25px',
                    color: 'white',
                    height: '43px',
                    width: '43px',
                    cursor: 'pointer',
                }}
            />
        </Grid>
    )
}
export default AnimatedBtn
