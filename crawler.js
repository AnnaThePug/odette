var request = require('request');
var cheerio = require('cheerio');

var dataUrl = "http://www.milanodabere.it/milano/teatri";

request(dataUrl, function(error, response, body) {
  
  var $ = cheerio.load(body);
  var elements = $('#mdb_lista > article');
  var list = [];
  
  
  
  elements.each(function(indx, element) {
    var obj = {};
    var addressLink = "";
    
    obj.title = $('header h1 > a', element).text();
    addressLink = $('header > div.media-body > aside > div > a:nth-child(2)', element).attr('href');
    var tokens = addressLink.split('?');
    
   
    
    tokens = tokens[1].split('&');
    
    console.log(tokens);
    
    obj.coords = [];
    
    
    list.push(obj);
  });
 
 
});
