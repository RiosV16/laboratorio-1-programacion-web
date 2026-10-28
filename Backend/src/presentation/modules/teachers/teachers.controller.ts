import { Request, Response } from "express";
import { HandleError } from "../../../domain/errors/handle.error";
import { TeachersService } from "./teachers.service";

export class TeachersController {

  private readonly teachersService = new TeachersService();

  getAllTeachers = (req: Request, res: Response): void => {
    this.teachersService.getAllTeachers()
      .then((teachers) => res.status(200).json(teachers))
      .catch((error) => HandleError.error(error, res));
  };

}