import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "normalize.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowCircleUp,faSearch,faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";
library.add(faArrowCircleUp,faSearch,faChevronLeft,faChevronRight);

createApp(App)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
