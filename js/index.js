console.log('index');

/*
getTeddies().then (function (post) {
  console.log(post);
})
*/

async function renderTeddies() {
  let teddies = await getTeddies();

  let html = '';
  teddies.forEach(teddiesId  => {
      let htmlSegment = `<div class="col-12 col-md-4 my-3 mx-auto">
                          <div class="card rounded-lg">
                            <a href="produit.html" class="stretched-link">
                              <img class="card-img-top" src="${teddiesId.imageUrl}" alt="image">
                            </a>
                            <div class="card-body">
                              <div class="card-title h5">${teddiesId.name}</div>
                              <p class="card-text"> ${teddiesId.description}</p>
                              <p class="card-text h6 text-center">${teddiesId.price/100} €</p>
                          </div>
                        </div>
                      </div>`;

      html += htmlSegment;
  });

  let container = document.querySelector('.container');
  container.innerHTML = html;
}

renderTeddies();



function addCard(product) {
  const containerProduit = document.createElement("div");
  containerProduit.classList.add("container", "my-4");

  const rowProduit = document.createElement("div");
  rowProduit.classList.add("row", "my-4");

  const colProduit = document.createElement("div");
  colProduit.classList.add("col-12", "col-md-4", "my-3", "mx-auto");

  const ficheProduit = document.createElement("div");
  ficheProduit.classList.add("card", "rounded-lg");

  const lienProduit = document.createElement("a");
  lienProduit.classList.add("stretched-link");
  lienProduit.setAttribute("href", "produit.html");

  const corpsProduit = document.createElement("div");
  corpsProduit.classList.add("card-body");

  const imgProduit = document.createElement("img");
  imgProduit.classList.add("card-img-top");
  imgProduit.setAttribute("src", "#");
  imgProduit.setAttribute("alt", "#");

  const nomProduit = document.createElement("div");
  nomProduit.classList.add("card-title", "h5"); // product.title

  const prixProduit = document.createElement("div");
  prixProduit.classList.add("card-text", "h6", "text-center");

  rowProduit.appendChild(containerProduit);
  colProduit.appendChild(rowProduit),
  ficheProduit.appendChild(colProduit);
  nomProduit.appendChild(ficheProduit);
  corpsProduit.appendChild(ficheProduit);
  imgProduit.appendChild(ficheProduit);
  lienProduit.appendChild(ficheProduit);

  containerProduit.textContent="<p>Test Container</>"; // product.description
}



//const rowProduit = document.querySelector(".container > .my-4");

//let teddiesTitle = getTeddies.name;
/*
getProducts();

async function getProducts() {
  const productsList = [...await getTeddies(), ...await getBirds()]; // response.json // fetch

  for (const product of productsList) {
    addCard(product);
  }
}

getTeddies()
.then((teddies) => {
  return getBirds()
  .then((birds) => {
    const productsList = [...teddies, ...birds];

    for (const product of productsList) {
      addCard(product);
    }
  })
})

Promise.all([
  getBirds(),
  getTeddies(),
]).then((products) => {
  const [birds, teddies] = products;
  
})

 */


