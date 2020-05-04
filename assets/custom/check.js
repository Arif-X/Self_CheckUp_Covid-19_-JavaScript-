function check(){
	var demam = parseInt(document.formInput.demam.value);
	var batuk = parseInt(document.formInput.batuk.value);
	var tenggorokan = parseInt(document.formInput.tenggorokan.value);
	var lemas = parseInt(document.formInput.lemas.value);
	var kepala = parseInt(document.formInput.kepala.value);
	var sesak = parseInt(document.formInput.sesak.value);
	var add = arr => arr.reduce((a, b) => a + b, 0);
	var arr = [demam, batuk, tenggorokan, lemas, kepala, sesak];
	var sum = add(arr);

	if (sum >= 170) {	
		document.getElementById("hasil").innerHTML = "Positif";
		document.getElementById("hasils").innerHTML = "Anda mungkin dipastikan Positif COVID-19. Segera hubungi rumah sakit terdekat!";
	}
	else if (sum >= 130){
		document.getElementById("hasil").innerHTML = "ODP";
		document.getElementById("hasils").innerHTML = "Anda mungkin dipastikan ODP. Dimohon untuk melakukan karantina mandiri atau hubungi rumah sakit terdekat.";
	}		
	else {
		document.getElementById("hasil").innerHTML = "Negatif";
		document.getElementById("hasils").innerHTML = "Anda mungkin dipastikan Negatif COVID-19. Harap untuk menjaga kesehatan, jaga jarak dan cuci tangan setiap saat agar tidak tertular.";
	}
}