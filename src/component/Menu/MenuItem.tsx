import { Button } from '@mui/material'
import './MenuItem.css'

type Props = {
    children: any
    onMouseEnter?: () => void
    onMouseLeave?: () => void
}
const MenuItem = ({ children, onMouseEnter, onMouseLeave }: Props) => {
    return (
        <>
            <Button
                sx={{
                    position: 'relative',
                }}
                color="inherit"
                className="menu-item"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {children}
            </Button>
        </>
    )
}
export default MenuItem
