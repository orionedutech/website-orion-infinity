import "./Button.css"
import {useState} from 'react'

export const OrangeButton = ({ text, clickFunc, login }) => {
    return (
        <button className={login ? "button orange login-btn" : "button orange"} onClick={clickFunc}>
            {text}
        </button>
    )
}
export const OrangeButtonLarge = ({ text, clickFunc, login }) => {
    return (
        <button className={login ? "button large-btn orange login-btn" : "button large-btn orange"} onClick={clickFunc}>
            {text}
        </button>
    )
}

export const WhiteButton = ({ text, clickFunc }) => {
    return (
        <button className="button white" onClick={clickFunc} >
            {text}
        </button>
    )
}
export const WhiteButtonLarge = ({ text, clickFunc, login }) => {
    return (
        <button className={login ? "button large-btn white login-btn xl" : "button large-btn white "} onClick={clickFunc} >
            {text}
        </button>
    )
}

export const ButtonKnowMore = ({hero, text}) => {
    const [hover, setHover] = useState(false)
    return(
        <div className="kmb-cont" onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <button className="button-know-more" >{text ? text : 'Know More'}</button>
            <hr className={hover ? 'know-more-line-long' : 'know-more-line-short'} />
        </div>
    )
}
export const ButtonKnowMoreHero = ({ text, lgtext}) => {
    const [hover, setHover] = useState(false)
    return(
        <div className="kmb-cont hide" onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {
                !lgtext ? (<button className="button-know-more button-know-more-hero">{text}</button>) : 
                (<button className="button-know-more button-know-more-hero" style={{fontSize:'1.4rem'}} >{text}</button>)
            }
            <hr className={hover ? 'know-more-line-long know-more-line-long-hero' : 'know-more-line-short know-more-line-short-hero'} />
        </div>
    )
}

