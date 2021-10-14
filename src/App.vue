
<script>
import search from "@/components/Search.vue";
import banner from "@/components/Banner.vue";
import timer from "@/components/Timer.vue";
import shop from "@/components/Shop.vue";
export default {
  components: { search, banner, timer, shop },
};
</script>
<template>
  <search />
  <banner />
  <timer />
  <shop />
</template>

<style lang="scss">
* {
  box-sizing:border-box;
}
ul {
  list-style: none;
  padding: 0;
}
</style>
