function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function parseIntOrDefault(value, fallback) {
  const parsed = parseInt(value, 10);
  return Number.isNaN(parsed) ? fallback : parsed;
}

exports.randomArray = (req, res) => {
  let min_arr = parseIntOrDefault(req.query.min_arr, 5);
  let max_arr = parseIntOrDefault(req.query.max_arr, 10);
  if (min_arr > max_arr) {
    max_arr = min_arr;
  }

  let min_val = parseIntOrDefault(req.query.min_val, 1);
  let max_val = parseIntOrDefault(req.query.max_val, 100);
  if (min_val > max_val) {
    max_val = min_val;
  }

  const arr = [];
  const max = getRndInteger(min_arr, max_arr);
  for (let i = 0; i < max; i++) {
    arr.push(getRndInteger(min_val, max_val));
  }

  return res.json(arr);
};

exports.randomInteger = (req, res) => {
  let min = parseIntOrDefault(req.query.min, 1);
  let max = parseIntOrDefault(req.query.max, 100);
  if (min > max) {
    max = min;
  }

  return res.json({
    min,
    max,
    value: getRndInteger(min, max)
  });
};

exports.rollDice = (req, res) => {
  let sides = parseIntOrDefault(req.query.sides, 6);
  let count = parseIntOrDefault(req.query.count, 2);

  if (sides < 2) {
    sides = 2;
  }
  if (sides > 1000) {
    sides = 1000;
  }
  if (count < 1) {
    count = 1;
  }
  if (count > 20) {
    count = 20;
  }

  const rolls = [];
  for (let i = 0; i < count; i++) {
    rolls.push(getRndInteger(1, sides));
  }

  const total = rolls.reduce((sum, value) => sum + value, 0);
  return res.json({ sides, count, rolls, total });
};

exports.textMetrics = (req, res) => {
  const text = typeof req.query.text === "string" ? req.query.text : "";
  const trimmed = text.trim();
  const words = trimmed === "" ? 0 : trimmed.split(/\s+/).length;
  const sentences =
    trimmed === ""
      ? 0
      : trimmed
          .split(/[.!?]+/)
          .filter((part) => part.trim().length > 0).length;

  return res.json({
    characters: text.length,
    characters_no_spaces: text.replace(/\s/g, "").length,
    words,
    sentences,
    estimated_read_seconds: words === 0 ? 0 : Math.max(1, Math.ceil((words / 200) * 60))
  });
};
