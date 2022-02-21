import Component from "@ember/component";
import { action } from "@ember/object";
import { computed } from "@ember/object";

export default Component.extend({
  classNames: ["task-fields"],

  title: "",
  description: "",
  deadline: new Date().toISOString().slice(0, 16),
  buttonIsDisabled: computed("title", "description", "deadline", function () {
    return this.title.length !== 0 &&
      this.description.length !== 0 &&
      new Date(this.deadline).getTime() > new Date().getTime()
      ? false
      : true;
  }),
  onClick() {},

  addNewHandler: action(function () {
    return this.onClick({
      title: this.title,
      description: this.description,
      deadline: this.deadline,
    });
  }),

  datePickerHandler: action(function (event) {
    let selectedDate = event.target.value;
    this.set("deadline", selectedDate);
  }),
});
