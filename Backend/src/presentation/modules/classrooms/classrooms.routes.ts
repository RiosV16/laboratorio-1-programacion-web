import { Router } from "express";
import { ClassroomsController } from "./classrooms.controller";

export class ClassroomsRoutes {

  static get routes(): Router {
    const router = Router();
    const controller = new ClassroomsController();

    router.get("/", controller.getAllClassrooms);

    return router;
  }

}