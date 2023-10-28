import { Link, useRouteError } from "react-router-dom";


export default function CareersError() {
    const error = useRouteError() as {message: string, data?: string, status?: number};
    console.log(error)

    return (
        <div>
            <h1>Oops! Something went wrong.</h1>
            <p style={{color: "red"}}>
                {error?.data ?? error.message}
                {error?.status && ` (Status: ${error.status})`}
            </p>
            <Link to={`/careers`}>Go back to careers</Link>
        </div>
    )
}