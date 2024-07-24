import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

type Props = {
    children: any
}
const MenuItem = ({ children }: Props) => {
    return (
        <>
            <Button
                sx={{
                    position: 'relative',
                    height: '100%',
                }}
                color="inherit"
                className="menu-item"
            >
                <NavLink to={children}>{children}</NavLink>
            </Button>
        </>
    )
}
export default MenuItem
