document.addEventListener("mousemove", (event) => {
  const x = event.pageX;
  const y = event.pageY;

  // const target = document.querySelector('.current');
  const target = document.querySelector(".bottom_card");
  const targetCoord = target.getBoundingClientRect();

  let targetX = targetCoord.left + target.offsetWidth / 2;
  let targetY = targetCoord.top + target.offsetHeight / 2;

  let angleX = (targetY - y) / 200;
  let angleY = (targetX - x) / -200;

  target.style.transform =
    "rotateX(" + angleX + "deg) rotateY(" + angleY + "deg)";
});
