import Component from "@ember/component";
import { action } from "@ember/object";
import Task from "../models/task";

export default Component.extend({
  tagName: "div",
  classNames: ["task-row"],
  classNameBindings: ["isDone:is-done"],
  isDone: false,
  data: Task.create({}),
  isDoneHandler: action(function () {
    this.toggleProperty("isDone");
  }),
});
