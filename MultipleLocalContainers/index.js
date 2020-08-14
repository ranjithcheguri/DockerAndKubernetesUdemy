const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
    // node app can be connected to redis by referencing with its name declared in docker compose
    host:"redis-server",
    port:6379
});
client.set('visits',0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of vists : '+ visits);
        client.set('visits', parseInt(visits)+1);
    });
});

app.get('/crash',(req,res)=>{
	process.exit(0);
	});

app.listen(8081, () => {
console.log('listening on 8081');
});
