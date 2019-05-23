var http = require('http');
var hostname = "127.0.0.1";
var port = 80;
var fs = require('fs');
var express = require('express');
var app = express()
var assert = require('assert');
var data;

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});

var result = client.get({
    index: "metricbeat-7.0.1-2019.05.20-000001",
    type: "_doc",
    id: "mgCI4GoBRRPxkTtOwTjZ",
    _source: ["kafka"],
  
});


console.log(result);

app.get('/', (req, res) => {
    console.log("the result is....... "+ result)
        result.then(res.json.bind(res));           
        });


var server = app.listen(80, function () {
   
   console.log("app listening at http://%s:%s", hostname, port)
})
