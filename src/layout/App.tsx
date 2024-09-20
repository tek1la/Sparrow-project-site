import { CssBaseline, StyledEngineProvider } from '@mui/material'
import Header from './Header'
import Footer from './Footer'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home/Home'
import Blog from '../pages/Blog/Blog'
import Contacts from '../pages/Contacts/Contacts'
import Production from '../pages/Production/Production'
import { productionArray } from 'utils/productionArray'
import 'utils/i18n'
import { useTranslation } from 'react-i18next' // Імпорт хука для перекладів

type Props = {}
const App = (props: Props) => {
    const { t } = useTranslation() // Ініціалізація хука для доступу до перекладів
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
                <Routes>
                    <Route path="//" element={<Home />} />
                    <Route path="all-news" element={<Blog />} />
                    <Route path="contacts" element={<Contacts />} />
                    {productionArray.map(
                        ({
                            id,
                            title,
                            subTitle,
                            firstTitle,
                            secondTitle,
                            description,
                            productionImg,
                            video,
                            path,
                        }) => (
                            <Route
                                key={id}
                                path={path}
                                element={
                                    <Production
                                        id={id}
                                        title={title}
                                        subTitle={subTitle}
                                        firstTitle={firstTitle}
                                        secondTitle={secondTitle}
                                        description={description}
                                        productionImg={productionImg}
                                        video={video}
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
