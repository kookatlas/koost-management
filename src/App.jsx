import Reat from 'react'
import { BrowserRouter  }  from 'react-router-dom'
import Navbar  from './components/Navbar'
import AppRouter from './components/Routes'
import java from './assets/java.png'
import java1 from './assets/java1.png'
import java2 from './assets/java2.png'
import java3 from './assets/java3.png'
import java4 from './assets/java4.png'
import java5 from './assets/java5.png'
import java6 from './assets/java6.png'
import java7 from './assets/java7.png'
import java8 from './assets/java8.png'
import java9 from './assets/java9.png'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

import './App.css'


const imagesList =[java, java1, java2,java3,java4,java5,java6,java7,java8,java9];


function App() {
  return (
    <BrowserRouter>
    <div className='page-wrapper'> 
      <main className='main-content'>
      <Navbar /> 
      <Carousel images={imagesList} interval={6000} height='400px' showIndicators={true} />
      <AppRouter />
      </main>
      <footer className='footer'>
      <Footer />
      </footer>
    </div>
    </BrowserRouter>
  );

};

export default App
