


// /*! For license information please see script.js.LICENSE.txt */
// (() => {
//     "use strict";
//     var e = {
//             910: (e, t, o) => {
//                 o.r(t), o.d(t, {
//                     Properties: () => n,
//                     VariableDescriptor: () => i,
//                     bootstrapExtra: () => X,
//                     findLayerBoundaries: () => h,
//                     findLayersBoundaries: () => g,
//                     getLayersMap: () => u,
//                     getVariables: () => a,
//                     initDoors: () => F,
//                     initPropertiesTemplates: () => U,
//                     initVariableActionLayer: () => H,
//                     openConfig: () => s
//                 });
//                 class n {
//                     constructor(e) {
//                         this.properties = null != e ? e : []
//                     }
//                     get(e) {
//                         const t = this.properties.filter((t => t.name === e)).map((e => e.value));
//                         if (t.length > 1) throw new Error('Expected only one property to be named "' + e + '"');
//                         if (0 !== t.length) return t[0]
//                     }
//                     getString(e) {
//                         return this.getByType(e, "string")
//                     }
//                     getNumber(e) {
//                         return this.getByType(e, "number")
//                     }
//                     getBoolean(e) {
//                         return this.getByType(e, "boolean")
//                     }
//                     getByType(e, t) {
//                         const o = this.get(e);
//                         if (void 0 !== o) {
//                             if (typeof o !== t) throw new Error('Expected property "' + e + '" to have type "' + t + '"');
//                             return o
//                         }
//                     }
//                     mustGetString(e) {
//                         return this.mustGetByType(e, "string")
//                     }
//                     mustGetNumber(e) {
//                         return this.mustGetByType(e, "number")
//                     }
//                     mustGetBoolean(e) {
//                         return this.mustGetByType(e, "boolean")
//                     }
//                     mustGetByType(e, t) {
//                         const o = this.get(e);
//                         if (void 0 === o) throw new Error('Property "' + e + '" is missing');
//                         if (typeof o !== t) throw new Error('Expected property "' + e + '" to have type "' + t + '"');
//                         return o
//                     }
//                     getType(e) {
//                         const t = this.properties.filter((t => t.name === e)).map((e => e.type));
//                         if (t.length > 1) throw new Error('Expected only one property to be named "' + e + '"');
//                         if (0 !== t.length) return t[0]
//                     }
//                 }
//                 const r = "https://unpkg.com/@workadventure/scripting-api-extra@1.3.2/dist";
//                 class i {
//                     constructor(e) {
//                         this.name = e.name, this.x = e.x, this.y = e.y, this.properties = new n(e.properties)
//                     }
//                     get isReadable() {
//                         const e = this.properties.getString("readableBy");
//                         return !e || WA.player.tags.includes(e)
//                     }
//                     get isWritable() {
//                         const e = this.properties.getString("writableBy");
//                         return !e || WA.player.tags.includes(e)
//                     }
//                 }

//                 function s(e) {
//                     const t = e ? "#" + e.join() : "";
//                     WA.nav.openCoWebSite(r + "/configuration.html" + t)
//                 }
//                 async function a(e, t) {
//                     const o = await WA.room.getTiledMap(),
//                         n = new Map;
//                     return l(o.layers, n, e, t), n
//                 }

//                 function l(e, t, o, n) {
//                     for (const r of e)
//                         if ("objectgroup" === r.type) {
//                             for (const e of r.objects)
//                                 if ("variable" === e.type) {
//                                     if (o && r.name !== o) continue;
//                                     if (n && !n.includes(e.name)) continue;
//                                     t.set(e.name, new i(e))
//                                 }
//                         } else "group" === r.type && l(r.layers, t, o, n)
//                 }
//                 let c;
//                 async function u() {
//                     return void 0 === c && (c = async function () {
//                         return function (e) {
//                             const t = new Map;
//                             return p(e.layers, "", t), t
//                         }(await WA.room.getTiledMap())
//                     }()), c
//                 }

//                 function p(e, t, o) {
//                     for (const n of e) "group" === n.type ? p(n.layers, t + n.name + "/", o) : (n.name = t + n.name, o.set(n.name, n))
//                 }

//                 function h(e) {
//                     let t = 1 / 0,
//                         o = 1 / 0,
//                         n = 0,
//                         r = 0;
//                     const i = e.data;
//                     if ("string" == typeof i) throw new Error("Unsupported tile layer data stored as string instead of CSV");
//                     for (let s = 0; s < e.height; s++)
//                         for (let a = 0; a < e.width; a++) 0 !== i[a + s * e.width] && (t = Math.min(t, a), r = Math.max(r, a), o = Math.min(o, s), n = Math.max(n, s));
//                     return {
//                         top: o,
//                         left: t,
//                         right: r + 1,
//                         bottom: n + 1
//                     }
//                 }

//                 function g(e) {
//                     let t = 1 / 0,
//                         o = 1 / 0,
//                         n = 0,
//                         r = 0;
//                     for (const i of e) {
//                         const e = h(i);
//                         e.left < t && (t = e.left), e.top < o && (o = e.top), e.right > r && (r = e.right), e.bottom > n && (n = e.bottom)
//                     }
//                     return {
//                         top: o,
//                         left: t,
//                         right: r,
//                         bottom: n
//                     }
//                 }
//                 var f = Object.prototype.toString,
//                     d = Array.isArray || function (e) {
//                         return "[object Array]" === f.call(e)
//                     };

//                 function y(e) {
//                     return "function" == typeof e
//                 }

//                 function m(e) {
//                     return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
//                 }

//                 function v(e, t) {
//                     return null != e && "object" == typeof e && t in e
//                 }
//                 var w = RegExp.prototype.test,
//                     b = /\S/;
//                 var A = {
//                         "&": "&amp;",
//                         "<": "&lt;",
//                         ">": "&gt;",
//                         '"': "&quot;",
//                         "'": "&#39;",
//                         "/": "&#x2F;",
//                         "`": "&#x60;",
//                         "=": "&#x3D;"
//                     },
//                     W = /\s*/,
//                     S = /\s+/,
//                     B = /\s*=/,
//                     x = /\s*\}/,
//                     C = /#|\^|\/|>|\{|&|=|!/;

//                 function E(e) {
//                     this.string = e, this.tail = e, this.pos = 0
//                 }

//                 function T(e, t) {
//                     this.view = e, this.cache = {
//                         ".": this.view
//                     }, this.parent = t
//                 }

//                 function P() {
//                     this.templateCache = {
//                         _cache: {},
//                         set: function (e, t) {
//                             this._cache[e] = t
//                         },
//                         get: function (e) {
//                             return this._cache[e]
//                         },
//                         clear: function () {
//                             this._cache = {}
//                         }
//                     }
//                 }
//                 E.prototype.eos = function () {
//                     return "" === this.tail
//                 }, E.prototype.scan = function (e) {
//                     var t = this.tail.match(e);
//                     if (!t || 0 !== t.index) return "";
//                     var o = t[0];
//                     return this.tail = this.tail.substring(o.length), this.pos += o.length, o
//                 }, E.prototype.scanUntil = function (e) {
//                     var t, o = this.tail.search(e);
//                     switch (o) {
//                         case -1:
//                             t = this.tail, this.tail = "";
//                             break;
//                         case 0:
//                             t = "";
//                             break;
//                         default:
//                             t = this.tail.substring(0, o), this.tail = this.tail.substring(o)
//                     }
//                     return this.pos += t.length, t
//                 }, T.prototype.push = function (e) {
//                     return new T(e, this)
//                 }, T.prototype.lookup = function (e) {
//                     var t, o, n, r = this.cache;
//                     if (r.hasOwnProperty(e)) t = r[e];
//                     else {
//                         for (var i, s, a, l = this, c = !1; l;) {
//                             if (e.indexOf(".") > 0)
//                                 for (i = l.view, s = e.split("."), a = 0; null != i && a < s.length;) a === s.length - 1 && (c = v(i, s[a]) || (o = i, n = s[a], null != o && "object" != typeof o && o.hasOwnProperty && o.hasOwnProperty(n))), i = i[s[a++]];
//                             else i = l.view[e], c = v(l.view, e);
//                             if (c) {
//                                 t = i;
//                                 break
//                             }
//                             l = l.parent
//                         }
//                         r[e] = t
//                     }
//                     return y(t) && (t = t.call(this.view)), t
//                 }, P.prototype.clearCache = function () {
//                     void 0 !== this.templateCache && this.templateCache.clear()
//                 }, P.prototype.parse = function (e, t) {
//                     var o = this.templateCache,
//                         n = e + ":" + (t || L.tags).join(":"),
//                         r = void 0 !== o,
//                         i = r ? o.get(n) : void 0;
//                     return null == i && (i = function (e, t) {
//                         if (!e) return [];
//                         var o, n, r, i, s = !1,
//                             a = [],
//                             l = [],
//                             c = [],
//                             u = !1,
//                             p = !1,
//                             h = "",
//                             g = 0;

//                         function f() {
//                             if (u && !p)
//                                 for (; c.length;) delete l[c.pop()];
//                             else c = [];
//                             u = !1, p = !1
//                         }

//                         function y(e) {
//                             if ("string" == typeof e && (e = e.split(S, 2)), !d(e) || 2 !== e.length) throw new Error("Invalid tags: " + e);
//                             o = new RegExp(m(e[0]) + "\\s*"), n = new RegExp("\\s*" + m(e[1])), r = new RegExp("\\s*" + m("}" + e[1]))
//                         }
//                         y(t || L.tags);
//                         for (var v, A, T, P, M, k, V = new E(e); !V.eos();) {
//                             if (v = V.pos, T = V.scanUntil(o))
//                                 for (var U = 0, j = T.length; U < j; ++U) i = P = T.charAt(U),
//                                     function (e, t) {
//                                         return w.call(e, t)
//                                     }(b, i) ? (p = !0, s = !0, h += " ") : (c.push(l.length), h += P), l.push(["text", P, v, v + 1]), v += 1, "\n" === P && (f(), h = "", g = 0, s = !1);
//                             if (!V.scan(o)) break;
//                             if (u = !0, A = V.scan(C) || "name", V.scan(W), "=" === A ? (T = V.scanUntil(B), V.scan(B), V.scanUntil(n)) : "{" === A ? (T = V.scanUntil(r), V.scan(x), V.scanUntil(n), A = "&") : T = V.scanUntil(n), !V.scan(n)) throw new Error("Unclosed tag at " + V.pos);
//                             if (M = ">" == A ? [A, T, v, V.pos, h, g, s] : [A, T, v, V.pos], g++, l.push(M), "#" === A || "^" === A) a.push(M);
//                             else if ("/" === A) {
//                                 if (!(k = a.pop())) throw new Error('Unopened section "' + T + '" at ' + v);
//                                 if (k[1] !== T) throw new Error('Unclosed section "' + k[1] + '" at ' + v)
//                             } else "name" === A || "{" === A || "&" === A ? p = !0 : "=" === A && y(T)
//                         }
//                         if (f(), k = a.pop()) throw new Error('Unclosed section "' + k[1] + '" at ' + V.pos);
//                         return function (e) {
//                             for (var t, o = [], n = o, r = [], i = 0, s = e.length; i < s; ++i) switch ((t = e[i])[0]) {
//                                 case "#":
//                                 case "^":
//                                     n.push(t), r.push(t), n = t[4] = [];
//                                     break;
//                                 case "/":
//                                     r.pop()[5] = t[2], n = r.length > 0 ? r[r.length - 1][4] : o;
//                                     break;
//                                 default:
//                                     n.push(t)
//                             }
//                             return o
//                         }(function (e) {
//                             for (var t, o, n = [], r = 0, i = e.length; r < i; ++r)(t = e[r]) && ("text" === t[0] && o && "text" === o[0] ? (o[1] += t[1], o[3] = t[3]) : (n.push(t), o = t));
//                             return n
//                         }(l))
//                     }(e, t), r && o.set(n, i)), i
//                 }, P.prototype.render = function (e, t, o, n) {
//                     var r = this.getConfigTags(n),
//                         i = this.parse(e, r),
//                         s = t instanceof T ? t : new T(t, void 0);
//                     return this.renderTokens(i, s, o, e, n)
//                 }, P.prototype.renderTokens = function (e, t, o, n, r) {
//                     for (var i, s, a, l = "", c = 0, u = e.length; c < u; ++c) a = void 0, "#" === (s = (i = e[c])[0]) ? a = this.renderSection(i, t, o, n, r) : "^" === s ? a = this.renderInverted(i, t, o, n, r) : ">" === s ? a = this.renderPartial(i, t, o, r) : "&" === s ? a = this.unescapedValue(i, t) : "name" === s ? a = this.escapedValue(i, t, r) : "text" === s && (a = this.rawValue(i)), void 0 !== a && (l += a);
//                     return l
//                 }, P.prototype.renderSection = function (e, t, o, n, r) {
//                     var i = this,
//                         s = "",
//                         a = t.lookup(e[1]);
//                     if (a) {
//                         if (d(a))
//                             for (var l = 0, c = a.length; l < c; ++l) s += this.renderTokens(e[4], t.push(a[l]), o, n, r);
//                         else if ("object" == typeof a || "string" == typeof a || "number" == typeof a) s += this.renderTokens(e[4], t.push(a), o, n, r);
//                         else if (y(a)) {
//                             if ("string" != typeof n) throw new Error("Cannot use higher-order sections without the original template");
//                             null != (a = a.call(t.view, n.slice(e[3], e[5]), (function (e) {
//                                 return i.render(e, t, o, r)
//                             }))) && (s += a)
//                         } else s += this.renderTokens(e[4], t, o, n, r);
//                         return s
//                     }
//                 }, P.prototype.renderInverted = function (e, t, o, n, r) {
//                     var i = t.lookup(e[1]);
//                     if (!i || d(i) && 0 === i.length) return this.renderTokens(e[4], t, o, n, r)
//                 }, P.prototype.indentPartial = function (e, t, o) {
//                     for (var n = t.replace(/[^ \t]/g, ""), r = e.split("\n"), i = 0; i < r.length; i++) r[i].length && (i > 0 || !o) && (r[i] = n + r[i]);
//                     return r.join("\n")
//                 }, P.prototype.renderPartial = function (e, t, o, n) {
//                     if (o) {
//                         var r = this.getConfigTags(n),
//                             i = y(o) ? o(e[1]) : o[e[1]];
//                         if (null != i) {
//                             var s = e[6],
//                                 a = e[5],
//                                 l = e[4],
//                                 c = i;
//                             0 == a && l && (c = this.indentPartial(i, l, s));
//                             var u = this.parse(c, r);
//                             return this.renderTokens(u, t, o, c, n)
//                         }
//                     }
//                 }, P.prototype.unescapedValue = function (e, t) {
//                     var o = t.lookup(e[1]);
//                     if (null != o) return o
//                 }, P.prototype.escapedValue = function (e, t, o) {
//                     var n = this.getConfigEscape(o) || L.escape,
//                         r = t.lookup(e[1]);
//                     if (null != r) return "number" == typeof r && n === L.escape ? String(r) : n(r)
//                 }, P.prototype.rawValue = function (e) {
//                     return e[1]
//                 }, P.prototype.getConfigTags = function (e) {
//                     return d(e) ? e : e && "object" == typeof e ? e.tags : void 0
//                 }, P.prototype.getConfigEscape = function (e) {
//                     return e && "object" == typeof e && !d(e) ? e.escape : void 0
//                 };
//                 var L = {
//                         name: "mustache.js",
//                         version: "4.2.0",
//                         tags: ["{{", "}}"],
//                         clearCache: void 0,
//                         escape: void 0,
//                         parse: void 0,
//                         render: void 0,
//                         Scanner: void 0,
//                         Context: void 0,
//                         Writer: void 0,
//                         set templateCache(e) {
//                             M.templateCache = e
//                         },
//                         get templateCache() {
//                             return M.templateCache
//                         }
//                     },
//                     M = new P;
//                 L.clearCache = function () {
//                     return M.clearCache()
//                 }, L.parse = function (e, t) {
//                     return M.parse(e, t)
//                 }, L.render = function (e, t, o, n) {
//                     if ("string" != typeof e) throw new TypeError('Invalid template! Template should be a "string" but "' + (d(r = e) ? "array" : typeof r) + '" was given as the first argument for mustache#render(template, view, partials)');
//                     var r;
//                     return M.render(e, t, o, n)
//                 }, L.escape = function (e) {
//                     return String(e).replace(/[&<>"'`=\/]/g, (function (e) {
//                         return A[e]
//                     }))
//                 }, L.Scanner = E, L.Context = T, L.Writer = P;
//                 const k = L;
//                 class V {
//                     constructor(e, t) {
//                         this.template = e, this.state = t, this.ast = k.parse(e)
//                     }
//                     getValue() {
//                         return void 0 === this.value && (this.value = k.render(this.template, this.state)), this.value
//                     }
//                     onChange(e) {
//                         const t = [];
//                         for (const o of this.getUsedVariables().values()) t.push(this.state.onVariableChange(o).subscribe((() => {
//                             const t = k.render(this.template, this.state);
//                             t !== this.value && (this.value = t, e(this.value))
//                         })));
//                         return {
//                             unsubscribe: () => {
//                                 for (const e of t) e.unsubscribe()
//                             }
//                         }
//                     }
//                     isPureString() {
//                         return 0 === this.ast.length || 1 === this.ast.length && "text" === this.ast[0][0]
//                     }
//                     getUsedVariables() {
//                         const e = new Set;
//                         return this.recursiveGetUsedVariables(this.ast, e), e
//                     }
//                     recursiveGetUsedVariables(e, t) {
//                         for (const o of e) {
//                             const e = o[0],
//                                 n = o[1],
//                                 r = o[4];
//                             ["name", "&", "#", "^"].includes(e) && t.add(n), void 0 !== r && "string" != typeof r && this.recursiveGetUsedVariables(r, t)
//                         }
//                     }
//                 }
//                 async function U() {
//                     var e;
//                     const t = await u();
//                     for (const [o, n] of t.entries()) {
//                         const t = null !== (e = n.properties) && void 0 !== e ? e : [];
//                         for (const e of t) {
//                             if ("int" === e.type || "bool" === e.type || "object" === e.type || "string" != typeof e.value) continue;
//                             const t = new V(e.value, WA.state);
//                             if (t.isPureString()) continue;
//                             const n = t.getValue();
//                             j(o, e.name, n), t.onChange((t => {
//                                 j(o, e.name, t)
//                             }))
//                         }
//                     }
//                 }

//                 function j(e, t, o) {
//                     WA.room.setProperty(e, t, o), "visible" === t && (o ? WA.room.showLayer(e) : WA.room.hideLayer(e))
//                 }
//                 let G, O, I = 0,
//                     R = 0;

//                 function D(e) {
//                     if (WA.state[e.name]) {
//                         let t = e.properties.mustGetString("openLayer");
//                         for (const e of t.split("\n")) WA.room.showLayer(e);
//                         t = e.properties.mustGetString("closeLayer");
//                         for (const e of t.split("\n")) WA.room.hideLayer(e)
//                     } else {
//                         let t = e.properties.mustGetString("openLayer");
//                         for (const e of t.split("\n")) WA.room.hideLayer(e);
//                         t = e.properties.mustGetString("closeLayer");
//                         for (const e of t.split("\n")) WA.room.showLayer(e)
//                     }
//                 }

//                 function _(e) {
//                     return e.map((e => G.get(e))).filter((e => "tilelayer" === (null == e ? void 0 : e.type)))
//                 }

//                 function N(e) {
//                     const t = g(_(e)),
//                         o = 32 * ((t.right - t.left) / 2 + t.left),
//                         n = 32 * ((t.bottom - t.top) / 2 + t.top);
//                     return Math.sqrt(Math.pow(I - o, 2) + Math.pow(R - n, 2))
//                 }

//                 function q(e) {
//                     WA.state.onVariableChange(e.name).subscribe((() => {
//                         WA.state[e.name] ? function (e) {
//                             const t = e.properties.getString("openSound"),
//                                 o = e.properties.getNumber("soundRadius");
//                             let n = 1;
//                             if (o) {
//                                 const t = N(e.properties.mustGetString("openLayer").split("\n"));
//                                 if (t > o) return;
//                                 n = 1 - t / o
//                             }
//                             t && WA.sound.loadSound(t).play({
//                                 volume: n
//                             })
//                         }(e) : function (e) {
//                             const t = e.properties.getString("closeSound"),
//                                 o = e.properties.getNumber("soundRadius");
//                             let n = 1;
//                             if (o) {
//                                 const t = N(e.properties.mustGetString("closeLayer").split("\n"));
//                                 if (t > o) return;
//                                 n = 1 - t / o
//                             }
//                             t && WA.sound.loadSound(t).play({
//                                 volume: n
//                             })
//                         }(e), D(e)
//                     })), D(e)
//                 }

//                 function Z(e, t, o, n) {
//                     const r = e.name;
//                     let i, s, a = !1;
//                     const l = o.getString("tag");
//                     let c = !0;
//                     l && !WA.player.tags.includes(l) && (c = !1);
//                     const u = !!l;

//                     function p() {
//                         var e;
//                         i && i.remove(), i = WA.ui.displayActionMessage({
//                             message: null !== (e = o.getString("closeTriggerMessage")) && void 0 !== e ? e : "Press SPACE to close the door",
//                             callback: () => {
//                                 WA.state[t.name] = !1, h()
//                             }
//                         })
//                     }

//                     function h() {
//                         var e;
//                         i && i.remove(), i = WA.ui.displayActionMessage({
//                             message: null !== (e = o.getString("openTriggerMessage")) && void 0 !== e ? e : "Press SPACE to open the door",
//                             callback: () => {
//                                 WA.state[t.name] = !0, p()
//                             }
//                         })
//                     }

//                     function f() {
//                         s && (WA.room.website.delete(s.name), s = void 0)
//                     }
//                     WA.room.onEnterLayer(r).subscribe((() => {
//                         a = !0, o.getBoolean("autoOpen") && c ? WA.state[t.name] = !0 : WA.state[t.name] || (!u || c) && u || !o.getString("code") && !o.getString("codeVariable") ? c && (WA.state[t.name] ? p() : h()) : function (e) {
//                             const o = g(_(t.properties.mustGetString("closeLayer").split("\n")));
//                             s = WA.room.website.create({
//                                 name: "doorKeypad" + e,
//                                 url: n + "/keypad.html#" + encodeURIComponent(e),
//                                 position: {
//                                     x: 32 * o.right,
//                                     y: 32 * o.top,
//                                     width: 96,
//                                     height: 128
//                                 },
//                                 allowApi: !0
//                             })
//                         }(r)
//                     })), WA.room.onLeaveLayer(r).subscribe((() => {
//                         a = !1, o.getBoolean("autoClose") && (WA.state[t.name] = !1), i && i.remove(), f()
//                     })), WA.state.onVariableChange(t.name).subscribe((() => {
//                         a && (o.getBoolean("autoClose") || !0 !== WA.state[t.name] || p(), s && !0 === WA.state[t.name] && f(), o.getBoolean("autoOpen") || !1 !== WA.state[t.name] || h())
//                     }))
//                 }

//                 function $(e) {
//                     void 0 === WA.state[e.name] && (WA.state[e.name] = 0), WA.state.onVariableChange(e.name).subscribe((() => {
//                         WA.state[e.name] && function (e) {
//                             const t = e.properties.mustGetString("bellSound"),
//                                 o = e.properties.getNumber("soundRadius");
//                             let n = 1;
//                             if (o) {
//                                 const t = Math.sqrt(Math.pow(e.x - I, 2) + Math.pow(e.y - R, 2));
//                                 if (t > o) return;
//                                 n = 1 - t / o
//                             }
//                             WA.sound.loadSound(t).play({
//                                 volume: n
//                             })
//                         }(e)
//                     }))
//                 }

//                 function z(e, t, o) {
//                     let n;
//                     const r = t.getString("bellPopup");
//                     WA.room.onEnterLayer(o).subscribe((() => {
//                         var o;
//                         r ? n = WA.ui.openPopup(r, "", [{
//                             label: null !== (o = t.getString("bellButtonText")) && void 0 !== o ? o : "Ring",
//                             callback: () => {
//                                 WA.state[e] = WA.state[e] + 1
//                             }
//                         }]) : WA.state[e] = WA.state[e] + 1
//                     })), WA.room.onLeaveLayer(o).subscribe((() => {
//                         n && (n.close(), n = void 0)
//                     }))
//                 }
//                 async function F(e) {
//                     e = null != e ? e : r;
//                     const t = await a();
//                     G = await u();
//                     for (const e of t.values()) e.properties.get("door") && q(e), e.properties.get("bell") && $(e);
//                     for (const o of G.values()) {
//                         const r = new n(o.properties),
//                             i = r.getString("doorVariable");
//                         if (i && "tilelayer" === o.type) {
//                             const n = t.get(i);
//                             if (void 0 === n) throw new Error('Cannot find variable "' + i + '" referred in the "doorVariable" property of layer "' + o.name + '"');
//                             Z(o, n, r, e)
//                         }
//                         const s = r.getString("bellVariable");
//                         s && z(s, r, o.name)
//                     }
//                     WA.player.onPlayerMove((e => {
//                         I = e.x, R = e.y
//                     }))
//                 }

//                 function H(e, t) {
//                     const o = e.getString("bindVariable");
//                     o && function (e, t, o, n, r, i) {
//                         i && !WA.player.tags.includes(i) || (void 0 !== o && WA.room.onEnterLayer(t).subscribe((() => {
//                             r || (WA.state[e] = o)
//                         })), void 0 !== n && WA.room.onLeaveLayer(t).subscribe((() => {
//                             WA.state[e] = n
//                         })))
//                     }(o, t, e.get("enterValue"), e.get("leaveValue"), e.getString("triggerMessage"), e.getString("tag"))
//                 }

//                 function K(e, t, o) {
//                     let n;
//                     const r = o.getString("openConfigAdminTag");
//                     let i = !0;

//                     function a() {
//                         WA.nav.closeCoWebSite()
//                     }
//                     r && !WA.player.tags.includes(r) && (i = !1), WA.room.onEnterLayer(t).subscribe((() => {
//                         const t = o.getString("openConfigTrigger");
//                         var r;
//                         i && (t && "onaction" === t ? (n && n.remove(), n = WA.ui.displayActionMessage({
//                             message: null !== (r = o.getString("openConfigTriggerMessage")) && void 0 !== r ? r : "Press SPACE or touch here to configure",
//                             callback: () => s(e)
//                         })) : s(e))
//                     })), WA.room.onLeaveLayer(t).subscribe((() => {
//                         n ? (n.remove(), a()) : a()
//                     }))
//                 }
//                 const J = [{
//                         lowerBound: 0,
//                         uppperBound: .5,
//                         config: {
//                             width: 250,
//                             height: 390,
//                             scale: 1
//                         }
//                     }, {
//                         lowerBound: .5,
//                         uppperBound: .8,
//                         config: {
//                             width: 224,
//                             height: 350,
//                             scale: .9
//                         }
//                     }, {
//                         lowerBound: .8,
//                         uppperBound: 1.25,
//                         config: {
//                             width: 132,
//                             height: 211,
//                             scale: .53
//                         }
//                     }, {
//                         lowerBound: 1.25,
//                         uppperBound: 2.28,
//                         config: {
//                             width: 64,
//                             height: 99,
//                             scale: .25
//                         }
//                     }, {
//                         lowerBound: 1.25,
//                         config: {
//                             width: 39,
//                             height: 63,
//                             scale: .16
//                         }
//                     }],
//                     Q = [{
//                         lowerBound: 0,
//                         uppperBound: 1,
//                         config: {
//                             width: 427,
//                             height: 270,
//                             scale: 1
//                         }
//                     }, {
//                         lowerBound: 1,
//                         uppperBound: 1.9,
//                         config: {
//                             width: 300,
//                             height: 188,
//                             scale: .7
//                         }
//                     }, {
//                         lowerBound: 1.9,
//                         uppperBound: 3.5,
//                         config: {
//                             width: 150,
//                             height: 94,
//                             scale: .35
//                         }
//                     }, {
//                         lowerBound: 3.5,
//                         uppperBound: 5,
//                         config: {
//                             width: 93,
//                             height: 58,
//                             scale: .21
//                         }
//                     }, {
//                         lowerBound: 4,
//                         config: {
//                             width: 75,
//                             height: 46,
//                             scale: .17
//                         }
//                     }];

//                 function X() {
//                     return WA.onInit().then((() => {
//                         F().catch((e => console.error(e))), async function () {
//                             const e = await u();
//                             for (const t of e.values()) H(new n(t.properties), t.name)
//                         }().catch((e => console.error(e))), async function (e) {
//                             const t = await WA.room.getTiledMap();
//                             e = null != e ? e : r, O = await u();
//                             const o = t.layers.find((e => "configuration" === e.name));
//                             if (o) {
//                                 const t = new n(o.properties).getString("tag");
//                                 t && !WA.player.tags.includes(t) || WA.ui.registerMenuCommand("Configure the room", (() => {
//                                     WA.nav.openCoWebSite(e + "/configuration.html", !0)
//                                 }));
//                                 for (const e of O.values()) {
//                                     const t = new n(e.properties),
//                                         o = t.getString("openConfig");
//                                     o && "tilelayer" === e.type && K(o.split(","), e.name, t)
//                                 }
//                             }
//                         }().catch((e => console.error(e))), U().catch((e => console.error(e))), async function () {
//                             var e;
//                             const t = WA.player.state.tutorialDone,
//                                 o = /Mobi|Android/i.test(navigator.userAgent),
//                                 n = await WA.room.getTiledMap(),
//                                 i = await (null === (e = n.properties) || void 0 === e ? void 0 : e.find((e => "tutorial" === e.name))),
//                                 s = i && i.value;
//                             if (!t && s) {
//                                 ! function (e) {
//                                     let t = {
//                                         allow: "",
//                                         name: "tutorial",
//                                         url: r + "/tutorial.html",
//                                         position: {
//                                             height: 224,
//                                             width: 407,
//                                             x: 16,
//                                             y: -112
//                                         },
//                                         visible: !0,
//                                         allowApi: !0,
//                                         origin: "player",
//                                         scale: .9
//                                     };
//                                     e && (t = {
//                                         ...t,
//                                         position: {
//                                             x: 32,
//                                             y: -225,
//                                             height: 390,
//                                             width: 250
//                                         },
//                                         scale: 1
//                                     }), WA.room.website.create(t)
//                                 }(o);
//                                 let e, t = await WA.player.getPosition();
//                                 const n = await WA.room.website.get("tutorial"),
//                                     i = () => {
//                                         const o = t.x + n.x + n.width > e.x + e.width,
//                                             r = t.x + n.x < e.x,
//                                             i = t.y + n.y + n.height > e.y + e.height,
//                                             s = t.y + n.y < e.y;
//                                         o ? n.x = -n.width - 24 : r && (n.x = 24), i ? n.y = -n.height : s && (n.y = 16)
//                                     },
//                                     s = e => {
//                                         n.width = e.width, n.height = e.height, n.scale = e.scale
//                                     },
//                                     a = e => {
//                                         const t = (o ? J : Q).filter((t => {
//                                             if (t.lowerBound && t.uppperBound) return t.lowerBound < e && e <= t.uppperBound;
//                                             if (t.lowerBound && !t.uppperBound) return t.lowerBound < e;
//                                             if (!t.lowerBound && t.uppperBound) return e <= t.uppperBound;
//                                             throw new Error(`Zoom level of: ${e} could not fit in any of the desktopConfig's ranges.`)
//                                         }));
//                                         s(t[0].config)
//                                     },
//                                     l = () => {
//                                         if (void 0 === e) return;
//                                         const t = e.zoom;
//                                         a(t), i()
//                                     };
//                                 WA.player.onPlayerMove((e => {
//                                     t = e, l()
//                                 })), WA.camera.onCameraUpdate().subscribe((t => {
//                                     e = t, l()
//                                 })), WA.player.state.tutorialDone = !0
//                             }
//                         }().catch((e => console.error(e)))
//                     })).catch((e => console.error(e)))
//                 }
//             }
//         },
//         t = {};

//     function o(n) {
//         var r = t[n];
//         if (void 0 !== r) return r.exports;
//         var i = t[n] = {
//             exports: {}
//         };
//         return e[n](i, i.exports, o), i.exports
//     }
//     o.d = (e, t) => {
//         for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
//             enumerable: !0,
//             get: t[n]
//         })
//     }, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.r = e => {
//         "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
//             value: "Module"
//         }), Object.defineProperty(e, "__esModule", {
//             value: !0
//         })
//     }, (() => {
//         const e = o(910);
//         let t;

//         function n() {
//             void 0 !== t && (t.close(), t = void 0)
//         }

//         // console.log("Script started successfully"), WA.onInit().then((() => {
//         //     console.log("Scripting API ready")
//         //     console.log("Player tags: ", WA.player.tags)

//         //     WA.room.onEnterLayer("clockZone").subscribe((() => {
//         //         const e = new Date,
//         //             o = e.getHours() + ":" + e.getMinutes();
//         //         t = WA.ui.openPopup("clockPopup", "It's " + o, [])
//         //     })), 
            
//         //     WA.room.onLeaveLayer("clockZone").subscribe(n), (0, e.bootstrapExtra)().then((() => {
//         //         console.log("Scripting API Extra ready")
//         //     })).catch((e => console.error(e)))

//         // })).catch((e => console.error(e)))
//     })()
// })();
// //# sourceMappingURL=script.js.map

// // WA.ui.registerMenuCommand('menu test', {
// //     callback: () => {
// //         WA.chat.sendChatMessage('test');
// //     }
// // })





WA.onInit().then(() => {
  // location.href = 'https://play.vs.katariba.online';
  WA.nav.goToPage('https://play.svs.katariba.online/_/global/play.vs.katariba.online/maps/room-k/map.json');
    // console.log('Scripting API ready');
    // console.log('Player tags: ',WA.player.tags)
    // let ua = window.navigator.userAgent.toLowerCase();
    // let userName = WA.player.name
    // let triggerMessage
    
    // let mtgRoomNames = ['melonpann'
    //                     ,'rollcake'
    //                     ,'creampann'
    //                     ,'shiopann'
    //                     ,'cinnamonroll'
    //                     ,'currypann'
    //                     ,'chocolatecookie'
    //                     ,'shinryokuRight'
    //                     ,'shinryokuLeft'
    //                     ,'sanbashi'
    //                     ,'roomk-shinden'
    //                     ,'Kilimanjaro'
    //                     ,'MountFuji'
    //                     ,'Everest'
    //                     ,'Rocky'
    //                     ,'StudyArea1'
    //                     ,'StudyArea2'
    //                     ,'StudyArea3'
    //                     ,'StudyArea4'
    //                     ,'StudyArea5'
    //                     ,'StudyArea6'
    //                     ,'StudyArea7'
    //                 ]

    // // Androidの6~8までは、JITSIに接続する際に、WAを終了してJITSIに直接REDIRECTさせる
    // if(  ua.indexOf("android 3.") !== -1
    //   || ua.indexOf("android 4.") !== -1
    //   || ua.indexOf("android 5.") !== -1
    //   || ua.indexOf("android 6.") !== -1
    //   || ua.indexOf("android 7.") !== -1
    //   || ua.indexOf("android 8.") !== -1) {

    //     for (let s = 0; s < mtgRoomNames.length; s++){
    //         let mtgRoom = mtgRoomNames[s]

    //         WA.room.onEnterLayer('red/red-'+mtgRoom).subscribe(() => {
    //             triggerMessage = WA.ui.displayActionMessage({
    //                 message: "タブレット利用者はこっちをタッチして部屋に移動してください",
    //                 callback: () => {
    //                     WA.nav.goToPage('https://jitsi.katariba.online/globalroomk'+mtgRoom+'#userInfo.displayName="'+ userName + '"');
    //                 }
    //             })
    //         })
    //         WA.room.onLeaveLayer('red/red-'+mtgRoom).subscribe(() => {
    //             triggerMessage.remove();
    //         })

    //     }

    // }

    
    // for (let s = 4; s < 100; s++){
    //     let roomNum = ("0" + s).slice(-2)
    //     WA.room.onEnterLayer('zone/zoomURL/zoom'+roomNum).subscribe(() => {
    //         triggerMessage = WA.ui.displayActionMessage({
    //             message: 'SpaceキーかタッチでZoom'+roomNum+'に移動します',
    //             callback: () => {
    //                 WA.nav.goToPage('http://zoom'+roomNum+'.katariba.in');
    //             }
    //         });
    //     })
    //     WA.room.onLeaveLayer('zone/zoomURL/zoom'+roomNum).subscribe(() => {
    //         triggerMessage.remove();
    //     })

    // }
    
}).catch(e => console.error(e));

