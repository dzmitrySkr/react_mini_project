import "../../styles/variable.css"
import './MainHeader.css';
import {useSelector} from "react-redux";


const MainHeader = () => {
    const savedData = useSelector((state) => state.modal.cardData);
    return (
        <div className={"main_header"}>
            <div className={"logo"}>ANTIFRAOUD</div>
            <div className={"profile"}>
                <div className={"profileLogo"}></div>
                <div className={"profileName"}>{savedData.owner}</div>
                <div className={"profileArr"}></div>
            </div>
        </div>
    );
};

export default MainHeader;
