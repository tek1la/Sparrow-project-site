import { Button } from '@mui/material'

import './MenuItem.css'

type Props = {
    children: any
    item: string
    itemActive: string
}
const MenuItem = ({ children, item, itemActive }: Props) => {
    let isActive: boolean = item === itemActive

    return (
        <>
            <Button color="inherit" className={isActive ? itemActive : item}>
                {children}
            </Button>
        </>
    )
}
export default MenuItem
