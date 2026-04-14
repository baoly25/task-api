import * as taskService from '../services/taskService.js';

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}

export async function getTasks(req, res, next) {
  const { completed } = req.query;

  const filter = {};
  if (completed === 'true') filter.completed = true;
  else if (completed === 'false') filter.completed = false;
  else if (completed !== undefined) {
    return res.status(400).json({ error: 'completed must be true or false' });
  }

  const tasks = await taskService.getAllTasks(filter);
  res.json(tasks);
}