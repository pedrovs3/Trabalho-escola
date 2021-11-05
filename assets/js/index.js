var html = `
<div class="container ">

  <div class="card">
    <div class="face face1">
      <div class="content">
        <span class="stars"></span>
        <h2 class="java">DICA 1</h2>
        <p class="java">Se você acha que precisa diminuir o tempo que você joga, é importante organizar o seu tempo, uma organização baseada em rotinas seria uma boa opção, além de ser mais produtivo com o seu tempo, objetivos e metas, dá pra organizar melhor o seu tempo de lazer!</p>
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
        <p class="python">Comece a mudar sua rotina de jogo e se programe para que a cada 2 horas você levante da cadeira, beba uma água e se possível, faça alguns alongamentos, seguindo essas dicas, você se tornará uma pessoa mais saudável sem a necessidade de abandonar suas partidas. Bom Game!</p>
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
        <p class="cSharp">Os exercícios ajudam e muito a melhorar o humor bastando cerca de cinco minutos para alegrá-lo, com a elevação dos batimentos o organismo tende a liberar endorfinas que o te façam sentir melhor!</p>
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
        <p class="python">Faça uma pausa. Quando estiver nervoso, distraia-se dos aspectos irritantes do jogo fazendo alguma outra coisa por um tempo. Separar um momento para descansar pode fazer com que volte ao jogo com a cabeça fresca e tenha sucesso!!</p>
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