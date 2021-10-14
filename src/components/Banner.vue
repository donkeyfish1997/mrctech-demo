<script>
import adData from "@/info/advertise.json";
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const idx = ref(0);
    const leftClick = () => {
      idx.value--;
      if (idx.value < 0) {
        idx.value = adData.length - 1;
      }
    };
    const rightClick = () => {
      idx.value++;
      if (idx.value >= adData.length) {
        idx.value = 0;
      }
    };
    return { leftClick, rightClick, adData, idx };
  },
};
</script>
<template>
  <div class="banner">
    <div class="img">
      <img
        v-for="i in adData"
        :key="i.idx"
        :src="i.url"
        v-show="i.idx == idx"
      />
    </div>
    <button class="left" @click="leftClick">
      <font-awesome-icon icon="chevron-left" />
    </button>

    <button class="right" @click="rightClick">
      <font-awesome-icon icon="chevron-right" />
    </button>
  </div>
</template>
<style lang="scss" scoped>
.banner {
  height: 80vw;
  max-height: 80vh;
  position: relative;
  .img {
    width: 100%;
    height: 100%;
    img {
      margin: auto;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  button {
    padding: 0;
    height: 50px;
    width: 50px;
    background-color: transparent;
    border: none;
    color: rgba(191, 191, 191, 0.678);
    font-size: 50px;
    &.left {
      position: absolute;
      left: 20px;
      top: calc(50% - 25px);
    }
    &.right {
      position: absolute;
      right: 20px;
      top: calc(50% - 25px);
    }
  }
}
</style>