import React from 'react'
import './styles.css'
import Slide from 'react-reveal'

export default function Footer() {
    return (
        <Slide top>
            <div className="footer">
                <div className="copy">
                    <h1>© Copyrights 2021 Stack. All Rights Reserved.</h1>
                </div>
                <div className="termos">
                    <a href='/'>Privacy Policy</a>
                    <a href='/'>Terms and Conditians</a>
                </div>
            </div>  
        </Slide>
    )
}