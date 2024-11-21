import logo from 'assets/menu_logo_img.svg'
import { Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import './Logo.css'

type Props = {
    h: string
    w: string
}
const Logo = ({ h, w }: Props) => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <Typography variant="h6" component="div">
            <NavLink to="/" className="logo-link" onClick={handleScrollToTop}>
                <img src={logo} alt="" height={h} width={w} />
            </NavLink>
        </Typography>
    )
}
export default Logo
