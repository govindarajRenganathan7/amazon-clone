import React from 'react'
import './Home.css'
import banner from '../assets/homebanner.jpg'
import Product from './Product '

const Home = () => {
  return (
    <div className='home'>

      <img src= {banner} className='home__image' alt='home'/>
      {/* product */}

      <div className="home__row">
        <Product
          title={'Buy Refurbished, Second Hand & Used Mobile Phone | Sahivalue'}
          id = {1234}
          price = {876}
          image = '../src/assets/apple.jpeg'
          rating = {5}
        />

        <Product
          title={'Reddmi Note 12 Pro + 5G'}
          id = {1235}
          price = {980}
          image = '../src/assets/mi android.jpeg'
          rating = {4}
        />
      </div>

      {/* product */}
      <div className="home__row">
      
      <Product
          title={'Buy Refurbished, Second Hand & Used Mobile Phone | Sahivalue'}
          id = {1235}
          price = {876}
          image = '../src/assets/mi android.jpeg'
          rating = {4}
        />

        <Product
          title={'Buy Refurbished, Second Hand & Used Mobile Phone | Sahivalue'}
          id = {1236}
          price = {609}
          image = '../src/assets/xiami.jpeg'
          rating = {3}
        />

        <Product
          title={'Buy Refurbished, Second Hand & Used Mobile Phone | Sahivalue'}
          id = {1237}
          price = {780}
          image = '../src/assets/apple.jpeg'
          rating = {5}
        />

      </div>

      {/* product */}
      <div className="home__row">
      
      <Product
          title={'Buy Refurbished, Second Hand & Used Mobile Phone | Sahivalue'}
          id = {1238}
          price = {678}
          image = '../src/assets/xiami.jpeg'
          rating = {3}
        />

      </div>
    </div>
  )
}

export default Home
