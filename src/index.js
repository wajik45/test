import axios from "axios";
import { load } from "cheerio";
import express, { json } from "express";
import PORT from "./utils/PORT.js";

const app = express();

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://zoronime.com", {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    const $ = load(response.data);

    res.send($("title").text());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.group(`SERVER IS RUNNING ON PORT ${PORT}`);
});
