import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About() {
    const [user, setUser] = useState<string | null>("mario")

    if (!user) {
        return <Navigate to={"/"} replace={true} />
    }

    return (
        <div className="about">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda at autem culpa cumque
                distinctio dolore, expedita fuga ipsum neque nihil odio officia praesentium quasi, quidem ratione sint
                veniam, voluptatibus.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda at autem culpa cumque
                distinctio dolore, expedita fuga ipsum neque nihil odio officia praesentium quasi, quidem ratione sint
                veniam, voluptatibus.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda at autem culpa cumque
                distinctio dolore, expedita fuga ipsum neque nihil odio officia praesentium quasi, quidem ratione sint
                veniam, voluptatibus.
            </p>

            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    )
}