const Yup = require("yup");
const { isUuid } = require("uuidv4");

async function validateStore(req, res, next) {
  const schema = Yup.object().shape({
    title: Yup.string().required(),
    url: Yup.string().required(),
    techs: Yup.array().of(Yup.string()).required()
  });

  try {
    await schema.validate(req.body);

    return next();
  } catch (error) {
    return res.status(400).json(error.errors);
  }
}

async function validateUpdate(req, res, next) {
  const { id } = req.params;
  const { likes } = req.body;

  if (likes) {
    return res.status(400).json({
      likes: 0
    });
  }

  if (!isUuid(id)) {
    return res.status(400).json({
      error: "Parameter `id` must be an UUID"
    });
  }

  const schema = Yup.object().shape({
    title: Yup.string().required(),
    url: Yup.string().required(),
    techs: Yup.array().of(Yup.string()).required()
  });

  try {
    await schema.validate(req.body);

    return next();
  } catch (error) {
    return res.status(400).json(error.errors);
  }
}

async function validateUuid(req, res, next) {
  const { id } = req.params;

  if (!isUuid(id)) {
    return res.status(400).json({
      error: "Parameter `id` must be an UUID"
    });
  }

  return next();
}

module.exports = {
  validateStore,
  validateUpdate,
  validateUuid
};
