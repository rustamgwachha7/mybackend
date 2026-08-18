import { Request, Response } from "express";
import * as taskService from "../services/task.service";
import { createTaskSchema, updateTaskSchema } from "../validators/task.validator";

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
};

export const getTask = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const task = await taskService.getTaskById(id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
};

export const createTask = async (req: Request, res: Response) => {
  const result = createTaskSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.issues });
  }

  const task = await taskService.createTask(result.data);
  res.status(201).json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const result = updateTaskSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.issues });
  }

  const task = await taskService.updateTask(id, result.data);
  res.json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await taskService.deleteTask(id);
  res.status(204).send();
};