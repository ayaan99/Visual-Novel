namespace Revived {
  export async function Scene1_1(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    //scene intro:
    ƒS.Speech.hide();
    // ƒS.Sound.play(sounds.afterlifeSoundBeginning, 0.1, true);
    await ƒS.Location.show(locations.afterlife);
    await ƒS.update(transitions.lightbeam.duration, transitions.lightbeam.alpha, transitions.lightbeam.edge);
    
    //bonny appears:
    await ƒS.Character.animate(characters.bonny, characters.bonny.pose.sleepy, bonnyIntro()); 
    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated, ƒS.positionPercent(30, 110)); //alternativ: ƒS.positions.bottomcenter 
    await ƒS.update();

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0001);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0002);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0003);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0004);
    await ƒS.update(0.5);

    //bo appears:
    await ƒS.Character.animate(characters.bo, characters.bo.pose.irritated, boIntro());
    await ƒS.Speech.tell(characters.unknown, text.bo.scene1.T0000);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated2, ƒS.positionPercent(30, 110));
    await ƒS.update();
    
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0005);
    await ƒS.Speech.tell(characters.unknown, text.bo.scene1.T0001);
    await ƒS.Speech.tell(characters.unknown, text.bo.scene1.T0002);
    await ƒS.Speech.tell(characters.unknown, text.bo.scene1.T0003);
    
    await ƒS.Character.hide(characters.bo);
    await ƒS.Character.show(characters.bo, characters.bo.pose.neutral, ƒS.positionPercent(70, 100));
    await ƒS.update();


    let questions = {
      iSayWhy: "Why shouldn't you see me?",
      iSayWho: "Who are you?",
      iSayWhat: "What happened to me?"
    };

    let pickedWhy: boolean;
    let pickedWho: boolean;
    let pickedWhat: boolean;

    do {
      if (pickedWhy && pickedWho && pickedWhat) {
        dataForSave.pickedChoice = true;
        return Scene1_2();
      }

      let questionsElement = await ƒS.Menu.getInput(questions, "choices");

      switch (questionsElement) {
      case questions.iSayWhy:
        pickedWhy = true;
        await ƒS.Speech.tell(characters.unknown, text.bo.scene1.T0004);
        break;
      case questions.iSayWho:
        pickedWho = true;
        await ƒS.Speech.tell(characters.unknown, text.bo.scene1.T0005);
        break;
      case questions.iSayWhat:
        pickedWhat = true;
        await ƒS.Speech.tell(characters.unknown, text.bo.scene1.T0006);
        break;
      }
    } while (!dataForSave.pickedChoice);
  }
}
