exports.seed = async (knex) => {
  await knex("projects").insert([
    {name: "Node-DB Challenge", description: "This is a simple example", completed: false}
  ])  
};
