// ator
let yAtor = 635;
let xAtor;
let colisao = false;
let meusPontos = 0;

function setup() {
  createCanvas(800, 800); // Ajuste o tamanho do canvas conforme necessário
  xAtor = width / 5; // Posição horizontal do ator, alinhada com o placar de pontos
}

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 70, 70);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yAtor += 3;
    }
  }
}

// Restante do seu código...

function verificaColisao (){
  for ( let i = 0; i < imagemCarros.length; i = i + 1 ){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoDoCarro , alturaDoCarro, xAtor, yAtor , 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
      meusPontos -= 1;
    }
  }
    }
}

function voltaAtorParaPosicaoInicial (){
  yAtor = 635;
}

function incluiPontos (){
  textAlign(CENTER)
  textSize(50)
  fill(color(244, 232, 105))
  text(meusPontos, width /5, 45);
}

function marcaPonto (){
  if (yAtor < 15) {
    meusPontos += 1;
    somDoPonto.play();
        voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero (){
  return meusPontos > 0;
}

function podeSeMover (){
  return yAtor < 366;
}