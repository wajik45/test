import axios from "axios";
import { load } from "cheerio";
import express, { json } from "express";
import PORT from "./utils/PORT.js";

const app = express();

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://zoronime.com", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36 Edg/120.0.0.0",
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
