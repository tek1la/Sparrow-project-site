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
    const [headerHeight, setHeaderHeight] = useState('135px')

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 200
            const isHeroSection = window.scrollY > 1024
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled)
            }
            if (isHeroSection !== scrolled) {
                setHeaderHeight('100px')
            }
            // else if (isHeroSection !== window.scrollY > 1024) {
            //     setHeaderHeight('100px')
            // }
        }

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
                    height: `${headerHeight}`,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Container
                    className="container"
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Logo h={'55px'} w={'auto'} />
                    <Toolbar
                        className="container"
                        sx={{
                            gap: '5vh',
                        }}
                    >
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
