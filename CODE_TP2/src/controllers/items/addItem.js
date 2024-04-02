const axios = require('axios');
const { crud } = require('./head');
const conf = require('../../../conf.json');

async function addItem(req, res, next) {
    try {
        const { titre } = req.body;

        console.log(titre);

        const existingFilm = await crud.findOne('items', { titre: titre });
        
        if (existingFilm) {
            res.status(200).json({ message: 'Le film existe déjà dans la base de données.' });
            return;
        }
        
        const apiKey = conf.omdbApiKey; 
        const apiUrl = `https://www.omdbapi.com/?t=${encodeURIComponent(titre)}&apikey=${apiKey}`;
        const response = await axios.get(apiUrl);

        const filmData = response.data;
        
        
        if (filmData.Response === 'False') {
            res.status(404).json({ message: 'Le film n\'a pas été trouvé dans l\'API OMDB.' });
            return;
        }
        
        
        const newFilm = {
            id: Math.floor(Math.random() * 100000000),
            type: "film",
            genre: filmData.Genre,
            duration: filmData.Runtime,
            annee: filmData.Year,
            realisateur: filmData.Director,
            titre: filmData.Title
        };

        console.log(newFilm);

        await crud.insertOne('items', newFilm);

        res.status(201).json({ message: 'Le film a été ajouté à la base de données.' });
    } catch (error) {
        console.error(error);
        next(error);
    }
}

module.exports = {
    addItem
};
