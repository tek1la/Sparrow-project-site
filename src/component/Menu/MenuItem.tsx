import { Button } from '@mui/material'
import './MenuItem.css'

type Props = {
    children: any
    onMouseEnter?: () => void
    onMouseLeave?: () => void
}
const MenuItem = ({ children, onMouseEnter, onMouseLeave }: Props) => {
    const childrenContent = Array.isArray(children) ? 'ВИРОБНИЦТВО' : children
    console.log(childrenContent)
    return (
        <>
            <Button
                href={`/#${childrenContent}`}
                sx={{
                    position: 'relative',
                    height: '100%',
                }}
                color="inherit"
                className="menu-item"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <p>{children}</p>
            </Button>
        </>
    )
}
export default MenuItem
