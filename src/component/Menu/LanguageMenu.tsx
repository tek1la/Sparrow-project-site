// import LanguageMenuItem from './LanguageMenuItem'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

type Props = {}
const LanguageMenu = (props: Props) => {
    const { i18n } = useTranslation()

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }

    return (
        <>
            <Button
                sx={{
                    position: 'relative',
                    height: '100%',
                }}
                color="inherit"
                className="menu-item"
                onClick={() => changeLanguage('ua')}
            >
                UA
            </Button>
            {/* <Button
                sx={{
                    position: 'relative',
                    height: '100%',
                }}
                color="inherit"
                className="menu-item"
                onClick={() => changeLanguage('en')}
            >
                EN
            </Button> */}
            {/* <LanguageMenuItem>UA</LanguageMenuItem>
            <LanguageMenuItem>EN</LanguageMenuItem> */}
        </>
    )
}
export default LanguageMenu
