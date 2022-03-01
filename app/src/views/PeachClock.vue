<script setup>
  import { reactive } from 'vue';
  const time = reactive({
    h1: '',
    h2: '',
    m1: '',
    m2: '',
    s1: '',
    s2: ''
  })
  const updateTime = () => {
    const now = new Date();
    const mm = now.getMinutes();
    const ss = now.getSeconds();
    const hh = now.getHours();
    time.h1 = Math.floor(hh / 10);
    time.h2 = hh % 10;
    time.m1 = Math.floor(mm / 10);
    time.m2 = mm % 10;
    time.s1 = Math.floor(ss / 10);
    time.s2 = ss % 10;
    requestAnimationFrame(updateTime);
  }
  updateTime()
</script>

<template>
  <div class="backdrop">
    <div class="peach" >
      <p id="1">{{time.h1}}</p>
      <p id="2">{{time.h2}}</p>
      <p id="3">:</p>
      <p id="4">{{time.m1}}</p>
      <p id="5">{{time.m2}}</p>
      <p id="6">:</p>
      <p id="7">{{time.s1}}</p>
      <p id="8">{{time.s2}}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.backdrop{
  background: #EACCCC;
  p{
    width: 7rem;
    text-align: center;
  
    font-family: Kanit;
    font-size: 10rem;
    color: #fff;
    text-shadow: 
    0 .1rem 0 #deafaf,
    0 .2rem 0 #dba8a8,
    0 .3rem 0 #d8a1a1,
    0 .4rem 0 #d59999,
    0 .5rem 0 #d29292,
    0 .6rem 0 #cf8b8b,
    0 .7rem 0 #cc8484,
    0 .8rem 0 #c97d7d,
    0 0 .5rem rgba(231, 156, 156, 0.05),
    0 -0.1rem .3rem rgba(231, 156, 156, 0.2),
    0 .9rem .9rem rgba(231, 156, 156, 0.3),
    0 1.2rem 1.2rem rgba(231, 156, 156, 0.3),
    0 1.5rem 1.5rem rgba(231, 156, 156, 0.3);
  
    float: left;
    margin: -0.3rem;
  }
  p:nth-child(3n){
    width: 4rem;
  }
}
</style>
