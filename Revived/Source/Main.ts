namespace Revived {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;
  console.log("FudgeStory template starting");

  export let dataForSave = {
    pickedChoice: false,
    progressBar: 0,
    pickedMeterScene: false,
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

  let gameMenu: ƒS.Menu;
  let menuIsOpen: boolean = true; //true entspricht Menü ist offen, false = Menü ist zu

  function credits(): void {
    ƒS.Text.print("");
  }

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
      case inGameMenuButtons.credits:
        credits();
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
      case ƒ.KEYBOARD_CODE.I:
        await ƒS.Inventory.open();
        break;
    }
  }

  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenu");
    buttonFunctionalities("Close");
    let scenes: ƒS.Scenes = [
      { scene: Scene1_1, name: "Scene1_1" },
      // { scene: Scene1_2, name: "Scene1_2" },
      { scene: Scene2, name: "Scene2"},
      { scene: Scene3_1, name: "Scene3_1"},
      { scene: Scene3_2, name: "Scene3_2"},
      { scene: Scene3_3, name: "Scene3_3"},
      { scene: Scene4_1, name: "Scene4_1"},
      { scene: Scene4_2, name: "Scene4_2"},
      { scene: Scene5, name: "Scene5"},
      { scene: Scene6, name: "Scene6"},
      { scene: Scene7, name: "Scene7"},
      { scene: EndingDenial, name: "Ending_Denial"},
      // { scene: EndingAcceptance, name: "Ending_Acceptance"}

    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}