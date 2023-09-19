let yCarros = [100,196,280 , 380 , 450 , 578];
let velocidadeCarros = [ 5, 4 , 7.5 , 6 , 4.2 , 4.7];
let xCarros = [ 1350 , 1350 , 1350 , 1350 , 1350 , 1350 ];
let comprimentoDoCarro = 70;
let alturaDoCarro = 50;




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