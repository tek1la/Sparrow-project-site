import { Container, Grid, Link } from '@mui/material'
import Logo from 'component/Logo/Logo'
import './Footer.css'
import EastIcon from '@mui/icons-material/East'
import { useEffect, useRef, useState } from 'react'

type Props = {}
const Footer = (props: Props) => {
    const [isAnimated, setIsAnimated] = useState(false)
    const footerRef = useRef(null)

    useEffect(() => {
        const currentFooter = footerRef.current
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsAnimated(true)
                    observer.disconnect()
                }
            },
            {
                threshold: 0.5,
            }
        )

        if (currentFooter) {
            observer.observe(currentFooter)
        }

        return () => {
            if (currentFooter) {
                observer.unobserve(currentFooter)
            }
        }
    }, [])

    return (
        <>
            <div className="footer-wraper">
                <Container className="container">
                    <Grid container className="footer-item-wraper">
                        <Grid item xs={4} className="footer-item">
                            <Logo h={'100px'} w={'auto'} />
                        </Grid>
                        {/* <Grid item xs={4} className="footer-item">
                            <div className="footer-title-wraper">
                                <p className="footer-title">Наше небо</p>
                                <div
                                    style={{
                                        border: '1px solid white',
                                    }}
                                ></div>
                                <p className="footer-title">наші правила</p>
                            </div>
                        </Grid> */}
                        {/* <div ref={footerRef}> */}
                        <Grid item xs={4} className={`footer-item`}>
                            <div ref={footerRef}>
                                <div className="footer-title-wraper">
                                    <p
                                        className={`footer-title ${isAnimated ? 'show' : ''}`}
                                    >
                                        Наше небо
                                    </p>
                                    <div
                                        className={`animated-element ${isAnimated ? 'show' : ''}`}
                                        style={{
                                            border: '1px solid white',
                                        }}
                                    ></div>
                                    <p
                                        className={`footer-title ${isAnimated ? 'show' : ''}`}
                                    >
                                        наші правила
                                    </p>
                                </div>
                            </div>
                        </Grid>
                        {/* </div> */}

                        <Grid item xs={4} className="footer-item">
                            <a
                                href="tel:+380732446161"
                                className="footer-contact"
                            >
                                + 38 073 244 61 61
                                <br />
                                <span>(відділ зв'язків з громадськістю)</span>
                            </a>
                            <a
                                href="tel:+380962446161"
                                className="footer-contact"
                            >
                                + 38 096 244 61 61
                                <br />
                                <span>(відділ продажів)</span>
                            </a>
                            <a
                                href="mailto:info@sparrow-avia.tech"
                                className="footer-contact"
                            >
                                info@sparrow-avia.tech
                            </a>
                        </Grid>
                        <Grid item xs={4} className="footer-item">
                            <Grid
                                container
                                spacing={2}
                                className="social-link-wraper"
                            >
                                <Grid item xs={6}>
                                    <Link
                                        href="https://www.youtube.com/channel/UC5gx0EUmtjz66XpfCAfr5aA"
                                        className="social-link"
                                    >
                                        <EastIcon
                                            sx={{
                                                marginRight: '10px',
                                            }}
                                        />
                                        YouTube
                                    </Link>
                                </Grid>
                                <Grid item xs={6}>
                                    <Link
                                        href="https://www.instagram.com/sparrow_avia"
                                        className="social-link"
                                    >
                                        <EastIcon
                                            sx={{
                                                marginRight: '10px',
                                            }}
                                        />
                                        Instagram
                                    </Link>
                                </Grid>

                                <Grid item xs={6}>
                                    <Link
                                        href="https://www.linkedin.com/company/sparrow-avia"
                                        className="social-link"
                                    >
                                        <EastIcon
                                            sx={{
                                                marginRight: '10px',
                                            }}
                                        />
                                        LinkedIn
                                    </Link>
                                </Grid>

                                <Grid item xs={6}>
                                    <Link
                                        href="https://www.facebook.com/sparrowavia"
                                        className="social-link"
                                    >
                                        <EastIcon
                                            sx={{
                                                marginRight: '10px',
                                            }}
                                        />
                                        Facebook
                                    </Link>
                                </Grid>

                                <Grid item xs={6}>
                                    <Link
                                        href="https://www.tiktok.com/@sparrow.avia"
                                        className="social-link"
                                    >
                                        <EastIcon
                                            sx={{
                                                marginRight: '10px',
                                            }}
                                        />
                                        TikTok
                                    </Link>
                                </Grid>

                                <Grid item xs={6}>
                                    <Link
                                        href="https://twitter.com/Sparrow_Avia"
                                        className="social-link"
                                    >
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
