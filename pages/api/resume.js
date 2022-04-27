// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import path from "path";

const filePath = path.resolve(
  __dirname,
  "../../../public/Javaughn_Pryce_Resume.pdf"
);
const buffer = fs.readFileSync(filePath);

export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/pdf");
  res.send(buffer);
}
