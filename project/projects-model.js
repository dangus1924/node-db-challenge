const db = require('../data/db-config')

async function getReources(project_id) {
    const resources = await db("projects_resources as p_r")
    .join("projects as p", "p_r.projects_id", "p.id")
    .join("resources as r", "p_r.resources_id", "r.id")
    .select("p.name", "r.name")
    .where("p.id", project_id)
    .first()
return resources
}
async function addResource(newResoure) {
    const [id] = await db("resources").insert(newResoure)
    return db("resources").where(['id']).first()
}
async function getProjects() {
    return db("projects")
}
async function getProjectById(id) {
    return db("projects").where({ id }).first()
}
async function addProject(newProject) {
    const [id] = await db("projects").insert(newProject)
    return db("projects").where({ id }).first()
}
async function getTasks(project_id) {
    const tasks = await db("tasks as t")
        .join("projects as p", "t.projects_id", "p.id")
        .select("p.name", "p.description", "t.id", "t.description", "t.completed")
        .where("p.id", project_id)
    return tasks
}
async function addTask(newTask) {
    const [id] = await db("tasks").insert(newTask)
    return db("tasks").where({ id }).first()
}

module.exports = {
    getReources,
    addResource,
    getProjects,
    getProjectById,
    addProject,
    getTasks,
    addTask,
}