
// document.addEventListener("DOM",function (e) {
	var text=[];
	var xhr = new XMLHttpRequest();
	xhr.open('GET','./text.txt');
	xhr.send();
	xhr.onreadystatechange = function (d) {
		if (xhr.readyState==4) {		
			text = xhr.responseText.split('\n');
			text.forEach(function (v) {
				var el = document.createElement('p');
				el.textContent=v;
				el.hidden = true;
				document.body.appendChild(el);
			});
			document.querySelector('p').textContent = "loaded ! Clique-moi comme un gros excité pour lire une histoire de ouf dingue malade"
// })

var pos1 =0;
var pos2 =0;
var pos3 =0;

var count=0;

window.addEventListener('deviceorientation',function (e) {

	function log(type) {
		document.querySelector("#"+type).textContent=e[type];	
	}
	
	log("alpha");
	log("beta");
	log("gamma");
	
	var p = document.querySelectorAll('p')[count];

	pos1 = pos1+e.gamma;
	pos2 = pos2+e.beta;
	pos3 = pos3+e.alpha;
	p.style.left = (pos1 *0.5) +"px";
	p.style.top = (pos2 *0.02) +"px";
	// p.style.fontSize = (pos3 *0.02) +"px";

})

window.addEventListener('click',function (e) {
	count = (count+1) ;
	if (count > text.length) {

	}else{
		console.log(count);
		var prev = document.querySelectorAll('p')[count-1];
		var el = document.querySelectorAll('p')[count];
		prev.hidden=true;
		el.hidden=false;
		el.style.zIndex=count;		
	}
})


}
};