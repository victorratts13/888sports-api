'use strict'
const qs = require('qs');
const { api, jar, URL } = require("./api/base.api");
const { cookiesSet } = require('./controllers/cookies.controller');

class bets888 {
     constructor(config = {
          currency_code: 'EUR',
          language: 'por',
          sub_brand_id: 8,
          brand_id: 8,
          regulation_type_id: 4,
          timezone: 3,
          browsing_country_code: 'BRA',
          product_package_id: 112,
          user_mode: 'Anonymous',
          spectate_timezone: 'America/Fortaleza',
     }) {
          this.config = config;
     }

     webConfig(config = this.config) {
          return new Promise((resolve, reject) => {
               api.post('/spectate/load/state', qs.stringify(config)).then(rest => {
                    return resolve({
                         data: rest.data,
                         cookie: cookiesSet({ jar, jar })
                    })
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     byDate(date = 'today', cookie) {
          /**
           * Use ISO format for 
           * get by date. 
           */
          if (date == 'today') {
               var isoDate = new Date()
               date = isoDate.toISOString();
          }

          return new Promise((resolve, reject) => {
               api.get(`/spectate/inplay-req/getScheduledEvents?date=${date}`, {}, {
                    headers: {
                         cookie: cookie
                    }
               }).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     breadcrumbs(data = { "id": 2, "label": "Football", "slug": "football" }, cookie) {
          return new Promise((resolve, reject) => {
               api.post('/spectate/translation/breadcrumbs', qs.stringify({ sport: JSON.stringify(data) }), {
                    headers: {
                         cookie: cookie
                    }
               }).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }



     inPlayEvent(sport = 'football', cookie) {
          return new Promise((resolve, reject) => {
               api.get(`/spectate/inplay-req/getInplayEvents/${sport}`, {}, {
                    headers: {
                         cookie: cookie
                    }
               }).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     featured(cookie) {
          return new Promise((resolve, reject) => {
               api.get(`/spectate/inplay-req/featured`, {}, {
                    headers: {
                         cookie: cookie
                    }
               }).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     getVirtualGames(cookie) {
          return new Promise((resolve, reject) => {
               api.get(`/spectate/sportsbook-req/getVirtualGamesList`, {}, {

               }).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     getFeaturedMatchesEvents(sport = 'football', query = {
          country: 'BRA',
          widget_label: 'Featured Football'
     }, cookie) {
          return new Promise((resolve, reject) => {
               console.log(`${URL}/spectate/sportsbook-req/getFeaturedMatchesEventsAjax/${sport}`)
               api.post(`/spectate/sportsbook-req/getFeaturedMatchesEventsAjax/${sport}`, qs.stringify(query), {
                    headers: {
                         cookie: cookie
                    }
               }).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     allSports(cookie) {
          return new Promise((resolve, reject) => {
               api.get(`/spectate/inplay-req/getInplayEvents/all`, {}, {
                    headers: {
                         cookie: cookie
                    }
               }).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     getWidgetEvent(sport = 'football', label = 'Featured Homepage', cookie) {
          return new Promise((resolve, reject) => {
               api.post(`/spectate/sportsbook-req/getSportsWidgetEventsAjax/${sport}`, qs.stringify({ widget_label: label }), {
                    headers: {
                         cookie: cookie
                    }
               }).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     getPopularEvents(cookie) {
          return new Promise((resolve, reject) => {
               api.get(`/spectate/sportsbook-req/getPopularWidgetEventsAjax`, {
                    headers: {
                         cookie: cookie
                    }
               }).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     getEspecialEvents(spect = '', cookie) {
          return new Promise((resolve, reject) => {
               api.post(`/spectate/sportsbook-req/getSpecialsEventsAjax`, qs.stringify({}), {
                    headers: {
                         cookie: cookie
                    }
               }).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     sportBook(region = 'BRA', cookie) {
          return new Promise((resolve, reject) => {
               api.get(`/spectate/sportsbook-req/initRacing/horse-racing/${region}`, {
                    headers: {
                         cookie: cookie
                    }
               }).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     fetchEvents(fetch = {
          tournamentSlug: 'concacaf-league',
          categorySlug: 'americas',
          sportSlug: 'football',
          fromTime: '2021-10-22T02:45:00',
          toTime: '2021-11-05T02:45:00',
          tournamentId: 341262,
          eventId: 1349631,
          categoryId: 29850,
          sportId: 2
     }, cookie) {
          return new Promise((resolve, reject) => {
               api.get(`/spectate/more_games/fetchEvents`, qs.stringify(fetch), {
                    headers: {
                         cookie: cookie
                    }
               }).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     event(event = '', cookie) {
          return new Promise((resolve, reject) => {
               api.get(`/spectate/inplay-req/event/${event}`, {}, {
                    headers: {
                         cookie: cookie
                    }
               }).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     urlPath(path = '/au-vivo/mercados_partida/1349631-ipe-1349631/', cookie) {
          return new Promise((resolve, reject) => {
               api.post(`/spectate/translation/urlPath`, qs.stringify({ urlPath: path }), {
                    headers: {
                         cookie: cookie
                    }
               }).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     queryHost(url = '', method = '', query = {}, cookie) {
          return new Promise((resolve, reject) => {
               api[method](url, qs.stringify(query), {
                    headers: {
                         cookie: cookie
                    }
               }).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

}

module.exports = bets888;
