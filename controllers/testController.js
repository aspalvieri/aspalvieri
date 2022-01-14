function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.randomArray = (req, res) => {
	let min_arr = parseInt(req.query.min_arr) || 5;
	let max_arr = parseInt(req.query.max_arr) || 10;
	let min_val = parseInt(req.query.min_val) || 1;
	let max_val = parseInt(req.query.max_val) || 100;
	let arr = [];
	let max = getRndInteger(min_arr, max_arr);
	for (let i = 0; i < max; i++) {
		arr.push(getRndInteger(min_val, max_val));
	}
	return res.json(arr);
};
