/*
const couleurProduit = document.createElement("div");
couleurProduit.classList.add("card-body");
*/
console.log('produit');


const params = new URLSearchParams(document.location.search.substring(1));

const teddyIdent = params.get("id");
console.log(teddyIdent);


getOneTeddyById(teddyIdent).then((teddy) => {
  console.log(teddy);
});

const teddyId = getOneTeddyById(teddyIdent).then((teddy) => {
  console.log(teddy._id);
});

const teddyName = getOneTeddyById(teddyIdent).then((teddy) => {
  console.log(teddy.name);
});

const teddyImage = getOneTeddyById(teddyIdent).then((teddy) => {
  console.log(teddy.imageUrl);
});

const teddyDescription = getOneTeddyById(teddyIdent).then((teddy) => {
  console.log(teddy.description);
});

const teddyPrice = getOneTeddyById(teddyIdent).then((teddy) => {
  console.log(teddy.price);
});


/*
let teddies = getTeddies();

const teddiesId = Object.keys(teddies).map(function(a) {
  return [a, teddies]
});

console.log(teddiesId);
*/

function productTeddy() {

  const params = new URLSearchParams(teddyIdent);
  console.log(params)
  

  const url = `produit.html?${params}/view`
  console.log(url)

  return url;
}

productTeddy();


async function renderTeddy() {
  //let teddy = await getOneTeddyById(teddyIdent);

  let html = '';
  await getOneTeddyById(teddyIdent).then((teddy) => {
    console.log(teddy);
    let htmlSegment = `
    <div class="col mx-auto">
        <div class="card rounded-lg">
            <img class="card-img-top" src="${teddy.imageUrl}" alt="image">
            <div class="card-body text-center">
                <div class="card-title text-center h1">${teddy.name}</div>
                <p class="card-text">${teddy.description}</p>
                <div class="d-flex justify-content-center align-middle">
                    <div class="couleurs">
                        <span class="btn-primary"></span>
                        <span class="btn-secondary"></span>
                        <span class="btn-success"></span>
                        <span class="btn-info"></span>
                    </div>
                    <div class="quantite ml-4">Quantité
                        <input type="number" min="1" max="10" step="1" value="1">
                    </div>
                </div>
                <p class="card-text h3 text-center my-4">${teddy.price/100} €</p>
                <div class="text-center">
                    <button type="button" class="btn btn-primary">
                        Ajouter au panier 
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>`;

      html += htmlSegment;
      let container = document.querySelector('div.container > .my-4');
      container.innerHTML = html;
  });
}

renderTeddy();
