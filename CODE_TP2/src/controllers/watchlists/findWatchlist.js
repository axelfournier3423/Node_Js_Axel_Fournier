const { crud } = require('./head')

async function findWatchlist(req, res, next) {


    try {
        const watchlists = await crud.find('watchlist');
        res.json(watchlists);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    findWatchlist
}
