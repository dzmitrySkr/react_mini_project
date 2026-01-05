import { NavLink, Outlet } from 'react-router-dom';
import './DashboardStyle.css';

const Dashboard = () => {
    return (
        <div className="dashboard-layout">

            <nav className="dashboard-tabs">
                <NavLink
                    to="products"
                    className={({ isActive }) =>
                        isActive ? 'tab active' : 'tab'
                    }
                >
                    Products
                </NavLink>

                <NavLink
                    to="deposite"
                    className={({ isActive }) =>
                        isActive ? 'tab active' : 'tab'
                    }
                >
                    Deposite
                </NavLink>

                <NavLink
                    to="withdraw"
                    className={({ isActive }) =>
                        isActive ? 'tab active' : 'tab'
                    }
                >
                    Withdraw
                </NavLink>
            </nav>


            <div className="dashboard-content">
                <Outlet />
            </div>

        </div>
    );
};

export default Dashboard;