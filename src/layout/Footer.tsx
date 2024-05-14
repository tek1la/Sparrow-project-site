import { Container, Grid, Link } from '@mui/material'
import Logo from 'component/Logo/Logo'
import './Footer.css'
import EastIcon from '@mui/icons-material/East'

type Props = {}
const Footer = (props: Props) => {
    return (
        <>
            <div className="footer-wraper">
                <Container className="container">
                    <Grid container className="footer-item-wraper">
                        <Grid item xs={4} className="footer-item">
                            <Logo h={'100px'} w={'auto'} />
                        </Grid>
                        <Grid item xs={4} className="footer-item">
                            <div className="footer-title-wraper">
                                <p className="footer-title">Наше небо</p>
                                <div
                                    style={{
                                        border: '1px solid white',
                                    }}
                                ></div>
                                <p className="footer-title">наші правила</p>
                            </div>
                        </Grid>
                        <Grid item xs={4} className="footer-item">
                            <p className="footer-contact">
                                + 38 073 244 61 61
                                <br />
                                <span>(відділ зв'язків з громадськістю)</span>
                            </p>
                            <p className="footer-contact">
                                + 38 096 244 61 61
                                <br />
                                <span>(відділ продажів)</span>
                            </p>
                            <p className="footer-contact">
                                info@sparrow-avia.tech
                            </p>
                        </Grid>
                        <Grid item xs={4} className="footer-item">
                            <Grid
                                container
                                spacing={2}
                                className="social-link-wraper"
                            >
                                <Grid item xs={6}>
                                    <Link href="" className="social-link">
                                        <EastIcon
                                            sx={{
                                                marginRight: '10px',
                                            }}
                                        />
                                        YouTube
                                    </Link>
                                </Grid>
                                <Grid item xs={6}>
                                    <Link href="" className="social-link">
                                        <EastIcon
                                            sx={{
                                                marginRight: '10px',
                                            }}
                                        />
                                        Instagram
                                    </Link>
                                </Grid>

                                <Grid item xs={6}>
                                    <Link href="" className="social-link">
                                        <EastIcon
                                            sx={{
                                                marginRight: '10px',
                                            }}
                                        />
                                        LinkedIn
                                    </Link>
                                </Grid>

                                <Grid item xs={6}>
                                    <Link href="" className="social-link">
                                        <EastIcon
                                            sx={{
                                                marginRight: '10px',
                                            }}
                                        />
                                        Facebook
                                    </Link>
                                </Grid>

                                <Grid item xs={6}>
                                    <Link href="" className="social-link">
                                        <EastIcon
                                            sx={{
                                                marginRight: '10px',
                                            }}
                                        />
                                        TikTok
                                    </Link>
                                </Grid>

                                <Grid item xs={6}>
                                    <Link href="" className="social-link">
                                        <EastIcon
                                            sx={{
                                                marginRight: '10px',
                                            }}
                                        />
                                        Twitter
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} className="footer-item">
                            <div className="footer-doc-wraper">
                                <p>Політика конфіденційності</p>
                                <p>Установчі документи</p>
                                <p>Публічний договір</p>
                            </div>
                        </Grid>
                        <Grid item xs={4} className="footer-item">
                            <div className="footer-info-wraper">
                                <p>
                                    <span>© 2024</span> ТОВ "СПАРРОУ АВІА"
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}
export default Footer
