candies = function(a, b, c) {
	return new Promise((res, rej) => {
		if(a + b + c > 2 * Math.pow(10,9)) rej(err);
		else {
			let min = minThreeNumber(a, b, c);

			if(min <= 3) res(min);

			else if(min === a) res(min * 3 - 2);
			else if(min === b) res(min * 3 -1);
			else if(min === c) res(min * 3);
			else rej(err);

		}
	})
}

minThreeNumber = function(a, b, c) {
	let min = 0;
	if(a < b){
		min = a;
		if(c < a) min = c;
	} else {
		min = b;
		if(c < b) min = c;
	}
	return min;
}

//console.log(candies(1,3,3));
module.exports = candies;