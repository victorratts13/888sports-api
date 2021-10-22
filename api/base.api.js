require('dotenv').config();
const axios = require('axios');
const { wrapper } = require('axios-cookiejar-support');
const { CookieJar } = require('tough-cookie');

var header = {
     accept: '*/*',
     'accept-encoding': 'gzip, deflate, br',
     'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
     'cache-control': ' max-age=0',
     //'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
     //'sec-ch-ua-platform': '"Linux"',
     'cookie': '_gcl_au=1.1.1982248783.1631309980; 888Cookie=lang%3Dpt%26OSR%3D485472%26RefType%3DSearchEngine%26TestData%3D%7B%22country%22%3A%22bra%22%2C%22last-referrer%22%3A%22https%3A%2F%2Fwww.google.com%2F%22%2C%22orig-lp%22%3A%22https%3A%2F%2Fwww.888sport.com%2Fpt%2F%22%2C%22referrer%22%3A%22https%3A%2F%2Fwww.google.com%22%7D; _gid=GA1.2.550140437.1634869424; bbsess=O7cK4iDToZUSq%2CRnt193ywBqBN3; lang=por; odds_format=DECIMAL; spectate_session=859e30dc-703b-4d0b-8b70-cb3201a36629%3Aanon; _ga=GA1.2.126253252.1631309980; _gat_UA-125725186-7=1; _ga_T9PNVVL13N=GS1.1.1634869424.2.1.1634870608.60',
     //newrelic: 'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjI1MDk2NzQiLCJhcCI6IjMwNzYyODM3IiwiaWQiOiIzYTg3ODBjMmU1MzY1Y2U3IiwidHIiOiI2MWI5MTJmOWNkYmU0MjI5IiwidGkiOjE2MzQ4NzA2MDkzMjd9fQ==',
     origin: 'https://www.888sport.com',
     referer: 'https://www.888sport.com/',
     'sec-ch-ua-mobile': '?0',
     'sec-fetch-dest': 'empty',
     'sec-fetch-mode': 'cors',
     'sec-fetch-site': 'same-site',
     'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36'
}

const jar = new CookieJar();
//console.log(JSON.stringify(jar))
const api = wrapper(axios.create({
     baseURL: process.env.BASE || 'https://spectate-web.888sport.com',
     headers: header,
     jar: jar,
     withCredentials: true
}));

module.exports = {
     api, jar
}