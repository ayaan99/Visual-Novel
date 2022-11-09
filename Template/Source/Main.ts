namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;
  console.log("FudgeStory template starting");

  // transition und sounds evtl in eigene Datei auslagen
  export let transitions = {
    puzzle: {
      duration: 1,
      alpha: "Images/Transitions/jigsaw 01.png",
      edge: 0.5
    }
  };

  export let sounds = {
    // themes
    
    // SFX
    drop: "Audio/drop.mp3"
  };

  export let locations = {
    beachEvening: {
      name: "Beach Evening",
      background: "Images/Backgrounds/bg_room.png"
      // foreground: ""
    }
  };

  export let characters = {
    narrator: {
      name: ""
    },
    protagonist: {
      name: ""
    },
    aisaka: {
      name: "Aisaka",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Images/Characters/aisaka_angry.png",
        happy: "Images/Characters/aisaka_happy.png",
        upset: "Images/Characters/aisaka_upset.png"
      }
    }
  };

  export let dataForSave = {
    nameProtagonist: ""
    };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}