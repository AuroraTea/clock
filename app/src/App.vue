<script setup>
import { ref } from 'vue';
import PeachClock from './views/PeachClock.vue'
import DigitalClock from './views/DigitalClock.vue'
import GlitchClock from './views/GlitchClock.vue'

const VisOption = ref(false)

const clock = ref(PeachClock)
const changeClock = {
  PeachClock:   ()=>clock.value = PeachClock,
  DigitalClock: ()=>clock.value = DigitalClock,
  GlitchClock:  ()=>clock.value = GlitchClock,
}

</script>

<template>
  <div class="view" @click="VisOption = true">
    <component :is='clock'/>
  </div>
  <div class="mask" @click="VisOption = false" v-show="VisOption">
    <div class="option" @click.stop="changeClock['DigitalClock']"></div>
  </div>
</template>

<style lang="scss">
@import url(./assets/css/font.css);

body{
  margin: 0;
}
p{
  padding: 0;
  margin: 0;
}
#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
.view{
  height: 100vh;
  width: 100vw;
  position: absolute;
  user-select: none;
  .backdrop{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.mask{
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.option{
  width: 600px;
  height: 400px;
  border-radius: 8px;
  background-color: #fff;
}
</style>