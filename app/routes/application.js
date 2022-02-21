import Route from "@ember/routing/route";
import { A } from "@ember/array";
import Task from "../models/task";
import { inject as service } from "@ember/service";

export default Route.extend({
  router: service(),

  model() {
    return A([
      Task.create({
        id: 0,
        title: "Teszt1",
        description: "Description 1",
        deadline: new Date().setDate(new Date().getDate() + 1),
      }),
      Task.create({
        id: 1,
        title: "Teszt2",
        description: "Description 2",
        deadline: new Date().setDate(new Date().getDate() + 2),
      }),
    ]);
  },
});
