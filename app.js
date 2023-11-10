 
var express = require('express');
var app = express(); 
var bodyParser = require('body-parser');

 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET /api/users
app.get('/', function(req, res){
    return res.json('hi');    
});
 
app.get('/findNikSidalih/:id',(req, res) => {
    
	
	 const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({headless:false})
	const page = await browser.newPage();
	await page.goto('https://cekdptonline.kpu.go.id/');
	 await page.type('#__BVID__19', '1971020901700001');
	await delay(1000);
	await page.click(' #root > main > div.container > div > div > div > div > div > div.wizard-buttons > button:nth-child(2)');
	 await delay(800);
	// and now we wait for the AJAX response!
 // page.on('response', async (response) => {    
    // if (response.url() == "https://cekdptonline.kpu.go.id/apilhp"){
        // console.log('XHR response received'); 
        // console.log(await response.json()); 
    // } 
// }); 

	//var tps=await page.$eval('ssssssssss', el => el.innerText);
	var nama=await page.$eval('#root > main > div.container > div > div > div > div > div > div:nth-child(1) > div > div > div > div > div > div.bottom > div.column > div.row.row-1 > p:nth-child(1)', el => el.innerText);
	var tps=await page.$eval('#root > main > div.container > div > div > div > div > div > div:nth-child(1) > div > div > div > div > div > div.bottom > div.column > div.row.row-1 > p.row--right', el => el.innerText);
	var kabupaten=await page.$eval('#root > main > div.container > div > div > div > div > div > div:nth-child(1) > div > div > div > div > div > div.bottom > div.column > div:nth-child(5) > div:nth-child(1) > p.row--left', el => el.innerText);
	var kecamatan=await page.$eval('#root > main > div.container > div > div > div > div > div > div:nth-child(1) > div > div > div > div > div > div.bottom > div.column > div:nth-child(5) > div:nth-child(1) > p.row--center', el => el.innerText);
	var kelurahan=await page.$eval('#root > main > div.container > div > div > div > div > div > div:nth-child(1) > div > div > div > div > div > div.bottom > div.column > div:nth-child(5) > div:nth-child(1) > p.row--right', el => el.innerText);
	
	//console.log (nama);
  
	 res.send(
	 {
		 'data':{
			 'findNikSidalih':{
				 'nama':nama,
				 'tps':tps,
				 'kabupaten':kabupaten,
				 'kecamatan':kecamatan,
				 'kelurahan':kelurahan,
				 },
			 },
	 }
	 );
	await delay(4000);
	await browser.close();
})();


function delay(time) {
   return new Promise(function(resolve) { 
       setTimeout(resolve, time)
   });
   
}

	
	
	
	
	 
});
 



app.listen('3000', function(){
    console.log('Server listening on port 3000');
});	
	
 
	
	
	
 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 