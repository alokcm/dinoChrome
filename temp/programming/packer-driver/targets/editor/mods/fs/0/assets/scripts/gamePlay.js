System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, Prefab, instantiate, UITransform, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, GamePlay;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "db0a6RSnS9Jx5xd/0ljCciz", "gamePlay", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("GamePlay", GamePlay = (_dec = ccclass('GamePlay'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Number), _dec(_class = (_class2 = (_temp = class GamePlay extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "cactus", _descriptor, this);

          _initializerDefineProperty(this, "cactusPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "maxNoOfObstacles", _descriptor3, this);

          _defineProperty(this, "vecX", void 0);

          _defineProperty(this, "arrayOfObstacles", []);

          _defineProperty(this, "dinoBoundingBox", void 0);

          _defineProperty(this, "obsBoundingBox", void 0);

          _defineProperty(this, "time", 0);

          _defineProperty(this, "popTime", 50);

          _defineProperty(this, "usedObstacles", []);

          _defineProperty(this, "i", -1);
        }

        // Intersection2D.rectRect(
        //     container.getComponent(UITransform)?.getBoundingBoxToWorld(),
        //     this.dragable.item.getComponent(UITransform)?.getBoundingBoxToWorld()!
        //     );

        /*moveObstacle(obs)
        {
            let i=-1;
            let a = setInterval(() => {
                obs.setPosition(new Vec3(this.vecX.x+(--i*20),this.vecX.y,this.vecX.z));
                if(obs.getPosition().x < -500)
                {
                    this.arrayOfObstacles.push(obs);
                    obs.setPosition(new Vec3(548.527,-193.655,1));
                    i=-1;
                    clearInterval(a);
                    console.log('stopped the scheduler');
                }
            },90);
        }*/
        startTheGame() {
          // let i=-1;
          this.addAndMoveObstacles();
          this.schedule(this.addAndMoveObstacles, 0.1);
        }

        addAndMoveObstacles() {
          this.time++;

          if (this.popTime == this.time) {
            this.time = 0;
            let popped = this.arrayOfObstacles.shift();
            popped.setPosition(new Vec3(548.527, -193.655, 1));
            this.usedObstacles.push(popped); // this.obsBoundingBox = popped.getComponent(UITransform).getBoundingBoxToWorld();
            // console.log(`${this.dinoBoundingBox} ${this.obsBoundingBox}`);
            //pop one obstacle from unsed and add to used ostacles.
          }

          this.updatePosOfUsedObstacles();
        }

        updatePosOfUsedObstacles() {
          //if(usedObs.length >0){
          if (this.usedObstacles.length > 0) {
            this.usedObstacles.forEach(element => {
              console.log('for each called');
              element.setPosition(new Vec3(element.getPosition().x - 10, -193.655, 1));

              if (element.getPosition.x < -500) {
                element.setPosition(new Vec3(548.527, -193.655, 1));
                this.arrayOfObstacles.push(element);
              }
            });
          } //if position is out of screen add to un used obstacles.

        }

        start() {
          this.vecX = this.cactus.getPosition();

          for (let i = 0; i < this.maxNoOfObstacles; i++) {
            let j = Math.floor(Math.random() * (this.cactusPrefab.length - 1 - 0 + 1)) + 0;
            this.arrayOfObstacles[i] = instantiate(this.cactusPrefab[j]);
            this.node.addChild(this.arrayOfObstacles[i]);
            this.arrayOfObstacles[i].setPosition(new Vec3(548.527, -193.655, 1));
          }

          this.dinoBoundingBox = this.node.getChildByName('DinoStart').getComponent(UITransform).getBoundingBoxToWorld(); //console.log(this.arrayOfObstacles);
        }

        onLoad() {
          this.node.on(Node.EventType.MOUSE_DOWN, this.startTheGame, this);
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cactus", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cactusPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maxNoOfObstacles", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
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