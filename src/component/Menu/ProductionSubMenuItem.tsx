import { Button } from '@mui/material'
import './MenuItem.css'
import { NavLink } from 'react-router-dom'

type Props = {
    children: any
    path: string
    onMouseEnter?: () => void
    onMouseLeave?: () => void
}
const ProductionSubMenuItem = ({
    children,
    path,
    onMouseEnter,
    onMouseLeave,
}: Props) => {
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
            >
                <NavLink
                    to={path}
                    style={{
                        width: '100%',
                    }}
                >
                    {children}
                </NavLink>
            </Button>
        </>
    )
}
export default ProductionSubMenuItem
