import { Grid } from '@mui/material'
import BatteryDescription from 'component/Description/BatteryDescription'
import BpakDescription from 'component/Description/BpakDescription'
import FpvDescription from 'component/Description/FpvDescription'
import LinkDescription from 'component/Description/LinkDescription'
import SdsDescription from 'component/Description/SdsDescription'
import ProductHeroSection from 'component/HeroSection/ProductHeroSection'

type Props = {
    title: string
    firstTitle: string
    secondTitle: string
}
const Production = ({ title, firstTitle, secondTitle }: Props) => {
    return (
        <>
            <ProductHeroSection
                firstTitle={firstTitle}
                secondTitle={secondTitle}
                bgImg={title}
            />
            <Grid className="body-wraper">
                {title === 'Ударний БпАК “1В БОМБЕР”' ? (
                    <BpakDescription />
                ) : null}
                {title === 'ударні fpv дрони “ГОРОБЕЦЬ 8-10”' ? (
                    <FpvDescription />
                ) : null}
                {title === 'станція ретрансляції “FPV Re-Link”' ? (
                    <LinkDescription />
                ) : null}
                {title === 'акумуляторні збірки' ? (
                    <BatteryDescription />
                ) : null}
                {title === 'Системи скидів “SDS-mini”' ? (
                    <SdsDescription />
                ) : null}
            </Grid>
        </>
    )
}
export default Production
