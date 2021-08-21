var app = new Vue({
  el: '#clock-app',
  data(){
    return{
      h1: '',
      h2: '',
      m1: '',
      m2: '',
      s1: '',
      s2: '',
      time: '',
      mode: 0,
      
    }
  },
  methods: {
    selectMode(){
      app.mode<2 ? app.mode++ : app.mode=0;
      console.log(app.mode);
    },
  // tinier: {
  //   switch(app.mode){
  //   	case 0:
  //   		app.scale = {color:red};
  //   }
  // },
  // bigger: {

  // }
}
})

// const addZero = (num) => num<10 ? `0${num}` : num;

requestAnimationFrame(function updateTime() {
  const now = new Date();
  const hh = now.getHours();
  const mm = now.getMinutes();
  const ss = now.getSeconds();
  app.h1 = Math.floor(hh / 10);
  app.h2 = hh % 10;
  app.m1 = Math.floor(mm / 10);
  app.m2 = mm % 10;
  app.s1 = Math.floor(ss / 10);
  app.s2 = ss % 10;
  app.time = `${app.h1}${app.h2}:${app.m1}${app.m2}:${app.s1}${app.s2}`;
  requestAnimationFrame(updateTime);
});