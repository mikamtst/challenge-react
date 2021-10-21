import React from 'react';
import Illustration from '../../assets/Illustration.svg';
import '../Home/home.css'
import Recipes from '../Recipes'
import TheBest from '../TheBest'
import Blog from '../Blog'
import Inscrevase from '../Increvase'
import Footer from '../Footer'
import { Search } from 'react-feather';
import Header from '../../components/Header'
import Slide from 'react-reveal'



export default function Home() {
  return (
    <div className="healthy-food">
      <Header />
      <div className="home">
        <Slide left>
          <div className="text-home">
            <h1>Ready for Trying a new recipe?</h1>
            <div className="input-search">
              <input placeholder="Search Healthy recipes" />
              <button className="button-shearch"><Search /></button>
            </div>
          </div>
        </Slide>
        <Slide right>
          <img src={Illustration} alt="bloco_final_image" className="size-img" />
        </Slide>

      </div>
      <Recipes />
      <TheBest />
      <Blog />
      <Inscrevase />
      <Footer />
    </div>

  );
}