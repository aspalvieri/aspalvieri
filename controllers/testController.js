function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

exports.randomArray = (req, res) => {
    let arr = [];
    let max = getRndInteger(5,50);
    for (let i = 0; i < max; i++) {
        arr.push(getRndInteger(1,100));
    }
    return res.json(arr);
};
