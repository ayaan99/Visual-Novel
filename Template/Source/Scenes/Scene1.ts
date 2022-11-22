namespace Template {
  export async function Scene1(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    //scene intro:
    ƒS.Speech.hide();
    // ƒS.Sound.play(sounds.afterlifeSoundBeginning, 0.1, true);
    await ƒS.Location.show(locations.afterlife);
    await ƒS.update(transitions.lightbeam.duration, transitions.lightbeam.alpha, transitions.lightbeam.edge);
    
    //bonny appears:
    await ƒS.Character.animate(characters.bonny, characters.bonny.pose.sleepy, rightToLeft()); 
    await ƒS.Character.hide(characters.bonny);
    await ƒS.update();
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated, ƒS.positionPercent(30, 110)); //alternativ: ƒS.positions.bottomcenter 
    await ƒS.update();

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0001);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0002);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0003);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0004);
    await ƒS.update(0.5);

    //bo appears:
    await ƒS.Character.animate(characters.unknown, characters.unknown.pose.irritated, boIntro());
    await ƒS.Speech.tell(characters.unknown, text.unknown.scene1.T0000);
    await ƒS.update();

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated2, ƒS.positionPercent(30, 110));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0005);
    await ƒS.Speech.tell(characters.unknown, text.unknown.scene1.T0001);
    await ƒS.Speech.tell(characters.unknown, text.unknown.scene1.T0002);
    await ƒS.Speech.tell(characters.unknown, text.unknown.scene1.T0003);
    
    await ƒS.Character.hide(characters.unknown);
    await ƒS.Character.show(characters.unknown, characters.unknown.pose.neutral, ƒS.positionPercent(70, 100));
    await ƒS.update();


    let dialog = {
      iSayA: "Why shouldn't you see me?",
      iSayB: "Who are you?",
      iSayC: "What happened to me?"
    };

    let dialogElement = await ƒS.Menu.getInput(dialog, "choicesCSSClass");

    switch (dialogElement) {
      case dialog.iSayA:
        await ƒS.Speech.tell(characters.unknown, text.unknown.scene1.T0004);
        break;
      case dialog.iSayB:
        await ƒS.Speech.tell(characters.unknown, text.unknown.scene1.T0005);
        break;
      case dialog.iSayC:
        await ƒS.Speech.tell(characters.unknown, text.unknown.scene1.T0006);
        break;
    }
  }
}