let yCarros = [20,110,220 , 300 , 390 , 500];
let velocidadeCarros = [ 3, 4 , 5.5 , 3.5 , 4 , 3.5];
let xCarros = [ 1350 , 1350 , 1350 , 1350 , 1350 , 1350 ];
let comprimentoDoCarro = 250;
let alturaDoCarro = 150;




function mostraCarro (){
  for  (let i = 0; i < imagemCarros.length; i = i + 1 ){
  image(imagemCarros[i], xCarros [i] , yCarros [i] , comprimentoDoCarro , alturaDoCarro );
 
  }
}

function movimentaCarro (){
  for ( let i = 0 ; i < imagemCarros.length; i = i + 1 ){
  xCarros [i] -= velocidadeCarros [i];

  }
}

function voltaPosicaoInicialDoCarro (){
  for (let i = 0; i < imagemCarros.length; i = i + 1 ){
  if ( passouTodaATela(xCarros[i])){
    xCarros [i] = 1350;
  }
 }
}

function passouTodaATela (xCarro) {
  return xCarro < -50;
}