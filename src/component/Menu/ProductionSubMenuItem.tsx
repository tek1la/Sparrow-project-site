import { Button } from '@mui/material'
import './MenuItem.css'

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
                href={`${path}`}
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
export default ProductionSubMenuItem
