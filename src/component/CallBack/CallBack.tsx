import { Container, Grid, useMediaQuery } from '@mui/material'
import './CallBack.css'
import ContactForm from 'component/ContactForm/ContactForm'

type Props = {
    video: boolean
}
const PriceList = ({ video }: Props) => {
    const isTablet = useMediaQuery('(max-width:1024px)')
    const isMobile = useMediaQuery('(max-width:545px)')
    return (
        <div className="call-back-bg-wraper">
            <Container
                className="container call-back-wraper"
                sx={{
                    padding: isMobile
                        ? '80px 15px 60px'
                        : isTablet
                          ? '120px 0 80px'
                          : '120px 0 80px',
                }}
            >
                <Grid container className="rev-dir-for-mob">
                    <Grid item sm={4}>
                        {video ? (
                            // <video
                            //     className="contact-video"
                            //     autoPlay
                            //     muted
                            //     loop
                            // >
                            //     <source src="/video/cat.mp4" type="video/mp4" />
                            //     Ваш браузер не підтримує відео тег.
                            // </video>
                            <div className="cat-img"></div>
                        ) : (
                            <div className="call-back-img"></div>
                        )}
                    </Grid>
                    <Grid item className="call-back-form-wraper" sm={8}>
                        <div className="call-back-title">
                            <h3>
                                Є питання<span>?</span>
                            </h3>
                            <div className="call-back-text">
                                Заповніть форму і ми зв'яжемося з вами
                                якнайшвидше!
                            </div>
                        </div>
                        <ContactForm />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default PriceList
