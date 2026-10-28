import { Router } from "express";
import { TeachersController } from "./teachers.controller";

export class TeachersRoutes {

  static get routes(): Router {
    const router = Router();
    const controller = new TeachersController();

    router.get("/", controller.getAllTeachers);

    return router;
  }

}