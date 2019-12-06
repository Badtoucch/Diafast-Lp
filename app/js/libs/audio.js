(function(h, o, g) {
  var p = (function() {
    for (
      var b = /audio(.min)?.js.*/,
        a = document.getElementsByTagName("script"),
        c = 0,
        d = a.length;
      c < d;
      c++
    ) {
      var e = a[c].getAttribute("src");
      if (b.test(e)) return e.replace(b, "");
    }
  })();
  g[h] = {
    instanceCount: 0,
    instances: {},
    flashSource:
      '      <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="$1" width="1" height="1" name="$1" style="position: absolute; left: -1px;">         <param name="movie" value="$2?playerInstance=' +
      h +
      '.instances[\'$1\']&datetime=$3">         <param name="allowscriptaccess" value="always">         <embed name="$1" src="$2?playerInstance=' +
      h +
      '.instances[\'$1\']&datetime=$3" width="1" height="1" allowscriptaccess="always">       </object>',
    settings: {
      autoplay: false,
      loop: false,
      preload: true,
      imageLocation: p,
      swfLocation: p + "audiojs.swf",
      useFlash: (function() {
        var b = document.createElement("audio");
        return !(
          b.canPlayType && b.canPlayType("audio/mpeg;").replace(/no/, "")
        );
      })(),
      hasFlash: (function() {
        if (
          navigator.plugins &&
          navigator.plugins.length &&
          navigator.plugins["Shockwave Flash"]
        )
          return true;
        else if (navigator.mimeTypes && navigator.mimeTypes.length) {
          var b = navigator.mimeTypes["application/x-shockwave-flash"];
          return b && b.enabledPlugin;
        } else
          try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            return true;
          } catch (a) {}
        return false;
      })(),
      createPlayer: {
        markup:
          '          <div class="play-pause">             <p class="play"></p>             <p class="pause"></p>             <p class="loading"></p>             <p class="error"></p>           </div>           <div class="scrubber">             <div class="progress"></div>             <div class="loaded"></div>           </div>           <div class="time">             <em class="played">00:00</em>/<strong class="duration">01:00</strong>           </div>           <div class="error-message"></div>',
        playPauseClass: "play-pause",
        scrubberClass: "scrubber",
        progressClass: "progress",
        loaderClass: "loaded",
        timeClass: "time",
        durationClass: "duration",
        playedClass: "played",
        errorMessageClass: "error-message",
        playingClass: "playing",
        loadingClass: "loading",
        errorClass: "error"
      },
      css:
        '        .audiojs audio { position: absolute; left: -1px; }         .audiojs { width: 460px; height: 36px; background: #404040; overflow: hidden; font-family: inherit; font-size: 12px;                      -webkit-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); -moz-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);           -o-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); }         .audiojs .play-pause { width: 30px; height: 30px; padding: 4px 6px; margin: 0px; overflow: hidden; border-right: 1px solid #000; }         .audiojs p { display: none; width: 25px; height: 40px; margin: 0px; cursor: pointer; }         .audiojs .play { display: block; }         .audiojs .scrubber { position: relative; width: 280px; background: #5a5a5a; height: 14px; margin: 10px; border-top: 1px solid #3f3f3f; border-left: 0px; border-bottom: 0px; overflow: hidden; }         .audiojs .progress { position: absolute; top: 0px; left: 0px; height: 14px; width: 0px; background: #ccc; z-index: 1;           background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #ccc), color-stop(0.5, #ddd), color-stop(0.51, #ccc), color-stop(1, #ccc));           background-image: -moz-linear-gradient(center top, #ccc 0%, #ddd 50%, #ccc 51%, #ccc 100%); }         .audiojs .loaded { position: absolute; top: 0px; left: 0px; height: 14px; width: 0px; background: #000;           background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #222), color-stop(0.5, #333), color-stop(0.51, #222), color-stop(1, #222));           background-image: -moz-linear-gradient(center top, #222 0%, #333 50%, #222 51%, #222 100%); }         .audiojs .time { height: 36px; line-height: 36px; margin: 0px 0px 0px 6px; padding: 0px 6px 0px 12px; border-left: 1px solid #000; color: #ddd; text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5); }         .audiojs .time em { padding: 0px 2px 0px 0px; color: #f9f9f9; font-style: normal; }         .audiojs .time strong { padding: 0px 0px 0px 2px; font-weight: normal; }         .audiojs .error-message { display: none; margin: 0px 10px; height: 36px; width: 400px; overflow: hidden; line-height: 36px; white-space: nowrap; color: #fff;           text-overflow: ellipsis; -o-text-overflow: ellipsis; -icab-text-overflow: ellipsis; -khtml-text-overflow: ellipsis; -moz-text-overflow: ellipsis; -webkit-text-overflow: ellipsis; }         .audiojs .error-message a { color: #eee; text-decoration: none; padding-bottom: 1px; border-bottom: 1px solid #999; white-space: wrap; }                 .audiojs .play { background: url("$1") -2px -1px no-repeat; }         .audiojs .loading { background: url("$1") -2px -31px no-repeat; }         .audiojs .error { background: url("$1") -2px -61px no-repeat; }         .audiojs .pause { background: url("$1") -2px -91px no-repeat; }                 .playing .play, .playing .loading, .playing .error { display: none; }         .playing .pause { display: block; }                 .loading .play, .loading .pause, .loading .error { display: none; }         .loading .loading { display: block; }                 .error .time, .error .play, .error .pause, .error .scrubber, .error .loading { display: none; }         .error .error { display: block; }         .error .play-pause p { cursor: auto; }         .error .error-message { display: block; }',
      trackEnded: function() {},
      flashError: function() {
        var b = this.settings.createPlayer,
          a = j(b.errorMessageClass, this.wrapper),
          c = 'Missing <a href="">flash player</a> plugin.';
        if (this.mp3)
          c += ' <a href="' + this.mp3 + '">Download audio file</a>.';
        g[h].helpers.removeClass(this.wrapper, b.loadingClass);
        g[h].helpers.addClass(this.wrapper, b.errorClass);
        a.innerHTML = c;
      },
      loadError: function() {
        var b = this.settings.createPlayer,
          a = j(b.errorMessageClass, this.wrapper);
        g[h].helpers.removeClass(this.wrapper, b.loadingClass);
        g[h].helpers.addClass(this.wrapper, b.errorClass);
        a.innerHTML = 'Error loading: "' + this.mp3 + '"';
      },
      init: function() {
        g[h].helpers.addClass(
          this.wrapper,
          this.settings.createPlayer.loadingClass
        );
      },
      loadStarted: function() {
        var b = this.settings.createPlayer,
          a = j(b.durationClass, this.wrapper),
          c = Math.floor(this.duration / 60),
					d = Math.floor(this.duration % 60);
        g[h].helpers.removeClass(this.wrapper, b.loadingClass);
        a.innerHTML = (c < 10 ? "0" : "") + c + ":" + (d < 10 ? "0" : "") + d;
			},
      loadProgress: function(b) {
        var a = this.settings.createPlayer,
          c = j(a.scrubberClass, this.wrapper);
        j(a.loaderClass, this.wrapper).style.width = c.offsetWidth * b + "px";
      },
      playPause: function() {
        this.playing ? this.settings.play() : this.settings.pause();
      },
      play: function() {
        g[h].helpers.addClass(
          this.wrapper,
          this.settings.createPlayer.playingClass
        );
      },
      pause: function() {
        g[h].helpers.removeClass(
          this.wrapper,
          this.settings.createPlayer.playingClass
        );
      },
      updatePlayhead: function(b) {
        var a = this.settings.createPlayer,
          c = j(a.scrubberClass, this.wrapper);
        j(a.progressClass, this.wrapper).style.width = c.offsetWidth * b + "px";
        a = j(a.playedClass, this.wrapper);
        c = this.duration * b;
        b = Math.floor(c / 60);
        c = Math.floor(c % 60);
        a.innerHTML = (b < 10 ? "0" : "") + b + ":" + (c < 10 ? "0" : "") + c;
      }
    },
    create: function(b, a) {
      a = a || {};
      return b.length ? this.createAll(a, b) : this.newInstance(b, a);
    },
    createAll: function(b, a) {
      var c = a || document.getElementsByTagName("audio"),
        d = [];
      b = b || {};
      for (var e = 0, i = c.length; e < i; e++)
        d.push(this.newInstance(c[e], b));
      return d;
    },
    newInstance: function(b, a) {
      var c = this.helpers.clone(this.settings),
        d = "audiojs" + this.instanceCount,
        e = "audiojs_wrapper" + this.instanceCount;
      this.instanceCount++;
      if (b.getAttribute("autoplay") != null) c.autoplay = true;
      if (b.getAttribute("loop") != null) c.loop = true;
      if (b.getAttribute("preload") == "none") c.preload = false;
      a && this.helpers.merge(c, a);
      if (c.createPlayer.markup) b = this.createPlayer(b, c.createPlayer, e);
      else b.parentNode.setAttribute("id", e);
      e = new g[o](b, c);
      c.css && this.helpers.injectCss(e, c.css);
      if (c.useFlash && c.hasFlash) {
        this.injectFlash(e, d);
        this.attachFlashEvents(e.wrapper, e);
      } else c.useFlash && !c.hasFlash && this.settings.flashError.apply(e);
      if (!c.useFlash || (c.useFlash && c.hasFlash))
        this.attachEvents(e.wrapper, e);
      return (this.instances[d] = e);
    },
    createPlayer: function(b, a, c) {
      var d = document.createElement("div"),
        e = b.cloneNode(true);
      d.setAttribute("class", "audiojs");
      d.setAttribute("className", "audiojs");
      d.setAttribute("id", c);
      if (e.outerHTML && !document.createElement("audio").canPlayType) {
        e = this.helpers.cloneHtml5Node(b);
        d.innerHTML = a.markup;
        d.appendChild(e);
        b.outerHTML = d.outerHTML;
        d = document.getElementById(c);
      } else {
        d.appendChild(e);
        d.innerHTML += a.markup;
        b.parentNode.replaceChild(d, b);
      }
      return d.getElementsByTagName("audio")[0];
    },
    attachEvents: function(b, a) {
      if (a.settings.createPlayer) {
        var c = a.settings.createPlayer,
          d = j(c.playPauseClass, b),
          e = j(c.scrubberClass, b);
        g[h].events.addListener(d, "click", function() {
          a.playPause.apply(a);
        });
        g[h].events.addListener(e, "click", function(i) {
          i = i.clientX;
          var f = this,
            k = 0;
          if (f.offsetParent) {
            do k += f.offsetLeft;
            while ((f = f.offsetParent));
          }
          a.skipTo((i - k) / e.offsetWidth);
        });
        if (!a.settings.useFlash) {
          g[h].events.trackLoadProgress(a);
          g[h].events.addListener(a.element, "timeupdate", function() {
            a.updatePlayhead.apply(a);
          });
          g[h].events.addListener(a.element, "ended", function() {
            a.trackEnded.apply(a);
          });
          g[h].events.addListener(a.source, "error", function() {
            clearInterval(a.readyTimer);
            clearInterval(a.loadTimer);
            a.settings.loadError.apply(a);
          });
        }
      }
    },
    attachFlashEvents: function(b, a) {
      a.swfReady = false;
      a.load = function(c) {
        a.mp3 = c;
        a.swfReady && a.element.load(c);
      };
      a.loadProgress = function(c, d) {
        a.loadedPercent = c;
        a.duration = d;
        a.settings.loadStarted.apply(a);
        a.settings.loadProgress.apply(a, [c]);
      };
      a.skipTo = function(c) {
        if (!(c > a.loadedPercent)) {
          a.updatePlayhead.call(a, [c]);
          a.element.skipTo(c);
        }
      };
      a.updatePlayhead = function(c) {
        a.settings.updatePlayhead.apply(a, [c]);
      };
      a.play = function() {
        if (!a.settings.preload) {
          a.settings.preload = true;
          a.element.init(a.mp3);
        }
        a.playing = true;
        a.element.pplay();
        a.settings.play.apply(a);
      };
      a.pause = function() {
        a.playing = false;
        a.element.ppause();
        a.settings.pause.apply(a);
      };
      a.setVolume = function(c) {
        a.element.setVolume(c);
      };
      a.loadStarted = function() {
        a.swfReady = true;
        a.settings.preload && a.element.init(a.mp3);
        a.settings.autoplay && a.play.apply(a);
      };
    },
    injectFlash: function(b, a) {
      var c = this.flashSource.replace(/\$1/g, a);
      c = c.replace(/\$2/g, b.settings.swfLocation);
      c = c.replace(/\$3/g, +new Date() + Math.random());
      var d = b.wrapper.innerHTML,
        e = document.createElement("div");
      e.innerHTML = c + d;
      b.wrapper.innerHTML = e.innerHTML;
      b.element = this.helpers.getSwf(a);
    },
    helpers: {
      merge: function(b, a) {
        for (attr in a)
          if (b.hasOwnProperty(attr) || a.hasOwnProperty(attr))
            b[attr] = a[attr];
      },
      clone: function(b) {
        if (b == null || typeof b !== "object") return b;
        var a = new b.constructor(),
          c;
        for (c in b) a[c] = arguments.callee(b[c]);
        return a;
      },
      addClass: function(b, a) {
        RegExp("(\\s|^)" + a + "(\\s|$)").test(b.className) ||
          (b.className += " " + a);
      },
      removeClass: function(b, a) {
        b.className = b.className.replace(
          RegExp("(\\s|^)" + a + "(\\s|$)"),
          " "
        );
      },
      injectCss: function(b, a) {
        for (
          var c = "",
            d = document.getElementsByTagName("style"),
            e = a.replace(/\$1/g, b.settings.imageLocation),
            i = 0,
            f = d.length;
          i < f;
          i++
        ) {
          var k = d[i].getAttribute("title");
          if (k && ~k.indexOf("audiojs")) {
            f = d[i];
            if (f.innerHTML === e) return;
            c = f.innerHTML;
            break;
          }
        }
        d = document.getElementsByTagName("head")[0];
        i = d.firstChild;
        f = document.createElement("style");
        if (d) {
          f.setAttribute("type", "text/css");
          f.setAttribute("title", "audiojs");
          if (f.styleSheet) f.styleSheet.cssText = c + e;
          else f.appendChild(document.createTextNode(c + e));
          i ? d.insertBefore(f, i) : d.appendChild(styleElement);
        }
      },
      cloneHtml5Node: function(b) {
        var a = document.createDocumentFragment(),
          c = a.createElement ? a : document;
        c.createElement("audio");
        c = c.createElement("div");
        a.appendChild(c);
        c.innerHTML = b.outerHTML;
        return c.firstChild;
      },
      getSwf: function(b) {
        b = document[b] || window[b];
        return b.length > 1 ? b[b.length - 1] : b;
      }
    },
    events: {
      memoryLeaking: false,
      listeners: [],
      addListener: function(b, a, c) {
        if (b.addEventListener) b.addEventListener(a, c, false);
        else if (b.attachEvent) {
          this.listeners.push(b);
          if (!this.memoryLeaking) {
            window.attachEvent("onunload", function() {
              if (this.listeners)
                for (var d = 0, e = this.listeners.length; d < e; d++)
                  g[h].events.purge(this.listeners[d]);
            });
            this.memoryLeaking = true;
          }
          b.attachEvent("on" + a, function() {
            c.call(b, window.event);
          });
        }
      },
      trackLoadProgress: function(b) {
        if (b.settings.preload) {
          var a, c;
          b = b;
          var d = /(ipod|iphone|ipad)/i.test(navigator.userAgent);
          a = setInterval(function() {
            if (b.element.readyState > -1) d || b.init.apply(b);
            if (b.element.readyState > 1) {
              b.settings.autoplay && b.play.apply(b);
              clearInterval(a);
              c = setInterval(function() {
                b.loadProgress.apply(b);
                b.loadedPercent >= 1 && clearInterval(c);
              });
            }
          }, 10);
          b.readyTimer = a;
          b.loadTimer = c;
        }
      },
      purge: function(b) {
        var a = b.attributes,
          c;
        if (a)
          for (c = 0; c < a.length; c += 1)
            if (typeof b[a[c].name] === "function") b[a[c].name] = null;
        if ((a = b.childNodes))
          for (c = 0; c < a.length; c += 1) purge(b.childNodes[c]);
      },
      ready: (function() {
        return function(b) {
          var a = window,
            c = false,
            d = true,
            e = a.document,
            i = e.documentElement,
            f = e.addEventListener ? "addEventListener" : "attachEvent",
            k = e.addEventListener ? "removeEventListener" : "detachEvent",
            n = e.addEventListener ? "" : "on",
            m = function(l) {
              if (
                !(l.type == "readystatechange" && e.readyState != "complete")
              ) {
                (l.type == "load" ? a : e)[k](n + l.type, m, false);
                if (!c && (c = true)) b.call(a, l.type || l);
              }
            },
            q = function() {
              try {
                i.doScroll("left");
              } catch (l) {
                setTimeout(q, 50);
                return;
              }
              m("poll");
            };
          if (e.readyState == "complete") b.call(a, "lazy");
          else {
            if (e.createEventObject && i.doScroll) {
              try {
                d = !a.frameElement;
              } catch (r) {}
              d && q();
            }
            e[f](n + "DOMContentLoaded", m, false);
            e[f](n + "readystatechange", m, false);
            a[f](n + "load", m, false);
          }
        };
      })()
    }
  };
  g[o] = function(b, a) {
    this.element = b;
    this.wrapper = b.parentNode;
    this.source = b.getElementsByTagName("source")[0] || b;
    this.mp3 = (function(c) {
      var d = c.getElementsByTagName("source")[0];
      return c.getAttribute("src") || (d ? d.getAttribute("src") : null);
    })(b);
    this.settings = a;
    this.loadStartedCalled = false;
    this.loadedPercent = 0;
    this.duration = 1;
    this.playing = false;
  };
  g[o].prototype = {
    updatePlayhead: function() {
      this.settings.updatePlayhead.apply(this, [
        this.element.currentTime / this.duration
      ]);
    },
    skipTo: function(b) {
      if (!(b > this.loadedPercent)) {
        this.element.currentTime = this.duration * b;
        this.updatePlayhead();
      }
    },
    load: function(b) {
      this.loadStartedCalled = false;
      this.source.setAttribute("src", b);
      this.element.load();
      this.mp3 = b;
      g[h].events.trackLoadProgress(this);
    },
    loadError: function() {
      this.settings.loadError.apply(this);
    },
    init: function() {
      this.settings.init.apply(this);
    },
    loadStarted: function() {
      if (!this.element.duration) return false;
      this.duration = this.element.duration;
      this.updatePlayhead();
      this.settings.loadStarted.apply(this);
    },
    loadProgress: function() {
      if (this.element.buffered != null && this.element.buffered.length) {
        if (!this.loadStartedCalled)
          this.loadStartedCalled = this.loadStarted();
        this.loadedPercent =
          this.element.buffered.end(this.element.buffered.length - 1) /
          this.duration;
        this.settings.loadProgress.apply(this, [this.loadedPercent]);
      }
    },
    playPause: function() {
      this.playing ? this.pause() : this.play();
    },
    play: function() {
      /(ipod|iphone|ipad)/i.test(navigator.userAgent) &&
        this.element.readyState == 0 &&
        this.init.apply(this);
      if (!this.settings.preload) {
        this.settings.preload = true;
        this.element.setAttribute("preload", "auto");
        g[h].events.trackLoadProgress(this);
      }
      this.playing = true;
      this.element.play();
      this.settings.play.apply(this);
    },
    pause: function() {
      this.playing = false;
      this.element.pause();
      this.settings.pause.apply(this);
    },
    setVolume: function(b) {
      this.element.volume = b;
    },
    trackEnded: function() {
      this.skipTo.apply(this, [0]);
      this.settings.loop || this.pause.apply(this);
      this.settings.trackEnded.apply(this);
    }
  };
  var j = function(b, a) {
    var c = [];
    a = a || document;
    if (a.getElementsByClassName) c = a.getElementsByClassName(b);
    else {
      var d,
        e,
        i = a.getElementsByTagName("*"),
        f = RegExp("(^|\\s)" + b + "(\\s|$)");
      d = 0;
      for (e = i.length; d < e; d++) f.test(i[d].className) && c.push(i[d]);
    }
    return c.length > 1 ? c : c[0];
  };
})("audiojs", "audiojsInstance", this);
audiojs.events.ready(function() {
  audiojs.createAll();
});
("use strict");

function youtubeShowVideo() {
  var i, c, y, v, n;
  v = document.getElementsByClassName("youtube");
  for (n = 0; n < v.length; n++) {
    y = v[n];
    i = document.createElement("img");
    i.setAttribute("src", "http://i.ytimg.com/vi/" + y.id + "/hqdefault.jpg");
    i.setAttribute("class", "thumb");
    c = document.createElement("div");
    c.setAttribute("class", "play");
    y.appendChild(i);
    y.appendChild(c);
    y.onclick = function() {
      var a = document.createElement("iframe");
      a.setAttribute(
        "src",
        "https://www.youtube.com/embed/" +
          this.id +
          "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1"
      );
      a.style.width = this.style.width;
      a.style.height = this.style.height;
      this.parentNode.replaceChild(a, this);
    };
  }
}
youtubeShowVideo();
