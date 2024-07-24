import { Container, Grid } from '@mui/material'
import './CallBack.css'
import ContactForm from 'component/ContactForm/ContactForm'

type Props = {}
const PriceList = (props: Props) => {
    return (
        <div className="call-back-bg-wraper">
            <Container
                className="container call-back-wraper"
                sx={{
                    padding: '120px 0 80px',
                }}
            >
                <Grid container>
                    <Grid item sm={4}></Grid>
                    <Grid item sm={8}>
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
