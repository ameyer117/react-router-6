import { Link } from "react-router-dom"
import { defer, Await, useLoaderData } from "react-router-typesafe"
import { Suspense } from "react";
import Spinner from "../../components/Spinner.tsx";

 interface Career {
    id: number;
    title: string;
    location: string;
}

export default function Careers() {
    const loaderData = useLoaderData<typeof careersLoader>()

    return (
        <div className="careers">
            <Suspense fallback={<Spinner color="white" fill="white" height={30} width={50}  />}>
                <Await resolve={loaderData.careers} errorElement={<p style={{color: "red"}}>Failed to load careers list</p>}>
                    {(careers) => (
                        <>
                            {careers.map(career => (
                                <Link to={`/careers/${career.id}`} key={career.id}>
                                    <p>{career.title}</p>
                                    <p>Based in {career.location}</p>
                                </Link>
                            ))}
                        </>
                    )}
                </Await>
            </Suspense>
        </div>
    )
}

export async function careersLoader() {
    const careers = fetchCareers()

    return defer({
        careers
    })
}

async function fetchCareers() {
    const res = await fetch('http://localhost:4000/careers')

    // Sleep for 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000))

    return res.json() as Promise<{
        id: number
        title: string
        location: string
    }[]>
}