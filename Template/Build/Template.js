"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    // transition und sounds evtl in eigene Datei auslagen
    Template.transitions = {
        lightbeam: {
            duration: 2.5,
            alpha: "Images/Transitions/lightbeam.jpg",
            edge: 0.1
        },
        bigWipe: {
            duration: 1,
            alpha: "Images/Transitions/bigWipe.png",
            edge: 0.2
        },
        noise: {
            duration: 1,
            alpha: "Images/Transitions/noise.jpg",
            edge: 0.2
        },
        wipes: {
            duration: 1,
            alpha: "Images/Transitions/wipes.png",
            edge: 0.2
        }
    };
    Template.sounds = {
        // themes
        // SFX
        afterlifeSoundBeginning: "Audio/afterlife_beginning.mp3"
    };
    Template.locations = {
        afterlife: {
            name: "Afterlife",
            background: "Images/Backgrounds/afterlife.png"
        },
        bonnysRoom: {
            name: "Bonny's Room",
            background: "Images/Backgrounds/bonnysRoom.png"
            // foreground: ""
        }
    };
    Template.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: ""
        },
        bonny: {
            name: "Bonny",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Characters/bonny.png",
                happy: "Images/Characters/bonny_happy.png",
                sleepy: "Images/Characters/bonny_sleepy.png",
                irritated: "Images/Characters/bonny_irritated.png",
                irritated2: "Images/Characters/bonny_irritated2.png",
                shocked: "Images/Characters/bonny_shocked.png",
                angry: "Images/Characters/bonny_angry.png",
                upset: "Images/Characters/bonny_upset.png",
                sad: "Images/Characters/bonny_sad.png",
                crying: "Images/Characters/bonny_crying.png"
            }
        },
        unknown: {
            name: "???",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Characters/bo.png",
                irritated: "Images/Characters/bo_irritated.png"
            }
        },
        bo: {
            name: "Bo",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Characters/bo.png",
                happy: "Images/Characters/bo_happy.png",
                irritated: "Images/Characters/bo_irritated.png",
                upset: "Images/Characters/bo_upset.png",
                frustrated: "Images/Characters/bo_frustrated.png"
            }
        }
    };
    Template.dataForSave = {
        nameProtagonist: ""
    };
    function rightToLeft() {
        return {
            start: {
                translation: Template.ƒS.positions.bottomright,
                color: Template.ƒS.Color.CSS("white", 0)
            },
            end: {
                translation: Template.ƒS.positionPercent(30, 110),
                color: Template.ƒS.Color.CSS("white", 1)
            },
            duration: 5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.rightToLeft = rightToLeft;
    function boIntro() {
        return {
            start: {
                translation: Template.ƒS.positions.bottomright,
                color: Template.ƒS.Color.CSS("white", 0)
            },
            end: {
                translation: Template.ƒS.positionPercent(70, 100),
                color: Template.ƒS.Color.CSS("white", 1)
            },
            duration: 3,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.boIntro = boIntro;
    function fade() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(30, 110),
                color: Template.ƒS.Color.CSS("white", 1)
            },
            end: {
                translation: Template.ƒS.positionPercent(30, 110),
                color: Template.ƒS.Color.CSS("white", 0)
            },
            duration: 3,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fade = fade;
    // export function rightToLeft(): ƒS.AnimationDefinition {
    //   return {
    //   start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.3) },
    //   end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
    //   duration: 1,
    //   playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    //   };
    //   }
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        // credits: "Credits",
        close: "Close"
    };
    let gameMenu;
    let menuIsOpen = true; //true entspricht Menü ist offen, false = Menü ist zu
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await Template.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await Template.ƒS.Progress.load();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
        }
    }
    //Menu shortcuts
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("close");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Template.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("Close");
        let scenes = [
            // { scene: Scene1, name: "Scene1" },
            { scene: Template.Scene2, name: "Scene2" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.text = {
        bonny: {
            scene1: {
                T0001: "...",
                T0002: "Where am I?",
                T0003: "Why is everything so bright?",
                T0004: "Hello… Is anyone here?",
                T0005: "Hello? Can you see me?",
                T0006: "What does this mean? Am I...",
                T0007_1: "That can't be true! How can it be?",
                T0007_2: "You said there must have been a mistake! So just take me back!",
                T0008: "Please... Listen...",
                T0009: "Finally, for once in my life I was happy. I found the love of my life. I can't lose him so soon. I need to see him again. I beg you...",
                T0010: "Why are you telling me all of this? How does that help me now?",
                T0011_1: "Okay, sounds good! But how do I know, which memory to choose? There are so many...",
                T0011_2: "...and I somehow feel like I forgot most of them.",
                T0012: "Alright, Bo. I trust you! I am ready."
            }
            //scene2:...
        },
        unknown: {
            scene1: {
                T0000: "...",
                T0001: "Oh yes, of course I can see you.",
                T0002: "That's what irritates me so much.",
                T0003: "I should not be able to see you.",
                T0004: "You see... I didn't expect you for at least many many years later. I am just surprised to find you here all of the sudden. By the way, I am Bo.",
                T0005: "I am you. But well, not really. I am Bo... your spirit animal. I guide you and try my best to protect you.",
                T0006: "That I still don't know. There must be a mistake... You just appeared in front of me. By the way, my name is Bo."
            }
        },
        bo: {
            scene1: {
                T0001: "...dead?",
                T0002: "Okay, please don't freak out, but you're sort of in the afterlife right now.",
                T0003_1: "That means your life has somehow come to an end... but your soul is still trapped between life and death.",
                T0003_2: "In order to get you to the other side, you have to let go of your life. Otherwise, you will be trapped in this room forever.",
                T0003_3: "Only you can make that decision.",
                T0004: "It's not that easy, I...",
                T0005: "Okay okay, just let me think for a short moment...",
                T0006: "Oh, there might actually be a small chance of this working.",
                T0007_1: "You probably heard about the myth, that you see your life flashing by when you're dying...",
                T0007_2: "...well, it's kind of true.",
                T0008: "Here in the afterlife, we can revisit our dearest memories. Watching our lives passing by from a distance. Seeing those memories can help us to find closure and get ready to let go of everything.",
                T0009: "Sometimes though we regret certain decisions we made in the past. Here you could also make different desicions to see what would have happened instead. Just like in a simulation.",
                T0010: " It would help you a lot actually! If I transfer you back in your memories, you could relive everything and find out what brought you here.",
                T0011: "If we find the mistake, you don't need to stay here any longer and I will bring you back to life.",
                T0012: "Yeah, ironically memory loss is one of the side effects of being in the afterlife.",
                T0013: "That's why you don't get to choose the memories to relive.",
                T0014_1: "Remember? I am you.",
                T0014_2: "I know you. Your wishes, your dreams, your desires... That's why I am here with you. You just have to trust me.",
                T0015: "Alright, as soon as you are in the memory, you can't communicate with me anymore. Just live your life like you would usually do.",
                T0016: "As soon as we find the mistake, I will bring you back to me.",
                T0017: "See you soon!"
            }
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene1() {
        console.log("FudgeStory Template Scene starting");
        //scene intro:
        Template.ƒS.Speech.hide();
        // ƒS.Sound.play(sounds.afterlifeSoundBeginning, 0.1, true);
        await Template.ƒS.Location.show(Template.locations.afterlife);
        await Template.ƒS.update(Template.transitions.lightbeam.duration, Template.transitions.lightbeam.alpha, Template.transitions.lightbeam.edge);
        //bonny appears:
        await Template.ƒS.Character.animate(Template.characters.bonny, Template.characters.bonny.pose.sleepy, Template.rightToLeft());
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.update();
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.irritated, Template.ƒS.positionPercent(30, 110)); //alternativ: ƒS.positions.bottomcenter 
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0001);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0002);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0003);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0004);
        await Template.ƒS.update(0.5);
        //bo appears:
        await Template.ƒS.Character.animate(Template.characters.unknown, Template.characters.unknown.pose.irritated, Template.boIntro());
        await Template.ƒS.Speech.tell(Template.characters.unknown, Template.text.unknown.scene1.T0000);
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.irritated2, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0005);
        await Template.ƒS.Speech.tell(Template.characters.unknown, Template.text.unknown.scene1.T0001);
        await Template.ƒS.Speech.tell(Template.characters.unknown, Template.text.unknown.scene1.T0002);
        await Template.ƒS.Speech.tell(Template.characters.unknown, Template.text.unknown.scene1.T0003);
        await Template.ƒS.Character.hide(Template.characters.unknown);
        await Template.ƒS.Character.show(Template.characters.unknown, Template.characters.unknown.pose.neutral, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update();
        let dialog = {
            iSayA: "Why shouldn't you see me?",
            iSayB: "Who are you?",
            iSayC: "What happened to me?"
        };
        let dialogElement = await Template.ƒS.Menu.getInput(dialog, "choicesCSSClass");
        switch (dialogElement) {
            case dialog.iSayA:
                await Template.ƒS.Speech.tell(Template.characters.unknown, Template.text.unknown.scene1.T0004);
                break;
            case dialog.iSayB:
                await Template.ƒS.Speech.tell(Template.characters.unknown, Template.text.unknown.scene1.T0005);
                break;
            case dialog.iSayC:
                await Template.ƒS.Speech.tell(Template.characters.unknown, Template.text.unknown.scene1.T0006);
                break;
        }
    }
    Template.Scene1 = Scene1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene2() {
        console.log("Scene2 starting");
        await Template.ƒS.Location.show(Template.locations.afterlife);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.irritated2, Template.ƒS.positionPercent(30, 110));
        //name change "???" to "bo":
        await Template.ƒS.Character.hide(Template.characters.unknown);
        await Template.ƒS.Character.show(Template.characters.bo, Template.characters.bo.pose.neutral, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0006);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0001);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0002);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0003_1);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0003_2);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0003_3);
        await Template.ƒS.update();
        //change emotion from bonny to angry:
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.angry, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0007_1);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0007_2);
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.bo);
        await Template.ƒS.Character.show(Template.characters.bo, Template.characters.bo.pose.upset, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0004);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.sad, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0008);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0009);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0005);
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.bo);
        await Template.ƒS.Character.show(Template.characters.bo, Template.characters.bo.pose.happy, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0006);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0007_1);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0007_2);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0008);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0009);
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.neutral, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0010);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0010);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0011);
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.shocked, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0011_1);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0011_2);
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.bo);
        await Template.ƒS.Character.show(Template.characters.bo, Template.characters.bo.pose.frustrated, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0012);
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.bo);
        await Template.ƒS.Character.show(Template.characters.bo, Template.characters.bo.pose.neutral, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0013);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0014_1);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0014_2);
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.happy, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0012);
        await Template.ƒS.Character.hide(Template.characters.bo);
        await Template.ƒS.Character.show(Template.characters.bo, Template.characters.bo.pose.happy, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0015);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0016);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0017);
        await Template.ƒS.Character.animate(Template.characters.bonny, Template.characters.bonny.pose.happy, Template.fade());
        await Template.ƒS.update();
        Template.ƒS.Speech.hide();
        Template.ƒS.Character.hideAll();
        await Template.ƒS.update();
    }
    Template.Scene2 = Scene2;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map