//progress bars

var waypoint = new Waypoint({
  element: document.getElementById('skills'),
  handler: function() {
      var p = document.querySelectorAll('.progress-bar');
p[0].setAttribute("style","width:100%;transition:1s all");
p[1].setAttribute("style","width:95%;transition:1.5s all");
p[2].setAttribute("style","width:85%;transition:1.7s all");
p[3].setAttribute("style","width:99%;transition:2s all");
p[4].setAttribute("style","width:85%;transition:2.3s all");
p[5].setAttribute("style","width:95%;transition:2.5s all");
      p[6].setAttribute("style","width:60%;transition:2.7s all");
      p[7].setAttribute("style","width:70%;transition:3.0s all");
      p[8].setAttribute("style","width:55%;transition:3.5s all");
      p[9].setAttribute("style","width:99%;transition:4.5s all");
      p[10].setAttribute("style","width:40%;transition:2.5s all");
      p[11].setAttribute("style","width:80%;transition:1.5s all");
     
     },
    offset:'90%'
});



