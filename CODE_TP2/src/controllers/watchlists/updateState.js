const { crud } = require('./head');

async function updateState(req, res, next) {
    const { userId, id, titre, statut } = req.body;

    try {
    
        const watchlist = await crud.findOne('watchlist', { id: parseInt(id), userId: parseInt(userId) });
        if (!watchlist) {
            return res.status(404).json({ error: 'Watchlist non trouvée' });
        }

        
        const itemIndex = watchlist.items.findIndex(item => item.titre === titre);
        if (itemIndex === -1) {
            return res.status(404).json({ error: 'Film non trouvé dans la watchlist' });
        }

        watchlist.items[itemIndex].statut = statut;

        
        await crud.updateOne('watchlist', { id: parseInt(id), userId: parseInt(userId) }, { $set: { items: watchlist.items } });

        return res.status(200).json({ message: 'Statut du film mis à jour avec succès', watchlist });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    updateState
};
