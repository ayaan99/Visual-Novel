namespace Revived {
    export async function Scene4_2(): ƒS.SceneReturn {
    console.log("Scene4_2 starting");
    
    dataForSave.ending = 0;
    
    ƒS.Speech.hide();

    await ƒS.Location.show(locations.library);
    await ƒS.update(3);

    ƒS.Sound.fade(sounds.themes.library, 0.02, 3);

    await ƒS.Speech.tell(characters.narrator, "The next day...");

    await ƒS.Character.animate(characters.bonny, characters.bonny.pose.happy, introLeftBorder());
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_2.T0001);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.frustrated, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_2.T0002);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_2.T0003);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_2.T0004);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_2.T0005);

    await ƒS.Character.animate(characters.nat, characters.nat.pose.neutral, introRightBorder());
    await ƒS.Character.hide(characters.nat);
    await ƒS.Character.show(characters.nat, characters.nat.pose.laughing, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.nat, text.nat.scene4_2.T0001);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated2, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_2.T0006);

    await ƒS.Character.hide(characters.nat);
    await ƒS.Character.show(characters.nat, characters.nat.pose.irritated, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.nat, text.nat.scene4_2.T0002);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.flustered, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_2.T0007);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_2.T0008);

    await ƒS.Character.hide(characters.nat);
    await ƒS.Character.show(characters.nat, characters.nat.pose.laughing, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.nat, text.nat.scene4_2.T0003);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_2.T0009);

    ƒS.Speech.hide();
    ƒS.Character.hideAll();

    await ƒS.Location.show(locations.cutScenes.library);
    await ƒS.update(transitions.bigWipe.duration, transitions.bigWipe.alpha, transitions.bigWipe.edge); //transition wrong

    ƒS.Sound.play(sounds.sfx.library, 0.02, false);
    await ƒS.Progress.delay(2);
    ƒS.Sound.play(sounds.sfx.pen, 0.02, false);
    await ƒS.Progress.delay(2);
    ƒS.Sound.play(sounds.sfx.pageTurn, 0.02, false);
    await ƒS.Progress.delay(4);
    ƒS.Sound.fade(sounds.sfx.library, 0, 1);

    await ƒS.Location.show(locations.blackScreen);
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge); //transition wrong
    await ƒS.Character.show(characters.nat, characters.nat.pose.laughing, ƒS.positionPercent(70, 100));
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.happy, ƒS.positionPercent(30, 100)); //bonny not showing
    await ƒS.Location.show(locations.library);
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);

    await ƒS.Speech.tell(characters.nat, text.nat.scene4_2.T0004);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_2.T0010);

    await ƒS.Speech.tell(characters.narrator, ". . .");

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.flustered, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_2.T0011);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_2.T0012);
    ƒS.Sound.fade(sounds.themes.library, 0, 2);

    await ƒS.Speech.tell(characters.nat, text.nat.scene4_2.T0005);

    ƒS.Sound.play(sounds.themes.park, 0, true);
    ƒS.Sound.fade(sounds.themes.park, 0.07, 1);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated2, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_2.T0013);

    await ƒS.Character.hide(characters.nat);
    await ƒS.Character.show(characters.nat, characters.nat.pose.irritated, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.nat, text.nat.scene4_2.T0006);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.thinking, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_2.T0014);
    await ƒS.Speech.tell(characters.nat, text.nat.scene4_2.T0007);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated2, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_2.T0015);
    await ƒS.Speech.tell(characters.nat, text.nat.scene4_2.T0008);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.sad, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_2.T0016);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_2.T0017);

    ƒS.Character.animate(characters.bonny, characters.bonny.pose.sad, outroLeftBorder());
    await ƒS.update();
    await ƒS.Speech.tell(characters.nat, text.nat.scene4_2.T0009);
    
    ƒS.Speech.hide();
    ƒS.Character.hideAll(); 

    ƒS.Inventory.add(items.library);
    dataForSave.progressBar += 16.7;
    return "Scene7"; //clean transition between scenes
    }
}