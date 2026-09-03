const bookmarkModel = require("../models/bookmarkModel");
const PromptModel = require("../models/promptModel");

const bookmarkPost = async (req, res) => {
  try {
    const { promptTitle, promptId, userId, promptCategory } = req.body;

    const prompt = await PromptModel.findById(promptId);
    if (!prompt) {
      return res.status(404).send({
        success: false,
        message: "Prompt not found with this id",
      });
    }

    await PromptModel.findByIdAndUpdate(prompt._id, {
      $inc: {
        bookmarkCount: 1,
      },
    });

    const newBookmark = await bookmarkModel.create({
      promptTitle,
      promptId,
      userId,
      promptCategory,
    });

    res.status(200).send({
      success: true,
      message: "Bookmark created successfully",
      payload: newBookmark,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `${error._message} Server-Error`,
    });
  }
};

const getBookmark = async (req, res) => {
  try {
    const userId = req.params.id;
    const bookmark = await bookmarkModel.find({ userId });
    res.status(200).send({
      success: true,
      message: "Bookmark were returned successfully",
      payload: bookmark,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `${error._message} server-Error`,
    });
  }
};

const deleteBookmark = async (req, res) => {
  try {
    const id = req.params.id;

    const bookmark = await bookmarkModel.findByIdAndDelete(id);

    if (!bookmark) {
      return res.status(400).send({
        success: false,
        message: "Bookmark not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Bookmark deleted successfully",
      payload: bookmark,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error._message,
    });
  }
};

const copyCountInc = async (req, res) => {
  try {
    const id = req.params.id;

    const prompt = await PromptModel.findById(id);
    console.log(prompt);
    if (!prompt) {
      return res.status(404).send({
        success: false,
        message: "Prompt not found with this id",
      });
    }

    await PromptModel.findByIdAndUpdate(prompt._id, {
      $inc: {
        copyCount: 1,
      },
    });

    res.status(200).send({
      success: true,
      message: "Bookmark created successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `${error._message} Server-Error`,
    });
  }
};

module.exports = { bookmarkPost, deleteBookmark, getBookmark, copyCountInc };
