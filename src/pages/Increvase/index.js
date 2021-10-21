import React from 'react'
import './styles.css'
import ImgFinal from '../../assets/bloco_final_image.svg'

export default function Inscrevase() {
    return (
        <div className="inscrevase">
            <div className="conteudo-final">
                <h1>Join our membership<br />to get special offer</h1>
                <div className="input-inscrevase">
                    <input placeholder="Enter your email address" />
                    <button className="button-join">Join</button>
                </div>
            </div>
            <div className="Img-final">
                <img src={ImgFinal} alt="bloco_final_image" className="size-img-final" />
            </div>

        </div>
    )
}