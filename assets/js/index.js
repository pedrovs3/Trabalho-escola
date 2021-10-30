var html = `
<div class="container ">

  <div class="card">
    <div class="face face1">
      <div class="content">
        <span class="stars"></span>
        <h2 class="java">DICA 1</h2>
        <p class="java">Primeiro, se você acha que precisa diminuir o tempo que você joga, é importante organizar o seu tempo, caso você faça as mesmas coisas todos os dias, uma organização baseada em rotinas seria uma boa opção, além de ser mais produtivo com o seu tempo, objetivos e metas, dá pra organizar melhor o seu tempo de lazer que poderia ser para sua jogatina e apps como o calendário da google podem ajudar nessa organização.</p>
      </div>
    </div>
    <div class="face face2">
      <h2>01</h2>
    </div>
  </div>

  <div class="card">
    <div class="face face1">
      <div class="content">
        <span class="stars"></span>
        <h2 class="python">DICA 2</h2>
        <p class="python">comece a mudar sua rotina de jogo e se programe para que a cada 2 horas você levante da cadeira, beba uma água e se possível, faça alguns alongamentos, seguindo essas dicas, você se tornará uma pessoa mais saudável sem a necessidade de abandonar suas partidas. Bom Game!</p>
      </div>
    </div>
    <div class="face face2">
      <h2>02</h2>
    </div>
  </div>

  <div class="card">
    <div class="face face1">
      <div class="content">
        <span class="stars"></span>
        <h2 class="cSharp">DICA 3</h2>
        <p class="cSharp">Se estiver procurando alguma ajuda para se estressar menos com jogos, esse é um tópico difícil pois depende muito do seu tipo de jogo, por exemplo, em jogos online é mais difícil por você estar em volta de outras pessoas, é mais fácil se estressar quando se está em uma comunidade tóxica, caso queira se estressar menos opte por jogos singleplayer, que o seu estresse não dependa de outras pessoas, e também jogos mais relaxantes, que não sejam difíceis.</p>
      </div>
    </div>
    <div class="face face2">
      <h2>03</h2>
    </div>
  </div>
  <div class="card">
    <div class="face face1">
      <div class="content">
        <span class="stars"></span>
        <h2 class="python">DICA 4</h2>
        <p class="python">Ficar sentado por muito tempo faz com que uma parte do sangue do sangue que está circulando pelo seu corpo fique concentrado da cintura para baixo, assim, quando você se levantar depois de uma longa jogatina, terá pressão baixa, alta taxa de desenvolver varizes e labirintite. Para resolver este problema, é necessário que você estenda suas pernas para frente ainda sentado antes de levantar, e mantenha-a por 10 segundos, assim, o sangue que estava “preso” abaixo da cintura terá o tempo necessário para voltar a sua circulação normalmente.</p>
      </div>
    </div>
    <div class="face face2">
      <h2>04</h2>
    </div>
  </div>
</div>

`
function Vervalor() {
    let button =  document.getElementById('dicas_button')
    var msg = document.getElementById('msg')
    let dicas = document.getElementById('dicas')
    var tn1 = document.getElementById('valorhoras')
    numero = Number(tn1.value)
    document.getElementById('valorhoras').style.display = 'none';
    document.getElementById('botao').style.display = 'none';
    document.getElementById('voltar').style.display = 'block';
    if (numero >= 0 && numero <= 3){ 
    msg.style.color = "#FFF"
    msg.innerHTML = "Seu uso está saudavel!"
}
    else {
        dicas.style.display="block"
        msg.style.color = "#FF0000"
        msg.innerHTML ="Seu uso não está saudavel!"
        button.style.display = 'block'
    }
}
function Voltar(){
    var msg = document.getElementById('msg')
    var tn1 = document.getElementById('valorhoras')
    numero = Number(tn1.value)
    document.getElementById('valorhoras').style.display = 'block';
    document.getElementById('botao').style.display = 'block';
    document.getElementById('voltar').style.display = 'none';
    msg.style.color = "#FFF"
    msg.innerHTML = "Quanto tempo voce passa jogando?" 
    dicas.style.display="none"
    dicas.innerHTML =''
    
}
function dicaShow(){
    dicas.innerHTML = html
    let button =  document.getElementById('dicas_button')
    button.style.display = 'none'

}