
import { _decorator, Component, Node, SpriteFrame, systemEvent, SystemEvent, KeyCode, Vec3, Prefab, instantiate, CCInteger, UITransform, UIComponent, UIModelComponent, Intersection2D, Label, director, Button, SystemEventType, UIOpacityComponent } from 'cc';
const { ccclass, property } = _decorator;

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
 
@ccclass('GamePlay')
export class GamePlay extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    // GENERATE A RANDOM NUMBER IN RANGE
    // Math.floor(Math.random() * (max - min + 1)) + min;

    @property(Node)
    cactus : Node = null;

    @property(Prefab)
    cactusPrefab : Prefab[] = [];

    @property(Number)
    maxNoOfObstacles = 0;

    vecX : any;
    arrayOfObstacles : any =  [];
    usedObstacles : any = [];
    initScore = 0;
    dinoBoundingBox : any;
    obsBoundingBox : any;
    time = 0;
    popTime = 150;
    birdPos : any;
   
    startTheGame()
    {
        this.node.getChildByName('restart').active = false;
        this.node.getChildByName('GameOver').getComponent(Label).string = 'Game Started';
        setTimeout( () => {
            this.node.getChildByName('GameOver').active = false;
            this.node.getChildByName('GameOver').getComponent(Label).string = 'Game Over !';
        },2500)
        this.initScore = 0;
        this.addAndMoveObstacles();
        this.schedule(this.updateScore,0.3);
        this.schedule(this.addAndMoveObstacles,0.001);
    }

    updateScore()
    {
        this.initScore+=2;
        this.node.getChildByName('currentScore').getComponent(Label).string =`${this.initScore}`;
    }

    addAndMoveObstacles(){

        this.time++;

        if(this.popTime == this.time){
            this.time = 0;
            let popped = this.arrayOfObstacles.shift();
            popped.setPosition(new Vec3(548.527,-193.655,1));
            this.usedObstacles.push(popped);
        }
        
        this.updatePosOfUsedObstacles();
    }

    updatePosOfUsedObstacles(){
            
        if(this.usedObstacles.length > 0)
        {
            this.usedObstacles.forEach(element =>
                {
                    console.log('for each called');
                    element.setPosition(new Vec3(element.getPosition().x-3,-193.655,1))
                    if(element.getPosition.x < -500)
                    {
                        element.setPosition(new Vec3(548.527,-193.655,1));
                        this.arrayOfObstacles.push(element);
                    }

                    if(Intersection2D.rectRect(
                        this.node.getChildByName('DinoStart').getComponent(UITransform)?.getBoundingBoxToWorld(),
                        element.getComponent(UITransform)?.getBoundingBoxToWorld()!
                        ) == true){
                            console.log('collsion done');
                            this.unschedule(this.addAndMoveObstacles);
                            this.unschedule(this.updateScore);
                            director.pause();
                            this.node.getChildByName('GameOver').active = true;
                            this.node.getChildByName('restart').active = true;
                        }
                });
                //this.node.getChildByName('Bird1').setPosition(new Vec3(this.birdPos.x-3,this.birdPos.y,this.birdPos.z));
        }
    }

    restartGame()
    {
        director.resume();
        console.log('button clicked');
        console.log(this.usedObstacles);
        this.usedObstacles.forEach(element => {
            element.setPosition(new Vec3(548.527,-193.655,1));
            this.arrayOfObstacles.push(element);
        });
        this.usedObstacles = [];
        console.log(this.usedObstacles);
        this.dinoBoundingBox = this.node.getChildByName('DinoStart').setPosition(new Vec3(-337.263,-200.634,1));
        this.startTheGame();
    }

    start () {
        this.vecX = this.cactus.getPosition();
        for(let i=0;i<this.maxNoOfObstacles;i++)
        {
            let j = Math.floor(Math.random() * (this.cactusPrefab.length-1 - 0 + 1)) + 0;
            
            this.arrayOfObstacles[i] = instantiate(this.cactusPrefab[j]);
            this.node.addChild(this.arrayOfObstacles[i]);
            this.arrayOfObstacles[i].setPosition(new Vec3(548.527,-193.655,1));
        }

        this.dinoBoundingBox = this.node.getChildByName('DinoStart').getComponent(UITransform).getBoundingBoxToWorld();
        this.birdPos = this.node.getChildByName('Bird1').getPosition();
        this.startTheGame();
    }

    onLoad()
    {

    }
    // update (deltaTime: number) {
    //     // [4]
    // }
}

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
