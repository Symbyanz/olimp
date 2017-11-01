counters = function(N, M) {
	return new Promise ((res, rej)=>{
		if(N > Math.pow(10,9) || M > Math.pow(10,9)){
			rej(err);
		} else {
			let NRelative = N;

			for(i = M; i > 0; i--){
				if( NRelative  === 1) NRelative = N;
				else NRelative -= 1;
			}
			res("end: "+ NRelative);
		}
	})
}

console.log(counters(10, 25));
module.exports = counters;