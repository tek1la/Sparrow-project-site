import { Container, Grid } from '@mui/material'
import './Contacts.css'

type Props = {}
const Contacts = (props: Props) => {
    return (
        <>
            <div className="contact-bg-wraper">
                <Container
                    id="КОНТАКТИ"
                    className="container"
                    sx={{
                        padding: '80px 0 80px',
                        position: 'relative',
                    }}
                >
                    <Grid container className="contacts-title-wraper">
                        <Grid item sm={4}></Grid>
                        <Grid item sm={8} className="contacts-title">
                            <h3>контакти</h3>
                        </Grid>
                    </Grid>
                    <Grid container gap={0.5}>
                        <Grid item sm={4} className="contact-item">
                            <div className="contact-icon">
                                <a
                                    href="tel:+380732446161"
                                    className="contacts"
                                >
                                    <img src="img/phone.svg" alt="" />
                                </a>
                            </div>
                            <div className="contact-info">
                                <a
                                    href="tel:+380732446161"
                                    className="contacts"
                                >
                                    <p>
                                        <span className="contact-tel">
                                            + 38 073 244 61 61
                                        </span>

                                        <br />
                                        <span className="contact-text">
                                            (відділ зв'язків з громадськістю)
                                        </span>
                                    </p>
                                </a>
                            </div>
                        </Grid>
                        <Grid item sm={3.92} className="contact-item">
                            <div className="contact-info">
                                <a
                                    href="tel:+380962446161"
                                    className="contacts"
                                >
                                    <p>
                                        <span className="contact-tel">
                                            + 38 096 244 61 61
                                        </span>
                                        <br />
                                        <span className="contact-text">
                                            (відділ продажів)
                                        </span>
                                    </p>
                                </a>
                            </div>
                        </Grid>
                        <Grid item sm={4} className="contact-item">
                            <div className="contact-icon">
                                <a
                                    href="mailto:info@sparrow-avia.tech"
                                    className="contacts"
                                >
                                    <img src="img/e-mail.svg" alt="" />
                                </a>
                            </div>
                            <div className="contact-info">
                                <a
                                    href="mailto:info@sparrow-avia.tech"
                                    className="contacts"
                                >
                                    <p>
                                        <span className="contact-mail">
                                            info@sparrow-avia.tech
                                        </span>
                                        <br />
                                        <span className="contact-text">
                                            (офіційний канал зв'язку)
                                        </span>
                                    </p>
                                </a>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}
export default Contacts
