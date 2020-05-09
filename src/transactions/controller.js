const { uuid } = require('uuidv4');

const transactions = [];

async function index(req, res) {
  return res.json(transactions);
}

async function store(req, res) {
  const { description, price, type, category } = req.body;

  const transaction = {
    id: uuid(),
    description,
    price,
    type,
    category,
    createdAt: new Date(),
  };

  transactions.push(transaction);

  return res.status(201).json(transaction);
}

async function dashboard(req, res) {
  let incoming = 0,
    outgoing = 0,
    total = 0;

  for (let item of transactions) {
    if (item.type === 'Incoming') {
      incoming += item.price;
    }
    if (item.type === 'Outgoing') {
      outgoing += item.price;
    }
  }

  total = incoming - outgoing;

  return res.json({
    incoming,
    outgoing,
    total,
  });
}

module.exports = {
  index,
  store,
  dashboard,
};
