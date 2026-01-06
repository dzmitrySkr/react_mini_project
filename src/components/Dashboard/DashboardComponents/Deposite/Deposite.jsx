import GoogleMapView from './GoogleMap/GoogleMapView'
import CardModal from "./CardModal/CardModal";
import Summary from "./depositeComponents/summary";
import Ammount from "./depositeComponents/Ammount";
import "./Deposite.css"

let Deposite = () =>{

    return <div className="deposite_main">
        <div className="deposite_title">
            <div className="deposite_title_text">Profile information</div>
        </div>

        <div className="deposite_content">
            <div className="deposite_side_info">
                    <Summary/>
                    <Ammount/>
                <div className="deposite_account"></div>
            </div>
            <div className="deposite_map_info"><GoogleMapView/></div>
        </div>
        <CardModal/>
    </div>

}

export default Deposite;

