

function recallMusic() {
  $.ajax({
  url: "https://flynn.boolean.careers/exercises/api/array/music",
  method: "GET",
  success: function (data) {
    var success = data["success"];
    var dischi = data["response"];
    console.log(dischi);
    if (dischi.length == 10) {
      var template = $("#template").html();
      var compiled = Handlebars.compile(template);
      var target = $(".cds-container");
      for (var i = 0; i < dischi.length; i++) {
        var disco = dischi[i];
        var dischiHTML = compiled({
          "poster": disco["poster"],
          "title": disco["title"],
          "author": disco["author"],
          "year": disco["year"]
        })
        target.append(dischiHTML);
      }

    }
  },
  error: function () {
  }
});

}







function init() {
  recallMusic();
};

$(document).ready(init);
