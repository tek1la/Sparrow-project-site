import { Button } from '@mui/material'
import './MenuItem.css'

type Props = {
    onClick?: () => void
    children: any
    className?: string
    onMouseEnter?: () => void
    onMouseLeave?: () => void
}
const MenuItem = ({
    onClick,
    children,
    className,
    onMouseEnter,
    onMouseLeave,
}: Props) => {
    // const childrenContent = Array.isArray(children) ? 'ВИРОБНИЦТВО' : children
    return (
        <>
            <Button
                onClick={onClick}
                // href={`/#${childrenContent}`}
                sx={{
                    position: 'relative',
                }}
                color="inherit"
                className={className}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <p>{children}</p>
            </Button>
        </>
    )
}
export default MenuItem
