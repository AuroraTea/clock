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
    <p :data-text="time">{{time}}</p>
  </div>
</template>

<style lang="scss" scoped>
.backdrop{
  background-color: #000;
  p{
    color: #fff;
    font-family: 'Black Ops One';
    font-size: 4.5rem;
    letter-spacing: .2rem;
  
    transform: scale(2);
    position: relative;
  }
  p:before,
  p:after{
    content: attr(data-text);
  
    position: absolute;
    top: 0;
    left: 0;
  }
  p:before{
    left: .2rem;
    text-shadow: -0.2rem 0 0 #27C0C8;
    animation: glitch-1 2s linear infinite reverse;
  }
  
  p:after{
    left: -0.2rem;
    text-shadow: -0.2rem 0 0 #EA41B6;
    animation: glitch-2 2s linear infinite reverse;
  }

}
  @keyframes glitch-1 {
    0% {
      clip: rect(5.3rem, 35rem, 6.7rem, 0rem);
    }
    5% {
      clip: rect(10rem, 35rem, 8.2rem, 0rem);
    }
    10% {
      clip: rect(5.6rem, 35rem, 8rem, 0rem);
    }
    15% {
      clip: rect(6.4rem, 35rem, 4.2rem, 0rem);
    }
    20% {
      clip: rect(4.9rem, 35rem, 6.1rem, 0rem);
    }
    25% {
      clip: rect(6.9rem, 35rem, 2.8rem, 0rem);
    }
    30% {
      clip: rect(3.5rem, 35rem, 1.9rem, 0rem);
    }
    35% {
      clip: rect(8.3rem, 35rem, 3.1rem, 0rem);
    }
    40% {
      clip: rect(1.4rem, 35rem, .1rem, 0rem);
    }
    45% {
      clip: rect(6rem, 35rem, 8.7rem, 0rem);
    }
    50% {
      clip: rect(8.1rem, 35rem, 2.6rem, 0rem);
    }
    55% {
      clip: rect(6.7rem, 35rem, 6rem, 0rem);
    }
    60% {
      clip: rect(7.4rem, 35rem, 5.7rem, 0rem);
    }
    65% {
      clip: rect(1rem, 35rem, 5.6rem, 0rem);
    }
    70% {
      clip: rect(9.2rem, 35rem, 2.2rem, 0rem);
    }
    75% {
      clip: rect(8.8rem, 35rem, 7.8rem, 0rem);
    }
    80% {
      clip: rect(6.7rem, 35rem, 2.2rem, 0rem);
    }
    85% {
      clip: rect(1.9rem, 35rem, 6.7rem, 0rem);
    }
    90% {
      clip: rect(7rem, 35rem, 5.8rem, 0rem);
    }
    95% {
      clip: rect(6.5rem, 35rem, 7.1rem, 0rem);
    }
    100% {
      clip: rect(7.7rem, 35rem, 8.5rem, 0rem);
    }
  }
  @keyframes glitch-2 {
    0% {
      clip: rect(9.9rem, 35rem, 4.5rem, 0rem);
    }
    5% {
      clip: rect(9.3rem, 35rem, 7.7rem, 0rem);
    }
    10% {
      clip: rect(8.8rem, 35rem, 1.2rem, 0rem);
    }
    15% {
      clip: rect(3.2rem, 35rem, 7.7rem, 0rem);
    }
    20% {
      clip: rect(7.3rem, 35rem, 2.7rem, 0rem);
    }
    25% {
      clip: rect(9.2rem, 35rem, .1rem, 0rem);
    }
    30% {
      clip: rect(8rem, 35rem, 8.3rem, 0rem);
    }
    35% {
      clip: rect(4.2rem, 35rem, 1.4rem, 0rem);
    }
    40% {
      clip: rect(.6rem, 35rem, 1.3rem, 0rem);
    }
    45% {
      clip: rect(4rem, 35rem, .1rem, 0rem);
    }
    50% {
      clip: rect(4.3rem, 35rem, 9.9rem, 0rem);
    }
    55% {
      clip: rect(8.8rem, 35rem, 5.9rem, 0rem);
    }
    60% {
      clip: rect(9rem, 35rem, 3.6rem, 0rem);
    }
    65% {
      clip: rect(.6rem, 35rem, .2rem, 0rem);
    }
    70% {
      clip: rect(3.6rem, 35rem, 4.9rem, 0rem);
    }
    75% {
      clip: rect(9.3rem, 35rem, 7rem, 0rem);
    }
    80% {
      clip: rect(3.6rem, 35rem, 4rem, 0rem);
    }
    85% {
      clip: rect(2.7rem, 35rem, 2.2rem, 0rem);
    }
    90% {
      clip: rect(9.6rem, 35rem, 8rem, 0rem);
    }
    95% {
      clip: rect(6.7rem, 35rem, 6.9rem, 0rem);
    }
    100% {
      clip: rect(8.2rem, 35rem, 1.7rem, 0rem);
    }
  }
</style>