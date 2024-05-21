import { animated } from 'react-spring'
import './AnimatedText.css'

type Props = {
    text: string
}
const AnimatedText = ({ text }: Props) => {
    return (
        <div className="animated-text-container">
            <animated.div className="running-text">{text}</animated.div>
            <animated.div className="second-running-text">{text}</animated.div>
        </div>
    )
}
export default AnimatedText
