namespace Revived {
    export async function Scene5_1(): ƒS.SceneReturn {
    console.log("Scene5_1 starting");
    
    ƒS.Speech.hide();    

    ƒS.Sound.fade(sounds.themes.hospital, 0.01, 3);

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
            ƒS.Inventory.add(items.hospital);
            ƒS.Speech.hide();
            ƒS.Character.hideAll(); 
            await ƒS.Location.show(locations.emptyStreet.normal);
            await ƒS.update(transitions.bigWipe2.duration, transitions.bigWipe2.alpha, transitions.bigWipe2.edge);
            ƒS.Sound.fade(sounds.themes.hospital, 0, 3);
            ƒS.Sound.play(sounds.themes.park, 0, true);
            ƒS.Sound.fade(sounds.themes.park, 0.07, 3);
            return "Scene7";
        case hospitalChoice.askMore:
            if (dataForSave.accidentScene == 1) {
            await ƒS.Speech.tell(characters.drSherp, text.drSherp.scene5.T0009);
            await ƒS.Speech.tell(characters.drSherp, text.drSherp.scene5.T0010);

            dataForSave.ending = 0;
            break;
            } else {
            await ƒS.Speech.tell(characters.drSherp, text.drSherp.scene5.T0011);
            await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0006);
            await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0007);

            await ƒS.Speech.tell(characters.drSherp, text.drSherp.scene5.T0013);

            await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0008);

            await ƒS.Speech.tell(characters.drSherp, text.drSherp.scene5.T0014);
            await ƒS.Speech.tell(characters.drSherp, text.drSherp.scene5.T0015);
            ƒS.Inventory.add(items.hospital);
            dataForSave.ending = 1;

            ƒS.Sound.fade(sounds.themes.hospital, 0, 3);
            ƒS.Sound.play(sounds.themes.park, 0, true);
            ƒS.Sound.fade(sounds.themes.park, 0.07, 3);
            return "Scene5_2";
            }
    }

    ƒS.Sound.fade(sounds.themes.hospital, 0, 3);
    ƒS.Sound.play(sounds.themes.park, 0, true);
    ƒS.Sound.fade(sounds.themes.park, 0.07, 3);

    ƒS.Inventory.add(items.hospital);
    dataForSave.progressBar += 12.5;
    return "Scene7";
    }
}