import { Request, Response } from "express";
import { HandleError } from "../../../domain/errors/handle.error";
import { ClassroomsService } from "./classrooms.service";

export class ClassroomsController {

  private readonly classroomsService = new ClassroomsService();

  getAllClassrooms = (req: Request, res: Response): void => {
    this.classroomsService.getAllClassrooms()
      .then((classrooms) => res.status(200).json(classrooms))
      .catch((error) => HandleError.error(error, res));
  };

}