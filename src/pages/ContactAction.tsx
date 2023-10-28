import { makeAction } from "react-router-typesafe";
import type { ActionFunctionArgs} from "react-router-dom";
import { redirect } from "react-router-dom";

export const contactAction = makeAction(async ({request}: ActionFunctionArgs) => {
    const data = await request.formData()
    const submission = {
        email: data.get('email') as string,
        message: data.get('message') as string
    }

    if(submission.message.length < 10) {
        return {
            status: 400,
            error: 'Your message must be at least 10 characters long.'
        }
    }

    return redirect('/')
})