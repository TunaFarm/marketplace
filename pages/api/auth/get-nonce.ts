import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // TODO: fetch from the server
  res.status(200).json({ nonce: "sample nonce" });
};
