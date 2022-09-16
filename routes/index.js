const url = require('url');
const express = require('express');
const router = express.Router();
const needle = require('needle'); //commonjs syntax support
const apicache = require('apicache');

// Env vars
const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;

// Init cache
let cache = apicache.middleware 

//cache caches response for certain amount of time before actually making a request again
router.get('/', cache('2 minutes'), async (req, res)=>{
  try{
    console.log(url.parse(req.url));
    console.log(url.parse(req.url, true).query);//query param gets passed on

    const params = new URLSearchParams({
      [API_KEY_NAME]:API_KEY_VALUE,
      ...url.parse(req.url, true).query//query param gets passed on
    });

    const apiRes = await needle('get', `${API_BASE_URL}?${params}`);
    const data = apiRes.body;

    //log the request to the public API
    if(process.env.NODE_ENV !== 'production'){
      console.log(`REQUEST: ${API_BASE_URL}?${params}`);
    }

    res.status(200).json(data);    
  }
  catch(error){
    res.status(500).json({error});
  }  
});


module.exports = router;
