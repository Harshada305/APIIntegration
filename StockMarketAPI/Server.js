'use strict';
var request = require('request');

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&WTJF0FSM3II3PXSJ';

request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is successfully parsed as a JSON object:
      console.log(data);
    }
});




































// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://latest-stock-price.p.rapidapi.com/any',
//   headers: {
//     'X-RapidAPI-Key': '00029547d1msh23ebce60935c096p19f70cjsn1d831b7e05bf',
//     'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
//   }
// };



// axios.request(options).then(function (response) { 
//     var dataFromResponse = response.data; 
//     console.log(dataFromResponse); 
//    }).catch(function (error) { 
//     console.error(error); 
//    });