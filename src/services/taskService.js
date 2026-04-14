import * as taskRepository from '../repositories/taskRepo.js';


export async function createTask(newTask) {
  return taskRepository.create(newTask);
}

export async function getAllTasks(filter) {
  return taskRepository.findAll(filter);
}