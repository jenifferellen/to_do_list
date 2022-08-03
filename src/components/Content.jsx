import { useEffect, useState } from 'react';
import styles from './Content.module.css';
import iconOk from '../assets copy/iconOk.svg'
import { Trash, Check } from 'phosphor-react';

export function Content({name, onDeleteTask, id, estado, funcaoDoEstado, onHandleTotalTasks, isChecked}){
   
    useEffect(()=>{
        setHasBackground(isChecked)
    },[]);
   
    function handleDeleteTask(){
        console.log('deletar')
        onDeleteTask(id)
       // onHandleTotalTasks()

    }

    const[hasBackground, setHasBackground] = useState(false)

    function handleChangeColor(){
        console.log('chamando')
        setHasBackground(!hasBackground )

        onHandleTotalTasks(id)
        
    }
    

    


    return( 
        <div className={styles.all}>
           <div className={styles.banana}>
                <div className={styles.esquerda}>
                    <button onClick={handleChangeColor}  className={hasBackground ? styles.checked : styles.check}><Check hasBackground className={hasBackground ? styles.iconCheck : styles.iconCheckNo} size={18}/></button>
                     <p className={hasBackground ? styles.pYes : styles.pNo}>{name}</p>
                </div>
                <button className={styles.trash} onClick={handleDeleteTask}><Trash className={styles.icone} size={24}/></button>
           </div>
        </div>
    ) 
}