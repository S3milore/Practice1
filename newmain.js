function sumAlphas(words){
	const alphas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	return words.split(/(?:)/u).reduce((sum, alpha) => sum + alphas.indexOf(alpha) + 1, 0);
}

console.log(sumAlphas("abc😂"));
console.log(sumAlphas("paul"));