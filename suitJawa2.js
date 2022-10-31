function getPilihanComputer(){
	const comp = Math.random();
	if(comp < 0.34) return 'gajah';
	if(comp >= 0.34 && comp < 0.67) return 'orang';
	return 'semut';
}



function getHasil(comp,player){
	if( player == comp ) return 'SERI!';
       
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
     
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
        
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
        
}

function putar(){
	const imgComputer = document.querySelector('.img-komputer');
	const gambar = ['gajah','semut','orang'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function(){
		if(new Date().getTime() - waktuMulai > 2000){
			clearInterval;
			return;
		}
		imgComputer.setAttribute('src','img/'+gambar[i++]+'.png');


		if(i==gambar.length) i=0;
	}, 100)
}


const pilihan =document.querySelectorAll('li img');
pilihan.forEach(function(pil){
	pil.addEventListener('click',function(){
		// console.log(pil);
	// alert('ok');
	const pilComputer = getPilihanComputer();
	const pilPlayer = pil.className;
	const hasil = getHasil(pilComputer,pilPlayer);
	// console.log('comp : ' + pilComputer);
	// console.log('player : ' + pilPlayer);
	// console.log('hasil : '+ hasil);

	putar();

	setTimeout(function(){
		const imgComputer = document.querySelector('.img-komputer');
	imgComputer.setAttribute('src','img/' + pilComputer + '.png');

	const info =document.querySelector('.info');
	info.innerHTML = hasil;
	},2000);

	})

	
});








// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
// 	// alert('ok');
// 	const pilComputer = getPilihanComputer();
// 	const pilPlayer = pGajah.className;
// 	const hasil = getHasil(pilComputer,pilPlayer);
// 	// console.log('comp : ' + pilComputer);
// 	// console.log('player : ' + pilPlayer);
// 	// console.log('hasil : '+ hasil);
// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src','img/' + pilComputer + '.png');

// 	const info =document.querySelector('.info');
// 	info.innerHTML = hasil;
	
// });



