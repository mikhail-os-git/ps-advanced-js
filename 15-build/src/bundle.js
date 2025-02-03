(function () {
  'use strict';

  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }

  function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }

  function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
  }

  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }

  function _classPrivateFieldInitSpec$1(e, t, a) { _checkPrivateRedeclaration$1(e, t), t.set(e, a); }
  function _checkPrivateRedeclaration$1(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
  function _classPrivateFieldGet$1(s, a) { return s.get(_assertClassBrand$1(s, a)); }
  function _assertClassBrand$1(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
  var _tasks$1 = /*#__PURE__*/new WeakMap();
  var Task = /*#__PURE__*/function () {
    function Task() {
      var _classPrivateFieldGet2;
      _classCallCheck(this, Task);
      _classPrivateFieldInitSpec$1(this, _tasks$1, []);
      (_classPrivateFieldGet2 = _classPrivateFieldGet$1(_tasks$1, this)).push.apply(_classPrivateFieldGet2, arguments);
    }
    return _createClass(Task, [{
      key: "addTask",
      value: function addTask() {
        var _classPrivateFieldGet3;
        (_classPrivateFieldGet3 = _classPrivateFieldGet$1(_tasks$1, this)).push.apply(_classPrivateFieldGet3, arguments);
      }
    }, {
      key: "showTasks",
      value: function showTasks() {
        return _classPrivateFieldGet$1(_tasks$1, this);
      }
    }, {
      key: "run",
      value: function run() {
        if (_classPrivateFieldGet$1(_tasks$1, this).length === 0) return "No tasks available";
        var taskIndex = _classPrivateFieldGet$1(_tasks$1, this).length > 1 ? Math.floor(Math.random() * _classPrivateFieldGet$1(_tasks$1, this).length) : 0;
        return _classPrivateFieldGet$1(_tasks$1, this)[taskIndex];
      }
    }, {
      key: "deleteTask",
      value: function deleteTask(taskName) {
        if (!_classPrivateFieldGet$1(_tasks$1, this).includes(taskName)) {
          console.log('There is no task with that name in the list.');
          return;
        } else {
          _classPrivateFieldGet$1(_tasks$1, this).filter(function (task) {
            return task != taskName;
          });
          console.log("The task ".concat(taskName, " has been removed."));
        }
      }
    }]);
  }();

  function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
  function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
  function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
  function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
  function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
  var _name = /*#__PURE__*/new WeakMap();
  var _tasks = /*#__PURE__*/new WeakMap();
  var User = /*#__PURE__*/function () {
    function User(name, tasks) {
      _classCallCheck(this, User);
      _classPrivateFieldInitSpec(this, _name, void 0);
      _classPrivateFieldInitSpec(this, _tasks, void 0);
      _classPrivateFieldSet(_name, this, name);
      _classPrivateFieldSet(_tasks, this, tasks);
    }
    return _createClass(User, [{
      key: "name",
      get: function get() {
        return _classPrivateFieldGet(_name, this);
      }
    }, {
      key: "changeName",
      value: function changeName(name) {
        console.log("Name changed: from ".concat(_classPrivateFieldGet(_name, this), " to ").concat(name));
        _classPrivateFieldSet(_name, this, name);
      }
    }, {
      key: "tasks",
      value: function tasks() {
        var tasks = _classPrivateFieldGet(_tasks, this).showTasks();
        if (tasks.length > 0) {
          var _classPrivateFieldGet2;
          console.log("User ".concat(_classPrivateFieldGet(_name, this), " has the following tasks: ").concat((_classPrivateFieldGet2 = _classPrivateFieldGet(_tasks, this)) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.showTasks().join(',')));
        } else {
          console.log("User ".concat(_classPrivateFieldGet(_name, this), " has no tasks."));
        }
      }
    }, {
      key: "do",
      value: function _do() {
        var _this = this;
        var task = _classPrivateFieldGet(_tasks, this).run();
        if (task === "No tasks available") {
          console.log("User ".concat(_classPrivateFieldGet(_name, this), " has no tasks to do."));
        } else {
          console.log("User ".concat(_classPrivateFieldGet(_name, this), " is doing: ").concat(task));
          setTimeout(function () {
            _classPrivateFieldGet(_tasks, _this).deleteTask(task);
          }, 2000);
        }
      }
    }]);
  }();

  var task = new Task('coding learning', 'sport', 'pause');
  var user = new User('Mikhail', task);
  user["do"]();

})();
//# sourceMappingURL=bundle.js.map
