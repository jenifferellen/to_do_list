import styles from './Post.module.css';
import iconPlus from '../assets copy/iconPlus.svg'
import { useEffect, useState } from 'react';
import { Content } from './Content';

export function Post(){

   const [taskName, setTaskName] = useState('');
   const [tasks, setTasks] = useState ([]);
   const [contadorId, setContadorId ] = useState(1)
   //armezenar tasks
   const[newCreatedTask, setNewCreatedTask] = useState(0)
   const[taskChecked, setTaskChecked] = useState(0)

    useEffect(()=>{
      console.log('aaaaaaa aaaaa');
      loadLocalTasks();

    },[]);


   function loadLocalTasks(){
    const testlocal = window.localStorage.getItem('tasks')
   if (testlocal) {
      const tasksLocal = JSON.parse(testlocal);
      handleCreatedTasks(tasksLocal.length);
      setTotal(tasksLocal)

      setTasks(tasksLocal)
   }


   }



  function handleSaveInfo(xxx){
    window.localStorage.setItem('tasks', JSON.stringify(xxx))
  }

   function handleAddTasks(){
      
     
     const NewTask = {
       id: contadorId,
       text: taskName,
       isChecked: false
      } 
      
      
      setContadorId(contadorId + 1);
      
      
      setTasks(prevState => {
        const teste = [...prevState, NewTask];
        handleSaveInfo(teste);
        handleCreatedTasks(teste.length);

        return teste;
      })
      
     
      setTaskName('');
   };

   function deleteTask(taskToDeleteId){
    const tasksWithouDeletedOne = tasks.filter(task =>{
        return task.id != taskToDeleteId
    })


    setTasks(prevState => {
      handleSaveInfo(tasksWithouDeletedOne);
      setTotal(tasksWithouDeletedOne)
      return tasksWithouDeletedOne;
    })

    handleCreatedTasks(tasksWithouDeletedOne.length);


}

  function handleTotalTasks(id){
    console.log('entorusjhd')
    const mapTasks = tasks.map(task =>{
        if(task.id==id){
          task.isChecked = !task.isChecked
        }

      return task;
    });

    //setTasks(mapTasks)

    setTasks(prevState => {
      handleSaveInfo(mapTasks);
      setTotal(mapTasks)
      return mapTasks;
    })

   
    
    
  }

  function setTotal(mapTasks){
    let totalChecked = 0;
    for (const task of mapTasks) {
      if (task.isChecked == true) {
        totalChecked+= 1
      }
    }

    setTaskChecked(totalChecked)
  }

function handleCreatedTasks(lenght){
  setNewCreatedTask(lenght)
}

   
    return(
      <div  className={styles.content}>
           <div className={styles.divone}>
           <input onChange={e => setTaskName(e.target.value)} className={styles.input} value={taskName} placeholder='Adicione uma nova tarefa' type="text" />
            <button type='button' onClick={taskName.trim() != '' ? handleAddTasks : null} className={styles.button}>
                <p>
                  Criar
                <img src={iconPlus} alt="Botão adicionar" />

                </p>
            </button>
           </div>
            <div className={styles.divtwo}>
              <div className={styles.divUpsideOne}>
                  <p>Tarefas criadas</p>
                  <button className={styles.button1}>{newCreatedTask}</button>
              </div>
              <div className={styles.divUpsideTwo}>
                  <p>Concluídas</p>
                  <button className={styles.button2}>{taskChecked}</button>
              </div>
            </div>
            <div className={styles.card}>
              {
                tasks.map(task => (
                  <Content 
                     key={task.id}
                     id={task.id}
                     name={task.text} 
                     onDeleteTask={deleteTask}
                     estado={taskChecked}
                     funcaoDoEstado={setTaskChecked}
                     onHandleTotalTasks={handleTotalTasks}
                     isChecked={task.isChecked}
                   />
                ))
              }
            </div>



      </div>
    )

}