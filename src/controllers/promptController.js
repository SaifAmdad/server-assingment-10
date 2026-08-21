const PromptModel = require("../models/promptModel");
const reviewModel = require("../models/reviewRatingModel");
const userModel = require("../models/userModel");

const createPrompt = async (req, res) => {
  try {
    const prompt = req.body;

    const user = await userModel.findById(prompt.creatorID);
    if (!user) {
      return res.status(404).send({
        message: "User not found with this ID",
        successs: false,
      });
    }

    prompt.creator = user?.name;
    prompt.creatorImg = user?.image;

    const newPrompt = await PromptModel.create(prompt);

    res.status(200).send({
      success: true,
      message: "Prompt created successfully",
      payload: newPrompt,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error._message,
    });
    console.log(error);
  }
};

const getAllPrompts = async (req, res) => {
  try {
    const search = req.query.search || "";
    const limit = Number(req.query.limit) || 9;
    const page = Number(req.query.page) || 1;

    const searchRegExp = new RegExp(".*" + search + ".*", "i");

    const filter = {
      $or: [
        { title: { $regex: searchRegExp } },
        { description: { $regex: searchRegExp } },
      ],
    };

    const prompts = await PromptModel.find(filter, {})
      .limit(limit)
      .skip((page - 1) * limit);

    const totalPrompts = await PromptModel.find(filter).countDocuments();

    res.status(200).send({
      success: true,
      message: "Prompts were returend successfully",
      payload: {
        prompts,
        totalPrompts,
        pagination: {
          totalPrompts,
          totalPage: Math.ceil(totalPrompts / limit),
          prePage: page - 1 > 0 ? page - 1 : null,
          currentPage: page,
          nextPage:
            page + 1 <= Math.ceil(totalPrompts / limit) ? page + 1 : null,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: error._message,
    });
  }
};

const getPrompt = async (req, res) => {
  try {
    const id = req.params.id;
    const prompt = await PromptModel.findById(id);
    if (!prompt) {
      return res.status(404).send({
        success: false,
        message: "Prompt not found with this ID",
      });
    }
    const user = await userModel.findById(prompt.creatorID);

    const review = await reviewModel.find({ promptId: prompt._id });

    console.log(review);

    res.status(200).send({
      success: true,
      message: "Prompt has been returned successfully",
      prompt,
      user,
      review,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error._message,
    });
  }
};

const deletePrompt = async (req, res) => {
  try {
    const id = req.params.id;

    const prompt = await PromptModel.findById(id);

    if (!prompt) {
      return res.status(404).send({
        success: false,
        message: "Prompt not found with this id",
      });
    }

    const deletedRatings = await reviewModel.deleteMany({
      promptId: prompt._id,
    });

    console.log(deletedRatings);
    const deletedPrompt = await PromptModel.findByIdAndDelete(id);

    res.status(200).send({
      success: true,
      message: "Prompt has been deleted successfully",
      deletedPrompt,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error._message,
    });
  }
};

const updatePrompt = async (req, res) => {
  try {
    const id = req.params.id;
    const updateInfo = req.body;

    const prompt = await PromptModel.findById(id);

    if (!prompt) {
      return res.status(404).send({
        success: false,
        message: "Prompt not found with this id",
      });
    }

    const updatedPrompt = await PromptModel.findByIdAndUpdate(id, updateInfo);

    res.status(200).send({
      success: true,
      message: "Prompt has been updated successfully",
      updatedPrompt,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error._message,
    });
  }
};

module.exports = {
  createPrompt,
  getAllPrompts,
  getPrompt,
  deletePrompt,
  updatePrompt,
};
