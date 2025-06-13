import style from "./Cards.module.css";
import { Tipo_Card } from "./constant";

const Cards = (props) => {
    const { tipo = Tipo_Card.PRIMARIO, ...outrasProps } = props;
    return (
        <div className={style.Card} tipo={tipo} {...outrasProps}>
            
        </div>
    )
}

export { Cards };