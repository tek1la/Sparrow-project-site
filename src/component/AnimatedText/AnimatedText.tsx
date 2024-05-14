import { useSpring, animated } from 'react-spring'
import './AnimatedText.css'

type Props = {
    text: string
}
const AnimatedText = ({ text }: Props) => {
    const props = useSpring({
        from: { transform: 'translateX(100%)' },
        to: { transform: 'translateX(-100%)' },
        config: { duration: 10000 },
        reset: true,
        loop: true,
    })
    return (
        <animated.div className="running-text" style={props}>
            {text}
        </animated.div>
    )
}
export default AnimatedText
