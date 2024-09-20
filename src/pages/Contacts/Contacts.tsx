import { Container, Grid } from '@mui/material'
import CallBack from 'component/CallBack/CallBack'
import './Contacts.css'

type Props = {}
const Contacts = (props: Props) => {
    return (
        <>
            <div className="contact-page-bg-wraper">
                <Container
                    id="КОНТАКТИ"
                    className="container"
                    sx={{
                        padding: '238px 0 80px',
                        position: 'relative',
                    }}
                >
                    <Grid container className="contacts-page-title-wraper">
                        <Grid item sm={4}></Grid>
                        <Grid item sm={8} className="contacts-page-title">
                            <h3>контакти</h3>
                        </Grid>
                    </Grid>
                    <Grid container className="contacts-page-content-wraper">
                        <Grid item sm={4}></Grid>
                        <Grid item sm={8} gap={2}>
                            <Grid item sm={12} className="contact-page-item">
                                <div className="contact-page-icon">
                                    <a
                                        href="tel:+380732446161"
                                        className="contacts"
                                    >
                                        <img src="img/phone-page.svg" alt="" />
                                    </a>
                                </div>
                                <div className="contact-page-info">
                                    <a
                                        href="tel:+380732446161"
                                        className="contacts"
                                    >
                                        <p>
                                            <span className="contact-page-tel">
                                                + 38 073 244 61 61
                                            </span>

                                            <br />
                                            <span className="contact-page-text">
                                                (відділ зв'язків з
                                                громадськістю)
                                            </span>
                                        </p>
                                    </a>
                                </div>
                            </Grid>
                            <Grid item sm={12} className="contact-page-item">
                                <div className="contact-page-icon">
                                    <a
                                        href="tel:+380962446161"
                                        className="contacts"
                                    >
                                        <img src="img/phone-page.svg" alt="" />
                                    </a>
                                </div>
                                <div className="contact-page-info">
                                    <a
                                        href="tel:+380962446161"
                                        className="contacts"
                                    >
                                        <p>
                                            <span className="contact-page-tel">
                                                + 38 096 244 61 61
                                            </span>
                                            <br />
                                            <span className="contact-page-text">
                                                (відділ продажів)
                                            </span>
                                        </p>
                                    </a>
                                </div>
                            </Grid>
                            <Grid item sm={12} className="contact-page-item">
                                <div className="contact-page-icon">
                                    <a
                                        href="mailto:info@sparrow-avia.tech"
                                        className="contacts"
                                    >
                                        <img src="img/e-mail-page.svg" alt="" />
                                    </a>
                                </div>
                                <div className="contact-page-info">
                                    <a
                                        href="mailto:info@sparrow-avia.tech"
                                        className="contacts"
                                    >
                                        <p>
                                            <span className="contact-page-mail">
                                                info@sparrow-avia.tech
                                            </span>
                                            <br />
                                            <span className="contact-page-text">
                                                (офіційний канал зв'язку)
                                            </span>
                                        </p>
                                    </a>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <CallBack video={true} />
                </Container>
            </div>
        </>
    )
}
export default Contacts
