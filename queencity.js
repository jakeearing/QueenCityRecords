// jQuery call to the accordion() method. //
$(document).ready(function () {
  $("#accordion").accordion({
    active: false,
    heightStyle: "content",
    collapsible: true,
  });
});

$(document).ready(function () {
  $('.image-link').magnificPopup({ type: 'image' });
});


$(document).ready(function () {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 500,
    outDuration: 200,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: true,
    timeoutCountdown: 0,
    onLoadEvent: true,
    browser: ['animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay: false,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: 'body',
    transition: function (url) { window.location.href = url; }
  });
});

$(document).ready(function () {
  $.ajax({
    type: "get",
    url: "josh.json",
    beforeSend: function () {
      $("#text").html("Loading...");
    },
    dataType: "json",
    success: function (data) {
      console.log(data);
      $("#titleOwner").html(data.owners[0].title);
      $("#name").html(data.owners[0].name);
      $("#text").html(data.owners[0].text);
    }
  });
  $.ajax({
    type: "get",
    url: "phil.json",
    beforeSend: function () {
      $("#text2").html("Loading...");
    },
    dataType: "json",
    success: function (data) {
      console.log(data);
      $("#name2").html(data.owners[0].name);
      $("#text2").html(data.owners[0].text);
    }
  });
});