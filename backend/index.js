const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const fileUpload = require("express-fileupload");
const { v4: uniqKeyGenerate } = require("uuid");
const UsersShema = require("./models/user");
const path = require("path");
const dotenv=require("dotenv")
dotenv.config()
const PORT = 5000 || process.env.PORT;

const uri = process.env.MONGO_URI
mongoose.set("strictQuery", true);
mongoose.connect(uri, (err) => {
  if (err) {
    console.log("Connection to mongodb failed");
  } else console.log("Connected to mongoDB successfully");
});

app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.listen(PORT, () => {
  console.log("Running on PORT", PORT);
});

app.post("/uploads", (req, resp) => {
  const { name, location, description } = req.body;
  const { image_files } = req.files;
  const fragments = image_files.name.split(".");
  const fileExt = fragments[fragments.length - 1];
  const uniqKey = uniqKeyGenerate();
  const fileName = uniqKey + "." + fileExt;
  if (["jpeg", "jpg", "png", "svg"].includes(fileExt)) {
    image_files.mv("./uploads/" + fileName, async (err) => {
      if (err) {
        resp.json({ message: err });
      } else {
        const user = new UsersShema({
          name,
          location,
          description,
          file_name: fileName,
          date: Date().slice(4, 15),
        });
        try {
          await user.save();
          resp.json({ message: "Data added to Database successfully" });
        } catch (e) {
          resp.json({ message: e });
        }
      }
    });
  } else {
    resp.json({ message: "Please upload an image file" });
  }



});

app.get("/all", async (req, resp) => {
  try {
    const response = await UsersShema.find();
    resp.json({ result: response });
  } catch (e) {
    resp.json({ message: e });
  }
});

app.get("/image/:filename", (req, resp) => {
  resp.sendFile(path.join(__dirname, `./uploads/${req.params.filename}`));
});
