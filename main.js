let key = "5d28bd1a161626885b22c01c76553f70f06ea39dbd7642da8f9feb743788acf10032"
let $button = document.getElementById("btn")
let $money = document.getElementById("money")
let $crytomoney = document.getElementById("crytomoney")
const c = console.log;

function cargar(){
  let cargando = `<div class="loading" id="loading"></div>`
  document.getElementById("container__box--result").innerHTML = cargando
  setTimeout(()=>{
    cotizacion(valorMoney, valorCryptomoney)
  }, 3000);
}

$button.addEventListener("click", (e) => {
  e.preventDefault()
  const valorMoney = $money.value
  const valorCryptomoney = $crytomoney.value

  if (valorMoney === "Elije tu moneda" || valorCryptomoney === "Elije tu Criptomoneda") {
    let error = ` <p>INGRESE AMBAS MONEDAS!!!</p>
                  <img src="https://c8.alamy.com/compes/rr1w61/viejo-millonario-de-moda-rr1w61.jpg" alt="dibujo millonario" class="error_dibujo">`;
    document.getElementById("container__box--result").innerHTML = error
  }else{
    cotizacion(valorMoney, valorCryptomoney)
    cargar()
  }
})

function cotizacion(valorMoney, valorCryptomoney){
  let apiUrl = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${valorMoney}&api_key=${key}`
  fetch(apiUrl).then((data)=>{
  return data.json();
  }).then((datajson)=>{
  for(let i=0; i<11;i++){
    let busqueda = datajson.Data[i].CoinInfo.Name;
    let infoValores = datajson.Data[i].DISPLAY;
    if(busqueda == valorCryptomoney){
      if(valorMoney=="USD"){
      let {USD: { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE },} = infoValores;
      c(PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE);
      let information = ` <h1> ${datajson.Data[i].CoinInfo.FullName}</h1>
                          <h2> PRECIO: ${PRICE}</h2>
                          <p>precio mas alto del día: ${HIGHDAY}</p>
                          <p>precio mas bajo del día: ${LOWDAY}<p>
                          <p>variacion ultimas 24 horas: ${CHANGEPCT24HOUR}%</p>
                          <p>ultima actualizacion : ${LASTUPDATE}</p> `;
      document.getElementById("container__box--result").innerHTML = information
      }
      if(valorMoney=="EUR"){
      let {EUR: { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE },} = infoValores;
      c(PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE);
      let information = ` <h1> ${datajson.Data[i].CoinInfo.FullName}</h1>
                          <h2> PRECIO: ${PRICE}</h2>
                          <p>precio mas alto del día: ${HIGHDAY}</p>
                          <p>precio mas bajo del día: ${LOWDAY}<p>
                          <p>variacion ultimas 24 horas: ${CHANGEPCT24HOUR}%</p>
                          <p>ultima actualizacion : ${LASTUPDATE}</p> `;
      document.getElementById("container__box--result").innerHTML = information
      }
      if(valorMoney=="GBP"){
      let {GBP: { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE },} = infoValores;
      c(PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE);
      let information = ` <h1> ${datajson.Data[i].CoinInfo.FullName}</h1>
                          <h2> PRECIO: ${PRICE}</h2>
                          <p>precio mas alto del día: ${HIGHDAY}</p>
                          <p>precio mas bajo del día: ${LOWDAY}<p>
                          <p>variacion ultimas 24 horas: ${CHANGEPCT24HOUR}%</p>
                          <p>ultima actualizacion : ${LASTUPDATE}</p> `;
      document.getElementById("container__box--result").innerHTML = information
      }
      if(valorMoney=="PEN"){
      let {PEN: { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE },} = infoValores;
      c(PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE);
      let information = ` <h1> ${datajson.Data[i].CoinInfo.FullName}</h1>
                          <h2> PRECIO: ${PRICE}</h2>
                          <p>precio mas alto del día: ${HIGHDAY}</p>
                          <p>precio mas bajo del día: ${LOWDAY}<p>
                          <p>variacion ultimas 24 horas: ${CHANGEPCT24HOUR}%</p>
                          <p>ultima actualizacion : ${LASTUPDATE}</p> `;
      document.getElementById("container__box--result").innerHTML = information
      }
    }
  }
})
}

