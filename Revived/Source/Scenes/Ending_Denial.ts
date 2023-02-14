namespace Revived {
    export async function EndingDenial(): ƒS.SceneReturn {
    console.log("Ending_Denial starting");

    ƒS.Speech.hide();
    await ƒS.Progress.delay(2);
    ƒS.Sound.play(sounds.themes.afterlifeOutro, 0, true);
    ƒS.Sound.fade(sounds.themes.afterlifeOutro, 0.02, 1);

    await ƒS.Location.show(locations.afterlife);
    await ƒS.update(3);

    await ƒS.Character.show(characters.bo, characters.bo.pose.neutral, ƒS.positionPercent(70, 100));
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.sleepy, ƒS.positionPercent(30, 100));
    await ƒS.update(3);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0001);
    await ƒS.Speech.tell(characters.bonny, "What happened?");
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0002);
    await ƒS.Speech.tell(characters.bonny, "Did you find the mistake?!");

    await ƒS.Character.hide(characters.bo);
    await ƒS.Character.show(characters.bo, characters.bo.pose.upset, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0001);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.sad, ƒS.positionPercent(30, 100));
    await ƒS.update(0.5);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0003);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0004);

    await ƒS.Character.hide(characters.bo);
    await ƒS.Character.show(characters.bo, characters.bo.pose.neutral, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0002);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.neutral, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0005);

    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0003);
    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0004);

    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0006);

    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0005);
    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0006);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated2, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0007);

    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0007);
    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0008);
    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0008_2);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.neutral, ƒS.positionPercent(30, 100));
    await ƒS.update();
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
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.upset, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0010);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0011);

    await ƒS.Character.hide(characters.bo);
    await ƒS.Character.show(characters.bo, characters.bo.pose.frustrated, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0012);

    await ƒS.Character.hide(characters.bo);
    await ƒS.Character.show(characters.bo, characters.bo.pose.neutral, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0013);
    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0014);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.sad, ƒS.positionPercent(30, 100));
    await ƒS.update(0.25);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0012);
    await ƒS.Speech.tell(characters.bonny, "It somehow felt like I lost something...");

    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0015);
    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0016);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.neutral, ƒS.positionPercent(30, 100));
    await ƒS.update(0.25);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0013);
    await ƒS.Speech.tell(characters.bonny, "Yes, maybe...");

    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0017);
    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0018);
    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0019);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.frustrated, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0014);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0015);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0015_2);

    await ƒS.Character.hide(characters.bo);
    await ƒS.Character.show(characters.bo, characters.bo.pose.happy, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0020);
    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0021);
    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0022);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.angry, ƒS.positionPercent(30, 100));
    await ƒS.update(0.25);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0016);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0017);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0018);

    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0023);
    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0024);
    await ƒS.Speech.tell(characters.bo, text.bo.ending.T0025);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.crying, ƒS.positionPercent(30, 100));
    await ƒS.update(0.25);
    ƒS.Character.animate(characters.bo, characters.bo.pose.happy, fadeOut());

    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0019);   
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0020);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0021);

    ƒS.Inventory.add(items.bo);
    ƒS.Sound.fade(sounds.themes.afterlifeOutro, 0, 3);

    //bonny wake up scene:
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    
    // await ƒS.Progress.delay(1);
    ƒS.Character.hideAll();

    await ƒS.Location.show(locations.blackScreen);
    await ƒS.update(3); //transition wrong
    await ƒS.Progress.delay(1.5);
    ƒS.Sound.play(sounds.themes.wakeUpEnding, 0, true);
    ƒS.Sound.fade(sounds.themes.wakeUpEnding, 0.02, 4);

    await ƒS.Location.show(locations.bonnysRoom);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.sleepy, ƒS.positionPercent(30, 100));
    await ƒS.update(3);

    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0022);
    ƒS.Speech.hide();
    await ƒS.Progress.delay(1.5);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0023);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0024);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0025);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0026);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0027);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.frustrated, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0028);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0029);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0029_2);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0030);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0031);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0032);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0033);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0034);
    await ƒS.Inventory.open();
    await ƒS.Progress.delay(1.5);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0035);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0036);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0037);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.neutral, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0038);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0039);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0040);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.happy, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0041);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0042);
    await ƒS.Speech.tell(characters.bonny, text.bonny.ending.T0043);

    if (dataForSave.progressBar == 75) {
        dataForSave.progressBar += 25;
    } else if (dataForSave.progressBar == 83.4) {
        dataForSave.progressBar += 16.7;
    } else if (dataForSave.progressBar == 87.5) {
        dataForSave.progressBar += 12.5;
    }

    ƒS.Character.hideAll();
    ƒS.Speech.hide();

    await ƒS.Location.show(locations.blackScreen);
    await ƒS.update(3); //transition wrong

    return "Credits";
    }
}