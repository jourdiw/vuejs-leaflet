import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

const vuetifyOptions = {
  iconfont: "md"
};

Vue.use(Vuetify);

new Vue({
  el: "#mainApp",
  vuetify: new Vuetify(vuetifyOptions)
});
