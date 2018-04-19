$('#go').click(function (){
	//var a=397204094;
	$('#hr').after("<hr>");
	var a=$("#a").val();
	var N=$("#mod").val();
	var count=$("#count").val();
	var b=$("#b").val();
	var array=new Object();
	var t=(new Date()).getTime();
	var sum=0;
	var textArray='';
	//$('#hr').after("<p>"+t+"</p>");
	for(var i=0;i<count;i++){
		array[i]=t=(a*t+b)%N;
		sum+=t;
		if(count-i<10){
			textArray+=t+', ';
		}
	}
	$('#hr').after("<p>First: "+textArray+"; Среднее: "+sum/count+"</p>");
	
	var twos=$("#twos").val();
	var reg=Math.pow(2,twos)-1;
	var aMask=reg-Math.pow(2,twos-1)+1;
	var bMask=1;
	reg=reg & (new Date()).getTime();
	regArray=new Object();
	textArray='';
	sum=0;
	var rightBitsArray=new Object();
	for(var i=0;i<count;i++){
		regArray[i]=reg;
		rightBitsArray[i]=reg & bMask;
		if(count-i<10){
			textArray+='reg:'+reg;
			textArray+=', '+rightBitsArray[i];
			textArray+='^'+(reg & aMask)+'; ';
		}
		sum+=reg=(reg>>>1) | (reg & aMask) ^ (rightBitsArray[i]<<(twos-1));
	}
	$('#hr').after("<p>Second: "+textArray+"; Среднее: "+sum/count+"</p>");
	
	var alphabet='абвгдеёжзийклмнопрстуфхцчшщъыьэюя 1234567890';
	var key=$("#key").val();
	var message=$("#text").val();
	
	var asciikey=''.padStart(message.length,key);
	var x__ascii=" ☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !«#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇЇЎў°∙•√№¤■ "
	var cypher='';
	for(var i=0;i<asciikey.length;i++){
		var a=x__ascii.search(message.charAt(i));
		var b=x__ascii.search(asciikey.charAt(i));
		cypher+=x__ascii.charAt(a ^ b);
	}	
	$('#hr').after("<p>Двоичное ASCII - Сообщение: "+message+"; Ключ: "+key+"; Шифр: "+cypher+"</p>");
	
	key=key.toLowerCase();
	key=key.replace(/[^а-яё 0-9]/gi,' ');
	message=message.toLowerCase();
	message=message.replace(/[^а-яё 0-9]/gi,' ');
	key=''.padStart(message.length,key);
	var isDecypher=$('#isDecypher').prop( "checked" );
	cypher='';
	for(var i=0;i<key.length;i++){
		var a=alphabet.search(message.charAt(i))+1;
		var b=alphabet.search(key.charAt(i))+1;
		if(isDecypher){
			cypher+=alphabet.charAt((a-b+alphabet.length)%alphabet.length-1);
		}
		else{
			cypher+=alphabet.charAt((a+b)%alphabet.length-1);
		}
	}
	$('#hr').after("<p>Сложение - Сообщение: "+message+"; Ключ: "+key+"; Шифр: "+cypher+"</p>");


	
	


 //+phrase.charCodeAt(0)
});