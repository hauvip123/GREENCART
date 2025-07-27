import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

// Allow multiple origins
const allowerOrigins = ["http://localhost:5173"];
// Middleware configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowerOrigins, credential: true }));
app.get("/", (req, res) => res.send("API is Working "));
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
