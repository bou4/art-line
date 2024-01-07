import type { APIRoute } from "astro";

import { app } from "../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();

    const name = data.get("name")?.toString();
    const email = data.get("email")?.toString();

    try {
        const db = getFirestore(app);
        const subscribe = db.collection("subscribe");
        await subscribe.add({
            name,
            email
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