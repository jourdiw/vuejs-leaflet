import Vue from "vue";
import Vuetify from "vuetify/lib";

const vuetifyOptions = {
  iconfont: "md",
  theme: {
    themes: {
      light: {
        primary: "#af451b"
      }
    }
  }
};

Vue.use(Vuetify);

export default new Vuetify(vuetifyOptions);
