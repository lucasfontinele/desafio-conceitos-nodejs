const { uuid } = require("uuidv4");

const repositories = [];

const findIndex = (id) => repositories.findIndex((prop) => prop.id === id);

async function index(_, res) {
  return res.json(repositories);
}

async function store(req, res) {
  const { title, url, techs } = req.body;
  const id = uuid();

  const repository = {
    id,
    title,
    url,
    techs,
    likes: 0
  };

  repositories.push(repository);

  return res.status(201).json(repository);
}

async function update(req, res) {
  const { id } = req.params;
  const { title, url, techs } = req.body;
  const repoId = findIndex(id);

  if (repoId > -1) {
    repositories[repoId] = {
      ...repositories[repoId],
      title,
      url,
      techs
    };

    return res.json(repositories[repoId]);
  }

  return res.status(404).json({
    error: "Repository not found"
  });
}

async function remove(req, res) {
  const { id } = req.params;
  const repositoryId = findIndex(id);

  if (repositoryId > -1) {
    repositories.splice(repositoryId, 1);

    return res.status(204).send();
  }

  return res.status(404).json({
    error: "Repository not found"
  });
}

async function likeRepository(req, res) {
  const { id } = req.params;
  const repoId = findIndex(id);

  if (repoId > -1) {
    repositories[repoId].likes += 1;

    return res.json(repositories[repoId]);
  }

  return res.status(404).json({
    error: "Repository not found"
  });
}

module.exports = {
  index,
  store,
  update,
  remove,
  likeRepository
};
