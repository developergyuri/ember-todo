import Route from "@ember/routing/route";
import { A } from "@ember/array";
import Task from "../models/task";

export default Route.extend({
  model() {
    let list = A([
      Task.create({
        title: "Teszt1",
        description: "Description 1",
      }),
      Task.create({
        title: "Teszt2",
        description: "Description 2",
      }),
    ]);
    return list;
  },
});
