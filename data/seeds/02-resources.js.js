
exports.seed = async (knex) => {
  await knex("resources").insert([
    {name: "Laptop", description: "vital resources need to code!"},
    {name: "time", description: "You will need to allocate quite time for yourself"}
  ])  
};
