const mongoose = require('mongoose');

const commerceSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    nom_commerce: {
        type: String,
        required: true
    },
    num_voie: {
        type: String,
        required: true
    },
    nom_voie: {
        type: String,
        required: true
    },
    code_postal: {
        type: String,
        required: true
    },
    nom_commune: {
        type: String,
        required: true
    },
    lon: {
        type: Number,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    geo_shape: {
        type: {
            type: String,
            enum: ['Feature'],
            required: true
        },
        geometry: {
            type: {
                type: String,
                enum: ['Point'],
                required: true
            },
            coordinates: {
                type: [Number],
                required: true
            }
        },
        properties: {
            type: Object,
            required: true
        }
    },
    geo_point_2d: {
        lon: {
            type: Number,
            required: true
        },
        lat: {
            type: Number,
            required: true
        }
    }
});

const Commerce = mongoose.model('Commerce', commerceSchema);

module.exports = Commerce;