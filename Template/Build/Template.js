"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.dataForSave = {
        // nameProtagonist: "",
        pickedChoice: false,
        progressBar: 0,
        pickedMeterScene: false
    };
    // dataForSave.Protagonist.name = await ƒS.Speech.getInput();
    // console.log(dataForSave.Protagonist.name);
    // await ƒS.Speech.tell(characters.Doctor, "Hallo, " + dataForSave.Protagonist.name + ".");
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        credits: "Credits",
        close: "Close"
    };
    let gameMenu;
    let menuIsOpen = true; //true entspricht Menü ist offen, false = Menü ist zu
    function credits() {
        Template.ƒS.Text.print("");
    }
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
            case inGameMenuButtons.credits:
                credits();
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
            case Template.ƒ.KEYBOARD_CODE.I:
                await Template.ƒS.Inventory.open();
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Template.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenu");
        buttonFunctionalities("Close");
        let scenes = [
            // { scene: Scene1_1, name: "Scene1_1" },
            // { scene: Scene1_2, name: "Scene1_2" },
            // { scene: Scene2, name: "Scene2"},
            { scene: Template.Scene3_1, name: "Scene3_1" }
            // { scene: Scene3_2, name: "Scene3_2"},
            // { scene: Scene3_3, name: "Scene3_3"}
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    function bonnyIntro() {
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
    Template.bonnyIntro = bonnyIntro;
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
    function leftToRight() {
        return {
            start: {
                translation: Template.ƒS.positions.bottomleft
            },
            end: {
                translation: Template.ƒS.positionPercent(30, 100)
            },
            duration: 3,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.leftToRight = leftToRight;
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
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.characters = {
        unknown: {
            name: "???"
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
                crying: "Images/Characters/bonny_crying.png",
                flustered: "Images/Characters/bonny_flustered.png",
                frustrated: "Images/Characters/bonny_frustrated.png",
                thinking: "Images/Characters/bonny_thinking.png"
            }
        },
        // unknownBo: {
        //   name: "???",
        //   origin: ƒS.ORIGIN.BOTTOMCENTER,
        //   pose: {
        //     neutral: "Images/Characters/bo.png",
        //     irritated: "Images/Characters/bo_irritated.png"
        //   }
        // },
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
        },
        unknownNat: {
            name: "???",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Images/Characters/nat_angry.png",
                irritated: "Images/Characters/nat_irritated.png"
            }
        },
        nat: {
            name: "Nat",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Characters/nat.png",
                angry: "Images/Characters/nat_angry.png",
                flustered: "Images/Characters/nat_flustered.png",
                happy: "Images/Characters/nat_happy.png",
                irritated: "Images/Characters/nat_irritated.png",
                laughing: "Images/Characters/nat_laughing.png",
                smiling: "Images/Characters/nat_smiling.png"
            }
        }
    };
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
                T0008: "Oh my god! Nat!",
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
                T0026: "Mhh.. that was delicious. I needed that really badly right now."
            },
            scene3_1: {
                T0001: "Alright! I guess I'll just grab those few things on my shopping list and return back home then.",
                T0002: "I still don't understand how this would help me now though.",
                T0003: "Okay, I bought everything I needed. Time to get back home."
            },
            scene3_2: {
                T0001: "Those things won't matter anyway, if I don't find Nat soon.",
                T0002: "I feel like I am running out of time. I should hurry!",
                T0003: "I'm sorry. I didn't see you there...",
                T0004: "Oh my god! Is that you?",
                T0005: "It has to be, right? But why would he not recognize me?",
                T0006: "I don't remember bumping into him like that in the past... did I miss something?",
                T0007: "Did I do something wrong... Why would-",
                T0008: "Oh, I didn't mean to say those things out loud.",
                T0009: "Anyway... you are Nathan, right?",
                T0010: "Oh... mhh... ehh...",
                T0011: "Ah right! I know you from university!",
                T0012: "We're both in this one class! It's called...",
                T0013: "No! Don't worry! I am sorry. I should've watched out...",
                T0014: "Yes! Sounds good, I would love that!",
                T0015: "We could go to our favourite place and-",
                T0016: "Oh wait! You don't remember anyway...",
                T0017: "I'm sorry... how about you choose a place where we could go to?",
                T0018: "Yes sure!",
                T0019: "See you!",
                T0020: "Alright, that was nice... but also weird!",
                T0021: "How come that he doesn't know me?! Is that a memory from the time before we were friends?",
                T0022: "Maybe... from the time when I first moved to this city?",
                T0023: "Ugh, I hate that I don't remember my past!",
                T0024: "How am I supposed to find the mistake, when I don't know if I am doing the right things here either?",
                T0025: "Okay, I should get back home now and prepare myself for the evening with Nat.",
                T0026: "As she arrived back home, Bonny tossed her new bought groceries into the kitchen and started to get ready for the evening. Nat did message her the location and it was in fact the place they both used to visit a lot together. Bonny started to feel like Bo only had good intentions in mind, by letting her relive these precious moments again."
            },
            scene3_3: {
                T0001: "Ugh shoot, I forgot to bring an umbrella!",
                T0002: "I hate the rain!",
                T0003: "I should hurry to get inside!",
                T0004: "Just quickly across the street...",
                T0005: "AHHH!!!"
            },
            scene4: {
                T0001: "*zzz* *zzz*",
                T0002: "Oh, is it the next day already?",
                T0003: "Am I still in a memory?",
                T0004: "I think so right?",
                T0005: "Bo didn't bring me back to him. What am I supposed to do now?",
                T0006: "...",
                T0007: "“Living my life as I would usually do.”",
                T0008: "That means I have to go to school, right?",
                T0009: "...",
                T0010: "Oh my god! I have to go to school!",
                T0011: "I'm already late!",
                T0012: "I'm just grabbing everything I need and then I gotta...",
                T0013: "Alright, since school isn't so far away, I'll just run over there.",
                T0014: "I don't want to waste any more time. I'll grab the bike and drive to school real quick!",
                T0015: "Oh shoot! The first half of the lecture is already over!",
                T0016: "I need to hurry up before I-",
                T0017: "I'm sorry. I didn't see you there… ",
                T0018: "Oh my god! Is that you?",
                T0019: "It has to be, right? But why would he not recognize me? ",
                T0020: "I don't remember bumping into him like that… did I miss something? ",
                T0021: "Did I do something wrong… Why would-",
                T0022: "Oh, I didn't mean to say those things out loud.",
                T0023: "Oh… yes… of course!",
                T0024: "I'm sorry. I should have watched out. ",
                T0025: "I'm just stressed because I'm to late to my class.",
                T0026: "Oh I think it's called...",
                T0027: "Oh really?! I didn't notice that.",
                T0028: "Yes! That would be great!"
            }
        },
        bo: {
            scene1: {
                T0000: "...",
                T0001: "Oh yes, of course I can see you.",
                T0002: "That's what irritates me so much.",
                T0003: "I should not be able to see you.",
                T0004: "You see... I didn't expect you for at least many many years later. I am just surprised to find you here all of the sudden.",
                T0005: "I am you. But well, not really. I am Bo... your spirit animal. I guide you and try my best to protect you.",
                T0006: "That I still don't know. There must be a mistake... You just appeared in front of me.",
                T0007: "...dead?",
                T0008: "Okay, please don't freak out, but you're sort of in the afterlife right now.",
                T0009: "That means your life has somehow come to an end... but your soul is still trapped between life and death.",
                T0010: "In order to get you to the other side, you have to let go of your life. Otherwise, you will be trapped in this room forever.",
                T0011: "Only you can make that decision.",
                T0012: "It's not that easy, I...",
                T0013: "Okay okay, just let me think for a short moment...",
                T0014: "Oh, there might actually be a small chance of this working.",
                T0015: "You probably heard about the myth, that you see your life flashing by when you're dying...",
                T0016: "...well, it's kind of true.",
                T0017: "Here in the afterlife, we can revisit our dearest memories. Watching our lives passing by from a distance. Seeing those memories can help us to find closure and get ready to let go of everything.",
                T0018: "Sometimes though we regret certain decisions we made in the past. Here you could also make different desicions to see what would have happened instead. Just like in a simulation.",
                T0019: " It would help you a lot actually! If I transfer you back in your memories, you could relive everything and find out what brought you here.",
                T0020: "If we find the mistake, you don't need to stay here any longer and I will bring you back to life.",
                T0021: "Yeah, ironically memory loss is one of the side effects of being in the afterlife.",
                T0022: "That's why you don't get to choose the memories to relive.",
                T0023: "Remember? I am you.",
                T0024: "I know you. Your wishes, your dreams, your desires... That's why I am here with you. You just have to trust me.",
                T0025: "Alright, as soon as you are in the memory, you can't communicate with me anymore. Just live your life like you would usually do.",
                T0026: "As soon as we find the mistake, I will bring you back to me.",
                T0027: "See you soon!"
            }
        },
        unknownNat: {
            scene3_1: {
                T0001: "Ouch! You should watch where you're going!",
                T0002: "What? Do I know you?",
                T0003: "Hello? What are you talking about?!"
            }
        },
        nat: {
            scene3_1: {
                T0001: "Yes, I am… but everyone just calls me Nat.",
                T0002: "How do you know that?! I've never met you?!",
                T0003: "Mhh okay… ",
                T0004: "Well, sorry… I don't remember you. ",
                T0005: "But must be true than!",
                T0006: "Listen, I didn't mean to be rude to you… I-",
                T0007: "Hey, how 'bout we're not being sorry for each other and make it right by grabbing something to drink later in the evening?",
                T0008: "Sure! Let me just take your phone number and I'll text you the location later, okay?",
                T0009: "'Kay, see ya!"
            },
            scene4: {
                T0001: "I'm Nathan… But well everyone calls me Nat, if that clears things up for you.",
                T0002: "And yes, I don't recognize you, because I don't know you.",
                T0003: "And at least you could apologize for running into me like that.",
                T0004: "Oh really? ",
                T0005: "Then you don't need to be sorry, because I'm running late to my class as well!",
                T0006: "Which class are you taking?",
                T0007: "You're kidding right?",
                T0008: "That's the one I'm supposed to have right now!",
                T0009: "But it looks like you were walking in the totally wrong direction.",
                T0010: "'Kay, before we waste any more time… How 'bout we rush over there together?"
            }
        },
        novelPage: {
            scene3_1: "Dear diary, <br><br> At first, I didn't know what to do today. Luckily, I found my To-Do-List. I thought, it would be the best to just stick to the tasks I would have done anyways. <br> Since I'm trusting Bo in his decisions, I will live my life as usually. But now I'm so exhausted from all the work, that I can't really search for Nat anymore. I hope that I'll still be in the memory tomorrow and get the chance of finally meeting him."
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.locations = {
        blackScreen: {
            name: "Black Screen",
            background: "Images/Backgrounds/blackScreen.png"
        },
        afterlife: {
            name: "Afterlife",
            background: "Images/Backgrounds/afterlife.png"
        },
        bonnysRoom: {
            name: "Bonny's Room",
            background: "Images/Backgrounds/bonnysRoom.png"
        },
        toDoList: {
            empty: {
                name: "To-Do-List",
                background: "Images/Backgrounds/toDoList_empty.png"
            },
            projectCheck: {
                name: "Project Check",
                background: "Images/Backgrounds/toDoList_project.png"
            },
            cookingCheck: {
                name: "To-Do-List Cooking Check",
                background: "Images/Backgrounds/toDoList_cooking.png"
            },
            projectAndCookingCheck: {
                name: "To-Do-List Project and Cooking Check",
                background: "Images/Backgrounds/toDoList_project+cooking.png"
            }
        },
        supermarket: {
            name: "Supermarket",
            background: "Images/Backgrounds/supermarket.png"
        },
        emptyStreet: {
            normal: {
                name: "Empty Street",
                background: "Images/Backgrounds/emptyStreet_lightsOn_cutScene.png"
            },
            rain: {
                name: "empty street with rain",
                background: "Images/Backgrounds/emptyStreet_rain.png"
            }
        },
        busyStreet: {
            normal: {
                name: "busy street",
                background: "Images/Backgrounds/busyStreet_cutScene.png"
            },
            rain: {
                name: "busy street with rain",
                background: "Images/Backgrounds/busyStreet_rain_cutScene.png"
            }
        },
        sidewalk: {
            name: "sidewalk",
            background: "Images/Backgrounds/street.png"
        },
        school: {
            name: "school",
            background: "Images/Backgrounds/school.png"
        },
        park: {
            name: "park",
            background: "Images/Backgrounds/park.png"
        },
        library: {
            name: "library",
            background: "Images/Backgrounds/library.png"
        },
        hospital: {
            name: "hospital",
            background: "Images/Backgrounds/hospital.png"
        },
        bar: {
            name: "bar",
            background: "Images/Backgrounds/bar.png"
        },
        cutScenes: {
            study: {
                name: "Study Cut-Scene",
                background: "Images/Backgrounds/study_cutScene.png"
            },
            cooking: {
                name: "Cooking Cut-Scene",
                background: "Images/Backgrounds/cooking_CutScene.png"
            },
            shopping: {
                name: "Shopping Cut-Scene",
                background: "Images/Backgrounds/shopping_cutScene.png"
            },
            class: {
                name: "class",
                background: "Images/Backgrounds/classroom_cutScene.png"
            },
            library: {
                name: "library",
                background: "Images/Backgrounds/library_cutScene.png"
            }
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.sounds = {
        // themes
        afterlifeSoundBeginning: "Audio/afterlife_beginning.mp3"
        // SFX
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
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
        bigWipe2: {
            duration: 1.5,
            alpha: "Images/Transitions/bigWipe2.png",
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
        },
        wet: {
            duration: 1.5,
            alpha: "Images/Transitions/wet.jpg",
            edge: 0.2
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
        await Template.ƒS.Character.animate(Template.characters.bonny, Template.characters.bonny.pose.sleepy, Template.bonnyIntro());
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.irritated, Template.ƒS.positionPercent(30, 110)); //alternativ: ƒS.positions.bottomcenter 
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0001);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0002);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0003);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0004);
        await Template.ƒS.update(0.5);
        //bo appears:
        await Template.ƒS.Character.animate(Template.characters.bo, Template.characters.bo.pose.irritated, Template.boIntro());
        await Template.ƒS.Speech.tell(Template.characters.unknown, Template.text.bo.scene1.T0000);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.irritated2, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0005);
        await Template.ƒS.Speech.tell(Template.characters.unknown, Template.text.bo.scene1.T0001);
        await Template.ƒS.Speech.tell(Template.characters.unknown, Template.text.bo.scene1.T0002);
        await Template.ƒS.Speech.tell(Template.characters.unknown, Template.text.bo.scene1.T0003);
        await Template.ƒS.Character.hide(Template.characters.bo);
        await Template.ƒS.Character.show(Template.characters.bo, Template.characters.bo.pose.neutral, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update();
        let questions = {
            iSayWhy: "Why shouldn't you see me?",
            iSayWho: "Who are you?",
            iSayWhat: "What happened to me?"
        };
        let pickedWhy;
        let pickedWho;
        let pickedWhat;
        do {
            if (pickedWhy && pickedWho && pickedWhat) {
                Template.dataForSave.pickedChoice = true;
                return Template.Scene1_2();
            }
            let questionsElement = await Template.ƒS.Menu.getInput(questions, "choices");
            switch (questionsElement) {
                case questions.iSayWhy:
                    pickedWhy = true;
                    await Template.ƒS.Speech.tell(Template.characters.unknown, Template.text.bo.scene1.T0004);
                    break;
                case questions.iSayWho:
                    pickedWho = true;
                    await Template.ƒS.Speech.tell(Template.characters.unknown, Template.text.bo.scene1.T0005);
                    break;
                case questions.iSayWhat:
                    pickedWhat = true;
                    await Template.ƒS.Speech.tell(Template.characters.unknown, Template.text.bo.scene1.T0006);
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
        await Template.ƒS.Character.show(Template.characters.bo, Template.characters.bo.pose.neutral, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0006);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0007);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0008);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0009);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0010);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0011);
        //change emotion from bonny to angry:
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.angry, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0007_1);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0007_2);
        await Template.ƒS.Character.hide(Template.characters.bo);
        await Template.ƒS.Character.show(Template.characters.bo, Template.characters.bo.pose.upset, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0012);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.sad, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0008);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0009);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0013);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Progress.delay(2.5);
        await Template.ƒS.Character.hide(Template.characters.bo);
        await Template.ƒS.Character.show(Template.characters.bo, Template.characters.bo.pose.happy, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0014);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0015);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0016);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0017);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0018);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.neutral, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0010);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0019);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0020);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.irritated2, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0011_1);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0011_2);
        await Template.ƒS.Character.hide(Template.characters.bo);
        await Template.ƒS.Character.show(Template.characters.bo, Template.characters.bo.pose.frustrated, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0021);
        await Template.ƒS.Character.hide(Template.characters.bo);
        await Template.ƒS.Character.show(Template.characters.bo, Template.characters.bo.pose.neutral, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0022);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0023);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0024);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.happy, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene1.T0012);
        await Template.ƒS.Character.hide(Template.characters.bo);
        await Template.ƒS.Character.show(Template.characters.bo, Template.characters.bo.pose.happy, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(0.25);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0025);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0026);
        await Template.ƒS.Speech.tell(Template.characters.bo, Template.text.bo.scene1.T0027);
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
        console.log("Scene2_1 starting");
        Template.dataForSave.progressBar += 8.333;
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
            let roomChoiceElement = await Template.ƒS.Menu.getInput(roomChoices, "choices");
            switch (roomChoiceElement) {
                case roomChoices.lookAtDesk:
                    Template.ƒS.Speech.hide();
                    await Template.ƒS.Character.hide(Template.characters.bonny);
                    await Template.ƒS.Location.show(Template.locations.toDoList.empty);
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
        //pickedChoice == true;
        let pickedErrands;
        let pickedProject;
        let pickedCooking;
        do {
            if (pickedErrands && !pickedProject && !pickedCooking) {
                Template.dataForSave.pickedChoice = false;
                return Template.Scene3_1();
            }
            else if (pickedErrands && pickedProject && !pickedCooking || pickedErrands && pickedCooking && !pickedProject) {
                Template.dataForSave.pickedChoice = false;
                return Template.Scene3_2();
            }
            else if (pickedErrands && pickedProject && pickedCooking) {
                Template.dataForSave.pickedChoice = false;
                return Template.Scene3_3();
            }
            let toDoListChoiceElements = await Template.ƒS.Menu.getInput(toDoListChoices, "choices");
            switch (toDoListChoiceElements) {
                case toDoListChoices.runErrands:
                    await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0022);
                    pickedErrands = true;
                    break;
                case toDoListChoices.finishProject:
                    await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0023);
                    Template.ƒS.Speech.hide();
                    await Template.ƒS.Location.show(Template.locations.cutScenes.study);
                    await Template.ƒS.update(Template.transitions.bigWipe.duration, Template.transitions.bigWipe.alpha, Template.transitions.bigWipe.edge);
                    await Template.ƒS.Progress.delay(5);
                    await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0024);
                    await Template.ƒS.Location.show(Template.locations.toDoList.empty);
                    await Template.ƒS.update(Template.transitions.bigWipe.duration, Template.transitions.bigWipe.alpha, Template.transitions.bigWipe.edge);
                    await Template.ƒS.Speech.tell(Template.characters.bonny, "What should I do next?");
                    pickedProject = true;
                    break;
                case toDoListChoices.cooking:
                    await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0025);
                    Template.ƒS.Speech.hide();
                    await Template.ƒS.Location.show(Template.locations.cutScenes.cooking);
                    await Template.ƒS.update(Template.transitions.bigWipe.duration, Template.transitions.bigWipe.alpha, Template.transitions.bigWipe.edge);
                    await Template.ƒS.Progress.delay(5);
                    await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene2.T0026);
                    await Template.ƒS.Location.show(Template.locations.toDoList.empty);
                    await Template.ƒS.update(Template.transitions.bigWipe.duration, Template.transitions.bigWipe.alpha, Template.transitions.bigWipe.edge);
                    await Template.ƒS.Speech.tell(Template.characters.bonny, "What else do I have to finish?");
                    pickedCooking = true;
                    break;
            }
        } while (Template.dataForSave.pickedChoice); //pickedChoices == false
    }
    Template.Scene2 = Scene2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene3_1() {
        console.log("Scene3_1 starting");
        Template.dataForSave.progressBar += 8.333;
        Template.ƒS.Speech.hide();
        // ƒS.Sound.play(sounds.afterlifeSoundBeginning, 0.1, true);
        await Template.ƒS.Location.show(Template.locations.emptyStreet.normal);
        await Template.ƒS.update(Template.transitions.bigWipe.duration, Template.transitions.bigWipe.alpha, Template.transitions.bigWipe.edge);
        await Template.ƒS.Progress.delay(1); //increase time
        await Template.ƒS.Location.show(Template.locations.blackScreen);
        await Template.ƒS.update(Template.transitions.noise.duration, Template.transitions.noise.alpha, Template.transitions.noise.edge);
        await Template.ƒS.Location.show(Template.locations.supermarket);
        await Template.ƒS.update(Template.transitions.noise.duration, Template.transitions.noise.alpha, Template.transitions.noise.edge);
        await Template.ƒS.Character.animate(Template.characters.bonny, Template.characters.bonny.pose.neutral, Template.leftToRight());
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_1.T0001);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_1.T0002);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.5);
        await Template.ƒS.Location.show(Template.locations.cutScenes.shopping);
        await Template.ƒS.update(Template.transitions.bigWipe2.duration, Template.transitions.bigWipe2.alpha, Template.transitions.bigWipe2.edge);
        await Template.ƒS.Progress.delay(2); //increase time
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_1.T0003);
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.blackScreen);
        await Template.ƒS.update(Template.transitions.noise.duration, Template.transitions.noise.alpha, Template.transitions.noise.edge);
        await Template.ƒS.Location.show(Template.locations.bonnysRoom);
        await Template.ƒS.update(Template.transitions.noise.duration, Template.transitions.noise.alpha, Template.transitions.noise.edge);
        await Template.ƒS.Progress.delay(2); //increase time
        await Template.ƒS.Text.print(Template.text.novelPage.scene3_1);
    }
    Template.Scene3_1 = Scene3_1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene3_2() {
        console.log("Scene3_2 starting");
        Template.ƒS.Speech.hide();
        // ƒS.Sound.play(sounds.afterlifeSoundBeginning, 0.1, true);
        await Template.ƒS.Location.show(Template.locations.supermarket);
        await Template.ƒS.update(Template.transitions.noise.duration, Template.transitions.noise.alpha, Template.transitions.noise.edge);
        await Template.ƒS.Character.animate(Template.characters.bonny, Template.characters.bonny.pose.neutral, Template.leftToRight());
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_1.T0001);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_1.T0002);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0001);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0002);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0003);
        await Template.ƒS.Text.print(Template.text.bonny.scene3_2.T0026);
    }
    Template.Scene3_2 = Scene3_2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene3_3() {
        console.log("Scene3_3 starting");
        Template.ƒS.Speech.hide();
        // ƒS.Sound.play(sounds.afterlifeSoundBeginning, 0.1, true);
        await Template.ƒS.Location.show(Template.locations.supermarket);
        await Template.ƒS.update(Template.transitions.noise.duration, Template.transitions.noise.alpha, Template.transitions.noise.edge);
        await Template.ƒS.Character.animate(Template.characters.bonny, Template.characters.bonny.pose.upset, Template.leftToRight());
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_3.T0001);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_3.T0002);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_3.T0003);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_3.T0004);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_3.T0005);
    }
    Template.Scene3_3 = Scene3_3;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Test() {
        console.log("Scene3_2 starting");
        await Template.ƒS.Speech.tell(Template.characters.unknown, Template.text.bonny.scene3_1.T0001);
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_1.T0002);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0001);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0002);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0003);
        await Template.ƒS.Text.print(Template.text.bonny.scene3_2.T0026);
    }
    Template.Test = Test;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map