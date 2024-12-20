import { Button } from '@mui/material'
import './MenuItem.css'
import { NavLink } from 'react-router-dom'

type Props = {
    children: any
    path: string
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    onMenuItemClick?: () => void
}
const ProductionSubMenuItem = ({
    children,
    path,
    onMouseEnter,
    onMouseLeave,
    onMenuItemClick,
}: Props) => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <>
            <Button
                sx={{
                    position: 'relative',
                    width: '100% !important',
                    margin: '0 !important',
                }}
                color="inherit"
                className="menu-item"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={() => {
                    handleScrollToTop()
                    onMenuItemClick && onMenuItemClick()
                }}
            >
                <NavLink
                    to={path}
                    className="sub-menu-text"
                    style={{
                        width: '100%',
                        textAlign: 'left',
                    }}
                >
                    {children}
                </NavLink>
            </Button>
        </>
    )
}
export default ProductionSubMenuItem
