import { RequestHandler } from "express";
import ProjectModel from "../models/project";
import createHttpError from "http-errors";
import mongoose from "mongoose";

export const getProjects: RequestHandler = async (req, res, next) => {
  try {
    const projects = await ProjectModel.find().exec();
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};

export const getProject: RequestHandler = async (req, res, next) => {
  const projectId = req.params.projectId;
  try {
    if (!mongoose.isValidObjectId(projectId)) {
      throw createHttpError(400, "Invalid Project id");
    }

    const project = await ProjectModel.findById(projectId).exec();

    if (!project) {
      throw createHttpError(404, "Project not found");
    }

    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
};

interface CreateProjectBody {
  imageUrl?: string;
  type?: string;
  client?: string;
  location?: string;
  year?: number;
  description?: string;
}

export const createProject: RequestHandler<
  unknown,
  unknown,
  CreateProjectBody,
  unknown
> = async (req, res, next) => {
  const { type, client, location, year, description } = req.body;
  const imageUrl = req.file
    ? (req.file as Express.Multer.File).path
    : undefined;

  const requiredFields: (keyof CreateProjectBody)[] = [
    "type",
    "client",
    "location",
    "year",
  ];

  try {
    if (!imageUrl) {
      throw createHttpError(400, `Client must have an image`);
    }
    for (const field of requiredFields) {
      if (!req.body[field]) {
        throw createHttpError(400, `Project must have a ${field}`);
      }
    }

    const newProject = await ProjectModel.create({
      imageUrl,
      type,
      client,
      location,
      year,
      description,
    });

    res.status(201).json(newProject);
  } catch (error) {
    next(error);
  }
};

interface UpdateProjectParams {
  projectId?: string;
}

interface UpdateProjectBody {
  imageUrl?: string;
  type?: string;
  client?: string;
  location?: string;
  year?: number;
  description?: string;
}

export const updateProject: RequestHandler<
  UpdateProjectParams,
  unknown,
  UpdateProjectBody,
  unknown
> = async (req, res, next) => {
  const newImageUrl = req.file
    ? (req.file as Express.Multer.File).path
    : undefined;
  const projectId = req.params.projectId;
  const newType = req.body.type;
  const newClient = req.body.client;
  const newLocation = req.body.location;
  const newYear = req.body.year;
  const newDescription = req.body.description;

  const requiredFields: (keyof UpdateProjectBody)[] = [
    "type",
    "client",
    "location",
    "year",
  ];

  try {
    if (!mongoose.isValidObjectId(projectId)) {
      throw createHttpError(400, "Invalid Project id");
    }

    requiredFields.forEach((field) => {
      if (!req.body[field]) {
        throw createHttpError(400, `Project must have a ${field}`);
      }
    });

    const project = await ProjectModel.findById(projectId).exec();

    if (!project) {
      throw createHttpError(404, "Project not found");
    }
    if (!project.imageUrl && !newImageUrl) {
      throw createHttpError(400, `Client must have an image`);
    }

    if (newImageUrl !== undefined) project.imageUrl = newImageUrl;
    if (newType !== undefined) project.type = newType;
    if (newClient !== undefined) project.client = newClient;
    if (newLocation !== undefined) project.location = newLocation;
    if (newYear !== undefined) project.year = newYear;
    if (newDescription !== undefined) project.description = newDescription;

    const updatedProject = await project.save();

    res.status(200).json(updatedProject);
  } catch (error) {
    next(error);
  }
};

export const deleteProject: RequestHandler = async (req, res, next) => {
  const projectId = req.params.projectId;

  try {
    if (!mongoose.isValidObjectId(projectId)) {
      throw createHttpError(400, "Invalid Project id");
    }

    const project = await ProjectModel.findById(projectId).exec();

    if (!project) {
      throw createHttpError(404, "Project not found");
    }

    await project.deleteOne();

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
