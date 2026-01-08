import "./SideMenu.css"
import { NavLink } from 'react-router-dom';
import sm1 from '../../images/sm1.png'
import sm2 from '../../images/sm2.png'
import sm3 from '../../images/sm3.png'

let SideMenu = () =>{
    return <div className="side_menu">
        <div className={"sideMenu_title"}>Fraud Management</div>
        <nav style={{display: 'flex', flexDirection: 'column', gap: 12}}>
            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                    `side_menu_item${isActive ? ' active' : ''}`
                }
            >
                <img src={sm1} alt="Dashboard icon" />
                <span>Dashboard</span>
            </NavLink>

            <NavLink to="/reports"
                     className={({isActive}) =>
                         `side_menu_item${isActive ? ' active' : ''}`
                     }>
                <img src={sm2} alt="Dashboard icon"/>
                <span>Reports</span>
            </NavLink>

            <NavLink to="/transactions"
                     className={({isActive}) =>
                         `side_menu_item${isActive ? ' active' : ''}`
                     }>
                <img src={sm3} alt="Dashboard icon"/>
                <span>TransActions</span>
            </NavLink>
        </nav>
    </div>
}

export default SideMenu;