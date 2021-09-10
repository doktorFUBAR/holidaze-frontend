import { React } from "react";
import { Link } from "react-router-dom";


export default function DashboardNav() {
    return (
        <div className="dashboard">
            <div className="dashboard__navigation">
                <ul>
                    <Link to="/dashboard/add-hotel">
                        <li className="header__item">Add hotel</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
