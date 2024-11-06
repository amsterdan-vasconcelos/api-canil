import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  res.json({
    success: {
      message: "Home",
    },
  });
};
export const dogs = (req: Request, res: Response) => {
  res.json({
    success: {
      message: "Dogs",
    },
  });
};
export const cats = (req: Request, res: Response) => {
  res.json({
    success: {
      message: "Cats",
    },
  });
};
export const fishes = (req: Request, res: Response) => {
  res.json({
    success: {
      message: "Fishes",
    },
  });
};
