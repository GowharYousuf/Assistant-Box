/*!
 * Bootstrap v4.5.3 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"), require("popper.js"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery", "popper.js"], e)
    : e(
        ((t =
          "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
          {}),
        t.jQuery,
        t.Popper
      );
})(this, function (t, e, n) {
  "use strict";
  function i(t) {
    return t && "object" == typeof t && "default" in t ? t : { default: t };
  }
  var o = i(e),
    a = i(n);
  function s(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function l(t, e, n) {
    return e && s(t.prototype, e), n && s(t, n), t;
  }
  function r() {
    return (r =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }).apply(this, arguments);
  }
  function u(t) {
    var e = this,
      n = !1;
    return (
      o.default(this).one(d.TRANSITION_END, function () {
        n = !0;
      }),
      setTimeout(function () {
        n || d.triggerTransitionEnd(e);
      }, t),
      this
    );
  }
  var d = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function (t) {
      do {
        t += ~~(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    getSelectorFromElement: function (t) {
      var e = t.getAttribute("data-target");
      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : "";
      }
      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (t) {
      if (!t) return 0;
      var e = o.default(t).css("transition-duration"),
        n = o.default(t).css("transition-delay"),
        i = parseFloat(e),
        a = parseFloat(n);
      return i || a
        ? ((e = e.split(",")[0]),
          (n = n.split(",")[0]),
          1e3 * (parseFloat(e) + parseFloat(n)))
        : 0;
    },
    reflow: function (t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function (t) {
      o.default(t).trigger("transitionend");
    },
    supportsTransitionEnd: function () {
      return Boolean("transitionend");
    },
    isElement: function (t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function (t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            a = e[i],
            s =
              a && d.isElement(a)
                ? "element"
                : null === (l = a) || "undefined" == typeof l
                ? "" + l
                : {}.toString
                    .call(l)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          if (!new RegExp(o).test(s))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                s +
                '" but expected type "' +
                o +
                '".'
            );
        }
      var l;
    },
    findShadowRoot: function (t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        var e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? d.findShadowRoot(t.parentNode)
        : null;
    },
    jQueryDetection: function () {
      if ("undefined" == typeof o.default)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = o.default.fn.jquery.split(" ")[0].split(".");
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        t[0] >= 4
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    },
  };
  d.jQueryDetection(),
    (o.default.fn.emulateTransitionEnd = u),
    (o.default.event.special[d.TRANSITION_END] = {
      bindType: "transitionend",
      delegateType: "transitionend",
      handle: function (t) {
        if (o.default(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      },
    });
  var f = "alert",
    c = o.default.fn[f],
    h = (function () {
      function t(t) {
        this._element = t;
      }
      var e = t.prototype;
      return (
        (e.close = function (t) {
          var e = this._element;
          t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e);
        }),
        (e.dispose = function () {
          o.default.removeData(this._element, "bs.alert"),
            (this._element = null);
        }),
        (e._getRootElement = function (t) {
          var e = d.getSelectorFromElement(t),
            n = !1;
          return (
            e && (n = document.querySelector(e)),
            n || (n = o.default(t).closest(".alert")[0]),
            n
          );
        }),
        (e._triggerCloseEvent = function (t) {
          var e = o.default.Event("close.bs.alert");
          return o.default(t).trigger(e), e;
        }),
        (e._removeElement = function (t) {
          var e = this;
          if (
            (o.default(t).removeClass("show"), o.default(t).hasClass("fade"))
          ) {
            var n = d.getTransitionDurationFromElement(t);
            o.default(t)
              .one(d.TRANSITION_END, function (n) {
                return e._destroyElement(t, n);
              })
              .emulateTransitionEnd(n);
          } else this._destroyElement(t);
        }),
        (e._destroyElement = function (t) {
          o.default(t).detach().trigger("closed.bs.alert").remove();
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = o.default(this),
              i = n.data("bs.alert");
            i || ((i = new t(this)), n.data("bs.alert", i)),
              "close" === e && i[e](this);
          });
        }),
        (t._handleDismiss = function (t) {
          return function (e) {
            e && e.preventDefault(), t.close(this);
          };
        }),
        l(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
        ]),
        t
      );
    })();
  o
    .default(document)
    .on(
      "click.bs.alert.data-api",
      '[data-dismiss="alert"]',
      h._handleDismiss(new h())
    ),
    (o.default.fn[f] = h._jQueryInterface),
    (o.default.fn[f].Constructor = h),
    (o.default.fn[f].noConflict = function () {
      return (o.default.fn[f] = c), h._jQueryInterface;
    });
  var g = o.default.fn.button,
    m = (function () {
      function t(t) {
        (this._element = t), (this.shouldAvoidTriggerChange = !1);
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          var t = !0,
            e = !0,
            n = o.default(this._element).closest('[data-toggle="buttons"]')[0];
          if (n) {
            var i = this._element.querySelector('input:not([type="hidden"])');
            if (i) {
              if ("radio" === i.type)
                if (i.checked && this._element.classList.contains("active"))
                  t = !1;
                else {
                  var a = n.querySelector(".active");
                  a && o.default(a).removeClass("active");
                }
              t &&
                (("checkbox" !== i.type && "radio" !== i.type) ||
                  (i.checked = !this._element.classList.contains("active")),
                this.shouldAvoidTriggerChange ||
                  o.default(i).trigger("change")),
                i.focus(),
                (e = !1);
            }
          }
          this._element.hasAttribute("disabled") ||
            this._element.classList.contains("disabled") ||
            (e &&
              this._element.setAttribute(
                "aria-pressed",
                !this._element.classList.contains("active")
              ),
            t && o.default(this._element).toggleClass("active"));
        }),
        (e.dispose = function () {
          o.default.removeData(this._element, "bs.button"),
            (this._element = null);
        }),
        (t._jQueryInterface = function (e, n) {
          return this.each(function () {
            var i = o.default(this),
              a = i.data("bs.button");
            a || ((a = new t(this)), i.data("bs.button", a)),
              (a.shouldAvoidTriggerChange = n),
              "toggle" === e && a[e]();
          });
        }),
        l(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
        ]),
        t
      );
    })();
  o
    .default(document)
    .on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
      var e = t.target,
        n = e;
      if (
        (o.default(e).hasClass("btn") || (e = o.default(e).closest(".btn")[0]),
        !e || e.hasAttribute("disabled") || e.classList.contains("disabled"))
      )
        t.preventDefault();
      else {
        var i = e.querySelector('input:not([type="hidden"])');
        if (
          i &&
          (i.hasAttribute("disabled") || i.classList.contains("disabled"))
        )
          return void t.preventDefault();
        ("INPUT" !== n.tagName && "LABEL" === e.tagName) ||
          m._jQueryInterface.call(
            o.default(e),
            "toggle",
            "INPUT" === n.tagName
          );
      }
    })
    .on(
      "focus.bs.button.data-api blur.bs.button.data-api",
      '[data-toggle^="button"]',
      function (t) {
        var e = o.default(t.target).closest(".btn")[0];
        o.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
      }
    ),
    o.default(window).on("load.bs.button.data-api", function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-toggle="buttons"] .btn')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = t[e],
          o = i.querySelector('input:not([type="hidden"])');
        o.checked || o.hasAttribute("checked")
          ? i.classList.add("active")
          : i.classList.remove("active");
      }
      for (
        var a = 0,
          s = (t = [].slice.call(
            document.querySelectorAll('[data-toggle="button"]')
          )).length;
        a < s;
        a++
      ) {
        var l = t[a];
        "true" === l.getAttribute("aria-pressed")
          ? l.classList.add("active")
          : l.classList.remove("active");
      }
    }),
    (o.default.fn.button = m._jQueryInterface),
    (o.default.fn.button.Constructor = m),
    (o.default.fn.button.noConflict = function () {
      return (o.default.fn.button = g), m._jQueryInterface;
    });
  var p = "carousel",
    _ = ".bs.carousel",
    v = o.default.fn[p],
    b = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    y = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    E = { TOUCH: "touch", PEN: "pen" },
    w = (function () {
      function t(t, e) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._element = t),
          (this._indicatorsElement = this._element.querySelector(
            ".carousel-indicators"
          )),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners();
      }
      var e = t.prototype;
      return (
        (e.next = function () {
          this._isSliding || this._slide("next");
        }),
        (e.nextWhenVisible = function () {
          var t = o.default(this._element);
          !document.hidden &&
            t.is(":visible") &&
            "hidden" !== t.css("visibility") &&
            this.next();
        }),
        (e.prev = function () {
          this._isSliding || this._slide("prev");
        }),
        (e.pause = function (t) {
          t || (this._isPaused = !0),
            this._element.querySelector(
              ".carousel-item-next, .carousel-item-prev"
            ) && (d.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (e.cycle = function (t) {
          t || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              ));
        }),
        (e.to = function (t) {
          var e = this;
          this._activeElement = this._element.querySelector(
            ".active.carousel-item"
          );
          var n = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              o.default(this._element).one("slid.bs.carousel", function () {
                return e.to(t);
              });
            else {
              if (n === t) return this.pause(), void this.cycle();
              var i = t > n ? "next" : "prev";
              this._slide(i, this._items[t]);
            }
        }),
        (e.dispose = function () {
          o.default(this._element).off(_),
            o.default.removeData(this._element, "bs.carousel"),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (e._getConfig = function (t) {
          return (t = r({}, b, t)), d.typeCheckConfig(p, t, y), t;
        }),
        (e._handleSwipe = function () {
          var t = Math.abs(this.touchDeltaX);
          if (!(t <= 40)) {
            var e = t / this.touchDeltaX;
            (this.touchDeltaX = 0), e > 0 && this.prev(), e < 0 && this.next();
          }
        }),
        (e._addEventListeners = function () {
          var t = this;
          this._config.keyboard &&
            o.default(this._element).on("keydown.bs.carousel", function (e) {
              return t._keydown(e);
            }),
            "hover" === this._config.pause &&
              o
                .default(this._element)
                .on("mouseenter.bs.carousel", function (e) {
                  return t.pause(e);
                })
                .on("mouseleave.bs.carousel", function (e) {
                  return t.cycle(e);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (e._addTouchEventListeners = function () {
          var t = this;
          if (this._touchSupported) {
            var e = function (e) {
                t._pointerEvent && E[e.originalEvent.pointerType.toUpperCase()]
                  ? (t.touchStartX = e.originalEvent.clientX)
                  : t._pointerEvent ||
                    (t.touchStartX = e.originalEvent.touches[0].clientX);
              },
              n = function (e) {
                t._pointerEvent &&
                  E[e.originalEvent.pointerType.toUpperCase()] &&
                  (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                  t._handleSwipe(),
                  "hover" === t._config.pause &&
                    (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    (t.touchTimeout = setTimeout(function (e) {
                      return t.cycle(e);
                    }, 500 + t._config.interval)));
              };
            o
              .default(this._element.querySelectorAll(".carousel-item img"))
              .on("dragstart.bs.carousel", function (t) {
                return t.preventDefault();
              }),
              this._pointerEvent
                ? (o
                    .default(this._element)
                    .on("pointerdown.bs.carousel", function (t) {
                      return e(t);
                    }),
                  o
                    .default(this._element)
                    .on("pointerup.bs.carousel", function (t) {
                      return n(t);
                    }),
                  this._element.classList.add("pointer-event"))
                : (o
                    .default(this._element)
                    .on("touchstart.bs.carousel", function (t) {
                      return e(t);
                    }),
                  o
                    .default(this._element)
                    .on("touchmove.bs.carousel", function (e) {
                      return (function (e) {
                        e.originalEvent.touches &&
                        e.originalEvent.touches.length > 1
                          ? (t.touchDeltaX = 0)
                          : (t.touchDeltaX =
                              e.originalEvent.touches[0].clientX -
                              t.touchStartX);
                      })(e);
                    }),
                  o
                    .default(this._element)
                    .on("touchend.bs.carousel", function (t) {
                      return n(t);
                    }));
          }
        }),
        (e._keydown = function (t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
            }
        }),
        (e._getItemIndex = function (t) {
          return (
            (this._items =
              t && t.parentNode
                ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item"))
                : []),
            this._items.indexOf(t)
          );
        }),
        (e._getItemByDirection = function (t, e) {
          var n = "next" === t,
            i = "prev" === t,
            o = this._getItemIndex(e),
            a = this._items.length - 1;
          if (((i && 0 === o) || (n && o === a)) && !this._config.wrap)
            return e;
          var s = (o + ("prev" === t ? -1 : 1)) % this._items.length;
          return -1 === s
            ? this._items[this._items.length - 1]
            : this._items[s];
        }),
        (e._triggerSlideEvent = function (t, e) {
          var n = this._getItemIndex(t),
            i = this._getItemIndex(
              this._element.querySelector(".active.carousel-item")
            ),
            a = o.default.Event("slide.bs.carousel", {
              relatedTarget: t,
              direction: e,
              from: i,
              to: n,
            });
          return o.default(this._element).trigger(a), a;
        }),
        (e._setActiveIndicatorElement = function (t) {
          if (this._indicatorsElement) {
            var e = [].slice.call(
              this._indicatorsElement.querySelectorAll(".active")
            );
            o.default(e).removeClass("active");
            var n = this._indicatorsElement.children[this._getItemIndex(t)];
            n && o.default(n).addClass("active");
          }
        }),
        (e._slide = function (t, e) {
          var n,
            i,
            a,
            s = this,
            l = this._element.querySelector(".active.carousel-item"),
            r = this._getItemIndex(l),
            u = e || (l && this._getItemByDirection(t, l)),
            f = this._getItemIndex(u),
            c = Boolean(this._interval);
          if (
            ("next" === t
              ? ((n = "carousel-item-left"),
                (i = "carousel-item-next"),
                (a = "left"))
              : ((n = "carousel-item-right"),
                (i = "carousel-item-prev"),
                (a = "right")),
            u && o.default(u).hasClass("active"))
          )
            this._isSliding = !1;
          else if (
            !this._triggerSlideEvent(u, a).isDefaultPrevented() &&
            l &&
            u
          ) {
            (this._isSliding = !0),
              c && this.pause(),
              this._setActiveIndicatorElement(u);
            var h = o.default.Event("slid.bs.carousel", {
              relatedTarget: u,
              direction: a,
              from: r,
              to: f,
            });
            if (o.default(this._element).hasClass("slide")) {
              o.default(u).addClass(i),
                d.reflow(u),
                o.default(l).addClass(n),
                o.default(u).addClass(n);
              var g = parseInt(u.getAttribute("data-interval"), 10);
              g
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  (this._config.interval = g))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval);
              var m = d.getTransitionDurationFromElement(l);
              o.default(l)
                .one(d.TRANSITION_END, function () {
                  o
                    .default(u)
                    .removeClass(n + " " + i)
                    .addClass("active"),
                    o.default(l).removeClass("active " + i + " " + n),
                    (s._isSliding = !1),
                    setTimeout(function () {
                      return o.default(s._element).trigger(h);
                    }, 0);
                })
                .emulateTransitionEnd(m);
            } else
              o.default(l).removeClass("active"),
                o.default(u).addClass("active"),
                (this._isSliding = !1),
                o.default(this._element).trigger(h);
            c && this.cycle();
          }
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = o.default(this).data("bs.carousel"),
              i = r({}, b, o.default(this).data());
            "object" == typeof e && (i = r({}, i, e));
            var a = "string" == typeof e ? e : i.slide;
            if (
              (n ||
                ((n = new t(this, i)), o.default(this).data("bs.carousel", n)),
              "number" == typeof e)
            )
              n.to(e);
            else if ("string" == typeof a) {
              if ("undefined" == typeof n[a])
                throw new TypeError('No method named "' + a + '"');
              n[a]();
            } else i.interval && i.ride && (n.pause(), n.cycle());
          });
        }),
        (t._dataApiClickHandler = function (e) {
          var n = d.getSelectorFromElement(this);
          if (n) {
            var i = o.default(n)[0];
            if (i && o.default(i).hasClass("carousel")) {
              var a = r({}, o.default(i).data(), o.default(this).data()),
                s = this.getAttribute("data-slide-to");
              s && (a.interval = !1),
                t._jQueryInterface.call(o.default(i), a),
                s && o.default(i).data("bs.carousel").to(s),
                e.preventDefault();
            }
          }
        }),
        l(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return b;
            },
          },
        ]),
        t
      );
    })();
  o
    .default(document)
    .on(
      "click.bs.carousel.data-api",
      "[data-slide], [data-slide-to]",
      w._dataApiClickHandler
    ),
    o.default(window).on("load.bs.carousel.data-api", function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-ride="carousel"]')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = o.default(t[e]);
        w._jQueryInterface.call(i, i.data());
      }
    }),
    (o.default.fn[p] = w._jQueryInterface),
    (o.default.fn[p].Constructor = w),
    (o.default.fn[p].noConflict = function () {
      return (o.default.fn[p] = v), w._jQueryInterface;
    });
  var T = "collapse",
    C = o.default.fn[T],
    S = { toggle: !0, parent: "" },
    N = { toggle: "boolean", parent: "(string|element)" },
    D = (function () {
      function t(t, e) {
        (this._isTransitioning = !1),
          (this._element = t),
          (this._config = this._getConfig(e)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                t.id +
                '"],[data-toggle="collapse"][data-target="#' +
                t.id +
                '"]'
            )
          ));
        for (
          var n = [].slice.call(
              document.querySelectorAll('[data-toggle="collapse"]')
            ),
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var a = n[i],
            s = d.getSelectorFromElement(a),
            l = [].slice
              .call(document.querySelectorAll(s))
              .filter(function (e) {
                return e === t;
              });
          null !== s &&
            l.length > 0 &&
            ((this._selector = s), this._triggerArray.push(a));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          o.default(this._element).hasClass("show") ? this.hide() : this.show();
        }),
        (e.show = function () {
          var e,
            n,
            i = this;
          if (
            !this._isTransitioning &&
            !o.default(this._element).hasClass("show") &&
            (this._parent &&
              0 ===
                (e = [].slice
                  .call(this._parent.querySelectorAll(".show, .collapsing"))
                  .filter(function (t) {
                    return "string" == typeof i._config.parent
                      ? t.getAttribute("data-parent") === i._config.parent
                      : t.classList.contains("collapse");
                  })).length &&
              (e = null),
            !(
              e &&
              (n = o.default(e).not(this._selector).data("bs.collapse")) &&
              n._isTransitioning
            ))
          ) {
            var a = o.default.Event("show.bs.collapse");
            if (
              (o.default(this._element).trigger(a), !a.isDefaultPrevented())
            ) {
              e &&
                (t._jQueryInterface.call(
                  o.default(e).not(this._selector),
                  "hide"
                ),
                n || o.default(e).data("bs.collapse", null));
              var s = this._getDimension();
              o
                .default(this._element)
                .removeClass("collapse")
                .addClass("collapsing"),
                (this._element.style[s] = 0),
                this._triggerArray.length &&
                  o
                    .default(this._triggerArray)
                    .removeClass("collapsed")
                    .attr("aria-expanded", !0),
                this.setTransitioning(!0);
              var l = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                r = d.getTransitionDurationFromElement(this._element);
              o
                .default(this._element)
                .one(d.TRANSITION_END, function () {
                  o
                    .default(i._element)
                    .removeClass("collapsing")
                    .addClass("collapse show"),
                    (i._element.style[s] = ""),
                    i.setTransitioning(!1),
                    o.default(i._element).trigger("shown.bs.collapse");
                })
                .emulateTransitionEnd(r),
                (this._element.style[s] = this._element[l] + "px");
            }
          }
        }),
        (e.hide = function () {
          var t = this;
          if (
            !this._isTransitioning &&
            o.default(this._element).hasClass("show")
          ) {
            var e = o.default.Event("hide.bs.collapse");
            if (
              (o.default(this._element).trigger(e), !e.isDefaultPrevented())
            ) {
              var n = this._getDimension();
              (this._element.style[n] =
                this._element.getBoundingClientRect()[n] + "px"),
                d.reflow(this._element),
                o
                  .default(this._element)
                  .addClass("collapsing")
                  .removeClass("collapse show");
              var i = this._triggerArray.length;
              if (i > 0)
                for (var a = 0; a < i; a++) {
                  var s = this._triggerArray[a],
                    l = d.getSelectorFromElement(s);
                  if (null !== l)
                    o
                      .default([].slice.call(document.querySelectorAll(l)))
                      .hasClass("show") ||
                      o
                        .default(s)
                        .addClass("collapsed")
                        .attr("aria-expanded", !1);
                }
              this.setTransitioning(!0);
              this._element.style[n] = "";
              var r = d.getTransitionDurationFromElement(this._element);
              o.default(this._element)
                .one(d.TRANSITION_END, function () {
                  t.setTransitioning(!1),
                    o
                      .default(t._element)
                      .removeClass("collapsing")
                      .addClass("collapse")
                      .trigger("hidden.bs.collapse");
                })
                .emulateTransitionEnd(r);
            }
          }
        }),
        (e.setTransitioning = function (t) {
          this._isTransitioning = t;
        }),
        (e.dispose = function () {
          o.default.removeData(this._element, "bs.collapse"),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (e._getConfig = function (t) {
          return (
            ((t = r({}, S, t)).toggle = Boolean(t.toggle)),
            d.typeCheckConfig(T, t, N),
            t
          );
        }),
        (e._getDimension = function () {
          return o.default(this._element).hasClass("width")
            ? "width"
            : "height";
        }),
        (e._getParent = function () {
          var e,
            n = this;
          d.isElement(this._config.parent)
            ? ((e = this._config.parent),
              "undefined" != typeof this._config.parent.jquery &&
                (e = this._config.parent[0]))
            : (e = document.querySelector(this._config.parent));
          var i =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            a = [].slice.call(e.querySelectorAll(i));
          return (
            o.default(a).each(function (e, i) {
              n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]);
            }),
            e
          );
        }),
        (e._addAriaAndCollapsedClass = function (t, e) {
          var n = o.default(t).hasClass("show");
          e.length &&
            o.default(e).toggleClass("collapsed", !n).attr("aria-expanded", n);
        }),
        (t._getTargetFromElement = function (t) {
          var e = d.getSelectorFromElement(t);
          return e ? document.querySelector(e) : null;
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = o.default(this),
              i = n.data("bs.collapse"),
              a = r({}, S, n.data(), "object" == typeof e && e ? e : {});
            if (
              (!i &&
                a.toggle &&
                "string" == typeof e &&
                /show|hide/.test(e) &&
                (a.toggle = !1),
              i || ((i = new t(this, a)), n.data("bs.collapse", i)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof i[e])
                throw new TypeError('No method named "' + e + '"');
              i[e]();
            }
          });
        }),
        l(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return S;
            },
          },
        ]),
        t
      );
    })();
  o
    .default(document)
    .on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();
      var e = o.default(this),
        n = d.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(n));
      o.default(i).each(function () {
        var t = o.default(this),
          n = t.data("bs.collapse") ? "toggle" : e.data();
        D._jQueryInterface.call(t, n);
      });
    }),
    (o.default.fn[T] = D._jQueryInterface),
    (o.default.fn[T].Constructor = D),
    (o.default.fn[T].noConflict = function () {
      return (o.default.fn[T] = C), D._jQueryInterface;
    });
  var k = "dropdown",
    A = o.default.fn[k],
    I = new RegExp("38|40|27"),
    j = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
    },
    O = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)",
    },
    x = (function () {
      function t(t, e) {
        (this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          if (
            !this._element.disabled &&
            !o.default(this._element).hasClass("disabled")
          ) {
            var e = o.default(this._menu).hasClass("show");
            t._clearMenus(), e || this.show(!0);
          }
        }),
        (e.show = function (e) {
          if (
            (void 0 === e && (e = !1),
            !(
              this._element.disabled ||
              o.default(this._element).hasClass("disabled") ||
              o.default(this._menu).hasClass("show")
            ))
          ) {
            var n = { relatedTarget: this._element },
              i = o.default.Event("show.bs.dropdown", n),
              s = t._getParentFromElement(this._element);
            if ((o.default(s).trigger(i), !i.isDefaultPrevented())) {
              if (!this._inNavbar && e) {
                if ("undefined" == typeof a.default)
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                  );
                var l = this._element;
                "parent" === this._config.reference
                  ? (l = s)
                  : d.isElement(this._config.reference) &&
                    ((l = this._config.reference),
                    "undefined" != typeof this._config.reference.jquery &&
                      (l = this._config.reference[0])),
                  "scrollParent" !== this._config.boundary &&
                    o.default(s).addClass("position-static"),
                  (this._popper = new a.default(
                    l,
                    this._menu,
                    this._getPopperConfig()
                  ));
              }
              "ontouchstart" in document.documentElement &&
                0 === o.default(s).closest(".navbar-nav").length &&
                o
                  .default(document.body)
                  .children()
                  .on("mouseover", null, o.default.noop),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                o.default(this._menu).toggleClass("show"),
                o
                  .default(s)
                  .toggleClass("show")
                  .trigger(o.default.Event("shown.bs.dropdown", n));
            }
          }
        }),
        (e.hide = function () {
          if (
            !this._element.disabled &&
            !o.default(this._element).hasClass("disabled") &&
            o.default(this._menu).hasClass("show")
          ) {
            var e = { relatedTarget: this._element },
              n = o.default.Event("hide.bs.dropdown", e),
              i = t._getParentFromElement(this._element);
            o.default(i).trigger(n),
              n.isDefaultPrevented() ||
                (this._popper && this._popper.destroy(),
                o.default(this._menu).toggleClass("show"),
                o
                  .default(i)
                  .toggleClass("show")
                  .trigger(o.default.Event("hidden.bs.dropdown", e)));
          }
        }),
        (e.dispose = function () {
          o.default.removeData(this._element, "bs.dropdown"),
            o.default(this._element).off(".bs.dropdown"),
            (this._element = null),
            (this._menu = null),
            null !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (e.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (e._addEventListeners = function () {
          var t = this;
          o.default(this._element).on("click.bs.dropdown", function (e) {
            e.preventDefault(), e.stopPropagation(), t.toggle();
          });
        }),
        (e._getConfig = function (t) {
          return (
            (t = r(
              {},
              this.constructor.Default,
              o.default(this._element).data(),
              t
            )),
            d.typeCheckConfig(k, t, this.constructor.DefaultType),
            t
          );
        }),
        (e._getMenuElement = function () {
          if (!this._menu) {
            var e = t._getParentFromElement(this._element);
            e && (this._menu = e.querySelector(".dropdown-menu"));
          }
          return this._menu;
        }),
        (e._getPlacement = function () {
          var t = o.default(this._element.parentNode),
            e = "bottom-start";
          return (
            t.hasClass("dropup")
              ? (e = o.default(this._menu).hasClass("dropdown-menu-right")
                  ? "top-end"
                  : "top-start")
              : t.hasClass("dropright")
              ? (e = "right-start")
              : t.hasClass("dropleft")
              ? (e = "left-start")
              : o.default(this._menu).hasClass("dropdown-menu-right") &&
                (e = "bottom-end"),
            e
          );
        }),
        (e._detectNavbar = function () {
          return o.default(this._element).closest(".navbar").length > 0;
        }),
        (e._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this._config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = r(
                      {},
                      e.offsets,
                      t._config.offset(e.offsets, t._element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this._config.offset),
            e
          );
        }),
        (e._getPopperConfig = function () {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary },
            },
          };
          return (
            "static" === this._config.display &&
              (t.modifiers.applyStyle = { enabled: !1 }),
            r({}, t, this._config.popperConfig)
          );
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = o.default(this).data("bs.dropdown");
            if (
              (n ||
                ((n = new t(this, "object" == typeof e ? e : null)),
                o.default(this).data("bs.dropdown", n)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof n[e])
                throw new TypeError('No method named "' + e + '"');
              n[e]();
            }
          });
        }),
        (t._clearMenus = function (e) {
          if (!e || (3 !== e.which && ("keyup" !== e.type || 9 === e.which)))
            for (
              var n = [].slice.call(
                  document.querySelectorAll('[data-toggle="dropdown"]')
                ),
                i = 0,
                a = n.length;
              i < a;
              i++
            ) {
              var s = t._getParentFromElement(n[i]),
                l = o.default(n[i]).data("bs.dropdown"),
                r = { relatedTarget: n[i] };
              if ((e && "click" === e.type && (r.clickEvent = e), l)) {
                var u = l._menu;
                if (
                  o.default(s).hasClass("show") &&
                  !(
                    e &&
                    (("click" === e.type &&
                      /input|textarea/i.test(e.target.tagName)) ||
                      ("keyup" === e.type && 9 === e.which)) &&
                    o.default.contains(s, e.target)
                  )
                ) {
                  var d = o.default.Event("hide.bs.dropdown", r);
                  o.default(s).trigger(d),
                    d.isDefaultPrevented() ||
                      ("ontouchstart" in document.documentElement &&
                        o
                          .default(document.body)
                          .children()
                          .off("mouseover", null, o.default.noop),
                      n[i].setAttribute("aria-expanded", "false"),
                      l._popper && l._popper.destroy(),
                      o.default(u).removeClass("show"),
                      o
                        .default(s)
                        .removeClass("show")
                        .trigger(o.default.Event("hidden.bs.dropdown", r)));
                }
              }
            }
        }),
        (t._getParentFromElement = function (t) {
          var e,
            n = d.getSelectorFromElement(t);
          return n && (e = document.querySelector(n)), e || t.parentNode;
        }),
        (t._dataApiKeydownHandler = function (e) {
          if (
            !(/input|textarea/i.test(e.target.tagName)
              ? 32 === e.which ||
                (27 !== e.which &&
                  ((40 !== e.which && 38 !== e.which) ||
                    o.default(e.target).closest(".dropdown-menu").length))
              : !I.test(e.which)) &&
            !this.disabled &&
            !o.default(this).hasClass("disabled")
          ) {
            var n = t._getParentFromElement(this),
              i = o.default(n).hasClass("show");
            if (i || 27 !== e.which) {
              if (
                (e.preventDefault(),
                e.stopPropagation(),
                !i || 27 === e.which || 32 === e.which)
              )
                return (
                  27 === e.which &&
                    o
                      .default(n.querySelector('[data-toggle="dropdown"]'))
                      .trigger("focus"),
                  void o.default(this).trigger("click")
                );
              var a = [].slice
                .call(
                  n.querySelectorAll(
                    ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                  )
                )
                .filter(function (t) {
                  return o.default(t).is(":visible");
                });
              if (0 !== a.length) {
                var s = a.indexOf(e.target);
                38 === e.which && s > 0 && s--,
                  40 === e.which && s < a.length - 1 && s++,
                  s < 0 && (s = 0),
                  a[s].focus();
              }
            }
          }
        }),
        l(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return j;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return O;
            },
          },
        ]),
        t
      );
    })();
  o
    .default(document)
    .on(
      "keydown.bs.dropdown.data-api",
      '[data-toggle="dropdown"]',
      x._dataApiKeydownHandler
    )
    .on(
      "keydown.bs.dropdown.data-api",
      ".dropdown-menu",
      x._dataApiKeydownHandler
    )
    .on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", x._clearMenus)
    .on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (t) {
      t.preventDefault(),
        t.stopPropagation(),
        x._jQueryInterface.call(o.default(this), "toggle");
    })
    .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
      t.stopPropagation();
    }),
    (o.default.fn[k] = x._jQueryInterface),
    (o.default.fn[k].Constructor = x),
    (o.default.fn[k].noConflict = function () {
      return (o.default.fn[k] = A), x._jQueryInterface;
    });
  var P = o.default.fn.modal,
    R = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    L = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean",
    },
    q = (function () {
      function t(t, e) {
        (this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = t.querySelector(".modal-dialog")),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var e = t.prototype;
      return (
        (e.toggle = function (t) {
          return this._isShown ? this.hide() : this.show(t);
        }),
        (e.show = function (t) {
          var e = this;
          if (!this._isShown && !this._isTransitioning) {
            o.default(this._element).hasClass("fade") &&
              (this._isTransitioning = !0);
            var n = o.default.Event("show.bs.modal", { relatedTarget: t });
            o.default(this._element).trigger(n),
              this._isShown ||
                n.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                o
                  .default(this._element)
                  .on(
                    "click.dismiss.bs.modal",
                    '[data-dismiss="modal"]',
                    function (t) {
                      return e.hide(t);
                    }
                  ),
                o
                  .default(this._dialog)
                  .on("mousedown.dismiss.bs.modal", function () {
                    o.default(e._element).one(
                      "mouseup.dismiss.bs.modal",
                      function (t) {
                        o.default(t.target).is(e._element) &&
                          (e._ignoreBackdropClick = !0);
                      }
                    );
                  }),
                this._showBackdrop(function () {
                  return e._showElement(t);
                }));
          }
        }),
        (e.hide = function (t) {
          var e = this;
          if (
            (t && t.preventDefault(), this._isShown && !this._isTransitioning)
          ) {
            var n = o.default.Event("hide.bs.modal");
            if (
              (o.default(this._element).trigger(n),
              this._isShown && !n.isDefaultPrevented())
            ) {
              this._isShown = !1;
              var i = o.default(this._element).hasClass("fade");
              if (
                (i && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                o.default(document).off("focusin.bs.modal"),
                o.default(this._element).removeClass("show"),
                o.default(this._element).off("click.dismiss.bs.modal"),
                o.default(this._dialog).off("mousedown.dismiss.bs.modal"),
                i)
              ) {
                var a = d.getTransitionDurationFromElement(this._element);
                o.default(this._element)
                  .one(d.TRANSITION_END, function (t) {
                    return e._hideModal(t);
                  })
                  .emulateTransitionEnd(a);
              } else this._hideModal();
            }
          }
        }),
        (e.dispose = function () {
          [window, this._element, this._dialog].forEach(function (t) {
            return o.default(t).off(".bs.modal");
          }),
            o.default(document).off("focusin.bs.modal"),
            o.default.removeData(this._element, "bs.modal"),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (e.handleUpdate = function () {
          this._adjustDialog();
        }),
        (e._getConfig = function (t) {
          return (t = r({}, R, t)), d.typeCheckConfig("modal", t, L), t;
        }),
        (e._triggerBackdropTransition = function () {
          var t = this;
          if ("static" === this._config.backdrop) {
            var e = o.default.Event("hidePrevented.bs.modal");
            if ((o.default(this._element).trigger(e), e.isDefaultPrevented()))
              return;
            var n =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            n || (this._element.style.overflowY = "hidden"),
              this._element.classList.add("modal-static");
            var i = d.getTransitionDurationFromElement(this._dialog);
            o.default(this._element).off(d.TRANSITION_END),
              o
                .default(this._element)
                .one(d.TRANSITION_END, function () {
                  t._element.classList.remove("modal-static"),
                    n ||
                      o
                        .default(t._element)
                        .one(d.TRANSITION_END, function () {
                          t._element.style.overflowY = "";
                        })
                        .emulateTransitionEnd(t._element, i);
                })
                .emulateTransitionEnd(i),
              this._element.focus();
          } else this.hide();
        }),
        (e._showElement = function (t) {
          var e = this,
            n = o.default(this._element).hasClass("fade"),
            i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            o.default(this._dialog).hasClass("modal-dialog-scrollable") && i
              ? (i.scrollTop = 0)
              : (this._element.scrollTop = 0),
            n && d.reflow(this._element),
            o.default(this._element).addClass("show"),
            this._config.focus && this._enforceFocus();
          var a = o.default.Event("shown.bs.modal", { relatedTarget: t }),
            s = function () {
              e._config.focus && e._element.focus(),
                (e._isTransitioning = !1),
                o.default(e._element).trigger(a);
            };
          if (n) {
            var l = d.getTransitionDurationFromElement(this._dialog);
            o.default(this._dialog)
              .one(d.TRANSITION_END, s)
              .emulateTransitionEnd(l);
          } else s();
        }),
        (e._enforceFocus = function () {
          var t = this;
          o.default(document)
            .off("focusin.bs.modal")
            .on("focusin.bs.modal", function (e) {
              document !== e.target &&
                t._element !== e.target &&
                0 === o.default(t._element).has(e.target).length &&
                t._element.focus();
            });
        }),
        (e._setEscapeEvent = function () {
          var t = this;
          this._isShown
            ? o
                .default(this._element)
                .on("keydown.dismiss.bs.modal", function (e) {
                  t._config.keyboard && 27 === e.which
                    ? (e.preventDefault(), t.hide())
                    : t._config.keyboard ||
                      27 !== e.which ||
                      t._triggerBackdropTransition();
                })
            : this._isShown ||
              o.default(this._element).off("keydown.dismiss.bs.modal");
        }),
        (e._setResizeEvent = function () {
          var t = this;
          this._isShown
            ? o.default(window).on("resize.bs.modal", function (e) {
                return t.handleUpdate(e);
              })
            : o.default(window).off("resize.bs.modal");
        }),
        (e._hideModal = function () {
          var t = this;
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              o.default(document.body).removeClass("modal-open"),
                t._resetAdjustments(),
                t._resetScrollbar(),
                o.default(t._element).trigger("hidden.bs.modal");
            });
        }),
        (e._removeBackdrop = function () {
          this._backdrop &&
            (o.default(this._backdrop).remove(), (this._backdrop = null));
        }),
        (e._showBackdrop = function (t) {
          var e = this,
            n = o.default(this._element).hasClass("fade") ? "fade" : "";
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement("div")),
              (this._backdrop.className = "modal-backdrop"),
              n && this._backdrop.classList.add(n),
              o.default(this._backdrop).appendTo(document.body),
              o
                .default(this._element)
                .on("click.dismiss.bs.modal", function (t) {
                  e._ignoreBackdropClick
                    ? (e._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      e._triggerBackdropTransition();
                }),
              n && d.reflow(this._backdrop),
              o.default(this._backdrop).addClass("show"),
              !t)
            )
              return;
            if (!n) return void t();
            var i = d.getTransitionDurationFromElement(this._backdrop);
            o.default(this._backdrop)
              .one(d.TRANSITION_END, t)
              .emulateTransitionEnd(i);
          } else if (!this._isShown && this._backdrop) {
            o.default(this._backdrop).removeClass("show");
            var a = function () {
              e._removeBackdrop(), t && t();
            };
            if (o.default(this._element).hasClass("fade")) {
              var s = d.getTransitionDurationFromElement(this._backdrop);
              o.default(this._backdrop)
                .one(d.TRANSITION_END, a)
                .emulateTransitionEnd(s);
            } else a();
          } else t && t();
        }),
        (e._adjustDialog = function () {
          var t =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing &&
              !t &&
              (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }),
        (e._resetAdjustments = function () {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }),
        (e._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing =
            Math.round(t.left + t.right) < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (e._setScrollbar = function () {
          var t = this;
          if (this._isBodyOverflowing) {
            var e = [].slice.call(
                document.querySelectorAll(
                  ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                )
              ),
              n = [].slice.call(document.querySelectorAll(".sticky-top"));
            o.default(e).each(function (e, n) {
              var i = n.style.paddingRight,
                a = o.default(n).css("padding-right");
              o.default(n)
                .data("padding-right", i)
                .css("padding-right", parseFloat(a) + t._scrollbarWidth + "px");
            }),
              o.default(n).each(function (e, n) {
                var i = n.style.marginRight,
                  a = o.default(n).css("margin-right");
                o.default(n)
                  .data("margin-right", i)
                  .css(
                    "margin-right",
                    parseFloat(a) - t._scrollbarWidth + "px"
                  );
              });
            var i = document.body.style.paddingRight,
              a = o.default(document.body).css("padding-right");
            o.default(document.body)
              .data("padding-right", i)
              .css(
                "padding-right",
                parseFloat(a) + this._scrollbarWidth + "px"
              );
          }
          o.default(document.body).addClass("modal-open");
        }),
        (e._resetScrollbar = function () {
          var t = [].slice.call(
            document.querySelectorAll(
              ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
            )
          );
          o.default(t).each(function (t, e) {
            var n = o.default(e).data("padding-right");
            o.default(e).removeData("padding-right"),
              (e.style.paddingRight = n || "");
          });
          var e = [].slice.call(document.querySelectorAll(".sticky-top"));
          o.default(e).each(function (t, e) {
            var n = o.default(e).data("margin-right");
            "undefined" != typeof n &&
              o.default(e).css("margin-right", n).removeData("margin-right");
          });
          var n = o.default(document.body).data("padding-right");
          o.default(document.body).removeData("padding-right"),
            (document.body.style.paddingRight = n || "");
        }),
        (e._getScrollbarWidth = function () {
          var t = document.createElement("div");
          (t.className = "modal-scrollbar-measure"),
            document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (t._jQueryInterface = function (e, n) {
          return this.each(function () {
            var i = o.default(this).data("bs.modal"),
              a = r(
                {},
                R,
                o.default(this).data(),
                "object" == typeof e && e ? e : {}
              );
            if (
              (i || ((i = new t(this, a)), o.default(this).data("bs.modal", i)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof i[e])
                throw new TypeError('No method named "' + e + '"');
              i[e](n);
            } else a.show && i.show(n);
          });
        }),
        l(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return R;
            },
          },
        ]),
        t
      );
    })();
  o
    .default(document)
    .on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
      var e,
        n = this,
        i = d.getSelectorFromElement(this);
      i && (e = document.querySelector(i));
      var a = o.default(e).data("bs.modal")
        ? "toggle"
        : r({}, o.default(e).data(), o.default(this).data());
      ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
      var s = o.default(e).one("show.bs.modal", function (t) {
        t.isDefaultPrevented() ||
          s.one("hidden.bs.modal", function () {
            o.default(n).is(":visible") && n.focus();
          });
      });
      q._jQueryInterface.call(o.default(e), a, this);
    }),
    (o.default.fn.modal = q._jQueryInterface),
    (o.default.fn.modal.Constructor = q),
    (o.default.fn.modal.noConflict = function () {
      return (o.default.fn.modal = P), q._jQueryInterface;
    });
  var F = [
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ],
    Q = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    B = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
    H =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  function U(t, e, n) {
    if (0 === t.length) return t;
    if (n && "function" == typeof n) return n(t);
    for (
      var i = new window.DOMParser().parseFromString(t, "text/html"),
        o = Object.keys(e),
        a = [].slice.call(i.body.querySelectorAll("*")),
        s = function (t, n) {
          var i = a[t],
            s = i.nodeName.toLowerCase();
          if (-1 === o.indexOf(i.nodeName.toLowerCase()))
            return i.parentNode.removeChild(i), "continue";
          var l = [].slice.call(i.attributes),
            r = [].concat(e["*"] || [], e[s] || []);
          l.forEach(function (t) {
            (function (t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === F.indexOf(n) ||
                  Boolean(t.nodeValue.match(B) || t.nodeValue.match(H))
                );
              for (
                var i = e.filter(function (t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  a = i.length;
                o < a;
                o++
              )
                if (n.match(i[o])) return !0;
              return !1;
            })(t, r) || i.removeAttribute(t.nodeName);
          });
        },
        l = 0,
        r = a.length;
      l < r;
      l++
    )
      s(l);
    return i.body.innerHTML;
  }
  var M = "tooltip",
    W = o.default.fn[M],
    V = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    z = ["sanitize", "whiteList", "sanitizeFn"],
    K = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
      popperConfig: "(null|object)",
    },
    X = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left",
    },
    Y = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: Q,
      popperConfig: null,
    },
    $ = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    },
    J = (function () {
      function t(t, e) {
        if ("undefined" == typeof a.default)
          throw new TypeError(
            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners();
      }
      var e = t.prototype;
      return (
        (e.enable = function () {
          this._isEnabled = !0;
        }),
        (e.disable = function () {
          this._isEnabled = !1;
        }),
        (e.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (e.toggle = function (t) {
          if (this._isEnabled)
            if (t) {
              var e = this.constructor.DATA_KEY,
                n = o.default(t.currentTarget).data(e);
              n ||
                ((n = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                o.default(t.currentTarget).data(e, n)),
                (n._activeTrigger.click = !n._activeTrigger.click),
                n._isWithActiveTrigger()
                  ? n._enter(null, n)
                  : n._leave(null, n);
            } else {
              if (o.default(this.getTipElement()).hasClass("show"))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (e.dispose = function () {
          clearTimeout(this._timeout),
            o.default.removeData(this.element, this.constructor.DATA_KEY),
            o.default(this.element).off(this.constructor.EVENT_KEY),
            o
              .default(this.element)
              .closest(".modal")
              .off("hide.bs.modal", this._hideModalHandler),
            this.tip && o.default(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null),
            this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (e.show = function () {
          var t = this;
          if ("none" === o.default(this.element).css("display"))
            throw new Error("Please use show on visible elements");
          var e = o.default.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            o.default(this.element).trigger(e);
            var n = d.findShadowRoot(this.element),
              i = o.default.contains(
                null !== n ? n : this.element.ownerDocument.documentElement,
                this.element
              );
            if (e.isDefaultPrevented() || !i) return;
            var s = this.getTipElement(),
              l = d.getUID(this.constructor.NAME);
            s.setAttribute("id", l),
              this.element.setAttribute("aria-describedby", l),
              this.setContent(),
              this.config.animation && o.default(s).addClass("fade");
            var r =
                "function" == typeof this.config.placement
                  ? this.config.placement.call(this, s, this.element)
                  : this.config.placement,
              u = this._getAttachment(r);
            this.addAttachmentClass(u);
            var f = this._getContainer();
            o.default(s).data(this.constructor.DATA_KEY, this),
              o.default.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || o.default(s).appendTo(f),
              o.default(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new a.default(
                this.element,
                s,
                this._getPopperConfig(u)
              )),
              o.default(s).addClass("show"),
              "ontouchstart" in document.documentElement &&
                o
                  .default(document.body)
                  .children()
                  .on("mouseover", null, o.default.noop);
            var c = function () {
              t.config.animation && t._fixTransition();
              var e = t._hoverState;
              (t._hoverState = null),
                o.default(t.element).trigger(t.constructor.Event.SHOWN),
                "out" === e && t._leave(null, t);
            };
            if (o.default(this.tip).hasClass("fade")) {
              var h = d.getTransitionDurationFromElement(this.tip);
              o.default(this.tip)
                .one(d.TRANSITION_END, c)
                .emulateTransitionEnd(h);
            } else c();
          }
        }),
        (e.hide = function (t) {
          var e = this,
            n = this.getTipElement(),
            i = o.default.Event(this.constructor.Event.HIDE),
            a = function () {
              "show" !== e._hoverState &&
                n.parentNode &&
                n.parentNode.removeChild(n),
                e._cleanTipClass(),
                e.element.removeAttribute("aria-describedby"),
                o.default(e.element).trigger(e.constructor.Event.HIDDEN),
                null !== e._popper && e._popper.destroy(),
                t && t();
            };
          if ((o.default(this.element).trigger(i), !i.isDefaultPrevented())) {
            if (
              (o.default(n).removeClass("show"),
              "ontouchstart" in document.documentElement &&
                o
                  .default(document.body)
                  .children()
                  .off("mouseover", null, o.default.noop),
              (this._activeTrigger.click = !1),
              (this._activeTrigger.focus = !1),
              (this._activeTrigger.hover = !1),
              o.default(this.tip).hasClass("fade"))
            ) {
              var s = d.getTransitionDurationFromElement(n);
              o.default(n).one(d.TRANSITION_END, a).emulateTransitionEnd(s);
            } else a();
            this._hoverState = "";
          }
        }),
        (e.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (e.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (e.addAttachmentClass = function (t) {
          o.default(this.getTipElement()).addClass("bs-tooltip-" + t);
        }),
        (e.getTipElement = function () {
          return (
            (this.tip = this.tip || o.default(this.config.template)[0]),
            this.tip
          );
        }),
        (e.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(
            o.default(t.querySelectorAll(".tooltip-inner")),
            this.getTitle()
          ),
            o.default(t).removeClass("fade show");
        }),
        (e.setElementContent = function (t, e) {
          "object" != typeof e || (!e.nodeType && !e.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (e = U(e, this.config.whiteList, this.config.sanitizeFn)),
                t.html(e))
              : t.text(e)
            : this.config.html
            ? o.default(e).parent().is(t) || t.empty().append(e)
            : t.text(o.default(e).text());
        }),
        (e.getTitle = function () {
          var t = this.element.getAttribute("data-original-title");
          return (
            t ||
              (t =
                "function" == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title),
            t
          );
        }),
        (e._getPopperConfig = function (t) {
          var e = this;
          return r(
            {},
            {
              placement: t,
              modifiers: {
                offset: this._getOffset(),
                flip: { behavior: this.config.fallbackPlacement },
                arrow: { element: ".arrow" },
                preventOverflow: { boundariesElement: this.config.boundary },
              },
              onCreate: function (t) {
                t.originalPlacement !== t.placement &&
                  e._handlePopperPlacementChange(t);
              },
              onUpdate: function (t) {
                return e._handlePopperPlacementChange(t);
              },
            },
            this.config.popperConfig
          );
        }),
        (e._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this.config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = r(
                      {},
                      e.offsets,
                      t.config.offset(e.offsets, t.element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this.config.offset),
            e
          );
        }),
        (e._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : d.isElement(this.config.container)
            ? o.default(this.config.container)
            : o.default(document).find(this.config.container);
        }),
        (e._getAttachment = function (t) {
          return X[t.toUpperCase()];
        }),
        (e._setListeners = function () {
          var t = this;
          this.config.trigger.split(" ").forEach(function (e) {
            if ("click" === e)
              o.default(t.element).on(
                t.constructor.Event.CLICK,
                t.config.selector,
                function (e) {
                  return t.toggle(e);
                }
              );
            else if ("manual" !== e) {
              var n =
                  "hover" === e
                    ? t.constructor.Event.MOUSEENTER
                    : t.constructor.Event.FOCUSIN,
                i =
                  "hover" === e
                    ? t.constructor.Event.MOUSELEAVE
                    : t.constructor.Event.FOCUSOUT;
              o.default(t.element)
                .on(n, t.config.selector, function (e) {
                  return t._enter(e);
                })
                .on(i, t.config.selector, function (e) {
                  return t._leave(e);
                });
            }
          }),
            (this._hideModalHandler = function () {
              t.element && t.hide();
            }),
            o
              .default(this.element)
              .closest(".modal")
              .on("hide.bs.modal", this._hideModalHandler),
            this.config.selector
              ? (this.config = r({}, this.config, {
                  trigger: "manual",
                  selector: "",
                }))
              : this._fixTitle();
        }),
        (e._fixTitle = function () {
          var t = typeof this.element.getAttribute("data-original-title");
          (this.element.getAttribute("title") || "string" !== t) &&
            (this.element.setAttribute(
              "data-original-title",
              this.element.getAttribute("title") || ""
            ),
            this.element.setAttribute("title", ""));
        }),
        (e._enter = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || o.default(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            o.default(t.currentTarget).data(n, e)),
            t &&
              (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
            o.default(e.getTipElement()).hasClass("show") ||
            "show" === e._hoverState
              ? (e._hoverState = "show")
              : (clearTimeout(e._timeout),
                (e._hoverState = "show"),
                e.config.delay && e.config.delay.show
                  ? (e._timeout = setTimeout(function () {
                      "show" === e._hoverState && e.show();
                    }, e.config.delay.show))
                  : e.show());
        }),
        (e._leave = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || o.default(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            o.default(t.currentTarget).data(n, e)),
            t &&
              (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] =
                !1),
            e._isWithActiveTrigger() ||
              (clearTimeout(e._timeout),
              (e._hoverState = "out"),
              e.config.delay && e.config.delay.hide
                ? (e._timeout = setTimeout(function () {
                    "out" === e._hoverState && e.hide();
                  }, e.config.delay.hide))
                : e.hide());
        }),
        (e._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (e._getConfig = function (t) {
          var e = o.default(this.element).data();
          return (
            Object.keys(e).forEach(function (t) {
              -1 !== z.indexOf(t) && delete e[t];
            }),
            "number" ==
              typeof (t = r(
                {},
                this.constructor.Default,
                e,
                "object" == typeof t && t ? t : {}
              )).delay && (t.delay = { show: t.delay, hide: t.delay }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            d.typeCheckConfig(M, t, this.constructor.DefaultType),
            t.sanitize &&
              (t.template = U(t.template, t.whiteList, t.sanitizeFn)),
            t
          );
        }),
        (e._getDelegateConfig = function () {
          var t = {};
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e]);
          return t;
        }),
        (e._cleanTipClass = function () {
          var t = o.default(this.getTipElement()),
            e = t.attr("class").match(V);
          null !== e && e.length && t.removeClass(e.join(""));
        }),
        (e._handlePopperPlacementChange = function (t) {
          (this.tip = t.instance.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement));
        }),
        (e._fixTransition = function () {
          var t = this.getTipElement(),
            e = this.config.animation;
          null === t.getAttribute("x-placement") &&
            (o.default(t).removeClass("fade"),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = e));
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = o.default(this),
              i = n.data("bs.tooltip"),
              a = "object" == typeof e && e;
            if (
              (i || !/dispose|hide/.test(e)) &&
              (i || ((i = new t(this, a)), n.data("bs.tooltip", i)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof i[e])
                throw new TypeError('No method named "' + e + '"');
              i[e]();
            }
          });
        }),
        l(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return Y;
            },
          },
          {
            key: "NAME",
            get: function () {
              return M;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.tooltip";
            },
          },
          {
            key: "Event",
            get: function () {
              return $;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.tooltip";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return K;
            },
          },
        ]),
        t
      );
    })();
  (o.default.fn[M] = J._jQueryInterface),
    (o.default.fn[M].Constructor = J),
    (o.default.fn[M].noConflict = function () {
      return (o.default.fn[M] = W), J._jQueryInterface;
    });
  var G = "popover",
    Z = o.default.fn[G],
    tt = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    et = r({}, J.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    nt = r({}, J.DefaultType, { content: "(string|element|function)" }),
    it = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    },
    ot = (function (t) {
      var e, n;
      function i() {
        return t.apply(this, arguments) || this;
      }
      (n = t),
        ((e = i).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = n);
      var a = i.prototype;
      return (
        (a.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (a.addAttachmentClass = function (t) {
          o.default(this.getTipElement()).addClass("bs-popover-" + t);
        }),
        (a.getTipElement = function () {
          return (
            (this.tip = this.tip || o.default(this.config.template)[0]),
            this.tip
          );
        }),
        (a.setContent = function () {
          var t = o.default(this.getTipElement());
          this.setElementContent(t.find(".popover-header"), this.getTitle());
          var e = this._getContent();
          "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(".popover-body"), e),
            t.removeClass("fade show");
        }),
        (a._getContent = function () {
          return (
            this.element.getAttribute("data-content") || this.config.content
          );
        }),
        (a._cleanTipClass = function () {
          var t = o.default(this.getTipElement()),
            e = t.attr("class").match(tt);
          null !== e && e.length > 0 && t.removeClass(e.join(""));
        }),
        (i._jQueryInterface = function (t) {
          return this.each(function () {
            var e = o.default(this).data("bs.popover"),
              n = "object" == typeof t ? t : null;
            if (
              (e || !/dispose|hide/.test(t)) &&
              (e ||
                ((e = new i(this, n)), o.default(this).data("bs.popover", e)),
              "string" == typeof t)
            ) {
              if ("undefined" == typeof e[t])
                throw new TypeError('No method named "' + t + '"');
              e[t]();
            }
          });
        }),
        l(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return et;
            },
          },
          {
            key: "NAME",
            get: function () {
              return G;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.popover";
            },
          },
          {
            key: "Event",
            get: function () {
              return it;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.popover";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return nt;
            },
          },
        ]),
        i
      );
    })(J);
  (o.default.fn[G] = ot._jQueryInterface),
    (o.default.fn[G].Constructor = ot),
    (o.default.fn[G].noConflict = function () {
      return (o.default.fn[G] = Z), ot._jQueryInterface;
    });
  var at = "scrollspy",
    st = o.default.fn[at],
    lt = { offset: 10, method: "auto", target: "" },
    rt = { offset: "number", method: "string", target: "(string|element)" },
    ut = (function () {
      function t(t, e) {
        var n = this;
        (this._element = t),
          (this._scrollElement = "BODY" === t.tagName ? window : t),
          (this._config = this._getConfig(e)),
          (this._selector =
            this._config.target +
            " .nav-link," +
            this._config.target +
            " .list-group-item," +
            this._config.target +
            " .dropdown-item"),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          o
            .default(this._scrollElement)
            .on("scroll.bs.scrollspy", function (t) {
              return n._process(t);
            }),
          this.refresh(),
          this._process();
      }
      var e = t.prototype;
      return (
        (e.refresh = function () {
          var t = this,
            e =
              this._scrollElement === this._scrollElement.window
                ? "offset"
                : "position",
            n = "auto" === this._config.method ? e : this._config.method,
            i = "position" === n ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (t) {
                var e,
                  a = d.getSelectorFromElement(t);
                if ((a && (e = document.querySelector(a)), e)) {
                  var s = e.getBoundingClientRect();
                  if (s.width || s.height)
                    return [o.default(e)[n]().top + i, a];
                }
                return null;
              })
              .filter(function (t) {
                return t;
              })
              .sort(function (t, e) {
                return t[0] - e[0];
              })
              .forEach(function (e) {
                t._offsets.push(e[0]), t._targets.push(e[1]);
              });
        }),
        (e.dispose = function () {
          o.default.removeData(this._element, "bs.scrollspy"),
            o.default(this._scrollElement).off(".bs.scrollspy"),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (e._getConfig = function (t) {
          if (
            "string" !=
              typeof (t = r({}, lt, "object" == typeof t && t ? t : {}))
                .target &&
            d.isElement(t.target)
          ) {
            var e = o.default(t.target).attr("id");
            e || ((e = d.getUID(at)), o.default(t.target).attr("id", e)),
              (t.target = "#" + e);
          }
          return d.typeCheckConfig(at, t, rt), t;
        }),
        (e._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (e._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (e._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (e._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              this._offsets[0] > 0
            )
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; ) {
              this._activeTarget !== this._targets[o] &&
                t >= this._offsets[o] &&
                ("undefined" == typeof this._offsets[o + 1] ||
                  t < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
            }
          }
        }),
        (e._activate = function (t) {
          (this._activeTarget = t), this._clear();
          var e = this._selector.split(",").map(function (e) {
              return (
                e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
              );
            }),
            n = o.default(
              [].slice.call(document.querySelectorAll(e.join(",")))
            );
          n.hasClass("dropdown-item")
            ? (n
                .closest(".dropdown")
                .find(".dropdown-toggle")
                .addClass("active"),
              n.addClass("active"))
            : (n.addClass("active"),
              n
                .parents(".nav, .list-group")
                .prev(".nav-link, .list-group-item")
                .addClass("active"),
              n
                .parents(".nav, .list-group")
                .prev(".nav-item")
                .children(".nav-link")
                .addClass("active")),
            o
              .default(this._scrollElement)
              .trigger("activate.bs.scrollspy", { relatedTarget: t });
        }),
        (e._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (t) {
              return t.classList.contains("active");
            })
            .forEach(function (t) {
              return t.classList.remove("active");
            });
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = o.default(this).data("bs.scrollspy");
            if (
              (n ||
                ((n = new t(this, "object" == typeof e && e)),
                o.default(this).data("bs.scrollspy", n)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof n[e])
                throw new TypeError('No method named "' + e + '"');
              n[e]();
            }
          });
        }),
        l(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return lt;
            },
          },
        ]),
        t
      );
    })();
  o.default(window).on("load.bs.scrollspy.data-api", function () {
    for (
      var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
        e = t.length;
      e--;

    ) {
      var n = o.default(t[e]);
      ut._jQueryInterface.call(n, n.data());
    }
  }),
    (o.default.fn[at] = ut._jQueryInterface),
    (o.default.fn[at].Constructor = ut),
    (o.default.fn[at].noConflict = function () {
      return (o.default.fn[at] = st), ut._jQueryInterface;
    });
  var dt = o.default.fn.tab,
    ft = (function () {
      function t(t) {
        this._element = t;
      }
      var e = t.prototype;
      return (
        (e.show = function () {
          var t = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                o.default(this._element).hasClass("active")) ||
              o.default(this._element).hasClass("disabled")
            )
          ) {
            var e,
              n,
              i = o.default(this._element).closest(".nav, .list-group")[0],
              a = d.getSelectorFromElement(this._element);
            if (i) {
              var s =
                "UL" === i.nodeName || "OL" === i.nodeName
                  ? "> li > .active"
                  : ".active";
              n = (n = o.default.makeArray(o.default(i).find(s)))[n.length - 1];
            }
            var l = o.default.Event("hide.bs.tab", {
                relatedTarget: this._element,
              }),
              r = o.default.Event("show.bs.tab", { relatedTarget: n });
            if (
              (n && o.default(n).trigger(l),
              o.default(this._element).trigger(r),
              !r.isDefaultPrevented() && !l.isDefaultPrevented())
            ) {
              a && (e = document.querySelector(a)),
                this._activate(this._element, i);
              var u = function () {
                var e = o.default.Event("hidden.bs.tab", {
                    relatedTarget: t._element,
                  }),
                  i = o.default.Event("shown.bs.tab", { relatedTarget: n });
                o.default(n).trigger(e), o.default(t._element).trigger(i);
              };
              e ? this._activate(e, e.parentNode, u) : u();
            }
          }
        }),
        (e.dispose = function () {
          o.default.removeData(this._element, "bs.tab"), (this._element = null);
        }),
        (e._activate = function (t, e, n) {
          var i = this,
            a = (
              !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                ? o.default(e).children(".active")
                : o.default(e).find("> li > .active")
            )[0],
            s = n && a && o.default(a).hasClass("fade"),
            l = function () {
              return i._transitionComplete(t, a, n);
            };
          if (a && s) {
            var r = d.getTransitionDurationFromElement(a);
            o.default(a)
              .removeClass("show")
              .one(d.TRANSITION_END, l)
              .emulateTransitionEnd(r);
          } else l();
        }),
        (e._transitionComplete = function (t, e, n) {
          if (e) {
            o.default(e).removeClass("active");
            var i = o.default(e.parentNode).find("> .dropdown-menu .active")[0];
            i && o.default(i).removeClass("active"),
              "tab" === e.getAttribute("role") &&
                e.setAttribute("aria-selected", !1);
          }
          if (
            (o.default(t).addClass("active"),
            "tab" === t.getAttribute("role") &&
              t.setAttribute("aria-selected", !0),
            d.reflow(t),
            t.classList.contains("fade") && t.classList.add("show"),
            t.parentNode && o.default(t.parentNode).hasClass("dropdown-menu"))
          ) {
            var a = o.default(t).closest(".dropdown")[0];
            if (a) {
              var s = [].slice.call(a.querySelectorAll(".dropdown-toggle"));
              o.default(s).addClass("active");
            }
            t.setAttribute("aria-expanded", !0);
          }
          n && n();
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = o.default(this),
              i = n.data("bs.tab");
            if (
              (i || ((i = new t(this)), n.data("bs.tab", i)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof i[e])
                throw new TypeError('No method named "' + e + '"');
              i[e]();
            }
          });
        }),
        l(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
        ]),
        t
      );
    })();
  o
    .default(document)
    .on(
      "click.bs.tab.data-api",
      '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      function (t) {
        t.preventDefault(), ft._jQueryInterface.call(o.default(this), "show");
      }
    ),
    (o.default.fn.tab = ft._jQueryInterface),
    (o.default.fn.tab.Constructor = ft),
    (o.default.fn.tab.noConflict = function () {
      return (o.default.fn.tab = dt), ft._jQueryInterface;
    });
  var ct = o.default.fn.toast,
    ht = { animation: "boolean", autohide: "boolean", delay: "number" },
    gt = { animation: !0, autohide: !0, delay: 500 },
    mt = (function () {
      function t(t, e) {
        (this._element = t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners();
      }
      var e = t.prototype;
      return (
        (e.show = function () {
          var t = this,
            e = o.default.Event("show.bs.toast");
          if ((o.default(this._element).trigger(e), !e.isDefaultPrevented())) {
            this._clearTimeout(),
              this._config.animation && this._element.classList.add("fade");
            var n = function () {
              t._element.classList.remove("showing"),
                t._element.classList.add("show"),
                o.default(t._element).trigger("shown.bs.toast"),
                t._config.autohide &&
                  (t._timeout = setTimeout(function () {
                    t.hide();
                  }, t._config.delay));
            };
            if (
              (this._element.classList.remove("hide"),
              d.reflow(this._element),
              this._element.classList.add("showing"),
              this._config.animation)
            ) {
              var i = d.getTransitionDurationFromElement(this._element);
              o.default(this._element)
                .one(d.TRANSITION_END, n)
                .emulateTransitionEnd(i);
            } else n();
          }
        }),
        (e.hide = function () {
          if (this._element.classList.contains("show")) {
            var t = o.default.Event("hide.bs.toast");
            o.default(this._element).trigger(t),
              t.isDefaultPrevented() || this._close();
          }
        }),
        (e.dispose = function () {
          this._clearTimeout(),
            this._element.classList.contains("show") &&
              this._element.classList.remove("show"),
            o.default(this._element).off("click.dismiss.bs.toast"),
            o.default.removeData(this._element, "bs.toast"),
            (this._element = null),
            (this._config = null);
        }),
        (e._getConfig = function (t) {
          return (
            (t = r(
              {},
              gt,
              o.default(this._element).data(),
              "object" == typeof t && t ? t : {}
            )),
            d.typeCheckConfig("toast", t, this.constructor.DefaultType),
            t
          );
        }),
        (e._setListeners = function () {
          var t = this;
          o.default(this._element).on(
            "click.dismiss.bs.toast",
            '[data-dismiss="toast"]',
            function () {
              return t.hide();
            }
          );
        }),
        (e._close = function () {
          var t = this,
            e = function () {
              t._element.classList.add("hide"),
                o.default(t._element).trigger("hidden.bs.toast");
            };
          if (
            (this._element.classList.remove("show"), this._config.animation)
          ) {
            var n = d.getTransitionDurationFromElement(this._element);
            o.default(this._element)
              .one(d.TRANSITION_END, e)
              .emulateTransitionEnd(n);
          } else e();
        }),
        (e._clearTimeout = function () {
          clearTimeout(this._timeout), (this._timeout = null);
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = o.default(this),
              i = n.data("bs.toast");
            if (
              (i ||
                ((i = new t(this, "object" == typeof e && e)),
                n.data("bs.toast", i)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof i[e])
                throw new TypeError('No method named "' + e + '"');
              i[e](this);
            }
          });
        }),
        l(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return ht;
            },
          },
          {
            key: "Default",
            get: function () {
              return gt;
            },
          },
        ]),
        t
      );
    })();
  (o.default.fn.toast = mt._jQueryInterface),
    (o.default.fn.toast.Constructor = mt),
    (o.default.fn.toast.noConflict = function () {
      return (o.default.fn.toast = ct), mt._jQueryInterface;
    }),
    (t.Alert = h),
    (t.Button = m),
    (t.Carousel = w),
    (t.Collapse = D),
    (t.Dropdown = x),
    (t.Modal = q),
    (t.Popover = ot),
    (t.Scrollspy = ut),
    (t.Tab = ft),
    (t.Toast = mt),
    (t.Tooltip = J),
    (t.Util = d),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.min.js.map
