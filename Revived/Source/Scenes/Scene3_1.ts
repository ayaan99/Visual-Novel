namespace Revived {
    export async function Scene3_1(): ƒS.SceneReturn {
    console.log("Scene3_1 starting");

    ƒS.Speech.hide();
    
    await ƒS.Location.show(locations.emptyStreet.normal);
    await ƒS.update(transitions.bigWipe.duration, transitions.bigWipe.alpha, transitions.bigWipe.edge);
    ƒS.Sound.play(sounds.sfx.footsteps, 0.03, false);
    await ƒS.Progress.delay(5);
    ƒS.Sound.fade(sounds.sfx.footsteps, 0, 1);

    ƒS.Sound.fade(sounds.themes.supermarket, 0.007, 3);

    await ƒS.Location.show(locations.blackScreen);
    await ƒS.update(2);
    await ƒS.Location.show(locations.supermarket);
    await ƒS.update(2);

    await ƒS.Character.animate(characters.bonny, characters.bonny.pose.neutral, introLeftBorder());

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_1.T0001);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_1.T0002); 
    ƒS.Speech.hide(); 
    await ƒS.Character.animate(characters.bonny, characters.bonny.pose.neutral, leftToRightBorder());
    
    await ƒS.Location.show(locations.cutScenes.shopping);
    await ƒS.update(transitions.bigWipe2.duration, transitions.bigWipe2.alpha, transitions.bigWipe2.edge);
    ƒS.Sound.play(sounds.sfx.supermarket, 0.02, false);
    await ƒS.Progress.delay(8);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_1.T0003);
    ƒS.Sound.fade(sounds.sfx.supermarket, 0, 1);
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    // await ƒS.update();
    
    await ƒS.Location.show(locations.emptyStreet.normal); 
    await ƒS.update(transitions.bigWipe2.duration, transitions.bigWipe2.alpha, transitions.bigWipe2.edge);
    ƒS.Sound.play(sounds.sfx.footsteps, 0.03, false);
    await ƒS.Progress.delay(5);

    ƒS.Sound.fade(sounds.sfx.footsteps, 0, 1);
    ƒS.Sound.fade(sounds.themes.supermarket, 0, 3);
    // await ƒS.update();

    await ƒS.Location.show(locations.blackScreen);
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);
    await ƒS.Location.show(locations.bonnysRoom);
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);

    ƒS.Sound.play(sounds.sfx.door, 0.02, false);

    await ƒS.Progress.delay(2);
    ƒS.Sound.play(sounds.sfx.pen, 0.02, false);
    await ƒS.Text.print(text.novelPage.scene3_1);

    await ƒS.Progress.delay(2);
    ƒS.Inventory.add(items.shopping);

    await ƒS.Location.show(locations.blackScreen);
    await ƒS.update(2);
    
    dataForSave.progressBar += 12.5;
    return "Scene4_1";
    }
}