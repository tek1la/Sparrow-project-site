import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import './MenuItem.css'

type Props = {
    onClick?: () => void
    children: any
    className?: string
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    to?: any
}
const MenuItem = ({
    onClick,
    children,
    className,
    onMouseEnter,
    onMouseLeave,
    to,
}: Props) => {
    return (
        <>
            <Button
                onClick={onClick}
                sx={{
                    position: 'relative',
                }}
                color="inherit"
                className={className}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <NavLink to={to}>
                    <p>{children}</p>
                </NavLink>
            </Button>
        </>
    )
}
export default MenuItem
