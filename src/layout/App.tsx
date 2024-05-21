import { CssBaseline, StyledEngineProvider } from '@mui/material'
import Header from './Header'
import Footer from './Footer'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home/Home'
import Production from '../pages/Production/Production'
import { productionArray } from 'utils/productionArray'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
                <Routes>
                    <Route path="//" element={<Home />} />
                    {productionArray.map(
                        ({ id, title, firstTitle, secondTitle, path }) => (
                            <Route
                                key={id}
                                path={path}
                                element={
                                    <Production
                                        title={title}
                                        firstTitle={firstTitle}
                                        secondTitle={secondTitle}
                                        path={path}
                                    />
                                }
                            />
                        )
                    )}
                </Routes>
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App
