javascript:(
  function makewindow() {
  var window = document.createElement('div');
  window.style.border-color = 'black';
  window.style.border-style = 'solid';
  window.style.position = 'absolute';
  window.style.borderRadius = "10px";
  window.style.top = '90px';
  window.style.borderRadius = "10px";
  window.style.zIndex = 9998;
  window.innerHTML = '<h1>Link Machine</h1>';
  
  }
  makewindow()
)
