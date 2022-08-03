import { useEffect, useState } from 'react';
import styles from './Content.module.css';
impor
    function handleDeleteTask(){
        console.log('deletar')
        onDeleteTask(id)
    }a}>
                <div className={styles.esquerda}>
                    <button onClick={handleChangeColor}  className={hasBackground ? styles.checked : styles.check}><Check hasBackground className={hasBackground ? styles.iconCheck : styles.iconCheckNo} size={18}/></button>
                     <p className={hasBackground ? styles.pYes : styles.pNo}>{name}</p>
                </div>
                <button className={styles.trash} onClick={handleDeleteTask}><Trash className={styles.icone} size={24}/></button>
           </div>
        </div>
    ) 
}