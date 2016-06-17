var menu, navbar, productnav, sections, sectionsLength, html, panel, logo;

function init(){
  menu = document.getElementById('menu');
  navbar = document.getElementById('homenav');
  productnav = document.getElementById('productnav');
  sections = document.getElementById('panel').getElementsByTagName('section');
  sectionsLength = sections.length;
  html = document.getElementsByTagName('html')[0];
  panel = document.getElementById('panel');
  logo = panel.getElementsByTagName('img')[0];

  menu.addEventListener("click", processMenu,false);
  navbar.addEventListener("click", processNav,false);
  productnav.addEventListener("click", processNav ,false);
  logo.addEventListener("click", processLogo,false);
}

function processMenu(ev){
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
}

function processNav(ev){
  var section = ev.target.dataset.name;
  if (section){
    for(i = 0 ; i < sectionsLength ; i++) {
      var classnames = sections[i].className;
      if (classnames.split(' ')[1] === 'active'){
        if (classnames.split(' ')[0] === section) {
          return;
        } else {
          sections[i].className = classnames.split(' ')[0];
          var view = document.getElementById('panel').getElementsByClassName(section)[0];
          view.className = view.className + ' active';
          panel.className = 'slideout-panel' + ' ' + section;
          return;
        }
      }
    }
  }
}

function processLogo(ev){
  var sectionIndex = ev.target.dataset.index;

  if (sectionIndex){
    for(i = 0 ; i < sectionsLength ; i++) {
      var classnames = sections[i].className;
      if (classnames.split(' ')[1] === 'active'){
        if (classnames.split(' ')[0] === sectionIndex) {
          return;
        } else {
          sections[i].className = classnames.split(' ')[0];
          var view = document.getElementById('panel').getElementsByClassName(sectionIndex)[0];
          view.className = view.className + ' active';
          panel.className = 'slideout-panel' + ' ' + sectionIndex;
          return;
        }
      }
    }
  }
}


window.onload = function() {
  init();
};

/*
function(ev){
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
}

 */
