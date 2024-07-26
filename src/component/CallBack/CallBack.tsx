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
                    <Grid item sm={video ? 5.5 : 4}>
                        {video ? (
                            <video
                                className="contact-video"
                                autoPlay
                                muted
                                loop
                            >
                                <source src="/video/cat.mp4" type="video/mp4" />
                                Ваш браузер не підтримує відео тег.
                            </video>
                        ) : null}
                    </Grid>
                    <Grid item sm={video ? 6.5 : 8}>
                        <div className="call-back-title">
                            <h3>Є питання?</h3>
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
