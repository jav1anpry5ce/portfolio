// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import stream from "stream";
import { promisify } from "util";
import fetch from "node-fetch";

const pipeline = promisify(stream.pipeline);
const url =
  "https://www.dropbox.com/s/tcg5o2ya469bpmk/Javaughn_Pryce_Resume.pdf?dl=0";

export default async function handler(req, res) {
  const response = await fetch(url); // replace this with your API call & options
  if (!response.ok)
    throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=dummy.pdf");
  await pipeline(response.body, res);
}
