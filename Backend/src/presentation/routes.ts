
import { Router } from "express";
import { ExampleRoutes } from "./modules/example/example.routes";
import { TeachersRoutes } from "./modules/teachers/teachers.routes";
import { ClassroomsRoutes } from "./modules/classrooms/classrooms.routes";

export class AppRoutes {

  static get routes(): Router {
    const router = Router();
    const apiRouter = Router();

    // Rutas originales del profesor
    apiRouter.use("/example", ExampleRoutes.routes);

    // Nuevas rutas del laboratorio
    apiRouter.use("/teachers", TeachersRoutes.routes);
    apiRouter.use("/classrooms", ClassroomsRoutes.routes);

    // Prefijo general de las APIs
    router.use("/api", apiRouter);

    return router;
  }
}
