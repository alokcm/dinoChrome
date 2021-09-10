System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, systemEvent, SystemEvent, tween, Vec3, KeyCode, Enum, SpriteFrame, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, HURDLES, Dino;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      KeyCode = _cc.KeyCode;
      Enum = _cc.Enum;
      SpriteFrame = _cc.SpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9409710WrhGAZ9KJ1o7QTcX", "dino", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = Dino
       * DateTime = Wed Sep 08 2021 10:48:41 GMT+0530 (India Standard Time)
       * Author = alokraj0024
       * FileBasename = dino.ts
       * FileBasenameNoExtension = dino
       * URL = db://assets/scripts/dino.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      (function (HURDLES) {
        HURDLES[HURDLES["SMALL_CACTUS"] = 1] = "SMALL_CACTUS";
        HURDLES[HURDLES["MID_CACTUS"] = 2] = "MID_CACTUS";
        HURDLES[HURDLES["LARGE_CACTUS"] = 3] = "LARGE_CACTUS";
      })(HURDLES || (HURDLES = {}));

      _export("Dino", Dino = (_dec = ccclass('Dino'), _dec2 = property({
        type: Enum(HURDLES)
      }), _dec3 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Dino, _Component);

        function Dino() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "jumpTween", void 0);

          _defineProperty(_assertThisInitialized(_this), "initPos", void 0);

          _defineProperty(_assertThisInitialized(_this), "moveRoad", void 0);

          _initializerDefineProperty(_assertThisInitialized(_this), "hurdleType", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "hurdle_image", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Dino.prototype;

        _proto.moveUp = function moveUp(event) {
          switch (event.keyCode) {
            case KeyCode.SPACE:
              if (this.node.position.y == this.initPos.y) {
                this.jumpTween.start();
              }

          }
        };

        _proto.start = function start() {
          this.jumpTween = tween(this.node).by(0.5, {
            position: new Vec3(0, 290, 1)
          }, {
            easing: "smooth"
          }).delay(0.2).by(1.2, {
            position: new Vec3(0, -290, 1)
          }, {
            easing: "smooth"
          });
          this.initPos = this.node.getPosition();
        };

        _proto.onLoad = function onLoad() {
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.moveUp, this);
        };

        _proto.update = function update() {};

        return Dino;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hurdleType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hurdle_image", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dino.js.map