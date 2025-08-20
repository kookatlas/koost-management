import React, { useState }from 'react';
import './Java.css'


const menuItems = [
    {
        name: 'Introduction', content: 'Welcome to Java! Java is a high-level programming language...'
    },
    {
        name: 'Fundamentals', content: 'lets begin with java core fundamentals'
    },
    {
        name: 'Collections', content: 'lets begin with java Collections'
    },
    {
        name: 'Multi Threading', content: 'lets begin with java Multi Threading'
    },
    {
        name: 'OOPs', content: 'lets begin with java OOPs'
    },
    {
        name: 'Data Types', content: 'lets begin with java Data Types'
    },
    {
        name: 'String', content: 'lets begin with java String'
    },
    {
        name: 'Heap Memory', content: 'lets begin with java Heap memory'
    },
    {
        name: 'Method Creation', content: 'lets begin with Methods'
    },
    {
        name: 'Interfaces', content: 'lets begin with java Interfaces'
    },
    {
        name: 'Abstraction Classes', content: 'lets begin with java Abstraction Classes'
    },
    {
        name: 'Java8', content: 'lets begin with java8'
    },
    {
        name: 'Java11', content: 'lets begin with java11'
    },
    {
        name: 'Java17', content: 'lets begin with java17'
    },
    {
        name: 'Java21', content: 'lets begin with java21'
    },
]

const Java = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <div className='java-home'>
           <div className='side-menu'>
            {menuItems.map((item, index)=>(
                <button 
                key={item.name} 
                style={{
                    background: index === selectedIndex ? '#4d0adfff' : '#aa5bd5ff'
                }}
                onClick={()=>setSelectedIndex(index)}
                >
                    {item.name}
                </button>
            ))}
           </div>
           <div style={{ flex: 1, padding: '2em' }}>
        <h2>{menuItems[selectedIndex].name}</h2>
        <p>{menuItems[selectedIndex].content}</p>
      </div>
        </div>
    )
}

export default Java;