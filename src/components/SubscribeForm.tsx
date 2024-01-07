import { useState } from "preact/hooks";

export default function Form() {
    const [responseMessage, setResponseMessage] = useState("");

    async function submit(e: SubmitEvent) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const response = await fetch("/api/subscribe", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        if (data.message) {
            setResponseMessage(data.message);
        }
    }

    return (
        <div class='footer-form'>
            <h3>Blijf op de hoogte</h3>
            <p>
                Geef hieronder uw e-mailadres op om u in te schrijven op onze
                nieuwsbrief, en blijf op de hoogte van onze activiteiten.
            </p>
            <form class='form-dark' onSubmit={submit}>
                <input type='text' placeholder='Naam*' name="name" required />
                <input type='email' placeholder='E-mailadres*' name="email" required />
                <button type='submit'>Registreer</button>
                {responseMessage && <p>{responseMessage}</p>}
            </form>
        </div>
    );
}