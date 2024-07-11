window.onscroll = function() {
    var backToTop = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  document.getElementById("back-to-top").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
