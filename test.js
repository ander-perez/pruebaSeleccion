var alphabet = "abcdefghijklmnopqrstuvwxyz";
var res = "";
function showCombinations(){
	var numChars = document.getElementById("numChars").value;
	var length = document.getElementById("length").value;
	res = ""
	
	document.getElementById("solucion").innerHTML = printAllCombinations(parseInt(length), alphabet.substr(0,parseInt(numChars)));
}

function printAllCombinations(length, chars){
	return printAllCombinationsRecursive(chars, "", chars.length, length);
}
function printAllCombinationsRecursive(chars, prefix, n, k){

	if (k == 0) {
		res= res + prefix + " ";
		return;
	}
	
	for (var i = 0; i < n; ++i) {
		var newPrefix = prefix + chars[i]; 
		printAllCombinationsRecursive(chars, newPrefix, n, k - 1); 
	}
	
	return res;
}