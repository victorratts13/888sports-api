
const bets = require('.');
const sport = new bets();

//getting sport data. MMA
//getting data from 888sports
sport.webConfig().then(async (rest) => {
     console.log(rest.cookie)
     // var boxing = await sport.getWidgetEvent('mma', 'Featured Homepage', rest.cookie)
     // console.log(boxing)
     //var sp = await sport.allSports(rest.cookie);
     //console.log(sp)
})

// sport.getFeaturedMatchesEvents('boxing', {
//      country: 'BRA'
// }).then(rest => {
//      console.log(rest)
// })

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