import { CssBaseline, StyledEngineProvider } from '@mui/material'
import Header from './Header'
import Footer from './Footer'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home/Home'
import Production from '../pages/Production/Production'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
                <Routes>
                    <Route path="//" element={<Home />} />
                    <Route path="production" element={<Production />} />
                </Routes>
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App
