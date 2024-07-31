import { Container, Grid } from '@mui/material'
import './CallBack.css'
import ContactForm from 'component/ContactForm/ContactForm'

type Props = {
    video: boolean
}
const PriceList = ({ video }: Props) => {
    return (
        <div className="call-back-bg-wraper">
            <Container
                className="container call-back-wraper"
                sx={{
                    padding: '120px 0 80px',
                }}
            >
                <Grid container>
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
                    <Grid
                        item
                        sm={8}
                        sx={{
                            paddingTop: '50px',
                        }}
                    >
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
