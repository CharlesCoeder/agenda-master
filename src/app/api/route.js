import { connection } from "../components/server/mongodb";
import { NextResponse } from "next/server";

export async function POST(req, res) {

    try {
        const { client, db } = await connection();

        const{email, password} = req.body;

        const data = await db.collection("master.accounts").findOne({ email: email, password: password });
        console.log(data  +"some data");
        return NextResponse.json({data, ok: true}, {status: 200});
    }

    catch (err) {
        return NextResponse.json({err, ok: false}, {status: 400});
    }
}