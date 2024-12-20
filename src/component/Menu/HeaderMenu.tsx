import { Grid, Link } from '@mui/material'
import { useMediaQuery } from '@mui/material'

type Props = {}
const HeaderMenu = (props: Props) => {
    const isMobile = useMediaQuery('(max-width:768px)')
    return (
        <>
            <Grid
                className="header-menu-info"
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: '10px',
                }}
            >
                {isMobile ? (
                    <Link
                        href="tel:+380732446161"
                        className="header-contact"
                        sx={{
                            fontSize: '16px',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        +380 (96) 244 61 61
                    </Link>
                ) : (
                    <>
                        <Link
                            href="tel:+380732446161"
                            className="header-contact"
                        >
                            +380 (96) 244 61 61
                        </Link>
                        <Link
                            href="https://www.instagram.com/sparrow_avia"
                            className="social-link"
                        >
                            <img
                                src="img/social_networks_instagram_top.svg"
                                alt=""
                            />
                        </Link>
                        <Link
                            href="https://www.facebook.com/sparrowavia"
                            className="social-link"
                        >
                            <img
                                src="img/social_networks_facebook_top.svg"
                                alt=""
                            />
                        </Link>
                        <Link
                            href="https://www.youtube.com/channel/UC5gx0EUmtjz66XpfCAfr5aA"
                            className="social-link"
                        >
                            <img
                                src="img/social_networks_youtube_top.svg"
                                alt=""
                            />
                        </Link>
                    </>
                )}
            </Grid>
        </>
    )
}
export default HeaderMenu
