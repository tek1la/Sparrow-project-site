import {
    AppBar,
    Box,
    Container,
    Toolbar,
    Slide,
    Grid,
    Button,
} from '@mui/material'
import Menu from '../component/Menu/Menu'
import LanguageMenu from '../component/Menu/LanguageMenu'
import Logo from '../component/Logo/Logo'
import { useEffect, useRef, useState } from 'react'
import HeaderMenu from 'component/Menu/HeaderMenu'

type Props = {}

function HideOnScroll(props: any) {
    const { children, trigger } = props
    return (
        <Slide appear={false} direction="down" in={trigger}>
            {children}
        </Slide>
    )
}

const Header = (props: Props) => {
    const [showHeader, setShowHeader] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [heroSection, setHeroSection] = useState(false)
    const [menuHeaderHeight, setMenuHeaderHeight] = useState('0px')
    const timeoutRef = useRef<number | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const isHeroSection = window.scrollY > window.innerHeight
            setHeroSection(isHeroSection)
            if (currentScrollY < lastScrollY) {
                // Scrolling up
                setShowHeader(true)
                setMenuHeaderHeight('0px')
                if (timeoutRef.current !== null) {
                    clearTimeout(timeoutRef.current)
                }
            } else if (currentScrollY > lastScrollY) {
                // Scrolling down
                if (timeoutRef.current !== null) {
                    clearTimeout(timeoutRef.current)
                }
                timeoutRef.current = window.setTimeout(() => {
                    setShowHeader(false)
                    setMenuHeaderHeight('-60px')
                }, 500)
                timeoutRef.current = window.setTimeout(() => {
                    setShowHeader(false)
                    setMenuHeaderHeight('-60px')
                }, 2000)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (timeoutRef.current !== null) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [lastScrollY])

    useEffect(() => {
        if (window.screenTop < 100) {
            timeoutRef.current = window.setTimeout(() => {
                setShowHeader(true)
                setMenuHeaderHeight('0px')
            }, 400)
        }
    }, [lastScrollY])

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: `rgba(28,28,28,${heroSection ? 1 : 0.4})`,
                transform: `translateY(${menuHeaderHeight})`,
                transition: 'all 0.15s linear',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <HideOnScroll trigger={showHeader}>
                <Grid
                    sx={{
                        display: 'flex',
                        marginTop: '20px',
                        height: '54px',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        maxWidth: '100%',
                    }}
                >
                    <Container className="container">
                        <HeaderMenu />
                    </Container>
                </Grid>
            </HideOnScroll>
            <Container
                className="container"
                sx={{
                    display: 'flex',
                    height: '90px',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Logo h={'50px'} w={'auto'} />
                <Toolbar
                    className="container"
                    sx={{
                        gap: '5vh',
                        height: '100%',
                    }}
                >
                    <Box
                        sx={{
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Menu />
                    </Box>
                    <Box>
                        <LanguageMenu />
                    </Box>
                    <Box>
                        <Button
                            sx={{
                                minWidth: '40px',
                            }}
                        >
                            <img src="img/light-theme_icon.svg" alt="" />
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
