![logo](https://github.com/victorratts13/888sports-api/blob/main/assets/img/888bets-api.png?raw=true)

![version](https://img.shields.io/badge/version-1.0-green) ![lang](https://img.shields.io/badge/lang-javascript-yellow) ![env](https://img.shields.io/badge/enviroment-node.js-yellowgreen)

# introdução

``888sports-api`` é uma api esportiva baseada em 888sports &copy; que fornece varias opções de esportes e informações em tempo real para serem consumidas atraves de aplicações e sistemas. Uma api de resposta rapida com todas as informações de esports, tais como Odds de mercado.

## instalação

>- Nota: Para instalação do serviço, é preciso ter node.js instalado em sua maquina de desenvolvimento tal como NPM na versão mais atual.

para aplicar esta biblioteca em seu projeto, execute o comando:

```bash
~# npm install 888sports-api --save
```

## Uso

Os metodos de uso são diversos. Mas inicialmente, é preciso contruir um novo escopo de requisição:

```js
/** 
*  Dentro do contructor, é possivel
*  passar informações de configuração
*  como lingua, moeda de cotação,
*  time-zone, entre outros.
*/
const bets = require('888sports-api');
const sport = new bets(); 
```

### webConfig

Para definir o escopo de configuração geral, utilize:

```js
// é possivel definir um novo escopo de configuração caso seja necessario.
// este metodo é importante, pois através dele é possivel obter os cookies de acesso.
sport.webConfig().then(rest => {
     console.log(rest)
})
```

### breadcrumbs

este metodo mostra a atual seleção configurada. 

```js
sport.breadcrumbs({ "id": 2, "label": "Football", "slug": "football" }, 'cookies').then(rest => {
     console.log(rest)
})
```

### inPlayEvent

Para obter as informações de Ao-vivo resumidas: 

```js
sport.inPlayEvent('football', 'cookies').then(rest => {
     console.log(rest)
})
```

### featured

para obter informações de eventos apresentados.

```js
sports.featured('cookies').then(rest => {
     console.log(rest)
})
```

### getVirtualGames

para obter dados de sports virtuais

```js 
sports.getVirtualGames('cookies').then(rest => {
     console.log(rest)
})
```

### getFeaturedMatchesEvents

para obter detalhes de todos os eventos ao-vivo

```js
sports.getFeaturedMatchesEvents('football', {
     country: 'BRA', // lang
     widget_label: 'Featured Football' // information
}, cookies).then(rest => {
     console.log(rest)
})
```

### allSports

Para obter informações de todos os esportes

```js
sports.allSports('cookies').then(rest => {
     console.log(rest)
})
```

### getPopularEvents

Para obter os eventos mais populares e procurados.

```js
sports.getPopularEvents('cookies').then(rest => {
     console.log(rest)
})
```

### sportBook

Para obter o book de apostas.

```js
sports.sportBook('BRA', 'cookies').then(rest => {
     console.log(rest)
})
```

### fetchEvents

Para buscar um determinado evento e suas informações (odds, mercados, informações, estatisticas e etc).

```js
sports.fetchEvents({
     tournamentSlug: 'concacaf-league',
     categorySlug: 'americas',
     sportSlug: 'football',
     fromTime: '2021-10-22T02:45:00',
     toTime: '2021-11-05T02:45:00',
     tournamentId: 341262,
     eventId: 1349631,
     categoryId: 29850,
     sportId: 2
}, 'cookies').then(rest => {
     console.log(rest)
})
```

### event

Para capiturar informações de um determinado evento.

```js
//as IDs de enevnto podem ser obtidas atraves do metodo 'allsports'
sports.event(1349631).then(rest => {
     console.log(rest)
})
```

### urlPath

Buscar informações atraves de uma URI especifica

```js
sports.urlPath('/au-vivo/mercados_partida/1349631-ipe-1349631/', 'cookies').then(rest => {
     console.log(rest)
})

```

### queryHost

Para fazer uma requisição atraves de uma URL especifica do servidor.

```js
sports.queryHost('URL', 'BODY', {query: ''}, 'cookies').then(rest => {
     console.log(rest)
})

```

# Contatos do desenvolvedor.

- Telegram: @VictorRatts