"use strict";
var Revived;
(function (Revived) {
    Revived.ƒ = FudgeCore;
    Revived.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Revived.dataForSave = {
        pickedChoice: false,
        progressBar: 0,
        class: "",
        accidentScene: 0,
        ending: 0
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
        Revived.ƒS.Text.print("<h2>Credits</h2>For the visual novel 'Revived' created in WiSe22/23, all visual content was drawn by myself. <br><br> Transitions by Kia <br> (https://lemmasoft.renai.us/forums/viewtopic.php?f=52&t=37628)<br><br> Music: <br> bensound.com/royalty-free-music <br> sivermansound.com <br><br> Audio: <br> zapsplat.com <br> library.prosoundeffects.com");
    }
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await Revived.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await Revived.ƒS.Progress.load();
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
            case Revived.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Revived.ƒS.Progress.save();
                break;
            case Revived.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Revived.ƒS.Progress.load();
                break;
            case Revived.ƒ.KEYBOARD_CODE.M:
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
            case Revived.ƒ.KEYBOARD_CODE.I:
                await Revived.ƒS.Inventory.open();
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Revived.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenu");
        buttonFunctionalities("Close");
        let scenes = [
            { id: "Scene1", scene: Revived.Scene1, name: "Scene1" },
            { id: "Scene2", scene: Revived.Scene2, name: "Scene2" },
            { id: "Scene3_1", scene: Revived.Scene3_1, name: "Scene3_1" },
            { id: "Scene3_2", scene: Revived.Scene3_2, name: "Scene3_2" },
            { id: "Scene3_3", scene: Revived.Scene3_3, name: "Scene3_3" },
            { id: "Scene4_1", scene: Revived.Scene4_1, name: "Scene4_1" },
            { id: "Scene4_2", scene: Revived.Scene4_2, name: "Scene4_2" },
            { id: "Scene5_1", scene: Revived.Scene5_1, name: "Scene5_1" },
            { id: "Scene5_2", scene: Revived.Scene5_2, name: "Scene5_2" },
            { id: "Scene6", scene: Revived.Scene6, name: "Scene6" },
            { id: "Scene7", scene: Revived.Scene7, name: "Scene7" },
            { id: "EndingDenial", scene: Revived.EndingDenial, name: "Ending_Denial" },
            { id: "EndingAcceptance", scene: Revived.EndingAcceptance, name: "Ending_Acceptance" },
            { id: "Credits", scene: Revived.Credits, name: "Credits", next: "stop" },
            { id: "stop", scene: Revived.stop, name: "stopTheNovel" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Revived.dataForSave = Revived.ƒS.Progress.setData(Revived.dataForSave, uiElement);
        // start the sequence
        Revived.ƒS.Progress.go(scenes);
    }
})(Revived || (Revived = {}));
var Revived;
(function (Revived) {
    function bonnyIntro() {
        return {
            start: {
                translation: Revived.ƒS.positions.bottomright,
                color: Revived.ƒS.Color.CSS("white", 0)
            },
            end: {
                translation: Revived.ƒS.positionPercent(30, 110),
                color: Revived.ƒS.Color.CSS("white", 1)
            },
            duration: 5,
            playmode: Revived.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Revived.bonnyIntro = bonnyIntro;
    function boIntro() {
        return {
            start: {
                translation: Revived.ƒS.positions.bottomright,
                color: Revived.ƒS.Color.CSS("white", 0)
            },
            end: {
                translation: Revived.ƒS.positionPercent(70, 100),
                color: Revived.ƒS.Color.CSS("white", 1)
            },
            duration: 3,
            playmode: Revived.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Revived.boIntro = boIntro;
    function introLeftBorder() {
        return {
            start: {
                translation: Revived.ƒS.positionPercent(-20, 100)
            },
            end: {
                translation: Revived.ƒS.positionPercent(30, 100)
            },
            duration: 3.5,
            playmode: Revived.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Revived.introLeftBorder = introLeftBorder;
    function outroLeftBorder() {
        return {
            start: {
                translation: Revived.ƒS.positionPercent(30, 100)
            },
            end: {
                translation: Revived.ƒS.positionPercent(-30, 100)
            },
            duration: 3,
            playmode: Revived.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Revived.outroLeftBorder = outroLeftBorder;
    function introRightBorder() {
        return {
            start: {
                translation: Revived.ƒS.positionPercent(110, 100)
            },
            end: {
                translation: Revived.ƒS.positionPercent(70, 100)
            },
            duration: 2,
            playmode: Revived.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Revived.introRightBorder = introRightBorder;
    function outroRightBorder() {
        return {
            start: {
                translation: Revived.ƒS.positionPercent(70, 100)
            },
            end: {
                translation: Revived.ƒS.positionPercent(115, 100)
            },
            duration: 2,
            playmode: Revived.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Revived.outroRightBorder = outroRightBorder;
    function leftToRightBorder() {
        return {
            start: {
                translation: Revived.ƒS.positionPercent(30, 100)
            },
            end: {
                translation: Revived.ƒS.positionPercent(110, 100)
            },
            duration: 3,
            playmode: Revived.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Revived.leftToRightBorder = leftToRightBorder;
    function outroRightToLeftBorder() {
        return {
            start: {
                translation: Revived.ƒS.positionPercent(70, 100)
            },
            end: {
                translation: Revived.ƒS.positionPercent(-30, 100)
            },
            duration: 3,
            playmode: Revived.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Revived.outroRightToLeftBorder = outroRightToLeftBorder;
    function bumpingAnimationBonny() {
        return {
            start: {
                translation: Revived.ƒS.positionPercent(30, 100)
            },
            end: {
                translation: Revived.ƒS.positionPercent(70, 100)
            },
            duration: 1.5,
            playmode: Revived.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Revived.bumpingAnimationBonny = bumpingAnimationBonny;
    function bumpingAnimationNat() {
        return {
            start: {
                translation: Revived.ƒS.positionPercent(110, 100)
            },
            end: {
                translation: Revived.ƒS.positionPercent(30, 100)
            },
            duration: 1.5,
            playmode: Revived.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Revived.bumpingAnimationNat = bumpingAnimationNat;
    function fadeIn() {
        return {
            start: {
                translation: Revived.ƒS.positionPercent(30, 100),
                color: Revived.ƒS.Color.CSS("white", 0)
            },
            end: {
                translation: Revived.ƒS.positionPercent(30, 100),
                color: Revived.ƒS.Color.CSS("white", 1)
            },
            duration: 3,
            playmode: Revived.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Revived.fadeIn = fadeIn;
    function fadeOut() {
        return {
            start: {
                color: Revived.ƒS.Color.CSS("white", 1)
            },
            end: {
                color: Revived.ƒS.Color.CSS("white", 0)
            },
            duration: 3,
            playmode: Revived.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Revived.fadeOut = fadeOut;
    async function horizontalShake() {
        let scene = document.getElementsByTagName("scene")[0];
        for (let i = 0; i < 15; i++) {
            if (i % 2 == 0) {
                scene.style.transform = `translateX(20px)`;
            }
            else {
                scene.style.transform = `translateX(-20px)`;
            }
            await new Promise(resolve => setTimeout(resolve, 60));
        }
        scene.style.transform = `translateX(0px)`;
    }
    Revived.horizontalShake = horizontalShake;
    async function verticalShake() {
        let scene = document.getElementsByTagName("scene")[0];
        for (let i = 0; i < 15; i++) {
            if (i % 2 == 0) {
                scene.style.transform = `translateY(20px)`;
            }
            else {
                scene.style.transform = `translateY(-20px)`;
            }
            await new Promise(resolve => setTimeout(resolve, 40));
        }
        scene.style.transform = `translateY(0px)`;
    }
    Revived.verticalShake = verticalShake;
})(Revived || (Revived = {}));
var Revived;
(function (Revived) {
    Revived.characters = {
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
            origin: Revived.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Characters/bonny.png",
                happy: "Images/Characters/bonny_happy.png",
                happyAnimation: "Images/Characters/bonny_happyAnimation.png",
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
        bo: {
            name: "Bo",
            origin: Revived.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Characters/bo.png",
                happy: "Images/Characters/bo_happy.png",
                happyAnimation: "Images/Characters/bo_happyAnimation.png",
                irritated: "Images/Characters/bo_irritated.png",
                upset: "Images/Characters/bo_upset.png",
                frustrated: "Images/Characters/bo_frustrated.png"
            }
        },
        drSherp: {
            name: "Dr. Sherp",
            origin: Revived.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Characters/drSherp.png"
            }
        },
        nat: {
            name: "Nat",
            origin: Revived.ƒS.ORIGIN.BOTTOMCENTER,
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
})(Revived || (Revived = {}));
var Revived;
(function (Revived) {
    Revived.text = {
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
                T0009: "Finally, for once in my life I was happy.",
                T0009_2: "I found the love of my life. ",
                T0009_3: "I can't lose him so soon. I need to see him again.",
                T0009_4: "I beg you, please...",
                T0010: "Why are you telling me all of this? How does that help me now?",
                T0011_1: "Okay, sounds good! But how do I know, which memory to choose? There are so many...",
                T0011_2: "...and I somehow feel like I forgot most of them.",
                T0012: "Alright, Bo. I trust you! I am ready.",
                T0012_2: "I am ready.",
                T0013: "See you!"
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
                T0019: "Mhh... how strange...",
                T0020: "I thought I hung up some pictures on my wall, but why is it empty now?",
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
                T0004: "Just quickly across the street...",
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
                T0003: "Maybe today I get the chance to connect with Nat and rebuild our relationship.",
                T0004: "Maybe - as long as Bo is letting me - I could even make him fall in love with me again.",
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
                T0016: "Okay… you're right! We don't know each other… maybe we were never meant to be together! ",
                T0017: "I should go know."
            },
            scene5: {
                T0000: "Huh?! What happened? ",
                T0001: "Where am I?!",
                T0002: "Ouch!! Why does my leg hurt so much?",
                T0003: "Accident? Is this how I died and ended up in the afterlife?",
                T0004: "Doctor?",
                T0005: "Oh, right! I remember it… I think…",
                T0006: "Oh really?! ",
                T0007: "What did he look like? I need to thank him.",
                T0008: "Thank you for everything, Doctor! May I leave now? ",
                T0009: "Tall guy with orange hair and blue sweater...",
                T0010: "I need to hurry up! I still got to find Nat as well.",
                T0011: "Oh, but wait! This could be him!",
                T0012: "Excuse me, are you the driver who brought me to the hospital?",
                T0013: "...",
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
                T0002: "I really think that I got a chance to turn things the right way now!",
                T0003: "Hey, no problem. Glad you made it!",
                T0004: "I was surprised that you chose this place to meet up.",
                T0005: "What?! This one isn't your favourite one?",
                T0006: "Hmm... if you say so...",
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
                T0002: "Why is that happening?!",
                T0003: "What am I supposed to do now? Why is Bo doing this to me?",
                T0004: "I need to get back home and rest…",
                T0005: "I feel so dizzy right now. Everything's getting blurry.",
                T0006: "I need to hurry before –"
            },
            ending: {
                T0001: "HUH?! BO?!",
                T0002: "Why did you bring me back already?",
                T0003: "Oh sorry… it's just… I feel so lost right now!",
                T0004: "Why can't I be with Nat?",
                T0005: "You do?!",
                T0006: "Yeah, of course! But how did that make me end up like this?",
                T0007: "So, this is my fault?!",
                T0008: "Okay, I see… so I couldn't really change anything about it myself?",
                T0009: "Why didn't you tell me that sooner?",
                T0010: "But... it just doesn't make sense! I didn't find the mistake that brought me here in the first place!",
                T0011: "How should I accept the afterlife if I never got to know what ended my life in the first place?!",
                T0012: "I don't know. I was shocked and angry.",
                T0013: "Well, if you want to be that dramatic...",
                T0014: "But-",
                T0015: "In my past life we were happy together!",
                T0015_2: "So why would a heart break be the reason of me being here with you?",
                T0016: "Wait! No! I can't accept this!",
                T0017: "I won't come with you!",
                T0018: "I have so many questions.",
                T0019: "No! This can't be true!",
                T0020: "I need to get back!",
                T0021: "Bo! Please!",
                T0022: "*zzz* *zzz*",
                T0023: "Oh shoot! I overslept real bad. At least I don't have any lectures today.",
                T0024: "Man, I had the weirdest dream this night and strangely it felt so real.",
                T0025: "<i>“You need to remember, Bonny.”<i>",
                T0026: "Only this sentence seems so clear right now.",
                T0027: "What should I remember?",
                T0028: "Ohh, I also feel like the dream focused awfully a lot on Nat.",
                T0029: "Why now all of the sudden?",
                T0029_2: "We broke up so long ago and never spoke again since.",
                T0030: "Wait! Is that what I needed to remember?",
                T0031: "Maybe I wanted to subconsciously confront him in my dream.",
                T0032: "But was it just a dream? I feel so different right now.",
                T0033: "My room looks different as well!",
                T0034: "Those pictures on my wall...",
                T0035: "How strange! I could swear that these weren't there yesterday.",
                T0036: "But this bunny… He feels so familiar, although I never had a pet in my life.",
                T0037: "But the connection towards him feels so strong...",
                T0038: "OHH! Now I know what I've should have done all this time!",
                T0039: "It did hurt a lot back then, but I never told Nat how I felt.",
                T0040: "He was living his best life, while I felt like I was already dead.",
                T0041: "I think that I should tell him that, so that I can finally find the closure I deserve!",
                T0042: "Remembering the pain... that's what the bunny wanted from me.",
                T0043: "Now, I feel like this wasn't just a random dream..."
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
                T0012: "I wouldn't think that I'll say this, but yes!",
                T0012_2: "I'm ready to let go of everything.",
                T0013: "What do you mean?",
                T0013_2: "I thought I'll be with you when I'm on the other side!",
                T0014: "Bo?!",
                T0015: "Hello?!",
                T0016: "Don't leave me alone, Bo!",
                T0017: "<i>“Someday we will see each other again.”<i>",
                T0018: "But I don't remember who said it to me.",
                T0019: "And I also feel like the dream focused a lot on Nat. But why now all of the sudden? ",
                T0020: "We broke up so long ago and never spoke again since.",
                T0021: "Thinking about him feels so different right now. ",
                T0022: "Like I just got rid of all the anger and sadness inside me.",
                T0022_2: "As if I left my past with him behind me.",
                T0023: "Woah! My room looks different as well!",
                T0024: "Those pictures on my wall...",
                T0025: "How strange! I could swear that these weren't there yesterday.",
                T0026: "But this bunny… He feels so familiar, although I never had a pet in my life.",
                T0027: "Maybe I know him from somewhere else…",
                T0028: "The comfort, that I feel right now, was what I needed for so long.",
                T0029: "Now, I somehow feel like this wasn't just a random dream…"
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
                T0017: "Here in the afterlife, we can revisit our dearest memories.",
                T0017_2: "Watching our lives passing by from a distance.",
                T0017_3: "Seeing those memories can help us to find closure and get ready to let go of everything.",
                T0018: "Sometimes though we regret certain decisions we made in the past.",
                T0018_2: "Here you could also make different desicions to see what would have happened instead.",
                T0018_3: "Just like in a simulation.",
                T0019: " It would help you a lot actually! If I transfer you back in your memories, you could relive everything and find out what brought you here.",
                T0020: "If we find the mistake, you don't need to stay here any longer and I will bring you back to life.",
                T0021: "Yeah, ironically memory loss is one of the side effects of being in the afterlife.",
                T0022: "That's why you don't get to choose the memories to relive.",
                T0023: "Remember? I am you.",
                T0024: "I know you. Your wishes, your dreams, your desires...",
                T0024_2: "That's why I am here with you. You just have to trust me.",
                T0025: "Alright, as soon as you are in the memory, you can't communicate with me anymore.",
                T0025_2: "Just live your life like you would usually do.",
                T0026: "As soon as we find the mistake, I will bring you back to me.",
                T0027: "See you soon!"
            },
            ending: {
                T0001: "Wow, take it slow! You're overflowing with questions right now!",
                T0002: "Oh, now I understand!",
                T0003: "You see, I brought you to a place where you could rewrite your story. ",
                T0004: "That means, because of your memory loss, you didn't have any other chance than listening to your gut feeling and make different decisions.",
                T0005: "Your choices – as small as they may seem – can have a huge impact on you and your environment. ",
                T0006: "Somehow your everyday decisions altered your timeline so much that you and your beloved friend never were meant to be with each other.",
                T0007: "No, I didn't say that! It's nobody's fault actually.",
                T0008: "We all make decisions that make us end up at places we could've never think about.",
                T0008_2: "In your case, Nat would also have to make certain choices so that you both could end up together.",
                T0009: "Correct!",
                T0010: "I couldn't.",
                T0011: "You needed to see that for yourself so that you could make peace with all of it and transfer into the afterlife.",
                T0012: "You're right. I think, now you deserve to know.",
                T0013: "Let me ask you a question before that.",
                T0014: "How did it make you feel, when you found out that you both weren't together when I transferred you into your memories?",
                T0015: "Mhh, just like I expected.",
                T0016: "Would you say it even felt like a part of yourself just died in that moment?",
                T0017: "You see, Bonny? The answer is right in front of you. ",
                T0018: "When we experience that kind of heart break, it may cause us to lose ourselves.",
                T0019: "We feel like we are slowly dying – unable to change anything about it.",
                T0020: "You need to remember, Bonny.",
                T0021: "I have to go now. I did everything to help you.",
                T0022: "You have to decide now if you are coming with me to the other side.",
                T0023: "No matter what you choose to do now, I'll always be with you.",
                T0024: "Never forget that I'm your spirit animal.",
                T0025: "And eventually, we will see each other again someday, Bonny."
            },
            ending2: {
                T0001: "Not exactly… ",
                T0002: "You kind of brought yourself back up here.",
                T0002_2: "And I can't quite explain how.",
                T0003: "You're not surprised by that?!",
                T0004: "Now it doesn't feel like it used to?",
                T0005: "Okay I think, now I understand.",
                T0006: "Somehow your everyday decisions altered your timeline so much that your beloved friend didn't end up being the person you wanted him to be.",
                T0007: "I already told you… it seems like you brought yourself to me.",
                T0008: "At first, I didn't see it, but now it feels like you reached out to your inner spirit to find answers.",
                T0009: "I believe so.",
                T0010: "Are you ready for it?",
                T0011: "Glad to hear that.",
                T0012: "Just close your eyes and remember…",
                T0013: "I'll always be with you, because I'm your spirit animal. ",
                T0014: "And someday, we will see each other again."
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
                T0004: "Well, that was fun! I felt like I did study more today then I ever did for the past semesters, hahah!",
                T0005: "Oh, that would be great, but I'm actually meeting up with my girlfriend in a few minutes.",
                T0006: "Yes, why are you so surprised about it?",
                T0007: "What did you just say?! ",
                T0008: "Well, but you did! We don't even know each other!",
                T0009: "Wait! Don't run of like that!"
            },
            scene5: {
                T0001: "Oh yes, that should be me than!",
                T0002: "You really scared me back there. Hope you're doin' alright now!",
                T0003: "Heya? Did I say somethin' wrong?",
                T0004: "Really? That can't be.",
                T0005: "What's that supposed to mean?",
                T0006: "Hey, wait! Why did you come out to see me in the first place.",
                T0007: "Hmm, you really like speaking in riddles. ",
                T0008: "No problem, I guess.",
                T0009: "Goodbye.",
                T0010: "Wait! You can call me 'Nat'!",
                T0011: "Nobody calls me by my full name. Especially not strangers!",
                T0012: "How do you know this anyways?",
                T0013: "Hello? I'm talking to you?",
                T0014: "Ugh, nevermind..."
            },
            scene6: {
                T0001: "Heya! Sorry, I'm a bit late!",
                T0002: "Oh really? What a coincidence!",
                T0003: "Sadly, my favourite place was closed for today.",
                T0004: "I mean I think it's fine to grab a drink, but nothing to make a big fuzz about, right?",
                T0005: "Should we get inside?",
                T0006: "Yeah, sure.",
                T0007: "Hey! You don't even know what I want to drink!",
                T0008: "Hello?! Ugh, nevermind…",
                T0009: "So, what did you order?",
                T0010: "Like always? How come you think I would like that?",
                T0011: "No, it's not! I hate it. ",
                T0012: "Why do you think that you already know everything about me?",
                T0013: "I don't understand.",
                T0014: "Wait! Don't run of like that!"
            }
        },
        drSherp: {
            scene5: {
                T0001: "That should be the aftermath of your little accident that you got caught up in.",
                T0002: "I don't understand what you mean.",
                T0003: "You seem pretty alive in my opinion... And I should know the best - as your doctor.",
                T0004: "Yes, I'm Dr. Sherp.",
                T0005: "The shock may have caused some kind of memory loss.",
                T0006: "But it should get better in a few hours. ",
                T0007: "You were involved in a minor car accident.",
                T0008: "Next time you should better watch out when you want to cross the street.",
                T0009: "No, unfortunately. The driver didn't stop.",
                T0010: "The police is still searching for him.",
                T0011: "Yes, luckily the driver called the ambulance and drove with them to the hospital to make sure you were alright. He should still be somewhere around the hospital.",
                T0012: "I don't see a problem with that. Just make sure that you're resting your leg as soon as you're home.",
                T0013: "He's a tall young man with orange hair and he wore a blue sweater.",
                T0014: "Yes, of course. I think you're fine to leave the hospital.",
                T0015: "Just take some rest when your home."
            }
        },
        novelPage: {
            scene3_1: "Dear diary, <br><br> At first, I didn't know what to do today. Luckily, I found my To-Do-List. I thought, it would be the best to just stick to the tasks I would have done anyways. <br> Since I'm trusting Bo in his decisions, I will live my life as usually. But now I'm so exhausted from all the work, that I can't really search for Nat anymore. I hope that I'll still be in the memory tomorrow and get the chance of finally meeting him.",
            scene3_2: "Dear diary, <br><br> You will never guess what just happened to me! I thought it would be best to stick to my To-Do-List for the day. So, I went grocery shopping as usually and I randomly run into Nat! He didn't recognize me unfortunately, but asked me out to grab a drink later. I'm so glad that Bo lets me relive those precious moments with Nat again. I believe that everything will turn out great from now on!",
            scene4_1: "Dear diary, <br><br> Today I finally ran into Nat while speeding to school. He asked me to go to the cafeteria with him and gave me his phone number. He wants to meet up so that we could study for our class together. It's a bit strange meeting him like that, because it doesn't feel like the way we met in my past life. But in the end, I don't care – as long as Bo would let me make more of those memories."
        }
    };
})(Revived || (Revived = {}));
var Revived;
(function (Revived) {
    Revived.items = {
        bar: {
            name: "barMemory",
            description: "",
            image: "Images/Memories/bar.png",
            static: true
        },
        barOutside: {
            name: "barOutMemory",
            description: "",
            image: "Images/Memories/barOutside.png",
            static: true
        },
        classroom: {
            name: "classroomMemory",
            description: "",
            image: "Images/Memories/classroom.png",
            static: true
        },
        cooking: {
            name: "cookingMemory",
            description: "",
            image: "Images/Memories/cooking.png",
            static: true
        },
        hospital: {
            name: "hospitalMemory",
            description: "",
            image: "Images/Memories/hospital.png",
            static: true
        },
        library: {
            name: "libraryMemory",
            description: "",
            image: "Images/Memories/library.png",
            static: true
        },
        park: {
            name: "parkMemory",
            description: "",
            image: "Images/Memories/park.png",
            static: true
        },
        shopping: {
            name: "shoppingMemory",
            description: "",
            image: "Images/Memories/shopping.png",
            static: true
        },
        street: {
            name: "streetMemory",
            description: "",
            image: "Images/Memories/street.png",
            static: true
        },
        busyStreetRain: {
            name: "busyStreetRainMemory",
            description: "",
            image: "Images/Memories/streetBusy_rain.png",
            static: true
        },
        busyStreet: {
            name: "busyStreetMemory",
            description: "",
            image: "Images/Memories/streetBusy.png",
            static: true
        },
        study: {
            name: "studyMemory",
            description: "",
            image: "Images/Memories/study.png",
            static: true
        },
        bo: {
            name: "boMemory",
            description: "",
            image: "Images/Memories/bo_memory.png",
            static: true
        }
    };
})(Revived || (Revived = {}));
var Revived;
(function (Revived) {
    Revived.locations = {
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
                background: "Images/Backgrounds/cooking_cutScene.png"
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
})(Revived || (Revived = {}));
var Revived;
(function (Revived) {
    Revived.sounds = {
        themes: {
            afterlifeIntro: "Audio/soundtracks/afterlife_beginning.mp3",
            afterlifeOutro: "Audio/soundtracks/betterdays_afterlife_outro.mp3",
            supermarket: "Audio/soundtracks/jazzcomedy_supermarktScenes.mp3",
            meetingNat: "Audio/soundtracks/loveable_meetingNat.mp3",
            wakeUpEnding: "Audio/soundtracks/memories_wakeUp_Endings.mp3",
            library: "Audio/soundtracks/onceagain_library.mp3",
            carCrash: "Audio/soundtracks/relaxing_carCrashScenes.mp3",
            park: "Audio/soundtracks/sadday_parkScene.mp3",
            bonnysRoom: "Audio/soundtracks/slowmotion_Scene2.mp3",
            hospital: "Audio/soundtracks/tape-star_hospital.mp3",
            bar: "Audio/soundtracks/theelevatorbossanova_barScenes.mp3"
        },
        sfx: {
            bar: "Audio/sfx/bar.mp3",
            carCrash: "Audio/sfx/carCrash.mp3",
            classroom: "Audio/sfx/classroom.wav",
            classroomPeople: "Audio/sfx/classroomPeople.wav",
            cooking: "Audio/sfx/cooking.mp3",
            footsteps: "Audio/sfx/footsteps_street.mp3",
            library: "Audio/sfx/library.mp3",
            pageTurn: "Audio/sfx/pageTurn.mp3",
            pen: "Audio/sfx/pen.mp3",
            supermarket: "Audio/sfx/supermarket.mp3",
            traffic: "Audio/sfx/traffic.mp3",
            door: "Audio/sfx/door.mp3",
            schoolBell: "Audio/sfx/schoolBell.wav",
            footstepsConcrete: "Audio/sfx/footsteps_concrete.wav"
        }
    };
})(Revived || (Revived = {}));
var Revived;
(function (Revived) {
    Revived.transitions = {
        lightbeam: {
            duration: 5,
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
})(Revived || (Revived = {}));
var Revived;
(function (Revived) {
    async function Credits() {
        console.log("start credits");
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Location.show(Revived.locations.blackScreen);
        await Revived.ƒS.update(Revived.transitions.bigWipe2.duration, Revived.transitions.bigWipe2.alpha, Revived.transitions.bigWipe2.edge);
        Revived.ƒS.Text.addClass("start");
        // tslint:disable-next-line: quotemark
        await Revived.ƒS.Text.print('<h2>Credits</h2>For the visual novel "Revived" created in WiSe22/23, all visual content was drawn by myself. <br><br> Transitions by Kia <br> (https://lemmasoft.renai.us/forums/viewtopic.php?f=52&t=37628)<br><br> Music: <br> bensound.com/royalty-free-music <br> sivermansound.com <br><br> Audio: <br> zapsplat.com <br> library.prosoundeffects.com');
        await Revived.ƒS.update(2);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.wakeUpEnding, 0, 5);
    }
    Revived.Credits = Credits;
})(Revived || (Revived = {}));
var Revived;
(function (Revived) {
    async function EndingAcceptance() {
        console.log("Ending_Acceptance starting");
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Progress.delay(2);
        await Revived.ƒS.Location.show(Revived.locations.afterlife);
        await Revived.ƒS.update(3);
        Revived.ƒS.Sound.play(Revived.sounds.themes.afterlifeOutro, 0, true);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.afterlifeOutro, 0.02, 3);
        await Revived.ƒS.Character.show(Revived.characters.bo, Revived.characters.bo.pose.neutral, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.sleepy, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update(3);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.irritated, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0001);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0002);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending2.T0001);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending2.T0002);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending2.T0002_2);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0003);
        await Revived.ƒS.Character.hide(Revived.characters.bo);
        await Revived.ƒS.Character.show(Revived.characters.bo, Revived.characters.bo.pose.irritated, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending2.T0003);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.sad, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update(0.25);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0004);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0005);
        await Revived.ƒS.Character.hide(Revived.characters.bo);
        await Revived.ƒS.Character.show(Revived.characters.bo, Revived.characters.bo.pose.neutral, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending2.T0004);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0006);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0007);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending2.T0005);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0005);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0003);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0006);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0005);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending2.T0006);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0007);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0007);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0008);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0008_2);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0008);
        await Revived.ƒS.Character.hide(Revived.characters.bo);
        await Revived.ƒS.Character.show(Revived.characters.bo, Revived.characters.bo.pose.happy, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0009);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.frustrated, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0009);
        await Revived.ƒS.Character.hide(Revived.characters.bo);
        await Revived.ƒS.Character.show(Revived.characters.bo, Revived.characters.bo.pose.neutral, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0010);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0011);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.frustrated, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update(); //bonny disappears
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0008);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0009);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending2.T0007);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending2.T0008);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0010);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0011); //bo disappears
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending2.T0009);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending2.T0010);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.happy, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update(0.25);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0012);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0012_2);
        await Revived.ƒS.Character.hide(Revived.characters.bo);
        await Revived.ƒS.Character.show(Revived.characters.bo, Revived.characters.bo.pose.happy, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending2.T0011);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending2.T0012);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending2.T0013);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending2.T0014);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.irritated, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0013);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0013_2);
        Revived.ƒS.Character.animate(Revived.characters.bo, Revived.characters.bo.pose.happy, Revived.fadeOut());
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0014);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0015);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0016);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.afterlifeOutro, 0, 3);
        //bonny wake up scene:
        Revived.ƒS.Speech.clear();
        Revived.ƒS.Speech.hide();
        Revived.ƒS.Inventory.add(Revived.items.bo);
        await Revived.ƒS.Progress.delay(1);
        Revived.ƒS.Character.hideAll();
        await Revived.ƒS.Location.show(Revived.locations.blackScreen);
        await Revived.ƒS.update(3); //transition wrong
        await Revived.ƒS.Progress.delay(1.5);
        await Revived.ƒS.Location.show(Revived.locations.bonnysRoom);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.sleepy, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update(3);
        Revived.ƒS.Sound.play(Revived.sounds.themes.wakeUpEnding, 0, true);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.wakeUpEnding, 0.02, 6);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0022);
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Progress.delay(1.5);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.irritated, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0023);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0024);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0017);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0026);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0018);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.frustrated, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0019);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0020);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.happy, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0021);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0022);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0022_2);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.irritated, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0023);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0024);
        await Revived.ƒS.Inventory.open();
        await Revived.ƒS.Progress.delay(1.5);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0025);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0026);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.happy, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0027);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0028);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending2.T0029);
        if (Revived.dataForSave.progressBar == 75) {
            Revived.dataForSave.progressBar += 25;
        }
        else if (Revived.dataForSave.progressBar == 83.4) {
            Revived.dataForSave.progressBar += 16.7;
        }
        else if (Revived.dataForSave.progressBar == 87.5) {
            Revived.dataForSave.progressBar += 12.5;
        }
        Revived.ƒS.Character.hideAll();
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Location.show(Revived.locations.blackScreen);
        await Revived.ƒS.update(3);
        return "Credits";
    }
    Revived.EndingAcceptance = EndingAcceptance;
})(Revived || (Revived = {}));
var Revived;
(function (Revived) {
    async function EndingDenial() {
        console.log("Ending_Denial starting");
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Progress.delay(2);
        Revived.ƒS.Sound.play(Revived.sounds.themes.afterlifeOutro, 0, true);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.afterlifeOutro, 0.02, 1);
        await Revived.ƒS.Location.show(Revived.locations.afterlife);
        await Revived.ƒS.update(3);
        await Revived.ƒS.Character.show(Revived.characters.bo, Revived.characters.bo.pose.neutral, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.sleepy, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update(3);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.irritated, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0001);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, "What happened?");
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0002);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, "Did you find the mistake?!");
        await Revived.ƒS.Character.hide(Revived.characters.bo);
        await Revived.ƒS.Character.show(Revived.characters.bo, Revived.characters.bo.pose.upset, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0001);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.sad, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update(0.5);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0003);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0004);
        await Revived.ƒS.Character.hide(Revived.characters.bo);
        await Revived.ƒS.Character.show(Revived.characters.bo, Revived.characters.bo.pose.neutral, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0002);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0005);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0003);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0004);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0006);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0005);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0006);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.irritated2, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0007);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0007);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0008);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0008_2);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0008);
        await Revived.ƒS.Character.hide(Revived.characters.bo);
        await Revived.ƒS.Character.show(Revived.characters.bo, Revived.characters.bo.pose.happy, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0009);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.frustrated, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0009);
        await Revived.ƒS.Character.hide(Revived.characters.bo);
        await Revived.ƒS.Character.show(Revived.characters.bo, Revived.characters.bo.pose.neutral, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0010);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0011);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.upset, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0010);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0011);
        await Revived.ƒS.Character.hide(Revived.characters.bo);
        await Revived.ƒS.Character.show(Revived.characters.bo, Revived.characters.bo.pose.frustrated, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0012);
        await Revived.ƒS.Character.hide(Revived.characters.bo);
        await Revived.ƒS.Character.show(Revived.characters.bo, Revived.characters.bo.pose.neutral, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0013);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0014);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.sad, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update(0.25);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0012);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, "It somehow felt like I lost something...");
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0015);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0016);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update(0.25);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0013);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, "Yes, maybe...");
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0017);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0018);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0019);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.frustrated, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0014);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0015);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0015_2);
        await Revived.ƒS.Character.hide(Revived.characters.bo);
        await Revived.ƒS.Character.show(Revived.characters.bo, Revived.characters.bo.pose.happy, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0020);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0021);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0022);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.angry, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update(0.25);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0016);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0017);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0018);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0023);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0024);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.ending.T0025);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.crying, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update(0.25);
        Revived.ƒS.Character.animate(Revived.characters.bo, Revived.characters.bo.pose.happy, Revived.fadeOut());
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0019);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0020);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0021);
        Revived.ƒS.Inventory.add(Revived.items.bo);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.afterlifeOutro, 0, 3);
        //bonny wake up scene:
        Revived.ƒS.Speech.clear();
        Revived.ƒS.Speech.hide();
        // await ƒS.Progress.delay(1);
        Revived.ƒS.Character.hideAll();
        await Revived.ƒS.Location.show(Revived.locations.blackScreen);
        await Revived.ƒS.update(3); //transition wrong
        await Revived.ƒS.Progress.delay(1.5);
        Revived.ƒS.Sound.play(Revived.sounds.themes.wakeUpEnding, 0, true);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.wakeUpEnding, 0.02, 4);
        await Revived.ƒS.Location.show(Revived.locations.bonnysRoom);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.sleepy, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update(3);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0022);
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Progress.delay(1.5);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.irritated, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0023);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0024);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0025);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0026);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0027);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.frustrated, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0028);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0029);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0029_2);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0030);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0031);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0032);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.irritated, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0033);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0034);
        await Revived.ƒS.Inventory.open();
        await Revived.ƒS.Progress.delay(1.5);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0035);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0036);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0037);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0038);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0039);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0040);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.happy, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0041);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0042);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.ending.T0043);
        if (Revived.dataForSave.progressBar == 75) {
            Revived.dataForSave.progressBar += 25;
        }
        else if (Revived.dataForSave.progressBar == 83.4) {
            Revived.dataForSave.progressBar += 16.7;
        }
        else if (Revived.dataForSave.progressBar == 87.5) {
            Revived.dataForSave.progressBar += 12.5;
        }
        Revived.ƒS.Character.hideAll();
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Location.show(Revived.locations.blackScreen);
        await Revived.ƒS.update(3); //transition wrong
        return "Credits";
    }
    Revived.EndingDenial = EndingDenial;
})(Revived || (Revived = {}));
var Revived;
(function (Revived) {
    async function Scene1() {
        console.log("Scene1 starting");
        Revived.ƒS.Speech.hide();
        Revived.ƒS.Text.addClass("start");
        // tslint:disable-next-line: quotemark
        await Revived.ƒS.Text.print('Welcome to "Revived"! <br><br>This is a short visual novel made during the winter semester 2022/23 at Hochschule Furtwangen University.\ <br><br>Before you start a few notes on how to use the menu:\
    <p><b>Open menu:</b> press "M"</p><p><b>Save progress:</b> press "F8"</p><p><b>Load file:</b> press "F9"</p><p><b>Next:</b> Spacebar or Left-Mouse-Click</p> \ <p>Much fun while playing!</p>');
        Revived.ƒS.Sound.play(Revived.sounds.themes.afterlifeIntro, 0, true);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.afterlifeIntro, 0.05, 3);
        await Revived.ƒS.Progress.delay(1.5);
        await Revived.ƒS.Location.show(Revived.locations.afterlife);
        await Revived.ƒS.update(Revived.transitions.lightbeam.duration, Revived.transitions.lightbeam.alpha, Revived.transitions.lightbeam.edge);
        await Revived.ƒS.Progress.delay(3);
        await Revived.ƒS.Character.animate(Revived.characters.bonny, Revived.characters.bonny.pose.sleepy, Revived.bonnyIntro());
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.irritated, Revived.ƒS.positionPercent(30, 110));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene1.T0001);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene1.T0002);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene1.T0003);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene1.T0004);
        await Revived.ƒS.Character.animate(Revived.characters.bo, Revived.characters.bo.pose.irritated, Revived.boIntro());
        await Revived.ƒS.Speech.tell(Revived.characters.unknown, Revived.text.bo.scene1.T0000);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.irritated2, Revived.ƒS.positionPercent(30, 110));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene1.T0005);
        await Revived.ƒS.Speech.tell(Revived.characters.unknown, Revived.text.bo.scene1.T0001);
        await Revived.ƒS.Speech.tell(Revived.characters.unknown, Revived.text.bo.scene1.T0002);
        await Revived.ƒS.Speech.tell(Revived.characters.unknown, Revived.text.bo.scene1.T0003);
        await Revived.ƒS.Character.hide(Revived.characters.bo);
        await Revived.ƒS.Character.show(Revived.characters.bo, Revived.characters.bo.pose.neutral, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
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
                Revived.dataForSave.pickedChoice = true;
                break;
            }
            let questionsElement = await Revived.ƒS.Menu.getInput(questions, "choices");
            switch (questionsElement) {
                case questions.iSayWhy:
                    pickedWhy = true;
                    await Revived.ƒS.Speech.tell(Revived.characters.unknown, Revived.text.bo.scene1.T0004);
                    delete questions.iSayWhy;
                    break;
                case questions.iSayWho:
                    pickedWho = true;
                    await Revived.ƒS.Speech.tell(Revived.characters.unknown, Revived.text.bo.scene1.T0005);
                    delete questions.iSayWho;
                    break;
                case questions.iSayWhat:
                    pickedWhat = true;
                    await Revived.ƒS.Speech.tell(Revived.characters.unknown, Revived.text.bo.scene1.T0006);
                    delete questions.iSayWhat;
                    break;
            }
        } while (!Revived.dataForSave.pickedChoice);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene1.T0006);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0007);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0008);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0009);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0010);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0011);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.angry, Revived.ƒS.positionPercent(30, 110));
        await Revived.ƒS.update(0.25);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene1.T0007_1);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene1.T0007_2);
        await Revived.ƒS.Character.hide(Revived.characters.bo);
        await Revived.ƒS.Character.show(Revived.characters.bo, Revived.characters.bo.pose.upset, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update(0.25);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0012);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.sad, Revived.ƒS.positionPercent(30, 110));
        await Revived.ƒS.update(0.25);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene1.T0008);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene1.T0009);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene1.T0009_2);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene1.T0009_3);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene1.T0009_4);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0013);
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Progress.delay(1.5);
        await Revived.ƒS.Character.hide(Revived.characters.bo);
        await Revived.ƒS.Character.show(Revived.characters.bo, Revived.characters.bo.pose.happy, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update(0.5);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0014);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0015);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0016);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0017);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0017_2);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0017_3);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0018);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0018_2);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0018_3);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.ƒS.positionPercent(30, 110));
        await Revived.ƒS.update(0.25);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene1.T0010);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0019);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0020);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.irritated2, Revived.ƒS.positionPercent(30, 110));
        await Revived.ƒS.update(0.25);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene1.T0011_1);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene1.T0011_2);
        await Revived.ƒS.Character.hide(Revived.characters.bo);
        await Revived.ƒS.Character.show(Revived.characters.bo, Revived.characters.bo.pose.frustrated, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update(0.25);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0021);
        await Revived.ƒS.Character.hide(Revived.characters.bo);
        await Revived.ƒS.Character.show(Revived.characters.bo, Revived.characters.bo.pose.neutral, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update(0.25);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0022);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0023);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0024);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0024_2);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.happyAnimation, Revived.ƒS.positionPercent(30, 110));
        await Revived.ƒS.update(0.25);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene1.T0012);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene1.T0012_2);
        await Revived.ƒS.Character.hide(Revived.characters.bo);
        await Revived.ƒS.Character.show(Revived.characters.bo, Revived.characters.bo.pose.happyAnimation, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update(0.25);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0025);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0025_2);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0026);
        await Revived.ƒS.Speech.tell(Revived.characters.bo, Revived.text.bo.scene1.T0027);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene1.T0013);
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Character.animate(Revived.characters.bonny, Revived.characters.bonny.pose.happyAnimation, Revived.fadeOut());
        await Revived.ƒS.Character.animate(Revived.characters.bo, Revived.characters.bo.pose.happyAnimation, Revived.fadeOut());
        Revived.ƒS.Character.hideAll();
        Revived.dataForSave.progressBar += 12.5;
        Revived.ƒS.Sound.fade(Revived.sounds.themes.afterlifeIntro, 0, 3);
        return "Scene2";
    }
    Revived.Scene1 = Scene1;
})(Revived || (Revived = {}));
var Revived;
(function (Revived) {
    async function Scene2() {
        console.log("Scene2 starting");
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Location.show(Revived.locations.blackScreen);
        await Revived.ƒS.update(3);
        Revived.ƒS.Sound.play(Revived.sounds.themes.bonnysRoom, 0, true);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.bonnysRoom, 0.02, 3);
        await Revived.ƒS.Location.show(Revived.locations.bonnysRoom);
        await Revived.ƒS.update(3);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.sleepy, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update(2.5);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.irritated, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0000);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0001);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0002);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0003);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0004);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.sad, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update(0.25);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0005);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0006);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0007);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.shocked, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update(0.25);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0008);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0009);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0010);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0011);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.sad, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update(0.4);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0012);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0013);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update(0.25);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0014);
        console.log(Revived.dataForSave.pickedChoice); //true
        await Revived.ƒS.update();
        let roomChoices = {
            lookAtPictures: "Look at the pictures",
            lookOutWindow: "Look out the window.",
            lookAtDesk: "Look at the desk"
        };
        do {
            let roomChoiceElement = await Revived.ƒS.Menu.getInput(roomChoices, "choices");
            switch (roomChoiceElement) {
                case roomChoices.lookAtDesk:
                    Revived.ƒS.Speech.hide();
                    Revived.ƒS.Character.hideAll();
                    await Revived.ƒS.Location.show(Revived.locations.blackScreen);
                    await Revived.ƒS.update(0.5);
                    await Revived.ƒS.Location.show(Revived.locations.toDoList.empty);
                    Revived.ƒS.Sound.play(Revived.sounds.sfx.pageTurn, 0.02, false);
                    await Revived.ƒS.update(0.5);
                    await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0015);
                    await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0016);
                    await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0017);
                    await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0018);
                    Revived.dataForSave.pickedChoice = false;
                    break;
                case roomChoices.lookAtPictures:
                    await Revived.ƒS.Inventory.open();
                    await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0019);
                    await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0020);
                    break;
                case roomChoices.lookOutWindow:
                    await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0021);
                    break;
            }
        } while (Revived.dataForSave.pickedChoice);
        await Revived.ƒS.update();
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
                Revived.dataForSave.pickedChoice = true;
                Revived.dataForSave.progressBar += 12.5;
                Revived.ƒS.Sound.fade(Revived.sounds.themes.bonnysRoom, 0, 5);
                return "Scene3_1";
            }
            else if (pickedErrands && pickedProject && !pickedCooking || pickedErrands && pickedCooking && !pickedProject) {
                Revived.dataForSave.pickedChoice = true;
                Revived.dataForSave.progressBar += 12.5;
                Revived.ƒS.Sound.fade(Revived.sounds.themes.bonnysRoom, 0, 5);
                return "Scene3_2";
            }
            else if (pickedErrands && pickedProject && pickedCooking) {
                Revived.dataForSave.pickedChoice = true;
                Revived.dataForSave.progressBar += 12.5;
                Revived.ƒS.Sound.fade(Revived.sounds.themes.bonnysRoom, 0, 5);
                return "Scene3_3";
            }
            let toDoListChoiceElements = await Revived.ƒS.Menu.getInput(toDoListChoices, "choices");
            switch (toDoListChoiceElements) {
                case toDoListChoices.runErrands:
                    await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0022);
                    pickedErrands = true;
                    break;
                case toDoListChoices.finishProject: //transition doesn't work correctly because of animation
                    await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0023);
                    Revived.ƒS.Speech.hide();
                    await Revived.ƒS.Location.show(Revived.locations.cutScenes.study);
                    await Revived.ƒS.update(Revived.transitions.bigWipe.duration, Revived.transitions.bigWipe.alpha, Revived.transitions.bigWipe.edge);
                    Revived.ƒS.Sound.play(Revived.sounds.sfx.pen, 0.05, false);
                    await Revived.ƒS.Progress.delay(3);
                    Revived.ƒS.Sound.play(Revived.sounds.sfx.pageTurn, 0.05, false);
                    await Revived.ƒS.Progress.delay(3);
                    Revived.ƒS.Sound.play(Revived.sounds.sfx.pen, 0.05, false);
                    await Revived.ƒS.Progress.delay(3);
                    await Revived.ƒS.Speech.tell(Revived.characters.narrator, "after a long time of studying..."),
                        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0024);
                    await Revived.ƒS.Location.show(Revived.locations.toDoList.empty);
                    await Revived.ƒS.update(Revived.transitions.bigWipe.duration, Revived.transitions.bigWipe.alpha, Revived.transitions.bigWipe.edge);
                    Revived.ƒS.Sound.play(Revived.sounds.sfx.pageTurn, 0.02, false);
                    await Revived.ƒS.Speech.tell(Revived.characters.bonny, "What should I do next?");
                    pickedProject = true;
                    delete toDoListChoices.finishProject;
                    Revived.ƒS.Inventory.add(Revived.items.study);
                    break;
                case toDoListChoices.cooking: //transition doesn't work correctly because of animation
                    await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0025);
                    Revived.ƒS.Speech.hide();
                    await Revived.ƒS.Location.show(Revived.locations.cutScenes.cooking);
                    await Revived.ƒS.update(Revived.transitions.bigWipe.duration, Revived.transitions.bigWipe.alpha, Revived.transitions.bigWipe.edge);
                    Revived.ƒS.Sound.play(Revived.sounds.sfx.cooking, 0.02, false);
                    await Revived.ƒS.Progress.delay(8);
                    Revived.ƒS.Sound.fade(Revived.sounds.sfx.cooking, 0, 2);
                    await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene2.T0026);
                    await Revived.ƒS.Location.show(Revived.locations.toDoList.empty);
                    await Revived.ƒS.update(Revived.transitions.bigWipe.duration, Revived.transitions.bigWipe.alpha, Revived.transitions.bigWipe.edge);
                    Revived.ƒS.Sound.play(Revived.sounds.sfx.pageTurn, 0.02, false);
                    await Revived.ƒS.Speech.tell(Revived.characters.bonny, "What else do I have to finish?");
                    pickedCooking = true;
                    delete toDoListChoices.cooking;
                    Revived.ƒS.Inventory.add(Revived.items.cooking);
                    break;
            }
        } while (!Revived.dataForSave.pickedChoice); //pickedChoices == true
    }
    Revived.Scene2 = Scene2;
})(Revived || (Revived = {}));
var Revived;
(function (Revived) {
    async function Scene3_1() {
        console.log("Scene3_1 starting");
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Location.show(Revived.locations.emptyStreet.normal);
        await Revived.ƒS.update(Revived.transitions.bigWipe.duration, Revived.transitions.bigWipe.alpha, Revived.transitions.bigWipe.edge); //transition doesn't work because of animations
        Revived.ƒS.Sound.play(Revived.sounds.sfx.footsteps, 0.05, false);
        await Revived.ƒS.Progress.delay(5);
        Revived.ƒS.Sound.fade(Revived.sounds.sfx.footsteps, 0, 1);
        Revived.ƒS.Sound.play(Revived.sounds.themes.supermarket, 0, true);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.supermarket, 0.02, 3);
        await Revived.ƒS.Location.show(Revived.locations.blackScreen);
        await Revived.ƒS.update(2);
        await Revived.ƒS.Location.show(Revived.locations.supermarket);
        await Revived.ƒS.update(2);
        await Revived.ƒS.Character.animate(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.introLeftBorder());
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_1.T0001);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_1.T0002);
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Character.animate(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.leftToRightBorder());
        Revived.ƒS.Character.hideAll();
        await Revived.ƒS.Location.show(Revived.locations.cutScenes.shopping);
        await Revived.ƒS.update(Revived.transitions.bigWipe2.duration, Revived.transitions.bigWipe2.alpha, Revived.transitions.bigWipe2.edge); //transition doesn't work because of animations
        Revived.ƒS.Sound.play(Revived.sounds.sfx.supermarket, 0.02, false);
        await Revived.ƒS.Progress.delay(8);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_1.T0003);
        Revived.ƒS.Sound.fade(Revived.sounds.sfx.supermarket, 0, 1);
        Revived.ƒS.Speech.clear();
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Location.show(Revived.locations.emptyStreet.normal);
        await Revived.ƒS.update(Revived.transitions.bigWipe2.duration, Revived.transitions.bigWipe2.alpha, Revived.transitions.bigWipe2.edge);
        Revived.ƒS.Sound.play(Revived.sounds.sfx.footsteps, 0.03, false);
        await Revived.ƒS.Progress.delay(5);
        Revived.ƒS.Sound.fade(Revived.sounds.sfx.footsteps, 0, 1);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.supermarket, 0, 3);
        await Revived.ƒS.Location.show(Revived.locations.blackScreen);
        await Revived.ƒS.update(Revived.transitions.noise.duration, Revived.transitions.noise.alpha, Revived.transitions.noise.edge);
        await Revived.ƒS.Location.show(Revived.locations.bonnysRoom);
        await Revived.ƒS.update(Revived.transitions.noise.duration, Revived.transitions.noise.alpha, Revived.transitions.noise.edge); //transition doesn't work because of animations
        Revived.ƒS.Sound.play(Revived.sounds.sfx.door, 0.02, false);
        await Revived.ƒS.Progress.delay(2);
        Revived.ƒS.Sound.play(Revived.sounds.sfx.pen, 0.02, false);
        Revived.ƒS.Text.addClass("novelPage");
        await Revived.ƒS.Text.print(Revived.text.novelPage.scene3_1);
        await Revived.ƒS.Progress.delay(2);
        Revived.ƒS.Inventory.add(Revived.items.shopping);
        Revived.dataForSave.progressBar += 12.5;
        return "Scene4_1";
    }
    Revived.Scene3_1 = Scene3_1;
})(Revived || (Revived = {}));
var Revived;
(function (Revived) {
    async function Scene3_2() {
        console.log("Scene3_2 starting");
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Location.show(Revived.locations.busyStreet.normal);
        await Revived.ƒS.update(Revived.transitions.bigWipe.duration, Revived.transitions.bigWipe.alpha, Revived.transitions.bigWipe.edge); //transition doesn't work because of animations
        Revived.ƒS.Sound.play(Revived.sounds.sfx.traffic, 0.05, false);
        await Revived.ƒS.Progress.delay(5);
        Revived.ƒS.Sound.fade(Revived.sounds.sfx.traffic, 0, 1);
        Revived.ƒS.Sound.play(Revived.sounds.themes.supermarket, 0, true);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.supermarket, 0.02, 3);
        await Revived.ƒS.Location.show(Revived.locations.blackScreen);
        await Revived.ƒS.update(2); //transition doesn't work because of animations
        await Revived.ƒS.Location.show(Revived.locations.supermarket);
        await Revived.ƒS.update(2);
        await Revived.ƒS.Character.animate(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.introLeftBorder());
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_1.T0001);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_1.T0002);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0001);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0002);
        //bonny and nat bumping into each other
        Revived.ƒS.Character.animate(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.bumpingAnimationBonny());
        Revived.ƒS.Character.animate(Revived.characters.nat, Revived.characters.nat.pose.neutral, Revived.bumpingAnimationNat());
        await Revived.ƒS.Progress.delay(1.25);
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.update();
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.angry, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.unknown, Revived.text.nat.scene3_2.T0001);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.frustrated, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0003);
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.neutral, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update(0.5);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.thinking, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0004);
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.irritated, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.unknown, Revived.text.nat.scene3_2.T0002);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0005);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0006);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0007);
        await Revived.ƒS.Speech.tell(Revived.characters.unknown, Revived.text.nat.scene3_2.T0003);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.frustrated, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0008);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.flustered, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0009);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene3_2.T0004);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene3_2.T0005);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.irritated, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0010);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.happy, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0011);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0012);
        Revived.dataForSave.class = await Revived.ƒS.Speech.getInput();
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.neutral, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene3_2.T0006);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, "Well, sorry… I don't remember you or a class called '" + Revived.dataForSave.class + "'.");
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene3_2.T0008);
        await Revived.ƒS.Speech.tell(Revived.characters.narrator, "...");
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.flustered, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene3_2.T0009);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0013);
        await Revived.ƒS.Speech.tell(Revived.characters.narrator, "...");
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.happy, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene3_2.T0010);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0014);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0015);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.irritated, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0016);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.frustrated, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0017);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene3_2.T0011);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.happy, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0018);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene3_2.T0012);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0019);
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Character.animate(Revived.characters.nat, Revived.characters.nat.pose.happy, Revived.outroLeftBorder());
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.update();
        await Revived.ƒS.Progress.delay(0.5);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.frustrated, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0020);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0021);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0022);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.sad, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0023);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0024);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0025);
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Character.animate(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.outroRightBorder());
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.update(1);
        await Revived.ƒS.Location.show(Revived.locations.busyStreet.rain);
        await Revived.ƒS.update(Revived.transitions.bigWipe2.duration, Revived.transitions.bigWipe2.alpha, Revived.transitions.bigWipe2.edge); //transition doesn't work because of animations
        Revived.ƒS.Sound.play(Revived.sounds.sfx.traffic, 0.07, false);
        await Revived.ƒS.Progress.delay(5);
        Revived.ƒS.Sound.fade(Revived.sounds.sfx.traffic, 0, 1);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.supermarket, 0, 3);
        await Revived.ƒS.Location.show(Revived.locations.blackScreen);
        await Revived.ƒS.update(Revived.transitions.noise.duration, Revived.transitions.noise.alpha, Revived.transitions.noise.edge); //transition doesn't work because of animations
        await Revived.ƒS.Location.show(Revived.locations.bonnysRoom);
        await Revived.ƒS.update(Revived.transitions.noise.duration, Revived.transitions.noise.alpha, Revived.transitions.noise.edge);
        Revived.ƒS.Sound.play(Revived.sounds.sfx.door, 0.07, false);
        await Revived.ƒS.Progress.delay(2);
        Revived.ƒS.Sound.play(Revived.sounds.sfx.pen, 0.05, false);
        Revived.ƒS.Text.addClass("novelPage");
        await Revived.ƒS.Text.print(Revived.text.novelPage.scene3_2);
        await Revived.ƒS.Progress.delay(2);
        Revived.ƒS.Inventory.add(Revived.items.shopping);
        Revived.dataForSave.progressBar += 12.5;
        return "Scene6";
    }
    Revived.Scene3_2 = Scene3_2;
})(Revived || (Revived = {}));
var Revived;
(function (Revived) {
    async function Scene3_3() {
        console.log("Scene3_3 starting");
        switch (Revived.dataForSave.accidentScene) {
            case 0:
                break;
            case 1:
                Revived.ƒS.Speech.hide();
                Revived.ƒS.Character.hideAll();
                await Revived.ƒS.Location.show(Revived.locations.busyStreet.normal);
                await Revived.ƒS.update(Revived.transitions.bigWipe.duration, Revived.transitions.bigWipe.alpha, Revived.transitions.bigWipe.edge);
                Revived.ƒS.Sound.play(Revived.sounds.themes.carCrash, 0, true);
                Revived.ƒS.Sound.fade(Revived.sounds.themes.carCrash, 0.02, 0.5);
                // ƒS.update();
                Revived.ƒS.Sound.play(Revived.sounds.sfx.traffic, 0.07, false);
                await Revived.ƒS.Progress.delay(5);
                await Revived.ƒS.Speech.tell(Revived.characters.bonny, "I just need to quickly cross the street...");
                Revived.ƒS.Speech.hide();
                await Revived.ƒS.Progress.delay(1.25);
                Revived.ƒS.Sound.play(Revived.sounds.sfx.carCrash, 0.03, false);
                Revived.horizontalShake();
                await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_3.T0005);
                Revived.ƒS.Speech.hide();
                Revived.ƒS.Sound.fade(Revived.sounds.sfx.traffic, 0, 1);
                await Revived.ƒS.Location.show(Revived.locations.blackScreen);
                await Revived.ƒS.update(3);
                Revived.ƒS.Sound.fade(Revived.sounds.themes.carCrash, 0, 2);
                await Revived.ƒS.Progress.delay(3);
                Revived.ƒS.Inventory.add(Revived.items.busyStreet);
                return "Scene5_1"; //transition wrong
        }
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Location.show(Revived.locations.busyStreet.rain);
        await Revived.ƒS.update(Revived.transitions.bigWipe.duration, Revived.transitions.bigWipe.alpha, Revived.transitions.bigWipe.edge);
        Revived.ƒS.Sound.play(Revived.sounds.themes.carCrash, 0, true);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.carCrash, 0.02, 0.5);
        await Revived.ƒS.Progress.delay(1);
        Revived.ƒS.Sound.play(Revived.sounds.sfx.traffic, 0.07, false);
        await Revived.ƒS.Progress.delay(5);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_3.T0001);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_3.T0002);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_3.T0003);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_3.T0004);
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Progress.delay(1.25);
        Revived.ƒS.Sound.play(Revived.sounds.sfx.carCrash, 0.03, false);
        Revived.horizontalShake();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_3.T0005);
        Revived.ƒS.Speech.hide();
        Revived.ƒS.Sound.fade(Revived.sounds.sfx.traffic, 0, 1);
        await Revived.ƒS.Location.show(Revived.locations.blackScreen);
        await Revived.ƒS.update(3);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.carCrash, 0, 2);
        await Revived.ƒS.Progress.delay(3);
        Revived.ƒS.Inventory.add(Revived.items.busyStreetRain);
        Revived.dataForSave.progressBar += 12.5;
        return "Scene5_1"; //transition wrong
    }
    Revived.Scene3_3 = Scene3_3;
})(Revived || (Revived = {}));
var Revived;
(function (Revived) {
    async function Scene4_1() {
        console.log("Scene4_1 starting");
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Location.show(Revived.locations.blackScreen);
        await Revived.ƒS.update(2);
        await Revived.ƒS.Location.show(Revived.locations.bonnysRoom);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.sleepy, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update(2);
        Revived.ƒS.Sound.play(Revived.sounds.themes.meetingNat, 0, true);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.meetingNat, 0.02, 0.5);
        await Revived.ƒS.Speech.tell(Revived.characters.narrator, "The next day...");
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Progress.delay(1);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0001);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0002);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0003);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0004);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update(0.5);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0005);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0006);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0007);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0008);
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Progress.delay(1.5);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.shocked, Revived.ƒS.positionPercent(30, 100)); //character not showing /hiding
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0010);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0011);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0012);
        let transportChoice = {
            runToSchool: "run to school",
            takeTheBike: "take the bike"
        };
        let choiceElement = await Revived.ƒS.Menu.getInput(transportChoice, "choices");
        switch (choiceElement) {
            case transportChoice.runToSchool:
                await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0013);
                await Revived.ƒS.Character.hide(Revived.characters.bonny);
                Revived.ƒS.Speech.hide();
                await Revived.ƒS.Location.show(Revived.locations.sidewalk);
                await Revived.ƒS.update(Revived.transitions.bigWipe.duration, Revived.transitions.bigWipe.alpha, Revived.transitions.bigWipe.edge);
                break;
            case transportChoice.takeTheBike:
                await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0014);
                await Revived.ƒS.Character.hide(Revived.characters.bonny);
                Revived.ƒS.Speech.hide();
                Revived.dataForSave.accidentScene = 1;
                Revived.ƒS.Sound.fade(Revived.sounds.themes.meetingNat, 0, 0.5);
                return "Scene3_3";
        }
        await Revived.ƒS.Character.animate(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.introLeftBorder());
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0015);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0016);
        Revived.ƒS.Character.animate(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.bumpingAnimationBonny());
        Revived.ƒS.Character.animate(Revived.characters.nat, Revived.characters.nat.pose.neutral, Revived.bumpingAnimationNat());
        await Revived.ƒS.Progress.delay(1.25);
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.angry, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.unknown, Revived.text.nat.scene3_2.T0001);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.frustrated, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene3_2.T0003);
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.neutral, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update(0.5);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.thinking, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0018);
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.irritated, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.unknown, "What do you mean?");
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0019);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0020);
        await Revived.ƒS.Speech.tell(Revived.characters.unknown, "Hello?! What are you talking about?!");
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0022);
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.neutral, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.unknown, Revived.text.nat.scene4_1.T0000);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene4_1.T0001);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene4_1.T0002);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene4_1.T0003);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0023);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0024);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0025);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene4_1.T0004);
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.laughing, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene4_1.T0005);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene4_1.T0006);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.irritated, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0026);
        Revived.dataForSave.class = await Revived.ƒS.Speech.getInput();
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.neutral, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene4_1.T0007);
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.laughing, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.nat, "I'm supposed to be in '" + Revived.dataForSave.class + "' right now!");
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene4_1.T0009);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0027);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene4_1.T0010);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.happy, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0028);
        Revived.ƒS.Speech.hide();
        Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.animate(Revived.characters.nat, Revived.characters.nat.pose.happy, Revived.outroLeftBorder());
        await Revived.ƒS.Character.animate(Revived.characters.bonny, Revived.characters.bonny.pose.happy, Revived.outroRightToLeftBorder());
        await Revived.ƒS.Progress.delay(2);
        await Revived.ƒS.Location.show(Revived.locations.cutScenes.class);
        await Revived.ƒS.update(Revived.transitions.bigWipe2.duration, Revived.transitions.bigWipe2.alpha, Revived.transitions.bigWipe2.edge);
        Revived.ƒS.Sound.play(Revived.sounds.sfx.classroom, 0.05, false);
        Revived.ƒS.Sound.play(Revived.sounds.sfx.classroomPeople, 0.07, false);
        await Revived.ƒS.Progress.delay(9);
        Revived.ƒS.Sound.fade(Revived.sounds.sfx.classroom, 0, 1);
        Revived.ƒS.Sound.fade(Revived.sounds.sfx.classroomPeople, 0, 1);
        Revived.ƒS.Sound.play(Revived.sounds.sfx.schoolBell, 0.01, false);
        await Revived.ƒS.update(1);
        await Revived.ƒS.Location.show(Revived.locations.blackScreen);
        await Revived.ƒS.update(Revived.transitions.noise.duration, Revived.transitions.noise.alpha, Revived.transitions.noise.edge);
        await Revived.ƒS.Location.show(Revived.locations.school);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.happy, Revived.ƒS.positionPercent(75, 100));
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.happy, Revived.ƒS.positionPercent(25, 100));
        await Revived.ƒS.update(Revived.transitions.noise.duration, Revived.transitions.noise.alpha, Revived.transitions.noise.edge);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene4_1.T0011);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene4_1.T0012);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0029);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0030);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene4_1.T0013);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_1.T0031);
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.update(1);
        await Revived.ƒS.Location.show(Revived.locations.blackScreen);
        Revived.ƒS.Character.hideAll();
        await Revived.ƒS.update(Revived.transitions.noise.duration, Revived.transitions.noise.alpha, Revived.transitions.noise.edge);
        await Revived.ƒS.Location.show(Revived.locations.bonnysRoom);
        await Revived.ƒS.update(Revived.transitions.noise.duration, Revived.transitions.noise.alpha, Revived.transitions.noise.edge);
        Revived.ƒS.Sound.play(Revived.sounds.sfx.door, 0.02, false);
        await Revived.ƒS.Progress.delay(2);
        Revived.ƒS.Sound.play(Revived.sounds.sfx.pen, 0.02, false);
        Revived.ƒS.Text.addClass("novelPage");
        await Revived.ƒS.Text.print(Revived.text.novelPage.scene4_1);
        await Revived.ƒS.Progress.delay(2);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.meetingNat, 0, 2);
        Revived.ƒS.Inventory.add(Revived.items.classroom);
        await Revived.ƒS.Location.show(Revived.locations.blackScreen);
        await Revived.ƒS.update(2);
        Revived.dataForSave.progressBar += 12.5;
        return "Scene4_2";
    }
    Revived.Scene4_1 = Scene4_1;
})(Revived || (Revived = {}));
var Revived;
(function (Revived) {
    async function Scene4_2() {
        console.log("Scene4_2 starting");
        Revived.dataForSave.ending = 0;
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Location.show(Revived.locations.library);
        await Revived.ƒS.update(3);
        Revived.ƒS.Sound.play(Revived.sounds.themes.library, 0, true);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.library, 0.02, 3);
        await Revived.ƒS.Speech.tell(Revived.characters.narrator, "The next day...");
        await Revived.ƒS.Character.animate(Revived.characters.bonny, Revived.characters.bonny.pose.happy, Revived.introLeftBorder());
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_2.T0001);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.frustrated, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_2.T0002);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_2.T0003);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_2.T0004);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_2.T0005);
        await Revived.ƒS.Character.animate(Revived.characters.nat, Revived.characters.nat.pose.neutral, Revived.introRightBorder());
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.laughing, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene4_2.T0001);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.irritated2, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_2.T0006);
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.irritated, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene4_2.T0002);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.flustered, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_2.T0007);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_2.T0008);
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.laughing, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene4_2.T0003);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_2.T0009);
        Revived.ƒS.Speech.hide();
        Revived.ƒS.Character.hideAll();
        await Revived.ƒS.Location.show(Revived.locations.cutScenes.library);
        await Revived.ƒS.update(Revived.transitions.bigWipe.duration, Revived.transitions.bigWipe.alpha, Revived.transitions.bigWipe.edge); //transition wrong
        Revived.ƒS.Sound.play(Revived.sounds.sfx.library, 0.07, false);
        await Revived.ƒS.Progress.delay(2);
        Revived.ƒS.Sound.play(Revived.sounds.sfx.pen, 0.05, false);
        await Revived.ƒS.Progress.delay(2);
        Revived.ƒS.Sound.play(Revived.sounds.sfx.pageTurn, 0.05, false);
        await Revived.ƒS.Progress.delay(4);
        Revived.ƒS.Sound.fade(Revived.sounds.sfx.library, 0, 1);
        await Revived.ƒS.Location.show(Revived.locations.blackScreen);
        await Revived.ƒS.update(Revived.transitions.noise.duration, Revived.transitions.noise.alpha, Revived.transitions.noise.edge); //transition wrong
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.laughing, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.happy, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.Location.show(Revived.locations.library);
        await Revived.ƒS.update(Revived.transitions.noise.duration, Revived.transitions.noise.alpha, Revived.transitions.noise.edge);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene4_2.T0004);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_2.T0010);
        await Revived.ƒS.Speech.tell(Revived.characters.narrator, ". . .");
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.flustered, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_2.T0011);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_2.T0012);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.library, 0, 2);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene4_2.T0005);
        Revived.ƒS.Sound.play(Revived.sounds.themes.park, 0, true);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.park, 0.07, 1);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.irritated2, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_2.T0013);
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.irritated, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene4_2.T0006);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.thinking, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_2.T0014);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene4_2.T0007);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.irritated2, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_2.T0015);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene4_2.T0008);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.sad, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_2.T0016);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene4_2.T0017);
        Revived.ƒS.Character.animate(Revived.characters.bonny, Revived.characters.bonny.pose.sad, Revived.outroLeftBorder());
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene4_2.T0009);
        Revived.ƒS.Speech.hide();
        Revived.ƒS.Character.hideAll();
        Revived.ƒS.Inventory.add(Revived.items.library);
        Revived.dataForSave.progressBar += 16.7;
        return "Scene7";
    }
    Revived.Scene4_2 = Scene4_2;
})(Revived || (Revived = {}));
var Revived;
(function (Revived) {
    async function Scene5_1() {
        console.log("Scene5_1 starting");
        Revived.ƒS.Speech.hide();
        Revived.ƒS.Sound.play(Revived.sounds.themes.hospital, 0, true);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.hospital, 0.01, 3);
        await Revived.ƒS.Location.show(Revived.locations.hospital);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.sleepy, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update(3);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.irritated, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0000);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0001);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0002);
        await Revived.ƒS.Character.animate(Revived.characters.drSherp, Revived.characters.drSherp.pose.neutral, Revived.introRightBorder());
        await Revived.ƒS.Speech.tell(Revived.characters.unknown, Revived.text.drSherp.scene5.T0001);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0003);
        await Revived.ƒS.Speech.tell(Revived.characters.unknown, Revived.text.drSherp.scene5.T0002);
        await Revived.ƒS.Speech.tell(Revived.characters.unknown, Revived.text.drSherp.scene5.T0003);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0004);
        await Revived.ƒS.Speech.tell(Revived.characters.drSherp, Revived.text.drSherp.scene5.T0004);
        await Revived.ƒS.Speech.tell(Revived.characters.drSherp, Revived.text.drSherp.scene5.T0005);
        await Revived.ƒS.Speech.tell(Revived.characters.drSherp, Revived.text.drSherp.scene5.T0006);
        await Revived.ƒS.Speech.tell(Revived.characters.drSherp, Revived.text.drSherp.scene5.T0007);
        await Revived.ƒS.Speech.tell(Revived.characters.drSherp, Revived.text.drSherp.scene5.T0008);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.irritated2, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0005);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        let hospitalChoice = {
            needToGo: "But anyway... I really have to go now!",
            askMore: "Do you know who hit me?"
        };
        let choiceElement = await Revived.ƒS.Menu.getInput(hospitalChoice, "choices");
        switch (choiceElement) {
            case hospitalChoice.needToGo:
                await Revived.ƒS.Speech.tell(Revived.characters.drSherp, Revived.text.drSherp.scene5.T0012);
                Revived.dataForSave.ending = 0;
                Revived.dataForSave.progressBar += 12.5;
                Revived.ƒS.Inventory.add(Revived.items.hospital);
                Revived.ƒS.Speech.hide();
                Revived.ƒS.Character.hideAll();
                await Revived.ƒS.Location.show(Revived.locations.emptyStreet.normal);
                await Revived.ƒS.update(Revived.transitions.bigWipe2.duration, Revived.transitions.bigWipe2.alpha, Revived.transitions.bigWipe2.edge);
                Revived.ƒS.Sound.fade(Revived.sounds.themes.hospital, 0, 3);
                Revived.ƒS.Sound.play(Revived.sounds.themes.park, 0, true);
                Revived.ƒS.Sound.fade(Revived.sounds.themes.park, 0.07, 3);
                return "Scene7";
            case hospitalChoice.askMore:
                if (Revived.dataForSave.accidentScene == 1) {
                    await Revived.ƒS.Speech.tell(Revived.characters.drSherp, Revived.text.drSherp.scene5.T0009);
                    await Revived.ƒS.Speech.tell(Revived.characters.drSherp, Revived.text.drSherp.scene5.T0010);
                    Revived.ƒS.Character.hideAll();
                    Revived.dataForSave.ending = 0;
                    break;
                }
                else {
                    await Revived.ƒS.Speech.tell(Revived.characters.drSherp, Revived.text.drSherp.scene5.T0011);
                    await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0006);
                    await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0007);
                    await Revived.ƒS.Speech.tell(Revived.characters.drSherp, Revived.text.drSherp.scene5.T0013);
                    await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0008);
                    await Revived.ƒS.Speech.tell(Revived.characters.drSherp, Revived.text.drSherp.scene5.T0014);
                    await Revived.ƒS.Speech.tell(Revived.characters.drSherp, Revived.text.drSherp.scene5.T0015);
                    Revived.ƒS.Inventory.add(Revived.items.hospital);
                    Revived.dataForSave.ending = 1;
                    Revived.dataForSave.progressBar += 12.5;
                    Revived.ƒS.Character.hideAll();
                    Revived.ƒS.Sound.fade(Revived.sounds.themes.hospital, 0, 3);
                    Revived.ƒS.Sound.play(Revived.sounds.themes.park, 0, true);
                    Revived.ƒS.Sound.fade(Revived.sounds.themes.park, 0.07, 3);
                    return "Scene5_2";
                }
        }
        Revived.ƒS.Sound.fade(Revived.sounds.themes.hospital, 0, 3);
        Revived.ƒS.Sound.play(Revived.sounds.themes.park, 0, true);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.park, 0.07, 3);
        Revived.ƒS.Inventory.add(Revived.items.hospital);
        Revived.dataForSave.progressBar += 12.5;
        return "Scene7";
    }
    Revived.Scene5_1 = Scene5_1;
})(Revived || (Revived = {}));
var Revived;
(function (Revived) {
    async function Scene5_2() {
        console.log("Scene5_2 starting");
        Revived.dataForSave.ending = 1;
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Location.show(Revived.locations.park);
        await Revived.ƒS.update(Revived.transitions.bigWipe.duration, Revived.transitions.bigWipe.alpha, Revived.transitions.bigWipe.edge);
        await Revived.ƒS.Character.animate(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.introLeftBorder());
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0009);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, "This could anybody!");
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0010);
        Revived.ƒS.Character.animate(Revived.characters.nat, Revived.characters.nat.pose.neutral, Revived.introRightBorder());
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0011);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.happy, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0012);
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.happy, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.unknown, Revived.text.nat.scene5.T0001);
        await Revived.ƒS.Speech.tell(Revived.characters.unknown, Revived.text.nat.scene5.T0002);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.irritated, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0013);
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.irritated, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.unknown, Revived.text.nat.scene5.T0003);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0013);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0014);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0015);
        await Revived.ƒS.Speech.tell(Revived.characters.unknown, Revived.text.nat.scene5.T0004);
        await Revived.ƒS.Speech.tell(Revived.characters.unknown, "We never met before.");
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.sad, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0016);
        await Revived.ƒS.Speech.tell(Revived.characters.unknown, Revived.text.nat.scene5.T0005);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0017);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0018);
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.neutral, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.unknown, Revived.text.nat.scene5.T0006);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0019);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0020);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0021);
        await Revived.ƒS.Speech.tell(Revived.characters.unknown, Revived.text.nat.scene5.T0007);
        await Revived.ƒS.Speech.tell(Revived.characters.unknown, Revived.text.nat.scene5.T0008);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene5.T0022);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        Revived.ƒS.Character.animate(Revived.characters.bonny, Revived.characters.bonny.pose.sad, Revived.outroLeftBorder());
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene5.T0009);
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Progress.delay(2.5);
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.irritated, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene5.T0010);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene5.T0011);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene5.T0012);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene5.T0013);
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.neutral, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene5.T0014);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, "What a strange girl...");
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Character.animate(Revived.characters.nat, Revived.characters.nat.pose.neutral, Revived.outroRightBorder());
        await Revived.ƒS.Progress.delay(2.5);
        Revived.ƒS.Character.hideAll();
        Revived.ƒS.Inventory.add(Revived.items.park);
        Revived.dataForSave.progressBar += 16.7;
        return "Scene7";
    }
    Revived.Scene5_2 = Scene5_2;
})(Revived || (Revived = {}));
var Revived;
(function (Revived) {
    async function Scene6() {
        console.log("Scene6 starting");
        Revived.dataForSave.ending = 1;
        Revived.ƒS.Speech.hide();
        Revived.ƒS.Sound.play(Revived.sounds.themes.bar, 0, true);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.bar, 0.02, 1);
        await Revived.ƒS.Location.show(Revived.locations.bar);
        await Revived.ƒS.update(Revived.transitions.bigWipe2.duration, Revived.transitions.bigWipe2.alpha, Revived.transitions.bigWipe2.edge);
        await Revived.ƒS.Progress.delay(1);
        await Revived.ƒS.Character.animate(Revived.characters.bonny, Revived.characters.bonny.pose.happy, Revived.introLeftBorder());
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene6.T0001);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene6.T0002);
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Progress.delay(2);
        await Revived.ƒS.Character.animate(Revived.characters.nat, Revived.characters.nat.pose.laughing, Revived.introRightBorder());
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene6.T0001);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene6.T0003);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene6.T0004);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, "It has a really special meaning to me.");
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene6.T0002);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene6.T0003);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.irritated, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene6.T0005);
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.irritated, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.nat, "No.");
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene6.T0004);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene6.T0006);
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.neutral, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.nat, "Well...");
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene6.T0005);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene6.T0007);
        Revived.ƒS.Speech.hide();
        Revived.ƒS.Character.hideAll();
        await Revived.ƒS.Location.show(Revived.locations.blackScreen);
        await Revived.ƒS.update(Revived.transitions.noise.duration, Revived.transitions.noise.alpha, Revived.transitions.noise.edge);
        await Revived.ƒS.Location.show(Revived.locations.barInside);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.neutral, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update(Revived.transitions.noise.duration, Revived.transitions.noise.alpha, Revived.transitions.noise.edge);
        Revived.ƒS.Sound.play(Revived.sounds.sfx.bar, 0.02, false);
        await Revived.ƒS.Progress.delay(2);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene6.T0008);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene6.T0006);
        await Revived.ƒS.Character.animate(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.outroLeftBorder());
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Progress.delay(1);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene6.T0007);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene6.T0008);
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Progress.delay(1);
        await Revived.ƒS.Character.animate(Revived.characters.bonny, Revived.characters.bonny.pose.neutral, Revived.introLeftBorder());
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene6.T0009);
        await Revived.ƒS.update();
        let barChoice = {
            milk: "A big cup of fresh milk",
            same: "The same like me",
            bubbleTea: "A matcha bubble tea"
        };
        let choiceElement = await Revived.ƒS.Menu.getInput(barChoice, "choices");
        switch (choiceElement) {
            case barChoice.milk:
                await Revived.ƒS.Speech.tell(Revived.characters.bonny, "I got my favourite choco milk shake and I thought you would love a big cup of fresh milk...");
                break;
            case barChoice.same:
                await Revived.ƒS.Speech.tell(Revived.characters.bonny, "I got my favourite choco milk shake and I thought you would love the same...");
                break;
            case barChoice.bubbleTea:
                await Revived.ƒS.Speech.tell(Revived.characters.bonny, "I got my favourite choco milk shake and I thought you would love a matcha bubble tea...");
                break;
        }
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, "Like always!");
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene6.T0010);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene6.T0009);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.bar, 0, 3);
        Revived.ƒS.Sound.play(Revived.sounds.themes.park, 0, true);
        Revived.ƒS.Sound.fade(Revived.sounds.themes.park, 0.02, 2);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene6.T0011);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.frustrated, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene6.T0010);
        await Revived.ƒS.Character.hide(Revived.characters.nat);
        await Revived.ƒS.Character.show(Revived.characters.nat, Revived.characters.nat.pose.irritated, Revived.ƒS.positionPercent(70, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene6.T0012);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene6.T0011);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene6.T0012);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene6.T0013);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene6.T0013);
        await Revived.ƒS.Speech.tell(Revived.characters.nat, "What are you talking about?");
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        await Revived.ƒS.Character.show(Revived.characters.bonny, Revived.characters.bonny.pose.sad, Revived.ƒS.positionPercent(30, 100));
        await Revived.ƒS.update();
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene6.T0014);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene6.T0015);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene6.T0016);
        await Revived.ƒS.Character.hide(Revived.characters.bonny);
        Revived.ƒS.Character.animate(Revived.characters.bonny, Revived.characters.bonny.pose.sad, Revived.outroLeftBorder());
        await Revived.ƒS.Speech.tell(Revived.characters.nat, Revived.text.nat.scene6.T0014);
        Revived.ƒS.Sound.fade(Revived.sounds.sfx.bar, 0, 1);
        Revived.ƒS.Character.hideAll();
        await Revived.ƒS.update();
        Revived.ƒS.Inventory.add(Revived.items.bar);
        Revived.ƒS.Inventory.add(Revived.items.barOutside);
        Revived.dataForSave.progressBar += 12.5;
        return "Scene7";
    }
    Revived.Scene6 = Scene6;
})(Revived || (Revived = {}));
var Revived;
(function (Revived) {
    async function Scene7() {
        console.log("Scene7 starting");
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Location.show(Revived.locations.emptyStreet.normal);
        await Revived.ƒS.update(Revived.transitions.bigWipe2.duration, Revived.transitions.bigWipe2.alpha, Revived.transitions.bigWipe2.edge);
        Revived.ƒS.Sound.play(Revived.sounds.sfx.footstepsConcrete, 0.2, false);
        await Revived.ƒS.Progress.delay(5);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene7.T0001);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene7.T0002);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene7.T0003);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene7.T0004);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene7.T0005);
        Revived.ƒS.Sound.fade(Revived.sounds.sfx.footstepsConcrete, 0, 3);
        await Revived.ƒS.Speech.tell(Revived.characters.bonny, Revived.text.bonny.scene7.T0006);
        Revived.ƒS.Speech.hide();
        await Revived.ƒS.Progress.delay(1);
        if (Revived.dataForSave.progressBar == 50) {
            Revived.dataForSave.progressBar += 25;
        }
        else if (Revived.dataForSave.progressBar == 66.7) {
            Revived.dataForSave.progressBar += 16.7;
        }
        else if (Revived.dataForSave.progressBar == 75) {
            Revived.dataForSave.progressBar += 12.5;
        }
        switch (Revived.dataForSave.ending) {
            case 0:
                await Revived.ƒS.Location.show(Revived.locations.blackScreen);
                await Revived.ƒS.update(3);
                Revived.ƒS.Sound.fade(Revived.sounds.themes.park, 0, 3);
                return "EndingDenial";
            case 1:
                await Revived.ƒS.Location.show(Revived.locations.blackScreen);
                await Revived.ƒS.update(3);
                Revived.ƒS.Sound.fade(Revived.sounds.themes.park, 0, 3);
                return "EndingAcceptance";
        }
    }
    Revived.Scene7 = Scene7;
})(Revived || (Revived = {}));
var Revived;
(function (Revived) {
    async function stop() {
    }
    Revived.stop = stop;
})(Revived || (Revived = {}));
//# sourceMappingURL=Revived.js.map