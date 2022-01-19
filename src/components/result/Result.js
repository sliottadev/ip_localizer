import './Result.css'
import ItemList from './components/itemList/ItemList';
import ItemListImage from './components/itemListImage/ItemListImage';
import {getLenguagesStr, getCurrencies, getTimeZones} from '../../Helper'

function Result(props){
    var resultModel = props.data;
       
    if (props.showing){
        return(
            <div className="Result" >
                <ItemList fieldName={"Country"} fieldValue={(resultModel!=null ? resultModel.name : "")} />
                <ItemList fieldName={"Official language"} fieldValue={(resultModel!=null ? getLenguagesStr(resultModel.languages) : "")} />
                <ItemList fieldName={"Time zone"} fieldValue={(resultModel!=null ? getTimeZones(resultModel.timeZones) : "")} />
                <ItemList fieldName={"Distance (Buenos Aires)"} fieldValue={(resultModel!=null ? (resultModel.distance.toFixed(2) + " Km.") : "")} />
                <ItemList fieldName={"Local currency"} fieldValue={(resultModel!=null ? getCurrencies(resultModel.currencies) : "")} />
                <ItemListImage fieldName={"Flag"} src={(resultModel!=null ? resultModel.svgFlag : "")}/>
            </div>
        );
    } else {
        return ""
    }
}

export default Result;