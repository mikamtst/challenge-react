import React from 'react'
import './style.css';
import Swiper1 from '../../components/Swiper'

export default function Blog(){
    return(
        <div className="blog">
            <h1>Read Our Blog</h1>
            <p>Far far away, behind the word mountains, far from the countries<br/>
               Vokalia and Consonantia, there live the blind texts.</p>
            <Swiper1/>
        </div>
    );
}