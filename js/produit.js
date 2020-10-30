/*
const couleurProduit = document.createElement("div");
couleurProduit.classList.add("card-body");
*/
console.log('produit');


const params = new URLSearchParams(document.location.search.substring(1));
const teddyId = params.get("id");

getOneTeddyById(teddyId).then((teddy) => {
  console.log(teddy);
});

let teddies = getTeddies();

const teddiesId = Object.keys(teddies).map(function(a) {
  return [a, teddies]
});

console.log(teddiesId);


function productTeddie() {

  const params = new URLSearchParams(teddiesId);
  console.log(params)
  

  const url = `produit.html?${params}/view`
  console.log(url)

  return url;
}

productTeddie();
