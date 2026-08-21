const bookmarkModel = require("../models/bookmarkModel");
const PromptModel = require("../models/promptModel");

const bookmarkPost = async (req, res) => {
  try {
    const bookmark = req.body;
    console.log(bookmark);

    const prompt = await PromptModel.findById(bookmark.promptId);
    if (!prompt) {
      return res.status(404).send({
        success: false,
        message: "Prompt not found with this id",
      });
    }

    const newBookmark = await bookmarkModel.create(bookmark);

    res.status(200).send({
      success: true,
      message: "Bookmark created successfully",
      payload: newBookmark,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error._message,
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

module.exports = { bookmarkPost, deleteBookmark };
