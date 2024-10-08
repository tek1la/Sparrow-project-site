import { Grid } from '@mui/material'
import About from 'component/About/About'
import HeroSection from 'component/HeroSection/HeroSection'
import './Home.css'
import Production from 'component/Production/Production'
import Advantages from 'component/Advantages/Advantages'
import Partners from 'component/Partners/Partners'
import News from 'component/News/News'
import Contacts from 'component/Contacts/Contacts'
import CallBack from 'component/CallBack/CallBack'
import Developments from 'component/Developments/Developments'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Grid className="body-wraper">
                <HeroSection />
                <Production />
                <Advantages />
                <About />
                <Contacts />
                <Developments />
                <Partners />
                <News />
                {/* <CallBack video={false} />
                <Result /> */}
                <CallBack video={true} />
            </Grid>
        </>
    )
}
export default Home
