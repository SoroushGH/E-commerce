import React from 'react';
import '../styles/home.css'
import Shoes from '../components/Shoes'
import Accessories from '../components/Accessories'
import Jackets from '../components/Jackets'
import Hero from '../containers/Hero'

const Home = () => {
    return (
        <div>
            <div className='home'>
                <Hero />
                <Shoes />
                <Accessories />
                <Jackets />
            </div>
        </div>
    )
}

export default Home;