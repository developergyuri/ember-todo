import Component from "@ember/component";
import { action } from "@ember/object";
import { empty } from "@ember/object/computed";

export default Component.extend({
  classNames: ["task-fields"],

  title: "",
  description: "",
  buttonIsDisabled: empty("title") || empty("description"),
  onClick() {},

  addNewHandler: action(function () {
    return this.onClick({ title: this.title, description: this.description });
  }),
});
