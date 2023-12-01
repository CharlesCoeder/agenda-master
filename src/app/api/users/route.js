import { NextResponse } from "next/server";

const { MongoClient } = require("mongodb");

// Replace the following with values for your environment.
const username = encodeURIComponent("admin");
const password = encodeURIComponent("admin");
const clusterUrl = "agenda-master.hdynuf9.mongodb.net";

const authMechanism = "DEFAULT";

// Replace the following with your MongoDB deployment's connection string.
const uri =
  `mongodb+srv://${username}:${password}@${clusterUrl}/?authMechanism=${authMechanism}`;

// Create a new MongoClient
const client = new MongoClient(uri);

// Function to connect to the server
export async function POST(Request) {
    const { email, passwordR } = req.body;

    console.log(email, passwordR);

    try {

        await client.connect();

        const database = client.db("agenda-master");
        const collection = database.collection("master.accounts");
        const filter = { email: email, password: passwordR };

        const document = await collection.findOne(filter);
        console.log(document);
        return NextResponse.json(
            {
                res: document,
                ok: true,
            },
            { status: 200 }
        );
    }

    catch (error) {
        res.status(500).json({ message: "Error connecting to the database!", error });
    }
}