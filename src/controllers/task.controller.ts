import { Request, Response } from "express";
import * as taskService from "../services/task.service";

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const { title } = req.body;
  const task = await taskService.createTask(title);
  res.status(201).json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const task = await taskService.updateTask(id, req.body);
  res.json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await taskService.deleteTask(id);
  res.status(204).send();
};