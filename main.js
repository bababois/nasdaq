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

(function($){
"use strict";

    var VideoPlayerJS = function ($scope, $) {

        var nodeList = document.querySelectorAll('.vapfem_player.vapfem_video');

        for (var i = 0; i < nodeList.length; i++) {
            var item = nodeList[i];
            var plyrSettings = JSON.parse(item.getAttribute('data-settings'));
            var controls = plyrSettings.controls ? plyrSettings.controls : ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'];
            var settings = plyrSettings.settings ? plyrSettings.settings : ['captions', 'quality', 'speed', 'loop'];
            var seekTime = plyrSettings.seek_time ? parseInt(plyrSettings.seek_time) : 100;
            var volume = parseFloat(plyrSettings.volume);
            var muted = plyrSettings.muted == 'true' ? true : false;
            var clickToPlay = plyrSettings.clickToPlay == 'false' ? false : true;
            var hideControls = plyrSettings.hideControls == 'false' ? false : true;
            var resetOnEnd = plyrSettings.resetOnEnd == 'false' ? false : true;
            var keyboard_focused = plyrSettings.keyboard_focused == 'false' ? false : true;
            var keyboard_global = plyrSettings.keyboard_global == 'true' ? true : false;
            var tooltips_controls = plyrSettings.tooltips_controls == 'true' ? true : false;
            var tooltips_seek = plyrSettings.tooltips_seek == 'false' ? false : true;
            var invertTime = plyrSettings.invertTime == 'false' ? false : true;
            var fullscreen_enabled = plyrSettings.fullscreen_enabled == 'false' ? false : true;
            var speed_selected = plyrSettings.speed_selected ? parseFloat(plyrSettings.speed_selected) : 1;
            var quality_default = plyrSettings.quality_default ? parseInt(plyrSettings.quality_default) : 720;
            var ratio = plyrSettings.ratio;
            var debug_mode = plyrSettings.debug_mode == 'true' ? true : false;

            const player = new Plyr(item, {
                debug: debug_mode,
                controls: controls,
                settings: ['captions', 'quality', 'speed', 'loop'],
                seekTime: seekTime,
                volume: volume,
                muted: muted,
                clickToPlay: clickToPlay,
                hideControls: hideControls,
                resetOnEnd: resetOnEnd,
                keyboard: { focused: keyboard_focused, global: keyboard_global },
                invertTime: invertTime,
                tooltips: { controls: tooltips_controls, seek: tooltips_seek },
                fullscreen: { enabled: fullscreen_enabled, fallback: true, iosNative: false },
                speed: { selected: speed_selected, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2] },
                quality: { default: quality_default, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240] },
                ratio: ratio
            });
        }      
    }


    var AudioPlayerJS = function ($scope, $) {

        var nodeList = document.querySelectorAll('.vapfem_player.vapfem_audio');

        for (var i = 0; i < nodeList.length; i++) {
            var item = nodeList[i];
            var plyrSettings = JSON.parse(item.getAttribute('data-settings'));
            var controls = plyrSettings.controls ? plyrSettings.controls : ['play', 'progress', 'mute', 'volume', 'settings'];
            var muted = plyrSettings.muted == 'true' ? true : false;
            var seekTime = plyrSettings.seek_time ? parseInt(plyrSettings.seek_time) : 100;
            var tooltips_controls = plyrSettings.tooltips_controls == 'true' ? true : false;
            var tooltips_seek = plyrSettings.tooltips_seek == 'false' ? false : true;
            var invertTime = plyrSettings.invertTime == 'false' ? false : true;
            var speed_selected = plyrSettings.speed_selected ? parseFloat(plyrSettings.speed_selected) : 1;
            var debug_mode = plyrSettings.debug_mode == 'true' ? true : false;

            const player = new Plyr(item, {
                debug: debug_mode,
                controls: controls,
                muted: muted,
                seekTime: seekTime,
                invertTime: invertTime,
                tooltips: { controls: tooltips_controls, seek: tooltips_seek },
                speed: { selected: speed_selected, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2] },
            });
        }
    }

    // Run this code under Elementor.
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/vapfem_video_player.default', VideoPlayerJS);
        elementorFrontend.hooks.addAction( 'frontend/element_ready/vapfem_audio_player.default', AudioPlayerJS);
    });

})(jQuery);

}
/*
     FILE ARCHIVED ON 14:20:01 Oct 19, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:57:39 Nov 14, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.513
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.015
  esindex: 0.01
  cdx.remote: 6.016
  LoadShardBlock: 348.54 (3)
  PetaboxLoader3.datanode: 100.231 (5)
  PetaboxLoader3.resolve: 960.574 (2)
  load_resource: 735.943
  loaddict: 27.624
*/