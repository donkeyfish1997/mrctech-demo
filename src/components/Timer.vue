

<script>
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    const time = reactive({ h: 24, m: 0, s: 0 });
    onMounted(() => {
      setInterval(() => {
        if (time.s == 0) {
          time.m--;
          time.s = 60;
          if (time.m < 0) {
            time.h--;
            time.m = 59;
          }
        }
        time.s--;
      }, 1000);
    });
    return { time };
  },
};
</script>
<template>
  <div class="timer">倒數{{ time.h }}：{{ time.m }}：{{ time.s }}</div>
</template>
<style lang="scss" scpoed>
.timer {
  padding: 10px;
  background-color: #c7d8c6;
}
</style>