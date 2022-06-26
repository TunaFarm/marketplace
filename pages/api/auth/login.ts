import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import { accessTokenCookieName } from "@constants/auth";

export default (req: NextApiRequest, res: NextApiResponse) => {
  let address: string | undefined;
  let signature: string | undefined;

  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ address, signature } = req.body);
  } catch (e) {
    res.status(400).json({ error: "Invalid JSON" });
    return;
  }

  // TODO: send signature and address to the backend

  // TODO: set cookie with the token
  res.setHeader(
    "Set-Cookie",
    serialize(accessTokenCookieName, "sample token", {
      expires: new Date(2100, 1),
    })
  );
  res.status(200).end();
};
