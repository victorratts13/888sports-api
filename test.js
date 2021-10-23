
const bets = require('.');
const sport = new bets();

sport.webConfig().then(async (rest) => {
     console.log(rest.cookie)
     var sp = await sport.allSports(rest.cookie);
     console.log(sp)
})

// sport.breadcrumbs().then(rest => {
//      console.log(rest)
// })

// sport.inPlayEvent().then(rest => {
//      console.log(rest)
// })

// sport.allSports().then(rest => {
//      console.log(rest)
// })

// sport.getFeaturedMatchesEvents().then(rest => {
//      console.log(rest)
// })