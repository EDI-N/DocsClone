// Jivosite Chat
(function () {
    d = document;
    s = d.createElement("script");
    s.src = "//code.jivosite.com/widget.js";
    s.async = 1;
    s.setAttribute("jv-id", "iEUmonxahY");
    d.getElementsByTagName("head")[0].appendChild(s);
})
();

// Jivosite Chat
! function(e) {
    var t = {};

    function i(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.m = e, i.c = t, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 36)
}([function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return n
    });
    class n {
        static shouldLog() {
            try {
                if ("undefined" == typeof window || void 0 === window.localStorage) return !1;
                const e = window.localStorage.getItem("loglevel");
                return !(!e || "trace" !== e.toLowerCase())
            } catch (e) {
                return !1
            }
        }
        static setLevel(e) {
            if ("undefined" != typeof window && void 0 !== window.localStorage) try {
                window.localStorage.setItem("loglevel", e), n.proxyMethodsCreated = void 0, n.createProxyMethods()
            } catch (e) {
                return
            }
        }
        static createProxyMethods() {
            if (void 0 !== n.proxyMethodsCreated) return;
            n.proxyMethodsCreated = !0;
            const e = {
                log: "debug",
                trace: "trace",
                info: "info",
                warn: "warn",
                error: "error"
            };
            for (const t of Object.keys(e)) {
                const i = void 0 !== console[t],
                    r = e[t],
                    o = i && (n.shouldLog() || "error" === r);
                n[r] = o ? console[t].bind(console) : function() {}
            }
        }
    }
    n.createProxyMethods()
}, function(e, t, i) {
    "use strict";
    var n = i(11);
    class r extends n.a {
        constructor(e = "The asynchronous operation has timed out.") {
            super(e), this.message = e, Object.setPrototypeOf(this, r.prototype)
        }
    }
    i.d(t, "a", function() {
        return o
    });
    class o {
        static contains(e, t) {
            return !!e && -1 !== e.indexOf(t)
        }
        static getConsoleStyle(e) {
            return "code" == e ? 'padding: 0 1px 1px 5px;border: 1px solid #ddd;border-radius: 3px;font-family: Monaco,"DejaVu Sans Mono","Courier New",monospace;color: #444;' : "bold" == e ? "font-weight: 600;color: rgb(51, 51, 51);" : "alert" == e ? "font-weight: 600;color: red;" : "event" == e ? "color: green;" : "postmessage" == e ? "color: orange;" : "serviceworkermessage" == e ? "color: purple;" : ""
        }
        static trimUndefined(e) {
            for (var t in e) e.hasOwnProperty(t) && void 0 === e[t] && delete e[t];
            return e
        }
        static capitalize(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
        static stringify(e) {
            return JSON.stringify(e, (e, t) => "function" == typeof t ? "[Function]" : t, 4)
        }
        static encodeHashAsUriComponent(e) {
            let t = "";
            const i = Object.keys(e);
            for (var n of i) {
                const i = e[n];
                t += `${encodeURIComponent(n)}=${encodeURIComponent(i)}`
            }
            return t
        }
        static timeoutPromise(e, t) {
            const i = new Promise((e, i) => {
                setTimeout(() => {
                    i(new r)
                }, t)
            });
            return Promise.race([e, i])
        }
        static getValueOrDefault(e, t) {
            return void 0 !== e && null !== e ? e : t
        }
        static enforceAppId(e) {
            if (!e) throw new Error("App id cannot be empty")
        }
        static enforcePlayerId(e) {
            if (!e) throw new Error("Player id cannot be empty")
        }
    }
    t.b = o
}, function(e, t, i) {
    "use strict";
    var n = function(e, t, i, n) {
        return new(i || (i = Promise))(function(r, o) {
            function s(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                e.done ? r(e.value) : new i(function(t) {
                    t(e.value)
                }).then(s, a)
            }
            c((n = n.apply(e, t || [])).next())
        })
    };
    class r {
        constructor() {
            this._events = {}
        }
        on(e, t) {
            return this._events[e] = this._events[e] || [], this._events[e].push(t), this
        }
        once(e, t) {
            const i = this;

            function n() {
                i.off(e, n), t.apply(this, arguments)
            }
            return n.listener = t, this.on(e, n), this
        }
        off(e, t) {
            const i = this._events[e];
            if (void 0 !== i) {
                for (let e = 0; e < i.length; e += 1)
                    if (i[e] === t || i[e].listener === t) {
                        i.splice(e, 1);
                        break
                    } 0 === i.length && this.removeAllListeners(e)
            }
            return this
        }
        removeAllListeners(e) {
            try {
                e ? delete this._events[e] : this._events = {}
            } catch (e) {}
            return this
        }
        listeners(e) {
            try {
                return this._events[e]
            } catch (e) {
                return
            }
        }
        numberOfListeners(e) {
            const t = this.listeners(e);
            return t ? t.length : 0
        }
        emit(...e) {
            return n(this, void 0, void 0, function*() {
                const t = e.shift();
                let i = this._events[t];
                if (void 0 !== i) {
                    const t = (i = i.slice(0)).length;
                    for (let n = 0; n < t; n += 1) yield i[n].apply(this, e)
                }
                return this
            })
        }
    }
    var o = i(0),
        s = i(1),
        a = function(e, t, i, n) {
            return new(i || (i = Promise))(function(r, o) {
                function s(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    e.done ? r(e.value) : new i(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                c((n = n.apply(e, t || [])).next())
            })
        };
    class c {
        constructor(e) {
            this.databaseName = e, this.emitter = new r
        }
        open(e) {
            return new Promise(t => {
                try {
                    var i = indexedDB.open(e, 1)
                } catch (e) {}
                if (!i) return null;
                i.onerror = this.onDatabaseOpenError, i.onblocked = this.onDatabaseOpenBlocked, i.onupgradeneeded = this.onDatabaseUpgradeNeeded, i.onsuccess = (() => {
                    this.database = i.result, this.database.onerror = this.onDatabaseError, this.database.onversionchange = this.onDatabaseVersionChange, t(this.database)
                })
            })
        }
        ensureDatabaseOpen() {
            return a(this, void 0, void 0, function*() {
                return this.openLock || (this.openLock = this.open(this.databaseName)), yield this.openLock, this.database
            })
        }
        onDatabaseOpenError(e) {
            e.preventDefault();
            const t = e.target.error;
            s.b.contains(t.message, "The operation failed for reasons unrelated to the database itself and not covered by any other error code") || s.b.contains(t.message, "A mutation operation was attempted on a database that did not allow mutations") ? o.a.warn("OneSignal: IndexedDb web storage is not available on this origin since this profile's IndexedDb schema has been upgraded in a newer version of Firefox. See: https://bugzilla.mozilla.org/show_bug.cgi?id=1236557#c6") : o.a.warn("OneSignal: Fatal error opening IndexedDb database:", t)
        }
        onDatabaseError(e) {
            o.a.debug("IndexedDb: Generic database error", e.target.errorCode)
        }
        onDatabaseOpenBlocked() {
            o.a.debug("IndexedDb: Blocked event")
        }
        onDatabaseVersionChange(e) {
            o.a.debug("IndexedDb: versionchange event")
        }
        onDatabaseUpgradeNeeded(e) {
            o.a.debug("IndexedDb: Database is being rebuilt or upgraded (upgradeneeded event).");
            const t = e.target.result;
            t.createObjectStore("Ids", {
                keyPath: "type"
            }), t.createObjectStore("NotificationOpened", {
                keyPath: "url"
            }), t.createObjectStore("Options", {
                keyPath: "key"
            }), "undefined" != typeof OneSignal && (OneSignal._isNewVisitor = !0)
        }
        get(e, t) {
            return a(this, void 0, void 0, function*() {
                return yield this.ensureDatabaseOpen(), t ? yield new Promise((i, n) => {
                    var r = this.database.transaction(e).objectStore(e).get(t);
                    r.onsuccess = (() => {
                        i(r.result)
                    }), r.onerror = (() => {
                        n(r.error)
                    })
                }): yield new Promise((t, i) => {
                    let n = {},
                        r = this.database.transaction(e).objectStore(e).openCursor();
                    r.onsuccess = (e => {
                        var i = e.target.result;
                        if (i) {
                            let e = i.key;
                            n[e] = i.value, i.continue()
                        } else t(n)
                    }), r.onerror = (() => {
                        i(r.error)
                    })
                })
            })
        }
        put(e, t) {
            return a(this, void 0, void 0, function*() {
                return yield this.ensureDatabaseOpen(), yield new Promise((i, n) => {
                    try {
                        let r = this.database.transaction([e], "readwrite").objectStore(e).put(t);
                        r.onsuccess = (() => {
                            i(t)
                        }), r.onerror = (e => {
                            o.a.error("Database PUT Transaction Error:", e), n(e)
                        })
                    } catch (e) {
                        o.a.error("Database PUT Error:", e), n(e)
                    }
                })
            })
        }
        remove(e, t) {
            if (t) var i = "delete";
            else i = "clear";
            return new Promise((n, r) => {
                try {
                    let s = this.database.transaction([e], "readwrite").objectStore(e)[i](t);
                    s.onsuccess = (() => {
                        n(t)
                    }), s.onerror = (e => {
                        o.a.error("Database REMOVE Transaction Error:", e), r(e)
                    })
                } catch (e) {
                    o.a.error("Database REMOVE Error:", e), r(e)
                }
            })
        }
    }
    class u {}
    class d {}
    var l = i(30),
        p = i(24),
        g = i(4);
    class f {
        constructor(e, t, i) {
            this.emailId = e, this.emailAddress = t, this.emailAuthHash = i
        }
        serialize() {
            return {
                emailAddress: this.emailAddress,
                emailAuthHash: this.emailAuthHash,
                emailId: this.emailId
            }
        }
        static deserialize(e) {
            return new f(e.emailId, e.emailAddress, e.emailAuthHash)
        }
    }
    var h = i(3),
        b = i(8);
    i.d(t, "a", function() {
        return y
    });
    var m, v, S = function(e, t, i, n) {
        return new(i || (i = Promise))(function(r, o) {
            function s(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                e.done ? r(e.value) : new i(function(t) {
                    t(e.value)
                }).then(s, a)
            }
            c((n = n.apply(e, t || [])).next())
        })
    };
    (v = m || (m = {}))[v.SET = 0] = "SET";
    class y {
        constructor(e) {
            this.databaseName = e, this.emitter = new r, this.database = new c(this.databaseName)
        }
        static resetInstance() {
            y.databaseInstance = null
        }
        static get singletonInstance() {
            return y.databaseInstanceName || (y.databaseInstanceName = "ONE_SIGNAL_SDK_DB"), y.databaseInstance || (y.databaseInstance = new y(y.databaseInstanceName)), y.databaseInstance
        }
        static applyDbResultFilter(e, t, i) {
            switch (e) {
                case "Options":
                    return i && t ? i.value : i && !t ? i : null;
                case "Ids":
                    return i && t ? i.id : i && !t ? i : null;
                case "NotificationOpened":
                    return i && t ? {
                        data: i.data,
                        timestamp: i.timestamp
                    } : i && !t ? i : null;
                default:
                    return i || null
            }
        }
        get(e, t) {
            return S(this, void 0, void 0, function*() {
                if (h.a.getWindowEnv() !== g.a.ServiceWorker && b.b.isUsingSubscriptionWorkaround() && h.a.getTestEnv() === p.a.None) return yield new Promise(i => S(this, void 0, void 0, function*() {
                    OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET, [{
                        table: e,
                        key: t
                    }], e => {
                        let t = e.data[0];
                        i(t)
                    })
                })); {
                    const i = yield this.database.get(e, t);
                    return y.applyDbResultFilter(e, t, i)
                }
            })
        }
        put(e, t) {
            return S(this, void 0, void 0, function*() {
                yield new Promise((i, n) => S(this, void 0, void 0, function*() {
                    h.a.getWindowEnv() !== g.a.ServiceWorker && b.b.isUsingSubscriptionWorkaround() && h.a.getTestEnv() === p.a.None ? OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_PUT, [{
                        table: e,
                        keypath: t
                    }], r => {
                        r.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? i() : n(`(Database) Attempted remote IndexedDB put(${e}, ${t}), but did not get success response.`)
                    }) : (yield this.database.put(e, t), i())
                })), this.emitter.emit(y.EVENTS.SET, t)
            })
        }
        remove(e, t) {
            return h.a.getWindowEnv() !== g.a.ServiceWorker && b.b.isUsingSubscriptionWorkaround() && h.a.getTestEnv() === p.a.None ? new Promise((i, n) => {
                OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_REMOVE, [{
                    table: e,
                    keypath: t
                }], r => {
                    r.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? i() : n(`(Database) Attempted remote IndexedDB remove(${e}, ${t}), but did not get success response.`)
                })
            }) : this.database.remove(e, t)
        }
        getAppConfig() {
            return S(this, void 0, void 0, function*() {
                const e = {},
                    t = yield this.get("Ids", "appId");
                return e.appId = t, e.subdomain = yield this.get("Options", "subdomain"), e.vapidPublicKey = yield this.get("Options", "vapidPublicKey"), e.emailAuthRequired = yield this.get("Options", "emailAuthRequired"), e
            })
        }
        getExternalUserId() {
            return S(this, void 0, void 0, function*() {
                return yield this.get("Ids", "externalUserId")
            })
        }
        setExternalUserId(e) {
            return S(this, void 0, void 0, function*() {
                const t = s.b.getValueOrDefault(e, "");
                "" === t ? yield this.remove("Ids", "externalUserId"): yield this.put("Ids", {
                    type: "externalUserId",
                    id: t
                })
            })
        }
        setAppConfig(e) {
            return S(this, void 0, void 0, function*() {
                e.appId && (yield this.put("Ids", {
                    type: "appId",
                    id: e.appId
                })), e.subdomain && (yield this.put("Options", {
                    key: "subdomain",
                    value: e.subdomain
                })), !0 === e.httpUseOneSignalCom ? yield this.put("Options", {
                    key: "httpUseOneSignalCom",
                    value: !0
                }): !1 === e.httpUseOneSignalCom && (yield this.put("Options", {
                    key: "httpUseOneSignalCom",
                    value: !1
                })), !0 === e.emailAuthRequired ? yield this.put("Options", {
                    key: "emailAuthRequired",
                    value: !0
                }): !1 === e.emailAuthRequired && (yield this.put("Options", {
                    key: "emailAuthRequired",
                    value: !1
                })), e.vapidPublicKey && (yield this.put("Options", {
                    key: "vapidPublicKey",
                    value: e.vapidPublicKey
                }))
            })
        }
        getAppState() {
            return S(this, void 0, void 0, function*() {
                const e = new u;
                return e.defaultNotificationUrl = yield this.get("Options", "defaultUrl"), e.defaultNotificationTitle = yield this.get("Options", "defaultTitle"), e.lastKnownPushEnabled = yield this.get("Options", "isPushEnabled"), e.clickedNotifications = yield this.get("NotificationOpened"), e
            })
        }
        setAppState(e) {
            return S(this, void 0, void 0, function*() {
                if (e.defaultNotificationUrl && (yield this.put("Options", {
                        key: "defaultUrl",
                        value: e.defaultNotificationUrl
                    })), (e.defaultNotificationTitle || "" === e.defaultNotificationTitle) && (yield this.put("Options", {
                        key: "defaultTitle",
                        value: e.defaultNotificationTitle
                    })), null != e.lastKnownPushEnabled && (yield this.put("Options", {
                        key: "isPushEnabled",
                        value: e.lastKnownPushEnabled
                    })), e.clickedNotifications) {
                    const t = Object.keys(e.clickedNotifications);
                    for (let i of t) {
                        const t = e.clickedNotifications[i];
                        t ? yield this.put("NotificationOpened", {
                            url: i,
                            data: t.data,
                            timestamp: t.timestamp
                        }): null === t && (yield this.remove("NotificationOpened", i))
                    }
                }
            })
        }
        getServiceWorkerState() {
            return S(this, void 0, void 0, function*() {
                const e = new d;
                return e.workerVersion = yield this.get("Ids", "WORKER1_ONE_SIGNAL_SW_VERSION"), e.updaterWorkerVersion = yield this.get("Ids", "WORKER2_ONE_SIGNAL_SW_VERSION"), e.backupNotification = yield this.get("Ids", "backupNotification"), e
            })
        }
        setServiceWorkerState(e) {
            return S(this, void 0, void 0, function*() {
                e.workerVersion && (yield this.put("Ids", {
                    type: "WORKER1_ONE_SIGNAL_SW_VERSION",
                    id: e.workerVersion
                })), e.updaterWorkerVersion && (yield this.put("Ids", {
                    type: "WORKER2_ONE_SIGNAL_SW_VERSION",
                    id: e.updaterWorkerVersion
                })), e.backupNotification && (yield this.put("Ids", {
                    type: "backupNotification",
                    id: e.backupNotification
                }))
            })
        }
        getSubscription() {
            return S(this, void 0, void 0, function*() {
                const e = new l.a;
                e.deviceId = yield this.get("Ids", "userId"), e.subscriptionToken = yield this.get("Ids", "registrationId");
                const t = yield this.get("Options", "optedOut"), i = yield this.get("Options", "subscription"), n = yield this.get("Options", "subscriptionCreatedAt"), r = yield this.get("Options", "subscriptionExpirationTime");
                return e.optedOut = null != t ? t : null != i && !i, e.createdAt = n, e.expirationTime = r, e
            })
        }
        setSubscription(e) {
            return S(this, void 0, void 0, function*() {
                e.deviceId && (yield this.put("Ids", {
                    type: "userId",
                    id: e.deviceId
                })), void 0 !== e.subscriptionToken && (yield this.put("Ids", {
                    type: "registrationId",
                    id: e.subscriptionToken
                })), null != e.optedOut && (yield this.put("Options", {
                    key: "optedOut",
                    value: e.optedOut
                })), null != e.createdAt && (yield this.put("Options", {
                    key: "subscriptionCreatedAt",
                    value: e.createdAt
                })), null != e.expirationTime ? yield this.put("Options", {
                    key: "subscriptionExpirationTime",
                    value: e.expirationTime
                }): yield this.remove("Options", "subscriptionExpirationTime")
            })
        }
        getEmailProfile() {
            return S(this, void 0, void 0, function*() {
                const e = yield this.get("Ids", "emailProfile");
                return e ? f.deserialize(e) : new f
            })
        }
        setEmailProfile(e) {
            return S(this, void 0, void 0, function*() {
                e && (yield this.put("Ids", {
                    type: "emailProfile",
                    id: e.serialize()
                }))
            })
        }
        setProvideUserConsent(e) {
            return S(this, void 0, void 0, function*() {
                yield this.put("Options", {
                    key: "userConsent",
                    value: e
                })
            })
        }
        getProvideUserConsent() {
            return S(this, void 0, void 0, function*() {
                return yield this.get("Options", "userConsent")
            })
        }
        static rebuild() {
            return S(this, void 0, void 0, function*() {
                return Promise.all([y.singletonInstance.remove("Ids"), y.singletonInstance.remove("NotificationOpened"), y.singletonInstance.remove("Options")])
            })
        }
        static on(...e) {
            return S(this, void 0, void 0, function*() {
                return y.singletonInstance.emitter.on.apply(y.singletonInstance.emitter, e)
            })
        }
        static setEmailProfile(e) {
            return S(this, void 0, void 0, function*() {
                return yield y.singletonInstance.setEmailProfile(e)
            })
        }
        static getEmailProfile() {
            return S(this, void 0, void 0, function*() {
                return yield y.singletonInstance.getEmailProfile()
            })
        }
        static setSubscription(e) {
            return S(this, void 0, void 0, function*() {
                return yield y.singletonInstance.setSubscription(e)
            })
        }
        static getSubscription() {
            return S(this, void 0, void 0, function*() {
                return yield y.singletonInstance.getSubscription()
            })
        }
        static setProvideUserConsent(e) {
            return S(this, void 0, void 0, function*() {
                return yield y.singletonInstance.setProvideUserConsent(e)
            })
        }
        static getProvideUserConsent() {
            return S(this, void 0, void 0, function*() {
                return yield y.singletonInstance.getProvideUserConsent()
            })
        }
        static setServiceWorkerState(e) {
            return S(this, void 0, void 0, function*() {
                return yield y.singletonInstance.setServiceWorkerState(e)
            })
        }
        static getServiceWorkerState() {
            return S(this, void 0, void 0, function*() {
                return yield y.singletonInstance.getServiceWorkerState()
            })
        }
        static setAppState(e) {
            return S(this, void 0, void 0, function*() {
                return yield y.singletonInstance.setAppState(e)
            })
        }
        static getAppState() {
            return S(this, void 0, void 0, function*() {
                return yield y.singletonInstance.getAppState()
            })
        }
        static setAppConfig(e) {
            return S(this, void 0, void 0, function*() {
                return yield y.singletonInstance.setAppConfig(e)
            })
        }
        static getAppConfig() {
            return S(this, void 0, void 0, function*() {
                return yield y.singletonInstance.getAppConfig()
            })
        }
        static getExternalUserId() {
            return S(this, void 0, void 0, function*() {
                return yield y.singletonInstance.getExternalUserId()
            })
        }
        static setExternalUserId(e) {
            return S(this, void 0, void 0, function*() {
                yield y.singletonInstance.setExternalUserId(e)
            })
        }
        static remove(e, t) {
            return S(this, void 0, void 0, function*() {
                return yield y.singletonInstance.remove(e, t)
            })
        }
        static put(e, t) {
            return S(this, void 0, void 0, function*() {
                return yield y.singletonInstance.put(e, t)
            })
        }
        static get(e, t) {
            return S(this, void 0, void 0, function*() {
                return yield y.singletonInstance.get(e, t)
            })
        }
    }
    y.EVENTS = m
}, function(e, t, i) {
    "use strict";
    var n;
    ! function(e) {
        e.Development = "Development", e.Staging = "Staging", e.Production = "Production"
    }(n || (n = {}));
    var r = i(24),
        o = i(4),
        InvalidArgumentError = i(13),
        s = i(14),
        a = i(6),
        c = i(9),
        u = i(8);
    i.d(t, "a", function() {
        return l
    });
    var d = function(e, t, i, n) {
        return new(i || (i = Promise))(function(r, o) {
            function s(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                e.done ? r(e.value) : new i(function(t) {
                    t(e.value)
                }).then(s, a)
            }
            c((n = n.apply(e, t || [])).next())
        })
    };
    class l {
        static getBuildEnv() {
            return n.Production
        }
        static getIntegration(e) {
            return d(this, void 0, void 0, function*() {
                if (c.a.isSafari()) return s.a.Secure;
                const t = window === window.top,
                    i = "https:" === window.location.protocol;
                if (void 0 === e) {
                    if ("undefined" == typeof OneSignal || !OneSignal.context || !OneSignal.context.appConfig) throw new InvalidArgumentError.a("usingProxyOrigin", InvalidArgumentError.b.Empty);
                    e = !!OneSignal.context.appConfig.subdomain
                }
                if (t) return i ? e ? s.a.SecureProxy : s.a.Secure : !u.b.isLocalhostAllowedAsSecureOrigin() || "localhost" !== location.hostname && "127.0.0.1" !== location.hostname ? s.a.InsecureProxy : s.a.Secure;
                if (i) {
                    return (yield l.isFrameContextInsecure()) ? s.a.InsecureProxy : e ? s.a.SecureProxy : s.a.Secure
                }
                return s.a.InsecureProxy
            })
        }
        static isFrameContextInsecure() {
            return d(this, void 0, void 0, function*() {
                if (window === window.top || !("serviceWorker" in navigator) || void 0 === navigator.serviceWorker.getRegistration) return !1;
                return !(yield a.b.getRegistration())
            })
        }
        static isInsecureOrigin() {
            return "http:" === window.location.protocol
        }
        static getWindowEnv() {
            return "undefined" == typeof window ? "undefined" != typeof self && void 0 !== self.registration ? o.a.ServiceWorker : o.a.Unknown : window === window.top ? -1 !== location.href.indexOf("initOneSignal") || "/subscribe" === location.pathname && "" === location.search && (location.hostname.endsWith(".onesignal.com") || location.hostname.endsWith(".os.tc") || -1 !== location.hostname.indexOf(".localhost") && l.getBuildEnv() === n.Development) ? o.a.OneSignalSubscriptionPopup : o.a.Host : "/webPushIframe" === location.pathname ? o.a.OneSignalProxyFrame : "/webPushModal" === location.pathname ? o.a.OneSignalSubscriptionModal : o.a.CustomIframe
        }
        static getTestEnv() {
            return r.a.None
        }
        static getBuildEnvPrefix(e = l.getBuildEnv()) {
            switch (e) {
                case n.Development:
                    return "Dev-";
                case n.Staging:
                    return "Staging-";
                case n.Production:
                    return "";
                default:
                    throw new InvalidArgumentError.a("buildEnv", InvalidArgumentError.b.EnumOutOfRange)
            }
        }
        static getOneSignalApiUrl(e = l.getBuildEnv()) {
            switch (e) {
                case n.Development:
                    return new URL("https://localhost:3001/api/v1");
                case n.Staging:
                    return new URL(`https://${window.location.host}/api/v1`);
                case n.Production:
                    return new URL("https://onesignal.com/api/v1");
                default:
                    throw new InvalidArgumentError.a("buildEnv", InvalidArgumentError.b.EnumOutOfRange)
            }
        }
        static getOneSignalResourceUrlPath(e = l.getBuildEnv()) {
            const t = l.getOneSignalApiUrl(e).origin;
            let i;
            switch (e) {
                case n.Development:
                case n.Staging:
                case n.Production:
                    i = "/sdks";
                    break;
                default:
                    throw new InvalidArgumentError.a("buildEnv", InvalidArgumentError.b.EnumOutOfRange)
            }
            return new URL(t + i)
        }
        static getOneSignalCssFileName(e = l.getBuildEnv()) {
            switch (e) {
                case n.Development:
                    return "Dev-OneSignalSDKStyles.css";
                case n.Staging:
                    return "Staging-OneSignalSDKStyles.css";
                case n.Production:
                    return "OneSignalSDKStyles.css";
                default:
                    throw new InvalidArgumentError.a("buildEnv", InvalidArgumentError.b.EnumOutOfRange)
            }
        }
    }
}, function(e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function() {
            return n
        }),
        function(e) {
            e.ServiceWorker = "ServiceWorker", e.Host = "Host", e.OneSignalSubscriptionPopup = "Popup", e.OneSignalSubscriptionModal = "Modal", e.OneSignalProxyFrame = "ProxyFrame", e.CustomIframe = "CustomFrame", e.Unknown = "Unknown"
        }(n || (n = {}))
}, function(e, t, i) {
    var n;
    n = function() {
        var e = !0;

        function t(t) {
            function i(e) {
                var i = t.match(e);
                return i && i.length > 1 && i[1] || ""
            }
            var n, r, o, s = i(/(ipod|iphone|ipad)/i).toLowerCase(),
                a = !/like android/i.test(t) && /android/i.test(t),
                c = /nexus\s*[0-6]\s*/i.test(t),
                u = !c && /nexus\s*[0-9]+/i.test(t),
                d = /CrOS/.test(t),
                l = /silk/i.test(t),
                p = /sailfish/i.test(t),
                g = /tizen/i.test(t),
                f = /(web|hpw)os/i.test(t),
                h = /windows phone/i.test(t),
                b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
                m = !s && !l && /macintosh/i.test(t),
                v = !a && !p && !g && !f && /linux/i.test(t),
                S = i(/edge\/(\d+(\.\d+)?)/i),
                y = i(/version\/(\d+(\.\d+)?)/i),
                w = /tablet/i.test(t) && !/tablet pc/i.test(t),
                P = !w && /[^-]mobi/i.test(t),
                O = /xbox/i.test(t);
            /opera/i.test(t) ? n = {
                name: "Opera",
                opera: e,
                version: y || i(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
            } : /opr\/|opios/i.test(t) ? n = {
                name: "Opera",
                opera: e,
                version: i(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || y
            } : /SamsungBrowser/i.test(t) ? n = {
                name: "Samsung Internet for Android",
                samsungBrowser: e,
                version: y || i(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
            } : /coast/i.test(t) ? n = {
                name: "Opera Coast",
                coast: e,
                version: y || i(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
            } : /yabrowser/i.test(t) ? n = {
                name: "Yandex Browser",
                yandexbrowser: e,
                version: y || i(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
            } : /ucbrowser/i.test(t) ? n = {
                name: "UC Browser",
                ucbrowser: e,
                version: i(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
            } : /mxios/i.test(t) ? n = {
                name: "Maxthon",
                maxthon: e,
                version: i(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
            } : /epiphany/i.test(t) ? n = {
                name: "Epiphany",
                epiphany: e,
                version: i(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
            } : /puffin/i.test(t) ? n = {
                name: "Puffin",
                puffin: e,
                version: i(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
            } : /sleipnir/i.test(t) ? n = {
                name: "Sleipnir",
                sleipnir: e,
                version: i(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
            } : /k-meleon/i.test(t) ? n = {
                name: "K-Meleon",
                kMeleon: e,
                version: i(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
            } : h ? (n = {
                name: "Windows Phone",
                windowsphone: e
            }, S ? (n.msedge = e, n.version = S) : (n.msie = e, n.version = i(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
                name: "Internet Explorer",
                msie: e,
                version: i(/(?:msie |rv:)(\d+(\.\d+)?)/i)
            } : d ? n = {
                name: "Chrome",
                chromeos: e,
                chromeBook: e,
                chrome: e,
                version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
            } : /chrome.+? edge/i.test(t) ? n = {
                name: "Microsoft Edge",
                msedge: e,
                version: S
            } : /vivaldi/i.test(t) ? n = {
                name: "Vivaldi",
                vivaldi: e,
                version: i(/vivaldi\/(\d+(\.\d+)?)/i) || y
            } : p ? n = {
                name: "Sailfish",
                sailfish: e,
                version: i(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
            } : /seamonkey\//i.test(t) ? n = {
                name: "SeaMonkey",
                seamonkey: e,
                version: i(/seamonkey\/(\d+(\.\d+)?)/i)
            } : /firefox|iceweasel|fxios/i.test(t) ? (n = {
                name: "Firefox",
                firefox: e,
                version: i(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
            }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (n.firefoxos = e)) : l ? n = {
                name: "Amazon Silk",
                silk: e,
                version: i(/silk\/(\d+(\.\d+)?)/i)
            } : /phantom/i.test(t) ? n = {
                name: "PhantomJS",
                phantom: e,
                version: i(/phantomjs\/(\d+(\.\d+)?)/i)
            } : /slimerjs/i.test(t) ? n = {
                name: "SlimerJS",
                slimer: e,
                version: i(/slimerjs\/(\d+(\.\d+)?)/i)
            } : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? n = {
                name: "BlackBerry",
                blackberry: e,
                version: y || i(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
            } : f ? (n = {
                name: "WebOS",
                webos: e,
                version: y || i(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
            }, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
                name: "Bada",
                bada: e,
                version: i(/dolfin\/(\d+(\.\d+)?)/i)
            } : g ? n = {
                name: "Tizen",
                tizen: e,
                version: i(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y
            } : /qupzilla/i.test(t) ? n = {
                name: "QupZilla",
                qupzilla: e,
                version: i(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || y
            } : /chromium/i.test(t) ? n = {
                name: "Chromium",
                chromium: e,
                version: i(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || y
            } : /chrome|crios|crmo/i.test(t) ? n = {
                name: "Chrome",
                chrome: e,
                version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
            } : a ? n = {
                name: "Android",
                version: y
            } : /safari|applewebkit/i.test(t) ? (n = {
                name: "Safari",
                safari: e
            }, y && (n.version = y)) : s ? (n = {
                name: "iphone" == s ? "iPhone" : "ipad" == s ? "iPad" : "iPod"
            }, y && (n.version = y)) : n = /googlebot/i.test(t) ? {
                name: "Googlebot",
                googlebot: e,
                version: i(/googlebot\/(\d+(\.\d+))/i) || y
            } : {
                name: i(/^(.*)\/(.*) /),
                version: (r = /^(.*)\/(.*) /, o = t.match(r), o && o.length > 1 && o[2] || "")
            }, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && y && (n.version = y)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || i(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || n.msedge || !a && !n.silk ? n.windowsphone || n.msedge || !s ? m ? n.mac = e : O ? n.xbox = e : b ? n.windows = e : v && (n.linux = e) : (n[s] = e, n.ios = e) : n.android = e;
            var k = "";
            n.windows ? k = function(e) {
                switch (e) {
                    case "NT":
                        return "NT";
                    case "XP":
                        return "XP";
                    case "NT 5.0":
                        return "2000";
                    case "NT 5.1":
                        return "XP";
                    case "NT 5.2":
                        return "2003";
                    case "NT 6.0":
                        return "Vista";
                    case "NT 6.1":
                        return "7";
                    case "NT 6.2":
                        return "8";
                    case "NT 6.3":
                        return "8.1";
                    case "NT 10.0":
                        return "10";
                    default:
                        return
                }
            }(i(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? k = i(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? k = (k = i(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : s ? k = (k = i(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? k = i(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? k = i(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? k = i(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? k = i(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (k = i(/tizen[\/\s](\d+(\.\d+)*)/i)), k && (n.osversion = k);
            var I = !n.windows && k.split(".")[0];
            return w || u || "ipad" == s || a && (3 == I || I >= 4 && !P) || n.silk ? n.tablet = e : (P || "iphone" == s || "ipod" == s || a || c || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
        }
        var i = t("undefined" != typeof navigator && navigator.userAgent || "");

        function n(e) {
            return e.split(".").length
        }

        function r(e, t) {
            var i, n = [];
            if (Array.prototype.map) return Array.prototype.map.call(e, t);
            for (i = 0; i < e.length; i++) n.push(t(e[i]));
            return n
        }

        function o(e) {
            for (var t = Math.max(n(e[0]), n(e[1])), i = r(e, function(e) {
                    var i = t - n(e);
                    return r((e += new Array(i + 1).join(".0")).split("."), function(e) {
                        return new Array(20 - e.length).join("0") + e
                    }).reverse()
                }); --t >= 0;) {
                if (i[0][t] > i[1][t]) return 1;
                if (i[0][t] !== i[1][t]) return -1;
                if (0 === t) return 0
            }
        }

        function s(e, n, r) {
            var s = i;
            "string" == typeof n && (r = n, n = void 0), void 0 === n && (n = !1), r && (s = t(r));
            var a = "" + s.version;
            for (var c in e)
                if (e.hasOwnProperty(c) && s[c]) {
                    if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
                    return o([a, e[c]]) < 0
                } return n
        }
        return i.test = function(e) {
            for (var t = 0; t < e.length; ++t) {
                var n = e[t];
                if ("string" == typeof n && n in i) return !0
            }
            return !1
        }, i.isUnsupportedBrowser = s, i.compareVersions = o, i.check = function(e, t, i) {
            return !s(e, t, i)
        }, i._detect = t, i
    }, void 0 !== e && e.exports ? e.exports = n() : i(35)("bowser", n)
}, function(e, t, i) {
    "use strict";
    i.d(t, "b", function() {
        return c
    }), i.d(t, "a", function() {
        return n
    });
    var n, r = i(0),
        o = i(12),
        s = i(8),
        a = function(e, t, i, n) {
            return new(i || (i = Promise))(function(r, o) {
                function s(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    e.done ? r(e.value) : new i(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                c((n = n.apply(e, t || [])).next())
            })
        };
    class c {
        static getRegistration() {
            return a(this, void 0, void 0, function*() {
                try {
                    return yield navigator.serviceWorker.getRegistration(location.href)
                } catch (e) {
                    return r.a.warn("[Service Worker Status] Error Checking service worker registration", location.href, e), null
                }
            })
        }
        static getServiceWorkerHref(e, t) {
            let i = "";
            if (e === n.WorkerA) i = t.workerBPath.getFullPath();
            else if (e === n.WorkerB || e === n.ThirdParty || e === n.None) i = t.workerAPath.getFullPath();
            else if (e === n.Bypassed) throw new o.a(o.b.UnsupportedEnvironment);
            return new URL(i, s.a.getBaseUrl()).href
        }
    }! function(e) {
        e.WorkerA = "Worker A (Main)", e.WorkerB = "Worker B (Updater)", e.ThirdParty = "3rd Party", e.Installing = "Installing", e.None = "None", e.Bypassed = "Bypassed", e.Indeterminate = "Indeterminate"
    }(n || (n = {}))
}, function(e, t, i) {
    "use strict";
    i.d(t, "b", function() {
        return n
    }), i.d(t, "a", function() {
        return p
    });
    var n, r = i(13),
        o = i(3),
        s = i(6),
        a = i(4),
        c = i(9),
        u = i(0),
        d = function(e, t, i, n) {
            return new(i || (i = Promise))(function(r, o) {
                function s(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    e.done ? r(e.value) : new i(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                c((n = n.apply(e, t || [])).next())
            })
        };
    ! function(e) {
        e.WorkerVersion = "GetWorkerVersion", e.Subscribe = "Subscribe", e.SubscribeNew = "SubscribeNew", e.AmpSubscriptionState = "amp-web-push-subscription-state", e.AmpSubscribe = "amp-web-push-subscribe", e.AmpUnsubscribe = "amp-web-push-unsubscribe", e.NotificationDisplayed = "notification.displayed", e.NotificationClicked = "notification.clicked", e.NotificationDismissed = "notification.dismissed", e.RedirectPage = "command.redirect"
    }(n || (n = {}));
    class l {
        constructor() {
            this.replies = {}
        }
        addListener(e, t, i) {
            const n = {
                    callback: t,
                    onceListenerOnly: i
                },
                r = this.replies[e.toString()];
            r ? r.push(n) : this.replies[e.toString()] = [n]
        }
        findListenersForMessage(e) {
            return this.replies[e.toString()] || []
        }
        deleteListenerRecords(e) {
            this.replies[e.toString()] = null
        }
        deleteAllListenerRecords() {
            this.replies = {}
        }
        deleteListenerRecord(e, t) {
            const i = this.replies[e.toString()];
            if (null != i)
                for (let e = i.length - 1; e >= 0; e--) {
                    i[e] === t && i.splice(e, 1)
                }
        }
    }
    class p {
        constructor(e, t = new l) {
            this.context = e, this.replies = t
        }
        broadcast(e, t) {
            return d(this, void 0, void 0, function*() {
                if (o.a.getWindowEnv() === a.a.ServiceWorker) {
                    const i = yield self.clients.matchAll({
                        type: "window",
                        includeUncontrolled: !0
                    });
                    for (let n of i) u.a.debug(`[Worker Messenger] [SW -> Page] Broadcasting '${e.toString()}' to window client ${n.url}.`), n.postMessage({
                        command: e,
                        payload: t
                    })
                }
            })
        }
        unicast(e, t, i) {
            return d(this, void 0, void 0, function*() {
                if (o.a.getWindowEnv() === a.a.ServiceWorker) {
                    if (!i) throw new r.a("windowClient", r.b.Empty);
                    u.a.debug(`[Worker Messenger] [SW -> Page] Unicasting '${e.toString()}' to window client ${i.url}.`), i.postMessage({
                        command: e,
                        payload: t
                    })
                } else(yield this.isWorkerControllingPage()) || u.a.debug("[Worker Messenger] The page is not controlled by the service worker yet. Waiting...", self.registration), yield this.waitUntilWorkerControlsPage(), u.a.debug(`[Worker Messenger] [Page -> SW] Unicasting '${e.toString()}' to service worker.`), navigator.serviceWorker.controller.postMessage({
                    command: e,
                    payload: t
                })
            })
        }
        listen(e) {
            return d(this, void 0, void 0, function*() {
                if (!c.a.supportsServiceWorkers()) return;
                o.a.getWindowEnv() === a.a.ServiceWorker ? (self.addEventListener("message", this.onWorkerMessageReceivedFromPage.bind(this)), u.a.debug("[Worker Messenger] Service worker is now listening for messages.")) : yield this.listenForPage(e)
            })
        }
        listenForPage(e) {
            return d(this, void 0, void 0, function*() {
                e || ((yield this.isWorkerControllingPage()) || u.a.debug(`(${location.origin}) [Worker Messenger] The page is not controlled by the service worker yet. Waiting...`, self.registration), yield this.waitUntilWorkerControlsPage(), u.a.debug(`(${location.origin}) [Worker Messenger] The page is now controlled by the service worker.`)), navigator.serviceWorker.addEventListener("message", this.onPageMessageReceivedFromServiceWorker.bind(this)), u.a.debug(`(${location.origin}) [Worker Messenger] Page is now listening for messages.`)
            })
        }
        onWorkerMessageReceivedFromPage(e) {
            const t = e.data;
            if (!t || !t.command) return;
            const i = this.replies.findListenersForMessage(t.command),
                n = [],
                r = [];
            u.a.debug("[Worker Messenger] Service worker received message:", e.data);
            for (let e of i) e.onceListenerOnly && n.push(e), r.push(e);
            for (let e = n.length - 1; e >= 0; e--) {
                const i = n[e];
                this.replies.deleteListenerRecord(t.command, i)
            }
            for (let e of r) e.callback.apply(null, [t.payload])
        }
        onPageMessageReceivedFromServiceWorker(e) {
            const t = e.data;
            if (!t || !t.command) return;
            const i = this.replies.findListenersForMessage(t.command),
                n = [],
                r = [];
            u.a.debug("[Worker Messenger] Page received message:", e.data);
            for (let e of i) e.onceListenerOnly && n.push(e), r.push(e);
            for (let e = n.length - 1; e >= 0; e--) {
                const i = n[e];
                this.replies.deleteListenerRecord(t.command, i)
            }
            for (let e of r) e.callback.apply(null, [t.payload])
        }
        on(e, t) {
            this.replies.addListener(e, t, !1)
        }
        once(e, t) {
            this.replies.addListener(e, t, !0)
        }
        off(e) {
            e ? this.replies.deleteListenerRecords(e) : this.replies.deleteAllListenerRecords()
        }
        isWorkerControllingPage() {
            return d(this, void 0, void 0, function*() {
                if (o.a.getWindowEnv() === a.a.ServiceWorker) return !!self.registration.active; {
                    const e = yield this.context.serviceWorkerManager.getActiveState();
                    return e === s.a.WorkerA || e === s.a.WorkerB
                }
            })
        }
        waitUntilWorkerControlsPage() {
            return d(this, void 0, void 0, function*() {
                return new Promise(e => d(this, void 0, void 0, function*() {
                    if (yield this.isWorkerControllingPage()) e();
                    else {
                        o.a.getWindowEnv() === a.a.ServiceWorker ? self.addEventListener("activate", t => d(this, void 0, void 0, function*() {
                            (yield this.isWorkerControllingPage()) && e()
                        })) : navigator.serviceWorker.addEventListener("controllerchange", t => d(this, void 0, void 0, function*() {
                            (yield this.isWorkerControllingPage()) && e()
                        }))
                    }
                }))
            })
        }
    }
}, function(e, t, i) {
    "use strict";
    (function(e) {
        i.d(t, "a", function() {
            return d
        });
        var n = i(5),
            r = i.n(n),
            o = i(3),
            s = i(4),
            a = i(0),
            c = i(1),
            u = i(33);
        class d {
            static getBaseUrl() {
                return location.origin
            }
            static isLocalhostAllowedAsSecureOrigin() {
                return OneSignal.config && OneSignal.config.userConfig && !0 === OneSignal.config.userConfig.allowLocalhostAsSecureOrigin
            }
            static isUsingSubscriptionWorkaround() {
                const e = o.a.getWindowEnv();
                if (!OneSignal.config) throw new Error(`(${e.toString()}) isUsingSubscriptionWorkaround() cannot be called until OneSignal.config exists.`);
                if (r.a.safari) return !1;
                const t = this.isLocalhostAllowedAsSecureOrigin();
                return d.internalIsUsingSubscriptionWorkaround(OneSignal.config.subdomain, t)
            }
            static internalIsUsingSubscriptionWorkaround(e, t) {
                if (r.a.safari) return !1;
                if (!0 === t && ("localhost" === location.hostname || "127.0.0.1" === location.hostname)) return !1;
                const i = o.a.getWindowEnv();
                return !(i !== s.a.Host && i !== s.a.CustomIframe || !e && "http:" !== location.protocol)
            }
            static redetectBrowserUserAgent() {
                return Object(u.a)()
            }
            static isValidUuid(e) {
                return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(e)
            }
            static getRandomUuid() {
                let t = "";
                const i = "undefined" == typeof window ? e.crypto : window.crypto || window.msCrypto;
                return t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, i ? function(e) {
                    var t = i.getRandomValues(new Uint8Array(1))[0] % 16 | 0;
                    return ("x" == e ? t : 3 & t | 8).toString(16)
                } : function(e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" == e ? t : 3 & t | 8).toString(16)
                })
            }
            static logMethodCall(e, ...t) {
                return a.a.debug(`Called %c${e}(${t.map(c.a.stringify).join(", ")})`, c.a.getConsoleStyle("code"), ".")
            }
        }
        t.b = d
    }).call(this, i(32))
}, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return a
    });
    var n = i(3),
        r = i(4),
        o = i(5),
        s = i.n(o);
    class a {
        static isBrowser() {
            return "undefined" != typeof window
        }
        static isSafari() {
            return a.isBrowser() && s.a.safari
        }
        static version() {
            return Number(150706)
        }
        static get TRADITIONAL_CHINESE_LANGUAGE_TAG() {
            return ["tw", "hant"]
        }
        static get SIMPLIFIED_CHINESE_LANGUAGE_TAG() {
            return ["cn", "hans"]
        }
        static getLanguage() {
            let e = navigator.language;
            if (e) {
                let t = (e = e.toLowerCase()).split("-");
                if ("zh" == t[0]) {
                    for (let e of a.TRADITIONAL_CHINESE_LANGUAGE_TAG)
                        if (-1 !== t.indexOf(e)) return "zh-Hant";
                    for (let e of a.SIMPLIFIED_CHINESE_LANGUAGE_TAG)
                        if (-1 !== t.indexOf(e)) return "zh-Hans";
                    return "zh-Hant"
                }
                return t[0].substring(0, 2)
            }
            return "en"
        }
        static supportsServiceWorkers() {
            switch (n.a.getWindowEnv()) {
                case r.a.ServiceWorker:
                    return !0;
                default:
                    return "undefined" != typeof navigator && "serviceWorker" in navigator
            }
        }
        static getSdkStylesVersionHash() {
            return "undefined" == typeof __SRC_STYLESHEETS_MD5_HASH__ ? "1" : __SRC_STYLESHEETS_MD5_HASH__
        }
    }
}, function(e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function() {
            return n
        }),
        function(e) {
            e[e.Default = 0] = "Default", e[e.Subscribed = 1] = "Subscribed", e[e.MutedByApi = -2] = "MutedByApi", e[e.NotSubscribed = -10] = "NotSubscribed", e[e.TemporaryWebRecord = -20] = "TemporaryWebRecord", e[e.PermissionRevoked = -21] = "PermissionRevoked", e[e.PushSubscriptionRevoked = -22] = "PushSubscriptionRevoked", e[e.ServiceWorkerStatus403 = -23] = "ServiceWorkerStatus403", e[e.ServiceWorkerStatus404 = -24] = "ServiceWorkerStatus404"
        }(n || (n = {}))
}, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return n
    });
    class n extends Error {
        constructor(e = "") {
            super(e), Object.defineProperty(this, "message", {
                configurable: !0,
                enumerable: !1,
                value: e,
                writable: !0
            }), Object.defineProperty(this, "name", {
                configurable: !0,
                enumerable: !1,
                value: this.constructor.name,
                writable: !0
            }), Error.hasOwnProperty("captureStackTrace") ? Error.captureStackTrace(this, this.constructor) : (Object.defineProperty(this, "stack", {
                configurable: !0,
                enumerable: !1,
                value: new Error(e).stack,
                writable: !0
            }), Object.setPrototypeOf(this, n.prototype))
        }
    }
}, function(e, t, i) {
    "use strict";
    var n, r, o, s = i(11);
    ! function(e) {
        e[e.HttpsPermissionRequest = "HTTPS permission request"] = "HttpsPermissionRequest", e[e.FullscreenHttpPermissionMessage = "fullscreen HTTP permission message"] = "FullscreenHttpPermissionMessage", e[e.FullscreenHttpsPermissionMessage = "fullscreen HTTPS permission message"] = "FullscreenHttpsPermissionMessage", e[e.SlidedownPermissionMessage = "slidedown permission message"] = "SlidedownPermissionMessage", e[e.SubscriptionBell = "subscription bell"] = "SubscriptionBell"
    }(n || (n = {})), i.d(t, "b", function() {
        return r
    }), i.d(t, "a", function() {
        return a
    }), (o = r || (r = {}))[o.MissingAppId = 0] = "MissingAppId", o[o.RedundantPermissionMessage = 1] = "RedundantPermissionMessage", o[o.PushPermissionAlreadyGranted = 2] = "PushPermissionAlreadyGranted", o[o.UnsupportedEnvironment = 3] = "UnsupportedEnvironment", o[o.MissingDomElement = 4] = "MissingDomElement", o[o.ServiceWorkerNotActivated = 5] = "ServiceWorkerNotActivated", o[o.NoProxyFrame = 6] = "NoProxyFrame";
    class a extends s.a {
        constructor(e, t) {
            switch (e) {
                case r.MissingAppId:
                    super("Missing required app ID.");
                    break;
                case r.RedundantPermissionMessage:
                    let i = "";
                    t && t.permissionPromptType && (i = `(${n[t.permissionPromptType]})`), super(`Another permission message ${i} is being displayed.`);
                    break;
                case r.PushPermissionAlreadyGranted:
                    super("Push permission has already been granted.");
                    break;
                case r.UnsupportedEnvironment:
                    super("The current environment does not support this operation.");
                    break;
                case r.ServiceWorkerNotActivated:
                    super("The service worker must be activated first.");
                    break;
                case r.NoProxyFrame:
                    super("No proxy frame.")
            }
            this.description = r[e], this.reason = e, Object.setPrototypeOf(this, a.prototype)
        }
    }
}, function(e, t, i) {
    "use strict";
    i.d(t, "b", function() {
        return n
    }), i.d(t, "a", function() {
        return InvalidArgumentError
    });
    var n, r = i(11);
    ! function(e) {
        e[e.Empty = 0] = "Empty", e[e.Malformed = 1] = "Malformed", e[e.EnumOutOfRange = 2] = "EnumOutOfRange"
    }(n || (n = {}));
    class InvalidArgumentError extends r.a {
        constructor(e, t) {
            switch (t) {
                case n.Empty:
                    super(`Supply a non-empty value to '${e}'.`);
                    break;
                case n.Malformed:
                    super(`The value for '${e}' was malformed.`);
                    break;
                case n.EnumOutOfRange:
                    super(`The value for '${e}' was out of range of the expected input enum.`)
            }
            this.argument = e, this.reason = n[t], Object.setPrototypeOf(this, InvalidArgumentError.prototype)
        }
    }
}, function(e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function() {
            return n
        }),
        function(e) {
            e.Secure = "Secure", e.SecureProxy = "Secure Proxy", e.InsecureProxy = "Insecure Proxy"
        }(n || (n = {}))
}, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return a
    });
    var n = i(9),
        r = i(3),
        o = i(1),
        s = i(21);
    class a {
        static get(e, t, i) {
            return a.call("GET", e, t, i)
        }
        static post(e, t, i) {
            return a.call("POST", e, t, i)
        }
        static put(e, t, i) {
            return a.call("PUT", e, t, i)
        }
        static delete(e, t, i) {
            return a.call("DELETE", e, t, i)
        }
        static call(e, t, i, o) {
            if ("GET" === e) {
                if (t.indexOf("players") > -1 && -1 === t.indexOf("app_id=")) return console.error("Calls to player api are not permitted without app_id"), Promise.reject(new s.a(s.b.MissingAppId))
            } else if (t.indexOf("players") > -1 && (!i || !i.app_id)) return console.error("Calls to player api are not permitted without app_id"), Promise.reject(new s.a(s.b.MissingAppId));
            let c = new Headers;
            if (c.append("SDK-Version", `onesignal/web/${n.a.version()}`), c.append("Content-Type", "application/json;charset=UTF-8"), o)
                for (let e of Object.keys(o)) c.append(e, o[e]);
            let u, d = {
                method: e || "NO_METHOD_SPECIFIED",
                headers: c,
                cache: "no-cache"
            };
            return i && (d.body = JSON.stringify(i)), fetch(r.a.getOneSignalApiUrl().toString() + "/" + t, d).then(e => (u = e.status, e.json())).then(e => {
                if (u >= 200 && u < 300) return e;
                if ("no-user-id-error" !== a.identifyError(e)) return Promise.reject(e)
            })
        }
        static identifyError(e) {
            if (!e || !e.errors) return "no-error";
            let t = e.errors;
            return o.a.contains(t, "No user with this id found") || o.a.contains(t, "Could not find app_id for given player id.") ? "no-user-id-error" : "unknown-error"
        }
    }
    t.b = a
}, function(e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function() {
            return n
        }),
        function(e) {
            e.Default = "default", e.Granted = "granted", e.Denied = "denied"
        }(n || (n = {}))
}, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return r
    });
    var n = i(11);
    class r extends n.a {
        constructor() {
            super("This code is not implemented yet."), Object.setPrototypeOf(this, r.prototype)
        }
    }
}, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return p
    });
    var n = i(9),
        r = i(3),
        o = i(4),
        s = i(0),
        a = i(1),
        c = function(e, t, i, n) {
            return new(i || (i = Promise))(function(r, o) {
                function s(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    e.done ? r(e.value) : new i(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                c((n = n.apply(e, t || [])).next())
            })
        };
    const u = ["notifyButtonHovering", "notifyButtonHover", "notifyButtonButtonClick", "notifyButtonLauncherClick", "animatedElementHiding", "animatedElementHidden", "animatedElementShowing", "animatedElementShown", "activeAnimatedElementActivating", "activeAnimatedElementActive", "activeAnimatedElementInactivating", "activeAnimatedElementInactive", "dbRetrieved", "dbSet", "testEvent"],
        d = ["onesignal.prompt.custom.clicked", "onesignal.prompt.native.permissionchanged", "onesignal.subscription.changed", "onesignal.internal.subscriptionset", "dbRebuilt", "initialize", "subscriptionSet", "sendWelcomeNotification", "subscriptionChange", "notificationPermissionChange", "dbSet", "register", "notificationDisplay", "notificationDismiss", "notificationClick", "permissionPromptDisplay", "testWouldDisplay", "testInitOptionDisabled", "popupWindowTimeout"],
        l = {
            notificationPermissionChange: "onesignal.prompt.native.permissionchanged",
            subscriptionChange: "onesignal.subscription.changed",
            customPromptClick: "onesignal.prompt.custom.clicked"
        };
    class p {
        static trigger(e, t, i = null) {
            return c(this, void 0, void 0, function*() {
                if (!a.b.contains(u, e)) {
                    let n = t,
                        o = a.b.capitalize(r.a.getWindowEnv().toString());
                    i && (o = `${o} тм╕ ${a.b.capitalize(i)}`), n || !1 === n ? s.a.debug(`(${o}) ┬╗ %c${e}:`, a.b.getConsoleStyle("event"), n) : s.a.debug(`(${o}) ┬╗ %c${e}`, a.b.getConsoleStyle("event"))
                }
                if (n.a.isBrowser()) {
                    if (e === OneSignal.EVENTS.SDK_INITIALIZED) {
                        if (OneSignal.initialized) return;
                        OneSignal.initialized = !0
                    }
                    yield OneSignal.emitter.emit(e, t)
                }
                if (l.hasOwnProperty(e)) {
                    let i = l[e];
                    p._triggerLegacy(i, t)
                }
                if (n.a.isBrowser() && (r.a.getWindowEnv() === o.a.OneSignalSubscriptionPopup || r.a.getWindowEnv() === o.a.OneSignalProxyFrame)) {
                    opener || parent ? a.b.contains(d, e) && (r.a.getWindowEnv() === o.a.OneSignalSubscriptionPopup ? OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, {
                        eventName: e,
                        eventData: t
                    }) : OneSignal.proxyFrame.retriggerRemoteEvent(e, t)) : s.a.error(`Could not send event '${e}' back to host page because no creator (opener or parent) found!`)
                }
            })
        }
        static _triggerLegacy(e, t) {
            const i = new CustomEvent(e, {
                bubbles: !0,
                cancelable: !0,
                detail: t
            });
            window.dispatchEvent(i)
        }
    }
}, function(e, t, i) {
    "use strict";
    i.d(t, "b", function() {
        return n
    }), i.d(t, "a", function() {
        return SdkInitError
    });
    var n, r = i(11);
    ! function(e) {
        e[e.InvalidAppId = 0] = "InvalidAppId", e[e.AppNotConfiguredForWebPush = 1] = "AppNotConfiguredForWebPush", e[e.MissingSubdomain = 2] = "MissingSubdomain", e[e.WrongSiteUrl = 3] = "WrongSiteUrl", e[e.MultipleInitialization = 4] = "MultipleInitialization", e[e.MissingSafariWebId = 5] = "MissingSafariWebId", e[e.Unknown = 6] = "Unknown"
    }(n || (n = {}));
    class SdkInitError extends r.a {
        constructor(e, t) {
            switch (e) {
                case n.InvalidAppId:
                    super("OneSignal: This app ID does not match any existing app. Double check your app ID.");
                    break;
                case n.AppNotConfiguredForWebPush:
                    super("OneSignal: This app ID does not have any web platforms enabled. Double check your app ID, or see step 1 on our setup guide (https://goo.gl/01h7fZ).");
                    break;
                case n.MissingSubdomain:
                    super("OneSignal: Non-HTTPS pages require a subdomain of OneSignal to be chosen on your dashboard. See step 1.4 on our setup guide (https://goo.gl/xip6JB).");
                    break;
                case n.WrongSiteUrl:
                    t && t.siteUrl ? super(`OneSignal: This web push config can only be used on ${new URL(t.siteUrl).origin}. Your current origin is ${location.origin}.`) : super("OneSignal: This web push config can not be used on the current site.");
                    break;
                case n.MultipleInitialization:
                    super("OneSignal: The OneSignal web SDK can only be initialized once. Extra initializations are ignored. Please remove calls initializing the SDK more than once.");
                    break;
                case n.MissingSafariWebId:
                    super("OneSignal: Safari browser support on Mac OS X requires the Safari web platform to be enabled. Please see the Safari Support steps in our web setup guide.");
                    break;
                case n.Unknown:
                    super("OneSignal: An unknown initialization error occurred.")
            }
            this.reason = n[e], Object.setPrototypeOf(this, SdkInitError.prototype)
        }
    }
}, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return n
    });
    class n {
        isNewSubscription() {
            return this.existingW3cPushSubscription ? !!this.existingW3cPushSubscription.w3cEndpoint != !!this.w3cEndpoint || (!(!this.existingW3cPushSubscription.w3cEndpoint || !this.w3cEndpoint || this.existingW3cPushSubscription.w3cEndpoint.toString() === this.w3cEndpoint.toString()) || (this.existingW3cPushSubscription.w3cP256dh !== this.w3cP256dh || this.existingW3cPushSubscription.w3cAuth !== this.w3cAuth)) : !this.existingSafariDeviceToken || this.existingSafariDeviceToken !== this.safariDeviceToken
        }
        static setFromW3cSubscription(e) {
            const t = new n;
            if (e && (t.w3cEndpoint = new URL(e.endpoint), e.getKey)) {
                let i = null;
                try {
                    i = e.getKey("p256dh")
                } catch (e) {}
                let n = null;
                try {
                    n = e.getKey("auth")
                } catch (e) {}
                if (i) {
                    let e = btoa(String.fromCharCode.apply(null, new Uint8Array(i)));
                    t.w3cP256dh = e
                }
                if (n) {
                    let e = btoa(String.fromCharCode.apply(null, new Uint8Array(n)));
                    t.w3cAuth = e
                }
            }
            return t
        }
        setFromSafariSubscription(e) {
            this.safariDeviceToken = e
        }
        serialize() {
            return {
                w3cEndpoint: this.w3cEndpoint ? this.w3cEndpoint.toString() : null,
                w3cP256dh: this.w3cP256dh,
                w3cAuth: this.w3cAuth,
                safariDeviceToken: this.safariDeviceToken,
                existingPushSubscription: this.existingW3cPushSubscription ? this.existingW3cPushSubscription.serialize() : null,
                existingSafariDeviceToken: this.existingSafariDeviceToken
            }
        }
        static deserialize(e) {
            const t = new n;
            if (!e) return t;
            try {
                t.w3cEndpoint = new URL(e.w3cEndpoint)
            } catch (e) {}
            return t.w3cP256dh = e.w3cP256dh, t.w3cAuth = e.w3cAuth, t.existingW3cPushSubscription = void 0, e.existingW3cPushSubscription ? t.existingW3cPushSubscription = n.deserialize(e.existingW3cPushSubscription) : e.existingPushSubscription && (t.existingW3cPushSubscription = n.deserialize(e.existingPushSubscription)), t.safariDeviceToken = e.safariDeviceToken, t.existingSafariDeviceToken = e.existingSafariDeviceToken, t
        }
    }
}, function(e, t, i) {
    "use strict";
    i.d(t, "b", function() {
        return n
    }), i.d(t, "a", function() {
        return o
    });
    var n, r = i(11);
    ! function(e) {
        e[e.MissingAppId = 0] = "MissingAppId"
    }(n || (n = {}));
    class o extends r.a {
        constructor(e) {
            switch (e) {
                case n.MissingAppId:
                    super("The API call is missing an app ID.")
            }
            Object.setPrototypeOf(this, o.prototype)
        }
    }
}, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return c
    });
    var n = i(5),
        r = i.n(n),
        o = i(17),
        s = i(10),
        a = i(28);
    class c extends a.a {
        constructor(e) {
            super(), this.subscription = e
        }
        serialize() {
            const e = super.serialize();
            return this.subscription && (e.identifier = r.a.safari ? this.subscription.safariDeviceToken : this.subscription.w3cEndpoint ? this.subscription.w3cEndpoint.toString() : null, e.web_auth = this.subscription.w3cAuth, e.web_p256 = this.subscription.w3cP256dh), e
        }
        static createFromPushSubscription(e, t, i) {
            const n = new c(t);
            return n.appId = e, n.subscriptionState = t ? s.a.Subscribed : s.a.NotSubscribed, i && (n.subscriptionState = i), n
        }
        deserialize(e) {
            throw new o.a
        }
    }
}, function(e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function() {
            return n
        }),
        function(e) {
            e[e.ChromeLike = 5] = "ChromeLike", e[e.Safari = 7] = "Safari", e[e.Firefox = 8] = "Firefox", e[e.Edge = 12] = "Edge", e[e.Email = 11] = "Email"
        }(n || (n = {}))
}, function(e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function() {
            return n
        }),
        function(e) {
            e.None = "None", e.UnitTesting = "Unit Testing"
        }(n || (n = {}))
}, function(e, t, i) {
    "use strict";
    var n = i(7),
        r = i(3),
        o = i(4),
        s = i(0);
    class a {
        constructor() {
            this.incrementedPageViewCount = !1
        }
        getPageViewCount() {
            try {
                const e = sessionStorage.getItem(a.SESSION_STORAGE_KEY_NAME),
                    t = e ? parseInt(e) : 0;
                return isNaN(t) ? 0 : t
            } catch (e) {
                return 0
            }
        }
        setPageViewCount(e) {
            try {
                sessionStorage.setItem(a.SESSION_STORAGE_KEY_NAME, e.toString()), r.a.getWindowEnv() === o.a.OneSignalSubscriptionPopup && OneSignal.subscriptionPopup && OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.SET_SESSION_COUNT)
            } catch (e) {}
        }
        incrementPageViewCount() {
            if (this.incrementedPageViewCount) return;
            const e = this.getPageViewCount() + 1;
            this.setPageViewCount(e), s.a.debug(`Incremented page view count to ${e}.`), this.incrementedPageViewCount = !0
        }
        simulatePageNavigationOrRefresh() {
            this.incrementedPageViewCount = !1
        }
        isFirstPageView() {
            return 1 === this.getPageViewCount()
        }
    }
    a.SESSION_STORAGE_KEY_NAME = "onesignal-pageview-count";
    var c = i(8),
        u = i(5),
        d = i.n(u),
        InvalidArgumentError = i(13),
        l = i(2),
        p = i(16),
        g = function(e, t, i, n) {
            return new(i || (i = Promise))(function(r, o) {
                function s(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    e.done ? r(e.value) : new i(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                c((n = n.apply(e, t || [])).next())
            })
        };
    class f {
        static get STORED_PERMISSION_KEY() {
            return "storedNotificationPermission"
        }
        getNotificationPermission(e) {
            return g(this, void 0, void 0, function*() {
                const t = yield this.getReportedNotificationPermission(e);
                return (yield this.isPermissionEnvironmentAmbiguous(t)) ? yield this.getInterpretedAmbiguousPermission(t): t
            })
        }
        getReportedNotificationPermission(e) {
            return g(this, void 0, void 0, function*() {
                return d.a.safari ? f.getSafariNotificationPermission(e) : c.b.isUsingSubscriptionWorkaround() ? yield this.getOneSignalSubdomainNotificationPermission(e): this.getW3cNotificationPermission()
            })
        }
        static getSafariNotificationPermission(e) {
            if (e) return window.safari.pushNotification.permission(e).permission;
            throw new InvalidArgumentError.a("safariWebId", InvalidArgumentError.b.Empty)
        }
        getW3cNotificationPermission() {
            return window.Notification.permission
        }
        getOneSignalSubdomainNotificationPermission(e) {
            return g(this, void 0, void 0, function*() {
                return new Promise(t => {
                    OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION, {
                        safariWebId: e
                    }, e => {
                        let i = e.data;
                        t(i)
                    })
                })
            })
        }
        isPermissionEnvironmentAmbiguous(e) {
            return g(this, void 0, void 0, function*() {
                const t = c.b.redetectBrowserUserAgent();
                return !t.safari && !t.firefox && e === p.a.Denied && (this.isCurrentFrameContextCrossOrigin() || (yield r.a.isFrameContextInsecure()) || c.b.isUsingSubscriptionWorkaround() || r.a.isInsecureOrigin())
            })
        }
        isCurrentFrameContextCrossOrigin() {
            let e;
            try {
                e = window.top.location.origin
            } catch (e) {
                return !0
            }
            return window.top !== window && e !== window.location.origin
        }
        getInterpretedAmbiguousPermission(e) {
            return g(this, void 0, void 0, function*() {
                switch (e) {
                    case p.a.Denied:
                        const t = yield this.getStoredPermission();
                        return t || p.a.Default;
                    default:
                        return e
                }
            })
        }
        getStoredPermission() {
            return g(this, void 0, void 0, function*() {
                return yield l.a.get("Options", f.STORED_PERMISSION_KEY)
            })
        }
        setStoredPermission(e) {
            return g(this, void 0, void 0, function*() {
                yield l.a.put("Options", {
                    key: f.STORED_PERMISSION_KEY,
                    value: e
                })
            })
        }
        updateStoredPermission() {
            return g(this, void 0, void 0, function*() {
                const e = yield this.getNotificationPermission();
                return yield this.setStoredPermission(e)
            })
        }
    }
    var h = i(9),
        InvalidStateError = i(12);
    class b {
        constructor(e) {
            if (!e) throw new InvalidArgumentError.a("path", InvalidArgumentError.b.Empty);
            this.path = e.trim()
        }
        getQueryString() {
            const e = this.path.indexOf("?");
            return -1 === e ? null : this.path.length > e ? this.path.substring(e + 1) : null
        }
        getWithoutQueryString() {
            return this.path.split(b.QUERY_STRING)[0]
        }
        getFileName() {
            return this.getWithoutQueryString().split("\\").pop().split("/").pop()
        }
        getFileNameWithQuery() {
            return this.path.split("\\").pop().split("/").pop()
        }
        getFullPath() {
            return this.path
        }
        getPathWithoutFileName() {
            const e = this.getWithoutQueryString(),
                t = e.lastIndexOf(this.getFileName());
            let i = e.substring(0, t);
            return i = i.replace(/[\\\/]$/, "")
        }
    }
    b.QUERY_STRING = "?";
    var m = i(30),
        v = i(14),
        S = i(17),
        y = i(18),
        w = i(11);
    class P extends w.a {
        constructor(e, t) {
            super("Registration of a Service Worker failed."), this.status = e, this.statusText = t, Object.setPrototypeOf(this, P.prototype)
        }
    }
    var O = P,
        k = i(6),
        I = i(1),
        x = function(e, t, i, n) {
            return new(i || (i = Promise))(function(r, o) {
                function s(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    e.done ? r(e.value) : new i(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                c((n = n.apply(e, t || [])).next())
            })
        };
    class E {
        constructor(e, t) {
            this.context = e, this.config = t
        }
        static getRegistration() {
            return x(this, void 0, void 0, function*() {
                return yield k.b.getRegistration()
            })
        }
        getActiveState() {
            return x(this, void 0, void 0, function*() {
                const e = yield r.a.getIntegration();
                if (e === v.a.InsecureProxy) return k.a.Indeterminate;
                if (e === v.a.SecureProxy) {
                    switch (r.a.getWindowEnv()) {
                        case o.a.Host:
                        case o.a.CustomIframe:
                            const e = OneSignal.proxyFrameHost;
                            return e ? yield e.runCommand(OneSignal.POSTMAM_COMMANDS.SERVICE_WORKER_STATE): k.a.Indeterminate;
                        case o.a.OneSignalSubscriptionPopup:
                            break;
                        case o.a.OneSignalSubscriptionModal:
                            throw new S.a
                    }
                }
                const t = yield E.getRegistration();
                if (!t) return k.a.None;
                if (t.installing) return k.a.Installing;
                if (!t.active) return k.a.ThirdParty;
                const i = E.activeSwFileName(t),
                    n = this.swActiveStateByFileName(i);
                return navigator.serviceWorker.controller || n !== k.a.WorkerA && n !== k.a.WorkerB ? n : k.a.Bypassed
            })
        }
        static activeSwFileName(e) {
            if (!e.active) return null;
            const t = new URL(e.active.scriptURL).pathname,
                i = new b(t).getFileName();
            if ("akam-sw.js" == i) {
                const t = new URLSearchParams(new URL(e.active.scriptURL).search).get("othersw");
                if (t) return s.a.debug("Found a ServiceWorker under Akamai's akam-sw.js?othersw=", t), new b(new URL(t).pathname).getFileName()
            }
            return i
        }
        swActiveStateByFileName(e) {
            return e ? e == this.config.workerAPath.getFileName() ? k.a.WorkerA : e == this.config.workerBPath.getFileName() ? k.a.WorkerB : k.a.ThirdParty : k.a.None
        }
        getWorkerVersion() {
            return x(this, void 0, void 0, function*() {
                return new Promise(e => x(this, void 0, void 0, function*() {
                    if (c.b.isUsingSubscriptionWorkaround()) {
                        const t = OneSignal.proxyFrameHost;
                        if (t) {
                            const i = yield t.runCommand(OneSignal.POSTMAM_COMMANDS.GET_WORKER_VERSION);
                            e(i)
                        } else e(NaN)
                    } else this.context.workerMessenger.once(n.b.WorkerVersion, t => {
                        e(t)
                    }), this.context.workerMessenger.unicast(n.b.WorkerVersion)
                }))
            })
        }
        shouldInstallWorker() {
            return x(this, void 0, void 0, function*() {
                const e = yield this.getActiveState();
                return e !== k.a.WorkerA && e !== k.a.WorkerB
            })
        }
        subscribeForPushNotifications() {
            return x(this, void 0, void 0, function*() {
                const e = yield this.getActiveState();
                if (e !== k.a.WorkerA && e !== k.a.WorkerB) throw new InvalidStateError.a(InvalidStateError.b.ServiceWorkerNotActivated);
                return new Promise(e => {
                    this.context.workerMessenger.once(n.b.Subscribe, t => {
                        e(m.a.deserialize(t))
                    }), this.context.workerMessenger.unicast(n.b.Subscribe, this.context.appConfig)
                })
            })
        }
        updateWorker() {
            return x(this, void 0, void 0, function*() {
                if (!h.a.supportsServiceWorkers()) return;
                const e = yield this.getActiveState();
                let t;
                s.a.info("[Service Worker Update] Checking service worker version...");
                try {
                    t = yield I.a.timeoutPromise(this.getWorkerVersion(), 2e3)
                } catch (e) {
                    s.a.info("[Service Worker Update] Worker did not reply to version query; assuming older version."), t = 1
                }
                e === k.a.WorkerA || e === k.a.WorkerB ? t !== h.a.version() ? (s.a.info(`[Service Worker Update] Updating service worker from v${t} --\x3e v${h.a.version()}.`), yield this.installWorker()) : s.a.info(`[Service Worker Update] Service worker version is current at v${t} (no update required).`) : s.a.debug(`[Service Worker Update] Not updating service worker, current active worker state is ${e}.`)
            })
        }
        installWorker() {
            return x(this, void 0, void 0, function*() {
                if (!h.a.supportsServiceWorkers()) return;
                const e = yield this.getActiveState();
                yield this.installAlternatingWorker(), yield new Promise(t => x(this, void 0, void 0, function*() {
                    const i = yield this.getActiveState();
                    s.a.debug("installWorker - Comparing pre and post states", e, i), e !== i && i !== k.a.Installing ? t() : (s.a.debug("installWorker - Awaiting on navigator.serviceWorker's 'controllerchange' event"), navigator.serviceWorker.addEventListener("controllerchange", i => x(this, void 0, void 0, function*() {
                        const i = yield this.getActiveState();
                        i !== e && i !== k.a.Installing ? t() : s.a.error("installWorker - SW's 'controllerchange' fired but no state change!")
                    })))
                })), (yield this.getActiveState()) === k.a.WorkerB && (yield this.installAlternatingWorker()), yield this.establishServiceWorkerChannel()
            })
        }
        establishServiceWorkerChannel() {
            return x(this, void 0, void 0, function*() {
                const e = this.context.workerMessenger;
                e.off(), e.on(n.b.NotificationDisplayed, e => {
                    s.a.debug(location.origin, "Received notification display event from service worker."), y.a.trigger(OneSignal.EVENTS.NOTIFICATION_DISPLAYED, e)
                }), e.on(n.b.NotificationClicked, e => x(this, void 0, void 0, function*() {
                    let t;
                    if (0 === (t = r.a.getWindowEnv() === o.a.OneSignalProxyFrame ? yield new Promise(e => {
                            const t = OneSignal.proxyFrame;
                            t && t.messenger.message(OneSignal.POSTMAM_COMMANDS.GET_EVENT_LISTENER_COUNT, OneSignal.EVENTS.NOTIFICATION_CLICKED, t => {
                                let i = t.data;
                                e(i)
                            })
                        }): OneSignal.emitter.numberOfListeners(OneSignal.EVENTS.NOTIFICATION_CLICKED))) {
                        s.a.debug("notification.clicked event received, but no event listeners; storing event in IndexedDb for later retrieval.");
                        let t = e.url;
                        e.url || (t = location.href), yield l.a.put("NotificationOpened", {
                            url: t,
                            data: e,
                            timestamp: Date.now()
                        })
                    } else y.a.trigger(OneSignal.EVENTS.NOTIFICATION_CLICKED, e)
                })), e.on(n.b.RedirectPage, e => {
                    s.a.debug(`${r.a.getWindowEnv().toString()} Picked up command.redirect to ${e}, forwarding to host page.`);
                    const t = OneSignal.proxyFrame;
                    t && t.messenger.message(OneSignal.POSTMAM_COMMANDS.SERVICEWORKER_COMMAND_REDIRECT, e)
                }), e.on(n.b.NotificationDismissed, e => {
                    y.a.trigger(OneSignal.EVENTS.NOTIFICATION_DISMISSED, e)
                })
            })
        }
        installAlternatingWorker() {
            return x(this, void 0, void 0, function*() {
                const e = yield this.getActiveState();
                e === k.a.ThirdParty && s.a.info("[Service Worker Installation] 3rd party service worker detected.");
                const t = `${k.b.getServiceWorkerHref(e,this.config)}?${I.a.encodeHashAsUriComponent({appId:this.context.appConfig.appId})}`;
                s.a.info(`[Service Worker Installation] Installing service worker ${t}.`);
                try {
                    yield navigator.serviceWorker.register(t, {
                        scope: `${c.b.getBaseUrl()}${this.config.registrationOptions.scope}`
                    })
                } catch (e) {
                    if (s.a.error(`[Service Worker Installation] Installing service worker failed ${e}`), r.a.getWindowEnv() === o.a.OneSignalSubscriptionPopup) throw e;
                    const i = yield fetch(t);
                    if (403 === i.status || 404 === i.status) throw new O(i.status, i.statusText);
                    throw e
                }
                s.a.debug("[Service Worker Installation] Service worker installed.")
            })
        }
    }
    var N = i(21),
        A = i(23),
        W = i(28);
    class T extends W.a {
        constructor(e, t, i) {
            super(), this.email = e, this.emailAuthHash = t, this.pushDeviceRecordId = i, this.deliveryPlatform = A.a.Email
        }
        serialize() {
            const e = super.serialize();
            return this.email && (e.identifier = this.email), this.emailAuthHash && (e.email_auth_hash = this.emailAuthHash), this.pushDeviceRecordId && (e.device_player_id = this.pushDeviceRecordId), e
        }
        deserialize(e) {
            throw new S.a
        }
    }
    var M = i(15),
        C = function(e, t, i, n) {
            return new(i || (i = Promise))(function(r, o) {
                function s(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    e.done ? r(e.value) : new i(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                c((n = n.apply(e, t || [])).next())
            })
        };
    class _ {
        static getPlayer(e, t) {
            return I.b.enforceAppId(e), I.b.enforcePlayerId(t), M.b.get(`players/${t}?app_id=${e}`)
        }
        static updatePlayer(e, t, i) {
            return I.b.enforceAppId(e), I.b.enforcePlayerId(t), M.b.put(`players/${t}`, Object.assign({
                app_id: e
            }, i))
        }
        static sendNotification(e, t, i, n, r, o, s, a) {
            var c = {
                app_id: e,
                contents: n,
                include_player_ids: t,
                isAnyWeb: !0,
                data: s,
                web_buttons: a
            };
            return i && (c.headings = i), r && (c.url = r), o && (c.chrome_web_icon = o, c.firefox_icon = o), I.b.trimUndefined(c), M.b.post("notifications", c)
        }
        static createUser(e) {
            return C(this, void 0, void 0, function*() {
                const t = e.serialize();
                I.b.enforceAppId(t.app_id);
                const i = yield M.b.post("players", t);
                return i && i.success ? i.id : null
            })
        }
        static createEmailRecord(e, t, i) {
            return C(this, void 0, void 0, function*() {
                I.b.enforceAppId(e.appId);
                const n = new T(t.emailAddress, t.emailAuthHash, i);
                n.appId = e.appId;
                const r = yield M.b.post("players", n.serialize());
                return r && r.success ? r.id : null
            })
        }
        static updateEmailRecord(e, t, i) {
            return C(this, void 0, void 0, function*() {
                I.b.enforceAppId(e.appId), I.b.enforcePlayerId(t.emailId);
                const n = new T(t.emailAddress, t.emailAuthHash, i);
                n.appId = e.appId;
                const r = yield M.b.put(`players/${t.emailId}`, n.serialize());
                return r && r.success ? r.id : null
            })
        }
        static logoutEmail(e, t, i) {
            return C(this, void 0, void 0, function*() {
                I.b.enforceAppId(e.appId), I.b.enforcePlayerId(i);
                const n = yield M.b.post(`players/${i}/email_logout`, {
                    app_id: e.appId,
                    parent_player_id: t.emailId,
                    email_auth_hash: t.emailAuthHash ? t.emailAuthHash : void 0
                });
                return !(!n || !n.success)
            })
        }
        static updateUserSession(e, t) {
            return C(this, void 0, void 0, function*() {
                try {
                    const i = t.serialize();
                    I.b.enforceAppId(i.app_id), I.b.enforcePlayerId(e);
                    const n = yield M.b.post(`players/${e}/on_session`, i);
                    return n.id ? n.id : e
                } catch (e) {
                    throw e && Array.isArray(e.errors) && e.errors.length > 0 && I.b.contains(e.errors[0], "app_id not found") ? new N.a(N.b.MissingAppId) : e
                }
            })
        }
    }
    var R, D, U = i(20),
        F = i(10),
        B = i(22);
    (D = R || (R = {}))[D.Blocked = 0] = "Blocked", D[D.Dismissed = 1] = "Dismissed", D[D.Default = 2] = "Default";
    class L extends w.a {
        constructor(e) {
            switch (e) {
                case R.Dismissed:
                    super("The user dismissed the permission prompt.");
                    break;
                case R.Blocked:
                    super("Notification permissions are blocked.");
                    break;
                case R.Default:
                    super("Notification permissions have not been granted yet.")
            }
            this.reason = e, Object.setPrototypeOf(this, L.prototype)
        }
    }
    var V, $, SdkInitError = i(19);
    ($ = V || (V = {}))[$.InvalidSafariSetup = 0] = "InvalidSafariSetup", $[$.Blocked = 1] = "Blocked", $[$.Dismissed = 2] = "Dismissed";
    class H extends w.a {
        constructor(e) {
            switch (e) {
                case V.InvalidSafariSetup:
                    super("The Safari site URL, icon size, or push certificate is invalid, or Safari is in a private session.");
                    break;
                case V.Blocked:
                    super("Notification permissions are blocked.");
                    break;
                case V.Dismissed:
                    super("The notification permission prompt was dismissed.")
            }
            Object.setPrototypeOf(this, H.prototype)
        }
    }
    var z = i(27);
    var j = function(e, t, i, n) {
        return new(i || (i = Promise))(function(r, o) {
            function s(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                e.done ? r(e.value) : new i(function(t) {
                    t(e.value)
                }).then(s, a)
            }
            c((n = n.apply(e, t || [])).next())
        })
    };
    class K {
        constructor(e, t) {
            this.context = e, this.config = t
        }
        static isSafari() {
            return h.a.isSafari()
        }
        subscribe(e) {
            return j(this, void 0, void 0, function*() {
                const t = r.a.getWindowEnv();
                switch (t) {
                    case o.a.CustomIframe:
                    case o.a.Unknown:
                    case o.a.OneSignalProxyFrame:
                        throw new InvalidStateError.a(InvalidStateError.b.UnsupportedEnvironment)
                }
                let i;
                switch (t) {
                    case o.a.ServiceWorker:
                        i = yield this.subscribeFcmFromWorker(e);
                        break;
                    case o.a.Host:
                    case o.a.OneSignalSubscriptionModal:
                    case o.a.OneSignalSubscriptionPopup:
                        if ((yield OneSignal.privateGetNotificationPermission()) === p.a.Denied) throw new L(R.Blocked);
                        i = K.isSafari() ? yield this.subscribeSafari(): yield this.subscribeFcmFromPage(e);
                        break;
                    default:
                        throw new InvalidStateError.a(InvalidStateError.b.UnsupportedEnvironment)
                }
                return i
            })
        }
        registerSubscription(e, t) {
            return j(this, void 0, void 0, function*() {
                e && (e = U.a.deserialize(e));
                const i = B.a.createFromPushSubscription(this.config.appId, e, t);
                let n = void 0;
                (yield this.isAlreadyRegisteredWithOneSignal()) ? yield this.context.updateManager.sendPlayerUpdate(i): (n = yield this.context.updateManager.sendPlayerCreate(i)) && (yield this.associateSubscriptionWithEmail(n));
                const s = yield l.a.getSubscription();
                return s.deviceId = n, s.optedOut = !1, e ? K.isSafari() ? s.subscriptionToken = e.safariDeviceToken : s.subscriptionToken = e.w3cEndpoint ? e.w3cEndpoint.toString() : null : s.subscriptionToken = null, yield l.a.setSubscription(s), r.a.getWindowEnv() !== o.a.ServiceWorker && y.a.trigger(OneSignal.EVENTS.REGISTERED), "undefined" != typeof OneSignal && (OneSignal._sessionInitAlreadyRunning = !1), s
            })
        }
        static requestPresubscribeNotificationPermission() {
            return j(this, void 0, void 0, function*() {
                return yield K.requestNotificationPermission()
            })
        }
        unsubscribe(e) {
            return j(this, void 0, void 0, function*() {
                if (0 === e) throw new S.a;
                if (1 !== e) throw new S.a;
                if (r.a.getWindowEnv() !== o.a.ServiceWorker) throw new S.a; {
                    const {
                        deviceId: e
                    } = yield l.a.getSubscription();
                    yield _.updatePlayer(this.context.appConfig.appId, e, {
                        notification_types: F.a.MutedByApi
                    }), yield l.a.put("Options", {
                        key: "optedOut",
                        value: !0
                    })
                }
            })
        }
        static requestNotificationPermission() {
            return new Promise(e => window.Notification.requestPermission(e))
        }
        associateSubscriptionWithEmail(e) {
            return j(this, void 0, void 0, function*() {
                const t = yield l.a.getEmailProfile();
                t.emailId && (yield _.updatePlayer(this.config.appId, e, {
                    parent_player_id: t.emailId,
                    email: t.emailAddress
                }))
            })
        }
        isAlreadyRegisteredWithOneSignal() {
            return j(this, void 0, void 0, function*() {
                const {
                    deviceId: e
                } = yield l.a.getSubscription();
                return !!e
            })
        }
        subscribeSafariPromptPermission() {
            return new Promise(e => {
                window.safari.pushNotification.requestPermission(`${r.a.getOneSignalApiUrl().toString()}/safari`, this.config.safariWebId, {
                    app_id: this.config.appId
                }, t => {
                    t.deviceToken ? e(t.deviceToken.toLowerCase()) : e(null)
                })
            })
        }
        subscribeSafari() {
            return j(this, void 0, void 0, function*() {
                const e = new U.a;
                if (!this.config.safariWebId) throw new SdkInitError.a(SdkInitError.b.MissingSafariWebId);
                const {
                    deviceToken: t
                } = window.safari.pushNotification.permission(this.config.safariWebId);
                e.existingSafariDeviceToken = t, t || y.a.trigger(OneSignal.EVENTS.PERMISSION_PROMPT_DISPLAYED);
                const i = yield this.subscribeSafariPromptPermission();
                if (z.a.triggerNotificationPermissionChanged(), !i) throw new H(V.InvalidSafariSetup);
                return e.setFromSafariSubscription(i), e
            })
        }
        subscribeFcmFromPage(e) {
            return j(this, void 0, void 0, function*() {
                if (r.a.getWindowEnv() !== o.a.ServiceWorker && window.Notification.permission === p.a.Default) {
                    yield y.a.trigger(OneSignal.EVENTS.PERMISSION_PROMPT_DISPLAYED);
                    const e = yield K.requestPresubscribeNotificationPermission();
                    switch (e === p.a.Default && (yield z.a.triggerNotificationPermissionChanged(!0)), e) {
                        case p.a.Default:
                            throw s.a.debug("Exiting subscription and not registering worker because the permission was dismissed."), OneSignal._sessionInitAlreadyRunning = !1, OneSignal._isRegisteringForPush = !1, new L(R.Dismissed);
                        case p.a.Denied:
                            throw s.a.debug("Exiting subscription and not registering worker because the permission was blocked."), OneSignal._sessionInitAlreadyRunning = !1, OneSignal._isRegisteringForPush = !1, new L(R.Blocked)
                    }
                }
                if (yield this.context.serviceWorkerManager.shouldInstallWorker()) try {
                    yield this.context.serviceWorkerManager.installWorker()
                } catch (e) {
                    throw e instanceof O && (403 === e.status ? yield this.context.subscriptionManager.registerFailedSubscription(F.a.ServiceWorkerStatus403, this.context): 404 === e.status && (yield this.context.subscriptionManager.registerFailedSubscription(F.a.ServiceWorkerStatus404, this.context))), e
                }
                s.a.debug("Waiting for the service worker to activate...");
                const t = yield navigator.serviceWorker.ready;
                return s.a.debug("Service worker is ready to continue subscribing."), yield this.subscribeFcmVapidOrLegacyKey(t.pushManager, e)
            })
        }
        subscribeFcmFromWorker(e) {
            return j(this, void 0, void 0, function*() {
                if (!self.registration.active && !d.a.firefox) throw new InvalidStateError.a(InvalidStateError.b.ServiceWorkerNotActivated);
                const t = yield self.registration.pushManager.permissionState({
                    userVisibleOnly: !0
                });
                if ("denied" === t) throw new L(R.Blocked);
                if ("prompt" === t) throw new L(R.Default);
                return yield this.subscribeFcmVapidOrLegacyKey(self.registration.pushManager, e)
            })
        }
        getVapidKeyForBrowser() {
            let e = void 0;
            return (e = d.a.firefox ? this.config.onesignalVapidPublicKey : this.config.vapidPublicKey) ? function(e) {
                const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
                    i = atob(t),
                    n = new Uint8Array(i.length);
                for (let e = 0; e < i.length; ++e) n[e] = i.charCodeAt(e);
                return n
            }(e).buffer : void 0
        }
        subscribeFcmVapidOrLegacyKey(e, t) {
            return j(this, void 0, void 0, function*() {
                const i = yield e.getSubscription();
                switch (t) {
                    case 0:
                        if (!i) break;
                        i.options ? s.a.debug("[Subscription Manager] An existing push subscription exists and it's options is not null.") : (s.a.debug("[Subscription Manager] An existing push subscription exists and options is null. Unsubscribing from push first now."), yield K.doPushUnsubscribe(i));
                        break;
                    case 1:
                        i && (yield K.doPushUnsubscribe(i))
                }
                const [n, r] = yield K.doPushSubscribe(e, this.getVapidKeyForBrowser());
                yield K.updateSubscriptionTime(r, n.expirationTime);
                const o = U.a.setFromW3cSubscription(n);
                return i && (o.existingW3cPushSubscription = U.a.setFromW3cSubscription(i)), o
            })
        }
        static updateSubscriptionTime(e, t) {
            return j(this, void 0, void 0, function*() {
                const i = yield l.a.getSubscription();
                e && (i.createdAt = (new Date).getTime()), i.expirationTime = t, yield l.a.setSubscription(i)
            })
        }
        static doPushUnsubscribe(e) {
            return j(this, void 0, void 0, function*() {
                s.a.debug("[Subscription Manager] Unsubscribing existing push subscription.");
                const t = yield e.unsubscribe();
                return s.a.debug(`[Subscription Manager] Unsubscribing existing push subscription result: ${t}`), t
            })
        }
        static doPushSubscribe(e, t) {
            return j(this, void 0, void 0, function*() {
                if (!t) throw new Error("Missing required 'applicationServerKey' to subscribe for push notifications!");
                const i = {
                    userVisibleOnly: !0,
                    applicationServerKey: t
                };
                s.a.debug("[Subscription Manager] Subscribing to web push with these options:", i);
                try {
                    const t = yield e.getSubscription();
                    return [yield e.subscribe(i), !t]
                } catch (t) {
                    if ("InvalidStateError" == t.name) return s.a.warn("[Subscription Manager] Couldn't re-subscribe due to applicationServerKey changing, unsubscribe and attempting to subscribe with new key.", t), yield K.doPushUnsubscribe(yield e.getSubscription()), [yield e.subscribe(i), !0];
                    throw t
                }
            })
        }
        isSubscriptionExpiring() {
            return j(this, void 0, void 0, function*() {
                const e = yield r.a.getIntegration(), t = r.a.getWindowEnv();
                switch (e) {
                    case v.a.Secure:
                        return yield this.isSubscriptionExpiringForSecureIntegration();
                    case v.a.SecureProxy:
                        if (t === o.a.Host) {
                            const e = OneSignal.proxyFrameHost;
                            if (e) return yield e.runCommand(OneSignal.POSTMAM_COMMANDS.SUBSCRIPTION_EXPIRATION_STATE);
                            throw new InvalidStateError.a(InvalidStateError.b.NoProxyFrame)
                        }
                        return yield this.isSubscriptionExpiringForSecureIntegration();
                    case v.a.InsecureProxy:
                        const {
                            expirationTime: i
                        } = yield l.a.getSubscription();
                        return !!i && (new Date).getTime() >= i
                }
            })
        }
        isSubscriptionExpiringForSecureIntegration() {
            return j(this, void 0, void 0, function*() {
                const e = yield this.context.serviceWorkerManager.getActiveState();
                if (e !== k.a.WorkerA && e !== k.a.WorkerB) return !1;
                const t = yield E.getRegistration();
                if (!t) return !1;
                if (!t.pushManager) return !1;
                const i = yield t.pushManager.getSubscription();
                if (!i) return !1;
                if (!i.expirationTime) return !1;
                let {
                    createdAt: n
                } = yield l.a.getSubscription();
                if (!n) {
                    const e = 31536e6;
                    n = (new Date).getTime() + e
                }
                const r = n + (i.expirationTime - n) / 2;
                return !!i.expirationTime && ((new Date).getTime() >= i.expirationTime || (new Date).getTime() >= r)
            })
        }
        getSubscriptionState() {
            return j(this, void 0, void 0, function*() {
                if (K.isSafari()) return this.getSubscriptionStateForSecure();
                const e = r.a.getWindowEnv();
                switch (e) {
                    case o.a.ServiceWorker:
                        const t = yield self.registration.pushManager.getSubscription(), {
                            optedOut: i
                        } = yield l.a.getSubscription();
                        return {
                            subscribed: !!t, optedOut: !!i
                        };
                    default:
                        switch (yield r.a.getIntegration()) {
                            case v.a.Secure:
                                return this.getSubscriptionStateForSecure();
                            case v.a.SecureProxy:
                                switch (e) {
                                    case o.a.OneSignalProxyFrame:
                                    case o.a.OneSignalSubscriptionPopup:
                                    case o.a.OneSignalSubscriptionModal:
                                        return this.getSubscriptionStateForSecure();
                                    default:
                                        return yield OneSignal.proxyFrameHost.runCommand(OneSignal.POSTMAM_COMMANDS.GET_SUBSCRIPTION_STATE)
                                }
                                case v.a.InsecureProxy:
                                    return yield this.getSubscriptionStateForInsecure();
                                default:
                                    throw new InvalidStateError.a(InvalidStateError.b.UnsupportedEnvironment)
                        }
                }
            })
        }
        getSubscriptionStateForSecure() {
            return j(this, void 0, void 0, function*() {
                const {
                    deviceId: e,
                    optedOut: t
                } = yield l.a.getSubscription();
                if (K.isSafari()) {
                    const i = window.safari.pushNotification.permission(this.config.safariWebId);
                    return {
                        subscribed: !("granted" !== i.permission || !i.deviceToken || !e),
                        optedOut: !!t
                    }
                }
                const i = yield this.context.serviceWorkerManager.getActiveState(), n = yield E.getRegistration(), r = yield this.context.permissionManager.getNotificationPermission(this.context.appConfig.safariWebId), o = i === k.a.WorkerA || i === k.a.WorkerB;
                return n ? {
                    subscribed: !(!e || r !== p.a.Granted || !o),
                    optedOut: !!t
                } : {
                    subscribed: !1,
                    optedOut: !!t
                }
            })
        }
        getSubscriptionStateForInsecure() {
            return j(this, void 0, void 0, function*() {
                const {
                    deviceId: e,
                    subscriptionToken: t,
                    optedOut: i
                } = yield l.a.getSubscription(), n = yield this.context.permissionManager.getNotificationPermission(this.context.appConfig.safariWebId);
                return {
                    subscribed: !(!e || !t || n !== p.a.Granted),
                    optedOut: !!i
                }
            })
        }
        registerFailedSubscription(e, t) {
            return j(this, void 0, void 0, function*() {
                t.sessionManager.isFirstPageView() && (t.subscriptionManager.registerSubscription(new U.a, e), t.sessionManager.incrementPageViewCount())
            })
        }
    }
    var G, q, J = class {
        static getServiceWorkerManager(e) {
            const t = e.appConfig,
                i = r.a.getBuildEnvPrefix(),
                n = {
                    workerAPath: new b(`/${i}OneSignalSDKWorker.js`),
                    workerBPath: new b(`/${i}OneSignalSDKUpdaterWorker.js`),
                    registrationOptions: {
                        scope: "/"
                    }
                };
            return t.userConfig && (t.userConfig.path && (n.workerAPath = new b(`${t.userConfig.path}${i}${t.userConfig.serviceWorkerPath}`), n.workerBPath = new b(`${t.userConfig.path}${i}${t.userConfig.serviceWorkerUpdaterPath}`)), t.userConfig.serviceWorkerParam && (n.registrationOptions = t.userConfig.serviceWorkerParam)), new E(e, n)
        }
        static getSubscriptionManager(e) {
            const t = e.appConfig,
                i = {
                    safariWebId: t.safariWebId,
                    appId: t.appId,
                    vapidPublicKey: t.vapidPublicKey,
                    onesignalVapidPublicKey: t.onesignalVapidPublicKey
                };
            return new K(e, i)
        }
    };
    (q = G || (G = {}))[q.Unknown = 0] = "Unknown", q[q.NoDeviceId = 1] = "NoDeviceId", q[q.NoEmailSet = 2] = "NoEmailSet", q[q.OptedOut = 3] = "OptedOut";
    class Y extends w.a {
        constructor(e) {
            switch (e) {
                case G.Unknown || G.NoDeviceId:
                    super("This operation can only be performed after the user is subscribed.");
                    break;
                case G.NoEmailSet:
                    super("No email is currently set.");
                    break;
                case G.OptedOut:
                    super("The user has manually opted out of receiving of notifications. This operation can only be performed after the user is fully resubscribed.")
            }
            this.reason = G[e], Object.setPrototypeOf(this, Y.prototype)
        }
    }
    var Q = i(29),
        X = function(e, t, i, n) {
            return new(i || (i = Promise))(function(r, o) {
                function s(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    e.done ? r(e.value) : new i(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                c((n = n.apply(e, t || [])).next())
            })
        };
    class Z {
        constructor(e) {
            this.context = e, this.onSessionSent = e.sessionManager.getPageViewCount() > 1
        }
        getDeviceId() {
            return X(this, void 0, void 0, function*() {
                const {
                    deviceId: e
                } = yield l.a.getSubscription();
                if (!e) throw new Y(G.NoDeviceId);
                return e
            })
        }
        createDeviceRecord() {
            return X(this, void 0, void 0, function*() {
                const e = new B.a;
                return e.appId = this.context.appConfig.appId, e.subscriptionState = yield Q.a.getCurrentNotificationType(), e
            })
        }
        sendPlayerUpdate(e) {
            return X(this, void 0, void 0, function*() {
                if (!(yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal())) return void s.a.debug("Not sending the update because user is not registered with OneSignal (no device id)");
                const t = yield this.getDeviceId();
                e || (e = yield this.createDeviceRecord()), this.onSessionSent ? yield _.updatePlayer(this.context.appConfig.appId, t, Object.assign({
                    notification_types: F.a.Subscribed
                }, e.serialize())): yield this.sendOnSessionUpdate(e)
            })
        }
        sendOnSessionUpdate(e) {
            return X(this, void 0, void 0, function*() {
                if (this.onSessionSent) return;
                if (!this.context.sessionManager.isFirstPageView()) return;
                if (!(yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal())) return void s.a.debug("Not sending the on session because user is not registered with OneSignal (no device id)");
                const t = yield this.getDeviceId();
                if (e || (e = yield this.createDeviceRecord()), e.subscriptionState === F.a.Subscribed || !0 === OneSignal.config.enableOnSession) try {
                    yield _.updateUserSession(t, e), this.onSessionSent = !0
                } catch (e) {
                    s.a.error(`Failed to update user session. Error "${e.message}" ${e.stack}`)
                }
            })
        }
        sendPlayerCreate(e) {
            return X(this, void 0, void 0, function*() {
                try {
                    const t = yield _.createUser(e);
                    return t ? (s.a.info("Subscribed to web push and registered with OneSignal", e, t), this.onSessionSent = !0, t) : void s.a.error("Failed to create user.")
                } catch (e) {
                    return void s.a.error(`Failed to create user. Error "${e.message}" ${e.stack}`)
                }
            })
        }
        onSessionAlreadyCalled() {
            return this.onSessionSent
        }
        sendExternalUserIdUpdate(e) {
            return X(this, void 0, void 0, function*() {
                const t = yield this.getDeviceId();
                yield _.updatePlayer(this.context.appConfig.appId, t, {
                    external_user_id: I.b.getValueOrDefault(e, "")
                })
            })
        }
    }
    i.d(t, "a", function() {
        return ee
    });
    class ee {
        constructor(e) {
            this.appConfig = e, this.subscriptionManager = J.getSubscriptionManager(this), this.serviceWorkerManager = J.getServiceWorkerManager(this), this.sessionManager = new a, this.permissionManager = new f, this.workerMessenger = new n.a(this), this.updateManager = new Z(this)
        }
    }
}, function(e, t, i) {
    "use strict";
    var n = i(15),
        r = i(10),
        o = i(0),
        s = i(1),
        a = function(e, t, i, n) {
            return new(i || (i = Promise))(function(r, o) {
                function s(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    e.done ? r(e.value) : new i(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                c((n = n.apply(e, t || [])).next())
            })
        };
    t.a = class {
        static downloadServerAppConfig(e) {
            return a(this, void 0, void 0, function*() {
                return s.a.enforceAppId(e), yield new Promise((t, i) => {
                    t(n.a.get(`sync/${e}/web`, null))
                })
            })
        }
        static getUserIdFromSubscriptionIdentifier(e, t, i) {
            return s.a.enforceAppId(e), n.a.post("players", {
                app_id: e,
                device_type: t,
                identifier: i,
                notification_types: r.a.TemporaryWebRecord
            }).then(e => e && e.id ? e.id : null).catch(e => (o.a.debug("Error getting user ID from subscription identifier:", e), null))
        }
        static updatePlayer(e, t, i) {
            return s.a.enforceAppId(e), s.a.enforcePlayerId(t), n.a.put(`players/${t}`, Object.assign({
                app_id: e
            }, i))
        }
    }
}, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return s
    });
    var n = i(2),
        r = i(18),
        o = function(e, t, i, n) {
            return new(i || (i = Promise))(function(r, o) {
                function s(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    e.done ? r(e.value) : new i(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                c((n = n.apply(e, t || [])).next())
            })
        };
    class s {
        static triggerNotificationPermissionChanged(e = !1) {
            return o(this, void 0, void 0, function*() {
                const t = yield OneSignal.privateGetNotificationPermission();
                (t !== (yield n.a.get("Options", "notificationPermission")) || e) && (yield n.a.put("Options", {
                    key: "notificationPermission",
                    value: t
                }), r.a.trigger(OneSignal.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, {
                    to: t
                }))
            })
        }
    }
}, function(e, t, i) {
    "use strict";
    var n, r = i(5),
        o = i.n(r),
        s = i(9),
        a = i(17),
        c = i(23);
    ! function(e) {
        e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop"
    }(n || (n = {}));
    var u = i(8);
    i.d(t, "a", function() {
        return d
    });
    class d {
        constructor() {
            this.language = s.a.getLanguage(), this.timezone = -60 * (new Date).getTimezoneOffset(), this.browserName = o.a.name, this.browserVersion = NaN !== parseInt(String(o.a.version)) ? parseInt(String(o.a.version)) : -1, this.operatingSystem = this.getBrowserOperatingSystem(), this.operatingSystemVersion = String(o.a.osversion), this.devicePlatform = this.getDevicePlatform(), this.deviceModel = navigator.platform, this.sdkVersion = s.a.version().toString(), this.deliveryPlatform = this.getDeliveryPlatform()
        }
        getDevicePlatform() {
            const e = o.a.mobile,
                t = o.a.tablet;
            return e ? n.Mobile : t ? n.Tablet : n.Desktop
        }
        isSafari() {
            return o.a.safari && void 0 !== window.safari && void 0 !== window.safari.pushNotification
        }
        getBrowserOperatingSystem() {
            return o.a.mac ? "Mac OS X" : o.a.windows ? "Microsoft Windows" : o.a.windowsphone ? "Microsoft Windows Phone" : o.a.linux ? "Linux" : o.a.chromeos ? "Google Chrome OS" : o.a.android ? "Google Android" : o.a.ios ? "Apple iOS" : o.a.blackberry ? "Blackberry" : o.a.firefoxos ? "Mozilla Firefox OS" : o.a.webos ? "WebOS" : o.a.tizen ? "Tizen" : o.a.sailfish ? "Sailfish OS" : "Unknown"
        }
        getDeliveryPlatform() {
            const e = u.a.redetectBrowserUserAgent();
            return this.isSafari() ? c.a.Safari : e.firefox ? c.a.Firefox : e.msedge ? c.a.Edge : c.a.ChromeLike
        }
        serialize() {
            const e = {
                device_type: this.deliveryPlatform,
                language: this.language,
                timezone: this.timezone,
                device_os: this.browserVersion,
                sdk: this.sdkVersion,
                notification_types: this.subscriptionState,
                delivery_platform: this.deliveryPlatform,
                browser_name: this.browserName,
                browser_version: this.browserVersion,
                operating_system: this.operatingSystem,
                operating_system_version: this.operatingSystemVersion,
                device_platform: this.devicePlatform,
                device_model: this.deviceModel
            };
            return this.appId && (e.app_id = this.appId), e
        }
        deserialize(e) {
            throw new a.a
        }
    }
}, function(e, t, i) {
    "use strict";
    var InvalidStateError = i(12),
        n = i(18),
        r = i(3),
        o = i(2);
    class s {
        static isLocalStorageSupported() {
            try {
                return "undefined" != typeof localStorage && (localStorage.getItem("test"), !0)
            } catch (e) {
                return !1
            }
        }
        static setItem(e, t, i) {
            if (!s.isLocalStorageSupported()) return;
            const n = void 0 !== i ? 60 * i * 1e3 : 0,
                r = {
                    value: JSON.stringify(t),
                    timestamp: void 0 !== i ? (new Date).getTime() + n : void 0
                };
            localStorage.setItem(e, JSON.stringify(r))
        }
        static getItem(e) {
            if (!s.isLocalStorageSupported()) return null;
            const t = localStorage.getItem(e);
            let i;
            try {
                i = JSON.parse(t)
            } catch (e) {
                return null
            }
            if (null === i) return null;
            if (i.timestamp && (new Date).getTime() >= i.timestamp) return localStorage.removeItem(e), null;
            let n = i.value;
            try {
                n = JSON.parse(i.value)
            } catch (e) {
                return n
            }
            return n
        }
        static removeItem(e) {
            if (!s.isLocalStorageSupported()) return null;
            localStorage.removeItem(e)
        }
    }
    var a = i(0),
        c = i(10),
        u = i(16),
        d = i(8),
        l = i(27),
        p = i(1);
    i.d(t, "a", function() {
        return f
    });
    var g = function(e, t, i, n) {
        return new(i || (i = Promise))(function(r, o) {
            function s(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                e.done ? r(e.value) : new i(function(t) {
                    t(e.value)
                }).then(s, a)
            }
            c((n = n.apply(e, t || [])).next())
        })
    };
    class f {
        static fixWordpressManifestIfMisplaced() {
            var e = document.querySelectorAll("link[rel=manifest]");
            if (e && !(e.length <= 1))
                for (let t = 0; t < e.length; t++) {
                    let i = e[t],
                        n = i.href;
                    if (p.a.contains(n, "gcm_sender_id")) {
                        const e = document.querySelector("head");
                        e.insertBefore(i, e.children[0]), a.a.info("OneSignal: Moved the WordPress push <manifest> to the first element in <head>.")
                    }
                }
        }
        static getCurrentNotificationType() {
            return g(this, void 0, void 0, function*() {
                const e = yield OneSignal.context.permissionManager.getNotificationPermission(OneSignal.context.appConfig.safariWebId);
                if (e === u.a.Default) return c.a.Default;
                if (e === u.a.Denied) return d.a.isUsingSubscriptionWorkaround() ? c.a.Default : c.a.NotSubscribed;
                const t = yield OneSignal.context.subscriptionManager.isAlreadyRegisteredWithOneSignal();
                if (e === u.a.Granted && t) {
                    return (yield OneSignal.privateIsPushNotificationsEnabled()) ? c.a.Subscribed : c.a.MutedByApi
                }
                return c.a.Default
            })
        }
        static getNotificationTypeFromOptIn(e) {
            return 1 == e || null == e ? c.a.Subscribed : c.a.MutedByApi
        }
        static wasHttpsNativePromptDismissed() {
            return "dismissed" === s.getItem("onesignal-notification-prompt")
        }
        static markHttpPopoverShown() {
            sessionStorage.setItem("ONESIGNAL_HTTP_PROMPT_SHOWN", "true")
        }
        static isHttpPromptAlreadyShown() {
            return "true" == sessionStorage.getItem("ONESIGNAL_HTTP_PROMPT_SHOWN")
        }
        static checkAndTriggerNotificationPermissionChanged() {
            return g(this, void 0, void 0, function*() {
                const e = yield o.a.get("Options", "notificationPermission"), t = yield OneSignal.getNotificationPermission();
                e !== t && (yield l.a.triggerNotificationPermissionChanged(), yield o.a.put("Options", {
                    key: "notificationPermission",
                    value: t
                }))
            })
        }
        static getNotificationIcons() {
            return g(this, void 0, void 0, function*() {
                const e = yield f.getAppId();
                if (!e) throw new InvalidStateError.a(InvalidStateError.b.MissingAppId);
                var t = `${r.a.getOneSignalApiUrl().toString()}/apps/${e}/icon`;
                const i = yield(yield fetch(t)).json();
                if (i.errors) throw a.a.error(`API call %c${t}`, p.a.getConsoleStyle("code"), "failed with:", i.errors), new Error("Failed to get notification icons.");
                return i
            })
        }
        static getSlidedownPermissionMessageOptions(e) {
            const t = "We'd like to show you notifications for the latest news and updates.";
            return e ? e.slidedown ? {
                enabled: e.slidedown.enabled,
                autoPrompt: e.slidedown.autoPrompt,
                actionMessage: e.slidedown.actionMessage || t,
                acceptButtonText: e.slidedown.acceptButtonText || "Allow",
                cancelButtonText: e.slidedown.cancelButtonText || "No Thanks"
            } : {
                enabled: !1,
                autoPrompt: !1,
                actionMessage: e.actionMessage || t,
                acceptButtonText: e.acceptButtonText || "Allow",
                cancelButtonText: e.cancelButtonText || "No Thanks"
            } : {
                enabled: !1,
                autoPrompt: !1,
                actionMessage: t,
                acceptButtonText: "Allow",
                cancelButtonText: "No Thanks"
            }
        }
        static getFullscreenPermissionMessageOptions(e) {
            return e ? e.fullscreen ? {
                autoAcceptTitle: e.fullscreen.autoAcceptTitle,
                actionMessage: e.fullscreen.actionMessage,
                exampleNotificationTitleDesktop: e.fullscreen.title,
                exampleNotificationTitleMobile: e.fullscreen.title,
                exampleNotificationMessageDesktop: e.fullscreen.message,
                exampleNotificationMessageMobile: e.fullscreen.message,
                exampleNotificationCaption: e.fullscreen.caption,
                acceptButtonText: e.fullscreen.acceptButton,
                cancelButtonText: e.fullscreen.cancelButton
            } : e : null
        }
        static getPromptOptionsQueryString() {
            let e = "";
            if (f.getFullscreenPermissionMessageOptions(OneSignal.config.userConfig.promptOptions)) {
                let t = f.getPromptOptionsPostHash();
                for (let i of Object.keys(t)) {
                    e += "&" + i + "=" + t[i]
                }
            }
            return e
        }
        static getPromptOptionsPostHash() {
            let e = f.getFullscreenPermissionMessageOptions(OneSignal.config.userConfig.promptOptions);
            if (e) {
                var t = {
                    exampleNotificationTitleDesktop: "exampleNotificationTitle",
                    exampleNotificationMessageDesktop: "exampleNotificationMessage",
                    exampleNotificationTitleMobile: "exampleNotificationTitle",
                    exampleNotificationMessageMobile: "exampleNotificationMessage"
                };
                for (let i of Object.keys(t)) {
                    let n = t[i];
                    e[i] && (e[n] = e[i])
                }
                for (var i = ["autoAcceptTitle", "siteName", "autoAcceptTitle", "subscribeText", "showGraphic", "actionMessage", "exampleNotificationTitle", "exampleNotificationMessage", "exampleNotificationCaption", "acceptButtonText", "cancelButtonText", "timeout"], n = {}, r = 0; r < i.length; r++) {
                    var o = i[r],
                        s = e[o],
                        a = encodeURIComponent(s);
                    (s || !1 === s || "" === s) && (n[o] = a)
                }
            }
            return n
        }
        static triggerCustomPromptClicked(e) {
            n.a.trigger(OneSignal.EVENTS.CUSTOM_PROMPT_CLICKED, {
                result: e
            })
        }
        static getAppId() {
            return g(this, void 0, void 0, function*() {
                if (OneSignal.config.appId) return Promise.resolve(OneSignal.config.appId);
                return yield o.a.get("Ids", "appId")
            })
        }
    }
}, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return n
    });
    class n {
        serialize() {
            return {
                deviceId: this.deviceId,
                subscriptionToken: this.subscriptionToken,
                optedOut: this.optedOut,
                createdAt: this.createdAt,
                expirationTime: this.expirationTime
            }
        }
        static deserialize(e) {
            const t = new n;
            return t.deviceId = e.deviceId, t.subscriptionToken = e.subscriptionToken, t.optedOut = e.optedOut, t.createdAt = e.createdAt, t.expirationTime = e.expirationTime, t
        }
    }
}, function(e, t, i) {
    "use strict";
    var n, r, o;
    ! function(e) {
        e.TypicalSite = "typical", e.WordPress = "wordpress", e.Shopify = "shopify", e.Blogger = "blogger", e.Magento = "magento", e.Drupal = "drupal", e.SquareSpace = "squarespace", e.Joomla = "joomla", e.Weebly = "weebly", e.Wix = "wix", e.Custom = "custom"
    }(n || (n = {})),
    function(e) {
        e.Exact = "exact", e.Origin = "origin"
    }(r || (r = {})),
    function(e) {
        e.Navigate = "navigate", e.Focus = "focus"
    }(o || (o = {}));
    var s = i(4),
        SdkInitError = i(19),
        a = i(3),
        c = i(8),
        u = i(1),
        d = i(29);
    i.d(t, "a", function() {
        return f
    });
    var l, p, g = function(e, t, i, n) {
        return new(i || (i = Promise))(function(r, o) {
            function s(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                e.done ? r(e.value) : new i(function(t) {
                    t(e.value)
                }).then(s, a)
            }
            c((n = n.apply(e, t || [])).next())
        })
    };
    (p = l || (l = {}))[p.Dashboard = 0] = "Dashboard", p[p.JavaScript = 1] = "JavaScript";
    class f {
        static getAppConfig(e, t) {
            return g(this, void 0, void 0, function*() {
                try {
                    if (!e || !e.appId || !c.b.isValidUuid(e.appId)) throw new SdkInitError.a(SdkInitError.b.InvalidAppId);
                    const i = yield t(e.appId), n = this.getMergedConfig(e, i);
                    return this.checkRestrictedOrigin(n), n
                } catch (e) {
                    if (e) {
                        if (1 === e.code) throw new SdkInitError.a(SdkInitError.b.InvalidAppId);
                        if (2 === e.code) throw new SdkInitError.a(SdkInitError.b.AppNotConfiguredForWebPush)
                    }
                    throw e
                }
            })
        }
        static checkRestrictedOrigin(e) {
            if (e.restrictedOriginEnabled && a.a.getWindowEnv() !== s.a.ServiceWorker && window.top === window && !u.b.contains(window.location.hostname, ".os.tc") && !u.b.contains(window.location.hostname, ".onesignal.com") && !this.doesCurrentOriginMatchConfigOrigin(e.origin)) throw new SdkInitError.a(SdkInitError.b.WrongSiteUrl, {
                siteUrl: e.origin
            })
        }
        static doesCurrentOriginMatchConfigOrigin(e) {
            try {
                return location.origin === new URL(e).origin
            } catch (e) {
                return !1
            }
        }
        static getIntegrationCapabilities(e) {
            switch (e) {
                case n.Custom:
                case n.WordPress:
                    return {
                        configuration: l.JavaScript
                    };
                default:
                    return {
                        configuration: l.Dashboard
                    }
            }
        }
        static getMergedConfig(e, t) {
            const i = this.getConfigIntegrationKind(t),
                n = this.getSubdomainForConfigIntegrationKind(i, e, t),
                r = t.config.setupBehavior ? t.config.setupBehavior.allowLocalhostAsSecureOrigin : e.allowLocalhostAsSecureOrigin,
                o = c.b.internalIsUsingSubscriptionWorkaround(n, r),
                s = this.getUserConfigForConfigIntegrationKind(i, e, t, o);
            return {
                appId: t.app_id,
                subdomain: n,
                origin: t.config.origin,
                httpUseOneSignalCom: t.config.http_use_onesignal_com,
                cookieSyncEnabled: t.features.cookie_sync.enable,
                restrictedOriginEnabled: t.features.restrict_origin && t.features.restrict_origin.enable,
                metrics: {
                    enable: t.features.metrics.enable,
                    mixpanelReportingToken: t.features.metrics.mixpanel_reporting_token
                },
                safariWebId: t.config.safari_web_id,
                vapidPublicKey: t.config.vapid_public_key,
                onesignalVapidPublicKey: t.config.onesignal_vapid_public_key,
                emailAuthRequired: t.features.email && t.features.email.require_auth,
                userConfig: s,
                enableOnSession: t.features.enable_on_session || !1
            }
        }
        static getConfigIntegrationKind(e) {
            return e.config.integration ? e.config.integration.kind : n.Custom
        }
        static getCustomLinkConfig(e) {
            const t = {
                enabled: !1,
                style: "button",
                size: "medium",
                unsubscribeEnabled: !1,
                text: {
                    explanation: "",
                    subscribe: "",
                    unsubscribe: ""
                },
                color: {
                    button: "",
                    text: ""
                }
            };
            if (!(e && e.config && e.config.staticPrompts && e.config.staticPrompts.customlink && e.config.staticPrompts.customlink.enabled)) return t;
            const i = e.config.staticPrompts.customlink;
            return {
                enabled: i.enabled,
                style: i.style,
                size: i.size,
                unsubscribeEnabled: i.unsubscribeEnabled,
                text: i.text ? {
                    subscribe: i.text.subscribe,
                    unsubscribe: i.text.unsubscribe,
                    explanation: i.text.explanation
                } : t.text,
                color: i.color ? {
                    button: i.color.button,
                    text: i.color.text
                } : t.color
            }
        }
        static injectDefaultsIntoPromptOptions(e, t, i, n = !1) {
            let r = {
                enabled: !1
            };
            e && e.customlink && (r = e.customlink);
            const o = t.customlink,
                s = Object.assign({}, e, {
                    customlink: {
                        enabled: u.b.getValueOrDefault(r.enabled, o.enabled),
                        style: u.b.getValueOrDefault(r.style, o.style),
                        size: u.b.getValueOrDefault(r.size, o.size),
                        unsubscribeEnabled: u.b.getValueOrDefault(r.unsubscribeEnabled, o.unsubscribeEnabled),
                        text: {
                            subscribe: u.b.getValueOrDefault(r.text ? r.text.subscribe : void 0, o.text.subscribe),
                            unsubscribe: u.b.getValueOrDefault(r.text ? r.text.unsubscribe : void 0, o.text.unsubscribe),
                            explanation: u.b.getValueOrDefault(r.text ? r.text.explanation : void 0, o.text.explanation)
                        },
                        color: {
                            button: u.b.getValueOrDefault(r.color ? r.color.button : void 0, o.color.button),
                            text: u.b.getValueOrDefault(r.color ? r.color.text : void 0, o.color.text)
                        }
                    }
                });
            return s.slidedown ? (s.slidedown.enabled = !!s.slidedown.enabled, s.slidedown.autoPrompt = s.slidedown.hasOwnProperty("autoPrompt") ? !!s.slidedown.enabled && !!s.slidedown.autoPrompt : !!s.slidedown.enabled) : (s.slidedown = d.a.getSlidedownPermissionMessageOptions(s), s.slidedown.enabled = !1, s.slidedown.autoPrompt = !1), s.native ? (s.native.enabled = !!s.native.enabled, s.native.autoPrompt = s.native.hasOwnProperty("autoPrompt") ? !!s.native.enabled && !!s.native.autoPrompt : !!s.native.enabled) : s.native = {
                enabled: !1,
                autoPrompt: !1
            }, !0 === i.autoRegister && (n ? (s.native.enabled = !1, s.native.autoPrompt = !1, s.slidedown.enabled = !0, s.slidedown.autoPrompt = !0) : (s.native.enabled = !0, s.native.autoPrompt = !0)), s.autoPrompt = s.native.autoPrompt || s.slidedown.autoPrompt, s
        }
        static getPromptOptionsForDashboardConfiguration(e) {
            const t = e.config.staticPrompts,
                i = t.native ? {
                    enabled: t.native.enabled,
                    autoPrompt: t.native.enabled && !1 !== t.native.autoPrompt
                } : {
                    enabled: !1,
                    autoPrompt: !1
                },
                n = {
                    enabled: t.slidedown.enabled,
                    autoPrompt: t.slidedown.enabled && !1 !== t.slidedown.autoPrompt,
                    actionMessage: t.slidedown.actionMessage,
                    acceptButtonText: t.slidedown.acceptButton,
                    cancelButtonText: t.slidedown.cancelButton
                };
            return {
                autoPrompt: i.autoPrompt || n.autoPrompt,
                native: i,
                slidedown: n,
                fullscreen: {
                    enabled: t.fullscreen.enabled,
                    actionMessage: t.fullscreen.actionMessage,
                    acceptButton: t.fullscreen.acceptButton,
                    cancelButton: t.fullscreen.cancelButton,
                    title: t.fullscreen.title,
                    message: t.fullscreen.message,
                    caption: t.fullscreen.caption,
                    autoAcceptTitle: t.fullscreen.autoAcceptTitle
                },
                customlink: this.getCustomLinkConfig(e)
            }
        }
        static getUserConfigForConfigIntegrationKind(e, t, i, n = !1) {
            switch (this.getIntegrationCapabilities(e).configuration) {
                case l.Dashboard:
                    return {
                        appId: i.app_id, autoRegister: !1, autoResubscribe: i.config.autoResubscribe, path: i.config.serviceWorker.path, serviceWorkerPath: i.config.serviceWorker.workerName, serviceWorkerUpdaterPath: i.config.serviceWorker.updaterWorkerName, serviceWorkerParam: {
                            scope: i.config.serviceWorker.registrationScope
                        }, subdomainName: i.config.siteInfo.proxyOrigin, promptOptions: this.getPromptOptionsForDashboardConfiguration(i), welcomeNotification: {
                            disable: !i.config.welcomeNotification.enable,
                            title: i.config.welcomeNotification.title,
                            message: i.config.welcomeNotification.message,
                            url: i.config.welcomeNotification.url
                        }, notifyButton: {
                            enable: i.config.staticPrompts.bell.enabled,
                            displayPredicate: i.config.staticPrompts.bell.hideWhenSubscribed ? () => OneSignal.isPushNotificationsEnabled().then(e => !e) : null,
                            size: i.config.staticPrompts.bell.size,
                            position: i.config.staticPrompts.bell.location,
                            showCredit: !1,
                            offset: {
                                bottom: i.config.staticPrompts.bell.offset.bottom + "px",
                                left: i.config.staticPrompts.bell.offset.left + "px",
                                right: i.config.staticPrompts.bell.offset.right + "px"
                            },
                            colors: {
                                "circle.background": i.config.staticPrompts.bell.color.main,
                                "circle.foreground": i.config.staticPrompts.bell.color.accent,
                                "badge.background": "black",
                                "badge.foreground": "white",
                                "badge.bordercolor": "black",
                                "pulse.color": i.config.staticPrompts.bell.color.accent,
                                "dialog.button.background.hovering": i.config.staticPrompts.bell.color.main,
                                "dialog.button.background.active": i.config.staticPrompts.bell.color.main,
                                "dialog.button.background": i.config.staticPrompts.bell.color.main,
                                "dialog.button.foreground": "white"
                            },
                            text: {
                                "tip.state.unsubscribed": i.config.staticPrompts.bell.tooltip.unsubscribed,
                                "tip.state.subscribed": i.config.staticPrompts.bell.tooltip.subscribed,
                                "tip.state.blocked": i.config.staticPrompts.bell.tooltip.blocked,
                                "message.prenotify": i.config.staticPrompts.bell.tooltip.unsubscribed,
                                "message.action.subscribing": i.config.staticPrompts.bell.message.subscribing,
                                "message.action.subscribed": i.config.staticPrompts.bell.message.subscribing,
                                "message.action.resubscribed": i.config.staticPrompts.bell.message.subscribing,
                                "message.action.unsubscribed": i.config.staticPrompts.bell.message.unsubscribing,
                                "dialog.main.title": i.config.staticPrompts.bell.dialog.main.title,
                                "dialog.main.button.subscribe": i.config.staticPrompts.bell.dialog.main.subscribeButton,
                                "dialog.main.button.unsubscribe": i.config.staticPrompts.bell.dialog.main.unsubscribeButton,
                                "dialog.blocked.title": i.config.staticPrompts.bell.dialog.blocked.title,
                                "dialog.blocked.message": i.config.staticPrompts.bell.dialog.blocked.message
                            }
                        }, persistNotification: i.config.notificationBehavior ? i.config.notificationBehavior.display.persist : void 0, webhooks: {
                            cors: i.config.webhooks.corsEnable,
                            "notification.displayed": i.config.webhooks.notificationDisplayedHook,
                            "notification.clicked": i.config.webhooks.notificationClickedHook,
                            "notification.dismissed": i.config.webhooks.notificationDismissedHook
                        }, notificationClickHandlerMatch: i.config.notificationBehavior ? i.config.notificationBehavior.click.match : void 0, notificationClickHandlerAction: i.config.notificationBehavior ? i.config.notificationBehavior.click.action : void 0, allowLocalhostAsSecureOrigin: i.config.setupBehavior ? i.config.setupBehavior.allowLocalhostAsSecureOrigin : void 0, requiresUserPrivacyConsent: t.requiresUserPrivacyConsent
                    };
                case l.JavaScript:
                    const r = Object.assign({}, t, {
                        promptOptions: this.injectDefaultsIntoPromptOptions(t.promptOptions, i.config.staticPrompts, t, n)
                    }, {
                        serviceWorkerParam: "undefined" != typeof OneSignal && OneSignal.SERVICE_WORKER_PARAM ? OneSignal.SERVICE_WORKER_PARAM : {
                            scope: "/"
                        },
                        serviceWorkerPath: "undefined" != typeof OneSignal && OneSignal.SERVICE_WORKER_PATH ? OneSignal.SERVICE_WORKER_PATH : "OneSignalSDKWorker.js",
                        serviceWorkerUpdaterPath: "undefined" != typeof OneSignal && OneSignal.SERVICE_WORKER_UPDATER_PATH ? OneSignal.SERVICE_WORKER_UPDATER_PATH : "OneSignalSDUpdaterKWorker.js",
                        path: t.path ? t.path : "/"
                    });
                    return t.hasOwnProperty("autoResubscribe") ? r.autoResubscribe = !!t.autoResubscribe : t.hasOwnProperty("autoRegister") ? r.autoResubscribe = !!t.autoRegister : r.autoResubscribe = !!i.config.autoResubscribe, r
            }
        }
        static getSubdomainForConfigIntegrationKind(e, t, i) {
            const n = this.getIntegrationCapabilities(e);
            let r = t.subdomainName,
                o = "";
            switch (n.configuration) {
                case l.Dashboard:
                    o = i.config.siteInfo.proxyOriginEnabled ? i.config.siteInfo.proxyOrigin : void 0;
                    break;
                case l.JavaScript:
                    o = i.config.subdomain
            }
            return o && !this.shouldUseServerConfigSubdomain(r, n) ? void 0 : o
        }
        static shouldUseServerConfigSubdomain(e, t) {
            switch (t.configuration) {
                case l.Dashboard:
                    return !0;
                case l.JavaScript:
                    switch (location.protocol) {
                        case "https:":
                            return !!e;
                        case "http:":
                            return !0;
                        default:
                            return !1
                    }
            }
        }
    }
}, function(e, t) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (i = window)
    }
    e.exports = i
}, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return o
    });
    var n = i(5),
        r = i.n(n);

    function o() {
        let e;
        return e = "" === r.a.name && "" === r.a.version ? r.a._detect(navigator.userAgent) : r.a
    }
}, function(e, t, i) {
    "use strict";
    (function(e) {
        i.d(t, "a", function() {
            return y
        });
        var n = i(5),
            r = i.n(n),
            o = i(9),
            s = i(7),
            a = i(3),
            c = i(25),
            u = i(15),
            d = i(26),
            l = i(2),
            p = i(20),
            g = i(10),
            f = i(22),
            h = i(0),
            b = i(31),
            m = i(8),
            v = i(1),
            S = function(e, t, i, n) {
                return new(i || (i = Promise))(function(r, o) {
                    function s(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        e.done ? r(e.value) : new i(function(t) {
                            t(e.value)
                        }).then(s, a)
                    }
                    c((n = n.apply(e, t || [])).next())
                })
            };
        class y {
            static get VERSION() {
                return o.a.version()
            }
            static get environment() {
                return o.a
            }
            static get log() {
                return h.a
            }
            static get database() {
                return l.a
            }
            static get browser() {
                return r.a
            }
            static get workerMessenger() {
                return self.workerMessenger || (self.workerMessenger = new s.a(null)), self.workerMessenger
            }
            static run() {
                self.addEventListener("push", y.onPushReceived), self.addEventListener("notificationclose", y.onNotificationClosed), self.addEventListener("notificationclick", e => e.waitUntil(y.onNotificationClicked(e))), self.addEventListener("install", y.onServiceWorkerInstalled), self.addEventListener("activate", y.onServiceWorkerActivated), self.addEventListener("pushsubscriptionchange", e => {
                    e.waitUntil(y.onPushSubscriptionChange(e))
                }), h.a.debug("Setting up message listeners."), y.workerMessenger.listen(), y.setupMessageListeners()
            }
            static getAppId() {
                return S(this, void 0, void 0, function*() {
                    if (self.location.search) {
                        const e = self.location.search.match(/appId=([0-9a-z-]+)&?/i);
                        if (e && e.length > 1) {
                            return e[1]
                        }
                    }
                    const {
                        appId: e
                    } = yield l.a.getAppConfig();
                    return e
                })
            }
            static setupMessageListeners() {
                y.workerMessenger.on(s.b.WorkerVersion, e => {
                    h.a.debug("[Service Worker] Received worker version message."), y.workerMessenger.broadcast(s.b.WorkerVersion, o.a.version())
                }), y.workerMessenger.on(s.b.Subscribe, e => S(this, void 0, void 0, function*() {
                    const t = e;
                    h.a.debug("[Service Worker] Received subscribe message.");
                    const i = new c.a(t),
                        n = yield i.subscriptionManager.subscribe(0), r = yield i.subscriptionManager.registerSubscription(n);
                    y.workerMessenger.broadcast(s.b.Subscribe, r.serialize())
                })), y.workerMessenger.on(s.b.SubscribeNew, e => S(this, void 0, void 0, function*() {
                    const t = e;
                    h.a.debug("[Service Worker] Received subscribe new message.");
                    const i = new c.a(t),
                        n = yield i.subscriptionManager.subscribe(1), r = yield i.subscriptionManager.registerSubscription(n);
                    y.workerMessenger.broadcast(s.b.SubscribeNew, r.serialize())
                })), y.workerMessenger.on(s.b.AmpSubscriptionState, e => S(this, void 0, void 0, function*() {
                    h.a.debug("[Service Worker] Received AMP subscription state message.");
                    const e = yield self.registration.pushManager.getSubscription();
                    if (e) {
                        const t = yield self.registration.pushManager.permissionState(e.options), {
                            optedOut: i
                        } = yield l.a.getSubscription(), n = !!e && "granted" === t && !0 !== i;
                        y.workerMessenger.broadcast(s.b.AmpSubscriptionState, n)
                    } else y.workerMessenger.broadcast(s.b.AmpSubscriptionState, !1)
                })), y.workerMessenger.on(s.b.AmpSubscribe, () => S(this, void 0, void 0, function*() {
                    h.a.debug("[Service Worker] Received AMP subscribe message.");
                    const e = yield y.getAppId(), t = yield b.a.getAppConfig({
                        appId: e
                    }, d.a.downloadServerAppConfig), i = new c.a(t), n = yield i.subscriptionManager.subscribe(0), r = yield i.subscriptionManager.registerSubscription(n);
                    y.workerMessenger.broadcast(s.b.AmpSubscribe, r.deviceId)
                })), y.workerMessenger.on(s.b.AmpUnsubscribe, () => S(this, void 0, void 0, function*() {
                    h.a.debug("[Service Worker] Received AMP unsubscribe message.");
                    const e = yield y.getAppId(), t = yield b.a.getAppConfig({
                        appId: e
                    }, d.a.downloadServerAppConfig);
                    yield new c.a(t).subscriptionManager.unsubscribe(1), y.workerMessenger.broadcast(s.b.AmpUnsubscribe, null)
                }))
            }
            static onPushReceived(e) {
                h.a.debug(`Called %conPushReceived(${JSON.stringify(e,null,4)}):`, v.a.getConsoleStyle("code"), e), e.waitUntil(y.parseOrFetchNotifications(e).then(e => {
                    if (!e || 0 == e.length) return h.a.debug("Because no notifications were retrieved, we'll display the last known notification, so long as it isn't the welcome notification."), y.displayBackupNotification();
                    let t = [];
                    for (let i of e) {
                        h.a.debug("Raw Notification from OneSignal:", i);
                        let e = y.buildStructuredNotificationObject(i);
                        t.push((e => y.displayNotification(e).then(() => y.updateBackupNotification(e).catch(e => h.a.error(e))).then(() => y.workerMessenger.broadcast(s.b.NotificationDisplayed, e).catch(e => h.a.error(e))).then(() => y.executeWebhooks("notification.displayed", e).catch(e => h.a.error(e)))).bind(null, e))
                    }
                    return t.reduce((e, t) => e.then(t), Promise.resolve())
                }).catch(e => (h.a.debug("Failed to display a notification:", e), y.UNSUBSCRIBED_FROM_NOTIFICATIONS ? void h.a.debug("Because we have just unsubscribed from notifications, we will not show anything.") : (h.a.debug("Because a notification failed to display, we'll display the last known notification, so long as it isn't the welcome notification."), y.displayBackupNotification()))))
            }
            static executeWebhooks(e, t) {
                return S(this, void 0, void 0, function*() {
                    const {
                        deviceId: i
                    } = yield l.a.getSubscription(), n = yield l.a.get("Options", "webhooks.cors"), r = yield l.a.get("Options", `webhooks.${e}`);
                    if (r) {
                        const o = {
                                event: e,
                                id: t.id,
                                userId: i,
                                action: t.action,
                                buttons: t.buttons,
                                heading: t.heading,
                                content: t.content,
                                url: t.url,
                                icon: t.icon,
                                data: t.data
                            },
                            s = {
                                method: "post",
                                mode: "no-cors",
                                body: JSON.stringify(o)
                            };
                        return n && (s.mode = "cors", s.headers = {
                            "X-OneSignal-Event": e,
                            "Content-Type": "application/json"
                        }), h.a.debug(`Executing ${e} webhook ${n?"with":"without"} CORS %cPOST ${r}`, v.a.getConsoleStyle("code"), ":", o), yield fetch(r, s)
                    }
                })
            }
            static getActiveClients() {
                return S(this, void 0, void 0, function*() {
                    const e = yield self.clients.matchAll({
                        type: "window",
                        includeUncontrolled: !0
                    });
                    let t = [];
                    for (let i of e) {
                        if (i.frameType && "nested" === i.frameType) {
                            if (!v.a.contains(i.url, a.a.getOneSignalApiUrl().host) && !v.a.contains(i.url, ".os.tc")) continue;
                            i.isSubdomainIframe = !0
                        }
                        t.push(i)
                    }
                    return t
                })
            }
            static buildStructuredNotificationObject(e) {
                let t = {
                    id: e.custom.i,
                    heading: e.title,
                    content: e.alert,
                    data: e.custom.a,
                    url: e.custom.u,
                    icon: e.icon,
                    image: e.image,
                    tag: e.tag,
                    badge: e.badge,
                    vibrate: e.vibrate
                };
                if (e.o) {
                    t.buttons = [];
                    for (let i of e.o) t.buttons.push({
                        action: i.i,
                        title: i.n,
                        icon: i.p,
                        url: i.u
                    })
                }
                return v.a.trimUndefined(t)
            }
            static ensureImageResourceHttps(e) {
                if (!e) return null;
                try {
                    let t = new URL(e);
                    return "localhost" === t.hostname || -1 !== t.hostname.indexOf("192.168") || "127.0.0.1" === t.hostname || "https:" === t.protocol ? e : "i0.wp.com" === t.hostname || "i1.wp.com" === t.hostname || "i2.wp.com" === t.hostname || "i3.wp.com" === t.hostname ? `https://${t.hostname}${t.pathname}` : `https://i0.wp.com/${t.host+t.pathname}`
                } catch (e) {}
            }
            static ensureNotificationResourcesHttps(e) {
                if (e && (e.icon && (e.icon = y.ensureImageResourceHttps(e.icon)), e.image && (e.image = y.ensureImageResourceHttps(e.image)), e.buttons && e.buttons.length > 0))
                    for (let t of e.buttons) t.icon && (t.icon = y.ensureImageResourceHttps(t.icon))
            }
            static displayNotification(e, t) {
                return S(this, void 0, void 0, function*() {
                    h.a.debug(`Called %cdisplayNotification(${JSON.stringify(e,null,4)}):`, v.a.getConsoleStyle("code"), e);
                    const i = yield y._getTitle(), n = yield l.a.get("Options", "defaultIcon"), r = yield l.a.get("Options", "persistNotification"), o = yield y.getAppId();
                    e.heading = e.heading ? e.heading : i, e.icon = e.icon ? e.icon : n || void 0;
                    var s = {};
                    s.tag = e.tag || o, s.persistNotification = "force" === r || r, t || (t = {}), e = Object.assign({}, e, t), y.ensureNotificationResourcesHttps(e);
                    let a = {
                        body: e.content,
                        icon: e.icon,
                        image: e.image,
                        data: e,
                        actions: e.buttons,
                        tag: s.tag,
                        requireInteraction: s.persistNotification,
                        renotify: !0,
                        badge: e.badge,
                        vibrate: e.vibrate
                    };
                    return a = y.filterNotificationOptions(a, "force" === r), self.registration.showNotification(e.heading, a)
                })
            }
            static filterNotificationOptions(e, t) {
                if ("object" != typeof e) return e; {
                    const n = Object.assign({}, e);
                    if ("" === r.a.name && "" === r.a.version) var i = r.a._detect(navigator.userAgent);
                    else i = r.a;
                    return i.chrome && i.mac && n && (n.requireInteraction = !1), t && (n.requireInteraction = !0), n
                }
            }
            static updateBackupNotification(e) {
                return S(this, void 0, void 0, function*() {
                    e.data && e.data.__isOneSignalWelcomeNotification || (yield l.a.put("Ids", {
                        type: "backupNotification",
                        id: e
                    }))
                })
            }
            static displayBackupNotification() {
                return l.a.get("Ids", "backupNotification").then(e => {
                    let t = {
                        persistNotification: !1,
                        data: {
                            __isOneSignalBackupNotification: !0
                        }
                    };
                    return e ? y.displayNotification(e, t) : y.displayNotification({
                        content: "You have new updates."
                    }, t)
                })
            }
            static shouldOpenNotificationUrl(e) {
                return "javascript:void(0);" !== e && "do_not_open" !== e && !v.a.contains(e, "_osp=do_not_open")
            }
            static onNotificationClosed(e) {
                h.a.debug(`Called %conNotificationClosed(${JSON.stringify(e,null,4)}):`, v.a.getConsoleStyle("code"), e);
                let t = e.notification.data;
                y.workerMessenger.broadcast(s.b.NotificationDismissed, t).catch(e => h.a.error(e)), e.waitUntil(y.executeWebhooks("notification.dismissed", t))
            }
            static getNotificationUrlToOpen(e) {
                return S(this, void 0, void 0, function*() {
                    let t = self.registration.scope;
                    const {
                        defaultNotificationUrl: i
                    } = yield l.a.getAppState();
                    if (i && (t = i), e.action)
                        for (let i of e.buttons) i.action === e.action && i.url && "" !== i.url && (t = i.url);
                    else e.url && "" !== e.url && (t = e.url);
                    return t
                })
            }
            static onNotificationClicked(e) {
                return S(this, void 0, void 0, function*() {
                    h.a.debug(`Called %conNotificationClicked(${JSON.stringify(e,null,4)}):`, v.a.getConsoleStyle("code"), e), e.notification.close();
                    const t = e.notification.data;
                    e.action && (t.action = e.action);
                    let i = "exact",
                        n = "navigate";
                    const r = yield l.a.get("Options", "notificationClickHandlerMatch");
                    r && (i = r);
                    const o = yield this.database.get("Options", "notificationClickHandlerAction");
                    o && (n = o);
                    const a = yield y.getActiveClients(), c = yield y.getNotificationUrlToOpen(t), u = y.shouldOpenNotificationUrl(c), {
                        appId: d
                    } = yield l.a.getAppConfig(), {
                        deviceId: p
                    } = yield l.a.getSubscription(), g = y.sendConvertedAPIRequests(d, p, t);
                    let f = !1;
                    for (const e of a) {
                        let r = e.url;
                        if (e.isSubdomainIframe) {
                            const e = yield l.a.get("Options", "lastKnownHostUrl");
                            r = e, e || (r = yield l.a.get("Options", "defaultUrl"))
                        }
                        let o = "";
                        try {
                            o = new URL(r).origin
                        } catch (e) {
                            h.a.error("Failed to get the HTTP site's actual origin:", e)
                        }
                        let a = null;
                        try {
                            a = new URL(c).origin
                        } catch (e) {}
                        if ("exact" === i && r === c || "origin" === i && o === a) {
                            if (e.isSubdomainIframe && r === c || !e.isSubdomainIframe && e.url === c || "focus" === n && o === a) {
                                y.workerMessenger.unicast(s.b.NotificationClicked, t, e);
                                try {
                                    yield e.focus()
                                } catch (t) {
                                    h.a.error("Failed to focus:", e, t)
                                }
                            } else if (e.isSubdomainIframe) {
                                try {
                                    h.a.debug("Client is subdomain iFrame. Attempting to focus() client."), yield e.focus()
                                } catch (t) {
                                    h.a.error("Failed to focus:", e, t)
                                }
                                u ? (h.a.debug(`Redirecting HTTP site to ${c}.`), yield l.a.put("NotificationOpened", {
                                    url: c,
                                    data: t,
                                    timestamp: Date.now()
                                }), y.workerMessenger.unicast(s.b.RedirectPage, c, e)) : h.a.debug("Not navigating because link is special.")
                            } else if (e.navigate) {
                                try {
                                    h.a.debug("Client is standard HTTPS site. Attempting to focus() client."), yield e.focus()
                                } catch (t) {
                                    h.a.error("Failed to focus:", e, t)
                                }
                                try {
                                    u ? (h.a.debug(`Redirecting HTTPS site to (${c}).`), yield l.a.put("NotificationOpened", {
                                        url: c,
                                        data: t,
                                        timestamp: Date.now()
                                    }), yield e.navigate(c)) : h.a.debug("Not navigating because link is special.")
                                } catch (t) {
                                    h.a.error("Failed to navigate:", e, c, t)
                                }
                            } else yield l.a.put("NotificationOpened", {
                                url: c,
                                data: t,
                                timestamp: Date.now()
                            }), yield y.openUrl(c);
                            f = !0;
                            break
                        }
                    }
                    return u && !f && (yield l.a.put("NotificationOpened", {
                        url: c,
                        data: t,
                        timestamp: Date.now()
                    }), yield y.openUrl(c)), yield g
                })
            }
            static sendConvertedAPIRequests(e, t, i) {
                return S(this, void 0, void 0, function*() {
                    if (!i.id) return void console.error("No notification id, skipping networks calls to report open!");
                    let n;
                    e ? n = u.b.put(`notifications/${i.id}`, {
                        app_id: e,
                        player_id: t,
                        opened: !0
                    }) : console.error("No app Id, skipping OneSignal API call for notification open!"), yield y.executeWebhooks("notification.clicked", i), n && (yield n)
                })
            }
            static openUrl(e) {
                return S(this, void 0, void 0, function*() {
                    h.a.debug("Opening notification URL:", e);
                    try {
                        return yield self.clients.openWindow(e)
                    } catch (t) {
                        return void h.a.warn(`Failed to open the URL '${e}':`, t)
                    }
                })
            }
            static onServiceWorkerInstalled(e) {
                e.waitUntil(self.skipWaiting())
            }
            static onServiceWorkerActivated(e) {
                h.a.info(`%cOneSignal Service Worker activated (version ${o.a.version()}, ${a.a.getWindowEnv().toString()} environment).`, v.a.getConsoleStyle("bold")), e.waitUntil(self.clients.claim())
            }
            static onPushSubscriptionChange(e) {
                return S(this, void 0, void 0, function*() {
                    h.a.debug(`Called %conPushSubscriptionChange(${JSON.stringify(e,null,4)}):`, v.a.getConsoleStyle("code"), e);
                    const t = yield y.getAppId();
                    if (!t) return;
                    const i = yield b.a.getAppConfig({
                        appId: t
                    }, d.a.downloadServerAppConfig);
                    if (!i) return;
                    const n = new c.a(i);
                    let r, o; {
                        let {
                            deviceId: i
                        } = yield l.a.getSubscription();
                        if (!(r = !!i) && e.oldSubscription) {
                            i = yield d.a.getUserIdFromSubscriptionIdentifier(t, f.a.prototype.getDeliveryPlatform(), e.oldSubscription.endpoint);
                            const n = yield l.a.getSubscription();
                            n.deviceId = i, yield l.a.setSubscription(n)
                        }
                        r = !!i
                    }
                    const s = e.newSubscription;
                    if (s) o = p.a.setFromW3cSubscription(s);
                    else try {
                        o = yield n.subscriptionManager.subscribe(1)
                    } catch (e) {}
                    if (r || !!o) {
                        let e = null;
                        "granted" !== (yield navigator.permissions.query({
                            name: "push",
                            userVisibleOnly: !0
                        })) ? e = g.a.PermissionRevoked: o || (e = g.a.PushSubscriptionRevoked), yield n.subscriptionManager.registerSubscription(o, e)
                    } else yield l.a.remove("Ids", "userId"), yield l.a.remove("Ids", "registrationId")
                })
            }
            static _getTitle() {
                return new Promise(e => {
                    Promise.all([l.a.get("Options", "defaultTitle"), l.a.get("Options", "pageTitle")]).then(([t, i]) => {
                        e(null !== t ? t : null != i ? i : "")
                    })
                })
            }
            static parseOrFetchNotifications(e) {
                if (e.data) {
                    return y.isValidPushPayload(e.data) ? (h.a.debug("Received a valid encrypted push payload."), Promise.resolve([e.data.json()])) : Promise.reject("Unexpected push message payload received: " + e.data.text())
                }
                return y.retrieveNotifications()
            }
            static isValidPushPayload(e) {
                try {
                    const t = e.json();
                    return !!(t && t.custom && t.custom.i && m.a.isValidUuid(t.custom.i)) || (h.a.debug("isValidPushPayload: Valid JSON but missing notification UUID:", t), !1)
                } catch (e) {
                    return h.a.debug("isValidPushPayload: Parsing to JSON failed with:", e), !1
                }
            }
            static retrieveNotifications() {
                return new Promise(e => {
                    var t = [];
                    l.a.get("Ids", "userId").then(e => e ? (h.a.debug(`Legacy push signal received, retrieving contents from players/${e}/chromeweb_notification`), u.b.get(`players/${e}/chromeweb_notification`)) : (h.a.debug("Tried to get notification contents, but IndexedDB is missing user ID info."), Promise.all([y.getAppId(), self.registration.pushManager.getSubscription().then(e => e.endpoint)]).then(([e, t]) => {
                        let i = f.a.prototype.getDeliveryPlatform();
                        return d.a.getUserIdFromSubscriptionIdentifier(e, i, t).then(e => e ? (h.a.debug("Recovered OneSignal user ID:", e), Promise.all([l.a.put("Ids", {
                            type: "userId",
                            id: e
                        }), l.a.put("Ids", {
                            type: "registrationId",
                            id: t.replace(new RegExp("^(https://android.googleapis.com/gcm/send/|https://updates.push.services.mozilla.com/push/)"), "")
                        })]).then(() => (h.a.debug("Attempting to retrieve the notification again now with a recovered user ID."), u.b.get(`players/${e}/chromeweb_notification`)))) : Promise.reject("Recovered user ID was null. Unsubscribing from push notifications."))
                    }).catch(e => (h.a.debug("Unsuccessfully attempted to recover OneSignal user ID:", e), self.registration.pushManager.getSubscription().then(e => e.unsubscribe()).then(e => {
                        h.a.debug("Unsubscribed from push notifications result:", e), y.UNSUBSCRIBED_FROM_NOTIFICATIONS = !0
                    }))))).then(i => {
                        for (var n = 0; n < i.length; n++) t.push(JSON.parse(i[n]));
                        0 == t.length && h.a.warn("OneSignal Worker: Received a GCM push signal, but there were no messages to retrieve. Are you using the wrong API URL?", a.a.getOneSignalApiUrl().toString()), e(t)
                    })
                })
            }
        }
        "undefined" == typeof self && void 0 !== e ? e.OneSignalWorker = y : self.OneSignalWorker = y, "undefined" != typeof self && y.run()
    }).call(this, i(32))
}, function(e, t) {
    e.exports = function() {
        throw new Error("define cannot be used indirect")
    }
}, function(e, t, i) {
    "use strict";
    i.r(t);
    var n = i(34);
    self.OneSignal = n.a
}]);
//# sourceMappingURL=OneSignalSDKWorker.js.map