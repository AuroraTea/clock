<script setup>
import { ref } from 'vue';
import PeachClock from './views/PeachClock.vue'
import DigitalClock from './views/DigitalClock.vue'
import GlitchClock from './views/GlitchClock.vue'

const VisOption = ref(false)

const clock = ref(PeachClock)

const changeClockTo = (c)=> {
  clock.value = c
}

</script>

<template>
  <div class="view" @click="VisOption = true">
    <component :is='clock'/>
  </div>
  <div class="mask" @click="VisOption = false" v-show="VisOption">
    <div class="option" @click.stop>
      <div class="selection" @click="changeClockTo(PeachClock)"></div>
      <div class="selection" @click="changeClockTo(DigitalClock)"></div>
      <div class="selection" @click="changeClockTo(GlitchClock)"></div>
    </div>
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
  padding: 20px;
  border-radius: 8px;
  background-color: rgba($color: #fff, $alpha: .6);
  backdrop-filter: blur(10px);
  display: flex;
  gap: 20px;
  .selection{
    width: 100px;
    height: 100px;
    background-color: #000;
    border-radius: 8px;
  }
}
</style>