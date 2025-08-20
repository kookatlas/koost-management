import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import ErrorBoundary from './Errorboundary'
import Koost from '../pages/Koost'
import Java from '../pages/topics/java/Corejava'
import Springboot from '../pages/topics/springboot/Springboot'
import Microservices from '../pages/topics/microservices/Microservices'

const AppRouter = () => { 
    return (
    <Routes>
       <Route path='/koost' element={<Koost />} />
            <Route path='/' element={
                 <ErrorBoundary>
                <Home />
                </ErrorBoundary>
                } />
        
        <Route path='/about' element={<About />} />
        <Route path="/java" element={<Java />} />
        <Route path="/springboot" element={<Springboot />} />
        <Route path="/microservices" element={<Microservices />} />
         <Route path="*" element={<Home />} />

    </Routes>
    )

}

export default AppRouter;