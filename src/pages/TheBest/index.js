import React from 'react'
import ImagePage from '../../assets/bloco_services.svg'
import './style.css'

export default function TheBest(){
    return( 
        <div className="the-best">
            <div className="image-page">
                <img src={ImagePage} alt="ilustração home" />
            </div>
            <div className=" area-conteudo">
                <h1>The best services ready To serve you</h1>
                <p>Far far away, behind the word mountains, far from<br/>
                   the countries Vokalia and Consonantia,<br/>
                   there live the blind texts.
                   <br/>
                   <br/>
                   Separated they live in Bookmarksgrove right at the<br/>
                   coast of the Semantics, a large language ocean.
                   <br/>
                   <br/>
                   A small river named Duden flows by their place and<br/>
                   supplies it with the necessary regelialia.</p>
                   <button className="button-the-best">Know More</button>
            </div>
        </div>
    );
}