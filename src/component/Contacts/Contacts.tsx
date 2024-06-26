import { Container, Grid } from '@mui/material'
import './Contacts.css'
import ContactForm from 'component/ContactForm/ContactForm'

type Props = {}
const Contacts = (props: Props) => {
    return (
        <>
            <div className="contact-bg-wraper">
                <Container
                    id="КОНТАКТИ"
                    className="container"
                    sx={{
                        padding: '120px 0',
                        position: 'relative',
                    }}
                >
                    <Grid>
                        <div className="contacts-title">
                            <h3>контакти</h3>
                        </div>
                    </Grid>
                    <Grid
                        container
                        gap={3.5}
                        wrap="nowrap"
                        className="contacts-items-wraper"
                    >
                        <Grid item className="contacts-wraper">
                            <div className="contacts-item-wraper">
                                <div>
                                    <a
                                        href="tel:+380732446161"
                                        className="contacts-item"
                                    >
                                        <p>
                                            + 38 073 244 61 61
                                            <br />
                                            <span>
                                                (відділ зв'язків з
                                                громадськістю)
                                            </span>
                                        </p>
                                        <div className="contacts-item-phone-icon"></div>
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="tel:+380962446161"
                                        className="contacts-item"
                                    >
                                        <p>
                                            + 38 096 244 61 61
                                            <br />
                                            <span>(відділ продажів)</span>
                                        </p>
                                        <div className="contacts-item-phone-icon"></div>
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="mailto:info@sparrow-avia.tech"
                                        className="contacts-item"
                                    >
                                        info@sparrow-avia.tech
                                        <div className="contacts-item-mail-icon"></div>
                                    </a>
                                </div>
                            </div>
                            <div className="contacts-item-wraper">
                                <img
                                    className="contact-img"
                                    src="img/contact-item-bg.png"
                                    alt="cat"
                                />
                            </div>
                        </Grid>
                        <Grid item>
                            <ContactForm />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}
export default Contacts
