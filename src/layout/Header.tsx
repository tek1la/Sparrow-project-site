import {
    AppBar,
    Box,
    Container,
    Toolbar,
    useScrollTrigger,
    Slide,
} from '@mui/material'
import Menu from '../component/Menu/Menu'
import LanguageMenu from '../component/Menu/LanguageMenu'
import Logo from '../component/Logo/Logo'
import { useEffect, useState } from 'react'

type Props = {}

function HideOnScroll(props: any) {
    const { children } = props
    const trigger = useScrollTrigger()

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}

const Header = (props: Props) => {
    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        const isScrolled = window.scrollY > 200
        if (isScrolled !== scrolled) {
            setScrolled(isScrolled)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrolled])

    const getAppBarOpacity = () => {
        return scrolled ? 0.8 : 0.1
    }

    return (
        <HideOnScroll>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: `rgba(28,28,28,${getAppBarOpacity()})`,
                    height: '135px',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Container className="container">
                    <Toolbar
                        className="container"
                        sx={{
                            justifyContent: 'space-between',
                        }}
                    >
                        <Logo h={'55px'} w={'auto'} />
                        <Box>
                            <Menu
                                item={'menu-item'}
                                itemActive={'menu-item-active'}
                            />
                        </Box>
                        <Box>
                            <LanguageMenu
                                item={'menu-item'}
                                itemActive={'menu-item-active'}
                            />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </HideOnScroll>
    )
}
export default Header
