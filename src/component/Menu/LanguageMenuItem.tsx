import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

type Props = {
    to: string
    children: any
    item: string
    itemActive: string
}
const MenuItem = ({ to, children, item, itemActive }: Props) => {
    return (
        <>
            <Button color="inherit">
                <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? itemActive : item)}
                >
                    {children}
                </NavLink>
            </Button>
        </>
    )
}
export default MenuItem
