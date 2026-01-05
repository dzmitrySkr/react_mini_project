import "../../styles/variable.css"
import './MainHeader.css';

const MainHeader = () => {
    console.log('styles:', );
    return (
        <div className={"main_header"}>
            <div className={"styles.logo"}>ANTIFRAOUD</div>
            <div className={"profile"}>
                <div className={"profileLogo"}></div>
                <div className={"profileName"}>Gregorz Brzerzenszchykewich</div>
                <div className={"profileArr"}></div>
            </div>
        </div>
    );
};

export default MainHeader;
