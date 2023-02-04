namespace Revived {
    export async function Scene5(): ƒS.SceneReturn {
    console.log("Scene5 starting");

    dataForSave.progressBar += 10;
    
    ƒS.Speech.hide();
    // ƒS.Sound.play(sounds.afterlifeSoundBeginning, 0.1, true);
    await ƒS.Location.show(locations.hospital);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.sleepy, ƒS.positionPercent(30, 100));
    await ƒS.update(transitions.lightbeam.duration, transitions.lightbeam.alpha, transitions.lightbeam.edge);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0000);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0001);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0002);

    await ƒS.Character.animate(characters.drSherp, characters.drSherp.pose.neutral, introRightBorder());
    await ƒS.Speech.tell(characters.unknown, text.drSherp.scene5.T0001);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0003);

    await ƒS.Speech.tell(characters.unknown, text.drSherp.scene5.T0002);
    await ƒS.Speech.tell(characters.unknown, text.drSherp.scene5.T0003);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0004);

    await ƒS.Speech.tell(characters.drSherp, text.drSherp.scene5.T0004);
    await ƒS.Speech.tell(characters.drSherp, text.drSherp.scene5.T0005);
    await ƒS.Speech.tell(characters.drSherp, text.drSherp.scene5.T0006);
    await ƒS.Speech.tell(characters.drSherp, text.drSherp.scene5.T0007);
    await ƒS.Speech.tell(characters.drSherp, text.drSherp.scene5.T0008);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated2, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0005);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.neutral, ƒS.positionPercent(30, 100));
    await ƒS.update();

    let hospitalChoice = {
        needToGo: "But anyway... I really have to go now!",
        askMore: "Do you know who hit me?"
    };

    let choiceElement = await ƒS.Menu.getInput(hospitalChoice, "choices");
   
    switch (choiceElement) {
        case hospitalChoice.needToGo:
            await ƒS.Speech.tell(characters.drSherp, text.drSherp.scene5.T0012);
            dataForSave.ending = 0;
            return Scene7();
        case hospitalChoice.askMore:
            if (dataForSave.accidentScene == 0) {
            await ƒS.Speech.tell(characters.drSherp, text.drSherp.scene5.T0009);
            await ƒS.Speech.tell(characters.drSherp, text.drSherp.scene5.T0010);

            dataForSave.ending = 0;
            } else {
            await ƒS.Speech.tell(characters.drSherp, text.drSherp.scene5.T0011);
            await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0006);
            await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0007);

            await ƒS.Speech.tell(characters.drSherp, text.drSherp.scene5.T0013);

            await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0008);

            await ƒS.Speech.tell(characters.drSherp, text.drSherp.scene5.T0014);
            await ƒS.Speech.tell(characters.drSherp, text.drSherp.scene5.T0015);

            dataForSave.ending = 1;
            return Scene5_2();
            }
            break;
    }

    return Scene7();
    }
}