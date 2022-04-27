// require('dotenv').config();
const axios = require('axios');
const { wrapper } = require('axios-cookiejar-support');
const { CookieJar } = require('tough-cookie');
const Ck = [
     //'_ga_T9PNVVL13N=GS1.1.1634869424.2.1.1634870608.60;',
     //'_ga=GA1.1.126253252.1631309980;',
     //'_gcl_au=1.1.1982248783.1631309980;',
     //'888Cookie=lang%3Dpt%26OSR%3D485472%26RefType%3DNoReferrer%26TestData%3D%7B%22country%22%3A%22bra%22%2C%22last-referrer%22%3A%22https%3A%2F%2Fwww.google.com%2F%22%2C%22orig-lp%22%3A%22https%3A%2F%2Fwww.888sport.com%2Fpt%2F%22%2C%22referrer%22%3A%22https%3A%2F%2Fwww.google.com%22%7D;',
     //'bbsess=eQ8kjdF0oMdf4gpamAXZK6PT64e;',
     'lang=por;',
     'odds_format=FRACIONAL;',
     '888Cookie=isftd=false&lang=pt&OSR=1442621&queryCountry=bra&RefType=NoReferrer&TestData={"anid":"888sports-com","country":"bra","last-referrer":"https://www.888sport.com/","orig-lp":"https://www.888sport.com/","referrer":"NULL"}'
     //'_gid=GA1.2.550140437.1634869424;',
     //'spectate_session=56cc83f0-229d-4c98-b733-a0b8862db7f7%3Aanon;',
     //'_gat_UA-125725186-7=1;'
     // 'newrelic=eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjI1MDk2NzQiLCJhcCI6IjMwNzYyODM3IiwiaWQiOiJkMmUyNTRkZWYzOTUwZTA3IiwidHIiOiIxMjNmOTJkN2Q5ZjE5YTc5IiwidGkiOjE2NTEwNjkxMTY4ODh9fQ=='
]
function parseCookie(arr = []) {
     var txt = '';
     for(var ar of arr){
          txt += `${ar} `
     }
     //console.log(txt)
     return txt;
}
var header = {
     accept: '*/*',
     //'content-type': 'multipart/form-data',
     'accept-encoding': 'gzip, deflate, br',
     'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
     'cache-control': ' max-age=0',
     //'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
     //'sec-ch-ua-platform': '"Linux"',
     'cookie': parseCookie(Ck),
     // 'cookie': 'odds_format=DECIMAL; 888Cookie=isftd%3Dfalse%26lang%3Dpt%26OSR%3D1442621%26queryCountry%3Dbra%26RefType%3DNoReferrer%26TestData%3D%7B%22anid%22%3A%22888sports-com%22%2C%22country%22%3A%22bra%22%2C%22last-referrer%22%3A%22https%3A%2F%2Fwww.888sport.com%2F%22%2C%22orig-lp%22%3A%22https%3A%2F%2Fwww.888sport.com%2F%22%2C%22referrer%22%3A%22NULL%22%7D; lang=por; ', 
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
const URL = 'https://spectate-web.888sport.com';
//console.log(JSON.stringify(jar))
const api = wrapper(axios.create({
     baseURL: URL,
     headers: header,
     jar: jar,
     withCredentials: true
}));

module.exports = {
     api, jar, header, URL
}