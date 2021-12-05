import './Result.css'
import ItemList from './components/itemList/ItemList';

function Result(props){
    if (props.showing){
        return(
            <div className="Result" >
                <ItemList fieldName={"Pais"} fieldValue={"Valor 1"} />
                <ItemList fieldName={"Idioma Oficial"} fieldValue={"Valor 1"} />
                <ItemList fieldName={"Hora"} fieldValue={"Valor 1"} />
                <ItemList fieldName={"Distancia (Buenos Aires)"} fieldValue={"Valor 1"} />
                <ItemList fieldName={"Moneda Local"} fieldValue={"Valor 1"} />
            </div>
        );
    } else {
        return ""
    }
}

export default Result;