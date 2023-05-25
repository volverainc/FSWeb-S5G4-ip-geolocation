import axios from 'axios';

var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/

/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/


/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek
const url = axios.get("https://apis.ergineer.com/ipadresim")
url 
	.then((resolve) => {
		console.log(resolve.data)
		const getIP = axios.get("https://apis.ergineer.com/ipgeoapi/"+resolve.data);
getIP
	.then((res) => {
		console.log(res.data);
		ipContainer(res.data)
		
	});
	})
	


	const ipContainer = (card) => {
		const cards = document.querySelector(".cards");
		const cart = document.createElement("div");
		cart.classList.add("card");
		cards.append(cart);
		const bayrakImg = document.createElement("img");
		bayrakImg.setAttribute("src",`${card.ülkebayrağı}`)
		cart.append(bayrakImg);
		const info = document.createElement("div");
		info.classList.add("card-info")
		cart.append(info);
		const title = document.createElement("h3")
		title.classList.add("ip");
		title.textContent = `${card.sorgu}`;
		const ulke = document.createElement("p");
		ulke.classList.add("ulke");
		ulke.textContent = card.ülke + " (" +card.ülkeKodu +")";
		const enlem = document.createElement("p");
		enlem.textContent = "Enlem: " + card.enlem + " Boylam: " + card.boylam;
		const sehir = document.createElement("p");
		sehir.textContent = "Şehir: " + card.şehir;
		const saat = document.createElement("p");
		saat.textContent = "Saat dilimi:" + card.saatdilimi
		const para = document.createElement("p");
		para.textContent = "Para birimi: " + card.parabirimi;
		const isp = document.createElement("p");
		isp.textContent = "ISP: " + card.isp;
		info.append(title,ulke,enlem,sehir,saat,para,isp);
	}