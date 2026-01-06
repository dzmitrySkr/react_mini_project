
let Ammount = () =>{

    return <>
        <div className="deposite_ammount">
            <div className="deposite_ammount_title">Ammount</div>
            <hr/>
            <div className={"card_number_wrapp"}>
                <div className="card_number_title">Card Number:</div>
                <div className="card_number_content"> {"no data"}</div>
            </div>
            <div className={"card_number_wrapp"}>
                <div className="card_number_title">Expiry:</div>
                <div className="card_number_content">{"no data"}</div>
            </div>
            <div className={"card_number_wrapp"}>
                <div className="card_number_title">Owner:</div>
                <div className="card_number_content">{"no data"}</div>
            </div>
            {/*<div className="deposite_summary_text" onClick={() => dispatch(openModal())}>edit</div>*/}
        </div>
    </>
}

export default Ammount;