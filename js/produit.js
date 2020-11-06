console.log('produit');


      // URL PRODUIT TEDDY

function getProductIdFromUrl() {
  const params = new URLSearchParams(document.location.search.substring(1));
  const productId = params.get("id");

  return productId;
}


      // CONSTANTES CARACTERISTIQUES DU TEDDY

getOneTeddyById(teddyIdent).then((teddy) => {
  console.log(teddy);
});

const teddyName = getOneTeddyById(teddyIdent).then((teddy) => {
  console.log(teddy.name);
});

const teddyImage = getOneTeddyById(teddyIdent).then((teddy) => {
  console.log(teddy.imageUrl);
});

const teddyUrl = getOneTeddyById(teddyIdent).then((teddy) => {
  console.log(teddy._id);
});

const teddyDescription = getOneTeddyById(teddyIdent).then((teddy) => {
  console.log(teddy.description);
});

const teddyColor = getOneTeddyById(teddyIdent).then((teddy) => {
  console.log(teddy.colors);
});

const teddyPrice = getOneTeddyById(teddyIdent).then((teddy) => {
  console.log(teddy.price/100);
});




      // RENDU CARD TEDDY
async function renderTeddy() {

      // CHARGEMENT CARD TEDDY
  let html = '';
  const teddy = await getOneTeddyById(getProductIdFromUrl());

  // const product = new Product(teddy.name, teddy.image);
  // product.getPrice();


  console.log(teddy);
  let htmlSegment = `
    <div class="col mx-auto">
        <div class="card rounded-lg">
            <img class="card-img-top" src="${teddy.imageUrl}" alt="image">
            <div class="card-body text-center">
                <div class="card-title text-center h1">${teddy.name}</div>
                <p class="card-text">${teddy.description}</p>
                <div class="d-flex justify-content-center align-middle">
                    <form>
                      <select name="couleur" size="1">
                        <option>${teddy.colors[0]} 
                        <option selected>${teddy.colors[1]}
                        <option>${teddy.colors[2]}
                        <option>${teddy.colors[3]}
                      </select>
                    </form>
            
                    <div class="quantity ml-4">Quantité
                        <input type="number" min="1" max="10" step="1" value="1">
                    </div>
                </div>
                <p class="card-text h3 text-center my-4">${teddy.price/100} €</p>
                <div class="text-center">
                    <button type="button" class="btn btn-primary" id="btn-panier">
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
    const container = document.querySelector('div.container > .my-4');
    container.innerHTML = html;

    const buttonPanier = document.getElementById("btn-panier");

    console.log(localStorage);

    buttonPanier.addEventListener('click', function() {
      addProductToCart(teddy);
        console.log("teddy ajouté au panier")
      }
    );

    console.log(buttonPanier);

    totalPanier = () => {
      localStorage.getItem("price") * localStorage.length
    };

    totalPanier();
    console.log(totalPanier(total));


    /*
    // AJOUT TEDDY AU PANIER
    class basket {
      constructor (name, image, url, stock) {
        this.name = name;
        this.image =image;
        this.url = url;
        this.stock = stock;
      }

      showQuantity() {
        console.log(teddyQuantity + "teddies ajoutés au panier");
        this.teddyQuantity += teddyQuantity;
        this.showQuantity();
      }
    }

    const teddyBasket = new basket (
      teddyName,
      teddyImage,
      teddyUrl,
      teddyStock
    );
    console.log(teddyBasket);

    */
}

renderTeddy();





  

/*
  for (let teddyQuantity of quantity) { 
    console.log(teddyQuantity)
  }
}

);

*/