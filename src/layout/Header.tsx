import { AppBar, Box, Container, Toolbar } from '@mui/material'
import Menu from '../component/Menu/Menu'
import LanguageMenu from '../component/Menu/LanguageMenu'
import Logo from '../component/Logo/Logo'

type Props = {}
const Header = (props: Props) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: 'rgba(28,28,28,0.1)',
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
    )
}
export default Header
