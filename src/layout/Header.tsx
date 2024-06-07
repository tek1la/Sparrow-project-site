import { AppBar, Box, Container, Toolbar, Slide } from '@mui/material'
import Menu from '../component/Menu/Menu'
import LanguageMenu from '../component/Menu/LanguageMenu'
import Logo from '../component/Logo/Logo'
import { useEffect, useRef, useState } from 'react'

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
    const timeoutRef = useRef<number | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const isHeroSection = window.scrollY > window.innerHeight
            setHeroSection(isHeroSection)

            if (currentScrollY < lastScrollY) {
                // Scrolling up
                setShowHeader(true)
                if (timeoutRef.current !== null) {
                    clearTimeout(timeoutRef.current)
                }
            } else if (currentScrollY > lastScrollY) {
                // Scrolling down
                if (timeoutRef.current !== null) {
                    clearTimeout(timeoutRef.current)
                    timeoutRef.current = window.setTimeout(() => {
                        setShowHeader(false)
                        console.log('hideHeader')
                    }, 500)
                }
                timeoutRef.current = window.setTimeout(() => {
                    setShowHeader(false)
                    console.log('blablabla')
                }, 500)
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

    return (
        <HideOnScroll trigger={showHeader}>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: `rgba(28,28,28,${heroSection ? 1 : 0.4})`,
                    height: `95px`,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Container
                    className="container"
                    sx={{
                        display: 'flex',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Logo h={'55px'} w={'auto'} />
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
