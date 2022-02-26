// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fs = require("fs");
const file = fs.createReadStream("public/Javaughn_Pryce_Resume.pdf");
const stat = fs.statSync("public/Javaughn_Pryce_Resume.pdf");

export default async function handler(req, res) {
  res.setHeader("Content-Length", stat.size);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=Javaughn_Pryce_Resume.pdf"
  );
  file.pipe(res);
}
