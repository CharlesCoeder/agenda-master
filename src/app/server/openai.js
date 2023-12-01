import OpenAI from "openai";

const openai = new OpenAI(process.env.OPENAI_API_KEY);


export default async function prompt(promptText, userName) {

    const fullPrompt = `${userName}: ${promptText}`;

    try {

        const completion = await openai.createCompletion({

            model: "gpt-3.5-turbo",
            prompt: fullPrompt,
            temperature: 0,
            maxTokens: 150,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ['"""'],
        });

        return completion.data.choices[0].text;
    }

    catch (error) {
        console.log(error);
    }
}