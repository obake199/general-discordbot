const { Configuration, OpenAIApi } = require("openai");

module.exports = {
    name: 'messageCreate',
    async execute(message) {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API
        })

        const openai = new OpenAIApi(configuration);

        // query prompt
        async function ask(prompt) {
            const response = await openai.createCompletion({
                model: "text-davinci-002",
                prompt,
                temperature: 0.7,
                max_tokens: 256,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            });
            return response.data.choices[0].text ?? 'You broke me.';
        }

        // image prompt
        async function image(prompt) {
            const response = await openai.createImage({
                prompt,
                n: 1,
                size: "1024x1024"
            });
            return response.data.data[0].url ?? 'dead.';
        }

        // message here
        if (message.content.startsWith("_image")) {
            const prompt = message.content.replace("_image", "");
            const answer = await image(prompt);
            message.channel.send(answer);
        }
        else if (message.content.substring(0, 1) === "_") {
            const prompt = message.content.substring(1); //remove the exclamation mark from the message
            const answer = await ask(prompt); //prompt GPT-3
            message.channel.send(answer);
        }
    }
}