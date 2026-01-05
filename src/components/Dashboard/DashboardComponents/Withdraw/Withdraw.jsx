import MainGraf from "./MainGraf/MainGraf";
import "./Withdraw.css"
let Deposite = () =>{
    return <div className="grafs_main">
        <div className="main_graf">
            <div className="main_graf_header">Processed Transactions</div>
            <MainGraf></MainGraf>
            <div className="main_graf_footer">
                <div className="footer_label">12 012</div>
                <div className="description">
                    <div className="description_color blue_one"></div>
                    <div className="description_text">Deposites</div>
                </div>
                <div className="description ">
                    <div className="description_color blue_two"></div>
                    <div className="description_text">Loans</div>
                </div>
                <div className="description ">
                    <div className="description_color blue_three"></div>
                    <div className="description_text">Withdrawals</div>
                </div>
            </div>
        </div>
        <div className="secondary_grafs">
            <div className="secondary_graf transaction"></div>
            <div className="secondary_graf persent"></div>
            <div className="secondary_graf time"></div>
            <div className="secondary_graf approve"></div>
            <div className="secondary_graf reject"></div>
            <div className="secondary_graf posphone"></div>
        </div>

    </div>
}

export default Deposite;