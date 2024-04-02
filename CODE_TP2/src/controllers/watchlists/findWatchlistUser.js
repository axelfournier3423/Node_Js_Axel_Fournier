const { crud } = require('./head');

async function findWatchlistUser(req, res, next) {
    const { userId } = req.params;

    try {
        const watchlists = await crud.find('watchlist', { userId: parseInt(userId) });
        
        if (watchlists.length === 0) {
            res.status(404).json({ error: 'Aucune watchlist trouvée pour cet utilisateur' });
            return;
        }
        
        res.json(watchlists);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    findWatchlistUser
};
