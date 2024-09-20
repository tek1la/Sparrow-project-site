import { Grid } from '@mui/material'
import Accessories from 'component/Accessories/Accessories'
import AdvantagesBattery from 'component/Advantages/AdvantagesBattery'
import AdvantagesSdsMini from 'component/Advantages/AdvantagesSdsMini'
import BaseEquipment from 'component/BaseEquipment/BaseEquipment'
import BatteryDescription from 'component/Description/BatteryDescription'
import BpakDescription from 'component/Description/BpakDescription'
import FpvDescription from 'component/Description/FpvDescription'
import LinkDescription from 'component/Description/LinkDescription'
import SdsDescription from 'component/Description/SdsDescription'
import ProductHeroSection from 'component/HeroSection/ProductHeroSection'
import ProductionResult from 'component/Result/ProductionResult'
import TechChar from 'component/TechChar/TechChar'
import CallBack from 'component/CallBack/CallBack'
import Component from 'component/Component/Component'

type Props = {
    id: number
    title: string
    subTitle: string
    firstTitle: string
    secondTitle: string
    description: string
    productionImg: string
    video: string
    path: string
}
const Production = ({
    id,
    title,
    subTitle,
    firstTitle,
    secondTitle,
    description,
    productionImg,
    video,
    path,
}: Props) => {
    return (
        <>
            <ProductHeroSection
                id={id}
                title={title}
                subTitle={subTitle}
                firstTitle={firstTitle}
                secondTitle={secondTitle}
                description={description}
                productionImg={productionImg}
                video={video}
                path={path}
            />
            <Grid className="body-wraper">
                {title === 'Ударний БпАК “1В БОМБЕР”' ? (
                    <>
                        <BpakDescription />
                        <TechChar path={path} />
                        <Component />
                        <BaseEquipment path={path} />
                        <ProductionResult />
                        <CallBack video={true} />
                    </>
                ) : null}
                {title === 'Ударні FPV дрони “ГОРОБЕЦЬ 8” та “ГОРОБЕЦЬ 10”' ? (
                    <>
                        <FpvDescription />
                        <TechChar path={path} />
                        {/* <Accessories /> */}
                        <CallBack video={false} />
                    </>
                ) : null}
                {title === 'Станція ретрансляції “FPV Re-Link”' ? (
                    <>
                        <LinkDescription />
                        <TechChar path={path} />
                        <BaseEquipment path={path} />
                        <CallBack video={false} />
                    </>
                ) : null}
                {title === 'Акумуляторні збірки' ? (
                    <>
                        <BatteryDescription />
                        <TechChar path={path} tableSize={12} size={2} />
                        {/* <AdvantagesBattery /> */}
                        <CallBack video={false} />
                    </>
                ) : null}
                {title === 'Системи скидів “SDS-mini”' ? (
                    <>
                        <SdsDescription />
                        <TechChar path={path} tableSize={12} size={6} />
                        {/* <AdvantagesSdsMini /> */}
                        <CallBack video={false} />
                    </>
                ) : null}
            </Grid>
        </>
    )
}
export default Production
