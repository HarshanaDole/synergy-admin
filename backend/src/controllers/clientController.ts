import { RequestHandler } from "express";
import ClientModel from "../models/client";
import createHttpError from "http-errors";
import mongoose from "mongoose";

export const getClients: RequestHandler = async (req, res, next) => {
  try {
    const clients = await ClientModel.find().exec();
    res.status(200).json(clients);
  } catch (error) {
    next(error);
  }
};

export const getClient: RequestHandler = async (req, res, next) => {
  const clientId = req.params.clientId;
  try {
    if (!mongoose.isValidObjectId(clientId)) {
      throw createHttpError(400, "Invalid Client id");
    }

    const client = await ClientModel.findById(clientId).exec();

    if (!client) {
      throw createHttpError(404, "Client not found");
    }

    res.status(200).json(client);
  } catch (error) {
    next(error);
  }
};

interface CreateClientBody {
  name?: string;
  imageUrl?: string;
}

export const createClient: RequestHandler<
  unknown,
  unknown,
  CreateClientBody,
  unknown
> = async (req, res, next) => {
  const { name } = req.body;
  console.log("req file :", req.file);
  const imageUrl = req.file
    ? (req.file as Express.Multer.File).path
    : undefined;

  try {
    if (!imageUrl) {
      throw createHttpError(400, `Client must have an image`);
    }
    if (!name) {
      throw createHttpError(400, `Client must have a name`);
    }

    const newClient = await ClientModel.create({
      name,
      imageUrl,
    });

    res.status(201).json(newClient);
  } catch (error) {
    next(error);
  }
};

interface UpdateClientParams {
  clientId?: string;
}

interface UpdateClientBody {
  name?: string;
  imageUrl?: string;
}

export const updateClient: RequestHandler<
  UpdateClientParams,
  unknown,
  UpdateClientBody,
  unknown
> = async (req, res, next) => {
  const clientId = req.params.clientId;
  const newName = req.body.name;
  console.log("req file :", req.file);
  const newImageUrl = req.file
    ? (req.file as Express.Multer.File).path
    : undefined;

  try {
    if (!mongoose.isValidObjectId(clientId)) {
      throw createHttpError(400, "Invalid Client id");
    }

    if (!newName) {
      throw createHttpError(400, `Client must have a name`);
    }

    const client = await ClientModel.findById(clientId).exec();

    if (!client) {
      throw createHttpError(404, "Client not found");
    }
    if (!client.imageUrl && !newImageUrl) {
      throw createHttpError(400, `Client must have an image`);
    }

    if (newName !== undefined) client.name = newName;
    if (newImageUrl !== undefined) client.imageUrl = newImageUrl;

    const updatedClient = await client.save();

    res.status(200).json(updatedClient);
  } catch (error) {
    next(error);
  }
};

export const deleteClient: RequestHandler = async (req, res, next) => {
  const clientId = req.params.clientId;

  try {
    if (!mongoose.isValidObjectId(clientId)) {
      throw createHttpError(400, "Invalid Client id");
    }

    const client = await ClientModel.findById(clientId).exec();

    if (!client) {
      throw createHttpError(404, "Client not found");
    }

    await client.deleteOne();

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
