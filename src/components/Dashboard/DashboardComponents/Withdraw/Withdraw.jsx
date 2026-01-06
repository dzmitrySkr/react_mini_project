import MainGraf from "./MainGraf/MainGraf";
import "./Withdraw.css"
import SecondaryGraf from "./SecondaryG/SecondaryGraf";

import arr from "../../../../images/arr.png"
import close from "../../../../images/close.png"
import load from "../../../../images/load.png"
import per from "../../../../images/per.png"
import elli from "../../../../images/elli.png"

let Withdraw = () =>{
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
            <div className="secondary_graf transaction">
                <SecondaryGraf img={arr} mainSlogan={"12 013"} slogan={"Rejected Transactions"}></SecondaryGraf>
            </div>
            <div className="secondary_graf persent">
                <SecondaryGraf img={close} mainSlogan={"93,4%"} slogan={"All transactions"}></SecondaryGraf>
            </div>
            <div className="secondary_graf time">
                <SecondaryGraf img={load} mainSlogan={"10"} slogan={"Approval Rate"}></SecondaryGraf>
            </div>
            <div className="secondary_graf reject">
                <SecondaryGraf img={elli} mainSlogan={"12027"} slogan={"Approved Transactions"}></SecondaryGraf>
            </div>
            <div className="secondary_graf approve">
                <SecondaryGraf img={per} mainSlogan={"15"} slogan={"Pending Approval"}  button={true}></SecondaryGraf>
            </div>
            <div className="secondary_graf posphone">
                <SecondaryGraf img={arr} mainSlogan={"70"} slogan={"Postponed Approval"} button={true}></SecondaryGraf>
            </div>
        </div>

    </div>
}

export default Withdraw;