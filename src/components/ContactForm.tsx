import { useState } from "preact/hooks";

export default function Form() {
    const [responseMessage, setResponseMessage] = useState("");

    async function submit(e: SubmitEvent) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const response = await fetch("/api/contact", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        if (data.message) {
            setResponseMessage(data.message);
        }
    }

    return (
        <form class="contact-form form-dark" onSubmit={submit}>
            <input
                class="contact-form-name"
                type="text"
                placeholder="Naam*"
                name="name"
                required
            />
            <input
                class="contact-form-mail"
                type="email"
                placeholder="E-mailadres*"
                name="email"
                required
            />
            <input
                class="contact-form-subject"
                type="text"
                placeholder="Onderwerp*"
                name="subject"
                required
            />
            <textarea class="contact-form-body" placeholder="Bericht*" name="body" required />
            <button>Send</button>
            {responseMessage && <p>{responseMessage}</p>}
        </form>
    );
}