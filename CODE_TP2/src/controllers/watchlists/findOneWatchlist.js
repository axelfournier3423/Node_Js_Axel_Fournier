const { crud } = require('./head')

async function findOneWatchlist(req, res, next) {
    const { id: watchlistId } = req.params;

    try {
        const watchlist = await crud.findOne('watchlist', { id: parseInt(watchlistId) });
        if (!watchlist) {
            res.status(404).json({ error: 'Watchlist non trouvée' });
            return;
        }

        res.status(200).json(watchlist);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    findOneWatchlist
}


module.exports = {
    findOneWatchlist
}
