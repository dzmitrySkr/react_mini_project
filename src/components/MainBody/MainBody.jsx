
import './MainBody.css';
import { Outlet } from 'react-router-dom'
import SideMenu from "../SideMenu/SideMenu";

const MainBody = () => {
    return (
        <div className={"main_body"}>
            <div className={"side_menu"}><SideMenu/></div>
            <div className={"router_content"}><Outlet/></div>
        </div>
    );
};

export default MainBody;
