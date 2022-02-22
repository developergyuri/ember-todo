import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    let tasks = this.modelFor("list");
    return tasks.find((task) => task.id == params.id);
  },
});
