// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// const fs = require("fs");
// const file = fs.createReadStream("/public/Javaughn_Pryce_Resume.pdf");
// const stat = fs.statSync("/public/Javaughn_Pryce_Resume.pdf");
import stream from "stream";
import { promisify } from "util";
import fetch from "node-fetch";

const pipeline = promisify(stream.pipeline);
const url = "https://javaughnpryce.live:5000/Javaughn_Pryce_Resume.pdf";

export default async function handler(req, res) {
  const response = await fetch(url); // replace this with your API call & options
  if (!response.ok)
    throw new Error(`unexpected response ${response.statusText}`);
  
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=dummy.pdf");
  await pipeline(response.body, res);

  // res.setHeader("Content-Length", stat.size);
  // res.setHeader("Content-Type", "application/pdf");
  // res.setHeader(
  //   "Content-Disposition",
  //   "attachment; filename=Javaughn_Pryce_Resume.pdf"
  // );
  // file.pipe(res);
}
