window.__jivoOnError = function(e) {
    if (-1 === navigator.userAgent.search(/google/gi) && -1 === navigator.userAgent.search(/\+http:\/\/yandex\.com\/bots/gi)) try {
        var t = window.location.protocol + "//err.jivosite.com/widget",
            n = "POST",
            r = {
                widget: "true",
                widget_version: window.jivo_version,
                level: 2,
                url: window.location.href,
                user_agent: navigator.userAgent,
                lineNumber: e && e.lineNumber,
                fileName: e && e.fileName,
                column: e && e.columnNumber,
                full_message: e && e.stack,
                short_message: e && e.message
            },
            o = new XMLHttpRequest;
        "withCredentials" in o ? o.open(n, t, !0) : "undefined" != typeof XDomainRequest && (o = new XDomainRequest).open(n, t), o.setRequestHeader("Content-Type", "application/json"), o.send(JSON.stringify(r))
    } catch (e) {}
},
function() {
    window.__hasStorage = !1;
    try {
        localStorage.setItem("testLocalStorage", "ok"), localStorage.removeItem("testLocalStorage"), window.__hasStorage = !0
    } catch (e) {}

    function t(i, a, e, t) {
        var l = i.console;
        if (l || (l = {
                log: function() {},
                error: function() {}
            }), i.WebSocket) {
            if (void 0 === i.jivo_magic_var) {
                i.jivo_magic_var = !0;
                var s, n, r, o, d, c, u, f, g, m, v = {
                        hasStorage: i.__hasStorage,
                        jivoLoaderVersion: e,
                        loadScript: se,
                        currentLoaderVersionCache: t
                    },
                    p = navigator.userAgent.toLowerCase(),
                    h = /iPhone|iPad|iPod|Android|Windows Phone/i.test(p),
                    b = a.createElement("iframe"),
                    w = a.createElement("div"),
                    _ = 0,
                    y = 5e3,
                    S = 5,
                    C = 4,
                    j = 6048e5,
                    N = 0,
                    I = 0,
                    T = [],
                    E = [
                        ["//cdn-fr.jivosite.com"],
                        ["//cdn-cis.jivosite.com"],
                        ["//cdn-ca.jivosite.com"]
                    ],
                    L = {
                        0: ["default"],
                        1: ["RU", "KZ", "UA", "BY"],
                        2: ["US", "CA", "AG", "BS", "BB", "BZ", "HT", "GT", "HN", "GD", "DM", "DO", "MX", "NI", "PA", "SV", "LC", "VC", "KN", "TT", "JM", "CR", "CU", "AR", "BR", "BO", "VE", "GY", "CO", "PY", "PE", "SR", "UY", "CL", "EC", "AU", "VU", "KI", "MH", "FM", "NR", "NZ", "PW", "PG", "WS", "SB", "TK", "TV", "FJ", "PH"]
                    },
                    O = "",
                    H = "default",
                    k = function(e) {
                        return i.MooTools && void 0 === JSON.parse ? JSON.decode(e) : JSON.parse(e)
                    },
                    A = function(e) {
                        return i.MooTools && void 0 === JSON.stringify ? JSON.encode(e) : JSON.stringify(e)
                    },
                    B = function() {
                        var e = {
                            isChatStarted: null,
                            geoWidgetInfo: {
                                widgetId: null,
                                clientLocation: null,
                                region: null
                            },
                            configHost: null,
                            deletedInfo: {
                                widgetId: null,
                                resolveTime: null
                            },
                            availableHostInfo: {
                                retriesCount: null,
                                type: null,
                                host: null
                            },
                            abTesting: null,
                            buildNumber: null,
                            bundleLoaded: null,
                            isNewCode: null,
                            loadTime: null,
                            log: null
                        };
                        if (v.hasStorage) {
                            var t = k(localStorage.getItem("jv_loader_info"));
                            t && G(t, e)
                        }
                        return e
                    }();
                de("Initialization"), i.__jivoBundleOnLoad = function(e) {
                    clearTimeout(d), c = e;
                    var t = ((new Date).getTime() - f) / 1e3;
                    6 < t && q("loadTime", t);
                    q("bundleLoaded", !0), q("buildNumber", s.build_number), de("Bundle is loaded"),
                        function() {
                            o = a.body.lastChild, w.style && (w.style.opacity = "0", w.style.visibility = "hidden");
                            w.setAttribute("id", "jivo-iframe-container"), w.appendChild(b), o ? o.parentNode.insertBefore(w, o.nextSibling) : a.body.appendChild(w);
                            V()
                        }()
                }, i.__jivoBundleInit = function(e) {
                    e.loaderContext = v, e.globalStore = v,
                        function() {
                            c = null;
                            var e = function(e) {
                                if (e) {
                                    var t = e.querySelectorAll && e.querySelectorAll(".js-jivo-bundle");
                                    return t && 0 < t.length ? t : e.getElementsByClassName("js-jivo-bundle")
                                }
                            }(ce()); {
                                if (!e) throw l.error("Cannot get bundle script element"), new Error("Cannot get bundle script element");
                                for (var t = 0; t < e.length; t++) e[t].parentNode && (e[t].parentNode.removeChild(e[t]), e[t] = null);
                                e = null
                            }
                        }()
                }, v.getHostURL = ie, v.loadConfig = R, v.store = B, v.setInStore = q, F();
                var M = null,
                    W = !1;
                m && g ? (de("widgetId:", m, "configHost:", g), R(z())) : m && g || l.error("Failed to evaluate the widgetId or configHost"), i.__jivoConfigOnLoad = function(e) {
                    P(e)
                }, i.__jivoCacheDeletedWidget = function() {
                    ee()
                }
            }
        } else l.log("Not supported browser");

        function R(e) {
            if (T.push(e), C < ++I) {
                de("Config load limit is exceeded"), localStorage.removeItem("jv_loader_info");
                var t = new Error("Config load limit is exceeded"),
                    n = "Config urls: " + T.join(";\r\n");
                try {
                    t.stack = n
                } catch (e) {
                    t = new Error("Config load limit is exceeded. " + n)
                }
                i.__jivoOnError(t)
            } else if (de("Loading config from", e), B.deletedInfo.widgetId && B.deletedInfo.widgetId === m && B.deletedInfo.resolveTime && parseInt(B.deletedInfo.resolveTime) >= (new Date).getTime()) l.error("This widget is permanently removed");
            else {
                var o = new XMLHttpRequest;
                o.onreadystatechange = function() {
                    if (4 === o.readyState)
                        if (200 === o.status) {
                            var e, t = function(e) {
                                var t;
                                t = e.responseType && "text" !== e.responseType ? "document" === e.responseType ? e.responseXML : e.response : e.responseText;
                                return t
                            }(o);
                            try {
                                if (!(e = k(t))) throw new Error("Parse config response error")
                            } catch (e) {
                                de("Config is loaded as JSONP");
                                var n = a.getElementsByTagName("script")[0],
                                    r = a.createElement("script");
                                ne(r), r.innerHTML = t, n.parentNode.insertBefore(r, n)
                            }
                            e && (de("Config is loaded", e), P(e))
                        } else 0 !== o.status && (de("Config loading error"), q("geoWidgetInfo", Q(null, null, null)), q("isChatStarted", null), q("configHost", null), te())
                }, o.open("GET", e + "?rnd=" + Math.random(), !0), o.send(null)
            }
        }

        function P(e) {
            if (e.isDeleted) ee();
            else {
                if (g !== e.base_url && !W) return de("Wrong config host", g), g = e.base_url, void R(z());
                if (e.regions && !B.isChatStarted) {
                    var t = function(e) {
                        var t, n, r = e.regions,
                            o = $(e.geoip);
                        if (r) {
                            for (var i = Object.keys(r), a = 0; a < i.length; a++)
                                for (var l = r[i[a]], s = 0; s < l.length; s++)
                                    if (1 != l.length || "default" !== l[s]) {
                                        var d = $(l[s]);
                                        if (o.country === d.country) {
                                            if (o.region === d.region) return Q(i[a], l[s], e.geoip);
                                            n || d.region || (n = Q(i[a], l[s], e.geoip))
                                        }
                                    } else t = i[a];
                            if (n) return n;
                            if (t) return Q(t, "default", e.geoip)
                        }
                    }(e);
                    if (t.widgetId !== m) return de("Wrong geo-widget widgetId", m), q("geoWidgetInfo", t), m = t.widgetId, void R(z())
                }
                if ((M = e.ab_segment) && M.name && M.host && M.staticHost && 1 !== e.site_id)
                    if (de("AB-testing segmentation is enabled in config"), W = function(e, t) {
                            var n = B.abTesting,
                                r = !1;
                            r = n && n.name === e.name ? n.match : function(e, t) {
                                if (de('Check for criteria match of test "' + e.name + '"'), e.device) {
                                    var n = "desktop" !== (r = e.device) ? "mobile" !== r ? "all" === r && (fe() || ge()) : ge() : fe() && !ge();
                                    if (!n) return de('Segment "' + e.name + '" is NOT matched. Criteria: device'), !1
                                }
                                var r;
                                if (e.locale) {
                                    var o = e.locale === t.locale;
                                    if (!o) return de('Segment "' + e.name + '" is NOT matched. Criteria: locale'), !1
                                }
                                if (e.percentage) {
                                    var i = (a = e.percentage, Math.random() <= .01 * a);
                                    if (!i) return de('Segment "' + e.name + '" is NOT matched. Criteria: percentage'), !1
                                }
                                var a;
                                return de('Segment "' + e.name + '" is matched!'), !0
                            }(e, t);
                            return q("abTesting", {
                                name: e.name,
                                match: r
                            }), r
                        }(M, e)) {
                        de("Ab-testing segment match! Segment:", M.name);
                        var n = "//" + M.host;
                        de('Setting new base_url. Was: "' + e.base_url + '". New: "' + n + '".'), e.base_url = n, de('Setting new static_host. Was: "' + e.static_host + '". New: "' + M.staticHost + '".'), e.static_host = M.staticHost, q("availableHostInfo", {
                            type: B.availableHostInfo.type,
                            retriesCount: B.availableHostInfo.retriesCount,
                            host: null
                        })
                    } else de("Ab-testing segment is NOT matched");
                else q("abTesting", null), de("AB-testing segmentation is NOT enabled in config"), q("configHost", g);
                ! function(e) {
                    if (q("log", !!e.logs), i.jivo_config = s = e, void 0 !== s.host_blacklist && 0 <= s.host_blacklist.indexOf(i.location.host)) throw de("Host is blacklisted", i.location.host), new Error("Placing widget is forbidden on " + i.top.location.host);
                    if (h && s.disable_mobile) return de("Mobile widget is disabled"); {}
                    "complete" == a.readyState ? x() : B.bundleLoaded && B.buildNumber == s.build_number ? "interactive" == a.readyState ? x() : le(i, "DOMContentLoaded", x) : (q("bundleLoaded", !1), le(i, "load", x))
                }(e)
            }
        }

        function x() {
            de("Widget initialization"),
                function() {
                    if ("string" == typeof s.geoip && "" !== s.geoip) {
                        var e = s.geoip.split(";")[0];
                        null !== re(e) && (H = e)
                    }
                    if (!oe()) {
                        q("availableHostInfo", {
                            type: null,
                            retriesCount: null,
                            host: null
                        }), q("buildNumber", null)
                    }
                    var t = s.static_host ? s.static_host.split("/") : [];
                    O = t[1] ? "/" + t[1] : "";
                    var n = B.availableHostInfo;
                    4 < (N = n.retriesCount ? n.retriesCount : N) && (N = 4);
                    u = re(H)
                }(),
                function() {
                    de("Iframe initialization"), b.src = "javascript:void(0)", b.title = "", b.role = "presentation", b.allow = "autoplay", b.title = "Jivochat", b.setAttribute("name", "jivo_container"), b.setAttribute("id", "jivo_container"), b.setAttribute("frameborder", "no"), w.className += "jivo-no-transition", "undefined" == typeof SVGRect && (w.className += " no-svg");
                    (b.frameElement || b).style.cssText = "width:100%;height:100%;border:0", i.jivo_init = function() {
                        _ = 0;
                        var e = a.createEvent("Event");
                        e.initEvent("jBeforeunload", !0, !0), i.dispatchEvent(e), D()
                    }, i.atob && "complete" !== a.readyState ? le(i, "load", D) : D();
                    le(i, "message", function(e) {
                        if (e && e.data && "object" == typeof e.data) {
                            var t, n, r = e.data;
                            if ("in_node_webkit" == r.name && (t || (t = e.source, n = e.origin), t && n)) {
                                i.jivo_cobrowse = {
                                    source: t,
                                    origin: n
                                };
                                var o = "jv_" + encodeURIComponent("langpack") + "_" + s.widget_id + "=" + encodeURIComponent(A(r.langpack));
                                s.cookie_domain && (o += "; domain=" + s.cookie_domain), o += "; path=/", a.cookie = o, t.postMessage({
                                    name: "widget_ready"
                                }, n)
                            }
                            "iframe_url_changed" != r.name && "iframe_url_changed" != r || V()
                        } else s && 1 === s.logs && l && l.log && l.log("Error receive postMessage, window message event is empty.")
                    })
                }(), s.cp_tracker_id && s.cp_tracker_url && (i._cp = {
                    trackerId: s.cp_tracker_id
                }, se(s.cp_tracker_url))
        }

        function D() {
            var e = ie();
            de("startLoadBundle", e), (s.build_number === B.buildNumber || e === s.base_url) && (oe() || e === s.base_url) ? J(e) : U(e)
        }

        function U(e) {
            var t = new XMLHttpRequest,
                n = ie(!0) + "/ping?rand=" + (new Date).getTime();
            de("Pinging host", n), t.onreadystatechange = function() {
                4 === t.readyState && (204 === t.status ? (clearTimeout(d), de("Host is available", e), q("availableHostInfo", {
                    type: W ? null : B.availableHostInfo.type,
                    retriesCount: W ? null : N,
                    host: W ? null : e
                }), q("buildNumber", s.build_number), J(e)) : 0 !== t.status && (de("Ping host error", e), ae("error", e, t.status)))
            }, t.open("GET", n, !0), t.send(null), d = setTimeout(function() {
                ae("timeout")
            }, y)
        }

        function J(e) {
            de("Insertion of bundle code from", e);
            var t, n, r = ce(),
                o = a.createElement("script"),
                i = (t = e, n = s.bundle_folder ? s.bundle_folder : "", t + n + "/js/bundle_" + s.locale + ".js?rand=" + s.build_number);
            f = f || (new Date).getTime(), ne(o), o.className = "js-jivo-bundle", o.src = i, v.bundleSrc = i, o.onerror = function() {
                ae("error", e)
            }, r.appendChild(o)
        }

        function V() {
            if (!(3 < _++)) {
                if (!c) return _--, D();
                try {
                    r = b.contentWindow.document
                } catch (e) {
                    n = a.domain, b.src = "javascript:var d=document.open();d.domain='" + n + "';void(0);", r = b.contentWindow.document
                }
                var e = '<head><meta name="google" content="notranslate"><meta http-equiv="X-UA-Compatible" content="IE=edge" />' + ("<script type=\"text/javascript\">window.onerror = function (message, url, lineNumber, columnNumber, error) {    if (error && error.error) {        error = error.error;    }    if (!error || !(error instanceof Error)) {        error = {};    }    if (error.stack) {        error.stack = error.message + ' ' + error.stack;    }    error.message = 'Bundle init error';    error.columnNumber = columnNumber;    error.lineNumber = lineNumber;    error.url = url;    window.parent.__jivoOnError(error);};" + c + "<\/script>") + "</head>";
                r.write("<!doctype HTML>" + e + '<body class="notranslate"><div id="widget"></div><div id="player"></div></body>'), r.close()
            }
        }

        function q(e, t) {
            if (B[e] = t, v.hasStorage) {
                var n = {};
                G(B, n), localStorage.setItem("jv_loader_info", A(n))
            }
        }

        function G(t, n) {
            Object.keys(t).forEach(function(e) {
                (function(e) {
                    if (X(e)) return !0;
                    if ("object" == typeof e) {
                        for (var t = Object.keys(e), n = 0; n < t.length; n++)
                            if (!X(e[t[n]])) return !1;
                        return !0
                    }
                })(t[e]) || (n[e] = t[e])
            })
        }

        function X(e) {
            return null === e && "object" == typeof e
        }

        function z() {
            return g + "/script/widget/config/" + m
        }

        function F() {
            g = B.configHost, m = B.geoWidgetInfo.widgetId;
            var e = function() {
                    if (a.currentScript && a.currentScript.src) return a.currentScript.src;
                    try {
                        throw new Error("Get script URL")
                    } catch (e) {
                        var t = e.stack;
                        if (t) {
                            var n = Z(t),
                                r = K(t),
                                o = Y(t);
                            return n ? n[0] : r ? r[0] : o ? o[0] : null
                        }
                    }
                }(),
                t = Z(e),
                n = K(e),
                r = Y(e);
            if (g || (t ? (g = "//" + t[1], q("isNewCode", !0)) : n ? g = "//" + n[1] : r && (g = "//" + r[1])), !m)
                if (n && n[2]) m = n[2], q("isNewCode", !1);
                else if (r && r[2]) m = r[2], q("isNewCode", !1);
            else if (q("isNewCode", !0), a.currentScript) m = a.currentScript.getAttribute("iEUmonxahY");
            else {
                var o = a.querySelector("script[iEUmonxahY]");
                o && (m = o.getAttribute("iEUmonxahY"))
            }
        }

        function Z(e) {
            return e && e.match(/https?:\/\/(\S+)\/widget\.js/)
        }

        function K(e) {
            return e && e.match(/https?:\/\/(\S+)\/script\/widget\/([A-Za-z0-9]+)/)
        }

        function Y(e) {
            return e && e.match(/https?:\/\/(\S+)\/script\/geo-widget\/([A-Za-z0-9]+)/)
        }

        function Q(e, t, n) {
            return {
                widgetId: e,
                region: t,
                clientLocation: n
            }
        }

        function $(e) {
            if ("string" == typeof e && "" !== e) {
                var t = e.split(";");
                return {
                    country: t[0],
                    region: t[1],
                    city: t[2]
                }
            }
        }

        function ee() {
            de("Widget was removed", m), q("configHost", null), B.geoWidgetInfo.widgetId || B.isChatStarted ? (q("geoWidgetInfo", Q(null, null, null)), q("isChatStarted", null), te()) : (q("deletedInfo", {
                widgetId: m,
                resolveTime: ((new Date).getTime() + j).toString()
            }), l.error("This widget is permanently removed"))
        }

        function te() {
            g = m = null, F(), R(z())
        }

        function ne(e) {
            return e.type = "text/javascript", e.async = !0, e.charset = "UTF-8", e
        }

        function re(t) {
            var e = Object.keys(L),
                n = null;
            return e.forEach(function(e) {
                n || -1 !== L[e].indexOf(t) && (n = e)
            }), n
        }

        function oe() {
            var e = B.availableHostInfo;
            return B.buildNumber === s.build_number && e.host
        }

        function ie(e) {
            var t = e ? "" : O;
            return s.static_host ? oe() ? B.availableHostInfo.host : 0 === N ? (u = re(H), E[u] + t) : 1 === N ? (u = function e(t, n) {
                var r = Object.keys(t);
                var o = (i = r, i[Math.floor(Math.random() * i.length)]);
                var i;
                return o === n ? e(t, n) : o
            }(L, u), E[u] + t) : s.base_url : s.base_url
        }

        function ae(e, t, n) {
            if (clearTimeout(d), ++N >= S) {
                de("Bundle load retries count is exceeded");
                var r = new Error("Bundle NOT loaded. Type: " + e + (t ? ". Host: " + t : "") + (n ? ". Status code: " + n : ""));
                i.__jivoOnError(r)
            } else {
                var o = {
                    type: e,
                    retriesCount: N,
                    host: null
                };
                B.availableHostInfo = o, D()
            }
        }

        function le(e, t, n) {
            var r;
            e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && (e.attachEvent("on" + t, (r = e, function() {
                n.call(r, i.event)
            })), e = null)
        }

        function se(e, t) {
            var n = t || a,
                r = n.getElementsByTagName("script")[0],
                o = n.createElement("script");
            ne(o), r.parentNode.insertBefore(o, r).src = e
        }

        function de() {
            if (B.log) {
                var e = Array.prototype.slice.call(arguments || []);
                e.unshift("Loader:"), l.log.apply(l, e)
            }
        }

        function ce() {
            var e = a.head || a.getElementsByTagName("head")[0];
            if (!e) throw l.error("Cannot get document head element"), new Error("Cannot get document head element");
            return e
        }

        function ue(e) {
            return -1 !== p.indexOf(e)
        }

        function fe() {
            return ue("chrome") && !ue("opr/") && "Google Inc." === i.navigator.vendor
        }

        function ge() {
            return !ue("windows") && ue("android")
        }
    }
    var n = t,
        e = null;
    if (window.__hasStorage) {
        try {
            e = JSON.parse(localStorage.getItem("__jivoLoader"))
        } catch (e) {
            e.message = "Loader parse error", window.__jivoOnError(e)
        }
        e && .1 < e.version && (n = new Function("window", "document", "broswerCacheLoaderVersion", "currentLoaderVersionCache", "(" + e.code + ")(window, document, broswerCacheLoaderVersion, currentLoaderVersionCache)"))
    }
    try {
        n(window, document, .1, e ? e.version : .1)
    } catch (e) {
        e.message = e.message ? "Loader error. " + e.message : "Loader error", window.__jivoOnError(e), delete window.jivo_magic_var, (n = t)(window, document, .1, .1)
    }
}();