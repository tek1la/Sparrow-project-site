import { Container, Grid } from '@mui/material'
import About from 'component/About/About'
import HeroSection from 'component/HeroSection/HeroSection'
import './Home.css'
import Production from 'component/Production/Production'
import Advantages from 'component/Advantages/Advantages'
import Result from 'component/Result/Result'
import Partners from 'component/Partners/Partners'
import News from 'component/News/News'
import Contacts from 'component/Contacts/Contacts'
import AnimatedText from 'component/AnimatedText/AnimatedText'
import PriceList from 'component/PriceList/PriceList'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <HeroSection />
            <Grid className="body-wraper">
                <About />
                <Production />
                <Advantages />
                <Result />
                <PriceList />
                <Partners />
                <News />
                <Container
                    className="animated-text-wraper"
                    sx={{
                        maxWidth: '100%',
                    }}
                >
                    <AnimatedText text="#Ударний БпАК “1В БОМБЕР”&emsp;&emsp;#Ударні FPV дрони “ГОРОБЕЦЬ”&emsp;&emsp;#Станція ретрансляції “FPV Re-Link”&emsp;&emsp;#Акумуляторні збірки" />
                </Container>
                <Contacts />
            </Grid>
        </>
    )
}
export default Home
