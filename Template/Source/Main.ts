namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;
  console.log("FudgeStory template starting");

  // transition und sounds evtl in eigene Datei auslagen
  export let transitions = {
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

  export let sounds = {
    // themes
    
    // SFX
    afterlifeSoundBeginning: "Audio/afterlife_beginning.mp3"
  };

  export let locations = {
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

  export let characters = {
    narrator: {
      name: ""
    },
    protagonist: {
      name: ""
    },
    bonny: {
      name: "Bonny",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "Images/Characters/bo.png",
        irritated: "Images/Characters/bo_irritated.png"
      }
    },
    bo: {
      name: "Bo",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "Images/Characters/bo.png",
        happy: "Images/Characters/bo_happy.png",
        irritated: "Images/Characters/bo_irritated.png",
        upset: "Images/Characters/bo_upset.png",
        frustrated: "Images/Characters/bo_frustrated.png"
      }
    }
  };

  export let dataForSave = {
    nameProtagonist: ""
    };

  export function rightToLeft(): ƒS.AnimationDefinition {
    return {
      start: {
        translation: ƒS.positions.bottomright,
        color: ƒS.Color.CSS("white", 0)
      },
      end: {
        translation: ƒS.positionPercent(30, 110),
        color: ƒS.Color.CSS("white", 1)
      },
      duration: 5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function boIntro(): ƒS.AnimationDefinition {
    return {
      start: {
        translation: ƒS.positions.bottomright,
        color: ƒS.Color.CSS("white", 0)
      },
      end: {
        translation: ƒS.positionPercent(70, 100),
        color: ƒS.Color.CSS("white", 1)
      },
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function fade(): ƒS.AnimationDefinition {
    return {
      start: {
        translation: ƒS.positionPercent(30, 110),
        color: ƒS.Color.CSS("white", 1)
      },
      end: {
        translation: ƒS.positionPercent(30, 110),
        color: ƒS.Color.CSS("white", 0)
      },
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
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

  let gameMenu: ƒS.Menu;
  let menuIsOpen: boolean = true; //true entspricht Menü ist offen, false = Menü ist zu

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
        break;
      case inGameMenuButtons.close:
        gameMenu.close();
        menuIsOpen = false;
        break;
    }
  }

  //Menu shortcuts
  document.addEventListener("keydown", hndKeyPress);
  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
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
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
    buttonFunctionalities("Close");
    let scenes: ƒS.Scenes = [
      // { scene: Scene1, name: "Scene1" },
      { scene: Scene2, name: "Scene2" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}