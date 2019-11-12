function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

exports.randomArray = (req, res) => {
    let arr = [];
    for (let i = 0; i < getRndInteger(5,10); i++) {
        arr.push(getRndInteger(1,100));
    }
    return res.json(arr);
};