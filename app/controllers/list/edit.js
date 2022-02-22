import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  router: service(),

  actions: {
    closeEditorHandler: function () {
      this.router.transitionTo("list");
    },
    editTaskHandler: function (value) {
      /*let { title, description, deadline } = value;
       let numOfElement = this.model.length;
      let newTask = Task.create({
        id: numOfElement,
        title,
        description,
        deadline: new Date(deadline),
      }); */
      console.log(value);
      this.model.pushObject(newTask);
      this.router.transitionTo("list");
    },
  },
});
