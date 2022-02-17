import Controller from "@ember/controller";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import Task from "../models/task";

export default Controller.extend({
  router: service(),

  addNewTask: action(function (value) {
    let { title, description } = value;
    let numOfElement = this.model.length;
    let newTask = Task.create({ id: numOfElement, title, description });
    this.model.pushObject(newTask);
    this.router.transitionTo("list");
  }),
});
