import Component from "@ember/component";
import { inject as service } from "@ember/service";
import Task from "../models/task";

export default Component.extend({
  router: service(),

  timer: function (date) {
    const calculateDiff = (endDate) => {
      let diff = endDate - new Date();
      let diffDays = Math.floor(diff / 86400000); // napok
      let diffHrs = Math.floor((diff % 86400000) / 3600000); // órák
      let diffMins = Math.floor(((diff % 86400000) % 3600000) / 60000); // percek
      let diffSecs = Math.round((((diff % 86400000) % 3600000) % 60000) / 1000); // másodpercek

      return {
        days: diffDays,
        hours: diffHrs,
        minutes: diffMins,
        seconds: diffSecs,
      };
    };

    let id = setInterval(() => {
      let { days, hours, minutes, seconds } = calculateDiff(date);

      if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
        clearInterval(id);
        this.set("remainingTime", `${0}d ${0}h ${0}m ${0}s`);
      } else {
        this.set("remainingTime", `${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);
    this.set("intervalId", id);
  },

  init() {
    this._super(...arguments);

    const { deadline } = this.data;

    if (deadline) {
      this.timer(deadline);
    }

    this.router.on("routeWillChange", (transition) => {
      if (transition.from.parent.name !== transition.to.parent.name) {
        clearInterval(this.intervalId);
      }
    });
  },

  tagName: "div",
  classNames: ["task-row"],
  classNameBindings: ["isDone:is-done"],
  isDone: false,
  data: Task.create({}),
  intervalId: null,
  remainingTime: "",
  onClickToDelete() {},
  actions: {
    isDoneHandler: function () {
      this.toggleProperty("isDone");

      if (this.isDone) {
        clearInterval(this.intervalId);
      } else {
        const { deadline } = this.data;
        this.timer(deadline);
      }
    },
    deleteHandler: function () {
      clearInterval(this.intervalId);
      return this.onClickToDelete(this.data);
    },
  },
});
