namespace Revived {
  export async function Scene1(): ƒS.SceneReturn {
    console.log("Scene1 starting");

    ƒS.Speech.hide();

    ƒS.Text.addClass("start");
    // tslint:disable-next-line: quotemark
    await ƒS.Text.print('Welcome to "Revived"! <br><br>This is a short visual novel made during the winter semester 2022/23 at Hochschule Furtwangen University.\ <br><br>Before you start a few notes on how to use the menu:\
    <p><b>Open menu:</b> press "M"</p><p><b>Save progress:</b> press "F8"</p><p><b>Load file:</b> press "F9"</p><p><b>Next:</b> Spacebar or Left-Mouse-Click</p> \ <p>Much fun while playing!</p>');

    ƒS.Sound.play(sounds.themes.afterlifeIntro, 0, true);
    ƒS.Sound.fade(sounds.themes.afterlifeIntro, 0.05, 3);
    await ƒS.Progress.delay(1.5);
  
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
      }

      let questionsElement = await ƒS.Menu.getInput(questions, "choices");

      switch (questionsElement) {
      case questions.iSayWhy:
        pickedWhy = true;
        await ƒS.Speech.tell(characters.unknown, text.bo.scene1.T0004);
        delete questions.iSayWhy;
        break;
      case questions.iSayWho:
        pickedWho = true;
        await ƒS.Speech.tell(characters.unknown, text.bo.scene1.T0005);
        delete questions.iSayWho;
        break;
      case questions.iSayWhat:
        pickedWhat = true;
        await ƒS.Speech.tell(characters.unknown, text.bo.scene1.T0006);
        delete questions.iSayWhat;
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
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0009_2);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0009_3);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0009_4);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0013);
    ƒS.Speech.hide();
    await ƒS.Progress.delay(1.5);

    await ƒS.Character.hide(characters.bo);
    await ƒS.Character.show(characters.bo, characters.bo.pose.happy, ƒS.positionPercent(70, 100));
    await ƒS.update(0.5);

    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0014);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0015);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0016);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0017);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0017_2);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0017_3);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0018);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0018_2);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0018_3);


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
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0024_2);


    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.happyAnimation, ƒS.positionPercent(30, 110));
    await ƒS.update(0.25);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0012);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0012_2);
    await ƒS.Character.hide(characters.bo);
    await ƒS.Character.show(characters.bo, characters.bo.pose.happyAnimation, ƒS.positionPercent(70, 100));
    await ƒS.update(0.25);

    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0025);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0025_2);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0026);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0027);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0013);
    
    ƒS.Speech.hide();
    await ƒS.Character.animate(characters.bonny, characters.bonny.pose.happyAnimation, fadeOut()); 
    await ƒS.Character.animate(characters.bo, characters.bo.pose.happyAnimation, fadeOut()); 
    
    ƒS.Character.hideAll();

    dataForSave.progressBar += 12.5;
    ƒS.Sound.fade(sounds.themes.afterlifeIntro, 0, 3);

    return "Scene2";
  }
}
