import { accessTokenCookieName } from "@constants/auth";
import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.cookies[accessTokenCookieName];

  if (!token) {
    res.status(403).json({ error: "Not logged in" });
    return;
  }
  res.setHeader(
    "Set-Cookie",
    `${accessTokenCookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT;`
  );
  res.status(200).redirect(req.headers.referer ?? "/");
};
