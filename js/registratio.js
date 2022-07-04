var other_page = document.getElementById('other_page');
var other_page2 = document.getElementById('other_page2');
var registration = document.getElementById('registration');
var log_in = document.getElementById('log_in');
other_page.onclick = function(){
  registration.style.cssText = "display: none;";
  log_in.style.cssText = "display: flex;";
};
other_page2.onclick = function(){
  registration.style.cssText = "display: flex;";
  log_in.style.cssText = "display: none;";
};
