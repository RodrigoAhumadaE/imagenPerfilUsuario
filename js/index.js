function destacarCard(element){
  element.classList.add("dest-card");
}

function noDestacarCard(element){
  element.classList.remove("dest-card");
}

function seleccionar(element){
  console.log("click");
  let cardSelected = document.querySelector(".select");
  console.log(cardSelected);
  if(cardSelected !== null){
    cardSelected.classList.remove("select");
  }  
  element.classList.add("select");
}