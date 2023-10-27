import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div>
        <h1>Not Found</h1>
        <p>Sorry, the page you were looking for could not be found!</p>
        <Link to="/">Go back home</Link>
    </div>
    )
}