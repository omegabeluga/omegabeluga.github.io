setTimeout(function() {
  $("img").each(function() {
    if ($(this).attr("alt") == "www.000webhost.com") {
      $(this).parent().parent().remove();
    }
  })
}, 2000)

$("#full").spectrum({
  color: "#00ff00",
  showInput: true,
  className: "full-spectrum",
  showInitial: true,
  showPalette: true,
  showSelectionPalette: true,
  maxSelectionSize: 10,
  preferredFormat: "hex",
  localStorageKey: "spectrum.demo",
  move: function(color) {

  },
  show: function() {

  },
  beforeShow: function() {

  },
  hide: function() {

  },
  change: function(color) {
    $(".change").attr("data-color", color.toHexString())
  },
  palette: [
    ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
      "rgb(204, 204, 204)", "rgb(217, 217, 217)", "rgb(255, 255, 255)"
    ],
    ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
      "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"
    ],
    ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
      "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
      "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
      "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
      "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
      "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
      "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
      "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
      "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
      "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"
    ]
  ]
});

var comps = {
  "quotation": '<section class="paint-area mockup-section mockup-section--dark"><button class="removeMe"><span>×</span></button><div class=mockup-content><blockquote class=mockup-blockquote><p class="paint-area paint-area--text" contenteditable>There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.<footer class="paint-area paint-area--text" contenteditable>Ray Goforth</footer></blockquote></div></section>',
  "links": '<section class="paint-area mockup-section"><button class="removeMe"><span>×</span></button><div class="mockup-content mockup-grid"><h2 class="paint-area paint-area--text mockup-heading mockup-heading--single" contenteditable>Links</h2><figure class="mockup-grid__item mockup-width--half"><figcaption class="paint-area mockup-caption mockup-caption--box"><h3 class="paint-area paint-area--text" contenteditable>Google</h3><h6 class="paint-area paint-area--text" contenteditable>Click on the link to change the address...</h6><p class="paint-area paint-area--text"><a contenteditable href=http://google.com>http://google.com</a></figcaption></figure><figure class="mockup-grid__item mockup-width--half"><figcaption class="paint-area mockup-caption mockup-caption--box"><h3 class="paint-area paint-area--text" contenteditable>Email</h3><h6 class="paint-area paint-area--text" contenteditable>or enter and email address.</h6><p class="paint-area paint-area--text"><p class="paint-area paint-area--text"><a contenteditable href=mailto:example@example.com>example@example.com</a></p></figcaption></figure></div></section>',
  "gallery1": '<section class="paint-area mockup-section mockup-section--dark"> <button class="removeMe"><span>×</span></button><div class="mockup-content mockup-grid"><h2 class="paint-area paint-area--text mockup-heading mockup-heading--single" contenteditable>Image Gallery</h2> <figure class="mockup-grid__item mockup-width--third"><div class="mockup-img mockup-img--large"><img class="changeable" src="http://placehold.it/300x300"></div> <figcaption class="paint-area mockup-caption mockup-caption--box"><h3 class="paint-area paint-area--text" contenteditable>Change these images</h3><p class="paint-area paint-area--text" contenteditable>Click on the image to change them</p> </figcaption> </figure> <figure class="mockup-grid__item mockup-width--third"><div class="mockup-img mockup-img--large"><img class="changeable" src="http://placehold.it/300x300"></div> <figcaption class="paint-area mockup-caption mockup-caption--box"><h3 class="paint-area paint-area--text" contenteditable>Change these images</h3><p class="paint-area paint-area--text" contenteditable>Click on the image to change them</p> </figcaption> </figure> <figure class="mockup-grid__item mockup-width--third"><div class="mockup-img mockup-img--large"><img class="changeable" src="http://placehold.it/300x300"></div> <figcaption class="paint-area mockup-caption mockup-caption--box"><h3 class="paint-area paint-area--text" contenteditable>Change these images</h3><p class="paint-area" paint-area--text" contenteditable>Click on the image to change them</p> </figcaption> </figure></div> </section>',
  "gallery2": '<section class="paint-area mockup-section"> <button class="removeMe"><span>×</span></button><div class="mockup-content mockup-grid"><h2 class="paint-area paint-area--text mockup-heading mockup-heading--single" contenteditable>Image Gallery</h2> <figure class="mockup-grid__item mockup-width--forth"><div class="mockup-img mockup-img--large"><img class="changeable" src="http://placehold.it/300x300"></div> <figcaption class="mockup-caption"><h3 class="paint-area paint-area--text" contenteditable>Good Image</h3> </figcaption> </figure> <figure class="mockup-grid__item mockup-width--forth"><div class="mockup-img mockup-img--large"><img class="changeable" src="http://placehold.it/300x300"></div> <figcaption class="mockup-caption"><h3 class="paint-area paint-area--text" contenteditable>Another Great Image</h3> </figcaption> </figure> <figure class="mockup-grid__item mockup-width--forth"><div class="mockup-img mockup-img--large"><img class="changeable" src="http://placehold.it/300x300"></div> <figcaption class="mockup-caption"><h3 class="paint-area paint-area--text" contenteditable>I ❤️ our class!</h3> </figcaption> </figure> <figure class="mockup-grid__item mockup-width--forth"><div class="mockup-img mockup-img--large"><img class="changeable" src="http://placehold.it/300x300"></div> <figcaption class="mockup-caption"><h3 class="paint-area paint-area--text" contenteditable>Class of 2023</h3> </figcaption> </figure></div> </section>',
  "simpleText": '<section class="paint-area mockup-section mockup-section--dark"><button class="removeMe"><span>×</span></button><div class=mockup-content><h3 class="paint-area paint-area--text" contenteditable>There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.</h3></div></section>'
}

$(".addDialog button").click(function() {
  var adder = $(".mockup-browser");
  var htmlin = adder.html().split('<hr class="break">');
  adder.html(htmlin[0] + comps[$(this).attr("data-comp")] + '<hr class="break">' + htmlin[1]);
  allChange();
})

$(".download").click(function() {
  downloadIt()
});

function receivedText() {
  preview.attr("src", fr.result);
  $(".inputfile").each(function() {
    $(this).wrap('<form>').closest('form').get(0).reset();
    $(this).unwrap();
  });
  setTimeout(function() {
    $("img").each(function() {
      if ($(this).width() >= $(this).height()) {
        console.log("image is wide because it's width is " + $(this).width() + " and it's height is " + $(this).height())
        $(this).addClass("wide");
        $(this).removeClass("tall");
      } else {
        console.log("image is tall because it's width is " + $(this).width() + " and it's height is " + $(this).height())
        $(this).addClass("tall");
        $(this).removeClass("wide");
      }
    })
  }, 0)
}

function allChange() {
  $(".add").click(function() {
    $(".overlay, .addDialog").fadeIn("fast");
  })

  $("img").click(function() {
    $(".overlay, .imgDialog").fadeIn("fast");
    preview = $(this);
    $("#file-1").change(function() {
      var input = $(this).get(0);
      if (!input) {
        alert("Um, couldn't find the fileinput element.");
      } else if (!input.files) {
        alert("This browser doesn't seem to support the `files` property of file inputs.");
      } else if (!input.files[0]) {
        alert("Please select a file before clicking 'Load'");
      } else {
        file = input.files[0];
        fr = new FileReader();
        fr.onload = receivedText;
        //fr.readAsText(file);
        fr.readAsDataURL(file);
      }
    });
    allChange();
  });
  $("a, button").keyup(function() {
    if ($(this).text().includes("@")) {
      $(this).attr("href", "mailto:" + $(this).text())
    } else {
      $(this).attr("href", $(this).text())
    }
  })
  $(".removeMe").click(function() {
    $(this).parent().remove();
    allChange();
  })
}
allChange()

var Promise = window.Promise;

if (!Promise) {
  Promise = JSZip.external.Promise;
}

function urlToPromise(url) {
  return new Promise(function(resolve, reject) {
    JSZipUtils.getBinaryContent(url, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}



function download(data, filename, type) {
  var file = new Blob([data], {
    type: type
  });
  if (window.navigator.msSaveOrOpenBlob) // IE10+
    alert("Sorry, your browser is not supported. Try using Google Chrome or Mozilla Firefox instead to use Spartia Builder. We are sorry for the inconvinience.");
  else { // Others
    var url = URL.createObjectURL(file);
    var htmlhref = url;
  }
  return htmlhref;
}

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

function downloadIt() {

  var zip = new JSZip();
  $(".contact").attr('href', "mailto:" + $(".email").val());
  var newHTML = $(".mockup-browser").html().replaceAll(" contenteditable", "");
  newHTML = newHTML.split('<hr class="break">')[0] + "</div>";
  var title = $(".mainTitle").text();
  var addHTML = '<!DOCTYPE html><html><head><title>@@title@@</title><link rel="stylesheet" type="text/css" href="css/demo.css" /><link rel="stylesheet" type="text/css" href="css/normalize.css" /><script src="js/links.js"></script></head><body>@@content@@</body></html>'.replaceAll("@@title@@", title);

  var newHTML = addHTML.replaceAll("@@content@@", newHTML);
  var newHTML = newHTML.replaceAll('<button class="removeMe"><span>×</span></button>', "");
  zip.file("index.html", newHTML);
  var css = zip.folder("css");
  var js = zip.folder("js");
  css.file("demo.css", urlToPromise("https://raw.githubusercontent.com/omegabeluga/omegabeluga.github.io/master/Spartia/builder/downloads/css/demo.css"), {
    binary: true
  });
  css.file("normalize.css", urlToPromise("https://raw.githubusercontent.com/omegabeluga/omegabeluga.github.io/master/Spartia/builder/downloads/css/normalize.css"), {
    binary: true
  });
  css.file("links.js", urlToPromise("https://raw.githubusercontent.com/omegabeluga/omegabeluga.github.io/master/Spartia/builder/downloads/js/links.js"), {
    binary: true
  });
  zip.generateAsync({
      type: "blob"
    })
    .then(function(content) {
      // see FileSaver.js
      saveAs(content, title + ".zip");
    });
}
