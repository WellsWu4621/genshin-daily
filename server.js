require('dotenv').config()
const fetch = require('node-fetch')

fetch("https://hk4e-api-os.mihoyo.com/event/sol/sign?lang=en-us",{
  method: 'POST',
  headers: {'Cookie': process.env.GENSHIN_COOKIE,
  'User-Agent': process.env.GENSHIN_USER_AGENT,
  "Origin": "https://webstatic-sea.mihoyo.com",
  "Referer" : "https://webstatic-sea.mihoyo.com/"
},
  body: JSON.stringify(process.env.GENSHIN_ACT_ID)
}).then(res => {
  console.log('Request Complete! response: ', res)
});