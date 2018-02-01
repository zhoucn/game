Array.prototype.removeByValue = function (val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) {
            this.splice(i, 1);
        }
    }
}

window.onload = function(){
    var times = null;
	document.getElementById('start').addEventListener('click',function(){
        times = setTimeout(t,1000);
	},false);

    document.getElementById('restart').addEventListener('click',function(){
        document.getElementById('time').innerText = '60';
        select();
        clearTimeout(times);
        times = setTimeout(t,1000);
    },false);

    function t(){
        var time = parseInt(document.getElementById('time').innerText);
        if(time > 0){
            time--;
            document.getElementById('time').innerText = time;
            clearTimeout(times);
            times = setTimeout(t,1000);
        }else{
            document.getElementById('time').innerText = '时间到';
        }
    }

    document.getElementById('next').addEventListener('click',select,false);
	var words = document.getElementById('words').innerText;
	var word = document.getElementById('word');
	var arr = words.split(' ');
    select();
	function select(){
        var len = arr.length - 1;
        var ai = Math.round(Math.random() * len);
        word.innerText = arr[ai];
        arr.removeByValue(arr[ai]);
        console.log(arr);
    }

}