import { Container, Grid, Link } from '@mui/material'
import Logo from 'component/Logo/Logo'
import './Footer.css'
import FooterMenu from 'component/Menu/FooterMenu'
import LanguageMenu from '../component/Menu/LanguageMenu'
import ProductionSubMenuItem from 'component/Menu/ProductionSubMenuItem'
import { productionArray } from 'utils/productionArray'

type Props = {}
const Footer = (props: Props) => {
    return (
        <>
            <div className="footer-wraper">
                <Container className="container">
                    <Grid container className="footer-item-wraper">
                        <Grid item sm={4} className="footer-item">
                            <Grid container>
                                <Grid item sm={6}>
                                    <FooterMenu />
                                    <LanguageMenu />
                                </Grid>
                                <Grid item sm={6} className="footer-info">
                                    <Grid container>
                                        <Grid item sm={6}>
                                            <Link
                                                href="https://www.instagram.com/sparrow_avia"
                                                className="social-link"
                                            >
                                                <img
                                                    src="img/social_networks_instagram.svg"
                                                    alt="instagram"
                                                />
                                            </Link>
                                        </Grid>
                                        <Grid item sm={6}>
                                            <Link
                                                href="https://www.youtube.com/channel/UC5gx0EUmtjz66XpfCAfr5aA"
                                                className="social-link"
                                            >
                                                <img
                                                    src="img/social_networks_youtube.svg"
                                                    alt="youtube"
                                                />
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item sm={6}>
                                            <Link
                                                href="https://www.linkedin.com/company/sparrow-avia/"
                                                className="social-link"
                                            >
                                                <img
                                                    src="img/social_networks_linkedin.svg"
                                                    alt="linkedin"
                                                />
                                            </Link>
                                        </Grid>
                                        <Grid item sm={6}>
                                            <Link
                                                href="https://twitter.com/Sparrow_Avia"
                                                className="social-link"
                                            >
                                                <img
                                                    src="img/social_networks_twitter.svg"
                                                    alt="twitter"
                                                />
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item sm={6}>
                                            <Link
                                                href="https://www.facebook.com/sparrowavia"
                                                className="social-link"
                                            >
                                                <img
                                                    src="img/social_networks_facebook.svg"
                                                    alt="facebook"
                                                />
                                            </Link>
                                        </Grid>
                                        <Grid item sm={6}>
                                            <Link
                                                href="https://www.tiktok.com/@sparrow.avia"
                                                className="social-link"
                                            >
                                                <img
                                                    src="img/social_networks_tiktok.svg"
                                                    alt="tiktok"
                                                />
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={4} className="footer-item">
                            <div>
                                <p className="footer-title">Виробництво:</p>
                                <div className="footer-menu-item-submenu">
                                    {productionArray.map(
                                        ({ id, subTitle, path }) => (
                                            <ProductionSubMenuItem
                                                key={id}
                                                path={path}
                                            >
                                                {subTitle}
                                            </ProductionSubMenuItem>
                                        )
                                    )}
                                </div>
                            </div>
                        </Grid>
                        <Grid
                            item
                            sm={4}
                            className="footer-item footer-item-contact"
                        >
                            <p className="footer-title">Контакти:</p>
                            <div>
                                <a
                                    href="tel:+380732446161"
                                    className="footer-contact"
                                >
                                    + 38 073 244 61 61
                                    <br />
                                    <span>
                                        (відділ зв'язків з громадськістю)
                                    </span>
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
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container className={`footer-info-wraper`}>
                        <Logo h={'50px'} w={'auto'} />
                        <p>
                            © 2024 Товариство з обмеженою відповідальністю
                            "СПАРРОУ АВІА"
                        </p>
                    </Grid>
                </Container>
            </div>
        </>
    )
}
export default Footer
