import { Grid, Box } from '@mui/material'

type Props = {}
const PartnersCol = (props: Props) => {
    return (
        <>
            <Grid
                container
                className="partners-mobile"
                sx={{
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Grid className="slide slide-1">
                    <Box className="tooltip-container">
                        <img
                            src="img/partner-true-ukr.svg"
                            height="120px"
                            alt="true-ukr"
                            className="slide-img"
                        />
                        <span className="tooltip-text">
                            БФ “Справжні українці”
                        </span>
                    </Box>
                </Grid>
                <Grid className="slide slide-2">
                    <Box className="tooltip-container">
                        <img
                            src="img/partner-vexilum.svg"
                            height="120px"
                            alt="vexilum"
                            className="slide-img"
                        />
                        <span className="tooltip-text">Вексилум</span>
                    </Box>
                </Grid>
                <Grid className="slide slide-4">
                    <Box className="tooltip-container">
                        <img
                            src="img/partner-taf.svg"
                            height="120px"
                            alt="taf"
                            className="slide-img"
                        />
                        <span className="tooltip-text">TAF Drones</span>
                    </Box>
                </Grid>
                <Grid className="slide slide-3">
                    <Box className="tooltip-container">
                        <img
                            src="img/partner-atn.svg"
                            height="120px"
                            alt="atn"
                            className="slide-img"
                        />
                        <span className="tooltip-text">
                            Виробники оптики ATN
                        </span>
                    </Box>
                </Grid>
                <Grid className="slide slide-5">
                    <Box className="tooltip-container">
                        <img
                            src="img/partner-ts-fly.svg"
                            height="120px"
                            alt="atn"
                            className="slide-img"
                        />
                        <span className="tooltip-text">TC Fly</span>
                    </Box>
                </Grid>
                <Grid className="slide slide-6">
                    <Box className="tooltip-container">
                        <img
                            src="img/partner-optivita.svg"
                            height="120px"
                            alt="atn"
                            className="slide-img"
                        />
                        <span className="tooltip-text">
                            БФ “OPTIVITA UKRAINE”
                        </span>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
export default PartnersCol
