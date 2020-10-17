import Vue from "vue";
import Vuetify from "vuetify/lib";
// TODO: remove the css files that are in index.html
import "vuetify/dist/vuetify.min.css";
// import "font-awesome/css/font-awesome.min.css";

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
