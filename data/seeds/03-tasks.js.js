exports.seed = async (knex) => {
  await knex("tasks").insert([
    {projects_id: "1", description: "Create database", notes: "You will need to write create it with pen and paper first", completed: false}
  ])  
};