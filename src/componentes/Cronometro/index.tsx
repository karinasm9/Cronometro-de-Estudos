import Relogio from "./Relogio";
import style from  './Cronometro.module.scss';
import Botao from "../Botao";

export default function Cronometro () {
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um estudo</p>
            <div className={style.relogioWrapper}><Relogio/></div>
            <Botao texto="Começar"></Botao>
        </div>
    )
}