import build  from './AI.mjs';

const client = build('PLT_AI_WARP_URL')

const res = await client.postApiV1Prompt({
    prompt: 'AI works!'
})

console.log(res);


