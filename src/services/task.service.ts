import prisma from "../lib/prisma";

export const getAllTasks = async () => {
  return await prisma.task.findMany();
};

export const getTaskById = async (id: number) => {
  return await prisma.task.findUnique({ where: { id } });
};

export const createTask = async (data: { title: string; email: string; password: string }) => {
  return await prisma.task.create({ data });
};

export const updateTask = async (id: number, data: { title?: string; status?: string; email?: string; password?: string }) => {
  return await prisma.task.update({ where: { id }, data });
};

export const deleteTask = async (id: number) => {
  return await prisma.task.delete({ where: { id } });
};