var count = 0;
function add() {
	count ++;
	var btn = document.createElement('BUTTON');
    document.getElementById('div1').appendChild(btn);
    var txt = document.createTextNode('new BTN'+count);
    btn.appendChild(txt); 
    btn.addEventListener('click', function() {
    	this.remove();
    });   
}