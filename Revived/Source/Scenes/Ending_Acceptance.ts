namespace Revived {
    export async function EndingAcceptance(): ƒS.SceneReturn {
    console.log("Ending_Acceptance starting");

    ƒS.Speech.hide();
    // await ƒS.Progress.delay(2);
   
    await ƒS.Location.show(locations.afterlife);
    await ƒS.update(transitions.lightbeam.duration, transitions.lightbeam.alpha, transitions.lightbeam.edge);

    ƒS.Sound.play(sounds.themes.afterlifeOutro, 0, true);
    ƒS.Sound.fade(sounds.themes.afterlifeOutro, 0.02, 3);

    await ƒS.Character.show(characters.bo, characters.bo.pose.neutral, ƒS.positionPercent(70, 100));
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.sleepy, ƒS.positionPercent(30, 100));
    await ƒS.update(3);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0001);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0002);

    await ƒS.Speech.tell(characters.bo, text.bo.ending2.T0001);
    await ƒS.Speech.tell(characters.bo, text.bo.ending2.T0002);
    await ƒS.Speech.tell(characters.bo, text.bo.ending2.T0002_2);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.neutral, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0003);

    await ƒS.Character.hide(characters.bo);
    await ƒS.Character.show(characters.bo, characters.bo.pose.irritated, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bo, text.bo.ending2.T0003);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.sad, ƒS.positionPercent(30, 100));
    await ƒS.update(0.25);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0004);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0005);

    await ƒS.Character.hide(characters.bo);
    await ƒS.Character.show(characters.bo, characters.bo.pose.neutral, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bo, text.bo.ending2.T0004);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.neutral, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0006);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0007);

    await ƒS.Speech.tell(characters.bo, text.bo.ending2.T0005);

    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0005);

    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0003);

    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0006);

    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0005);
    await ƒS.Speech.tell(characters.bo, text.bo.ending2.T0006);

    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0007);

    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0007);
    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0008);
    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0008_2);

    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0008);

    await ƒS.Character.hide(characters.bo);
    await ƒS.Character.show(characters.bo, characters.bo.pose.happy, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0009);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.frustrated, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0009);

    await ƒS.Character.hide(characters.bo);
    await ƒS.Character.show(characters.bo, characters.bo.pose.neutral, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0010);
    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0011);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.frustrated, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0008);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0009);

    await ƒS.Speech.tell(characters.bo, text.bo.ending2.T0007);
    await ƒS.Speech.tell(characters.bo, text.bo.ending2.T0008);

    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0010);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0011);

    await ƒS.Speech.tell(characters.bo, text.bo.ending2.T0009);
    await ƒS.Speech.tell(characters.bo, text.bo.ending2.T0010);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.happy, ƒS.positionPercent(30, 100));
    await ƒS.update(0.25);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0012);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0012_2);

    await ƒS.Character.hide(characters.bo);
    await ƒS.Character.show(characters.bo, characters.bo.pose.happy, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bo, text.bo.ending2.T0011);
    await ƒS.Speech.tell(characters.bo, text.bo.ending2.T0012);
    await ƒS.Speech.tell(characters.bo, text.bo.ending2.T0013);
    await ƒS.Speech.tell(characters.bo, text.bo.ending2.T0014);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0013); 
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0013_2); 

    ƒS.Character.animate(characters.bo, characters.bo.pose.happy, fadeOut());

    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0014);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0015);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0016);

    ƒS.Sound.fade(sounds.themes.afterlifeOutro, 0, 3);

    //bonny wake up scene:
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Inventory.add(items.bo);

    await ƒS.Progress.delay(1);
    ƒS.Character.hideAll();

    await ƒS.Location.show(locations.blackScreen);
    await ƒS.update(3);
    await ƒS.Progress.delay(1.5);

    await ƒS.Location.show(locations.bonnysRoom);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.sleepy, ƒS.positionPercent(30, 100));
    await ƒS.update(3);

    ƒS.Sound.play(sounds.themes.wakeUpEnding, 0, true);
    ƒS.Sound.fade(sounds.themes.wakeUpEnding, 0.02, 6);

    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0022);
    ƒS.Speech.hide();
    await ƒS.Progress.delay(1.5);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0023);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0024);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0017);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0026);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0018);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.frustrated, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0019);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0020);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.happy, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0021);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0022);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0022_2);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0023);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0024);
    await ƒS.Inventory.open();
    ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0025);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0026);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.happy, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0027);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0028);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending2.T0029);

    if (dataForSave.progressBar == 75) {
        dataForSave.progressBar += 25;
    } else if (dataForSave.progressBar == 83.4) {
        dataForSave.progressBar += 16.7;
    } else if (dataForSave.progressBar == 87.5)  {
        dataForSave.progressBar += 12.5;
    }

    dataForSave.theEnd = 1;

    ƒS.Character.hideAll();
    ƒS.Speech.hide();



    await ƒS.Location.show(locations.blackScreen);
    await ƒS.update(3);

    return "Credits";
    }
}