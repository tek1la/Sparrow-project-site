import logo from 'assets/menu_logo_img.svg'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import './Logo.css'

type Props = {
    h: string
    w: string
}
const Logo = ({ h, w }: Props) => {
    return (
        <Typography variant="h6" component="div">
            <Link to="/" className="logo-link">
                <img src={logo} alt="" height={h} width={w} />
            </Link>
        </Typography>
    )
}
export default Logo
