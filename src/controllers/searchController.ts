import { Request, Response } from "express";

export const search = (req: Request, res: Response) => {
  res.json({
    success: {
      message: "Search",
    },
  });
};
