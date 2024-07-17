import express from "express";
import * as ProjectController from "../controllers/projectController";
import upload from "../middleware/uploadMiddleware";

const router = express.Router();

router.get("/", ProjectController.getProjects);

router.get("/:projectId", ProjectController.getProject);

router.post("/", upload.single("imageUrl"), ProjectController.createProject);

router.patch(
  "/:projectId",
  upload.single("imageUrl"),
  ProjectController.updateProject
);

router.delete("/:projectId", ProjectController.deleteProject);

export default router;
