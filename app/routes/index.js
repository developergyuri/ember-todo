import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  router: service(),

  redirect(model) {
    if (!model.length) {
      this.router.transitionTo("add");
    } else {
      this.router.transitionTo("list");
    }
  },
});
