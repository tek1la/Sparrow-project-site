import { Grid } from '@mui/material'
import Accessories from 'component/Accessories/Accessories'
import AdvantagesSdsMini from 'component/Advantages/AdvantagesSdsMini'
import BatteryDescription from 'component/Description/BatteryDescription'
import BpakDescription from 'component/Description/BpakDescription'
import FpvDescription from 'component/Description/FpvDescription'
import LinkDescription from 'component/Description/LinkDescription'
import SdsDescription from 'component/Description/SdsDescription'
import ProductHeroSection from 'component/HeroSection/ProductHeroSection'
import ProductionResult from 'component/Result/ProductionResult'
import TechChar from 'component/TechChar/TechChar'

type Props = {
    title: string
    firstTitle: string
    secondTitle: string
    path: string
}
const Production = ({ path, title, firstTitle, secondTitle }: Props) => {
    return (
        <>
            <ProductHeroSection
                firstTitle={firstTitle}
                secondTitle={secondTitle}
                bgImg={title}
            />
            <Grid className="body-wraper">
                {title === 'Ударний БпАК “1В БОМБЕР”' ? (
                    <>
                        <BpakDescription />
                        <ProductionResult />
                        <TechChar path={path} />
                    </>
                ) : null}
                {title === 'ударні fpv дрони “ГОРОБЕЦЬ 8-10”' ? (
                    <>
                        <FpvDescription />
                        <TechChar path={path} />
                        <Accessories />
                    </>
                ) : null}
                {title === 'станція ретрансляції “FPV Re-Link”' ? (
                    <>
                        <LinkDescription />
                        <TechChar path={path} />
                    </>
                ) : null}
                {title === 'акумуляторні збірки' ? (
                    <>
                        {' '}
                        <BatteryDescription />
                        <TechChar path={path} tableSize={10} size={2} />
                    </>
                ) : null}
                {title === 'Системи скидів “SDS-mini”' ? (
                    <>
                        <SdsDescription />
                        <TechChar path={path} tableSize={6} size={6} />
                        <AdvantagesSdsMini />
                    </>
                ) : null}
            </Grid>
        </>
    )
}
export default Production
