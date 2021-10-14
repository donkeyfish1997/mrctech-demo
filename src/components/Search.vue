<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const keyword = ref("");
    const submit = () => {
      store.commit("setKeyword", keyword.value);
      store.commit("searchProduct");
    };
    const goTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return { keyword, submit, goTop };
  },
};
</script>
<template>
  <div class="search">
    <input type="text" v-model.trim="keyword" @keyup.enter="submit" />

    <button @click="submit">
      <font-awesome-icon icon="search" />
    </button>

    <font-awesome-icon class="goTop" @click="goTop" icon="arrow-circle-up" />
  </div>
  <div style="height: 69px"></div>
</template>

<style lang="scss" scoped>
.search {
  height: 69px;
  width: 100%;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;

  background-color: #cccbc6;
  // box-shadow: 0 0 5px #545454;
  padding: 10px;
  font-size: 1.5rem;
  input {
    padding: 10px;
    min-width: 300px;
    border: 1px solid #a9b7cd;
    border-radius: 10px 0 0 10px;
  }
  button {
    padding: 10px;
    background-color: #a9b7cd;
    color: white;
    border: 1px solid #a9b7cd;
    border-radius: 0 10px 10px 0;
    &:hover {
      background-color: #afc2df;
    }
  }
  .goTop {
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    color: #c7d8c6;
    background-color: rgba(0, 0, 0, 0.612);
    &:hover {
      color: #acd1bd;
    }
  }
}
</style>