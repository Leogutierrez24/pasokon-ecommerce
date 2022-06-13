import React from 'react';
import { Link } from 'react-router-dom';
import BestSellerContainer from '../bestSellerContainer/BestSellerContainer';
import SlideShow from '../slideShow/SlideShow';
import './home.scss';

const Home = () => {
    return(
        <div className="Home">
            <div className="banner">
                <SlideShow />
            </div>
            <div className="best-sellers">
                <p className="best-sellers-title">Los más vendidos</p>
                <BestSellerContainer />
            </div>
            <div className="products-categories">
                <div className="categories-wrapper">
                    <p className="categories-title">¡Encontrá lo que buscabas!</p>
                    <div className="categories">
                        <div className="column">
                            <Link to="/category/mouses" className="category">
                                <span className="category-name">Mouse</span>
                            </Link>
                            <Link to="/category/gpus" className="category">Placas de video</Link>
                        </div>
                        <div className="column">
                            <Link to="/category/pc-armadas" className="category">PC Armadas</Link>
                            <Link to="/category/procesadores" className="category">Procesadores</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;