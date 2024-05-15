import LanguageMenuItem from './MenuItem'

type Props = {
    item: string
    itemActive: string
}
const LanguageMenu = ({ item, itemActive }: Props) => {
    return (
        <>
            <LanguageMenuItem>UA</LanguageMenuItem>
            <LanguageMenuItem>EN</LanguageMenuItem>
        </>
    )
}
export default LanguageMenu
