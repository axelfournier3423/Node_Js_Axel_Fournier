const { crud } = require('./head');

async function addWatchlist(req, res, next) {
    const watchlist = req.body;
    watchlist.title = watchlist.title; 
    const userId = watchlist.userId; 

    console.log(watchlist.title);
    console.log(userId);
    
    const user = await crud.findOne('users', { userId: userId });
    if (!user) {
        res.status(400).json({ error: 'Utilisateur non trouvé' });
        return;
    }
    
    watchlist.items = [];
    const lastId = await crud.find('watchlist', {}, { id: -1 });
    if (lastId.length === 0) {
        watchlist.id = 1;
    } else {
        watchlist.id = lastId[0].id + 1;
    }

    const watchlistFinal = {
        id: watchlist.id,
        userId: userId,
        title: watchlist.title,
        items: watchlist.items
    };

    console.log(watchlistFinal);

    try {
        const result = await crud.insertOne('watchlist', watchlistFinal);
        res.status(200).json({ message: 'Watchlist ajoutée avec succès', watchlist: result });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    addWatchlist
};
