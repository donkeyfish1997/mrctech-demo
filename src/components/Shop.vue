<script>
import product from "@/components/product.vue";
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  components: { product },
  setup() {
    const store = useStore();
    const classification = ref(["apple", "sony", "htc", "oppo"]);
    const products = computed(() => store.getters.getProductData);
    const classKeyword = computed(() => store.state.classKeyword);

    const setClass = (i) => {
      store.commit("setClassKeyword", i);
    };
    const showMask = ref(false);
    const maskData = ref("");
    const clickProduct = (data) => {
      showMask.value = true;
      maskData.value = data;
    };
    return {
      classification,
      setClass,
      products,
      classKeyword,
      showMask,
      maskData,
      clickProduct,
    };
  },
};
</script>
<template>
  <div class="shop">
    <div class="class">
      <ul>
        <li @click="setClass('')" :class="{ active: classKeyword == '' }">
          不分類
        </li>
        <li
          v-for="i in classification"
          :key="i"
          @click="setClass(i)"
          :class="{ active: classKeyword == i }"
        >
          {{ i }}
        </li>
      </ul>
    </div>
    <div class="products">
      <product
        class="product"
        v-for="i in products"
        :key="i"
        :data="i"
        @clickProduct="clickProduct"
      />
    </div>
    <transition name="mask">
      <div v-show="showMask" class="mask" @click="showMask = false">
        <div class="container" @click.stop>
          <img :src="'https://b.ecimg.tw' + maskData.url" alt="" />
          <div class="title">
            <h1>{{ maskData.name }}</h1>
            <h1 style="color: red">{{ maskData.price }}</h1>
          </div>
          <p class="describe" v-html="maskData.describe"></p>
        </div>
      </div>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
.shop {
  display: flex;

  .class {
    width: 20%;
    // min-width: 100px;
    li {
      text-align: center;
      background-color: #c7d8c6;
      margin: 15px 0;
      padding: 5px;
      box-shadow: 0 0 3px black;
      &.active {
        background-color: #efd9c1;
      }
    }
  }
  .products {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    .product {
      width: 50%;
      @media only screen and (min-width: 720px) {
        width: 33.333%;
      }
      @media only screen and (min-width: 960px) {
        width: 25%;
      }
      @media only screen and (min-width: 1400px) {
        width: 20%;
      }
    }
  }
  .mask {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 2;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.801);
    .container {
      overflow: auto;
      width: 80%;
      height: 80%;
      max-width: 1000px;
      max-height: 800px;
      padding: 10px;
      display: flex;
      align-items: stretch;
      flex-wrap: wrap;
      background-color: rgb(255, 255, 255);
      border-radius: 10px;
      img {
        padding: 10px;
        width: 50%;
        height: auto;
        object-fit: contain;
      }
      .title {
        padding: 10px;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      @media only screen and (max-width: 700px) {
        img,
        .title {
          width: 100%;
        }
      }
    }
  }
}
.mask-enter-active,
.mask-leave-active {
  transition: opacity 0.5s;
}
.mask-enter-from,
.mask-leave-to {
  opacity: 0;
}

.mask-enter-to,
.mask-leave-from {
  opacity: 1;
}
</style>