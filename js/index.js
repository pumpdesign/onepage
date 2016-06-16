
function init(){
  var menu = document.getElementById('menu');
  var navbar = document.getElementById('homenav');
  var productnav = document.getElementById('productnav');
  var sections = document.getElementById('panel').getElementsByTagName('section');
  var sectionsLength = sections.length;
  var html = document.getElementsByTagName('html')[0];
  var panel = document.getElementById('panel');

  menu.addEventListener("click", function(ev){
    var section = ev.target.dataset.name;
    if (section){
      for(i = 0 ; i < sectionsLength ; i++) {
        var classnames = sections[i].className;
        if (classnames.split(' ')[1] === 'active'){
          if (classnames.split(' ')[0] === section) {
            slideout.close(); //no hago nada
            return;
          } else {
            sections[i].className = classnames.split(' ')[0];
            var view = document.getElementById('panel').getElementsByClassName(section)[0];
            console.log( document.getElementById('panel').getElementsByClassName(section));
            view.className = view.className + ' active';
            panel.className = 'slideout-panel' + ' ' + section;
            slideout.close(); // traigo la que tocó
            return;
          }
        }
      }
    }
  },false);
  navbar.addEventListener("click", function(ev){
    var section = ev.target.dataset.name;
    if (section){
      for(i = 0 ; i < sectionsLength ; i++) {
        var classnames = sections[i].className;
        if (classnames.split(' ')[1] === 'active'){
          if (classnames.split(' ')[0] === section) {
            //slideout.close(); //no hago nada
            return;
          } else {
            sections[i].className = classnames.split(' ')[0];
            //slideout.close(); // traigo la que tocó
            var view = document.getElementById('panel').getElementsByClassName(section)[0];
            view.className = view.className + ' active';
            panel.className = 'slideout-panel' + ' ' + section;
            return;
          }
        }
      }
    }
  },false);

  productnav.addEventListener("click", function(ev){
    var section = ev.target.dataset.name;
    if (section){
      for(i = 0 ; i < sectionsLength ; i++) {
        var classnames = sections[i].className;
        if (classnames.split(' ')[1] === 'active'){
          if (classnames.split(' ')[0] === section) {
            //slideout.close(); //no hago nada
            return;
          } else {
            sections[i].className = classnames.split(' ')[0];
            //slideout.close(); // traigo la que tocó
            var view = document.getElementById('panel').getElementsByClassName(section)[0];
            view.className = view.className + ' active';
            panel.className = 'slideout-panel' + ' ' + section;
            return;
          }
        }
      }
    }
  },false);

}


window.onload = function() {
  init();
};
