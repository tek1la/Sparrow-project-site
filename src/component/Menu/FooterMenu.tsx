import { Grid } from '@mui/material'
import MenuItem from './MenuItem'

type Props = {}
const FooterMenu = (props: Props) => {
    return (
        <>
            <Grid className="footer-menu-item-wraper">
                <MenuItem className="footer-menu-item">БЛОГ</MenuItem>
                <MenuItem className="footer-menu-item">ПРО НАС</MenuItem>
            </Grid>
        </>
    )
}
export default FooterMenu
