var addButton = function () {
  var buttonId = "grooveshark-lyrics";
  var navId = "nav-bar";

  var nav = document.getElementById(navId);
  var currentset = nav.getAttribute("currentset");

  if(!currentset)
    currentset = nav.currentSet;

  var curSet = currentset.split(",")
  if (curSet.indexOf(buttonId) == -1) {
    var set = curSet.concat(buttonId);
    nav.setAttribute("currentset", set.join(","));
    document.persist(navId, "currentset");
  }

  try {
    BrowserToolBoxCustomizeDone(true);
  }
  catch (e) {}
}

window.addEventListener("load", addButton, false);
