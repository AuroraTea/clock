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
  time = `${h1}${h2}:${m1}${m2}:${s1}${s2}`;
  requestAnimationFrame(updateTime);
}