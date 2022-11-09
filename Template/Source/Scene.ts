namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    let text = {
      Aisaka: {
        T0001: "Hello there...",
        T0002: "How you doin?",
        T0003: "See u later."
      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.beachEvening);
    await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positionPercent(70, 120)); //alternativ: ƒS.positions.bottomcenter  
    await ƒS.update (transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
    await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0001);
    await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0002);
    await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0003);
    await ƒS.update(2);

    let dialouge = {
      iSayYes: "Yes",
      iSayOk: "Okay",
      iSayNo: "No",
      iSayBla: "Bla"
    };

    let dialougeElement = await ƒS.Menu.getInput(dialouge, "choicesCSSClass");

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
        await ƒS.Speech.tell(characters.aisaka, "No");
        break;
      case dialouge.iSayBla:
        //continue path here 
        break;
 
    }
      

    
  }
}