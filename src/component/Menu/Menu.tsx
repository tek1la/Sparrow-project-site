import MenuItem from './MenuItem'

type Props = {
    item: string
    itemActive: string
}
const Menu = ({ item, itemActive }: Props) => {
    return (
        <>
            <MenuItem item={item} itemActive={itemActive}>
                ПРО НАС
            </MenuItem>
            <MenuItem item={item} itemActive={itemActive}>
                ВИРОБНИЦТВО
            </MenuItem>
            <MenuItem item={item} itemActive={itemActive}>
                НОВИНИ
            </MenuItem>
            <MenuItem item={item} itemActive={itemActive}>
                ПРЕЙСКУРАНТ
            </MenuItem>
            <MenuItem item={item} itemActive={itemActive}>
                КОНТАКТИ
            </MenuItem>
        </>
    )
}
export default Menu
