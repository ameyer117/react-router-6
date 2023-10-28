import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

export default function CareersDetails() {
    const career = useLoaderData() as typeof careersDetailsLoader extends (args: LoaderFunctionArgs) => Promise<infer T> ? T : never

    return (
        <div>
            <h1>Careers Details for {career.title}</h1>
            <p>Starting salary: {career.salary}</p>
            <p>Location: {career.location}</p>
        </div>
    )
}

export const careersDetailsLoader = async (args: LoaderFunctionArgs) => {
    const res = await fetch(`http://localhost:4000/careers/${args.params.id}`)

    if (!res.ok) {
        throw new Response(`Failed to load career ${args.params.id}`, {
            status: res.status,
        })
    }

    return res.json() as Promise<{
        id: number
        title: string
        location: string
        salary: number
    }>
}