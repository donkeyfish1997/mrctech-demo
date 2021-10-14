import { createStore } from "vuex";
import allProducts from "@/info/product.json";

export default createStore({
  state: {
    keyword: "",
    classKeyword: "",
    productData: [],
  },
  actions: {},
  mutations: {
    setKeyword(state, text) {
      state.keyword = text;
    },
    setClassKeyword(state, text) {
      state.classKeyword = text;
    },
    searchProduct(state) {
      state.classKeyword = "";
      state.productData = [];
      const regex = new RegExp(state.keyword, "i");
      state.productData = allProducts.filter((item) => item.name.match(regex));
    },
  }, //item.class == state.classKeyword
  getters: {
    getProductData(state) {
      if (!state.classKeyword) return state.productData;
      return state.productData.filter((item) => {
        return item.class == state.classKeyword;
      });
    },
  },
  modules: {},
});
