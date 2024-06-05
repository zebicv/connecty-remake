import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const primsa: PrismaClient = new PrismaClient();

export const createPost = async (req: Request, res: Response) => {
  const payload = req.body;
};

// :postid
export const getPost = async (req: Request, res: Response) => {};

export const getPosts = async (req: Request, res: Response) => {};

// :postid PUT
export const updatePost = async (req: Request, res: Response) => {};

// :postid DELETE
export const deletePost = async (req: Request, res: Response) => {};
