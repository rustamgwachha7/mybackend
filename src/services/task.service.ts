import prisma from "../lib/prisma";

export const getAllTasks = async () => {
  return await prisma.task.findMany();
};

export const createTask = async (title: string) => {
  return await prisma.task.create({ data: { title } });
};

export const updateTask = async (id: number, data: { title?: string; status?: string }) => {
  return await prisma.task.update({ where: { id }, data });
};

export const deleteTask = async (id: number) => {
  return await prisma.task.delete({ where: { id } });
};