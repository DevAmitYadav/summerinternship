
    setTimeout(display, 4000);
    function display(){
        document.getElementById("bio-2").innerHTML = "UI/UX , JAVASCRIPT, REACTJS"
}
window.addEventListener('scroll',functionCall)
function functionCall() {
    var height = window.innerHeight/2;
    var head = document.getElementById("progress-1")
    var main = head.getBoundingClientRect().top
    console.log(main)

    if(main<height)
    {


var progress = document.getElementById("progressDoneHtml")
progress.style.width = progress.getAttribute("data-set")
progress.style.opacity= 1

var progress = document.getElementById("progressDoneCss")
progress.style.width = progress.getAttribute("data-set")
progress.style.opacity= 1

var progress = document.getElementById("progressDoneBootstrap")
progress.style.width = progress.getAttribute("data-set")
progress.style.opacity= 1


var progress = document.getElementById("progressDoneSass")
progress.style.width = progress.getAttribute("data-set")
progress.style.opacity= 1

var progress = document.getElementById("progressDoneJs")
progress.style.width = progress.getAttribute("data-set")
progress.style.opacity= 1

var progress = document.getElementById("progressDoneReact")
progress.style.width = progress.getAttribute("data-set")
progress.style.opacity= 1
}
}

const counters = document.querySelectorAll(".num");
counters.forEach(function (counter) {
  counter.innerText = "20";
  updatecounter();

  function updatecounter() {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 400;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updatecounter, 10);
    } else {
      counter.innerText = target;
    }
  }
});
