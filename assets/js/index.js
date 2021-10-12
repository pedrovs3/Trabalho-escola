var html = `
<div class="box-main"> 
<div class="box">
<div class="front"><img src="https://cdn1.epicgames.com/77f2b98e2cef40c8a7437518bf420e47/offer/Diesel_product_ginger_home_EGS_CDPROJEKTRED_CYBERPUNK2077_S2_DESCRIPTION-2560x1440-8411578303f60188c29f79cdbabcbca938bea5a6-2560x1440-91b7c4749a6d55e56e24bc22166092cb-2560x1440-91b7c4749a6d55e56e24bc22166092cb.jpg" alt=""></div>
<div class="back"><h1>Dica 1</h1>
<p>Lorem,ipsum dolor sit amet consectetur adipisicing elit. Magnam
      quo voluptate libero ipsum alias, ratione doloremque beatae quibusdam quae placeat quam culpa, consectetur 
    minima. Quod doloremque aperiam quis facilis nihil?</p>
</div>

</div>
<div class="box">
<div class="front"><img src="https://cdn1.epicgames.com/77f2b98e2cef40c8a7437518bf420e47/offer/Diesel_product_ginger_home_EGS_CDPROJEKTRED_CYBERPUNK2077_S2_DESCRIPTION-2560x1440-8411578303f60188c29f79cdbabcbca938bea5a6-2560x1440-91b7c4749a6d55e56e24bc22166092cb-2560x1440-91b7c4749a6d55e56e24bc22166092cb.jpg" alt=""></div>
<div class="back"><h1>Dica 1</h1>
<p>Lorem,ipsum dolor sit amet consectetur adipisicing elit. Magnam
      quo voluptate libero ipsum alias, ratione doloremque beatae quibusdam quae placeat quam culpa, consectetur 
    minima. Quod doloremque aperiam quis facilis nihil?</p>
</div>
</div>
<div class="box">
<div class="front"><img src="https://cdn1.epicgames.com/77f2b98e2cef40c8a7437518bf420e47/offer/Diesel_product_ginger_home_EGS_CDPROJEKTRED_CYBERPUNK2077_S2_DESCRIPTION-2560x1440-8411578303f60188c29f79cdbabcbca938bea5a6-2560x1440-91b7c4749a6d55e56e24bc22166092cb-2560x1440-91b7c4749a6d55e56e24bc22166092cb.jpg" alt=""></div>
<div class="back"><h1>Dica 1</h1>
<p>Lorem,ipsum dolor sit amet consectetur adipisicing elit. Magnam
      quo voluptate libero ipsum alias, ratione doloremque beatae quibusdam quae placeat quam culpa, consectetur 
    minima. Quod doloremque aperiam quis facilis nihil?</p>
</div>
</div>
<div class="box">
<div class="front"><img src="https://cdn1.epicgames.com/77f2b98e2cef40c8a7437518bf420e47/offer/Diesel_product_ginger_home_EGS_CDPROJEKTRED_CYBERPUNK2077_S2_DESCRIPTION-2560x1440-8411578303f60188c29f79cdbabcbca938bea5a6-2560x1440-91b7c4749a6d55e56e24bc22166092cb-2560x1440-91b7c4749a6d55e56e24bc22166092cb.jpg" alt=""></div>
<div class="back"><h1>Dica 1</h1>
<p>Lorem,ipsum dolor sit amet consectetur adipisicing elit. Magnam
      quo voluptate libero ipsum alias, ratione doloremque beatae quibusdam quae placeat quam culpa, consectetur 
    minima. Quod doloremque aperiam quis facilis nihil?</p>
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