import React from 'react'

import { Routes , Route } from 'react-router-dom' 
import { Collection } from './pages/Collection'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Product } from './pages/Product'
import { Cart } from './pages/Cart'
import { Login } from './pages/Login'
import { PlaceOrder } from './pages/PlaceOrder'
import { About } from './pages/About'
import { Navbar } from './Component/Navbar'
import { Footer } from './Component/Footer'





const App = () => {
  
  return (
    <>
      <div className='px-4 sm:pm-5[w] md:px-[7vw] lg: px-[9vw]'>

        <Navbar/>

          <Routes>
            <Route path='/' element={<Home/>}></Route>;
            <Route path='/collection' element={<Collection/>}></Route>;
            <Route path='/contact' element={<Contact/>}></Route>;
            <Route path='/product/:profuctId' element={<Product/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/login' element={<Login/>}></Route>

            <Route path='/cart ' element={<Cart/>}> </Route>
            <Route path='/place-order' element={<PlaceOrder/>}
            ></Route>

          </Routes>

      <Footer/>

      </div>

    </>
)
}

export default App
