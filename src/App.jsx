import './global.css';
import style from  './App.module.css'
import { Header } from './components/Header'
import { Post } from './components/Post';
import { Content } from './components/Content';

function App() {

  return (
   <div>
     <div className={style.content}>
        <div><Header/></div>
        <div className={style.contentPost}>
          
          <Post/>
        
        </div>
     </div>
      
   </div>
  )
}

export default App
