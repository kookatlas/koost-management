import { useNavigate } from 'react-router-dom'
import '../App.css'
import NotesData from './NotesData'

const Home = () => {

    const navigate = useNavigate();    
    return (
       <div className='thumb-grid'>
        {NotesData.map((item, index)=>(
            <div className='thumb-card' key={index}> 
            <img src={item.src} alt={item.heading} onClick={()=>navigate(`${item.navigate}`)} />
            <h2>{item.heading}</h2>
            <p>{item.desrciption}</p>
            </div>
        ))}
       </div>
    );
}

export default Home;