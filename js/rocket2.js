var x = null
var changepage = function(pagenumber){
	document.body.className = "a" + pagenumber;
	var countdownnumber = 10;
	document.getElementById('countdown').innerHTML = countdownnumber;
	clearInterval(x);
	
	if (pagenumber == 2) {
		var countdownnumber = 10;
		x = setInterval(function(){
			countdownnumber = countdownnumber-1
			document.getElementById('countdown').innerHTML = countdownnumber;
			if (countdownnumber == 6){
				document.getElementById('nervous').className = 'nervous';
			}else if (countdownnumber == 4) {
				document.getElementById('nervous').className = 'nervous2';
				document.getElementById('cantwait').className = 'cantwait';
			}else if (countdownnumber == 2) {
				document.getElementById('cantwait').className = 'cantwait2';
			}else if (countdownnumber == 0) {
				changepage(3);
			};
		},800);
	}else if(pagenumber == 3){
		var successrate = setTimeout(function(){
			var randomnumber = Math.round(Math.random()*100);
			console.log(randomnumber);
			if (randomnumber>50) {
				changepage(4);
			}else{
				changepage(5);
			}
		},3000)
	}
};