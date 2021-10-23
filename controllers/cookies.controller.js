
function cookiesSet(apiCookie) {
     var stringCookie = JSON.stringify(apiCookie);
     var cookieParsed = JSON.parse(stringCookie);
     console.log(cookieParsed)
     var arr = [], text = '';
     for(var cookie of cookieParsed.jar.cookies){
          text += `${cookie.key}=${cookie.value};`
     }

     return text;
}

module.exports = {
     cookiesSet
}