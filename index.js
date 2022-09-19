const PORT = 8000
import express from 'express';
import axios from 'axios';

// const express = require(express)
const cors = import('cors')
// const axios = import('axios')

import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.get('/', (req, res) => {
    res.json('hi')
})

app.get('/news', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    }

    axios.request(options).then((response) => {
        res.json(response.data)

    }).catch((error) => {
        console.error(error)
    })


})


// const axios = require("axios");
//
// const options = {
//     method: 'GET',
//     url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
//     headers: {
//         'X-RapidAPI-Key': '3d282ed24emshf16bf5182b2328bp18cc36jsn27852aac0a1b',
//         'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
//     }
// };
//
// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });

app.listen(PORT, () => console.log('Server is running on $:', PORT))




