gsap.to('.hero', {
  scrollTrigger : '.hero',
  x : 350,
  duration : 3
});

gsap.to('.img', {
  scrollTrigger: {
    trigger: '.img',
  },
  y: -20, 
  duration:2,
  repeat: -1,
  yoyo: true, 
})
gsap.to('.cover-content' , {
  scrollTrigger : '.cover-content',
  x : 400,
  duration : 3
})
gsap.to('.card-ultra', {
  scrollTrigger: {
    trigger: '.card-ultra',
  },
  y: -20, 
  duration:2,
  repeat: -1,
  yoyo: true, 
})
