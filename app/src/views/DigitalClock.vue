<script setup>
  import { ref } from 'vue';
  const time = ref('')

  const updateTime = () => {
    const now = new Date();
    const mm = now.getMinutes();
    const ss = now.getSeconds();
    const hh = now.getHours();
    const h1 = Math.floor(hh / 10);
    const h2 = hh % 10;
    const m1 = Math.floor(mm / 10);
    const m2 = mm % 10;
    const s1 = Math.floor(ss / 10);
    const s2 = ss % 10;
    time.value = `${h1}${h2}:${m1}${m2}:${s1}${s2}`;
    requestAnimationFrame(updateTime);
  }
  updateTime()
</script>

<template>
  <div class="backdrop">
    <p>{{time}}</p>
  </div>
</template>

<style lang="scss" scoped>
.backdrop{
  background: radial-gradient(#0A2E38, #000 70%);

  color: #fff;
  font-size: 10rem;
  font-family: 'Share Tech Mono';
  text-shadow: 0 0 2rem #0AAFE6, 0 .2rem 0 #DAF6FF;
}
</style>
