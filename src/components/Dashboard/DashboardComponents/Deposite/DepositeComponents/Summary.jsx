import {openModal} from "../../../../../store/ModalSlicer";
import {useDispatch, useSelector} from "react-redux";


let Summary = () =>{

    const dispatch = useDispatch();
    const savedData = useSelector((state) => state.modal.cardData);

    return <>
        <div className="deposite_summary">
            <div className="deposite_summary_title">Summary</div>
            <hr/>
            <div className={"card_number_wrapp"}>
                <div className="card_number_title">Card Number:</div>
                <div className="card_number_content">{savedData.cardNumber || "no data"}</div>
            </div>
            <div className={"card_number_wrapp"}>
                <div className="card_number_title">Expiry:</div>
                <div className="card_number_content">{savedData.expiry || "no data"}</div>
            </div>
            <div className={"card_number_wrapp"}>
                <div className="card_number_title">Owner:</div>
                <div className="card_number_content">{savedData.owner || "no data"}</div>
            </div>
            <div className="deposite_summary_text" onClick={() => dispatch(openModal())}>Edit</div>
        </div>
    </>
}

export default Summary;