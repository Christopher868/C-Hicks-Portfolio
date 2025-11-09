import express from "express";
import cors from "cors";
import path from "node:path"

const app = express();
const PORT = 5000;
const __dirname = import.meta.dirname;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend/dist")))

app.get("/api/projects", (req, res)=> {
    res.json({message: "Api Working! Hooray!"});
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"))
})

app.listen(PORT, () => console.log(`Backened server running on port: ${PORT}`))

