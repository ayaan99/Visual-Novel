namespace Revived {
  export async function Scene1(): ƒS.SceneReturn {
    console.log("Scene1 starting");

    ƒS.Speech.hide();
    await ƒS.Progress.delay(0.5);
    
    ƒS.Sound.fade(sounds.themes.afterlifeIntro, 0.05, 3);
    await ƒS.Location.show(locations.afterlife);
    await ƒS.update(transitions.lightbeam.duration, transitions.lightbeam.alpha, transitions.lightbeam.edge);
    await ƒS.Progress.delay(3);

    await ƒS.Character.animate(characters.bonny, characters.bonny.pose.sleepy, bonnyIntro()); 
    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated, ƒS.positionPercent(30, 110));
    await ƒS.update();

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0001);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0002);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0003);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0004);

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
        break;
      } else if (pickedWhy) {
        delete questions.iSayWhy;
        break;
      } else if (pickedWhat) {
        delete questions.iSayWhat;
        break;
      } else if (pickedWho) {
        delete questions.iSayWho;
        break;
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

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0006);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0007);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0008);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0009);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0010);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0011);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.angry, ƒS.positionPercent(30, 110));
    await ƒS.update(0.25);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0007_1);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0007_2);

    await ƒS.Character.hide(characters.bo);
    await ƒS.Character.show(characters.bo, characters.bo.pose.upset, ƒS.positionPercent(70, 100));
    await ƒS.update(0.25);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0012);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.sad, ƒS.positionPercent(30, 110));
    await ƒS.update(0.25);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0008);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0009);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0013);
    ƒS.Speech.hide();
    await ƒS.Progress.delay(1.5);

    await ƒS.Character.hide(characters.bo);
    await ƒS.Character.show(characters.bo, characters.bo.pose.happy, ƒS.positionPercent(70, 100));
    await ƒS.update(0.25);

    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0014);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0015);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0016);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0017);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0018);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.neutral, ƒS.positionPercent(30, 110));
    await ƒS.update(0.25);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0010);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0019);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0020);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated2, ƒS.positionPercent(30, 110));
    await ƒS.update(0.25);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0011_1);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0011_2);
    
    await ƒS.Character.hide(characters.bo);
    await ƒS.Character.show(characters.bo, characters.bo.pose.frustrated, ƒS.positionPercent(70, 100));
    await ƒS.update(0.25);
   
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0021);
    
    await ƒS.Character.hide(characters.bo);
    await ƒS.Character.show(characters.bo, characters.bo.pose.neutral, ƒS.positionPercent(70, 100));
    await ƒS.update(0.25);
 
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0022);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0023);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0024);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.happy, ƒS.positionPercent(30, 110));
    await ƒS.update(0.25);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0012);
    await ƒS.Character.hide(characters.bo);
    await ƒS.Character.show(characters.bo, characters.bo.pose.happy, ƒS.positionPercent(70, 100));
    await ƒS.update(0.25);

    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0025);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0026);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0027);
    
    ƒS.Speech.hide();
    await ƒS.Character.animate(characters.bonny, characters.bonny.pose.happy, fadeOut()); 
    await ƒS.Character.animate(characters.bo, characters.bo.pose.happy, fadeOut()); 
    
    ƒS.Character.hideAll();

    // await ƒS.Location.show(locations.blackScreen);
    // await ƒS.update(3);

    // await ƒS.Progress.delay(1.5);

    dataForSave.progressBar += 12.5;
    ƒS.Sound.fade(sounds.themes.afterlifeIntro, 0, 3);

    return "Scene2";
  }
}
