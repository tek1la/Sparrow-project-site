import LanguageMenuItem from './MenuItem'

type Props = {
    item: string
    itemActive: string
}
const LanguageMenu = ({ item, itemActive }: Props) => {
    return (
        <>
            <LanguageMenuItem item={item} itemActive={itemActive}>
                UA
            </LanguageMenuItem>
            <LanguageMenuItem item={item} itemActive={itemActive}>
                EN
            </LanguageMenuItem>
        </>
    )
}
export default LanguageMenu
