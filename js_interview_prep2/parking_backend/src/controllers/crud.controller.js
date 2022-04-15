const Post = (model) => async (req, res) => {
  try {
    const item = await model.create(req.body);
    return res.status(201).send(item);
  } catch (err) {
    return res.status(500).send({ Error: err.message });
  }
};
const Get = (model) => async (req, res) => {
  try {
    const item = await model.find().lean().exec();
    return res.send(item);
  } catch (err) {
    return res.status(500).send({ Error: err.message });
  }
};
const GetOne = (model) => async (req, res) => {
  try {
    const item = await model.findOne({ user_id: req.params.id }).lean().exec();
    return res.send(item);
  } catch (err) {
    return res.send({ Error: err.message });
  }
};

const Delete = (model) => async (req, res) => {
  try {
    const item = await model.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send(item);
  } catch (err) {
    return res.status(500).send({ Error: err.message });
  }
};

const Patch = (model) => async (req, res) => {
  try {
    const item = await model
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .lean()
      .exec();
    return res.status(201).send(item);
  } catch (err) {
    return res.status(500).send({ Error: err.message });
  }
};
module.exports = (model) => {
  return {
    Post: Post(model),
    Get: Get(model),
    GetOne : GetOne(model),
    Delete : Delete(model),
    Patch : Patch(model)
  };
};