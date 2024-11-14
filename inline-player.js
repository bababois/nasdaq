var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  //let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

document.addEventListener("DOMContentLoaded", function () {
  jQuery("body").delegate("#h5ap_shortcode_button", "click", function () {
    var tnc_file_uploader = wp
      .media({
        title: "Upload File",
        button: {
          text: "Insert",
        },
        library: { type: "audio" },
        multiple: false,
      })
      .on("select", function () {
        var attachment = tnc_file_uploader.state().get("selection").first().toJSON();
        wp.media.editor.insert('[h5ap_inline_player src="' + attachment?.url + '"]');
      })
      .open();
  });

  const inlinePlayers = document.querySelectorAll(".h5ap_inline_player");
  if (inlinePlayers) {
    Object.values(inlinePlayers).map((playerWrapper) => {
      const player = playerWrapper.querySelector("audio");
      const playBtn = playerWrapper.querySelector(".dashicons-controls-play");
      const pauseBtn = playerWrapper.querySelector(".dashicons-controls-pause");
      playBtn.onclick = function () {
        player.play();
      };
      pauseBtn.onclick = function () {
        player.pause();
      };

      player.addEventListener("play", function () {
        playBtn.style.display = "none";
        pauseBtn.style.display = "inline-block";
        // playerWrapper.classList.remove("paused");
        // playerWrapper.classList.add("playing");
      });
      player.addEventListener("pause", function () {
        // playerWrapper.classList.add("paused");
        // playerWrapper.classList.remove("playing");
        pauseBtn.style.display = "none";
        playBtn.style.display = "inline-block";
      });
    });
  }
});


}
/*
     FILE ARCHIVED ON 13:43:11 Oct 19, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:57:17 Nov 14, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.583
  exclusion.robots: 0.028
  exclusion.robots.policy: 0.017
  esindex: 0.01
  cdx.remote: 18.905
  LoadShardBlock: 230.141 (3)
  PetaboxLoader3.datanode: 139.016 (5)
  PetaboxLoader3.resolve: 463.464 (2)
  load_resource: 406.153
  loaddict: 83.337
*/