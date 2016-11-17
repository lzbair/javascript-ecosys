"use strict";

var products = [
        {
            "title": "Savon",
            "price": 100
        },
        {
            "title": "Parfums",
            "price": 50
        },
        {
            "title": "Réfrigérateur",
            "price": 2000
        },
        {
            "title": "Télévision",
            "price": 3000
        },
        {
            "title": "Ordinateur",
            "price": 1500
        },
        {
            "title": "Casque",
            "price": 150
        }
];

(function(window, document){
var catalog = function(){ return products.slice()};
get('products').innerHTML = load(catalog());
    
get('title').oninput = function(event) {get('products').innerHTML = search(
    function(p) {return p['title'].includes(event.target['value']); })};
    
get('price').oninput = function(event) {get('products').innerHTML = search(
    function(p) {return p['price'] >= event.target['value']; })};
    
get('sort').onchange = function(event) {get('products').innerHTML = sort(event.target['value']);
                                        get('clear').style.display = "";};
    
get('clear').onclick = function(event) {location.reload(true);}


function search(predicate) {
  return  load(catalog().filter(predicate));
}
    
    
function sort(by){
    if(by == "a") return asc();
    else if(by == "d") return dsc();
    else return load(catalog());
}
function asc() {
  return  load(catalog().sort(PRICE_ASC));
}
    
function dsc() {
  return  load(catalog().sort(PRICE_ASC).reverse());
}

function load(source){
  return source.map(function(p) { return p['title'] +"<i> (price:" + p['price'] + ")</i>"})
               .join("<br/>");
}
    
var PRICE_ASC = function(p1, p2) {return p1['price'] <= p2['price'] ? -1 : 1;};
function get (id) { return document.getElementById(id); }


})(window, document);
