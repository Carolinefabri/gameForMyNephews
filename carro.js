let yCarros = [40,96,150 , 210 , 270 , 318];
let velocidadeCarros = [ 2, 3 , 4.5 , 5 , 3.2 , 2.7];
let xCarros = [ 600 , 600 , 600 , 600 , 600 , 600 ];
let comprimentoDoCarro = 50;
let alturaDoCarro = 40;




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
    xCarros [i] = 600;
  }
 }
}

function passouTodaATela (xCarro) {
  return xCarro < -50;
}