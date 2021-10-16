var html = `
<h3 style="color:white;">Passe o mouse em cima para revelar suas dicas!!</h3>
<div class="box-main"> 
<div class="box">
<div class="front"><img src="/assets/img/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg" alt=""></div>
<div class="back"><h3>DICA 1</h3>
<p>Primeiro, se você acha que precisa diminuir o tempo que você joga, é importante organizar o seu tempo, caso você faça as mesmas coisas todos os dias, uma organização baseada em rotinas seria uma boa opção, além de ser mais produtivo com o seu tempo, objetivos e metas, dá pra organizar melhor o seu tempo de lazer que poderia ser para sua jogatina e apps como o calendário da google podem ajudar nessa organização.</p>
</div>

</div>
<div class="box">
<div class="front"><img src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" alt=""></div>
<div class="back"><h3>DICA 2</h3>
<p>é de extrema importância que você se movimente a cada 2 horas, pois assim, você aumentara o metabolismo, evitará a obesidade e o sedentarismo. Além disso, caminhar por si só, mesmo que dentro da sua casa, aumenta a circulação sanguínea e diminuí em 5 vezes as chances de você ter um AVC! Isso mesmo, por isso, comece a mudar sua rotina de jogo e se programe para que a cada 2 horas você levante da cadeira, beba uma água e se possível, faça alguns alongamentos, seguindo essas dicas, você se tornará uma pessoa mais saudável sem a necessidade de abandonar suas partidas. Bom Game!</p>
</div>
</div>
<div class="box">
<div class="front"><img src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt=""></div>
<div class="back"><h3>DICA 3</h3>
<p>Se estiver procurando alguma ajuda para se estressar menos com jogos, esse é um tópico difícil pois depende muito do seu tipo de jogo, por exemplo, em jogos online é mais difícil por você estar em volta de outras pessoas, é mais fácil se estressar quando se está em uma comunidade tóxica, caso queira se estressar menos opte por jogos singleplayer, que o seu estresse não dependa de outras pessoas, e também jogos mais relaxantes, que não sejam difíceis.
</p>
</div>
</div>
<div class="box">
<div class="front"><img src="https://images.unsplash.com/photo-1567391454009-0894f63e5550?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""></div>
<div class="back"><h3>DICA 4</h3>
<p>Ficar sentado por muito tempo faz com que uma parte do sangue do sangue que está circulando pelo seu corpo fique concentrado da cintura para baixo, assim, quando você se levantar depois de uma longa jogatina, terá pressão baixa, alta taxa de desenvolver varizes e labirintite. Para resolver este problema, é necessário que você estenda suas pernas para frente ainda sentado antes de levantar, e mantenha-a por 10 segundos, assim, o sangue que estava “preso” abaixo da cintura terá o tempo necessário para voltar a sua circulação normalmente.</p>
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
