// //Exemplo funções
// const divElement = document.getElementById("div-box")

// //divElement.addEventListener("click", ()=>{
//   //  console.log(divElement)
// //});

// divElement.addEventListener("click",mostraElemento );


// function mostraElemento () {
//     console.log(divElement)
// }

// function soma() {
//   let n1 = 10
//   let n2 = 5
//   console.log(n1 +n2)
// }

// //Recuperando elementos do HTML com querySelectorAll
// const liElements = document.querySelectorAll("li");

// //Convertendo node list em array com spread
// const arrayElements = [...liElements];
// console.log(liElements);

//Convertendo node list em array com spread
const arrayElements = [...document.querySelectorAll("li")];

arrayElements.map((el,key)=>{

  console.log(el.textContent.indexOf)

  if (el.textContent.indexOf("item")) {
      el.textContent = `[${el.textcontent}]`;
}
});