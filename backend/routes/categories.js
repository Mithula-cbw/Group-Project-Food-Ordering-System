const { Category } = require("../models/category");
const express = require("express");
const pLimit = require("p-limit");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const plimit = require("p-limit");

cloudinary.config({
  cloud_name: process.env.clodinary_Config_Clod_Name,
  api_key: process.env.clodinary_Config_api_key,
  api_secret: process.env.clodinary_Config_api_secret,
});

//get all list

router.get("/", async (req, res) => {
  const categoryList = await Category.find();

  if (!categoryList) {
    res.status(500).json({ success: false });
  }

  res.send(categoryList);
});

//get by id

router.get("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    res
      .status(500)
      .json({ message: "The category with the given ID was not found" });
  }

  return res.status(200).send(category);
});

//create category

router.post("/create", async (req, res) => {
  const limit = plimit(2);

  const imagesToUpload = req.body.images.map((image) => {
    return limit(async () => {
      const result = await cloudinary.uploader.upload(image);
      // console.log(`successfully uploaded $(image)`);
      // console.log(`>result:$(result.secure_url)`);
      return result;
    });
  });

  const uploadStatus = await Promise.all(imagesToUpload);

  const imgurl = uploadStatus.map((item) => {
    return item.secure_url;
  });
  if (!uploadStatus) {
    return res.status(500).json({
      error: "images cannot upload",
      status: false,
    });
  }
  let category = new Category({
    name: req.body.name,
    images: imgurl,
    color: req.body.color,
  });
  if (!category) {
    res.status(500).json({
      error: err,
      success: false,
    });
  }
  category = await category.save();

  res.status(201).json(category);
});

router.delete("/:id", async (req, res) => {
  const deletedUser = await Category.findByIdAndDelete(req.params.id);

  if (!deletedUser) {
    res.status(404).json({
      message: "Category not found!",
      success: false,
    });
  } else {
    res.status(200).json({
      success: true,
      message: "Category deleted!",
    });
  }
});

router.put("/:id", async (req, res) => {
  const limit = pLimit(2);
  const imagesToUpload = req.body.images.map((image) => {
    return limit(async () => {
      const result = await cloudinary.uploader.upload(image);
      // console.log(`successfully uploaded $(image)`);
      // console.log(`>result:$(result.secure_url)`);
      return result;
    });
  });

  const uploadStatus = await Promise.all(imagesToUpload);

  const imgurl = uploadStatus.map((item) => {
    return item.secure_url;
  });
  if (!uploadStatus) {
    return res.status(500).json({
      error: "images cannot ipload!",
      status: false,
    });
  }
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      icon: imgurl,
      color: req.body.color,
    },
    {
      new: true,
    }
  );
  if (!category) {
    return res.status(500).json({
      message: "category cannot be updated!",
      success: false,
    });
  }
  res.send(category);
});
module.exports = router;
