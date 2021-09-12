System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, Prefab, instantiate, UITransform, Intersection2D, Label, director, Color, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, GamePlay;

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
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      UITransform = _cc.UITransform;
      Intersection2D = _cc.Intersection2D;
      Label = _cc.Label;
      director = _cc.director;
      Color = _cc.Color;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "db0a6RSnS9Jx5xd/0ljCciz", "gamePlay", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = GamePlay
       * DateTime = Wed Sep 08 2021 14:26:45 GMT+0530 (India Standard Time)
       * Author = alokraj0024
       * FileBasename = gamePlay.ts
       * FileBasenameNoExtension = gamePlay
       * URL = db://assets/scripts/gamePlay.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("GamePlay", GamePlay = (_dec = ccclass('GamePlay'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Number), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GamePlay, _Component);

        function GamePlay() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "cactus", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "cactusPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "maxNoOfObstacles", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "vecX", void 0);

          _defineProperty(_assertThisInitialized(_this), "arrayOfObstacles", []);

          _defineProperty(_assertThisInitialized(_this), "usedObstacles", []);

          _defineProperty(_assertThisInitialized(_this), "initScore", 0);

          _defineProperty(_assertThisInitialized(_this), "dinoBoundingBox", void 0);

          _defineProperty(_assertThisInitialized(_this), "obsBoundingBox", void 0);

          _defineProperty(_assertThisInitialized(_this), "time", 0);

          _defineProperty(_assertThisInitialized(_this), "popTime", 140);

          _defineProperty(_assertThisInitialized(_this), "birdPos", void 0);

          return _this;
        }

        var _proto = GamePlay.prototype;

        _proto.startTheGame = function startTheGame() {
          var _this2 = this;

          this.node.getChildByName('restart').active = false;
          this.node.getChildByName('GameOver').getComponent(Label).string = 'Game Started';
          this.node.getChildByName('GameOver').getComponent(Label).color = new Color(0, 1200);
          setTimeout(function () {
            _this2.node.getChildByName('GameOver').active = false;
            _this2.node.getChildByName('GameOver').getComponent(Label).string = 'Game Over !';
            _this2.node.getChildByName('GameOver').getComponent(Label).color = new Color(1515, 0, 0);
          }, 2500);
          this.initScore = 0;
          this.addAndMoveObstacles();
          this.schedule(this.updateScore, 0.3);
          this.schedule(this.addAndMoveObstacles, 0.001);
        };

        _proto.updateScore = function updateScore() {
          this.initScore += 2;
          this.node.getChildByName('currentScore').getComponent(Label).string = "Score : " + this.initScore;
        };

        _proto.addAndMoveObstacles = function addAndMoveObstacles() {
          this.time++;

          if (this.popTime == this.time) {
            this.time = 0;
            var popped = this.arrayOfObstacles.shift();
            popped.setPosition(new Vec3(548.527, -193.655, 1));
            this.usedObstacles.push(popped);
          }

          this.updatePosOfUsedObstacles();
        };

        _proto.updatePosOfUsedObstacles = function updatePosOfUsedObstacles() {
          var _this3 = this;

          if (this.usedObstacles.length > 0) {
            this.usedObstacles.forEach(function (element) {
              var _this3$node$getChildB, _element$getComponent;

              console.log('for each called');
              element.setPosition(new Vec3(element.getPosition().x - 4, -193.655, 1));

              if (element.getPosition().x < -500) {
                element.setPosition(new Vec3(548.527, -193.655, 1));

                _this3.arrayOfObstacles.push(element);

                console.log("test  =  " + _this3.arrayOfObstacles.length);

                _this3.usedObstacles.shift();

                console.log("anot test " + _this3.usedObstacles.length);
              }

              if (Intersection2D.rectRect((_this3$node$getChildB = _this3.node.getChildByName('DinoStart').getComponent(UITransform)) === null || _this3$node$getChildB === void 0 ? void 0 : _this3$node$getChildB.getBoundingBoxToWorld(), (_element$getComponent = element.getComponent(UITransform)) === null || _element$getComponent === void 0 ? void 0 : _element$getComponent.getBoundingBoxToWorld()) == true) {
                console.log('collsion done');

                _this3.unschedule(_this3.addAndMoveObstacles);

                _this3.unschedule(_this3.updateScore);

                director.pause();
                _this3.node.getChildByName('GameOver').active = true;
                _this3.node.getChildByName('restart').active = true;
              }
            });
          }
        };

        _proto.restartGame = function restartGame() {
          var _this4 = this;

          director.resume();
          console.log('button clicked');
          console.log(this.usedObstacles);
          this.usedObstacles.forEach(function (element) {
            element.setPosition(new Vec3(548.527, -193.655, 1));

            _this4.arrayOfObstacles.push(element);
          });
          this.usedObstacles = [];
          console.log(this.usedObstacles);
          this.dinoBoundingBox = this.node.getChildByName('DinoStart').setPosition(new Vec3(-337.263, -200.634, 1));
          this.startTheGame();
        };

        _proto.start = function start() {
          this.vecX = this.cactus.getPosition();

          for (var i = 0; i < this.maxNoOfObstacles; i++) {
            var j = Math.floor(Math.random() * (this.cactusPrefab.length - 1 - 0 + 1)) + 0;
            this.arrayOfObstacles[i] = instantiate(this.cactusPrefab[j]);
            this.node.addChild(this.arrayOfObstacles[i]);
            this.arrayOfObstacles[i].setPosition(new Vec3(548.527, -193.655, 1));
          }

          this.dinoBoundingBox = this.node.getChildByName('DinoStart').getComponent(UITransform).getBoundingBoxToWorld();
          this.birdPos = this.node.getChildByName('Bird1').getPosition();
          this.startTheGame();
        };

        _proto.onLoad = function onLoad() {} // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return GamePlay;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cactus", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cactusPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maxNoOfObstacles", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
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
//# sourceMappingURL=gamePlay.js.map