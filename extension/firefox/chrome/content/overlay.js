var gsl = {
  start: function() {
    var gslScript = 
      "var gslScript = document.createElement('script');"
      + "gslScript.setAttribute('type','text/javascript');"
      + "gslScript.setAttribute('charset','UTF-8');"
      + "gslScript.setAttribute('src','https://raw.github.com/nettofarah/grooveshark-lyrics/client/client.js');"
      + "document.body.appendChild(gslScript);";

    var safewin = new XPCNativeWrapper(window); 
    var sandbox = new Components.utils.Sandbox(safewin); 
    sandbox.document = safewin.content.document; 

    Components.utils.evalInSandbox(gslScript, sandbox);
  }
};

