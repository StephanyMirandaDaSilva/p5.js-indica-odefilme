// animação, suspense, fantasia, comedia, drama, romance, ação



// Coraline E O Mundo Secreto, 10, animação, suspense, fantasia
// Meu Amigo Totoro,LIVRE, animação, fantasia, comedia
// Para Todos Os Garotos Que Já Amei,14, drama, romance
// Uma Herança Inusitada,14, comedia
// Meninas Não Choram,10, drama
// Projeto Adam, 12, ação
// Meu Cunhado É Um Vampiro, 14, comedia
// Enola Holmes, 12, comedia, drama
// Estraordinario,10, drama
// A Bela E A Fera, LIVRE, fantasia, romance, animação
// Matilda, LIVRE, comedia
let campoIdade;
let campoFantasia;
let campoDrama;


function setup() {
  createCanvas(800, 400);
  createElement("h2","Recomendador de filmes");
  createSpan("Sua Idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoDrama = createCheckbox("Gosta de Drama?");
}

function draw() {
  background(color(200, 200, 255));
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeDrama = campoDrama.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeDrama);
  textAlign(CENTER, CENTER);
  textSize(38);
  fill(color(50, 55, 100));
  textFont('Courier New');
  text(recomendacao, width / 2, height/ 2);

}

 function geraRecomendacao(idade, gostaDeFantasia, gostaDeDrama){
   if(idade >= 10){
     if(idade >= 14){
       return "Uma Herança Inusitada";
     } else {
       if(idade >= 12){
         return "Projeto Adam";
       } else{
       if(gostaDeFantasia || gostaDeDrama){
         return "Enola Homes";
       } else {
         return "Coraline E O Mundo Secreto";
       }
     
       }
      }
   } else {
     if (gostaDeFantasia|| gostaDeDrama){
         return "Meu Amigo Totoro";
         } else {
         return " Matilda";
         }
     
      }
   }