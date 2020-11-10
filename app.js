//Movement Animation
const contentHome = document.querySelector(".content-home");
const textHome = document.querySelector(".textHome");

//Y0wz
contentHome.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  contentHome.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Wenn Maus in den Bereich eintritt
contentHome.addEventListener("mouseenter", (e) => {
  contentHome.style.transition = "none";
  //Popout
  textHome.style.transform = "translateZ(20px)";
  textHome.style.transform = "translateZ(150px) rotateZ(0deg)";
});

//Wenn Maus den Bereich verlässt
contentHome.addEventListener("mouseleave", (e) => {
  contentHome.style.transition = "all 0.5s ease";
  contentHome.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  textHome.style.transform = "translateZ(0px)";
  textHome.style.transform = "translateZ(0px) rotateZ(0deg)";
});

//Movement Animation
const contentBlog = document.querySelector(".content-blog");
const textBlog = document.querySelector(".textBlog");

//Y0wz
contentBlog.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  contentBlog.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Wenn Maus in den Bereich eintritt
contentBlog.addEventListener("mouseenter", (e) => {
  contentBlog.style.transition = "none";
  //Popout
  textBlog.style.transform = "translateZ(150px) rotateZ(0deg)";
});

//Wenn Maus den Bereich verlässt
contentBlog.addEventListener("mouseleave", (e) => {
  contentBlog.style.transition = "all 0.5s ease";
  contentBlog.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  textBlog.style.transform = "translateZ(0px)";
  textBlog.style.transform = "translateZ(0px) rotateZ(0deg)";
});

//Movement Animation
const contentAbout = document.querySelector(".content-about");
const textAbout = document.querySelector(".textAbout");

//Y0wz
contentAbout.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  contentAbout.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Wenn Maus in den Bereich eintritt
contentAbout.addEventListener("mouseenter", (e) => {
  contentAbout.style.transition = "none";
  //Popout
  textAbout.style.transform = "translateZ(150px) rotateZ(0deg)";
});

//Wenn Maus den Bereich verlässt
contentAbout.addEventListener("mouseleave", (e) => {
  contentAbout.style.transition = "all 0.5s ease";
  contentAbout.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  textAbout.style.transform = "translateZ(0px)";
  textAbout.style.transform = "translateZ(0px) rotateZ(0deg)";
});

//Pewpew effekte digga mega sick
contentHome.addEventListener("mouseenter", (e) => {
  document.getElementById("myaudio").play();
});
contentBlog.addEventListener("mouseenter", (e) => {
  document.getElementById("myaudio").play();
});
contentAbout.addEventListener("mouseenter", (e) => {
  document.getElementById("myaudio").play();
});
