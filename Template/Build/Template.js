"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.dataForSave = {
        pickedChoice: false,
        progressBar: 0,
        pickedMeterScene: false,
        class: "",
        accidentScene: 0
    };
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
            // { scene: Test, name: "test"},
            // { scene: Scene1_1, name: "Scene1_1" },
            // { scene: Scene1_2, name: "Scene1_2" },
            // { scene: Scene2, name: "Scene2"},
            // { scene: Scene3_1, name: "Scene3_1"},
            // { scene: Scene3_2, name: "Scene3_2"},
            // { scene: Scene3_3, name: "Scene3_3"},
            { scene: Template.Scene4_1, name: "Scene4" }
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
    function introLeftBorder() {
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
    Template.introLeftBorder = introLeftBorder;
    function outroLeftBorder() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(30, 100)
            },
            end: {
                translation: Template.ƒS.positionPercent(-30, 100)
            },
            duration: 3,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.outroLeftBorder = outroLeftBorder;
    function outroRightBorder() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(70, 100)
            },
            end: {
                translation: Template.ƒS.positionPercent(110, 100)
            },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.outroRightBorder = outroRightBorder;
    function leftToRightBorder() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(30, 100)
            },
            end: {
                translation: Template.ƒS.positionPercent(110, 100)
            },
            duration: 3,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.leftToRightBorder = leftToRightBorder;
    function outroRightToLeftBorder() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(70, 100)
            },
            end: {
                translation: Template.ƒS.positionPercent(-30, 100)
            },
            duration: 3,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.outroRightToLeftBorder = outroRightToLeftBorder;
    function bumpingAnimationBonny() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(30, 100)
            },
            end: {
                translation: Template.ƒS.positionPercent(70, 100)
            },
            duration: 1.5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.bumpingAnimationBonny = bumpingAnimationBonny;
    function bumpingAnimationNat() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(110, 100)
            },
            end: {
                translation: Template.ƒS.positionPercent(30, 100)
            },
            duration: 1.5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.bumpingAnimationNat = bumpingAnimationNat;
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
        narrator: {
            name: "narrator"
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
                T0024: "How am I supposed to find the mistake, when I don't know if I am making the right decisions?",
                T0025: "Okay nevermind... I should get back home now and prepare myself for the evening with Nat."
            },
            scene3_3: {
                T0001: "Ugh shoot, I forgot to bring an umbrella!",
                T0002: "I hate the rain!",
                T0003: "I should hurry to get inside!",
                T0004: "Just quickly cross the street...",
                T0005: "AHHH!!!"
            },
            scene4_1: {
                T0001: "*zzz* *zzz*",
                T0002: "Oh, is it the next day already?",
                T0003: "Am I still in a memory?",
                T0004: "I think so right?",
                T0005: "Bo didn't bring me back to him. What am I supposed to do now?",
                T0006: "...",
                T0007: "<i>“Just live your life like you would usually do.”<i>",
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
                T0018: "Oh my god! This can't be true!",
                T0019: "It has to be him, right? But why would he not recognize me? ",
                T0020: "I don't remember bumping into him like that… did I miss something? ",
                T0021: "Did I do something wrong… Why would-",
                T0022: "Oh, I didn't mean to say those things out loud.",
                T0023: "Oh… yes… of course!",
                T0024: "I'm sorry. I should have watched out. ",
                T0025: "I'm just stressed because I'm to late to my class.",
                T0026: "Oh ehm... I think it's called...",
                T0027: "Oh really?! I didn't notice that.",
                T0028: "Yes! That would be great!",
                T0029: "No, it's fine! Don't worry! ",
                T0030: "I am sorry. I should've watched out…",
                T0031: "Yes! Sounds good!"
            },
            scene4_2: {
                T0001: "I'm so glad that I'm still in the memory to figure things out and spend more time with Nat.",
                T0002: "But I'm also curious to finally find the mistake that caused all of this.",
                T0003: "Maybe today I get the chance to connect better with Nat and rebuild our relationship.",
                T0004: "Maybe… as long as Bo is going to let me… I could even make him fall in love with me again.",
                T0005: "But how should I…",
                T0006: "Huh?!",
                T0007: "Oh… Hey… No… I mean yes… just a bit, but it's alright…",
                T0008: "I was just lost in my own thoughts for a moment.",
                T0009: "Yes, of course! Let's get inside.",
                T0010: "Haha, same! I didn't think that we would actually be productive.",
                T0011: "Hey listen… Do you have any plans now?",
                T0012: "Maybe we could grab something to drink and get to know each other a bit better…",
                T0013: "You have a girlfriend?!",
                T0014: "Isn't that obvious?! I'm supposed to be with you! ",
                T0015: "Shoot! I didn't mean to say that out loud again!",
                T0016: "Okay… you're right! We don't know each other… maybe we were never meant to be together! I should go know."
            },
            scene5: {
                T0001: "Huh?! What happened? Where am I?!",
                T0002: "Ouch!! Why does my leg hurt so much?",
                T0003: "Accident? Is this how I died and ended up in the afterlife?",
                T0004: "Doctor?",
                T0005: "Oh, right! I remember it… I think…",
                T0006: "Oh really?! ",
                T0007: "What did he look like? I need to thank him.",
                T0008: "Thank you for everything, Doctor! May I leave now? ",
                T0009: "Tall guy with orange hair and blue sweater… This could be everyone!",
                T0010: "I need to hurry up! I still got to find Nat as well.",
                T0011: "Oh, but wait! This could be him!",
                T0012: "Excuse me, are you the driver who brought me to the hospital?",
                T0013: "…",
                T0014: "No… it's just…",
                T0015: "I know you.",
                T0016: "We did… maybe in another life.",
                T0017: "I don't know… I'm sorry.",
                T0018: "I should go now.",
                T0019: "Oh right…",
                T0020: "I wanted to thank you for helping me…",
                T0021: "But it seems like I need to thank you for even more.",
                T0022: "Goodbye, Nathan."
            },
            scene6: {
                T0001: "Woah, he really did choose our favourite restaurant!",
                T0002: "I really think that I got a chance of turning things the right way now!",
                T0003: "Hey, no problem. Glad you made it!",
                T0004: "I was surprised that you chose this place to meet up. It has a really special meaning to me.",
                T0005: "What?! This one isn't your favourite one?",
                T0006: "If you say so…",
                T0007: "Yeah… let's go…",
                T0008: "Hey, it's quite busy in here. Let me see if I find someone to order our drinks.",
                T0009: "Well, it's your favourite drink, right?",
                T0010: "Oh, I'm sorry. ",
                T0011: "It's difficult to explain…",
                T0012: "I thought that it would be as easy as back then.",
                T0013: "But I don't even know your favourite things anymore…",
                T0014: "Forget it.",
                T0015: "Maybe this was a huge mistake.",
                T0016: "I need to go now."
            },
            scene7: {
                T0001: "I don' t understand!",
                T0002: "Why is that happening?! What am I supposed to do now? Why is Bo doing this to me?",
                T0003: "I need to get back home and rest… I feel so dizzy right now. Everything's getting blurry. I need to hurry before –"
            },
            ending: {
                T0001: "HUH?! BO?! What happened?",
                T0002: "Why did you bring me back just now? Did you find the mistake?",
                T0003: "Oh sorry… it's just… I feel so lost right now!",
                T0004: "Why can't I be with Nat?",
                T0005: "You do?!",
                T0006: "Yeah of course! But how did that make me end up like this?",
                T0007: "So, this is my fault?!",
                T0008: "Okay I see… so I couldn't really change anything about it myself?",
                T0009: "Why didn't you tell me that sooner?",
                T0010: "But- it just doesn't make sense! I didn't find out what mistake brought me here in the first place!",
                T0011: "How should I accept the afterlife if I never know what ended my life anyway!",
                T0012: "I don't know. I was shocked and angry. It somehow felt like I lost something…",
                T0013: "Well, if you want to be that dramatic… yes, maybe.",
                T0014: "But-",
                T0015: "In my past life we were happy together! So why would a heart break be the reason of me being here with you?",
                T0016: "Wait! No! I can't accept this!",
                T0017: "I won't come with you!",
                T0018: "I have so many questions.",
                T0019: "No! This can't be true!",
                T0020: "I need to get back!",
                T0021: "Bo! Please!",
                T0022: "*zzz* *zzz*",
                T0023: "Oh shoot! I overslept real bad. At least I don't have any lectures today.",
                T0024: "Man, I had the weirdest dream this night and it felt strangely real.",
                T0025: "“You need to remember, Bonny.”",
                T0026: "Only this sentence seems so vivid right now.",
                T0027: "What should I remember?",
                T0028: "Ohh, I feel like the dream focused awfully a lot on Nat.",
                T0029: "Why now all of the sudden? We broke up so long ago and never spoke again since.",
                T0030: "Wait! Is that what I needed to remember?",
                T0031: "Maybe I wanted to subconsciously confront him in my dream.",
                T0032: "But was it just a dream? I feel so different right now.",
                T0033: "My room looks different as well!",
                T0034: "Those pictures… I should take a closer look.",
                T0035: "How strange! I could swear that these weren't there yesterday.",
                T0036: "But this bunny… He feels so familiar, although I never had a pet in my life.",
                T0037: "Maybe this wasn't a random dream.",
                T0038: "OHH! Now I know what I've should have done all this time!",
                T0039: "It did hurt a lot back then, but I never told him.",
                T0040: "Nat was living his happy life, while I felt like I was already dead. ",
                T0041: "I need to tell him that, so that I can finally find the closure I deserve!",
                T0042: "I suddenly feel like this wasn't just a random dream!"
            },
            ending2: {
                T0001: "Bo? What happened?",
                T0002: "Did you find the mistake?",
                T0003: "Oh, how strange…",
                T0004: "I don't know… I just feel so lost right now!",
                T0005: "Being with Nat was everything I wanted, but now…",
                T0006: "Exactly!",
                T0007: "Seeing him was great, but I didn't feel the connection we used to have.",
                T0008: "I see.",
                T0009: "So, there isn't really a mistake that brought me here to you?",
                T0010: "But do I still need to go with you?",
                T0011: "To the other side?",
                T0012: "I wouldn't think that I'll say this, but yes! I'm ready to let go of everything.",
                T0013: "What do you mean? I thought I'll be with you when I'm on the other side!",
                T0014: "Bo?!",
                T0015: "Hello?!",
                T0016: "Don't leave me alone, Bo!",
                T0017: "“Someday we will see each other again.”",
                T0018: "But I don't remember who said it to me.",
                T0019: "And I also feel like the dream focused a lot on Nat. But why now all of the sudden? ",
                T0020: "We broke up so long ago and never spoke again since.",
                T0021: "Thinking about him feels so different right now. ",
                T0022: "Like I just got rid of all the anger and sadness inside me. As if I left my past with him behind me.",
                T0023: "Woah! My room looks different as well!",
                T0024: "Those pictures… I should take a closer look.",
                T0025: "How strange! I could swear that these weren't there yesterday.",
                T0026: "But this bunny… He feels so familiar, although I never had a pet in my life.",
                T0027: "Maybe this wasn't just a random dream."
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
        nat: {
            scene3_2: {
                T0001: "Ouch! You should watch where you're going!",
                T0002: "What? Do I know you?",
                T0003: "Hello? What are you talking about?!",
                T0004: "Yes, I am… but everyone just calls me Nat.",
                T0005: "How do you know that?! I've never met you?!",
                T0006: "Mhh okay… ",
                T0007: "Well, sorry… I don't remember you. ",
                T0008: "But must be true then!",
                T0009: "Listen, I didn't mean to be rude to you… I-",
                T0010: "Hey, how about we stop being sorry for each other and make it right by grabbing something to drink later tonight?",
                T0011: "Sure! Let me just take your phone number and I'll text you the location later, okay?",
                T0012: "'Kay, see ya!"
            },
            scene4_1: {
                T0000: "Ehm anyway...",
                T0001: "I'm Nathan… But well everyone calls me Nat, if that clears things up for you.",
                T0002: "And yes, I don't recognize you, because I don't know you.",
                T0003: "And at least you could apologize for running into me like that.",
                T0004: "Oh really? ",
                T0005: "Then you don't need to be sorry, because I'm running late to my class as well!",
                T0006: "Which class are you taking?",
                T0007: "You're kidding right?",
                T0008: "That's the one I'm supposed to have right now!",
                T0009: "But it looks like you were walking in the totally wrong direction.",
                T0010: "'Kay, before we waste any more time… How 'bout we rush over there together?",
                T0011: "Hey, was nice meeting you!",
                T0012: "I'm sorry for being rude to you earlier. I didn't want –",
                T0013: "Hey, how 'bout we'll stop being sorry for each other and just grab something to eat at the cafeteria together?"
            },
            scene4_2: {
                T0001: "Heya! How's it goin'?",
                T0002: "Oh sorry! Did I scare you?",
                T0003: "Haha 'kay! How 'bout we get startin' with our study session?",
                T0004: "Well, that was fun! I felt like I did study more today than for the last past semesters, hahah!",
                T0005: "Oh, that would sound great, but I'm actually meeting up with my girlfriend in a few minutes.",
                T0006: "Yes, why are you so surprised about it?",
                T0007: "What did you just say?! ",
                T0008: "Well, but you did! We don't even know each other!",
                T0009: "Wait! Don't run of like that!"
            },
            scene5: {
                T0001: "Oh yes, that should be me than!",
                T0002: "You really scared me back there. Hope you're doin' alright now!",
                T0003: "Heya? Did I say somethin' wrong?",
                T0004: "Really? That can't be. We never met before.",
                T0005: "What's this supposed to mean?",
                T0006: "Hey, wait! Why did you wanna come out to see me in the first place.",
                T0007: "Ey, you really like speaking in riddles. ",
                T0008: "No problem, I guess.",
                T0009: "Goodbye.",
                T0010: "Wait! Just call me Nat!",
                T0011: "Nobody calls me by my full name. Especially no strangers!",
                T0012: "How do you know it anyways?",
                T0013: "Hello? I'm talking to you?",
                T0014: "Ugh, nevermind… what a strange girl."
            },
            scene6: {
                T0001: "Heya! Sorry, I'm a bit late!",
                T0002: "Oh really? What a coincidence!",
                T0003: "Sadly, my favourite place was closed for today.",
                T0004: "No. I mean I think it's fine to grab a drink, but nothing to make a big fuzz about, right?",
                T0005: "Well… Should we get inside?",
                T0006: "Yeah, sure.",
                T0007: "Hey! You don't even know what I want to drink!",
                T0008: "Hello?! Ugh, nevermind…",
                T0009: "What did you order?",
                T0010: "Like always? How come you think I would like that?",
                T0011: "No, it's not! I hate it. ",
                T0012: "Why do you think that you already know everything about me?",
                T0013: "I don't understand. What are you talking about?",
                T0014: "Wait! Don't run of like that!"
            }
        },
        drSherp: {
            scene5: {
                T0001: "That should be the aftermath of your little accident you got caught up into.",
                T0002: "I don't understand what you mean.",
                T0003: "You seem pretty alive in my opinion... And I should approve of this the best - as your doctor.",
                T0004: "Yes, I'm Dr. Sherp. The shock may have caused some kind of memory loss. I already told you everything. But it should get better in a few hours. ",
                T0005: "You were involved in a little bike accident. Next time you should better watch out when you want to cross the street.",
                T0006: "No, unfortunately. The driver didn't stop. The police is still searching for him.",
                T0007: "Yes, luckily the driver called the ambulance and drove with them to the hospital to make sure you were alright. He should still be somewhere around the hospital.",
                T0008: "I don't see a problem with that. Just make sure that you're resting your leg as soon as you're home.",
                T0009: "He's a tall young man with orange hair and he wore a blue sweater.",
                T0010: "Yes, of course. I think you're fine to leave the hospital."
            }
        },
        novelPage: {
            scene3_1: "Dear diary, <br><br> At first, I didn't know what to do today. Luckily, I found my To-Do-List. I thought, it would be the best to just stick to the tasks I would have done anyways. <br> Since I'm trusting Bo in his decisions, I will live my life as usually. But now I'm so exhausted from all the work, that I can't really search for Nat anymore. I hope that I'll still be in the memory tomorrow and get the chance of finally meeting him.",
            scene3_2: "Dear diary, <br><br> You will never guess what just happened to me! I thought it would be best to stick to my To-Do-List for the day. So, I went grocery shopping as usually and I randomly run into Nat! He didn't recognize me unfortunately, but asked me out to grab a drink later. I'm so glad that Bo lets me relive those precious moments with Nat again. I believe that everything will turn out great from now on!",
            scene4_1: "Dear diary, <br><br> Today I finally ran into Nat while speeding to school. He asked me to go to the cafeteria with him and gave me his phone number. He wants to meet up so that we could study for our class together. It's a bit strange meeting him like that, because it doesn't feel like the way we met in my past life. But in the end, I don't care – as long as Bo would let me make more of those memories."
        }
    };
})(Template || (Template = {}));
// T0001: "",
// T0002: "",
// T0003: "",
// T0004: "",
// T0005: "",
// T0006: "",
// T0007: "",
// T0008: "",
// T0009: "",
// T0010: "",
// T0011: "",
// T0012: "",
// T0013: "",
// T0014: "",
// T0015: ""
var Template;
(function (Template) {
    Template.items = {
        bar: {
            name: "Nat and me grabing a drink.",
            description: "",
            image: "Images/Memories/bar.png",
            static: true
        },
        barOutside: {
            name: "A picture of my favourite bar.",
            description: "",
            image: "Images/Memories/barOutside.png",
            static: true
        },
        classromm: {
            name: "A picture from my class room.",
            description: "",
            image: "Images/Memories/classroom.png",
            static: true
        },
        cooking: {
            name: "Cooking my favourite meal.",
            description: "",
            image: "Images/Memories/cooking.png",
            static: true
        },
        hospital: {
            name: "After the car accident",
            description: "",
            image: "Images/Memories/hospital.png",
            static: true
        },
        library: {
            name: "Nat and me studying in the library.",
            description: "",
            image: "Images/Memories/library.png",
            static: true
        },
        park: {
            name: "Meeting Nat in the park.",
            description: "",
            image: "Images/Memories/park.png",
            static: true
        },
        shopping: {
            name: "Running some erands.",
            description: "",
            image: "Images/Memories/shopping.png",
            static: true
        },
        street: {
            name: "Walking back home.",
            description: "",
            image: "Images/Memories/street.png",
            static: true
        },
        busyStreetRain: {
            name: "Walking back home.",
            description: "",
            image: "Images/Memories/streetBusy_rain.png",
            static: true
        },
        busyStreet: {
            name: "Walking back home.",
            description: "",
            image: "Images/Memories/streetBusy.png",
            static: true
        },
        study: {
            name: "Finishing an important assignment.",
            description: "",
            image: "Images/Memories/study.png",
            static: true
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
        barInside: {
            name: "bar inside",
            background: "Images/Backgrounds/barInside.png"
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
        Template.ƒS.Character.hideAll();
        await Template.ƒS.update();
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
        await Template.ƒS.Progress.delay(3); //increase time
        await Template.ƒS.Location.show(Template.locations.blackScreen);
        await Template.ƒS.update(Template.transitions.noise.duration, Template.transitions.noise.alpha, Template.transitions.noise.edge);
        await Template.ƒS.Location.show(Template.locations.supermarket);
        await Template.ƒS.update(Template.transitions.noise.duration, Template.transitions.noise.alpha, Template.transitions.noise.edge);
        // await ƒS.update();
        await Template.ƒS.Character.animate(Template.characters.bonny, Template.characters.bonny.pose.neutral, Template.introLeftBorder());
        Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_1.T0001);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_1.T0002);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Character.animate(Template.characters.bonny, Template.characters.bonny.pose.neutral, Template.leftToRightBorder());
        Template.ƒS.Character.hide(Template.characters.bonny);
        // await ƒS.update();
        await Template.ƒS.Location.show(Template.locations.cutScenes.shopping);
        await Template.ƒS.update(Template.transitions.bigWipe2.duration, Template.transitions.bigWipe2.alpha, Template.transitions.bigWipe2.edge);
        await Template.ƒS.Progress.delay(5); //increase time
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_1.T0003);
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.emptyStreet.normal);
        await Template.ƒS.update(Template.transitions.bigWipe2.duration, Template.transitions.bigWipe2.alpha, Template.transitions.bigWipe2.edge);
        await Template.ƒS.Progress.delay(3);
        await Template.ƒS.Location.show(Template.locations.blackScreen);
        await Template.ƒS.update(Template.transitions.noise.duration, Template.transitions.noise.alpha, Template.transitions.noise.edge);
        await Template.ƒS.Location.show(Template.locations.bonnysRoom);
        await Template.ƒS.update(Template.transitions.noise.duration, Template.transitions.noise.alpha, Template.transitions.noise.edge);
        await Template.ƒS.Progress.delay(2);
        await Template.ƒS.Text.print(Template.text.novelPage.scene3_1);
        //return Scene4_1();
    }
    Template.Scene3_1 = Scene3_1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene3_2() {
        console.log("Scene3_2 starting");
        Template.dataForSave.progressBar += 8.333;
        Template.ƒS.Speech.hide();
        // ƒS.Sound.play(sounds.afterlifeSoundBeginning, 0.1, true);
        await Template.ƒS.Location.show(Template.locations.busyStreet.normal);
        await Template.ƒS.update(Template.transitions.bigWipe.duration, Template.transitions.bigWipe.alpha, Template.transitions.bigWipe.edge);
        await Template.ƒS.Progress.delay(3);
        await Template.ƒS.Location.show(Template.locations.blackScreen);
        await Template.ƒS.update(Template.transitions.noise.duration, Template.transitions.noise.alpha, Template.transitions.noise.edge);
        await Template.ƒS.Location.show(Template.locations.supermarket);
        await Template.ƒS.update(Template.transitions.noise.duration, Template.transitions.noise.alpha, Template.transitions.noise.edge);
        await Template.ƒS.Character.animate(Template.characters.bonny, Template.characters.bonny.pose.neutral, Template.introLeftBorder());
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_1.T0001);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_1.T0002);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0001);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0002);
        //bonny and nat bumping into each other
        Template.ƒS.Character.animate(Template.characters.bonny, Template.characters.bonny.pose.neutral, Template.bumpingAnimationBonny());
        Template.ƒS.Character.animate(Template.characters.nat, Template.characters.nat.pose.neutral, Template.bumpingAnimationNat());
        await Template.ƒS.Progress.delay(1.25);
        await Template.ƒS.Character.hide(Template.characters.nat);
        await Template.ƒS.update();
        await Template.ƒS.Character.show(Template.characters.nat, Template.characters.nat.pose.angry, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.Speech.tell(Template.characters.unknown, Template.text.nat.scene3_2.T0001);
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.frustrated, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0003);
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.nat);
        await Template.ƒS.Character.show(Template.characters.nat, Template.characters.nat.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.thinking, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0004);
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.nat);
        await Template.ƒS.Character.show(Template.characters.nat, Template.characters.nat.pose.irritated, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.Speech.tell(Template.characters.unknown, Template.text.nat.scene3_2.T0002);
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0005);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0006);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0007);
        await Template.ƒS.Speech.tell(Template.characters.unknown, Template.text.nat.scene3_2.T0003);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.frustrated, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0008);
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.flustered, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0009);
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.nat, Template.text.nat.scene3_2.T0004);
        await Template.ƒS.Speech.tell(Template.characters.nat, Template.text.nat.scene3_2.T0005);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.irritated, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0010);
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.happy, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0011);
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0012);
        Template.dataForSave.class = await Template.ƒS.Speech.getInput();
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.nat);
        await Template.ƒS.Character.show(Template.characters.nat, Template.characters.nat.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.Speech.tell(Template.characters.nat, Template.text.nat.scene3_2.T0006);
        await Template.ƒS.Speech.tell(Template.characters.nat, "Well, sorry… I don't remember you or a class called " + Template.dataForSave.class + ".");
        await Template.ƒS.Speech.tell(Template.characters.nat, Template.text.nat.scene3_2.T0008);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "...");
        await Template.ƒS.Character.hide(Template.characters.nat);
        await Template.ƒS.Character.show(Template.characters.nat, Template.characters.nat.pose.flustered, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.Speech.tell(Template.characters.nat, Template.text.nat.scene3_2.T0009);
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0013);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "...");
        await Template.ƒS.Character.hide(Template.characters.nat);
        await Template.ƒS.Character.show(Template.characters.nat, Template.characters.nat.pose.happy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.nat, Template.text.nat.scene3_2.T0010);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0014);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0015);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.irritated, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0016);
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.frustrated, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0017);
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.nat, Template.text.nat.scene3_2.T0011);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.happy, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0018);
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.nat, Template.text.nat.scene3_2.T0012);
        Template.ƒS.Character.animate(Template.characters.nat, Template.characters.nat.pose.happy, Template.outroLeftBorder());
        await Template.ƒS.Character.hide(Template.characters.nat);
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0019);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.frustrated, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0020);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0021);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0022);
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.sad, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0023);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0024);
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.neutral, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0025);
        await Template.ƒS.Character.animate(Template.characters.bonny, Template.characters.bonny.pose.neutral, Template.outroRightBorder());
        Template.ƒS.Speech.hide();
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.busyStreet.rain);
        await Template.ƒS.update(Template.transitions.bigWipe2.duration, Template.transitions.bigWipe2.alpha, Template.transitions.bigWipe2.edge);
        await Template.ƒS.Progress.delay(3); //increase time
        await Template.ƒS.Location.show(Template.locations.blackScreen);
        await Template.ƒS.update(Template.transitions.noise.duration, Template.transitions.noise.alpha, Template.transitions.noise.edge);
        await Template.ƒS.Location.show(Template.locations.bonnysRoom);
        await Template.ƒS.update(Template.transitions.noise.duration, Template.transitions.noise.alpha, Template.transitions.noise.edge);
        await Template.ƒS.Progress.delay(2);
        await Template.ƒS.Text.print(Template.text.novelPage.scene3_2);
        //return Scene6();
    }
    Template.Scene3_2 = Scene3_2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene3_3() {
        console.log("Scene3_3 starting");
        switch (Template.dataForSave.accidentScene) {
            case 0:
                break;
            case 1:
                Template.ƒS.Speech.hide();
                await Template.ƒS.Location.show(Template.locations.busyStreet.normal);
                await Template.ƒS.update(Template.transitions.bigWipe.duration, Template.transitions.bigWipe.alpha, Template.transitions.bigWipe.edge);
                await Template.ƒS.Speech.tell(Template.characters.bonny, "I just need to quickly cross the street...");
                Template.ƒS.Speech.hide();
                await Template.ƒS.Progress.delay(2);
                await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_3.T0005);
                Template.ƒS.Speech.hide();
                await Template.ƒS.Location.show(Template.locations.blackScreen);
                await Template.ƒS.update(Template.transitions.noise.duration, Template.transitions.noise.alpha, Template.transitions.noise.edge);
                await Template.ƒS.Progress.delay(3);
                return Template.Scene5();
        }
        Template.ƒS.Speech.hide();
        // ƒS.Sound.play(sounds.afterlifeSoundBeginning, 0.1, true);
        await Template.ƒS.Location.show(Template.locations.busyStreet.rain);
        await Template.ƒS.update(Template.transitions.bigWipe.duration, Template.transitions.bigWipe.alpha, Template.transitions.bigWipe.edge);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_3.T0001);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_3.T0001);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_3.T0002);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_3.T0003);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_3.T0004);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Progress.delay(2);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_3.T0005);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.blackScreen);
        await Template.ƒS.update(Template.transitions.noise.duration, Template.transitions.noise.alpha, Template.transitions.noise.edge);
        await Template.ƒS.Progress.delay(3);
        return Template.Scene5();
    }
    Template.Scene3_3 = Scene3_3;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene4_1() {
        console.log("Scene4 starting");
        Template.ƒS.Speech.hide();
        // ƒS.Sound.play(sounds.afterlifeSoundBeginning, 0.1, true);
        await Template.ƒS.Location.show(Template.locations.bonnysRoom);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.sleepy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(Template.transitions.lightbeam.duration, Template.transitions.lightbeam.alpha, Template.transitions.lightbeam.edge);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0001);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0002);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0003);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0004);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0005);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0006);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0007);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0008);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Progress.delay(1.5);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.irritated, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0010);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0011);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0012);
        await Template.ƒS.update();
        let transportChoice = {
            runToSchool: "run to school",
            takeTheBike: "take the bike"
        };
        let choiceElement = await Template.ƒS.Menu.getInput(transportChoice, "choices");
        switch (choiceElement) {
            case transportChoice.runToSchool:
                await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0013);
                break;
            case transportChoice.takeTheBike:
                await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0014);
                await Template.ƒS.Character.hide(Template.characters.bonny);
                Template.ƒS.Speech.hide();
                Template.ƒS.update(2);
                Template.dataForSave.accidentScene += 1;
                return Template.Scene3_3();
        }
        await Template.ƒS.Character.hide(Template.characters.bonny);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.sidewalk);
        await Template.ƒS.update(Template.transitions.bigWipe.duration, Template.transitions.bigWipe.alpha, Template.transitions.bigWipe.edge);
        await Template.ƒS.Character.animate(Template.characters.bonny, Template.characters.bonny.pose.neutral, Template.introLeftBorder());
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0015);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0016);
        Template.ƒS.Character.animate(Template.characters.bonny, Template.characters.bonny.pose.neutral, Template.bumpingAnimationBonny());
        Template.ƒS.Character.animate(Template.characters.nat, Template.characters.nat.pose.neutral, Template.bumpingAnimationNat());
        await Template.ƒS.Progress.delay(1.25);
        await Template.ƒS.Character.hide(Template.characters.nat);
        await Template.ƒS.Character.show(Template.characters.nat, Template.characters.nat.pose.angry, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.unknown, Template.text.nat.scene3_2.T0001);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.frustrated, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene3_2.T0003);
        await Template.ƒS.Character.hide(Template.characters.nat);
        await Template.ƒS.Character.show(Template.characters.nat, Template.characters.nat.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.thinking, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0018);
        await Template.ƒS.Character.hide(Template.characters.nat);
        await Template.ƒS.Character.show(Template.characters.nat, Template.characters.nat.pose.irritated, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.unknown, "What do you mean?");
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0019);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0020);
        await Template.ƒS.Speech.tell(Template.characters.unknown, "Hello?! What are you talking about?!");
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0022);
        await Template.ƒS.Character.hide(Template.characters.nat);
        await Template.ƒS.Character.show(Template.characters.nat, Template.characters.nat.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.unknown, Template.text.nat.scene4_1.T0000);
        await Template.ƒS.Speech.tell(Template.characters.nat, Template.text.nat.scene4_1.T0001);
        await Template.ƒS.Speech.tell(Template.characters.nat, Template.text.nat.scene4_1.T0002);
        await Template.ƒS.Speech.tell(Template.characters.nat, Template.text.nat.scene4_1.T0003);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.neutral, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0023);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0024);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0025);
        await Template.ƒS.Speech.tell(Template.characters.nat, Template.text.nat.scene4_1.T0004);
        await Template.ƒS.Character.hide(Template.characters.nat);
        await Template.ƒS.Character.show(Template.characters.nat, Template.characters.nat.pose.laughing, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.nat, Template.text.nat.scene4_1.T0005);
        await Template.ƒS.Speech.tell(Template.characters.nat, Template.text.nat.scene4_1.T0006);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.irritated, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0026);
        Template.dataForSave.class = await Template.ƒS.Speech.getInput();
        await Template.ƒS.Character.hide(Template.characters.nat);
        await Template.ƒS.Character.show(Template.characters.nat, Template.characters.nat.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.nat, Template.text.nat.scene4_1.T0007);
        await Template.ƒS.Character.hide(Template.characters.nat);
        await Template.ƒS.Character.show(Template.characters.nat, Template.characters.nat.pose.laughing, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.nat, "I'm supposed to be in" + Template.dataForSave.class + " right now!");
        await Template.ƒS.Speech.tell(Template.characters.nat, Template.text.nat.scene4_1.T0009);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0027);
        await Template.ƒS.Speech.tell(Template.characters.nat, Template.text.nat.scene4_1.T0010);
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.happy, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0028);
        Template.ƒS.Speech.hide();
        Template.ƒS.Character.hideAll();
        await Template.ƒS.update();
        Template.ƒS.Character.animate(Template.characters.nat, Template.characters.nat.pose.happy, Template.outroLeftBorder());
        Template.ƒS.Character.animate(Template.characters.bonny, Template.characters.bonny.pose.happy, Template.outroRightToLeftBorder());
        Template.ƒS.Character.hideAll();
        await Template.ƒS.Progress.delay(4);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.cutScenes.class);
        await Template.ƒS.update(Template.transitions.bigWipe2.duration, Template.transitions.bigWipe2.alpha, Template.transitions.bigWipe2.edge);
        await Template.ƒS.Progress.delay(2); //increase time
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.blackScreen);
        await Template.ƒS.update(Template.transitions.noise.duration, Template.transitions.noise.alpha, Template.transitions.noise.edge);
        await Template.ƒS.Location.show(Template.locations.school);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.happy, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.Character.show(Template.characters.nat, Template.characters.nat.pose.happy, Template.ƒS.positionPercent(25, 100));
        await Template.ƒS.update(Template.transitions.noise.duration, Template.transitions.noise.alpha, Template.transitions.noise.edge);
        await Template.ƒS.Speech.tell(Template.characters.nat, Template.text.nat.scene4_1.T0011);
        await Template.ƒS.Speech.tell(Template.characters.nat, Template.text.nat.scene4_1.T0012);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0029);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0030);
        await Template.ƒS.Speech.tell(Template.characters.nat, Template.text.nat.scene4_1.T0013);
        await Template.ƒS.Speech.tell(Template.characters.bonny, Template.text.bonny.scene4_1.T0031);
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.blackScreen);
        Template.ƒS.Character.hideAll();
        await Template.ƒS.update(Template.transitions.noise.duration, Template.transitions.noise.alpha, Template.transitions.noise.edge);
        await Template.ƒS.Location.show(Template.locations.bonnysRoom);
        await Template.ƒS.update(Template.transitions.noise.duration, Template.transitions.noise.alpha, Template.transitions.noise.edge);
        await Template.ƒS.Progress.delay(3);
        await Template.ƒS.Text.print(Template.text.novelPage.scene4_1);
        //return Scene4_2();
    }
    Template.Scene4_1 = Scene4_1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene5() {
        console.log("Scene5 starting");
        Template.ƒS.Speech.hide();
        // ƒS.Sound.play(sounds.afterlifeSoundBeginning, 0.1, true);
        await Template.ƒS.Location.show(Template.locations.bonnysRoom);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.sleepy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(Template.transitions.lightbeam.duration, Template.transitions.lightbeam.alpha, Template.transitions.lightbeam.edge);
    }
    Template.Scene5 = Scene5;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Test() {
        console.log("Scene3_2 starting");
        // ƒS.Inventory.add(items.bar);
        // await ƒS.Inventory.open();
        // ƒS.update();
        // dataForSave.Protagonist.name = await ƒS.Speech.getInput();
        // console.log(dataForSave.Protagonist.name);
        // await ƒS.Speech.tell(characters.Doctor, "Hallo, " + dataForSave.Protagonist.name + ".");
        await Template.ƒS.Location.show(Template.locations.bar);
        await Template.ƒS.Character.show(Template.characters.bonny, Template.characters.bonny.pose.happy, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update();
        // await ƒS.Character.animate(characters.bonny, characters.bonny.pose.neutral, rightFrame());
        // await ƒS.Speech.tell(characters.unknown, text.bonny.scene3_1.T0001);
        // ƒS.Speech.clear();
        // ƒS.Speech.hide(); 
        // await ƒS.update(5);
        // await ƒS.Progress.delay(6); //increase time
        await Template.ƒS.Character.hide(Template.characters.bonny);
        await Template.ƒS.Location.show(Template.locations.busyStreet.rain);
        await Template.ƒS.update(Template.transitions.bigWipe2.duration, Template.transitions.bigWipe2.alpha, Template.transitions.bigWipe2.edge);
        await Template.ƒS.update(0);
        await Template.ƒS.Progress.delay(5); //increase time
        await Template.ƒS.Location.show(Template.locations.blackScreen);
        await Template.ƒS.update(Template.transitions.noise.duration, Template.transitions.noise.alpha, Template.transitions.noise.edge);
        await Template.ƒS.Location.show(Template.locations.bonnysRoom);
        await Template.ƒS.update(Template.transitions.noise.duration, Template.transitions.noise.alpha, Template.transitions.noise.edge);
        // await ƒS.update();
        // await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_1.T0002);
        // await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0001);
        // await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0002);
        // await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0003);
        // await ƒS.Text.print(text.bonny.scene3_2.T0026);
    }
    Template.Test = Test;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map