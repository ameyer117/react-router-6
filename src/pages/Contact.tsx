import type { ActionFunction } from "react-router-dom";
import { Form, useActionData } from "react-router-dom";
import type { contactAction } from "./ContactAction.tsx";

type ExcludeResponse<T> = T extends Response ? never : T;
type Awaited<T> = T extends PromiseLike<infer U> ? U : T;

export type ActionData<TActionFn extends ActionFunction> = ExcludeResponse<Awaited<ReturnType<TActionFn>>> | undefined;

export default function Contact() {
    const actionData = useActionData() as ActionData<typeof contactAction>;

    return (
        <div className="contact">
            <h3>Contact Us</h3>
            <Form method="post">
                <label>
                    <span>Your email:</span>
                    <input type="email" name="email" required />
                </label>
                <label>
                    <span>Your message:</span>
                    <textarea name="message" required></textarea>
                </label>
                {actionData?.error && <p className="error" style={{ color: "red" }}>{actionData.error}</p>}
                <button>Submit</button>
            </Form>
        </div>
    );
}
