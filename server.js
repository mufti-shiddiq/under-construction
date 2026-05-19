const fs = require("fs");
const path = require("path");
const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
const templatePath = path.join(__dirname, "index.html");
let template;
try {
  template = fs.readFileSync(templatePath, "utf8");
} catch (err) {
  console.error("Template not found. Make sure index.html exists.");
  process.exit(1);
}

app.get("/", (req, res) => {
  const html = template
    .replace(/{{\s*SITE_TITLE\s*}}/g, process.env.SITE_TITLE || "example.com")
    .replace(/{{\s*SITE_MESSAGE\s*}}/g, process.env.SITE_MESSAGE || "Our website is under construction.");
  res.send(html);
});

app.use("/static", express.static(path.join(__dirname, "static")));

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
