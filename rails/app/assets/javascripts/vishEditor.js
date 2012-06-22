(function(a, b) {
  function cy(a) {
    return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
  }
  function cv(a) {
    if(!ck[a]) {
      var b = c.body, d = f("<" + a + ">").appendTo(b), e = d.css("display");
      d.remove();
      if(e === "none" || e === "") {
        cl || (cl = c.createElement("iframe"), cl.frameBorder = cl.width = cl.height = 0), b.appendChild(cl);
        if(!cm || !cl.createElement) {
          cm = (cl.contentWindow || cl.contentDocument).document, cm.write((c.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), cm.close()
        }
        d = cm.createElement(a), cm.body.appendChild(d), e = f.css(d, "display"), b.removeChild(cl)
      }
      ck[a] = e
    }
    return ck[a]
  }
  function cu(a, b) {
    var c = {};
    f.each(cq.concat.apply([], cq.slice(0, b)), function() {
      c[this] = a
    });
    return c
  }
  function ct() {
    cr = b
  }
  function cs() {
    setTimeout(ct, 0);
    return cr = f.now()
  }
  function cj() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP")
    }catch(b) {
    }
  }
  function ci() {
    try {
      return new a.XMLHttpRequest
    }catch(b) {
    }
  }
  function cc(a, c) {
    a.dataFilter && (c = a.dataFilter(c, a.dataType));
    var d = a.dataTypes, e = {}, g, h, i = d.length, j, k = d[0], l, m, n, o, p;
    for(g = 1;g < i;g++) {
      if(g === 1) {
        for(h in a.converters) {
          typeof h == "string" && (e[h.toLowerCase()] = a.converters[h])
        }
      }
      l = k, k = d[g];
      if(k === "*") {
        k = l
      }else {
        if(l !== "*" && l !== k) {
          m = l + " " + k, n = e[m] || e["* " + k];
          if(!n) {
            p = b;
            for(o in e) {
              j = o.split(" ");
              if(j[0] === l || j[0] === "*") {
                p = e[j[1] + " " + k];
                if(p) {
                  o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                  break
                }
              }
            }
          }
          !n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
        }
      }
    }
    return c
  }
  function cb(a, c, d) {
    var e = a.contents, f = a.dataTypes, g = a.responseFields, h, i, j, k;
    for(i in g) {
      i in d && (c[g[i]] = d[i])
    }
    while(f[0] === "*") {
      f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"))
    }
    if(h) {
      for(i in e) {
        if(e[i] && e[i].test(h)) {
          f.unshift(i);
          break
        }
      }
    }
    if(f[0] in d) {
      j = f[0]
    }else {
      for(i in d) {
        if(!f[0] || a.converters[i + " " + f[0]]) {
          j = i;
          break
        }
        k || (k = i)
      }
      j = j || k
    }
    if(j) {
      j !== f[0] && f.unshift(j);
      return d[j]
    }
  }
  function ca(a, b, c, d) {
    if(f.isArray(b)) {
      f.each(b, function(b, e) {
        c || bE.test(a) ? d(a, e) : ca(a + "[" + (typeof e == "object" || f.isArray(e) ? b : "") + "]", e, c, d)
      })
    }else {
      if(!c && b != null && typeof b == "object") {
        for(var e in b) {
          ca(a + "[" + e + "]", b[e], c, d)
        }
      }else {
        d(a, b)
      }
    }
  }
  function b_(a, c) {
    var d, e, g = f.ajaxSettings.flatOptions || {};
    for(d in c) {
      c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d])
    }
    e && f.extend(!0, a, e)
  }
  function b$(a, c, d, e, f, g) {
    f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
    var h = a[f], i = 0, j = h ? h.length : 0, k = a === bT, l;
    for(;i < j && (k || !l);i++) {
      l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = b$(a, c, d, e, l, g)))
    }
    (k || !l) && !g["*"] && (l = b$(a, c, d, e, "*", g));
    return l
  }
  function bZ(a) {
    return function(b, c) {
      typeof b != "string" && (c = b, b = "*");
      if(f.isFunction(c)) {
        var d = b.toLowerCase().split(bP), e = 0, g = d.length, h, i, j;
        for(;e < g;e++) {
          h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
        }
      }
    }
  }
  function bC(a, b, c) {
    var d = b === "width" ? a.offsetWidth : a.offsetHeight, e = b === "width" ? bx : by, g = 0, h = e.length;
    if(d > 0) {
      if(c !== "border") {
        for(;g < h;g++) {
          c || (d -= parseFloat(f.css(a, "padding" + e[g])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + e[g])) || 0 : d -= parseFloat(f.css(a, "border" + e[g] + "Width")) || 0
        }
      }
      return d + "px"
    }
    d = bz(a, b, b);
    if(d < 0 || d == null) {
      d = a.style[b] || 0
    }
    d = parseFloat(d) || 0;
    if(c) {
      for(;g < h;g++) {
        d += parseFloat(f.css(a, "padding" + e[g])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + e[g] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + e[g])) || 0)
      }
    }
    return d + "px"
  }
  function bp(a, b) {
    b.src ? f.ajax({url:b.src, async:!1, dataType:"script"}) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
  }
  function bo(a) {
    var b = c.createElement("div");
    bh.appendChild(b), b.innerHTML = a.outerHTML;
    return b.firstChild
  }
  function bn(a) {
    var b = (a.nodeName || "").toLowerCase();
    b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
  }
  function bm(a) {
    if(a.type === "checkbox" || a.type === "radio") {
      a.defaultChecked = a.checked
    }
  }
  function bl(a) {
    return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
  }
  function bk(a, b) {
    var c;
    if(b.nodeType === 1) {
      b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase();
      if(c === "object") {
        b.outerHTML = a.outerHTML
      }else {
        if(c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
          if(c === "option") {
            b.selected = a.defaultSelected
          }else {
            if(c === "input" || c === "textarea") {
              b.defaultValue = a.defaultValue
            }
          }
        }else {
          a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)
        }
      }
      b.removeAttribute(f.expando)
    }
  }
  function bj(a, b) {
    if(b.nodeType === 1 && !!f.hasData(a)) {
      var c, d, e, g = f._data(a), h = f._data(b, g), i = g.events;
      if(i) {
        delete h.handle, h.events = {};
        for(c in i) {
          for(d = 0, e = i[c].length;d < e;d++) {
            f.event.add(b, c + (i[c][d].namespace ? "." : "") + i[c][d].namespace, i[c][d], i[c][d].data)
          }
        }
      }
      h.data && (h.data = f.extend({}, h.data))
    }
  }
  function bi(a, b) {
    return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
  }
  function U(a) {
    var b = V.split("|"), c = a.createDocumentFragment();
    if(c.createElement) {
      while(b.length) {
        c.createElement(b.pop())
      }
    }
    return c
  }
  function T(a, b, c) {
    b = b || 0;
    if(f.isFunction(b)) {
      return f.grep(a, function(a, d) {
        var e = !!b.call(a, d, a);
        return e === c
      })
    }
    if(b.nodeType) {
      return f.grep(a, function(a, d) {
        return a === b === c
      })
    }
    if(typeof b == "string") {
      var d = f.grep(a, function(a) {
        return a.nodeType === 1
      });
      if(O.test(b)) {
        return f.filter(b, d, !c)
      }
      b = f.filter(b, d)
    }
    return f.grep(a, function(a, d) {
      return f.inArray(a, b) >= 0 === c
    })
  }
  function S(a) {
    return!a || !a.parentNode || a.parentNode.nodeType === 11
  }
  function K() {
    return!0
  }
  function J() {
    return!1
  }
  function n(a, b, c) {
    var d = b + "defer", e = b + "queue", g = b + "mark", h = f._data(a, d);
    h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function() {
      !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
    }, 0)
  }
  function m(a) {
    for(var b in a) {
      if(b === "data" && f.isEmptyObject(a[b])) {
        continue
      }
      if(b !== "toJSON") {
        return!1
      }
    }
    return!0
  }
  function l(a, c, d) {
    if(d === b && a.nodeType === 1) {
      var e = "data-" + c.replace(k, "-$1").toLowerCase();
      d = a.getAttribute(e);
      if(typeof d == "string") {
        try {
          d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? parseFloat(d) : j.test(d) ? f.parseJSON(d) : d
        }catch(g) {
        }
        f.data(a, c, d)
      }else {
        d = b
      }
    }
    return d
  }
  function h(a) {
    var b = g[a] = {}, c, d;
    a = a.split(/\s+/);
    for(c = 0, d = a.length;c < d;c++) {
      b[a[c]] = !0
    }
    return b
  }
  var c = a.document, d = a.navigator, e = a.location, f = function() {
    function J() {
      if(!e.isReady) {
        try {
          c.documentElement.doScroll("left")
        }catch(a) {
          setTimeout(J, 1);
          return
        }
        e.ready()
      }
    }
    var e = function(a, b) {
      return new e.fn.init(a, b, h)
    }, f = a.jQuery, g = a.$, h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, j = /\S/, k = /^\s+/, l = /\s+$/, m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, n = /^[\],:{}\s]*$/, o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, q = /(?:^|:|,)(?:\s*\[)+/g, r = /(webkit)[ \/]([\w.]+)/, s = /(opera)(?:.*version)?[ \/]([\w.]+)/, t = /(msie) ([\w.]+)/, u = /(mozilla)(?:.*? rv:([\w.]+))?/, v = /-([a-z]|[0-9])/ig, w = /^-ms-/, x = function(a, b) {
      return(b + "").toUpperCase()
    }, y = d.userAgent, z, A, B, C = Object.prototype.toString, D = Object.prototype.hasOwnProperty, E = Array.prototype.push, F = Array.prototype.slice, G = String.prototype.trim, H = Array.prototype.indexOf, I = {};
    e.fn = e.prototype = {constructor:e, init:function(a, d, f) {
      var g, h, j, k;
      if(!a) {
        return this
      }
      if(a.nodeType) {
        this.context = this[0] = a, this.length = 1;
        return this
      }
      if(a === "body" && !d && c.body) {
        this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
        return this
      }
      if(typeof a == "string") {
        a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
        if(g && (g[1] || !d)) {
          if(g[1]) {
            d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
            return e.merge(this, a)
          }
          h = c.getElementById(g[2]);
          if(h && h.parentNode) {
            if(h.id !== g[2]) {
              return f.find(a)
            }
            this.length = 1, this[0] = h
          }
          this.context = c, this.selector = a;
          return this
        }
        return!d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
      }
      if(e.isFunction(a)) {
        return f.ready(a)
      }
      a.selector !== b && (this.selector = a.selector, this.context = a.context);
      return e.makeArray(a, this)
    }, selector:"", jquery:"1.7.1", length:0, size:function() {
      return this.length
    }, toArray:function() {
      return F.call(this, 0)
    }, get:function(a) {
      return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
    }, pushStack:function(a, b, c) {
      var d = this.constructor();
      e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
      return d
    }, each:function(a, b) {
      return e.each(this, a, b)
    }, ready:function(a) {
      e.bindReady(), A.add(a);
      return this
    }, eq:function(a) {
      a = +a;
      return a === -1 ? this.slice(a) : this.slice(a, a + 1)
    }, first:function() {
      return this.eq(0)
    }, last:function() {
      return this.eq(-1)
    }, slice:function() {
      return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
    }, map:function(a) {
      return this.pushStack(e.map(this, function(b, c) {
        return a.call(b, c, b)
      }))
    }, end:function() {
      return this.prevObject || this.constructor(null)
    }, push:E, sort:[].sort, splice:[].splice}, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function() {
      var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1;
      typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
      for(;j < k;j++) {
        if((a = arguments[j]) != null) {
          for(c in a) {
            d = i[c], f = a[c];
            if(i === f) {
              continue
            }
            l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
          }
        }
      }
      return i
    }, e.extend({noConflict:function(b) {
      a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
      return e
    }, isReady:!1, readyWait:1, holdReady:function(a) {
      a ? e.readyWait++ : e.ready(!0)
    }, ready:function(a) {
      if(a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
        if(!c.body) {
          return setTimeout(e.ready, 1)
        }
        e.isReady = !0;
        if(a !== !0 && --e.readyWait > 0) {
          return
        }
        A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
      }
    }, bindReady:function() {
      if(!A) {
        A = e.Callbacks("once memory");
        if(c.readyState === "complete") {
          return setTimeout(e.ready, 1)
        }
        if(c.addEventListener) {
          c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1)
        }else {
          if(c.attachEvent) {
            c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
            var b = !1;
            try {
              b = a.frameElement == null
            }catch(d) {
            }
            c.documentElement.doScroll && b && J()
          }
        }
      }
    }, isFunction:function(a) {
      return e.type(a) === "function"
    }, isArray:Array.isArray || function(a) {
      return e.type(a) === "array"
    }, isWindow:function(a) {
      return a && typeof a == "object" && "setInterval" in a
    }, isNumeric:function(a) {
      return!isNaN(parseFloat(a)) && isFinite(a)
    }, type:function(a) {
      return a == null ? String(a) : I[C.call(a)] || "object"
    }, isPlainObject:function(a) {
      if(!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) {
        return!1
      }
      try {
        if(a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) {
          return!1
        }
      }catch(c) {
        return!1
      }
      var d;
      for(d in a) {
      }
      return d === b || D.call(a, d)
    }, isEmptyObject:function(a) {
      for(var b in a) {
        return!1
      }
      return!0
    }, error:function(a) {
      throw new Error(a);
    }, parseJSON:function(b) {
      if(typeof b != "string" || !b) {
        return null
      }
      b = e.trim(b);
      if(a.JSON && a.JSON.parse) {
        return a.JSON.parse(b)
      }
      if(n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) {
        return(new Function("return " + b))()
      }
      e.error("Invalid JSON: " + b)
    }, parseXML:function(c) {
      var d, f;
      try {
        a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
      }catch(g) {
        d = b
      }
      (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
      return d
    }, noop:function() {
    }, globalEval:function(b) {
      b && j.test(b) && (a.execScript || function(b) {
        a.eval.call(a, b)
      })(b)
    }, camelCase:function(a) {
      return a.replace(w, "ms-").replace(v, x)
    }, nodeName:function(a, b) {
      return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
    }, each:function(a, c, d) {
      var f, g = 0, h = a.length, i = h === b || e.isFunction(a);
      if(d) {
        if(i) {
          for(f in a) {
            if(c.apply(a[f], d) === !1) {
              break
            }
          }
        }else {
          for(;g < h;) {
            if(c.apply(a[g++], d) === !1) {
              break
            }
          }
        }
      }else {
        if(i) {
          for(f in a) {
            if(c.call(a[f], f, a[f]) === !1) {
              break
            }
          }
        }else {
          for(;g < h;) {
            if(c.call(a[g], g, a[g++]) === !1) {
              break
            }
          }
        }
      }
      return a
    }, trim:G ? function(a) {
      return a == null ? "" : G.call(a)
    } : function(a) {
      return a == null ? "" : (a + "").replace(k, "").replace(l, "")
    }, makeArray:function(a, b) {
      var c = b || [];
      if(a != null) {
        var d = e.type(a);
        a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
      }
      return c
    }, inArray:function(a, b, c) {
      var d;
      if(b) {
        if(H) {
          return H.call(b, a, c)
        }
        d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
        for(;c < d;c++) {
          if(c in b && b[c] === a) {
            return c
          }
        }
      }
      return-1
    }, merge:function(a, c) {
      var d = a.length, e = 0;
      if(typeof c.length == "number") {
        for(var f = c.length;e < f;e++) {
          a[d++] = c[e]
        }
      }else {
        while(c[e] !== b) {
          a[d++] = c[e++]
        }
      }
      a.length = d;
      return a
    }, grep:function(a, b, c) {
      var d = [], e;
      c = !!c;
      for(var f = 0, g = a.length;f < g;f++) {
        e = !!b(a[f], f), c !== e && d.push(a[f])
      }
      return d
    }, map:function(a, c, d) {
      var f, g, h = [], i = 0, j = a.length, k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
      if(k) {
        for(;i < j;i++) {
          f = c(a[i], i, d), f != null && (h[h.length] = f)
        }
      }else {
        for(g in a) {
          f = c(a[g], g, d), f != null && (h[h.length] = f)
        }
      }
      return h.concat.apply([], h)
    }, guid:1, proxy:function(a, c) {
      if(typeof c == "string") {
        var d = a[c];
        c = a, a = d
      }
      if(!e.isFunction(a)) {
        return b
      }
      var f = F.call(arguments, 2), g = function() {
        return a.apply(c, f.concat(F.call(arguments)))
      };
      g.guid = a.guid = a.guid || g.guid || e.guid++;
      return g
    }, access:function(a, c, d, f, g, h) {
      var i = a.length;
      if(typeof c == "object") {
        for(var j in c) {
          e.access(a, j, c[j], f, g, d)
        }
        return a
      }
      if(d !== b) {
        f = !h && f && e.isFunction(d);
        for(var k = 0;k < i;k++) {
          g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h)
        }
        return a
      }
      return i ? g(a[0], c) : b
    }, now:function() {
      return(new Date).getTime()
    }, uaMatch:function(a) {
      a = a.toLowerCase();
      var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
      return{browser:b[1] || "", version:b[2] || "0"}
    }, sub:function() {
      function a(b, c) {
        return new a.fn.init(b, c)
      }
      e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function(d, f) {
        f && f instanceof e && !(f instanceof a) && (f = a(f));
        return e.fn.init.call(this, d, f, b)
      }, a.fn.init.prototype = a.fn;
      var b = a(c);
      return a
    }, browser:{}}), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
      I["[object " + b + "]"] = b.toLowerCase()
    }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test("\u00a0") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function() {
      c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
    } : c.attachEvent && (B = function() {
      c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
    });
    return e
  }(), g = {};
  f.Callbacks = function(a) {
    a = a ? g[a] || h(a) : {};
    var c = [], d = [], e, i, j, k, l, m = function(b) {
      var d, e, g, h, i;
      for(d = 0, e = b.length;d < e;d++) {
        g = b[d], h = f.type(g), h === "array" ? m(g) : h === "function" && (!a.unique || !o.has(g)) && c.push(g)
      }
    }, n = function(b, f) {
      f = f || [], e = !a.memory || [b, f], i = !0, l = j || 0, j = 0, k = c.length;
      for(;c && l < k;l++) {
        if(c[l].apply(b, f) === !1 && a.stopOnFalse) {
          e = !0;
          break
        }
      }
      i = !1, c && (a.once ? e === !0 ? o.disable() : c = [] : d && d.length && (e = d.shift(), o.fireWith(e[0], e[1])))
    }, o = {add:function() {
      if(c) {
        var a = c.length;
        m(arguments), i ? k = c.length : e && e !== !0 && (j = a, n(e[0], e[1]))
      }
      return this
    }, remove:function() {
      if(c) {
        var b = arguments, d = 0, e = b.length;
        for(;d < e;d++) {
          for(var f = 0;f < c.length;f++) {
            if(b[d] === c[f]) {
              i && f <= k && (k--, f <= l && l--), c.splice(f--, 1);
              if(a.unique) {
                break
              }
            }
          }
        }
      }
      return this
    }, has:function(a) {
      if(c) {
        var b = 0, d = c.length;
        for(;b < d;b++) {
          if(a === c[b]) {
            return!0
          }
        }
      }
      return!1
    }, empty:function() {
      c = [];
      return this
    }, disable:function() {
      c = d = e = b;
      return this
    }, disabled:function() {
      return!c
    }, lock:function() {
      d = b, (!e || e === !0) && o.disable();
      return this
    }, locked:function() {
      return!d
    }, fireWith:function(b, c) {
      d && (i ? a.once || d.push([b, c]) : (!a.once || !e) && n(b, c));
      return this
    }, fire:function() {
      o.fireWith(this, arguments);
      return this
    }, fired:function() {
      return!!e
    }};
    return o
  };
  var i = [].slice;
  f.extend({Deferred:function(a) {
    var b = f.Callbacks("once memory"), c = f.Callbacks("once memory"), d = f.Callbacks("memory"), e = "pending", g = {resolve:b, reject:c, notify:d}, h = {done:b.add, fail:c.add, progress:d.add, state:function() {
      return e
    }, isResolved:b.fired, isRejected:c.fired, then:function(a, b, c) {
      i.done(a).fail(b).progress(c);
      return this
    }, always:function() {
      i.done.apply(i, arguments).fail.apply(i, arguments);
      return this
    }, pipe:function(a, b, c) {
      return f.Deferred(function(d) {
        f.each({done:[a, "resolve"], fail:[b, "reject"], progress:[c, "notify"]}, function(a, b) {
          var c = b[0], e = b[1], g;
          f.isFunction(c) ? i[a](function() {
            g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
          }) : i[a](d[e])
        })
      }).promise()
    }, promise:function(a) {
      if(a == null) {
        a = h
      }else {
        for(var b in h) {
          a[b] = h[b]
        }
      }
      return a
    }}, i = h.promise({}), j;
    for(j in g) {
      i[j] = g[j].fire, i[j + "With"] = g[j].fireWith
    }
    i.done(function() {
      e = "resolved"
    }, c.disable, d.lock).fail(function() {
      e = "rejected"
    }, b.disable, d.lock), a && a.call(i, i);
    return i
  }, when:function(a) {
    function m(a) {
      return function(b) {
        e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
      }
    }
    function l(a) {
      return function(c) {
        b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
      }
    }
    var b = i.call(arguments, 0), c = 0, d = b.length, e = Array(d), g = d, h = d, j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(), k = j.promise();
    if(d > 1) {
      for(;c < d;c++) {
        b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g
      }
      g || j.resolveWith(j, b)
    }else {
      j !== a && j.resolveWith(j, d ? [a] : [])
    }
    return k
  }}), f.support = function() {
    var b, d, e, g, h, i, j, k, l, m, n, o, p, q = c.createElement("div"), r = c.documentElement;
    q.setAttribute("className", "t"), q.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = q.getElementsByTagName("*"), e = q.getElementsByTagName("a")[0];
    if(!d || !d.length || !e) {
      return{}
    }
    g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = q.getElementsByTagName("input")[0], b = {leadingWhitespace:q.firstChild.nodeType === 3, tbody:!q.getElementsByTagName("tbody").length, htmlSerialize:!!q.getElementsByTagName("link").length, style:/top/.test(e.getAttribute("style")), hrefNormalized:e.getAttribute("href") === "/a", opacity:/^0.55/.test(e.style.opacity), cssFloat:!!e.style.cssFloat, checkOn:i.value === "on", optSelected:h.selected, getSetAttribute:q.className !== 
    "t", enctype:!!c.createElement("form").enctype, html5Clone:c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", submitBubbles:!0, changeBubbles:!0, focusinBubbles:!1, deleteExpando:!0, noCloneEvent:!0, inlineBlockNeedsLayout:!1, shrinkWrapBlocks:!1, reliableMarginRight:!0}, i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;
    try {
      delete q.test
    }catch(s) {
      b.deleteExpando = !1
    }
    !q.addEventListener && q.attachEvent && q.fireEvent && (q.attachEvent("onclick", function() {
      b.noCloneEvent = !1
    }), q.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), q.appendChild(i), k = c.createDocumentFragment(), k.appendChild(q.lastChild), b.checkClone = k.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, k.removeChild(i), k.appendChild(q), q.innerHTML = "", a.getComputedStyle && (j = c.createElement("div"), j.style.width = "0", j.style.marginRight = 
    "0", q.style.width = "2px", q.appendChild(j), b.reliableMarginRight = (parseInt((a.getComputedStyle(j, null) || {marginRight:0}).marginRight, 10) || 0) === 0);
    if(q.attachEvent) {
      for(o in{submit:1, change:1, focusin:1}) {
        n = "on" + o, p = n in q, p || (q.setAttribute(n, "return;"), p = typeof q[n] == "function"), b[o + "Bubbles"] = p
      }
    }
    k.removeChild(q), k = g = h = j = q = i = null, f(function() {
      var a, d, e, g, h, i, j, k, m, n, o, r = c.getElementsByTagName("body")[0];
      !r || (j = 1, k = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", m = "visibility:hidden;border:0;", n = "style='" + k + "border:5px solid #000;padding:0;'", o = "<div " + n + "><div></div></div>" + "<table " + n + " cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", a = c.createElement("div"), a.style.cssText = m + "width:0;height:0;position:static;top:0;margin-top:" + j + "px", r.insertBefore(a, r.firstChild), q = c.createElement("div"), a.appendChild(q), q.innerHTML = 
      "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", l = q.getElementsByTagName("td"), p = l[0].offsetHeight === 0, l[0].style.display = "", l[1].style.display = "none", b.reliableHiddenOffsets = p && l[0].offsetHeight === 0, q.innerHTML = "", q.style.width = q.style.paddingLeft = "1px", f.boxModel = b.boxModel = q.offsetWidth === 2, typeof q.style.zoom != "undefined" && (q.style.display = "inline", q.style.zoom = 1, b.inlineBlockNeedsLayout = q.offsetWidth === 
      2, q.style.display = "", q.innerHTML = "<div style='width:4px;'></div>", b.shrinkWrapBlocks = q.offsetWidth !== 2), q.style.cssText = k + m, q.innerHTML = o, d = q.firstChild, e = d.firstChild, h = d.nextSibling.firstChild.firstChild, i = {doesNotAddBorder:e.offsetTop !== 5, doesAddBorderForTableAndCells:h.offsetTop === 5}, e.style.position = "fixed", e.style.top = "20px", i.fixedPosition = e.offsetTop === 20 || e.offsetTop === 15, e.style.position = e.style.top = "", d.style.overflow = "hidden", 
      d.style.position = "relative", i.subtractsBorderForOverflowNotVisible = e.offsetTop === -5, i.doesNotIncludeMarginInBodyOffset = r.offsetTop !== j, r.removeChild(a), q = a = null, f.extend(b, i))
    });
    return b
  }();
  var j = /^(?:\{.*\}|\[.*\])$/, k = /([A-Z])/g;
  f.extend({cache:{}, uuid:0, expando:"jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""), noData:{embed:!0, object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet:!0}, hasData:function(a) {
    a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
    return!!a && !m(a)
  }, data:function(a, c, d, e) {
    if(!!f.acceptData(a)) {
      var g, h, i, j = f.expando, k = typeof c == "string", l = a.nodeType, m = l ? f.cache : a, n = l ? a[j] : a[j] && j, o = c === "events";
      if((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) {
        return
      }
      n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
      if(typeof c == "object" || typeof c == "function") {
        e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c)
      }
      g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
      if(o && !h[c]) {
        return g.events
      }
      k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
      return i
    }
  }, removeData:function(a, b, c) {
    if(!!f.acceptData(a)) {
      var d, e, g, h = f.expando, i = a.nodeType, j = i ? f.cache : a, k = i ? a[h] : h;
      if(!j[k]) {
        return
      }
      if(b) {
        d = c ? j[k] : j[k].data;
        if(d) {
          f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
          for(e = 0, g = b.length;e < g;e++) {
            delete d[b[e]]
          }
          if(!(c ? m : f.isEmptyObject)(d)) {
            return
          }
        }
      }
      if(!c) {
        delete j[k].data;
        if(!m(j[k])) {
          return
        }
      }
      f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
    }
  }, _data:function(a, b, c) {
    return f.data(a, b, c, !0)
  }, acceptData:function(a) {
    if(a.nodeName) {
      var b = f.noData[a.nodeName.toLowerCase()];
      if(b) {
        return b !== !0 && a.getAttribute("classid") === b
      }
    }
    return!0
  }}), f.fn.extend({data:function(a, c) {
    var d, e, g, h = null;
    if(typeof a == "undefined") {
      if(this.length) {
        h = f.data(this[0]);
        if(this[0].nodeType === 1 && !f._data(this[0], "parsedAttrs")) {
          e = this[0].attributes;
          for(var i = 0, j = e.length;i < j;i++) {
            g = e[i].name, g.indexOf("data-") === 0 && (g = f.camelCase(g.substring(5)), l(this[0], g, h[g]))
          }
          f._data(this[0], "parsedAttrs", !0)
        }
      }
      return h
    }
    if(typeof a == "object") {
      return this.each(function() {
        f.data(this, a)
      })
    }
    d = a.split("."), d[1] = d[1] ? "." + d[1] : "";
    if(c === b) {
      h = this.triggerHandler("getData" + d[1] + "!", [d[0]]), h === b && this.length && (h = f.data(this[0], a), h = l(this[0], a, h));
      return h === b && d[1] ? this.data(d[0]) : h
    }
    return this.each(function() {
      var b = f(this), e = [d[0], c];
      b.triggerHandler("setData" + d[1] + "!", e), f.data(this, a, c), b.triggerHandler("changeData" + d[1] + "!", e)
    })
  }, removeData:function(a) {
    return this.each(function() {
      f.removeData(this, a)
    })
  }}), f.extend({_mark:function(a, b) {
    a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
  }, _unmark:function(a, b, c) {
    a !== !0 && (c = b, b = a, a = !1);
    if(b) {
      c = c || "fx";
      var d = c + "mark", e = a ? 0 : (f._data(b, d) || 1) - 1;
      e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
    }
  }, queue:function(a, b, c) {
    var d;
    if(a) {
      b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
      return d || []
    }
  }, dequeue:function(a, b) {
    b = b || "fx";
    var c = f.queue(a, b), d = c.shift(), e = {};
    d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function() {
      f.dequeue(a, b)
    }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
  }}), f.fn.extend({queue:function(a, c) {
    typeof a != "string" && (c = a, a = "fx");
    if(c === b) {
      return f.queue(this[0], a)
    }
    return this.each(function() {
      var b = f.queue(this, a, c);
      a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
    })
  }, dequeue:function(a) {
    return this.each(function() {
      f.dequeue(this, a)
    })
  }, delay:function(a, b) {
    a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
    return this.queue(b, function(b, c) {
      var d = setTimeout(b, a);
      c.stop = function() {
        clearTimeout(d)
      }
    })
  }, clearQueue:function(a) {
    return this.queue(a || "fx", [])
  }, promise:function(a, c) {
    function m() {
      --h || d.resolveWith(e, [e])
    }
    typeof a != "string" && (c = a, a = b), a = a || "fx";
    var d = f.Deferred(), e = this, g = e.length, h = 1, i = a + "defer", j = a + "queue", k = a + "mark", l;
    while(g--) {
      if(l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) {
        h++, l.add(m)
      }
    }
    m();
    return d.promise()
  }});
  var o = /[\n\t\r]/g, p = /\s+/, q = /\r/g, r = /^(?:button|input)$/i, s = /^(?:button|input|object|select|textarea)$/i, t = /^a(?:rea)?$/i, u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, v = f.support.getSetAttribute, w, x, y;
  f.fn.extend({attr:function(a, b) {
    return f.access(this, a, b, !0, f.attr)
  }, removeAttr:function(a) {
    return this.each(function() {
      f.removeAttr(this, a)
    })
  }, prop:function(a, b) {
    return f.access(this, a, b, !0, f.prop)
  }, removeProp:function(a) {
    a = f.propFix[a] || a;
    return this.each(function() {
      try {
        this[a] = b, delete this[a]
      }catch(c) {
      }
    })
  }, addClass:function(a) {
    var b, c, d, e, g, h, i;
    if(f.isFunction(a)) {
      return this.each(function(b) {
        f(this).addClass(a.call(this, b, this.className))
      })
    }
    if(a && typeof a == "string") {
      b = a.split(p);
      for(c = 0, d = this.length;c < d;c++) {
        e = this[c];
        if(e.nodeType === 1) {
          if(!e.className && b.length === 1) {
            e.className = a
          }else {
            g = " " + e.className + " ";
            for(h = 0, i = b.length;h < i;h++) {
              ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ")
            }
            e.className = f.trim(g)
          }
        }
      }
    }
    return this
  }, removeClass:function(a) {
    var c, d, e, g, h, i, j;
    if(f.isFunction(a)) {
      return this.each(function(b) {
        f(this).removeClass(a.call(this, b, this.className))
      })
    }
    if(a && typeof a == "string" || a === b) {
      c = (a || "").split(p);
      for(d = 0, e = this.length;d < e;d++) {
        g = this[d];
        if(g.nodeType === 1 && g.className) {
          if(a) {
            h = (" " + g.className + " ").replace(o, " ");
            for(i = 0, j = c.length;i < j;i++) {
              h = h.replace(" " + c[i] + " ", " ")
            }
            g.className = f.trim(h)
          }else {
            g.className = ""
          }
        }
      }
    }
    return this
  }, toggleClass:function(a, b) {
    var c = typeof a, d = typeof b == "boolean";
    if(f.isFunction(a)) {
      return this.each(function(c) {
        f(this).toggleClass(a.call(this, c, this.className, b), b)
      })
    }
    return this.each(function() {
      if(c === "string") {
        var e, g = 0, h = f(this), i = b, j = a.split(p);
        while(e = j[g++]) {
          i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
        }
      }else {
        if(c === "undefined" || c === "boolean") {
          this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
        }
      }
    })
  }, hasClass:function(a) {
    var b = " " + a + " ", c = 0, d = this.length;
    for(;c < d;c++) {
      if(this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) {
        return!0
      }
    }
    return!1
  }, val:function(a) {
    var c, d, e, g = this[0];
    if(!!arguments.length) {
      e = f.isFunction(a);
      return this.each(function(d) {
        var g = f(this), h;
        if(this.nodeType === 1) {
          e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function(a) {
            return a == null ? "" : a + ""
          })), c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type];
          if(!c || !("set" in c) || c.set(this, h, "value") === b) {
            this.value = h
          }
        }
      })
    }
    if(g) {
      c = f.valHooks[g.nodeName.toLowerCase()] || f.valHooks[g.type];
      if(c && "get" in c && (d = c.get(g, "value")) !== b) {
        return d
      }
      d = g.value;
      return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
    }
  }}), f.extend({valHooks:{option:{get:function(a) {
    var b = a.attributes.value;
    return!b || b.specified ? a.value : a.text
  }}, select:{get:function(a) {
    var b, c, d, e, g = a.selectedIndex, h = [], i = a.options, j = a.type === "select-one";
    if(g < 0) {
      return null
    }
    c = j ? g : 0, d = j ? g + 1 : i.length;
    for(;c < d;c++) {
      e = i[c];
      if(e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
        b = f(e).val();
        if(j) {
          return b
        }
        h.push(b)
      }
    }
    if(j && !h.length && i.length) {
      return f(i[g]).val()
    }
    return h
  }, set:function(a, b) {
    var c = f.makeArray(b);
    f(a).find("option").each(function() {
      this.selected = f.inArray(f(this).val(), c) >= 0
    }), c.length || (a.selectedIndex = -1);
    return c
  }}}, attrFn:{val:!0, css:!0, html:!0, text:!0, data:!0, width:!0, height:!0, offset:!0}, attr:function(a, c, d, e) {
    var g, h, i, j = a.nodeType;
    if(!!a && j !== 3 && j !== 8 && j !== 2) {
      if(e && c in f.attrFn) {
        return f(a)[c](d)
      }
      if(typeof a.getAttribute == "undefined") {
        return f.prop(a, c, d)
      }
      i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
      if(d !== b) {
        if(d === null) {
          f.removeAttr(a, c);
          return
        }
        if(h && "set" in h && i && (g = h.set(a, d, c)) !== b) {
          return g
        }
        a.setAttribute(c, "" + d);
        return d
      }
      if(h && "get" in h && i && (g = h.get(a, c)) !== null) {
        return g
      }
      g = a.getAttribute(c);
      return g === null ? b : g
    }
  }, removeAttr:function(a, b) {
    var c, d, e, g, h = 0;
    if(b && a.nodeType === 1) {
      d = b.toLowerCase().split(p), g = d.length;
      for(;h < g;h++) {
        e = d[h], e && (c = f.propFix[e] || e, f.attr(a, e, ""), a.removeAttribute(v ? e : c), u.test(e) && c in a && (a[c] = !1))
      }
    }
  }, attrHooks:{type:{set:function(a, b) {
    if(r.test(a.nodeName) && a.parentNode) {
      f.error("type property can't be changed")
    }else {
      if(!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
        var c = a.value;
        a.setAttribute("type", b), c && (a.value = c);
        return b
      }
    }
  }}, value:{get:function(a, b) {
    if(w && f.nodeName(a, "button")) {
      return w.get(a, b)
    }
    return b in a ? a.value : null
  }, set:function(a, b, c) {
    if(w && f.nodeName(a, "button")) {
      return w.set(a, b, c)
    }
    a.value = b
  }}}, propFix:{tabindex:"tabIndex", readonly:"readOnly", "for":"htmlFor", "class":"className", maxlength:"maxLength", cellspacing:"cellSpacing", cellpadding:"cellPadding", rowspan:"rowSpan", colspan:"colSpan", usemap:"useMap", frameborder:"frameBorder", contenteditable:"contentEditable"}, prop:function(a, c, d) {
    var e, g, h, i = a.nodeType;
    if(!!a && i !== 3 && i !== 8 && i !== 2) {
      h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
      return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
    }
  }, propHooks:{tabIndex:{get:function(a) {
    var c = a.getAttributeNode("tabindex");
    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
  }}}}), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {get:function(a, c) {
    var d, e = f.prop(a, c);
    return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
  }, set:function(a, b, c) {
    var d;
    b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
    return c
  }}, v || (y = {name:!0, id:!0}, w = f.valHooks.button = {get:function(a, c) {
    var d;
    d = a.getAttributeNode(c);
    return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
  }, set:function(a, b, d) {
    var e = a.getAttributeNode(d);
    e || (e = c.createAttribute(d), a.setAttributeNode(e));
    return e.nodeValue = b + ""
  }}, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function(a, b) {
    f.attrHooks[b] = f.extend(f.attrHooks[b], {set:function(a, c) {
      if(c === "") {
        a.setAttribute(b, "auto");
        return c
      }
    }})
  }), f.attrHooks.contenteditable = {get:w.get, set:function(a, b, c) {
    b === "" && (b = "false"), w.set(a, b, c)
  }}), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function(a, c) {
    f.attrHooks[c] = f.extend(f.attrHooks[c], {get:function(a) {
      var d = a.getAttribute(c, 2);
      return d === null ? b : d
    }})
  }), f.support.style || (f.attrHooks.style = {get:function(a) {
    return a.style.cssText.toLowerCase() || b
  }, set:function(a, b) {
    return a.style.cssText = "" + b
  }}), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {get:function(a) {
    var b = a.parentNode;
    b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    return null
  }})), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function() {
    f.valHooks[this] = {get:function(a) {
      return a.getAttribute("value") === null ? "on" : a.value
    }}
  }), f.each(["radio", "checkbox"], function() {
    f.valHooks[this] = f.extend(f.valHooks[this], {set:function(a, b) {
      if(f.isArray(b)) {
        return a.checked = f.inArray(f(a).val(), b) >= 0
      }
    }})
  });
  var z = /^(?:textarea|input|select)$/i, A = /^([^\.]*)?(?:\.(.+))?$/, B = /\bhover(\.\S+)?\b/, C = /^key/, D = /^(?:mouse|contextmenu)|click/, E = /^(?:focusinfocus|focusoutblur)$/, F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, G = function(a) {
    var b = F.exec(a);
    b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
    return b
  }, H = function(a, b) {
    var c = a.attributes || {};
    return(!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
  }, I = function(a) {
    return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
  };
  f.event = {add:function(a, c, d, e, g) {
    var h, i, j, k, l, m, n, o, p, q, r, s;
    if(!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
      d.handler && (p = d, d = p.handler), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function(a) {
        return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
      }, i.elem = a), c = f.trim(I(c)).split(" ");
      for(k = 0;k < c.length;k++) {
        l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({type:m, origType:l[1], data:e, handler:d, guid:d.guid, selector:g, quick:G(g), namespace:n.join(".")}, p), r = j[m];
        if(!r) {
          r = j[m] = [], r.delegateCount = 0;
          if(!s.setup || s.setup.call(a, e, n, i) === !1) {
            a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
          }
        }
        s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
      }
      a = null
    }
  }, global:{}, remove:function(a, b, c, d, e) {
    var g = f.hasData(a) && f._data(a), h, i, j, k, l, m, n, o, p, q, r, s;
    if(!!g && !!(o = g.events)) {
      b = f.trim(I(b || "")).split(" ");
      for(h = 0;h < b.length;h++) {
        i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
        if(!j) {
          for(j in o) {
            f.event.remove(a, j + b[h], c, d, !0)
          }
          continue
        }
        p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
        for(n = 0;n < r.length;n++) {
          s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s))
        }
        r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
      }
      f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
    }
  }, customEvent:{getData:!0, setData:!0, changeData:!0}, trigger:function(c, d, e, g) {
    if(!e || e.nodeType !== 3 && e.nodeType !== 8) {
      var h = c.type || c, i = [], j, k, l, m, n, o, p, q, r, s;
      if(E.test(h + f.event.triggered)) {
        return
      }
      h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
      if((!e || f.event.customEvent[h]) && !f.event.global[h]) {
        return
      }
      c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "";
      if(!e) {
        j = f.cache;
        for(l in j) {
          j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0)
        }
        return
      }
      c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
      if(p.trigger && p.trigger.apply(e, d) === !1) {
        return
      }
      r = [[e, p.bindType || h]];
      if(!g && !p.noBubble && !f.isWindow(e)) {
        s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
        for(;m;m = m.parentNode) {
          r.push([m, s]), n = m
        }
        n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
      }
      for(l = 0;l < r.length && !c.isPropagationStopped();l++) {
        m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault()
      }
      c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
      return c.result
    }
  }, dispatch:function(c) {
    c = f.event.fix(c || a.event);
    var d = (f._data(this, "events") || {})[c.type] || [], e = d.delegateCount, g = [].slice.call(arguments, 0), h = !c.exclusive && !c.namespace, i = [], j, k, l, m, n, o, p, q, r, s, t;
    g[0] = c, c.delegateTarget = this;
    if(e && !c.target.disabled && (!c.button || c.type !== "click")) {
      m = f(this), m.context = this.ownerDocument || this;
      for(l = c.target;l != this;l = l.parentNode || this) {
        o = {}, q = [], m[0] = l;
        for(j = 0;j < e;j++) {
          r = d[j], s = r.selector, o[s] === b && (o[s] = r.quick ? H(l, r.quick) : m.is(s)), o[s] && q.push(r)
        }
        q.length && i.push({elem:l, matches:q})
      }
    }
    d.length > e && i.push({elem:this, matches:d.slice(e)});
    for(j = 0;j < i.length && !c.isPropagationStopped();j++) {
      p = i[j], c.currentTarget = p.elem;
      for(k = 0;k < p.matches.length && !c.isImmediatePropagationStopped();k++) {
        r = p.matches[k];
        if(h || !c.namespace && !r.namespace || c.namespace_re && c.namespace_re.test(r.namespace)) {
          c.data = r.data, c.handleObj = r, n = ((f.event.special[r.origType] || {}).handle || r.handler).apply(p.elem, g), n !== b && (c.result = n, n === !1 && (c.preventDefault(), c.stopPropagation()))
        }
      }
    }
    return c.result
  }, props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks:{}, keyHooks:{props:"char charCode key keyCode".split(" "), filter:function(a, b) {
    a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
    return a
  }}, mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter:function(a, d) {
    var e, f, g, h = d.button, i = d.fromElement;
    a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
    return a
  }}, fix:function(a) {
    if(a[f.expando]) {
      return a
    }
    var d, e, g = a, h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props;
    a = f.Event(g);
    for(d = i.length;d;) {
      e = i[--d], a[e] = g[e]
    }
    a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
    return h.filter ? h.filter(a, g) : a
  }, special:{ready:{setup:f.bindReady}, load:{noBubble:!0}, focus:{delegateType:"focusin"}, blur:{delegateType:"focusout"}, beforeunload:{setup:function(a, b, c) {
    f.isWindow(this) && (this.onbeforeunload = c)
  }, teardown:function(a, b) {
    this.onbeforeunload === b && (this.onbeforeunload = null)
  }}}, simulate:function(a, b, c, d) {
    var e = f.extend(new f.Event, c, {type:a, isSimulated:!0, originalEvent:{}});
    d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
  }}, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1)
  } : function(a, b, c) {
    a.detachEvent && a.detachEvent("on" + b, c)
  }, f.Event = function(a, b) {
    if(!(this instanceof f.Event)) {
      return new f.Event(a, b)
    }
    a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
  }, f.Event.prototype = {preventDefault:function() {
    this.isDefaultPrevented = K;
    var a = this.originalEvent;
    !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
  }, stopPropagation:function() {
    this.isPropagationStopped = K;
    var a = this.originalEvent;
    !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
  }, stopImmediatePropagation:function() {
    this.isImmediatePropagationStopped = K, this.stopPropagation()
  }, isDefaultPrevented:J, isPropagationStopped:J, isImmediatePropagationStopped:J}, f.each({mouseenter:"mouseover", mouseleave:"mouseout"}, function(a, b) {
    f.event.special[a] = {delegateType:b, bindType:b, handle:function(a) {
      var c = this, d = a.relatedTarget, e = a.handleObj, g = e.selector, h;
      if(!d || d !== c && !f.contains(c, d)) {
        a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b
      }
      return h
    }}
  }), f.support.submitBubbles || (f.event.special.submit = {setup:function() {
    if(f.nodeName(this, "form")) {
      return!1
    }
    f.event.add(this, "click._submit keypress._submit", function(a) {
      var c = a.target, d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
      d && !d._submit_attached && (f.event.add(d, "submit._submit", function(a) {
        this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0)
      }), d._submit_attached = !0)
    })
  }, teardown:function() {
    if(f.nodeName(this, "form")) {
      return!1
    }
    f.event.remove(this, "._submit")
  }}), f.support.changeBubbles || (f.event.special.change = {setup:function() {
    if(z.test(this.nodeName)) {
      if(this.type === "checkbox" || this.type === "radio") {
        f.event.add(this, "propertychange._change", function(a) {
          a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
        }), f.event.add(this, "click._change", function(a) {
          this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
        })
      }
      return!1
    }
    f.event.add(this, "beforeactivate._change", function(a) {
      var b = a.target;
      z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function(a) {
        this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
      }), b._change_attached = !0)
    })
  }, handle:function(a) {
    var b = a.target;
    if(this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") {
      return a.handleObj.handler.apply(this, arguments)
    }
  }, teardown:function() {
    f.event.remove(this, "._change");
    return z.test(this.nodeName)
  }}), f.support.focusinBubbles || f.each({focus:"focusin", blur:"focusout"}, function(a, b) {
    var d = 0, e = function(a) {
      f.event.simulate(b, a.target, f.event.fix(a), !0)
    };
    f.event.special[b] = {setup:function() {
      d++ === 0 && c.addEventListener(a, e, !0)
    }, teardown:function() {
      --d === 0 && c.removeEventListener(a, e, !0)
    }}
  }), f.fn.extend({on:function(a, c, d, e, g) {
    var h, i;
    if(typeof a == "object") {
      typeof c != "string" && (d = c, c = b);
      for(i in a) {
        this.on(i, c, d, a[i], g)
      }
      return this
    }
    d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
    if(e === !1) {
      e = J
    }else {
      if(!e) {
        return this
      }
    }
    g === 1 && (h = e, e = function(a) {
      f().off(a);
      return h.apply(this, arguments)
    }, e.guid = h.guid || (h.guid = f.guid++));
    return this.each(function() {
      f.event.add(this, a, e, d, c)
    })
  }, one:function(a, b, c, d) {
    return this.on.call(this, a, b, c, d, 1)
  }, off:function(a, c, d) {
    if(a && a.preventDefault && a.handleObj) {
      var e = a.handleObj;
      f(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace : e.type, e.selector, e.handler);
      return this
    }
    if(typeof a == "object") {
      for(var g in a) {
        this.off(g, c, a[g])
      }
      return this
    }
    if(c === !1 || typeof c == "function") {
      d = c, c = b
    }
    d === !1 && (d = J);
    return this.each(function() {
      f.event.remove(this, a, d, c)
    })
  }, bind:function(a, b, c) {
    return this.on(a, null, b, c)
  }, unbind:function(a, b) {
    return this.off(a, null, b)
  }, live:function(a, b, c) {
    f(this.context).on(a, this.selector, b, c);
    return this
  }, die:function(a, b) {
    f(this.context).off(a, this.selector || "**", b);
    return this
  }, delegate:function(a, b, c, d) {
    return this.on(b, a, c, d)
  }, undelegate:function(a, b, c) {
    return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
  }, trigger:function(a, b) {
    return this.each(function() {
      f.event.trigger(a, b, this)
    })
  }, triggerHandler:function(a, b) {
    if(this[0]) {
      return f.event.trigger(a, b, this[0], !0)
    }
  }, toggle:function(a) {
    var b = arguments, c = a.guid || f.guid++, d = 0, e = function(c) {
      var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
      f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
      return b[e].apply(this, arguments) || !1
    };
    e.guid = c;
    while(d < b.length) {
      b[d++].guid = c
    }
    return this.click(e)
  }, hover:function(a, b) {
    return this.mouseenter(a).mouseleave(b || a)
  }}), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
    f.fn[b] = function(a, c) {
      c == null && (c = a, a = null);
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
  }), function() {
    function x(a, b, c, e, f, g) {
      for(var h = 0, i = e.length;h < i;h++) {
        var j = e[h];
        if(j) {
          var k = !1;
          j = j[a];
          while(j) {
            if(j[d] === c) {
              k = e[j.sizset];
              break
            }
            if(j.nodeType === 1) {
              g || (j[d] = c, j.sizset = h);
              if(typeof b != "string") {
                if(j === b) {
                  k = !0;
                  break
                }
              }else {
                if(m.filter(b, [j]).length > 0) {
                  k = j;
                  break
                }
              }
            }
            j = j[a]
          }
          e[h] = k
        }
      }
    }
    function w(a, b, c, e, f, g) {
      for(var h = 0, i = e.length;h < i;h++) {
        var j = e[h];
        if(j) {
          var k = !1;
          j = j[a];
          while(j) {
            if(j[d] === c) {
              k = e[j.sizset];
              break
            }
            j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
            if(j.nodeName.toLowerCase() === b) {
              k = j;
              break
            }
            j = j[a]
          }
          e[h] = k
        }
      }
    }
    var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, d = "sizcache" + (Math.random() + "").replace(".", ""), e = 0, g = Object.prototype.toString, h = !1, i = !0, j = /\\/g, k = /\r\n/g, l = /\W/;
    [0, 0].sort(function() {
      i = !1;
      return 0
    });
    var m = function(b, d, e, f) {
      e = e || [], d = d || c;
      var h = d;
      if(d.nodeType !== 1 && d.nodeType !== 9) {
        return[]
      }
      if(!b || typeof b != "string") {
        return e
      }
      var i, j, k, l, n, q, r, t, u = !0, v = m.isXML(d), w = [], x = b;
      do {
        a.exec(""), i = a.exec(x);
        if(i) {
          x = i[3], w.push(i[1]);
          if(i[2]) {
            l = i[3];
            break
          }
        }
      }while(i);
      if(w.length > 1 && p.exec(b)) {
        if(w.length === 2 && o.relative[w[0]]) {
          j = y(w[0] + w[1], d, f)
        }else {
          j = o.relative[w[0]] ? [d] : m(w.shift(), d);
          while(w.length) {
            b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
          }
        }
      }else {
        !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
        if(d) {
          n = f ? {expr:w.pop(), set:s(f)} : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
          while(w.length) {
            q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
          }
        }else {
          k = w = []
        }
      }
      k || (k = j), k || m.error(q || b);
      if(g.call(k) === "[object Array]") {
        if(!u) {
          e.push.apply(e, k)
        }else {
          if(d && d.nodeType === 1) {
            for(t = 0;k[t] != null;t++) {
              k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t])
            }
          }else {
            for(t = 0;k[t] != null;t++) {
              k[t] && k[t].nodeType === 1 && e.push(j[t])
            }
          }
        }
      }else {
        s(k, e)
      }
      l && (m(l, h, e, f), m.uniqueSort(e));
      return e
    };
    m.uniqueSort = function(a) {
      if(u) {
        h = i, a.sort(u);
        if(h) {
          for(var b = 1;b < a.length;b++) {
            a[b] === a[b - 1] && a.splice(b--, 1)
          }
        }
      }
      return a
    }, m.matches = function(a, b) {
      return m(a, null, null, b)
    }, m.matchesSelector = function(a, b) {
      return m(b, null, null, [a]).length > 0
    }, m.find = function(a, b, c) {
      var d, e, f, g, h, i;
      if(!a) {
        return[]
      }
      for(e = 0, f = o.order.length;e < f;e++) {
        h = o.order[e];
        if(g = o.leftMatch[h].exec(a)) {
          i = g[1], g.splice(1, 1);
          if(i.substr(i.length - 1) !== "\\") {
            g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
            if(d != null) {
              a = a.replace(o.match[h], "");
              break
            }
          }
        }
      }
      d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
      return{set:d, expr:a}
    }, m.filter = function(a, c, d, e) {
      var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]);
      while(a && c.length) {
        for(h in o.filter) {
          if((f = o.leftMatch[h].exec(a)) != null && f[2]) {
            k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
            if(l.substr(l.length - 1) === "\\") {
              continue
            }
            s === r && (r = []);
            if(o.preFilter[h]) {
              f = o.preFilter[h](f, s, d, r, e, t);
              if(!f) {
                g = i = !0
              }else {
                if(f === !0) {
                  continue
                }
              }
            }
            if(f) {
              for(n = 0;(j = s[n]) != null;n++) {
                j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0))
              }
            }
            if(i !== b) {
              d || (s = r), a = a.replace(o.match[h], "");
              if(!g) {
                return[]
              }
              break
            }
          }
        }
        if(a === q) {
          if(g == null) {
            m.error(a)
          }else {
            break
          }
        }
        q = a
      }
      return s
    }, m.error = function(a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    };
    var n = m.getText = function(a) {
      var b, c, d = a.nodeType, e = "";
      if(d) {
        if(d === 1 || d === 9) {
          if(typeof a.textContent == "string") {
            return a.textContent
          }
          if(typeof a.innerText == "string") {
            return a.innerText.replace(k, "")
          }
          for(a = a.firstChild;a;a = a.nextSibling) {
            e += n(a)
          }
        }else {
          if(d === 3 || d === 4) {
            return a.nodeValue
          }
        }
      }else {
        for(b = 0;c = a[b];b++) {
          c.nodeType !== 8 && (e += n(c))
        }
      }
      return e
    }, o = m.selectors = {order:["ID", "NAME", "TAG"], match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, 
    PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/}, leftMatch:{}, attrMap:{"class":"className", "for":"htmlFor"}, attrHandle:{href:function(a) {
      return a.getAttribute("href")
    }, type:function(a) {
      return a.getAttribute("type")
    }}, relative:{"+":function(a, b) {
      var c = typeof b == "string", d = c && !l.test(b), e = c && !d;
      d && (b = b.toLowerCase());
      for(var f = 0, g = a.length, h;f < g;f++) {
        if(h = a[f]) {
          while((h = h.previousSibling) && h.nodeType !== 1) {
          }
          a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
        }
      }
      e && m.filter(b, a, !0)
    }, ">":function(a, b) {
      var c, d = typeof b == "string", e = 0, f = a.length;
      if(d && !l.test(b)) {
        b = b.toLowerCase();
        for(;e < f;e++) {
          c = a[e];
          if(c) {
            var g = c.parentNode;
            a[e] = g.nodeName.toLowerCase() === b ? g : !1
          }
        }
      }else {
        for(;e < f;e++) {
          c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b)
        }
        d && m.filter(b, a, !0)
      }
    }, "":function(a, b, c) {
      var d, f = e++, g = x;
      typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
    }, "~":function(a, b, c) {
      var d, f = e++, g = x;
      typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
    }}, find:{ID:function(a, b, c) {
      if(typeof b.getElementById != "undefined" && !c) {
        var d = b.getElementById(a[1]);
        return d && d.parentNode ? [d] : []
      }
    }, NAME:function(a, b) {
      if(typeof b.getElementsByName != "undefined") {
        var c = [], d = b.getElementsByName(a[1]);
        for(var e = 0, f = d.length;e < f;e++) {
          d[e].getAttribute("name") === a[1] && c.push(d[e])
        }
        return c.length === 0 ? null : c
      }
    }, TAG:function(a, b) {
      if(typeof b.getElementsByTagName != "undefined") {
        return b.getElementsByTagName(a[1])
      }
    }}, preFilter:{CLASS:function(a, b, c, d, e, f) {
      a = " " + a[1].replace(j, "") + " ";
      if(f) {
        return a
      }
      for(var g = 0, h;(h = b[g]) != null;g++) {
        h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1))
      }
      return!1
    }, ID:function(a) {
      return a[1].replace(j, "")
    }, TAG:function(a, b) {
      return a[1].replace(j, "").toLowerCase()
    }, CHILD:function(a) {
      if(a[1] === "nth") {
        a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
        a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
      }else {
        a[2] && m.error(a[0])
      }
      a[0] = e++;
      return a
    }, ATTR:function(a, b, c, d, e, f) {
      var g = a[1] = a[1].replace(j, "");
      !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
      return a
    }, PSEUDO:function(b, c, d, e, f) {
      if(b[1] === "not") {
        if((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) {
          b[3] = m(b[3], null, null, c)
        }else {
          var g = m.filter(b[3], c, d, !0 ^ f);
          d || e.push.apply(e, g);
          return!1
        }
      }else {
        if(o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) {
          return!0
        }
      }
      return b
    }, POS:function(a) {
      a.unshift(!0);
      return a
    }}, filters:{enabled:function(a) {
      return a.disabled === !1 && a.type !== "hidden"
    }, disabled:function(a) {
      return a.disabled === !0
    }, checked:function(a) {
      return a.checked === !0
    }, selected:function(a) {
      a.parentNode && a.parentNode.selectedIndex;
      return a.selected === !0
    }, parent:function(a) {
      return!!a.firstChild
    }, empty:function(a) {
      return!a.firstChild
    }, has:function(a, b, c) {
      return!!m(c[3], a).length
    }, header:function(a) {
      return/h\d/i.test(a.nodeName)
    }, text:function(a) {
      var b = a.getAttribute("type"), c = a.type;
      return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
    }, radio:function(a) {
      return a.nodeName.toLowerCase() === "input" && "radio" === a.type
    }, checkbox:function(a) {
      return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
    }, file:function(a) {
      return a.nodeName.toLowerCase() === "input" && "file" === a.type
    }, password:function(a) {
      return a.nodeName.toLowerCase() === "input" && "password" === a.type
    }, submit:function(a) {
      var b = a.nodeName.toLowerCase();
      return(b === "input" || b === "button") && "submit" === a.type
    }, image:function(a) {
      return a.nodeName.toLowerCase() === "input" && "image" === a.type
    }, reset:function(a) {
      var b = a.nodeName.toLowerCase();
      return(b === "input" || b === "button") && "reset" === a.type
    }, button:function(a) {
      var b = a.nodeName.toLowerCase();
      return b === "input" && "button" === a.type || b === "button"
    }, input:function(a) {
      return/input|select|textarea|button/i.test(a.nodeName)
    }, focus:function(a) {
      return a === a.ownerDocument.activeElement
    }}, setFilters:{first:function(a, b) {
      return b === 0
    }, last:function(a, b, c, d) {
      return b === d.length - 1
    }, even:function(a, b) {
      return b % 2 === 0
    }, odd:function(a, b) {
      return b % 2 === 1
    }, lt:function(a, b, c) {
      return b < c[3] - 0
    }, gt:function(a, b, c) {
      return b > c[3] - 0
    }, nth:function(a, b, c) {
      return c[3] - 0 === b
    }, eq:function(a, b, c) {
      return c[3] - 0 === b
    }}, filter:{PSEUDO:function(a, b, c, d) {
      var e = b[1], f = o.filters[e];
      if(f) {
        return f(a, c, b, d)
      }
      if(e === "contains") {
        return(a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0
      }
      if(e === "not") {
        var g = b[3];
        for(var h = 0, i = g.length;h < i;h++) {
          if(g[h] === a) {
            return!1
          }
        }
        return!0
      }
      m.error(e)
    }, CHILD:function(a, b) {
      var c, e, f, g, h, i, j, k = b[1], l = a;
      switch(k) {
        case "only":
        ;
        case "first":
          while(l = l.previousSibling) {
            if(l.nodeType === 1) {
              return!1
            }
          }
          if(k === "first") {
            return!0
          }
          l = a;
        case "last":
          while(l = l.nextSibling) {
            if(l.nodeType === 1) {
              return!1
            }
          }
          return!0;
        case "nth":
          c = b[2], e = b[3];
          if(c === 1 && e === 0) {
            return!0
          }
          f = b[0], g = a.parentNode;
          if(g && (g[d] !== f || !a.nodeIndex)) {
            i = 0;
            for(l = g.firstChild;l;l = l.nextSibling) {
              l.nodeType === 1 && (l.nodeIndex = ++i)
            }
            g[d] = f
          }
          j = a.nodeIndex - e;
          return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
      }
    }, ID:function(a, b) {
      return a.nodeType === 1 && a.getAttribute("id") === b
    }, TAG:function(a, b) {
      return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
    }, CLASS:function(a, b) {
      return(" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
    }, ATTR:function(a, b) {
      var c = b[1], d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c), e = d + "", f = b[2], g = b[4];
      return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
    }, POS:function(a, b, c, d) {
      var e = b[2], f = o.setFilters[e];
      if(f) {
        return f(a, c, b, d)
      }
    }}}, p = o.match.POS, q = function(a, b) {
      return"\\" + (b - 0 + 1)
    };
    for(var r in o.match) {
      o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q))
    }
    var s = function(a, b) {
      a = Array.prototype.slice.call(a, 0);
      if(b) {
        b.push.apply(b, a);
        return b
      }
      return a
    };
    try {
      Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
    }catch(t) {
      s = function(a, b) {
        var c = 0, d = b || [];
        if(g.call(a) === "[object Array]") {
          Array.prototype.push.apply(d, a)
        }else {
          if(typeof a.length == "number") {
            for(var e = a.length;c < e;c++) {
              d.push(a[c])
            }
          }else {
            for(;a[c];c++) {
              d.push(a[c])
            }
          }
        }
        return d
      }
    }
    var u, v;
    c.documentElement.compareDocumentPosition ? u = function(a, b) {
      if(a === b) {
        h = !0;
        return 0
      }
      if(!a.compareDocumentPosition || !b.compareDocumentPosition) {
        return a.compareDocumentPosition ? -1 : 1
      }
      return a.compareDocumentPosition(b) & 4 ? -1 : 1
    } : (u = function(a, b) {
      if(a === b) {
        h = !0;
        return 0
      }
      if(a.sourceIndex && b.sourceIndex) {
        return a.sourceIndex - b.sourceIndex
      }
      var c, d, e = [], f = [], g = a.parentNode, i = b.parentNode, j = g;
      if(g === i) {
        return v(a, b)
      }
      if(!g) {
        return-1
      }
      if(!i) {
        return 1
      }
      while(j) {
        e.unshift(j), j = j.parentNode
      }
      j = i;
      while(j) {
        f.unshift(j), j = j.parentNode
      }
      c = e.length, d = f.length;
      for(var k = 0;k < c && k < d;k++) {
        if(e[k] !== f[k]) {
          return v(e[k], f[k])
        }
      }
      return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
    }, v = function(a, b, c) {
      if(a === b) {
        return c
      }
      var d = a.nextSibling;
      while(d) {
        if(d === b) {
          return-1
        }
        d = d.nextSibling
      }
      return 1
    }), function() {
      var a = c.createElement("div"), d = "script" + (new Date).getTime(), e = c.documentElement;
      a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function(a, c, d) {
        if(typeof c.getElementById != "undefined" && !d) {
          var e = c.getElementById(a[1]);
          return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
        }
      }, o.filter.ID = function(a, b) {
        var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
        return a.nodeType === 1 && c && c.nodeValue === b
      }), e.removeChild(a), e = a = null
    }(), function() {
      var a = c.createElement("div");
      a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
        var c = b.getElementsByTagName(a[1]);
        if(a[1] === "*") {
          var d = [];
          for(var e = 0;c[e];e++) {
            c[e].nodeType === 1 && d.push(c[e])
          }
          c = d
        }
        return c
      }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function(a) {
        return a.getAttribute("href", 2)
      }), a = null
    }(), c.querySelectorAll && function() {
      var a = m, b = c.createElement("div"), d = "__sizzle__";
      b.innerHTML = "<p class='TEST'></p>";
      if(!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
        m = function(b, e, f, g) {
          e = e || c;
          if(!g && !m.isXML(e)) {
            var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
            if(h && (e.nodeType === 1 || e.nodeType === 9)) {
              if(h[1]) {
                return s(e.getElementsByTagName(b), f)
              }
              if(h[2] && o.find.CLASS && e.getElementsByClassName) {
                return s(e.getElementsByClassName(h[2]), f)
              }
            }
            if(e.nodeType === 9) {
              if(b === "body" && e.body) {
                return s([e.body], f)
              }
              if(h && h[3]) {
                var i = e.getElementById(h[3]);
                if(!i || !i.parentNode) {
                  return s([], f)
                }
                if(i.id === h[3]) {
                  return s([i], f)
                }
              }
              try {
                return s(e.querySelectorAll(b), f)
              }catch(j) {
              }
            }else {
              if(e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                var k = e, l = e.getAttribute("id"), n = l || d, p = e.parentNode, q = /^\s*[+~]/.test(b);
                l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                try {
                  if(!q || p) {
                    return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                  }
                }catch(r) {
                }finally {
                  l || k.removeAttribute("id")
                }
              }
            }
          }
          return a(b, e, f, g)
        };
        for(var e in a) {
          m[e] = a[e]
        }
        b = null
      }
    }(), function() {
      var a = c.documentElement, b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
      if(b) {
        var d = !b.call(c.createElement("div"), "div"), e = !1;
        try {
          b.call(c.documentElement, "[test!='']:sizzle")
        }catch(f) {
          e = !0
        }
        m.matchesSelector = function(a, c) {
          c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
          if(!m.isXML(a)) {
            try {
              if(e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                var f = b.call(a, c);
                if(f || !d || a.document && a.document.nodeType !== 11) {
                  return f
                }
              }
            }catch(g) {
            }
          }
          return m(c, null, null, [a]).length > 0
        }
      }
    }(), function() {
      var a = c.createElement("div");
      a.innerHTML = "<div class='test e'></div><div class='test'></div>";
      if(!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
        a.lastChild.className = "e";
        if(a.getElementsByClassName("e").length === 1) {
          return
        }
        o.order.splice(1, 0, "CLASS"), o.find.CLASS = function(a, b, c) {
          if(typeof b.getElementsByClassName != "undefined" && !c) {
            return b.getElementsByClassName(a[1])
          }
        }, a = null
      }
    }(), c.documentElement.contains ? m.contains = function(a, b) {
      return a !== b && (a.contains ? a.contains(b) : !0)
    } : c.documentElement.compareDocumentPosition ? m.contains = function(a, b) {
      return!!(a.compareDocumentPosition(b) & 16)
    } : m.contains = function() {
      return!1
    }, m.isXML = function(a) {
      var b = (a ? a.ownerDocument || a : 0).documentElement;
      return b ? b.nodeName !== "HTML" : !1
    };
    var y = function(a, b, c) {
      var d, e = [], f = "", g = b.nodeType ? [b] : b;
      while(d = o.match.PSEUDO.exec(a)) {
        f += d[0], a = a.replace(o.match.PSEUDO, "")
      }
      a = o.relative[a] ? a + "*" : a;
      for(var h = 0, i = g.length;h < i;h++) {
        m(a, g[h], e, c)
      }
      return m.filter(f, e)
    };
    m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
  }();
  var L = /Until$/, M = /^(?:parents|prevUntil|prevAll)/, N = /,/, O = /^.[^:#\[\.,]*$/, P = Array.prototype.slice, Q = f.expr.match.POS, R = {children:!0, contents:!0, next:!0, prev:!0};
  f.fn.extend({find:function(a) {
    var b = this, c, d;
    if(typeof a != "string") {
      return f(a).filter(function() {
        for(c = 0, d = b.length;c < d;c++) {
          if(f.contains(b[c], this)) {
            return!0
          }
        }
      })
    }
    var e = this.pushStack("", "find", a), g, h, i;
    for(c = 0, d = this.length;c < d;c++) {
      g = e.length, f.find(a, this[c], e);
      if(c > 0) {
        for(h = g;h < e.length;h++) {
          for(i = 0;i < g;i++) {
            if(e[i] === e[h]) {
              e.splice(h--, 1);
              break
            }
          }
        }
      }
    }
    return e
  }, has:function(a) {
    var b = f(a);
    return this.filter(function() {
      for(var a = 0, c = b.length;a < c;a++) {
        if(f.contains(this, b[a])) {
          return!0
        }
      }
    })
  }, not:function(a) {
    return this.pushStack(T(this, a, !1), "not", a)
  }, filter:function(a) {
    return this.pushStack(T(this, a, !0), "filter", a)
  }, is:function(a) {
    return!!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
  }, closest:function(a, b) {
    var c = [], d, e, g = this[0];
    if(f.isArray(a)) {
      var h = 1;
      while(g && g.ownerDocument && g !== b) {
        for(d = 0;d < a.length;d++) {
          f(g).is(a[d]) && c.push({selector:a[d], elem:g, level:h})
        }
        g = g.parentNode, h++
      }
      return c
    }
    var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
    for(d = 0, e = this.length;d < e;d++) {
      g = this[d];
      while(g) {
        if(i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
          c.push(g);
          break
        }
        g = g.parentNode;
        if(!g || !g.ownerDocument || g === b || g.nodeType === 11) {
          break
        }
      }
    }
    c = c.length > 1 ? f.unique(c) : c;
    return this.pushStack(c, "closest", a)
  }, index:function(a) {
    if(!a) {
      return this[0] && this[0].parentNode ? this.prevAll().length : -1
    }
    if(typeof a == "string") {
      return f.inArray(this[0], f(a))
    }
    return f.inArray(a.jquery ? a[0] : a, this)
  }, add:function(a, b) {
    var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a), d = f.merge(this.get(), c);
    return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
  }, andSelf:function() {
    return this.add(this.prevObject)
  }}), f.each({parent:function(a) {
    var b = a.parentNode;
    return b && b.nodeType !== 11 ? b : null
  }, parents:function(a) {
    return f.dir(a, "parentNode")
  }, parentsUntil:function(a, b, c) {
    return f.dir(a, "parentNode", c)
  }, next:function(a) {
    return f.nth(a, 2, "nextSibling")
  }, prev:function(a) {
    return f.nth(a, 2, "previousSibling")
  }, nextAll:function(a) {
    return f.dir(a, "nextSibling")
  }, prevAll:function(a) {
    return f.dir(a, "previousSibling")
  }, nextUntil:function(a, b, c) {
    return f.dir(a, "nextSibling", c)
  }, prevUntil:function(a, b, c) {
    return f.dir(a, "previousSibling", c)
  }, siblings:function(a) {
    return f.sibling(a.parentNode.firstChild, a)
  }, children:function(a) {
    return f.sibling(a.firstChild)
  }, contents:function(a) {
    return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
  }}, function(a, b) {
    f.fn[a] = function(c, d) {
      var e = f.map(this, b, c);
      L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
      return this.pushStack(e, a, P.call(arguments).join(","))
    }
  }), f.extend({filter:function(a, b, c) {
    c && (a = ":not(" + a + ")");
    return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
  }, dir:function(a, c, d) {
    var e = [], g = a[c];
    while(g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) {
      g.nodeType === 1 && e.push(g), g = g[c]
    }
    return e
  }, nth:function(a, b, c, d) {
    b = b || 1;
    var e = 0;
    for(;a;a = a[c]) {
      if(a.nodeType === 1 && ++e === b) {
        break
      }
    }
    return a
  }, sibling:function(a, b) {
    var c = [];
    for(;a;a = a.nextSibling) {
      a.nodeType === 1 && a !== b && c.push(a)
    }
    return c
  }});
  var V = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", W = / jQuery\d+="(?:\d+|null)"/g, X = /^\s+/, Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, Z = /<([\w:]+)/, $ = /<tbody/i, _ = /<|&#?\w+;/, ba = /<(?:script|style)/i, bb = /<(?:script|object|embed|option|style)/i, bc = new RegExp("<(?:" + V + ")", "i"), bd = /checked\s*(?:[^=]|=\s*.checked.)/i, be = /\/(java|ecma)script/i, 
  bf = /^\s*<!(?:\[CDATA\[|\-\-)/, bg = {option:[1, "<select multiple='multiple'>", "</select>"], legend:[1, "<fieldset>", "</fieldset>"], thead:[1, "<table>", "</table>"], tr:[2, "<table><tbody>", "</tbody></table>"], td:[3, "<table><tbody><tr>", "</tr></tbody></table>"], col:[2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area:[1, "<map>", "</map>"], _default:[0, "", ""]}, bh = U(c);
  bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({text:function(a) {
    if(f.isFunction(a)) {
      return this.each(function(b) {
        var c = f(this);
        c.text(a.call(this, b, c.text()))
      })
    }
    if(typeof a != "object" && a !== b) {
      return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
    }
    return f.text(this)
  }, wrapAll:function(a) {
    if(f.isFunction(a)) {
      return this.each(function(b) {
        f(this).wrapAll(a.call(this, b))
      })
    }
    if(this[0]) {
      var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
      this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
        var a = this;
        while(a.firstChild && a.firstChild.nodeType === 1) {
          a = a.firstChild
        }
        return a
      }).append(this)
    }
    return this
  }, wrapInner:function(a) {
    if(f.isFunction(a)) {
      return this.each(function(b) {
        f(this).wrapInner(a.call(this, b))
      })
    }
    return this.each(function() {
      var b = f(this), c = b.contents();
      c.length ? c.wrapAll(a) : b.append(a)
    })
  }, wrap:function(a) {
    var b = f.isFunction(a);
    return this.each(function(c) {
      f(this).wrapAll(b ? a.call(this, c) : a)
    })
  }, unwrap:function() {
    return this.parent().each(function() {
      f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
    }).end()
  }, append:function() {
    return this.domManip(arguments, !0, function(a) {
      this.nodeType === 1 && this.appendChild(a)
    })
  }, prepend:function() {
    return this.domManip(arguments, !0, function(a) {
      this.nodeType === 1 && this.insertBefore(a, this.firstChild)
    })
  }, before:function() {
    if(this[0] && this[0].parentNode) {
      return this.domManip(arguments, !1, function(a) {
        this.parentNode.insertBefore(a, this)
      })
    }
    if(arguments.length) {
      var a = f.clean(arguments);
      a.push.apply(a, this.toArray());
      return this.pushStack(a, "before", arguments)
    }
  }, after:function() {
    if(this[0] && this[0].parentNode) {
      return this.domManip(arguments, !1, function(a) {
        this.parentNode.insertBefore(a, this.nextSibling)
      })
    }
    if(arguments.length) {
      var a = this.pushStack(this, "after", arguments);
      a.push.apply(a, f.clean(arguments));
      return a
    }
  }, remove:function(a, b) {
    for(var c = 0, d;(d = this[c]) != null;c++) {
      if(!a || f.filter(a, [d]).length) {
        !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d)
      }
    }
    return this
  }, empty:function() {
    for(var a = 0, b;(b = this[a]) != null;a++) {
      b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
      while(b.firstChild) {
        b.removeChild(b.firstChild)
      }
    }
    return this
  }, clone:function(a, b) {
    a = a == null ? !1 : a, b = b == null ? a : b;
    return this.map(function() {
      return f.clone(this, a, b)
    })
  }, html:function(a) {
    if(a === b) {
      return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(W, "") : null
    }
    if(typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
      a = a.replace(Y, "<$1></$2>");
      try {
        for(var c = 0, d = this.length;c < d;c++) {
          this[c].nodeType === 1 && (f.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
        }
      }catch(e) {
        this.empty().append(a)
      }
    }else {
      f.isFunction(a) ? this.each(function(b) {
        var c = f(this);
        c.html(a.call(this, b, c.html()))
      }) : this.empty().append(a)
    }
    return this
  }, replaceWith:function(a) {
    if(this[0] && this[0].parentNode) {
      if(f.isFunction(a)) {
        return this.each(function(b) {
          var c = f(this), d = c.html();
          c.replaceWith(a.call(this, b, d))
        })
      }
      typeof a != "string" && (a = f(a).detach());
      return this.each(function() {
        var b = this.nextSibling, c = this.parentNode;
        f(this).remove(), b ? f(b).before(a) : f(c).append(a)
      })
    }
    return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
  }, detach:function(a) {
    return this.remove(a, !0)
  }, domManip:function(a, c, d) {
    var e, g, h, i, j = a[0], k = [];
    if(!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) {
      return this.each(function() {
        f(this).domManip(a, c, d, !0)
      })
    }
    if(f.isFunction(j)) {
      return this.each(function(e) {
        var g = f(this);
        a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
      })
    }
    if(this[0]) {
      i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {fragment:i} : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
      if(g) {
        c = c && f.nodeName(g, "tr");
        for(var l = 0, m = this.length, n = m - 1;l < m;l++) {
          d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
        }
      }
      k.length && f.each(k, bp)
    }
    return this
  }}), f.buildFragment = function(a, b, d) {
    var e, g, h, i, j = a[0];
    b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
    return{fragment:e, cacheable:g}
  }, f.fragments = {}, f.each({appendTo:"append", prependTo:"prepend", insertBefore:"before", insertAfter:"after", replaceAll:"replaceWith"}, function(a, b) {
    f.fn[a] = function(c) {
      var d = [], e = f(c), g = this.length === 1 && this[0].parentNode;
      if(g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
        e[b](this[0]);
        return this
      }
      for(var h = 0, i = e.length;h < i;h++) {
        var j = (h > 0 ? this.clone(!0) : this).get();
        f(e[h])[b](j), d = d.concat(j)
      }
      return this.pushStack(d, a, e.selector)
    }
  }), f.extend({clone:function(a, b, c) {
    var d, e, g, h = f.support.html5Clone || !bc.test("<" + a.nodeName) ? a.cloneNode(!0) : bo(a);
    if((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
      bk(a, h), d = bl(a), e = bl(h);
      for(g = 0;d[g];++g) {
        e[g] && bk(d[g], e[g])
      }
    }
    if(b) {
      bj(a, h);
      if(c) {
        d = bl(a), e = bl(h);
        for(g = 0;d[g];++g) {
          bj(d[g], e[g])
        }
      }
    }
    d = e = null;
    return h
  }, clean:function(a, b, d, e) {
    var g;
    b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
    var h = [], i;
    for(var j = 0, k;(k = a[j]) != null;j++) {
      typeof k == "number" && (k += "");
      if(!k) {
        continue
      }
      if(typeof k == "string") {
        if(!_.test(k)) {
          k = b.createTextNode(k)
        }else {
          k = k.replace(Y, "<$1></$2>");
          var l = (Z.exec(k) || ["", ""])[1].toLowerCase(), m = bg[l] || bg._default, n = m[0], o = b.createElement("div");
          b === c ? bh.appendChild(o) : U(b).appendChild(o), o.innerHTML = m[1] + k + m[2];
          while(n--) {
            o = o.lastChild
          }
          if(!f.support.tbody) {
            var p = $.test(k), q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "<table>" && !p ? o.childNodes : [];
            for(i = q.length - 1;i >= 0;--i) {
              f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
            }
          }
          !f.support.leadingWhitespace && X.test(k) && o.insertBefore(b.createTextNode(X.exec(k)[0]), o.firstChild), k = o.childNodes
        }
      }
      var r;
      if(!f.support.appendChecked) {
        if(k[0] && typeof(r = k.length) == "number") {
          for(i = 0;i < r;i++) {
            bn(k[i])
          }
        }else {
          bn(k)
        }
      }
      k.nodeType ? h.push(k) : h = f.merge(h, k)
    }
    if(d) {
      g = function(a) {
        return!a.type || be.test(a.type)
      };
      for(j = 0;h[j];j++) {
        if(e && f.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript")) {
          e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j])
        }else {
          if(h[j].nodeType === 1) {
            var s = f.grep(h[j].getElementsByTagName("script"), g);
            h.splice.apply(h, [j + 1, 0].concat(s))
          }
          d.appendChild(h[j])
        }
      }
    }
    return h
  }, cleanData:function(a) {
    var b, c, d = f.cache, e = f.event.special, g = f.support.deleteExpando;
    for(var h = 0, i;(i = a[h]) != null;h++) {
      if(i.nodeName && f.noData[i.nodeName.toLowerCase()]) {
        continue
      }
      c = i[f.expando];
      if(c) {
        b = d[c];
        if(b && b.events) {
          for(var j in b.events) {
            e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle)
          }
          b.handle && (b.handle.elem = null)
        }
        g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
      }
    }
  }});
  var bq = /alpha\([^)]*\)/i, br = /opacity=([^)]*)/, bs = /([A-Z]|^ms)/g, bt = /^-?\d+(?:px)?$/i, bu = /^-?\d/, bv = /^([\-+])=([\-+.\de]+)/, bw = {position:"absolute", visibility:"hidden", display:"block"}, bx = ["Left", "Right"], by = ["Top", "Bottom"], bz, bA, bB;
  f.fn.css = function(a, c) {
    if(arguments.length === 2 && c === b) {
      return this
    }
    return f.access(this, a, c, !0, function(a, c, d) {
      return d !== b ? f.style(a, c, d) : f.css(a, c)
    })
  }, f.extend({cssHooks:{opacity:{get:function(a, b) {
    if(b) {
      var c = bz(a, "opacity", "opacity");
      return c === "" ? "1" : c
    }
    return a.style.opacity
  }}}, cssNumber:{fillOpacity:!0, fontWeight:!0, lineHeight:!0, opacity:!0, orphans:!0, widows:!0, zIndex:!0, zoom:!0}, cssProps:{"float":f.support.cssFloat ? "cssFloat" : "styleFloat"}, style:function(a, c, d, e) {
    if(!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
      var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i];
      c = f.cssProps[i] || i;
      if(d === b) {
        if(k && "get" in k && (g = k.get(a, !1, e)) !== b) {
          return g
        }
        return j[c]
      }
      h = typeof d, h === "string" && (g = bv.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
      if(d == null || h === "number" && isNaN(d)) {
        return
      }
      h === "number" && !f.cssNumber[i] && (d += "px");
      if(!k || !("set" in k) || (d = k.set(a, d)) !== b) {
        try {
          j[c] = d
        }catch(l) {
        }
      }
    }
  }, css:function(a, c, d) {
    var e, g;
    c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
    if(g && "get" in g && (e = g.get(a, !0, d)) !== b) {
      return e
    }
    if(bz) {
      return bz(a, c)
    }
  }, swap:function(a, b, c) {
    var d = {};
    for(var e in b) {
      d[e] = a.style[e], a.style[e] = b[e]
    }
    c.call(a);
    for(e in b) {
      a.style[e] = d[e]
    }
  }}), f.curCSS = f.css, f.each(["height", "width"], function(a, b) {
    f.cssHooks[b] = {get:function(a, c, d) {
      var e;
      if(c) {
        if(a.offsetWidth !== 0) {
          return bC(a, b, d)
        }
        f.swap(a, bw, function() {
          e = bC(a, b, d)
        });
        return e
      }
    }, set:function(a, b) {
      if(!bt.test(b)) {
        return b
      }
      b = parseFloat(b);
      if(b >= 0) {
        return b + "px"
      }
    }}
  }), f.support.opacity || (f.cssHooks.opacity = {get:function(a, b) {
    return br.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
  }, set:function(a, b) {
    var c = a.style, d = a.currentStyle, e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "", g = d && d.filter || c.filter || "";
    c.zoom = 1;
    if(b >= 1 && f.trim(g.replace(bq, "")) === "") {
      c.removeAttribute("filter");
      if(d && !d.filter) {
        return
      }
    }
    c.filter = bq.test(g) ? g.replace(bq, e) : g + " " + e
  }}), f(function() {
    f.support.reliableMarginRight || (f.cssHooks.marginRight = {get:function(a, b) {
      var c;
      f.swap(a, {display:"inline-block"}, function() {
        b ? c = bz(a, "margin-right", "marginRight") : c = a.style.marginRight
      });
      return c
    }})
  }), c.defaultView && c.defaultView.getComputedStyle && (bA = function(a, b) {
    var c, d, e;
    b = b.replace(bs, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b)));
    return c
  }), c.documentElement.currentStyle && (bB = function(a, b) {
    var c, d, e, f = a.currentStyle && a.currentStyle[b], g = a.style;
    f === null && g && (e = g[b]) && (f = e), !bt.test(f) && bu.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f || 0, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
    return f === "" ? "auto" : f
  }), bz = bA || bB, f.expr && f.expr.filters && (f.expr.filters.hidden = function(a) {
    var b = a.offsetWidth, c = a.offsetHeight;
    return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
  }, f.expr.filters.visible = function(a) {
    return!f.expr.filters.hidden(a)
  });
  var bD = /%20/g, bE = /\[\]$/, bF = /\r?\n/g, bG = /#.*$/, bH = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, bI = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, bJ = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, bK = /^(?:GET|HEAD)$/, bL = /^\/\//, bM = /\?/, bN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bO = /^(?:select|textarea)/i, bP = /\s+/, bQ = /([?&])_=[^&]*/, bR = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, 
  bS = f.fn.load, bT = {}, bU = {}, bV, bW, bX = ["*/"] + ["*"];
  try {
    bV = e.href
  }catch(bY) {
    bV = c.createElement("a"), bV.href = "", bV = bV.href
  }
  bW = bR.exec(bV.toLowerCase()) || [], f.fn.extend({load:function(a, c, d) {
    if(typeof a != "string" && bS) {
      return bS.apply(this, arguments)
    }
    if(!this.length) {
      return this
    }
    var e = a.indexOf(" ");
    if(e >= 0) {
      var g = a.slice(e, a.length);
      a = a.slice(0, e)
    }
    var h = "GET";
    c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
    var i = this;
    f.ajax({url:a, type:h, dataType:"html", data:c, complete:function(a, b, c) {
      c = a.responseText, a.isResolved() && (a.done(function(a) {
        c = a
      }), i.html(g ? f("<div>").append(c.replace(bN, "")).find(g) : c)), d && i.each(d, [c, b, a])
    }});
    return this
  }, serialize:function() {
    return f.param(this.serializeArray())
  }, serializeArray:function() {
    return this.map(function() {
      return this.elements ? f.makeArray(this.elements) : this
    }).filter(function() {
      return this.name && !this.disabled && (this.checked || bO.test(this.nodeName) || bI.test(this.type))
    }).map(function(a, b) {
      var c = f(this).val();
      return c == null ? null : f.isArray(c) ? f.map(c, function(a, c) {
        return{name:b.name, value:a.replace(bF, "\r\n")}
      }) : {name:b.name, value:c.replace(bF, "\r\n")}
    }).get()
  }}), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
    f.fn[b] = function(a) {
      return this.on(b, a)
    }
  }), f.each(["get", "post"], function(a, c) {
    f[c] = function(a, d, e, g) {
      f.isFunction(d) && (g = g || e, e = d, d = b);
      return f.ajax({type:c, url:a, data:d, success:e, dataType:g})
    }
  }), f.extend({getScript:function(a, c) {
    return f.get(a, b, c, "script")
  }, getJSON:function(a, b, c) {
    return f.get(a, b, c, "json")
  }, ajaxSetup:function(a, b) {
    b ? b_(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b_(a, b);
    return a
  }, ajaxSettings:{url:bV, isLocal:bJ.test(bW[1]), global:!0, type:"GET", contentType:"application/x-www-form-urlencoded", processData:!0, async:!0, accepts:{xml:"application/xml, text/xml", html:"text/html", text:"text/plain", json:"application/json, text/javascript", "*":bX}, contents:{xml:/xml/, html:/html/, json:/json/}, responseFields:{xml:"responseXML", text:"responseText"}, converters:{"* text":a.String, "text html":!0, "text json":f.parseJSON, "text xml":f.parseXML}, flatOptions:{context:!0, 
  url:!0}}, ajaxPrefilter:bZ(bT), ajaxTransport:bZ(bU), ajax:function(a, c) {
    function w(a, c, l, m) {
      if(s !== 2) {
        s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
        var o, r, u, w = c, x = l ? cb(d, v, l) : b, y, z;
        if(a >= 200 && a < 300 || a === 304) {
          if(d.ifModified) {
            if(y = v.getResponseHeader("Last-Modified")) {
              f.lastModified[k] = y
            }
            if(z = v.getResponseHeader("Etag")) {
              f.etag[k] = z
            }
          }
          if(a === 304) {
            w = "notmodified", o = !0
          }else {
            try {
              r = cc(d, x), w = "success", o = !0
            }catch(A) {
              w = "parsererror", u = A
            }
          }
        }else {
          u = w;
          if(!w || a) {
            w = "error", a < 0 && (a = 0)
          }
        }
        v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
      }
    }
    typeof a == "object" && (c = a, a = b), c = c || {};
    var d = f.ajaxSetup({}, c), e = d.context || d, g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(), i = f.Callbacks("once memory"), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u, v = {readyState:0, setRequestHeader:function(a, b) {
      if(!s) {
        var c = a.toLowerCase();
        a = m[c] = m[c] || a, l[a] = b
      }
      return this
    }, getAllResponseHeaders:function() {
      return s === 2 ? n : null
    }, getResponseHeader:function(a) {
      var c;
      if(s === 2) {
        if(!o) {
          o = {};
          while(c = bH.exec(n)) {
            o[c[1].toLowerCase()] = c[2]
          }
        }
        c = o[a.toLowerCase()]
      }
      return c === b ? null : c
    }, overrideMimeType:function(a) {
      s || (d.mimeType = a);
      return this
    }, abort:function(a) {
      a = a || "abort", p && p.abort(a), w(0, a);
      return this
    }};
    h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function(a) {
      if(a) {
        var b;
        if(s < 2) {
          for(b in a) {
            j[b] = [j[b], a[b]]
          }
        }else {
          b = a[v.status], v.then(b, b)
        }
      }
      return this
    }, d.url = ((a || d.url) + "").replace(bG, "").replace(bL, bW[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bP), d.crossDomain == null && (r = bR.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bW[1] && r[2] == bW[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bW[3] || (bW[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), b$(bT, d, c, v);
    if(s === 2) {
      return!1
    }
    t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bK.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
    if(!d.hasContent) {
      d.data && (d.url += (bM.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
      if(d.cache === !1) {
        var x = f.now(), y = d.url.replace(bQ, "$1_=" + x);
        d.url = y + (y === d.url ? (bM.test(d.url) ? "&" : "?") + "_=" + x : "")
      }
    }
    (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bX + "; q=0.01" : "") : d.accepts["*"]);
    for(u in d.headers) {
      v.setRequestHeader(u, d.headers[u])
    }
    if(d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
      v.abort();
      return!1
    }
    for(u in{success:1, error:1, complete:1}) {
      v[u](d[u])
    }
    p = b$(bU, d, c, v);
    if(!p) {
      w(-1, "No Transport")
    }else {
      v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function() {
        v.abort("timeout")
      }, d.timeout));
      try {
        s = 1, p.send(l, w)
      }catch(z) {
        if(s < 2) {
          w(-1, z)
        }else {
          throw z;
        }
      }
    }
    return v
  }, param:function(a, c) {
    var d = [], e = function(a, b) {
      b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
    };
    c === b && (c = f.ajaxSettings.traditional);
    if(f.isArray(a) || a.jquery && !f.isPlainObject(a)) {
      f.each(a, function() {
        e(this.name, this.value)
      })
    }else {
      for(var g in a) {
        ca(g, a[g], c, e)
      }
    }
    return d.join("&").replace(bD, "+")
  }}), f.extend({active:0, lastModified:{}, etag:{}});
  var cd = f.now(), ce = /(\=)\?(&|$)|\?\?/i;
  f.ajaxSetup({jsonp:"callback", jsonpCallback:function() {
    return f.expando + "_" + cd++
  }}), f.ajaxPrefilter("json jsonp", function(b, c, d) {
    var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
    if(b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (ce.test(b.url) || e && ce.test(b.data))) {
      var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h], j = b.url, k = b.data, l = "$1" + h + "$2";
      b.jsonp !== !1 && (j = j.replace(ce, l), b.url === j && (e && (k = k.replace(ce, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function(a) {
        g = [a]
      }, d.always(function() {
        a[h] = i, g && f.isFunction(i) && a[h](g[0])
      }), b.converters["script json"] = function() {
        g || f.error(h + " was not called");
        return g[0]
      }, b.dataTypes[0] = "json";
      return"script"
    }
  }), f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents:{script:/javascript|ecmascript/}, converters:{"text script":function(a) {
    f.globalEval(a);
    return a
  }}}), f.ajaxPrefilter("script", function(a) {
    a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
  }), f.ajaxTransport("script", function(a) {
    if(a.crossDomain) {
      var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
      return{send:function(f, g) {
        d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function(a, c) {
          if(c || !d.readyState || /loaded|complete/.test(d.readyState)) {
            d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
          }
        }, e.insertBefore(d, e.firstChild)
      }, abort:function() {
        d && d.onload(0, 1)
      }}
    }
  });
  var cf = a.ActiveXObject ? function() {
    for(var a in ch) {
      ch[a](0, 1)
    }
  } : !1, cg = 0, ch;
  f.ajaxSettings.xhr = a.ActiveXObject ? function() {
    return!this.isLocal && ci() || cj()
  } : ci, function(a) {
    f.extend(f.support, {ajax:!!a, cors:!!a && "withCredentials" in a})
  }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function(c) {
    if(!c.crossDomain || f.support.cors) {
      var d;
      return{send:function(e, g) {
        var h = c.xhr(), i, j;
        c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
        if(c.xhrFields) {
          for(j in c.xhrFields) {
            h[j] = c.xhrFields[j]
          }
        }
        c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
        try {
          for(j in e) {
            h.setRequestHeader(j, e[j])
          }
        }catch(k) {
        }
        h.send(c.hasContent && c.data || null), d = function(a, e) {
          var j, k, l, m, n;
          try {
            if(d && (e || h.readyState === 4)) {
              d = b, i && (h.onreadystatechange = f.noop, cf && delete ch[i]);
              if(e) {
                h.readyState !== 4 && h.abort()
              }else {
                j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n), m.text = h.responseText;
                try {
                  k = h.statusText
                }catch(o) {
                  k = ""
                }
                !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
              }
            }
          }catch(p) {
            e || g(-1, p)
          }
          m && g(j, k, m, l)
        }, !c.async || h.readyState === 4 ? d() : (i = ++cg, cf && (ch || (ch = {}, f(a).unload(cf)), ch[i] = d), h.onreadystatechange = d)
      }, abort:function() {
        d && d(0, 1)
      }}
    }
  });
  var ck = {}, cl, cm, cn = /^(?:toggle|show|hide)$/, co = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, cp, cq = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], cr;
  f.fn.extend({show:function(a, b, c) {
    var d, e;
    if(a || a === 0) {
      return this.animate(cu("show", 3), a, b, c)
    }
    for(var g = 0, h = this.length;g < h;g++) {
      d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), e === "" && f.css(d, "display") === "none" && f._data(d, "olddisplay", cv(d.nodeName)))
    }
    for(g = 0;g < h;g++) {
      d = this[g];
      if(d.style) {
        e = d.style.display;
        if(e === "" || e === "none") {
          d.style.display = f._data(d, "olddisplay") || ""
        }
      }
    }
    return this
  }, hide:function(a, b, c) {
    if(a || a === 0) {
      return this.animate(cu("hide", 3), a, b, c)
    }
    var d, e, g = 0, h = this.length;
    for(;g < h;g++) {
      d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e))
    }
    for(g = 0;g < h;g++) {
      this[g].style && (this[g].style.display = "none")
    }
    return this
  }, _toggle:f.fn.toggle, toggle:function(a, b, c) {
    var d = typeof a == "boolean";
    f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function() {
      var b = d ? a : f(this).is(":hidden");
      f(this)[b ? "show" : "hide"]()
    }) : this.animate(cu("toggle", 3), a, b, c);
    return this
  }, fadeTo:function(a, b, c, d) {
    return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity:b}, a, c, d)
  }, animate:function(a, b, c, d) {
    function g() {
      e.queue === !1 && f._mark(this);
      var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(":hidden"), g, h, i, j, k, l, m, n, o;
      b.animatedProperties = {};
      for(i in a) {
        g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
        if(h === "hide" && d || h === "show" && !d) {
          return b.complete.call(this)
        }
        c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cv(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
      }
      b.overflow != null && (this.style.overflow = "hidden");
      for(i in a) {
        j = new f.fx(this, b, i), h = a[i], cn.test(h) ? (o = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), o ? (f._data(this, "toggle" + i, o === "show" ? "hide" : "show"), j[o]()) : j[h]()) : (k = co.exec(h), l = j.cur(), k ? (m = parseFloat(k[2]), n = k[3] || (f.cssNumber[i] ? "" : "px"), n !== "px" && (f.style(this, i, (m || 1) + n), l = (m || 1) / j.cur() * l, f.style(this, i, l + n)), k[1] && (m = (k[1] === "-=" ? -1 : 1) * m + l), j.custom(l, m, n)) : j.custom(l, 
        h, ""))
      }
      return!0
    }
    var e = f.speed(b, c, d);
    if(f.isEmptyObject(a)) {
      return this.each(e.complete, [!1])
    }
    a = f.extend({}, a);
    return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
  }, stop:function(a, c, d) {
    typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
    return this.each(function() {
      function h(a, b, c) {
        var e = b[c];
        f.removeData(a, c, !0), e.stop(d)
      }
      var b, c = !1, e = f.timers, g = f._data(this);
      d || f._unmark(!0, this);
      if(a == null) {
        for(b in g) {
          g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b)
        }
      }else {
        g[b = a + ".run"] && g[b].stop && h(this, g, b)
      }
      for(b = e.length;b--;) {
        e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1))
      }
      (!d || !c) && f.dequeue(this, a)
    })
  }}), f.each({slideDown:cu("show", 1), slideUp:cu("hide", 1), slideToggle:cu("toggle", 1), fadeIn:{opacity:"show"}, fadeOut:{opacity:"hide"}, fadeToggle:{opacity:"toggle"}}, function(a, b) {
    f.fn[a] = function(a, c, d) {
      return this.animate(b, a, c, d)
    }
  }), f.extend({speed:function(a, b, c) {
    var d = a && typeof a == "object" ? f.extend({}, a) : {complete:c || !c && b || f.isFunction(a) && a, duration:a, easing:c && b || b && !f.isFunction(b) && b};
    d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
    if(d.queue == null || d.queue === !0) {
      d.queue = "fx"
    }
    d.old = d.complete, d.complete = function(a) {
      f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
    };
    return d
  }, easing:{linear:function(a, b, c, d) {
    return c + d * a
  }, swing:function(a, b, c, d) {
    return(-Math.cos(a * Math.PI) / 2 + 0.5) * d + c
  }}, timers:[], fx:function(a, b, c) {
    this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
  }}), f.fx.prototype = {update:function() {
    this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
  }, cur:function() {
    if(this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
      return this.elem[this.prop]
    }
    var a, b = f.css(this.elem, this.prop);
    return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
  }, custom:function(a, c, d) {
    function h(a) {
      return e.step(a)
    }
    var e = this, g = f.fx;
    this.startTime = cr || cs(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function() {
      e.options.hide && f._data(e.elem, "fxshow" + e.prop) === b && f._data(e.elem, "fxshow" + e.prop, e.start)
    }, h() && f.timers.push(h) && !cp && (cp = setInterval(g.tick, g.interval))
  }, show:function() {
    var a = f._data(this.elem, "fxshow" + this.prop);
    this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
  }, hide:function() {
    this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
  }, step:function(a) {
    var b, c, d, e = cr || cs(), g = !0, h = this.elem, i = this.options;
    if(a || e >= i.duration + this.startTime) {
      this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
      for(b in i.animatedProperties) {
        i.animatedProperties[b] !== !0 && (g = !1)
      }
      if(g) {
        i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function(a, b) {
          h.style["overflow" + b] = i.overflow[a]
        }), i.hide && f(h).hide();
        if(i.hide || i.show) {
          for(b in i.animatedProperties) {
            f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0)
          }
        }
        d = i.complete, d && (i.complete = !1, d.call(h))
      }
      return!1
    }
    i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
    return!0
  }}, f.extend(f.fx, {tick:function() {
    var a, b = f.timers, c = 0;
    for(;c < b.length;c++) {
      a = b[c], !a() && b[c] === a && b.splice(c--, 1)
    }
    b.length || f.fx.stop()
  }, interval:13, stop:function() {
    clearInterval(cp), cp = null
  }, speeds:{slow:600, fast:200, _default:400}, step:{opacity:function(a) {
    f.style(a.elem, "opacity", a.now)
  }, _default:function(a) {
    a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
  }}}), f.each(["width", "height"], function(a, b) {
    f.fx.step[b] = function(a) {
      f.style(a.elem, b, Math.max(0, a.now) + a.unit)
    }
  }), f.expr && f.expr.filters && (f.expr.filters.animated = function(a) {
    return f.grep(f.timers, function(b) {
      return a === b.elem
    }).length
  });
  var cw = /^t(?:able|d|h)$/i, cx = /^(?:body|html)$/i;
  "getBoundingClientRect" in c.documentElement ? f.fn.offset = function(a) {
    var b = this[0], c;
    if(a) {
      return this.each(function(b) {
        f.offset.setOffset(this, a, b)
      })
    }
    if(!b || !b.ownerDocument) {
      return null
    }
    if(b === b.ownerDocument.body) {
      return f.offset.bodyOffset(b)
    }
    try {
      c = b.getBoundingClientRect()
    }catch(d) {
    }
    var e = b.ownerDocument, g = e.documentElement;
    if(!c || !f.contains(g, b)) {
      return c ? {top:c.top, left:c.left} : {top:0, left:0}
    }
    var h = e.body, i = cy(e), j = g.clientTop || h.clientTop || 0, k = g.clientLeft || h.clientLeft || 0, l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop, m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft, n = c.top + l - j, o = c.left + m - k;
    return{top:n, left:o}
  } : f.fn.offset = function(a) {
    var b = this[0];
    if(a) {
      return this.each(function(b) {
        f.offset.setOffset(this, a, b)
      })
    }
    if(!b || !b.ownerDocument) {
      return null
    }
    if(b === b.ownerDocument.body) {
      return f.offset.bodyOffset(b)
    }
    var c, d = b.offsetParent, e = b, g = b.ownerDocument, h = g.documentElement, i = g.body, j = g.defaultView, k = j ? j.getComputedStyle(b, null) : b.currentStyle, l = b.offsetTop, m = b.offsetLeft;
    while((b = b.parentNode) && b !== i && b !== h) {
      if(f.support.fixedPosition && k.position === "fixed") {
        break
      }
      c = j ? j.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === d && (l += b.offsetTop, m += b.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), f.support.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 
      0), k = c
    }
    if(k.position === "relative" || k.position === "static") {
      l += i.offsetTop, m += i.offsetLeft
    }
    f.support.fixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft));
    return{top:l, left:m}
  }, f.offset = {bodyOffset:function(a) {
    var b = a.offsetTop, c = a.offsetLeft;
    f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
    return{top:b, left:c}
  }, setOffset:function(a, b, c) {
    var d = f.css(a, "position");
    d === "static" && (a.style.position = "relative");
    var e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"), j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1, k = {}, l = {}, m, n;
    j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
  }}, f.fn.extend({position:function() {
    if(!this[0]) {
      return null
    }
    var a = this[0], b = this.offsetParent(), c = this.offset(), d = cx.test(b[0].nodeName) ? {top:0, left:0} : b.offset();
    c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
    return{top:c.top - d.top, left:c.left - d.left}
  }, offsetParent:function() {
    return this.map(function() {
      var a = this.offsetParent || c.body;
      while(a && !cx.test(a.nodeName) && f.css(a, "position") === "static") {
        a = a.offsetParent
      }
      return a
    })
  }}), f.each(["Left", "Top"], function(a, c) {
    var d = "scroll" + c;
    f.fn[d] = function(c) {
      var e, g;
      if(c === b) {
        e = this[0];
        if(!e) {
          return null
        }
        g = cy(e);
        return g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d]
      }
      return this.each(function() {
        g = cy(this), g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c
      })
    }
  }), f.each(["Height", "Width"], function(a, c) {
    var d = c.toLowerCase();
    f.fn["inner" + c] = function() {
      var a = this[0];
      return a ? a.style ? parseFloat(f.css(a, d, "padding")) : this[d]() : null
    }, f.fn["outer" + c] = function(a) {
      var b = this[0];
      return b ? b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : this[d]() : null
    }, f.fn[d] = function(a) {
      var e = this[0];
      if(!e) {
        return a == null ? null : this
      }
      if(f.isFunction(a)) {
        return this.each(function(b) {
          var c = f(this);
          c[d](a.call(this, b, c[d]()))
        })
      }
      if(f.isWindow(e)) {
        var g = e.document.documentElement["client" + c], h = e.document.body;
        return e.document.compatMode === "CSS1Compat" && g || h && h["client" + c] || g
      }
      if(e.nodeType === 9) {
        return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c])
      }
      if(a === b) {
        var i = f.css(e, d), j = parseFloat(i);
        return f.isNumeric(j) ? j : i
      }
      return this.css(d, typeof a == "string" ? a : a + "px")
    }
  }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
    return f
  })
})(window);
(function(a, b) {
  function c(b, c) {
    var e = b.nodeName.toLowerCase();
    if("area" === e) {
      var f = b.parentNode, g = f.name, h;
      return!b.href || !g || f.nodeName.toLowerCase() !== "map" ? !1 : (h = a("img[usemap=#" + g + "]")[0], !!h && d(h))
    }
    return(/input|select|textarea|button|object/.test(e) ? !b.disabled : "a" == e ? b.href || c : c) && d(b)
  }
  function d(b) {
    return!a(b).parents().andSelf().filter(function() {
      return a.curCSS(this, "visibility") === "hidden" || a.expr.filters.hidden(this)
    }).length
  }
  a.ui = a.ui || {};
  if(a.ui.version) {
    return
  }
  a.extend(a.ui, {version:"1.8.20", keyCode:{ALT:18, BACKSPACE:8, CAPS_LOCK:20, COMMA:188, COMMAND:91, COMMAND_LEFT:91, COMMAND_RIGHT:93, CONTROL:17, DELETE:46, DOWN:40, END:35, ENTER:13, ESCAPE:27, HOME:36, INSERT:45, LEFT:37, MENU:93, NUMPAD_ADD:107, NUMPAD_DECIMAL:110, NUMPAD_DIVIDE:111, NUMPAD_ENTER:108, NUMPAD_MULTIPLY:106, NUMPAD_SUBTRACT:109, PAGE_DOWN:34, PAGE_UP:33, PERIOD:190, RIGHT:39, SHIFT:16, SPACE:32, TAB:9, UP:38, WINDOWS:91}}), a.fn.extend({propAttr:a.fn.prop || a.fn.attr, _focus:a.fn.focus, 
  focus:function(b, c) {
    return typeof b == "number" ? this.each(function() {
      var d = this;
      setTimeout(function() {
        a(d).focus(), c && c.call(d)
      }, b)
    }) : this._focus.apply(this, arguments)
  }, scrollParent:function() {
    var b;
    return a.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? b = this.parents().filter(function() {
      return/(relative|absolute|fixed)/.test(a.curCSS(this, "position", 1)) && /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
    }).eq(0) : b = this.parents().filter(function() {
      return/(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
    }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b
  }, zIndex:function(c) {
    if(c !== b) {
      return this.css("zIndex", c)
    }
    if(this.length) {
      var d = a(this[0]), e, f;
      while(d.length && d[0] !== document) {
        e = d.css("position");
        if(e === "absolute" || e === "relative" || e === "fixed") {
          f = parseInt(d.css("zIndex"), 10);
          if(!isNaN(f) && f !== 0) {
            return f
          }
        }
        d = d.parent()
      }
    }
    return 0
  }, disableSelection:function() {
    return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
      a.preventDefault()
    })
  }, enableSelection:function() {
    return this.unbind(".ui-disableSelection")
  }}), a.each(["Width", "Height"], function(c, d) {
    function h(b, c, d, f) {
      return a.each(e, function() {
        c -= parseFloat(a.curCSS(b, "padding" + this, !0)) || 0, d && (c -= parseFloat(a.curCSS(b, "border" + this + "Width", !0)) || 0), f && (c -= parseFloat(a.curCSS(b, "margin" + this, !0)) || 0)
      }), c
    }
    var e = d === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], f = d.toLowerCase(), g = {innerWidth:a.fn.innerWidth, innerHeight:a.fn.innerHeight, outerWidth:a.fn.outerWidth, outerHeight:a.fn.outerHeight};
    a.fn["inner" + d] = function(c) {
      return c === b ? g["inner" + d].call(this) : this.each(function() {
        a(this).css(f, h(this, c) + "px")
      })
    }, a.fn["outer" + d] = function(b, c) {
      return typeof b != "number" ? g["outer" + d].call(this, b) : this.each(function() {
        a(this).css(f, h(this, b, !0, c) + "px")
      })
    }
  }), a.extend(a.expr[":"], {data:function(b, c, d) {
    return!!a.data(b, d[3])
  }, focusable:function(b) {
    return c(b, !isNaN(a.attr(b, "tabindex")))
  }, tabbable:function(b) {
    var d = a.attr(b, "tabindex"), e = isNaN(d);
    return(e || d >= 0) && c(b, !e)
  }}), a(function() {
    var b = document.body, c = b.appendChild(c = document.createElement("div"));
    c.offsetHeight, a.extend(c.style, {minHeight:"100px", height:"auto", padding:0, borderWidth:0}), a.support.minHeight = c.offsetHeight === 100, a.support.selectstart = "onselectstart" in c, b.removeChild(c).style.display = "none"
  }), a.extend(a.ui, {plugin:{add:function(b, c, d) {
    var e = a.ui[b].prototype;
    for(var f in d) {
      e.plugins[f] = e.plugins[f] || [], e.plugins[f].push([c, d[f]])
    }
  }, call:function(a, b, c) {
    var d = a.plugins[b];
    if(!d || !a.element[0].parentNode) {
      return
    }
    for(var e = 0;e < d.length;e++) {
      a.options[d[e][0]] && d[e][1].apply(a.element, c)
    }
  }}, contains:function(a, b) {
    return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b)
  }, hasScroll:function(b, c) {
    if(a(b).css("overflow") === "hidden") {
      return!1
    }
    var d = c && c === "left" ? "scrollLeft" : "scrollTop", e = !1;
    return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
  }, isOverAxis:function(a, b, c) {
    return a > b && a < b + c
  }, isOver:function(b, c, d, e, f, g) {
    return a.ui.isOverAxis(b, d, f) && a.ui.isOverAxis(c, e, g)
  }})
})(jQuery);
(function(a, b) {
  if(a.cleanData) {
    var c = a.cleanData;
    a.cleanData = function(b) {
      for(var d = 0, e;(e = b[d]) != null;d++) {
        try {
          a(e).triggerHandler("remove")
        }catch(f) {
        }
      }
      c(b)
    }
  }else {
    var d = a.fn.remove;
    a.fn.remove = function(b, c) {
      return this.each(function() {
        return c || (!b || a.filter(b, [this]).length) && a("*", this).add([this]).each(function() {
          try {
            a(this).triggerHandler("remove")
          }catch(b) {
          }
        }), d.call(a(this), b, c)
      })
    }
  }
  a.widget = function(b, c, d) {
    var e = b.split(".")[0], f;
    b = b.split(".")[1], f = e + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][f] = function(c) {
      return!!a.data(c, b)
    }, a[e] = a[e] || {}, a[e][b] = function(a, b) {
      arguments.length && this._createWidget(a, b)
    };
    var g = new c;
    g.options = a.extend(!0, {}, g.options), a[e][b].prototype = a.extend(!0, g, {namespace:e, widgetName:b, widgetEventPrefix:a[e][b].prototype.widgetEventPrefix || b, widgetBaseClass:f}, d), a.widget.bridge(b, a[e][b])
  }, a.widget.bridge = function(c, d) {
    a.fn[c] = function(e) {
      var f = typeof e == "string", g = Array.prototype.slice.call(arguments, 1), h = this;
      return e = !f && g.length ? a.extend.apply(null, [!0, e].concat(g)) : e, f && e.charAt(0) === "_" ? h : (f ? this.each(function() {
        var d = a.data(this, c), f = d && a.isFunction(d[e]) ? d[e].apply(d, g) : d;
        if(f !== d && f !== b) {
          return h = f, !1
        }
      }) : this.each(function() {
        var b = a.data(this, c);
        b ? b.option(e || {})._init() : a.data(this, c, new d(e, this))
      }), h)
    }
  }, a.Widget = function(a, b) {
    arguments.length && this._createWidget(a, b)
  }, a.Widget.prototype = {widgetName:"widget", widgetEventPrefix:"", options:{disabled:!1}, _createWidget:function(b, c) {
    a.data(c, this.widgetName, this), this.element = a(c), this.options = a.extend(!0, {}, this.options, this._getCreateOptions(), b);
    var d = this;
    this.element.bind("remove." + this.widgetName, function() {
      d.destroy()
    }), this._create(), this._trigger("create"), this._init()
  }, _getCreateOptions:function() {
    return a.metadata && a.metadata.get(this.element[0])[this.widgetName]
  }, _create:function() {
  }, _init:function() {
  }, destroy:function() {
    this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled " + "ui-state-disabled")
  }, widget:function() {
    return this.element
  }, option:function(c, d) {
    var e = c;
    if(arguments.length === 0) {
      return a.extend({}, this.options)
    }
    if(typeof c == "string") {
      if(d === b) {
        return this.options[c]
      }
      e = {}, e[c] = d
    }
    return this._setOptions(e), this
  }, _setOptions:function(b) {
    var c = this;
    return a.each(b, function(a, b) {
      c._setOption(a, b)
    }), this
  }, _setOption:function(a, b) {
    return this.options[a] = b, a === "disabled" && this.widget()[b ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled").attr("aria-disabled", b), this
  }, enable:function() {
    return this._setOption("disabled", !1)
  }, disable:function() {
    return this._setOption("disabled", !0)
  }, _trigger:function(b, c, d) {
    var e, f, g = this.options[b];
    d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent;
    if(f) {
      for(e in f) {
        e in c || (c[e] = f[e])
      }
    }
    return this.element.trigger(c, d), !(a.isFunction(g) && g.call(this.element[0], c, d) === !1 || c.isDefaultPrevented())
  }}
})(jQuery);
(function(a, b) {
  var c = !1;
  a(document).mouseup(function(a) {
    c = !1
  }), a.widget("ui.mouse", {options:{cancel:":input,option", distance:1, delay:0}, _mouseInit:function() {
    var b = this;
    this.element.bind("mousedown." + this.widgetName, function(a) {
      return b._mouseDown(a)
    }).bind("click." + this.widgetName, function(c) {
      if(!0 === a.data(c.target, b.widgetName + ".preventClickEvent")) {
        return a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1
      }
    }), this.started = !1
  }, _mouseDestroy:function() {
    this.element.unbind("." + this.widgetName), a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
  }, _mouseDown:function(b) {
    if(c) {
      return
    }
    this._mouseStarted && this._mouseUp(b), this._mouseDownEvent = b;
    var d = this, e = b.which == 1, f = typeof this.options.cancel == "string" && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1;
    if(!e || f || !this._mouseCapture(b)) {
      return!0
    }
    this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
      d.mouseDelayMet = !0
    }, this.options.delay));
    if(this._mouseDistanceMet(b) && this._mouseDelayMet(b)) {
      this._mouseStarted = this._mouseStart(b) !== !1;
      if(!this._mouseStarted) {
        return b.preventDefault(), !0
      }
    }
    return!0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
      return d._mouseMove(a)
    }, this._mouseUpDelegate = function(a) {
      return d._mouseUp(a)
    }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), b.preventDefault(), c = !0, !0
  }, _mouseMove:function(b) {
    return!a.browser.msie || document.documentMode >= 9 || !!b.button ? this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted) : this._mouseUp(b)
  }, _mouseUp:function(b) {
    return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target == this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), !1
  }, _mouseDistanceMet:function(a) {
    return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
  }, _mouseDelayMet:function(a) {
    return this.mouseDelayMet
  }, _mouseStart:function(a) {
  }, _mouseDrag:function(a) {
  }, _mouseStop:function(a) {
  }, _mouseCapture:function(a) {
    return!0
  }})
})(jQuery);
(function(a, b) {
  a.ui = a.ui || {};
  var c = /left|center|right/, d = /top|center|bottom/, e = "center", f = {}, g = a.fn.position, h = a.fn.offset;
  a.fn.position = function(b) {
    if(!b || !b.of) {
      return g.apply(this, arguments)
    }
    b = a.extend({}, b);
    var h = a(b.of), i = h[0], j = (b.collision || "flip").split(" "), k = b.offset ? b.offset.split(" ") : [0, 0], l, m, n;
    return i.nodeType === 9 ? (l = h.width(), m = h.height(), n = {top:0, left:0}) : i.setTimeout ? (l = h.width(), m = h.height(), n = {top:h.scrollTop(), left:h.scrollLeft()}) : i.preventDefault ? (b.at = "left top", l = m = 0, n = {top:b.of.pageY, left:b.of.pageX}) : (l = h.outerWidth(), m = h.outerHeight(), n = h.offset()), a.each(["my", "at"], function() {
      var a = (b[this] || "").split(" ");
      a.length === 1 && (a = c.test(a[0]) ? a.concat([e]) : d.test(a[0]) ? [e].concat(a) : [e, e]), a[0] = c.test(a[0]) ? a[0] : e, a[1] = d.test(a[1]) ? a[1] : e, b[this] = a
    }), j.length === 1 && (j[1] = j[0]), k[0] = parseInt(k[0], 10) || 0, k.length === 1 && (k[1] = k[0]), k[1] = parseInt(k[1], 10) || 0, b.at[0] === "right" ? n.left += l : b.at[0] === e && (n.left += l / 2), b.at[1] === "bottom" ? n.top += m : b.at[1] === e && (n.top += m / 2), n.left += k[0], n.top += k[1], this.each(function() {
      var c = a(this), d = c.outerWidth(), g = c.outerHeight(), h = parseInt(a.curCSS(this, "marginLeft", !0)) || 0, i = parseInt(a.curCSS(this, "marginTop", !0)) || 0, o = d + h + (parseInt(a.curCSS(this, "marginRight", !0)) || 0), p = g + i + (parseInt(a.curCSS(this, "marginBottom", !0)) || 0), q = a.extend({}, n), r;
      b.my[0] === "right" ? q.left -= d : b.my[0] === e && (q.left -= d / 2), b.my[1] === "bottom" ? q.top -= g : b.my[1] === e && (q.top -= g / 2), f.fractions || (q.left = Math.round(q.left), q.top = Math.round(q.top)), r = {left:q.left - h, top:q.top - i}, a.each(["left", "top"], function(c, e) {
        a.ui.position[j[c]] && a.ui.position[j[c]][e](q, {targetWidth:l, targetHeight:m, elemWidth:d, elemHeight:g, collisionPosition:r, collisionWidth:o, collisionHeight:p, offset:k, my:b.my, at:b.at})
      }), a.fn.bgiframe && c.bgiframe(), c.offset(a.extend(q, {using:b.using}))
    })
  }, a.ui.position = {fit:{left:function(b, c) {
    var d = a(window), e = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft();
    b.left = e > 0 ? b.left - e : Math.max(b.left - c.collisionPosition.left, b.left)
  }, top:function(b, c) {
    var d = a(window), e = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop();
    b.top = e > 0 ? b.top - e : Math.max(b.top - c.collisionPosition.top, b.top)
  }}, flip:{left:function(b, c) {
    if(c.at[0] === e) {
      return
    }
    var d = a(window), f = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft(), g = c.my[0] === "left" ? -c.elemWidth : c.my[0] === "right" ? c.elemWidth : 0, h = c.at[0] === "left" ? c.targetWidth : -c.targetWidth, i = -2 * c.offset[0];
    b.left += c.collisionPosition.left < 0 ? g + h + i : f > 0 ? g + h + i : 0
  }, top:function(b, c) {
    if(c.at[1] === e) {
      return
    }
    var d = a(window), f = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop(), g = c.my[1] === "top" ? -c.elemHeight : c.my[1] === "bottom" ? c.elemHeight : 0, h = c.at[1] === "top" ? c.targetHeight : -c.targetHeight, i = -2 * c.offset[1];
    b.top += c.collisionPosition.top < 0 ? g + h + i : f > 0 ? g + h + i : 0
  }}}, a.offset.setOffset || (a.offset.setOffset = function(b, c) {
    /static/.test(a.curCSS(b, "position")) && (b.style.position = "relative");
    var d = a(b), e = d.offset(), f = parseInt(a.curCSS(b, "top", !0), 10) || 0, g = parseInt(a.curCSS(b, "left", !0), 10) || 0, h = {top:c.top - e.top + f, left:c.left - e.left + g};
    "using" in c ? c.using.call(b, h) : d.css(h)
  }, a.fn.offset = function(b) {
    var c = this[0];
    return!c || !c.ownerDocument ? null : b ? this.each(function() {
      a.offset.setOffset(this, b)
    }) : h.call(this)
  }), function() {
    var b = document.getElementsByTagName("body")[0], c = document.createElement("div"), d, e, g, h, i;
    d = document.createElement(b ? "div" : "body"), g = {visibility:"hidden", width:0, height:0, border:0, margin:0, background:"none"}, b && a.extend(g, {position:"absolute", left:"-1000px", top:"-1000px"});
    for(var j in g) {
      d.style[j] = g[j]
    }
    d.appendChild(c), e = b || document.documentElement, e.insertBefore(d, e.firstChild), c.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;", h = a(c).offset(function(a, b) {
      return b
    }).offset(), d.innerHTML = "", e.removeChild(d), i = h.top + h.left + (b ? 2E3 : 0), f.fractions = i > 21 && i < 22
  }()
})(jQuery);
(function(a, b) {
  a.widget("ui.draggable", a.ui.mouse, {widgetEventPrefix:"drag", options:{addClasses:!0, appendTo:"parent", axis:!1, connectToSortable:!1, containment:!1, cursor:"auto", cursorAt:!1, grid:!1, handle:!1, helper:"original", iframeFix:!1, opacity:!1, refreshPositions:!1, revert:!1, revertDuration:500, scope:"default", scroll:!0, scrollSensitivity:20, scrollSpeed:20, snap:!1, snapMode:"both", snapTolerance:20, stack:!1, zIndex:!1}, _create:function() {
    this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
  }, destroy:function() {
    if(!this.element.data("draggable")) {
      return
    }
    return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this
  }, _mouseCapture:function(b) {
    var c = this.options;
    return this.helper || c.disabled || a(b.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(b), this.handle ? (c.iframeFix && a(c.iframeFix === !0 ? "iframe" : c.iframeFix).each(function() {
      a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth + "px", height:this.offsetHeight + "px", position:"absolute", opacity:"0.001", zIndex:1E3}).css(a(this).offset()).appendTo("body")
    }), !0) : !1)
  }, _mouseStart:function(b) {
    var c = this.options;
    return this.helper = this._createHelper(b), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {top:this.offset.top - this.margins.top, left:this.offset.left - this.margins.left}, a.extend(this.offset, {click:{left:b.pageX - this.offset.left, top:b.pageY - this.offset.top}, parent:this._getParentOffset(), 
    relative:this._getRelativeOffset()}), this.originalPosition = this.position = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), c.containment && this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.helper.addClass("ui-draggable-dragging"), this._mouseDrag(b, !0), 
    a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
  }, _mouseDrag:function(b, c) {
    this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute");
    if(!c) {
      var d = this._uiHash();
      if(this._trigger("drag", b, d) === !1) {
        return this._mouseUp({}), !1
      }
      this.position = d.position
    }
    if(!this.options.axis || this.options.axis != "y") {
      this.helper[0].style.left = this.position.left + "px"
    }
    if(!this.options.axis || this.options.axis != "x") {
      this.helper[0].style.top = this.position.top + "px"
    }
    return a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1
  }, _mouseStop:function(b) {
    var c = !1;
    a.ui.ddmanager && !this.options.dropBehaviour && (c = a.ui.ddmanager.drop(this, b)), this.dropped && (c = this.dropped, this.dropped = !1);
    var d = this.element[0], e = !1;
    while(d && (d = d.parentNode)) {
      d == document && (e = !0)
    }
    if(!e && this.options.helper === "original") {
      return!1
    }
    if(this.options.revert == "invalid" && !c || this.options.revert == "valid" && c || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, c)) {
      var f = this;
      a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
        f._trigger("stop", b) !== !1 && f._clear()
      })
    }else {
      this._trigger("stop", b) !== !1 && this._clear()
    }
    return!1
  }, _mouseUp:function(b) {
    return this.options.iframeFix === !0 && a("div.ui-draggable-iframeFix").each(function() {
      this.parentNode.removeChild(this)
    }), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), a.ui.mouse.prototype._mouseUp.call(this, b)
  }, cancel:function() {
    return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
  }, _getHandle:function(b) {
    var c = !this.options.handle || !a(this.options.handle, this.element).length ? !0 : !1;
    return a(this.options.handle, this.element).find("*").andSelf().each(function() {
      this == b.target && (c = !0)
    }), c
  }, _createHelper:function(b) {
    var c = this.options, d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b])) : c.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
    return d.parents("body").length || d.appendTo(c.appendTo == "parent" ? this.element[0].parentNode : c.appendTo), d[0] != this.element[0] && !/(fixed|absolute)/.test(d.css("position")) && d.css("position", "absolute"), d
  }, _adjustOffsetFromHelper:function(b) {
    typeof b == "string" && (b = b.split(" ")), a.isArray(b) && (b = {left:+b[0], top:+b[1] || 0}), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
  }, _getParentOffset:function() {
    this.offsetParent = this.helper.offsetParent();
    var b = this.offsetParent.offset();
    this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop());
    if(this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie) {
      b = {top:0, left:0}
    }
    return{top:b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left:b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
  }, _getRelativeOffset:function() {
    if(this.cssPosition == "relative") {
      var a = this.element.position();
      return{top:a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left:a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
    }
    return{top:0, left:0}
  }, _cacheMargins:function() {
    this.margins = {left:parseInt(this.element.css("marginLeft"), 10) || 0, top:parseInt(this.element.css("marginTop"), 10) || 0, right:parseInt(this.element.css("marginRight"), 10) || 0, bottom:parseInt(this.element.css("marginBottom"), 10) || 0}
  }, _cacheHelperProportions:function() {
    this.helperProportions = {width:this.helper.outerWidth(), height:this.helper.outerHeight()}
  }, _setContainment:function() {
    var b = this.options;
    b.containment == "parent" && (b.containment = this.helper[0].parentNode);
    if(b.containment == "document" || b.containment == "window") {
      this.containment = [b.containment == "document" ? 0 : a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, b.containment == "document" ? 0 : a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (b.containment == "document" ? 0 : a(window).scrollLeft()) + a(b.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (b.containment == "document" ? 0 : a(window).scrollTop()) + (a(b.containment == "document" ? 
      document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
    }
    if(!/^(document|window|parent)$/.test(b.containment) && b.containment.constructor != Array) {
      var c = a(b.containment), d = c[0];
      if(!d) {
        return
      }
      var e = c.offset(), f = a(d).css("overflow") != "hidden";
      this.containment = [(parseInt(a(d).css("borderLeftWidth"), 10) || 0) + (parseInt(a(d).css("paddingLeft"), 10) || 0), (parseInt(a(d).css("borderTopWidth"), 10) || 0) + (parseInt(a(d).css("paddingTop"), 10) || 0), (f ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(a(d).css("borderLeftWidth"), 10) || 0) - (parseInt(a(d).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (f ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - 
      (parseInt(a(d).css("borderTopWidth"), 10) || 0) - (parseInt(a(d).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = c
    }else {
      b.containment.constructor == Array && (this.containment = b.containment)
    }
  }, _convertPositionTo:function(b, c) {
    c || (c = this.position);
    var d = b == "absolute" ? 1 : -1, e = this.options, f = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, g = /(html|body)/i.test(f[0].tagName);
    return{top:c.top + this.offset.relative.top * d + this.offset.parent.top * d - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : g ? 0 : f.scrollTop()) * d), left:c.left + this.offset.relative.left * d + this.offset.parent.left * d - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : g ? 0 : f.scrollLeft()) * 
    d)}
  }, _generatePosition:function(b) {
    var c = this.options, d = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, e = /(html|body)/i.test(d[0].tagName), f = b.pageX, g = b.pageY;
    if(this.originalPosition) {
      var h;
      if(this.containment) {
        if(this.relative_container) {
          var i = this.relative_container.offset();
          h = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]
        }else {
          h = this.containment
        }
        b.pageX - this.offset.click.left < h[0] && (f = h[0] + this.offset.click.left), b.pageY - this.offset.click.top < h[1] && (g = h[1] + this.offset.click.top), b.pageX - this.offset.click.left > h[2] && (f = h[2] + this.offset.click.left), b.pageY - this.offset.click.top > h[3] && (g = h[3] + this.offset.click.top)
      }
      if(c.grid) {
        var j = c.grid[1] ? this.originalPageY + Math.round((g - this.originalPageY) / c.grid[1]) * c.grid[1] : this.originalPageY;
        g = h ? j - this.offset.click.top < h[1] || j - this.offset.click.top > h[3] ? j - this.offset.click.top < h[1] ? j + c.grid[1] : j - c.grid[1] : j : j;
        var k = c.grid[0] ? this.originalPageX + Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0] : this.originalPageX;
        f = h ? k - this.offset.click.left < h[0] || k - this.offset.click.left > h[2] ? k - this.offset.click.left < h[0] ? k + c.grid[0] : k - c.grid[0] : k : k
      }
    }
    return{top:g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e ? 0 : d.scrollTop()), left:f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 
    0 : d.scrollLeft())}
  }, _clear:function() {
    this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
  }, _trigger:function(b, c, d) {
    return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d]), b == "drag" && (this.positionAbs = this._convertPositionTo("absolute")), a.Widget.prototype._trigger.call(this, b, c, d)
  }, plugins:{}, _uiHash:function(a) {
    return{helper:this.helper, position:this.position, originalPosition:this.originalPosition, offset:this.positionAbs}
  }}), a.extend(a.ui.draggable, {version:"1.8.20"}), a.ui.plugin.add("draggable", "connectToSortable", {start:function(b, c) {
    var d = a(this).data("draggable"), e = d.options, f = a.extend({}, c, {item:d.element});
    d.sortables = [], a(e.connectToSortable).each(function() {
      var c = a.data(this, "sortable");
      c && !c.options.disabled && (d.sortables.push({instance:c, shouldRevert:c.options.revert}), c.refreshPositions(), c._trigger("activate", b, f))
    })
  }, stop:function(b, c) {
    var d = a(this).data("draggable"), e = a.extend({}, c, {item:d.element});
    a.each(d.sortables, function() {
      this.instance.isOver ? (this.instance.isOver = 0, d.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(b), this.instance.options.helper = this.instance.options._helper, d.options.helper == "original" && this.instance.currentItem.css({top:"auto", left:"auto"})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b, e))
    })
  }, drag:function(b, c) {
    var d = a(this).data("draggable"), e = this, f = function(b) {
      var c = this.offset.click.top, d = this.offset.click.left, e = this.positionAbs.top, f = this.positionAbs.left, g = b.height, h = b.width, i = b.top, j = b.left;
      return a.ui.isOver(e + c, f + d, i, j, g, h)
    };
    a.each(d.sortables, function(f) {
      this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, this.instance.offset.click = d.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
        return c.helper[0]
      }, b.target = this.instance.currentItem[0], this.instance._mouseCapture(b, !0), this.instance._mouseStart(b, !0, !0), this.instance.offset.click.top = d.offset.click.top, this.instance.offset.click.left = d.offset.click.left, this.instance.offset.parent.left -= d.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= d.offset.parent.top - this.instance.offset.parent.top, d._trigger("toSortable", b), d.dropped = this.instance.element, d.currentItem = d.element, 
      this.instance.fromOutside = d), this.instance.currentItem && this.instance._mouseDrag(b)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b, this.instance._uiHash(this.instance)), this.instance._mouseStop(b, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), d._trigger("fromSortable", 
      b), d.dropped = !1)
    })
  }}), a.ui.plugin.add("draggable", "cursor", {start:function(b, c) {
    var d = a("body"), e = a(this).data("draggable").options;
    d.css("cursor") && (e._cursor = d.css("cursor")), d.css("cursor", e.cursor)
  }, stop:function(b, c) {
    var d = a(this).data("draggable").options;
    d._cursor && a("body").css("cursor", d._cursor)
  }}), a.ui.plugin.add("draggable", "opacity", {start:function(b, c) {
    var d = a(c.helper), e = a(this).data("draggable").options;
    d.css("opacity") && (e._opacity = d.css("opacity")), d.css("opacity", e.opacity)
  }, stop:function(b, c) {
    var d = a(this).data("draggable").options;
    d._opacity && a(c.helper).css("opacity", d._opacity)
  }}), a.ui.plugin.add("draggable", "scroll", {start:function(b, c) {
    var d = a(this).data("draggable");
    d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML" && (d.overflowOffset = d.scrollParent.offset())
  }, drag:function(b, c) {
    var d = a(this).data("draggable"), e = d.options, f = !1;
    if(d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML") {
      if(!e.axis || e.axis != "x") {
        d.overflowOffset.top + d.scrollParent[0].offsetHeight - b.pageY < e.scrollSensitivity ? d.scrollParent[0].scrollTop = f = d.scrollParent[0].scrollTop + e.scrollSpeed : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (d.scrollParent[0].scrollTop = f = d.scrollParent[0].scrollTop - e.scrollSpeed)
      }
      if(!e.axis || e.axis != "y") {
        d.overflowOffset.left + d.scrollParent[0].offsetWidth - b.pageX < e.scrollSensitivity ? d.scrollParent[0].scrollLeft = f = d.scrollParent[0].scrollLeft + e.scrollSpeed : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (d.scrollParent[0].scrollLeft = f = d.scrollParent[0].scrollLeft - e.scrollSpeed)
      }
    }else {
      if(!e.axis || e.axis != "x") {
        b.pageY - a(document).scrollTop() < e.scrollSensitivity ? f = a(document).scrollTop(a(document).scrollTop() - e.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < e.scrollSensitivity && (f = a(document).scrollTop(a(document).scrollTop() + e.scrollSpeed))
      }
      if(!e.axis || e.axis != "y") {
        b.pageX - a(document).scrollLeft() < e.scrollSensitivity ? f = a(document).scrollLeft(a(document).scrollLeft() - e.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < e.scrollSensitivity && (f = a(document).scrollLeft(a(document).scrollLeft() + e.scrollSpeed))
      }
    }
    f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b)
  }}), a.ui.plugin.add("draggable", "snap", {start:function(b, c) {
    var d = a(this).data("draggable"), e = d.options;
    d.snapElements = [], a(e.snap.constructor != String ? e.snap.items || ":data(draggable)" : e.snap).each(function() {
      var b = a(this), c = b.offset();
      this != d.element[0] && d.snapElements.push({item:this, width:b.outerWidth(), height:b.outerHeight(), top:c.top, left:c.left})
    })
  }, drag:function(b, c) {
    var d = a(this).data("draggable"), e = d.options, f = e.snapTolerance, g = c.offset.left, h = g + d.helperProportions.width, i = c.offset.top, j = i + d.helperProportions.height;
    for(var k = d.snapElements.length - 1;k >= 0;k--) {
      var l = d.snapElements[k].left, m = l + d.snapElements[k].width, n = d.snapElements[k].top, o = n + d.snapElements[k].height;
      if(!(l - f < g && g < m + f && n - f < i && i < o + f || l - f < g && g < m + f && n - f < j && j < o + f || l - f < h && h < m + f && n - f < i && i < o + f || l - f < h && h < m + f && n - f < j && j < o + f)) {
        d.snapElements[k].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), {snapItem:d.snapElements[k].item})), d.snapElements[k].snapping = !1;
        continue
      }
      if(e.snapMode != "inner") {
        var p = Math.abs(n - j) <= f, q = Math.abs(o - i) <= f, r = Math.abs(l - h) <= f, s = Math.abs(m - g) <= f;
        p && (c.position.top = d._convertPositionTo("relative", {top:n - d.helperProportions.height, left:0}).top - d.margins.top), q && (c.position.top = d._convertPositionTo("relative", {top:o, left:0}).top - d.margins.top), r && (c.position.left = d._convertPositionTo("relative", {top:0, left:l - d.helperProportions.width}).left - d.margins.left), s && (c.position.left = d._convertPositionTo("relative", {top:0, left:m}).left - d.margins.left)
      }
      var t = p || q || r || s;
      if(e.snapMode != "outer") {
        var p = Math.abs(n - i) <= f, q = Math.abs(o - j) <= f, r = Math.abs(l - g) <= f, s = Math.abs(m - h) <= f;
        p && (c.position.top = d._convertPositionTo("relative", {top:n, left:0}).top - d.margins.top), q && (c.position.top = d._convertPositionTo("relative", {top:o - d.helperProportions.height, left:0}).top - d.margins.top), r && (c.position.left = d._convertPositionTo("relative", {top:0, left:l}).left - d.margins.left), s && (c.position.left = d._convertPositionTo("relative", {top:0, left:m - d.helperProportions.width}).left - d.margins.left)
      }
      !d.snapElements[k].snapping && (p || q || r || s || t) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), {snapItem:d.snapElements[k].item})), d.snapElements[k].snapping = p || q || r || s || t
    }
  }}), a.ui.plugin.add("draggable", "stack", {start:function(b, c) {
    var d = a(this).data("draggable").options, e = a.makeArray(a(d.stack)).sort(function(b, c) {
      return(parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
    });
    if(!e.length) {
      return
    }
    var f = parseInt(e[0].style.zIndex) || 0;
    a(e).each(function(a) {
      this.style.zIndex = f + a
    }), this[0].style.zIndex = f + e.length
  }}), a.ui.plugin.add("draggable", "zIndex", {start:function(b, c) {
    var d = a(c.helper), e = a(this).data("draggable").options;
    d.css("zIndex") && (e._zIndex = d.css("zIndex")), d.css("zIndex", e.zIndex)
  }, stop:function(b, c) {
    var d = a(this).data("draggable").options;
    d._zIndex && a(c.helper).css("zIndex", d._zIndex)
  }})
})(jQuery);
(function(a, b) {
  a.widget("ui.droppable", {widgetEventPrefix:"drop", options:{accept:"*", activeClass:!1, addClasses:!0, greedy:!1, hoverClass:!1, scope:"default", tolerance:"intersect"}, _create:function() {
    var b = this.options, c = b.accept;
    this.isover = 0, this.isout = 1, this.accept = a.isFunction(c) ? c : function(a) {
      return a.is(c)
    }, this.proportions = {width:this.element[0].offsetWidth, height:this.element[0].offsetHeight}, a.ui.ddmanager.droppables[b.scope] = a.ui.ddmanager.droppables[b.scope] || [], a.ui.ddmanager.droppables[b.scope].push(this), b.addClasses && this.element.addClass("ui-droppable")
  }, destroy:function() {
    var b = a.ui.ddmanager.droppables[this.options.scope];
    for(var c = 0;c < b.length;c++) {
      b[c] == this && b.splice(c, 1)
    }
    return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"), this
  }, _setOption:function(b, c) {
    b == "accept" && (this.accept = a.isFunction(c) ? c : function(a) {
      return a.is(c)
    }), a.Widget.prototype._setOption.apply(this, arguments)
  }, _activate:function(b) {
    var c = a.ui.ddmanager.current;
    this.options.activeClass && this.element.addClass(this.options.activeClass), c && this._trigger("activate", b, this.ui(c))
  }, _deactivate:function(b) {
    var c = a.ui.ddmanager.current;
    this.options.activeClass && this.element.removeClass(this.options.activeClass), c && this._trigger("deactivate", b, this.ui(c))
  }, _over:function(b) {
    var c = a.ui.ddmanager.current;
    if(!c || (c.currentItem || c.element)[0] == this.element[0]) {
      return
    }
    this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", b, this.ui(c)))
  }, _out:function(b) {
    var c = a.ui.ddmanager.current;
    if(!c || (c.currentItem || c.element)[0] == this.element[0]) {
      return
    }
    this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", b, this.ui(c)))
  }, _drop:function(b, c) {
    var d = c || a.ui.ddmanager.current;
    if(!d || (d.currentItem || d.element)[0] == this.element[0]) {
      return!1
    }
    var e = !1;
    return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
      var b = a.data(this, "droppable");
      if(b.options.greedy && !b.options.disabled && b.options.scope == d.options.scope && b.accept.call(b.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(b, {offset:b.element.offset()}), b.options.tolerance)) {
        return e = !0, !1
      }
    }), e ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), this.element) : !1
  }, ui:function(a) {
    return{draggable:a.currentItem || a.element, helper:a.helper, position:a.position, offset:a.positionAbs}
  }}), a.extend(a.ui.droppable, {version:"1.8.20"}), a.ui.intersect = function(b, c, d) {
    if(!c.offset) {
      return!1
    }
    var e = (b.positionAbs || b.position.absolute).left, f = e + b.helperProportions.width, g = (b.positionAbs || b.position.absolute).top, h = g + b.helperProportions.height, i = c.offset.left, j = i + c.proportions.width, k = c.offset.top, l = k + c.proportions.height;
    switch(d) {
      case "fit":
        return i <= e && f <= j && k <= g && h <= l;
      case "intersect":
        return i < e + b.helperProportions.width / 2 && f - b.helperProportions.width / 2 < j && k < g + b.helperProportions.height / 2 && h - b.helperProportions.height / 2 < l;
      case "pointer":
        var m = (b.positionAbs || b.position.absolute).left + (b.clickOffset || b.offset.click).left, n = (b.positionAbs || b.position.absolute).top + (b.clickOffset || b.offset.click).top, o = a.ui.isOver(n, m, k, i, c.proportions.height, c.proportions.width);
        return o;
      case "touch":
        return(g >= k && g <= l || h >= k && h <= l || g < k && h > l) && (e >= i && e <= j || f >= i && f <= j || e < i && f > j);
      default:
        return!1
    }
  }, a.ui.ddmanager = {current:null, droppables:{"default":[]}, prepareOffsets:function(b, c) {
    var d = a.ui.ddmanager.droppables[b.options.scope] || [], e = c ? c.type : null, f = (b.currentItem || b.element).find(":data(droppable)").andSelf();
    g:for(var h = 0;h < d.length;h++) {
      if(d[h].options.disabled || b && !d[h].accept.call(d[h].element[0], b.currentItem || b.element)) {
        continue
      }
      for(var i = 0;i < f.length;i++) {
        if(f[i] == d[h].element[0]) {
          d[h].proportions.height = 0;
          continue g
        }
      }
      d[h].visible = d[h].element.css("display") != "none";
      if(!d[h].visible) {
        continue
      }
      e == "mousedown" && d[h]._activate.call(d[h], c), d[h].offset = d[h].element.offset(), d[h].proportions = {width:d[h].element[0].offsetWidth, height:d[h].element[0].offsetHeight}
    }
  }, drop:function(b, c) {
    var d = !1;
    return a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function() {
      if(!this.options) {
        return
      }
      !this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, c))
    }), d
  }, dragStart:function(b, c) {
    b.element.parents(":not(body,html)").bind("scroll.droppable", function() {
      b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
    })
  }, drag:function(b, c) {
    b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c), a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function() {
      if(this.options.disabled || this.greedyChild || !this.visible) {
        return
      }
      var d = a.ui.intersect(b, this, this.options.tolerance), e = !d && this.isover == 1 ? "isout" : d && this.isover == 0 ? "isover" : null;
      if(!e) {
        return
      }
      var f;
      if(this.options.greedy) {
        var g = this.element.parents(":data(droppable):eq(0)");
        g.length && (f = a.data(g[0], "droppable"), f.greedyChild = e == "isover" ? 1 : 0)
      }
      f && e == "isover" && (f.isover = 0, f.isout = 1, f._out.call(f, c)), this[e] = 1, this[e == "isout" ? "isover" : "isout"] = 0, this[e == "isover" ? "_over" : "_out"].call(this, c), f && e == "isout" && (f.isout = 0, f.isover = 1, f._over.call(f, c))
    })
  }, dragStop:function(b, c) {
    b.element.parents(":not(body,html)").unbind("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
  }}
})(jQuery);
(function(a, b) {
  a.widget("ui.selectable", a.ui.mouse, {options:{appendTo:"body", autoRefresh:!0, distance:0, filter:"*", tolerance:"touch"}, _create:function() {
    var b = this;
    this.element.addClass("ui-selectable"), this.dragged = !1;
    var c;
    this.refresh = function() {
      c = a(b.options.filter, b.element[0]), c.addClass("ui-selectee"), c.each(function() {
        var b = a(this), c = b.offset();
        a.data(this, "selectable-item", {element:this, $element:b, left:c.left, top:c.top, right:c.left + b.outerWidth(), bottom:c.top + b.outerHeight(), startselected:!1, selected:b.hasClass("ui-selected"), selecting:b.hasClass("ui-selecting"), unselecting:b.hasClass("ui-unselecting")})
      })
    }, this.refresh(), this.selectees = c.addClass("ui-selectee"), this._mouseInit(), this.helper = a("<div class='ui-selectable-helper'></div>")
  }, destroy:function() {
    return this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"), this._mouseDestroy(), this
  }, _mouseStart:function(b) {
    var c = this;
    this.opos = [b.pageX, b.pageY];
    if(this.options.disabled) {
      return
    }
    var d = this.options;
    this.selectees = a(d.filter, this.element[0]), this._trigger("start", b), a(d.appendTo).append(this.helper), this.helper.css({left:b.clientX, top:b.clientY, width:0, height:0}), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
      var d = a.data(this, "selectable-item");
      d.startselected = !0, !b.metaKey && !b.ctrlKey && (d.$element.removeClass("ui-selected"), d.selected = !1, d.$element.addClass("ui-unselecting"), d.unselecting = !0, c._trigger("unselecting", b, {unselecting:d.element}))
    }), a(b.target).parents().andSelf().each(function() {
      var d = a.data(this, "selectable-item");
      if(d) {
        var e = !b.metaKey && !b.ctrlKey || !d.$element.hasClass("ui-selected");
        return d.$element.removeClass(e ? "ui-unselecting" : "ui-selected").addClass(e ? "ui-selecting" : "ui-unselecting"), d.unselecting = !e, d.selecting = e, d.selected = e, e ? c._trigger("selecting", b, {selecting:d.element}) : c._trigger("unselecting", b, {unselecting:d.element}), !1
      }
    })
  }, _mouseDrag:function(b) {
    var c = this;
    this.dragged = !0;
    if(this.options.disabled) {
      return
    }
    var d = this.options, e = this.opos[0], f = this.opos[1], g = b.pageX, h = b.pageY;
    if(e > g) {
      var i = g;
      g = e, e = i
    }
    if(f > h) {
      var i = h;
      h = f, f = i
    }
    return this.helper.css({left:e, top:f, width:g - e, height:h - f}), this.selectees.each(function() {
      var i = a.data(this, "selectable-item");
      if(!i || i.element == c.element[0]) {
        return
      }
      var j = !1;
      d.tolerance == "touch" ? j = !(i.left > g || i.right < e || i.top > h || i.bottom < f) : d.tolerance == "fit" && (j = i.left > e && i.right < g && i.top > f && i.bottom < h), j ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, c._trigger("selecting", b, {selecting:i.element}))) : (i.selecting && ((b.metaKey || b.ctrlKey) && 
      i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), c._trigger("unselecting", b, {unselecting:i.element}))), i.selected && !b.metaKey && !b.ctrlKey && !i.startselected && (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = 
      !0, c._trigger("unselecting", b, {unselecting:i.element})))
    }), !1
  }, _mouseStop:function(b) {
    var c = this;
    this.dragged = !1;
    var d = this.options;
    return a(".ui-unselecting", this.element[0]).each(function() {
      var d = a.data(this, "selectable-item");
      d.$element.removeClass("ui-unselecting"), d.unselecting = !1, d.startselected = !1, c._trigger("unselected", b, {unselected:d.element})
    }), a(".ui-selecting", this.element[0]).each(function() {
      var d = a.data(this, "selectable-item");
      d.$element.removeClass("ui-selecting").addClass("ui-selected"), d.selecting = !1, d.selected = !0, d.startselected = !0, c._trigger("selected", b, {selected:d.element})
    }), this._trigger("stop", b), this.helper.remove(), !1
  }}), a.extend(a.ui.selectable, {version:"1.8.20"})
})(jQuery);
(function(a, b) {
  a.widget("ui.sortable", a.ui.mouse, {widgetEventPrefix:"sort", ready:!1, options:{appendTo:"parent", axis:!1, connectWith:!1, containment:!1, cursor:"auto", cursorAt:!1, dropOnEmpty:!0, forcePlaceholderSize:!1, forceHelperSize:!1, grid:!1, handle:!1, helper:"original", items:"> *", opacity:!1, placeholder:!1, revert:!1, scroll:!0, scrollSensitivity:20, scrollSpeed:20, scope:"default", tolerance:"intersect", zIndex:1E3}, _create:function() {
    var a = this.options;
    this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? a.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
  }, destroy:function() {
    a.Widget.prototype.destroy.call(this), this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
    for(var b = this.items.length - 1;b >= 0;b--) {
      this.items[b].item.removeData(this.widgetName + "-item")
    }
    return this
  }, _setOption:function(b, c) {
    b === "disabled" ? (this.options[b] = c, this.widget()[c ? "addClass" : "removeClass"]("ui-sortable-disabled")) : a.Widget.prototype._setOption.apply(this, arguments)
  }, _mouseCapture:function(b, c) {
    var d = this;
    if(this.reverting) {
      return!1
    }
    if(this.options.disabled || this.options.type == "static") {
      return!1
    }
    this._refreshItems(b);
    var e = null, f = this, g = a(b.target).parents().each(function() {
      if(a.data(this, d.widgetName + "-item") == f) {
        return e = a(this), !1
      }
    });
    a.data(b.target, d.widgetName + "-item") == f && (e = a(b.target));
    if(!e) {
      return!1
    }
    if(this.options.handle && !c) {
      var h = !1;
      a(this.options.handle, e).find("*").andSelf().each(function() {
        this == b.target && (h = !0)
      });
      if(!h) {
        return!1
      }
    }
    return this.currentItem = e, this._removeCurrentsFromItems(), !0
  }, _mouseStart:function(b, c, d) {
    var e = this.options, f = this;
    this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {top:this.offset.top - this.margins.top, left:this.offset.left - this.margins.left}, this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), a.extend(this.offset, {click:{left:b.pageX - this.offset.left, top:b.pageY - 
    this.offset.top}, parent:this._getParentOffset(), relative:this._getRelativeOffset()}), this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt), this.domPosition = {prev:this.currentItem.prev()[0], parent:this.currentItem.parent()[0]}, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), e.containment && this._setContainment(), e.cursor && (a("body").css("cursor") && 
    (this._storedCursor = a("body").css("cursor")), a("body").css("cursor", e.cursor)), e.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", e.opacity)), e.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", e.zIndex)), this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", 
    b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions();
    if(!d) {
      for(var g = this.containers.length - 1;g >= 0;g--) {
        this.containers[g]._trigger("activate", b, f._uiHash(this))
      }
    }
    return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), !0
  }, _mouseDrag:function(b) {
    this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
    if(this.options.scroll) {
      var c = this.options, d = !1;
      this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < c.scrollSensitivity ? this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop + c.scrollSpeed : b.pageY - this.overflowOffset.top < c.scrollSensitivity && (this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop - c.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < c.scrollSensitivity ? 
      this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft + c.scrollSpeed : b.pageX - this.overflowOffset.left < c.scrollSensitivity && (this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft - c.scrollSpeed)) : (b.pageY - a(document).scrollTop() < c.scrollSensitivity ? d = a(document).scrollTop(a(document).scrollTop() - c.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < c.scrollSensitivity && (d = a(document).scrollTop(a(document).scrollTop() + 
      c.scrollSpeed)), b.pageX - a(document).scrollLeft() < c.scrollSensitivity ? d = a(document).scrollLeft(a(document).scrollLeft() - c.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < c.scrollSensitivity && (d = a(document).scrollLeft(a(document).scrollLeft() + c.scrollSpeed))), d !== !1 && a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)
    }
    this.positionAbs = this._convertPositionTo("absolute");
    if(!this.options.axis || this.options.axis != "y") {
      this.helper[0].style.left = this.position.left + "px"
    }
    if(!this.options.axis || this.options.axis != "x") {
      this.helper[0].style.top = this.position.top + "px"
    }
    for(var e = this.items.length - 1;e >= 0;e--) {
      var f = this.items[e], g = f.item[0], h = this._intersectsWithPointer(f);
      if(!h) {
        continue
      }
      if(g != this.currentItem[0] && this.placeholder[h == 1 ? "next" : "prev"]()[0] != g && !a.ui.contains(this.placeholder[0], g) && (this.options.type == "semi-dynamic" ? !a.ui.contains(this.element[0], g) : !0)) {
        this.direction = h == 1 ? "down" : "up";
        if(this.options.tolerance == "pointer" || this._intersectsWithSides(f)) {
          this._rearrange(b, f)
        }else {
          break
        }
        this._trigger("change", b, this._uiHash());
        break
      }
    }
    return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
  }, _mouseStop:function(b, c) {
    if(!b) {
      return
    }
    a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b);
    if(this.options.revert) {
      var d = this, e = d.placeholder.offset();
      d.reverting = !0, a(this.helper).animate({left:e.left - this.offset.parent.left - d.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft), top:e.top - this.offset.parent.top - d.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)}, parseInt(this.options.revert, 10) || 500, function() {
        d._clear(b)
      })
    }else {
      this._clear(b, c)
    }
    return!1
  }, cancel:function() {
    var b = this;
    if(this.dragging) {
      this._mouseUp({target:null}), this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
      for(var c = this.containers.length - 1;c >= 0;c--) {
        this.containers[c]._trigger("deactivate", null, b._uiHash(this)), this.containers[c].containerCache.over && (this.containers[c]._trigger("out", null, b._uiHash(this)), this.containers[c].containerCache.over = 0)
      }
    }
    return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, {helper:null, dragging:!1, reverting:!1, _noFinalSort:null}), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), this
  }, serialize:function(b) {
    var c = this._getItemsAsjQuery(b && b.connected), d = [];
    return b = b || {}, a(c).each(function() {
      var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[-=_](.+)/);
      c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]))
    }), !d.length && b.key && d.push(b.key + "="), d.join("&")
  }, toArray:function(b) {
    var c = this._getItemsAsjQuery(b && b.connected), d = [];
    return b = b || {}, c.each(function() {
      d.push(a(b.item || this).attr(b.attribute || "id") || "")
    }), d
  }, _intersectsWith:function(a) {
    var b = this.positionAbs.left, c = b + this.helperProportions.width, d = this.positionAbs.top, e = d + this.helperProportions.height, f = a.left, g = f + a.width, h = a.top, i = h + a.height, j = this.offset.click.top, k = this.offset.click.left, l = d + j > h && d + j < i && b + k > f && b + k < g;
    return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? l : f < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < g && h < d + this.helperProportions.height / 2 && e - this.helperProportions.height / 2 < i
  }, _intersectsWithPointer:function(b) {
    var c = this.options.axis === "x" || a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, b.top, b.height), d = this.options.axis === "y" || a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, b.left, b.width), e = c && d, f = this._getDragVerticalDirection(), g = this._getDragHorizontalDirection();
    return e ? this.floating ? g && g == "right" || f == "down" ? 2 : 1 : f && (f == "down" ? 2 : 1) : !1
  }, _intersectsWithSides:function(b) {
    var c = a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, b.top + b.height / 2, b.height), d = a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, b.left + b.width / 2, b.width), e = this._getDragVerticalDirection(), f = this._getDragHorizontalDirection();
    return this.floating && f ? f == "right" && d || f == "left" && !d : e && (e == "down" && c || e == "up" && !c)
  }, _getDragVerticalDirection:function() {
    var a = this.positionAbs.top - this.lastPositionAbs.top;
    return a != 0 && (a > 0 ? "down" : "up")
  }, _getDragHorizontalDirection:function() {
    var a = this.positionAbs.left - this.lastPositionAbs.left;
    return a != 0 && (a > 0 ? "right" : "left")
  }, refresh:function(a) {
    return this._refreshItems(a), this.refreshPositions(), this
  }, _connectWith:function() {
    var a = this.options;
    return a.connectWith.constructor == String ? [a.connectWith] : a.connectWith
  }, _getItemsAsjQuery:function(b) {
    var c = this, d = [], e = [], f = this._connectWith();
    if(f && b) {
      for(var g = f.length - 1;g >= 0;g--) {
        var h = a(f[g]);
        for(var i = h.length - 1;i >= 0;i--) {
          var j = a.data(h[i], this.widgetName);
          j && j != this && !j.options.disabled && e.push([a.isFunction(j.options.items) ? j.options.items.call(j.element) : a(j.options.items, j.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), j])
        }
      }
    }
    e.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {options:this.options, item:this.currentItem}) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
    for(var g = e.length - 1;g >= 0;g--) {
      e[g][0].each(function() {
        d.push(this)
      })
    }
    return a(d)
  }, _removeCurrentsFromItems:function() {
    var a = this.currentItem.find(":data(" + this.widgetName + "-item)");
    for(var b = 0;b < this.items.length;b++) {
      for(var c = 0;c < a.length;c++) {
        a[c] == this.items[b].item[0] && this.items.splice(b, 1)
      }
    }
  }, _refreshItems:function(b) {
    this.items = [], this.containers = [this];
    var c = this.items, d = this, e = [[a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {item:this.currentItem}) : a(this.options.items, this.element), this]], f = this._connectWith();
    if(f && this.ready) {
      for(var g = f.length - 1;g >= 0;g--) {
        var h = a(f[g]);
        for(var i = h.length - 1;i >= 0;i--) {
          var j = a.data(h[i], this.widgetName);
          j && j != this && !j.options.disabled && (e.push([a.isFunction(j.options.items) ? j.options.items.call(j.element[0], b, {item:this.currentItem}) : a(j.options.items, j.element), j]), this.containers.push(j))
        }
      }
    }
    for(var g = e.length - 1;g >= 0;g--) {
      var k = e[g][1], l = e[g][0];
      for(var i = 0, m = l.length;i < m;i++) {
        var n = a(l[i]);
        n.data(this.widgetName + "-item", k), c.push({item:n, instance:k, width:0, height:0, left:0, top:0})
      }
    }
  }, refreshPositions:function(b) {
    this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
    for(var c = this.items.length - 1;c >= 0;c--) {
      var d = this.items[c];
      if(d.instance != this.currentContainer && this.currentContainer && d.item[0] != this.currentItem[0]) {
        continue
      }
      var e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item;
      b || (d.width = e.outerWidth(), d.height = e.outerHeight());
      var f = e.offset();
      d.left = f.left, d.top = f.top
    }
    if(this.options.custom && this.options.custom.refreshContainers) {
      this.options.custom.refreshContainers.call(this)
    }else {
      for(var c = this.containers.length - 1;c >= 0;c--) {
        var f = this.containers[c].element.offset();
        this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight()
      }
    }
    return this
  }, _createPlaceholder:function(b) {
    var c = b || this, d = c.options;
    if(!d.placeholder || d.placeholder.constructor == String) {
      var e = d.placeholder;
      d.placeholder = {element:function() {
        var b = a(document.createElement(c.currentItem[0].nodeName)).addClass(e || c.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
        return e || (b.style.visibility = "hidden"), b
      }, update:function(a, b) {
        if(e && !d.forcePlaceholderSize) {
          return
        }
        b.height() || b.height(c.currentItem.innerHeight() - parseInt(c.currentItem.css("paddingTop") || 0, 10) - parseInt(c.currentItem.css("paddingBottom") || 0, 10)), b.width() || b.width(c.currentItem.innerWidth() - parseInt(c.currentItem.css("paddingLeft") || 0, 10) - parseInt(c.currentItem.css("paddingRight") || 0, 10))
      }}
    }
    c.placeholder = a(d.placeholder.element.call(c.element, c.currentItem)), c.currentItem.after(c.placeholder), d.placeholder.update(c, c.placeholder)
  }, _contactContainers:function(b) {
    var c = null, d = null;
    for(var e = this.containers.length - 1;e >= 0;e--) {
      if(a.ui.contains(this.currentItem[0], this.containers[e].element[0])) {
        continue
      }
      if(this._intersectsWith(this.containers[e].containerCache)) {
        if(c && a.ui.contains(this.containers[e].element[0], c.element[0])) {
          continue
        }
        c = this.containers[e], d = e
      }else {
        this.containers[e].containerCache.over && (this.containers[e]._trigger("out", b, this._uiHash(this)), this.containers[e].containerCache.over = 0)
      }
    }
    if(!c) {
      return
    }
    if(this.containers.length === 1) {
      this.containers[d]._trigger("over", b, this._uiHash(this)), this.containers[d].containerCache.over = 1
    }else {
      if(this.currentContainer != this.containers[d]) {
        var f = 1E4, g = null, h = this.positionAbs[this.containers[d].floating ? "left" : "top"];
        for(var i = this.items.length - 1;i >= 0;i--) {
          if(!a.ui.contains(this.containers[d].element[0], this.items[i].item[0])) {
            continue
          }
          var j = this.items[i][this.containers[d].floating ? "left" : "top"];
          Math.abs(j - h) < f && (f = Math.abs(j - h), g = this.items[i])
        }
        if(!g && !this.options.dropOnEmpty) {
          return
        }
        this.currentContainer = this.containers[d], g ? this._rearrange(b, g, null, !0) : this._rearrange(b, null, this.containers[d].element, !0), this._trigger("change", b, this._uiHash()), this.containers[d]._trigger("change", b, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[d]._trigger("over", b, this._uiHash(this)), this.containers[d].containerCache.over = 1
      }
    }
  }, _createHelper:function(b) {
    var c = this.options, d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : c.helper == "clone" ? this.currentItem.clone() : this.currentItem;
    return d.parents("body").length || a(c.appendTo != "parent" ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), d[0] == this.currentItem[0] && (this._storedCSS = {width:this.currentItem[0].style.width, height:this.currentItem[0].style.height, position:this.currentItem.css("position"), top:this.currentItem.css("top"), left:this.currentItem.css("left")}), (d[0].style.width == "" || c.forceHelperSize) && d.width(this.currentItem.width()), (d[0].style.height == "" || c.forceHelperSize) && 
    d.height(this.currentItem.height()), d
  }, _adjustOffsetFromHelper:function(b) {
    typeof b == "string" && (b = b.split(" ")), a.isArray(b) && (b = {left:+b[0], top:+b[1] || 0}), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
  }, _getParentOffset:function() {
    this.offsetParent = this.helper.offsetParent();
    var b = this.offsetParent.offset();
    this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop());
    if(this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie) {
      b = {top:0, left:0}
    }
    return{top:b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left:b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
  }, _getRelativeOffset:function() {
    if(this.cssPosition == "relative") {
      var a = this.currentItem.position();
      return{top:a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left:a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
    }
    return{top:0, left:0}
  }, _cacheMargins:function() {
    this.margins = {left:parseInt(this.currentItem.css("marginLeft"), 10) || 0, top:parseInt(this.currentItem.css("marginTop"), 10) || 0}
  }, _cacheHelperProportions:function() {
    this.helperProportions = {width:this.helper.outerWidth(), height:this.helper.outerHeight()}
  }, _setContainment:function() {
    var b = this.options;
    b.containment == "parent" && (b.containment = this.helper[0].parentNode);
    if(b.containment == "document" || b.containment == "window") {
      this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a(b.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (a(b.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
    }
    if(!/^(document|window|parent)$/.test(b.containment)) {
      var c = a(b.containment)[0], d = a(b.containment).offset(), e = a(c).css("overflow") != "hidden";
      this.containment = [d.left + (parseInt(a(c).css("borderLeftWidth"), 10) || 0) + (parseInt(a(c).css("paddingLeft"), 10) || 0) - this.margins.left, d.top + (parseInt(a(c).css("borderTopWidth"), 10) || 0) + (parseInt(a(c).css("paddingTop"), 10) || 0) - this.margins.top, d.left + (e ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) - (parseInt(a(c).css("borderLeftWidth"), 10) || 0) - (parseInt(a(c).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, d.top + 
      (e ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) - (parseInt(a(c).css("borderTopWidth"), 10) || 0) - (parseInt(a(c).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
    }
  }, _convertPositionTo:function(b, c) {
    c || (c = this.position);
    var d = b == "absolute" ? 1 : -1, e = this.options, f = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, g = /(html|body)/i.test(f[0].tagName);
    return{top:c.top + this.offset.relative.top * d + this.offset.parent.top * d - (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : g ? 0 : f.scrollTop()) * d), left:c.left + this.offset.relative.left * d + this.offset.parent.left * d - (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : g ? 0 : f.scrollLeft()) * d)}
  }, _generatePosition:function(b) {
    var c = this.options, d = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, e = /(html|body)/i.test(d[0].tagName);
    this.cssPosition == "relative" && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
    var f = b.pageX, g = b.pageY;
    if(this.originalPosition) {
      this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top));
      if(c.grid) {
        var h = this.originalPageY + Math.round((g - this.originalPageY) / c.grid[1]) * c.grid[1];
        g = this.containment ? h - this.offset.click.top < this.containment[1] || h - this.offset.click.top > this.containment[3] ? h - this.offset.click.top < this.containment[1] ? h + c.grid[1] : h - c.grid[1] : h : h;
        var i = this.originalPageX + Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0];
        f = this.containment ? i - this.offset.click.left < this.containment[0] || i - this.offset.click.left > this.containment[2] ? i - this.offset.click.left < this.containment[0] ? i + c.grid[0] : i - c.grid[0] : i : i
      }
    }
    return{top:g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e ? 0 : d.scrollTop()), left:f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 0 : d.scrollLeft())}
  }, _rearrange:function(a, b, c, d) {
    c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? b.item[0] : b.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
    var e = this, f = this.counter;
    window.setTimeout(function() {
      f == e.counter && e.refreshPositions(!d)
    }, 0)
  }, _clear:function(b, c) {
    this.reverting = !1;
    var d = [], e = this;
    !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null;
    if(this.helper[0] == this.currentItem[0]) {
      for(var f in this._storedCSS) {
        if(this._storedCSS[f] == "auto" || this._storedCSS[f] == "static") {
          this._storedCSS[f] = ""
        }
      }
      this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
    }else {
      this.currentItem.show()
    }
    this.fromOutside && !c && d.push(function(a) {
      this._trigger("receive", a, this._uiHash(this.fromOutside))
    }), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !c && d.push(function(a) {
      this._trigger("update", a, this._uiHash())
    });
    if(!a.ui.contains(this.element[0], this.currentItem[0])) {
      c || d.push(function(a) {
        this._trigger("remove", a, this._uiHash())
      });
      for(var f = this.containers.length - 1;f >= 0;f--) {
        a.ui.contains(this.containers[f].element[0], this.currentItem[0]) && !c && (d.push(function(a) {
          return function(b) {
            a._trigger("receive", b, this._uiHash(this))
          }
        }.call(this, this.containers[f])), d.push(function(a) {
          return function(b) {
            a._trigger("update", b, this._uiHash(this))
          }
        }.call(this, this.containers[f])))
      }
    }
    for(var f = this.containers.length - 1;f >= 0;f--) {
      c || d.push(function(a) {
        return function(b) {
          a._trigger("deactivate", b, this._uiHash(this))
        }
      }.call(this, this.containers[f])), this.containers[f].containerCache.over && (d.push(function(a) {
        return function(b) {
          a._trigger("out", b, this._uiHash(this))
        }
      }.call(this, this.containers[f])), this.containers[f].containerCache.over = 0)
    }
    this._storedCursor && a("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex), this.dragging = !1;
    if(this.cancelHelperRemoval) {
      if(!c) {
        this._trigger("beforeStop", b, this._uiHash());
        for(var f = 0;f < d.length;f++) {
          d[f].call(this, b)
        }
        this._trigger("stop", b, this._uiHash())
      }
      return!1
    }
    c || this._trigger("beforeStop", b, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null;
    if(!c) {
      for(var f = 0;f < d.length;f++) {
        d[f].call(this, b)
      }
      this._trigger("stop", b, this._uiHash())
    }
    return this.fromOutside = !1, !0
  }, _trigger:function() {
    a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
  }, _uiHash:function(b) {
    var c = b || this;
    return{helper:c.helper, placeholder:c.placeholder || a([]), position:c.position, originalPosition:c.originalPosition, offset:c.positionAbs, item:c.currentItem, sender:b ? b.element : null}
  }}), a.extend(a.ui.sortable, {version:"1.8.20"})
})(jQuery);
(function(a, b) {
  var c = 0;
  a.widget("ui.autocomplete", {options:{appendTo:"body", autoFocus:!1, delay:300, minLength:1, position:{my:"left top", at:"left bottom", collision:"none"}, source:null}, pending:0, _create:function() {
    var b = this, c = this.element[0].ownerDocument, d;
    this.isMultiLine = this.element.is("textarea"), this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({role:"textbox", "aria-autocomplete":"list", "aria-haspopup":"true"}).bind("keydown.autocomplete", function(c) {
      if(b.options.disabled || b.element.propAttr("readOnly")) {
        return
      }
      d = !1;
      var e = a.ui.keyCode;
      switch(c.keyCode) {
        case e.PAGE_UP:
          b._move("previousPage", c);
          break;
        case e.PAGE_DOWN:
          b._move("nextPage", c);
          break;
        case e.UP:
          b._keyEvent("previous", c);
          break;
        case e.DOWN:
          b._keyEvent("next", c);
          break;
        case e.ENTER:
        ;
        case e.NUMPAD_ENTER:
          b.menu.active && (d = !0, c.preventDefault());
        case e.TAB:
          if(!b.menu.active) {
            return
          }
          b.menu.select(c);
          break;
        case e.ESCAPE:
          b.element.val(b.term), b.close(c);
          break;
        default:
          clearTimeout(b.searching), b.searching = setTimeout(function() {
            b.term != b.element.val() && (b.selectedItem = null, b.search(null, c))
          }, b.options.delay)
      }
    }).bind("keypress.autocomplete", function(a) {
      d && (d = !1, a.preventDefault())
    }).bind("focus.autocomplete", function() {
      if(b.options.disabled) {
        return
      }
      b.selectedItem = null, b.previous = b.element.val()
    }).bind("blur.autocomplete", function(a) {
      if(b.options.disabled) {
        return
      }
      clearTimeout(b.searching), b.closing = setTimeout(function() {
        b.close(a), b._change(a)
      }, 150)
    }), this._initSource(), this.menu = a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo || "body", c)[0]).mousedown(function(c) {
      var d = b.menu.element[0];
      a(c.target).closest(".ui-menu-item").length || setTimeout(function() {
        a(document).one("mousedown", function(c) {
          c.target !== b.element[0] && c.target !== d && !a.ui.contains(d, c.target) && b.close()
        })
      }, 1), setTimeout(function() {
        clearTimeout(b.closing)
      }, 13)
    }).menu({focus:function(a, c) {
      var d = c.item.data("item.autocomplete");
      !1 !== b._trigger("focus", a, {item:d}) && /^key/.test(a.originalEvent.type) && b.element.val(d.value)
    }, selected:function(a, d) {
      var e = d.item.data("item.autocomplete"), f = b.previous;
      b.element[0] !== c.activeElement && (b.element.focus(), b.previous = f, setTimeout(function() {
        b.previous = f, b.selectedItem = e
      }, 1)), !1 !== b._trigger("select", a, {item:e}) && b.element.val(e.value), b.term = b.element.val(), b.close(a), b.selectedItem = e
    }, blur:function(a, c) {
      b.menu.element.is(":visible") && b.element.val() !== b.term && b.element.val(b.term)
    }}).zIndex(this.element.zIndex() + 1).css({top:0, left:0}).hide().data("menu"), a.fn.bgiframe && this.menu.element.bgiframe(), b.beforeunloadHandler = function() {
      b.element.removeAttr("autocomplete")
    }, a(window).bind("beforeunload", b.beforeunloadHandler)
  }, destroy:function() {
    this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"), this.menu.element.remove(), a(window).unbind("beforeunload", this.beforeunloadHandler), a.Widget.prototype.destroy.call(this)
  }, _setOption:function(b, c) {
    a.Widget.prototype._setOption.apply(this, arguments), b === "source" && this._initSource(), b === "appendTo" && this.menu.element.appendTo(a(c || "body", this.element[0].ownerDocument)[0]), b === "disabled" && c && this.xhr && this.xhr.abort()
  }, _initSource:function() {
    var b = this, c, d;
    a.isArray(this.options.source) ? (c = this.options.source, this.source = function(b, d) {
      d(a.ui.autocomplete.filter(c, b.term))
    }) : typeof this.options.source == "string" ? (d = this.options.source, this.source = function(c, e) {
      b.xhr && b.xhr.abort(), b.xhr = a.ajax({url:d, data:c, dataType:"json", success:function(a, b) {
        e(a)
      }, error:function() {
        e([])
      }})
    }) : this.source = this.options.source
  }, search:function(a, b) {
    a = a != null ? a : this.element.val(), this.term = this.element.val();
    if(a.length < this.options.minLength) {
      return this.close(b)
    }
    clearTimeout(this.closing);
    if(this._trigger("search", b) === !1) {
      return
    }
    return this._search(a)
  }, _search:function(a) {
    this.pending++, this.element.addClass("ui-autocomplete-loading"), this.source({term:a}, this._response())
  }, _response:function() {
    var a = this, b = ++c;
    return function(d) {
      b === c && a.__response(d), a.pending--, a.pending || a.element.removeClass("ui-autocomplete-loading")
    }
  }, __response:function(a) {
    !this.options.disabled && a && a.length ? (a = this._normalize(a), this._suggest(a), this._trigger("open")) : this.close()
  }, close:function(a) {
    clearTimeout(this.closing), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.deactivate(), this._trigger("close", a))
  }, _change:function(a) {
    this.previous !== this.element.val() && this._trigger("change", a, {item:this.selectedItem})
  }, _normalize:function(b) {
    return b.length && b[0].label && b[0].value ? b : a.map(b, function(b) {
      return typeof b == "string" ? {label:b, value:b} : a.extend({label:b.label || b.value, value:b.value || b.label}, b)
    })
  }, _suggest:function(b) {
    var c = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
    this._renderMenu(c, b), this.menu.deactivate(), this.menu.refresh(), c.show(), this._resizeMenu(), c.position(a.extend({of:this.element}, this.options.position)), this.options.autoFocus && this.menu.next(new a.Event("mouseover"))
  }, _resizeMenu:function() {
    var a = this.menu.element;
    a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
  }, _renderMenu:function(b, c) {
    var d = this;
    a.each(c, function(a, c) {
      d._renderItem(b, c)
    })
  }, _renderItem:function(b, c) {
    return a("<li></li>").data("item.autocomplete", c).append(a("<a></a>").text(c.label)).appendTo(b)
  }, _move:function(a, b) {
    if(!this.menu.element.is(":visible")) {
      this.search(null, b);
      return
    }
    if(this.menu.first() && /^previous/.test(a) || this.menu.last() && /^next/.test(a)) {
      this.element.val(this.term), this.menu.deactivate();
      return
    }
    this.menu[a](b)
  }, widget:function() {
    return this.menu.element
  }, _keyEvent:function(a, b) {
    if(!this.isMultiLine || this.menu.element.is(":visible")) {
      this._move(a, b), b.preventDefault()
    }
  }}), a.extend(a.ui.autocomplete, {escapeRegex:function(a) {
    return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
  }, filter:function(b, c) {
    var d = new RegExp(a.ui.autocomplete.escapeRegex(c), "i");
    return a.grep(b, function(a) {
      return d.test(a.label || a.value || a)
    })
  }})
})(jQuery), function(a) {
  a.widget("ui.menu", {_create:function() {
    var b = this;
    this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox", "aria-activedescendant":"ui-active-menuitem"}).click(function(c) {
      if(!a(c.target).closest(".ui-menu-item a").length) {
        return
      }
      c.preventDefault(), b.select(c)
    }), this.refresh()
  }, refresh:function() {
    var b = this, c = this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem");
    c.children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function(c) {
      b.activate(c, a(this).parent())
    }).mouseleave(function() {
      b.deactivate()
    })
  }, activate:function(a, b) {
    this.deactivate();
    if(this.hasScroll()) {
      var c = b.offset().top - this.element.offset().top, d = this.element.scrollTop(), e = this.element.height();
      c < 0 ? this.element.scrollTop(d + c) : c >= e && this.element.scrollTop(d + c - e + b.height())
    }
    this.active = b.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(), this._trigger("focus", a, {item:b})
  }, deactivate:function() {
    if(!this.active) {
      return
    }
    this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), this.active = null
  }, next:function(a) {
    this.move("next", ".ui-menu-item:first", a)
  }, previous:function(a) {
    this.move("prev", ".ui-menu-item:last", a)
  }, first:function() {
    return this.active && !this.active.prevAll(".ui-menu-item").length
  }, last:function() {
    return this.active && !this.active.nextAll(".ui-menu-item").length
  }, move:function(a, b, c) {
    if(!this.active) {
      this.activate(c, this.element.children(b));
      return
    }
    var d = this.active[a + "All"](".ui-menu-item").eq(0);
    d.length ? this.activate(c, d) : this.activate(c, this.element.children(b))
  }, nextPage:function(b) {
    if(this.hasScroll()) {
      if(!this.active || this.last()) {
        this.activate(b, this.element.children(".ui-menu-item:first"));
        return
      }
      var c = this.active.offset().top, d = this.element.height(), e = this.element.children(".ui-menu-item").filter(function() {
        var b = a(this).offset().top - c - d + a(this).height();
        return b < 10 && b > -10
      });
      e.length || (e = this.element.children(".ui-menu-item:last")), this.activate(b, e)
    }else {
      this.activate(b, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
    }
  }, previousPage:function(b) {
    if(this.hasScroll()) {
      if(!this.active || this.first()) {
        this.activate(b, this.element.children(".ui-menu-item:last"));
        return
      }
      var c = this.active.offset().top, d = this.element.height(), e = this.element.children(".ui-menu-item").filter(function() {
        var b = a(this).offset().top - c + d - a(this).height();
        return b < 10 && b > -10
      });
      e.length || (e = this.element.children(".ui-menu-item:first")), this.activate(b, e)
    }else {
      this.activate(b, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
    }
  }, hasScroll:function() {
    return this.element.height() < this.element[a.fn.prop ? "prop" : "attr"]("scrollHeight")
  }, select:function(a) {
    this._trigger("selected", a, {item:this.active})
  }})
}(jQuery);
jQuery.effects || function(a, b) {
  function c(b) {
    var c;
    return b && b.constructor == Array && b.length == 3 ? b : (c = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b)) ? [parseInt(c[1], 10), parseInt(c[2], 10), parseInt(c[3], 10)] : (c = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b)) ? [parseFloat(c[1]) * 2.55, parseFloat(c[2]) * 2.55, parseFloat(c[3]) * 2.55] : (c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b)) ? [parseInt(c[1], 16), parseInt(c[2], 
    16), parseInt(c[3], 16)] : (c = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b)) ? [parseInt(c[1] + c[1], 16), parseInt(c[2] + c[2], 16), parseInt(c[3] + c[3], 16)] : (c = /rgba\(0, 0, 0, 0\)/.exec(b)) ? e.transparent : e[a.trim(b).toLowerCase()]
  }
  function d(b, d) {
    var e;
    do {
      e = a.curCSS(b, d);
      if(e != "" && e != "transparent" || a.nodeName(b, "body")) {
        break
      }
      d = "backgroundColor"
    }while(b = b.parentNode);
    return c(e)
  }
  function h() {
    var a = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle, b = {}, c, d;
    if(a && a.length && a[0] && a[a[0]]) {
      var e = a.length;
      while(e--) {
        c = a[e], typeof a[c] == "string" && (d = c.replace(/\-(\w)/g, function(a, b) {
          return b.toUpperCase()
        }), b[d] = a[c])
      }
    }else {
      for(c in a) {
        typeof a[c] == "string" && (b[c] = a[c])
      }
    }
    return b
  }
  function i(b) {
    var c, d;
    for(c in b) {
      d = b[c], (d == null || a.isFunction(d) || c in g || /scrollbar/.test(c) || !/color/i.test(c) && isNaN(parseFloat(d))) && delete b[c]
    }
    return b
  }
  function j(a, b) {
    var c = {_:0}, d;
    for(d in b) {
      a[d] != b[d] && (c[d] = b[d])
    }
    return c
  }
  function k(b, c, d, e) {
    typeof b == "object" && (e = c, d = null, c = b, b = c.effect), a.isFunction(c) && (e = c, d = null, c = {});
    if(typeof c == "number" || a.fx.speeds[c]) {
      e = d, d = c, c = {}
    }
    return a.isFunction(d) && (e = d, d = null), c = c || {}, d = d || c.duration, d = a.fx.off ? 0 : typeof d == "number" ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, e = e || c.complete, [b, c, d, e]
  }
  function l(b) {
    return!b || typeof b == "number" || a.fx.speeds[b] ? !0 : typeof b == "string" && !a.effects[b] ? !0 : !1
  }
  a.effects = {}, a.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function(b, e) {
    a.fx.step[e] = function(a) {
      a.colorInit || (a.start = d(a.elem, e), a.end = c(a.end), a.colorInit = !0), a.elem.style[e] = "rgb(" + Math.max(Math.min(parseInt(a.pos * (a.end[0] - a.start[0]) + a.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(a.pos * (a.end[1] - a.start[1]) + a.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(a.pos * (a.end[2] - a.start[2]) + a.start[2], 10), 255), 0) + ")"
    }
  });
  var e = {aqua:[0, 255, 255], azure:[240, 255, 255], beige:[245, 245, 220], black:[0, 0, 0], blue:[0, 0, 255], brown:[165, 42, 42], cyan:[0, 255, 255], darkblue:[0, 0, 139], darkcyan:[0, 139, 139], darkgrey:[169, 169, 169], darkgreen:[0, 100, 0], darkkhaki:[189, 183, 107], darkmagenta:[139, 0, 139], darkolivegreen:[85, 107, 47], darkorange:[255, 140, 0], darkorchid:[153, 50, 204], darkred:[139, 0, 0], darksalmon:[233, 150, 122], darkviolet:[148, 0, 211], fuchsia:[255, 0, 255], gold:[255, 215, 0], 
  green:[0, 128, 0], indigo:[75, 0, 130], khaki:[240, 230, 140], lightblue:[173, 216, 230], lightcyan:[224, 255, 255], lightgreen:[144, 238, 144], lightgrey:[211, 211, 211], lightpink:[255, 182, 193], lightyellow:[255, 255, 224], lime:[0, 255, 0], magenta:[255, 0, 255], maroon:[128, 0, 0], navy:[0, 0, 128], olive:[128, 128, 0], orange:[255, 165, 0], pink:[255, 192, 203], purple:[128, 0, 128], violet:[128, 0, 128], red:[255, 0, 0], silver:[192, 192, 192], white:[255, 255, 255], yellow:[255, 255, 0], 
  transparent:[255, 255, 255]}, f = ["add", "remove", "toggle"], g = {border:1, borderBottom:1, borderColor:1, borderLeft:1, borderRight:1, borderTop:1, borderWidth:1, margin:1, padding:1};
  a.effects.animateClass = function(b, c, d, e) {
    return a.isFunction(d) && (e = d, d = null), this.queue(function() {
      var g = a(this), k = g.attr("style") || " ", l = i(h.call(this)), m, n = g.attr("class") || "";
      a.each(f, function(a, c) {
        b[c] && g[c + "Class"](b[c])
      }), m = i(h.call(this)), g.attr("class", n), g.animate(j(l, m), {queue:!1, duration:c, easing:d, complete:function() {
        a.each(f, function(a, c) {
          b[c] && g[c + "Class"](b[c])
        }), typeof g.attr("style") == "object" ? (g.attr("style").cssText = "", g.attr("style").cssText = k) : g.attr("style", k), e && e.apply(this, arguments), a.dequeue(this)
      }})
    })
  }, a.fn.extend({_addClass:a.fn.addClass, addClass:function(b, c, d, e) {
    return c ? a.effects.animateClass.apply(this, [{add:b}, c, d, e]) : this._addClass(b)
  }, _removeClass:a.fn.removeClass, removeClass:function(b, c, d, e) {
    return c ? a.effects.animateClass.apply(this, [{remove:b}, c, d, e]) : this._removeClass(b)
  }, _toggleClass:a.fn.toggleClass, toggleClass:function(c, d, e, f, g) {
    return typeof d == "boolean" || d === b ? e ? a.effects.animateClass.apply(this, [d ? {add:c} : {remove:c}, e, f, g]) : this._toggleClass(c, d) : a.effects.animateClass.apply(this, [{toggle:c}, d, e, f])
  }, switchClass:function(b, c, d, e, f) {
    return a.effects.animateClass.apply(this, [{add:c, remove:b}, d, e, f])
  }}), a.extend(a.effects, {version:"1.8.20", save:function(a, b) {
    for(var c = 0;c < b.length;c++) {
      b[c] !== null && a.data("ec.storage." + b[c], a[0].style[b[c]])
    }
  }, restore:function(a, b) {
    for(var c = 0;c < b.length;c++) {
      b[c] !== null && a.css(b[c], a.data("ec.storage." + b[c]))
    }
  }, setMode:function(a, b) {
    return b == "toggle" && (b = a.is(":hidden") ? "show" : "hide"), b
  }, getBaseline:function(a, b) {
    var c, d;
    switch(a[0]) {
      case "top":
        c = 0;
        break;
      case "middle":
        c = 0.5;
        break;
      case "bottom":
        c = 1;
        break;
      default:
        c = a[0] / b.height
    }
    switch(a[1]) {
      case "left":
        d = 0;
        break;
      case "center":
        d = 0.5;
        break;
      case "right":
        d = 1;
        break;
      default:
        d = a[1] / b.width
    }
    return{x:d, y:c}
  }, createWrapper:function(b) {
    if(b.parent().is(".ui-effects-wrapper")) {
      return b.parent()
    }
    var c = {width:b.outerWidth(!0), height:b.outerHeight(!0), "float":b.css("float")}, d = a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%", background:"transparent", border:"none", margin:0, padding:0}), e = document.activeElement;
    return b.wrap(d), (b[0] === e || a.contains(b[0], e)) && a(e).focus(), d = b.parent(), b.css("position") == "static" ? (d.css({position:"relative"}), b.css({position:"relative"})) : (a.extend(c, {position:b.css("position"), zIndex:b.css("z-index")}), a.each(["top", "left", "bottom", "right"], function(a, d) {
      c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
    }), b.css({position:"relative", top:0, left:0, right:"auto", bottom:"auto"})), d.css(c).show()
  }, removeWrapper:function(b) {
    var c, d = document.activeElement;
    return b.parent().is(".ui-effects-wrapper") ? (c = b.parent().replaceWith(b), (b[0] === d || a.contains(b[0], d)) && a(d).focus(), c) : b
  }, setTransition:function(b, c, d, e) {
    return e = e || {}, a.each(c, function(a, c) {
      var f = b.cssUnit(c);
      f[0] > 0 && (e[c] = f[0] * d + f[1])
    }), e
  }}), a.fn.extend({effect:function(b, c, d, e) {
    var f = k.apply(this, arguments), g = {options:f[1], duration:f[2], callback:f[3]}, h = g.options.mode, i = a.effects[b];
    return a.fx.off || !i ? h ? this[h](g.duration, g.callback) : this.each(function() {
      g.callback && g.callback.call(this)
    }) : i.call(this, g)
  }, _show:a.fn.show, show:function(a) {
    if(l(a)) {
      return this._show.apply(this, arguments)
    }
    var b = k.apply(this, arguments);
    return b[1].mode = "show", this.effect.apply(this, b)
  }, _hide:a.fn.hide, hide:function(a) {
    if(l(a)) {
      return this._hide.apply(this, arguments)
    }
    var b = k.apply(this, arguments);
    return b[1].mode = "hide", this.effect.apply(this, b)
  }, __toggle:a.fn.toggle, toggle:function(b) {
    if(l(b) || typeof b == "boolean" || a.isFunction(b)) {
      return this.__toggle.apply(this, arguments)
    }
    var c = k.apply(this, arguments);
    return c[1].mode = "toggle", this.effect.apply(this, c)
  }, cssUnit:function(b) {
    var c = this.css(b), d = [];
    return a.each(["em", "px", "%", "pt"], function(a, b) {
      c.indexOf(b) > 0 && (d = [parseFloat(c), b])
    }), d
  }}), a.easing.jswing = a.easing.swing, a.extend(a.easing, {def:"easeOutQuad", swing:function(b, c, d, e, f) {
    return a.easing[a.easing.def](b, c, d, e, f)
  }, easeInQuad:function(a, b, c, d, e) {
    return d * (b /= e) * b + c
  }, easeOutQuad:function(a, b, c, d, e) {
    return-d * (b /= e) * (b - 2) + c
  }, easeInOutQuad:function(a, b, c, d, e) {
    return(b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
  }, easeInCubic:function(a, b, c, d, e) {
    return d * (b /= e) * b * b + c
  }, easeOutCubic:function(a, b, c, d, e) {
    return d * ((b = b / e - 1) * b * b + 1) + c
  }, easeInOutCubic:function(a, b, c, d, e) {
    return(b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
  }, easeInQuart:function(a, b, c, d, e) {
    return d * (b /= e) * b * b * b + c
  }, easeOutQuart:function(a, b, c, d, e) {
    return-d * ((b = b / e - 1) * b * b * b - 1) + c
  }, easeInOutQuart:function(a, b, c, d, e) {
    return(b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
  }, easeInQuint:function(a, b, c, d, e) {
    return d * (b /= e) * b * b * b * b + c
  }, easeOutQuint:function(a, b, c, d, e) {
    return d * ((b = b / e - 1) * b * b * b * b + 1) + c
  }, easeInOutQuint:function(a, b, c, d, e) {
    return(b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
  }, easeInSine:function(a, b, c, d, e) {
    return-d * Math.cos(b / e * (Math.PI / 2)) + d + c
  }, easeOutSine:function(a, b, c, d, e) {
    return d * Math.sin(b / e * (Math.PI / 2)) + c
  }, easeInOutSine:function(a, b, c, d, e) {
    return-d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
  }, easeInExpo:function(a, b, c, d, e) {
    return b == 0 ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
  }, easeOutExpo:function(a, b, c, d, e) {
    return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
  }, easeInOutExpo:function(a, b, c, d, e) {
    return b == 0 ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
  }, easeInCirc:function(a, b, c, d, e) {
    return-d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
  }, easeOutCirc:function(a, b, c, d, e) {
    return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
  }, easeInOutCirc:function(a, b, c, d, e) {
    return(b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
  }, easeInElastic:function(a, b, c, d, e) {
    var f = 1.70158, g = 0, h = d;
    if(b == 0) {
      return c
    }
    if((b /= e) == 1) {
      return c + d
    }
    g || (g = e * 0.3);
    if(h < Math.abs(d)) {
      h = d;
      var f = g / 4
    }else {
      var f = g / (2 * Math.PI) * Math.asin(d / h)
    }
    return-(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g)) + c
  }, easeOutElastic:function(a, b, c, d, e) {
    var f = 1.70158, g = 0, h = d;
    if(b == 0) {
      return c
    }
    if((b /= e) == 1) {
      return c + d
    }
    g || (g = e * 0.3);
    if(h < Math.abs(d)) {
      h = d;
      var f = g / 4
    }else {
      var f = g / (2 * Math.PI) * Math.asin(d / h)
    }
    return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c
  }, easeInOutElastic:function(a, b, c, d, e) {
    var f = 1.70158, g = 0, h = d;
    if(b == 0) {
      return c
    }
    if((b /= e / 2) == 2) {
      return c + d
    }
    g || (g = e * 0.3 * 1.5);
    if(h < Math.abs(d)) {
      h = d;
      var f = g / 4
    }else {
      var f = g / (2 * Math.PI) * Math.asin(d / h)
    }
    return b < 1 ? -0.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) * 0.5 + d + c
  }, easeInBack:function(a, c, d, e, f, g) {
    return g == b && (g = 1.70158), e * (c /= f) * c * ((g + 1) * c - g) + d
  }, easeOutBack:function(a, c, d, e, f, g) {
    return g == b && (g = 1.70158), e * ((c = c / f - 1) * c * ((g + 1) * c + g) + 1) + d
  }, easeInOutBack:function(a, c, d, e, f, g) {
    return g == b && (g = 1.70158), (c /= f / 2) < 1 ? e / 2 * c * c * (((g *= 1.525) + 1) * c - g) + d : e / 2 * ((c -= 2) * c * (((g *= 1.525) + 1) * c + g) + 2) + d
  }, easeInBounce:function(b, c, d, e, f) {
    return e - a.easing.easeOutBounce(b, f - c, 0, e, f) + d
  }, easeOutBounce:function(a, b, c, d, e) {
    return(b /= e) < 1 / 2.75 ? d * 7.5625 * b * b + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + 0.75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + 0.9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + 0.984375) + c
  }, easeInOutBounce:function(b, c, d, e, f) {
    return c < f / 2 ? a.easing.easeInBounce(b, c * 2, 0, e, f) * 0.5 + d : a.easing.easeOutBounce(b, c * 2 - f, 0, e, f) * 0.5 + e * 0.5 + d
  }})
}(jQuery);
(function(a, b) {
  a.effects.blind = function(b) {
    return this.queue(function() {
      var c = a(this), d = ["position", "top", "bottom", "left", "right"], e = a.effects.setMode(c, b.options.mode || "hide"), f = b.options.direction || "vertical";
      a.effects.save(c, d), c.show();
      var g = a.effects.createWrapper(c).css({overflow:"hidden"}), h = f == "vertical" ? "height" : "width", i = f == "vertical" ? g.height() : g.width();
      e == "show" && g.css(h, 0);
      var j = {};
      j[h] = e == "show" ? i : 0, g.animate(j, b.duration, b.options.easing, function() {
        e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(c[0], arguments), c.dequeue()
      })
    })
  }
})(jQuery);
(function(a, b) {
  a.effects.bounce = function(b) {
    return this.queue(function() {
      var c = a(this), d = ["position", "top", "bottom", "left", "right"], e = a.effects.setMode(c, b.options.mode || "effect"), f = b.options.direction || "up", g = b.options.distance || 20, h = b.options.times || 5, i = b.duration || 250;
      /show|hide/.test(e) && d.push("opacity"), a.effects.save(c, d), c.show(), a.effects.createWrapper(c);
      var j = f == "up" || f == "down" ? "top" : "left", k = f == "up" || f == "left" ? "pos" : "neg", g = b.options.distance || (j == "top" ? c.outerHeight({margin:!0}) / 3 : c.outerWidth({margin:!0}) / 3);
      e == "show" && c.css("opacity", 0).css(j, k == "pos" ? -g : g), e == "hide" && (g = g / (h * 2)), e != "hide" && h--;
      if(e == "show") {
        var l = {opacity:1};
        l[j] = (k == "pos" ? "+=" : "-=") + g, c.animate(l, i / 2, b.options.easing), g = g / 2, h--
      }
      for(var m = 0;m < h;m++) {
        var n = {}, p = {};
        n[j] = (k == "pos" ? "-=" : "+=") + g, p[j] = (k == "pos" ? "+=" : "-=") + g, c.animate(n, i / 2, b.options.easing).animate(p, i / 2, b.options.easing), g = e == "hide" ? g * 2 : g / 2
      }
      if(e == "hide") {
        var l = {opacity:0};
        l[j] = (k == "pos" ? "-=" : "+=") + g, c.animate(l, i / 2, b.options.easing, function() {
          c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments)
        })
      }else {
        var n = {}, p = {};
        n[j] = (k == "pos" ? "-=" : "+=") + g, p[j] = (k == "pos" ? "+=" : "-=") + g, c.animate(n, i / 2, b.options.easing).animate(p, i / 2, b.options.easing, function() {
          a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments)
        })
      }
      c.queue("fx", function() {
        c.dequeue()
      }), c.dequeue()
    })
  }
})(jQuery);
(function(a, b) {
  a.effects.clip = function(b) {
    return this.queue(function() {
      var c = a(this), d = ["position", "top", "bottom", "left", "right", "height", "width"], e = a.effects.setMode(c, b.options.mode || "hide"), f = b.options.direction || "vertical";
      a.effects.save(c, d), c.show();
      var g = a.effects.createWrapper(c).css({overflow:"hidden"}), h = c[0].tagName == "IMG" ? g : c, i = {size:f == "vertical" ? "height" : "width", position:f == "vertical" ? "top" : "left"}, j = f == "vertical" ? h.height() : h.width();
      e == "show" && (h.css(i.size, 0), h.css(i.position, j / 2));
      var k = {};
      k[i.size] = e == "show" ? j : 0, k[i.position] = e == "show" ? 0 : j / 2, h.animate(k, {queue:!1, duration:b.duration, easing:b.options.easing, complete:function() {
        e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(c[0], arguments), c.dequeue()
      }})
    })
  }
})(jQuery);
(function(a, b) {
  a.effects.drop = function(b) {
    return this.queue(function() {
      var c = a(this), d = ["position", "top", "bottom", "left", "right", "opacity"], e = a.effects.setMode(c, b.options.mode || "hide"), f = b.options.direction || "left";
      a.effects.save(c, d), c.show(), a.effects.createWrapper(c);
      var g = f == "up" || f == "down" ? "top" : "left", h = f == "up" || f == "left" ? "pos" : "neg", i = b.options.distance || (g == "top" ? c.outerHeight({margin:!0}) / 2 : c.outerWidth({margin:!0}) / 2);
      e == "show" && c.css("opacity", 0).css(g, h == "pos" ? -i : i);
      var j = {opacity:e == "show" ? 1 : 0};
      j[g] = (e == "show" ? h == "pos" ? "+=" : "-=" : h == "pos" ? "-=" : "+=") + i, c.animate(j, {queue:!1, duration:b.duration, easing:b.options.easing, complete:function() {
        e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments), c.dequeue()
      }})
    })
  }
})(jQuery);
(function(a, b) {
  a.effects.explode = function(b) {
    return this.queue(function() {
      var c = b.options.pieces ? Math.round(Math.sqrt(b.options.pieces)) : 3, d = b.options.pieces ? Math.round(Math.sqrt(b.options.pieces)) : 3;
      b.options.mode = b.options.mode == "toggle" ? a(this).is(":visible") ? "hide" : "show" : b.options.mode;
      var e = a(this).show().css("visibility", "hidden"), f = e.offset();
      f.top -= parseInt(e.css("marginTop"), 10) || 0, f.left -= parseInt(e.css("marginLeft"), 10) || 0;
      var g = e.outerWidth(!0), h = e.outerHeight(!0);
      for(var i = 0;i < c;i++) {
        for(var j = 0;j < d;j++) {
          e.clone().appendTo("body").wrap("<div></div>").css({position:"absolute", visibility:"visible", left:-j * (g / d), top:-i * (h / c)}).parent().addClass("ui-effects-explode").css({position:"absolute", overflow:"hidden", width:g / d, height:h / c, left:f.left + j * (g / d) + (b.options.mode == "show" ? (j - Math.floor(d / 2)) * (g / d) : 0), top:f.top + i * (h / c) + (b.options.mode == "show" ? (i - Math.floor(c / 2)) * (h / c) : 0), opacity:b.options.mode == "show" ? 0 : 1}).animate({left:f.left + 
          j * (g / d) + (b.options.mode == "show" ? 0 : (j - Math.floor(d / 2)) * (g / d)), top:f.top + i * (h / c) + (b.options.mode == "show" ? 0 : (i - Math.floor(c / 2)) * (h / c)), opacity:b.options.mode == "show" ? 1 : 0}, b.duration || 500)
        }
      }
      setTimeout(function() {
        b.options.mode == "show" ? e.css({visibility:"visible"}) : e.css({visibility:"visible"}).hide(), b.callback && b.callback.apply(e[0]), e.dequeue(), a("div.ui-effects-explode").remove()
      }, b.duration || 500)
    })
  }
})(jQuery);
(function(a, b) {
  a.effects.fade = function(b) {
    return this.queue(function() {
      var c = a(this), d = a.effects.setMode(c, b.options.mode || "hide");
      c.animate({opacity:d}, {queue:!1, duration:b.duration, easing:b.options.easing, complete:function() {
        b.callback && b.callback.apply(this, arguments), c.dequeue()
      }})
    })
  }
})(jQuery);
(function(a, b) {
  a.effects.fold = function(b) {
    return this.queue(function() {
      var c = a(this), d = ["position", "top", "bottom", "left", "right"], e = a.effects.setMode(c, b.options.mode || "hide"), f = b.options.size || 15, g = !!b.options.horizFirst, h = b.duration ? b.duration / 2 : a.fx.speeds._default / 2;
      a.effects.save(c, d), c.show();
      var i = a.effects.createWrapper(c).css({overflow:"hidden"}), j = e == "show" != g, k = j ? ["width", "height"] : ["height", "width"], l = j ? [i.width(), i.height()] : [i.height(), i.width()], m = /([0-9]+)%/.exec(f);
      m && (f = parseInt(m[1], 10) / 100 * l[e == "hide" ? 0 : 1]), e == "show" && i.css(g ? {height:0, width:f} : {height:f, width:0});
      var n = {}, p = {};
      n[k[0]] = e == "show" ? l[0] : f, p[k[1]] = e == "show" ? l[1] : 0, i.animate(n, h, b.options.easing).animate(p, h, b.options.easing, function() {
        e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(c[0], arguments), c.dequeue()
      })
    })
  }
})(jQuery);
(function(a, b) {
  a.effects.highlight = function(b) {
    return this.queue(function() {
      var c = a(this), d = ["backgroundImage", "backgroundColor", "opacity"], e = a.effects.setMode(c, b.options.mode || "show"), f = {backgroundColor:c.css("backgroundColor")};
      e == "hide" && (f.opacity = 0), a.effects.save(c, d), c.show().css({backgroundImage:"none", backgroundColor:b.options.color || "#ffff99"}).animate(f, {queue:!1, duration:b.duration, easing:b.options.easing, complete:function() {
        e == "hide" && c.hide(), a.effects.restore(c, d), e == "show" && !a.support.opacity && this.style.removeAttribute("filter"), b.callback && b.callback.apply(this, arguments), c.dequeue()
      }})
    })
  }
})(jQuery);
(function(a, b) {
  a.effects.pulsate = function(b) {
    return this.queue(function() {
      var c = a(this), d = a.effects.setMode(c, b.options.mode || "show"), e = (b.options.times || 5) * 2 - 1, f = b.duration ? b.duration / 2 : a.fx.speeds._default / 2, g = c.is(":visible"), h = 0;
      g || (c.css("opacity", 0).show(), h = 1), (d == "hide" && g || d == "show" && !g) && e--;
      for(var i = 0;i < e;i++) {
        c.animate({opacity:h}, f, b.options.easing), h = (h + 1) % 2
      }
      c.animate({opacity:h}, f, b.options.easing, function() {
        h == 0 && c.hide(), b.callback && b.callback.apply(this, arguments)
      }), c.queue("fx", function() {
        c.dequeue()
      }).dequeue()
    })
  }
})(jQuery);
(function(a, b) {
  a.effects.puff = function(b) {
    return this.queue(function() {
      var c = a(this), d = a.effects.setMode(c, b.options.mode || "hide"), e = parseInt(b.options.percent, 10) || 150, f = e / 100, g = {height:c.height(), width:c.width()};
      a.extend(b.options, {fade:!0, mode:d, percent:d == "hide" ? e : 100, from:d == "hide" ? g : {height:g.height * f, width:g.width * f}}), c.effect("scale", b.options, b.duration, b.callback), c.dequeue()
    })
  }, a.effects.scale = function(b) {
    return this.queue(function() {
      var c = a(this), d = a.extend(!0, {}, b.options), e = a.effects.setMode(c, b.options.mode || "effect"), f = parseInt(b.options.percent, 10) || (parseInt(b.options.percent, 10) == 0 ? 0 : e == "hide" ? 0 : 100), g = b.options.direction || "both", h = b.options.origin;
      e != "effect" && (d.origin = h || ["middle", "center"], d.restore = !0);
      var i = {height:c.height(), width:c.width()};
      c.from = b.options.from || (e == "show" ? {height:0, width:0} : i);
      var j = {y:g != "horizontal" ? f / 100 : 1, x:g != "vertical" ? f / 100 : 1};
      c.to = {height:i.height * j.y, width:i.width * j.x}, b.options.fade && (e == "show" && (c.from.opacity = 0, c.to.opacity = 1), e == "hide" && (c.from.opacity = 1, c.to.opacity = 0)), d.from = c.from, d.to = c.to, d.mode = e, c.effect("size", d, b.duration, b.callback), c.dequeue()
    })
  }, a.effects.size = function(b) {
    return this.queue(function() {
      var c = a(this), d = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], e = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], f = ["width", "height", "overflow"], g = ["fontSize"], h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], i = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], j = a.effects.setMode(c, b.options.mode || "effect"), k = b.options.restore || !1, l = b.options.scale || 
      "both", m = b.options.origin, n = {height:c.height(), width:c.width()};
      c.from = b.options.from || n, c.to = b.options.to || n;
      if(m) {
        var p = a.effects.getBaseline(m, n);
        c.from.top = (n.height - c.from.height) * p.y, c.from.left = (n.width - c.from.width) * p.x, c.to.top = (n.height - c.to.height) * p.y, c.to.left = (n.width - c.to.width) * p.x
      }
      var q = {from:{y:c.from.height / n.height, x:c.from.width / n.width}, to:{y:c.to.height / n.height, x:c.to.width / n.width}};
      if(l == "box" || l == "both") {
        q.from.y != q.to.y && (d = d.concat(h), c.from = a.effects.setTransition(c, h, q.from.y, c.from), c.to = a.effects.setTransition(c, h, q.to.y, c.to)), q.from.x != q.to.x && (d = d.concat(i), c.from = a.effects.setTransition(c, i, q.from.x, c.from), c.to = a.effects.setTransition(c, i, q.to.x, c.to))
      }
      (l == "content" || l == "both") && q.from.y != q.to.y && (d = d.concat(g), c.from = a.effects.setTransition(c, g, q.from.y, c.from), c.to = a.effects.setTransition(c, g, q.to.y, c.to)), a.effects.save(c, k ? d : e), c.show(), a.effects.createWrapper(c), c.css("overflow", "hidden").css(c.from);
      if(l == "content" || l == "both") {
        h = h.concat(["marginTop", "marginBottom"]).concat(g), i = i.concat(["marginLeft", "marginRight"]), f = d.concat(h).concat(i), c.find("*[width]").each(function() {
          var c = a(this);
          k && a.effects.save(c, f);
          var d = {height:c.height(), width:c.width()};
          c.from = {height:d.height * q.from.y, width:d.width * q.from.x}, c.to = {height:d.height * q.to.y, width:d.width * q.to.x}, q.from.y != q.to.y && (c.from = a.effects.setTransition(c, h, q.from.y, c.from), c.to = a.effects.setTransition(c, h, q.to.y, c.to)), q.from.x != q.to.x && (c.from = a.effects.setTransition(c, i, q.from.x, c.from), c.to = a.effects.setTransition(c, i, q.to.x, c.to)), c.css(c.from), c.animate(c.to, b.duration, b.options.easing, function() {
            k && a.effects.restore(c, f)
          })
        })
      }
      c.animate(c.to, {queue:!1, duration:b.duration, easing:b.options.easing, complete:function() {
        c.to.opacity === 0 && c.css("opacity", c.from.opacity), j == "hide" && c.hide(), a.effects.restore(c, k ? d : e), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments), c.dequeue()
      }})
    })
  }
})(jQuery);
(function(a, b) {
  a.effects.shake = function(b) {
    return this.queue(function() {
      var c = a(this), d = ["position", "top", "bottom", "left", "right"], e = a.effects.setMode(c, b.options.mode || "effect"), f = b.options.direction || "left", g = b.options.distance || 20, h = b.options.times || 3, i = b.duration || b.options.duration || 140;
      a.effects.save(c, d), c.show(), a.effects.createWrapper(c);
      var j = f == "up" || f == "down" ? "top" : "left", k = f == "up" || f == "left" ? "pos" : "neg", l = {}, m = {}, n = {};
      l[j] = (k == "pos" ? "-=" : "+=") + g, m[j] = (k == "pos" ? "+=" : "-=") + g * 2, n[j] = (k == "pos" ? "-=" : "+=") + g * 2, c.animate(l, i, b.options.easing);
      for(var p = 1;p < h;p++) {
        c.animate(m, i, b.options.easing).animate(n, i, b.options.easing)
      }
      c.animate(m, i, b.options.easing).animate(l, i / 2, b.options.easing, function() {
        a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments)
      }), c.queue("fx", function() {
        c.dequeue()
      }), c.dequeue()
    })
  }
})(jQuery);
(function(a, b) {
  a.effects.slide = function(b) {
    return this.queue(function() {
      var c = a(this), d = ["position", "top", "bottom", "left", "right"], e = a.effects.setMode(c, b.options.mode || "show"), f = b.options.direction || "left";
      a.effects.save(c, d), c.show(), a.effects.createWrapper(c).css({overflow:"hidden"});
      var g = f == "up" || f == "down" ? "top" : "left", h = f == "up" || f == "left" ? "pos" : "neg", i = b.options.distance || (g == "top" ? c.outerHeight({margin:!0}) : c.outerWidth({margin:!0}));
      e == "show" && c.css(g, h == "pos" ? isNaN(i) ? "-" + i : -i : i);
      var j = {};
      j[g] = (e == "show" ? h == "pos" ? "+=" : "-=" : h == "pos" ? "-=" : "+=") + i, c.animate(j, {queue:!1, duration:b.duration, easing:b.options.easing, complete:function() {
        e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments), c.dequeue()
      }})
    })
  }
})(jQuery);
(function(a, b) {
  a.effects.transfer = function(b) {
    return this.queue(function() {
      var c = a(this), d = a(b.options.to), e = d.offset(), f = {top:e.top, left:e.left, height:d.innerHeight(), width:d.innerWidth()}, g = c.offset(), h = a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.options.className).css({top:g.top, left:g.left, height:c.innerHeight(), width:c.innerWidth(), position:"absolute"}).animate(f, b.duration, b.options.easing, function() {
        h.remove(), b.callback && b.callback.apply(c[0], arguments), c.dequeue()
      })
    })
  }
})(jQuery);
(function($) {
  if($.fn.carouFredSel) {
    return
  }
  $.fn.carouFredSel = function(options, configs) {
    if(this.length == 0) {
      debug(true, 'No element found for "' + this.selector + '".');
      return this
    }
    if(this.length > 1) {
      return this.each(function() {
        $(this).carouFredSel(options, configs)
      })
    }
    var $cfs = this, $tt0 = this[0];
    if($cfs.data("cfs_isCarousel")) {
      var starting_position = $cfs.triggerHandler("_cfs_currentPosition");
      $cfs.trigger("_cfs_destroy", true)
    }else {
      var starting_position = false
    }
    $cfs._cfs_init = function(o, setOrig, start) {
      o = go_getObject($tt0, o);
      if(o.debug) {
        conf.debug = o.debug;
        debug(conf, 'The "debug" option should be moved to the second configuration-object.')
      }
      var obs = ["items", "scroll", "auto", "prev", "next", "pagination"];
      for(var a = 0, l = obs.length;a < l;a++) {
        o[obs[a]] = go_getObject($tt0, o[obs[a]])
      }
      if(typeof o.scroll == "number") {
        if(o.scroll <= 50) {
          o.scroll = {"items":o.scroll}
        }else {
          o.scroll = {"duration":o.scroll}
        }
      }else {
        if(typeof o.scroll == "string") {
          o.scroll = {"easing":o.scroll}
        }
      }
      if(typeof o.items == "number") {
        o.items = {"visible":o.items}
      }else {
        if(o.items == "variable") {
          o.items = {"visible":o.items, "width":o.items, "height":o.items}
        }
      }
      if(typeof o.items != "object") {
        o.items = {}
      }
      if(setOrig) {
        opts_orig = $.extend(true, {}, $.fn.carouFredSel.defaults, o)
      }
      opts = $.extend(true, {}, $.fn.carouFredSel.defaults, o);
      if(typeof opts.items.visibleConf != "object") {
        opts.items.visibleConf = {}
      }
      if(opts.items.start == 0 && typeof start == "number") {
        opts.items.start = start
      }
      crsl.upDateOnWindowResize = opts.responsive;
      crsl.direction = opts.direction == "up" || opts.direction == "left" ? "next" : "prev";
      var dims = [["width", "innerWidth", "outerWidth", "height", "innerHeight", "outerHeight", "left", "top", "marginRight", 0, 1, 2, 3], ["height", "innerHeight", "outerHeight", "width", "innerWidth", "outerWidth", "top", "left", "marginBottom", 3, 2, 1, 0]];
      var dn = dims[0].length, dx = opts.direction == "right" || opts.direction == "left" ? 0 : 1;
      opts.d = {};
      for(var d = 0;d < dn;d++) {
        opts.d[dims[0][d]] = dims[dx][d]
      }
      var all_itm = $cfs.children();
      switch(typeof opts.items.visible) {
        case "object":
          opts.items.visibleConf.min = opts.items.visible.min;
          opts.items.visibleConf.max = opts.items.visible.max;
          opts.items.visible = false;
          break;
        case "string":
          if(opts.items.visible == "variable") {
            opts.items.visibleConf.variable = true
          }else {
            opts.items.visibleConf.adjust = opts.items.visible
          }
          opts.items.visible = false;
          break;
        case "function":
          opts.items.visibleConf.adjust = opts.items.visible;
          opts.items.visible = false;
          break
      }
      if(typeof opts.items.filter == "undefined") {
        opts.items.filter = all_itm.filter(":hidden").length > 0 ? ":visible" : "*"
      }
      if(opts[opts.d["width"]] == "auto") {
        opts[opts.d["width"]] = ms_getTrueLargestSize(all_itm, opts, "outerWidth")
      }
      if(ms_isPercentage(opts[opts.d["width"]]) && !opts.responsive) {
        opts[opts.d["width"]] = ms_getPercentage(ms_getTrueInnerSize($wrp.parent(), opts, "innerWidth"), opts[opts.d["width"]]);
        crsl.upDateOnWindowResize = true
      }
      if(opts[opts.d["height"]] == "auto") {
        opts[opts.d["height"]] = ms_getTrueLargestSize(all_itm, opts, "outerHeight")
      }
      if(!opts.items[opts.d["width"]]) {
        if(opts.responsive) {
          debug(true, "Set a " + opts.d["width"] + " for the items!");
          opts.items[opts.d["width"]] = ms_getTrueLargestSize(all_itm, opts, "outerWidth")
        }else {
          opts.items[opts.d["width"]] = ms_hasVariableSizes(all_itm, opts, "outerWidth") ? "variable" : all_itm[opts.d["outerWidth"]](true)
        }
      }
      if(!opts.items[opts.d["height"]]) {
        opts.items[opts.d["height"]] = ms_hasVariableSizes(all_itm, opts, "outerHeight") ? "variable" : all_itm[opts.d["outerHeight"]](true)
      }
      if(!opts[opts.d["height"]]) {
        opts[opts.d["height"]] = opts.items[opts.d["height"]]
      }
      if(!opts.items.visible && !opts.responsive) {
        if(opts.items[opts.d["width"]] == "variable") {
          opts.items.visibleConf.variable = true
        }
        if(!opts.items.visibleConf.variable) {
          if(typeof opts[opts.d["width"]] == "number") {
            opts.items.visible = Math.floor(opts[opts.d["width"]] / opts.items[opts.d["width"]])
          }else {
            var maxS = ms_getTrueInnerSize($wrp.parent(), opts, "innerWidth");
            opts.items.visible = Math.floor(maxS / opts.items[opts.d["width"]]);
            opts[opts.d["width"]] = opts.items.visible * opts.items[opts.d["width"]];
            if(!opts.items.visibleConf.adjust) {
              opts.align = false
            }
          }
          if(opts.items.visible == "Infinity" || opts.items.visible < 1) {
            debug(true, 'Not a valid number of visible items: Set to "variable".');
            opts.items.visibleConf.variable = true
          }
        }
      }
      if(!opts[opts.d["width"]]) {
        opts[opts.d["width"]] = "variable";
        if(!opts.responsive && opts.items.filter == "*" && !opts.items.visibleConf.variable && opts.items[opts.d["width"]] != "variable") {
          opts[opts.d["width"]] = opts.items.visible * opts.items[opts.d["width"]];
          opts.align = false
        }
      }
      if(opts.items.visibleConf.variable) {
        opts.maxDimention = opts[opts.d["width"]] == "variable" ? ms_getTrueInnerSize($wrp.parent(), opts, "innerWidth") : opts[opts.d["width"]];
        if(opts.align === false) {
          opts[opts.d["width"]] = "variable"
        }
        opts.items.visible = gn_getVisibleItemsNext(all_itm, opts, 0)
      }else {
        if(opts.items.filter != "*") {
          opts.items.visibleConf.org = opts.items.visible;
          opts.items.visible = gn_getVisibleItemsNextFilter(all_itm, opts, 0)
        }
      }
      if(typeof opts.align == "undefined") {
        opts.align = opts[opts.d["width"]] == "variable" ? false : "center"
      }
      opts.items.visible = cf_getItemsAdjust(opts.items.visible, opts, opts.items.visibleConf.adjust, $tt0);
      opts.items.visibleConf.old = opts.items.visible;
      opts.usePadding = false;
      if(opts.responsive) {
        if(!opts.items.visibleConf.min) {
          opts.items.visibleConf.min = opts.items.visible
        }
        if(!opts.items.visibleConf.max) {
          opts.items.visibleConf.max = opts.items.visible
        }
        opts.align = false;
        opts.padding = [0, 0, 0, 0];
        var isVisible = $wrp.is(":visible");
        if(isVisible) {
          $wrp.hide()
        }
        var fullS = ms_getPercentage(ms_getTrueInnerSize($wrp.parent(), opts, "innerWidth"), opts[opts.d["width"]]);
        if(typeof opts[opts.d["width"]] == "number" && fullS < opts[opts.d["width"]]) {
          fullS = opts[opts.d["width"]]
        }
        if(isVisible) {
          $wrp.show()
        }
        var visb = cf_getItemAdjustMinMax(Math.ceil(fullS / opts.items[opts.d["width"]]), opts.items.visibleConf);
        if(visb > all_itm.length) {
          visb = all_itm.length
        }
        var newS = Math.floor(fullS / visb), seco = opts[opts.d["height"]], secp = ms_isPercentage(seco);
        all_itm.each(function() {
          var $t = $(this), nw = newS - ms_getPaddingBorderMargin($t, opts, "Width");
          $t[opts.d["width"]](nw);
          if(secp) {
            $t[opts.d["height"]](ms_getPercentage(nw, seco))
          }
        });
        opts.items.visible = visb;
        opts.items[opts.d["width"]] = newS;
        opts[opts.d["width"]] = visb * newS
      }else {
        opts.padding = cf_getPadding(opts.padding);
        if(opts.align == "top") {
          opts.align = "left"
        }
        if(opts.align == "bottom") {
          opts.align = "right"
        }
        switch(opts.align) {
          case "center":
          ;
          case "left":
          ;
          case "right":
            if(opts[opts.d["width"]] != "variable") {
              var p = cf_getAlignPadding(gi_getCurrentItems(all_itm, opts), opts);
              opts.usePadding = true;
              opts.padding[opts.d[1]] = p[1];
              opts.padding[opts.d[3]] = p[0]
            }
            break;
          default:
            opts.align = false;
            opts.usePadding = opts.padding[0] == 0 && opts.padding[1] == 0 && opts.padding[2] == 0 && opts.padding[3] == 0 ? false : true;
            break
        }
      }
      if(typeof opts.cookie == "boolean" && opts.cookie) {
        opts.cookie = "caroufredsel_cookie_" + $cfs.attr("id")
      }
      if(typeof opts.items.minimum != "number") {
        opts.items.minimum = opts.items.visible
      }
      if(typeof opts.scroll.duration != "number") {
        opts.scroll.duration = 500
      }
      if(typeof opts.scroll.items == "undefined") {
        opts.scroll.items = opts.items.visibleConf.variable || opts.items.filter != "*" ? "visible" : opts.items.visible
      }
      opts.auto = go_getNaviObject($tt0, opts.auto, "auto");
      opts.prev = go_getNaviObject($tt0, opts.prev);
      opts.next = go_getNaviObject($tt0, opts.next);
      opts.pagination = go_getNaviObject($tt0, opts.pagination, "pagination");
      opts.auto = $.extend(true, {}, opts.scroll, opts.auto);
      opts.prev = $.extend(true, {}, opts.scroll, opts.prev);
      opts.next = $.extend(true, {}, opts.scroll, opts.next);
      opts.pagination = $.extend(true, {}, opts.scroll, opts.pagination);
      if(typeof opts.pagination.keys != "boolean") {
        opts.pagination.keys = false
      }
      if(typeof opts.pagination.anchorBuilder != "function" && opts.pagination.anchorBuilder !== false) {
        opts.pagination.anchorBuilder = $.fn.carouFredSel.pageAnchorBuilder
      }
      if(typeof opts.auto.play != "boolean") {
        opts.auto.play = true
      }
      if(typeof opts.auto.delay != "number") {
        opts.auto.delay = 0
      }
      if(typeof opts.auto.pauseOnEvent == "undefined") {
        opts.auto.pauseOnEvent = true
      }
      if(typeof opts.auto.pauseOnResize != "boolean") {
        opts.auto.pauseOnResize = true
      }
      if(typeof opts.auto.pauseDuration != "number") {
        opts.auto.pauseDuration = opts.auto.duration < 10 ? 2500 : opts.auto.duration * 5
      }
      if(opts.synchronise) {
        opts.synchronise = cf_getSynchArr(opts.synchronise)
      }
      if(conf.debug) {
        debug(conf, "Carousel width: " + opts.width);
        debug(conf, "Carousel height: " + opts.height);
        if(opts.maxDimention) {
          debug(conf, "Available " + opts.d["width"] + ": " + opts.maxDimention)
        }
        debug(conf, "Item widths: " + opts.items.width);
        debug(conf, "Item heights: " + opts.items.height);
        debug(conf, "Number of items visible: " + opts.items.visible);
        if(opts.auto.play) {
          debug(conf, "Number of items scrolled automatically: " + opts.auto.items)
        }
        if(opts.prev.button) {
          debug(conf, "Number of items scrolled backward: " + opts.prev.items)
        }
        if(opts.next.button) {
          debug(conf, "Number of items scrolled forward: " + opts.next.items)
        }
      }
    };
    $cfs._cfs_build = function() {
      $cfs.data("cfs_isCarousel", true);
      var orgCSS = {"textAlign":$cfs.css("textAlign"), "float":$cfs.css("float"), "position":$cfs.css("position"), "top":$cfs.css("top"), "right":$cfs.css("right"), "bottom":$cfs.css("bottom"), "left":$cfs.css("left"), "width":$cfs.css("width"), "height":$cfs.css("height"), "marginTop":$cfs.css("marginTop"), "marginRight":$cfs.css("marginRight"), "marginBottom":$cfs.css("marginBottom"), "marginLeft":$cfs.css("marginLeft")};
      switch(orgCSS.position) {
        case "absolute":
          var newPosition = "absolute";
          break;
        case "fixed":
          var newPosition = "fixed";
          break;
        default:
          var newPosition = "relative"
      }
      $wrp.css(orgCSS).css({"position":newPosition});
      $cfs.data("cfs_origCss", orgCSS).css({"textAlign":"left", "float":"none", "position":"absolute", "top":0, "left":0, "marginTop":0, "marginRight":0, "marginBottom":0, "marginLeft":0});
      if(opts.usePadding) {
        $cfs.children().each(function() {
          var m = parseInt($(this).css(opts.d["marginRight"]));
          if(isNaN(m)) {
            m = 0
          }
          $(this).data("cfs_origCssMargin", m)
        })
      }
    };
    $cfs._cfs_bind_events = function() {
      $cfs._cfs_unbind_events();
      $cfs.bind(cf_e("stop", conf), function(e, imm) {
        e.stopPropagation();
        if(!crsl.isStopped) {
          if(opts.auto.button) {
            opts.auto.button.addClass(cf_c("stopped", conf))
          }
        }
        crsl.isStopped = true;
        if(opts.auto.play) {
          opts.auto.play = false;
          $cfs.trigger(cf_e("pause", conf), imm)
        }
        return true
      });
      $cfs.bind(cf_e("finish", conf), function(e) {
        e.stopPropagation();
        if(crsl.isScrolling) {
          sc_stopScroll(scrl)
        }
        return true
      });
      $cfs.bind(cf_e("pause", conf), function(e, imm, res) {
        e.stopPropagation();
        tmrs = sc_clearTimers(tmrs);
        if(imm && crsl.isScrolling) {
          scrl.isStopped = true;
          var nst = getTime() - scrl.startTime;
          scrl.duration -= nst;
          if(scrl.pre) {
            scrl.pre.duration -= nst
          }
          if(scrl.post) {
            scrl.post.duration -= nst
          }
          sc_stopScroll(scrl, false)
        }
        if(!crsl.isPaused && !crsl.isScrolling) {
          if(res) {
            tmrs.timePassed += getTime() - tmrs.startTime
          }
        }
        if(!crsl.isPaused) {
          if(opts.auto.button) {
            opts.auto.button.addClass(cf_c("paused", conf))
          }
        }
        crsl.isPaused = true;
        if(opts.auto.onPausePause) {
          var dur1 = opts.auto.pauseDuration - tmrs.timePassed, perc = 100 - Math.ceil(dur1 * 100 / opts.auto.pauseDuration);
          opts.auto.onPausePause.call($tt0, perc, dur1)
        }
        return true
      });
      $cfs.bind(cf_e("play", conf), function(e, dir, del, res) {
        e.stopPropagation();
        tmrs = sc_clearTimers(tmrs);
        var v = [dir, del, res], t = ["string", "number", "boolean"], a = cf_sortParams(v, t);
        var dir = a[0], del = a[1], res = a[2];
        if(dir != "prev" && dir != "next") {
          dir = crsl.direction
        }
        if(typeof del != "number") {
          del = 0
        }
        if(typeof res != "boolean") {
          res = false
        }
        if(res) {
          crsl.isStopped = false;
          opts.auto.play = true
        }
        if(!opts.auto.play) {
          e.stopImmediatePropagation();
          return debug(conf, "Carousel stopped: Not scrolling.")
        }
        if(crsl.isPaused) {
          if(opts.auto.button) {
            opts.auto.button.removeClass(cf_c("stopped", conf));
            opts.auto.button.removeClass(cf_c("paused", conf))
          }
        }
        crsl.isPaused = false;
        tmrs.startTime = getTime();
        var dur1 = opts.auto.pauseDuration + del;
        dur2 = dur1 - tmrs.timePassed;
        perc = 100 - Math.ceil(dur2 * 100 / dur1);
        tmrs.auto = setTimeout(function() {
          if(opts.auto.onPauseEnd) {
            opts.auto.onPauseEnd.call($tt0, perc, dur2)
          }
          if(crsl.isScrolling) {
            $cfs.trigger(cf_e("play", conf), dir)
          }else {
            $cfs.trigger(cf_e(dir, conf), opts.auto)
          }
        }, dur2);
        if(opts.auto.onPauseStart) {
          opts.auto.onPauseStart.call($tt0, perc, dur2)
        }
        return true
      });
      $cfs.bind(cf_e("resume", conf), function(e) {
        e.stopPropagation();
        if(scrl.isStopped) {
          scrl.isStopped = false;
          crsl.isPaused = false;
          crsl.isScrolling = true;
          scrl.startTime = getTime();
          sc_startScroll(scrl)
        }else {
          $cfs.trigger(cf_e("play", conf))
        }
        return true
      });
      $cfs.bind(cf_e("prev", conf) + " " + cf_e("next", conf), function(e, obj, num, clb) {
        e.stopPropagation();
        if(crsl.isStopped || $cfs.is(":hidden")) {
          e.stopImmediatePropagation();
          return debug(conf, "Carousel stopped or hidden: Not scrolling.")
        }
        if(opts.items.minimum >= itms.total) {
          e.stopImmediatePropagation();
          return debug(conf, "Not enough items (" + itms.total + ", " + opts.items.minimum + " needed): Not scrolling.")
        }
        var v = [obj, num, clb], t = ["object", "number/string", "function"], a = cf_sortParams(v, t);
        var obj = a[0], num = a[1], clb = a[2];
        var eType = e.type.substr(conf.events.prefix.length);
        if(typeof obj != "object" || obj == null) {
          obj = opts[eType]
        }
        if(typeof clb == "function") {
          obj.onAfter = clb
        }
        if(typeof num != "number") {
          if(opts.items.filter != "*") {
            num = "visible"
          }else {
            var arr = [num, obj.items, opts[eType].items];
            for(var a = 0, l = arr.length;a < l;a++) {
              if(typeof arr[a] == "number" || arr[a] == "page" || arr[a] == "visible") {
                num = arr[a];
                break
              }
            }
          }
          switch(num) {
            case "page":
              e.stopImmediatePropagation();
              return $cfs.triggerHandler(eType + "Page", [obj, clb]);
              break;
            case "visible":
              if(!opts.items.visibleConf.variable && opts.items.filter == "*") {
                num = opts.items.visible
              }
              break
          }
        }
        if(scrl.isStopped) {
          $cfs.trigger(cf_e("resume", conf));
          $cfs.trigger(cf_e("queue", conf), [eType, [obj, num, clb]]);
          e.stopImmediatePropagation();
          return debug(conf, "Carousel resumed scrolling.")
        }
        if(obj.duration > 0) {
          if(crsl.isScrolling) {
            if(obj.queue) {
              $cfs.trigger(cf_e("queue", conf), [eType, [obj, num, clb]])
            }
            e.stopImmediatePropagation();
            return debug(conf, "Carousel currently scrolling.")
          }
        }
        if(obj.conditions && !obj.conditions.call($tt0)) {
          e.stopImmediatePropagation();
          return debug(conf, 'Callback "conditions" returned false.')
        }
        tmrs.timePassed = 0;
        $cfs.trigger("_cfs_slide_" + eType, [obj, num]);
        if(opts.synchronise) {
          var s = opts.synchronise, c = [obj, num];
          for(var j = 0, l = s.length;j < l;j++) {
            var d = eType;
            if(!s[j][1]) {
              c[0] = s[j][0].triggerHandler("_cfs_configuration", eType)
            }
            if(!s[j][2]) {
              d = d == "prev" ? "next" : "prev"
            }
            c[1] = num + s[j][3];
            s[j][0].trigger("_cfs_slide_" + d, c)
          }
        }
        return true
      });
      $cfs.bind(cf_e("_cfs_slide_prev", conf, false), function(e, sO, nI) {
        e.stopPropagation();
        var a_itm = $cfs.children();
        if(!opts.circular) {
          if(itms.first == 0) {
            if(opts.infinite) {
              $cfs.trigger(cf_e("next", conf), itms.total - 1)
            }
            return e.stopImmediatePropagation()
          }
        }
        if(opts.usePadding) {
          sz_resetMargin(a_itm, opts)
        }
        if(typeof nI != "number") {
          if(opts.items.visibleConf.variable) {
            nI = gn_getVisibleItemsPrev(a_itm, opts, itms.total - 1)
          }else {
            if(opts.items.filter != "*") {
              var xI = typeof sO.items == "number" ? sO.items : gn_getVisibleOrg($cfs, opts);
              nI = gn_getScrollItemsPrevFilter(a_itm, opts, itms.total - 1, xI)
            }else {
              nI = opts.items.visible
            }
          }
          nI = cf_getAdjust(nI, opts, sO.items, $tt0)
        }
        if(!opts.circular) {
          if(itms.total - nI < itms.first) {
            nI = itms.total - itms.first
          }
        }
        opts.items.visibleConf.old = opts.items.visible;
        if(opts.items.visibleConf.variable) {
          var vI = gn_getVisibleItemsNext(a_itm, opts, itms.total - nI);
          if(opts.items.visible + nI <= vI && nI < itms.total) {
            nI++;
            vI = gn_getVisibleItemsNext(a_itm, opts, itms.total - nI)
          }
          opts.items.visible = cf_getItemsAdjust(vI, opts, opts.items.visibleConf.adjust, $tt0)
        }else {
          if(opts.items.filter != "*") {
            var vI = gn_getVisibleItemsNextFilter(a_itm, opts, itms.total - nI);
            opts.items.visible = cf_getItemsAdjust(vI, opts, opts.items.visibleConf.adjust, $tt0)
          }
        }
        if(opts.usePadding) {
          sz_resetMargin(a_itm, opts, true)
        }
        if(nI == 0) {
          e.stopImmediatePropagation();
          return debug(conf, "0 items to scroll: Not scrolling.")
        }
        debug(conf, "Scrolling " + nI + " items backward.");
        itms.first += nI;
        while(itms.first >= itms.total) {
          itms.first -= itms.total
        }
        if(!opts.circular) {
          if(itms.first == 0 && sO.onEnd) {
            sO.onEnd.call($tt0)
          }
          if(!opts.infinite) {
            nv_enableNavi(opts, itms.first, conf)
          }
        }
        $cfs.children().slice(itms.total - nI, itms.total).prependTo($cfs);
        if(itms.total < opts.items.visible + nI) {
          $cfs.children().slice(0, opts.items.visible + nI - itms.total).clone(true).appendTo($cfs)
        }
        var a_itm = $cfs.children(), c_old = gi_getOldItemsPrev(a_itm, opts, nI), c_new = gi_getNewItemsPrev(a_itm, opts), l_cur = a_itm.eq(nI - 1), l_old = c_old.last(), l_new = c_new.last();
        if(opts.usePadding) {
          sz_resetMargin(a_itm, opts)
        }
        if(opts.align) {
          var p = cf_getAlignPadding(c_new, opts), pL = p[0], pR = p[1]
        }else {
          var pL = 0, pR = 0
        }
        var oL = pL < 0 ? opts.padding[opts.d[3]] : 0;
        if(sO.fx == "directscroll" && opts.items.visible < nI) {
          var hiddenitems = a_itm.slice(opts.items.visibleConf.old, nI), orgW = opts.items[opts.d["width"]];
          hiddenitems.each(function() {
            var hi = $(this);
            hi.data("isHidden", hi.is(":hidden")).hide()
          });
          opts.items[opts.d["width"]] = "variable"
        }else {
          var hiddenitems = false
        }
        var i_siz = ms_getTotalSize(a_itm.slice(0, nI), opts, "width"), w_siz = cf_mapWrapperSizes(ms_getSizes(c_new, opts, true), opts, !opts.usePadding);
        if(hiddenitems) {
          opts.items[opts.d["width"]] = orgW
        }
        if(opts.usePadding) {
          sz_resetMargin(a_itm, opts, true);
          if(pR >= 0) {
            sz_resetMargin(l_old, opts, opts.padding[opts.d[1]])
          }
          sz_resetMargin(l_cur, opts, opts.padding[opts.d[3]])
        }
        if(opts.align) {
          opts.padding[opts.d[1]] = pR;
          opts.padding[opts.d[3]] = pL
        }
        var a_cfs = {}, a_dur = sO.duration;
        if(sO.fx == "none") {
          a_dur = 0
        }else {
          if(a_dur == "auto") {
            a_dur = opts.scroll.duration / opts.scroll.items * nI
          }else {
            if(a_dur <= 0) {
              a_dur = 0
            }else {
              if(a_dur < 10) {
                a_dur = i_siz / a_dur
              }
            }
          }
        }
        scrl = sc_setScroll(a_dur, sO.easing);
        if(opts[opts.d["width"]] == "variable" || opts[opts.d["height"]] == "variable") {
          scrl.anims.push([$wrp, w_siz])
        }
        if(opts.usePadding) {
          var new_m = opts.padding[opts.d[3]];
          if(l_new.not(l_cur).length) {
            var a_cur = {};
            a_cur[opts.d["marginRight"]] = l_cur.data("cfs_origCssMargin");
            if(pL < 0) {
              l_cur.css(a_cur)
            }else {
              scrl.anims.push([l_cur, a_cur])
            }
          }
          if(l_new.not(l_old).length) {
            var a_old = {};
            a_old[opts.d["marginRight"]] = l_old.data("cfs_origCssMargin");
            scrl.anims.push([l_old, a_old])
          }
          if(pR >= 0) {
            var a_new = {};
            a_new[opts.d["marginRight"]] = l_new.data("cfs_origCssMargin") + opts.padding[opts.d[1]];
            scrl.anims.push([l_new, a_new])
          }
        }else {
          var new_m = 0
        }
        a_cfs[opts.d["left"]] = new_m;
        var args = [c_old, c_new, w_siz, a_dur];
        if(sO.onBefore) {
          sO.onBefore.apply($tt0, args)
        }
        clbk.onBefore = sc_callCallbacks(clbk.onBefore, $tt0, args);
        switch(sO.fx) {
          case "fade":
          ;
          case "crossfade":
          ;
          case "cover":
          ;
          case "uncover":
            scrl.pre = sc_setScroll(scrl.duration, scrl.easing);
            scrl.post = sc_setScroll(scrl.duration, scrl.easing);
            scrl.duration = 0;
            break
        }
        switch(sO.fx) {
          case "crossfade":
          ;
          case "cover":
          ;
          case "uncover":
            var $cf2 = $cfs.clone().appendTo($wrp);
            break
        }
        switch(sO.fx) {
          case "uncover":
            $cf2.children().slice(0, nI).remove();
          case "crossfade":
          ;
          case "cover":
            $cf2.children().slice(opts.items.visible).remove();
            break
        }
        switch(sO.fx) {
          case "fade":
            scrl.pre.anims.push([$cfs, {"opacity":0}]);
            break;
          case "crossfade":
            $cf2.css({"opacity":0});
            scrl.pre.anims.push([$cfs, {"width":"+=0"}, function() {
              $cf2.remove()
            }]);
            scrl.post.anims.push([$cf2, {"opacity":1}]);
            break;
          case "cover":
            scrl = fx_cover(scrl, $cfs, $cf2, opts, true);
            break;
          case "uncover":
            scrl = fx_uncover(scrl, $cfs, $cf2, opts, true, nI);
            break
        }
        var a_complete = function() {
          var overFill = opts.items.visible + nI - itms.total;
          if(overFill > 0) {
            $cfs.children().slice(itms.total).remove();
            c_old = $cfs.children().slice(itms.total - (nI - overFill)).get().concat($cfs.children().slice(0, overFill).get())
          }
          if(hiddenitems) {
            hiddenitems.each(function() {
              var hi = $(this);
              if(!hi.data("isHidden")) {
                hi.show()
              }
            })
          }
          if(opts.usePadding) {
            var l_itm = $cfs.children().eq(opts.items.visible + nI - 1);
            l_itm.css(opts.d["marginRight"], l_itm.data("cfs_origCssMargin"))
          }
          scrl.anims = [];
          if(scrl.pre) {
            scrl.pre = sc_setScroll(scrl.orgDuration, scrl.easing)
          }
          var fn = function() {
            switch(sO.fx) {
              case "fade":
              ;
              case "crossfade":
                $cfs.css("filter", "");
                break
            }
            scrl.post = sc_setScroll(0, null);
            crsl.isScrolling = false;
            var args = [c_old, c_new, w_siz];
            if(sO.onAfter) {
              sO.onAfter.apply($tt0, args)
            }
            clbk.onAfter = sc_callCallbacks(clbk.onAfter, $tt0, args);
            if(queu.length) {
              $cfs.trigger(cf_e(queu[0][0], conf), queu[0][1]);
              queu.shift()
            }
            if(!crsl.isPaused) {
              $cfs.trigger(cf_e("play", conf))
            }
          };
          switch(sO.fx) {
            case "fade":
              scrl.pre.anims.push([$cfs, {"opacity":1}, fn]);
              sc_startScroll(scrl.pre);
              break;
            case "uncover":
              scrl.pre.anims.push([$cfs, {"width":"+=0"}, fn]);
              sc_startScroll(scrl.pre);
              break;
            default:
              fn();
              break
          }
        };
        scrl.anims.push([$cfs, a_cfs, a_complete]);
        crsl.isScrolling = true;
        $cfs.css(opts.d["left"], -(i_siz - oL));
        tmrs = sc_clearTimers(tmrs);
        sc_startScroll(scrl);
        cf_setCookie(opts.cookie, $cfs.triggerHandler(cf_e("currentPosition", conf)));
        $cfs.trigger(cf_e("updatePageStatus", conf), [false, w_siz]);
        return true
      });
      $cfs.bind(cf_e("_cfs_slide_next", conf, false), function(e, sO, nI) {
        e.stopPropagation();
        var a_itm = $cfs.children();
        if(!opts.circular) {
          if(itms.first == opts.items.visible) {
            if(opts.infinite) {
              $cfs.trigger(cf_e("prev", conf), itms.total - 1)
            }
            return e.stopImmediatePropagation()
          }
        }
        if(opts.usePadding) {
          sz_resetMargin(a_itm, opts)
        }
        if(typeof nI != "number") {
          if(opts.items.filter != "*") {
            var xI = typeof sO.items == "number" ? sO.items : gn_getVisibleOrg($cfs, opts);
            nI = gn_getScrollItemsNextFilter(a_itm, opts, 0, xI)
          }else {
            nI = opts.items.visible
          }
          nI = cf_getAdjust(nI, opts, sO.items, $tt0)
        }
        var lastItemNr = itms.first == 0 ? itms.total : itms.first;
        if(!opts.circular) {
          if(opts.items.visibleConf.variable) {
            var vI = gn_getVisibleItemsNext(a_itm, opts, nI), xI = gn_getVisibleItemsPrev(a_itm, opts, lastItemNr - 1)
          }else {
            var vI = opts.items.visible, xI = opts.items.visible
          }
          if(nI + vI > lastItemNr) {
            nI = lastItemNr - xI
          }
        }
        opts.items.visibleConf.old = opts.items.visible;
        if(opts.items.visibleConf.variable) {
          var vI = gn_getVisibleItemsNextTestCircular(a_itm, opts, nI, lastItemNr);
          while(opts.items.visible - nI >= vI && nI < itms.total) {
            nI++;
            vI = gn_getVisibleItemsNextTestCircular(a_itm, opts, nI, lastItemNr)
          }
          opts.items.visible = cf_getItemsAdjust(vI, opts, opts.items.visibleConf.adjust, $tt0)
        }else {
          if(opts.items.filter != "*") {
            var vI = gn_getVisibleItemsNextFilter(a_itm, opts, nI);
            opts.items.visible = cf_getItemsAdjust(vI, opts, opts.items.visibleConf.adjust, $tt0)
          }
        }
        if(opts.usePadding) {
          sz_resetMargin(a_itm, opts, true)
        }
        if(nI == 0) {
          e.stopImmediatePropagation();
          return debug(conf, "0 items to scroll: Not scrolling.")
        }
        debug(conf, "Scrolling " + nI + " items forward.");
        itms.first -= nI;
        while(itms.first < 0) {
          itms.first += itms.total
        }
        if(!opts.circular) {
          if(itms.first == opts.items.visible && sO.onEnd) {
            sO.onEnd.call($tt0)
          }
          if(!opts.infinite) {
            nv_enableNavi(opts, itms.first, conf)
          }
        }
        if(itms.total < opts.items.visible + nI) {
          $cfs.children().slice(0, opts.items.visible + nI - itms.total).clone(true).appendTo($cfs)
        }
        var a_itm = $cfs.children(), c_old = gi_getOldItemsNext(a_itm, opts), c_new = gi_getNewItemsNext(a_itm, opts, nI), l_cur = a_itm.eq(nI - 1), l_old = c_old.last(), l_new = c_new.last();
        if(opts.usePadding) {
          sz_resetMargin(a_itm, opts)
        }
        if(opts.align) {
          var p = cf_getAlignPadding(c_new, opts), pL = p[0], pR = p[1]
        }else {
          var pL = 0, pR = 0
        }
        if(sO.fx == "directscroll" && opts.items.visibleConf.old < nI) {
          var hiddenitems = a_itm.slice(opts.items.visibleConf.old, nI), orgW = opts.items[opts.d["width"]];
          hiddenitems.each(function() {
            var hi = $(this);
            hi.data("isHidden", hi.is(":hidden")).hide()
          });
          opts.items[opts.d["width"]] = "variable"
        }else {
          var hiddenitems = false
        }
        var i_siz = ms_getTotalSize(a_itm.slice(0, nI), opts, "width"), w_siz = cf_mapWrapperSizes(ms_getSizes(c_new, opts, true), opts, !opts.usePadding);
        if(hiddenitems) {
          opts.items[opts.d["width"]] = orgW
        }
        if(opts.align) {
          if(opts.padding[opts.d[1]] < 0) {
            opts.padding[opts.d[1]] = 0
          }
        }
        if(opts.usePadding) {
          sz_resetMargin(a_itm, opts, true);
          sz_resetMargin(l_old, opts, opts.padding[opts.d[1]])
        }
        if(opts.align) {
          opts.padding[opts.d[1]] = pR;
          opts.padding[opts.d[3]] = pL
        }
        var a_cfs = {}, a_dur = sO.duration;
        if(sO.fx == "none") {
          a_dur = 0
        }else {
          if(a_dur == "auto") {
            a_dur = opts.scroll.duration / opts.scroll.items * nI
          }else {
            if(a_dur <= 0) {
              a_dur = 0
            }else {
              if(a_dur < 10) {
                a_dur = i_siz / a_dur
              }
            }
          }
        }
        scrl = sc_setScroll(a_dur, sO.easing);
        if(opts[opts.d["width"]] == "variable" || opts[opts.d["height"]] == "variable") {
          scrl.anims.push([$wrp, w_siz])
        }
        if(opts.usePadding) {
          var l_new_m = l_new.data("cfs_origCssMargin");
          if(pR >= 0) {
            l_new_m += opts.padding[opts.d[1]]
          }
          l_new.css(opts.d["marginRight"], l_new_m);
          if(l_cur.not(l_old).length) {
            var a_old = {};
            a_old[opts.d["marginRight"]] = l_old.data("cfs_origCssMargin");
            scrl.anims.push([l_old, a_old])
          }
          var c_new_m = l_cur.data("cfs_origCssMargin");
          if(pL >= 0) {
            c_new_m += opts.padding[opts.d[3]]
          }
          var a_cur = {};
          a_cur[opts.d["marginRight"]] = c_new_m;
          scrl.anims.push([l_cur, a_cur])
        }
        a_cfs[opts.d["left"]] = -i_siz;
        if(pL < 0) {
          a_cfs[opts.d["left"]] += pL
        }
        var args = [c_old, c_new, w_siz, a_dur];
        if(sO.onBefore) {
          sO.onBefore.apply($tt0, args)
        }
        clbk.onBefore = sc_callCallbacks(clbk.onBefore, $tt0, args);
        switch(sO.fx) {
          case "fade":
          ;
          case "crossfade":
          ;
          case "cover":
          ;
          case "uncover":
            scrl.pre = sc_setScroll(scrl.duration, scrl.easing);
            scrl.post = sc_setScroll(scrl.duration, scrl.easing);
            scrl.duration = 0;
            break
        }
        switch(sO.fx) {
          case "crossfade":
          ;
          case "cover":
          ;
          case "uncover":
            var $cf2 = $cfs.clone().appendTo($wrp);
            break
        }
        switch(sO.fx) {
          case "uncover":
            $cf2.children().slice(opts.items.visibleConf.old).remove();
            break;
          case "crossfade":
          ;
          case "cover":
            $cf2.children().slice(0, nI).remove();
            $cf2.children().slice(opts.items.visible).remove();
            break
        }
        switch(sO.fx) {
          case "fade":
            scrl.pre.anims.push([$cfs, {"opacity":0}]);
            break;
          case "crossfade":
            $cf2.css({"opacity":0});
            scrl.pre.anims.push([$cfs, {"width":"+=0"}, function() {
              $cf2.remove()
            }]);
            scrl.post.anims.push([$cf2, {"opacity":1}]);
            break;
          case "cover":
            scrl = fx_cover(scrl, $cfs, $cf2, opts, false);
            break;
          case "uncover":
            scrl = fx_uncover(scrl, $cfs, $cf2, opts, false, nI);
            break
        }
        var a_complete = function() {
          var overFill = opts.items.visible + nI - itms.total, new_m = opts.usePadding ? opts.padding[opts.d[3]] : 0;
          $cfs.css(opts.d["left"], new_m);
          if(overFill > 0) {
            $cfs.children().slice(itms.total).remove()
          }
          var l_itm = $cfs.children().slice(0, nI).appendTo($cfs).last();
          if(overFill > 0) {
            c_new = gi_getCurrentItems(a_itm, opts)
          }
          if(hiddenitems) {
            hiddenitems.each(function() {
              var hi = $(this);
              if(!hi.data("isHidden")) {
                hi.show()
              }
            })
          }
          if(opts.usePadding) {
            if(itms.total < opts.items.visible + nI) {
              var l_cur = $cfs.children().eq(opts.items.visible - 1);
              l_cur.css(opts.d["marginRight"], l_cur.data("cfs_origCssMargin") + opts.padding[opts.d[3]])
            }
            l_itm.css(opts.d["marginRight"], l_itm.data("cfs_origCssMargin"))
          }
          scrl.anims = [];
          if(scrl.pre) {
            scrl.pre = sc_setScroll(scrl.orgDuration, scrl.easing)
          }
          var fn = function() {
            switch(sO.fx) {
              case "fade":
              ;
              case "crossfade":
                $cfs.css("filter", "");
                break
            }
            scrl.post = sc_setScroll(0, null);
            crsl.isScrolling = false;
            var args = [c_old, c_new, w_siz];
            if(sO.onAfter) {
              sO.onAfter.apply($tt0, args)
            }
            clbk.onAfter = sc_callCallbacks(clbk.onAfter, $tt0, args);
            if(queu.length) {
              $cfs.trigger(cf_e(queu[0][0], conf), queu[0][1]);
              queu.shift()
            }
            if(!crsl.isPaused) {
              $cfs.trigger(cf_e("play", conf))
            }
          };
          switch(sO.fx) {
            case "fade":
              scrl.pre.anims.push([$cfs, {"opacity":1}, fn]);
              sc_startScroll(scrl.pre);
              break;
            case "uncover":
              scrl.pre.anims.push([$cfs, {"width":"+=0"}, fn]);
              sc_startScroll(scrl.pre);
              break;
            default:
              fn();
              break
          }
        };
        scrl.anims.push([$cfs, a_cfs, a_complete]);
        crsl.isScrolling = true;
        tmrs = sc_clearTimers(tmrs);
        sc_startScroll(scrl);
        cf_setCookie(opts.cookie, $cfs.triggerHandler(cf_e("currentPosition", conf)));
        $cfs.trigger(cf_e("updatePageStatus", conf), [false, w_siz]);
        return true
      });
      $cfs.bind(cf_e("slideTo", conf), function(e, num, dev, org, obj, dir, clb) {
        e.stopPropagation();
        var v = [num, dev, org, obj, dir, clb], t = ["string/number/object", "number", "boolean", "object", "string", "function"], a = cf_sortParams(v, t);
        var obj = a[3], dir = a[4], clb = a[5];
        num = gn_getItemIndex(a[0], a[1], a[2], itms, $cfs);
        if(num == 0) {
          return
        }
        if(typeof obj != "object") {
          obj = false
        }
        if(crsl.isScrolling) {
          if(typeof obj != "object" || obj.duration > 0) {
            return false
          }
        }
        if(dir != "prev" && dir != "next") {
          if(opts.circular) {
            if(num <= itms.total / 2) {
              dir = "next"
            }else {
              dir = "prev"
            }
          }else {
            if(itms.first == 0 || itms.first > num) {
              dir = "next"
            }else {
              dir = "prev"
            }
          }
        }
        if(dir == "prev") {
          num = itms.total - num
        }
        $cfs.trigger(cf_e(dir, conf), [obj, num, clb]);
        return true
      });
      $cfs.bind(cf_e("prevPage", conf), function(e, obj, clb) {
        e.stopPropagation();
        var cur = $cfs.triggerHandler(cf_e("currentPage", conf));
        return $cfs.triggerHandler(cf_e("slideToPage", conf), [cur - 1, obj, "prev", clb])
      });
      $cfs.bind(cf_e("nextPage", conf), function(e, obj, clb) {
        e.stopPropagation();
        var cur = $cfs.triggerHandler(cf_e("currentPage", conf));
        return $cfs.triggerHandler(cf_e("slideToPage", conf), [cur + 1, obj, "next", clb])
      });
      $cfs.bind(cf_e("slideToPage", conf), function(e, pag, obj, dir, clb) {
        e.stopPropagation();
        if(typeof pag != "number") {
          pag = $cfs.triggerHandler(cf_e("currentPage", conf))
        }
        var ipp = opts.pagination.items || opts.items.visible, max = Math.floor(itms.total / ipp) - 1;
        if(pag < 0) {
          pag = max
        }
        if(pag > max) {
          pag = 0
        }
        return $cfs.triggerHandler(cf_e("slideTo", conf), [pag * ipp, 0, true, obj, dir, clb])
      });
      $cfs.bind(cf_e("jumpToStart", conf), function(e, s) {
        e.stopPropagation();
        if(s) {
          s = gn_getItemIndex(s, 0, true, itms, $cfs)
        }else {
          s = 0
        }
        s += itms.first;
        if(s != 0) {
          while(s > itms.total) {
            s -= itms.total
          }
          $cfs.prepend($cfs.children().slice(s, itms.total))
        }
        return true
      });
      $cfs.bind(cf_e("synchronise", conf), function(e, s) {
        e.stopPropagation();
        if(s) {
          s = cf_getSynchArr(s)
        }else {
          if(opts.synchronise) {
            s = opts.synchronise
          }else {
            return debug(conf, "No carousel to synchronise.")
          }
        }
        var n = $cfs.triggerHandler(cf_e("currentPosition", conf)), x = true;
        for(var j = 0, l = s.length;j < l;j++) {
          if(!s[j][0].triggerHandler(cf_e("slideTo", conf), [n, s[j][3], true])) {
            x = false
          }
        }
        return x
      });
      $cfs.bind(cf_e("queue", conf), function(e, dir, opt) {
        e.stopPropagation();
        if(typeof dir == "function") {
          dir.call($tt0, queu)
        }else {
          if(is_array(dir)) {
            queu = dir
          }else {
            if(typeof dir != "undefined") {
              queu.push([dir, opt])
            }
          }
        }
        return queu
      });
      $cfs.bind(cf_e("insertItem", conf), function(e, itm, num, org, dev) {
        e.stopPropagation();
        var v = [itm, num, org, dev], t = ["string/object", "string/number/object", "boolean", "number"], a = cf_sortParams(v, t);
        var itm = a[0], num = a[1], org = a[2], dev = a[3];
        if(typeof itm == "object" && typeof itm.jquery == "undefined") {
          itm = $(itm)
        }
        if(typeof itm == "string") {
          itm = $(itm)
        }
        if(typeof itm != "object" || typeof itm.jquery == "undefined" || itm.length == 0) {
          return debug(conf, "Not a valid object.")
        }
        if(typeof num == "undefined") {
          num = "end"
        }
        if(opts.usePadding) {
          itm.each(function() {
            var m = parseInt($(this).css(opts.d["marginRight"]));
            if(isNaN(m)) {
              m = 0
            }
            $(this).data("cfs_origCssMargin", m)
          })
        }
        var orgNum = num, before = "before";
        if(num == "end") {
          if(org) {
            if(itms.first == 0) {
              num = itms.total - 1;
              before = "after"
            }else {
              num = itms.first;
              itms.first += itm.length
            }
            if(num < 0) {
              num = 0
            }
          }else {
            num = itms.total - 1;
            before = "after"
          }
        }else {
          num = gn_getItemIndex(num, dev, org, itms, $cfs)
        }
        if(orgNum != "end" && !org) {
          if(num < itms.first) {
            itms.first += itm.length
          }
        }
        if(itms.first >= itms.total) {
          itms.first -= itms.total
        }
        var $cit = $cfs.children().eq(num);
        if($cit.length) {
          $cit[before](itm)
        }else {
          $cfs.append(itm)
        }
        itms.total = $cfs.children().length;
        var sz = $cfs.triggerHandler("updateSizes");
        nv_showNavi(opts, itms.total, conf);
        nv_enableNavi(opts, itms.first, conf);
        $cfs.trigger(cf_e("linkAnchors", conf));
        $cfs.trigger(cf_e("updatePageStatus", conf), [true, sz]);
        return true
      });
      $cfs.bind(cf_e("removeItem", conf), function(e, num, org, dev) {
        e.stopPropagation();
        var v = [num, org, dev], t = ["string/number/object", "boolean", "number"], a = cf_sortParams(v, t);
        var num = a[0], org = a[1], dev = a[2];
        if(typeof num == "undefined" || num == "end") {
          $cfs.children().last().remove()
        }else {
          num = gn_getItemIndex(num, dev, org, itms, $cfs);
          var $cit = $cfs.children().eq(num);
          if($cit.length) {
            if(num < itms.first) {
              itms.first -= $cit.length
            }
            $cit.remove()
          }
        }
        itms.total = $cfs.children().length;
        var sz = $cfs.triggerHandler("updateSizes");
        nv_showNavi(opts, itms.total, conf);
        nv_enableNavi(opts, itms.first, conf);
        $cfs.trigger(cf_e("updatePageStatus", conf), [true, sz]);
        return true
      });
      $cfs.bind(cf_e("onBefore", conf) + " " + cf_e("onAfter", conf), function(e, fn) {
        e.stopPropagation();
        var eType = e.type.substr(conf.events.prefix.length);
        if(is_array(fn)) {
          clbk[eType] = fn
        }
        if(typeof fn == "function") {
          clbk[eType].push(fn)
        }
        return clbk[eType]
      });
      $cfs.bind(cf_e("_cfs_currentPosition", conf, false), function(e, fn) {
        e.stopPropagation();
        return $cfs.triggerHandler(cf_e("currentPosition", conf), fn)
      });
      $cfs.bind(cf_e("currentPosition", conf), function(e, fn) {
        e.stopPropagation();
        if(itms.first == 0) {
          var val = 0
        }else {
          var val = itms.total - itms.first
        }
        if(typeof fn == "function") {
          fn.call($tt0, val)
        }
        return val
      });
      $cfs.bind(cf_e("currentPage", conf), function(e, fn) {
        e.stopPropagation();
        var ipp = opts.pagination.items || opts.items.visible;
        var max = Math.ceil(itms.total / ipp - 1);
        if(itms.first == 0) {
          var nr = 0
        }else {
          if(itms.first < itms.total % ipp) {
            var nr = 0
          }else {
            if(itms.first == ipp && !opts.circular) {
              var nr = max
            }else {
              var nr = Math.round((itms.total - itms.first) / ipp)
            }
          }
        }
        if(nr < 0) {
          nr = 0
        }
        if(nr > max) {
          nr = max
        }
        if(typeof fn == "function") {
          fn.call($tt0, nr)
        }
        return nr
      });
      $cfs.bind(cf_e("currentVisible", conf), function(e, fn) {
        e.stopPropagation();
        $i = gi_getCurrentItems($cfs.children(), opts);
        if(typeof fn == "function") {
          fn.call($tt0, $i)
        }
        return $i
      });
      $cfs.bind(cf_e("slice", conf), function(e, f, l, fn) {
        e.stopPropagation();
        var v = [f, l, fn], t = ["number", "number", "function"], a = cf_sortParams(v, t);
        f = typeof a[0] == "number" ? a[0] : 0, l = typeof a[1] == "number" ? a[1] : itms.total, fn = a[2];
        f += itms.first;
        l += itms.first;
        while(f > itms.total) {
          f -= itms.total
        }
        while(l > itms.total) {
          l -= itms.total
        }
        while(f < 0) {
          f += itms.total
        }
        while(l < 0) {
          l += itms.total
        }
        var $iA = $cfs.children();
        if(l > f) {
          var $i = $iA.slice(f, l)
        }else {
          var $i = $iA.slice(f, itms.total).get().concat($iA.slice(0, l).get())
        }
        if(typeof fn == "function") {
          fn.call($tt0, $i)
        }
        return $i
      });
      $cfs.bind(cf_e("isPaused", conf) + " " + cf_e("isStopped", conf) + " " + cf_e("isScrolling", conf), function(e, fn) {
        e.stopPropagation();
        var eType = e.type.substr(conf.events.prefix.length);
        if(typeof fn == "function") {
          fn.call($tt0, crsl[eType])
        }
        return crsl[eType]
      });
      $cfs.bind(cf_e("_cfs_configuration", conf, false), function(e, a, b, c) {
        e.stopPropagation();
        return $cfs.triggerHandler(cf_e("configuration", conf), [a, b, c])
      });
      $cfs.bind(cf_e("configuration", conf), function(e, a, b, c) {
        e.stopPropagation();
        var reInit = false;
        if(typeof a == "function") {
          a.call($tt0, opts)
        }else {
          if(typeof a == "object") {
            opts_orig = $.extend(true, {}, opts_orig, a);
            if(b !== false) {
              reInit = true
            }else {
              opts = $.extend(true, {}, opts, a)
            }
          }else {
            if(typeof a != "undefined") {
              if(typeof b == "function") {
                var val = eval("opts." + a);
                if(typeof val == "undefined") {
                  val = ""
                }
                b.call($tt0, val)
              }else {
                if(typeof b != "undefined") {
                  if(typeof c !== "boolean") {
                    c = true
                  }
                  eval("opts_orig." + a + " = b");
                  if(c !== false) {
                    reInit = true
                  }else {
                    eval("opts." + a + " = b")
                  }
                }else {
                  return eval("opts." + a)
                }
              }
            }
          }
        }
        if(reInit) {
          sz_resetMargin($cfs.children(), opts);
          $cfs._cfs_init(opts_orig);
          $cfs._cfs_bind_buttons();
          var siz = sz_setSizes($cfs, opts, false);
          $cfs.trigger(cf_e("updatePageStatus", conf), [true, siz])
        }
        return opts
      });
      $cfs.bind(cf_e("linkAnchors", conf), function(e, $con, sel) {
        e.stopPropagation();
        if(typeof $con == "undefined" || $con.length == 0) {
          $con = $("body")
        }else {
          if(typeof $con == "string") {
            $con = $($con)
          }
        }
        if(typeof $con != "object") {
          return debug(conf, "Not a valid object.")
        }
        if(typeof sel != "string" || sel.length == 0) {
          sel = "a.caroufredsel"
        }
        $con.find(sel).each(function() {
          var h = this.hash || "";
          if(h.length > 0 && $cfs.children().index($(h)) != -1) {
            $(this).unbind("click").click(function(e) {
              e.preventDefault();
              $cfs.trigger(cf_e("slideTo", conf), h)
            })
          }
        });
        return true
      });
      $cfs.bind(cf_e("updatePageStatus", conf), function(e, build, sizes) {
        e.stopPropagation();
        if(!opts.pagination.container) {
          return
        }
        if(build) {
          var ipp = opts.pagination.items || opts.items.visible, l = Math.ceil(itms.total / ipp);
          if(opts.pagination.anchorBuilder) {
            opts.pagination.container.children().remove();
            opts.pagination.container.each(function() {
              for(var a = 0;a < l;a++) {
                var i = $cfs.children().eq(gn_getItemIndex(a * ipp, 0, true, itms, $cfs));
                $(this).append(opts.pagination.anchorBuilder(a + 1, i))
              }
            })
          }
          opts.pagination.container.each(function() {
            $(this).children().unbind(opts.pagination.event).each(function(a) {
              $(this).bind(opts.pagination.event, function(e) {
                e.preventDefault();
                $cfs.trigger(cf_e("slideTo", conf), [a * ipp, 0, true, opts.pagination])
              })
            })
          })
        }
        opts.pagination.container.each(function() {
          $(this).children().removeClass(cf_c("selected", conf)).eq($cfs.triggerHandler(cf_e("currentPage", conf))).addClass(cf_c("selected", conf))
        });
        return true
      });
      $cfs.bind(cf_e("updateSizes", conf), function(e) {
        var a_itm = $cfs.children(), vI = opts.items.visible;
        if(opts.items.visibleConf.variable) {
          vI = gn_getVisibleItemsNext(a_itm, opts, 0)
        }else {
          if(opts.items.filter != "*") {
            vI = gn_getVisibleItemsNextFilter(a_itm, opts, 0)
          }
        }
        if(!opts.circular && itms.first != 0 && vI > itms.first) {
          if(opts.items.visibleConf.variable) {
            var nI = gn_getVisibleItemsPrev(a_itm, opts, itms.first) - itms.first
          }else {
            if(opts.items.filter != "*") {
              var nI = gn_getVisibleItemsPrevFilter(a_itm, opts, itms.first) - itms.first
            }else {
              nI = opts.items.visible - itms.first
            }
          }
          debug(conf, "Preventing non-circular: sliding " + nI + " items backward.");
          $cfs.trigger("prev", nI)
        }
        opts.items.visible = cf_getItemsAdjust(vI, opts, opts.items.visibleConf.adjust, $tt0);
        return sz_setSizes($cfs, opts)
      });
      $cfs.bind(cf_e("_cfs_destroy", conf, false), function(e, orgOrder) {
        e.stopPropagation();
        $cfs.trigger(cf_e("destroy", conf), orgOrder);
        return true
      });
      $cfs.bind(cf_e("destroy", conf), function(e, orgOrder) {
        e.stopPropagation();
        tmrs = sc_clearTimers(tmrs);
        $cfs.data("cfs_isCarousel", false);
        $cfs.trigger(cf_e("finish", conf));
        if(orgOrder) {
          $cfs.trigger(cf_e("jumpToStart", conf))
        }
        if(opts.usePadding) {
          sz_resetMargin($cfs.children(), opts)
        }
        $cfs.css($cfs.data("cfs_origCss"));
        $cfs._cfs_unbind_events();
        $cfs._cfs_unbind_buttons();
        $wrp.replaceWith($cfs);
        return true
      })
    };
    $cfs._cfs_unbind_events = function() {
      $cfs.unbind(cf_e("", conf));
      $cfs.unbind(cf_e("", conf, false))
    };
    $cfs._cfs_bind_buttons = function() {
      $cfs._cfs_unbind_buttons();
      nv_showNavi(opts, itms.total, conf);
      nv_enableNavi(opts, itms.first, conf);
      if(opts.auto.pauseOnHover) {
        var pC = bt_pauseOnHoverConfig(opts.auto.pauseOnHover);
        $wrp.bind(cf_e("mouseenter", conf, false), function() {
          $cfs.trigger(cf_e("pause", conf), pC)
        }).bind(cf_e("mouseleave", conf, false), function() {
          $cfs.trigger(cf_e("resume", conf))
        })
      }
      if(opts.auto.button) {
        opts.auto.button.bind(cf_e(opts.auto.event, conf, false), function(e) {
          e.preventDefault();
          var ev = false, pC = null;
          if(crsl.isPaused) {
            ev = "play"
          }else {
            if(opts.auto.pauseOnEvent) {
              ev = "pause";
              pC = bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)
            }
          }
          if(ev) {
            $cfs.trigger(cf_e(ev, conf), pC)
          }
        })
      }
      if(opts.prev.button) {
        opts.prev.button.bind(cf_e(opts.prev.event, conf, false), function(e) {
          e.preventDefault();
          $cfs.trigger(cf_e("prev", conf))
        });
        if(opts.prev.pauseOnHover) {
          var pC = bt_pauseOnHoverConfig(opts.prev.pauseOnHover);
          opts.prev.button.bind(cf_e("mouseenter", conf, false), function() {
            $cfs.trigger(cf_e("pause", conf), pC)
          }).bind(cf_e("mouseleave", conf, false), function() {
            $cfs.trigger(cf_e("resume", conf))
          })
        }
      }
      if(opts.next.button) {
        opts.next.button.bind(cf_e(opts.next.event, conf, false), function(e) {
          e.preventDefault();
          $cfs.trigger(cf_e("next", conf))
        });
        if(opts.next.pauseOnHover) {
          var pC = bt_pauseOnHoverConfig(opts.next.pauseOnHover);
          opts.next.button.bind(cf_e("mouseenter", conf, false), function() {
            $cfs.trigger(cf_e("pause", conf), pC)
          }).bind(cf_e("mouseleave", conf, false), function() {
            $cfs.trigger(cf_e("resume", conf))
          })
        }
      }
      if($.fn.mousewheel) {
        if(opts.prev.mousewheel) {
          if(!crsl.mousewheelPrev) {
            crsl.mousewheelPrev = true;
            $wrp.mousewheel(function(e, delta) {
              if(delta > 0) {
                e.preventDefault();
                var num = bt_mousesheelNumber(opts.prev.mousewheel);
                $cfs.trigger(cf_e("prev", conf), num)
              }
            })
          }
        }
        if(opts.next.mousewheel) {
          if(!crsl.mousewheelNext) {
            crsl.mousewheelNext = true;
            $wrp.mousewheel(function(e, delta) {
              if(delta < 0) {
                e.preventDefault();
                var num = bt_mousesheelNumber(opts.next.mousewheel);
                $cfs.trigger(cf_e("next", conf), num)
              }
            })
          }
        }
      }
      if($.fn.touchwipe) {
        var wP = opts.prev.wipe ? function() {
          $cfs.trigger(cf_e("prev", conf))
        } : null, wN = opts.next.wipe ? function() {
          $cfs.trigger(cf_e("next", conf))
        } : null;
        if(wN || wN) {
          if(!crsl.touchwipe) {
            crsl.touchwipe = true;
            var twOps = {"min_move_x":30, "min_move_y":30, "preventDefaultEvents":true};
            switch(opts.direction) {
              case "up":
              ;
              case "down":
                twOps.wipeUp = wN;
                twOps.wipeDown = wP;
                break;
              default:
                twOps.wipeLeft = wN;
                twOps.wipeRight = wP
            }
            $wrp.touchwipe(twOps)
          }
        }
      }
      if(opts.pagination.container) {
        if(opts.pagination.pauseOnHover) {
          var pC = bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);
          opts.pagination.container.bind(cf_e("mouseenter", conf, false), function() {
            $cfs.trigger(cf_e("pause", conf), pC)
          }).bind(cf_e("mouseleave", conf, false), function() {
            $cfs.trigger(cf_e("resume", conf))
          })
        }
      }
      if(opts.prev.key || opts.next.key) {
        $(document).bind(cf_e("keyup", conf, false, true, true), function(e) {
          var k = e.keyCode;
          if(k == opts.next.key) {
            e.preventDefault();
            $cfs.trigger(cf_e("next", conf))
          }
          if(k == opts.prev.key) {
            e.preventDefault();
            $cfs.trigger(cf_e("prev", conf))
          }
        })
      }
      if(opts.pagination.keys) {
        $(document).bind(cf_e("keyup", conf, false, true, true), function(e) {
          var k = e.keyCode;
          if(k >= 49 && k < 58) {
            k = (k - 49) * opts.items.visible;
            if(k <= itms.total) {
              e.preventDefault();
              $cfs.trigger(cf_e("slideTo", conf), [k, 0, true, opts.pagination])
            }
          }
        })
      }
      if(opts.auto.play) {
        $cfs.trigger(cf_e("play", conf), opts.auto.delay)
      }
      if(crsl.upDateOnWindowResize) {
        $(window).bind(cf_e("resize", conf, false, true, true), function(e) {
          $cfs.trigger(cf_e("finish", conf));
          if(opts.auto.pauseOnResize && !crsl.isPaused) {
            $cfs.trigger(cf_e("play", conf))
          }
          sz_resetMargin($cfs.children(), opts);
          $cfs._cfs_init(opts_orig);
          var siz = sz_setSizes($cfs, opts, false);
          $cfs.trigger(cf_e("updatePageStatus", conf), [true, siz])
        })
      }
    };
    $cfs._cfs_unbind_buttons = function() {
      var ns1 = cf_e("", conf), ns2 = cf_e("", conf, false);
      ns3 = cf_e("", conf, false, true, true);
      $(document).unbind(ns3);
      $(window).unbind(ns3);
      $wrp.unbind(ns2);
      if(opts.auto.button) {
        opts.auto.button.unbind(ns2)
      }
      if(opts.prev.button) {
        opts.prev.button.unbind(ns2)
      }
      if(opts.next.button) {
        opts.next.button.unbind(ns2)
      }
      if(opts.pagination.container) {
        opts.pagination.container.unbind(ns2);
        if(opts.pagination.anchorBuilder) {
          opts.pagination.container.children().remove()
        }
      }
      nv_showNavi(opts, "hide", conf);
      nv_enableNavi(opts, "removeClass", conf)
    };
    var crsl = {"direction":"next", "isPaused":true, "isScrolling":false, "isStopped":false, "mousewheelNext":false, "mousewheelPrev":false, "touchwipe":false}, itms = {"total":$cfs.children().length, "first":0}, tmrs = {"timer":null, "auto":null, "queue":null, "startTime":getTime(), "timePassed":0}, scrl = {"isStopped":false, "duration":0, "startTime":0, "easing":"", "anims":[]}, clbk = {"onBefore":[], "onAfter":[]}, queu = [], conf = $.extend(true, {}, $.fn.carouFredSel.configs, configs), opts = 
    {}, opts_orig = options, $wrp = $cfs.wrap("<" + conf.wrapper.element + ' class="' + conf.wrapper.classname + '" />').parent();
    conf.selector = $cfs.selector;
    conf.serialNumber = $.fn.carouFredSel.serialNumber++;
    $cfs._cfs_init(opts_orig, true, starting_position);
    $cfs._cfs_build();
    $cfs._cfs_bind_events();
    $cfs._cfs_bind_buttons();
    if(is_array(opts.items.start)) {
      var start_arr = opts.items.start
    }else {
      var start_arr = [];
      if(opts.items.start != 0) {
        start_arr.push(opts.items.start)
      }
    }
    if(opts.cookie) {
      start_arr.unshift(cf_readCookie(opts.cookie))
    }
    if(start_arr.length > 0) {
      for(var a = 0, l = start_arr.length;a < l;a++) {
        var s = start_arr[a];
        if(s == 0) {
          continue
        }
        if(s === true) {
          s = window.location.hash;
          if(s.length < 1) {
            continue
          }
        }else {
          if(s === "random") {
            s = Math.floor(Math.random() * itms.total)
          }
        }
        if($cfs.triggerHandler(cf_e("slideTo", conf), [s, 0, true, {fx:"none"}])) {
          break
        }
      }
    }
    var siz = sz_setSizes($cfs, opts, false), itm = gi_getCurrentItems($cfs.children(), opts);
    if(opts.onCreate) {
      opts.onCreate.call($tt0, itm, siz)
    }
    $cfs.trigger(cf_e("updatePageStatus", conf), [true, siz]);
    $cfs.trigger(cf_e("linkAnchors", conf));
    return $cfs
  };
  $.fn.carouFredSel.serialNumber = 1;
  $.fn.carouFredSel.defaults = {"synchronise":false, "infinite":true, "circular":true, "responsive":false, "direction":"left", "items":{"start":0}, "scroll":{"easing":"swing", "duration":500, "pauseOnHover":false, "mousewheel":false, "wipe":false, "event":"click", "queue":false}};
  $.fn.carouFredSel.configs = {"debug":false, "events":{"prefix":"", "namespace":"cfs"}, "wrapper":{"element":"div", "classname":"caroufredsel_wrapper"}, "classnames":{}};
  $.fn.carouFredSel.pageAnchorBuilder = function(nr, itm) {
    return'<a href="#"><span>' + nr + "</span></a>"
  };
  function sc_setScroll(d, e) {
    return{anims:[], duration:d, orgDuration:d, easing:e, startTime:getTime()}
  }
  function sc_startScroll(s) {
    if(typeof s.pre == "object") {
      sc_startScroll(s.pre)
    }
    for(var a = 0, l = s.anims.length;a < l;a++) {
      var b = s.anims[a];
      if(!b) {
        continue
      }
      if(b[3]) {
        b[0].stop()
      }
      b[0].animate(b[1], {complete:b[2], duration:s.duration, easing:s.easing})
    }
    if(typeof s.post == "object") {
      sc_startScroll(s.post)
    }
  }
  function sc_stopScroll(s, finish) {
    if(typeof finish != "boolean") {
      finish = true
    }
    if(typeof s.pre == "object") {
      sc_stopScroll(s.pre, finish)
    }
    for(var a = 0, l = s.anims.length;a < l;a++) {
      var b = s.anims[a];
      b[0].stop(true);
      if(finish) {
        b[0].css(b[1]);
        if(typeof b[2] == "function") {
          b[2]()
        }
      }
    }
    if(typeof s.post == "object") {
      sc_stopScroll(s.post, finish)
    }
  }
  function sc_clearTimers(t) {
    if(t.auto) {
      clearTimeout(t.auto)
    }
    return t
  }
  function sc_callCallbacks(cbs, t, args) {
    if(cbs.length) {
      for(var a = 0, l = cbs.length;a < l;a++) {
        cbs[a].apply(t, args)
      }
    }
    return[]
  }
  function fx_fade(sO, c, x, d, f) {
    var o = {"duration":d, "easing":sO.easing};
    if(typeof f == "function") {
      o.complete = f
    }
    c.animate({opacity:x}, o)
  }
  function fx_cover(sc, c1, c2, o, prev) {
    var old_w = ms_getSizes(gi_getOldItemsNext(c1.children(), o), o, true)[0], new_w = ms_getSizes(c2.children(), o, true)[0], cur_l = prev ? -new_w : old_w, css_o = {}, ani_o = {};
    css_o[o.d["width"]] = new_w;
    css_o[o.d["left"]] = cur_l;
    ani_o[o.d["left"]] = 0;
    sc.pre.anims.push([c1, {"opacity":1}]);
    sc.post.anims.push([c2, ani_o, function() {
      $(this).remove()
    }]);
    c2.css(css_o);
    return sc
  }
  function fx_uncover(sc, c1, c2, o, prev, n) {
    var new_w = ms_getSizes(gi_getNewItemsNext(c1.children(), o, n), o, true)[0], old_w = ms_getSizes(c2.children(), o, true)[0], cur_l = prev ? -old_w : new_w, css_o = {}, ani_o = {};
    css_o[o.d["width"]] = old_w;
    css_o[o.d["left"]] = 0;
    ani_o[o.d["left"]] = cur_l;
    sc.post.anims.push([c2, ani_o, function() {
      $(this).remove()
    }]);
    c2.css(css_o);
    return sc
  }
  function nv_showNavi(o, t, c) {
    if(t == "show" || t == "hide") {
      var f = t
    }else {
      if(o.items.minimum >= t) {
        debug(c, "Not enough items: hiding navigation (" + t + " items, " + o.items.minimum + " needed).");
        var f = "hide"
      }else {
        var f = "show"
      }
    }
    var s = f == "show" ? "removeClass" : "addClass", h = cf_c("hidden", c);
    if(o.auto.button) {
      o.auto.button[f]()[s](h)
    }
    if(o.prev.button) {
      o.prev.button[f]()[s](h)
    }
    if(o.next.button) {
      o.next.button[f]()[s](h)
    }
    if(o.pagination.container) {
      o.pagination.container[f]()[s](h)
    }
  }
  function nv_enableNavi(o, f, c) {
    if(o.circular || o.infinite) {
      return
    }
    var fx = f == "removeClass" || f == "addClass" ? f : false, di = cf_c("disabled", c);
    if(o.auto.button && fx) {
      o.auto.button[fx](di)
    }
    if(o.prev.button) {
      var fn = fx || f == 0 ? "addClass" : "removeClass";
      o.prev.button[fn](di)
    }
    if(o.next.button) {
      var fn = fx || f == o.items.visible ? "addClass" : "removeClass";
      o.next.button[fn](di)
    }
  }
  function go_getObject($tt, obj) {
    if(typeof obj == "function") {
      obj = obj.call($tt)
    }
    if(typeof obj == "undefined") {
      obj = {}
    }
    return obj
  }
  function go_getNaviObject($tt, obj, type) {
    if(typeof type != "string") {
      type = ""
    }
    obj = go_getObject($tt, obj);
    if(typeof obj == "string") {
      var temp = cf_getKeyCode(obj);
      if(temp == -1) {
        obj = $(obj)
      }else {
        obj = temp
      }
    }
    if(type == "pagination") {
      if(typeof obj == "boolean") {
        obj = {"keys":obj}
      }
      if(typeof obj.jquery != "undefined") {
        obj = {"container":obj}
      }
      if(typeof obj.container == "function") {
        obj.container = obj.container.call($tt)
      }
      if(typeof obj.container == "string") {
        obj.container = $(obj.container)
      }
      if(typeof obj.items != "number") {
        obj.items = false
      }
    }else {
      if(type == "auto") {
        if(typeof obj.jquery != "undefined") {
          obj = {"button":obj}
        }
        if(typeof obj == "boolean") {
          obj = {"play":obj}
        }
        if(typeof obj == "number") {
          obj = {"pauseDuration":obj}
        }
        if(typeof obj.button == "function") {
          obj.button = obj.button.call($tt)
        }
        if(typeof obj.button == "string") {
          obj.button = $(obj.button)
        }
      }else {
        if(typeof obj.jquery != "undefined") {
          obj = {"button":obj}
        }
        if(typeof obj == "number") {
          obj = {"key":obj}
        }
        if(typeof obj.button == "function") {
          obj.button = obj.button.call($tt)
        }
        if(typeof obj.button == "string") {
          obj.button = $(obj.button)
        }
        if(typeof obj.key == "string") {
          obj.key = cf_getKeyCode(obj.key)
        }
      }
    }
    return obj
  }
  function gn_getItemIndex(num, dev, org, items, $cfs) {
    if(typeof num == "string") {
      if(isNaN(num)) {
        num = $(num)
      }else {
        num = parseInt(num)
      }
    }
    if(typeof num == "object") {
      if(typeof num.jquery == "undefined") {
        num = $(num)
      }
      num = $cfs.children().index(num);
      if(num == -1) {
        num = 0
      }
      if(typeof org != "boolean") {
        org = false
      }
    }else {
      if(typeof org != "boolean") {
        org = true
      }
    }
    if(isNaN(num)) {
      num = 0
    }else {
      num = parseInt(num)
    }
    if(isNaN(dev)) {
      dev = 0
    }else {
      dev = parseInt(dev)
    }
    if(org) {
      num += items.first
    }
    num += dev;
    if(items.total > 0) {
      while(num >= items.total) {
        num -= items.total
      }
      while(num < 0) {
        num += items.total
      }
    }
    return num
  }
  function gn_getVisibleItemsPrev(i, o, s) {
    var t = 0, x = 0;
    for(var a = s;a >= 0;a--) {
      var j = i.eq(a);
      t += j.is(":visible") ? j[o.d["outerWidth"]](true) : 0;
      if(t > o.maxDimention) {
        return x
      }
      if(a == 0) {
        a = i.length
      }
      x++
    }
  }
  function gn_getVisibleItemsPrevFilter(i, o, s) {
    return gn_getItemsPrevFilter(i, o.items.filter, o.items.visibleConf.org, s)
  }
  function gn_getScrollItemsPrevFilter(i, o, s, m) {
    return gn_getItemsPrevFilter(i, o.items.filter, m, s)
  }
  function gn_getItemsPrevFilter(i, f, m, s) {
    var t = 0, x = 0;
    for(var a = s, l = i.length - 1;a >= 0;a--) {
      x++;
      if(x == l) {
        return x
      }
      var j = i.eq(a);
      if(j.is(f)) {
        t++;
        if(t == m) {
          return x
        }
      }
      if(a == 0) {
        a = i.length
      }
    }
  }
  function gn_getVisibleOrg($c, o) {
    return o.items.visibleConf.org || $c.children().slice(0, o.items.visible).filter(o.items.filter).length
  }
  function gn_getVisibleItemsNext(i, o, s) {
    var t = 0, x = 0;
    for(var a = s, l = i.length - 1;a <= l;a++) {
      var j = i.eq(a);
      t += j.is(":visible") ? j[o.d["outerWidth"]](true) : 0;
      if(t > o.maxDimention) {
        return x
      }
      x++;
      if(x == l) {
        return x
      }
      if(a == l) {
        a = -1
      }
    }
  }
  function gn_getVisibleItemsNextTestCircular(i, o, s, l) {
    var v = gn_getVisibleItemsNext(i, o, s);
    if(!o.circular) {
      if(s + v > l) {
        v = l - s
      }
    }
    return v
  }
  function gn_getVisibleItemsNextFilter(i, o, s) {
    return gn_getItemsNextFilter(i, o.items.filter, o.items.visibleConf.org, s, o.circular)
  }
  function gn_getScrollItemsNextFilter(i, o, s, m) {
    return gn_getItemsNextFilter(i, o.items.filter, m + 1, s, o.circular) - 1
  }
  function gn_getItemsNextFilter(i, f, m, s, c) {
    var t = 0, x = 0;
    for(var a = s, l = i.length - 1;a <= l;a++) {
      x++;
      if(x == l) {
        return x
      }
      var j = i.eq(a);
      if(j.is(f)) {
        t++;
        if(t == m) {
          return x
        }
      }
      if(a == l) {
        a = -1
      }
    }
  }
  function gi_getCurrentItems(i, o) {
    return i.slice(0, o.items.visible)
  }
  function gi_getOldItemsPrev(i, o, n) {
    return i.slice(n, o.items.visibleConf.old + n)
  }
  function gi_getNewItemsPrev(i, o) {
    return i.slice(0, o.items.visible)
  }
  function gi_getOldItemsNext(i, o) {
    return i.slice(0, o.items.visibleConf.old)
  }
  function gi_getNewItemsNext(i, o, n) {
    return i.slice(n, o.items.visible + n)
  }
  function sz_resetMargin(i, o, m) {
    var x = typeof m == "boolean" ? m : false;
    if(typeof m != "number") {
      m = 0
    }
    i.each(function() {
      var j = $(this);
      var t = parseInt(j.css(o.d["marginRight"]));
      if(isNaN(t)) {
        t = 0
      }
      j.data("cfs_tempCssMargin", t);
      j.css(o.d["marginRight"], x ? j.data("cfs_tempCssMargin") : m + j.data("cfs_origCssMargin"))
    })
  }
  function sz_setSizes($c, o, p) {
    var $w = $c.parent(), $i = $c.children(), $v = gi_getCurrentItems($i, o), sz = cf_mapWrapperSizes(ms_getSizes($v, o, true), o, p);
    $w.css(sz);
    if(o.usePadding) {
      var p = o.padding, r = p[o.d[1]];
      if(o.align) {
        if(r < 0) {
          r = 0
        }
      }
      var $l = $v.last();
      $l.css(o.d["marginRight"], $l.data("cfs_origCssMargin") + r);
      $c.css(o.d["top"], p[o.d[0]]);
      $c.css(o.d["left"], p[o.d[3]])
    }
    $c.css(o.d["width"], sz[o.d["width"]] + ms_getTotalSize($i, o, "width") * 2);
    $c.css(o.d["height"], ms_getLargestSize($i, o, "height"));
    return sz
  }
  function ms_getSizes(i, o, wrapper) {
    var s1 = ms_getTotalSize(i, o, "width", wrapper), s2 = ms_getLargestSize(i, o, "height", wrapper);
    return[s1, s2]
  }
  function ms_getLargestSize(i, o, dim, wrapper) {
    if(typeof wrapper != "boolean") {
      wrapper = false
    }
    if(typeof o[o.d[dim]] == "number" && wrapper) {
      return o[o.d[dim]]
    }
    if(typeof o.items[o.d[dim]] == "number") {
      return o.items[o.d[dim]]
    }
    var di2 = dim.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight";
    return ms_getTrueLargestSize(i, o, di2)
  }
  function ms_getTrueLargestSize(i, o, dim) {
    var s = 0;
    for(var a = 0, l = i.length;a < l;a++) {
      var j = i.eq(a);
      var m = j.is(":visible") ? j[o.d[dim]](true) : 0;
      if(s < m) {
        s = m
      }
    }
    return s
  }
  function ms_getTrueInnerSize($el, o, dim) {
    if(!$el.is(":visible")) {
      return 0
    }
    var siz = $el[o.d[dim]](), arr = o.d[dim].toLowerCase().indexOf("width") > -1 ? ["paddingLeft", "paddingRight"] : ["paddingTop", "paddingBottom"];
    for(var a = 0, l = arr.length;a < l;a++) {
      var m = parseInt($el.css(arr[a]));
      siz -= isNaN(m) ? 0 : m
    }
    return siz
  }
  function ms_getTotalSize(i, o, dim, wrapper) {
    if(typeof wrapper != "boolean") {
      wrapper = false
    }
    if(typeof o[o.d[dim]] == "number" && wrapper) {
      return o[o.d[dim]]
    }
    if(typeof o.items[o.d[dim]] == "number") {
      return o.items[o.d[dim]] * i.length
    }
    var d = dim.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", s = 0;
    for(var a = 0, l = i.length;a < l;a++) {
      var j = i.eq(a);
      s += j.is(":visible") ? j[o.d[d]](true) : 0
    }
    return s
  }
  function ms_hasVariableSizes(i, o, dim) {
    var s = false, v = false;
    for(var a = 0, l = i.length;a < l;a++) {
      var j = i.eq(a);
      var c = j.is(":visible") ? j[o.d[dim]](true) : 0;
      if(s === false) {
        s = c
      }else {
        if(s != c) {
          v = true
        }
      }
      if(s == 0) {
        v = true
      }
    }
    return v
  }
  function ms_getPaddingBorderMargin(i, o, d) {
    return i[o.d["outer" + d]](true) - ms_getTrueInnerSize(i, o, "inner" + d)
  }
  function ms_isPercentage(x) {
    return typeof x == "string" && x.substr(-1) == "%"
  }
  function ms_getPercentage(s, o) {
    if(ms_isPercentage(o)) {
      o = o.substring(0, o.length - 1);
      if(isNaN(o)) {
        return s
      }
      s *= o / 100
    }
    return s
  }
  function cf_e(n, c, pf, ns, rd) {
    if(typeof pf != "boolean") {
      pf = true
    }
    if(typeof ns != "boolean") {
      ns = true
    }
    if(typeof rd != "boolean") {
      rd = false
    }
    if(pf) {
      n = c.events.prefix + n
    }
    if(ns) {
      n = n + "." + c.events.namespace
    }
    if(ns && rd) {
      n += c.serialNumber
    }
    return n
  }
  function cf_c(n, c) {
    return typeof c.classnames[n] == "string" ? c.classnames[n] : n
  }
  function cf_mapWrapperSizes(ws, o, p) {
    if(typeof p != "boolean") {
      p = true
    }
    var pad = o.usePadding && p ? o.padding : [0, 0, 0, 0];
    var wra = {};
    wra[o.d["width"]] = ws[0] + pad[1] + pad[3];
    wra[o.d["height"]] = ws[1] + pad[0] + pad[2];
    return wra
  }
  function cf_sortParams(vals, typs) {
    var arr = [];
    for(var a = 0, l1 = vals.length;a < l1;a++) {
      for(var b = 0, l2 = typs.length;b < l2;b++) {
        if(typs[b].indexOf(typeof vals[a]) > -1 && typeof arr[b] == "undefined") {
          arr[b] = vals[a];
          break
        }
      }
    }
    return arr
  }
  function cf_getPadding(p) {
    if(typeof p == "undefined") {
      return[0, 0, 0, 0]
    }
    if(typeof p == "number") {
      return[p, p, p, p]
    }else {
      if(typeof p == "string") {
        p = p.split("px").join("").split("em").join("").split(" ")
      }
    }
    if(!is_array(p)) {
      return[0, 0, 0, 0]
    }
    for(var i = 0;i < 4;i++) {
      p[i] = parseInt(p[i])
    }
    switch(p.length) {
      case 0:
        return[0, 0, 0, 0];
      case 1:
        return[p[0], p[0], p[0], p[0]];
      case 2:
        return[p[0], p[1], p[0], p[1]];
      case 3:
        return[p[0], p[1], p[2], p[1]];
      default:
        return[p[0], p[1], p[2], p[3]]
    }
  }
  function cf_getAlignPadding(itm, o) {
    var x = typeof o[o.d["width"]] == "number" ? Math.ceil(o[o.d["width"]] - ms_getTotalSize(itm, o, "width")) : 0;
    switch(o.align) {
      case "left":
        return[0, x];
      case "right":
        return[x, 0];
      case "center":
      ;
      default:
        return[Math.ceil(x / 2), Math.floor(x / 2)]
    }
  }
  function cf_getAdjust(x, o, a, $t) {
    var v = x;
    if(typeof a == "function") {
      v = a.call($t, v)
    }else {
      if(typeof a == "string") {
        var p = a.split("+"), m = a.split("-");
        if(m.length > p.length) {
          var neg = true, sta = m[0], adj = m[1]
        }else {
          var neg = false, sta = p[0], adj = p[1]
        }
        switch(sta) {
          case "even":
            v = x % 2 == 1 ? x - 1 : x;
            break;
          case "odd":
            v = x % 2 == 0 ? x - 1 : x;
            break;
          default:
            v = x;
            break
        }
        adj = parseInt(adj);
        if(!isNaN(adj)) {
          if(neg) {
            adj = -adj
          }
          v += adj
        }
      }
    }
    if(typeof v != "number") {
      v = 1
    }
    if(v < 1) {
      v = 1
    }
    return v
  }
  function cf_getItemsAdjust(x, o, a, $t) {
    return cf_getItemAdjustMinMax(cf_getAdjust(x, o, a, $t), o.items.visibleConf)
  }
  function cf_getItemAdjustMinMax(v, i) {
    if(typeof i.min == "number" && v < i.min) {
      v = i.min
    }
    if(typeof i.max == "number" && v > i.max) {
      v = i.max
    }
    if(v < 1) {
      v = 1
    }
    return v
  }
  function cf_getSynchArr(s) {
    if(!is_array(s)) {
      s = [[s]]
    }
    if(!is_array(s[0])) {
      s = [s]
    }
    for(var j = 0, l = s.length;j < l;j++) {
      if(typeof s[j][0] == "string") {
        s[j][0] = $(s[j][0])
      }
      if(typeof s[j][1] != "boolean") {
        s[j][1] = true
      }
      if(typeof s[j][2] != "boolean") {
        s[j][2] = true
      }
      if(typeof s[j][3] != "number") {
        s[j][3] = 0
      }
    }
    return s
  }
  function cf_getKeyCode(k) {
    if(k == "right") {
      return 39
    }
    if(k == "left") {
      return 37
    }
    if(k == "up") {
      return 38
    }
    if(k == "down") {
      return 40
    }
    return-1
  }
  function cf_setCookie(n, v) {
    if(n) {
      document.cookie = n + "=" + v + "; path=/"
    }
  }
  function cf_readCookie(n) {
    n += "=";
    var ca = document.cookie.split(";");
    for(var a = 0, l = ca.length;a < l;a++) {
      var c = ca[a];
      while(c.charAt(0) == " ") {
        c = c.substring(1, c.length)
      }
      if(c.indexOf(n) == 0) {
        return c.substring(n.length, c.length)
      }
    }
    return 0
  }
  function bt_pauseOnHoverConfig(p) {
    if(p && typeof p == "string") {
      var i = p.indexOf("immediate") > -1 ? true : false, r = p.indexOf("resume") > -1 ? true : false
    }else {
      var i = r = false
    }
    return[i, r]
  }
  function bt_mousesheelNumber(mw) {
    return typeof mw == "number" ? mw : null
  }
  function is_array(a) {
    return typeof a == "object" && a instanceof Array
  }
  function getTime() {
    return(new Date).getTime()
  }
  function debug(d, m) {
    if(typeof d == "object") {
      var s = " (" + d.selector + ")";
      d = d.debug
    }else {
      var s = ""
    }
    if(!d) {
      return false
    }
    if(typeof m == "string") {
      m = "carouFredSel" + s + ": " + m
    }else {
      m = ["carouFredSel" + s + ":", m]
    }
    if(window.console && window.console.log) {
      window.console.log(m)
    }
    return false
  }
  $.fn.caroufredsel = function(o, c) {
    return this.carouFredSel(o, c)
  };
  $.extend($.easing, {"quadratic":function(t) {
    var t2 = t * t;
    return t * (-t2 * t + 4 * t2 - 6 * t + 4)
  }, "cubic":function(t) {
    return t * (4 * t * t - 9 * t + 6)
  }, "elastic":function(t) {
    var t2 = t * t;
    return t * (33 * t2 * t2 - 106 * t2 * t + 126 * t2 - 67 * t + 15)
  }})
})(jQuery);
(function($) {
  var tmp, loading, overlay, wrap, outer, content, close, title, nav_left, nav_right, selectedIndex = 0, selectedOpts = {}, selectedArray = [], currentIndex = 0, currentOpts = {}, currentArray = [], ajaxLoader = null, imgPreloader = new Image, imgRegExp = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i, swfRegExp = /[^\.]\.(swf)\s*$/i, loadingTimer, loadingFrame = 1, titleHeight = 0, titleStr = "", start_pos, final_pos, busy = false, fx = $.extend($("<div/>")[0], {prop:0}), isIE6 = $.browser.msie && $.browser.version < 
  7 && !window.XMLHttpRequest, _abort = function() {
    loading.hide();
    imgPreloader.onerror = imgPreloader.onload = null;
    if(ajaxLoader) {
      ajaxLoader.abort()
    }
    tmp.empty()
  }, _error = function() {
    if(false === selectedOpts.onError(selectedArray, selectedIndex, selectedOpts)) {
      loading.hide();
      busy = false;
      return
    }
    selectedOpts.titleShow = false;
    selectedOpts.width = "auto";
    selectedOpts.height = "auto";
    tmp.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');
    _process_inline()
  }, _start = function() {
    var obj = selectedArray[selectedIndex], href, type, title, str, emb, ret;
    _abort();
    selectedOpts = $.extend({}, $.fn.fancybox.defaults, typeof $(obj).data("fancybox") == "undefined" ? selectedOpts : $(obj).data("fancybox"));
    ret = selectedOpts.onStart(selectedArray, selectedIndex, selectedOpts);
    if(ret === false) {
      busy = false;
      return
    }else {
      if(typeof ret == "object") {
        selectedOpts = $.extend(selectedOpts, ret)
      }
    }
    title = selectedOpts.title || (obj.nodeName ? $(obj).attr("title") : obj.title) || "";
    if(obj.nodeName && !selectedOpts.orig) {
      selectedOpts.orig = $(obj).children("img:first").length ? $(obj).children("img:first") : $(obj)
    }
    if(title === "" && selectedOpts.orig && selectedOpts.titleFromAlt) {
      title = selectedOpts.orig.attr("alt")
    }
    href = selectedOpts.href || (obj.nodeName ? $(obj).attr("href") : obj.href) || null;
    if(/^(?:javascript)/i.test(href) || href == "#") {
      href = null
    }
    if(selectedOpts.type) {
      type = selectedOpts.type;
      if(!href) {
        href = selectedOpts.content
      }
    }else {
      if(selectedOpts.content) {
        type = "html"
      }else {
        if(href) {
          if(href.match(imgRegExp)) {
            type = "image"
          }else {
            if(href.match(swfRegExp)) {
              type = "swf"
            }else {
              if($(obj).hasClass("iframe")) {
                type = "iframe"
              }else {
                if(href.indexOf("#") === 0) {
                  type = "inline"
                }else {
                  type = "ajax"
                }
              }
            }
          }
        }
      }
    }
    if(!type) {
      _error();
      return
    }
    if(type == "inline") {
      obj = href.substr(href.indexOf("#"));
      type = $(obj).length > 0 ? "inline" : "ajax"
    }
    selectedOpts.type = type;
    selectedOpts.href = href;
    selectedOpts.title = title;
    if(selectedOpts.autoDimensions) {
      if(selectedOpts.type == "html" || selectedOpts.type == "inline" || selectedOpts.type == "ajax") {
        selectedOpts.width = "auto";
        selectedOpts.height = "auto"
      }else {
        selectedOpts.autoDimensions = false
      }
    }
    if(selectedOpts.modal) {
      selectedOpts.overlayShow = true;
      selectedOpts.hideOnOverlayClick = false;
      selectedOpts.hideOnContentClick = false;
      selectedOpts.enableEscapeButton = false;
      selectedOpts.showCloseButton = false
    }
    selectedOpts.padding = parseInt(selectedOpts.padding, 10);
    selectedOpts.margin = parseInt(selectedOpts.margin, 10);
    tmp.css("padding", selectedOpts.padding + selectedOpts.margin);
    $(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change", function() {
      $(this).replaceWith(content.children())
    });
    switch(type) {
      case "html":
        tmp.html(selectedOpts.content);
        _process_inline();
        break;
      case "inline":
        if($(obj).parent().is("#fancybox-content") === true) {
          busy = false;
          return
        }
        $('<div class="fancybox-inline-tmp" />').hide().insertBefore($(obj)).bind("fancybox-cleanup", function() {
          $(this).replaceWith(content.children())
        }).bind("fancybox-cancel", function() {
          $(this).replaceWith(tmp.children())
        });
        $(obj).appendTo(tmp);
        _process_inline();
        break;
      case "image":
        busy = false;
        $.fancybox.showActivity();
        imgPreloader = new Image;
        imgPreloader.onerror = function() {
          _error()
        };
        imgPreloader.onload = function() {
          busy = true;
          imgPreloader.onerror = imgPreloader.onload = null;
          _process_image()
        };
        imgPreloader.src = href;
        break;
      case "swf":
        selectedOpts.scrolling = "no";
        str = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + selectedOpts.width + '" height="' + selectedOpts.height + '"><param name="movie" value="' + href + '"></param>';
        emb = "";
        $.each(selectedOpts.swf, function(name, val) {
          str += '<param name="' + name + '" value="' + val + '"></param>';
          emb += " " + name + '="' + val + '"'
        });
        str += '<embed src="' + href + '" type="application/x-shockwave-flash" width="' + selectedOpts.width + '" height="' + selectedOpts.height + '"' + emb + "></embed></object>";
        tmp.html(str);
        _process_inline();
        break;
      case "ajax":
        busy = false;
        $.fancybox.showActivity();
        selectedOpts.ajax.win = selectedOpts.ajax.success;
        ajaxLoader = $.ajax($.extend({}, selectedOpts.ajax, {url:href, data:selectedOpts.ajax.data || {}, error:function(XMLHttpRequest, textStatus, errorThrown) {
          if(XMLHttpRequest.status > 0) {
            _error()
          }
        }, success:function(data, textStatus, XMLHttpRequest) {
          var o = typeof XMLHttpRequest == "object" ? XMLHttpRequest : ajaxLoader;
          if(o.status == 200) {
            if(typeof selectedOpts.ajax.win == "function") {
              ret = selectedOpts.ajax.win(href, data, textStatus, XMLHttpRequest);
              if(ret === false) {
                loading.hide();
                return
              }else {
                if(typeof ret == "string" || typeof ret == "object") {
                  data = ret
                }
              }
            }
            tmp.html(data);
            _process_inline()
          }
        }}));
        break;
      case "iframe":
        _show();
        break
    }
  }, _process_inline = function() {
    var w = selectedOpts.width, h = selectedOpts.height;
    if(w.toString().indexOf("%") > -1) {
      w = parseInt(($(window).width() - selectedOpts.margin * 2) * parseFloat(w) / 100, 10) + "px"
    }else {
      w = w == "auto" ? "auto" : w + "px"
    }
    if(h.toString().indexOf("%") > -1) {
      h = parseInt(($(window).height() - selectedOpts.margin * 2) * parseFloat(h) / 100, 10) + "px"
    }else {
      h = h == "auto" ? "auto" : h + "px"
    }
    tmp.wrapInner('<div style="width:' + w + ";height:" + h + ";overflow: " + (selectedOpts.scrolling == "auto" ? "auto" : selectedOpts.scrolling == "yes" ? "scroll" : "hidden") + ';position:relative;"></div>');
    selectedOpts.width = tmp.width();
    selectedOpts.height = tmp.height();
    _show()
  }, _process_image = function() {
    selectedOpts.width = imgPreloader.width;
    selectedOpts.height = imgPreloader.height;
    $("<img />").attr({"id":"fancybox-img", "src":imgPreloader.src, "alt":selectedOpts.title}).appendTo(tmp);
    _show()
  }, _show = function() {
    $(".joyride-close-tip").click();
    var pos, equal;
    loading.hide();
    if(wrap.is(":visible") && false === currentOpts.onCleanup(currentArray, currentIndex, currentOpts)) {
      $.event.trigger("fancybox-cancel");
      busy = false;
      return
    }
    busy = true;
    $(content.add(overlay)).unbind();
    $(window).unbind("resize.fb scroll.fb");
    $(document).unbind("keydown.fb");
    if(wrap.is(":visible") && currentOpts.titlePosition !== "outside") {
      wrap.css("height", wrap.height())
    }
    currentArray = selectedArray;
    currentIndex = selectedIndex;
    currentOpts = selectedOpts;
    if(currentOpts.overlayShow) {
      overlay.css({"background-color":currentOpts.overlayColor, "opacity":currentOpts.overlayOpacity, "cursor":currentOpts.hideOnOverlayClick ? "pointer" : "auto", "height":$(document).height()});
      if(!overlay.is(":visible")) {
        if(isIE6) {
          $("select:not(#fancybox-tmp select)").filter(function() {
            return this.style.visibility !== "hidden"
          }).css({"visibility":"hidden"}).one("fancybox-cleanup", function() {
            this.style.visibility = "inherit"
          })
        }
        overlay.show()
      }
    }else {
      overlay.hide()
    }
    final_pos = _get_zoom_to();
    _process_title();
    if(wrap.is(":visible")) {
      $(close.add(nav_left).add(nav_right)).hide();
      pos = wrap.position(), start_pos = {top:pos.top, left:pos.left, width:wrap.width(), height:wrap.height()};
      equal = start_pos.width == final_pos.width && start_pos.height == final_pos.height;
      content.fadeTo(currentOpts.changeFade, 0.3, function() {
        var finish_resizing = function() {
          content.html(tmp.contents()).fadeTo(currentOpts.changeFade, 1, _finish)
        };
        $.event.trigger("fancybox-change");
        content.empty().removeAttr("filter").css({"border-width":currentOpts.padding, "width":final_pos.width - currentOpts.padding * 2, "height":selectedOpts.autoDimensions ? "auto" : final_pos.height - titleHeight - currentOpts.padding * 2});
        if(equal) {
          finish_resizing()
        }else {
          fx.prop = 0;
          $(fx).animate({prop:1}, {duration:currentOpts.changeSpeed, easing:currentOpts.easingChange, step:_draw, complete:finish_resizing})
        }
      });
      return
    }
    wrap.removeAttr("style");
    content.css("border-width", currentOpts.padding);
    if(currentOpts.transitionIn == "elastic") {
      start_pos = _get_zoom_from();
      content.html(tmp.contents());
      wrap.show();
      if(currentOpts.opacity) {
        final_pos.opacity = 0
      }
      fx.prop = 0;
      $(fx).animate({prop:1}, {duration:currentOpts.speedIn, easing:currentOpts.easingIn, step:_draw, complete:_finish});
      return
    }
    if(currentOpts.titlePosition == "inside" && titleHeight > 0) {
      title.show()
    }
    content.css({"width":final_pos.width - currentOpts.padding * 2, "height":selectedOpts.autoDimensions ? "auto" : final_pos.height - titleHeight - currentOpts.padding * 2}).html(tmp.contents());
    wrap.css(final_pos).fadeIn(currentOpts.transitionIn == "none" ? 0 : currentOpts.speedIn, _finish)
  }, _format_title = function(title) {
    if(title && title.length) {
      if(currentOpts.titlePosition == "float") {
        return'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + title + '</td><td id="fancybox-title-float-right"></td></tr></table>'
      }
      return'<div id="fancybox-title-' + currentOpts.titlePosition + '">' + title + "</div>"
    }
    return false
  }, _process_title = function() {
    titleStr = currentOpts.title || "";
    titleHeight = 0;
    title.empty().removeAttr("style").removeClass();
    if(currentOpts.titleShow === false) {
      title.hide();
      return
    }
    titleStr = $.isFunction(currentOpts.titleFormat) ? currentOpts.titleFormat(titleStr, currentArray, currentIndex, currentOpts) : _format_title(titleStr);
    if(!titleStr || titleStr === "") {
      title.hide();
      return
    }
    title.addClass("fancybox-title-" + currentOpts.titlePosition).html(titleStr).appendTo("body").show();
    switch(currentOpts.titlePosition) {
      case "inside":
        title.css({"width":final_pos.width - currentOpts.padding * 2, "marginLeft":currentOpts.padding, "marginRight":currentOpts.padding});
        titleHeight = title.outerHeight(true);
        title.appendTo(outer);
        final_pos.height += titleHeight;
        break;
      case "over":
        title.css({"marginLeft":currentOpts.padding, "width":final_pos.width - currentOpts.padding * 2, "bottom":currentOpts.padding}).appendTo(outer);
        break;
      case "float":
        title.css("left", parseInt((title.width() - final_pos.width - 40) / 2, 10) * -1).appendTo(wrap);
        break;
      default:
        title.css({"width":final_pos.width - currentOpts.padding * 2, "paddingLeft":currentOpts.padding, "paddingRight":currentOpts.padding}).appendTo(wrap);
        break
    }
    title.hide()
  }, _set_navigation = function() {
    if(currentOpts.enableEscapeButton || currentOpts.enableKeyboardNav) {
      $(document).bind("keydown.fb", function(e) {
        if(e.keyCode == 27 && currentOpts.enableEscapeButton) {
          e.preventDefault();
          $.fancybox.close()
        }else {
          if((e.keyCode == 37 || e.keyCode == 39) && currentOpts.enableKeyboardNav && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA" && e.target.tagName !== "SELECT") {
            e.preventDefault();
            $.fancybox[e.keyCode == 37 ? "prev" : "next"]()
          }
        }
      })
    }
    if(!currentOpts.showNavArrows) {
      nav_left.hide();
      nav_right.hide();
      return
    }
    if(currentOpts.cyclic && currentArray.length > 1 || currentIndex !== 0) {
      nav_left.show()
    }
    if(currentOpts.cyclic && currentArray.length > 1 || currentIndex != currentArray.length - 1) {
      nav_right.show()
    }
  }, _finish = function() {
    if(!$.support.opacity) {
      content.get(0).style.removeAttribute("filter");
      wrap.get(0).style.removeAttribute("filter")
    }
    if(selectedOpts.autoDimensions) {
      content.css("height", "auto")
    }
    wrap.css("height", "auto");
    if(titleStr && titleStr.length) {
      title.show()
    }
    if(currentOpts.showCloseButton) {
      close.show()
    }
    _set_navigation();
    if(currentOpts.hideOnContentClick) {
      content.bind("click", $.fancybox.close)
    }
    if(currentOpts.hideOnOverlayClick) {
      overlay.bind("click", $.fancybox.close)
    }
    $(window).bind("resize.fb", $.fancybox.resize);
    if(currentOpts.centerOnScroll) {
      $(window).bind("scroll.fb", $.fancybox.center)
    }
    if(currentOpts.type == "iframe") {
      $('<iframe id="fancybox-frame" name="fancybox-frame' + (new Date).getTime() + '" frameborder="0" hspace="0" ' + ($.browser.msie ? 'allowtransparency="true""' : "") + ' scrolling="' + selectedOpts.scrolling + '" src="' + currentOpts.href + '"></iframe>').appendTo(content)
    }
    wrap.show();
    busy = false;
    $.fancybox.center();
    currentOpts.onComplete(currentArray, currentIndex, currentOpts);
    _preload_images()
  }, _preload_images = function() {
    var href, objNext;
    if(currentArray.length - 1 > currentIndex) {
      href = currentArray[currentIndex + 1].href;
      if(typeof href !== "undefined" && href.match(imgRegExp)) {
        objNext = new Image;
        objNext.src = href
      }
    }
    if(currentIndex > 0) {
      href = currentArray[currentIndex - 1].href;
      if(typeof href !== "undefined" && href.match(imgRegExp)) {
        objNext = new Image;
        objNext.src = href
      }
    }
  }, _draw = function(pos) {
    var dim = {width:parseInt(start_pos.width + (final_pos.width - start_pos.width) * pos, 10), height:parseInt(start_pos.height + (final_pos.height - start_pos.height) * pos, 10), top:parseInt(start_pos.top + (final_pos.top - start_pos.top) * pos, 10), left:parseInt(start_pos.left + (final_pos.left - start_pos.left) * pos, 10)};
    if(typeof final_pos.opacity !== "undefined") {
      dim.opacity = pos < 0.5 ? 0.5 : pos
    }
    wrap.css(dim);
    content.css({"width":dim.width - currentOpts.padding * 2, "height":dim.height - titleHeight * pos - currentOpts.padding * 2})
  }, _get_viewport = function() {
    return[$(window).width() - currentOpts.margin * 2, $(window).height() - currentOpts.margin * 2, $(document).scrollLeft() + currentOpts.margin, $(document).scrollTop() + currentOpts.margin]
  }, _get_zoom_to = function() {
    var view = _get_viewport(), to = {}, resize = currentOpts.autoScale, double_padding = currentOpts.padding * 2, ratio;
    if(currentOpts.width.toString().indexOf("%") > -1) {
      to.width = parseInt(view[0] * parseFloat(currentOpts.width) / 100, 10)
    }else {
      to.width = currentOpts.width + double_padding
    }
    if(currentOpts.height.toString().indexOf("%") > -1) {
      to.height = parseInt(view[1] * parseFloat(currentOpts.height) / 100, 10)
    }else {
      to.height = currentOpts.height + double_padding
    }
    if(resize && (to.width > view[0] || to.height > view[1])) {
      if(selectedOpts.type == "image" || selectedOpts.type == "swf") {
        ratio = currentOpts.width / currentOpts.height;
        if(to.width > view[0]) {
          to.width = view[0];
          to.height = parseInt((to.width - double_padding) / ratio + double_padding, 10)
        }
        if(to.height > view[1]) {
          to.height = view[1];
          to.width = parseInt((to.height - double_padding) * ratio + double_padding, 10)
        }
      }else {
        to.width = Math.min(to.width, view[0]);
        to.height = Math.min(to.height, view[1])
      }
    }
    to.top = parseInt(Math.max(view[3] - 20, view[3] + (view[1] - to.height - 40) * 0.5), 10);
    to.left = parseInt(Math.max(view[2] - 20, view[2] + (view[0] - to.width - 40) * 0.5), 10);
    return to
  }, _get_obj_pos = function(obj) {
    var pos = obj.offset();
    pos.top += parseInt(obj.css("paddingTop"), 10) || 0;
    pos.left += parseInt(obj.css("paddingLeft"), 10) || 0;
    pos.top += parseInt(obj.css("border-top-width"), 10) || 0;
    pos.left += parseInt(obj.css("border-left-width"), 10) || 0;
    pos.width = obj.width();
    pos.height = obj.height();
    return pos
  }, _get_zoom_from = function() {
    var orig = selectedOpts.orig ? $(selectedOpts.orig) : false, from = {}, pos, view;
    if(orig && orig.length) {
      pos = _get_obj_pos(orig);
      from = {width:pos.width + currentOpts.padding * 2, height:pos.height + currentOpts.padding * 2, top:pos.top - currentOpts.padding - 20, left:pos.left - currentOpts.padding - 20}
    }else {
      view = _get_viewport();
      from = {width:currentOpts.padding * 2, height:currentOpts.padding * 2, top:parseInt(view[3] + view[1] * 0.5, 10), left:parseInt(view[2] + view[0] * 0.5, 10)}
    }
    return from
  }, _animate_loading = function() {
    if(!loading.is(":visible")) {
      clearInterval(loadingTimer);
      return
    }
    $("div", loading).css("top", loadingFrame * -40 + "px");
    loadingFrame = (loadingFrame + 1) % 12
  };
  $.fn.fancybox = function(options) {
    if(!$(this).length) {
      return this
    }
    $(this).data("fancybox", $.extend({}, options, $.metadata ? $(this).metadata() : {})).unbind("click.fb").bind("click.fb", function(e) {
      e.preventDefault();
      if(busy) {
        return
      }
      busy = true;
      $(this).blur();
      selectedArray = [];
      selectedIndex = 0;
      var rel = $(this).attr("rel") || "";
      if(!rel || rel == "" || rel === "nofollow") {
        selectedArray.push(this)
      }else {
        selectedArray = $("a[rel=" + rel + "], area[rel=" + rel + "]");
        selectedIndex = selectedArray.index(this)
      }
      _start();
      return
    });
    return this
  };
  $.fancybox = function(obj) {
    var opts;
    if(busy) {
      return
    }
    busy = true;
    opts = typeof arguments[1] !== "undefined" ? arguments[1] : {};
    selectedArray = [];
    selectedIndex = parseInt(opts.index, 10) || 0;
    if($.isArray(obj)) {
      for(var i = 0, j = obj.length;i < j;i++) {
        if(typeof obj[i] == "object") {
          $(obj[i]).data("fancybox", $.extend({}, opts, obj[i]))
        }else {
          obj[i] = $({}).data("fancybox", $.extend({content:obj[i]}, opts))
        }
      }
      selectedArray = jQuery.merge(selectedArray, obj)
    }else {
      if(typeof obj == "object") {
        $(obj).data("fancybox", $.extend({}, opts, obj))
      }else {
        obj = $({}).data("fancybox", $.extend({content:obj}, opts))
      }
      selectedArray.push(obj)
    }
    if(selectedIndex > selectedArray.length || selectedIndex < 0) {
      selectedIndex = 0
    }
    _start()
  };
  $.fancybox.showActivity = function() {
    clearInterval(loadingTimer);
    loading.show();
    loadingTimer = setInterval(_animate_loading, 66)
  };
  $.fancybox.hideActivity = function() {
    loading.hide()
  };
  $.fancybox.next = function() {
    return $.fancybox.pos(currentIndex + 1)
  };
  $.fancybox.prev = function() {
    return $.fancybox.pos(currentIndex - 1)
  };
  $.fancybox.pos = function(pos) {
    if(busy) {
      return
    }
    pos = parseInt(pos);
    selectedArray = currentArray;
    if(pos > -1 && pos < currentArray.length) {
      selectedIndex = pos;
      _start()
    }else {
      if(currentOpts.cyclic && currentArray.length > 1) {
        selectedIndex = pos >= currentArray.length ? 0 : currentArray.length - 1;
        _start()
      }
    }
    return
  };
  $.fancybox.cancel = function() {
    if(busy) {
      return
    }
    busy = true;
    $.event.trigger("fancybox-cancel");
    _abort();
    selectedOpts.onCancel(selectedArray, selectedIndex, selectedOpts);
    busy = false
  };
  $.fancybox.close = function() {
    $(".joyride-close-tip").click();
    if(busy || wrap.is(":hidden")) {
      return
    }
    busy = true;
    if(currentOpts && false === currentOpts.onCleanup(currentArray, currentIndex, currentOpts)) {
      busy = false;
      return
    }
    _abort();
    $(close.add(nav_left).add(nav_right)).hide();
    $(content.add(overlay)).unbind();
    $(window).unbind("resize.fb scroll.fb");
    $(document).unbind("keydown.fb");
    content.find("iframe").attr("src", isIE6 && /^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank");
    if(currentOpts.titlePosition !== "inside") {
      title.empty()
    }
    wrap.stop();
    function _cleanup() {
      overlay.fadeOut("fast");
      title.empty().hide();
      wrap.hide();
      $.event.trigger("fancybox-cleanup");
      content.empty();
      currentOpts.onClosed(currentArray, currentIndex, currentOpts);
      currentArray = selectedOpts = [];
      currentIndex = selectedIndex = 0;
      currentOpts = selectedOpts = {};
      busy = false
    }
    if(currentOpts.transitionOut == "elastic") {
      start_pos = _get_zoom_from();
      var pos = wrap.position();
      final_pos = {top:pos.top, left:pos.left, width:wrap.width(), height:wrap.height()};
      if(currentOpts.opacity) {
        final_pos.opacity = 1
      }
      title.empty().hide();
      fx.prop = 1;
      $(fx).animate({prop:0}, {duration:currentOpts.speedOut, easing:currentOpts.easingOut, step:_draw, complete:_cleanup})
    }else {
      wrap.fadeOut(currentOpts.transitionOut == "none" ? 0 : currentOpts.speedOut, _cleanup)
    }
  };
  $.fancybox.resize = function() {
    if(overlay.is(":visible")) {
      overlay.css("height", $(document).height())
    }
    $.fancybox.center(true)
  };
  $.fancybox.center = function() {
    var view, align;
    if(busy) {
      return
    }
    align = arguments[0] === true ? 1 : 0;
    view = _get_viewport();
    if(!align && (wrap.width() > view[0] || wrap.height() > view[1])) {
      return
    }
    wrap.stop().animate({"top":parseInt(Math.max(view[3] - 20, view[3] + (view[1] - content.height() - 40) * 0.5 - currentOpts.padding)), "left":parseInt(Math.max(view[2] - 20, view[2] + (view[0] - content.width() - 40) * 0.5 - currentOpts.padding))}, typeof arguments[0] == "number" ? arguments[0] : 200)
  };
  $.fancybox.init = function() {
    if($("#fancybox-wrap").length) {
      return
    }
    $("body").append(tmp = $('<div id="fancybox-tmp"></div>'), loading = $('<div id="fancybox-loading"><div></div></div>'), overlay = $('<div id="fancybox-overlay"></div>'), wrap = $('<div id="fancybox-wrap"></div>'));
    outer = $('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(wrap);
    outer.append(content = $('<div id="fancybox-content"></div>'), close = $('<a id="fancybox-close"></a>'), title = $('<div id="fancybox-title"></div>'), nav_left = $('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), nav_right = $('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));
    close.click($.fancybox.close);
    loading.click($.fancybox.cancel);
    nav_left.click(function(e) {
      e.preventDefault();
      $.fancybox.prev()
    });
    nav_right.click(function(e) {
      e.preventDefault();
      $.fancybox.next()
    });
    if($.fn.mousewheel) {
      wrap.bind("mousewheel.fb", function(e, delta) {
        if(busy) {
          e.preventDefault()
        }else {
          if($(e.target).get(0).clientHeight == 0 || $(e.target).get(0).scrollHeight === $(e.target).get(0).clientHeight) {
            e.preventDefault();
            $.fancybox[delta > 0 ? "prev" : "next"]()
          }
        }
      })
    }
    if(!$.support.opacity) {
      wrap.addClass("fancybox-ie")
    }
    if(isIE6) {
      loading.addClass("fancybox-ie6");
      wrap.addClass("fancybox-ie6");
      $('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank") + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(outer)
    }
  };
  $.fn.fancybox.defaults = {padding:10, margin:40, opacity:false, modal:false, cyclic:false, scrolling:"auto", width:560, height:340, autoScale:true, autoDimensions:true, centerOnScroll:false, ajax:{}, swf:{wmode:"transparent"}, hideOnOverlayClick:true, hideOnContentClick:false, overlayShow:true, overlayOpacity:0.7, overlayColor:"#777", titleShow:true, titlePosition:"float", titleFormat:null, titleFromAlt:false, transitionIn:"fade", transitionOut:"fade", speedIn:300, speedOut:300, changeSpeed:300, 
  changeFade:"fast", easingIn:"swing", easingOut:"swing", showCloseButton:true, showNavArrows:true, enableEscapeButton:true, enableKeyboardNav:true, onStart:function() {
  }, onCancel:function() {
  }, onComplete:function() {
  }, onCleanup:function() {
  }, onClosed:function() {
  }, onError:function() {
  }};
  $(document).ready(function() {
    $.fancybox.init()
  })
})(jQuery);
(function($) {
  var feature = {};
  feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
  feature.formdata = window.FormData !== undefined;
  $.fn.ajaxSubmit = function(options) {
    if(!this.length) {
      log("ajaxSubmit: skipping submit process - no element selected");
      return this
    }
    var method, action, url, $form = this;
    if(typeof options == "function") {
      options = {success:options}
    }
    method = this.attr("method");
    action = this.attr("action");
    url = typeof action === "string" ? $.trim(action) : "";
    url = url || window.location.href || "";
    if(url) {
      url = (url.match(/^([^#]+)/) || [])[1]
    }
    options = $.extend(true, {url:url, success:$.ajaxSettings.success, type:method || "GET", iframeSrc:/^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"}, options);
    var veto = {};
    this.trigger("form-pre-serialize", [this, options, veto]);
    if(veto.veto) {
      log("ajaxSubmit: submit vetoed via form-pre-serialize trigger");
      return this
    }
    if(options.beforeSerialize && options.beforeSerialize(this, options) === false) {
      log("ajaxSubmit: submit aborted via beforeSerialize callback");
      return this
    }
    var traditional = options.traditional;
    if(traditional === undefined) {
      traditional = $.ajaxSettings.traditional
    }
    var elements = [];
    var qx, a = this.formToArray(options.semantic, elements);
    if(options.data) {
      options.extraData = options.data;
      qx = $.param(options.data, traditional)
    }
    if(options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
      log("ajaxSubmit: submit aborted via beforeSubmit callback");
      return this
    }
    this.trigger("form-submit-validate", [a, this, options, veto]);
    if(veto.veto) {
      log("ajaxSubmit: submit vetoed via form-submit-validate trigger");
      return this
    }
    var q = $.param(a, traditional);
    if(qx) {
      q = q ? q + "&" + qx : qx
    }
    if(options.type.toUpperCase() == "GET") {
      options.url += (options.url.indexOf("?") >= 0 ? "&" : "?") + q;
      options.data = null
    }else {
      options.data = q
    }
    var callbacks = [];
    if(options.resetForm) {
      callbacks.push(function() {
        $form.resetForm()
      })
    }
    if(options.clearForm) {
      callbacks.push(function() {
        $form.clearForm(options.includeHidden)
      })
    }
    if(!options.dataType && options.target) {
      var oldSuccess = options.success || function() {
      };
      callbacks.push(function(data) {
        var fn = options.replaceTarget ? "replaceWith" : "html";
        $(options.target)[fn](data).each(oldSuccess, arguments)
      })
    }else {
      if(options.success) {
        callbacks.push(options.success)
      }
    }
    options.success = function(data, status, xhr) {
      var context = options.context || options;
      for(var i = 0, max = callbacks.length;i < max;i++) {
        callbacks[i].apply(context, [data, status, xhr || $form, $form])
      }
    };
    var fileInputs = $("input:file:enabled[value]", this);
    var hasFileInputs = fileInputs.length > 0;
    var mp = "multipart/form-data";
    var multipart = $form.attr("enctype") == mp || $form.attr("encoding") == mp;
    var fileAPI = feature.fileapi && feature.formdata;
    log("fileAPI :" + fileAPI);
    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;
    if(options.iframe !== false && (options.iframe || shouldUseFrame)) {
      if(options.closeKeepAlive) {
        $.get(options.closeKeepAlive, function() {
          fileUploadIframe(a)
        })
      }else {
        fileUploadIframe(a)
      }
    }else {
      if((hasFileInputs || multipart) && fileAPI) {
        fileUploadXhr(a)
      }else {
        $.ajax(options)
      }
    }
    for(var k = 0;k < elements.length;k++) {
      elements[k] = null
    }
    this.trigger("form-submit-notify", [this, options]);
    return this;
    function fileUploadXhr(a) {
      var formdata = new FormData;
      for(var i = 0;i < a.length;i++) {
        formdata.append(a[i].name, a[i].value)
      }
      if(options.extraData) {
        for(var p in options.extraData) {
          if(options.extraData.hasOwnProperty(p)) {
            formdata.append(p, options.extraData[p])
          }
        }
      }
      options.data = null;
      var s = $.extend(true, {}, $.ajaxSettings, options, {contentType:false, processData:false, cache:false, type:"POST"});
      if(options.uploadProgress) {
        s.xhr = function() {
          var xhr = jQuery.ajaxSettings.xhr();
          if(xhr.upload) {
            xhr.upload.onprogress = function(event) {
              var percent = 0;
              var position = event.loaded || event.position;
              var total = event.total;
              if(event.lengthComputable) {
                percent = Math.ceil(position / total * 100)
              }
              options.uploadProgress(event, position, total, percent)
            }
          }
          return xhr
        }
      }
      s.data = null;
      var beforeSend = s.beforeSend;
      s.beforeSend = function(xhr, o) {
        o.data = formdata;
        if(beforeSend) {
          beforeSend.call(o, xhr, options)
        }
      };
      $.ajax(s)
    }
    function fileUploadIframe(a) {
      var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
      var useProp = !!$.fn.prop;
      if($(":input[name=submit],:input[id=submit]", form).length) {
        alert('Error: Form elements must not have name or id of "submit".');
        return
      }
      if(a) {
        for(i = 0;i < elements.length;i++) {
          el = $(elements[i]);
          if(useProp) {
            el.prop("disabled", false)
          }else {
            el.removeAttr("disabled")
          }
        }
      }
      s = $.extend(true, {}, $.ajaxSettings, options);
      s.context = s.context || s;
      id = "jqFormIO" + (new Date).getTime();
      if(s.iframeTarget) {
        $io = $(s.iframeTarget);
        n = $io.attr("name");
        if(!n) {
          $io.attr("name", id)
        }else {
          id = n
        }
      }else {
        $io = $('<iframe name="' + id + '" src="' + s.iframeSrc + '" />');
        $io.css({position:"absolute", top:"-1000px", left:"-1000px"})
      }
      io = $io[0];
      xhr = {aborted:0, responseText:null, responseXML:null, status:0, statusText:"n/a", getAllResponseHeaders:function() {
      }, getResponseHeader:function() {
      }, setRequestHeader:function() {
      }, abort:function(status) {
        var e = status === "timeout" ? "timeout" : "aborted";
        log("aborting upload... " + e);
        this.aborted = 1;
        $io.attr("src", s.iframeSrc);
        xhr.error = e;
        if(s.error) {
          s.error.call(s.context, xhr, e, status)
        }
        if(g) {
          $.event.trigger("ajaxError", [xhr, s, e])
        }
        if(s.complete) {
          s.complete.call(s.context, xhr, e)
        }
      }};
      g = s.global;
      if(g && 0 === $.active++) {
        $.event.trigger("ajaxStart")
      }
      if(g) {
        $.event.trigger("ajaxSend", [xhr, s])
      }
      if(s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
        if(s.global) {
          $.active--
        }
        return
      }
      if(xhr.aborted) {
        return
      }
      sub = form.clk;
      if(sub) {
        n = sub.name;
        if(n && !sub.disabled) {
          s.extraData = s.extraData || {};
          s.extraData[n] = sub.value;
          if(sub.type == "image") {
            s.extraData[n + ".x"] = form.clk_x;
            s.extraData[n + ".y"] = form.clk_y
          }
        }
      }
      var CLIENT_TIMEOUT_ABORT = 1;
      var SERVER_ABORT = 2;
      function getDoc(frame) {
        var doc = frame.contentWindow ? frame.contentWindow.document : frame.contentDocument ? frame.contentDocument : frame.document;
        return doc
      }
      var csrf_token = $("meta[name=csrf-token]").attr("content");
      var csrf_param = $("meta[name=csrf-param]").attr("content");
      if(csrf_param && csrf_token) {
        s.extraData = s.extraData || {};
        s.extraData[csrf_param] = csrf_token
      }
      function doSubmit() {
        var t = $form.attr("target"), a = $form.attr("action");
        form.setAttribute("target", id);
        if(!method) {
          form.setAttribute("method", "POST")
        }
        if(a != s.url) {
          form.setAttribute("action", s.url)
        }
        if(!s.skipEncodingOverride && (!method || /post/i.test(method))) {
          $form.attr({encoding:"multipart/form-data", enctype:"multipart/form-data"})
        }
        if(s.timeout) {
          timeoutHandle = setTimeout(function() {
            timedOut = true;
            cb(CLIENT_TIMEOUT_ABORT)
          }, s.timeout)
        }
        function checkState() {
          try {
            var state = getDoc(io).readyState;
            log("state = " + state);
            if(state && state.toLowerCase() == "uninitialized") {
              setTimeout(checkState, 50)
            }
          }catch(e) {
            log("Server abort: ", e, " (", e.name, ")");
            cb(SERVER_ABORT);
            if(timeoutHandle) {
              clearTimeout(timeoutHandle)
            }
            timeoutHandle = undefined
          }
        }
        var extraInputs = [];
        try {
          if(s.extraData) {
            for(var n in s.extraData) {
              if(s.extraData.hasOwnProperty(n)) {
                extraInputs.push($('<input type="hidden" name="' + n + '">').attr("value", s.extraData[n]).appendTo(form)[0])
              }
            }
          }
          if(!s.iframeTarget) {
            $io.appendTo("body");
            if(io.attachEvent) {
              io.attachEvent("onload", cb)
            }else {
              io.addEventListener("load", cb, false)
            }
          }
          setTimeout(checkState, 15);
          form.submit()
        }finally {
          form.setAttribute("action", a);
          if(t) {
            form.setAttribute("target", t)
          }else {
            $form.removeAttr("target")
          }
          $(extraInputs).remove()
        }
      }
      if(s.forceSync) {
        doSubmit()
      }else {
        setTimeout(doSubmit, 10)
      }
      var data, doc, domCheckCount = 50, callbackProcessed;
      function cb(e) {
        if(xhr.aborted || callbackProcessed) {
          return
        }
        try {
          doc = getDoc(io)
        }catch(ex) {
          log("cannot access response document: ", ex);
          e = SERVER_ABORT
        }
        if(e === CLIENT_TIMEOUT_ABORT && xhr) {
          xhr.abort("timeout");
          return
        }else {
          if(e == SERVER_ABORT && xhr) {
            xhr.abort("server abort");
            return
          }
        }
        if(!doc || doc.location.href == s.iframeSrc) {
          if(!timedOut) {
            return
          }
        }
        if(io.detachEvent) {
          io.detachEvent("onload", cb)
        }else {
          io.removeEventListener("load", cb, false)
        }
        var status = "success", errMsg;
        try {
          if(timedOut) {
            throw"timeout";
          }
          var isXml = s.dataType == "xml" || doc.XMLDocument || $.isXMLDoc(doc);
          log("isXml=" + isXml);
          if(!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
            if(--domCheckCount) {
              log("requeing onLoad callback, DOM not available");
              setTimeout(cb, 250);
              return
            }
          }
          var docRoot = doc.body ? doc.body : doc.documentElement;
          xhr.responseText = docRoot ? docRoot.innerHTML : null;
          xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
          if(isXml) {
            s.dataType = "xml"
          }
          xhr.getResponseHeader = function(header) {
            var headers = {"content-type":s.dataType};
            return headers[header]
          };
          if(docRoot) {
            xhr.status = Number(docRoot.getAttribute("status")) || xhr.status;
            xhr.statusText = docRoot.getAttribute("statusText") || xhr.statusText
          }
          var dt = (s.dataType || "").toLowerCase();
          var scr = /(json|script|text)/.test(dt);
          if(scr || s.textarea) {
            var ta = doc.getElementsByTagName("textarea")[0];
            if(ta) {
              xhr.responseText = ta.value;
              xhr.status = Number(ta.getAttribute("status")) || xhr.status;
              xhr.statusText = ta.getAttribute("statusText") || xhr.statusText
            }else {
              if(scr) {
                var pre = doc.getElementsByTagName("pre")[0];
                var b = doc.getElementsByTagName("body")[0];
                if(pre) {
                  xhr.responseText = pre.textContent ? pre.textContent : pre.innerText
                }else {
                  if(b) {
                    xhr.responseText = b.textContent ? b.textContent : b.innerText
                  }
                }
              }
            }
          }else {
            if(dt == "xml" && !xhr.responseXML && xhr.responseText) {
              xhr.responseXML = toXml(xhr.responseText)
            }
          }
          try {
            data = httpData(xhr, dt, s)
          }catch(e) {
            status = "parsererror";
            xhr.error = errMsg = e || status
          }
        }catch(e) {
          log("error caught: ", e);
          status = "error";
          xhr.error = errMsg = e || status
        }
        if(xhr.aborted) {
          log("upload aborted");
          status = null
        }
        if(xhr.status) {
          status = xhr.status >= 200 && xhr.status < 300 || xhr.status === 304 ? "success" : "error"
        }
        if(status === "success") {
          if(s.success) {
            s.success.call(s.context, data, "success", xhr)
          }
          if(g) {
            $.event.trigger("ajaxSuccess", [xhr, s])
          }
        }else {
          if(status) {
            if(errMsg === undefined) {
              errMsg = xhr.statusText
            }
            if(s.error) {
              s.error.call(s.context, xhr, status, errMsg)
            }
            if(g) {
              $.event.trigger("ajaxError", [xhr, s, errMsg])
            }
          }
        }
        if(g) {
          $.event.trigger("ajaxComplete", [xhr, s])
        }
        if(g && !--$.active) {
          $.event.trigger("ajaxStop")
        }
        if(s.complete) {
          s.complete.call(s.context, xhr, status)
        }
        callbackProcessed = true;
        if(s.timeout) {
          clearTimeout(timeoutHandle)
        }
        setTimeout(function() {
          if(!s.iframeTarget) {
            $io.remove()
          }
          xhr.responseXML = null
        }, 100)
      }
      var toXml = $.parseXML || function(s, doc) {
        if(window.ActiveXObject) {
          doc = new ActiveXObject("Microsoft.XMLDOM");
          doc.async = "false";
          doc.loadXML(s)
        }else {
          doc = (new DOMParser).parseFromString(s, "text/xml")
        }
        return doc && doc.documentElement && doc.documentElement.nodeName != "parsererror" ? doc : null
      };
      var parseJSON = $.parseJSON || function(s) {
        return window["eval"]("(" + s + ")")
      };
      var httpData = function(xhr, type, s) {
        var ct = xhr.getResponseHeader("content-type") || "", xml = type === "xml" || !type && ct.indexOf("xml") >= 0, data = xml ? xhr.responseXML : xhr.responseText;
        if(xml && data.documentElement.nodeName === "parsererror") {
          if($.error) {
            $.error("parsererror")
          }
        }
        if(s && s.dataFilter) {
          data = s.dataFilter(data, type)
        }
        if(typeof data === "string") {
          if(type === "json" || !type && ct.indexOf("json") >= 0) {
            data = parseJSON(data)
          }else {
            if(type === "script" || !type && ct.indexOf("javascript") >= 0) {
              $.globalEval(data)
            }
          }
        }
        return data
      }
    }
  };
  $.fn.ajaxForm = function(options) {
    options = options || {};
    options.delegation = options.delegation && $.isFunction($.fn.on);
    if(!options.delegation && this.length === 0) {
      var o = {s:this.selector, c:this.context};
      if(!$.isReady && o.s) {
        log("DOM not ready, queuing ajaxForm");
        $(function() {
          $(o.s, o.c).ajaxForm(options)
        });
        return this
      }
      log("terminating; zero elements found by selector" + ($.isReady ? "" : " (DOM not ready)"));
      return this
    }
    if(options.delegation) {
      $(document).off("submit.form-plugin", this.selector, doAjaxSubmit).off("click.form-plugin", this.selector, captureSubmittingElement).on("submit.form-plugin", this.selector, options, doAjaxSubmit).on("click.form-plugin", this.selector, options, captureSubmittingElement);
      return this
    }
    return this.ajaxFormUnbind().bind("submit.form-plugin", options, doAjaxSubmit).bind("click.form-plugin", options, captureSubmittingElement)
  };
  function doAjaxSubmit(e) {
    var options = e.data;
    if(!e.isDefaultPrevented()) {
      e.preventDefault();
      $(this).ajaxSubmit(options)
    }
  }
  function captureSubmittingElement(e) {
    var target = e.target;
    var $el = $(target);
    if(!$el.is(":submit,input:image")) {
      var t = $el.closest(":submit");
      if(t.length === 0) {
        return
      }
      target = t[0]
    }
    var form = this;
    form.clk = target;
    if(target.type == "image") {
      if(e.offsetX !== undefined) {
        form.clk_x = e.offsetX;
        form.clk_y = e.offsetY
      }else {
        if(typeof $.fn.offset == "function") {
          var offset = $el.offset();
          form.clk_x = e.pageX - offset.left;
          form.clk_y = e.pageY - offset.top
        }else {
          form.clk_x = e.pageX - target.offsetLeft;
          form.clk_y = e.pageY - target.offsetTop
        }
      }
    }
    setTimeout(function() {
      form.clk = form.clk_x = form.clk_y = null
    }, 100)
  }
  $.fn.ajaxFormUnbind = function() {
    return this.unbind("submit.form-plugin click.form-plugin")
  };
  $.fn.formToArray = function(semantic, elements) {
    var a = [];
    if(this.length === 0) {
      return a
    }
    var form = this[0];
    var els = semantic ? form.getElementsByTagName("*") : form.elements;
    if(!els) {
      return a
    }
    var i, j, n, v, el, max, jmax;
    for(i = 0, max = els.length;i < max;i++) {
      el = els[i];
      n = el.name;
      if(!n) {
        continue
      }
      if(semantic && form.clk && el.type == "image") {
        if(!el.disabled && form.clk == el) {
          a.push({name:n, value:$(el).val(), type:el.type});
          a.push({name:n + ".x", value:form.clk_x}, {name:n + ".y", value:form.clk_y})
        }
        continue
      }
      v = $.fieldValue(el, true);
      if(v && v.constructor == Array) {
        if(elements) {
          elements.push(el)
        }
        for(j = 0, jmax = v.length;j < jmax;j++) {
          a.push({name:n, value:v[j]})
        }
      }else {
        if(feature.fileapi && el.type == "file" && !el.disabled) {
          if(elements) {
            elements.push(el)
          }
          var files = el.files;
          if(files.length) {
            for(j = 0;j < files.length;j++) {
              a.push({name:n, value:files[j], type:el.type})
            }
          }else {
            a.push({name:n, value:"", type:el.type})
          }
        }else {
          if(v !== null && typeof v != "undefined") {
            if(elements) {
              elements.push(el)
            }
            a.push({name:n, value:v, type:el.type, required:el.required})
          }
        }
      }
    }
    if(!semantic && form.clk) {
      var $input = $(form.clk), input = $input[0];
      n = input.name;
      if(n && !input.disabled && input.type == "image") {
        a.push({name:n, value:$input.val()});
        a.push({name:n + ".x", value:form.clk_x}, {name:n + ".y", value:form.clk_y})
      }
    }
    return a
  };
  $.fn.formSerialize = function(semantic) {
    return $.param(this.formToArray(semantic))
  };
  $.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
      var n = this.name;
      if(!n) {
        return
      }
      var v = $.fieldValue(this, successful);
      if(v && v.constructor == Array) {
        for(var i = 0, max = v.length;i < max;i++) {
          a.push({name:n, value:v[i]})
        }
      }else {
        if(v !== null && typeof v != "undefined") {
          a.push({name:this.name, value:v})
        }
      }
    });
    return $.param(a)
  };
  $.fn.fieldValue = function(successful) {
    for(var val = [], i = 0, max = this.length;i < max;i++) {
      var el = this[i];
      var v = $.fieldValue(el, successful);
      if(v === null || typeof v == "undefined" || v.constructor == Array && !v.length) {
        continue
      }
      if(v.constructor == Array) {
        $.merge(val, v)
      }else {
        val.push(v)
      }
    }
    return val
  };
  $.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if(successful === undefined) {
      successful = true
    }
    if(successful && (!n || el.disabled || t == "reset" || t == "button" || (t == "checkbox" || t == "radio") && !el.checked || (t == "submit" || t == "image") && el.form && el.form.clk != el || tag == "select" && el.selectedIndex == -1)) {
      return null
    }
    if(tag == "select") {
      var index = el.selectedIndex;
      if(index < 0) {
        return null
      }
      var a = [], ops = el.options;
      var one = t == "select-one";
      var max = one ? index + 1 : ops.length;
      for(var i = one ? index : 0;i < max;i++) {
        var op = ops[i];
        if(op.selected) {
          var v = op.value;
          if(!v) {
            v = op.attributes && op.attributes["value"] && !op.attributes["value"].specified ? op.text : op.value
          }
          if(one) {
            return v
          }
          a.push(v)
        }
      }
      return a
    }
    return $(el).val()
  };
  $.fn.clearForm = function(includeHidden) {
    return this.each(function() {
      $("input,select,textarea", this).clearFields(includeHidden)
    })
  };
  $.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
    return this.each(function() {
      var t = this.type, tag = this.tagName.toLowerCase();
      if(re.test(t) || tag == "textarea") {
        this.value = ""
      }else {
        if(t == "checkbox" || t == "radio") {
          this.checked = false
        }else {
          if(tag == "select") {
            this.selectedIndex = -1
          }else {
            if(includeHidden) {
              if(includeHidden === true && /hidden/.test(t) || typeof includeHidden == "string" && $(this).is(includeHidden)) {
                this.value = ""
              }
            }
          }
        }
      }
    })
  };
  $.fn.resetForm = function() {
    return this.each(function() {
      if(typeof this.reset == "function" || typeof this.reset == "object" && !this.reset.nodeType) {
        this.reset()
      }
    })
  };
  $.fn.enable = function(b) {
    if(b === undefined) {
      b = true
    }
    return this.each(function() {
      this.disabled = !b
    })
  };
  $.fn.selected = function(select) {
    if(select === undefined) {
      select = true
    }
    return this.each(function() {
      var t = this.type;
      if(t == "checkbox" || t == "radio") {
        this.checked = select
      }else {
        if(this.tagName.toLowerCase() == "option") {
          var $sel = $(this).parent("select");
          if(select && $sel[0] && $sel[0].type == "select-one") {
            $sel.find("option").selected(false)
          }
          this.selected = select
        }
      }
    })
  };
  $.fn.ajaxSubmit.debug = false;
  function log() {
    if(!$.fn.ajaxSubmit.debug) {
      return
    }
    var msg = "[jquery.form] " + Array.prototype.join.call(arguments, "");
    if(window.console && window.console.log) {
      window.console.log(msg)
    }else {
      if(window.opera && window.opera.postError) {
        window.opera.postError(msg)
      }
    }
  }
})(jQuery);
(function($) {
  $.fn.joyride = function(options) {
    var settings = {"tipLocation":"bottom", "scrollSpeed":300, "timer":0, "startTimerOnClick":false, "nextButton":true, "tipAnimation":"fade", "tipAnimationFadeSpeed":300, "cookieMonster":false, "cookieName":"JoyRide", "cookieDomain":false, "tipContainer":"body", "inline":false, "tipContent":"#joyRideTipContent", "postRideCallback":$.noop, "postStepCallback":$.noop};
    var options = $.extend(settings, options);
    return this.each(function() {
      if($(options.tipContent).length === 0) {
        return
      }
      $(options.tipContent).hide();
      var bodyOffset = $(options.tipContainer).children("*").first().position(), tipContent = $(options.tipContent + " li"), count = skipCount = 0, prevCount = -1, timerIndicatorInstance, timerIndicatorTemplate = '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>', tipTemplate = function(tipClass, index, buttonText, self) {
        return'<div class="joyride-tip-guide ' + tipClass + '" id="joyRidePopup' + index + '"><span class="joyride-nub"></span><div class="joyride-content-wrapper">' + $(self).html() + buttonText + '<a href="#close" class="joyride-close-tip"></a>' + timerIndicatorInstance + "</div></div>"
      }, tipLayout = function(tipClass, index, buttonText, self) {
        if(index == 0 && settings.startTimerOnClick && settings.timer > 0 || settings.timer == 0) {
          timerIndicatorInstance = ""
        }else {
          timerIndicatorInstance = timerIndicatorTemplate
        }
        if(!tipClass) {
          tipClass = ""
        }
        buttonText != "" ? buttonText = '<a href="#" class="joyride-next-tip small nice radius yellow button">' + buttonText + "</a>" : buttonText = "";
        if(settings.inline) {
          $(tipTemplate(tipClass, index, buttonText, self)).insertAfter("#" + $(self).data("id"))
        }else {
          $(options.tipContainer).append(tipTemplate(tipClass, index, buttonText, self))
        }
      };
      if(!settings.cookieMonster || !$.cookie(settings.cookieName)) {
        tipContent.each(function(index) {
          var buttonText = $(this).data("text"), tipClass = $(this).attr("class"), self = this;
          if(settings.nextButton && buttonText == undefined) {
            buttonText = "Next"
          }
          if(settings.nextButton || !settings.nextButton && settings.startTimerOnClick) {
            if($(this).attr("class")) {
              tipLayout(tipClass, index, buttonText, self)
            }else {
              tipLayout(false, index, buttonText, self)
            }
          }else {
            if(!settings.nextButton) {
              if($(this).attr("class")) {
                tipLayout(tipClass, index, "", self)
              }else {
                tipLayout(false, index, "", self)
              }
            }
          }
          $("#joyRidePopup" + index).hide()
        })
      }
      showNextTip = function() {
        var parentElementID = $(tipContent[count]).data("id"), parentElement = $("#" + parentElementID), opt = {};
        ($(tipContent[count]).data("options") || ":").split(";").map(function(s) {
          var p = s.split(":");
          if(p.length == 2) {
            opt[p[0].trim()] = p[1].trim()
          }
        });
        options = $.extend(options, opt);
        settings = $.extend(settings, opt);
        while(parentElement.offset() === null) {
          count++;
          skipCount++;
          tipContent.length - 1 > prevCount ? prevCount++ : prevCount;
          parentElementID = $(tipContent[count]).data("id"), parentElement = $("#" + parentElementID);
          if($(tipContent).length < count) {
            break
          }
        }
        var windowHalf = Math.ceil($(window).height() / 2), currentTip = $("#joyRidePopup" + count), currentTipPosition = parentElement.offset(), currentParentHeight = parentElement.outerHeight(), currentTipHeight = currentTip.outerHeight(), nubHeight = Math.ceil($(".joyride-nub").outerHeight() / 2), tipOffset = 0;
        if(currentTip.length === 0) {
          return
        }
        if(count < tipContent.length) {
          if(settings.tipAnimation == "pop") {
            $(".joyride-timer-indicator").width(0);
            if(settings.timer > 0) {
              currentTip.show().children(".joyride-timer-indicator-wrap").children(".joyride-timer-indicator").animate({width:$(".joyride-timer-indicator-wrap").width()}, settings.timer)
            }else {
              currentTip.show()
            }
          }else {
            if(settings.tipAnimation == "fade") {
              $(".joyride-timer-indicator").width(0);
              if(settings.timer > 0) {
                currentTip.fadeIn(settings.tipAnimationFadeSpeed).children(".joyride-timer-indicator-wrap").children(".joyride-timer-indicator").animate({width:$(".joyride-timer-indicator-wrap").width()}, settings.timer)
              }else {
                currentTip.fadeIn(settings.tipAnimationFadeSpeed)
              }
            }
          }
          if(Modernizr.mq("only screen and (max-width: 769px)")) {
            if(settings.tipLocation == "bottom") {
              currentTip.offset({top:currentTipPosition.top + currentParentHeight + nubHeight});
              currentTip.children(".joyride-nub").addClass("top").removeClass("bottom").css({left:currentTipPosition.left - bodyOffset.left})
            }else {
              if(settings.tipLocation == "top") {
                if(currentTipHeight >= currentTipPosition.top) {
                  currentTip.offset({top:currentTipPosition.top + currentParentHeight + nubHeight - bodyOffset.top});
                  currentTip.children(".joyride-nub").addClass("top").removeClass("bottom").css({left:currentTipPosition.left - bodyOffset.left})
                }else {
                  currentTip.offset({top:currentTipPosition.top - (currentTipHeight + bodyOffset.top + nubHeight)});
                  currentTip.children(".joyride-nub").addClass("bottom").removeClass("top").css({left:currentTipPosition.left - bodyOffset.left})
                }
              }
            }
          }else {
            if(settings.tipLocation == "bottom") {
              currentTip.offset({top:currentTipPosition.top + currentParentHeight + nubHeight, left:currentTipPosition.left - bodyOffset.left});
              currentTip.children(".joyride-nub").addClass("top").removeClass("bottom")
            }else {
              if(settings.tipLocation == "top") {
                if(currentTipHeight >= currentTipPosition.top) {
                  currentTip.offset({top:currentTipPosition.top + currentParentHeight + nubHeight - bodyOffset.top, left:currentTipPosition.left - bodyOffset.left});
                  currentTip.children(".joyride-nub").addClass("top").removeClass("bottom")
                }else {
                  currentTip.offset({top:currentTipPosition.top - (currentTipHeight + bodyOffset.top + nubHeight), left:currentTipPosition.left - bodyOffset.left});
                  currentTip.children(".joyride-nub").addClass("bottom").removeClass("top")
                }
              }
            }
          }
          tipOffset = Math.ceil(currentTip.offset().top - windowHalf);
          $("html, body").animate({scrollTop:tipOffset}, settings.scrollSpeed);
          if(count > 0) {
            if(skipCount > 0) {
              var hideCount = prevCount - skipCount;
              skipCount = 0
            }else {
              var hideCount = prevCount
            }
            if(settings.tipAnimation == "pop") {
              $("#joyRidePopup" + hideCount).hide()
            }else {
              if(settings.tipAnimation == "fade") {
                $("#joyRidePopup" + hideCount).fadeOut(settings.tipAnimationFadeSpeed)
              }
            }
          }
        }else {
          if(tipContent.length - 1 < count) {
            if(skipCount > 0) {
              var hideCount = prevCount - skipCount;
              skipCount = 0
            }else {
              var hideCount = prevCount
            }
            if(settings.cookieMonster == true) {
              $.cookie(settings.cookieName, "ridden", {expires:365, domain:settings.cookieDomain})
            }
            if(settings.tipAnimation == "pop") {
              $("#joyRidePopup" + hideCount).fadeTo(0, 0)
            }else {
              if(settings.tipAnimation == "fade") {
                $("#joyRidePopup" + hideCount).fadeTo(settings.tipAnimationFadeSpeed, 0)
              }
            }
          }
        }
        count++;
        if(prevCount < 0) {
          prevCount = 0
        }else {
          if(tipContent.length - 1 > prevCount) {
            prevCount++
          }
        }
        if(settings.postStepCallback != $.noop) {
          settings.postStepCallback(prevCount)
        }
      };
      if(!settings.inline || !settings.cookieMonster || !$.cookie(settings.cookieName)) {
        $(window).resize(function() {
          var parentElementID = $(tipContent[prevCount]).data("id"), currentTipPosition = $("#" + parentElementID).offset(), currentParentHeight = $("#" + parentElementID).outerHeight(), currentTipHeight = $("#joyRidePopup" + prevCount).outerHeight(), nubHeight = Math.ceil($(".joyride-nub").outerHeight() / 2);
          if(Modernizr.mq("only screen and (max-width: 769px)")) {
            if(settings.tipLocation == "bottom") {
              $("#joyRidePopup" + prevCount).offset({top:currentTipPosition.top + currentParentHeight + nubHeight, left:0});
              $("#joyRidePopup" + prevCount).children(".joyride-nub").addClass("top").removeClass("bottom").css({left:currentTipPosition.left - bodyOffset.left})
            }else {
              if(settings.tipLocation == "top") {
                if(currentTipPosition.top <= currentTipHeight) {
                  $("#joyRidePopup" + prevCount).offset({top:currentTipPosition.top + nubHeight + currentParentHeight, left:0});
                  $("#joyRidePopup" + prevCount).children(".joyride-nub").addClass("top").removeClass("bottom").css({left:currentTipPosition.left - bodyOffset.left})
                }else {
                  $("#joyRidePopup" + prevCount).offset({top:currentTipPosition.top - (currentTipHeight + nubHeight), left:0});
                  $("#joyRidePopup" + prevCount).children(".joyride-nub").addClass("bottom").removeClass("top").css({left:currentTipPosition.left - bodyOffset.left})
                }
              }
            }
          }else {
            if(settings.tipLocation == "bottom") {
              $("#joyRidePopup" + prevCount).offset({top:currentTipPosition.top + currentParentHeight + nubHeight, left:currentTipPosition.left});
              $("#joyRidePopup" + prevCount).children(".joyride-nub").addClass("top").removeClass("bottom").css({left:""})
            }else {
              if(settings.tipLocation == "top") {
                if(currentTipPosition.top <= currentTipHeight) {
                  $("#joyRidePopup" + prevCount).offset({top:currentTipPosition.top + nubHeight + currentParentHeight, left:currentTipPosition.left});
                  $("#joyRidePopup" + prevCount).children(".joyride-nub").addClass("top").removeClass("bottom").css({left:""})
                }else {
                  $("#joyRidePopup" + prevCount).offset({top:currentTipPosition.top - (currentTipHeight + nubHeight), left:currentTipPosition.left});
                  $("#joyRidePopup" + prevCount).children(".joyride-nub").addClass("bottom").removeClass("top").css({left:""})
                }
              }
            }
          }
        })
      }
      var interval_id = null, showTimerState = false;
      if(!settings.startTimerOnClick && settings.timer > 0) {
        showNextTip();
        interval_id = setInterval(function() {
          showNextTip()
        }, settings.timer)
      }else {
        showNextTip()
      }
      var endTip = function(e, interval_id, cookie, self) {
        e.preventDefault();
        clearInterval(interval_id);
        if(cookie) {
          $.cookie(settings.cookieName, "ridden", {expires:365, domain:settings.cookieDomain})
        }
        $(self).parent().parent().hide();
        if(settings.postRideCallback != $.noop) {
          settings.postRideCallback()
        }
      };
      $(".joyride-close-tip").click(function(e) {
        endTip(e, interval_id, settings.cookieMonster, this)
      });
      $(".joyride-next-tip").click(function(e) {
        e.preventDefault();
        if(count >= tipContent.length) {
          endTip(e, interval_id, settings.cookieMonster, this)
        }
        if(settings.timer > 0 && settings.startTimerOnClick) {
          showNextTip();
          clearInterval(interval_id);
          interval_id = setInterval(function() {
            showNextTip()
          }, settings.timer)
        }else {
          if(settings.timer > 0 && !settings.startTimerOnClick) {
            clearInterval(interval_id);
            interval_id = setInterval(function() {
              showNextTip()
            }, settings.timer)
          }else {
            showNextTip()
          }
        }
      })
    })
  };
  jQuery.cookie = function(key, value, options) {
    if(arguments.length > 1 && String(value) !== "[object Object]") {
      options = jQuery.extend({}, options);
      if(value === null || value === undefined) {
        options.expires = -1
      }
      if(typeof options.expires === "number") {
        var days = options.expires, t = options.expires = new Date;
        t.setDate(t.getDate() + days)
      }
      value = String(value);
      return document.cookie = [encodeURIComponent(key), "=", options.raw ? value : encodeURIComponent(value), options.expires ? "; expires=" + options.expires.toUTCString() : "", options.path ? "; path=" + options.path : "", options.domain ? "; domain=" + options.domain : "", options.secure ? "; secure" : ""].join("")
    }
    options = value || {};
    var result, decode = options.raw ? function(s) {
      return s
    } : decodeURIComponent;
    return(result = (new RegExp("(?:^|; )" + encodeURIComponent(key) + "=([^;]*)")).exec(document.cookie)) ? decode(result[1]) : null
  }
})(jQuery);
(function(d) {
  function g(a) {
    var b = a || window.event, i = [].slice.call(arguments, 1), c = 0, h = 0, e = 0;
    a = d.event.fix(b);
    a.type = "mousewheel";
    if(a.wheelDelta) {
      c = a.wheelDelta / 120
    }
    if(a.detail) {
      c = -a.detail / 3
    }
    e = c;
    if(b.axis !== undefined && b.axis === b.HORIZONTAL_AXIS) {
      e = 0;
      h = -1 * c
    }
    if(b.wheelDeltaY !== undefined) {
      e = b.wheelDeltaY / 120
    }
    if(b.wheelDeltaX !== undefined) {
      h = -1 * b.wheelDeltaX / 120
    }
    i.unshift(a, c, h, e);
    return d.event.handle.apply(this, i)
  }
  var f = ["DOMMouseScroll", "mousewheel"];
  d.event.special.mousewheel = {setup:function() {
    if(this.addEventListener) {
      for(var a = f.length;a;) {
        this.addEventListener(f[--a], g, false)
      }
    }else {
      this.onmousewheel = g
    }
  }, teardown:function() {
    if(this.removeEventListener) {
      for(var a = f.length;a;) {
        this.removeEventListener(f[--a], g, false)
      }
    }else {
      this.onmousewheel = null
    }
  }};
  d.fn.extend({mousewheel:function(a) {
    return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
  }, unmousewheel:function(a) {
    return this.unbind("mousewheel", a)
  }})
})(jQuery);
var Hashtable = function() {
  function c(b) {
    var d;
    if(typeof b == "string") {
      return b
    }
    if(typeof b.hashCode == a) {
      return d = b.hashCode(), typeof d == "string" ? d : c(d)
    }
    if(typeof b.toString == a) {
      return b.toString()
    }
    try {
      return String(b)
    }catch(e) {
      return Object.prototype.toString.call(b)
    }
  }
  function d(a, b) {
    return a.equals(b)
  }
  function e(b, c) {
    return typeof c.equals == a ? c.equals(b) : b === c
  }
  function f(a) {
    return function(b) {
      if(b === null) {
        throw new Error("null is not a valid " + a);
      }
      if(typeof b == "undefined") {
        throw new Error(a + " must not be undefined");
      }
    }
  }
  function i(a, b, c, d) {
    this[0] = a, this.entries = [], this.addEntry(b, c), d !== null && (this.getEqualityFunction = function() {
      return d
    })
  }
  function m(a) {
    return function(b) {
      var c = this.entries.length, d, e = this.getEqualityFunction(b);
      while(c--) {
        d = this.entries[c];
        if(e(b, d[0])) {
          switch(a) {
            case j:
              return!0;
            case k:
              return d;
            case l:
              return[c, d[1]]
          }
        }
      }
      return!1
    }
  }
  function n(a) {
    return function(b) {
      var c = b.length;
      for(var d = 0, e = this.entries.length;d < e;++d) {
        b[c + d] = this.entries[d][a]
      }
    }
  }
  function o(a, b) {
    var c = a.length, d;
    while(c--) {
      d = a[c];
      if(b === d[0]) {
        return c
      }
    }
    return null
  }
  function p(a, b) {
    var c = a[b];
    return c && c instanceof i ? c : null
  }
  function q(d, e) {
    var f = this, j = [], k = {}, l = typeof d == a ? d : c, m = typeof e == a ? e : null;
    this.put = function(a, b) {
      g(a), h(b);
      var c = l(a), d, e, f = null;
      return d = p(k, c), d ? (e = d.getEntryForKey(a), e ? (f = e[1], e[1] = b) : d.addEntry(a, b)) : (d = new i(c, a, b, m), j[j.length] = d, k[c] = d), f
    }, this.get = function(a) {
      g(a);
      var b = l(a), c = p(k, b);
      if(c) {
        var d = c.getEntryForKey(a);
        if(d) {
          return d[1]
        }
      }
      return null
    }, this.containsKey = function(a) {
      g(a);
      var b = l(a), c = p(k, b);
      return c ? c.containsKey(a) : !1
    }, this.containsValue = function(a) {
      h(a);
      var b = j.length;
      while(b--) {
        if(j[b].containsValue(a)) {
          return!0
        }
      }
      return!1
    }, this.clear = function() {
      j.length = 0, k = {}
    }, this.isEmpty = function() {
      return!j.length
    };
    var n = function(a) {
      return function() {
        var b = [], c = j.length;
        while(c--) {
          j[c][a](b)
        }
        return b
      }
    };
    this.keys = n("keys"), this.values = n("values"), this.entries = n("getEntries"), this.remove = function(a) {
      g(a);
      var c = l(a), d, e = null, f = p(k, c);
      return f && (e = f.removeEntryForKey(a), e !== null && (f.entries.length || (d = o(j, c), b(j, d), delete k[c]))), e
    }, this.size = function() {
      var a = 0, b = j.length;
      while(b--) {
        a += j[b].entries.length
      }
      return a
    }, this.each = function(a) {
      var b = f.entries(), c = b.length, d;
      while(c--) {
        d = b[c], a(d[0], d[1])
      }
    }, this.putAll = function(b, c) {
      var d = b.entries(), e, g, h, i, j = d.length, k = typeof c == a;
      while(j--) {
        e = d[j], g = e[0], h = e[1], k && (i = f.get(g)) && (h = c(g, i, h)), f.put(g, h)
      }
    }, this.clone = function() {
      var a = new q(d, e);
      return a.putAll(f), a
    }
  }
  var a = "function", b = typeof Array.prototype.splice == a ? function(a, b) {
    a.splice(b, 1)
  } : function(a, b) {
    var c, d, e;
    if(b === a.length - 1) {
      a.length = b
    }else {
      c = a.slice(b + 1), a.length = b;
      for(d = 0, e = c.length;d < e;++d) {
        a[b + d] = c[d]
      }
    }
  }, g = f("key"), h = f("value"), j = 0, k = 1, l = 2;
  return i.prototype = {getEqualityFunction:function(b) {
    return typeof b.equals == a ? d : e
  }, getEntryForKey:m(k), getEntryAndIndexForKey:m(l), removeEntryForKey:function(a) {
    var c = this.getEntryAndIndexForKey(a);
    return c ? (b(this.entries, c[0]), c[1]) : null
  }, addEntry:function(a, b) {
    this.entries[this.entries.length] = [a, b]
  }, keys:n(0), values:n(1), getEntries:function(a) {
    var b = a.length;
    for(var c = 0, d = this.entries.length;c < d;++c) {
      a[b + c] = this.entries[c].slice(0)
    }
  }, containsKey:m(j), containsValue:function(a) {
    var b = this.entries.length;
    while(b--) {
      if(a === this.entries[b][1]) {
        return!0
      }
    }
    return!1
  }}, q
}();
(function(a) {
  function i(a, b, c) {
    this.dec = a, this.group = b, this.neg = c
  }
  function j() {
    for(var a = 0;a < h.length;a++) {
      localeGroup = h[a];
      for(var c = 0;c < localeGroup.length;c++) {
        b.put(localeGroup[c], a)
      }
    }
  }
  function k(a) {
    b.size() == 0 && j();
    var c = ".", d = ",", e = "-", f = b.get(a);
    if(f) {
      var h = g[f];
      h && (c = h[0], d = h[1])
    }
    return new i(c, d, e)
  }
  var b = new Hashtable, c = ["ae", "au", "ca", "cn", "eg", "gb", "hk", "il", "in", "jp", "sk", "th", "tw", "us"], d = ["at", "br", "de", "dk", "es", "gr", "it", "nl", "pt", "tr", "vn"], e = ["cz", "fi", "fr", "ru", "se", "pl"], f = ["ch"], g = [[".", ","], [",", "."], [",", " "], [".", "'"]], h = [c, d, e, f];
  a.fn.formatNumber = function(b, c, d) {
    return this.each(function() {
      c == null && (c = !0), d == null && (d = !0);
      var e;
      a(this).is(":input") ? e = new String(a(this).val()) : e = new String(a(this).text());
      var f = a.formatNumber(e, b);
      c && (a(this).is(":input") ? a(this).val(f) : a(this).text(f));
      if(d) {
        return f
      }
    })
  }, a.formatNumber = function(b, c) {
    var c = a.extend({}, a.fn.formatNumber.defaults, c), d = k(c.locale.toLowerCase()), e = d.dec, f = d.group, g = d.neg, h = "0#-,.", i = "", j = !1;
    for(var l = 0;l < c.format.length;l++) {
      if(h.indexOf(c.format.charAt(l)) != -1) {
        if(l == 0 && c.format.charAt(l) == "-") {
          j = !0;
          continue
        }
        break
      }
      i += c.format.charAt(l)
    }
    var m = "";
    for(var l = c.format.length - 1;l >= 0;l--) {
      if(h.indexOf(c.format.charAt(l)) != -1) {
        break
      }
      m = c.format.charAt(l) + m
    }
    c.format = c.format.substring(i.length), c.format = c.format.substring(0, c.format.length - m.length);
    var n = new Number(b);
    return a._formatNumber(n, c, m, i, j)
  }, a._formatNumber = function(b, c, d, e, f) {
    var c = a.extend({}, a.fn.formatNumber.defaults, c), g = k(c.locale.toLowerCase()), h = g.dec, i = g.group, j = g.neg, l = !1;
    if(isNaN(b)) {
      if(c.nanForceZero != 1) {
        return null
      }
      b = 0, l = !0
    }
    d == "%" && (b *= 100);
    var m = "";
    if(c.format.indexOf(".") > -1) {
      var n = h, o = c.format.substring(c.format.lastIndexOf(".") + 1);
      if(c.round == 1) {
        b = new Number(b.toFixed(o.length))
      }else {
        var p = b.toString();
        p = p.substring(0, p.lastIndexOf(".") + o.length + 1), b = new Number(p)
      }
      var q = b % 1, r = new String(q.toFixed(o.length));
      r = r.substring(r.lastIndexOf(".") + 1);
      for(var s = 0;s < o.length;s++) {
        if(o.charAt(s) == "#" && r.charAt(s) != "0") {
          n += r.charAt(s);
          continue
        }
        if(o.charAt(s) == "#" && r.charAt(s) == "0") {
          var t = r.substring(s);
          if(t.match("[1-9]")) {
            n += r.charAt(s);
            continue
          }
          break
        }
        o.charAt(s) == "0" && (n += r.charAt(s))
      }
      m += n
    }else {
      b = Math.round(b)
    }
    var u = Math.floor(b);
    b < 0 && (u = Math.ceil(b));
    var v = "";
    c.format.indexOf(".") == -1 ? v = c.format : v = c.format.substring(0, c.format.indexOf("."));
    var w = "";
    if(u != 0 || v.substr(v.length - 1) != "#" || l) {
      var x = new String(Math.abs(u)), y = 9999;
      v.lastIndexOf(",") != -1 && (y = v.length - v.lastIndexOf(",") - 1);
      var z = 0;
      for(var s = x.length - 1;s > -1;s--) {
        w = x.charAt(s) + w, z++, z == y && s != 0 && (w = i + w, z = 0)
      }
      if(v.length > w.length) {
        var A = v.indexOf("0");
        if(A != -1) {
          var B = v.length - A;
          while(w.length < B) {
            w = "0" + w
          }
        }
      }
    }
    return!w && v.indexOf("0", v.length - 1) !== -1 && (w = "0"), m = w + m, b < 0 && f && e.length > 0 ? e = j + e : b < 0 && (m = j + m), c.decimalSeparatorAlwaysShown || m.lastIndexOf(h) == m.length - 1 && (m = m.substring(0, m.length - 1)), m = e + m + d, m
  }, a.fn.parseNumber = function(b, c, d) {
    c == null && (c = !0), d == null && (d = !0);
    var e;
    a(this).is(":input") ? e = new String(a(this).val()) : e = new String(a(this).text());
    var f = a.parseNumber(e, b);
    if(f) {
      c && (a(this).is(":input") ? a(this).val(f.toString()) : a(this).text(f.toString()));
      if(d) {
        return f
      }
    }
  }, a.parseNumber = function(b, c) {
    var c = a.extend({}, a.fn.parseNumber.defaults, c), d = k(c.locale.toLowerCase()), e = d.dec, f = d.group, g = d.neg, h = "1234567890.-";
    while(b.indexOf(f) > -1) {
      b = b.replace(f, "")
    }
    b = b.replace(e, ".").replace(g, "-");
    var i = "", j = !1;
    b.charAt(b.length - 1) == "%" && (j = !0);
    for(var l = 0;l < b.length;l++) {
      h.indexOf(b.charAt(l)) > -1 && (i += b.charAt(l))
    }
    var m = new Number(i);
    return j && (m /= 100, m = m.toFixed(i.length - 1)), m
  }, a.fn.parseNumber.defaults = {locale:"us", decimalSeparatorAlwaysShown:!1}, a.fn.formatNumber.defaults = {format:"#,###.00", locale:"us", decimalSeparatorAlwaysShown:!1, nanForceZero:!0, round:!0}, Number.prototype.toFixed = function(a) {
    return $._roundNumber(this, a)
  }, a._roundNumber = function(a, b) {
    var c = Math.pow(10, b || 0), d = String(Math.round(a * c) / c);
    if(b > 0) {
      var e = d.indexOf(".");
      e == -1 ? (d += ".", e = 0) : e = d.length - (e + 1);
      while(e < b) {
        d += "0", e++
      }
    }
    return d
  }
})(jQuery), function() {
  var a = {};
  this.tmpl = function b(c, d) {
    var e = /\W/.test(c) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + c.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : a[c] = a[c] || b(document.getElementById(c).innerHTML);
    return d ? e(d) : e
  }
}(), function(a) {
  a.baseClass = function(b) {
    return b = a(b), b.get(0).className.match(/([^ ]+)/)[1]
  }, a.fn.addDependClass = function(b, c) {
    var d = {delimiter:c ? c : "-"};
    return this.each(function() {
      var c = a.baseClass(this);
      c && a(this).addClass(c + d.delimiter + b)
    })
  }, a.fn.removeDependClass = function(b, c) {
    var d = {delimiter:c ? c : "-"};
    return this.each(function() {
      var c = a.baseClass(this);
      c && a(this).removeClass(c + d.delimiter + b)
    })
  }, a.fn.toggleDependClass = function(b, c) {
    var d = {delimiter:c ? c : "-"};
    return this.each(function() {
      var c = a.baseClass(this);
      c && (a(this).is("." + c + d.delimiter + b) ? a(this).removeClass(c + d.delimiter + b) : a(this).addClass(c + d.delimiter + b))
    })
  }
}(jQuery), function(a) {
  function b() {
    this._init.apply(this, arguments)
  }
  b.prototype.oninit = function() {
  }, b.prototype.events = function() {
  }, b.prototype.onmousedown = function() {
    this.ptr.css({position:"absolute"})
  }, b.prototype.onmousemove = function(a, b, c) {
    this.ptr.css({left:b, top:c})
  }, b.prototype.onmouseup = function() {
  }, b.prototype.isDefault = {drag:!1, clicked:!1, toclick:!0, mouseup:!1}, b.prototype._init = function() {
    if(arguments.length > 0) {
      this.ptr = a(arguments[0]), this.outer = a(".draggable-outer"), this.is = {}, a.extend(this.is, this.isDefault);
      var b = this.ptr.offset();
      this.d = {left:b.left, top:b.top, width:this.ptr.width(), height:this.ptr.height()}, this.oninit.apply(this, arguments), this._events()
    }
  }, b.prototype._getPageCoords = function(a) {
    return a.targetTouches && a.targetTouches[0] ? {x:a.targetTouches[0].pageX, y:a.targetTouches[0].pageY} : {x:a.pageX, y:a.pageY}
  }, b.prototype._bindEvent = function(a, b, c) {
    var d = this;
    this.supportTouches_ ? a.get(0).addEventListener(this.events_[b], c, !1) : a.bind(this.events_[b], c)
  }, b.prototype._events = function() {
    var b = this;
    this.supportTouches_ = a.browser.webkit && navigator.userAgent.indexOf("Mobile") != -1, this.events_ = {click:this.supportTouches_ ? "touchstart" : "click", down:this.supportTouches_ ? "touchstart" : "mousedown", move:this.supportTouches_ ? "touchmove" : "mousemove", up:this.supportTouches_ ? "touchend" : "mouseup"}, this._bindEvent(a(document), "move", function(a) {
      b.is.drag && (a.stopPropagation(), a.preventDefault(), b._mousemove(a))
    }), this._bindEvent(a(document), "down", function(a) {
      b.is.drag && (a.stopPropagation(), a.preventDefault())
    }), this._bindEvent(a(document), "up", function(a) {
      b._mouseup(a)
    }), this._bindEvent(this.ptr, "down", function(a) {
      return b._mousedown(a), !1
    }), this._bindEvent(this.ptr, "up", function(a) {
      b._mouseup(a)
    }), this.ptr.find("a").click(function() {
      b.is.clicked = !0;
      if(!b.is.toclick) {
        return b.is.toclick = !0, !1
      }
    }).mousedown(function(a) {
      return b._mousedown(a), !1
    }), this.events()
  }, b.prototype._mousedown = function(b) {
    this.is.drag = !0, this.is.clicked = !1, this.is.mouseup = !1;
    var c = this.ptr.offset(), d = this._getPageCoords(b);
    this.cx = d.x - c.left, this.cy = d.y - c.top, a.extend(this.d, {left:c.left, top:c.top, width:this.ptr.width(), height:this.ptr.height()}), this.outer && this.outer.get(0) && this.outer.css({height:Math.max(this.outer.height(), a(document.body).height()), overflow:"hidden"}), this.onmousedown(b)
  }, b.prototype._mousemove = function(a) {
    this.is.toclick = !1;
    var b = this._getPageCoords(a);
    this.onmousemove(a, b.x - this.cx, b.y - this.cy)
  }, b.prototype._mouseup = function(b) {
    var c = this;
    this.is.drag && (this.is.drag = !1, this.outer && this.outer.get(0) && (a.browser.mozilla ? this.outer.css({overflow:"hidden"}) : this.outer.css({overflow:"visible"}), a.browser.msie && a.browser.version == "6.0" ? this.outer.css({height:"100%"}) : this.outer.css({height:"auto"})), this.onmouseup(b))
  }, window.Draggable = b
}(jQuery), function(a) {
  function b(a) {
    return typeof a == "undefined" ? !1 : a instanceof Array || !(a instanceof Object) && Object.prototype.toString.call(a) == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice") ? !0 : !1
  }
  function d() {
    return this.init.apply(this, arguments)
  }
  function e() {
    Draggable.apply(this, arguments)
  }
  a.slider = function(b, c) {
    var e = a(b);
    return e.data("jslider") || e.data("jslider", new d(b, c)), e.data("jslider")
  }, a.fn.slider = function(c, d) {
    function g(a) {
      return a !== undefined
    }
    function h(a) {
      return a != null
    }
    var e, f = arguments;
    return this.each(function() {
      var i = a.slider(this, c);
      if(typeof c == "string") {
        switch(c) {
          case "value":
            if(g(f[1]) && g(f[2])) {
              var j = i.getPointers();
              h(j[0]) && h(f[1]) && (j[0].set(f[1]), j[0].setIndexOver()), h(j[1]) && h(f[2]) && (j[1].set(f[2]), j[1].setIndexOver())
            }else {
              if(g(f[1])) {
                var j = i.getPointers();
                h(j[0]) && h(f[1]) && (j[0].set(f[1]), j[0].setIndexOver())
              }else {
                e = i.getValue()
              }
            }
            break;
          case "prc":
            if(g(f[1]) && g(f[2])) {
              var j = i.getPointers();
              h(j[0]) && h(f[1]) && (j[0]._set(f[1]), j[0].setIndexOver()), h(j[1]) && h(f[2]) && (j[1]._set(f[2]), j[1].setIndexOver())
            }else {
              if(g(f[1])) {
                var j = i.getPointers();
                h(j[0]) && h(f[1]) && (j[0]._set(f[1]), j[0].setIndexOver())
              }else {
                e = i.getPrcValue()
              }
            }
            break;
          case "calculatedValue":
            var k = i.getValue().split(";");
            e = "";
            for(var l = 0;l < k.length;l++) {
              e += (l > 0 ? ";" : "") + i.nice(k[l])
            }
            break;
          case "skin":
            i.setSkin(f[1])
        }
      }else {
        !c && !d && (b(e) || (e = []), e.push(slider))
      }
    }), b(e) && e.length == 1 && (e = e[0]), e || this
  };
  var c = {settings:{from:1, to:10, step:1, smooth:!0, limits:!0, round:0, format:{format:"#,###.##"}, value:"5;7", dimension:""}, className:"jslider", selector:".jslider-", template:tmpl('<span class="<%=className%>"><table><tr><td><div class="<%=className%>-bg"><i class="l"></i><i class="r"></i><i class="v"></i></div><div class="<%=className%>-pointer"></div><div class="<%=className%>-pointer <%=className%>-pointer-to"></div><div class="<%=className%>-label"><span><%=settings.from%></span></div><div class="<%=className%>-label <%=className%>-label-to"><span><%=settings.to%></span><%=settings.dimension%></div><div class="<%=className%>-value"><span></span><%=settings.dimension%></div><div class="<%=className%>-value <%=className%>-value-to"><span></span><%=settings.dimension%></div><div class="<%=className%>-scale"><%=scale%></div></td></tr></table></span>')};
  d.prototype.init = function(b, d) {
    this.settings = a.extend(!0, {}, c.settings, d ? d : {}), this.inputNode = a(b).hide(), this.settings.interval = this.settings.to - this.settings.from, this.settings.value = this.inputNode.attr("value"), this.settings.calculate && a.isFunction(this.settings.calculate) && (this.nice = this.settings.calculate), this.settings.onstatechange && a.isFunction(this.settings.onstatechange) && (this.onstatechange = this.settings.onstatechange), this.is = {init:!1}, this.o = {}, this.create()
  }, d.prototype.onstatechange = function() {
  }, d.prototype.create = function() {
    var b = this;
    this.domNode = a(c.template({className:c.className, settings:{from:this.nice(this.settings.from), to:this.nice(this.settings.to), dimension:this.settings.dimension}, scale:this.generateScale()})), this.inputNode.after(this.domNode), this.drawScale(), this.settings.skin && this.settings.skin.length > 0 && this.setSkin(this.settings.skin), this.sizes = {domWidth:this.domNode.width(), domOffset:this.domNode.offset()}, a.extend(this.o, {pointers:{}, labels:{"0":{o:this.domNode.find(c.selector + "value").not(c.selector + 
    "value-to")}, 1:{o:this.domNode.find(c.selector + "value").filter(c.selector + "value-to")}}, limits:{"0":this.domNode.find(c.selector + "label").not(c.selector + "label-to"), 1:this.domNode.find(c.selector + "label").filter(c.selector + "label-to")}}), a.extend(this.o.labels[0], {value:this.o.labels[0].o.find("span")}), a.extend(this.o.labels[1], {value:this.o.labels[1].o.find("span")}), b.settings.value.split(";")[1] || (this.settings.single = !0, this.domNode.addDependClass("single")), b.settings.limits || 
    this.domNode.addDependClass("limitless"), this.domNode.find(c.selector + "pointer").each(function(a) {
      var c = b.settings.value.split(";")[a];
      if(c) {
        b.o.pointers[a] = new e(this, a, b);
        var d = b.settings.value.split(";")[a - 1];
        d && new Number(c) < new Number(d) && (c = d), c = c < b.settings.from ? b.settings.from : c, c = c > b.settings.to ? b.settings.to : c, b.o.pointers[a].set(c, !0)
      }
    }), this.o.value = this.domNode.find(".v"), this.is.init = !0, a.each(this.o.pointers, function(a) {
      b.redraw(this)
    }), function(b) {
      a(window).resize(function() {
        b.onresize()
      })
    }(this)
  }, d.prototype.setSkin = function(a) {
    this.skin_ && this.domNode.removeDependClass(this.skin_, "_"), this.domNode.addDependClass(this.skin_ = a, "_")
  }, d.prototype.setPointersIndex = function(b) {
    a.each(this.getPointers(), function(a) {
      this.index(a)
    })
  }, d.prototype.getPointers = function() {
    return this.o.pointers
  }, d.prototype.generateScale = function() {
    if(this.settings.scale && this.settings.scale.length > 0) {
      var a = "", b = this.settings.scale, c = Math.round(100 / (b.length - 1) * 10) / 10;
      for(var d = 0;d < b.length;d++) {
        a += '<span style="left: ' + d * c + '%">' + (b[d] != "|" ? "<ins>" + b[d] + "</ins>" : "") + "</span>"
      }
      return a
    }
    return""
  }, d.prototype.drawScale = function() {
    this.domNode.find(c.selector + "scale span ins").each(function() {
      a(this).css({marginLeft:-a(this).outerWidth() / 2})
    })
  }, d.prototype.onresize = function() {
    var b = this;
    this.sizes = {domWidth:this.domNode.width(), domOffset:this.domNode.offset()}, a.each(this.o.pointers, function(a) {
      b.redraw(this)
    })
  }, d.prototype.limits = function(a, b) {
    if(!this.settings.smooth) {
      var c = this.settings.step * 100 / this.settings.interval;
      a = Math.round(a / c) * c
    }
    var d = this.o.pointers[1 - b.uid];
    return d && b.uid && a < d.value.prc && (a = d.value.prc), d && !b.uid && a > d.value.prc && (a = d.value.prc), a < 0 && (a = 0), a > 100 && (a = 100), Math.round(a * 10) / 10
  }, d.prototype.redraw = function(a) {
    if(!this.is.init) {
      return!1
    }
    this.setValue(), this.o.pointers[0] && this.o.pointers[1] && this.o.value.css({left:this.o.pointers[0].value.prc + "%", width:this.o.pointers[1].value.prc - this.o.pointers[0].value.prc + "%"}), this.o.labels[a.uid].value.html(this.nice(a.value.origin)), this.redrawLabels(a)
  }, d.prototype.redrawLabels = function(a) {
    function b(a, b, d) {
      return b.margin = -b.label / 2, label_left = b.border + b.margin, label_left < 0 && (b.margin -= label_left), b.border + b.label / 2 > c.sizes.domWidth ? (b.margin = 0, b.right = !0) : b.right = !1, a.o.css({left:d + "%", marginLeft:b.margin, right:"auto"}), b.right && a.o.css({left:"auto", right:0}), b
    }
    var c = this, d = this.o.labels[a.uid], e = a.value.prc, f = {label:d.o.outerWidth(), right:!1, border:e * this.sizes.domWidth / 100};
    if(!this.settings.single) {
      var g = this.o.pointers[1 - a.uid], h = this.o.labels[g.uid];
      switch(a.uid) {
        case 0:
          f.border + f.label / 2 > h.o.offset().left - this.sizes.domOffset.left ? (h.o.css({visibility:"hidden"}), h.value.html(this.nice(g.value.origin)), d.o.css({visibility:"visible"}), e = (g.value.prc - e) / 2 + e, g.value.prc != a.value.prc && (d.value.html(this.nice(a.value.origin) + "&nbsp;&ndash;&nbsp;" + this.nice(g.value.origin)), f.label = d.o.outerWidth(), f.border = e * this.sizes.domWidth / 100)) : h.o.css({visibility:"visible"});
          break;
        case 1:
          f.border - f.label / 2 < h.o.offset().left - this.sizes.domOffset.left + h.o.outerWidth() ? (h.o.css({visibility:"hidden"}), h.value.html(this.nice(g.value.origin)), d.o.css({visibility:"visible"}), e = (e - g.value.prc) / 2 + g.value.prc, g.value.prc != a.value.prc && (d.value.html(this.nice(g.value.origin) + "&nbsp;&ndash;&nbsp;" + this.nice(a.value.origin)), f.label = d.o.outerWidth(), f.border = e * this.sizes.domWidth / 100)) : h.o.css({visibility:"visible"})
      }
    }
    f = b(d, f, e);
    if(h) {
      var f = {label:h.o.outerWidth(), right:!1, border:g.value.prc * this.sizes.domWidth / 100};
      f = b(h, f, g.value.prc)
    }
    this.redrawLimits()
  }, d.prototype.redrawLimits = function() {
    if(this.settings.limits) {
      var a = [!0, !0];
      for(key in this.o.pointers) {
        if(!this.settings.single || key == 0) {
          var b = this.o.pointers[key], c = this.o.labels[b.uid], d = c.o.offset().left - this.sizes.domOffset.left, e = this.o.limits[0];
          d < e.outerWidth() && (a[0] = !1);
          var e = this.o.limits[1];
          d + c.o.outerWidth() > this.sizes.domWidth - e.outerWidth() && (a[1] = !1)
        }
      }
      for(var f = 0;f < a.length;f++) {
        a[f] ? this.o.limits[f].fadeIn("fast") : this.o.limits[f].fadeOut("fast")
      }
    }
  }, d.prototype.setValue = function() {
    var a = this.getValue();
    this.inputNode.attr("value", a), this.onstatechange.call(this, a)
  }, d.prototype.getValue = function() {
    if(!this.is.init) {
      return!1
    }
    var b = this, c = "";
    return a.each(this.o.pointers, function(a) {
      this.value.prc != undefined && !isNaN(this.value.prc) && (c += (a > 0 ? ";" : "") + b.prcToValue(this.value.prc))
    }), c
  }, d.prototype.getPrcValue = function() {
    if(!this.is.init) {
      return!1
    }
    var b = this, c = "";
    return a.each(this.o.pointers, function(a) {
      this.value.prc != undefined && !isNaN(this.value.prc) && (c += (a > 0 ? ";" : "") + this.value.prc)
    }), c
  }, d.prototype.prcToValue = function(a) {
    if(this.settings.heterogeneity && this.settings.heterogeneity.length > 0) {
      var b = this.settings.heterogeneity, c = 0, d = this.settings.from;
      for(var e = 0;e <= b.length;e++) {
        if(b[e]) {
          var f = b[e].split("/")
        }else {
          var f = [100, this.settings.to]
        }
        f[0] = new Number(f[0]), f[1] = new Number(f[1]);
        if(a >= c && a <= f[0]) {
          var g = d + (a - c) * (f[1] - d) / (f[0] - c)
        }
        c = f[0], d = f[1]
      }
    }else {
      var g = this.settings.from + a * this.settings.interval / 100
    }
    return this.round(g)
  }, d.prototype.valueToPrc = function(a, b) {
    if(this.settings.heterogeneity && this.settings.heterogeneity.length > 0) {
      var c = this.settings.heterogeneity, d = 0, e = this.settings.from;
      for(var f = 0;f <= c.length;f++) {
        if(c[f]) {
          var g = c[f].split("/")
        }else {
          var g = [100, this.settings.to]
        }
        g[0] = new Number(g[0]), g[1] = new Number(g[1]);
        if(a >= e && a <= g[1]) {
          var h = b.limits(d + (a - e) * (g[0] - d) / (g[1] - e))
        }
        d = g[0], e = g[1]
      }
    }else {
      var h = b.limits((a - this.settings.from) * 100 / this.settings.interval)
    }
    return h
  }, d.prototype.round = function(a) {
    return a = Math.round(a / this.settings.step) * this.settings.step, this.settings.round ? a = Math.round(a * Math.pow(10, this.settings.round)) / Math.pow(10, this.settings.round) : a = Math.round(a), a
  }, d.prototype.nice = function(b) {
    return b = b.toString().replace(/,/gi, ".").replace(/ /gi, ""), a.formatNumber ? a.formatNumber(new Number(b), this.settings.format || {}).replace(/-/gi, "&minus;") : new Number(b)
  }, e.prototype = new Draggable, e.prototype.oninit = function(a, b, c) {
    this.uid = b, this.parent = c, this.value = {}, this.settings = this.parent.settings
  }, e.prototype.onmousedown = function(a) {
    this._parent = {offset:this.parent.domNode.offset(), width:this.parent.domNode.width()}, this.ptr.addDependClass("hover"), this.setIndexOver()
  }, e.prototype.onmousemove = function(a, b) {
    var c = this._getPageCoords(a);
    this._set(this.calc(c.x))
  }, e.prototype.onmouseup = function(b) {
    this.parent.settings.callback && a.isFunction(this.parent.settings.callback) && this.parent.settings.callback.call(this.parent, this.parent.getValue()), this.ptr.removeDependClass("hover")
  }, e.prototype.setIndexOver = function() {
    this.parent.setPointersIndex(1), this.index(2)
  }, e.prototype.index = function(a) {
    this.ptr.css({zIndex:a})
  }, e.prototype.limits = function(a) {
    return this.parent.limits(a, this)
  }, e.prototype.calc = function(a) {
    var b = this.limits((a - this._parent.offset.left) * 100 / this._parent.width);
    return b
  }, e.prototype.set = function(a, b) {
    this.value.origin = this.parent.round(a), this._set(this.parent.valueToPrc(a, this), b)
  }, e.prototype._set = function(a, b) {
    b || (this.value.origin = this.parent.prcToValue(a)), this.value.prc = a, this.ptr.css({left:a + "%"}), this.parent.redraw(this)
  }
}(jQuery);
(function(a, b) {
  function d(b) {
    return!a(b).parents().andSelf().filter(function() {
      return a.curCSS(this, "visibility") === "hidden" || a.expr.filters.hidden(this)
    }).length
  }
  function c(b, c) {
    var e = b.nodeName.toLowerCase();
    if("area" === e) {
      var f = b.parentNode, g = f.name, h;
      if(!b.href || !g || f.nodeName.toLowerCase() !== "map") {
        return!1
      }
      h = a("img[usemap=#" + g + "]")[0];
      return!!h && d(h)
    }
    return(/input|select|textarea|button|object/.test(e) ? !b.disabled : "a" == e ? b.href || c : c) && d(b)
  }
  a.ui = a.ui || {};
  a.ui.version || (a.extend(a.ui, {version:"1.8.18", keyCode:{ALT:18, BACKSPACE:8, CAPS_LOCK:20, COMMA:188, COMMAND:91, COMMAND_LEFT:91, COMMAND_RIGHT:93, CONTROL:17, DELETE:46, DOWN:40, END:35, ENTER:13, ESCAPE:27, HOME:36, INSERT:45, LEFT:37, MENU:93, NUMPAD_ADD:107, NUMPAD_DECIMAL:110, NUMPAD_DIVIDE:111, NUMPAD_ENTER:108, NUMPAD_MULTIPLY:106, NUMPAD_SUBTRACT:109, PAGE_DOWN:34, PAGE_UP:33, PERIOD:190, RIGHT:39, SHIFT:16, SPACE:32, TAB:9, UP:38, WINDOWS:91}}), a.fn.extend({propAttr:a.fn.prop || 
  a.fn.attr, _focus:a.fn.focus, focus:function(b, c) {
    return typeof b == "number" ? this.each(function() {
      var d = this;
      setTimeout(function() {
        a(d).focus(), c && c.call(d)
      }, b)
    }) : this._focus.apply(this, arguments)
  }, scrollParent:function() {
    var b;
    a.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? b = this.parents().filter(function() {
      return/(relative|absolute|fixed)/.test(a.curCSS(this, "position", 1)) && /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
    }).eq(0) : b = this.parents().filter(function() {
      return/(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
    }).eq(0);
    return/fixed/.test(this.css("position")) || !b.length ? a(document) : b
  }, zIndex:function(c) {
    if(c !== b) {
      return this.css("zIndex", c)
    }
    if(this.length) {
      var d = a(this[0]), e, f;
      while(d.length && d[0] !== document) {
        e = d.css("position");
        if(e === "absolute" || e === "relative" || e === "fixed") {
          f = parseInt(d.css("zIndex"), 10);
          if(!isNaN(f) && f !== 0) {
            return f
          }
        }
        d = d.parent()
      }
    }
    return 0
  }, disableSelection:function() {
    return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
      a.preventDefault()
    })
  }, enableSelection:function() {
    return this.unbind(".ui-disableSelection")
  }}), a.each(["Width", "Height"], function(c, d) {
    function h(b, c, d, f) {
      a.each(e, function() {
        c -= parseFloat(a.curCSS(b, "padding" + this, !0)) || 0, d && (c -= parseFloat(a.curCSS(b, "border" + this + "Width", !0)) || 0), f && (c -= parseFloat(a.curCSS(b, "margin" + this, !0)) || 0)
      });
      return c
    }
    var e = d === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], f = d.toLowerCase(), g = {innerWidth:a.fn.innerWidth, innerHeight:a.fn.innerHeight, outerWidth:a.fn.outerWidth, outerHeight:a.fn.outerHeight};
    a.fn["inner" + d] = function(c) {
      if(c === b) {
        return g["inner" + d].call(this)
      }
      return this.each(function() {
        a(this).css(f, h(this, c) + "px")
      })
    }, a.fn["outer" + d] = function(b, c) {
      if(typeof b != "number") {
        return g["outer" + d].call(this, b)
      }
      return this.each(function() {
        a(this).css(f, h(this, b, !0, c) + "px")
      })
    }
  }), a.extend(a.expr[":"], {data:function(b, c, d) {
    return!!a.data(b, d[3])
  }, focusable:function(b) {
    return c(b, !isNaN(a.attr(b, "tabindex")))
  }, tabbable:function(b) {
    var d = a.attr(b, "tabindex"), e = isNaN(d);
    return(e || d >= 0) && c(b, !e)
  }}), a(function() {
    var b = document.body, c = b.appendChild(c = document.createElement("div"));
    c.offsetHeight, a.extend(c.style, {minHeight:"100px", height:"auto", padding:0, borderWidth:0}), a.support.minHeight = c.offsetHeight === 100, a.support.selectstart = "onselectstart" in c, b.removeChild(c).style.display = "none"
  }), a.extend(a.ui, {plugin:{add:function(b, c, d) {
    var e = a.ui[b].prototype;
    for(var f in d) {
      e.plugins[f] = e.plugins[f] || [], e.plugins[f].push([c, d[f]])
    }
  }, call:function(a, b, c) {
    var d = a.plugins[b];
    if(!!d && !!a.element[0].parentNode) {
      for(var e = 0;e < d.length;e++) {
        a.options[d[e][0]] && d[e][1].apply(a.element, c)
      }
    }
  }}, contains:function(a, b) {
    return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b)
  }, hasScroll:function(b, c) {
    if(a(b).css("overflow") === "hidden") {
      return!1
    }
    var d = c && c === "left" ? "scrollLeft" : "scrollTop", e = !1;
    if(b[d] > 0) {
      return!0
    }
    b[d] = 1, e = b[d] > 0, b[d] = 0;
    return e
  }, isOverAxis:function(a, b, c) {
    return a > b && a < b + c
  }, isOver:function(b, c, d, e, f, g) {
    return a.ui.isOverAxis(b, d, f) && a.ui.isOverAxis(c, e, g)
  }}))
})(jQuery);
(function(a, b) {
  a.widget("ui.draggable", a.ui.mouse, {widgetEventPrefix:"drag", options:{addClasses:!0, appendTo:"parent", axis:!1, connectToSortable:!1, containment:!1, cursor:"auto", cursorAt:!1, grid:!1, handle:!1, helper:"original", iframeFix:!1, opacity:!1, refreshPositions:!1, revert:!1, revertDuration:500, scope:"default", scroll:!0, scrollSensitivity:20, scrollSpeed:20, snap:!1, snapMode:"both", snapTolerance:20, stack:!1, zIndex:!1}, _create:function() {
    this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
  }, destroy:function() {
    if(!!this.element.data("draggable")) {
      this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy();
      return this
    }
  }, _mouseCapture:function(b) {
    var c = this.options;
    if(this.helper || c.disabled || a(b.target).is(".ui-resizable-handle")) {
      return!1
    }
    this.handle = this._getHandle(b);
    if(!this.handle) {
      return!1
    }
    c.iframeFix && a(c.iframeFix === !0 ? "iframe" : c.iframeFix).each(function() {
      a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth + "px", height:this.offsetHeight + "px", position:"absolute", opacity:"0.001", zIndex:1E3}).css(a(this).offset()).appendTo("body")
    });
    return!0
  }, _mouseStart:function(b) {
    var c = this.options;
    this.helper = this._createHelper(b), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {top:this.offset.top - this.margins.top, left:this.offset.left - this.margins.left}, a.extend(this.offset, {click:{left:b.pageX - this.offset.left, top:b.pageY - this.offset.top}, parent:this._getParentOffset(), 
    relative:this._getRelativeOffset()}), this.originalPosition = this.position = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), c.containment && this._setContainment();
    if(this._trigger("start", b) === !1) {
      this._clear();
      return!1
    }
    this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.helper.addClass("ui-draggable-dragging"), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b);
    return!0
  }, _mouseDrag:function(b, c) {
    this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute");
    if(!c) {
      var d = this._uiHash();
      if(this._trigger("drag", b, d) === !1) {
        this._mouseUp({});
        return!1
      }
      this.position = d.position
    }
    if(!this.options.axis || this.options.axis != "y") {
      this.helper[0].style.left = this.position.left + "px"
    }
    if(!this.options.axis || this.options.axis != "x") {
      this.helper[0].style.top = this.position.top + "px"
    }
    a.ui.ddmanager && a.ui.ddmanager.drag(this, b);
    return!1
  }, _mouseStop:function(b) {
    var c = !1;
    a.ui.ddmanager && !this.options.dropBehaviour && (c = a.ui.ddmanager.drop(this, b)), this.dropped && (c = this.dropped, this.dropped = !1);
    if((!this.element[0] || !this.element[0].parentNode) && this.options.helper == "original") {
      return!1
    }
    if(this.options.revert == "invalid" && !c || this.options.revert == "valid" && c || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, c)) {
      var d = this;
      a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
        d._trigger("stop", b) !== !1 && d._clear()
      })
    }else {
      this._trigger("stop", b) !== !1 && this._clear()
    }
    return!1
  }, _mouseUp:function(b) {
    this.options.iframeFix === !0 && a("div.ui-draggable-iframeFix").each(function() {
      this.parentNode.removeChild(this)
    }), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b);
    return a.ui.mouse.prototype._mouseUp.call(this, b)
  }, cancel:function() {
    this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear();
    return this
  }, _getHandle:function(b) {
    var c = !this.options.handle || !a(this.options.handle, this.element).length ? !0 : !1;
    a(this.options.handle, this.element).find("*").andSelf().each(function() {
      this == b.target && (c = !0)
    });
    return c
  }, _createHelper:function(b) {
    var c = this.options, d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b])) : c.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
    d.parents("body").length || d.appendTo(c.appendTo == "parent" ? this.element[0].parentNode : c.appendTo), d[0] != this.element[0] && !/(fixed|absolute)/.test(d.css("position")) && d.css("position", "absolute");
    return d
  }, _adjustOffsetFromHelper:function(b) {
    typeof b == "string" && (b = b.split(" ")), a.isArray(b) && (b = {left:+b[0], top:+b[1] || 0}), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
  }, _getParentOffset:function() {
    this.offsetParent = this.helper.offsetParent();
    var b = this.offsetParent.offset();
    this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop());
    if(this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie) {
      b = {top:0, left:0}
    }
    return{top:b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left:b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
  }, _getRelativeOffset:function() {
    if(this.cssPosition == "relative") {
      var a = this.element.position();
      return{top:a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left:a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
    }
    return{top:0, left:0}
  }, _cacheMargins:function() {
    this.margins = {left:parseInt(this.element.css("marginLeft"), 10) || 0, top:parseInt(this.element.css("marginTop"), 10) || 0, right:parseInt(this.element.css("marginRight"), 10) || 0, bottom:parseInt(this.element.css("marginBottom"), 10) || 0}
  }, _cacheHelperProportions:function() {
    this.helperProportions = {width:this.helper.outerWidth(), height:this.helper.outerHeight()}
  }, _setContainment:function() {
    var b = this.options;
    b.containment == "parent" && (b.containment = this.helper[0].parentNode);
    if(b.containment == "document" || b.containment == "window") {
      this.containment = [b.containment == "document" ? 0 : a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, b.containment == "document" ? 0 : a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (b.containment == "document" ? 0 : a(window).scrollLeft()) + a(b.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (b.containment == "document" ? 0 : a(window).scrollTop()) + (a(b.containment == "document" ? 
      document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
    }
    if(!/^(document|window|parent)$/.test(b.containment) && b.containment.constructor != Array) {
      var c = a(b.containment), d = c[0];
      if(!d) {
        return
      }
      var e = c.offset(), f = a(d).css("overflow") != "hidden";
      this.containment = [(parseInt(a(d).css("borderLeftWidth"), 10) || 0) + (parseInt(a(d).css("paddingLeft"), 10) || 0), (parseInt(a(d).css("borderTopWidth"), 10) || 0) + (parseInt(a(d).css("paddingTop"), 10) || 0), (f ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(a(d).css("borderLeftWidth"), 10) || 0) - (parseInt(a(d).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (f ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - 
      (parseInt(a(d).css("borderTopWidth"), 10) || 0) - (parseInt(a(d).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = c
    }else {
      b.containment.constructor == Array && (this.containment = b.containment)
    }
  }, _convertPositionTo:function(b, c) {
    c || (c = this.position);
    var d = b == "absolute" ? 1 : -1, e = this.options, f = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, g = /(html|body)/i.test(f[0].tagName);
    return{top:c.top + this.offset.relative.top * d + this.offset.parent.top * d - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : g ? 0 : f.scrollTop()) * d), left:c.left + this.offset.relative.left * d + this.offset.parent.left * d - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : g ? 0 : f.scrollLeft()) * 
    d)}
  }, _generatePosition:function(b) {
    var c = this.options, d = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, e = /(html|body)/i.test(d[0].tagName), f = b.pageX, g = b.pageY;
    if(this.originalPosition) {
      var h;
      if(this.containment) {
        if(this.relative_container) {
          var i = this.relative_container.offset();
          h = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]
        }else {
          h = this.containment
        }
        b.pageX - this.offset.click.left < h[0] && (f = h[0] + this.offset.click.left), b.pageY - this.offset.click.top < h[1] && (g = h[1] + this.offset.click.top), b.pageX - this.offset.click.left > h[2] && (f = h[2] + this.offset.click.left), b.pageY - this.offset.click.top > h[3] && (g = h[3] + this.offset.click.top)
      }
      if(c.grid) {
        var j = c.grid[1] ? this.originalPageY + Math.round((g - this.originalPageY) / c.grid[1]) * c.grid[1] : this.originalPageY;
        g = h ? j - this.offset.click.top < h[1] || j - this.offset.click.top > h[3] ? j - this.offset.click.top < h[1] ? j + c.grid[1] : j - c.grid[1] : j : j;
        var k = c.grid[0] ? this.originalPageX + Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0] : this.originalPageX;
        f = h ? k - this.offset.click.left < h[0] || k - this.offset.click.left > h[2] ? k - this.offset.click.left < h[0] ? k + c.grid[0] : k - c.grid[0] : k : k
      }
    }
    return{top:g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e ? 0 : d.scrollTop()), left:f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 
    0 : d.scrollLeft())}
  }, _clear:function() {
    this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
  }, _trigger:function(b, c, d) {
    d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d]), b == "drag" && (this.positionAbs = this._convertPositionTo("absolute"));
    return a.Widget.prototype._trigger.call(this, b, c, d)
  }, plugins:{}, _uiHash:function(a) {
    return{helper:this.helper, position:this.position, originalPosition:this.originalPosition, offset:this.positionAbs}
  }}), a.extend(a.ui.draggable, {version:"1.8.18"}), a.ui.plugin.add("draggable", "connectToSortable", {start:function(b, c) {
    var d = a(this).data("draggable"), e = d.options, f = a.extend({}, c, {item:d.element});
    d.sortables = [], a(e.connectToSortable).each(function() {
      var c = a.data(this, "sortable");
      c && !c.options.disabled && (d.sortables.push({instance:c, shouldRevert:c.options.revert}), c.refreshPositions(), c._trigger("activate", b, f))
    })
  }, stop:function(b, c) {
    var d = a(this).data("draggable"), e = a.extend({}, c, {item:d.element});
    a.each(d.sortables, function() {
      this.instance.isOver ? (this.instance.isOver = 0, d.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(b), this.instance.options.helper = this.instance.options._helper, d.options.helper == "original" && this.instance.currentItem.css({top:"auto", left:"auto"})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b, e))
    })
  }, drag:function(b, c) {
    var d = a(this).data("draggable"), e = this, f = function(b) {
      var c = this.offset.click.top, d = this.offset.click.left, e = this.positionAbs.top, f = this.positionAbs.left, g = b.height, h = b.width, i = b.top, j = b.left;
      return a.ui.isOver(e + c, f + d, i, j, g, h)
    };
    a.each(d.sortables, function(f) {
      this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, this.instance.offset.click = d.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
        return c.helper[0]
      }, b.target = this.instance.currentItem[0], this.instance._mouseCapture(b, !0), this.instance._mouseStart(b, !0, !0), this.instance.offset.click.top = d.offset.click.top, this.instance.offset.click.left = d.offset.click.left, this.instance.offset.parent.left -= d.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= d.offset.parent.top - this.instance.offset.parent.top, d._trigger("toSortable", b), d.dropped = this.instance.element, d.currentItem = d.element, 
      this.instance.fromOutside = d), this.instance.currentItem && this.instance._mouseDrag(b)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b, this.instance._uiHash(this.instance)), this.instance._mouseStop(b, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), d._trigger("fromSortable", 
      b), d.dropped = !1)
    })
  }}), a.ui.plugin.add("draggable", "cursor", {start:function(b, c) {
    var d = a("body"), e = a(this).data("draggable").options;
    d.css("cursor") && (e._cursor = d.css("cursor")), d.css("cursor", e.cursor)
  }, stop:function(b, c) {
    var d = a(this).data("draggable").options;
    d._cursor && a("body").css("cursor", d._cursor)
  }}), a.ui.plugin.add("draggable", "opacity", {start:function(b, c) {
    var d = a(c.helper), e = a(this).data("draggable").options;
    d.css("opacity") && (e._opacity = d.css("opacity")), d.css("opacity", e.opacity)
  }, stop:function(b, c) {
    var d = a(this).data("draggable").options;
    d._opacity && a(c.helper).css("opacity", d._opacity)
  }}), a.ui.plugin.add("draggable", "scroll", {start:function(b, c) {
    var d = a(this).data("draggable");
    d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML" && (d.overflowOffset = d.scrollParent.offset())
  }, drag:function(b, c) {
    var d = a(this).data("draggable"), e = d.options, f = !1;
    if(d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML") {
      if(!e.axis || e.axis != "x") {
        d.overflowOffset.top + d.scrollParent[0].offsetHeight - b.pageY < e.scrollSensitivity ? d.scrollParent[0].scrollTop = f = d.scrollParent[0].scrollTop + e.scrollSpeed : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (d.scrollParent[0].scrollTop = f = d.scrollParent[0].scrollTop - e.scrollSpeed)
      }
      if(!e.axis || e.axis != "y") {
        d.overflowOffset.left + d.scrollParent[0].offsetWidth - b.pageX < e.scrollSensitivity ? d.scrollParent[0].scrollLeft = f = d.scrollParent[0].scrollLeft + e.scrollSpeed : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (d.scrollParent[0].scrollLeft = f = d.scrollParent[0].scrollLeft - e.scrollSpeed)
      }
    }else {
      if(!e.axis || e.axis != "x") {
        b.pageY - a(document).scrollTop() < e.scrollSensitivity ? f = a(document).scrollTop(a(document).scrollTop() - e.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < e.scrollSensitivity && (f = a(document).scrollTop(a(document).scrollTop() + e.scrollSpeed))
      }
      if(!e.axis || e.axis != "y") {
        b.pageX - a(document).scrollLeft() < e.scrollSensitivity ? f = a(document).scrollLeft(a(document).scrollLeft() - e.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < e.scrollSensitivity && (f = a(document).scrollLeft(a(document).scrollLeft() + e.scrollSpeed))
      }
    }
    f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b)
  }}), a.ui.plugin.add("draggable", "snap", {start:function(b, c) {
    var d = a(this).data("draggable"), e = d.options;
    d.snapElements = [], a(e.snap.constructor != String ? e.snap.items || ":data(draggable)" : e.snap).each(function() {
      var b = a(this), c = b.offset();
      this != d.element[0] && d.snapElements.push({item:this, width:b.outerWidth(), height:b.outerHeight(), top:c.top, left:c.left})
    })
  }, drag:function(b, c) {
    var d = a(this).data("draggable"), e = d.options, f = e.snapTolerance, g = c.offset.left, h = g + d.helperProportions.width, i = c.offset.top, j = i + d.helperProportions.height;
    for(var k = d.snapElements.length - 1;k >= 0;k--) {
      var l = d.snapElements[k].left, m = l + d.snapElements[k].width, n = d.snapElements[k].top, o = n + d.snapElements[k].height;
      if(!(l - f < g && g < m + f && n - f < i && i < o + f || l - f < g && g < m + f && n - f < j && j < o + f || l - f < h && h < m + f && n - f < i && i < o + f || l - f < h && h < m + f && n - f < j && j < o + f)) {
        d.snapElements[k].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), {snapItem:d.snapElements[k].item})), d.snapElements[k].snapping = !1;
        continue
      }
      if(e.snapMode != "inner") {
        var p = Math.abs(n - j) <= f, q = Math.abs(o - i) <= f, r = Math.abs(l - h) <= f, s = Math.abs(m - g) <= f;
        p && (c.position.top = d._convertPositionTo("relative", {top:n - d.helperProportions.height, left:0}).top - d.margins.top), q && (c.position.top = d._convertPositionTo("relative", {top:o, left:0}).top - d.margins.top), r && (c.position.left = d._convertPositionTo("relative", {top:0, left:l - d.helperProportions.width}).left - d.margins.left), s && (c.position.left = d._convertPositionTo("relative", {top:0, left:m}).left - d.margins.left)
      }
      var t = p || q || r || s;
      if(e.snapMode != "outer") {
        var p = Math.abs(n - i) <= f, q = Math.abs(o - j) <= f, r = Math.abs(l - g) <= f, s = Math.abs(m - h) <= f;
        p && (c.position.top = d._convertPositionTo("relative", {top:n, left:0}).top - d.margins.top), q && (c.position.top = d._convertPositionTo("relative", {top:o - d.helperProportions.height, left:0}).top - d.margins.top), r && (c.position.left = d._convertPositionTo("relative", {top:0, left:l}).left - d.margins.left), s && (c.position.left = d._convertPositionTo("relative", {top:0, left:m - d.helperProportions.width}).left - d.margins.left)
      }
      !d.snapElements[k].snapping && (p || q || r || s || t) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), {snapItem:d.snapElements[k].item})), d.snapElements[k].snapping = p || q || r || s || t
    }
  }}), a.ui.plugin.add("draggable", "stack", {start:function(b, c) {
    var d = a(this).data("draggable").options, e = a.makeArray(a(d.stack)).sort(function(b, c) {
      return(parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
    });
    if(!!e.length) {
      var f = parseInt(e[0].style.zIndex) || 0;
      a(e).each(function(a) {
        this.style.zIndex = f + a
      }), this[0].style.zIndex = f + e.length
    }
  }}), a.ui.plugin.add("draggable", "zIndex", {start:function(b, c) {
    var d = a(c.helper), e = a(this).data("draggable").options;
    d.css("zIndex") && (e._zIndex = d.css("zIndex")), d.css("zIndex", e.zIndex)
  }, stop:function(b, c) {
    var d = a(this).data("draggable").options;
    d._zIndex && a(c.helper).css("zIndex", d._zIndex)
  }})
})(jQuery);
(function(a, b) {
  var c = !1;
  a(document).mouseup(function(a) {
    c = !1
  }), a.widget("ui.mouse", {options:{cancel:":input,option", distance:1, delay:0}, _mouseInit:function() {
    var b = this;
    this.element.bind("mousedown." + this.widgetName, function(a) {
      return b._mouseDown(a)
    }).bind("click." + this.widgetName, function(c) {
      if(!0 === a.data(c.target, b.widgetName + ".preventClickEvent")) {
        a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation();
        return!1
      }
    }), this.started = !1
  }, _mouseDestroy:function() {
    this.element.unbind("." + this.widgetName)
  }, _mouseDown:function(b) {
    if(!c) {
      this._mouseStarted && this._mouseUp(b), this._mouseDownEvent = b;
      var d = this, e = b.which == 1, f = typeof this.options.cancel == "string" && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1;
      if(!e || f || !this._mouseCapture(b)) {
        return!0
      }
      this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
        d.mouseDelayMet = !0
      }, this.options.delay));
      if(this._mouseDistanceMet(b) && this._mouseDelayMet(b)) {
        this._mouseStarted = this._mouseStart(b) !== !1;
        if(!this._mouseStarted) {
          b.preventDefault();
          return!0
        }
      }
      !0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
        return d._mouseMove(a)
      }, this._mouseUpDelegate = function(a) {
        return d._mouseUp(a)
      }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), b.preventDefault(), c = !0;
      return!0
    }
  }, _mouseMove:function(b) {
    if(a.browser.msie && !(document.documentMode >= 9) && !b.button) {
      return this._mouseUp(b)
    }
    if(this._mouseStarted) {
      this._mouseDrag(b);
      return b.preventDefault()
    }
    this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b));
    return!this._mouseStarted
  }, _mouseUp:function(b) {
    a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target == this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b));
    return!1
  }, _mouseDistanceMet:function(a) {
    return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
  }, _mouseDelayMet:function(a) {
    return this.mouseDelayMet
  }, _mouseStart:function(a) {
  }, _mouseDrag:function(a) {
  }, _mouseStop:function(a) {
  }, _mouseCapture:function(a) {
    return!0
  }})
})(jQuery);
(function(a, b) {
  if(a.cleanData) {
    var c = a.cleanData;
    a.cleanData = function(b) {
      for(var d = 0, e;(e = b[d]) != null;d++) {
        try {
          a(e).triggerHandler("remove")
        }catch(f) {
        }
      }
      c(b)
    }
  }else {
    var d = a.fn.remove;
    a.fn.remove = function(b, c) {
      return this.each(function() {
        c || (!b || a.filter(b, [this]).length) && a("*", this).add([this]).each(function() {
          try {
            a(this).triggerHandler("remove")
          }catch(b) {
          }
        });
        return d.call(a(this), b, c)
      })
    }
  }
  a.widget = function(b, c, d) {
    var e = b.split(".")[0], f;
    b = b.split(".")[1], f = e + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][f] = function(c) {
      return!!a.data(c, b)
    }, a[e] = a[e] || {}, a[e][b] = function(a, b) {
      arguments.length && this._createWidget(a, b)
    };
    var g = new c;
    g.options = a.extend(!0, {}, g.options), a[e][b].prototype = a.extend(!0, g, {namespace:e, widgetName:b, widgetEventPrefix:a[e][b].prototype.widgetEventPrefix || b, widgetBaseClass:f}, d), a.widget.bridge(b, a[e][b])
  }, a.widget.bridge = function(c, d) {
    a.fn[c] = function(e) {
      var f = typeof e == "string", g = Array.prototype.slice.call(arguments, 1), h = this;
      e = !f && g.length ? a.extend.apply(null, [!0, e].concat(g)) : e;
      if(f && e.charAt(0) === "_") {
        return h
      }
      f ? this.each(function() {
        var d = a.data(this, c), f = d && a.isFunction(d[e]) ? d[e].apply(d, g) : d;
        if(f !== d && f !== b) {
          h = f;
          return!1
        }
      }) : this.each(function() {
        var b = a.data(this, c);
        b ? b.option(e || {})._init() : a.data(this, c, new d(e, this))
      });
      return h
    }
  }, a.Widget = function(a, b) {
    arguments.length && this._createWidget(a, b)
  }, a.Widget.prototype = {widgetName:"widget", widgetEventPrefix:"", options:{disabled:!1}, _createWidget:function(b, c) {
    a.data(c, this.widgetName, this), this.element = a(c), this.options = a.extend(!0, {}, this.options, this._getCreateOptions(), b);
    var d = this;
    this.element.bind("remove." + this.widgetName, function() {
      d.destroy()
    }), this._create(), this._trigger("create"), this._init()
  }, _getCreateOptions:function() {
    return a.metadata && a.metadata.get(this.element[0])[this.widgetName]
  }, _create:function() {
  }, _init:function() {
  }, destroy:function() {
    this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled " + "ui-state-disabled")
  }, widget:function() {
    return this.element
  }, option:function(c, d) {
    var e = c;
    if(arguments.length === 0) {
      return a.extend({}, this.options)
    }
    if(typeof c == "string") {
      if(d === b) {
        return this.options[c]
      }
      e = {}, e[c] = d
    }
    this._setOptions(e);
    return this
  }, _setOptions:function(b) {
    var c = this;
    a.each(b, function(a, b) {
      c._setOption(a, b)
    });
    return this
  }, _setOption:function(a, b) {
    this.options[a] = b, a === "disabled" && this.widget()[b ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled").attr("aria-disabled", b);
    return this
  }, enable:function() {
    return this._setOption("disabled", !1)
  }, disable:function() {
    return this._setOption("disabled", !0)
  }, _trigger:function(b, c, d) {
    var e, f, g = this.options[b];
    d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent;
    if(f) {
      for(e in f) {
        e in c || (c[e] = f[e])
      }
    }
    this.element.trigger(c, d);
    return!(a.isFunction(g) && g.call(this.element[0], c, d) === !1 || c.isDefaultPrevented())
  }}
})(jQuery);
(function(a, h, y) {
  var w = "function", v = "password", j = "maxLength", n = "type", b = "", c = true, u = "placeholder", i = false, t = "watermark", g = t, f = "watermarkClass", q = "watermarkFocus", l = "watermarkSubmit", o = "watermarkMaxLength", e = "watermarkPassword", d = "watermarkText", k = /\r/g, s = "input:data(" + g + "),textarea:data(" + g + ")", m = "input:text,input:password,input[type=search],input:not([type]),textarea", p = ["Page_ClientValidate"], r = i, x = u in document.createElement("input");
  a.watermark = a.watermark || {version:"3.1.3", runOnce:c, options:{className:t, useNative:c, hideBeforeUnload:c}, hide:function(b) {
    a(b).filter(s).each(function() {
      a.watermark._hide(a(this))
    })
  }, _hide:function(a, r) {
    var p = a[0], q = (p.value || b).replace(k, b), l = a.data(d) || b, m = a.data(o) || 0, i = a.data(f);
    if(l.length && q == l) {
      p.value = b;
      if(a.data(e)) {
        if((a.attr(n) || b) === "text") {
          var g = a.data(e) || [], c = a.parent() || [];
          if(g.length && c.length) {
            c[0].removeChild(a[0]);
            c[0].appendChild(g[0]);
            a = g
          }
        }
      }
      if(m) {
        a.attr(j, m);
        a.removeData(o)
      }
      if(r) {
        a.attr("autocomplete", "off");
        h.setTimeout(function() {
          a.select()
        }, 1)
      }
    }
    i && a.removeClass(i)
  }, show:function(b) {
    a(b).filter(s).each(function() {
      a.watermark._show(a(this))
    })
  }, _show:function(g) {
    var p = g[0], u = (p.value || b).replace(k, b), h = g.data(d) || b, s = g.attr(n) || b, t = g.data(f);
    if((u.length == 0 || u == h) && !g.data(q)) {
      r = c;
      if(g.data(e)) {
        if(s === v) {
          var m = g.data(e) || [], l = g.parent() || [];
          if(m.length && l.length) {
            l[0].removeChild(g[0]);
            l[0].appendChild(m[0]);
            g = m;
            g.attr(j, h.length);
            p = g[0]
          }
        }
      }
      if(s === "text" || s === "search") {
        var i = g.attr(j) || 0;
        if(i > 0 && h.length > i) {
          g.data(o, i);
          g.attr(j, h.length)
        }
      }
      t && g.addClass(t);
      p.value = h
    }else {
      a.watermark._hide(g)
    }
  }, hideAll:function() {
    if(r) {
      a.watermark.hide(m);
      r = i
    }
  }, showAll:function() {
    a.watermark.show(m)
  }};
  a.fn.watermark = a.fn.watermark || function(p, o) {
    var t = "string";
    if(!this.length) {
      return this
    }
    var s = i, r = typeof p === t;
    if(r) {
      p = p.replace(k, b)
    }
    if(typeof o === "object") {
      s = typeof o.className === t;
      o = a.extend({}, a.watermark.options, o)
    }else {
      if(typeof o === t) {
        s = c;
        o = a.extend({}, a.watermark.options, {className:o})
      }else {
        o = a.watermark.options
      }
    }
    if(typeof o.useNative !== w) {
      o.useNative = o.useNative ? function() {
        return c
      } : function() {
        return i
      }
    }
    return this.each(function() {
      var B = "dragleave", A = "dragenter", z = this, i = a(z);
      if(!i.is(m)) {
        return
      }
      if(i.data(g)) {
        if(r || s) {
          a.watermark._hide(i);
          r && i.data(d, p);
          s && i.data(f, o.className)
        }
      }else {
        if(x && o.useNative.call(z, i) && (i.attr("tagName") || b) !== "TEXTAREA") {
          r && i.attr(u, p);
          return
        }
        i.data(d, r ? p : b);
        i.data(f, o.className);
        i.data(g, 1);
        if((i.attr(n) || b) === v) {
          var C = i.wrap("<span>").parent(), t = a(C.html().replace(/type=["']?password["']?/i, 'type="text"'));
          t.data(d, i.data(d));
          t.data(f, i.data(f));
          t.data(g, 1);
          t.attr(j, p.length);
          t.focus(function() {
            a.watermark._hide(t, c)
          }).bind(A, function() {
            a.watermark._hide(t)
          }).bind("dragend", function() {
            h.setTimeout(function() {
              t.blur()
            }, 1)
          });
          i.blur(function() {
            a.watermark._show(i)
          }).bind(B, function() {
            a.watermark._show(i)
          });
          t.data(e, i);
          i.data(e, t)
        }else {
          i.focus(function() {
            i.data(q, 1);
            a.watermark._hide(i, c)
          }).blur(function() {
            i.data(q, 0);
            a.watermark._show(i)
          }).bind(A, function() {
            a.watermark._hide(i)
          }).bind(B, function() {
            a.watermark._show(i)
          }).bind("dragend", function() {
            h.setTimeout(function() {
              a.watermark._show(i)
            }, 1)
          }).bind("drop", function(e) {
            var c = i[0], a = e.originalEvent.dataTransfer.getData("Text");
            if((c.value || b).replace(k, b).replace(a, b) === i.data(d)) {
              c.value = a
            }
            i.focus()
          })
        }
        if(z.form) {
          var w = z.form, y = a(w);
          if(!y.data(l)) {
            y.submit(a.watermark.hideAll);
            if(w.submit) {
              y.data(l, w.submit);
              w.submit = function(c, b) {
                return function() {
                  var d = b.data(l);
                  a.watermark.hideAll();
                  if(d.apply) {
                    d.apply(c, Array.prototype.slice.call(arguments))
                  }else {
                    d()
                  }
                }
              }(w, y)
            }else {
              y.data(l, 1);
              w.submit = function(b) {
                return function() {
                  a.watermark.hideAll();
                  delete b.submit;
                  b.submit()
                }
              }(w)
            }
          }
        }
      }
      a.watermark._show(i)
    })
  };
  if(a.watermark.runOnce) {
    a.watermark.runOnce = i;
    a.extend(a.expr[":"], {data:function(c, d, b) {
      return!!a.data(c, b[3])
    }});
    (function(c) {
      a.fn.val = function() {
        var e = this;
        if(!e.length) {
          return arguments.length ? e : y
        }
        if(!arguments.length) {
          if(e.data(g)) {
            var f = (e[0].value || b).replace(k, b);
            return f === (e.data(d) || b) ? b : f
          }else {
            return c.apply(e, arguments)
          }
        }else {
          c.apply(e, arguments);
          a.watermark.show(e);
          return e
        }
      }
    })(a.fn.val);
    p.length && a(function() {
      for(var b, c, d = p.length - 1;d >= 0;d--) {
        b = p[d];
        c = h[b];
        if(typeof c === w) {
          h[b] = function(b) {
            return function() {
              a.watermark.hideAll();
              return b.apply(null, Array.prototype.slice.call(arguments))
            }
          }(c)
        }
      }
    });
    a(h).bind("beforeunload", function() {
      a.watermark.options.hideBeforeUnload && a.watermark.hideAll()
    })
  }
})(jQuery, window);
var JSON;
if(!JSON) {
  JSON = {}
}
(function() {
  function f(n) {
    return n < 10 ? "0" + n : n
  }
  if(typeof Date.prototype.toJSON !== "function") {
    Date.prototype.toJSON = function(key) {
      return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    };
    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(key) {
      return this.valueOf()
    }
  }
  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {"\u0008":"\\b", "\t":"\\t", "\n":"\\n", "\u000c":"\\f", "\r":"\\r", '"':'\\"', "\\":"\\\\"}, rep;
  function quote(string) {
    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
      var c = meta[a];
      return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
    }) + '"' : '"' + string + '"'
  }
  function str(key, holder) {
    var i, k, v, length, mind = gap, partial, value = holder[key];
    if(value && typeof value === "object" && typeof value.toJSON === "function") {
      value = value.toJSON(key)
    }
    if(typeof rep === "function") {
      value = rep.call(holder, key, value)
    }
    switch(typeof value) {
      case "string":
        return quote(value);
      case "number":
        return isFinite(value) ? String(value) : "null";
      case "boolean":
      ;
      case "null":
        return String(value);
      case "object":
        if(!value) {
          return"null"
        }
        gap += indent;
        partial = [];
        if(Object.prototype.toString.apply(value) === "[object Array]") {
          length = value.length;
          for(i = 0;i < length;i += 1) {
            partial[i] = str(i, value) || "null"
          }
          v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
          gap = mind;
          return v
        }
        if(rep && typeof rep === "object") {
          length = rep.length;
          for(i = 0;i < length;i += 1) {
            if(typeof rep[i] === "string") {
              k = rep[i];
              v = str(k, value);
              if(v) {
                partial.push(quote(k) + (gap ? ": " : ":") + v)
              }
            }
          }
        }else {
          for(k in value) {
            if(Object.prototype.hasOwnProperty.call(value, k)) {
              v = str(k, value);
              if(v) {
                partial.push(quote(k) + (gap ? ": " : ":") + v)
              }
            }
          }
        }
        v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
        gap = mind;
        return v
    }
  }
  if(typeof JSON.stringify !== "function") {
    JSON.stringify = function(value, replacer, space) {
      var i;
      gap = "";
      indent = "";
      if(typeof space === "number") {
        for(i = 0;i < space;i += 1) {
          indent += " "
        }
      }else {
        if(typeof space === "string") {
          indent = space
        }
      }
      rep = replacer;
      if(replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
        throw new Error("JSON.stringify");
      }
      return str("", {"":value})
    }
  }
  if(typeof JSON.parse !== "function") {
    JSON.parse = function(text, reviver) {
      var j;
      function walk(holder, key) {
        var k, v, value = holder[key];
        if(value && typeof value === "object") {
          for(k in value) {
            if(Object.prototype.hasOwnProperty.call(value, k)) {
              v = walk(value, k);
              if(v !== undefined) {
                value[k] = v
              }else {
                delete value[k]
              }
            }
          }
        }
        return reviver.call(holder, key, value)
      }
      text = String(text);
      cx.lastIndex = 0;
      if(cx.test(text)) {
        text = text.replace(cx, function(a) {
          return"\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        })
      }
      if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
        j = eval("(" + text + ")");
        return typeof reviver === "function" ? walk({"":j}, "") : j
      }
      throw new SyntaxError("JSON.parse");
    }
  }
})();
window.Modernizr = function(a, b, c) {
  function x(a) {
    j.cssText = a
  }
  function y(a, b) {
    return x(m.join(a + ";") + (b || ""))
  }
  function z(a, b) {
    return typeof a === b
  }
  function A(a, b) {
    return!!~("" + a).indexOf(b)
  }
  function B(a, b, d) {
    for(var e in a) {
      var f = b[a[e]];
      if(f !== c) {
        return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f
      }
    }
    return!1
  }
  var d = "2.5.2", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = " -webkit- -moz- -o- -ms- ".split(" "), n = {}, o = {}, p = {}, q = [], r = q.slice, s, t = function(a, c, d, e) {
    var f, i, j, k = b.createElement("div"), l = b.body, m = l ? l : b.createElement("body");
    if(parseInt(d, 10)) {
      while(d--) {
        j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), k.appendChild(j)
      }
    }
    return f = ["&#173;", "<style>", a, "</style>"].join(""), k.id = h, m.innerHTML += f, m.appendChild(k), l || g.appendChild(m), i = c(k, a), l ? k.parentNode.removeChild(k) : m.parentNode.removeChild(m), !!i
  }, u = function(b) {
    var c = a.matchMedia || a.msMatchMedia;
    if(c) {
      return c(b).matches
    }
    var d;
    return t("@media " + b + " { #" + h + " { position: absolute; } }", function(b) {
      d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute"
    }), d
  }, v = {}.hasOwnProperty, w;
  !z(v, "undefined") && !z(v.call, "undefined") ? w = function(a, b) {
    return v.call(a, b)
  } : w = function(a, b) {
    return b in a && z(a.constructor.prototype[b], "undefined")
  }, Function.prototype.bind || (Function.prototype.bind = function(b) {
    var c = this;
    if(typeof c != "function") {
      throw new TypeError;
    }
    var d = r.call(arguments, 1), e = function() {
      if(this instanceof e) {
        var a = function() {
        };
        a.prototype = c.prototype;
        var f = new a, g = c.apply(f, d.concat(r.call(arguments)));
        return Object(g) === g ? g : f
      }
      return c.apply(b, d.concat(r.call(arguments)))
    };
    return e
  });
  var C = function(c, d) {
    var f = c.join(""), g = d.length;
    t(f, function(c, d) {
      var f = b.styleSheets[b.styleSheets.length - 1], h = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "", i = c.childNodes, j = {};
      while(g--) {
        j[i[g].id] = i[g]
      }
      e.touch = "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch || (j.touch && j.touch.offsetTop) === 9
    }, g, d)
  }([, ["@media (", m.join("touch-enabled),("), h, ")", "{#touch{top:9px;position:absolute}}"].join("")], [, "touch"]);
  n.touch = function() {
    return e.touch
  };
  for(var D in n) {
    w(n, D) && (s = D.toLowerCase(), e[s] = n[D](), q.push((e[s] ? "" : "no-") + s))
  }
  return e.addTest = function(a, b) {
    if(typeof a == "object") {
      for(var d in a) {
        w(a, d) && e.addTest(d, a[d])
      }
    }else {
      a = a.toLowerCase();
      if(e[a] !== c) {
        return e
      }
      b = typeof b == "function" ? b() : b, g.className += " " + (b ? "" : "no-") + a, e[a] = b
    }
    return e
  }, x(""), i = k = null, e._version = d, e._prefixes = m, e.mq = u, e.testStyles = t, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + q.join(" ") : ""), e
}(this, this.document), function(a, b, c) {
  function d(a) {
    return o.call(a) == "[object Function]"
  }
  function e(a) {
    return typeof a == "string"
  }
  function f() {
  }
  function g(a) {
    return!a || a == "loaded" || a == "complete" || a == "uninitialized"
  }
  function h() {
    var a = p.shift();
    q = 1, a ? a.t ? m(function() {
      (a.t == "c" ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
    }, 0) : (a(), h()) : q = 0
  }
  function i(a, c, d, e, f, i, j) {
    function k(b) {
      if(!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
        a != "img" && m(function() {
          t.removeChild(l)
        }, 50);
        for(var d in y[c]) {
          y[c].hasOwnProperty(d) && y[c][d].onload()
        }
      }
    }
    var j = j || B.errorTimeout, l = {}, o = 0, r = 0, u = {t:d, s:c, e:f, a:i, x:j};
    y[c] === 1 && (r = 1, y[c] = [], l = b.createElement(a)), a == "object" ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
      k.call(this, r)
    }, p.splice(e, 0, u), a != "img" && (r || y[c] === 2 ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
  }
  function j(a, b, c, d, f) {
    return q = 0, b = b || "j", e(a) ? i(b == "c" ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), p.length == 1 && h()), this
  }
  function k() {
    var a = B;
    return a.loader = {load:j, i:0}, a
  }
  var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance" in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = !!b.attachEvent, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function(a) {
    return o.call(a) == "[object Array]"
  }, x = [], y = {}, z = {timeout:function(a, b) {
    return b.length && (a.timeout = b[0]), a
  }}, A, B;
  B = function(a) {
    function b(a) {
      var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {url:c, origUrl:c, prefixes:a}, e, f, g;
      for(f = 0;f < d;f++) {
        g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g))
      }
      for(f = 0;f < b;f++) {
        c = x[f](c)
      }
      return c
    }
    function g(a, e, f, g, i) {
      var j = b(a), l = j.autoCallback;
      j.url.split(".").pop().split("?").shift(), j.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]] || h), j.instead ? j.instead(a, e, f, g, i) : (y[j.url] ? j.noexec = !0 : y[j.url] = 1, f.load(j.url, j.forceCSS || !j.forceJS && "css" == j.url.split(".").pop().split("?").shift() ? "c" : c, j.noexec, j.attrs, j.timeout), (d(e) || d(l)) && f.load(function() {
        k(), e && e(j.origUrl, i, g), l && l(j.origUrl, i, g), y[j.url] = 2
      })))
    }
    function i(a, b) {
      function c(a, c) {
        if(a) {
          if(e(a)) {
            c || (j = function() {
              var a = [].slice.call(arguments);
              k.apply(this, a), l()
            }), g(a, j, b, 0, h)
          }else {
            if(Object(a) === a) {
              for(n in m = function() {
                var b = 0, c;
                for(c in a) {
                  a.hasOwnProperty(c) && b++
                }
                return b
              }(), a) {
                a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                  var a = [].slice.call(arguments);
                  k.apply(this, a), l()
                } : j[n] = function(a) {
                  return function() {
                    var b = [].slice.call(arguments);
                    a && a.apply(this, b), l()
                  }
                }(k[n])), g(a[n], j, b, n, h))
              }
            }
          }
        }else {
          !c && l()
        }
      }
      var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
      c(h ? a.yep : a.nope, !!i), i && c(i)
    }
    var j, l, m = this.yepnope.loader;
    if(e(a)) {
      g(a, 0, m, 0)
    }else {
      if(w(a)) {
        for(j = 0;j < a.length;j++) {
          l = a[j], e(l) ? g(l, 0, m, 0) : w(l) ? B(l) : Object(l) === l && i(l, m)
        }
      }else {
        Object(a) === a && i(a, m)
      }
    }
  }, B.addPrefix = function(a, b) {
    z[a] = b
  }, B.addFilter = function(a) {
    x.push(a)
  }, B.errorTimeout = 1E4, b.readyState == null && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
    b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
  }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
    var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
    k.src = a;
    for(o in d) {
      k.setAttribute(o, d[o])
    }
    c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
      !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
    }, m(function() {
      l || (l = 1, c(1))
    }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
  }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
    var e = b.createElement("link"), j, c = i ? h : c || f;
    e.href = a, e.rel = "stylesheet", e.type = "text/css";
    for(j in d) {
      e.setAttribute(j, d[j])
    }
    g || (n.parentNode.insertBefore(e, n), m(c, 0))
  }
}(this, document), Modernizr.load = function() {
  yepnope.apply(window, [].slice.call(arguments, 0))
}, Modernizr.addTest("ie8compat", function() {
  return!window.addEventListener && document.documentMode && document.documentMode === 7
});
var bkExtend = function() {
  var args = arguments;
  if(args.length == 1) {
    args = [this, args[0]]
  }
  for(var prop in args[1]) {
    args[0][prop] = args[1][prop]
  }
  return args[0]
};
function bkClass() {
}
bkClass.prototype.construct = function() {
};
bkClass.extend = function(def) {
  var classDef = function() {
    if(arguments[0] !== bkClass) {
      return this.construct.apply(this, arguments)
    }
  };
  var proto = new this(bkClass);
  bkExtend(proto, def);
  classDef.prototype = proto;
  classDef.extend = this.extend;
  return classDef
};
var bkElement = bkClass.extend({construct:function(elm, d) {
  if(typeof elm == "string") {
    elm = (d || document).createElement(elm)
  }
  elm = $BK(elm);
  return elm
}, appendTo:function(elm) {
  elm.appendChild(this);
  return this
}, appendBefore:function(elm) {
  elm.parentNode.insertBefore(this, elm);
  return this
}, addEvent:function(type, fn) {
  bkLib.addEvent(this, type, fn);
  return this
}, setContent:function(c) {
  this.innerHTML = c;
  return this
}, pos:function() {
  var curleft = curtop = 0;
  var o = obj = this;
  if(obj.offsetParent) {
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop
    }while(obj = obj.offsetParent)
  }
  var b = !window.opera ? parseInt(this.getStyle("border-width") || this.style.border) || 0 : 0;
  return[curleft + b, curtop + b + this.offsetHeight]
}, noSelect:function() {
  bkLib.noSelect(this);
  return this
}, parentTag:function(t) {
  var elm = this;
  do {
    if(elm && elm.nodeName && elm.nodeName.toUpperCase() == t) {
      return elm
    }
    elm = elm.parentNode
  }while(elm);
  return false
}, hasClass:function(cls) {
  return this.className.match(new RegExp("(\\s|^)nicEdit-" + cls + "(\\s|$)"))
}, addClass:function(cls) {
  if(!this.hasClass(cls)) {
    this.className += " nicEdit-" + cls
  }
  return this
}, removeClass:function(cls) {
  if(this.hasClass(cls)) {
    this.className = this.className.replace(new RegExp("(\\s|^)nicEdit-" + cls + "(\\s|$)"), " ")
  }
  return this
}, setStyle:function(st) {
  var elmStyle = this.style;
  for(var itm in st) {
    switch(itm) {
      case "float":
        elmStyle["cssFloat"] = elmStyle["styleFloat"] = st[itm];
        break;
      case "opacity":
        elmStyle.opacity = st[itm];
        elmStyle.filter = "alpha(opacity=" + Math.round(st[itm] * 100) + ")";
        break;
      case "className":
        this.className = st[itm];
        break;
      default:
        elmStyle[itm] = st[itm]
    }
  }
  return this
}, getStyle:function(cssRule, d) {
  var doc = !d ? document.defaultView : d;
  if(this.nodeType == 1) {
    return doc && doc.getComputedStyle ? doc.getComputedStyle(this, null).getPropertyValue(cssRule) : this.currentStyle[bkLib.camelize(cssRule)]
  }
}, remove:function() {
  this.parentNode.removeChild(this);
  return this
}, setAttributes:function(at) {
  for(var itm in at) {
    this[itm] = at[itm]
  }
  return this
}});
var bkLib = {isMSIE:navigator.appVersion.indexOf("MSIE") != -1, addEvent:function(obj, type, fn) {
  obj.addEventListener ? obj.addEventListener(type, fn, false) : obj.attachEvent("on" + type, fn)
}, toArray:function(iterable) {
  var length = iterable.length, results = new Array(length);
  while(length--) {
    results[length] = iterable[length]
  }
  return results
}, noSelect:function(element) {
  if(element.setAttribute && element.nodeName.toLowerCase() != "input" && element.nodeName.toLowerCase() != "textarea") {
    element.setAttribute("unselectable", "on")
  }
  for(var i = 0;i < element.childNodes.length;i++) {
    bkLib.noSelect(element.childNodes[i])
  }
}, camelize:function(s) {
  return s.replace(/\-(.)/g, function(m, l) {
    return l.toUpperCase()
  })
}, inArray:function(arr, item) {
  return bkLib.search(arr, item) != null
}, search:function(arr, itm) {
  for(var i = 0;i < arr.length;i++) {
    if(arr[i] == itm) {
      return i
    }
  }
  return null
}, cancelEvent:function(e) {
  e = e || window.event;
  if(e.preventDefault && e.stopPropagation) {
    e.preventDefault();
    e.stopPropagation()
  }
  return false
}, domLoad:[], domLoaded:function() {
  if(arguments.callee.done) {
    return
  }
  arguments.callee.done = true;
  for(i = 0;i < bkLib.domLoad.length;i++) {
    bkLib.domLoad[i]()
  }
}, onDomLoaded:function(fireThis) {
  this.domLoad.push(fireThis);
  if(document.addEventListener) {
    document.addEventListener("DOMContentLoaded", bkLib.domLoaded, null)
  }else {
    if(bkLib.isMSIE) {
      document.write("<style>.nicEdit-main p { margin: 0; }</style><scr" + "ipt id=__ie_onload defer " + (location.protocol == "https:" ? "src='javascript:void(0)'" : "src=//0") + "></scr" + "ipt>");
      $BK("__ie_onload").onreadystatechange = function() {
        if(this.readyState == "complete") {
          bkLib.domLoaded()
        }
      }
    }
  }
  window.onload = bkLib.domLoaded
}};
function $BK(elm) {
  if(typeof elm == "string") {
    elm = document.getElementById(elm)
  }
  return elm && !elm.appendTo ? bkExtend(elm, bkElement.prototype) : elm
}
var bkEvent = {addEvent:function(evType, evFunc) {
  if(evFunc) {
    this.eventList = this.eventList || {};
    this.eventList[evType] = this.eventList[evType] || [];
    this.eventList[evType].push(evFunc)
  }
  return this
}, fireEvent:function() {
  var args = bkLib.toArray(arguments), evType = args.shift();
  if(this.eventList && this.eventList[evType]) {
    for(var i = 0;i < this.eventList[evType].length;i++) {
      this.eventList[evType][i].apply(this, args)
    }
  }
}};
function __(s) {
  return s
}
Function.prototype.closure = function() {
  var __method = this, args = bkLib.toArray(arguments), obj = args.shift();
  return function() {
    if(typeof bkLib != "undefined") {
      return __method.apply(obj, args.concat(bkLib.toArray(arguments)))
    }
  }
};
Function.prototype.closureListener = function() {
  var __method = this, args = bkLib.toArray(arguments), object = args.shift();
  return function(e) {
    e = e || window.event;
    if(e.target) {
      var target = e.target
    }else {
      var target = e.srcElement
    }
    return __method.apply(object, [e, target].concat(args))
  }
};
var nicEditorConfig = bkClass.extend({buttons:{"bold":{name:__("Click to Bold"), command:"Bold", tags:["B", "STRONG"], css:{"font-weight":"bold"}, key:"b"}, "italic":{name:__("Click to Italic"), command:"Italic", tags:["EM", "I"], css:{"font-style":"italic"}, key:"i"}, "underline":{name:__("Click to Underline"), command:"Underline", tags:["U"], css:{"text-decoration":"underline"}, key:"u"}, "left":{name:__("Left Align"), command:"justifyleft", noActive:true}, "center":{name:__("Center Align"), command:"justifycenter", 
noActive:true}, "right":{name:__("Right Align"), command:"justifyright", noActive:true}, "justify":{name:__("Justify Align"), command:"justifyfull", noActive:true}, "ol":{name:__("Insert Ordered List"), command:"insertorderedlist", tags:["OL"]}, "ul":{name:__("Insert Unordered List"), command:"insertunorderedlist", tags:["UL"]}, "subscript":{name:__("Click to Subscript"), command:"subscript", tags:["SUB"]}, "superscript":{name:__("Click to Superscript"), command:"superscript", tags:["SUP"]}, "strikethrough":{name:__("Click to Strike Through"), 
command:"strikeThrough", css:{"text-decoration":"line-through"}}, "removeformat":{name:__("Remove Formatting"), command:"removeformat", noActive:true}, "indent":{name:__("Indent Text"), command:"indent", noActive:true}, "outdent":{name:__("Remove Indent"), command:"outdent", noActive:true}, "hr":{name:__("Horizontal Rule"), command:"insertHorizontalRule", noActive:true}}, iconsPath:"/assets/nicEditorIcons.gif", buttonList:["save", "bold", "italic", "underline", "left", "center", "right", "justify", 
"ol", "ul", "fontSize", "fontFamily", "upload", "link", "unlink", "forecolor", "bgcolor"], iconList:{"bgcolor":1, "forecolor":2, "bold":3, "center":4, "hr":5, "indent":6, "italic":7, "justify":8, "left":9, "ol":10, "outdent":11, "removeformat":12, "right":13, "save":24, "strikethrough":15, "subscript":16, "superscript":17, "ul":18, "underline":19, "image":20, "link":21, "unlink":22, "close":23, "arrow":25}});
var nicEditors = {nicPlugins:[], editors:[], registerPlugin:function(plugin, options) {
  this.nicPlugins.push({p:plugin, o:options})
}, allTextAreas:function(nicOptions) {
  var textareas = document.getElementsByTagName("textarea");
  for(var i = 0;i < textareas.length;i++) {
    nicEditors.editors.push((new nicEditor(nicOptions)).panelInstance(textareas[i]))
  }
  return nicEditors.editors
}, findEditor:function(e) {
  var editors = nicEditors.editors;
  for(var i = 0;i < editors.length;i++) {
    if(editors[i].instanceById(e)) {
      return editors[i].instanceById(e)
    }
  }
}};
var nicEditor = bkClass.extend({construct:function(o) {
  this.options = new nicEditorConfig;
  bkExtend(this.options, o);
  this.nicInstances = new Array;
  this.loadedPlugins = new Array;
  var plugins = nicEditors.nicPlugins;
  for(var i = 0;i < plugins.length;i++) {
    this.loadedPlugins.push(new plugins[i].p(this, plugins[i].o))
  }
  nicEditors.editors.push(this);
  bkLib.addEvent(document.body, "mousedown", this.selectCheck.closureListener(this))
}, panelInstance:function(e, o) {
  e = this.checkReplace($BK(e));
  var panelElm = (new bkElement("DIV")).setStyle({width:(parseInt(e.getStyle("width")) || e.clientWidth) + "px"}).appendBefore(e);
  this.setPanel(panelElm);
  return this.addInstance(e, o)
}, checkReplace:function(e) {
  var r = nicEditors.findEditor(e);
  if(r) {
    r.removeInstance(e);
    r.removePanel()
  }
  return e
}, addInstance:function(e, o) {
  e = this.checkReplace($BK(e));
  if(e.contentEditable || !!window.opera) {
    var newInstance = new nicEditorInstance(e, o, this)
  }else {
    var newInstance = new nicEditorIFrameInstance(e, o, this)
  }
  this.nicInstances.push(newInstance);
  return this
}, removeInstance:function(e) {
  e = $BK(e);
  var instances = this.nicInstances;
  for(var i = 0;i < instances.length;i++) {
    if(instances[i].e == e) {
      instances[i].remove();
      this.nicInstances.splice(i, 1)
    }
  }
}, removePanel:function(e) {
  if(this.nicPanel) {
    this.nicPanel.remove();
    this.nicPanel = null
  }
}, instanceById:function(e) {
  e = $BK(e);
  var instances = this.nicInstances;
  for(var i = 0;i < instances.length;i++) {
    if(instances[i].e == e) {
      return instances[i]
    }
  }
}, setPanel:function(e) {
  this.nicPanel = new nicEditorPanel($BK(e), this.options, this);
  this.fireEvent("panel", this.nicPanel);
  return this
}, nicCommand:function(cmd, args) {
  if(this.selectedInstance) {
    this.selectedInstance.nicCommand(cmd, args)
  }
}, getIcon:function(iconName, options) {
  var icon = this.options.iconList[iconName];
  var file = options.iconFiles ? options.iconFiles[iconName] : "";
  return{backgroundImage:"url('" + (icon ? this.options.iconsPath : file) + "')", backgroundPosition:(icon ? (icon - 1) * -18 : 0) + "px 0px"}
}, selectCheck:function(e, t) {
  var found = false;
  do {
    if(t.className && t.className.indexOf("nicEdit") != -1) {
      return false
    }
  }while(t = t.parentNode);
  this.fireEvent("blur", this.selectedInstance, t);
  this.lastSelectedInstance = this.selectedInstance;
  this.selectedInstance = null;
  return false
}});
nicEditor = nicEditor.extend(bkEvent);
var nicEditorInstance = bkClass.extend({isSelected:false, construct:function(G, D, C) {
  this.ne = C;
  this.elm = this.e = G;
  this.options = D || {};
  newX = parseInt(G.getStyle("width")) || G.clientWidth;
  newY = parseInt(G.getStyle("height")) || G.clientHeight;
  this.initialHeight = newY - 8;
  var H = G.nodeName.toLowerCase() == "textarea";
  if(H || this.options.hasPanel) {
    var B = bkLib.isMSIE && !(typeof document.body.style.maxHeight != "undefined" && document.compatMode == "CSS1Compat");
    var E = {width:newX + "px", border:"1px solid #ccc", borderTop:0, overflowY:"auto", overflowX:"hidden"};
    E[B ? "height" : "maxHeight"] = this.ne.options.maxHeight ? this.ne.options.maxHeight + "px" : null;
    this.editorContain = (new bkElement("DIV")).setStyle(E).appendBefore(G);
    var A = (new bkElement("DIV")).setStyle({width:newX - 8 + "px", margin:"4px", minHeight:newY + "px"}).addClass("main").appendTo(this.editorContain);
    G.setStyle({display:"none"});
    A.innerHTML = G.innerHTML;
    if(H) {
      A.setContent(G.value);
      this.copyElm = G;
      var F = G.parentTag("FORM");
      if(F) {
        bkLib.addEvent(F, "submit", this.saveContent.closure(this))
      }
    }
    A.setStyle(B ? {height:newY + "px"} : {overflow:"hidden"});
    this.elm = A
  }
  this.ne.addEvent("blur", this.blur.closure(this));
  this.init();
  this.blur()
}, init:function() {
  this.elm.setAttribute("contentEditable", "true");
  if(this.getContent() == "") {
    this.setContent("<br />")
  }
  this.instanceDoc = document.defaultView;
  this.elm.addEvent("mousedown", this.selected.closureListener(this)).addEvent("keypress", this.keyDown.closureListener(this)).addEvent("focus", this.selected.closure(this)).addEvent("blur", this.blur.closure(this)).addEvent("keyup", this.selected.closure(this));
  this.ne.fireEvent("add", this)
}, remove:function() {
  this.saveContent();
  if(this.copyElm || this.options.hasPanel) {
    this.editorContain.remove();
    this.e.setStyle({display:"block"});
    this.ne.removePanel()
  }
  this.disable();
  this.ne.fireEvent("remove", this)
}, disable:function() {
  this.elm.setAttribute("contentEditable", "false")
}, getSel:function() {
  return window.getSelection ? window.getSelection() : document.selection
}, getRng:function() {
  var A = this.getSel();
  if(!A) {
    return null
  }
  return A.rangeCount > 0 ? A.getRangeAt(0) : A.createRange()
}, selRng:function(A, B) {
  if(window.getSelection) {
    B.removeAllRanges();
    B.addRange(A)
  }else {
    A.select()
  }
}, selElm:function() {
  var C = this.getRng();
  if(C.startContainer) {
    var D = C.startContainer;
    if(C.cloneContents().childNodes.length == 1) {
      for(var B = 0;B < D.childNodes.length;B++) {
        var A = D.childNodes[B].ownerDocument.createRange();
        A.selectNode(D.childNodes[B]);
        if(C.compareBoundaryPoints(Range.START_TO_START, A) != 1 && C.compareBoundaryPoints(Range.END_TO_END, A) != -1) {
          return $BK(D.childNodes[B])
        }
      }
    }
    return $BK(D)
  }else {
    return $BK(this.getSel().type == "Control" ? C.item(0) : C.parentElement())
  }
}, saveRng:function() {
  this.savedRange = this.getRng();
  this.savedSel = this.getSel()
}, restoreRng:function() {
  if(this.savedRange) {
    this.selRng(this.savedRange, this.savedSel)
  }
}, keyDown:function(B, A) {
  if(B.ctrlKey) {
    this.ne.fireEvent("key", this, B)
  }
}, selected:function(C, A) {
  if(!A) {
    A = this.selElm()
  }
  if(!C.ctrlKey) {
    var B = this.ne.selectedInstance;
    if(B != this) {
      if(B) {
        this.ne.fireEvent("blur", B, A)
      }
      this.ne.selectedInstance = this;
      this.ne.fireEvent("focus", B, A)
    }
    this.ne.fireEvent("selected", B, A);
    this.isFocused = true;
    this.elm.addClass("selected")
  }
  return false
}, blur:function() {
  this.isFocused = false;
  this.elm.removeClass("selected")
}, saveContent:function() {
  if(this.copyElm || this.options.hasPanel) {
    this.ne.fireEvent("save", this);
    this.copyElm ? this.copyElm.value = this.getContent() : this.e.innerHTML = this.getContent()
  }
}, getElm:function() {
  return this.elm
}, getContent:function() {
  this.content = this.getElm().innerHTML;
  this.ne.fireEvent("get", this);
  return this.content
}, setContent:function(A) {
  this.content = A;
  this.ne.fireEvent("set", this);
  this.elm.innerHTML = this.content
}, nicCommand:function(B, A) {
  document.execCommand(B, false, A)
}});
var nicEditorIFrameInstance = nicEditorInstance.extend({savedStyles:[], init:function() {
  var c = this.elm.innerHTML.replace(/^\s+|\s+$/g, "");
  this.elm.innerHTML = "";
  !c ? c = "<br />" : c;
  this.initialContent = c;
  this.elmFrame = (new bkElement("iframe")).setAttributes({"src":"javascript:;", "frameBorder":0, "allowTransparency":"true", "scrolling":"no"}).setStyle({height:"100px", width:"100%"}).addClass("frame").appendTo(this.elm);
  if(this.copyElm) {
    this.elmFrame.setStyle({width:this.elm.offsetWidth - 4 + "px"})
  }
  var styleList = ["font-size", "font-family", "font-weight", "color"];
  for(itm in styleList) {
    this.savedStyles[bkLib.camelize(itm)] = this.elm.getStyle(itm)
  }
  setTimeout(this.initFrame.closure(this), 50)
}, disable:function() {
  this.elm.innerHTML = this.getContent()
}, initFrame:function() {
  var fd = $BK(this.elmFrame.contentWindow.document);
  fd.designMode = "on";
  fd.open();
  var css = this.ne.options.externalCSS;
  fd.write("<html><head>" + (css ? '<link href="' + css + '" rel="stylesheet" type="text/css" />' : "") + '</head><body id="nicEditContent" style="margin: 0 !important; background-color: transparent !important;">' + this.initialContent + "</body></html>");
  fd.close();
  this.frameDoc = fd;
  this.frameWin = $BK(this.elmFrame.contentWindow);
  this.frameContent = $BK(this.frameWin.document.body).setStyle(this.savedStyles);
  this.instanceDoc = this.frameWin.document.defaultView;
  this.heightUpdate();
  this.frameDoc.addEvent("mousedown", this.selected.closureListener(this)).addEvent("keyup", this.heightUpdate.closureListener(this)).addEvent("keydown", this.keyDown.closureListener(this)).addEvent("keyup", this.selected.closure(this));
  this.ne.fireEvent("add", this)
}, getElm:function() {
  return this.frameContent
}, setContent:function(c) {
  this.content = c;
  this.ne.fireEvent("set", this);
  this.frameContent.innerHTML = this.content;
  this.heightUpdate()
}, getSel:function() {
  return this.frameWin ? this.frameWin.getSelection() : this.frameDoc.selection
}, heightUpdate:function() {
  this.elmFrame.style.height = Math.max(this.frameContent.offsetHeight, this.initialHeight) + "px"
}, nicCommand:function(cmd, args) {
  this.frameDoc.execCommand(cmd, false, args);
  setTimeout(this.heightUpdate.closure(this), 100)
}});
var nicEditorPanel = bkClass.extend({construct:function(e, options, nicEditor) {
  this.elm = e;
  this.options = options;
  this.ne = nicEditor;
  this.panelButtons = new Array;
  this.buttonList = bkExtend([], this.ne.options.buttonList);
  this.panelContain = (new bkElement("DIV")).addClass("panelContain");
  this.panelElm = (new bkElement("DIV")).addClass("panel").appendTo(this.panelContain);
  this.panelContain.appendTo(e);
  var opt = this.ne.options;
  var buttons = opt.buttons;
  for(button in buttons) {
    this.addButton(button, opt, true)
  }
  this.reorder();
  e.noSelect()
}, addButton:function(buttonName, options, noOrder) {
  var button = options.buttons[buttonName];
  var type = button["type"] ? eval("(typeof(" + button["type"] + ') == "undefined") ? null : ' + button["type"] + ";") : nicEditorButton;
  var hasButton = bkLib.inArray(this.buttonList, buttonName);
  if(type && (hasButton || this.ne.options.fullPanel)) {
    this.panelButtons.push(new type(this.panelElm, buttonName, options, this.ne));
    if(!hasButton) {
      this.buttonList.push(buttonName)
    }
  }
}, findButton:function(itm) {
  for(var i = 0;i < this.panelButtons.length;i++) {
    if(this.panelButtons[i].name == itm) {
      return this.panelButtons[i]
    }
  }
}, reorder:function() {
  var bl = this.buttonList;
  for(var i = 0;i < bl.length;i++) {
    var button = this.findButton(bl[i]);
    if(button) {
      this.panelElm.appendChild(button.margin)
    }
  }
}, remove:function() {
  this.elm.remove()
}});
var nicEditorButton = bkClass.extend({construct:function(e, buttonName, options, nicEditor) {
  this.options = options.buttons[buttonName];
  this.name = buttonName;
  this.ne = nicEditor;
  this.elm = e;
  this.margin = (new bkElement("DIV")).setStyle({"float":"left", marginTop:"2px"}).appendTo(e);
  this.contain = (new bkElement("DIV")).setStyle({width:"20px", height:"20px"}).addClass("buttonContain").appendTo(this.margin);
  this.border = (new bkElement("DIV")).setStyle({backgroundColor:"#efefef", border:"1px solid #efefef"}).appendTo(this.contain);
  this.button = (new bkElement("DIV")).setStyle({width:"18px", height:"18px", overflow:"hidden", zoom:1, cursor:"pointer"}).addClass("button").setStyle(this.ne.getIcon(buttonName, options)).appendTo(this.border);
  this.button.addEvent("mouseover", this.hoverOn.closure(this)).addEvent("mouseout", this.hoverOff.closure(this)).addEvent("mousedown", this.mouseClick.closure(this)).noSelect();
  if(!window.opera) {
    this.button.onmousedown = this.button.onclick = bkLib.cancelEvent
  }
  nicEditor.addEvent("selected", this.enable.closure(this)).addEvent("blur", this.disable.closure(this)).addEvent("key", this.key.closure(this));
  this.disable();
  this.init()
}, init:function() {
}, hide:function() {
  this.contain.setStyle({display:"none"})
}, updateState:function() {
  if(this.isDisabled) {
    this.setBg()
  }else {
    if(this.isHover) {
      this.setBg("hover")
    }else {
      if(this.isActive) {
        this.setBg("active")
      }else {
        this.setBg()
      }
    }
  }
}, setBg:function(state) {
  switch(state) {
    case "hover":
      var stateStyle = {border:"1px solid #666", backgroundColor:"#ddd"};
      break;
    case "active":
      var stateStyle = {border:"1px solid #666", backgroundColor:"#ccc"};
      break;
    default:
      var stateStyle = {border:"1px solid #efefef", backgroundColor:"#efefef"}
  }
  this.border.setStyle(stateStyle).addClass("button-" + state)
}, checkNodes:function(e) {
  var elm = e;
  do {
    if(this.options.tags && bkLib.inArray(this.options.tags, elm.nodeName)) {
      this.activate();
      return true
    }
  }while(elm = elm.parentNode && elm.className != "nicEdit");
  elm = $BK(e);
  while(elm.nodeType == 3) {
    elm = $BK(elm.parentNode)
  }
  if(this.options.css) {
    for(itm in this.options.css) {
      if(elm.getStyle(itm, this.ne.selectedInstance.instanceDoc) == this.options.css[itm]) {
        this.activate();
        return true
      }
    }
  }
  this.deactivate();
  return false
}, activate:function() {
  if(!this.isDisabled) {
    this.isActive = true;
    this.updateState();
    this.ne.fireEvent("buttonActivate", this)
  }
}, deactivate:function() {
  this.isActive = false;
  this.updateState();
  if(!this.isDisabled) {
    this.ne.fireEvent("buttonDeactivate", this)
  }
}, enable:function(ins, t) {
  this.isDisabled = false;
  this.contain.setStyle({"opacity":1}).addClass("buttonEnabled");
  this.updateState();
  this.checkNodes(t)
}, disable:function(ins, t) {
  this.isDisabled = true;
  this.contain.setStyle({"opacity":0.6}).removeClass("buttonEnabled");
  this.updateState()
}, toggleActive:function() {
  this.isActive ? this.deactivate() : this.activate()
}, hoverOn:function() {
  if(!this.isDisabled) {
    this.isHover = true;
    this.updateState();
    this.ne.fireEvent("buttonOver", this)
  }
}, hoverOff:function() {
  this.isHover = false;
  this.updateState();
  this.ne.fireEvent("buttonOut", this)
}, mouseClick:function() {
  if(this.options.command) {
    this.ne.nicCommand(this.options.command, this.options.commandArgs);
    if(!this.options.noActive) {
      this.toggleActive()
    }
  }
  this.ne.fireEvent("buttonClick", this)
}, key:function(nicInstance, e) {
  if(this.options.key && e.ctrlKey && String.fromCharCode(e.keyCode || e.charCode).toLowerCase() == this.options.key) {
    this.mouseClick();
    if(e.preventDefault) {
      e.preventDefault()
    }
  }
}});
var nicPlugin = bkClass.extend({construct:function(nicEditor, options) {
  this.options = options;
  this.ne = nicEditor;
  this.ne.addEvent("panel", this.loadPanel.closure(this));
  this.init()
}, loadPanel:function(np) {
  var buttons = this.options.buttons;
  for(var button in buttons) {
    np.addButton(button, this.options)
  }
  np.reorder()
}, init:function() {
}});
var nicPaneOptions = {};
var nicEditorPane = bkClass.extend({construct:function(elm, nicEditor, options, openButton) {
  this.ne = nicEditor;
  this.elm = elm;
  this.pos = elm.pos();
  this.contain = (new bkElement("div")).setStyle({zIndex:"99999", overflow:"hidden", position:"absolute", left:this.pos[0] + "px", top:this.pos[1] + "px"});
  this.pane = (new bkElement("div")).setStyle({fontSize:"12px", border:"1px solid #ccc", "overflow":"hidden", padding:"4px", textAlign:"left", backgroundColor:"#ffffc9"}).addClass("pane").setStyle(options).appendTo(this.contain);
  if(openButton && !openButton.options.noClose) {
    this.close = (new bkElement("div")).setStyle({"float":"right", height:"16px", width:"16px", cursor:"pointer"}).setStyle(this.ne.getIcon("close", nicPaneOptions)).addEvent("mousedown", openButton.removePane.closure(this)).appendTo(this.pane)
  }
  this.contain.noSelect().appendTo(document.body);
  this.position();
  this.init()
}, init:function() {
}, position:function() {
  if(this.ne.nicPanel) {
    var panelElm = this.ne.nicPanel.elm;
    var panelPos = panelElm.pos();
    var newLeft = panelPos[0] + parseInt(panelElm.getStyle("width")) - (parseInt(this.pane.getStyle("width")) + 8);
    if(newLeft < this.pos[0]) {
      this.contain.setStyle({left:newLeft + "px"})
    }
  }
}, toggle:function() {
  this.isVisible = !this.isVisible;
  this.contain.setStyle({display:this.isVisible ? "block" : "none"})
}, remove:function() {
  if(this.contain) {
    this.contain.remove();
    this.contain = null
  }
}, append:function(c) {
  c.appendTo(this.pane)
}, setContent:function(c) {
  this.pane.setContent(c)
}});
var nicEditorAdvancedButton = nicEditorButton.extend({init:function() {
  this.ne.addEvent("selected", this.removePane.closure(this)).addEvent("blur", this.removePane.closure(this))
}, mouseClick:function() {
  if(!this.isDisabled) {
    if(this.pane && this.pane.pane) {
      this.removePane()
    }else {
      this.pane = new nicEditorPane(this.contain, this.ne, {width:this.width || "270px", backgroundColor:"#fff"}, this);
      this.addPane();
      this.ne.selectedInstance.saveRng()
    }
  }
}, addForm:function(f, elm) {
  this.form = (new bkElement("form")).addEvent("submit", this.submit.closureListener(this));
  this.pane.append(this.form);
  this.inputs = {};
  for(itm in f) {
    var field = f[itm];
    var val = "";
    if(elm) {
      val = elm.getAttribute(itm)
    }
    if(!val) {
      val = field["value"] || ""
    }
    var type = f[itm].type;
    if(type == "title") {
      (new bkElement("div")).setContent(field.txt).setStyle({fontSize:"14px", fontWeight:"bold", padding:"0px", margin:"2px 0"}).appendTo(this.form)
    }else {
      var contain = (new bkElement("div")).setStyle({overflow:"hidden", clear:"both"}).appendTo(this.form);
      if(field.txt) {
        (new bkElement("label")).setAttributes({"for":itm}).setContent(field.txt).setStyle({margin:"2px 4px", fontSize:"13px", width:"50px", lineHeight:"20px", textAlign:"right", "float":"left"}).appendTo(contain)
      }
      switch(type) {
        case "text":
          this.inputs[itm] = (new bkElement("input")).setAttributes({id:itm, "value":val, "type":"text"}).setStyle({margin:"2px 0", fontSize:"13px", "float":"left", height:"20px", border:"1px solid #ccc", overflow:"hidden"}).setStyle(field.style).appendTo(contain);
          break;
        case "select":
          this.inputs[itm] = (new bkElement("select")).setAttributes({id:itm}).setStyle({border:"1px solid #ccc", "float":"left", margin:"2px 0"}).appendTo(contain);
          for(opt in field.options) {
            var o = (new bkElement("option")).setAttributes({value:opt, selected:opt == val ? "selected" : ""}).setContent(field.options[opt]).appendTo(this.inputs[itm])
          }
          break;
        case "content":
          this.inputs[itm] = (new bkElement("textarea")).setAttributes({id:itm}).setStyle({border:"1px solid #ccc", "float":"left"}).setStyle(field.style).appendTo(contain);
          this.inputs[itm].value = val
      }
    }
  }
  (new bkElement("input")).setAttributes({"type":"submit"}).setStyle({backgroundColor:"#efefef", border:"1px solid #ccc", margin:"3px 0", "float":"left", "clear":"both"}).appendTo(this.form);
  this.form.onsubmit = bkLib.cancelEvent
}, submit:function() {
}, findElm:function(tag, attr, val) {
  var list = this.ne.selectedInstance.getElm().getElementsByTagName(tag);
  for(var i = 0;i < list.length;i++) {
    if(list[i].getAttribute(attr) == val) {
      return $BK(list[i])
    }
  }
}, removePane:function() {
  if(this.pane) {
    this.pane.remove();
    this.pane = null;
    this.ne.selectedInstance.restoreRng()
  }
}});
var nicButtonTips = bkClass.extend({construct:function(A) {
  this.ne = A;
  A.addEvent("buttonOver", this.show.closure(this)).addEvent("buttonOut", this.hide.closure(this))
}, show:function(A) {
  this.timer = setTimeout(this.create.closure(this, A), 400)
}, create:function(A) {
  this.timer = null;
  if(!this.pane) {
    this.pane = new nicEditorPane(A.button, this.ne, {fontSize:"12px", marginTop:"5px"});
    this.pane.setContent(A.options.name)
  }
}, hide:function(A) {
  if(this.timer) {
    clearTimeout(this.timer)
  }
  if(this.pane) {
    this.pane = this.pane.remove()
  }
}});
nicEditors.registerPlugin(nicButtonTips);
var nicSelectOptions = {buttons:{"fontSize":{name:__("Select Font Size"), type:"nicEditorFontSizeSelect", command:"fontsize"}, "fontFamily":{name:__("Select Font Family"), type:"nicEditorFontFamilySelect", command:"fontname"}, "fontFormat":{name:__("Select Font Format"), type:"nicEditorFontFormatSelect", command:"formatBlock"}}};
var nicEditorSelect = bkClass.extend({construct:function(e, buttonName, options, nicEditor) {
  this.options = options.buttons[buttonName];
  this.elm = e;
  this.ne = nicEditor;
  this.name = buttonName;
  this.selOptions = new Array;
  this.margin = (new bkElement("div")).setStyle({"float":"left", margin:"2px 1px 0 1px"}).appendTo(this.elm);
  this.contain = (new bkElement("div")).setStyle({width:"90px", height:"20px", cursor:"pointer", overflow:"hidden"}).addClass("selectContain").addEvent("click", this.toggle.closure(this)).appendTo(this.margin);
  this.items = (new bkElement("div")).setStyle({overflow:"hidden", zoom:1, border:"1px solid #ccc", paddingLeft:"3px", backgroundColor:"#fff"}).appendTo(this.contain);
  this.control = (new bkElement("div")).setStyle({overflow:"hidden", "float":"right", height:"18px", width:"16px"}).addClass("selectControl").setStyle(this.ne.getIcon("arrow", options)).appendTo(this.items);
  this.txt = (new bkElement("div")).setStyle({overflow:"hidden", "float":"left", width:"66px", height:"14px", marginTop:"1px", fontFamily:"sans-serif", textAlign:"center", fontSize:"12px"}).addClass("selectTxt").appendTo(this.items);
  if(!window.opera) {
    this.contain.onmousedown = this.control.onmousedown = this.txt.onmousedown = bkLib.cancelEvent
  }
  this.margin.noSelect();
  this.ne.addEvent("selected", this.enable.closure(this)).addEvent("blur", this.disable.closure(this));
  this.disable();
  this.init()
}, disable:function() {
  this.isDisabled = true;
  this.close();
  this.contain.setStyle({opacity:0.6})
}, enable:function(t) {
  this.isDisabled = false;
  this.close();
  this.contain.setStyle({opacity:1})
}, setDisplay:function(txt) {
  this.txt.setContent(txt)
}, toggle:function() {
  if(!this.isDisabled) {
    this.pane ? this.close() : this.open()
  }
}, open:function() {
  this.pane = new nicEditorPane(this.items, this.ne, {width:"88px", padding:"0px", borderTop:0, borderLeft:"1px solid #ccc", borderRight:"1px solid #ccc", borderBottom:"0px", backgroundColor:"#fff"});
  for(var i = 0;i < this.selOptions.length;i++) {
    var opt = this.selOptions[i];
    var itmContain = (new bkElement("div")).setStyle({overflow:"hidden", borderBottom:"1px solid #ccc", width:"88px", textAlign:"left", overflow:"hidden", cursor:"pointer"});
    var itm = (new bkElement("div")).setStyle({padding:"0px 4px"}).setContent(opt[1]).appendTo(itmContain).noSelect();
    itm.addEvent("click", this.update.closure(this, opt[0])).addEvent("mouseover", this.over.closure(this, itm)).addEvent("mouseout", this.out.closure(this, itm)).setAttributes("id", opt[0]);
    this.pane.append(itmContain);
    if(!window.opera) {
      itm.onmousedown = bkLib.cancelEvent
    }
  }
}, close:function() {
  if(this.pane) {
    this.pane = this.pane.remove()
  }
}, over:function(opt) {
  opt.setStyle({backgroundColor:"#ccc"})
}, out:function(opt) {
  opt.setStyle({backgroundColor:"#fff"})
}, add:function(k, v) {
  this.selOptions.push(new Array(k, v))
}, update:function(elm) {
  this.ne.nicCommand(this.options.command, elm);
  this.close()
}});
var nicEditorFontSizeSelect = nicEditorSelect.extend({sel:{1:"1&nbsp;(8pt)", 2:"2&nbsp;(10pt)", 3:"3&nbsp;(12pt)", 4:"4&nbsp;(14pt)", 5:"5&nbsp;(18pt)", 6:"6&nbsp;(24pt)", 7:"7&nbsp;(48pt)"}, init:function() {
  this.setDisplay("Font&nbsp;Size...");
  for(itm in this.sel) {
    this.add(itm, '<font size="' + itm + '">' + this.sel[itm] + "</font>")
  }
}});
var nicEditorFontFamilySelect = nicEditorSelect.extend({sel:{"arial":"Arial", "comic sans ms":"Comic Sans", "courier new":"Courier New", "georgia":"Georgia", "helvetica":"Helvetica", "impact":"Impact", "times new roman":"Times", "trebuchet ms":"Trebuchet", "verdana":"Verdana"}, init:function() {
  this.setDisplay("Font&nbsp;Family...");
  for(itm in this.sel) {
    this.add(itm, '<font face="' + itm + '">' + this.sel[itm] + "</font>")
  }
}});
var nicEditorFontFormatSelect = nicEditorSelect.extend({sel:{"p":"Paragraph", "pre":"Pre", "h6":"Heading&nbsp;6", "h5":"Heading&nbsp;5", "h4":"Heading&nbsp;4", "h3":"Heading&nbsp;3", "h2":"Heading&nbsp;2", "h1":"Heading&nbsp;1"}, init:function() {
  this.setDisplay("Font&nbsp;Format...");
  for(itm in this.sel) {
    var tag = itm.toUpperCase();
    this.add("<" + tag + ">", "<" + itm + ' style="padding: 0px; margin: 0px;">' + this.sel[itm] + "</" + tag + ">")
  }
}});
nicEditors.registerPlugin(nicPlugin, nicSelectOptions);
var nicLinkOptions = {buttons:{"link":{name:"Add Link", type:"nicLinkButton", tags:["A"]}, "unlink":{name:"Remove Link", command:"unlink", noActive:true}}};
var nicLinkButton = nicEditorAdvancedButton.extend({addPane:function() {
  this.ln = this.ne.selectedInstance.selElm().parentTag("A");
  this.addForm({"":{type:"title", txt:"Add/Edit Link"}, "href":{type:"text", txt:"URL", value:"http://", style:{width:"150px"}}, "title":{type:"text", txt:"Title"}, "target":{type:"select", txt:"Open In", options:{"":"Current Window", "_blank":"New Window"}, style:{width:"100px"}}}, this.ln)
}, submit:function(e) {
  var url = this.inputs["href"].value;
  if(url == "http://" || url == "") {
    alert("You must enter a URL to Create a Link");
    return false
  }
  this.removePane();
  if(!this.ln) {
    var tmp = "javascript:nicTemp();";
    this.ne.nicCommand("createlink", tmp);
    this.ln = this.findElm("A", "href", tmp)
  }
  if(this.ln) {
    this.ln.setAttributes({href:this.inputs["href"].value, title:this.inputs["title"].value, target:this.inputs["target"].options[this.inputs["target"].selectedIndex].value})
  }
}});
nicEditors.registerPlugin(nicPlugin, nicLinkOptions);
var nicColorOptions = {buttons:{"forecolor":{name:__("Change Text Color"), type:"nicEditorColorButton", noClose:true}, "bgcolor":{name:__("Change Background Color"), type:"nicEditorBgColorButton", noClose:true}}};
var nicEditorColorButton = nicEditorAdvancedButton.extend({addPane:function() {
  var D = {"0":"transparent", 1:"#ffffff", 2:"#201815", 3:"#BF0310", 4:"#008F44", 5:"#009ADA", 6:"#001C7D", 7:"#BA007C", 8:"#A01127", 9:"#C54832", 10:"#CB6120", 11:"#DB9600", 12:"#E5B449", 13:"#F7EC45", 14:"#DDDC1C", 15:"#A2BD31", 16:"#70A73A", 17:"#4F8E3A", 18:"#326534", 19:"#6EAA6E", 20:"#5EA099", 21:"#75AADB", 22:"#4A72B1", 23:"#002D81", 24:"#001A5A", 25:"#57157D", 26:"#7B047D", 27:"#840E5A", 28:"#B10052", 29:"#BF3276", 30:"#C4BA9E", 31:"#9B897A", 32:"#716858", 33:"#584E40", 34:"#BC9D6C", 35:"#A27F51", 
  36:"#82613C", 37:"#6D5128", 38:"#5A3F09", 39:"#3B2B16", 40:"#434142", 41:"#5B5B5E", 42:"#717175", 43:"#86858A", 44:"#9A999D", 45:"#ADADB2", 46:"#C2C3C8", 47:"#D7D8DC", 48:"#ECEDEF"};
  var H = (new bkElement("DIV")).setStyle({width:"270px"});
  for(var A in D) {
    var I = D[A];
    var C = (new bkElement("DIV")).setStyle({cursor:"pointer", height:"15px", "float":"left"}).appendTo(H);
    var G = (new bkElement("DIV")).setStyle({border:"2px solid " + I}).appendTo(C);
    if(I === "transparent") {
      var B = (new bkElement("DIV")).setStyle({backgroundImage:"url('" + VISH.ImagesPath + "transparent_wysiwyg.png')", overflow:"hidden", width:"11px", height:"11px"}).addEvent("click", this.colorSelect.closure(this, I)).addEvent("mouseover", this.on.closure(this, G)).addEvent("mouseout", this.off.closure(this, G, I)).setAttributes({"title":"set color to " + I}).appendTo(G)
    }else {
      var B = (new bkElement("DIV")).setStyle({backgroundColor:I, overflow:"hidden", width:"11px", height:"11px"}).addEvent("click", this.colorSelect.closure(this, I)).addEvent("mouseover", this.on.closure(this, G)).addEvent("mouseout", this.off.closure(this, G, I)).setAttributes({"title":"set color to " + I}).appendTo(G)
    }
    if(!window.opera) {
      C.onmousedown = B.onmousedown = bkLib.cancelEvent
    }
  }
  this.pane.append(H.noSelect())
}, colorSelect:function(A) {
  this.ne.nicCommand("foreColor", A);
  this.removePane()
}, on:function(A) {
  A.setStyle({border:"2px solid #000"})
}, off:function(A, B) {
  A.setStyle({border:"2px solid " + B})
}});
var nicEditorBgColorButton = nicEditorColorButton.extend({colorSelect:function(c) {
  this.ne.nicCommand("hiliteColor", c);
  this.removePane()
}});
nicEditors.registerPlugin(nicPlugin, nicColorOptions);
var nicImageOptions = {buttons:{"image":{name:"Add Image", type:"nicImageButton", tags:["IMG"]}}};
var nicImageButton = nicEditorAdvancedButton.extend({addPane:function() {
  this.im = this.ne.selectedInstance.selElm().parentTag("IMG");
  this.addForm({"":{type:"title", txt:"Add/Edit Image"}, "src":{type:"text", txt:"URL", "value":"http://", style:{width:"150px"}}, "alt":{type:"text", txt:"Alt Text", style:{width:"100px"}}, "align":{type:"select", txt:"Align", options:{none:"Default", "left":"Left", "right":"Right"}}}, this.im)
}, submit:function(e) {
  var src = this.inputs["src"].value;
  if(src == "" || src == "http://") {
    alert("You must enter a Image URL to insert");
    return false
  }
  this.removePane();
  if(!this.im) {
    var tmp = "javascript:nicImTemp();";
    this.ne.nicCommand("insertImage", tmp);
    this.im = this.findElm("IMG", "src", tmp)
  }
  if(this.im) {
    this.im.setAttributes({src:this.inputs["src"].value, alt:this.inputs["alt"].value, align:this.inputs["align"].value})
  }
}});
nicEditors.registerPlugin(nicPlugin, nicImageOptions);
var nicSaveOptions = {buttons:{"save":{name:__("Save this content"), type:"nicEditorSaveButton"}}};
var nicEditorSaveButton = nicEditorButton.extend({init:function() {
  if(!this.ne.options.onSave) {
    this.margin.setStyle({"display":"none"})
  }
}, mouseClick:function() {
  var onSave = this.ne.options.onSave;
  var selectedInstance = this.ne.selectedInstance;
  onSave(selectedInstance.getContent(), selectedInstance.elm.id, selectedInstance)
}});
nicEditors.registerPlugin(nicPlugin, nicSaveOptions);
var PERMANENT_URL_PREFIX = "";
var SLIDE_CLASSES = ["far-past", "past", "current", "next", "far-next"];
var PM_TOUCH_SENSITIVITY = 15;
var curSlide;
if(typeof document !== "undefined" && !("classList" in document.createElement("a"))) {
  (function(view) {
    var classListProp = "classList", protoProp = "prototype", elemCtrProto = (view.HTMLElement || view.Element)[protoProp], objCtr = Object;
    strTrim = String[protoProp].trim || function() {
      return this.replace(/^\s+|\s+$/g, "")
    }, arrIndexOf = Array[protoProp].indexOf || function(item) {
      for(var i = 0, len = this.length;i < len;i++) {
        if(i in this && this[i] === item) {
          return i
        }
      }
      return-1
    }, DOMEx = function(type, message) {
      this.name = type;
      this.code = DOMException[type];
      this.message = message
    }, checkTokenAndGetIndex = function(classList, token) {
      if(token === "") {
        throw new DOMEx("SYNTAX_ERR", "An invalid or illegal string was specified");
      }
      if(/\s/.test(token)) {
        throw new DOMEx("INVALID_CHARACTER_ERR", "String contains an invalid character");
      }
      return arrIndexOf.call(classList, token)
    }, ClassList = function(elem) {
      var trimmedClasses = strTrim.call(elem.className), classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [];
      for(var i = 0, len = classes.length;i < len;i++) {
        this.push(classes[i])
      }
      this._updateClassName = function() {
        elem.className = this.toString()
      }
    }, classListProto = ClassList[protoProp] = [], classListGetter = function() {
      return new ClassList(this)
    };
    DOMEx[protoProp] = Error[protoProp];
    classListProto.item = function(i) {
      return this[i] || null
    };
    classListProto.contains = function(token) {
      token += "";
      return checkTokenAndGetIndex(this, token) !== -1
    };
    classListProto.add = function(token) {
      token += "";
      if(checkTokenAndGetIndex(this, token) === -1) {
        this.push(token);
        this._updateClassName()
      }
    };
    classListProto.remove = function(token) {
      token += "";
      var index = checkTokenAndGetIndex(this, token);
      if(index !== -1) {
        this.splice(index, 1);
        this._updateClassName()
      }
    };
    classListProto.toggle = function(token) {
      token += "";
      if(checkTokenAndGetIndex(this, token) === -1) {
        this.add(token)
      }else {
        this.remove(token)
      }
    };
    classListProto.toString = function() {
      return this.join(" ")
    };
    if(objCtr.defineProperty) {
      var classListPropDesc = {get:classListGetter, enumerable:true, configurable:true};
      try {
        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc)
      }catch(ex) {
        if(ex.number === -2146823252) {
          classListPropDesc.enumerable = false;
          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc)
        }
      }
    }else {
      if(objCtr[protoProp].__defineGetter__) {
        elemCtrProto.__defineGetter__(classListProp, classListGetter)
      }
    }
  })(self)
}
function getSlideEl(no) {
  if(no < 0 || no >= slideEls.length) {
    return null
  }else {
    return slideEls[no]
  }
}
function updateSlideClass(slideNo, className) {
  var el = getSlideEl(slideNo);
  if(!el) {
    return
  }
  if(className) {
    el.classList.add(className)
  }
  for(var i in SLIDE_CLASSES) {
    if(className != SLIDE_CLASSES[i]) {
      el.classList.remove(SLIDE_CLASSES[i])
    }
  }
}
function updateSlides(goingRight) {
  for(var i = 0;i < slideEls.length;i++) {
    switch(i) {
      case curSlide - 2:
        updateSlideClass(i, "far-past");
        break;
      case curSlide - 1:
        updateSlideClass(i, "past");
        break;
      case curSlide:
        updateSlideClass(i, "current");
        break;
      case curSlide + 1:
        updateSlideClass(i, "next");
        break;
      case curSlide + 2:
        updateSlideClass(i, "far-next");
        break;
      default:
        updateSlideClass(i);
        break
    }
  }
  if(goingRight) {
    triggerLeaveEvent(curSlide - 1)
  }else {
    triggerLeaveEvent(curSlide + 1)
  }
  triggerEnterEvent(curSlide);
  if(isChromeVoxActive()) {
    speakAndSyncToNode(slideEls[curSlide])
  }
  updateHash()
}
function buildNextItem() {
  var toBuild = slideEls[curSlide].querySelectorAll(".to-build");
  if(!toBuild.length) {
    return false
  }
  toBuild[0].classList.remove("to-build", "");
  if(isChromeVoxActive()) {
    speakAndSyncToNode(toBuild[0])
  }
  return true
}
function prevSlide() {
  if(curSlide > 0) {
    curSlide--;
    updateSlides(false)
  }
}
function nextSlide() {
  if(buildNextItem()) {
    return
  }
  if(curSlide < slideEls.length - 1) {
    curSlide++;
    updateSlides(true)
  }
}
function triggerEnterEvent(no) {
  var el = getSlideEl(no);
  if(!el) {
    return
  }
  var onEnter = el.getAttribute("onslideenter");
  if(onEnter) {
    (new Function(onEnter)).call(el)
  }
  var evt = document.createEvent("Event");
  evt.initEvent("slideenter", true, true);
  evt.slideNumber = no + 1;
  el.dispatchEvent(evt)
}
function triggerLeaveEvent(no) {
  var el = getSlideEl(no);
  if(!el) {
    return
  }
  var onLeave = el.getAttribute("onslideleave");
  if(onLeave) {
    (new Function(onLeave)).call(el)
  }
  var evt = document.createEvent("Event");
  evt.initEvent("slideleave", true, true);
  evt.slideNumber = no + 1;
  el.dispatchEvent(evt)
}
function handleTouchStart(event) {
  if(event.touches.length == 1) {
    touchDX = 0;
    touchDY = 0;
    touchStartX = event.touches[0].pageX;
    touchStartY = event.touches[0].pageY;
    $(document).bind("touchmove", handleTouchMove);
    $(document).bind("touchend", handleTouchEnd)
  }
}
function handleTouchMove(event) {
  if(event.touches.length > 1) {
    cancelTouch()
  }else {
    touchDX = event.touches[0].pageX - touchStartX;
    touchDY = event.touches[0].pageY - touchStartY
  }
}
function handleTouchEnd(event) {
  var dx = Math.abs(touchDX);
  var dy = Math.abs(touchDY);
  if(dx > PM_TOUCH_SENSITIVITY && dy < dx * 2 / 3) {
    if(touchDX > 0) {
      VISH.SlidesUtilities.backwardOneSlide()
    }else {
      VISH.SlidesUtilities.forwardOneSlide()
    }
  }
  cancelTouch()
}
function cancelTouch() {
  document.body.removeEventListener("touchmove", handleTouchMove, true);
  document.body.removeEventListener("touchend", handleTouchEnd, true)
}
function setupInteraction() {
  $(document).bind("touchstart", handleTouchStart)
}
function isChromeVoxActive() {
  if(typeof cvox == "undefined") {
    return false
  }else {
    return true
  }
}
function speakAndSyncToNode(node) {
  if(!isChromeVoxActive()) {
    return
  }
  cvox.ChromeVox.navigationManager.switchToStrategy(cvox.ChromeVoxNavigationManager.STRATEGIES.LINEARDOM, 0, true);
  cvox.ChromeVox.navigationManager.syncToNode(node);
  cvox.ChromeVoxUserCommands.finishNavCommand("");
  var target = node;
  while(target.firstChild) {
    target = target.firstChild
  }
  cvox.ChromeVox.navigationManager.syncToNode(target)
}
function speakNextItem() {
  if(!isChromeVoxActive()) {
    return
  }
  cvox.ChromeVox.navigationManager.switchToStrategy(cvox.ChromeVoxNavigationManager.STRATEGIES.LINEARDOM, 0, true);
  cvox.ChromeVox.navigationManager.next(true);
  if(!cvox.DomUtil.isDescendantOfNode(cvox.ChromeVox.navigationManager.getCurrentNode(), slideEls[curSlide])) {
    var target = slideEls[curSlide];
    while(target.firstChild) {
      target = target.firstChild
    }
    cvox.ChromeVox.navigationManager.syncToNode(target);
    cvox.ChromeVox.navigationManager.next(true)
  }
  cvox.ChromeVoxUserCommands.finishNavCommand("")
}
function speakPrevItem() {
  if(!isChromeVoxActive()) {
    return
  }
  cvox.ChromeVox.navigationManager.switchToStrategy(cvox.ChromeVoxNavigationManager.STRATEGIES.LINEARDOM, 0, true);
  cvox.ChromeVox.navigationManager.previous(true);
  if(!cvox.DomUtil.isDescendantOfNode(cvox.ChromeVox.navigationManager.getCurrentNode(), slideEls[curSlide])) {
    var target = slideEls[curSlide];
    while(target.lastChild) {
      target = target.lastChild
    }
    cvox.ChromeVox.navigationManager.syncToNode(target);
    cvox.ChromeVox.navigationManager.previous(true)
  }
  cvox.ChromeVoxUserCommands.finishNavCommand("")
}
function getCurSlideFromHash() {
  var slideNo = parseInt(location.hash.substr(1));
  if(slideNo) {
    curSlide = slideNo - 1
  }else {
    curSlide = 0
  }
}
function updateHash() {
  location.replace("#" + (curSlide + 1))
}
function isSlideFocused() {
  if($(".wysiwygInstance").is(":focus")) {
    return false
  }
  return true
}
function handleBodyKeyDown(event) {
  switch(event.keyCode) {
    case 39:
    ;
    case 34:
      if(isSlideFocused()) {
        VISH.SlidesUtilities.forwardOneSlide();
        event.preventDefault()
      }
      break;
    case 37:
      if(isSlideFocused()) {
        VISH.SlidesUtilities.backwardOneSlide();
        event.preventDefault()
      }
      break;
    case 33:
      VISH.SlidesUtilities.backwardOneSlide();
      event.preventDefault();
      break;
    case 40:
      if(isChromeVoxActive()) {
        if(isSlideFocused()) {
          speakNextItem();
          event.preventDefault()
        }
      }else {
        if(isSlideFocused()) {
          VISH.SlidesUtilities.forwardOneSlide();
          event.preventDefault()
        }
      }
      break;
    case 38:
      if(isChromeVoxActive()) {
        if(isSlideFocused) {
          speakPrevItem();
          event.preventDefault()
        }
      }else {
        if(isSlideFocused()) {
          VISH.SlidesUtilities.backwardOneSlide();
          event.preventDefault()
        }
      }
      break
  }
}
var addedEventListeners = false;
function addEventListeners() {
  if(!addedEventListeners) {
    $(document).bind("keydown", handleBodyKeyDown);
    addedEventListeners = true
  }
}
function addFontStyle() {
  var el = document.createElement("link");
  el.rel = "stylesheet";
  el.type = "text/css";
  el.href = "http://fonts.googleapis.com/css?family=" + "Open+Sans:regular,semibold,italic,italicsemibold|Droid+Sans+Mono";
  document.body.appendChild(el)
}
function addGeneralStyle() {
  var el = document.createElement("link");
  el.rel = "stylesheet";
  el.type = "text/css";
  el.href = PERMANENT_URL_PREFIX + VISH.StylesheetsPath + "styles.css";
  document.body.appendChild(el);
  var el = document.createElement("meta");
  el.name = "viewport";
  el.content = "width=1100,height=750";
  document.querySelector("head").appendChild(el);
  var el = document.createElement("meta");
  el.name = "apple-mobile-web-app-capable";
  el.content = "yes";
  document.querySelector("head").appendChild(el)
}
function makeBuildLists() {
  for(var i = curSlide, slide;slide = slideEls[i];i++) {
    var items = slide.querySelectorAll(".build > *");
    for(var j = 0, item;item = items[j];j++) {
      if(item.classList) {
        item.classList.add("to-build")
      }
    }
  }
}
function handleDomLoaded() {
  slideEls = document.querySelectorAll("section.slides > article");
  addFontStyle();
  updateSlides();
  setupInteraction();
  makeBuildLists();
  document.body.classList.add("loaded")
}
function initialize() {
  getCurSlideFromHash();
  if(window["_DEBUG"]) {
    PERMANENT_URL_PREFIX = "../"
  }
  if(window["_DCL"]) {
    handleDomLoaded()
  }else {
    $(document).bind("OURDOMContentLoaded", handleDomLoaded)
  }
}
if(!window["_DEBUG"] && document.location.href.indexOf("?debug") !== -1) {
  document.addEventListener("OURDOMContentLoaded", function() {
    window["_DCL"] = true
  }, false);
  window["_DEBUG"] = true;
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "../slides.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(script, s);
  s.parentNode.removeChild(s)
}else {
  initialize()
}
;(function($) {
  $.widget("ui.tagit", {options:{tagSource:[], triggerKeys:["enter", "space", "comma", "tab"], initialTags:[], minLength:1, select:false, allowNewTags:true, caseSensitive:false, sortable:false, highlightOnExistColor:"#0F0", emptySearch:true, watermarkAllowMessage:"Add tags", watermarkDenyMessage:"Tags limit reached", tagsChanged:function(tagValue, action, element) {
  }}, _splitAt:/\ |,/g, _existingAtIndex:0, _pasteMetaKeyPressed:false, _keys:{backspace:[8], enter:[13], space:[32], comma:[44, 188], tab:[9]}, _sortable:{sorting:-1}, _create:function() {
    var self = this;
    this.tagsArray = [];
    this.timer = null;
    this.element.addClass("tagit");
    this.element.children("li").each(function() {
      var tag = $(this);
      var tagValue = tag.attr("tagValue");
      self.options.initialTags.push({label:tag.text(), value:tagValue ? tagValue : tag.text()})
    });
    self._splitAt = null;
    if($.inArray("space", self.options.triggerKeys) > 0 && $.inArray("comma", self.options.triggerKeys) > 0) {
      self._splitAt = /\ |,/g
    }else {
      if($.inArray("space", self.options.triggerKeys) > 0) {
        self._splitAt = /\ /g
      }else {
        if($.inArray("comma", self.options.triggerKeys) > 0) {
          self._splitAt = /,/g
        }
      }
    }
    this.element.html('<li class="tagit-new"><input class="tagit-input" type="text" /></li>');
    this.input = this.element.find(".tagit-input");
    if(typeof $().watermark == "function") {
      this.input.watermark(this.options.watermarkAllowMessage)
    }
    $(this.element).click(function(e) {
      if($(e.target).hasClass("tagit-close")) {
        var parent = $(e.target).parent();
        var tag = self.tagsArray[parent.index()];
        tag.element.remove();
        self._popTag(tag)
      }else {
        self.input.focus();
        if(self.options.emptySearch && $(e.target).hasClass("tagit-input") && self.input.val() == "" && self.input.autocomplete != undefined) {
          self.input.autocomplete("search")
        }
      }
    });
    var os = this.options.select;
    this.options.appendTo = this.element;
    this.options.source = this.options.tagSource;
    this.options.select = function(event, ui) {
      self.input.data("autoCompleteTag", true);
      clearTimeout(self.timer);
      if(ui.item.label === undefined) {
        self._addTag(ui.item.value)
      }else {
        self._addTag(ui.item.label, ui.item.value)
      }
      event.stopPropagation();
      return false
    };
    this.options.focus = function(event, ui) {
      if(ui.item.label !== undefined && /^key/.test(event.originalEvent.originalEvent.type)) {
        self.input.val(ui.item.label);
        self.input.attr("tagValue", ui.item.value);
        return false
      }
    };
    this.options.autoFocus = !this.options.allowNewTags;
    this.input.autocomplete(this.options);
    this.options.select = os;
    this.input.keydown(function(e) {
      var lastLi = self.element.children(".tagit-choice:last");
      if(e.which == self._keys.backspace) {
        return self._backspace(lastLi)
      }
      if(self._isInitKey(e.which) && !(self._isTabKey(e.which) && this.value == "" && !self.input.data("autoCompleteTag"))) {
        e.preventDefault();
        self.input.data("autoCompleteTag", false);
        if(self.options.allowNewTags && $(this).val().length >= self.options.minLength) {
          self._addTag($(this).val())
        }
      }
      if(self.options.maxLength !== undefined && self.input.val().length == self.options.maxLength) {
        e.preventDefault()
      }
      if(lastLi.hasClass("selected")) {
        lastLi.removeClass("selected")
      }
      _pasteMetaKeyPressed = e.metaKey;
      self.lastKey = e.which
    });
    this.input.keyup(function(e) {
      if(_pasteMetaKeyPressed && (e.which == 91 || e.which == 86)) {
        $(this).blur()
      }
      window.setTimeout(function() {
        _pasteMetaKeyPressed = e.metaKey
      }, 250)
    });
    this.input.blur(function(e) {
      self.currentLabel = $(this).val();
      self.currentValue = $(this).attr("tagValue");
      if(self.options.allowNewTags && self.currentLabel) {
        self.timer = setTimeout(function() {
          self._addTag(self.currentLabel, self.currentValue);
          self.currentValue = "";
          self.currentLabel = ""
        }, 400)
      }
      $(this).val("").removeAttr("tagValue");
      return true
    });
    if(!String.prototype.trim) {
      String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
      }
    }
    if(this.options.select) {
      this.select = $('<select class="tagit-hiddenSelect" name="' + this.element.attr("name") + '" multiple="multiple"></select>');
      this.element.after(this.select)
    }
    this._initialTags();
    if(self.options.sortable !== false) {
      var soptions = {items:".tagit-choice", containment:"parent", opacity:0.6, tolerance:"pointer", start:function(event, ui) {
        self._sortable.tag = $(ui.item);
        self._sortable.origIndex = self._sortable.tag.index()
      }, update:function(event, ui) {
        self._sortable.newIndex = self._sortable.tag.index();
        self._moveTag(self._sortable.origIndex, self._sortable.newIndex);
        if(self.options.tagsChanged) {
          var tag = self.tagsArray[self._sortable.newIndex];
          self.options.tagsChanged(tag.value, "moved", tag.element)
        }
      }};
      if(self.options.sortable == "handle") {
        soptions.handle = "a.ui-icon";
        soptions.cursor = "move"
      }
      self.element.sortable(soptions)
    }
  }, _popSelect:function(tag) {
    $("option:eq(" + tag.index + ")", this.select).remove();
    this.select.change()
  }, _addSelect:function(tag) {
    this.select.append('<option selected="selected" value="' + tag.value + '">' + tag.label + "</option>");
    this.select.change()
  }, _popTag:function(tag) {
    if(tag === undefined) {
      tag = this.tagsArray.pop()
    }else {
      this.tagsArray.splice(tag.index, 1)
    }
    if(typeof $().watermark == "function") {
      this.input.watermark(this.options.watermarkAllowMessage)
    }
    for(var ind in this.tagsArray) {
      this.tagsArray[ind].index = ind
    }
    if(this.options.select) {
      this._popSelect(tag)
    }
    if(this.options.tagsChanged) {
      this.options.tagsChanged(tag.value || tag.label, "popped", null)
    }
    return
  }, _addTag:function(label, value) {
    if(this.tagsArray.length > this.options.maxTags - 1) {
      $(this.input).blur();
      return false
    }
    this.input.autocomplete("close").val("");
    if(this._splitAt && label.search(this._splitAt) > 0) {
      var result = label.split(this._splitAt);
      for(var i = 0;i < result.length;i++) {
        this._addTag(result[i], value)
      }
      return
    }
    label = label.replace(/,+$/, "").trim();
    if(label == "") {
      return false
    }
    var tagExists = this._exists(label, value);
    if(tagExists !== false) {
      this._highlightExisting(tagExists);
      return false
    }
    if(this.tagsArray.length == this.options.maxTags - 1) {
      if(typeof $().watermark == "function") {
        this.input.watermark(this.options.watermarkDenyMessage)
      }
      $(this.input).blur()
    }
    var tag = this.tag(label, value);
    tag.element = $('<li class="tagit-choice"' + (value !== undefined ? ' tagValue="' + value + '"' : "") + ">" + (this.options.sortable == "handle" ? '<a class="ui-icon ui-icon-grip-dotted-vertical" style="float:left"></a>' : "") + label + '<a class="tagit-close">x</a></li>');
    tag.element.insertBefore(this.input.parent());
    this.tagsArray.push(tag);
    this.input.val("");
    if(this.options.select) {
      this._addSelect(tag)
    }
    if(this.options.tagsChanged) {
      this.options.tagsChanged(tag.label, "added", tag.element)
    }
    return true
  }, _removeTagWithValue:function(label, value) {
    var index = this._exists(label, value);
    if(index != false) {
      var tag = this.tagsArray[index];
      tag.element.remove();
      this._popTag(tag)
    }
  }, _exists:function(label, value) {
    if(this.tagsArray.length == 0) {
      return false
    }
    label = this._lowerIfCaseInsensitive(label);
    value = this._lowerIfCaseInsensitive(value);
    for(var ind in this.tagsArray) {
      if(this._lowerIfCaseInsensitive(this.tagsArray[ind].label) == label) {
        if(value !== undefined) {
          if(this._lowerIfCaseInsensitive(this.tagsArray[ind].value) == value) {
            return ind
          }
        }else {
          return ind
        }
      }
    }
    return false
  }, _highlightExisting:function(index) {
    if(this.options.highlightOnExistColor === undefined) {
      return
    }
    var tag = this.tagsArray[index];
    tag.element.stop();
    var initialColor = tag.element.css("color");
    tag.element.animate({color:this.options.highlightOnExistColor}, 100).animate({"color":initialColor}, 800)
  }, _isInitKey:function(keyCode) {
    var keyName = "";
    for(var key in this._keys) {
      if($.inArray(keyCode, this._keys[key]) != -1) {
        keyName = key
      }
    }
    if($.inArray(keyName, this.options.triggerKeys) != -1) {
      return true
    }
    return false
  }, _isTabKey:function(keyCode) {
    var tabKeys = this._keys["tab"];
    return $.inArray(keyCode, tabKeys) > -1
  }, _removeTag:function() {
    this._popTag();
    this.element.children(".tagit-choice:last").remove()
  }, _backspace:function(li) {
    if(this.input.val() == "") {
      if(this.lastKey == this._keys.backspace) {
        this._popTag();
        li.remove();
        this.lastKey = null
      }else {
        li.addClass("selected");
        this.lastKey = this._keys.backspace
      }
    }
    return true
  }, _initialTags:function() {
    var input = this;
    var _temp;
    if(this.options.tagsChanged) {
      _temp = this.options.tagsChanged
    }
    this.options.tagsChanged = null;
    if(this.options.initialTags.length != 0) {
      $(this.options.initialTags).each(function(i, element) {
        if(typeof element == "object") {
          input._addTag(element.label, element.value)
        }else {
          input._addTag(element)
        }
      })
    }
    this.options.tagsChanged = _temp
  }, _lowerIfCaseInsensitive:function(inp) {
    if(inp === undefined || typeof inp != typeof"a") {
      return inp
    }
    if(this.options.caseSensitive) {
      return inp
    }
    return inp.toLowerCase()
  }, _moveTag:function(old_index, new_index) {
    this.tagsArray.splice(new_index, 0, this.tagsArray.splice(old_index, 1)[0]);
    for(var ind in this.tagsArray) {
      this.tagsArray[ind].index = ind
    }
    if(this.options.select) {
      $("option:eq(" + old_index + ")", this.select).insertBefore($("option:eq(" + new_index + ")", this.select))
    }
  }, tags:function() {
    return this.tagsArray
  }, destroy:function() {
    $.Widget.prototype.destroy.apply(this, arguments);
    this.tagsArray = []
  }, reset:function() {
    this.element.find(".tagit-choice").remove();
    this.tagsArray = [];
    if(this.options.select) {
      this.select.children().remove();
      this.select.change()
    }
    this._initialTags();
    if(this.options.tagsChanged) {
      this.options.tagsChanged(null, "reset", null)
    }
    if(typeof $().watermark == "function") {
      this.input.watermark(this.options.watermarkAllowMessage)
    }
  }, fill:function(tags) {
    if(tags !== undefined) {
      this.options.initialTags = tags
    }
    this.reset()
  }, add:function(label, value) {
    if(typeof label == "object") {
      return this._addTag({label:label, value:value})
    }else {
      return this._addTag(label, value)
    }
  }, remove:function(value) {
    this._removeTagWithValue(value, value)
  }, tag:function(label, value, element) {
    var self = this;
    return{label:label, value:value === undefined ? label : value, element:element, index:self.tagsArray.length}
  }})
})(jQuery);
var i18n_Vish = {"es":{"i.walk1":"Puedes utilizar el icono tutorial", "i.walk2":'durante las secciones de la aplicaci\u00f3n para servirte de ayuda a la hora de utilizar el "ViSH editor". De esta manera podras aprender a utilizar el programa desde sus funciones b\u00e1sicas hasta la publicaci\u00f3n final de tu excursi\u00f3n. Pulsa "Siguiente" para continuar.', "i.walk3":'Este espacio te permite a\u00f1adir el t\u00edtulo de tu excursi\u00f3n.El t\u00edtulo de la excursion es obligatorio ya que gracias a el, otros usuarios podran encontrala mas f\u00e1cilmente dentro del ViSH. Pulsa "Siguiente" para continuar.', 
"i.walk4":'En este espacio puedes explicar en mas detalle los conceptos e ideas de tu excursi\u00f3n, as\u00ed como los datos que consideres interesantes para que los usuarios sepan el contenido de esta. Pulsa "Siguiente" para continuar.', "i.walk5":'A\u00f1ade palabras que vayan acorde con el tema de tu excursion para que esta aparezca a la hora de que los usuarios busquen temas dentro del ViSH. Pulsa "Siguiente" para continuar.', "i.walk6":'Escoje una de estas imagenes para representar tu excursion dentro del ViSH.Utiliza las flechas de los laterales o los circulos en la parte inferior de la galer\u00eda para ver todas las imagenes y escojer una. Pulsa "Siguiente" para continuar.', 
"i.walk7":'Una vez que cierres el tutorial pulsando el bot\u00f3n "cerrar", haz click en el boton continuar situado debajo de este. De esta manera salvaras los detalles de tu excursi\u00f3n y podr\u00e1s comenzar a a\u00f1adir contenido a esta.', "i.walk8":'Recuerda que puedes utilizar el icono "tutorial" cada vez que necesites ayuda en la aplicaci\u00f3n. Esta zona, es el escritorio donde crear\u00e1s tus excursiones.Pulsa "Siguiente" para continuar.', "i.walk9":'En esta zona podr\u00e1s ver las opciones principales para crear y editar una excursi\u00f3n virtual dentro de ViSH.Pulsa "Siguiente" para continuar.', 
"i.walk9":'Haciendo click en este bot\u00f3n, podr\u00e1s volver a ver la pantalla principal donde a\u00f1adiste la informaci\u00f3n a tu excursi\u00f3n.Pulsa "Siguiente" para continuar.', "i.walk10":'Haciendo click en este bot\u00f3n, podr\u00e1s volver a ver la pantalla principal donde a\u00f1adiste la informaci\u00f3n a tu excursi\u00f3n.Pulsa "Siguiente" para continuar.', "i.walk11":'Esta zona se utiliza para definir el paginado de tu excursi\u00f3n, atraves de esta secci\u00f3n podras crear, moverte y editar cualquiera de las paginas de tu excursi\u00f3n.Pulsa "Siguiente" para continuar.', 
"i.walk12":'Atraves de este bot\u00f3n podr\u00e1s salvar y publicar tus excursiones en ViSH.Pulsa "Siguiente" para continuar.', "i.walk13":'Este icono te llevar\u00e1 a la ventana de selecci\u00f3n de plantillas para a\u00f1adir paginas a tu excursi\u00f3n. Cuando a\u00f1adas una nueva p\u00e1gina te aprecera a modo de icono en la l\u00ednea de tiempo para mostrarte su ubicaci\u00f3n dentro del paginado de la excursi\u00f3n.Pulsa "Cerrar" para continuar.', "i.walk14":'Esta zona te ofrece una variedad de plantillas para a\u00f1adir a tu excursi\u00f3n. Solo tienes que hacer click en la miniatura que mas se ajuste a la informaci\u00f3n que quieras transmitir.Pulsa "Cerrar" para continuar.', 
"i.walk15":"Para rellenar la plantilla que has escojido, solo tienes que hacer click en los espacios grises de esta. Si haces click dentro, te aparecer\u00e1n los siguientes iconos:", "i.walk16":"Si haces click en uno de estos iconos (dependiend de que tipo de contenido quieras a\u00f1adir a esa zona), te aparecer\u00e1 otra ventana que te ayudar\u00e1 en esta tarea, a excepci\u00f3n del icono de texto, que mostrar\u00e1 una barra en zona superior con herramientas para tratar tu tipograf\u00eda y definir el estilo de tu texto.", 
"i.walk17":"Una vez hayas rellenado una zona gris con contenido, podras editarla volviendo a hacer click en el espacio que contiene el contenido. En caso de que quieras borrar este contenido puedes hacer click en el icono inferior derecho de cada zona gris rellenacon contenido:", "i.walk18":"Si quisieras borrar una plantilla o cerrar ventanas en la aplicaci\u00f3n, deberas usar el icono superior derecho:", "i.walk19":'Si necesitas cualquier otra ayuda con el contenido, siempre puedes utilizar los iconos "tutorial".Pulsa "Cerrar" para continuar.', 
"i.walk20":"Esta ventana te ayudar\u00e1 a la hora de a\u00f1adir imagenes. Como puedes ver el la zona superior tienes las siguientes opciones:", "i.walk21":"(a\u00f1adir imagen desde un enlace)", "i.walk22":"(a\u00f1adir imagen subiendola al repositorio)", "i.walk23":"(a\u00f1adir imagen desde el repositorio)", "i.walk24":"(a\u00f1adir imagen desde flickr)", "i.walk25":'Ahora estas en la secci\u00f3n Url.Pulsa "Siguiente" para continuar.', "i.walk26":"Este espacio esta reservardo para escribir o pegar un enlace que contenga una imagen, por ejemplo:", 
"i.walk27":'Los formatos de imagen soportados por la aplicaci\u00f3n son muy variados (jpg, tiff, png, etc...) Una vez hayas rellenado el espacio, haz click en el bot\u00f3n "previsualizar".Haz click en "Continuar".', "i.walk28":'Esta zona te mostrar\u00e1 el contenido que has subido antes de a\u00f1adirlo a la presentaci\u00f3n, de esta manera puedes comprobarlo. Una vez estes listo, haz click en el bot\u00f3n de a\u00f1adir contenido (Este bot\u00f3n aparecer\u00e1 cuando pulses el bot\u00f3n previsualizar). Haz click en "cerrar" para terminar este tutorial.', 
"i.walk29":'Pulsa en examinar para acceder a una nueva ventana y buscar un archivo en tu disco duro.Una vez lo hayas elegido, haz click en el bot\u00f3n "previsualizar.Haz click en "Continuar".', "i.walk30":'En este espacio puedes buscar imagenes dentro del repositorio. Solamente escribe lo que busques y en la zona inferior te aparecer\u00e1 una galer\u00eda de imagenes de las cuales solo debes pulsar encima de una de ellas para a\u00f1adirla a tu presentaci\u00f3n..Haz click en "cerrar" para terminar este tutorial.', 
"i.walk31":'En este espacio puedes buscar imagenes en la pagina Flickr. Solamente escribe lo que busques y en la zona inferior te aparecer\u00e1 una galer\u00eda de imagenes de las cuales solo debes pulsar encima de una de ellas para a\u00f1adirla a tu presentaci\u00f3n..Haz click en "cerrar" para terminar este tutorial.', "i.walk32":"Esta ventana te ayudar\u00e1 a la hora de a\u00f1adir contenido en Flash. Como puedes ver el la zona superior tienes las siguientes opciones:", "i.walk33":"(a\u00f1adir contenido desde un enlace)", 
"i.walk34":"(a\u00f1adir contenido subiendolo al repositorio)", "i.walk35":"(a\u00f1adir contenido desde el repositorio)", "i.walk36":'Ahora estas en la secci\u00f3n Url.Haz click en "Continuar".', "i.walk37":"Este espacio esta reservardo para escribir o pegar un enlace que contenga un contenido flash, por ejemplo:", "i.walk38":'Los formatos flash soportados por la aplicaci\u00f3n son .swf.Una vez hayas rellenado el espacio, haz click en el bot\u00f3n "previsualizar".Haz click en "Continuar".', "i.walk39":'Pulsa en examinar para acceder a una nueva ventana y buscar un archivo en tu disco duro.Una vez lo hayas elegido, haz click en el bot\u00f3n "previsualizar".Haz click en "Continuar".', 
"i.walk40":'En este espacio puedes buscar contenido dentro del repositorio. Solamente escribe lo que busques y en la zona inferior te aparecer\u00e1 una galer\u00eda de imagenes de las cuales solo debes pulsar encima de una de ellas para acceder a una peque\u00f1a ventana con t\u00edtulo y descripci\u00f3n mas detallada del contenido que te ofrecera la posibilidad de a\u00f1adir el contenido. Solo debes pulsar ese bot\u00f3n para realizar esa tarea..Haz click en "cerrar" para terminar este tutorial.', 
"i.walk41":"Esta ventana te ayudar\u00e1 a la hora de a\u00f1adir imagenes. Como puedes ver el la zona superior tienes las siguientes opciones:", "i.walk42":"(a\u00f1adir video desde un enlace)", "i.walk43":"(a\u00f1adir video desde el repositorio)", "i.walk44":"(a\u00f1adir video desde youtube)", "i.walk45":"(a\u00f1adir video desde vimeo)", "i.walk46":'Ahora estas en la secci\u00f3n Url.Haz click en "Continuar".', "i.walk47":"Este espacio esta reservardo para escribir o pegar un enlace que contenga una imagen, por ejemplo:", 
"i.walk48":'Los formatos de video soportados por la aplicaci\u00f3n son muy variados (avi, flv, mpg...).Una vez hayas rellenado el espacio, haz click en el bot\u00f3n "previsualizar".Haz click en "Continuar".', "i.walk49":'En este espacio puedes buscar videos dentro del repositorio. Solamente escribe lo que busques y en la zona inferior te aparecer\u00e1 una galer\u00eda de videos de las cuales solo debes pulsar encima de uno de ellas para acceder a una peque\u00f1a ventana con t\u00edtulo y descripci\u00f3n mas detallada del contenido que te ofrecera la posibilidad de a\u00f1adir el video. Solo debes pulsar ese bot\u00f3n para realizar esa tarea..Haz click en "cerrar" para terminar este tutorial.', 
"i.walk50":'En este espacio puedes buscar videos dentro de youtube. Solamente escribe lo que busques y en la zona inferior te aparecer\u00e1 una galer\u00eda de videos de las cuales solo debes pulsar encima de uno de ellas para acceder a una peque\u00f1a ventana con t\u00edtulo y descripci\u00f3n mas detallada del contenido que te ofrecera la posibilidad de a\u00f1adir el video. Solo debes pulsar ese bot\u00f3n para realizar esa tarea..Haz click en "cerrar" para terminar este tutorial.', "i.walk51":'En este espacio puedes buscar videos dentro de vimeo. Solamente escribe lo que busques y en la zona inferior te aparecer\u00e1 una galer\u00eda de videos de las cuales solo debes pulsar encima de uno de ellas para acceder a una peque\u00f1a ventana con t\u00edtulo y descripci\u00f3n mas detallada del contenido que te ofrecera la posibilidad de a\u00f1adir el video. Solo debes pulsar ese bot\u00f3n para realizar esa tarea..Haz click en "cerrar" para terminar este tutorial.', 
"i.walk52":"Esta ventana te ayudar\u00e1 a la hora de a\u00f1adir contenido en directo. Como puedes ver el la zona superior tienes de momento la siguiente opci\u00f3n:", "i.walk53":"(a\u00f1adir video desde una camara en directo)", "i.walk54":'Ahora estas en la secci\u00f3n Webcam.Haz click en "Continuar"', "i.walk55":'En este espacio puedes buscar contenido en directo dentro del repositorio. Solamente escribe lo que busques y en la zona inferior te aparecer\u00e1 una galer\u00eda, desde la cual solo debes pulsar encima del contenido para acceder a una peque\u00f1a ventana con t\u00edtulo y descripci\u00f3n mas detallada del contenido que te ofrecera la posibilidad de a\u00f1adirlo. Solo debes pulsar ese bot\u00f3n para realizar esa tarea..Haz click en "cerrar" para terminar este tutorial.', 
"Your browser does not meet the minimum requirements to init Vish Editor, please update your browser.":"El navegador que etas utilizando no incluye los requerimientos minimos para utilizar esta aplicaci\u00f3n.Por favor, actualiza tu navegador", "0%":"0%", "accept":"aceptar", "Add":"A\u00f1adir", "add image url":"a\u00f1adir URL de imagen", "Add Content":"A\u00f1adir Contenido", "Add new slide button":"Bot\u00f3n para a\u00f1adir nueva slide", "Add Tags for your image":"A\u00f1ade etiquetas a tu imagen", 
"add video url":"a\u00f1adir URL de video", "Add tags to your excursion":"A\u00f1ade tags a tu excursi\u00f3n", "Adding content to a slide":"A\u00f1adiendo contenido a una slide", "Adding flash content":"A\u00f1adiendo contenido flash", "Adding flash content by upload":"Subiendo contenido flash", "Adding Flash content by url":"A\u00f1adiendo contenido flash por url", "Adding Images":"A\u00f1adiendo im\u00e1genes", "Adding images by upload":"Subiendo im\u00e1genes", "Adding images by url":"A\u00f1adiendo im\u00e1genes por url", 
"Adding Video":"A\u00f1adiendo video", "Adding Live Content":"A\u00f1adiendo Contenido en Directo", "Adding video by url":"A\u00f1adiendo video por url", "are you sure?":"\u00bfest\u00e1 seguro?", "cancel":"cancelar", "Close or Delete":"Borrar o Cerrar", "Close":"Cerrar", "close":"Cerrar", "Continue":"Continuar", "Create at least one slide before saving.":"Debe crear al menos una slide antes de salvar", "Choose an image that will represent your excursion":"Elige una imagen que representar\u00e1 tu excursi\u00f3n", 
"Configuration Button":"Bot\u00f3n de configuraci\u00f3n", "delete":"borrar", "Delete Content":"Borrar contenido", "Describe the excursion in a few words...":"Describa la excursi\u00f3n en unas palabras", "Description":"Descripcion", "Edit details":"Editar detalles", "embed":"embed", "Embed":"Embed", "embed flash":"embed flash", "Excursion title":"Titulo de la excursi\u00f3n", "Flash":"Flash", "Flickr":"Flickr", "Flash Content":"Contenido Flash", "Google Chrome":"Google Chrome", "Image":"Imagen", 
"Images":"Imagen", "Internet Explorer 9":"Internet Explorer 9", "Let\u00b4s write a title (Obligatory)":"Escribamos un t\u00edtulo (obligatorio)", "Mozilla Firefox":"Mozilla Firefox", "no":"no", "next":"Siguiente", "Next":"Siguiente", "OK":"OK", "Opera":"Opera", "Paste SWF file URL":"Pega la URL del fichero SWF", "Please, enter a title":"Por favor, introduzca un t\u00edtulo", "Preview":"Vista previa", "save":"guardar", "Save Button":"Bot\u00f3n de salvar", "Save slides":"Salvar las diapositivas", 
"Save your excursion details":"Salva los detalles de tu excursi\u00f3n", "Search content":"Buscar contenido", "Search flash content":"Buscar contenido flash", "Search images in Flickr":"Buscar im\u00e1genes en Flickr", "Search videos in Vimeo":"Buscar videos en Vimeo", "Search images in Vish repository":"Buscar im\u00e1genes en el repositorio ViSH", "Search videos in Vish repository":"Buscar videos en el repositorio del ViSH", "Search videos in Youtube":"Buscar videos en Youtube", "Search Live Content":"Buscar contenido en directo", 
"See the content before you add it":"Puedes ver el contenido antes de a\u00f1adirlo", "See the image before you add it":"Puedes ver las im\u00e1genes antes de a\u00f1adirlas", "See the video before you add it":"Puedes ver el video antes de a\u00f1adirlo", "Select picture to upload":"Seleccionar imagen para subir", "Select SWF file to upload":"Seleccionar archivo swf para subir", "Select video to upload":"Seleccionar video para subir", "Selecting a Slide":"Seleccionando una slide", "Text":"Texto", 
"Title":"Titulo", "This is ViSH editor!":"Esto es el ViSH Editor!", "This is the tools menu":"Esto es el men\u00fa de herramientas", "Thumbnail":"Miniatura", "Upload":"Subir", "upload":"subir", "upload flash":"subir flash", "url":"Enlace", "Url":"Enlace", "Video":"Video", "Videos":"Videos", "vish":"vish", "Vish":"vish", "vimeo":"Vimeo", "Vimeo":"Vimeo", "Youtube":"Youtube", "youtube":"Youtube", "Welcome to ViSH editor!":"Bienvenido al ViSH editor!", "Webcam":"Webcam", "webcam":"webcam", "Write a description (optional)":"Escribe una descripci\u00f3n (opcional)", 
"http://www.####.com/example.jpg":"http://www.####.com/ejemplo.jpg", "http://www.####.com/example.swf":"http://www.####.com/ejemplo.swf", "http://www.####.com/example.avi":"http://www.####.com/ejemplo.avi"}};
var i18n = {"es":{"i.walk1":"Puedes utilizar el icono tutorial", "i.walk2":'durante las secciones de la aplicaci\u00f3n para servirte de ayuda a la hora de utilizar el "ViSH editor". De esta manera podras aprender a utilizar el programa desde sus funciones b\u00e1sicas hasta la publicaci\u00f3n final de tu excursi\u00f3n. Pulsa "Siguiente" para continuar.', "i.walk3":'Este espacio te permite a\u00f1adir el t\u00edtulo de tu excursi\u00f3n.El t\u00edtulo de la excursion es obligatorio ya que gracias a el, otros usuarios podran encontrala mas f\u00e1cilmente dentro del ViSH. Pulsa "Siguiente" para continuar.', 
"i.walk4":'En este espacio puedes explicar en mas detalle los conceptos e ideas de tu excursi\u00f3n, as\u00ed como los datos que consideres interesantes para que los usuarios sepan el contenido de esta. Pulsa "Siguiente" para continuar.', "i.walk5":'A\u00f1ade palabras que vayan acorde con el tema de tu excursion para que esta aparezca a la hora de que los usuarios busquen temas dentro del ViSH. Pulsa "Siguiente" para continuar.', "i.walk6":'Escoje una de estas imagenes para representar tu excursion dentro del ViSH.Utiliza las flechas de los laterales o los circulos en la parte inferior de la galer\u00eda para ver todas las imagenes y escojer una. Pulsa "Siguiente" para continuar.', 
"i.walk7":'Una vez que cierres el tutorial pulsando el bot\u00f3n "cerrar", haz click en el boton continuar situado debajo de este. De esta manera salvaras los detalles de tu excursi\u00f3n y podr\u00e1s comenzar a a\u00f1adir contenido a esta.', "i.walk8":'Recuerda que puedes utilizar el icono "tutorial" cada vez que necesites ayuda en la aplicaci\u00f3n. Esta zona, es el escritorio donde crear\u00e1s tus excursiones.Pulsa "Siguiente" para continuar.', "i.walk9":'En esta zona podr\u00e1s ver las opciones principales para crear y editar una excursi\u00f3n virtual dentro de ViSH.Pulsa "Siguiente" para continuar.', 
"i.walk9":'Haciendo click en este bot\u00f3n, podr\u00e1s volver a ver la pantalla principal donde a\u00f1adiste la informaci\u00f3n a tu excursi\u00f3n.Pulsa "Siguiente" para continuar.', "i.walk10":'Haciendo click en este bot\u00f3n, podr\u00e1s volver a ver la pantalla principal donde a\u00f1adiste la informaci\u00f3n a tu excursi\u00f3n.Pulsa "Siguiente" para continuar.', "i.walk11":'Esta zona se utiliza para definir el paginado de tu excursi\u00f3n, atraves de esta secci\u00f3n podras crear, moverte y editar cualquiera de las paginas de tu excursi\u00f3n.Pulsa "Siguiente" para continuar.', 
"i.walk12":'Atraves de este bot\u00f3n podr\u00e1s salvar y publicar tus excursiones en ViSH.Pulsa "Siguiente" para continuar.', "i.walk13":'Este icono te llevar\u00e1 a la ventana de selecci\u00f3n de plantillas para a\u00f1adir paginas a tu excursi\u00f3n. Cuando a\u00f1adas una nueva p\u00e1gina te aprecera a modo de icono en la l\u00ednea de tiempo para mostrarte su ubicaci\u00f3n dentro del paginado de la excursi\u00f3n.Pulsa "Cerrar" para continuar.', "i.walk14":'Esta zona te ofrece una variedad de plantillas para a\u00f1adir a tu excursi\u00f3n. Solo tienes que hacer click en la miniatura que mas se ajuste a la informaci\u00f3n que quieras transmitir.Pulsa "Cerrar" para continuar.', 
"i.walk15":"Para rellenar la plantilla que has escojido, solo tienes que hacer click en los espacios grises de esta. Si haces click dentro, te aparecer\u00e1n los siguientes iconos:", "i.walk16":"Si haces click en uno de estos iconos (dependiend de que tipo de contenido quieras a\u00f1adir a esa zona), te aparecer\u00e1 otra ventana que te ayudar\u00e1 en esta tarea, a excepci\u00f3n del icono de texto, que mostrar\u00e1 una barra en zona superior con herramientas para tratar tu tipograf\u00eda y definir el estilo de tu texto.", 
"i.walk17":"Una vez hayas rellenado una zona gris con contenido, podras editarla volviendo a hacer click en el espacio que contiene el contenido. En caso de que quieras borrar este contenido puedes hacer click en el icono inferior derecho de cada zona gris rellenacon contenido:", "i.walk18":"Si quisieras borrar una plantilla o cerrar ventanas en la aplicaci\u00f3n, deberas usar el icono superior derecho:", "i.walk19":'Si necesitas cualquier otra ayuda con el contenido, siempre puedes utilizar los iconos "tutorial".Pulsa "Cerrar" para continuar.', 
"i.walk20":"Esta ventana te ayudar\u00e1 a la hora de a\u00f1adir imagenes. Como puedes ver el la zona superior tienes las siguientes opciones:", "i.walk21":"(a\u00f1adir imagen desde un enlace)", "i.walk22":"(a\u00f1adir imagen subiendola al repositorio)", "i.walk23":"(a\u00f1adir imagen desde el repositorio)", "i.walk24":"(a\u00f1adir imagen desde flickr)", "i.walk25":'Ahora estas en la secci\u00f3n Url.Pulsa "Siguiente" para continuar.', "i.walk26":"Este espacio esta reservardo para escribir o pegar un enlace que contenga una imagen, por ejemplo:", 
"i.walk27":'Los formatos de imagen soportados por la aplicaci\u00f3n son muy variados (jpg, tiff, png, etc...) Una vez hayas rellenado el espacio, haz click en el bot\u00f3n "previsualizar".Haz click en "Continuar".', "i.walk28":'Esta zona te mostrar\u00e1 el contenido que has subido antes de a\u00f1adirlo a la presentaci\u00f3n, de esta manera puedes comprobarlo. Una vez estes listo, haz click en el bot\u00f3n de a\u00f1adir contenido (Este bot\u00f3n aparecer\u00e1 cuando pulses el bot\u00f3n previsualizar). Haz click en "cerrar" para terminar este tutorial.', 
"i.walk29":'Pulsa en examinar para acceder a una nueva ventana y buscar un archivo en tu disco duro.Una vez lo hayas elegido, haz click en el bot\u00f3n "previsualizar.Haz click en "Continuar".', "i.walk30":'En este espacio puedes buscar imagenes dentro del repositorio. Solamente escribe lo que busques y en la zona inferior te aparecer\u00e1 una galer\u00eda de imagenes de las cuales solo debes pulsar encima de una de ellas para a\u00f1adirla a tu presentaci\u00f3n..Haz click en "cerrar" para terminar este tutorial.', 
"i.walk31":'En este espacio puedes buscar imagenes en la pagina Flickr. Solamente escribe lo que busques y en la zona inferior te aparecer\u00e1 una galer\u00eda de imagenes de las cuales solo debes pulsar encima de una de ellas para a\u00f1adirla a tu presentaci\u00f3n..Haz click en "cerrar" para terminar este tutorial.', "i.walk32":"Esta ventana te ayudar\u00e1 a la hora de a\u00f1adir contenido en Flash. Como puedes ver el la zona superior tienes las siguientes opciones:", "i.walk33":"(a\u00f1adir contenido desde un enlace)", 
"i.walk34":"(a\u00f1adir contenido subiendolo al repositorio)", "i.walk35":"(a\u00f1adir contenido desde el repositorio)", "i.walk36":'Ahora estas en la secci\u00f3n Url.Haz click en "Continuar".', "i.walk37":"Este espacio esta reservardo para escribir o pegar un enlace que contenga un contenido flash, por ejemplo:", "i.walk38":'Los formatos flash soportados por la aplicaci\u00f3n son .swf.Una vez hayas rellenado el espacio, haz click en el bot\u00f3n "previsualizar".Haz click en "Continuar".', "i.walk39":'Pulsa en examinar para acceder a una nueva ventana y buscar un archivo en tu disco duro.Una vez lo hayas elegido, haz click en el bot\u00f3n "previsualizar".Haz click en "Continuar".', 
"i.walk40":'En este espacio puedes buscar contenido dentro del repositorio. Solamente escribe lo que busques y en la zona inferior te aparecer\u00e1 una galer\u00eda de imagenes de las cuales solo debes pulsar encima de una de ellas para acceder a una peque\u00f1a ventana con t\u00edtulo y descripci\u00f3n mas detallada del contenido que te ofrecera la posibilidad de a\u00f1adir el contenido. Solo debes pulsar ese bot\u00f3n para realizar esa tarea..Haz click en "cerrar" para terminar este tutorial.', 
"i.walk41":"Esta ventana te ayudar\u00e1 a la hora de a\u00f1adir imagenes. Como puedes ver el la zona superior tienes las siguientes opciones:", "i.walk42":"(a\u00f1adir video desde un enlace)", "i.walk43":"(a\u00f1adir video desde el repositorio)", "i.walk44":"(a\u00f1adir video desde youtube)", "i.walk45":"(a\u00f1adir video desde vimeo)", "i.walk46":'Ahora estas en la secci\u00f3n Url.Haz click en "Continuar".', "i.walk47":"Este espacio esta reservardo para escribir o pegar un enlace que contenga una imagen, por ejemplo:", 
"i.walk48":'Los formatos de video soportados por la aplicaci\u00f3n son muy variados (avi, flv, mpg...).Una vez hayas rellenado el espacio, haz click en el bot\u00f3n "previsualizar".Haz click en "Continuar".', "i.walk49":'En este espacio puedes buscar videos dentro del repositorio. Solamente escribe lo que busques y en la zona inferior te aparecer\u00e1 una galer\u00eda de videos de las cuales solo debes pulsar encima de uno de ellas para acceder a una peque\u00f1a ventana con t\u00edtulo y descripci\u00f3n mas detallada del contenido que te ofrecera la posibilidad de a\u00f1adir el video. Solo debes pulsar ese bot\u00f3n para realizar esa tarea..Haz click en "cerrar" para terminar este tutorial.', 
"i.walk50":'En este espacio puedes buscar videos dentro de youtube. Solamente escribe lo que busques y en la zona inferior te aparecer\u00e1 una galer\u00eda de videos de las cuales solo debes pulsar encima de uno de ellas para acceder a una peque\u00f1a ventana con t\u00edtulo y descripci\u00f3n mas detallada del contenido que te ofrecera la posibilidad de a\u00f1adir el video. Solo debes pulsar ese bot\u00f3n para realizar esa tarea..Haz click en "cerrar" para terminar este tutorial.', "i.walk51":'En este espacio puedes buscar videos dentro de vimeo. Solamente escribe lo que busques y en la zona inferior te aparecer\u00e1 una galer\u00eda de videos de las cuales solo debes pulsar encima de uno de ellas para acceder a una peque\u00f1a ventana con t\u00edtulo y descripci\u00f3n mas detallada del contenido que te ofrecera la posibilidad de a\u00f1adir el video. Solo debes pulsar ese bot\u00f3n para realizar esa tarea..Haz click en "cerrar" para terminar este tutorial.', 
"i.walk52":"Esta ventana te ayudar\u00e1 a la hora de a\u00f1adir contenido en directo. Como puedes ver el la zona superior tienes de momento la siguiente opci\u00f3n:", "i.walk53":"(a\u00f1adir video desde una camara en directo)", "i.walk54":'Ahora estas en la secci\u00f3n Webcam.Haz click en "Continuar"', "i.walk55":'En este espacio puedes buscar contenido en directo dentro del repositorio. Solamente escribe lo que busques y en la zona inferior te aparecer\u00e1 una galer\u00eda, desde la cual solo debes pulsar encima del contenido para acceder a una peque\u00f1a ventana con t\u00edtulo y descripci\u00f3n mas detallada del contenido que te ofrecera la posibilidad de a\u00f1adirlo. Solo debes pulsar ese bot\u00f3n para realizar esa tarea..Haz click en "cerrar" para terminar este tutorial.', 
"Your browser does not meet the minimum requirements to init Vish Editor, please update your browser.":"El navegador que etas utilizando no incluye los requerimientos minimos para utilizar esta aplicaci\u00f3n.Por favor, actualiza tu navegador", "0%":"0%", "accept":"aceptar", "Add":"A\u00f1adir", "add image url":"a\u00f1adir URL de imagen", "Add Content":"A\u00f1adir Contenido", "Add new slide button":"Bot\u00f3n para a\u00f1adir nueva slide", "Add Tags for your image":"A\u00f1ade etiquetas a tu imagen", 
"add video url":"a\u00f1adir URL de video", "Add tags to your excursion":"A\u00f1ade tags a tu excursi\u00f3n", "Adding content to a slide":"A\u00f1adiendo contenido a una slide", "Adding flash content":"A\u00f1adiendo contenido flash", "Adding flash content by upload":"Subiendo contenido flash", "Adding Flash content by url":"A\u00f1adiendo contenido flash por url", "Adding Images":"A\u00f1adiendo im\u00e1genes", "Adding images by upload":"Subiendo im\u00e1genes", "Adding images by url":"A\u00f1adiendo im\u00e1genes por url", 
"Adding Video":"A\u00f1adiendo video", "Adding Live Content":"A\u00f1adiendo Contenido en Directo", "Adding video by url":"A\u00f1adiendo video por url", "are you sure?":"\u00bfest\u00e1 seguro?", "cancel":"cancelar", "Close or Delete":"Borrar o Cerrar", "Close":"Cerrar", "close":"Cerrar", "Continue":"Continuar", "Content":"Contenido", "Create at least one slide before saving.":"Debe crear al menos una slide antes de salvar", "Choose an image that will represent your excursion":"Elige una imagen que representar\u00e1 tu excursi\u00f3n", 
"Configuration Button":"Bot\u00f3n de configuraci\u00f3n", "delete":"borrar", "Delete Content":"Borrar contenido", "Describe the excursion in a few words...":"Describa la excursi\u00f3n en unas palabras", "Description":"Descripcion", "Edit details":"Editar detalles", "embed":"embed", "Embed":"Embed", "embed flash":"embed flash", "Excursion title":"Titulo de la excursi\u00f3n", "Flash":"Flash", "Flickr":"Flickr", "Flash Content":"Contenido Flash", "Google Chrome":"Google Chrome", "Image":"Imagen", 
"Images":"Imagen", "Internet Explorer 9":"Internet Explorer 9", "Let\u00b4s write a title (Obligatory)":"Escribamos un t\u00edtulo (obligatorio)", "Mozilla Firefox":"Mozilla Firefox", "no":"no", "next":"Siguiente", "Next":"Siguiente", "OK":"OK", "Opera":"Opera", "Paste SWF file URL":"Pega la URL del fichero SWF", "Please, enter a title":"Por favor, introduzca un t\u00edtulo", "Preview":"Vista previa", "save":"guardar", "Save Button":"Bot\u00f3n de salvar", "Save slides":"Salvar las diapositivas", 
"Save your excursion details":"Salva los detalles de tu excursi\u00f3n", "Search content":"Buscar contenido", "Search flash content":"Buscar contenido flash", "Search images in Flickr":"Buscar im\u00e1genes en Flickr", "Search videos in Vimeo":"Buscar videos en Vimeo", "Search images in Vish repository":"Buscar im\u00e1genes en el repositorio ViSH", "Search videos in Vish repository":"Buscar videos en el repositorio del ViSH", "Search videos in Youtube":"Buscar videos en Youtube", "Search Live Content":"Buscar contenido en directo", 
"See the content before you add it":"Puedes ver el contenido antes de a\u00f1adirlo", "See the image before you add it":"Puedes ver las im\u00e1genes antes de a\u00f1adirlas", "See the video before you add it":"Puedes ver el video antes de a\u00f1adirlo", "Select picture to upload":"Seleccionar imagen para subir", "Select SWF file to upload":"Seleccionar archivo swf para subir", "Select video to upload":"Seleccionar video para subir", "Selecting a Slide":"Seleccionando una slide", "Text":"Texto", 
"Title":"Titulo", "This is ViSH editor!":"Esto es el ViSH Editor!", "This is the tools menu":"Esto es el men\u00fa de herramientas", "Thumbnail":"Miniatura", "Upload":"Subir", "upload":"subir", "upload flash":"subir flash", "url":"Enlace", "Url":"Enlace", "Video":"Video", "Videos":"Videos", "vish":"vish", "Vish":"vish", "vimeo":"Vimeo", "Vimeo":"Vimeo", "Youtube":"Youtube", "youtube":"Youtube", "Welcome to ViSH editor!":"Bienvenido al ViSH editor!", "Webcam":"Webcam", "webcam":"webcam", "Write a description (optional)":"Escribe una descripci\u00f3n (opcional)", 
"http://www.####.com/example.jpg":"http://www.####.com/ejemplo.jpg", "http://www.####.com/example.swf":"http://www.####.com/ejemplo.swf", "http://www.####.com/example.avi":"http://www.####.com/ejemplo.avi"}};
var VISH = VISH || {};
VISH.Mods || (VISH.Mods = {});
VISH.VERSION = "0.1";
VISH.AUTHORS = "GING";
VISH.ImagesPath = "/assets/";
VISH.StylesheetsPath = "/assets/";
VISH.Editing = false;
VISH.Utils = function(V, undefined) {
  var init = function() {
  };
  var getOuterHTML = function(tag) {
    if(typeof $(tag)[0].outerHTML == "undefined") {
      return $(tag).clone().wrap("<div></div>").parent().html()
    }else {
      return $(tag)[0].outerHTML
    }
  };
  var generateTable = function(author, title, description) {
    if(!author) {
      author = ""
    }
    if(!title) {
      title = ""
    }
    if(!description) {
      description = ""
    }
    return'<table class="metadata">' + '<tr class="even">' + '<td class="title header_left">Author</td>' + '<td class="title header_right"><div class="height_wrapper">' + author + "</div></td>" + "</tr>" + '<tr class="odd">' + '<td class="title">Title</td>' + '<td class="info"><div class="height_wrapper">' + title + "</div></td>" + "</tr>" + '<tr class="even">' + '<td colspan="2" class="title_description">Description</td>' + "</tr>" + '<tr class="odd">' + '<td colspan="2" class="info_description"><div class="height_wrapper_description">' + 
    description + "</div></td>" + "</tr>" + "</table>"
  };
  var checkMiniumRequirements = function() {
    var browserRequirements = true;
    if(navigator.appName == "Microsoft Internet Explorer" && _getInternetExplorerVersion() < 9) {
      browserRequirements = false
    }
    if(!browserRequirements) {
      $.fancybox($("#requirements_form_wrapper").html(), {"autoDimensions":false, "width":650, "height":400, "showCloseButton":false, "padding":0, "onClosed":function() {
      }});
      return false
    }
    return true
  };
  function _getInternetExplorerVersion() {
    var rv = -1;
    if(navigator.appName == "Microsoft Internet Explorer") {
      var ua = navigator.userAgent;
      var re = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
      if(re.exec(ua) != null) {
        rv = parseFloat(RegExp.$1)
      }
    }
    return rv
  }
  function _getFirefoxVersion() {
    var rv = -1;
    if(navigator.appName == "Netscape") {
      var ua = navigator.userAgent;
      var re = new RegExp(".* Firefox/([0-9.]+)");
      if(re.exec(ua) != null) {
        rv = parseFloat(RegExp.$1)
      }
    }
    return rv
  }
  var convertToTagsArray = function(tags) {
    var tagsArray = [];
    if(!tags || tags.length == 0) {
      return tagsArray
    }
    $.each(tags, function(index, tag) {
      tagsArray.push(tag.value)
    });
    return tagsArray
  };
  var getURLParameter = function(name) {
    return decodeURIComponent((location.search.match(RegExp("[?|&]" + name + "=(.+?)(&|$)")) || [, null])[1])
  };
  var autocompleteUrls = function(input) {
    var http_urls_pattern = /(^http(s)?:\/\/)/g;
    if(input.match(http_urls_pattern) == null) {
      return"http://" + input
    }else {
      return input
    }
  };
  return{init:init, getOuterHTML:getOuterHTML, generateTable:generateTable, checkMiniumRequirements:checkMiniumRequirements, convertToTagsArray:convertToTagsArray, getURLParameter:getURLParameter, autocompleteUrls:autocompleteUrls}
}(VISH);
VISH.Editor = function(V, $, undefined) {
  var initOptions;
  var domId = 0;
  var excursionDetails = {};
  var excursion_to_edit = null;
  var params = {current_el:null};
  var eventsLoaded = false;
  var init = function(options, excursion) {
    if(!VISH.Utils.checkMiniumRequirements()) {
      return
    }
    VISH.Editing = true;
    if(options) {
      initOptions = options;
      if(options["developping"] == true && VISH.Debugging) {
        VISH.Debugging.init(true);
        if(VISH.Debugging.getActionInit() == "loadSamples" && !excursion) {
          excursion = VISH.Debugging.getExcursionSamples()
        }
      }
      if(options["configuration"] && VISH.Configuration) {
        VISH.Configuration.init(options["configuration"]);
        VISH.Configuration.applyConfiguration()
      }
    }else {
      initOptions = {}
    }
    if(excursion) {
      excursion_to_edit = excursion;
      excursionDetails.title = excursion.title;
      excursionDetails.description = excursion.description;
      excursionDetails.avatar = excursion.avatar;
      V.Editor.Renderer.init(excursion);
      _removeSelectableProperties()
    }
    $("a#addSlideFancybox").fancybox({"scrolling":"no", "width":800, "height":600, "padding":0});
    if(!eventsLoaded) {
      eventsLoaded = true;
      $(document).on("click", "#edit_excursion_details", _onEditExcursionDetailsButtonClicked);
      $(document).on("click", "#save_excursion_details", _onSaveExcursionDetailsButtonClicked);
      $(document).on("click", ".templatethumb", _onTemplateThumbClicked);
      $(document).on("click", "#save", _onSaveButtonClicked);
      $(document).on("click", ".editable", _onEditableClicked);
      $(document).on("click", ".selectable", _onSelectableClicked);
      $(document).on("click", ".delete_content", _onDeleteItemClicked);
      $(document).on("click", ".delete_slide", _onDeleteSlideClicked);
      $(document).on("click", "#arrow_left_div", _onArrowLeftClicked);
      $(document).on("click", "#arrow_right_div", _onArrowRightClicked);
      _addEditorEnterLeaveEvents();
      V.SlidesUtilities.redrawSlides();
      V.Editor.Thumbnails.redrawThumbnails();
      addEventListeners();
      _addTutorialEvents()
    }
    if(excursion) {
      $(".object_wrapper").hide()
    }
    V.Editor.Text.init();
    V.Editor.Image.init();
    V.Editor.Video.init();
    V.Editor.Object.init();
    V.Editor.Thumbnails.init();
    V.Editor.AvatarPicker.init();
    V.Editor.I18n.init(options["lang"]);
    V.Editor.Quiz.init();
    if(VISH.Configuration.getConfiguration()["presentationSettings"]) {
      $("a#edit_excursion_details").fancybox({"autoDimensions":false, "scrolling":"no", "width":800, "height":660, "padding":0, "hideOnOverlayClick":false, "hideOnContentClick":false, "showCloseButton":false});
      if(VISH.Configuration.getConfiguration()["presentationTags"]) {
        VISH.Editor.API.requestTags(_onInitialTagsReceived);
        if(excursion === undefined) {
          VISH.Editor.AvatarPicker.onLoadExcursionDetails()
        }
      }
      if(excursion === undefined) {
        $("#edit_excursion_details").trigger("click")
      }
    }
  };
  var getId = function() {
    domId = domId + 1;
    return"unicID_" + domId
  };
  var getOptions = function() {
    return initOptions
  };
  var _loadCSS = function(path) {
    $("head").append("<link>");
    css = $("head").children(":last");
    css.attr({rel:"stylesheet", type:"text/css", href:path})
  };
  var addDeleteButton = function(element) {
    element.append("<div class='delete_content'></div>")
  };
  var loadTab = function(tab_id) {
    $(".joyride-close-tip").click();
    $(".fancy_tab").removeClass("fancy_selected");
    $("#" + tab_id).addClass("fancy_selected");
    $(".fancy_tab_content").hide();
    $("#" + tab_id + "_content").show();
    $(".help_in_fancybox").hide();
    $("#" + tab_id + "_help").show();
    switch(tab_id) {
      case "tab_pic_from_url":
        V.Editor.Image.onLoadTab("url");
        break;
      case "tab_pic_upload":
        V.Editor.Image.onLoadTab("upload");
        break;
      case "tab_pic_repo":
        V.Editor.Image.Repository.onLoadTab();
        break;
      case "tab_pic_flikr":
        V.Editor.Image.Flikr.onLoadTab();
        break;
      case "tab_video_from_url":
        VISH.Editor.Video.onLoadTab();
        break;
      case "tab_video_repo":
        VISH.Editor.Video.Repository.onLoadTab();
        break;
      case "tab_video_youtube":
        VISH.Editor.Video.Youtube.onLoadTab();
        break;
      case "tab_video_vimeo":
        VISH.Editor.Video.Vimeo.onLoadTab();
        break;
      case "tab_object_from_url":
        VISH.Editor.Object.onLoadTab("url");
        break;
      case "tab_object_from_web":
        VISH.Editor.Object.Web.onLoadTab();
        break;
      case "tab_object_upload":
        VISH.Editor.Object.onLoadTab("upload");
        break;
      case "tab_object_repo":
        VISH.Editor.Object.Repository.onLoadTab();
        break;
      case "tab_live_webcam":
        VISH.Editor.Object.Live.onLoadTab("webcam");
        break;
      case "tab_live_micro":
        VISH.Editor.Object.Live.onLoadTab("micro");
        break;
      default:
        break
    }
  };
  var _closeFancybox = function() {
    $.fancybox.close()
  };
  var _onInitialTagsReceived = function(data) {
    var tagList = $(".tagBoxIntro .tagList");
    if($(tagList).children().length == 0) {
      $.each(data, function(index, tag) {
        if(index == 2) {
          return false
        }
        $(tagList).append("<li>" + tag + "</li>")
      });
      $(tagList).tagit({tagSource:data, sortable:true, maxLength:15, maxTags:6, watermarkAllowMessage:"Add tags", watermarkDenyMessage:"limit reached"})
    }
  };
  var _addTutorialEvents = function() {
    $(document).on("click", "#start_tutorial", function() {
      V.Editor.Tour.startTourWithId("initial_screen_help", "top")
    });
    $(document).on("click", "#help_right", function() {
      V.Editor.Tour.startTourWithId("menubar_help", "top")
    });
    $(document).on("click", "#help_template_image", function() {
      V.Editor.Tour.startTourWithId("template_help", "bottom")
    });
    $(document).on("click", "#help_template_selection", function() {
      V.Editor.Tour.startTourWithId("help_template_selection_help", "bottom")
    });
    $(document).on("click", "#tab_pic_from_url_help", function() {
      V.Editor.Tour.startTourWithId("images_fancy_tabs_id_help", "top")
    });
    $(document).on("click", "#tab_pic_upload_help", function() {
      V.Editor.Tour.startTourWithId("upload_picture_form_help", "top")
    });
    $(document).on("click", "#tab_pic_repo_help", function() {
      V.Editor.Tour.startTourWithId("search_picture_help", "bottom")
    });
    $(document).on("click", "#tab_pic_flikr_help", function() {
      V.Editor.Tour.startTourWithId("search_flickr_fancy_help", "bottom")
    });
    $(document).on("click", "#tab_object_from_url_help", function() {
      V.Editor.Tour.startTourWithId("object_fancy_tabs_id_help", "top")
    });
    $(document).on("click", "#tab_object_upload_help", function() {
      V.Editor.Tour.startTourWithId("upload_object_form_help", "top")
    });
    $(document).on("click", "#tab_object_repo_help", function() {
      V.Editor.Tour.startTourWithId("search_object_help", "bottom")
    });
    $(document).on("click", "#tab_video_from_url_help", function() {
      V.Editor.Tour.startTourWithId("video_fancy_tabs_id_help", "top")
    });
    $(document).on("click", "#tab_video_repo_help", function() {
      V.Editor.Tour.startTourWithId("search_video_help", "top")
    });
    $(document).on("click", "#tab_video_youtube_help", function() {
      V.Editor.Tour.startTourWithId("search_youtube_fancy_help", "bottom")
    });
    $(document).on("click", "#tab_video_vimeo_help", function() {
      V.Editor.Tour.startTourWithId("search_vimeo_fancy_help", "bottom")
    });
    $(document).on("click", "#tab_live_webcam_help", function() {
      V.Editor.Tour.startTourWithId("tab_live_webcam_id", "bottom")
    })
  };
  var _addEditorEnterLeaveEvents = function() {
    $("article").live("slideenter", _onslideenterEditor);
    $("article").live("slideleave", _onslideleaveEditor)
  };
  var _onslideenterEditor = function(e) {
    setTimeout(function() {
      $(e.target).find(".object_wrapper").show()
    }, 500)
  };
  var _onslideleaveEditor = function() {
    $(".object_wrapper").hide()
  };
  var _onEditExcursionDetailsButtonClicked = function(event) {
    $("a#edit_excursion_details").fancybox({"autoDimensions":false, "scrolling":"no", "width":800, "height":660, "padding":0})
  };
  var _onSaveExcursionDetailsButtonClicked = function(event) {
    if($("#excursion_title").val().length < 1) {
      $("#excursion_details_error").slideDown("slow");
      $("#excursion_details_error").show();
      return false
    }
    excursionDetails.title = $("#excursion_title").val();
    excursionDetails.description = $("#excursion_description").val();
    excursionDetails.avatar = $("#excursion_avatar").val();
    $("#excursion_details_error").hide();
    $.fancybox.close()
  };
  var _onTemplateThumbClicked = function(event) {
    var slide = V.Dummies.getDummy($(this).attr("template"));
    V.SlidesUtilities.addSlide(slide);
    $.fancybox.close();
    V.SlidesUtilities.redrawSlides();
    V.Editor.Thumbnails.redrawThumbnails();
    setTimeout("VISH.SlidesUtilities.lastSlide()", 300)
  };
  var _onEditableClicked = function(event) {
    $(this).removeClass("editable");
    params["current_el"] = $(this);
    var content = null;
    if($(this).attr("areaid") === "header" || $(this).attr("areaid") === "subheader") {
      content = $("#menuselect_for_header").clone().attr("id", "")
    }else {
      content = $("#menuselect").clone().attr("id", "")
    }
    content.find("a").each(function(index, domElem) {
      $(domElem).attr("zone", params["current_el"].attr("id"))
    });
    $(this).html(content);
    $("a.addpicture").fancybox({"autoDimensions":false, "width":800, "scrolling":"no", "height":600, "padding":0, "onStart":function(data) {
      var clickedZoneId = $(data).attr("zone");
      params["current_el"] = $("#" + clickedZoneId);
      loadTab("tab_pic_from_url")
    }});
    $("a.addobject").fancybox({"autoDimensions":false, "width":800, "height":600, "scrolling":"no", "padding":0, "onStart":function(data) {
      var clickedZoneId = $(data).attr("zone");
      params["current_el"] = $("#" + clickedZoneId);
      loadTab("tab_object_from_url")
    }});
    $("a.addvideo").fancybox({"autoDimensions":false, "width":800, "scrolling":"no", "height":600, "padding":0, "onStart":function(data) {
      var clickedZoneId = $(data).attr("zone");
      params["current_el"] = $("#" + clickedZoneId);
      loadTab("tab_video_from_url")
    }});
    $("a.addLive").fancybox({"autoDimensions":false, "width":800, "scrolling":"no", "height":600, "padding":0, "onStart":function(data) {
      var clickedZoneId = $(data).attr("zone");
      params["current_el"] = $("#" + clickedZoneId);
      loadTab("tab_live_webcam")
    }})
  };
  var _onDeleteItemClicked = function() {
    params["current_el"] = $(this).parent();
    $("#image_template_prompt").attr("src", VISH.ImagesPath + params["current_el"].attr("type") + ".png");
    $.fancybox($("#prompt_form").html(), {"autoDimensions":false, "scrolling":"no", "width":350, "height":150, "showCloseButton":false, "padding":0, "onClosed":function() {
      if($("#prompt_answer").val() === "true") {
        $("#prompt_answer").val("false");
        params["current_el"].html("");
        $(".theslider").hide();
        params["current_el"].removeAttr("type");
        params["current_el"].addClass("editable")
      }
    }})
  };
  var _onDeleteSlideClicked = function() {
    var article_to_delete = $(this).parent();
    $("#image_template_prompt").attr("src", VISH.ImagesPath + "templatesthumbs/" + article_to_delete.attr("template") + ".png");
    $.fancybox($("#prompt_form").html(), {"autoDimensions":false, "width":350, "scrolling":"no", "height":150, "showCloseButton":false, "padding":0, "onClosed":function() {
      if($("#prompt_answer").val() === "true") {
        $("#prompt_answer").val("false");
        $(".theslider").hide();
        article_to_delete.remove();
        if(curSlide == slideEls.length - 1 && curSlide != 0) {
          curSlide -= 1
        }
        V.SlidesUtilities.redrawSlides();
        V.Editor.Thumbnails.redrawThumbnails()
      }
    }})
  };
  var _onSelectableClicked = function() {
    _removeSelectableProperties();
    $(this).css("cursor", "auto");
    $(this).find(".menuselect_hide").show();
    $(this).find(".delete_content").show();
    if($(this).attr("type") === "image" || $(this).attr("type") === "object" || $(this).attr("type") === "video") {
      var the_id;
      switch($(this).attr("type")) {
        case "image":
          the_id = $(this).find("img").attr("id");
          break;
        case "object":
          the_id = $(this).find(".object_wrapper").attr("id");
          break;
        case "video":
          the_id = $(this).find("video").attr("id");
          break
      }
      the_id = the_id.substring(9);
      $("#sliderId" + the_id).show()
    }
    $(this).css("border-color", "rgb(255, 2, 94)");
    $(this).css("-webkit-box-shadow", "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 100, 100, 0.6)");
    $(this).css("-moz-box-shadow", "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 100, 100, 0.6)");
    $(this).css("box-shadow", "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 100, 100, 0.6)");
    $(this).css("outline", "0");
    $(this).css("outline", "thin dotted 9")
  };
  var _removeSelectableProperties = function() {
    $(".theslider").hide();
    $(".menuselect_hide").hide();
    $(".delete_content").hide();
    $(".selectable").css("border-color", "none");
    $(".selectable").css("-webkit-box-shadow", "none");
    $(".selectable").css("-moz-box-shadow", "none");
    $(".selectable").css("box-shadow", "none");
    $(".selectable").css("outline", "0");
    $(".selectable").css("cursor", "pointer")
  };
  var _onSaveButtonClicked = function() {
    if(slideEls.length === 0) {
      $.fancybox($("#message1_form").html(), {"autoDimensions":false, "scrolling":"no", "width":350, "height":200, "showCloseButton":false, "padding":5})
    }else {
      $.fancybox($("#save_form").html(), {"autoDimensions":false, "width":350, "scrolling":"no", "height":150, "showCloseButton":false, "padding":0, "onClosed":function() {
        if($("#save_answer").val() === "true") {
          $("#save_answer").val("false");
          _saveExcursion()
        }else {
          return false
        }
      }})
    }
  };
  var _saveExcursion = function() {
    $(".object_wrapper").show();
    var excursion = {};
    excursion.id = "";
    excursion.title = excursionDetails.title;
    excursion.description = excursionDetails.description;
    excursion.avatar = excursionDetails.avatar;
    excursion.author = "";
    excursion.slides = [];
    var slide = {};
    $("article").each(function(index, s) {
      slide.id = $(s).attr("id");
      slide.template = $(s).attr("template");
      slide.elements = [];
      var element = {};
      $(s).find("div").each(function(i, div) {
        if($(div).attr("areaid") !== undefined) {
          element.id = $(div).attr("id");
          element.type = $(div).attr("type");
          element.areaid = $(div).attr("areaid");
          if(element.type == "text") {
            element.body = V.Editor.Text.changeFontPropertiesToSpan($(div).find(".wysiwygInstance"))
          }else {
            if(element.type == "image") {
              element.body = $(div).find("img").attr("src");
              element.style = _getStylesInPercentages($(div), $(div).find("img"))
            }else {
              if(element.type == "video") {
                var video = $(div).find("video");
                element.poster = $(video).attr("poster");
                element.style = _getStylesInPercentages($(div), $(video));
                var sources = "";
                $(video).find("source").each(function(index, source) {
                  if(index != 0) {
                    sources = sources + ","
                  }
                  var type = typeof $(source).attr("type") != "undefined" ? ' "type": "' + $(source).attr("type") + '", ' : "";
                  sources = sources + "{" + type + '"src": "' + $(source).attr("src") + '"}'
                });
                sources = "[" + sources + "]";
                element.sources = sources
              }else {
                if(element.type == "object") {
                  var object = $(div).find(".object_wrapper").children()[0];
                  $(object).removeAttr("style");
                  element.body = VISH.Utils.getOuterHTML(object);
                  element.style = _getStylesInPercentages($(div), $(object).parent())
                }else {
                  if(element.type == "openquestion") {
                    element.title = $(div).find(".title_openquestion").val();
                    element.question = $(div).find(".value_openquestion").val()
                  }else {
                    if(element.type == "mcquestion") {
                      element.question = $(div).find(".value_multiplechoice_question").val();
                      element.options = [];
                      var array_options = $(div).find(".multiplechoice_text");
                      $(".multiplechoice_text").each(function(i, input_text) {
                        element.options[i] = input_text.value
                      })
                    }else {
                      if(element.type === "snapshot") {
                        var snapshotWrapper = $(div).find(".snapshot_wrapper");
                        var snapshotIframe = $(snapshotWrapper).children()[0];
                        $(snapshotIframe).removeAttr("style");
                        element.body = VISH.Utils.getOuterHTML(snapshotIframe);
                        element.style = _getStylesInPercentages($(div), snapshotWrapper);
                        element.scrollTop = $(snapshotWrapper).scrollTop();
                        element.scrollLeft = $(snapshotWrapper).scrollLeft()
                      }else {
                        if(typeof element.type == "undefined") {
                          element.type = "text";
                          element.body = ""
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          slide.elements.push(element);
          element = {}
        }
      });
      excursion.slides.push(slide);
      slide = {}
    });
    var jsonexcursion = JSON.stringify(excursion);
    VISH.Debugging.log(jsonexcursion);
    if(VISH.Debugging && VISH.Debugging.isDevelopping()) {
      if(VISH.Debugging.getActionSave() == "view") {
        $("article").remove();
        $("#menubar").remove();
        $("#menubar_helpsection").remove();
        $("#joyride_help_button").remove();
        $(".theslider").remove();
        $(".nicEdit-panelContain").remove();
        $("#menubar-viewer").show();
        VISH.SlideManager.init(excursion)
      }else {
        if(VISH.Debugging.getActionSave() == "edit") {
          $("article").remove();
          var options = {};
          options["developping"] = true;
          VISH.Editor.init(options, excursion)
        }
      }
    }else {
      if(VISH.Configuration.getConfiguration()["VishIntegration"]) {
        var send_type;
        if(excursion_to_edit) {
          send_type = "PUT"
        }else {
          send_type = "POST"
        }
        var params = {"excursion[json]":jsonexcursion, "authenticity_token":initOptions["token"]};
        $.ajax({type:send_type, url:initOptions["postPath"], data:params, success:function(data) {
          window.top.location.href = data.url
        }})
      }else {
      }
    }
  };
  var _getStylesInPercentages = function(parent, element) {
    var WidthPercent = element.width() * 100 / parent.width();
    var HeightPercent = element.height() * 100 / parent.height();
    var TopPercent = element.position().top * 100 / parent.height();
    var LeftPercent = element.position().left * 100 / parent.width();
    return"position: relative; width:" + WidthPercent + "%; height:" + HeightPercent + "%; top:" + TopPercent + "%; left:" + LeftPercent + "%;"
  };
  var _getAspectRatio = function(element) {
    return element.width() / element.height()
  };
  var _onArrowLeftClicked = function() {
    V.SlidesUtilities.goToSlide(curSlide)
  };
  var _onArrowRightClicked = function() {
    V.SlidesUtilities.goToSlide(curSlide + 2)
  };
  var getParams = function() {
    return params
  };
  var getTemplate = function(area) {
    if(area) {
      return area.parent().attr("template")
    }else {
      if(params["current_el"]) {
        return params["current_el"].parent().attr("template")
      }
    }
    return null
  };
  var getCurrentArea = function() {
    if(params["current_el"]) {
      return params["current_el"]
    }
    return null
  };
  var loadFancyBox = function(fancy) {
    var fancyBoxes = {1:"templates", 2:"quizes"};
    VISH.Debugging.log("entra en loadFancyBox y par\u00e1metro: " + fancyBoxes[1]);
    VISH.Debugging.log("usando el hash: " + fancy);
    $("#" + fancyBoxes[1] + "_content").hide();
    $("#" + fancyBoxes[2] + "_content").hide();
    $("#" + fancy + "_content").show();
    VISH.Debugging.log(" fancy content vale: " + $("#" + fancy + "content"))
  };
  return{init:init, addDeleteButton:addDeleteButton, loadTab:loadTab, getId:getId, getTemplate:getTemplate, getCurrentArea:getCurrentArea, getParams:getParams, getOptions:getOptions, loadFancyBox:loadFancyBox}
}(VISH, jQuery);
VISH.Editor.Video = function(V, $, undefined) {
  var urlDivId = "tab_video_from_url_content";
  var urlInputId = "video_url";
  var init = function() {
    VISH.Editor.Video.HTML5.init();
    VISH.Editor.Video.Repository.init();
    VISH.Editor.Video.Youtube.init();
    VISH.Editor.Video.Vimeo.init();
    var urlInput = $("#" + urlInputId);
    $(urlInput).watermark("Paste video URL");
    $("#tab_video_from_url_content .previewButton").click(function(event) {
      if(VISH.Police.validateObject($(urlInput).val())[0]) {
        contentToAdd = VISH.Utils.autocompleteUrls($("#" + urlInputId).val());
        VISH.Editor.Object.drawPreview("tab_video_from_url_content", contentToAdd)
      }else {
        contentToAdd = null
      }
    })
  };
  var onLoadTab = function(tab) {
    $("#tab_video_from_url_content").find("input").val("");
    VISH.Editor.Object.resetPreview("tab_video_from_url_content")
  };
  var drawPreviewElement = function() {
    VISH.Editor.Object.drawPreviewObject(contentToAdd)
  };
  return{init:init, onLoadTab:onLoadTab, drawPreviewElement:drawPreviewElement}
}(VISH, jQuery);
VISH.Editor.Image = function(V, $, undefined) {
  var contentToAdd = null;
  var uploadDivId = "tab_pic_upload_content";
  var urlDivId = "tab_pic_from_url_content";
  var urlInputId = "picture_url";
  var init = function() {
    VISH.Editor.Image.Flikr.init();
    VISH.Editor.Image.Repository.init();
    $("#" + urlDivId + " .previewButton").click(function(event) {
      if(VISH.Police.validateObject($("#" + urlInputId).val())[0]) {
        contentToAdd = VISH.Utils.autocompleteUrls($("#" + urlInputId).val());
        VISH.Editor.Object.drawPreview(urlDivId, contentToAdd)
      }
    });
    var options = VISH.Editor.getOptions();
    var tagList = $("#" + uploadDivId + " .tagList");
    var bar = $("#" + uploadDivId + " .upload_progress_bar");
    var percent = $("#" + uploadDivId + " .upload_progress_bar_percent");
    $("#" + uploadDivId + " input[name='document[file]']").change(function() {
      $("#" + uploadDivId + " input[name='document[title]']").val($("#" + uploadDivId + " input:file").val());
      _resetUploadFields();
      $(tagList).parent().show();
      $("#" + uploadDivId + " form" + " .button").show();
      $("#" + uploadDivId + " .upload_progress_bar_wrapper").hide()
    });
    $("#" + uploadDivId + " #upload_document_submit").click(function(event) {
      if(!VISH.Police.validateFileUpload($("#" + uploadDivId + " input[name='document[file]']").val())[0]) {
        event.preventDefault()
      }else {
        if(options) {
          var description = "Uploaded by " + options["ownerName"] + " via Vish Editor";
          $("#" + uploadDivId + " input[name='document[description]']").val(description);
          $("#" + uploadDivId + " input[name='document[owner_id]']").val(options["ownerId"]);
          $("#" + uploadDivId + " input[name='authenticity_token']").val(options["token"]);
          $("#" + uploadDivId + " .documentsForm").attr("action", options["documentsPath"]);
          $("#" + uploadDivId + " input[name='tags']").val(VISH.Utils.convertToTagsArray($(tagList).tagit("tags")));
          var tagList = $("#" + uploadDivId + " .tagList");
          $(tagList).parent().hide();
          $("#" + uploadDivId + " .upload_progress_bar_wrapper").show()
        }
      }
    });
    $("#" + uploadDivId + " form").ajaxForm({beforeSend:function() {
      var percentVal = "0%";
      bar.width(percentVal);
      percent.html(percentVal)
    }, uploadProgress:function(event, position, total, percentComplete) {
      var percentVal = percentComplete + "%";
      bar.width(percentVal);
      percent.html(percentVal)
    }, complete:function(xhr) {
      processResponse(xhr.responseText);
      var percentVal = "100%";
      bar.width(percentVal);
      percent.html(percentVal)
    }})
  };
  var onLoadTab = function(tab) {
    if(tab == "upload") {
      _onLoadUploadTab()
    }
    if(tab == "url") {
      _onLoadURLTab()
    }
  };
  var _onLoadURLTab = function() {
    contentToAdd = null;
    VISH.Editor.Object.resetPreview(urlDivId);
    $("#" + urlInputId).val("")
  };
  var _onLoadUploadTab = function() {
    contentToAdd = null;
    var tagList = $("#" + uploadDivId + " .tagList");
    $(tagList).parent().hide();
    $("#" + uploadDivId + " form" + " .button").hide();
    $("#" + uploadDivId + " .upload_progress_bar_wrapper").hide();
    $("#" + uploadDivId + " input[name='document[file]']").val("");
    _resetUploadFields();
    VISH.Editor.API.requestTags(_onTagsReceived)
  };
  var _resetUploadFields = function() {
    var bar = $("#" + uploadDivId + " .upload_progress_bar");
    var percent = $("#" + uploadDivId + " .upload_progress_bar_percent");
    bar.width("0%");
    percent.html("0%");
    VISH.Editor.Object.resetPreview(uploadDivId);
    var tagList = $("#" + uploadDivId + " .tagList");
    $(tagList).tagit("reset")
  };
  var _onTagsReceived = function(data) {
    var tagList = $("#" + uploadDivId + " .tagList");
    if($(tagList).children().length == 0) {
      $.each(data, function(index, tag) {
        if(index == 3) {
          return false
        }
        $(tagList).append("<li>" + tag + "</li>")
      });
      $(tagList).tagit({tagSource:data, sortable:true, maxLength:15, maxTags:8, watermarkAllowMessage:"Add tags", watermarkDenyMessage:"limit reached"})
    }
  };
  var processResponse = function(response) {
    try {
      var jsonResponse = JSON.parse(response);
      if(jsonResponse.src) {
        if(VISH.Police.validateObject(jsonResponse.src)[0]) {
          VISH.Editor.Object.drawPreview(uploadDivId, jsonResponse.src);
          contentToAdd = jsonResponse.src
        }
      }
    }catch(e) {
    }
  };
  var drawPreviewElement = function(divId) {
    VISH.Editor.Object.drawPreviewObject(contentToAdd)
  };
  var drawImage = function(image_url, area, style) {
    var current_area;
    var reference_width = 100;
    var image_width = 300;
    var image_height = null;
    if(area) {
      current_area = area
    }else {
      current_area = VISH.Editor.getCurrentArea()
    }
    if(style) {
      style = V.SlidesUtilities.setStyleInPixels(style, current_area);
      image_width = V.SlidesUtilities.getWidthFromStyle(style, current_area)
    }
    var template = VISH.Editor.getTemplate();
    var nextImageId = VISH.Editor.getId();
    var idToDragAndResize = "draggable" + nextImageId;
    current_area.attr("type", "image");
    current_area.html("<img class='" + template + "_image' id='" + idToDragAndResize + "' title='Click to drag' src='" + image_url + "' style='" + style + "'/>");
    V.Editor.addDeleteButton(current_area);
    var scaleFactor = image_width / reference_width;
    $("#menubar").before("<div id='sliderId" + nextImageId + "' class='theslider'><input id='imageSlider" + nextImageId + "' type='slider' name='size' value='" + scaleFactor + "' style='display: none; '></div>");
    $("#imageSlider" + nextImageId).slider({from:1, to:15, step:0.25, round:1, dimension:"x", skin:"blue", onstatechange:function(value) {
      var originalHeight = $("#" + idToDragAndResize).height();
      var originalWidth = $("#" + idToDragAndResize).width();
      var newWidth = reference_width * value;
      $("#" + idToDragAndResize).width(newWidth);
      if(originalHeight === $("#" + idToDragAndResize).height()) {
        var aspectRatio = originalHeight / originalWidth;
        if(aspectRatio != 0) {
          $("#" + idToDragAndResize).height(newWidth * aspectRatio)
        }
      }
    }});
    $("#" + idToDragAndResize).draggable({cursor:"move", stop:function() {
      $(this).parent().click()
    }})
  };
  return{init:init, onLoadTab:onLoadTab, drawImage:drawImage, drawPreviewElement:drawPreviewElement}
}(VISH, jQuery);
VISH.Editor.Object = function(V, $, undefined) {
  var contentToAdd = null;
  var uploadDivId = "tab_object_upload_content";
  var urlDivId = "tab_object_from_url_content";
  var urlInputId = "object_embed_code";
  var init = function() {
    VISH.Editor.Object.Repository.init();
    VISH.Editor.Object.Live.init();
    VISH.Editor.Object.Web.init();
    VISH.Editor.Object.PDF.init();
    VISH.Editor.Object.Snapshot.init();
    var urlInput = $(urlDivId).find("input");
    $(urlInput).watermark("Paste SWF file URL");
    $("#" + urlDivId + " .previewButton").click(function(event) {
      if(VISH.Police.validateObject($("#" + urlInputId).val())[0]) {
        contentToAdd = VISH.Utils.autocompleteUrls($("#" + urlInputId).val());
        drawPreview(urlDivId, contentToAdd)
      }
    });
    var options = VISH.Editor.getOptions();
    var tagList = $("#" + uploadDivId + " .tagList");
    var bar = $("#" + uploadDivId + " .upload_progress_bar");
    var percent = $("#" + uploadDivId + " .upload_progress_bar_percent");
    $("#" + uploadDivId + " input[name='document[file]']").change(function() {
      $("#" + uploadDivId + " input[name='document[title]']").val($("#" + uploadDivId + " input:file").val());
      _resetUploadFields();
      $(tagList).parent().show();
      $("#" + uploadDivId + " form" + " .button").show();
      $("#" + uploadDivId + " .upload_progress_bar_wrapper").hide()
    });
    $("#" + uploadDivId + " #upload_document_submit").click(function(event) {
      if(!VISH.Police.validateFileUpload($("#" + uploadDivId + " input[name='document[file]']").val())[0]) {
        event.preventDefault()
      }else {
        if(options) {
          var description = "Uploaded by " + options["ownerName"] + " via Vish Editor";
          $("#" + uploadDivId + " input[name='document[description]']").val(description);
          $("#" + uploadDivId + " input[name='document[owner_id]']").val(options["ownerId"]);
          $("#" + uploadDivId + " input[name='authenticity_token']").val(options["token"]);
          $("#" + uploadDivId + " .documentsForm").attr("action", options["documentsPath"]);
          $("#" + uploadDivId + " input[name='tags']").val(VISH.Utils.convertToTagsArray($(tagList).tagit("tags")));
          var tagList = $("#" + uploadDivId + " .tagList");
          $(tagList).parent().hide();
          $("#" + uploadDivId + " .upload_progress_bar_wrapper").show()
        }
      }
    });
    $("#" + uploadDivId + " form").ajaxForm({beforeSend:function() {
      var percentVal = "0%";
      bar.width(percentVal);
      percent.html(percentVal)
    }, uploadProgress:function(event, position, total, percentComplete) {
      var percentVal = percentComplete + "%";
      bar.width(percentVal);
      percent.html(percentVal)
    }, complete:function(xhr) {
      processResponse(xhr.responseText);
      var percentVal = "100%";
      bar.width(percentVal);
      percent.html(percentVal)
    }})
  };
  var onLoadTab = function(tab) {
    if(tab == "upload") {
      _onLoadUploadTab()
    }
    if(tab == "url") {
      _onLoadURLTab()
    }
  };
  var _onLoadURLTab = function() {
    contentToAdd = null;
    resetPreview(urlDivId);
    $("#" + urlInputId).val("")
  };
  var _onLoadUploadTab = function() {
    contentToAdd = null;
    var tagList = $("#" + uploadDivId + " .tagList");
    $(tagList).parent().hide();
    $("#" + uploadDivId + " form" + " .button").hide();
    $("#" + uploadDivId + " .upload_progress_bar_wrapper").hide();
    $("#" + uploadDivId + " input[name='document[file]']").val("");
    _resetUploadFields();
    VISH.Editor.API.requestTags(_onTagsReceived)
  };
  var _resetUploadFields = function() {
    var bar = $("#" + uploadDivId + " .upload_progress_bar");
    var percent = $("#" + uploadDivId + " .upload_progress_bar_percent");
    bar.width("0%");
    percent.html("0%");
    resetPreview(uploadDivId);
    var tagList = $("#" + uploadDivId + " .tagList");
    $(tagList).tagit("reset")
  };
  var _onTagsReceived = function(data) {
    var tagList = $("#" + uploadDivId + " .tagList");
    if($(tagList).children().length == 0) {
      $.each(data, function(index, tag) {
        if(index == 3) {
          return false
        }
        $(tagList).append("<li>" + tag + "</li>")
      });
      $(tagList).tagit({tagSource:data, sortable:true, maxLength:15, maxTags:8, watermarkAllowMessage:"Add tags", watermarkDenyMessage:"limit reached"})
    }
  };
  var processResponse = function(response) {
    try {
      var jsonResponse = JSON.parse(response);
      if(jsonResponse.src) {
        if(VISH.Police.validateObject(jsonResponse.src)[0]) {
          drawPreview(uploadDivId, jsonResponse.src);
          contentToAdd = jsonResponse.src
        }
      }
    }catch(e) {
    }
  };
  var previewBackground;
  var drawPreview = function(divId, src) {
    previewBackground = $("#" + divId + " .previewimgbox").css("background-image");
    $("#" + divId + " .previewimgbox").css("background-image", "none");
    $("#" + divId + " .previewimgbox img.imagePreview").remove();
    var wrapper = renderObjectPreview(src);
    if($("#" + divId + " .previewimgbox .objectPreview").length > 0) {
      $("#" + divId + " .previewimgbox .objectPreview").remove()
    }
    $("#" + divId + " .previewimgbox").append(wrapper);
    $("#" + divId + " .previewimgbox button").show();
    $("#" + divId + " .documentblank").addClass("documentblank_extraMargin");
    $("#" + divId + " .buttonaddfancy").addClass("buttonaddfancy_extraMargin")
  };
  var resetPreview = function(divId) {
    $("#" + divId + " .previewimgbox button").hide();
    $("#" + divId + " .previewimgbox img.imagePreview").remove();
    $("#" + divId + " .previewimgbox .objectPreview").remove();
    if(previewBackground) {
      $("#" + divId + " .previewimgbox").css("background-image", previewBackground)
    }
    $("#" + divId + " .documentblank").removeClass("documentblank_extraMargin");
    $("#" + divId + " .buttonaddfancy").removeClass("buttonaddfancy_extraMargin")
  };
  var drawPreviewElement = function() {
    drawPreviewObject(contentToAdd)
  };
  var drawPreviewObject = function(content) {
    if(content) {
      drawObject(content);
      $.fancybox.close()
    }
  };
  function objectInfo(wrapper, source, sourceType) {
    this.wrapper = wrapper;
    this.source = source;
    this.type = sourceType
  }
  var getObjectInfo = function(object) {
    var wrapper = null;
    var element = $(object)[0];
    if(typeof element != "undefined") {
      var wrapper = element.tagName
    }
    var source = _getSourceFromObject(object, wrapper);
    var type = _getTypeFromSource(source);
    return new objectInfo(wrapper, source, type)
  };
  var _getSourceFromObject = function(object, wrapper) {
    switch(wrapper) {
      case null:
        return object;
      case "EMBED":
        return $(object).attr("src");
      case "OBJECT":
        if(typeof $(object).attr("src") != "undefined") {
          return $(object).attr("src")
        }
        if(typeof $(object).attr("data") != "undefined") {
          return $(object).attr("data")
        }
        return"source not founded";
      case "IFRAME":
        return $(object).attr("src");
      default:
        VISH.Debugging.log("Unrecognized object wrapper: " + wrapper);
        return null;
        break
    }
  };
  var _getTypeFromSource = function(source) {
    var http_urls_pattern = /(http(s)?:\/\/)([aA-zZ0-9%=_&+?])+([./-][aA-zZ0-9%=_&+?]+)*[/]?/g;
    var www_urls_pattern = /(www[.])([aA-zZ0-9%=_&+?])+([./-][aA-zZ0-9%=_&+?]+)*[/]?/g;
    var youtube_video_pattern = /(http(s)?:\/\/)?(((youtu.be\/)([aA-zZ0-9]+))|((www.youtube.com\/((watch\?v=)|(embed\/)))([aA-z0-9Z&=.])+))/g;
    var html5VideoFormats = ["mp4", "webm", "ogg"];
    var imageFormats = ["jpg", "jpeg", "png", "gif", "bmp"];
    if(typeof source != "string") {
      return null
    }
    if(source.match(youtube_video_pattern) != null) {
      return"youtube"
    }
    source = source.split("?")[0];
    var extension = source.split(".").pop().toLowerCase();
    if(imageFormats.indexOf(extension) != "-1") {
      return"image"
    }
    if(extension == "swf") {
      return"swf"
    }
    if(extension == "pdf") {
      return"pdf"
    }
    if(html5VideoFormats.indexOf(extension) != "-1") {
      return"HTML5"
    }
    if(source.match(http_urls_pattern) != null || source.match(www_urls_pattern) != null) {
      return"web"
    }
    return extension
  };
  var resizeObject = function(id, width) {
    var proportion = $("#" + id).height() / $("#" + id).width();
    $("#" + id).width(width);
    $("#" + id).height(width * proportion);
    var parent = $("#" + id).parent();
    $(parent).width(width);
    $(parent).height(width * proportion)
  };
  var _adjustWrapperOfObject = function(objectID, current_area) {
    var proportion = $("#" + objectID).height() / $("#" + objectID).width();
    var maxWidth = current_area.width();
    var maxHeight = current_area.height();
    var width = $("#" + objectID).width();
    var height = $("#" + objectID).height();
    if(width > maxWidth) {
      $("#" + objectID).width(maxWidth);
      $("#" + objectID).height(width * proportion);
      width = maxWidth;
      height = $("#" + objectID).height()
    }
    if(height > maxHeight) {
      $("#" + objectID).height(maxHeight);
      $("#" + objectID).width(height / proportion);
      width = $("#" + objectID).width();
      height = maxHeight
    }
    var wrapper = $("#" + objectID).parent();
    if($(wrapper).hasClass("object_wrapper")) {
      $(wrapper).height($("#" + objectID).height());
      $(wrapper).width($("#" + objectID).width())
    }
  };
  var renderObjectPreview = function(object) {
    var objectInfo = getObjectInfo(object);
    switch(objectInfo.wrapper) {
      case null:
        switch(objectInfo.type) {
          case "image":
            return"<img class='imagePreview' src='" + object + "'></img>";
            break;
          case "swf":
            return"<embed class='objectPreview' src='" + object + "' wmode='transparent' ></embed>";
            break;
          case "pdf":
            return VISH.Editor.Object.PDF.generatePreviewWrapperForPdf(object);
            break;
          case "youtube":
            return VISH.Editor.Video.Youtube.generatePreviewWrapperForYoutubeVideoUrl(object);
            break;
          case "HTML5":
            return VISH.Editor.Video.HTML5.renderVideoFromSources([object]);
            break;
          case "web":
            return VISH.Editor.Object.Web.generatePreviewWrapperForWeb(object);
            break;
          default:
            VISH.Debugging.log("Unrecognized object source type");
            break
        }
        break;
      case "EMBED":
        return _genericWrapperPreview(object);
        break;
      case "OBJECT":
        return _genericWrapperPreview(object);
        break;
      case "IFRAME":
        return _genericWrapperPreview(object);
        break;
      default:
        VISH.Debugging.log("Unrecognized object wrapper: " + objectInfo.wrapper);
        break
    }
  };
  var _genericWrapperPreview = function(object) {
    var wrapperPreview = $(object);
    $(wrapperPreview).addClass("objectPreview");
    $(wrapperPreview).attr("wmode", "transparent");
    $(wrapperPreview).removeAttr("width");
    $(wrapperPreview).removeAttr("height");
    return wrapperPreview
  };
  var drawObject = function(object, area, style) {
    if(!VISH.Police.validateObject(object)[0]) {
      return
    }
    var current_area;
    var object_style = "";
    if(area) {
      current_area = area
    }else {
      current_area = VISH.Editor.getCurrentArea()
    }
    if(style) {
      object_style = style
    }
    var objectInfo = getObjectInfo(object);
    switch(objectInfo.wrapper) {
      case null:
        switch(objectInfo.type) {
          case "image":
            V.Editor.Image.drawImage(object);
            break;
          case "swf":
            V.Editor.Object.Flash.drawFlashObjectWithSource(object, object_style);
            break;
          case "pdf":
            V.Editor.Object.drawObject(V.Editor.Object.PDF.generateWrapperForPdf(object));
            break;
          case "youtube":
            V.Editor.Object.drawObject(V.Editor.Video.Youtube.generateWrapperForYoutubeVideoUrl(object));
            break;
          case "HTML5":
            V.Editor.Video.HTML5.drawVideoWithUrl(object);
            break;
          case "web":
            V.Editor.Object.drawObject(V.Editor.Object.Web.generateWrapperForWeb(object));
            break;
          default:
            V.Debugging.log("Unrecognized object source type: " + objectInfo.type);
            break
        }
        break;
      case "EMBED":
        drawObjectWithWrapper(object, current_area, object_style);
        break;
      case "OBJECT":
        drawObjectWithWrapper(object, current_area, object_style);
        break;
      case "IFRAME":
        drawObjectWithWrapper(object, current_area, object_style);
        break;
      default:
        VISH.Debugging.log("Unrecognized object wrapper: " + objectInfo.wrapper);
        break
    }
  };
  var drawObjectWithWrapper = function(wrapper, current_area, style) {
    var template = V.Editor.getTemplate(current_area);
    var nextWrapperId = V.Editor.getId();
    var idToDrag = "draggable" + nextWrapperId;
    var idToResize = "resizable" + nextWrapperId;
    current_area.attr("type", "object");
    var wrapperDiv = document.createElement("div");
    wrapperDiv.setAttribute("id", idToDrag);
    if(style) {
      wrapperDiv.setAttribute("style", style)
    }
    $(wrapperDiv).addClass("object_wrapper");
    var wrapperTag = $(wrapper);
    $(wrapperTag).attr("id", idToResize);
    $(wrapperTag).attr("class", template + "_object");
    $(wrapperTag).attr("wmode", "transparent");
    $(current_area).html("");
    $(current_area).append(wrapperDiv);
    VISH.Editor.addDeleteButton($(current_area));
    $(wrapperDiv).append(wrapperTag);
    var width, value;
    if(style) {
      width = V.SlidesUtilities.getWidthFromStyle(style, current_area);
      value = 10 * width / $(current_area).width()
    }else {
      value = 10
    }
    var mystep = $(current_area).width() / 10;
    $("#menubar").before("<div id='sliderId" + nextWrapperId + "' class='theslider'><input id='imageSlider" + nextWrapperId + "' type='slider' name='size' value='" + value + "' style='display: none; '></div>");
    $("#imageSlider" + nextWrapperId).slider({from:1, to:10, step:0.2, round:1, dimension:"x", skin:"blue", onstatechange:function(value) {
      resizeObject(idToResize, mystep * value)
    }});
    $("#" + idToDrag).draggable({cursor:"move"});
    _adjustWrapperOfObject(idToResize, current_area)
  };
  return{init:init, onLoadTab:onLoadTab, drawObject:drawObject, renderObjectPreview:renderObjectPreview, getObjectInfo:getObjectInfo, resizeObject:resizeObject, drawPreview:drawPreview, resetPreview:resetPreview, drawPreviewElement:drawPreviewElement, drawPreviewObject:drawPreviewObject, _getTypeFromSource:_getTypeFromSource, _getSourceFromObject:_getSourceFromObject}
}(VISH, jQuery);
VISH.Samples = function(V, undefined) {
  var samples_aldo = {"id":193, "title":"Chess: The Art of Learning", "description":"The Art of Learning, a journey in the pursuit of excellence.\nAmazing presentation with images, videos and 3d objects, generated by Vish Editor.", "avatar":"/assets/logos/original/excursion-81.png", "author":"Aldo", "slides":[{"id":"article1", "template":"t1", "elements":[{"id":"zone1", "type":"image", "areaid":"left", "body":"/pictures/62.jpg", "style":"position: relative; width:955.8823529411765%; top:0%; left:0%;"}, 
  {"id":"zone2", "type":"text", "areaid":"header", "body":'<div class="vish-parent-font3" style="text-align: center;"><span class="vish-font3 vish-fontarial"><font size="6"><span style="font-family: helvetica;"><span style="font-weight: bold;">Chess</span>: The Art of Learning</span></font><br></span></div>'}, {"id":"zone3", "type":"text", "areaid":"subheader", "body":'<div class="vish-parent-font3" style="text-align: right;"><span class="vish-font3 vish-fontarial"><font size="4"><span style="font-style: italic; font-family: helvetica;">by Aldo Gordillo&nbsp; </span></font><br></span></div>'}]}, 
  {"id":"article2", "template":"t5", "elements":[{"id":"zone4", "type":"text", "areaid":"header", "body":'<div class="vish-parent-font6" style="text-align: center;"><span class="vish-font6 vish-fontarial">Introduction</span></div>'}, {"id":"zone5", "type":"image", "areaid":"left", "body":"http://farm8.staticflickr.com/7099/7185785919_de19f61d2a_m.jpg", "style":"position: relative; width:677.0833333333334%; top:0%; left:0%;"}, {"id":"zone6", "areaid":"center"}, {"id":"zone7", "type":"text", "areaid":"right", 
  "body":'<br><br><div class="vish-parent-font5" style="text-align: center;"><span class="vish-font5 vish-fontarial"><span style="font-family: helvetica;">Chess is an exercise of infinite possibilities for the mind.</span></span><br style="font-family: helvetica;"></div><span class="vish-font5 vish-fontarial"></span><ul><li><span class="vish-font5 vish-fontarial"><span style="font-family: helvetica;">Concentration</span></span></li><li><span class="vish-font5 vish-fontarial"><span style="font-family: helvetica;">Critical thinking</span></span></li><li><span class="vish-font5 vish-fontarial"><span style="font-family: helvetica;">Abstract reasoning</span></span></li><li><span class="vish-font5 vish-fontarial"><span style="font-family: helvetica;">Pattern recognition</span></span></li><li><span class="vish-font5 vish-fontarial"><span style="font-family: helvetica;">Creativity</span></span></li><li><span class="vish-font5 vish-fontarial"><span style="font-family: helvetica;">Strategic Planning</span></span></li></ul>'}]}, 
  {"id":"article3", "template":"t2", "elements":[{"id":"zone8", "type":"object", "areaid":"left", "body":'<iframe style="width: 678px; height: 518px;" wmode="transparent" class="t2_object" id="resizableunicID_3" src="http://en.wikipedia.org/wiki/Chess">&lt;/embed&gt;</iframe>', "style":"position: relative; width:100%; top:0.19305019305019305%; left:-1.6224188790560472%;"}]}, {"id":"article4", "template":"t7", "elements":[{"id":"zone9", "type":"text", "areaid":"header", "body":'<div class="vish-parent-font3" style="text-align: center;"><span class="vish-font3 vish-fontarial"><font size="5"><span style="font-family: helvetica;">Human Vs Machine</span></font><br></span></div>'}, 
  {"id":"zone10", "type":"image", "areaid":"left", "body":"/pictures/68.jpg?1339718350", "style":"position: relative; width:290.17857142857144%; top:-0.6507592190889371%; left:-113.83928571428571%;"}, {"id":"zone11", "type":"object", "areaid":"center", "body":'<iframe wmode="transparent" class="t7_object" id="resizableunicID_5" src="http://www.youtube.com/embed/aGVv3br59P4?wmode=transparent" style="width: 434px; height: 325px;" frameborder="0"></iframe>', "style":"position: relative; width:100%; top:4.370179948586118%; left:-2.5345622119815667%;"}, 
  {"id":"zone12", "type":"text", "areaid":"subheader", "body":'<div class="vish-parent-font3"><span class="vish-font3 vish-fontarial">Garry Kimovich Kasparov was the first world champion to lose a match to a computer.<br></span></div>'}]}, {"id":"article5", "template":"t2", "elements":[{"id":"zone13", "type":"object", "areaid":"left", "body":'<iframe style="width: 542.4px; height: 415.306px;" wmode="transparent" class="t2_object" id="resizableunicID_6" src="http://www.xml3d.org/xml3d/demos/25_Chess/">&lt;/embed&gt;</iframe>', 
  "style":"position: relative; width:79.9410029498525%; top:8.494208494208495%; left:10.47197640117994%;"}]}]};
  var samples = {"id":"1", "title":"Nanoyou", "description":"This excursion is about nanotechnology", "avatar":"/assets/logos/original/excursion-01.png", "author":"Enrique Barra", "slides":[{"id":"article1", "template":"t5", "elements":[{"id":"zone1", "type":"text", "areaid":"header", "body":'<div><font size="6">hola</font></div>'}, {"id":"zone2", "type":"text", "areaid":"left", "body":'<div class="vish-parent-font5"><span class="vish-font5 vish-fontarial" style="background-color: rgb(255, 0, 102);;">Insert text here</span></div><div class="vish-parent-font5"><span class="vish-font5 vish-fontarial" style="color:#33ff00;">adfadf</span></div><div class="vish-parent-font5"><span class="vish-font5 vish-fontimpact" style="color:#33ff00;">afdfadf</span></div>'}, 
  {"id":"zone3", "type":"object", "areaid":"right", "body":'<iframe src="http://www.youtube.com/embed/ZFVfB4Tnf-M?wmode=transparent" frameborder="0" style="width: 246.23999999999998px; height: 174.88065306122448px;" id="resizableunicID_3" class="t1_object" title="Click to drag" unselectable="on"></iframe>', "style":"position: relative; width: 206.23999999999998px; height: 148.88065306122448px; left: 102px; top: 271px; "}]}, {"id":"article2", "template":"t5", "elements":[{"id":"zone4", "type":"text", 
  "areaid":"header", "body":"flash"}, {"id":"zone5", "type":"object", "areaid":"left", "body":'<embed width="100%" height="100%" id="resizableunicID_4" src="/media/swf/virtualexperiment_1ppp.swf" type="application/x-shockwave-flash" class="t1_object" title="Click to drag">', "style":"position: relative; width: 298.08px; height: 218.79272727272726px; left: 7px; top: 36px; "}, {"id":"zone6", "areaid":"right"}]}, {"id":"vish10", "template":"t2", "elements":[{"id":"332", "type":"video", "areaid":"left", 
  "controls":true, "autoplay":false, "loop":false, "poster":"http://d1p69vb2iuddhr.cloudfront.net/assets/www/demo/midnight_sun_800-e460322294501e1d5db9ab3859dd859a.jpg", "style":"position: relative; left: 2px; top: 110px; width: 325px;", "sources":'[{ "type": "video/webm", "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_720p.webm"},{"type": "video/mp4","src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_360p.mp4"}]'}]}]};
  var full_samples = {"id":"1", "title":"Nanoyou", "description":"This excursion is about nanotechnology", "avatar":"/assets/logos/original/excursion-02.png", "author":"Enrique Barra", "slides":[{"id":"vish1", "author":"John Doe", "template":"t1", "elements":[{"id":"315", "type":"text", "areaid":"header", "body":"Ejemplo de flora"}, {"id":"316", "type":"text", "areaid":"left", "body":'<div><ol><li>lolo<br></li><li>perrito<br></li></ol><div><font size="6">gato</font></div></div>'}, {"id":"317", "type":"image", 
  "areaid":"right", "body":"http://www.asturtalla.com/arbol.jpg"}]}, {"id":"vish2", "template":"t2", "elements":[{"id":"318", "type":"text", "areaid":"header", "body":"Ejemplo de fauna..."}, {"id":"319", "type":"image", "areaid":"left", "body":"http://www.absoluthuelva.com/wp-content/uploads/2009/03/donana.jpg"}]}, {"id":"vish3", "template":"t1", "elements":[{"id":"320", "type":"text", "areaid":"header", "body":"Sensores"}, {"id":"321", "type":"text", "areaid":"left", "body":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas orci nisl, euismod a posuere ac, commodo quis ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sollicitudin risus laoreet velit dapibus bibendum. Nullam cursus sollicitudin hendrerit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ullamcorper tempor bibendum. Morbi gravida pretium leo, vitae scelerisque quam mattis eu. Sed hendrerit molestie magna, sit amet porttitor nulla facilisis in. Donec vel massa mauris, sit amet condimentum lacus.</p>"}, 
  {"id":"322", "type":"image", "areaid":"right", "body":"http://www.satec.es/es-ES/NuestraActividad/CasosdeExito/PublishingImages/IMG%20Do%C3%B1ana/do%C3%B1ana_fig2.png"}]}, {"id":"vish4", "template":"t2", "elements":[{"id":"323", "type":"text", "areaid":"header", "body":"Puesta de sol..."}, {"id":"324", "type":"image", "areaid":"left", "body":"http://www.viajes.okviajar.es/wp-content/uploads/2010/11/parque-donana.jpg"}]}, {"id":"vish5", "template":"t2", "elements":[{"id":"325", "type":"text", "areaid":"header", 
  "body":"Experimento virtual1"}, {"id":"7335", "type":"object", "areaid":"left", "body":'<embed width="99%" height="99%" src="/media/swf/virtualexperiment_1.swf" type="application/x-shockwave-flash"></embed>'}]}, {"id":"vish6", "template":"t2", "elements":[{"id":"327", "type":"flashcard", "areaid":"left", "canvasid":"myCanvas", "jsoncontent":'{"name": "myFirstFlashcard","description": "flashcard explanation","type": "flashcard","backgroundSrc": "media/images/background.jpg","pois": [{"id": 1,"x": 200,"y": 325,"templateNumber": 0,"zonesContent": [{"type": "text","content": "El tantalio o t\ufffdntalo es un elemento qu\ufffdmico de n\ufffdmero at\ufffdmico 73, que se sit\ufffda en el grupo 5 de la tabla peri\ufffddica de los elementos. Su s\ufffdmbolo es Ta. Se trata de un metal de transici\ufffdn raro, azul gris\ufffdceo, duro, que presenta brillo met\ufffdlico y resiste muy bien la corrosi\ufffdn. Se encuentra en el mineral tantalita. Es fisiol\ufffdgicamente inerte, por lo que, entre sus variadas aplicaciones, se puede emplear para la fabricaci\ufffdn de instrumentos quir\ufffdrgicos y en implantes. En ocasiones se le llama t\ufffdntalo, pero el \ufffdnico nombre reconocido por la Real Academia Espa\ufffdola es tantalio."}]},{"id": 2,"x": 458,"y": 285,"templateNumber": 1,"zonesContent": [{"type": "text","content": "Image shows silver rock"},{"type": "image","content": "media/images/3.jpg"}]},{"id": 3,"x": 658,"y": 285,"templateNumber": 0,"zonesContent": [{"type": "video","content": [{"mimetype": "video/webm","src": "media/videos/video1.webm"},{"mimetype": "video/mp4","src": "http://video-js.zencoder.com/oceans-clip.mp4"}]}]},{"id": 4,"x": 458,"y": 457,"templateNumber": 2,"zonesContent": [{"type": "text","content": "Image shows silver rock"},{"type": "empty","content": ""},{"type": "text","content": "El tantalio o t\ufffdntalo es un elemento qu\ufffdmico de n\ufffdmero at\ufffdmico 73, que se sit\ufffda en el grupo 5 de la tabla peri\ufffddica de los elementos. Su s\ufffdmbolo es Ta. Se trata de un metal de transici\ufffdn raro, azul gris\ufffdceo, duro, que presenta brillo met\ufffdlico y resiste muy bien la corrosi\ufffdn. Se encuentra en el mineral tantalita. Es fisiol\ufffdgicamente inerte, por lo que, entre sus variadas aplicaciones, se puede emplear para la fabricaci\ufffdn de instrumentos quir\ufffdrgicos y en implantes. En ocasiones se le llama t\ufffdntalo, pero el \ufffdnico nombre reconocido por la Real Academia Espa\ufffdola es tantalio."}]}]}', 
  "js":"js/mods/fc/VISH.Mods.fc.js"}]}, {"id":"vish7", "template":"t2", "elements":[{"id":"328", "type":"flashcard", "areaid":"left", "canvasid":"myCanvas2", "jsoncontent":'{"name": "myFirstFlashcard","description": "flashcard explanation","type": "flashcard","backgroundSrc": "media/images/background2.png","pois": [{"id": 1,"x": 200,"y": 325,"templateNumber": 0,"zonesContent": [{"type": "text","content": "texto texto texto"}]},{"id": 2,"x": 458,"y": 285,"templateNumber": 1,"zonesContent": [{"type": "text","content": "Image shows silver rock"},{"type": "image","content": "media/images/plata.jpg"}]},{"id": 3,"x": 658,"y": 285,"templateNumber": 0,"zonesContent": [{"type": "video","content": [{"mimetype": "video/webm","src": "media/videos/video1.webm"},{"mimetype": "video/mp4","src": "http://video-js.zencoder.com/oceans-clip.mp4"}]}]},{"id": 4,"x": 458,"y": 457,"templateNumber": 2,"zonesContent": [{"type": "text","content": "Image shows silver rock"},{"type": "empty","content": ""},{"type": "text","content": "texto 2 texto 2."}]}]}', 
  "js":"js/mods/fc/VISH.Mods.fc.js"}]}, {"id":"vish8", "template":"t2", "elements":[{"id":"329", "type":"openquestion", "areaid":"header", "body":"Do you like this slide?", "posturl":"http://localhost/quiz/adfklkdf"}]}, {"id":"vish9", "template":"t2", "elements":[{"id":"330", "type":"mcquestion", "areaid":"header", "body":"Do you like this slide?", "posturl":"http://localhost/quiz/adfklkdf", "options":["yes", "no", "maybe"], "rightanswer":0}]}, {"id":"vish10", "template":"t2", "elements":[{"id":"331", 
  "type":"text", "areaid":"header", "body":"Sublime HTML5 video!"}, {"id":"332", "type":"video", "areaid":"left", "controls":true, "autoplay":false, "loop":false, "poster":"http://d1p69vb2iuddhr.cloudfront.net/assets/www/demo/midnight_sun_800-e460322294501e1d5db9ab3859dd859a.jpg", "sources":'[{ "type": "video/webm", "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_720p.webm"},{"type": "video/mp4","src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_360p.mp4"}]'}]}, {"id":"vish11", 
  "template":"t1", "elements":[{"id":"333", "type":"text", "areaid":"header", "body":"Example of HTML5 video with autostart"}, {"id":"334", "type":"text", "areaid":"left", "body":"<p> HTML5 is a language for structuring and presenting content for the World Wide Web, and is a core technology of the Internet originally proposed by Opera Software. It is the fifth revision of the HTML standard (created in 1990 and standardized as HTML4 as of 1997) and as of March 2012 is still under development. Its core aims have been to improve the language with support for the latest multimedia while keeping it easily readable by humans and consistently understood by computers and devices (web browsers, parsers, etc.). HTML5 is intended to subsume not only HTML 4, but XHTML 1 and DOM Level 2 HTML as well.</p>"}, 
  {"id":"335", "type":"video", "areaid":"right", "controls":true, "autoplay":true, "sources":'[{ "type": "video/webm", "src": "videos/kids.webm"},{"type": "video/mp4","src": "videos/kids.mp4"}]'}]}, {"id":"vish12", "template":"t2", "elements":[{"id":"393", "type":"text", "areaid":"header", "body":"Example of Youtube video"}, {"id":"394", "type":"object", "areaid":"left", "body":'<iframe width="560" height="315" src="http://www.youtube.com/embed/1hR7EtD6Bns" frameborder="0" allowfullscreen></iframe>'}]}, 
  {"id":"vish13", "template":"t2", "elements":[{"id":"393", "type":"text", "areaid":"header", "body":"Example of Youtube video with style param"}, {"id":"335", "type":"object", "areaid":"left", "body":'<iframe width="324" height="243" src="http://www.youtube.com/embed/_jvDzfTRP4E" frameborder="0" allowfullscreen></iframe>', "style":"position: relative; left: 163px; top: 110px; width: 325px; height: 215px;"}]}, {"id":"vish14", "template":"t1", "elements":[{"id":"7393", "type":"text", "areaid":"header", 
  "body":"Example of generic Object visualization"}, {"id":"7334", "type":"text", "areaid":"left", "body":"<p> HTML5 is a language for structuring and presenting content for the World Wide Web, and is a core technology of the Internet originally proposed by Opera Software. It is the fifth revision of the HTML standard (created in 1990 and standardized as HTML4 as of 1997) and as of March 2012 is still under development. Its core aims have been to improve the language with support for the latest multimedia while keeping it easily readable by humans and consistently understood by computers and devices (web browsers, parsers, etc.). HTML5 is intended to subsume not only HTML 4, but XHTML 1 and DOM Level 2 HTML as well.</p>"}, 
  {"id":"7335", "type":"object", "areaid":"right", "body":'<embed width="100%" height="80%" src="/media/swf/virtualexperiment_1.swf" type="application/x-shockwave-flash"></embed>'}]}]};
  return{full_samples:full_samples, samples:samples, samples_aldo:samples_aldo}
}(VISH);
VISH.Samples.API = function(V, undefined) {
  var imageList = {"pictures":[{"id":54, "title":"ClintEastwood.jpg", "description":null, "author":"Demo", "src":"http://www.dan-dare.org/dan%20simpsons/TheSimpsonsEveryoneEver800.jpg"}, {"id":55, "title":"ClintEastwood.jpg", "description":null, "author":"Demo", "src":"http://3.bp.blogspot.com/--H0o8mc28bA/TxrsnMAFMDI/AAAAAAAAARs/eOCVIXKlm9I/s1600/sala-cine.jpg"}, {"id":56, "title":"ClintEastwood.jpg", "description":null, "author":"Demo", "src":"http://www.deviantart.com/download/46036660/The_Simpsonzu_by_spacecoyote.jpg"}, 
  {"id":57, "title":"ClintEastwood.jpg", "description":null, "author":"Demo", "src":"http://www.granadablogs.com/pateandoelmundo/wp-content/uploads/2009/10/_061.jpg"}, {"id":58, "title":"ClintEastwood.jpg", "description":null, "author":"Demo", "src":"http://www.revistaintime.com/wp-content/uploads/2012/03/el-padrino-2.jpg"}, {"id":59, "title":"ClintEastwood.jpg", "description":null, "author":"Demo", "src":"http://cinealdesnudo.files.wordpress.com/2011/12/el-indomable-will-hunting.jpg"}, {"id":60, 
  "title":"ClintEastwood.jpg", "description":null, "author":"Demo", "src":"http://politicamenteconservador.blogia.com/upload/20060818041914-el-senor-de-los-anillos2.jpg"}, {"id":61, "title":"ClintEastwood.jpg", "description":null, "author":"Demo", "src":"http://despertando.me/wp-content/uploads/2012/04/el-se%C3%B1or-de-los-anillos.jpg"}, {"id":62, "title":"ClintEastwood.jpg", "description":null, "author":"Demo", "src":"http://4.bp.blogspot.com/-Fh_v8PYbVg0/TyGdKEiYmKI/AAAAAAAAAPI/MKdfZ224aEQ/s1600/el_senor_de_los_anillos_la_batalla_por_la_tierra_media_2_the_rise_of_the_witchking-181035.jpg"}, 
  {"id":63, "title":"ClintEastwood.jpg", "description":null, "author":"Demo", "src":"http://1.bp.blogspot.com/_9PpLM82o3g0/S8uPONu3kaI/AAAAAAAAC9A/thHNALuFxdE/s1600/Gandalf-vs-El-Balrog-gandalf-7018563-1280-960.jpg"}, {"id":64, "title":"ClintEastwood.jpg", "description":null, "author":"Demo", "src":"NOVAACARGAR"}, {"id":65, "title":"ClintEastwood.jpg", "description":null, "author":"Demo", "src":"http://www.deviantart.com/download/46036660/The_Simpsonzu_by_spacecoyote.jpg"}, {"id":66, "title":"ClintEastwood.jpg", 
  "description":null, "author":"Demo", "src":"http://www.deviantart.com/download/46036660/The_Simpsonzu_by_spacecoyote.jpg"}, {"id":67, "title":"ClintEastwood.jpg", "description":null, "author":"Demo", "src":"http://www.deviantart.com/download/46036660/The_Simpsonzu_by_spacecoyote.jpg"}, {"id":68, "title":"ClintEastwood.jpg", "description":null, "author":"Demo", "src":"http://www.deviantart.com/download/46036660/The_Simpsonzu_by_spacecoyote.jpg"}, {"id":69, "title":"ClintEastwoooood.jpg", "description":"this is clint", 
  "author":"Demo", "src":"http://upload.wikimedia.org/wikipedia/en/4/47/Simpsons_on_Tracey_Ullman.png"}]};
  var imageListLittle = {"pictures":[{"id":54, "title":"ClintEastwood.jpg", "description":null, "author":"Demo", "src":"http://www.dan-dare.org/dan%20simpsons/TheSimpsonsEveryoneEver800.jpg"}, {"id":55, "title":"ClintEastwood.jpg", "description":null, "author":"Demo", "src":"http://3.bp.blogspot.com/--H0o8mc28bA/TxrsnMAFMDI/AAAAAAAAARs/eOCVIXKlm9I/s1600/sala-cine.jpg"}, {"id":56, "title":"ClintEastwood.jpg", "description":null, "author":"Demo", "src":"http://www.deviantart.com/download/46036660/The_Simpsonzu_by_spacecoyote.jpg"}]};
  var imageListDummy = {"pictures":[]};
  var video = {"id":"1534", "title":"Midnight Sun", "description":"Awesome HTML5 video example", "author":"John Doe", "poster":"http://d1p69vb2iuddhr.cloudfront.net/assets/www/demo/midnight_sun_800-e460322294501e1d5db9ab3859dd859a.jpg", "sources":"[" + '{ "type": "video/webm", "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_720p.webm"},' + '{ "type": "video/mp4",  "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_360p.mp4" }' + "]"};
  var videoList = {"videos":[{"id":"1534", "title":"HTML5 Demo", "description":"HTML5 (HyperText Markup Language, version 5) es la quinta revision importante del lenguaje basico de la World Wide Web, HTML. HTML5 especifica dos variantes de sintaxis para HTML: un clasico HTML (text/html), la variante conocida como HTML5 y una variante XHTML conocida como sintaxis XHTML5 que debera ser servida como XML (XHTML) (application/xhtml+xml).1 2 Esta es la primera vez que HTML y XHTML se han desarrollado en paralelo.", 
  "author":"Awesome Videos", "poster":"http://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Sasso_lungo_da_passo_pordoi.jpg/250px-Sasso_lungo_da_passo_pordoi.jpg", "sources":"[" + '{ "type": "video/webm", "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_720p.webm"},' + '{ "type": "video/mp4",  "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_360p.mp4" }' + "]"}, {"id":"1535", "title":"Paisaje bonito", "description":"Awesome HTML5 video example", "author":"Aldo Gordillo", 
  "poster":"http://d1p69vb2iuddhr.cloudfront.net/assets/www/demo/midnight_sun_800-e460322294501e1d5db9ab3859dd859a.jpg", "sources":"[" + '{ "type": "video/webm", "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_720p.webm"},' + '{ "type": "video/mp4",  "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_360p.mp4" }' + "]"}, {"id":"1536", "title":"Otro paisaje bonito", "description":"Awesome HTML5 video example", "author":"Aldo Gordillo", "poster":"http://1.bp.blogspot.com/-DFj9INluj80/TfiNl7q3DbI/AAAAAAAAAws/hVJu13VbKEY/s1600/paisaje.jpg", 
  "sources":"[" + '{ "type": "video/webm", "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_720p.webm"},' + '{ "type": "video/mp4",  "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_360p.mp4" }' + "]"}, {"id":"1537", "title":"Verde", "description":"Awesome HTML5 video example", "author":"Aldo Gordillo", "poster":"http://www.forodefotos.com/attachments/naturaleza/12983d1281113830-fotos-de-paisaje-fotos-de-paisaje.jpg", "sources":"[" + '{ "type": "video/webm", "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_720p.webm"},' + 
  '{ "type": "video/mp4",  "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_360p.mp4" }' + "]"}, {"id":"1538", "title":"Noche", "description":"Awesome HTML5 video example", "author":"Aldo Gordillo", "poster":"http://ro18.blogspot.es/img/paisaje.jpg", "sources":"[" + '{ "type": "video/webm", "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_720p.webm"},' + '{ "type": "video/mp4",  "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_360p.mp4" }' + "]"}, {"id":"1539", 
  "title":"Puesta de sol", "description":"Awesome HTML5 video example", "author":"Aldo Gordillo", "poster":"http://walpaper.es/images/wallpapers/Paisaje-fotografia-HDR-656343.jpeg", "sources":"[" + '{ "type": "video/webm", "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_720p.webm"},' + '{ "type": "video/mp4",  "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_360p.mp4" }' + "]"}, {"id":"1540", "title":"Cayuco", "description":"Awesome HTML5 video example", "author":"Aldo Gordillo", 
  "poster":"http://3.bp.blogspot.com/-a-WrZZf0WJo/TsEBPXjUQXI/AAAAAAAAFBg/kh0aS9Kemag/s1600/PAISAJE+JUANMA.jpg", "sources":"[" + '{ "type": "video/webm", "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_720p.webm"},' + '{ "type": "video/mp4",  "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_360p.mp4" }' + "]"}, {"id":"1541", "title":"Aves", "description":"Awesome HTML5 video example", "author":"Aldo Gordillo", "poster":"http://images.artelista.com/artelista/obras/fichas/8/3/3/8619208014133041.JPG", 
  "sources":"[" + '{ "type": "video/webm", "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_720p.webm"},' + '{ "type": "video/mp4",  "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_360p.mp4" }' + "]"}, {"id":"1542", "title":"Delfines", "description":"Awesome HTML5 video example", "author":"Aldo Gordillo", "poster":"http://4.bp.blogspot.com/-CfZKEdXcXtg/TijG57sIFWI/AAAAAAAAARQ/O8FP1OQ0a0w/s1600/delfines-saltando.jpg", "sources":"[" + '{ "type": "video/webm", "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_720p.webm"},' + 
  '{ "type": "video/mp4",  "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_360p.mp4" }' + "]"}, {"id":"1543", "title":"Gato", "description":"Awesome HTML5 video example", "author":"Aldo Gordillo", "poster":"http://www.10puntos.com/wp-content/uploads/2010/09/gato-lindo.jpg", "sources":"[" + '{ "type": "video/webm", "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_720p.webm"},' + '{ "type": "video/mp4",  "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_360p.mp4" }' + 
  "]"}, {"id":"1544", "title":"Otro gato", "description":"Awesome HTML5 video example", "author":"Aldo Gordillo", "poster":"http://neko.koiora.net/files/2011/06/Gato17.jpg", "sources":"[" + '{ "type": "video/webm", "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_720p.webm"},' + '{ "type": "video/mp4",  "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_360p.mp4" }' + "]"}, {"id":"1545", "title":"Gato ninja", "description":"Awesome HTML5 video example", "author":"Aldo Gordillo", 
  "poster":"http://www.sarda.es/fotos/gato_volador/gato_volador.jpg", "sources":"[" + '{ "type": "video/webm", "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_720p.webm"},' + '{ "type": "video/mp4",  "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_360p.mp4" }' + "]"}]};
  var videoListLittle = {"videos":[{"id":"1534", "title":"HTML5 Demo", "description":"HTML5 (HyperText Markup Language, version 5) es la quinta revision importante del lenguaje basico de la World Wide Web, HTML. HTML5 especifica dos variantes de sintaxis para HTML: un clasico HTML (text/html), la variante conocida como HTML5 y una variante XHTML conocida como sintaxis XHTML5 que debera ser servida como XML (XHTML) (application/xhtml+xml).1 2 Esta es la primera vez que HTML y XHTML se han desarrollado en paralelo.", 
  "author":"Awesome Videos", "poster":"http://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Sasso_lungo_da_passo_pordoi.jpg/250px-Sasso_lungo_da_passo_pordoi.jpg", "sources":"[" + '{ "type": "video/webm", "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_720p.webm"},' + '{ "type": "video/mp4",  "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_360p.mp4" }' + "]"}, {"id":"1535", "title":"Paisaje bonito", "description":"Awesome HTML5 video example", "author":"Aldo Gordillo", 
  "poster":"http://d1p69vb2iuddhr.cloudfront.net/assets/www/demo/midnight_sun_800-e460322294501e1d5db9ab3859dd859a.jpg", "sources":"[" + '{ "type": "video/webm", "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_720p.webm"},' + '{ "type": "video/mp4",  "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_360p.mp4" }' + "]"}, {"id":"1536", "title":"Otro paisaje bonito", "description":"Awesome HTML5 video example", "author":"Aldo Gordillo", "poster":"http://1.bp.blogspot.com/-DFj9INluj80/TfiNl7q3DbI/AAAAAAAAAws/hVJu13VbKEY/s1600/paisaje.jpg", 
  "sources":"[" + '{ "type": "video/webm", "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_720p.webm"},' + '{ "type": "video/mp4",  "src": "http://media.jilion.com/videos/demo/midnight_sun_sv1_360p.mp4" }' + "]"}]};
  var videoListDummy = {"videos":[]};
  var flashList = {"flashes":[{"id":"1534", "title":"Profe", "description":"Flash Object Test", "author":"FlashMan", "content":'<embed width="100%" height="100%" id="player_api" src="/media/swf/virtualexperiment_1.swf" type="application/x-shockwave-flash" wmode="transparent"></embed>'}, {"id":"1535", "title":"Youtube video about HTML5", "description":"HTML5 (HyperText Markup Language, version 5) es la quinta revision importante del lenguaje basico de la World Wide Web, HTML.", "author":"W3C", "content":'<iframe width="560" height="315" src="http://www.youtube.com/embed/1hR7EtD6Bns?wmode=transparent" frameborder="0" allowfullscreen></iframe>'}, 
  {"id":"1536", "title":"Global excursion", "description":"Iframe example", "author":"Vish", "content":'<iframe width="100%" height="100%" src="http://www.globalexcursion-project.eu"></iframe>'}, {"id":"1537", "title":"Image", "description":"Image Embed", "author":"Globedia", "content":'<embed width="100%" src="http://globedia.com/imagenes/noticias/2011/2/10/encuentran-octava-maravilla-mundo-destruida-125-anos_2_585286.jpg"></embed>'}, {"id":"1538", "title":"Profe Demo", "description":"Flash Object Test 2", 
  "author":"FlashMan", "content":'<embed width="100%" height="100%" id="player_api" src="/media/swf/virtualexperiment_1.swf" type="application/x-shockwave-flash" wmode="transparent"></embed>'}, {"id":"1539", "title":"Profe Demo", "description":"Flash Object Test 2", "author":"FlashMan", "content":'<embed width="100%" height="100%" id="player_api" src="/media/swf/virtualexperiment_1.swf" type="application/x-shockwave-flash" wmode="transparent"></embed>'}, {"id":"1540", "title":"Profe Demo", "description":"Flash Object Test 2", 
  "author":"FlashMan", "content":'<embed width="100%" height="100%" id="player_api" src="/media/swf/virtualexperiment_1.swf" type="application/x-shockwave-flash" wmode="transparent"></embed>'}, {"id":"1541", "title":"Profe Demo", "description":"Flash Object Test 2", "author":"FlashMan", "content":'<embed width="100%" height="100%" id="player_api" src="/media/swf/virtualexperiment_1.swf" type="application/x-shockwave-flash" wmode="transparent"></embed>'}, {"id":"1542", "title":"Profe Demo", "description":"Flash Object Test 2", 
  "author":"FlashMan", "content":'<embed width="100%" height="100%" id="player_api" src="/media/swf/virtualexperiment_1.swf" type="application/x-shockwave-flash" wmode="transparent"></embed>'}, {"id":"1543", "title":"Youtube video", "description":"Flash Object Test 2", "author":"FlashMan", "content":'<iframe width="560" height="315" src="http://www.youtube.com/embed/1hR7EtD6Bns" frameborder="0" allowfullscreen></iframe>'}]};
  var flashListLittle = {"flashes":[{"id":"1534", "title":"Profe", "description":"Flash Object Test", "author":"FlashMan", "content":'<embed width="100%" height="100%" id="player_api" src="/media/swf/virtualexperiment_1.swf" type="application/x-shockwave-flash" wmode="transparent"></embed>'}, {"id":"1535", "title":"Youtube video about HTML5", "description":"HTML5 (HyperText Markup Language, version 5) es la quinta revision importante del lenguaje basico de la World Wide Web, HTML.", "author":"W3C", 
  "content":'<iframe width="560" height="315" src="http://www.youtube.com/embed/1hR7EtD6Bns?wmode=transparent" frameborder="0" allowfullscreen></iframe>'}, {"id":"1536", "title":"Global excursion", "description":"Iframe example", "author":"Vish", "content":'<iframe width="100%" height="100%" src="http://www.globalexcursion-project.eu"></iframe>'}]};
  var flashListDummy = {"flashes":[]};
  var liveList = [{"id":"1534", "title":"Do\u00f1ana Test", "description":"Parque Nacional de Do\u00f1ana (Spain) ", "author":"Demo", "fulltext":"http://www.youtube.com/watch?v=5TVrUFxzOk8"}, {"id":"1535", "title":"Do\u00f1ana Test", "description":"Parque Nacional de Do\u00f1ana (Spain) ", "author":"Demo", "fulltext":"http://www.youtube.com/watch?v=5TVrUFxzOk8"}, {"id":"1536", "title":"Do\u00f1ana Test", "description":"Parque Nacional de Do\u00f1ana (Spain) ", "author":"Demo", "fulltext":"http://www.youtube.com/watch?v=5TVrUFxzOk8"}, 
  {"id":"1537", "title":"Do\u00f1ana Test", "description":"Parque Nacional de Do\u00f1ana (Spain) ", "author":"Demo", "fulltext":"http://www.youtube.com/watch?v=5TVrUFxzOk8"}, {"id":"1538", "title":"Do\u00f1ana Test", "description":"Parque Nacional de Do\u00f1ana (Spain) ", "author":"Demo", "fulltext":"http://www.youtube.com/watch?v=5TVrUFxzOk8"}, {"id":"1539", "title":"Do\u00f1ana Test", "description":"Parque Nacional de Do\u00f1ana (Spain) ", "author":"Demo", "fulltext":"http://www.youtube.com/watch?v=5TVrUFxzOk8"}, 
  {"id":"1540", "title":"Do\u00f1ana Test", "description":"Parque Nacional de Do\u00f1ana (Spain) ", "author":"Demo", "fulltext":"http://www.youtube.com/watch?v=5TVrUFxzOk8"}, {"id":"1541", "title":"Do\u00f1ana Test", "description":"Parque Nacional de Do\u00f1ana (Spain) ", "author":"Demo", "fulltext":"http://www.youtube.com/watch?v=5TVrUFxzOk8"}, {"id":"1542", "title":"Do\u00f1ana Test", "description":"Parque Nacional de Do\u00f1ana (Spain) ", "author":"Demo", "fulltext":"http://www.youtube.com/watch?v=5TVrUFxzOk8"}, 
  {"id":"1543", "title":"Do\u00f1ana Test", "description":"Parque Nacional de Do\u00f1ana (Spain) ", "author":"Demo", "fulltext":"http://www.youtube.com/watch?v=5TVrUFxzOk8"}, {"id":"1544", "title":"Do\u00f1ana Test", "description":"Parque Nacional de Do\u00f1ana (Spain) ", "author":"Demo", "fulltext":"http://www.youtube.com/watch?v=5TVrUFxzOk8"}, {"id":"1545", "title":"Do\u00f1ana Test", "description":"Parque Nacional de Do\u00f1ana (Spain) ", "author":"Demo", "fulltext":"http://www.youtube.com/watch?v=5TVrUFxzOk8"}, 
  {"id":"1546", "title":"Do\u00f1ana Test", "description":"Parque Nacional de Do\u00f1ana (Spain) ", "author":"Demo", "fulltext":"http://www.youtube.com/watch?v=5TVrUFxzOk8"}, {"id":"1547", "title":"Do\u00f1ana Test", "description":"Parque Nacional de Do\u00f1ana (Spain) ", "author":"Demo", "fulltext":"http://www.youtube.com/watch?v=5TVrUFxzOk8"}, {"id":"1548", "title":"Do\u00f1ana Test", "description":"Parque Nacional de Do\u00f1ana (Spain) ", "author":"Demo", "fulltext":"http://www.youtube.com/watch?v=5TVrUFxzOk8"}];
  var liveListLittle = [{"id":"1534", "title":"Do\u00f1ana Test", "description":"Parque Nacional de Do\u00f1ana (Spain) ", "author":"Demo", "fulltext":"http://www.youtube.com/watch?v=5TVrUFxzOk8"}, {"id":"1535", "title":"Do\u00f1ana Test", "description":"Parque Nacional de Do\u00f1ana (Spain) ", "author":"Demo", "fulltext":"http://www.youtube.com/watch?v=5TVrUFxzOk8"}, {"id":"1548", "title":"Do\u00f1ana Test", "description":"Parque Nacional de Do\u00f1ana (Spain) ", "author":"Demo", "fulltext":"http://www.youtube.com/watch?v=5TVrUFxzOk8"}];
  var liveListDummy = [];
  var tagsList = {"tags":["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"]};
  return{imageList:imageList, imageListLittle:imageListLittle, imageListDummy:imageListDummy, videoList:videoList, videoListLittle:videoListLittle, videoListDummy:videoListDummy, flashList:flashList, flashListLittle:flashListLittle, flashListDummy:flashListDummy, liveList:liveList, liveListLittle:liveListLittle, liveListDummy:liveListDummy, tagsList:tagsList}
}(VISH);
VISH.AppletPlayer = function() {
  var loadApplet = function(element) {
    $.each(element.children(".appletelement"), function(index, value) {
      var toAppend = "<applet code='" + $(value).attr("code") + "' width='" + $(value).attr("width") + "' height='" + $(value).attr("height") + "' archive='" + $(value).attr("archive") + "'>" + $(value).attr("params") + "</applet>";
      $(value).html(toAppend)
    })
  };
  var unloadApplet = function(element) {
    $(".appletelement applet").remove()
  };
  return{loadApplet:loadApplet, unloadApplet:unloadApplet}
}(VISH, jQuery);
var configuration = {};
configuration["presentationSettings"] = false;
configuration["presentationTags"] = true;
configuration["presentationThumbnails"] = true;
configuration["Vish"] = true;
configuration["VishLives"] = true;
configuration["VishUpload"] = true;
configuration["VishRepo"] = true;
configuration["Flickr"] = true;
configuration["Youtube"] = true;
configuration["Vimeo"] = true;
configuration["VishIntegration"] = true;
VISH.Configuration = function(V, $, undefined) {
  var configuration;
  var init = function(myConfiguration) {
    configuration = myConfiguration
  };
  var applyConfiguration = function() {
    if(configuration["presentationSettings"]) {
      if(!configuration["presentationTags"]) {
        $(".tagBoxUpload").css("display", "none");
        $(".tagBoxIntro").css("display", "none")
      }
      if(!configuration["presentationThumbnails"]) {
        $("#thumbnails_in_excursion_details").css("display", "none")
      }
    }
    if(!configuration["Vish"]) {
      $("#tab_pic_upload").css("display", "none");
      $("#tab_pic_repo").css("display", "none");
      $("#tab_object_upload").css("display", "none");
      $("#tab_object_repo").css("display", "none");
      $("#tab_video_repo").css("display", "none");
      $(".addLive").css("display", "none")
    }else {
      if(!configuration["VishLives"]) {
        $(".addLive").css("display", "none")
      }
      if(!configuration["VishUpload"]) {
        $("#tab_pic_upload").css("display", "none");
        $("#tab_object_upload").css("display", "none")
      }
      if(!configuration["VishRepo"]) {
        $("#tab_pic_repo").css("display", "none");
        $("#tab_object_repo").css("display", "none");
        $("#tab_video_repo").css("display", "none")
      }
    }
    if(!configuration["Youtube"]) {
      $("#tab_video_youtube").css("display", "none")
    }
    if(!configuration["Vimeo"]) {
      $("#tab_video_vimeo").css("display", "none")
    }
    if(!configuration["Flickr"]) {
      $("#tab_pic_flikr").css("display", "none")
    }
  };
  var getConfiguration = function() {
    return configuration
  };
  return{init:init, applyConfiguration:applyConfiguration, getConfiguration:getConfiguration}
}(VISH, jQuery);
VISH.Debugging = function(V, $, undefined) {
  var actionSave = "view";
  var actionInit = "nothing";
  var excursionSamples = VISH.Samples.samples_aldo;
  var developping = false;
  var init = function(bol) {
    developping = bol
  };
  var log = function(text) {
    if(window.console && window.console.log && developping) {
      console.log(text)
    }
  };
  var shuffleJson = function(json) {
    return _shuffle(json)
  };
  var _shuffle = function(o) {
    for(var j, x, i = o.length;i;j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) {
    }
    return o
  };
  var enableDevelopingMode = function() {
    developping = true
  };
  var disableDevelopingMode = function() {
    developping = false
  };
  var isDevelopping = function() {
    return developping
  };
  var getActionSave = function() {
    return actionSave
  };
  var getActionInit = function() {
    return actionInit
  };
  var getExcursionSamples = function() {
    return excursionSamples
  };
  return{init:init, log:log, shuffleJson:shuffleJson, enableDevelopingMode:enableDevelopingMode, disableDevelopingMode:disableDevelopingMode, isDevelopping:isDevelopping, getActionSave:getActionSave, getActionInit:getActionInit, getExcursionSamples:getExcursionSamples}
}(VISH, jQuery);
VISH.Dummies = function(VISH, undefined) {
  var nextDivId = 1;
  var nextArticleId = 1;
  var dummies = ["<article id='article_id_to_change' template='t1'><div class='delete_slide'></div><img class='help_in_template' id='help_template_image' src='" + VISH.ImagesPath + "helptutorial_circle_blank.png'/><div id='div_id_to_change' areaid='left' class='t1_left editable grey_background selectable'></div><div id='div_id_to_change' areaid='header' class='t1_header editable grey_background selectable'></div><div id='div_id_to_change' areaid='subheader' class='t1_subheader editable grey_background selectable'></div></article>", 
  "<article id='article_id_to_change' template='t2'><div class='delete_slide'></div><img class='help_in_template' id='help_template_image' src='" + VISH.ImagesPath + "helptutorial_circle_blank.png'/><div id='div_id_to_change' areaid='left' class='t2_left editable grey_background selectable'></div></article>", "<article id='article_id_to_change' template='t3'><div class='delete_slide'></div><img class='help_in_template' id='help_template_image' src='" + VISH.ImagesPath + "helptutorial_circle_blank.png'/><div id='div_id_to_change' areaid='header' class='t3_header editable grey_background selectable'></div><div id='div_id_to_change' areaid='left' class='t3_left editable grey_background selectable'></div></article>", 
  "<article id='article_id_to_change' template='t4'><div class='delete_slide'></div><img class='help_in_template' id='help_template_image' src='" + VISH.ImagesPath + "helptutorial_circle_blank.png'/><div id='div_id_to_change' areaid='header' class='t4_header editable grey_background selectable'></div><div id='div_id_to_change' areaid='left' class='t4_left editable grey_background selectable'></div><div id='div_id_to_change' areaid='right' class='t4_right editable grey_background selectable'></div></article>", 
  "<article id='article_id_to_change' template='t5'><div class='delete_slide'></div><img class='help_in_template' id='help_template_image' src='" + VISH.ImagesPath + "helptutorial_circle_blank.png'/><div id='div_id_to_change' areaid='header' class='t5_header editable grey_background selectable'></div><div id='div_id_to_change' areaid='left' class='t5_left editable grey_background selectable'></div><div id='div_id_to_change' areaid='right' class='t5_right editable grey_background selectable'></div></article>", 
  "<article id='article_id_to_change' template='t6'><div class='delete_slide'></div><img class='help_in_template' id='help_template_image' src='" + VISH.ImagesPath + "helptutorial_circle_blank.png'/><div id='div_id_to_change' areaid='header' class='t6_header editable grey_background selectable'></div><div id='div_id_to_change' areaid='left' class='t6_left editable grey_background selectable'></div><div id='div_id_to_change' areaid='center' class='t6_center editable grey_background selectable'></div><div id='div_id_to_change' areaid='right' class='t6_right editable grey_background selectable'></div></article>", 
  "<article id='article_id_to_change' template='t7'><div class='delete_slide'></div><img class='help_in_template' id='help_template_image' src='" + VISH.ImagesPath + "helptutorial_circle_blank.png'/><div id='div_id_to_change' areaid='header' class='t7_header editable grey_background selectable'></div><div id='div_id_to_change' areaid='left' class='t7_left editable grey_background selectable'></div><div id='div_id_to_change' areaid='center' class='t7_center editable grey_background selectable'></div><div id='div_id_to_change' areaid='subheader' class='t7_subheader editable grey_background selectable'></div></article>", 
  "<article id='article_id_to_change' template='t8'><div class='delete_slide'></div><img class='help_in_template' id='help_template_image' src='" + VISH.ImagesPath + "helptutorial_circle_blank.png'/><div id='div_id_to_change' areaid='header' class='t8_header editable grey_background selectable'></div><div id='div_id_to_change' areaid='left' class='t8_left editable grey_background selectable'></div><div id='div_id_to_change' areaid='center' class='t8_center editable grey_background selectable'></div><div id='div_id_to_change' areaid='right' class='t8_right editable grey_background selectable'></div></article>", 
  "<article id='article_id_to_change' template='t9'><div class='delete_slide'></div><img class='help_in_template' id='help_template_image' src='" + VISH.ImagesPath + "helptutorial_circle_blank.png'/><div id='div_id_to_change' areaid='header' class='t9_header editable grey_background selectable'></div><div id='div_id_to_change' areaid='left' class='t9_left editable grey_background selectable'></div><div id='div_id_to_change' areaid='center' class='t9_center editable grey_background selectable'></div><div id='div_id_to_change' areaid='right' class='t9_right editable grey_background selectable'></div></article>"];
  var getDummy = function(template, article_id) {
    var dum = dummies[parseInt(template, 10) - 1];
    return _replaceIds(dum, article_id)
  };
  var _replaceIds = function(string, article_id) {
    var newString = string;
    while(newString.indexOf("div_id_to_change") != -1) {
      newString = newString.replace("div_id_to_change", "zone" + nextDivId);
      nextDivId++
    }
    while(newString.indexOf("article_id_to_change") != -1) {
      if(article_id) {
        newString = newString.replace("article_id_to_change", "article" + article_id)
      }else {
        newString = newString.replace("article_id_to_change", "article" + nextArticleId);
        nextArticleId++
      }
    }
    if(article_id) {
      newString = newString.replace(/editable /g, "")
    }
    return newString
  };
  return{getDummy:getDummy}
}(VISH);
VISH.Editor.API = function(V, $, undefined) {
  var init = function() {
  };
  var requestVideos = function(text, successCallback, failCallback) {
    if(VISH.Debugging.isDevelopping()) {
      if(typeof successCallback == "function") {
        var result = jQuery.extend({}, VISH.Samples.API.videoList);
        switch(text) {
          case "dummy":
            result["videos"] = VISH.Samples.API.videoListDummy["videos"];
            break;
          case "little":
            result["videos"] = VISH.Debugging.shuffleJson(VISH.Samples.API.videoListLittle["videos"]);
            break;
          default:
            result["videos"] = VISH.Debugging.shuffleJson(VISH.Samples.API.videoList["videos"])
        }
        successCallback(result)
      }
      return
    }
    _requestByType("video", text, successCallback, failCallback)
  };
  var requestRecomendedVideos = function(successCallback, failCallback) {
    if(VISH.Debugging.isDevelopping()) {
      if(typeof successCallback == "function") {
        var result = VISH.Samples.API.videoList;
        result["videos"] = VISH.Debugging.shuffleJson(VISH.Samples.API.videoList["videos"]);
        successCallback(result)
      }
      return
    }
    _requestByType("video", "", successCallback, failCallback)
  };
  var requestFlashes = function(text, successCallback, failCallback) {
    if(VISH.Debugging.isDevelopping()) {
      if(typeof successCallback == "function") {
        var result = jQuery.extend({}, VISH.Samples.API.flashList);
        switch(text) {
          case "dummy":
            result["flashes"] = VISH.Samples.API.flashListDummy["flashes"];
            break;
          case "little":
            result["flashes"] = VISH.Debugging.shuffleJson(VISH.Samples.API.flashListLittle["flashes"]);
            break;
          default:
            result["flashes"] = VISH.Debugging.shuffleJson(VISH.Samples.API.flashList["flashes"])
        }
        successCallback(result)
      }
      return
    }
    _requestByType("swfs", text, successCallback, failCallback)
  };
  var requestRecomendedFlashes = function(successCallback, failCallback) {
    if(VISH.Debugging.isDevelopping()) {
      if(typeof successCallback == "function") {
        var result = VISH.Samples.API.flashList;
        result["flashes"] = VISH.Debugging.shuffleJson(VISH.Samples.API.flashList["flashes"]);
        successCallback(result)
      }
      return
    }else {
      _requestByType("swfs", "", successCallback, failCallback)
    }
  };
  var requestImages = function(text, successCallback, failCallback) {
    if(VISH.Debugging.isDevelopping()) {
      if(typeof successCallback == "function") {
        var result = jQuery.extend({}, VISH.Samples.API.imageList);
        switch(text) {
          case "dummy":
            result["pictures"] = VISH.Samples.API.imageListDummy["pictures"];
            break;
          case "little":
            result["pictures"] = VISH.Debugging.shuffleJson(VISH.Samples.API.imageListLittle["pictures"]);
            break;
          default:
            result["pictures"] = VISH.Debugging.shuffleJson(VISH.Samples.API.imageList["pictures"])
        }
        successCallback(result)
      }
      return
    }
    _requestByType("picture", text, successCallback, failCallback)
  };
  var requestRecomendedImages = function(successCallback, failCallback) {
    if(VISH.Debugging.isDevelopping()) {
      if(typeof successCallback == "function") {
        var result = VISH.Samples.API.imageList;
        result["pictures"] = VISH.Debugging.shuffleJson(VISH.Samples.API.imageList["pictures"]);
        successCallback(result)
      }
      return
    }else {
      _requestByType("picture", "", successCallback, failCallback)
    }
  };
  var requestLives = function(text, successCallback, failCallback) {
    if(VISH.Debugging.isDevelopping()) {
      if(typeof successCallback == "function") {
        var result = jQuery.extend({}, VISH.Samples.API.liveList);
        switch(text) {
          case "dummy":
            result = VISH.Samples.API.liveListDummy;
            break;
          case "little":
            result = VISH.Debugging.shuffleJson(VISH.Samples.API.liveListLittle);
            break;
          default:
            result = VISH.Samples.API.liveList
        }
        successCallback(result)
      }
      return
    }
    _requestByType("live", text, successCallback, failCallback)
  };
  var requestRecomendedLives = function(successCallback, failCallback) {
    if(VISH.Debugging.isDevelopping()) {
      if(typeof successCallback == "function") {
        var result = VISH.Samples.API.liveList;
        successCallback(result)
      }
      return
    }
    _requestByType("live", "", successCallback, failCallback)
  };
  var _requestByType = function(type, query, successCallback, failCallback) {
    if(type == "live") {
      _requestLiveType(query, successCallback, failCallback);
      return
    }
    $.ajax({type:"GET", url:"/search.json?type=" + type + "&q=" + query, dataType:"html", success:function(response) {
      if(typeof successCallback == "function") {
        var resp = JSON.parse(response);
        successCallback(resp)
      }
    }, error:function(xhr, ajaxOptions, thrownError) {
      if(typeof failCallback == "function") {
        failCallback()
      }
    }})
  };
  var _requestLiveType = function(query, successCallback, failCallback) {
    $.ajax({type:"GET", url:"/resources/search.json?live=1&q=" + query, dataType:"html", success:function(response) {
      if(typeof successCallback == "function") {
        var resp = JSON.parse(response);
        successCallback(resp)
      }
    }, error:function(xhr, ajaxOptions, thrownError) {
      if(typeof failCallback == "function") {
        failCallback()
      }
    }})
  };
  var tags;
  var requestTags = function(successCallback, failCallback) {
    if(tags && typeof successCallback == "function") {
      successCallback(tags);
      return
    }
    if(VISH.Debugging.isDevelopping()) {
      if(typeof successCallback == "function") {
        tags = VISH.Samples.API.tagsList["tags"];
        successCallback(VISH.Samples.API.tagsList["tags"])
      }
      return
    }
    $.ajax({type:"GET", url:"/tags.json?mode=popular&limit=100", dataType:"html", success:function(response) {
      if(typeof successCallback == "function") {
        var tagsJSON = JSON.parse(response);
        if(tagsJSON.length > 0) {
          tags = [];
          $.each(tagsJSON, function(index, tagJSON) {
            tags.push(tagJSON.value)
          });
          successCallback(tags)
        }
      }
    }, error:function(xhr, ajaxOptions, thrownError) {
      if(typeof failCallback == "function") {
        failCallback()
      }
    }})
  };
  var requestThumbnails = function(successCallback, failCallback) {
    $.ajax({async:false, type:"GET", url:"/excursion_thumbnails.json", dataType:"json", success:function(data) {
      if(typeof successCallback == "function") {
        successCallback(data)
      }
    }, error:function(xhr, ajaxOptions, thrownError) {
      if(typeof failCallback == "function") {
        failCallback(xhr, ajaxOptions, thrownError)
      }
    }})
  };
  return{init:init, requestVideos:requestVideos, requestRecomendedVideos:requestRecomendedVideos, requestImages:requestImages, requestRecomendedImages:requestRecomendedImages, requestFlashes:requestFlashes, requestRecomendedFlashes:requestRecomendedFlashes, requestLives:requestLives, requestRecomendedLives:requestRecomendedLives, requestTags:requestTags, requestThumbnails:requestThumbnails}
}(VISH, jQuery);
VISH.Editor.AvatarPicker = function(V, $, undefined) {
  var avatars = null;
  var init = function() {
  };
  var onLoadExcursionDetails = function() {
    $("#thumbnails_in_excursion_details").hide();
    VISH.Editor.API.requestThumbnails(_onThumbnailsReceived, _onThumbnailsError)
  };
  var _selectAvatar = function(event) {
    $(".carrousel_element_single_row_thumbnails").removeClass("selectedThumbnail");
    $(event.target).addClass("selectedThumbnail");
    $("#excursion_avatar").val($(event.target).attr("src"))
  };
  var selectRandom = function(max) {
    var randomnumber = Math.ceil(Math.random() * max);
    $("#avatars_carrousel .carrousel_element_single_row_thumbnails:nth-child(" + randomnumber + ") img").addClass("selectedThumbnail");
    $("#excursion_avatar").val($("#avatars_carrousel .carrousel_element_single_row_thumbnails:nth-child(" + randomnumber + ") img").attr("src"))
  };
  var _onThumbnailsReceived = function(data) {
    avatars = data;
    VISH.Editor.Carrousel.cleanCarrousel("avatars_carrousel");
    var content = "";
    var carrouselImages = [];
    $.each(avatars.pictures, function(i, item) {
      var myImg = $("<img src=" + item.src + " />");
      carrouselImages.push(myImg)
    });
    VISH.Utils.loader.loadImagesOnCarrousel(carrouselImages, _onImagesLoaded, "avatars_carrousel")
  };
  var _onThumbnailsError = function(xhr, ajaxOptions, thrownError) {
    VISH.Debugging.log("_onThumbnailsError");
    VISH.Debugging.log("status returned by server:" + xhr.status);
    VISH.Debugging.log("Error in client: " + thrownError);
    VISH.Debugging.log("ERROR!" + thrownError)
  };
  var _onImagesLoaded = function() {
    $("#thumbnails_in_excursion_details").show();
    var options = new Array;
    options["rows"] = 1;
    options["callback"] = _selectAvatar;
    options["rowItems"] = 5;
    options["styleClass"] = "thumbnails";
    VISH.Editor.Carrousel.createCarrousel("avatars_carrousel", options);
    $(".buttonintro").addClass("buttonintro_extramargin");
    VISH.Editor.AvatarPicker.selectRandom(5)
  };
  return{init:init, selectRandom:selectRandom, onLoadExcursionDetails:onLoadExcursionDetails}
}(VISH, jQuery);
VISH.Editor.Carrousel = function(V, $, undefined) {
  var createCarrousel = function(containerId, options) {
    if(!containerId) {
      return
    }
    var rows = 1;
    var rowItems = 5;
    var scrollItems = null;
    var styleClass = "";
    var titleClass = "";
    var callback = null;
    var width = 750;
    var startAtLastElement = false;
    var pagination = true;
    if(options) {
      if(options["rows"]) {
        rows = options["rows"]
      }
      if(options["rowItems"]) {
        rowItems = options["rowItems"]
      }
      if(options["scrollItems"]) {
        scrollItems = options["scrollItems"]
      }
      if(options["styleClass"]) {
        styleClass = options["styleClass"]
      }
      if(options["titleClass"]) {
        titleClass = options["titleClass"]
      }
      if(options["callback"]) {
        callback = options["callback"]
      }
      if(options["width"]) {
        width = options["width"]
      }
      if(options["startAtLastElement"]) {
        startAtLastElement = options["startAtLastElement"]
      }
      if(typeof options["pagination"] == "boolean") {
        pagination = options["pagination"]
      }
    }
    var multipleRow = rows > 1;
    var carrouselClass = "";
    if(styleClass) {
      carrouselClass = "_" + styleClass
    }
    if(!scrollItems) {
      scrollItems = rowItems
    }
    if(multipleRow) {
      var rowClass = "multiple_row" + carrouselClass
    }else {
      var rowClass = "single_row" + carrouselClass
    }
    var wrapperDiv = $("#" + containerId);
    wrapperDiv.attr("class", "image_carousel image_carousel_" + rowClass);
    wrapperDiv.removeAttr("id");
    var mainDiv = document.createElement("div");
    $(mainDiv).html($(wrapperDiv).html());
    $(wrapperDiv).html("");
    mainDiv.setAttribute("id", containerId);
    var clearFix = document.createElement("div");
    clearFix.setAttribute("class", "clearfix");
    var button_prev = document.createElement("a");
    var button_next = document.createElement("a");
    button_prev.setAttribute("class", "prev");
    button_next.setAttribute("class", "next");
    $(button_prev).addClass("prev_" + rowClass);
    $(button_next).addClass("next_" + rowClass);
    button_prev.setAttribute("href", "#");
    button_next.setAttribute("href", "#");
    button_prev.setAttribute("id", "carrousel_prev" + containerId);
    button_next.setAttribute("id", "carrousel_next" + containerId);
    $(button_prev).html("<span>prev</span>");
    $(button_next).html("<span>next</span>");
    $(wrapperDiv).append(clearFix);
    $(wrapperDiv).append(button_prev);
    $(wrapperDiv).append(button_next);
    if(pagination) {
      var paginationDiv = document.createElement("div");
      paginationDiv.setAttribute("class", "pagination pagination_" + rowClass);
      paginationDiv.setAttribute("id", "carrousel_pag" + containerId);
      $(wrapperDiv).append(paginationDiv)
    }
    $(mainDiv).children().addClass("carrousel_element_" + rowClass);
    $(mainDiv).children().each(function(index, value) {
      $(value).children().addClass("carrousel_element_" + rowClass)
    });
    if(callback && typeof callback == "function") {
      $(mainDiv).children().click(function(event) {
        callback(event)
      })
    }
    if(multipleRow) {
      _applyMultipleRows(containerId, wrapperDiv, mainDiv, rows, rowItems, scrollItems, rowClass, width)
    }else {
      $(wrapperDiv).prepend(mainDiv);
      if(startAtLastElement) {
        var start = $(mainDiv).children().length - rowItems + 1
      }else {
        var start = 0
      }
      _setMainCarrousel(containerId, containerId, rows, [], rowItems, scrollItems, width, start)
    }
    if(pagination) {
      _forceShowPagination(containerId)
    }
    return"Done"
  };
  var _applyMultipleRows = function(containerId, wrapperDiv, mainDiv, rows, rowItems, scrollItems, rowClass, width) {
    var synchronizeIds = [];
    var i;
    for(i = 0;i < rows;i++) {
      window[mainDiv.id + "_row" + i] = document.createElement("div");
      window[mainDiv.id + "_row" + i].setAttribute("id", mainDiv.id + "_row" + i);
      window[mainDiv.id + "_row" + i].setAttribute("class", "carrousel_wrapper_" + rowClass);
      if(i != 0) {
        synchronizeIds.push(mainDiv.id + "_row" + i)
      }
    }
    $(mainDiv).children().each(function(index, value) {
      $(window[mainDiv.id + "_row" + index % rows]).append(value)
    });
    for(i = rows - 1;i >= 0;i--) {
      $(wrapperDiv).prepend(window[mainDiv.id + "_row" + i]);
      if(i == 0) {
        var newContainerId = mainDiv.id + "_row" + i;
        _setMainCarrousel(newContainerId, containerId, rows, synchronizeIds, rowItems, scrollItems, width)
      }else {
        _setRowCarrousel(mainDiv.id + "_row" + i, rowItems, scrollItems, width)
      }
    }
    $(".caroufredsel_wrapper").css("margin-bottom", "30px")
  };
  var _setRowCarrousel = function(id, rowItems, scrollItems, width) {
    $("#" + id).carouFredSel({auto:false, circular:false, infinite:false, width:width, scroll:{items:scrollItems, fx:"scroll", duration:1E3, pauseDuration:2E3}, items:{visible:{min:rowItems, max:rowItems}}})
  };
  var _setMainCarrousel = function(id, widgetsId, rows, synchronizeIds, rowItems, scrollItems, width, start) {
    if(!start) {
      start = 0
    }
    $("#" + id).carouFredSel({circular:false, infinite:false, auto:false, width:width, scroll:{items:scrollItems, duration:1E3, pauseDuration:2E3}, items:{visible:{min:rowItems, max:rowItems}, start:start}, prev:{button:"#carrousel_prev" + widgetsId, key:"left"}, next:{button:"#carrousel_next" + widgetsId, key:"right"}, pagination:"#carrousel_pag" + widgetsId});
    if(synchronizeIds) {
      $(synchronizeIds).each(function(index, value) {
        $("#" + id).trigger("configuration", ["synchronise", "#" + value])
      })
    }
    $("#" + id).attr("rows", rows)
  };
  var cleanCarrousel = function(containerId) {
    $("#" + containerId).html("");
    var containderIdForMultiRow = containerId + "_row0";
    if($("#" + containderIdForMultiRow).attr("rows")) {
      var rows = $("#" + containderIdForMultiRow).attr("rows");
      var i;
      for(i = 0;i < rows;i++) {
        _cleanOneRowCarrousel(containerId + "_row" + i)
      }
      $("#" + containderIdForMultiRow).attr("id", containerId)
    }else {
      _cleanOneRowCarrousel(containerId)
    }
  };
  var _cleanOneRowCarrousel = function(containerId) {
    var carrouselWrapper = $("#" + containerId).parent().parent();
    if($(carrouselWrapper).hasClass("image_carousel")) {
      $(carrouselWrapper).removeClass();
      $(carrouselWrapper).html("");
      $(carrouselWrapper).attr("id", containerId)
    }else {
    }
  };
  var _forceShowPagination = function(containerId) {
    var parent = $("#" + containerId).parent().parent();
    if($(parent).hasClass("image_carousel")) {
      $(parent).find(".pagination").attr("style", "")
    }
  };
  return{createCarrousel:createCarrousel, cleanCarrousel:cleanCarrousel}
}(VISH, jQuery);
VISH.Editor.I18n = function(V, $, undefined) {
  var language;
  var init = function(lang) {
    var initTime = (new Date).getTime();
    language = lang;
    if(typeof i18n[language] === "undefined") {
      return
    }
    _filterAndSubText("div");
    _filterAndSubText("a");
    _filterAndSubText("span");
    _filterAndSubText("p");
    _filterAndSubText("button");
    _filterAndSubText("h2");
    _filterAndSubText("h1");
    $("[data-text]").each(function(index, elem) {
      $(elem).attr("data-text", _getTrans($(elem).attr("data-text")))
    });
    _elementsWithKey();
    $("div[title]").each(function(index, elem) {
      $(elem).attr("title", _getTrans($(elem).attr("title")))
    });
    $("input").each(function(index, elem) {
      if($(elem).val() !== "") {
        $(elem).val(_getTrans($(elem).val()))
      }
      if($(elem).attr("placeholder")) {
        $(elem).attr("placeholder", _getTrans($(elem).attr("placeholder")))
      }
    });
    $("textarea[placeholder]").each(function(index, elem) {
      $(elem).attr("placeholder", _getTrans($(elem).attr("placeholder")))
    });
    if(typeof i18n[language] != "undefined") {
      var factor;
      if(language === "es") {
        factor = 2
      }
      var normal_pos = 360;
      var hover_pos = 480;
      $("#start_tutorial").css("background-position", "0px -" + normal_pos + "px");
      $("#start_tutorial").hover(function() {
        $("#start_tutorial").css("background-position", "0px -" + hover_pos + "px")
      }, function() {
        $("#start_tutorial").css("background-position", "0px -" + normal_pos + "px")
      });
      $("#contentusetut").attr("src", "images/contentuse_" + language + ".png")
    }
    var duration = (new Date).getTime() - initTime;
    VISH.Debugging.log("Internationalization took " + duration + " ms.")
  };
  var _filterAndSubText = function(elemType) {
    $(elemType).filter(function(index) {
      return $(this).children().length < 1 && $(this).attr("i18n-key") === undefined && $(this).text().trim() !== ""
    }).each(function(index, elem) {
      $(elem).text(_getTrans($(elem).text()))
    })
  };
  var _elementsWithKey = function() {
    $("[i18n-key]").each(function(index, elem) {
      $(elem).text(_getTrans($(elem).attr("i18n-key")))
    })
  };
  var _getTrans = function(s) {
    if(typeof i18n[language] != "undefined" && i18n[language][s]) {
      return i18n[language][s]
    }
    VISH.Debugging.log("Text without translation: " + s);
    return s
  };
  return{init:init}
}(VISH, jQuery);
VISH.Editor.Image.Flikr = function(V, $, undefined) {
  var carrouselDivId = "tab_flikr_content_carrousel";
  var queryMaxNumberFlikrImages = 80;
  var init = function() {
    var myInput = $("#tab_pic_flikr_content").find("input[type='search']");
    $(myInput).watermark("Search content");
    $(myInput).keydown(function(event) {
      if(event.keyCode == 13) {
        VISH.Editor.Image.Flikr.listImages($(myInput).val());
        $(myInput).blur()
      }
    })
  };
  var onLoadTab = function() {
    VISH.Editor.Carrousel.cleanCarrousel(carrouselDivId);
    $("#" + carrouselDivId).hide();
    $("#tab_pic_flikr_content").find("input[type='search']").attr("value", "")
  };
  var listImages = function(text) {
    VISH.Editor.Carrousel.cleanCarrousel(carrouselDivId);
    $("#" + carrouselDivId).hide();
    var template = VISH.Editor.getParams()["current_el"].parent().attr("template");
    var url_flikr = "http://api.flickr.com/services/feeds/photos_public.gne?tags=" + text + "&tagmode=any&format=json&jsoncallback=?";
    var carrouselImages = [];
    $.getJSON(url_flikr, function(data) {
      if(!data.items.length > 0) {
        $("#" + carrouselDivId).show();
        $("#" + carrouselDivId).html("<p class='carrouselNoResults'> No results found </p>");
        return
      }
      $.each(data.items, function(i, item) {
        var myImg = $("<img id=img_flkr" + i + " src=" + item.media.m + " imageFlikrId=" + i + "/>");
        carrouselImages.push(myImg)
      });
      VISH.Utils.loader.loadImagesOnCarrousel(carrouselImages, _onImagesLoaded, carrouselDivId)
    })
  };
  var addImage = function(event) {
    var image_url = $(event.target).attr("src");
    V.Editor.Image.drawImage(image_url);
    $.fancybox.close()
  };
  var _onImagesLoaded = function() {
    $("#" + carrouselDivId).show();
    var options = new Array;
    options["rows"] = 2;
    options["callback"] = VISH.Editor.Image.Flikr.addImage;
    options["rowItems"] = 4;
    options["scrollItems"] = 4;
    VISH.Editor.Carrousel.createCarrousel(carrouselDivId, options)
  };
  return{init:init, onLoadTab:onLoadTab, listImages:listImages, addImage:addImage}
}(VISH, jQuery);
VISH.Editor.Image.Repository = function(V, $, undefined) {
  var carrouselDivId = "tab_pic_repo_content_carrousel";
  var previewDivId = "tab_pic_repo_content_preview";
  var currentImages = new Array;
  var selectedImage = null;
  var init = function() {
    var myInput = $("#tab_pic_repo_content").find("input[type='search']");
    $(myInput).watermark("Search content");
    $(myInput).keydown(function(event) {
      if(event.keyCode == 13) {
        _requestData($(myInput).val());
        $(myInput).blur()
      }
    })
  };
  var onLoadTab = function() {
    var previousSearch = $("#tab_pic_repo_content").find("input[type='search']").val() != "";
    if(!previousSearch) {
      _requestInitialData()
    }
  };
  var _requestInitialData = function() {
    VISH.Editor.API.requestRecomendedImages(_onDataReceived, _onAPIError)
  };
  var _requestData = function(text) {
    VISH.Editor.API.requestImages(text, _onDataReceived, _onAPIError)
  };
  var _onDataReceived = function(data) {
    VISH.Editor.Carrousel.cleanCarrousel(carrouselDivId);
    $("#" + carrouselDivId).hide();
    currentImages = new Array;
    var carrouselImages = [];
    var content = "";
    if(!data.pictures || data.pictures.length == 0) {
      $("#" + carrouselDivId).html("<p class='carrouselNoResults'> No results found </p>");
      $("#" + carrouselDivId).show();
      return
    }
    $.each(data.pictures, function(index, image) {
      var myImg = $("<img src=" + image.src + " >");
      carrouselImages.push(myImg);
      currentImages[image.id] = image
    });
    VISH.Utils.loader.loadImagesOnCarrousel(carrouselImages, _onImagesLoaded, carrouselDivId)
  };
  var _onImagesLoaded = function() {
    $("#" + carrouselDivId).show();
    var options = new Array;
    options["rows"] = 2;
    options["callback"] = _onClickCarrouselElement;
    options["rowItems"] = 4;
    options["scrollItems"] = 4;
    VISH.Editor.Carrousel.createCarrousel(carrouselDivId, options)
  };
  var _onAPIError = function() {
    VISH.Debugging.log("API error")
  };
  var _onClickCarrouselElement = function(event) {
    V.Editor.Image.drawImage($(event.target).attr("src"));
    $.fancybox.close()
  };
  return{init:init, onLoadTab:onLoadTab}
}(VISH, jQuery);
VISH.Editor.Object.Flash = function(V, $, undefined) {
  var drawFlashObjectWithSource = function(src) {
    var current_area = VISH.Editor.getCurrentArea();
    var template = VISH.Editor.getTemplate();
    var nextFlashId = VISH.Editor.getId();
    var idToDrag = "draggable" + nextFlashId;
    var idToResize = "resizable" + nextFlashId;
    current_area.attr("type", "object");
    var embedDiv = document.createElement("div");
    embedDiv.setAttribute("id", idToDrag);
    $(embedDiv).addClass("object_wrapper");
    $(embedDiv).addClass(template + "_object");
    var embedTag = document.createElement("embed");
    embedTag.setAttribute("id", idToResize);
    embedTag.setAttribute("class", template + "_object");
    embedTag.setAttribute("src", src);
    embedTag.setAttribute("wmode", "transparent");
    $(embedDiv).append(embedTag);
    $(current_area).html("");
    $(current_area).append(embedDiv);
    VISH.Editor.addDeleteButton($(current_area));
    var value = 10;
    var mystep = $(current_area).width() / 10;
    $("#menubar").before("<div id='sliderId" + nextFlashId + "' class='theslider'><input id='imageSlider" + nextFlashId + "' type='slider' name='size' value='" + value + "' style='display: none; '></div>");
    $("#imageSlider" + nextFlashId).slider({from:1, to:10, step:0.2, round:1, dimension:"x", skin:"blue", onstatechange:function(value) {
      VISH.Editor.Object.resizeObject(idToResize, mystep * value)
    }});
    $("#" + idToDrag).draggable({cursor:"move"})
  };
  return{drawFlashObjectWithSource:drawFlashObjectWithSource}
}(VISH, jQuery);
VISH.Editor.Object.Live = function(V, $, undefined) {
  var carrouselDivId = "tab_live_webcam_content_carrousel";
  var previewDivId = "tab_live_webcam_content_preview";
  var footId = "tab_live_webcam_content_preview_foot";
  var currentObject = new Array;
  var selectedObject = null;
  var init = function() {
    var myInput = $("#tab_live_webcam_content").find("input[type='search']");
    $(myInput).watermark("Search content");
    $(myInput).keydown(function(event) {
      if(event.keyCode == 13) {
        _requestData($(myInput).val());
        $(myInput).blur()
      }
    })
  };
  var onLoadTab = function(tab) {
    if(tab != "webcam") {
      return
    }
    var previousSearch = $("#tab_live_webcam_content").find("input[type='search']").val() != "";
    if(!previousSearch) {
      _cleanObjectPreview();
      _requestInicialData()
    }
    $("#" + footId).find(".okButton").hide()
  };
  var _requestInicialData = function() {
    VISH.Editor.API.requestRecomendedLives(_onDataReceived, _onAPIError)
  };
  var _requestData = function(text) {
    VISH.Editor.API.requestLives(text, _onDataReceived, _onAPIError)
  };
  var _onDataReceived = function(data) {
    VISH.Editor.Carrousel.cleanCarrousel(carrouselDivId);
    $("#" + carrouselDivId).hide();
    _cleanObjectPreview();
    currentObject = new Array;
    var carrouselImages = [];
    var carrouselImagesTitles = [];
    var content = "";
    if(!data || data.length == 0) {
      $("#" + carrouselDivId).html("<p class='carrouselNoResults'> No results found </p>");
      $("#" + carrouselDivId).show();
      return
    }
    $.each(data, function(index, object) {
      var objectInfo = VISH.Editor.Object.getObjectInfo(object.fulltext);
      var imageSource = null;
      switch(objectInfo.type) {
        case "swf":
          imageSource = VISH.ImagesPath + "carrousel/swf.png";
          break;
        case "youtube":
          imageSource = VISH.ImagesPath + "carrousel/youtube.png";
          break;
        case "web":
          if(objectInfo.wrapper == "IFRAME") {
            imageSource = VISH.ImagesPath + "carrousel/iframe.png"
          }else {
            imageSource = VISH.ImagesPath + "carrousel/object.png"
          }
          break;
        default:
          imageSource = VISH.ImagesPath + "carrousel/object.png";
          break
      }
      var myImg = $("<img src='" + imageSource + "' objectId='" + object.id + "'>");
      carrouselImages.push(myImg);
      carrouselImagesTitles.push(object.title);
      currentObject[object.id] = object
    });
    VISH.Utils.loader.loadImagesOnCarrousel(carrouselImages, _onImagesLoaded, carrouselDivId, carrouselImagesTitles)
  };
  var _onImagesLoaded = function() {
    $("#" + carrouselDivId).show();
    var options = new Array;
    options["rows"] = 1;
    options["callback"] = _onClickCarrouselElement;
    options["rowItems"] = 5;
    options["styleClass"] = "title";
    VISH.Editor.Carrousel.createCarrousel(carrouselDivId, options)
  };
  var _onAPIError = function() {
    VISH.Debugging.log("Error")
  };
  var _onClickCarrouselElement = function(event) {
    var objectId = $(event.target).attr("objectid");
    var renderedObject = VISH.Editor.Object.renderObjectPreview(currentObject[objectId].fulltext);
    _renderObjectPreview(renderedObject, currentObject[objectId]);
    selectedObject = currentObject[objectId]
  };
  var _renderObjectPreview = function(renderedObject, object) {
    var objectArea = $("#" + previewDivId).find("#tab_live_webcam_content_preview_live");
    var metadataArea = $("#" + previewDivId).find("#tab_live_webcam_content_preview_metadata");
    $(objectArea).html("");
    $(metadataArea).html("");
    if(renderedObject && object) {
      $(objectArea).append(renderedObject);
      var table = VISH.Utils.generateTable(object.author, object.title, object.description);
      $(metadataArea).html(table);
      $("#" + footId).find(".okButton").show()
    }
  };
  var _cleanObjectPreview = function() {
    var objectArea = $("#" + previewDivId).find("#tab_live_webcam_content_preview_live");
    var metadataArea = $("#" + previewDivId).find("#tab_live_webcam_content_preview_metadata");
    $(objectArea).html("");
    $(metadataArea).html("");
    $("#" + footId).find(".okButton").hide()
  };
  var addSelectedObject = function() {
    if(selectedObject != null) {
      VISH.Editor.Object.drawObject(selectedObject.fulltext);
      $.fancybox.close()
    }
  };
  return{init:init, onLoadTab:onLoadTab, addSelectedObject:addSelectedObject}
}(VISH, jQuery);
VISH.Editor.Object.PDF = function(V, $, undefined) {
  var init = function() {
  };
  var generateWrapperForPdf = function(url) {
    return"<iframe src='http://docs.google.com/viewer?url=" + url + "&embedded=true'></iframe>"
  };
  var generatePreviewWrapperForPdf = function(url) {
    return"<iframe class='objectPreview' src='http://docs.google.com/viewer?url=" + url + "&embedded=true'></iframe>"
  };
  return{init:init, generatePreviewWrapperForPdf:generatePreviewWrapperForPdf, generateWrapperForPdf:generateWrapperForPdf}
}(VISH, jQuery);
VISH.Editor.Object.Repository = function(V, $, undefined) {
  var carrouselDivId = "tab_object_repo_content_carrousel";
  var previewDivId = "tab_object_repo_content_preview";
  var footId = "tab_object_repo_content_preview_foot";
  var currentObject = new Array;
  var selectedObject = null;
  var init = function() {
    var myInput = $("#tab_object_repo_content").find("input[type='search']");
    $(myInput).watermark("Search content");
    $(myInput).keydown(function(event) {
      if(event.keyCode == 13) {
        _requestData($(myInput).val());
        $(myInput).blur()
      }
    })
  };
  var onLoadTab = function() {
    var previousSearch = $("#tab_object_repo_content").find("input[type='search']").val() != "";
    if(!previousSearch) {
      _cleanObjectPreview();
      _requestInicialData()
    }
    $("#" + footId).find(".okButton").hide()
  };
  var _requestInicialData = function() {
    VISH.Editor.API.requestRecomendedFlashes(_onDataReceived, _onAPIError)
  };
  var _requestData = function(text) {
    VISH.Editor.API.requestFlashes(text, _onDataReceived, _onAPIError)
  };
  var _onDataReceived = function(data) {
    VISH.Editor.Carrousel.cleanCarrousel(carrouselDivId);
    $("#" + carrouselDivId).hide();
    _cleanObjectPreview();
    currentObject = new Array;
    var carrouselImages = [];
    var carrouselImagesTitles = [];
    var content = "";
    if(!data.flashes || data.flashes.length == 0) {
      $("#" + carrouselDivId).html("<p class='carrouselNoResults'> No results found </p>");
      $("#" + carrouselDivId).show();
      return
    }
    $.each(data.flashes, function(index, object) {
      var objectInfo = VISH.Editor.Object.getObjectInfo(object.content);
      var imageSource = null;
      switch(objectInfo.type) {
        case "swf":
          imageSource = VISH.ImagesPath + "carrousel/swf.png";
          break;
        case "youtube":
          imageSource = VISH.ImagesPath + "carrousel/youtube.png";
          break;
        case "web":
          if(objectInfo.wrapper == "IFRAME") {
            imageSource = VISH.ImagesPath + "carrousel/iframe.png"
          }else {
            imageSource = VISH.ImagesPath + "carrousel/object.png"
          }
          break;
        default:
          imageSource = VISH.ImagesPath + "carrousel/object.png";
          break
      }
      var myImg = $("<img src='" + imageSource + "' objectId='" + object.id + "'>");
      carrouselImages.push(myImg);
      carrouselImagesTitles.push(object.title);
      currentObject[object.id] = object
    });
    VISH.Utils.loader.loadImagesOnCarrousel(carrouselImages, _onImagesLoaded, carrouselDivId, carrouselImagesTitles)
  };
  var _onImagesLoaded = function() {
    $("#" + carrouselDivId).show();
    var options = new Array;
    options["rows"] = 1;
    options["callback"] = _onClickCarrouselElement;
    options["rowItems"] = 5;
    options["styleClass"] = "title";
    VISH.Editor.Carrousel.createCarrousel(carrouselDivId, options)
  };
  var _onAPIError = function() {
    VISH.Debugging.log("Error")
  };
  var _onClickCarrouselElement = function(event) {
    var objectId = $(event.target).attr("objectid");
    var renderedObject = VISH.Editor.Object.renderObjectPreview(currentObject[objectId].content);
    _renderObjectPreview(renderedObject, currentObject[objectId]);
    selectedObject = currentObject[objectId]
  };
  var _renderObjectPreview = function(renderedObject, object) {
    var objectArea = $("#" + previewDivId).find("#tab_object_repo_content_preview_object");
    var metadataArea = $("#" + previewDivId).find("#tab_object_repo_content_preview_metadata");
    $(objectArea).html("");
    $(metadataArea).html("");
    if(renderedObject && object) {
      $(objectArea).append(renderedObject);
      var table = VISH.Utils.generateTable(object.author, object.title, object.description);
      $(metadataArea).html(table);
      $("#" + footId).find(".okButton").show()
    }
  };
  var _cleanObjectPreview = function() {
    var objectArea = $("#" + previewDivId).find("#tab_object_repo_content_preview_object");
    var metadataArea = $("#" + previewDivId).find("#tab_object_repo_content_preview_metadata");
    $(objectArea).html("");
    $(metadataArea).html("");
    $("#" + footId).find(".okButton").hide()
  };
  var addSelectedObject = function() {
    if(selectedObject != null) {
      VISH.Editor.Object.drawObject($(selectedObject.content));
      $.fancybox.close()
    }
  };
  return{init:init, onLoadTab:onLoadTab, addSelectedObject:addSelectedObject}
}(VISH, jQuery);
VISH.Editor.Object.Snapshot = function(V, $, undefined) {
  var contentToAdd = null;
  var urlDivId = "tab_object_snapshot_content";
  var urlInputId = "object_snapshot_code";
  var init = function() {
    var urlInput = $(urlDivId).find("input");
    $(urlInput).watermark("Paste website URL");
    $("#" + urlDivId + " .previewButton").click(function(event) {
      if(VISH.Police.validateObject($("#" + urlInputId).val())[0]) {
        contentToAdd = VISH.Utils.autocompleteUrls($("#" + urlInputId).val());
        VISH.Editor.Object.drawPreview(urlDivId, contentToAdd)
      }
    })
  };
  var onLoadTab = function(tab) {
    contentToAdd = null;
    VISH.Editor.Object.resetPreview(urlDivId);
    $("#" + urlInputId).val("")
  };
  var drawPreviewElement = function() {
    if(_validateSnapShot(contentToAdd)) {
      drawSnapShot(_wrapperSnapShot(contentToAdd));
      $.fancybox.close()
    }
  };
  var _validateSnapShot = function(object) {
    var objectInfo = VISH.Editor.Object.getObjectInfo(object);
    switch(objectInfo.wrapper) {
      case null:
        return _validateUrl(object);
        break;
      case "IFRAME":
        return _validateUrl(objectInfo.source);
        break;
      default:
        return false;
        break
    }
  };
  var _validateUrl = function(url) {
    var http_urls_pattern = /(http(s)?:\/\/)([aA-zZ0-9%=_&+?])+([./-][aA-zZ0-9%=_&+?]+)*[/]?/g;
    if(url.match(http_urls_pattern) != null) {
      return true
    }else {
      return false
    }
  };
  var _wrapperSnapShot = function(content) {
    var objectInfo = VISH.Editor.Object.getObjectInfo(content);
    if(objectInfo.wrapper === null) {
      return"<iframe src='" + content + "'></iframe>"
    }else {
      return content
    }
  };
  var drawSnapShot = function(wrapper, area, style, scrollTop, scrollLeft) {
    var current_area;
    var object_style = "";
    if(area) {
      current_area = area
    }else {
      current_area = VISH.Editor.getCurrentArea()
    }
    if(style) {
      object_style = style
    }
    var template = V.Editor.getTemplate(current_area);
    var nextWrapperId = V.Editor.getId();
    var idToDrag = "draggable" + nextWrapperId;
    var idToResize = "resizable" + nextWrapperId;
    current_area.attr("type", "snapshot");
    var wrapperDiv = document.createElement("div");
    wrapperDiv.setAttribute("id", idToDrag);
    if(style) {
      wrapperDiv.setAttribute("style", style)
    }
    $(wrapperDiv).addClass("snapshot_wrapper");
    var iframeTag = $(wrapper);
    $(iframeTag).attr("id", idToResize);
    $(iframeTag).attr("class", "snapshot_content");
    $(iframeTag).attr("scrolling", "no");
    $(iframeTag).attr("wmode", "transparent");
    $(iframeTag).css("pointer-events", "none");
    $(current_area).html("");
    $(current_area).append(wrapperDiv);
    VISH.Editor.addDeleteButton($(current_area));
    $(wrapperDiv).append(iframeTag);
    if(scrollTop) {
      $("#" + idToDrag).scrollTop(scrollTop)
    }
    if(scrollLeft) {
      $("#" + idToDrag).scrollLeft(scrollLeft)
    }
    var width, value;
    if(style) {
      width = V.SlidesUtilities.getWidthFromStyle(style, current_area);
      value = 10 * width / $(current_area).width()
    }else {
      value = 10
    }
    var mystep = $(current_area).width() / 10;
    $("#menubar").before("<div id='sliderId" + nextWrapperId + "' class='theslider'><input id='imageSlider" + nextWrapperId + "' type='slider' name='size' value='" + value + "' style='display: none; '></div>");
    $("#imageSlider" + nextWrapperId).slider({from:1, to:10, step:0.2, round:1, dimension:"x", skin:"blue", onstatechange:function(value) {
      _resizeWebIframe(idToDrag, mystep * value)
    }});
    $("#" + idToDrag).bind("mousedown", function(event) {
      event.preventDefault()
    });
    $("#" + idToDrag).draggable({cursor:"move", disabled:false, start:function(event, ui) {
      if(!_isBorderClick(event, idToDrag)) {
        return false
      }
    }})
  };
  var _isBorderClick = function(event, idToDrag) {
    var accuracy = 6;
    var scrollAccuracy = -10;
    var width = $("#" + idToDrag).width();
    var height = $("#" + idToDrag).height();
    var offset = $("#" + idToDrag).offset();
    var dif1 = event.pageX - offset.left;
    if(dif1 < accuracy) {
      return true
    }
    var dif2 = event.pageY - offset.top;
    if(dif2 < accuracy) {
      return true
    }
    var dif3 = offset.left + width - event.pageX;
    if(dif3 < scrollAccuracy) {
      return true
    }
    var dif4 = offset.top + height - event.pageY;
    if(dif4 < scrollAccuracy) {
      return true
    }
    return false
  };
  var _resizeWebIframe = function(id, width) {
    var proportion = $("#" + id).height() / $("#" + id).width();
    $("#" + id).width(width);
    $("#" + id).height(width * proportion)
  };
  return{init:init, onLoadTab:onLoadTab, drawPreviewElement:drawPreviewElement, drawSnapShot:drawSnapShot}
}(VISH, jQuery);
VISH.Editor.Object.Web = function(V, $, undefined) {
  var contentToAdd = null;
  var urlDivId = "tab_object_from_web_content";
  var urlInputId = "object_embedWeb_code";
  var init = function() {
    var urlInput = $(urlDivId).find("input");
    $(urlInput).watermark("Paste website URL");
    $("#" + urlDivId + " .previewButton").click(function(event) {
      if(VISH.Police.validateObject($("#" + urlInputId).val())[0]) {
        contentToAdd = VISH.Utils.autocompleteUrls($("#" + urlInputId).val());
        VISH.Editor.Object.drawPreview(urlDivId, contentToAdd)
      }
    })
  };
  var onLoadTab = function(tab) {
    contentToAdd = null;
    VISH.Editor.Object.resetPreview(urlDivId);
    $("#" + urlInputId).val("")
  };
  var drawPreviewElement = function() {
    VISH.Editor.Object.drawPreviewObject(contentToAdd)
  };
  var generateWrapperForWeb = function(url) {
    return"<iframe src='" + url + "'></iframe>"
  };
  var generatePreviewWrapperForWeb = function(url) {
    return"<iframe class='objectPreview' src='" + url + "'></iframe>"
  };
  return{init:init, onLoadTab:onLoadTab, drawPreviewElement:drawPreviewElement, generatePreviewWrapperForWeb:generatePreviewWrapperForWeb, generateWrapperForWeb:generateWrapperForWeb}
}(VISH, jQuery);
VISH.Editor.Quiz = function(V, $, undefined) {
  var buttonAddOptionId = "a_add_quiz_option";
  var MultipleChoiceOptionClass = "multiplechoice_text";
  var searchOptionText = "mchoice_radio_option_";
  var num_options = 5;
  var init = function() {
    $(document).on("click", "#" + buttonAddOptionId, addMultipleChoiceOption)
  };
  var addMultipleChoiceOption = function(event) {
    var text = $("<div>").append($("." + MultipleChoiceOptionClass).clone()).html();
    var total = 0;
    $("." + MultipleChoiceOptionClass).each(function(i) {
      total = i
    });
    var next_num = parseInt(total) + 1;
    var next_index = "a".charCodeAt(0) + next_num;
    next_index = String.fromCharCode(next_index);
    if(next_num < num_options) {
      var add_option = "<br>" + next_index + ") <input id='radio_text_" + next_num + "' class='" + MultipleChoiceOptionClass + "' type='text' placeholder='insert text option here' />";
      add_option += "<a src='' id='" + buttonAddOptionId + "' class='add_quiz_option'><img src='images/add_quiz_option.png' id='add_quiz_option_img'/> </a>";
      $(".add_quiz_option").remove();
      $(".mcquestion").append(add_option)
    }else {
      if(next_num = num_options) {
        var add_option = "<br>" + next_index + ") <input id='radio_text_" + next_num + "' class='" + MultipleChoiceOptionClass + "' type='text' placeholder='insert text option here' />";
        $(".add_quiz_option").remove();
        $(".mcquestion").append(add_option)
      }
    }
  };
  return{init:init, addMultipleChoiceOption:addMultipleChoiceOption}
}(VISH, jQuery);
VISH.Editor.Renderer = function(V, $, undefined) {
  var slides = null;
  var init = function(excursion) {
    $("#excursion_title").val(excursion.title);
    $("#excursion_description").val(excursion.description);
    $("#excursion_avatar").val(excursion.avatar);
    $("thumbnails_in_excursion_details .carrousel_element_single_row img").each(function(index, elem) {
      if(elem.attr("src") === excursion.avatar) {
      }
      elem.addClass("carrousel_element_selected")
    });
    slides = excursion.slides;
    for(var i = 0;i < slides.length;i++) {
      _renderSlide(slides[i], i)
    }
  };
  var _renderSlide = function(slide, position) {
    var template = slide.template.substring(1);
    var scaffold = V.Dummies.getDummy(template, slide.id);
    V.SlidesUtilities.addSlide(scaffold);
    V.SlidesUtilities.redrawSlides();
    V.SlidesUtilities.lastSlide();
    for(el in slide.elements) {
      var area = $("#article" + slide.id + " div[areaid='" + slide.elements[el].areaid + "']");
      if(slide.elements[el].type === "text") {
        V.Editor.Text.launchTextEditor({}, area, slide.elements[el].body)
      }else {
        if(slide.elements[el].type === "image") {
          V.Editor.Image.drawImage(slide.elements[el].body, area, slide.elements[el].style)
        }else {
          if(slide.elements[el].type === "video") {
            var options = [];
            options["poster"] = slide.elements[el].poster;
            options["autoplay"] = slide.elements[el].autoplay;
            var sourcesArray = [];
            $.each(JSON.parse(slide.elements[el].sources), function(index, source) {
              sourcesArray.push([source.src, source.type])
            });
            V.Editor.Video.HTML5.drawVideo(sourcesArray, options, area)
          }else {
            if(slide.elements[el].type === "object") {
              V.Editor.Object.drawObject(slide.elements[el].body, area, slide.elements[el].style)
            }else {
              if(slide.elements[el].type === "snapshot") {
                V.Editor.Object.Snapshot.drawSnapShot(slide.elements[el].body, area, slide.elements[el].style, slide.elements[el].scrollTop, slide.elements[el].scrollLeft)
              }
            }
          }
        }
      }
    }
    $("div.selectable:empty").addClass("editable")
  };
  return{init:init}
}(VISH, jQuery);
VISH.Editor.Text = function(V, $, undefined) {
  var myNicEditor;
  var init = function() {
    $(document).on("click", ".textthumb", launchTextEditor)
  };
  var launchTextEditor = function(event, area, initial_text) {
    var current_area;
    if(area) {
      current_area = area
    }else {
      current_area = $(this).parents(".selectable");
      initial_text = "<div><font size='3'>Insert text here</font></div>"
    }
    if(myNicEditor == null) {
      myNicEditor = new nicEditor;
      myNicEditor.setPanel("slides_panel")
    }
    current_area.attr("type", "text");
    var wysiwygId = "wysiwyg_" + current_area.attr("id");
    var wysiwygWidth = current_area.width() - 10;
    var wysiwygHeight = current_area.height() - 10;
    current_area.html("<div class='wysiwygInstance' id=" + wysiwygId + " style='width:" + wysiwygWidth + "px; height:" + wysiwygHeight + "px;'>" + initial_text + "</div>");
    myNicEditor.addInstance(wysiwygId);
    V.Editor.addDeleteButton(current_area)
  };
  var changeFontPropertiesToSpan = function(zone) {
    $(zone).find("font").each(function(index, elem) {
      var size = $(elem).attr("size");
      var sel = {"arial":"arial", "comic sans ms":"comic", "courier new":"courier", "georgia":"georgia", "helvetica":"helvetica", "impact":"impact", "times new roman":"times", "trebuchet ms":"trebuchet", "verdana":"verdana"};
      var face = sel[$(elem).attr("face")] ? sel[$(elem).attr("face")] : "Helvetica";
      var style = "";
      if($(elem).attr("color") !== undefined) {
        style += "color:" + $(elem).attr("color") + ";"
      }
      if($(elem).attr("style") !== undefined) {
        style += $(elem).attr("style") + ";"
      }
      $(elem).closest("div").addClass("vish-parent-font" + size);
      $(elem).replaceWith("<span class='vish-font" + size + " vish-font" + face + "' style='" + style + "'>" + $(elem).html() + "</span>")
    });
    $(zone).find("span[style*='font-size']").each(function(index, elem) {
      var style = $(elem).attr("style");
      $(elem).attr("style", style + ";line-height: 110%;")
    });
    return $(zone).html()
  };
  return{init:init, launchTextEditor:launchTextEditor, changeFontPropertiesToSpan:changeFontPropertiesToSpan}
}(VISH, jQuery);
VISH.Editor.Thumbnails = function(V, $, undefined) {
  var carrouselDivId = "slides_carrousel";
  var init = function() {
  };
  var redrawThumbnails = function() {
    VISH.Editor.Carrousel.cleanCarrousel(carrouselDivId);
    $("#" + carrouselDivId).hide();
    var carrouselImages = [];
    var carrouselImagesTitles = [];
    var carrouselElements = 0;
    $("article").each(function(index, s) {
      var template = $(s).attr("template");
      carrouselElements += 1;
      carrouselImages.push($("<img class='image_barbutton fill_slide_button' slideNumber='" + carrouselElements + "' action='goToSlide' src='" + VISH.ImagesPath + "templatesthumbs/" + template + ".png' />"));
      carrouselImagesTitles.push(carrouselElements)
    });
    carrouselImages.push($("<img class='image_barbutton add_slide_button' action='plus' id='addslidebutton' src='" + VISH.ImagesPath + "templatesthumbs/add_slide.png' />"));
    carrouselElements += 1;
    if(carrouselElements < 8) {
      var i;
      for(i = 0 + carrouselElements;i < 8;i++) {
        carrouselImages.push($("<img class='image_barbutton empty_slide_button' action='default' src='" + VISH.ImagesPath + "templatesthumbs/default.png' />"));
        carrouselElements += 1
      }
    }
    VISH.Utils.loader.loadImagesOnCarrouselOrder(carrouselImages, _onImagesLoaded, carrouselDivId, carrouselImagesTitles)
  };
  var _onImagesLoaded = function() {
    $(".add_slide_button").hover(function() {
      $(this).attr("src", VISH.ImagesPath + "hover/add_slide.png")
    }, function() {
      $(this).attr("src", VISH.ImagesPath + "templatesthumbs/add_slide.png")
    });
    $(".barbutton").css("background-color", "transparent");
    var options = new Array;
    options["rows"] = 1;
    options["callback"] = _onClickCarrouselElement;
    options["rowItems"] = 8;
    options["scrollItems"] = 1;
    options["styleClass"] = "slides";
    options["width"] = 900;
    options["startAtLastElement"] = true;
    options["pagination"] = false;
    $("#" + carrouselDivId).show();
    VISH.Editor.Carrousel.createCarrousel(carrouselDivId, options)
  };
  var _onClickCarrouselElement = function(event) {
    switch($(event.target).attr("action")) {
      case "plus":
        $("#addSlideFancybox").trigger("click");
        break;
      case "goToSlide":
        VISH.SlidesUtilities.goToSlide($(event.target).attr("slideNumber"));
        break;
      default:
        break
    }
  };
  var selectThumbnail = function(no) {
    $(".image_barbutton").removeClass("selectedSlideThumbnail");
    $(".image_barbutton[slideNumber=" + no + "]").addClass("selectedSlideThumbnail")
  };
  var goToThumbnail = function(no) {
    $("#" + carrouselDivId).trigger("slideTo", no)
  };
  var advanceCarrousel = function(no) {
    $("#" + carrouselDivId).trigger("next", no)
  };
  var backCarrousel = function(no) {
    $("#" + carrouselDivId).trigger("prev", no)
  };
  var addDefaultThumbnail = function() {
    var plus_element = $(".add_slide_button").parent();
    $("#slides_carrousel").trigger("removeItem", plus_element);
    var new_plus_element = $('<div class="carrousel_element_single_row_slides"><img class="image_barbutton add_slide_button carrousel_element_single_row_slides" action="plus" src="/images/templatesthumbs/add_slide.png" /></div>');
    var element = $('<div class="carrousel_element_single_row_slides"><img class="image_barbutton carrousel_element_single_row_slides" src="/images/templatesthumbs/default.png" action="default"></div>');
    var index = $("div.carrousel_element_single_row_slides").length - 1;
    $("#" + carrouselDivId).trigger("insertItem", [element, index]);
    $("#" + carrouselDivId).trigger("insertItem", [new_plus_element, index])
  };
  return{init:init, redrawThumbnails:redrawThumbnails, selectThumbnail:selectThumbnail, goToThumbnail:goToThumbnail, advanceCarrousel:advanceCarrousel, backCarrousel:backCarrousel}
}(VISH, jQuery);
VISH.Editor.Tour = function(V, $, undefined) {
  var startTourWithId = function(helpid, tipLocation) {
    var loc;
    if(tipLocation === undefined) {
      loc = "top"
    }else {
      loc = tipLocation
    }
    $(window).joyride({"tipLocation":loc, "tipContent":"#" + helpid, "postRideCallback":VISH.Editor.Tour.clear()})
  };
  var clear = function() {
    $(".joyride-tip-guide").each(function() {
      $(this).remove()
    })
  };
  return{clear:clear, startTourWithId:startTourWithId}
}(VISH, jQuery);
VISH.Editor.Video.HTML5 = function(V, $, undefined) {
  var init = function() {
  };
  var drawVideoWithUrl = function(url) {
    drawVideo([[url, _getVideoType(url)]])
  };
  var _getVideoType = function(url) {
    var source = VISH.Editor.Object.getObjectInfo(url).source;
    return"video/" + source.split(".").pop()
  };
  var drawVideo = function(sources, options, area, style) {
    var current_area;
    if(area) {
      current_area = area
    }else {
      current_area = VISH.Editor.getCurrentArea()
    }
    var posterUrl = "https://github.com/ging/vish_editor/raw/master/images/example_poster_image.jpg";
    var autoplay = false;
    if(options) {
      if(options["poster"]) {
        posterUrl = options["poster"]
      }
      if(options["autoplay"]) {
        autoplay = options["autoplay"]
      }
    }
    var template = VISH.Editor.getTemplate(area);
    var nextVideoId = VISH.Editor.getId();
    var idToDragAndResize = "draggable" + nextVideoId;
    current_area.attr("type", "video");
    var videoTag = document.createElement("video");
    videoTag.setAttribute("id", idToDragAndResize);
    videoTag.setAttribute("class", template + "_video");
    videoTag.setAttribute("title", "Click to drag");
    videoTag.setAttribute("controls", "controls");
    videoTag.setAttribute("preload", "metadata");
    videoTag.setAttribute("poster", posterUrl);
    videoTag.setAttribute("autoplayonslideenter", autoplay);
    if(style) {
      videoTag.setAttribute("style", style)
    }
    $(sources).each(function(index, source) {
      var videoSource = document.createElement("source");
      videoSource.setAttribute("src", source[0]);
      if(source[1]) {
        videoSource.setAttribute("type", source[1])
      }
      $(videoTag).append(videoSource)
    });
    var fallbackText = document.createElement("p");
    $(fallbackText).html("Your browser does not support HTML5 video.");
    $(videoTag).append(fallbackText);
    $(current_area).html("");
    $(current_area).append(videoTag);
    VISH.Editor.addDeleteButton($(current_area));
    var width, value;
    if(style) {
      width = V.SlidesUtilities.getWidthFromStyle(style);
      value = width / 80
    }else {
      value = 4
    }
    $("#menubar").before("<div id='sliderId" + nextVideoId + "' class='theslider'><input id='imageSlider" + nextVideoId + "' type='slider' name='size' value='" + value + "' style='display: none; '></div>");
    $("#imageSlider" + nextVideoId).slider({from:1, to:8, step:0.2, round:1, dimension:"x", skin:"blue", onstatechange:function(value) {
      $("#" + idToDragAndResize).width(80 * value)
    }});
    $("#" + idToDragAndResize).draggable({cursor:"move"})
  };
  var renderVideoFromSources = function(sources) {
    var posterUrl = "https://github.com/ging/vish_editor/raw/master/images/example_poster_image.jpg";
    var rendered = "<video class='objectPreview' preload='metadata' controls='controls' poster='" + posterUrl + "' >";
    $.each(sources, function(index, source) {
      rendered = rendered + "<source src='" + source + "' " + _getVideoType(source) + ">"
    });
    rendered = rendered + "</video>";
    return rendered
  };
  return{init:init, drawVideoWithUrl:drawVideoWithUrl, drawVideo:drawVideo, renderVideoFromSources:renderVideoFromSources}
}(VISH, jQuery);
VISH.Editor.Video.Repository = function(V, $, undefined) {
  var carrouselDivId = "tab_video_repo_content_carrousel";
  var previewDivId = "tab_video_repo_content_preview";
  var currentVideos = new Array;
  var selectedVideo = null;
  var init = function() {
    var myInput = $("#tab_video_repo_content").find("input[type='search']");
    $(myInput).watermark("Search content");
    $(myInput).keydown(function(event) {
      if(event.keyCode == 13) {
        _requestData($(myInput).val());
        $(myInput).blur()
      }
    })
  };
  var onLoadTab = function() {
    var previousSearch = $("#tab_video_repo_content").find("input[type='search']").val() != "";
    if(!previousSearch) {
      _cleanVideoPreview();
      _requestInitialData()
    }
  };
  var _requestInitialData = function() {
    VISH.Editor.API.requestRecomendedVideos(_onDataReceived, _onAPIError)
  };
  var _requestData = function(text) {
    VISH.Editor.API.requestVideos(text, _onDataReceived, _onAPIError)
  };
  var _onDataReceived = function(data) {
    VISH.Editor.Carrousel.cleanCarrousel(carrouselDivId);
    $("#" + carrouselDivId).hide();
    _cleanVideoPreview();
    currentVideos = new Array;
    var carrouselImages = [];
    var content = "";
    if(!data.videos || data.videos.length == 0) {
      $("#" + carrouselDivId).html("<p class='carrouselNoResults'> No results found </p>");
      $("#" + carrouselDivId).show();
      return
    }
    $.each(data.videos, function(index, video) {
      if(video) {
        var myImg = $("<img src='" + video.poster + "' videoId='" + video.id + "'/>");
        carrouselImages.push(myImg);
        currentVideos[video.id] = video
      }
    });
    VISH.Utils.loader.loadImagesOnCarrousel(carrouselImages, _onImagesLoaded, carrouselDivId)
  };
  var _onImagesLoaded = function() {
    $("#" + carrouselDivId).show();
    var options = new Array;
    options["rows"] = 1;
    options["callback"] = _onClickCarrouselElement;
    options["rowItems"] = 5;
    VISH.Editor.Carrousel.createCarrousel(carrouselDivId, options)
  };
  var _onAPIError = function() {
  };
  var _onClickCarrouselElement = function(event) {
    var videoId = $(event.target).attr("videoid");
    var renderedVideo = VISH.Renderer.renderVideo(currentVideos[videoId], "preview");
    _renderVideoPreview(renderedVideo, currentVideos[videoId]);
    selectedVideo = currentVideos[videoId]
  };
  var _renderVideoPreview = function(renderedVideo, video) {
    var videoArea = $("#" + previewDivId).find("#tab_video_repo_content_preview_video");
    var metadataArea = $("#" + previewDivId).find("#tab_video_repo_content_preview_metadata");
    var button = $("#" + previewDivId).find(".okButton");
    $(videoArea).html("");
    $(metadataArea).html("");
    if(renderedVideo && video) {
      $(videoArea).append(renderedVideo);
      var table = VISH.Utils.generateTable(video.author, video.title, video.description);
      $(metadataArea).html(table);
      $(button).show()
    }
  };
  var _cleanVideoPreview = function() {
    var videoArea = $("#" + previewDivId).find("#tab_video_repo_content_preview_video");
    var metadataArea = $("#" + previewDivId).find("#tab_video_repo_content_preview_metadata");
    var button = $("#" + previewDivId).find(".okButton");
    $(videoArea).html("");
    $(metadataArea).html("");
    $(button).hide()
  };
  var addSelectedVideo = function() {
    if(selectedVideo != null) {
      var sourcesArray = [];
      var options = new Array;
      options["poster"] = selectedVideo.poster;
      var sources = selectedVideo.sources;
      if(typeof sources == "string") {
        sources = JSON.parse(sources)
      }
      $.each(sources, function(index, source) {
        sourcesArray.push([source.src, source.type])
      });
      VISH.Editor.Video.HTML5.drawVideo(sourcesArray, options);
      $.fancybox.close()
    }
  };
  return{init:init, onLoadTab:onLoadTab, addSelectedVideo:addSelectedVideo}
}(VISH, jQuery);
VISH.Editor.Video.Vimeo = function(V, $, undefined) {
  var carrouselDivId = "tab_video_vimeo_content_carrousel";
  var previewDivId = "tab_video_vimeo_content_preview";
  var queryMaxMaxNumberYoutubeVideo = 20;
  var currentVideos = new Array;
  var selectedVideo = null;
  var init = function() {
    var myInput = $("#tab_video_vimeo_content").find("input[type='search']");
    $(myInput).watermark("Search content");
    $(myInput).keydown(function(event) {
      if(event.keyCode == 13) {
        VISH.Editor.Video.Vimeo.requestVimeoData($(myInput).val());
        $(myInput).blur()
      }
    })
  };
  var onLoadTab = function() {
    $("#tab_video_vimeo_content").find("input[type='search']").val("");
    VISH.Editor.Carrousel.cleanCarrousel(carrouselDivId);
    $("#" + carrouselDivId).hide();
    _cleanVideoPreview()
  };
  var requestVimeoData = function(text) {
    VISH.Debugging.log("entra en requesVimeoData");
    var url_vimeo = "http://gdata.youtube.com/feeds/api/videos?q=" + text + "&alt=json-in-script&callback=?&max-results=" + queryMaxMaxNumberYoutubeVideo + "&start-index=1";
    jQuery.getJSON(url_youtube, function(data) {
      _onDataReceived(data)
    })
  };
  var _onDataReceived = function(data) {
    VISH.Debugging.log("entra en _onDataReceived")
  };
  var _onImagesLoaded = function() {
  };
  var vimeo_video_pattern_1 = /https?:\/\/?youtu.be\/([aA-zZ0-9]+)/g;
  var vimeo_video_pattern_2 = /(https?:\/\/)?(www.youtube.com\/watch\?v=|embed\/)([aA-z0-9Z]+)[&=.]*/g;
  var _getYoutubeIdFromURL = function(url) {
  };
  var addSelectedVideo = function() {
  };
  var onClickCarrouselElement = function(event) {
  };
  var _renderVideoPreview = function(renderedIframe, video) {
  };
  var _cleanVideoPreview = function() {
  };
  var _generateWrapper = function(videoId) {
  };
  var generateWrapperForYoutubeVideoUrl = function(url) {
  };
  return{init:init, onLoadTab:onLoadTab}
}(VISH, jQuery);
VISH.Editor.Video.Youtube = function(V, $, undefined) {
  var carrouselDivId = "tab_video_youtube_content_carrousel";
  var previewDivId = "tab_video_youtube_content_preview";
  var queryMaxMaxNumberYoutubeVideo = 20;
  var currentVideos = new Array;
  var selectedVideo = null;
  var init = function() {
    var myInput = $("#tab_video_youtube_content").find("input[type='search']");
    $(myInput).watermark("Search content");
    $(myInput).keydown(function(event) {
      if(event.keyCode == 13) {
        VISH.Editor.Video.Youtube.requestYoutubeData($(myInput).val());
        $(myInput).blur()
      }
    })
  };
  var onLoadTab = function() {
    $("#tab_video_youtube_content").find("input[type='search']").val("");
    VISH.Editor.Carrousel.cleanCarrousel(carrouselDivId);
    $("#" + carrouselDivId).hide();
    _cleanVideoPreview()
  };
  var requestYoutubeData = function(text) {
    var url_youtube = "http://gdata.youtube.com/feeds/api/videos?q=" + text + "&alt=json-in-script&callback=?&max-results=" + queryMaxMaxNumberYoutubeVideo + "&start-index=1";
    jQuery.getJSON(url_youtube, function(data) {
      _onDataReceived(data)
    })
  };
  var _onDataReceived = function(data) {
    VISH.Editor.Carrousel.cleanCarrousel(carrouselDivId);
    $("#" + carrouselDivId).hide();
    _cleanVideoPreview();
    currentVideos = new Array;
    var carrouselImages = [];
    var content = "";
    if(!data.feed || data.feed.length == 0 || !data.feed.entry) {
      $("#" + carrouselDivId).html("<p class='carrouselNoResults'> No results found </p>");
      $("#" + carrouselDivId).show();
      return
    }
    $.each(data.feed.entry, function(i, item) {
      var video = item["id"]["$t"];
      var title = item["title"]["$t"];
      var author = item.author[0].name.$t;
      var subtitle = item.media$group.media$description.$t;
      video = video.replace("http://gdata.youtube.com/feeds/api/videos/", "http://www.youtube.com/watch?v=");
      var videoID = video.replace("http://www.youtube.com/watch?v=", "");
      currentVideos[videoID] = new Object;
      currentVideos[videoID].id = videoID;
      currentVideos[videoID].title = title;
      currentVideos[videoID].author = author;
      currentVideos[videoID].subtitle = subtitle;
      var image_url = "http://img.youtube.com/vi/" + videoID + "/0.jpg";
      var myImg = $("<img videoID=" + videoID + " src=" + image_url + " />");
      carrouselImages.push(myImg)
    });
    VISH.Utils.loader.loadImagesOnCarrousel(carrouselImages, _onImagesLoaded, carrouselDivId)
  };
  var _onImagesLoaded = function() {
    $("#" + carrouselDivId).show();
    var options = new Array;
    options["rows"] = 1;
    options["callback"] = VISH.Editor.Video.Youtube.onClickCarrouselElement;
    options["rowItems"] = 5;
    VISH.Editor.Carrousel.createCarrousel(carrouselDivId, options)
  };
  var _getYoutubeIdFromURL = function(url) {
    var youtube_video_pattern_1 = /https?:\/\/?youtu.be\/([aA-zZ0-9]+)/g;
    var youtube_video_pattern_2 = /(https?:\/\/)?(www.youtube.com\/watch\?v=|embed\/)([aA-z0-9Z]+)[&=.]*/g;
    var id = null;
    if(url.match(youtube_video_pattern_1) != null) {
      var result = youtube_video_pattern_1.exec(url);
      if(result && result[1]) {
        id = result[1]
      }
      return id
    }
    if(url.match(youtube_video_pattern_2) != null) {
      var result = url.split("&")[0];
      var result = youtube_video_pattern_2.exec(url);
      if(result && result[3]) {
        id = result[3]
      }
      return id
    }
    return id
  };
  var addSelectedVideo = function() {
    if(selectedVideo != null) {
      VISH.Editor.Object.drawObject(_generateWrapper(selectedVideo.id));
      $.fancybox.close()
    }
  };
  var onClickCarrouselElement = function(event) {
    var videoId = $(event.target).attr("videoID");
    var renderedPreviewVideo = _generatePreviewWrapper(videoId);
    _renderVideoPreview(renderedPreviewVideo, currentVideos[videoId]);
    selectedVideo = currentVideos[videoId]
  };
  var _renderVideoPreview = function(renderedIframe, video) {
    var videoArea = $("#" + previewDivId).find("#tab_video_youtube_content_preview_video");
    var metadataArea = $("#" + previewDivId).find("#tab_video_youtube_content_preview_metadata");
    var button = $("#" + previewDivId).find(".okButton");
    $(videoArea).html("");
    $(metadataArea).html("");
    if(renderedIframe && video) {
      $(videoArea).append(renderedIframe);
      var table = VISH.Utils.generateTable(video.author, video.title, video.description);
      $(metadataArea).html(table);
      $(button).show()
    }
  };
  var _cleanVideoPreview = function() {
    var videoArea = $("#" + previewDivId).find("#tab_video_youtube_content_preview_video");
    var metadataArea = $("#" + previewDivId).find("#tab_video_youtube_content_preview_metadata");
    var button = $("#" + previewDivId).find(".okButton");
    $(videoArea).html("");
    $(metadataArea).html("");
    $(button).hide()
  };
  var _generateWrapper = function(videoId) {
    var video_embedded = "http://www.youtube.com/embed/" + videoId;
    current_area = VISH.Editor.getCurrentArea();
    var width_height = VISH.SlidesUtilities.dimentionToDraw(current_area.width(), current_area.height(), 325, 243);
    var wrapper = "<iframe src='" + video_embedded + "?wmode=transparent' frameborder='0' style='width:" + width_height.width + "px; height:" + width_height.height + "px;'></iframe>";
    return wrapper
  };
  var generateWrapperForYoutubeVideoUrl = function(url) {
    var videoId = _getYoutubeIdFromURL(url);
    if(videoId != null) {
      return _generateWrapper(videoId)
    }else {
      return"Youtube Video ID can't be founded."
    }
  };
  var _generatePreviewWrapper = function(videoId) {
    var video_embedded = "http://www.youtube.com/embed/" + videoId;
    var wrapper = '<iframe class="objectPreview" type="text/html" src="' + video_embedded + '?wmode=transparent" frameborder="0"></iframe>';
    return wrapper
  };
  var generatePreviewWrapperForYoutubeVideoUrl = function(url) {
    var videoId = _getYoutubeIdFromURL(url);
    if(videoId != null) {
      return _generatePreviewWrapper(videoId)
    }else {
      return"<p class='objectPreview'>Youtube Video ID can't be founded.</p>"
    }
  };
  return{init:init, onLoadTab:onLoadTab, onClickCarrouselElement:onClickCarrouselElement, requestYoutubeData:requestYoutubeData, addSelectedVideo:addSelectedVideo, generateWrapperForYoutubeVideoUrl:generateWrapperForYoutubeVideoUrl, generatePreviewWrapperForYoutubeVideoUrl:generatePreviewWrapperForYoutubeVideoUrl}
}(VISH, jQuery);
VISH.Excursion = function(V, undefined) {
  var mySlides = null;
  var init = function(slides) {
    mySlides = slides;
    V.Renderer.init();
    for(var i = 0;i < slides.length;i++) {
      V.Renderer.renderSlide(slides[i])
    }
    _finishRenderer()
  };
  var _finishRenderer = function() {
    for(var i = 0;i < mySlides.length;i++) {
      for(var num = 0;num < mySlides[i].elements.length;num++) {
        if(mySlides[i].elements[num].type === "flashcard") {
          var flashcard = JSON.parse(mySlides[i].elements[num].jsoncontent);
          V.Mods.fc.loader.init(flashcard)
        }
      }
    }
    V.VideoPlayer.setVideoTagEvents();
    V.SlideManager.addEnterLeaveEvents();
    var evt = document.createEvent("Event");
    evt.initEvent("OURDOMContentLoaded", false, true);
    document.dispatchEvent(evt)
  };
  return{init:init}
}(VISH);
VISH.ObjectPlayer = function() {
  var loadObject = function(element) {
    $.each(element.children(".objectelement"), function(index, value) {
      $(value).html("<div style='" + $(value).attr("objectStyle") + "'>" + $(value).attr("objectWrapper") + "</div>")
    })
  };
  var unloadObject = function() {
    var element = $(".past, .next");
    $.each(element.children(".objectelement"), function(index, value) {
      $(value).html("")
    })
  };
  return{loadObject:loadObject, unloadObject:unloadObject}
}(VISH, jQuery);
VISH.Police = function(V, $, undefined) {
  var init = function() {
  };
  var valid_url_pattern = /((http(s)?:\/\/)|(www[.]))(.*)/g;
  var validateObject = function(object, callback) {
    if(!object) {
      return[false, "Object is null or undefined"]
    }
    if(typeof object == "string" && object.trim() == "") {
      return[false, "Object is an empty string"]
    }
    var objectInfo = VISH.Editor.Object.getObjectInfo(object);
    if(!objectInfo) {
      return[false, "Can't get Object info"]
    }
    if(!objectInfo.source || !objectInfo.type) {
      return[false, "Can't recognize object source"]
    }
    if(objectInfo.source.trim() == "") {
      return[false, "Object source is an empty string"]
    }
    if(typeof callback == "function") {
      _validateUrl(objectInfo.source, callback)
    }
    return[true, "Validation Ok"]
  };
  function _validateUrl(url, callback) {
    _checkUrl(url, function(status) {
      if(status === 404) {
        callback([false, "HTTP 404: Not found"])
      }else {
        callback([true, "Validation Ok"])
      }
    })
  }
  function _checkUrl(url, cb) {
    jQuery.ajax({url:url, dataType:"text", type:"GET", complete:function(xhr) {
      if(typeof cb === "function") {
        cb.apply(this, [xhr.status])
      }
    }})
  }
  var validateFileUpload = function(fileName) {
    if(!fileName) {
      return[false, "Name is null or undefined"]
    }
    if(fileName.trim() == "") {
      return[false, "Name is an empty string"]
    }
    return[true, "Validation Ok"]
  };
  return{init:init, validateObject:validateObject, validateFileUpload:validateFileUpload}
}(VISH, jQuery);
VISH.Renderer = function(V, $, undefined) {
  var SLIDE_CONTAINER = null;
  var init = function() {
    SLIDE_CONTAINER = $(".slides")
  };
  var renderSlide = function(slide) {
    var content = "";
    var classes = "";
    for(el in slide.elements) {
      if(slide.elements[el].type === "text") {
        content += _renderText(slide.elements[el], slide.template)
      }else {
        if(slide.elements[el].type === "image") {
          content += _renderImage(slide.elements[el], slide.template)
        }else {
          if(slide.elements[el].type === "video") {
            content += renderVideo(slide.elements[el], slide.template)
          }else {
            if(slide.elements[el].type === "object") {
              content += _renderObject(slide.elements[el], slide.template);
              classes += "object "
            }else {
              if(slide.elements[el].type === "snapshot") {
                content += _renderSnapshot(slide.elements[el], slide.template);
                classes += "snapshot "
              }else {
                if(slide.elements[el].type === "applet") {
                  content += _renderApplet(slide.elements[el], slide.template);
                  classes += "applet "
                }else {
                  if(slide.elements[el].type === "flashcard") {
                    content = _renderFlashcard(slide.elements[el], slide.template);
                    classes += "flashcard"
                  }else {
                    if(slide.elements[el].type === "openquestion") {
                      content = _renderOpenquestion(slide.elements[el], slide.template)
                    }else {
                      if(slide.elements[el].type === "mcquestion") {
                        content = _renderMcquestion(slide.elements[el], slide.template)
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    SLIDE_CONTAINER.append("<article class='" + classes + "' id='" + slide.id + "'>" + content + "</article>")
  };
  var _renderText = function(element, template) {
    return"<div id='" + element["id"] + "' class='" + template + "_" + element["areaid"] + " " + template + "_text" + "'>" + element["body"] + "</div>"
  };
  var _renderImage = function(element, template) {
    return"<div id='" + element["id"] + "' class='" + template + "_" + element["areaid"] + "'><img class='" + template + "_image' src='" + element["body"] + "' style='" + element["style"] + "' /></div>"
  };
  var renderVideo = function(element, template) {
    var rendered = "<div id='" + element["id"] + "' class='" + template + "_" + element["areaid"] + "'>";
    var style = element["style"] ? "style='" + element["style"] + "'" : "";
    var controls = element["controls"] ? "controls='" + element["controls"] + "' " : "controls='controls' ";
    var autoplay = element["autoplay"] ? "autoplayonslideenter='" + element["autoplay"] + "' " : "";
    var poster = element["poster"] ? "poster='" + element["poster"] + "' " : "";
    var loop = element["loop"] ? "loop='loop' " : "";
    var sources = element["sources"];
    if(typeof sources == "string") {
      sources = JSON.parse(sources)
    }
    rendered = rendered + "<video class='" + template + "_video' preload='metadata' " + style + controls + autoplay + poster + loop + ">";
    $.each(sources, function(index, source) {
      var type = source.type ? "type='" + source.type + "' " : "";
      rendered = rendered + "<source src='" + source.src + "' " + type + ">"
    });
    if(sources.length > 0) {
      rendered = rendered + "<p>Your browser does not support HTML5 video.</p>"
    }
    rendered = rendered + "</video>";
    return rendered
  };
  var _renderObject = function(element, template) {
    var style = element["style"] ? element["style"] : "";
    var body = element["body"];
    return"<div id='" + element["id"] + "' class='objectelement " + template + "_" + element["areaid"] + "' objectStyle='" + style + "' objectWrapper='" + body + "'>" + "" + "</div>"
  };
  var _renderSnapshot = function(element, template) {
    var style = element["style"] ? element["style"] : "";
    var body = element["body"];
    var scrollTop = element["scrollTop"] ? element["scrollTop"] : 0;
    var scrollLeft = element["scrollLeft"] ? element["scrollLeft"] : 0;
    return"<div id='" + element["id"] + "' class='snapshotelement " + template + "_" + element["areaid"] + "' template='" + template + "' objectStyle='" + style + "' scrollTop='" + scrollTop + "' scrollLeft='" + scrollLeft + "' objectWrapper='" + body + "'>" + "" + "</div>"
  };
  var _renderApplet = function(element, template) {
    return"<div id='" + element["id"] + "' class='appletelement " + template + "_" + element["areaid"] + "' code='" + element["code"] + "' width='" + element["width"] + "' height='" + element["height"] + "' archive='" + element["archive"] + "' params='" + element["params"] + "' ></div>"
  };
  var _renderFlashcard = function(element, template) {
    return"<div id='" + element["id"] + "' class='template_flashcard'><canvas id='" + element["canvasid"] + "'>Your browser does not support canvas</canvas></div>"
  };
  var _renderOpenquestion = function(element, template) {
    var ret = "<div id='" + element["id"] + "' class='question_title'>" + element["title"] + "</div>";
    ret += "<form action='" + element["posturl"] + "' method='post'>";
    ret += "<label class='question'> Question: " + element["question"] + "  </label>";
    ret += "<label class='question_name'>Name:  </label>";
    ret += "<input id='pupil_name' class='question_name_input'></input>";
    ret += "<label class='question_answer'>Answer: </label>";
    ret += "<textarea class='question_answer_input'></textarea>";
    ret += "<button type='button' class='question_button'>Send</button>";
    return ret
  };
  var _renderMcquestion = function(element, template) {
    var ret = "<div id='" + element["id"] + "' class='question_title'>" + element["question"] + "</div>";
    ret += "<form action='" + element["posturl"] + "' method='post'>";
    ret += "<label class='question_name'>Name: </label>";
    ret += "<input id='pupil_name' class='question_name_input'></input>";
    for(var i = 0;i < element["options"].length;i++) {
      ret += "<label class='mc_answer'><input type='radio' name='mc_radio' value='0'>" + element["options"][i] + "</label>"
    }
    ret += "<button type='button' class='question_button'>Send</button>";
    return ret
  };
  return{init:init, renderVideo:renderVideo, renderSlide:renderSlide}
}(VISH, jQuery);
VISH.SlideManager = function(V, $, undefined) {
  var mySlides = null;
  var slideStatus = {};
  var myDoc;
  var init = function(excursion) {
    VISH.Editing = false;
    mySlides = excursion.slides;
    V.Excursion.init(mySlides);
    _setupSize();
    addEventListeners();
    $(document).on("click", "#page-switcher-start", VISH.SlidesUtilities.backwardOneSlide);
    $(document).on("click", "#page-switcher-end", VISH.SlidesUtilities.forwardOneSlide);
    var isInIFrame = window.location != window.parent.location ? true : false;
    var myElem = null;
    if(isInIFrame) {
      myDoc = parent.document
    }else {
      myDoc = document
    }
    $(myDoc).on("webkitfullscreenchange mozfullscreenchange fullscreenchange", function() {
      _setupSize()
    });
    var elem = document.getElementById("page-fullscreen");
    var canFullScreen = elem && (elem.requestFullScreen || elem.mozRequestFullScreen || elem.webkitRequestFullScreen);
    if(canFullScreen) {
      $(document).on("click", "#page-fullscreen", toggleFullScreen)
    }else {
      $("#page-fullscreen").hide()
    }
    VISH.SlidesUtilities.updateSlideCounter()
  };
  var toggleFullScreen = function() {
    myElem = myDoc.getElementById("excursion_iframe");
    if(myDoc.fullScreenElement && myDoc.fullScreenElement !== null || !myDoc.mozFullScreen && !myDoc.webkitIsFullScreen) {
      if(myDoc.documentElement.requestFullScreen) {
        myElem.requestFullScreen()
      }else {
        if(myDoc.documentElement.mozRequestFullScreen) {
          myElem.mozRequestFullScreen()
        }else {
          if(myDoc.documentElement.webkitRequestFullScreen) {
            myElem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
          }
        }
      }
      $("#page-fullscreen").css("background-position", "-45px 0px");
      $("#page-fullscreen").hover(function() {
        $("#page-fullscreen").css("background-position", "-45px -40px")
      }, function() {
        $("#page-fullscreen").css("background-position", "-45px 0px")
      })
    }else {
      if(myDoc.cancelFullScreen) {
        myDoc.cancelFullScreen()
      }else {
        if(myDoc.mozCancelFullScreen) {
          myDoc.mozCancelFullScreen()
        }else {
          if(myDoc.webkitCancelFullScreen) {
            myDoc.webkitCancelFullScreen()
          }
        }
      }
      $("#page-fullscreen").css("background-position", "0px 0px");
      $("#page-fullscreen").hover(function() {
        $("#page-fullscreen").css("background-position", "0px -40px")
      }, function() {
        $("#page-fullscreen").css("background-position", "0px 0px")
      })
    }
  };
  var _setupSize = function() {
    var height = $(window).height() - 40;
    var width = $(window).width();
    var finalW = 800;
    var finalH = 600;
    var aspectRatio = width / height;
    var slidesRatio = 4 / 3;
    if(aspectRatio > slidesRatio) {
      finalH = height - 40;
      finalW = finalH * slidesRatio
    }else {
      finalW = width - 110;
      finalH = finalW / slidesRatio
    }
    $(".slides > article").css("height", finalH);
    $(".slides > article").css("width", finalW);
    var marginTop = finalH / 2 + 20;
    var marginLeft = finalW / 2;
    $(".slides > article").css("margin-top", "-" + marginTop + "px");
    $(".slides > article").css("margin-left", "-" + marginLeft + "px");
    var increase = finalH / 600;
    $(".slides > article").css("font-size", 16 * increase + "px");
    $(".slides > article").css("line-height", 16 * increase + "px")
  };
  var addEnterLeaveEvents = function() {
    $("article").live("slideenter", _onslideenter);
    $("article").live("slideleave", _onslideleave)
  };
  var getStatus = function(slideid) {
    if(!slideStatus[slideid]) {
      slideStatus[slideid] = {id:slideid, poiFrameNumber:0, drawingPoi:0}
    }
    return slideStatus[slideid]
  };
  var updateStatus = function(slideid, newStatus) {
    slideStatus[slideid] = newStatus
  };
  var _onslideenter = function(e) {
    _decideIfPageSwitcher();
    var fcElem, slideId;
    setTimeout(function() {
      if($(e.target).hasClass("object")) {
        V.ObjectPlayer.loadObject($(e.target))
      }else {
        if($(e.target).hasClass("applet")) {
          V.AppletPlayer.loadApplet($(e.target))
        }else {
          if($(e.target).hasClass("snapshot")) {
            V.SnapshotPlayer.loadSnapshot($(e.target))
          }
        }
      }
    }, 500);
    if($(e.target).hasClass("flashcard")) {
      slideId = $(e.target).attr("id");
      fcElem = _getFlashcardFromSlideId(slideId);
      V.Mods.fc.player.init(fcElem, slideId)
    }
    V.VideoPlayer.playVideos(e.target)
  };
  var _getFlashcardFromSlideId = function(id) {
    var fc = null;
    for(var i = 0;i < mySlides.length;i++) {
      if(mySlides[i].id === id) {
        for(var num = 0;num < mySlides[i].elements.length;num++) {
          if(mySlides[i].elements[num].type === "flashcard") {
            return mySlides[i].elements[num]
          }
        }
      }
    }
    return null
  };
  var _onslideleave = function(e) {
    V.VideoPlayer.stopVideos(e.target);
    V.ObjectPlayer.unloadObject();
    V.AppletPlayer.unloadApplet();
    if($(e.target).hasClass("flashcard")) {
      V.Mods.fc.player.clear()
    }
  };
  var _decideIfPageSwitcher = function() {
    if(curSlide === 0) {
      $("#page-switcher-start").hide()
    }else {
      $("#page-switcher-start").show()
    }
    if(curSlide === slideEls.length - 1) {
      $("#page-switcher-end").hide()
    }else {
      $("#page-switcher-end").show()
    }
  };
  return{init:init, getStatus:getStatus, updateStatus:updateStatus, addEnterLeaveEvents:addEnterLeaveEvents}
}(VISH, jQuery);
VISH.SlidesUtilities = function(V, $, undefined) {
  var redrawSlides = function() {
    $(document).trigger("OURDOMContentLoaded")
  };
  var dimentionToDraw = function(w_zone, h_zone, w_content, h_content) {
    var element_type;
    var dimentions_for_drawing = {width:350, height:195};
    var aspect_ratio_zone = w_zone / h_zone;
    var aspect_ratio_content = w_content / h_content;
    if(aspect_ratio_zone > aspect_ratio_content) {
      dimentions_for_drawing.width = aspect_ratio_content * h_zone;
      dimentions_for_drawing.height = h_zone;
      return dimentions_for_drawing
    }else {
      dimentions_for_drawing.width = w_zone;
      dimentions_for_drawing.height = w_zone / aspect_ratio_content;
      return dimentions_for_drawing
    }
  };
  var addSlide = function(slide) {
    $(".slides").append(slide)
  };
  var lastSlide = function() {
    goToSlide(slideEls.length)
  };
  var goToSlide = function(no) {
    if(no > slideEls.length || no <= 0) {
      return
    }else {
      if(no > curSlide + 1) {
        while(curSlide + 1 < no) {
          nextSlide()
        }
      }else {
        if(no < curSlide + 1) {
          while(curSlide + 1 > no) {
            prevSlide()
          }
        }
      }
    }
    if(VISH.Editing) {
      $(".selectable").css("border-style", "none");
      $(".theslider").hide();
      V.Editor.Thumbnails.selectThumbnail(no)
    }else {
      updateSlideCounter()
    }
  };
  var backwardOneSlide = function() {
    goToSlide(curSlide)
  };
  var forwardOneSlide = function() {
    goToSlide(curSlide + 2)
  };
  var getWidthFromStyle = function(style, area) {
    return getPixelDimensionsFromStyle(style, area)[0]
  };
  var getHeightFromStyle = function(style, area) {
    return getPixelDimensionsFromStyle(style, area)[1]
  };
  var getPixelDimensionsFromStyle = function(style, area) {
    var dimensions = [];
    var width = null;
    var height = null;
    var width_percent_pattern = /width:\s?([0-9]+(\.[0-9]+)?)%/g;
    var width_px_pattern = /width:\s?([0-9]+(\.?[0-9]+)?)px/g;
    var height_percent_pattern = /height:\s?([0-9]+(\.[0-9]+)?)%/g;
    var height_px_pattern = /height:\s?([0-9]+(\.?[0-9]+)?)px/g;
    $.each(style.split(";"), function(index, property) {
      if(property.indexOf("width") !== -1) {
        if(property.match(width_px_pattern)) {
          var result = width_px_pattern.exec(property);
          if(result[1]) {
            width = result[1]
          }
        }else {
          if(property.match(width_percent_pattern)) {
            var result = width_percent_pattern.exec(property);
            if(result[1]) {
              var percent = result[1];
              if(area) {
                width = $(area).width() * percent / 100
              }
            }
          }
        }
      }else {
        if(property.indexOf("height") !== -1) {
          if(property.match(height_px_pattern)) {
            var result = height_px_pattern.exec(property);
            if(result[1]) {
              height = result[1]
            }
          }else {
            if(property.match(height_percent_pattern)) {
              var result = height_percent_pattern.exec(property);
              if(result[1]) {
                var percent = result[1];
                if(area) {
                  height = $(area).height() * percent / 100
                }
              }
            }
          }
        }
      }
    });
    dimensions.push(width);
    dimensions.push(height);
    return dimensions
  };
  var setStyleInPixels = function(style, area) {
    var fitlerStyle = "";
    $.each(style.split(";"), function(index, property) {
      if(property.indexOf("width") === -1 && property.indexOf("height") === -1) {
        fitlerStyle = fitlerStyle + property + "; "
      }
    });
    var dimensions = getPixelDimensionsFromStyle(style, area);
    if(dimensions && dimensions[0]) {
      fitlerStyle = fitlerStyle + "width: " + dimensions[0] + "px; ";
      if(dimensions[1]) {
        fitlerStyle = fitlerStyle + "height: " + dimensions[1] + "px; "
      }
    }
    return fitlerStyle
  };
  var updateSlideCounter = function() {
    var number_of_slides = slideEls.length;
    var slide_number = curSlide + 1;
    $("#slide-counter").html(slide_number + "/" + number_of_slides)
  };
  return{getWidthFromStyle:getWidthFromStyle, getHeightFromStyle:getHeightFromStyle, getPixelDimensionsFromStyle:getPixelDimensionsFromStyle, setStyleInPixels:setStyleInPixels, goToSlide:goToSlide, lastSlide:lastSlide, addSlide:addSlide, redrawSlides:redrawSlides, forwardOneSlide:forwardOneSlide, backwardOneSlide:backwardOneSlide, dimentionToDraw:dimentionToDraw, updateSlideCounter:updateSlideCounter}
}(VISH, jQuery);
VISH.SnapshotPlayer = function() {
  var loadSnapshot = function(element) {
    $.each(element.children(".snapshotelement"), function(index, value) {
      var wrapper_class = $(value).attr("template") + "_snapshot_wrapper";
      var content_class = $(value).attr("template") + "_ snapshot_content";
      var content = $(value).attr("objectWrapper");
      $(content).addClass(content_class);
      var scrollTop = $(value).attr("scrollTop");
      var scrollLeft = $(value).attr("scrollLeft");
      $(value).html("<div class='" + wrapper_class + "' style='" + $(value).attr("objectStyle") + "'>" + VISH.Utils.getOuterHTML($(content)) + "</div>");
      $(value).find("." + wrapper_class).scrollTop(scrollTop);
      $(value).find("." + wrapper_class).scrollLeft(scrollLeft)
    })
  };
  var unloadSnapshot = function() {
    var element = $(".past, .next");
    $.each(element.children(".snapshotelement"), function(index, value) {
      $(value).html("")
    })
  };
  return{loadSnapshot:loadSnapshot, unloadSnapshot:unloadSnapshot}
}(VISH, jQuery);
VISH.Utils.canvas = function(V, undefined) {
  var drawImageWithAspectRatio = function(ctx, content, dx, dy, dw, dh) {
    var ratio, tmpHeight, tmpWidth, finalx, finaly, finalw, finalh;
    if(content.constructor === Image || content.constructor == HTMLImageElement) {
      ratio = content.width / content.height;
      tmpHeight = dw * content.height / content.width;
      tmpWidth = dh * content.width / content.height
    }else {
      ratio = content.videoWidth / content.videoHeight;
      tmpHeight = dw * content.videoHeight / content.videoWidth;
      tmpWidth = dh * content.videoWidth / content.videoHeight
    }
    if(ratio > dw / dh) {
      finalx = dx;
      finaly = dy + dh / 2 - tmpHeight / 2;
      finalw = dw;
      finalh = tmpHeight
    }else {
      finalx = dx + dw / 2 - tmpWidth / 2;
      finaly = dy;
      finalw = tmpWidth;
      finalh = dh
    }
    ctx.drawImage(content, finalx, finaly, finalw, finalh)
  };
  var drawImageWithAspectRatioAndRoundedCorners = function(ctx, content, dx, dy, dw, dh) {
    var ratio, tmpHeight, tmpWidth, finalx, finaly, finalw, finalh;
    if(content.constructor === Image || content.constructor == HTMLImageElement) {
      ratio = content.width / content.height;
      tmpHeight = dw * content.height / content.width;
      tmpWidth = dh * content.width / content.height
    }else {
      ratio = content.videoWidth / content.videoHeight;
      tmpHeight = dw * content.videoHeight / content.videoWidth;
      tmpWidth = dh * content.videoWidth / content.videoHeight
    }
    if(ratio > dw / dh) {
      finalx = dx;
      finaly = dy + dh / 2 - tmpHeight / 2;
      finalw = dw;
      finalh = tmpHeight
    }else {
      finalx = dx + dw / 2 - tmpWidth / 2;
      finaly = dy;
      finalw = tmpWidth;
      finalh = dh
    }
    ctx.drawImage(content, finalx, finaly, finalw, finalh);
    drawRoundedCorners(ctx, finalx, finaly, finalw, finalh)
  };
  var drawRoundedCorners = function(ctx, dx, dy, dw, dh, type) {
    var cornerFile, finalx, finaly, finalw, finalh;
    finalx = dx - 1;
    finaly = dy - 1;
    finalw = dw + 2;
    finalh = dh + 2;
    if(type === "text") {
      cornerFile = V.Utils.loader.getImage(VISH.ImagesPath + "corner_small_text.png")
    }else {
      if(finalw > 300 && finalh > 300) {
        cornerFile = V.Utils.loader.getImage(VISH.ImagesPath + "corner.png")
      }else {
        cornerFile = V.Utils.loader.getImage(VISH.ImagesPath + "corner_small.png")
      }
    }
    ctx.save();
    ctx.drawImage(cornerFile, finalx, finaly);
    ctx.translate(finalx + finalw, finaly);
    ctx.rotate(Math.PI / 2);
    ctx.drawImage(cornerFile, 0, 0);
    ctx.restore();
    ctx.save();
    ctx.translate(finalx + finalw, finaly + finalh);
    ctx.rotate(Math.PI);
    ctx.drawImage(cornerFile, 0, 0);
    ctx.restore();
    ctx.save();
    ctx.translate(finalx, finaly + finalh);
    ctx.rotate(3 * Math.PI / 2);
    ctx.drawImage(cornerFile, 0, 0);
    ctx.restore()
  };
  return{drawImageWithAspectRatioAndRoundedCorners:drawImageWithAspectRatioAndRoundedCorners, drawImageWithAspectRatio:drawImageWithAspectRatio, drawRoundedCorners:drawRoundedCorners}
}(VISH);
VISH.Utils.loader = function(V, undefined) {
  var libVideos = {};
  var libImages = {};
  var getImage = function(imagePath) {
    if(libImages[imagePath]) {
      return libImages[imagePath]
    }else {
      VISH.Debugging.log("Error, Image with path " + imagePath + " was not preloaded");
      return null
    }
  };
  var getVideo = function(videoPath) {
    if(libVideos[videoPath]) {
      return libVideos[videoPath]
    }else {
      VISH.Debugging.log("Error, Video with path " + videoPath + " was not preloaded");
      return null
    }
  };
  var loadImage = function(src) {
    var deferred, img;
    deferred = $.Deferred();
    img = new Image;
    img.onload = function() {
      deferred.resolve()
    };
    img.src = src;
    libImages[src] = img;
    return deferred.promise()
  };
  var loadVideo = function(videoSrc, videoId) {
    var deferred, v;
    deferred = $.Deferred();
    v = document.createElement("video");
    v.setAttribute("id", "video" + videoId);
    v.setAttribute("style", "display:none");
    v.setAttribute("preload", "auto");
    v.setAttribute("src", videoSrc);
    document.body.appendChild(v);
    v.addEventListener("loadedmetadata", function() {
      deferred.resolve()
    }, false);
    libVideos[videoSrc] = v;
    return deferred.promise()
  };
  var loadImagesOnCarrousel = function(imagesArray, callback, carrouselDivId, titleArray) {
    var imagesLength = imagesArray.length;
    var imagesLoaded = 0;
    $.each(imagesArray, function(i, image) {
      $(image).load(function(response) {
        if(titleArray && titleArray[imagesArray.indexOf(image)]) {
          $("#" + carrouselDivId).append("<div><p>" + titleArray[imagesArray.indexOf(image)] + "</p>" + VISH.Utils.getOuterHTML(image) + "</div>")
        }else {
          $("#" + carrouselDivId).append("<div>" + VISH.Utils.getOuterHTML(image) + "</div>")
        }
        imagesLoaded = imagesLoaded + 1;
        if(imagesLoaded == imagesLength) {
          callback()
        }
      });
      $(image).error(function(response) {
        imagesLoaded = imagesLoaded + 1;
        if(imagesLoaded == imagesLength) {
          callback()
        }
      })
    })
  };
  var loadImagesOnCarrouselOrder = function(imagesArray, callback, carrouselDivId, titleArray) {
    var validImagesArray = imagesArray;
    var imagesLength = imagesArray.length;
    var imagesLoaded = 0;
    $.each(imagesArray, function(i, image) {
      $(image).load(function(response) {
        imagesLoaded = imagesLoaded + 1;
        if(imagesLoaded == imagesLength) {
          _insertElementsWithOrder(validImagesArray, carrouselDivId, titleArray);
          callback()
        }
      });
      $(image).error(function(response) {
        imagesLoaded = imagesLoaded + 1;
        validImagesArray.splice(validImagesArray.indexOf(image), 1);
        if(imagesLoaded == imagesLength) {
          _insertElementsWithOrder(validImagesArray, carrouselDivId, titleArray);
          callback()
        }
      })
    })
  };
  var _insertElementsWithOrder = function(imagesArray, carrouselDivId, titleArray) {
    $.each(imagesArray, function(i, image) {
      if(titleArray && titleArray[imagesArray.indexOf(image)]) {
        $("#" + carrouselDivId).append("<div><p>" + titleArray[imagesArray.indexOf(image)] + "</p>" + VISH.Utils.getOuterHTML(image) + "</div>")
      }else {
        $("#" + carrouselDivId).append("<div>" + VISH.Utils.getOuterHTML(image) + "</div>")
      }
    })
  };
  return{getImage:getImage, getVideo:getVideo, loadImage:loadImage, loadVideo:loadVideo, loadImagesOnCarrousel:loadImagesOnCarrousel, loadImagesOnCarrouselOrder:loadImagesOnCarrouselOrder}
}(VISH);
VISH.Utils.text = function(V, undefined) {
  var getLines = function(ctx, phrase, maxPxLength, textStyle) {
    var wa = phrase.split(" "), phraseArray = [], lastPhrase = "", l = maxPxLength, measure = 0, i = 0, w = 0;
    ctx.font = textStyle;
    for(i = 0;i < wa.length;i++) {
      w = wa[i];
      measure = ctx.measureText(lastPhrase + w).width;
      if(measure < l) {
        lastPhrase += " " + w
      }else {
        phraseArray.push(lastPhrase);
        lastPhrase = w
      }
      if(i === wa.length - 1) {
        phraseArray.push(lastPhrase);
        break
      }
    }
    return phraseArray
  };
  return{getLines:getLines}
}(VISH);
VISH.VideoPlayer = function() {
  var setVideoTagEvents = function() {
    var videos = $("video");
    $.each(videos, function(index, video) {
      video.addEventListener("play", function() {
      }, false);
      video.addEventListener("pause", function() {
      }, false);
      video.addEventListener("ended", function() {
      }, false);
      $(video).focus(function(event) {
        this.blur()
      })
    })
  };
  var playVideos = function(element) {
    var currentVideos = $(element).find("video");
    $.each(currentVideos, function(index, video) {
      if($(video).attr("wasplayingonslideleave") == "true") {
        video.play()
      }else {
        if($(video).attr("wasplayingonslideleave") == "false") {
        }else {
          if(typeof $(video).attr("wasplayingonslideleave") == "undefined") {
            if($(video).attr("autoplayonslideenter") == "true") {
              video.play()
            }
          }
        }
      }
    })
  };
  var stopVideos = function(element) {
    var currentVideos = $(element).find("video");
    $.each(currentVideos, function(index, video) {
      var playing = !video.paused;
      $(video).attr("wasplayingonslideleave", playing);
      if(playing) {
        video.pause()
      }
    })
  };
  return{setVideoTagEvents:setVideoTagEvents, playVideos:playVideos, stopVideos:stopVideos}
}(VISH, jQuery);
VISH.Mods.fc = {};
VISH.Mods.fc.loader = function(V, undefined) {
  var init = function(fc) {
    var tmpVideo;
    var loaders = [];
    loaders.push(V.Utils.loader.loadImage(VISH.ImagesPath + "loading.png"));
    loaders.push(V.Utils.loader.loadImage(VISH.ImagesPath + "rounded_corners.png"));
    loaders.push(V.Utils.loader.loadImage(VISH.ImagesPath + "template1.png"));
    loaders.push(V.Utils.loader.loadImage(VISH.ImagesPath + "play.png"));
    loaders.push(V.Utils.loader.loadImage(VISH.ImagesPath + "corner.png"));
    loaders.push(V.Utils.loader.loadImage(VISH.ImagesPath + "corner_small.png"));
    loaders.push(V.Utils.loader.loadImage(VISH.ImagesPath + "corner_small_text.png"));
    loaders.push(V.Utils.loader.loadImage(VISH.ImagesPath + "filled.png"));
    loaders.push(V.Utils.loader.loadImage(VISH.ImagesPath + "closeicon.png"));
    loaders.push(V.Utils.loader.loadImage(VISH.ImagesPath + "anim.png"));
    loaders.push(V.Utils.loader.loadImage(fc.backgroundSrc));
    for(var i = 0;i < fc.pois.length;i++) {
      for(var p = 0;p < fc.pois[i].zonesContent.length;p++) {
        if(fc.pois[i].zonesContent[p].type === "image") {
          loaders.push(V.Utils.loader.loadImage(fc.pois[i].zonesContent[p].content))
        }else {
          if(fc.pois[i].zonesContent[p].type === "video") {
            tmpVideo = document.createElement("video");
            for(var j = 0;j < fc.pois[i].zonesContent[p].content.length;j++) {
              if(tmpVideo.canPlayType(fc.pois[i].zonesContent[p].content[j].mimetype)) {
                loaders.push(V.Utils.loader.loadVideo(fc.pois[i].zonesContent[p].content[j].src, i));
                break
              }
            }
          }
        }
      }
    }
    $.when.apply(null, loaders).done(function() {
    })
  };
  return{init:init}
}(VISH);
VISH.Mods.fc.player = function(V, $, undefined) {
  var INTERVAL = 10;
  var WIDTH = 800;
  var HEIGHT = 600;
  var NUMBER_OF_FRAMES = 10;
  var FRAME_WIDTH = 40;
  var FRAME_HEIGHT = 40;
  var canvas = null;
  var ctx = null;
  var flashcard = null;
  var slideId = null;
  var intervalReturn = null;
  var stylePaddingLeft = null;
  var stylePaddingTop = null;
  var styleBorderLeft = null;
  var styleBorderTop = null;
  var htmlTop = null;
  var htmlLeft = null;
  var init = function(fcElem, mySlideId) {
    var loadingImg;
    var tmpFlashcard = JSON.parse(fcElem.jsoncontent);
    flashcard = _removeNotPlayableVideos(tmpFlashcard);
    slideId = mySlideId;
    canvas = document.getElementById(fcElem.canvasid);
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    loadingImg = V.Utils.loader.getImage(VISH.ImagesPath + "loading.png");
    ctx = canvas.getContext("2d");
    ctx.drawImage(loadingImg, 0, 0);
    V.Mods.fc.template.init(ctx, slideId);
    _initGetMouseVariables();
    _initListeners();
    intervalReturn = setInterval(function() {
      update();
      draw()
    }, 1E3 / INTERVAL)
  };
  var update = function() {
    var myState;
    myState = V.SlideManager.getStatus(slideId);
    myState.poiFrameNumber = (myState.poiFrameNumber + 1) % NUMBER_OF_FRAMES;
    V.SlideManager.updateStatus(myState.id, myState)
  };
  var draw = function() {
    var poi, animX;
    var myState;
    myState = V.SlideManager.getStatus(slideId);
    ctx.drawImage(V.Utils.loader.getImage(flashcard.backgroundSrc), 0, 0, WIDTH, HEIGHT);
    ctx.drawImage(V.Utils.loader.getImage(VISH.ImagesPath + "rounded_corners.png"), 0, 0);
    for(var i = 0;i < flashcard.pois.length;i++) {
      poi = flashcard.pois[i];
      animX = myState.poiFrameNumber * FRAME_WIDTH;
      ctx.drawImage(V.Utils.loader.getImage(VISH.ImagesPath + "anim.png"), animX, 0, FRAME_WIDTH, FRAME_HEIGHT, poi.x, poi.y, FRAME_WIDTH, FRAME_HEIGHT)
    }
    if(myState.drawingPoi > 0) {
      V.Mods.fc.template.draw(flashcard.pois[myState.drawingPoi - 1])
    }
  };
  var clear = function() {
    clearInterval(intervalReturn)
  };
  var _removeNotPlayableVideos = function(fc) {
    var poi, zone;
    var tmpVideo = document.createElement("video");
    for(var i = 0;i < fc.pois.length;i++) {
      poi = fc.pois[i];
      for(var a = 0;a < poi.zonesContent.length;a++) {
        zone = poi.zonesContent[a];
        if(zone.type === "video") {
          for(var t = 0;t < zone.content.length;t++) {
            if(tmpVideo.canPlayType(zone.content[t].mimetype)) {
              zone.content = zone.content[t].src
            }
          }
        }
      }
    }
    return fc
  };
  var _initGetMouseVariables = function() {
    var html;
    if(document.defaultView && document.defaultView.getComputedStyle) {
      stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)["paddingLeft"], 10) || 0;
      stylePaddingTop = parseInt(document.defaultView.getComputedStyle(canvas, null)["paddingTop"], 10) || 0;
      styleBorderLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)["borderLeftWidth"], 10) || 0;
      styleBorderTop = parseInt(document.defaultView.getComputedStyle(canvas, null)["borderTopWidth"], 10) || 0
    }
    html = document.body.parentNode;
    htmlTop = html.offsetTop;
    htmlLeft = html.offsetLeft
  };
  var _initListeners = function() {
    var myState;
    myState = V.SlideManager.getStatus(slideId);
    canvas.addEventListener("selectstart", function(e) {
      e.preventDefault();
      return false
    }, false);
    canvas.addEventListener("click", function(e) {
      var mouse, mx, my, poi;
      mouse = _getMouse(e);
      mx = mouse.x;
      my = mouse.y;
      if(myState.drawingPoi > 0) {
        V.Mods.fc.template.update(flashcard.pois[myState.drawingPoi - 1], mx, my)
      }else {
        for(var i = 0;i < flashcard.pois.length;i++) {
          poi = flashcard.pois[i];
          if(poi.x <= mx && poi.x + FRAME_WIDTH >= mx && poi.y <= my && poi.y + FRAME_HEIGHT >= my) {
            myState.drawingPoi = poi.id;
            V.SlideManager.updateStatus(myState.id, myState)
          }
        }
      }
    })
  };
  var _getMouse = function(e) {
    var element, offsetX, offsetY, mx, my;
    element = canvas;
    offsetX = 0;
    offsetY = 0;
    if(element.offsetParent !== undefined) {
      do {
        offsetX += element.offsetLeft;
        offsetY += element.offsetTop
      }while(element = element.offsetParent)
    }
    offsetX += stylePaddingLeft + styleBorderLeft + htmlLeft;
    offsetY += stylePaddingTop + styleBorderTop + htmlTop;
    mx = e.pageX - offsetX;
    my = e.pageY - offsetY;
    return{x:mx, y:my}
  };
  return{init:init, clear:clear}
}(VISH, jQuery);
VISH.Mods.fc.template = function(V, $, undefined) {
  var TYPES = [{"x":80, "y":60, "width":642, "height":482, "closingButtonX":672, "closingButtonY":60, "closingButtonWidth":50, "closingButtonHeight":50, "image":VISH.ImagesPath + "template1.png", "zones":[{"x":130, "y":99, "width":536, "height":402, "textstyle":"italic 16px helvetica, arial, sans-serif", "textcolor":"blue", "textlinespacing":40}]}, {"x":80, "y":60, "width":642, "height":482, "closingButtonX":672, "closingButtonY":60, "closingButtonWidth":50, "closingButtonHeight":50, "image":VISH.ImagesPath + 
  "template1.png", "zones":[{"x":142, "y":99, "width":536, "height":33, "textstyle":"bold 26px Arial", "textcolor":"black", "textlinespacing":20}, {"x":132, "y":175, "width":536, "height":331, "textstyle":"16px Arial", "textcolor":"black", "textlinespacing":20}]}, {"x":80, "y":60, "width":642, "height":482, "closingButtonX":672, "closingButtonY":60, "closingButtonWidth":50, "closingButtonHeight":50, "image":VISH.ImagesPath + "template1.png", "zones":[{"x":142, "y":99, "width":536, "height":33, "textstyle":"bold 26px arial", 
  "textcolor":"black", "textlinespacing":20}, {"x":122, "y":175, "width":260, "height":331, "textstyle":"italic 9px arial", "textcolor":"black", "textlinespacing":20}, {"x":418, "y":175, "width":260, "height":331, "textstyle":"12px aria", "textcolor":"black", "textlinespacing":20}]}];
  var ctx = null;
  var slideId = null;
  var init = function(context, mySlideId) {
    ctx = context;
    slideId = mySlideId
  };
  var update = function(poi, mx, my) {
    var isInsideClosingButton, template, myState, isInsideZone, tmpVideo, zone;
    template = TYPES[poi.templateNumber];
    myState = V.SlideManager.getStatus(slideId);
    isInsideClosingButton = template.closingButtonX <= mx && template.closingButtonX + template.closingButtonWidth >= mx && template.closingButtonY <= my && template.closingButtonY + template.closingButtonHeight >= my;
    if(isInsideClosingButton) {
      myState.drawingPoi = 0;
      for(var i = 0;i < poi.zonesContent.length;i++) {
        zone = poi.zonesContent[i];
        if(zone.type === "video") {
          tmpVideo = V.Utils.loader.getVideo(zone.content);
          tmpVideo.pause()
        }
      }
    }
    for(var i = 0;i < poi.zonesContent.length;i++) {
      zone = poi.zonesContent[i];
      if(zone.type === "video") {
        isInsideZone = template.zones[i].x <= mx && template.zones[i].x + template.zones[i].width >= mx && template.zones[i].y <= my && template.zones[i].y + template.zones[i].height >= my;
        if(isInsideZone) {
          tmpVideo = V.Utils.loader.getVideo(zone.content);
          if(tmpVideo.paused) {
            tmpVideo.play()
          }else {
            tmpVideo.pause()
          }
        }
      }
    }
  };
  var draw = function(poi) {
    var zone, template;
    var tmpImg, tmpWidth, tmpHeight, tmpVideo, lines, line;
    template = TYPES[poi.templateNumber];
    ctx.drawImage(V.Utils.loader.getImage(template.image), template.x, template.y, template.width, template.height);
    ctx.drawImage(V.Utils.loader.getImage(VISH.ImagesPath + "closeicon.png"), template.closingButtonX, template.closingButtonY, 50, 50);
    for(var i = 0;i < poi.zonesContent.length;i++) {
      zone = poi.zonesContent[i];
      zoneTemplate = template.zones[i];
      switch(zone.type) {
        case "text":
          ctx.fillStyle = "rgba(122, 151, 438, .9)";
          ctx.fillRect(zoneTemplate.x, zoneTemplate.y, zoneTemplate.width, zoneTemplate.height);
          ctx.font = zoneTemplate.textstyle;
          ctx.fillStyle = zoneTemplate.textcolor;
          ctx.textBaseline = "alphabetic";
          lines = V.Utils.text.getLines(ctx, zone.content, zoneTemplate.width - 20, ctx.font);
          for(line = 0;line < lines.length;line++) {
            ctx.fillText(lines[line], zoneTemplate.x + 10, zoneTemplate.y + 25 + line * zoneTemplate.textlinespacing)
          }
          V.Utils.canvas.drawRoundedCorners(ctx, zoneTemplate.x, zoneTemplate.y, zoneTemplate.width, zoneTemplate.height, "text");
          break;
        case "image":
          tmpImg = V.Utils.loader.getImage(zone.content);
          V.Utils.canvas.drawImageWithAspectRatioAndRoundedCorners(ctx, tmpImg, zoneTemplate.x, zoneTemplate.y, zoneTemplate.width, zoneTemplate.height);
          break;
        case "video":
          tmpVideo = V.Utils.loader.getVideo(zone.content);
          V.Utils.canvas.drawImageWithAspectRatioAndRoundedCorners(ctx, tmpVideo, zoneTemplate.x, zoneTemplate.y, zoneTemplate.width, zoneTemplate.height);
          if(tmpVideo.paused) {
            ctx.drawImage(V.Utils.loader.getImage(VISH.ImagesPath + "play.png"), zoneTemplate.x + zoneTemplate.width / 2 - 128 / 2, zoneTemplate.y + zoneTemplate.height / 2 - 128 / 2, 128, 128)
          }
          break
      }
    }
  };
  return{init:init, update:update, draw:draw}
}(VISH, jQuery);

