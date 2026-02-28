import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
    res.json({ message: "Backend läuft 🚀" });
});

app.listen(5000, () => {
    console.log("Backend läuft auf http://localhost:5000");
});