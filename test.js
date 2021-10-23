
const bets = require('.');
const sport = new bets();

sport.webConfig().then(rest => {
     console.log(rest)
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