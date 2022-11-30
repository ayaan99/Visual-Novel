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
            duration: 1.5,
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
            alpha: "Images/Transitions/wipes.jpg",
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
        },
        toDoList: {
            name: "To-Do-List",
            background: "Images/Backgrounds/toDoList_empty.png"
        },
        studyScene: {
            name: "Study Cut-Scene",
            background: "Images/Backgrounds/study_cutScene.png"
        },
        cookingScene: {
            name: "Cooking Cut-Scene",
            background: "Images/Backgrounds/cooking_CutScene.png"
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
        nameProtagonist: "",
        pickedChoice: false
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
    function fadeIn() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(30, 100),
                color: Template.ƒS.Color.CSS("white", 0)
            },
            end: {
                translation: Template.ƒS.positionPercent(30, 100),
                color: Template.ƒS.Color.CSS("white", 1)
            },
            duration: 3,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fadeIn = fadeIn;
    function fadeOut() {
        return {
            start: {
                color: Template.ƒS.Color.CSS("white", 1)
            },
            end: {
                color: Template.ƒS.Color.CSS("white", 0)
            },
            duration: 3,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fadeOut = fadeOut;
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
            // { scene: Scene1_1, name: "Scene1_1" },
            // { scene: Scene1_2, name: "Scene1_2" },
            { scene: Template.Scene2, name: "Scene2" },
            { scene: Template.Scene3, name: "Scene3" }
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
            },
            scene2: {
                T0000: "...",
                T0001: "Did it work? I think so, right?",
                T0002: "I know this place! ",
                T0003: "It's my room! But how can it be just a memory?",
                T0004: "Everything feels so real right now.",
                T0005: "I wish Bo was still here to help me.",
                T0006: "How am I supposed to figure this out on my own? ",
                T0007: "Out of all the possibilities, why did I got send back to this memory?",
                T0008: "Oh my god! Leo!",
                T0009: "Of course! I have to find him!",
                T0010: "I need to tell him that I love him. That I need him.",
                T0011: "Maybe I haven't told him that as much lately and that's why I ended up in this mess.",
                T0012: "Bo said I should live my life as usually, but I slowly feel like forgetting everything from my past life.",
                T0013: "I don't know what I usually do anymore.",
                T0014: "Maybe I should look around my room for a bit to find something that helps me remember.",
                T0015: "Oh, look at this mess. I don't think that this helps me right know.",
                T0016: "But wait! My journal! I wrote up what I am supposed to do today!",
                T0017: "Mhh alright... apparently, I didn't plan so much for today.",
                T0018: "Maybe I should just work on those things for now than.",
                T0019: "Wow, memories inside of a memory... how ironic.",
                T0020: "I wish I could've gone back to one of those instead of being stuck in this room.",
                T0021: "Ugh, I don't like when the weather gets so gloomy! It looks like it will begin to rain soon.",
                T0022: "Okay, maybe getting out of my room would actually help a bit more. I should get ready to run my errands. Good thing, that I wrote a shopping list as well.",
                T0023: "This seems very important. I should get to work now!",
                T0024: "That was a lot of work! I hope it was worth it!",
                T0025: "I am really hungry right now. Good thing, that this is on the list as well!",
                T0026: "Mhh.. that was really delicious. I needed that really badly right now."
            },
            scene3_1: {
                T0001: "Alright! I guess I'll just grab those few things on my shopping list and return back home then.",
                T0002: "I still don't understand how this would help me now though.",
                T0003: "Okay, I bought everything I needed. Time to get back home.",
                T0004: "As she arrived back to her room, Bonny started ticking off the tasks of her To-Do-List. Trusting Bo in the decisions that were made, she began to work on her project for school and started cooking something delicious. After a long day of living her life as usual, she fell into bed. Exhausted from the work that she did, she forgot what brought her here in the first place. And so, she began to drift off into her dreams. Dreams of bright and happy memories - hoping that they'll last forever."
            },
            scene3_2: {
                T0001: "Those things won't matter anyway, if I don't find Leo soon.",
                T0002: "I feel like I am running out of time. I should hurry!",
                T0003: "I'm sorry. I didn't see you there...",
                T0004: "Oh my god! Is that you?",
                T0005: "It has to be, right? But why would he not recognize me?",
                T0006: "I don't remember bumping into him like that in the past... did I miss something?",
                T0007: "Did I do something wrong... Why would-",
                T0008: "Oh, I didn't mean to say those things out loud.",
                T0009: "Anyway... you are Leo, right?",
                T0010: "Oh... mhh... right!",
                T0011: "I know you from university!",
                T0012: "We take the same courses.",
                T0013: "No! Don't worry! I am sorry. I should've watched out...",
                T0014: "Yes! Sounds good, I would love that!",
                T0015: "We could go to our favourite place and-",
                T0016: "Oh wait! You don't remember anyway...",
                T0017: "I'm sorry... how about you choose a place where we could go to?",
                T0018: "Yes sure!",
                T0019: "See you!",
                T0020: "Alright, that was weird!",
                T0021: "How come that he doesn't know me?! Is that a memory from the time before we were friends?",
                T0022: "Maybe... from the time when I first moved to this city?",
                T0023: "Ugh, I hate that I don't remember my past!",
                T0024: "How am I supposed to find the mistake, when I don't know if I am doing the right things here either?",
                T0025: "Okay, I should get back home now and prepare myself for the evening with Leo.",
                T0026: "As she arrived back home, Bonny tossed her new bought groceries into the kitchen and started to get ready for the evening. Leo did message her the location and it was in fact the place they both used to visit a lot together. Bonny started to feel like Bo only had good intentions in mind, by letting her relive these precious moments with Leo again."
            },
            scene3_3: {
                T0001: "Ugh shoot, I forgot to bring an umbrella!",
                T0002: "I hate the rain!",
                T0003: "I should hurry to get inside!",
                T0004: "Just quickly across the street...",
                T0005: "AHHH!!!"
            }
        },
        unknown: {
            scene1: {
                T0000: "...",
                T0001: "Oh yes, of course I can see you.",
                T0002: "That's what irritates me so much.",
                T0003: "I should not be able to see you.",
                T0004: "You see... I didn't expect you for at least many many years later. I am just surprised to find you here all of the sudden.",
                T0005: "I am you. But well, not really. I am Bo... your spirit animal. I guide you and try my best to protect you.",
                T0006: "That I still don't know. There must be a mistake... You just appeared in front of me."
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
    async function Scene1_1() {
        console.log("FudgeStory Template Scene starting");
        //scene intro:
        Template.ƒS.Speech.hide();
        // ƒS.Sound.play(sounds.afterlifeSoundBeginning, 0.1, true);
        await Template.ƒS.Location.show(Template.locations.afterlife);
        await Template.ƒS.update(Template.transitions.lightbeam.duration, Template.transitions.lightbeam.alpha, Template.transitions.lightbeam.edge);
        //bonny appears:
        await Template.ƒS.Character.animate(Template.characters.bonny, Template.characters.bonny.pose.sleepy, Template.rightToLeft());
        await Template.ƒS.Character.hide(Template.characters.bonny);
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
        let pickedA;
        let pickedB;
        let pickedC;
        do {
            if (pickedA && pickedB && pickedC) {
                Template.dataForSave.pickedChoice = true;
                return Template.Scene1_2();
            }
            let dialogElement = await Template.ƒS.Menu.getInput(dialog, "choicesCSSClass");
            switch (dialogElement) {
                case dialog.iSayA:
                    pickedA = true;
                    await Template.ƒS.Speech.tell(Template.characters.unknown, Template.text.unknown.scene1.T0004);
                    break;
                case dialog.iSayB:
                    pickedB = true;
                    await Template.ƒS.Speech.tell(Template.characters.unknown, Template.text.unknown.scene1.T0005);
                    break;
                case dialog.iSayC:
                    pickedC = true;
                    await Template.ƒS.Speech.tell(Template.characters.unknown, Template.text.unknown.scene1.T0006);
                    break;
            }
        } while (!Template.dataForSave.pickedChoice);
    }
    Template.Scene1_1 = Scene1_1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene1_2() {
        console.log("Scene1_2 starting");
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
        //change emotion from bonny to angry:
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.angry, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0007_1);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0007_2);
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
        Template.ƒS.Speech.hide();
        await Template.ƒS.Progress.delay(2.5);
        await Template.ƒS.Character.hide(Template.characters.bo);
        await Template.ƒS.Character.show(Template.characters.bo, Template.characters.bo.pose.happy, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0006);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0007_1);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0007_2);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0008);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0009);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.neutral, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0010);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0010);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0011);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.irritated2, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0011_1);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0011_2);
        await Template.ƒS.Character.hide(Template.characters.bo);
        await Template.ƒS.Character.show(Template.characters.bo, Template.characters.bo.pose.frustrated, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0012);
        await Template.ƒS.Character.hide(Template.characters.bo);
        await Template.ƒS.Character.show(Template.characters.bo, Template.characters.bo.pose.neutral, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0013);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0014_1);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0014_2);
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
        Template.ƒS.Speech.hide();
        await Template.ƒS.Character.animate(Template.characters.bonny, Template.characters.bonny.pose.happy, Template.fadeOut());
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.animate(Template.characters.bo, Template.characters.bo.pose.happy, Template.fadeOut());
        await Template.ƒS.update();
        Template.ƒS.Character.hideAll();
        return Template.Scene2();
    }
    Template.Scene1_2 = Scene1_2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene2() {
        console.log("Scene2 starting");
        Template.ƒS.Speech.hide();
        // ƒS.Sound.play(sounds.afterlifeSoundBeginning, 0.1, true);
        await Template.ƒS.Location.show(Template.locations.bonnysRoom);
        await Template.ƒS.update(Template.transitions.lightbeam.duration, Template.transitions.lightbeam.alpha, Template.transitions.lightbeam.edge);
        await Template.ƒS.Character.animate(Template.characters.bonny, Template.characters.bonny.pose.sleepy, Template.fadeIn());
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.update();
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.irritated, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0000);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0001);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0002);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0003);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0004);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.sad, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0005);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0006);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0007);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.shocked, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0008);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0009);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0010);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0011);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.sad, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0012);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0013);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0014);
        await Template.ƒS.update();
        let roomChoices = {
            lookAtPictures: "Look at the pictures",
            lookOutWindow: "Look out the window.",
            lookAtDesk: "Look at the desk"
        };
        let pickedPics;
        let pickedWindow;
        let pickedDesk;
        do {
            if (pickedPics) {
                delete roomChoices.lookAtPictures;
            }
            else if (pickedWindow) {
                delete roomChoices.lookOutWindow;
            }
            else if (pickedDesk) {
                delete roomChoices.lookAtDesk;
            }
            let roomChoiceElement = await Template.ƒS.Menu.getInput(roomChoices, "choicesCSSClass");
            switch (roomChoiceElement) {
                case roomChoices.lookAtDesk:
                    Template.ƒS.Speech.hide();
                    await Template.ƒS.Character.hide(Template.characters.bonny);
                    await Template.ƒS.Location.show(Template.locations.toDoList);
                    await Template.ƒS.update(Template.transitions.bigWipe.duration, Template.transitions.bigWipe.alpha, Template.transitions.bigWipe.edge);
                    await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0015);
                    await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0016);
                    await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0017);
                    await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0018);
                    pickedDesk = true;
                    Template.dataForSave.pickedChoice = true;
                    break;
                case roomChoices.lookAtPictures:
                    pickedPics = true;
                    await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0019);
                    await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0020);
                    break;
                case roomChoices.lookOutWindow:
                    pickedWindow = true;
                    await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0021);
                    break;
            }
        } while (!Template.dataForSave.pickedChoice);
        let toDoListChoices = {
            runErrands: "run errands",
            finishProject: "finish school project",
            cooking: "cooking"
        };
        let toDoListChoiceElements = await Template.ƒS.Menu.getInput(toDoListChoices, "choicesCSSClass");
        switch (toDoListChoiceElements) {
            case toDoListChoices.runErrands:
                await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0022);
                return Template.Scene3();
            case toDoListChoices.finishProject:
                await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0023);
                Template.ƒS.Speech.hide();
                await Template.ƒS.Location.show(Template.locations.studyScene);
                await Template.ƒS.update(Template.transitions.bigWipe.duration, Template.transitions.bigWipe.alpha, Template.transitions.bigWipe.edge);
                await Template.ƒS.Progress.delay(7);
                await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0024);
                //return to do list
                break;
            case toDoListChoices.cooking:
                await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0025);
                Template.ƒS.Speech.hide();
                await Template.ƒS.Location.show(Template.locations.cookingScene);
                await Template.ƒS.update(Template.transitions.bigWipe.duration, Template.transitions.bigWipe.alpha, Template.transitions.bigWipe.edge);
                await Template.ƒS.Progress.delay(7);
                await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0026);
                //return to do list
                break;
        }
    }
    Template.Scene2 = Scene2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene3() {
        console.log("Scene3 starting");
        Template.ƒS.Speech.hide();
        // ƒS.Sound.play(sounds.afterlifeSoundBeginning, 0.1, true);
        await Template.ƒS.Location.show(Template.locations.toDoList);
        // await ƒS.Character.show(characters.bonny, characters.bonny.pose.neutral, ƒS.positionPercent(30, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, "test scene 3");
    }
    Template.Scene3 = Scene3;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map