import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.dev' });

//console.log('API Key:', process.env.OPENAI_API_KEY);
console.log(
  'OpenAI Key Loaded:',
  !!process.env.OPENAI_API_KEY
);

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function generateTestCases(prompt: string) {

    const response = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
            {
                role: 'user',
                content: prompt,
            },
        ],
    });

return response.choices?.[0]?.message?.content || 'No response generated';
}