/*
let iconPlus_un = document.querySelector(".iconPlus1");
let iconMoins_un = document.querySelector(".iconMoins1");
let iconPlus_deux = document.querySelector(".iconPlus2");
let iconMoins_deux = document.querySelector(".iconMoins2");
***********************/

const plusBtn = Array.from(document.querySelectorAll(".iconPlus"));
console.log('plusBtn',plusBtn)
const qteArray = Array.from(document.querySelectorAll(".quantite"));
console.log('qteArray',qteArray[0].innerHTML)
const minusBtn = Array.from(document.querySelectorAll(".iconMoins"));

const sommePrix = document.querySelector('.somme-prix')
console.log('somme prix',sommePrix.innerHTML)

const jaimeIcon = Array.from(document.querySelectorAll('.jaime'))
console.log(jaimeIcon) 

const produit = Array.from(document.querySelectorAll('.produit'))
console.log(produit)

const supprimer = Array.from(document.querySelectorAll('.supprimer'))
console.log(supprimer)

const dollar = Array.from(document.querySelectorAll('.dollar'))
console.log('dollar', dollar[0].innerHTML)




for (let el of plusBtn) {
  el.addEventListener("click", () => {
    el.nextElementSibling.innerHTML = Number(el.nextElementSibling.innerHTML )+ 1;
    total()
  //  let calcul = calcSomme(a, dollar[index].innerHTML) 
  //  calcul()
  });
 
}

for (let el of minusBtn) {
    el.addEventListener("click", () => {
        if(Number(el.previousElementSibling.innerHTML)>0){
          el.previousElementSibling.innerHTML = Number(el.previousElementSibling.innerHTML )- 1;
          
          total()
        }
        
    });
  }

for(let index in jaimeIcon){
  jaimeIcon[index].addEventListener('click', () => {
    jaimeIcon[index].style.color = '#020073' 
  });
}
 
for(let index in supprimer){
  supprimer[index].addEventListener('click', () => {
    produit[index].remove()  
  });
}

const total =()=>{
  let sum = 0
  for (let i=0;i<dollar.length;i++){
    sum += dollar[i].innerHTML*qteArray[i].innerHTML
    sommePrix.innerHTML=sum
  }
  console.log(sum)
   
  return sum

}


// let quantite_un = document.querySelector(".quantite1");
// let quantite_deux = document.querySelector(".quantite2");

// let dollar_un = document.querySelector(".dollar1");
// let dollar_deux = document.querySelector(".dollar2");

// let btnCommander = document.querySelector(".myBtnCommander");
// let modalBodyP = document.querySelector(".modal-p");

// let x = 1;
// let y = 0;

// console.log(quantite_un.textContent);

// let clickPlusUn_un = e => {
//   quantite_un.textContent = x++;
//   dollar_un.textContent = y += 60;
// };
// iconPlus_un.addEventListener("click", clickPlusUn_un);

// let clickMoinsUn_un = e => {
//   if (quantite_un.textContent > 0) {
//     quantite_un.textContent = x--;
//   }
//   if (dollar_un.textContent >= 60) {
//     dollar_un.textContent = y -= 60;
//   }
// };
// iconMoins_un.addEventListener("click", clickMoinsUn_un);

// // 2em bloc

// let clickPlusUn_deux = e => {
//   quantite_deux.textContent = x++;
//   dollar_deux.textContent = y += 60;
// };
// iconPlus_deux.addEventListener("click", clickPlusUn_deux);

// let clickMoinsUn_deux = e => {
//   if (quantite_deux.textContent > 0) {
//     quantite_deux.textContent = x--;
//   }
//   if (dollar_deux.textContent >= 60) {
//     dollar_deux.textContent = y -= 60;
//   }
// };
// iconMoins_deux.addEventListener("click", clickMoinsUn_deux);

// //btn commander

// let clickBtnCommander = e => {
//   modalBodyP.textContent = "vous avez commandé" + quantite_un.value;
// };
// btnCommander.addEventListener("click", clickBtnCommander);
