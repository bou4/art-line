import type { APIRoute } from "astro";

import { app } from "../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();

    const name = data.get("name")?.toString();
    const email = data.get("email")?.toString();
    const subject = data.get("subject")?.toString();
    const body = data.get("body")?.toString();

    try {
        const db = getFirestore(app);
        const contact = db.collection("contact");
        await contact.add({
            name,
            email,
            subject,
            body
        });
    } catch (error) {
        return new Response("Er ging iets fout!", {
            status: 500,
        });
    }

    return new Response(
        JSON.stringify({
            message: "Genoteerd!"
        }),
        { status: 200 }
    );
};