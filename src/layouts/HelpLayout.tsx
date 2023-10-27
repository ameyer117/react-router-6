import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
    return (
        <div className="help-layout">
            <h2>Website Help</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium animi asperiores autem cum dicta earum, ipsam maxime nesciunt omnis possimus provident quibusdam quo quos repellendus rerum sapiente, soluta voluptates.
            </p>

            <nav>
                <NavLink to="faq">View the FAQ</NavLink>
                <NavLink to="contact">Send us a message</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}