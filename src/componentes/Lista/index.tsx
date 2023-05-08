import style from './Lista.module.scss'
import Item from './Item';

export default function Lista () {
    const tarefas = [{
        tarefa: "React",
        tempo: "02:00:00"
    }, 
    {
        tarefa: "JavaScript",
        tempo: "01:00:00"
    },
    {
        tarefa: "CSS",
        tempo: "00:30:00"
    }    
]
    
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudo do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                    />
                ))}
            </ul>
        </aside>
    )
}
