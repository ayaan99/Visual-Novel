"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    // transition und sounds evtl in eigene Datei auslagen
    Template.transitions = {
        puzzle: {
            duration: 1,
            alpha: "Images/Transitions/jigsaw 01.png",
            edge: 0.5
        }
    };
    Template.sounds = {
        // themes
        // SFX
        drop: "Audio/drop.mp3"
    };
    Template.locations = {
        beachEvening: {
            name: "Beach Evening",
            background: "Images/Backgrounds/bg_room.png"
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
        aisaka: {
            name: "Aisaka",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Images/Characters/aisaka_angry.png",
                happy: "Images/Characters/aisaka_happy.png",
                upset: "Images/Characters/aisaka_upset.png"
            }
        }
    };
    Template.dataForSave = {
        nameProtagonist: ""
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Scene, name: "Scene" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
        let text = {
            Aisaka: {
                T0001: "Hello there...",
                T0002: "How you doin?",
                T0003: "See u later."
            }
        };
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.beachEvening);
        await Template.ƒS.Character.show(Template.characters.aisaka, Template.characters.aisaka.pose.happy, Template.ƒS.positionPercent(70, 120)); //alternativ: ƒS.positions.bottomcenter  
        await Template.ƒS.update(Template.transitions.puzzle.duration, Template.transitions.puzzle.alpha, Template.transitions.puzzle.edge);
        await Template.ƒS.Speech.tell(Template.characters.aisaka, text.Aisaka.T0001);
        await Template.ƒS.Speech.tell(Template.characters.aisaka, text.Aisaka.T0002);
        await Template.ƒS.Speech.tell(Template.characters.aisaka, text.Aisaka.T0003);
        await Template.ƒS.update(2);
        let dialouge = {
            iSayYes: "Yes",
            iSayOk: "Okay",
            iSayNo: "No",
            iSayBla: "Bla"
        };
        let dialougeElement = await Template.ƒS.Menu.getInput(dialouge, "choicesCSSClass");
        // let pickedYes: boolean;
        // let pickedNo: boolean;
        // if (pickedYes || picked No)
        // delete dialogue.iSayBla;
        switch (dialougeElement) {
            case dialouge.iSayYes:
                //continue path here 
                console.log("test");
                break;
            case dialouge.iSayOk:
                //continue path here 
                break;
            case dialouge.iSayNo:
                //continue path here 
                await Template.ƒS.Speech.tell(Template.characters.aisaka, "No");
                break;
            case dialouge.iSayBla:
                //continue path here 
                break;
        }
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map