// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import stream from "stream";
import { promisify } from "util";

const pipeline = promisify(stream.pipeline);
const url =
  "https://dl.dropbox.com/scl/fi/iimlpnlgirxh3cyr3w5w8/Javaughn_Pryce_Resume.pdf?rlkey=frnpvyj00qlkrw5bv93pe0k7i&dl=0";

export default async function handler(req, res) {
  const response = await fetch(url); // replace this with your API call & options
  if (!response.ok)
    throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=Javaughn_Pryce_Resume.pdf"
  );
  await pipeline(response.body, res);
}
