import prisma from '../config/db.js';

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}

export async function findAll(filter = {}) {
  return prisma.task.findMany({ where: filter });
}