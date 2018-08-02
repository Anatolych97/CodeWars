const cheerio = require('cheerio'),
    request = require('request'),
    URL = 'https://www.codewars.com/users/leaderboard';

function solution() {
    let promise = new Promise(function (res) {
        request.get(URL, function (err, resp, body) {
            let leaderboard = {
              position: {}
            };
            const $ = cheerio.load(body);
            const $tr = $('div.leaderboard').find('tr[data-username]').toArray();

            for (let i = 0; i < $tr.length; i++) {
                leaderboard.position[(i + 1)] = {
                    'name': $($tr[i]).data('username'),
                    'clan': $($tr[i]).children('td').eq(2).text(),
                    'honor': +($($tr[i]).children('td').eq(3).text().replace(',', '')),
                };
            }
            res(leaderboard);
        });
    });
    promise.then( result => result );
    return promise;
}