import { accessTokenCookieName } from "@constants/auth";
import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.cookies[accessTokenCookieName];

  // TODO: fetch from the token
  if (!token) {
    res.status(403).json({ error: "Not logged in" });
    return;
  }
  res.status(200).json({ id: "sample-user-id", name: "John Doe" });
};
