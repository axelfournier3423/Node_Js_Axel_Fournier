

// users
userSchema = {
    "title": "User",
    "type": "object",
    "properties": {
        "id": {"type": "integer", "unique": true},
        "username": {"type": "string"},
        "age": {"type": "integer"},
        "email": {
            "type": "string",
            "format": "email"
        },
        "telephone": {
            "type": "object",
            "properties": {
                "home": {"type": "string"},
                "work": {"type": "string"},
                "mobile": {"type": "string"}
            }
        },
        "address": {
            "type": "object",
            "properties": {
                "street": {"type": "string"},
                "city": {"type": "string"},
                "country": {"type": "string"}
            }
        },
        "watchlists": {
            "type": "array",
            "items": {
                "type": "integer"
            }
        }
    },
    "required": ["id", "username"],
    "additionalProperties": false
}


// items
itemSchema = {
    "title": "Item",
    "type": "object",
    "properties": {
        "id": {"type": "integer", "unique": true},
        "title": {"type": "string"},
        "genre": {"type": "string"}, // drama, action, science-fiction, ...
        "typeItem": {"type": "string"}, // movie, serie, documentary, ...
        "rating": {"type": "integer"}, // R, PG-13, PG, G, ...
        "director": {"type": "string"},
        "actors": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "releaseDate": "date"
    },
    "required": ["id", "itemName", "type"],
    "additionalProperties": false
}


// watchlists
watchlistSchema = {
    "title": "Watchlist",
    "type": "object",
    "properties": {
        "id": {"type": "integer", "unique": true},
        "watchlistName": {"type": "string"},
        "items": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "itemId": {"type": "integer"},
                    "status": {"type": "string"}, // toWatch, watched, ...
                    "note": {"type": "string"}
                },
                "required": ["itemId", "status"],
                "additionalProperties": false
            }
        },
        "isFavorite": "boolean",
        "note": {"type": "string"}
    },
    "required": ["id", "watchlistName"],
    "additionalProperties": false
}

module.exports = {
    userSchema,
    itemSchema,
    watchlistSchema
}


// Exemple
/*
{
    "id": 1,
    "itemName": "Titinac",
    "genre": "drama",
    "type": "movie",
    "rating": "G",
    "director": "Cames Jameron",
    "releaseDate": "1997-12-19"
}

{
    "id": 2,
    "itemName": "Rim of Pacific",
    "genre": "action",
    "type": "movie",
    "rating": "R",
    "director": "Tuillermo del Goro",
    "releaseDate": "2012-05-18"
}

{
    "id": 3,
    "itemName": "Intrastellar",
    "genre": "science-fiction",
    "type": "movie",
    "rating": "PG-13",
    "director": "Nristopher Cholan",
    "releaseDate": "2014-11-07"
}

{
    "id": 1,
    "watchlistName": "watch1",
    "items": [
        {
            "itemId": 1,
            "status": "toWatch"
        }
    ]
}

{
    "id": 2,
    "watchlistName": "watch2",
    "items": [
        {
            "itemId": 2,
            "status": "watched"
        },
        {
            "itemId": 3,
            "status": "toWatch"}
    ]
}

{
    "id": 1,
    "username": "jules_barones",
    "watchlists": [
        {
            "watchlistId": 1
        },
        {
            "watchlistId": 2
        }
    ]
}
*/