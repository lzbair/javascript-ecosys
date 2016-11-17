"use strict";

var products = [
{
  title: "PRODUCT-1",
  price: "105"
},
{
  title: "PRODUCT-2",
  price: "77"
}
,
{
  title: "PRODUCT-3",
  price: "214"
}
];

(function(window, document){
get('products').innerHTML = load(products);
get('search').oninput = function(event) {get('products').innerHTML = search(event.target['value'])};

function search(value) {
  return  load(products.filter(function(p) {
    return p['title'].includes(value); }));
}

function load(source){
  return source.map(function(p) { return p['title'] })
               .join("<br/>");
}
function get (id) { return document.getElementById(id); }

})(window, document);
