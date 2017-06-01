$(".link").click(function(){
  alert(document.getSelection());
  document.execCommand('createLink', false, document.getSelection());
})
$(".bold").click(function(){
  document.execCommand('bold');
})
$(".italics").click(function(){
  document.execCommand('italic');
})
$(".underline").click(function(){
  document.execCommand('underline');
})
$(".bigger").click(function(){
  document.execCommand('styleWithCSS', false, true);
  document.execCommand('foreColor', false, "black");
  document.execCommand('fontSize', false, "7");
})
$(".big").click(function(){
  document.execCommand('styleWithCSS', false, true);
  document.execCommand('foreColor', false, "black");
  document.execCommand('fontSize', false, "5");
})
$(".norm").click(function(){
  document.execCommand('styleWithCSS', false, true);
  document.execCommand('foreColor', false, "#455A64");
  document.execCommand('fontSize', false, "3");
  var select = document.getSelection();
})
$(".color").click(function(){
  document.execCommand('styleWithCSS', false, true);
  document.execCommand('foreColor', false, "black");
})
$(".reset").click(function(){
  document.execCommand('styleWithCSS', false, true);
  document.execCommand('foreColor', false, "#455A64");
})
$(".save").click(function(){
  localStorage.setItem("content", $(".editor").html());
})
$(".load").click(function(){
  $(".editor").html(localStorage.getItem("content"))
})
$(".export").click(function(){
  var doc = new jsPDF();          
var elementHandler = {
  '#ignorePDF': function (element, renderer) {
    return true;
  }
};
var source = window.document.querySelector(".editor");
doc.fromHTML(
    source,
    15,
    15,
    {
      'width': 180,'elementHandlers': elementHandler
    });

doc.output("dataurlnewwindow");
})
$(".exporthtml").click(function(){
  var contenty = document.querySelector(".editor");
  saveAs(
      new Blob(
          [(new XMLSerializer).serializeToString(contenty)]
        , {type: "application/xhtml+xml;charset=" + document.characterSet}
    )
    , "document.xhtml"
);
})