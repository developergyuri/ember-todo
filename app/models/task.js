import EmberObject from "@ember/object";

export default EmberObject.extend({
  id: null,
  title: "",
  description: "",

  init() {
    this._super(...arguments);
    // Ha nincs megadva a dátum, akkor random 1-4 órás intervallum a határidő
    if (!this.deadline) {
      this.set(
        "deadline",
        new Date(
          new Date().setHours(
            new Date().getHours() + Math.floor(Math.random() * 5) + 1
          )
        )
      );
    }
  },
});
