const { Configuration, OpenAIApi } = require("openai");

module.exports = {
    name: 'messageCreate',
    async execute(message) {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API
        })

        const openai = new OpenAIApi(configuration);
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

        // message here
        if (message.content.substring(0, 1) === "_") {
            const prompt = message.content.substring(1); //remove the exclamation mark from the message
            const answer = await ask(prompt); //prompt GPT-3
            message.channel.send(answer);
        }
    }
}