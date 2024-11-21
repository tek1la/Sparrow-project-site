import {
    AppBar,
    Box,
    Container,
    Toolbar,
    Slide,
    Grid,
    Button,
    Drawer,
    IconButton,
} from '@mui/material'
import Menu from '../component/Menu/Menu'
import LanguageMenu from '../component/Menu/LanguageMenu'
import Logo from '../component/Logo/Logo'
import { useEffect, useRef, useState } from 'react'
import HeaderMenu from 'component/Menu/HeaderMenu'
import SocialMediaIcons from 'component/SocialMediaIcons/SocialMediaIcons'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useMediaQuery } from '@mui/material'

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
    const isTabletOrSmaller = useMediaQuery('(max-width:768px)')
    const [isMenuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev)
    }
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
                    height: '84px',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Logo h={'50px'} w={'auto'} />
                {isTabletOrSmaller ? (
                    <>
                        <IconButton onClick={toggleMenu}>
                            <MenuIcon sx={{ color: 'white' }} />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={isMenuOpen}
                            onClose={toggleMenu}
                            PaperProps={{
                                sx: {
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: '#1C1C1C',
                                    color: 'white',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    height: '100%',
                                    p: 3,
                                }}
                            >
                                <Box>
                                    <HeaderMenu />
                                </Box>
                                {/* Верхня частина меню */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Logo h={'50px'} w={'auto'} />
                                    <IconButton
                                        onClick={toggleMenu}
                                        sx={{ color: 'white' }}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </Box>
                                {/* Основний список навігації */}
                                <Box
                                    sx={{
                                        mt: 4,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                        }}
                                    >
                                        <Menu />
                                    </Box>

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <SocialMediaIcons />
                                    </Box>
                                </Box>
                                {/* Нижня частина меню */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        mt: 'auto',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: 2,
                                            justifyContent: 'space-between',
                                            width: '100%',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Grid>
                                            <Button
                                                sx={{
                                                    minWidth: '40px',
                                                    height: '40px',
                                                    border: '1px solid white',
                                                    borderRadius: '50%',
                                                    color: 'white',
                                                }}
                                            >
                                                <img
                                                    src="img/light-theme_icon.svg"
                                                    alt="theme"
                                                />
                                            </Button>
                                        </Grid>
                                        <Grid>
                                            <LanguageMenu />
                                        </Grid>
                                    </Box>
                                </Box>
                            </Box>
                        </Drawer>
                    </>
                ) : (
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
                )}
            </Container>
        </AppBar>
    )
}
export default Header
