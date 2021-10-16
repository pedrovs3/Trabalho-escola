var html = `
<div class="box-main"> 
<div class="box">
<div class="front"><img src="https://cdn1.epicgames.com/77f2b98e2cef40c8a7437518bf420e47/offer/Diesel_product_ginger_home_EGS_CDPROJEKTRED_CYBERPUNK2077_S2_DESCRIPTION-2560x1440-8411578303f60188c29f79cdbabcbca938bea5a6-2560x1440-91b7c4749a6d55e56e24bc22166092cb-2560x1440-91b7c4749a6d55e56e24bc22166092cb.jpg" alt=""></div>
<div class="back"><h3>DICA 1</h3>
<p>Primeiro, se você acha que precisa diminuir o tempo que você joga, é importante organizar o seu tempo, caso você faça as mesmas coisas todos os dias, uma organização baseada em rotinas seria uma boa opção, além de ser mais produtivo com o seu tempo, objetivos e metas, dá pra organizar melhor o seu tempo de lazer que poderia ser para sua jogatina e apps como o calendário da google podem ajudar nessa organização.</p>
</div>

</div>
<div class="box">
<div class="front"><img src="https://cdn1.epicgames.com/77f2b98e2cef40c8a7437518bf420e47/offer/Diesel_product_ginger_home_EGS_CDPROJEKTRED_CYBERPUNK2077_S2_DESCRIPTION-2560x1440-8411578303f60188c29f79cdbabcbca938bea5a6-2560x1440-91b7c4749a6d55e56e24bc22166092cb-2560x1440-91b7c4749a6d55e56e24bc22166092cb.jpg" alt=""></div>
<div class="back"><h3>DICA 1</h3>
<p>é de extrema importância que você se movimente a cada 2 horas, pois assim, você aumentara o metabolismo, evitará a obesidade e o sedentarismo. Além disso, caminhar por si só, mesmo que dentro da sua casa, aumenta a circulação sanguínea e diminuí em 5 vezes as chances de você ter um AVC! Isso mesmo, por isso, comece a mudar sua rotina de jogo e se programe para que a cada 2 horas você levante da cadeira, beba uma água e se possível, faça alguns alongamentos, seguindo essas dicas, você se tornará uma pessoa mais saudável sem a necessidade de abandonar suas partidas. Bom Game!</p>
</div>
</div>
<div class="box">
<div class="front"><img src="https://cdn1.epicgames.com/77f2b98e2cef40c8a7437518bf420e47/offer/Diesel_product_ginger_home_EGS_CDPROJEKTRED_CYBERPUNK2077_S2_DESCRIPTION-2560x1440-8411578303f60188c29f79cdbabcbca938bea5a6-2560x1440-91b7c4749a6d55e56e24bc22166092cb-2560x1440-91b7c4749a6d55e56e24bc22166092cb.jpg" alt=""></div>
<div class="back"><h3>DICA 1</h3>
<p>Se estiver procurando alguma ajuda para se estressar menos com jogos, esse é um tópico difícil pois depende muito do seu tipo de jogo, por exemplo, em jogos online é mais difícil por você estar em volta de outras pessoas, é mais fácil se estressar quando se está em uma comunidade tóxica, caso queira se estressar menos opte por jogos singleplayer, que o seu estresse não dependa de outras pessoas, e também jogos mais relaxantes, que não sejam difíceis.
</p>
</div>
</div>
<div class="box">
<div class="front"><img src="https://cdn1.epicgames.com/77f2b98e2cef40c8a7437518bf420e47/offer/Diesel_product_ginger_home_EGS_CDPROJEKTRED_CYBERPUNK2077_S2_DESCRIPTION-2560x1440-8411578303f60188c29f79cdbabcbca938bea5a6-2560x1440-91b7c4749a6d55e56e24bc22166092cb-2560x1440-91b7c4749a6d55e56e24bc22166092cb.jpg" alt=""></div>
<div class="back"><h3>DICA 1</h3>
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