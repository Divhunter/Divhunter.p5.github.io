// Récupération de l'API
fetch("http://localhost:3000/api/products") 

.then(firstResp => firstResp.json())

// Traduction des données au format JSON
.then(data => {
  
  // Déclaration de variables, initialisation des tableaux, affectation des paramètres 
  let paramId = [data[0]._id, data[1]._id, data[2]._id, data[3]._id,
                 data[4]._id, data[5]._id, data[6]._id, data[7]._id];
  let paramAlt = [data[0].altTxt, data[1].altTxt, data[2].altTxt, data[3].altTxt, 
                  data[4].altTxt, data[5].altTxt, data[6].altTxt, data[7].altTxt];
  let paramColors = [data[0].colors, data[1].colors, data[2].colors, data[3].colors, 
                     data[4].colors, data[5].colors, data[6].colors, data[7].colors];
  let paramDescription = [data[0].description, data[1].description, data[2].description, 
                          data[3].description, data[4].description, data[5].description, 
                          data[6].description, data[7].description];
  let paramImg = [data[0].imageUrl, data[1].imageUrl, data[2].imageUrl, data[3].imageUrl,
                  data[4].imageUrl, data[5].imageUrl, data[6].imageUrl, data[7].imageUrl];
  let paramName = [data[0].name, data[1].name, data[2].name, data[3].name,
                   data[4].name, data[5].name, data[6].name, data[7].name];
  let paramPrice = [data[0].price, data[1].price, data[2].price, data[3].price, 
                    data[4].price, data[5].price, data[6].price, data[7].price];

  // Instruction "FOR", création d'une boucle pour les paramètres
  for (let i = 0; i < (paramId, paramAlt, paramColors, paramDescription, 
                      paramImg, paramName, paramPrice).length; i++) {

    // Définition de la fonction click
    const item = document.createElement("a");
    item.addEventListener("click", function(event) {

      // Prise en main de la fonction click
      event.preventDefault();

      // Redirection vers la page Produit avec export des paramètres dans l'url
      window.location.href = 
      ("./product.html?id=" + paramId[i] + "&altTxt=" + paramAlt[i] + "&colors=" + paramColors[i] 
                            + "&description=" + paramDescription[i] + "&imageUrl=" + paramImg[i]
                            + "&name=" + paramName[i] + "&price=" + paramPrice[i]);
    });

    // Initialisation des éléments html
    const itemContent = document.createElement("article");
    const productImg = document.createElement("img");
    productImg.alt = paramAlt[i];
    productImg.src = paramImg[i];
    const productName = document.createElement("h3");
    productName.textContent = paramName[i];
    const productDescription = document.createElement("p");
    productDescription.textContent = paramDescription[i];
    
    // Insertion des éléments html
    let items = document.getElementById("items")

    itemContent.appendChild(productImg);
    itemContent.appendChild(productDescription);
    itemContent.appendChild(productName);
    item.appendChild(itemContent);
    items.appendChild(item);
  }
})

// la console retourne une alerte de message d'erreur si l'API n'est pas atteinte.
.catch(error => alert("Une erreur inatendu est survenue!"))