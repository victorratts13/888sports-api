'use strict'
const qs = require('qs');
const { api, jar } = require("./api/base.api");
const { cookiesSet } = require('./controllers/cookies.controller');

class bets888 {
     constructor(config = {
          currency_code: 'GBP',
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
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     breadcrumbs(data = { "id": 2, "label": "Football", "slug": "football" }) {
          return new Promise((resolve, reject) => {
               api.post('/spectate/translation/breadcrumbs', qs.stringify({ sport: JSON.stringify(data) })).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     inPlayEvent(sport = 'football') {
          return new Promise((resolve, reject) => {
               api.get(`/spectate/inplay-req/getInplayEvents/${sport}`).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     featured() {
          return new Promise((resolve, reject) => {
               api.get(`/spectate/inplay-req/featured`).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     getVirtualGames() {
          return new Promise((resolve, reject) => {
               api.get(`/spectate/sportsbook-req/getVirtualGamesList`).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     getFeaturedMatchesEvents(sport = 'football', query = {
          country: 'BRA',
          widget_label: 'Featured Football'
     }) {
          return new Promise((resolve, reject) => {
               api.post(`/spectate/sportsbook-req/getFeaturedMatchesEventsAjax/${sport}`, qs.stringify(query)).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     allSports() {
          return new Promise((resolve, reject) => {
               api.get(`/spectate/inplay-req/getInplayEvents/all`).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     getWidgetEvent(sport = '', label = 'Featured Homepage') {
          return new Promise((resolve, reject) => {
               api.post(`/spectate/sportsbook-req/getSportsWidgetEventsAjax/${sport}`, qs.stringify({ widget_label: label })).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     getPopularEvents(spect = '') {
          return new Promise((resolve, reject) => {
               api.get(`/spectate/sportsbook-req/getPopularWidgetEventsAjax`).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     getEspecialEvents(spect = '') {
          return new Promise((resolve, reject) => {
               api.post(`/spectate/sportsbook-req/getSpecialsEventsAjax`, qs.stringify({})).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     sportBook(region = 'BRA') {
          return new Promise((resolve, reject) => {
               api.get(`/spectate/sportsbook-req/initRacing/horse-racing/${region}`).then(rest => {
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
     }) {
          return new Promise((resolve, reject) => {
               api.get(`/spectate/more_games/fetchEvents`, qs.stringify(fetch)).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     event(event = '') {
          return new Promise((resolve, reject) => {
               api.get(`/spectate/inplay-req/event/${event}`).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     urlPath(path = '/au-vivo/mercados_partida/1349631-ipe-1349631/') {
          return new Promise((resolve, reject) => {
               api.post(`/spectate/translation/urlPath`, qs.stringify({ urlPath: path })).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

     queryHost(url = '', method = '', query = {}) {
          return new Promise((resolve, reject) => {
               api[method](url, qs.stringify(query)).then(rest => {
                    return resolve(rest.data)
               }).catch(e => {
                    return reject(e)
               })
          })
     }

}

module.exports = bets888;
