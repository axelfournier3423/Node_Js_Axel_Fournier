const { crud } = require('./head');

async function addItemToWatchlist(req, res, next) {
    const { userId, id, titre } = req.body;

    console.log(titre);

    try {
        
        const existingItem = await crud.findOne('items', { titre: titre });
        if (!existingItem) {
            return res.status(404).json({ error: 'Le film spécifié n\'existe pas dans la base de données des items' });
        }
        
        const watchlist = await crud.findOne('watchlist', { id: parseInt(id), userId: parseInt(userId) });
        if (!watchlist) {
            return res.status(404).json({ error: 'Watchlist non trouvée' });
        }

        const itemExists = watchlist.items.some(item => item.titre === titre);
        if (itemExists) {
            return res.status(400).json({ error: 'Le film est déjà dans la watchlist' });
        }

        const item = { titre: titre, statut: "à voir", note: null };
        watchlist.items.push(item);

        await crud.updateOne('watchlist', { id: parseInt(id) }, { $set: { items: watchlist.items } });

        const updatedWatchlist = await crud.findOne('watchlist', { id: parseInt(id) });

        return res.status(200).json({ message: 'Item ajouté à la watchlist avec succès', watchlist: updatedWatchlist });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Une erreur est survenue lors de l\'ajout de l\'item à la watchlist' });
    }
}

module.exports = {
    addItemToWatchlist
};
