import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";

export const home = (_req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createMenuObject("all"),
    banner: {
      title: "Todos os animais",
      background: "allanimals.jpg",
    },
  });
};
export const dogs = (_req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createMenuObject("dogs"),
    banner: {
      title: "Todos os cachorros",
      background: "banner_dog.jpg",
    },
  });
};
export const cats = (_req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createMenuObject("cats"),
    banner: {
      title: "Todos os gatos",
      background: "banner_cat.jpg",
    },
  });
};
export const fishes = (_req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createMenuObject("fishes"),
    banner: {
      title: "Todos os peixes",
      background: "banner_fish.jpg",
    },
  });
};
