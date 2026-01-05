import "./SideMenu.css"
import { NavLink } from 'react-router-dom';

let SideMenu = () =>{
    return <div className="side_menu">
        <div className={"sideMenu_title"}>Fraud Management</div>
        <nav style={{display: 'flex', flexDirection: 'column', gap: 12}}>
            <NavLink to="/"
                end
                className={({ isActive }) => (isActive ? 'active' : '')}>
                Dashboard
            </NavLink>

            <NavLink to="/reports"
                className={({ isActive }) => (isActive ? 'active' : '')}>
                Reports
            </NavLink>

            <NavLink to="/transactions"
                className={({ isActive }) => (isActive ? 'active' : '')}>
                TransActions
            </NavLink>
        </nav>
    </div>
}

export default SideMenu;