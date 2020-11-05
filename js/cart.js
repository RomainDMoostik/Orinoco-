console.log("cart");

let cart = {
    // (A) PROPERTIES
    // (A1) HTML ELEMENTS
    hPdt : null, // HTML products list // défini id="cart-products
    hItems : null, // HTML current cart // défini id="cart-items"
  
    // (A2) CART
    items : {}, // Current items in cart (product ID = Quantité)
  
    // (A3) AVAILABLE PRODUCTS
    // PRODUCT ID => DATA
    products : getTeddies, // liste des produits


    // (B) LOCALSTORAGE CART
    // (B1) SAVE CURRENT CART INTO LOCALSTORAGE :
    // cart.save() simply saves cart.items into the local storage.
    save : function () {
        localStorage.setItem("cart", JSON.stringify(cart.items));
        console.log("cart.B-save");
    },

    // (B2) LOAD CART FROM LOCALSTORAGE
    //cart.load() will fetch the data from the local storage and restore cart.items.
    load : function () {
        cart.items = localStorage.getItem("cart");
        console.log("cart.B-load");
        if (cart.items == null) { cart.items = {}; }
        else { cart.items = JSON.parse(cart.items); }
    },
    
    // (B3) NUKE CART!
    //cart.nuke() will empty the entire cart.
    nuke : function () {
        if (confirm("Empty cart?")) {
        cart.items = {};
        localStorage.removeItem("cart");
        cart.list();
        console.log("cart.B-nuke");
    }
  },
  
  init : function () {
    // (C1) GET HTML ELEMENTS
    cart.hItems = document.getElementById("cart-items");
    
    // CHARGEMENT DES CARDS TEDDIES

    // (C3) LOAD CART FROM PREVIOUS SESSION
    cart.load();

    // (C4) LIST CURRENT CART ITEMS
    cart.list();
    console.log("cart.C-init");

  },

    // (D) LIST CURRENT CART ITEMS (IN HTML)
    list : function () {
        // (D1) RESET
        cart.hItems.innerHTML = "";
        let item, part, pdt;
        let empty = true;
        console.log("cart.D-Cart item déclarés");

        for (let key in cart.items) {
          if(cart.items.hasOwnProperty(key)) { empty = false; break; }
        }
    
        // (D2) CART IS EMPTY
        if (empty) {
          item = document.createElement("li");
          item.innerHTML = "Panier vide";
          cart.hItems.appendChild(item);
          console.log("cart.D-Cart is empty");
        }
        
        // (D3) CART IS NOT EMPTY - LIST ITEMS
        else {
          let p, total = 0, subtotal = 0;
          for (let id in cart.items) {
            // ITEM
            p = cart.products[_id];
            item = document.createElement("li");
            item.classList.add("cart-item");
            cart.hItems.appendChild(item);
     
            // NAME
            part = document.createElement("span");
            part.innerHTML = p.name;
            part.classList.add("cart-name");
            item.appendChild(part);
     
            // REMOVE
            part = document.createElement("input");
            part.type = "button";
            part.value = "X";
            part.dataset.id = id;
            part.classList.add("c-del");
            part.addEventListener("click", cart.remove);
            item.appendChild(part);
    
            // QUANTITY
            part = document.createElement("input");
            part.type = "number";
            part.value = cart.items[id];
            part.dataset.id = id;
            part.classList.add("c-qty");
            part.addEventListener("change", cart.change);
            item.appendChild(part);
     
            // SUBTOTAL
            subtotal = cart.items[id] * p.price;
            total += subtotal;
            console.log("cart.D-Total cart");
          }
    
          // EMPTY BUTTONS
          item = document.createElement("input");
          item.type = "button";
          item.value = "Empty";
          item.addEventListener("click", cart.nuke);
          item.classList.add("cart-empty");
          cart.hItems.appendChild(item);
          console.log("cart.D-Bouton Empty/Nuke");

    
          // CHECKOUT BUTTONS
          item = document.createElement("input");
          item.type = "button";
          item.value = "Total : " +  total + "€";
          item.addEventListener("click", cart.checkout);
          item.classList.add("cart-checkout");
          cart.hItems.appendChild(item);
          console.log("cart.D-Bouton Checkout");
        }
    },


        // (E) ADD ITEM INTO CART
        //cart.add() Adds a selected item into the cart. Répond au format cart.items = { ID : QUANTITY }? 
        add : function () {
        if (cart.items[this.dataset.id] == undefined) {
        cart.items[this.dataset.id] = 1;
        } else {
        cart.items[this.dataset.id]++;
        }
        cart.save();
        cart.list();
        console.log("cart.E-Cart is empty");
    },

        // (F) CHANGE QUANTITY
        //cart.change() Changes the quantity of the item in the cart.
        change : function () {
            if (this.value == 0) {
            delete cart.items[this.dataset.id];
            } else {
            cart.items[this.dataset.id] = this.value;
            }
            cart.save();
            cart.list();
            console.log("cart.F changer quantité");
        },
        
        // (G) REMOVE ITEM FROM CART
        //cart.remove() Removes an item from the cart.
        remove : function () {
            delete cart.items[this.dataset.id];
            cart.save();
            cart.list();
            console.log("cart.G teddy supprimé");
        },
        
        // (H) CHECKOUT
        checkout : function () {
            // SEND DATA TO SERVER
            // CHECKS
            // SEND AN EMAIL
            // RECORD TO DATABASE
            // PAYMENT
            // WHATEVER IS REQUIRED
            alert("TO DO");
            console.log("cart.H- Passer commande");


            /*
            var data = new FormData();
            data.append('cart', JSON.stringify(cart.items));
            data.append('products', JSON.stringify(cart.products));
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "SERVER-SCRIPT");
            xhr.onload = function(){ ... };
            xhr.send(data);
            */
        }
        
}