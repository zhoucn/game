window.onload = function(){
	document.getElementById('start').addEventListener('click',function(){
		function t(){
			var time = parseInt(document.getElementById('time').innerText);
			if(time > 0){
				time--;
				document.getElementById('time').innerText = time;
			}
		}
		if(time == '60'){
			setTimeout(function(){

			},1000);
		}
	},false)
}