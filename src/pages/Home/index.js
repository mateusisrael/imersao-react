import React from 'react';
import Menu from '../../components/Menu';
import dados from '../../data/dados_iniciais.json';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';



function Home() {
    return(
        <div>
            <Menu />
            <BannerMain
                videoTitle={dados.categorias[0].videos[0].titulo}
                url={dados.categorias[0].videos[0].url}
                videoDescription={''}
            />
            <Carousel category={dados.categorias[0]} />
            <Carousel category={dados.categorias[1]} />
            <Carousel category={dados.categorias[2]} />
            <Carousel category={dados.categorias[3]} />
            <Carousel category={dados.categorias[4]} />
            <Carousel category={dados.categorias[5]} />
        </div>
    );
}

export default Home;