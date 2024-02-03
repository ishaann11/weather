import express from "express";
import axios from "axios";


const app = express();
const port = 3000;
const API_URL="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
const apiKey= "cfe0e906ddaf1157f7e76447411c2941";

app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});










app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });


