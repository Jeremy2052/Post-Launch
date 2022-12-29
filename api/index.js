import express from "express";
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser";
import multer from "multer"

const app = express();

app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    //upload image with original file name, to prevent overriding withsame name, add date/time to file name
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

//upload a single file to api, take req,res and return response
app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)

app.listen(8800, ()=> (
    console.log("server running")
))