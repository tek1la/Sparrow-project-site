import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MenuItem from './MenuItem'
import ProductionSubMenu from './ProductionSubMenu'

type Props = {}

const Menu = (props: Props) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
    const [activeItem, setActiveItem] = useState<string | null>(null)
    const [isMouseOverMenu, setIsMouseOverMenu] = useState(false)
    const [isMouseOverSubMenu, setIsMouseOverSubMenu] = useState(false)
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (!isMouseOverMenu && !isMouseOverSubMenu) {
            const newTimer = setTimeout(() => {
                setIsSubMenuOpen(false)
            }, 500)
            setTimer(newTimer)
        } else if (timer) {
            clearTimeout(timer)
            setTimer(null)
        }

        return () => {
            if (timer) {
                clearTimeout(timer)
            }
        }
    }, [isMouseOverMenu, isMouseOverSubMenu])

    const handleMouseEnter = () => {
        setIsSubMenuOpen(true)
    }

    const handleMouseLeaveMenu = () => {
        setIsMouseOverMenu(false)
    }

    const handleMouseLeaveSubMenu = () => {
        setIsMouseOverSubMenu(false)
    }

    const handleMouseEnterMenu = () => {
        setIsMouseOverMenu(true)
        handleMouseEnter()
    }

    const handleMouseEnterSubMenu = () => {
        setIsMouseOverSubMenu(true)
        handleMouseEnter()
    }

    const handleClick = (item: string) => {
        setActiveItem(item)
    }

    const handleAboutClick = () => {
        setActiveItem('about')
        navigate('/') // Перехід на головну сторінку

        // Чекаємо, поки сторінка завантажиться, і прокручуємо до елемента
        setTimeout(() => {
            const aboutSection = document.getElementById('about')
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' })
            }
        }, 100)
    }

    return (
        <>
            <MenuItem
                onMouseEnter={handleMouseEnterMenu}
                onMouseLeave={handleMouseLeaveMenu}
                onClick={() => handleClick('production')}
                className={`menu-item menu-arrow ${activeItem === 'production' ? 'active' : ''}`}
            >
                ВИРОБНИЦТВО
                {isSubMenuOpen && (
                    <ProductionSubMenu
                        onMouseEnter={handleMouseEnterSubMenu}
                        onMouseLeave={handleMouseLeaveSubMenu}
                    />
                )}
            </MenuItem>
            <MenuItem
                onClick={() => handleClick('contacts')}
                className={`menu-item ${activeItem === 'contacts' ? 'active' : ''}`}
                to={'contacts'}
            >
                КОНТАКТИ
            </MenuItem>
            <MenuItem
                onClick={() => handleClick('blog')}
                className={`menu-item ${activeItem === 'blog' ? 'active' : ''}`}
                to={'all-news'}
            >
                БЛОГ
            </MenuItem>
            <MenuItem
                onClick={() => handleAboutClick()}
                className={`menu-item ${activeItem === 'about' ? 'active' : ''}`}
            >
                ПРО НАС
            </MenuItem>
            {/* <MenuItem
                onClick={() => handleClick('shop')}
                className={`menu-item ${activeItem === 'shop' ? 'active' : ''}`}
            >
                МАГАЗИН
            </MenuItem> */}
        </>
    )
}

export default Menu
