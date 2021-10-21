import React from 'react';
import './style.css'
import CardComida from '../../components/CardComida'
import Receive1 from '../../assets/comida_1.svg';
import Receive2 from '../../assets/comida_2.svg';
import Receive3 from '../../assets/comida_3.svg';
import Receive4 from '../../assets/comida_4.svg';
import Fade from 'react-reveal'

export default function Recipes() {
  return (
      <Fade>
    <div className="recipes">   
      <div className="text-recipes">
        <h1>Our Best Recipes</h1>
        <p>Far far away, behind the word mountains, far from the countries<br />
          Vokalia and Consonantia, there live the blind texts.</p>
      </div>
      <div className="box-recipes">
        <div className="reci1">
          <CardComida image={Receive1} altbox="img box comida" recipe="Broccoli Salad with Bacon" />
          <CardComida image={Receive2} altbox="img box comida" recipe="Classic Beef Burgers" />
        </div>
        <div className="reci2">
          <CardComida image={Receive3} altbox="img box comida" recipe="Classic Potato Salad" />
          <CardComida image={Receive4} altbox="img box comida" recipe="Cherry Cobbler on the Grill" />
        </div>
      </div>
    </div>
    </Fade>
  );
}