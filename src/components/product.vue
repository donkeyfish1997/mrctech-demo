
<script>
export default {
  props: ["data"],
};
</script>
<template>
  <div class="product" @click="this.$emit('clickProduct',data)">
    <div class="container">
      <div class="img">
        <img :src="'https://b.ecimg.tw' + data.url" alt="" />
      </div>
      <h3>{{ data.name }}</h3>
      <p class="describe" v-html="data.describe"></p>
      <p>{{ data.price }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.product {
  .container {
    overflow: hidden;
    margin: 5px;
    padding: 3px;
    background-color: aliceblue;

    h3 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .describe {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .img {
      width: 100%;
      word-wrap: break-word;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>