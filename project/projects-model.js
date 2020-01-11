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
async function addResource() {
    
}
async function getProjects() {
    
}
async function getProjectById() {
    
}
async function addProject() {
    
}
async function getTasks() {
    
}
async function addTask() {
    
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