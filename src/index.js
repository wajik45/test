import { load } from "cheerio";
import express from "express";
import setPayload from "./utils/setPayload.js";
import getHtml from "./utils/getHtml.js";
import PORT from "./utils/PORT.js";

const app = express();

app.get("/", async (req, res) => {
  const html = await getHtml("https://zoronime.com");
  const $ = load(html);

  const title = $("title").text();

  res.status(200).json(
    setPayload(res, {
      message: "OK",
      data: title,
    })
  );
});

app.listen(PORT, () => {
  console.group(`SERVER IS RUNNING ON PORT ${PORT}`);
});
