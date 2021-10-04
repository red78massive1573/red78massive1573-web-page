//Reverse Text Generator (Javascript)
// modifity by lovepsone
function cleartext()
{
	document.form_reverse.input_output.value = '';
}

String.prototype.swapcase = function()
{
	var toswap = this;
	var toswaplen = toswap.length;
	var uplet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var lolet = 'abcdefghijklmnopqrstuvwxyz';
	word = toswap.split('');
	wordlen = word.length;
	var first = word[0];
	var last = word[wordlen-1];
	if (uplet.indexOf(first) == -1) upperc = 0; else upperc = 1;
	if (lolet.indexOf(last) == -1) lowerc = 0; else lowerc = 1;
	if (upperc + lowerc == 2)
	{
		toswap = toswap.split('');
		toswap = toswap.slice(1,toswaplen-1);
		toswap.unshift(first.toLowerCase());
		toswap.push(last.toUpperCase());
		toswap = toswap.join('');
		return toswap;
	}
	else return toswap;
}

function rnd(x,y,z)
{
	var num;
	do
	{
		num = parseInt(Math.random()*z);
		if (num >= x && num <= y) break;
	} while (true);
	return(num);
}

function gen()
{
	upp = new Array('','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
	low = new Array('','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
	dig = new Array('','0','1','2','3','4','5','6','7','8','9');
	var pswrd = '';
	var znak, s;
	var k = 0;
	var n = 12;
	var pass = new Array();
	var w = rnd(30,80,100);

	for (var r = 0; r < w; r++)
	{
		znak = rnd(1,26,100); pass[k] = upp[znak]; k++;
		znak = rnd(1,26,100); pass[k] = low[znak]; k++;
		znak = rnd(1,10,100); pass[k] = dig[znak]; k++;
	}

	for (var i = 0; i < n; i++)
	{
		s = rnd(1,k-1,100);
		pswrd += pass[s];
	}
	return(pswrd);
}

function genpassword()
{
	var text = '';

	for (var i = 0; i < 10; i++)
	{
		text += gen() + '\n';
	}
	document.form_reverse.input_output.value = text + 'www.fliptext.info\n';
}

function replacechar(char)
{
	var resultchar = "";
	var latin1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!?@#$%^&*()_+|-=<>©µ¶¬ .,'/";
	var latin2 = "ETPKAMNXYUDQFGRCLOWBJZSHIVetpkamnxyudqfgrclowbjzshiv6790812534~!?@#$%^&*()_+|-=<>©µ¶¬ .,'/";

	resultchar = latin2[latin1.indexOf(char)];
	return resultchar;
}

function unicodetext()
{
	var text = document.form_reverse.input_output.value;
	var textresult = '';

	text = text.replace(/\r|\n/g, "µ"); // затычка /n

	for (var i = 0; i < text.length; i++)
	{
		textresult += replacechar(text[i]);
	}

	textresult = textresult.replace(/µ/g, "\n");
	document.form_reverse.input_output.value = textresult;
}

function reversetext()
{
	var text = document.form_reverse.input_output.value;
	text = text.replace(/\r\n/g,'\n');
	text = text.replace(/\(/g,'  (  ');
	text = text.replace(/\)/g,'  )  ');
	text = text.replace(/\[/g,'  [  ');
	text = text.replace(/\]/g,'  ]  ');
	text = text.replace(/\{/g,'  {  ');
	text = text.replace(/\}/g,'  }  ');
	text = text.replace(/\</g,'  <  ');
	text = text.replace(/\>/g,'  >  ');
	text = text.split('').reverse().join('');
	text = text.replace(/  \(  /g,')');
	text = text.replace(/  \)  /g,'(');
	text = text.replace(/  \[  /g,']');
	text = text.replace(/  \]  /g,'[');
	text = text.replace(/  \{  /g,'}');
	text = text.replace(/  \}  /g,'{');
	text = text.replace(/  \<  /g,'>');
	text = text.replace(/  \>  /g,'<');
	document.form_reverse.input_output.value = text;
}

function buttonrev()
{
	var btext = document.form_reverse.thebutton1.value;
	if (btext == 'Reverse Text') btext = 'txeT esreveR'; else btext = 'Reverse Text';
	document.form_reverse.thebutton1.value = btext;
}

function fliptext()
{
	var text = document.form_reverse.input_output.value;
	text = text.replace(/\r\n/g,'\n');
	text = text.replace(/\(/g,'  (  ');
	text = text.replace(/\)/g,'  )  ');
	text = text.replace(/\[/g,'  [  ');
	text = text.replace(/\]/g,'  ]  ');
	text = text.replace(/\{/g,'  {  ');
	text = text.replace(/\}/g,'  }  ');
	text = text.replace(/\</g,'  <  ');
	text = text.replace(/\>/g,'  >  ');
	text = text.split('\n').reverse().join('\n');
	text = text.split('').reverse().join('');
	text = text.replace(/  \(  /g,')');
	text = text.replace(/  \)  /g,'(');
	text = text.replace(/  \[  /g,']');
	text = text.replace(/  \]  /g,'[');
	text = text.replace(/  \{  /g,'}');
	text = text.replace(/  \}  /g,'{');
	text = text.replace(/  \<  /g,'>');
	text = text.replace(/  \>  /g,'<');
	document.form_reverse.input_output.value = text;
}

function buttonrevflp()
{
	var btext = document.form_reverse.thebutton2.value;
	if (btext == 'Flip Text') btext = 'txeT pilF'; else btext = 'Flip Text';
	document.form_reverse.thebutton2.value = btext;
}

function reversewords()
{
	var text = document.form_reverse.input_output.value;
	text = text.replace(/\r\n/g,'\n');
	text = text.replace(/\./g,'  .  ');
	text = text.replace(/\,/g,'  ,  ');
	text = text.replace(/\?/g,'  ?  ');
	text = text.replace(/\!/g,'  !  ');
	text = text.replace(/\:/g,'  :  ');
	text = text.replace(/\;/g,'  ;  ');
	text = text.replace(/\(/g,'  (  ');
	text = text.replace(/\)/g,'  )  ');
	text = text.replace(/\[/g,'  [  ');
	text = text.replace(/\]/g,'  ]  ');
	text = text.replace(/\{/g,'  {  ');
	text = text.replace(/\}/g,'  }  ');
	text = text.replace(/\</g,'  <  ');
	text = text.replace(/\>/g,'  >  ');
	text = text.replace(/\"/g,' \" ');
	text = text.replace(/\|/g,' | ');
	text = text.replace(/\n/g,' \n ').split(' ').reverse().join(' ').replace(/ \n /g,'\n');
	text = text.replace(/  \.  /g,'.');
	text = text.replace(/  \,  /g,',');
	text = text.replace(/  \?  /g,'?');
	text = text.replace(/  \!  /g,'!');
	text = text.replace(/  \:  /g,':');
	text = text.replace(/  \;  /g,';');
	text = text.replace(/  \(  /g,')');
	text = text.replace(/  \)  /g,'(');
	text = text.replace(/  \[  /g,']');
	text = text.replace(/  \]  /g,'[');
	text = text.replace(/  \{  /g,'}');
	text = text.replace(/  \}  /g,'{');
	text = text.replace(/  \<  /g,'>');
	text = text.replace(/  \>  /g,'<');
	text = text.replace(/ \" /g,'\"');
	text = text.replace(/ \| /g,'|');
	document.form_reverse.input_output.value = text;
}

function buttonrevwrdng()
{
	var btext = document.form_reverse.thebutton3.value;
	if (btext == 'Reverse Wording') btext = 'Wording Reverse'; else btext = 'Reverse Wording';
	document.form_reverse.thebutton3.value = btext;
}

function flipwords(){
var text = document.form_reverse.input_output.value;
text = text.replace(/\r\n/g,'\n');
text = text.replace(/\./g,'  .  ');
text = text.replace(/\,/g,'  ,  ');
text = text.replace(/\?/g,'  ?  ');
text = text.replace(/\!/g,'  !  ');
text = text.replace(/\:/g,'  :  ');
text = text.replace(/\;/g,'  ;  ');
text = text.replace(/\(/g,'  (  ');
text = text.replace(/\)/g,'  )  ');
text = text.replace(/\[/g,'  [  ');
text = text.replace(/\]/g,'  ]  ');
text = text.replace(/\{/g,'  {  ');
text = text.replace(/\}/g,'  }  ');
text = text.replace(/\</g,'  <  ');
text = text.replace(/\>/g,'  >  ');
text = text.replace(/\"/g,' \" ');
text = text.replace(/\|/g,' | ');
text = text.split('\n').reverse().join('\n');
text = text.replace(/\n/g,' \n ').split(' ').reverse().join(' ').replace(/ \n /g,'\n');
text = text.replace(/  \.  /g,'.');
text = text.replace(/  \,  /g,',');
text = text.replace(/  \?  /g,'?');
text = text.replace(/  \!  /g,'!');
text = text.replace(/  \:  /g,':');
text = text.replace(/  \;  /g,';');
text = text.replace(/  \(  /g,')');
text = text.replace(/  \)  /g,'(');
text = text.replace(/  \[  /g,']');
text = text.replace(/  \]  /g,'[');
text = text.replace(/  \{  /g,'}');
text = text.replace(/  \}  /g,'{');
text = text.replace(/  \<  /g,'>');
text = text.replace(/  \>  /g,'<');
text = text.replace(/ \" /g,'\"');
text = text.replace(/ \| /g,'|');
document.form_reverse.input_output.value = text;}

function buttonrevwrdngflp(){
var btext = document.form_reverse.thebutton4.value;
if (btext == 'Flip Wording') btext = 'Wording Flip'; else btext = 'Flip Wording';
document.form_reverse.thebutton4.value = btext;}

function reversewordletters(){
var text = document.form_reverse.input_output.value;
text = text.replace(/\r\n/g,'\n');
text = text.replace(/\./g,' . ');
text = text.replace(/\,/g,' , ');
text = text.replace(/\?/g,' ? ');
text = text.replace(/\!/g,' ! ');
text = text.replace(/\:/g,' : ');
text = text.replace(/\;/g,' ; ');
text = text.replace(/\(/g,' ( ');
text = text.replace(/\)/g,' ) ');
text = text.replace(/\[/g,' [ ');
text = text.replace(/\]/g,' ] ');
text = text.replace(/\{/g,' { ');
text = text.replace(/\}/g,' } ');
text = text.replace(/\</g,' < ');
text = text.replace(/\>/g,' > ');
text = text.replace(/\'/g,' \' ');
text = text.replace(/\"/g,' \" ');
text = text.replace(/\%/g,' % ');
text = text.replace(/\$/g,' $ ');
text = text.replace(/\#/g,' # ');
text = text.replace(/\@/g,' @ ');
text = text.replace(/\*/g,' * ');
text = text.replace(/\+/g,' + ');
text = text.replace(/\-/g,' - ');
text = text.replace(/\=/g,' = ');
text = text.replace(/\_/g,' _ ');
text = text.replace(/\|/g,' | ');
text = text.replace(/\&/g,' & ');
text = text.replace(/\//g,' / ');
text = text.replace(/\\/g,' \\ ');
text = text.replace(/\n/g,' \n ');
text = text.split(' ');
var len = text.length;
var textarr = new Array();
for (var x = 0; x < len; x++){
var text2 = text[x].swapcase();
text2 = text2.split('').reverse().join('');
textarr[x] = text2;}
text = textarr.join(' ');
text = text.replace(/ \n /g,'\n');
text = text.replace(/ \. /g,'.');
text = text.replace(/ \, /g,',');
text = text.replace(/ \? /g,'?');
text = text.replace(/ \! /g,'!');
text = text.replace(/ \: /g,':');
text = text.replace(/ \; /g,';');
text = text.replace(/ \( /g,'(');
text = text.replace(/ \) /g,')');
text = text.replace(/ \[ /g,'[');
text = text.replace(/ \] /g,']');
text = text.replace(/ \{ /g,'{');
text = text.replace(/ \} /g,'}');
text = text.replace(/ \< /g,'<');
text = text.replace(/ \> /g,'>');
text = text.replace(/ \' /g,'\'');
text = text.replace(/ \" /g,'\"');
text = text.replace(/ \% /g,'%');
text = text.replace(/ \$ /g,'$');
text = text.replace(/ \# /g,'#');
text = text.replace(/ \@ /g,'@');
text = text.replace(/ \* /g,'*');
text = text.replace(/ \+ /g,'+');
text = text.replace(/ \- /g,'-');
text = text.replace(/ \= /g,'=');
text = text.replace(/ \_ /g,'_');
text = text.replace(/ \| /g,'|');
text = text.replace(/ \& /g,'&');
text = text.replace(/ \/ /g,'/');
text = text.replace(/ \\ /g,'\\');
document.form_reverse.input_output.value = text;
}

function buttonrevwrdlet()
{
	var btext = document.form_reverse.thebutton5.value;
	if (btext == 'Reverse Lettering') btext = 'Esrever Gnirettel'; else btext = 'Reverse Lettering';
	document.form_reverse.thebutton5.value = btext;
}

function flipupsidedown(){
var text = document.form_reverse.input_output.value;
var len = text.split('').length;
if (len > 50001) {var overload = confirm("WARNING: You have entered over 50,000 characters of text which could slow down or even lock-up your computer! Please click \"Cancel\" to stop flip text upside down or click \"OK\" to proceed with flip text upside down at your own risk.");
if (overload == true) var result = flipString(text.toLowerCase());
if (overload == false) var result = 'Flip text upside down has been cancelled.';}
else var result = flipString(text.toLowerCase());
document.form_reverse.input_output.value = result;}
function flipString(aString){
var last = aString.length - 1;
var result = new Array(aString.length)
for (var i = last; i >= 0; --i){
var c = aString.charAt(i)
var r = flipTable[c]
result[last - i] = r != undefined ? r : c
}
return result.join('')
}
var flipTable = {
a : '\u0250',
b : 'q',
c : '\u0254',
d : 'p',
e : '\u01DD',
f : '\u025F',
g : '\u0183',
h : '\u0265',
i : '\u0131',
j : '\u027E',
k : '\u029E',
l : '\u05DF',
m : '\u026F',
n : 'u',
r : '\u0279',
t : '\u0287',
v : '\u028C',
w : '\u028D',
y : '\u028E',
'.' : '\u02D9',
'[' : ']',
'(' : ')',
'{' : '}',
'?' : '\u00BF',
'!' : '\u00A1',
"\'" : ',',
'<' : '>',
'_' : '\u203E',
'"' : '\u201E',
'\\' : '\\',
';' : '\u061B',
'\u203F' : '\u2040',
'\u2045' : '\u2046',
'\u2234' : '\u2235'
}
for (i in flipTable){
flipTable[flipTable[i]] = i}

function buttonrevupsdn(){
var btext = document.form_reverse.thebutton6.value;
if (btext == 'Flip Upside Down') btext = 'u\u028Dop \u01DDp\u0131sdn d\u0131\u05DF\u025F'; else btext = 'Flip Upside Down';
document.form_reverse.thebutton6.value = btext;}

function revsearch(){
var text = document.form_revsearch.rq_in.value;
text = text.split('').reverse().join('');
document.form_revsearch.q.value = text;}

function buttonrevsch(){
var btext = document.form_revsearch.thebutton.value;
if (btext == 'Reversed Google Search') btext = 'hcraeS elgooG desreveR'; else btext = 'Reversed Google Search';
document.form_revsearch.thebutton.value = btext;}

function upsidedownsearch(){
var text = document.form_upsidedown.usdq_in.value;
text = flipString(text.toLowerCase());
document.form_upsidedown.q.value = text;}
function flipString(aString){
var last = aString.length - 1;
var result = new Array(aString.length)
for (var i = last; i >= 0; --i){
var c = aString.charAt(i)
var r = flipTable[c]
result[last - i] = r != undefined ? r : c
}
return result.join('')
}
var flipTable = {
a : '\u0250',
b : 'q',
c : '\u0254',
d : 'p',
e : '\u01DD',
f : '\u025F',
g : '\u0183',
h : '\u0265',
i : '\u0131',
j : '\u027E',
k : '\u029E',
l : '\u05DF',
m : '\u026F',
n : 'u',
r : '\u0279',
t : '\u0287',
v : '\u028C',
w : '\u028D',
y : '\u028E',
'.' : '\u02D9',
'[' : ']',
'(' : ')',
'{' : '}',
'?' : '\u00BF',
'!' : '\u00A1',
"\'" : ',',
'<' : '>',
'_' : '\u203E',
'"' : '\u201E',
'\\' : '\\',
';' : '\u061B',
'\u203F' : '\u2040',
'\u2045' : '\u2046',
'\u2234' : '\u2235'
}
for (i in flipTable){
flipTable[flipTable[i]] = i}

function buttonupsidedown()
{
	var btext = document.form_upsidedown.thebutton.value;
	if (btext == 'Upside Down Google Search') btext = '\u0265\u0254\u0279\u0250\u01DDs \u01DD\u05DF\u0183oo\u0183 u\u028Dop \u01DDp\u0131sdn'; else btext = 'Upside Down Google Search';
	document.form_upsidedown.thebutton.value = btext;
}

function SelectAll(id)
{
	document.getElementById(id).focus();
	document.getElementById(id).select();
}
