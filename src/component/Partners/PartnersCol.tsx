import { Grid } from '@mui/material'

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
                    <img
                        src="img/partner-true-ukr.svg"
                        height="120px"
                        alt="true-ukr"
                        className="slide-img"
                    />
                </Grid>
                <Grid className="slide slide-2">
                    <img
                        src="img/partner-vexilum.svg"
                        height="120px"
                        alt="vexilum"
                        className="slide-img"
                    />
                </Grid>
                <Grid className="slide slide-4">
                    <img
                        src="img/partner-taf.svg"
                        height="120px"
                        alt="taf"
                        className="slide-img"
                    />
                </Grid>
                <Grid className="slide slide-3">
                    <img
                        src="img/partner-atn.svg"
                        height="120px"
                        alt="atn"
                        className="slide-img"
                    />
                </Grid>
                <Grid className="slide slide-5">
                    <img
                        src="img/partner-ts-fly.svg"
                        height="120px"
                        alt="tsfly"
                        className="slide-img"
                    />
                </Grid>
                <Grid className="slide slide-6">
                    <img
                        src="img/partner-optivita.svg"
                        height="120px"
                        alt="optivita"
                        className="slide-img"
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default PartnersCol
