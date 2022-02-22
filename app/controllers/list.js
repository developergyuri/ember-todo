import Controller from "@ember/controller";
import { action } from "@ember/object";

export default Controller.extend({
  deleteHandler: action(function (data) {
    this.model.removeObject(data);
  }),
});
