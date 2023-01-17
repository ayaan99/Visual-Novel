namespace Template {
    export async function Scene3_1(): ƒS.SceneReturn {
    console.log("Scene3_1 starting");

    // dataForSave.progressBar += 50;
    ƒS.Speech.hide();
    // ƒS.Sound.play(sounds.afterlifeSoundBeginning, 0.1, true);
    await ƒS.Location.show(locations.emptyStreet.normal);
    await ƒS.update(transitions.bigWipe.duration, transitions.bigWipe.alpha, transitions.bigWipe.edge);
    await ƒS.Progress.delay(1); //increase time

    await ƒS.Location.show(locations.blackScreen);
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);
    await ƒS.Location.show(locations.supermarket);
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);

    await ƒS.Character.animate(characters.bonny, characters.bonny.pose.neutral, leftToRight());
    await ƒS.update();

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_1.T0001);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_1.T0002); 

    await ƒS.Character.hide(characters.bonny);
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    await ƒS.update(0.5);

    await ƒS.Location.show(locations.cutScenes.shopping);
    await ƒS.update(transitions.bigWipe2.duration, transitions.bigWipe2.alpha, transitions.bigWipe2.edge);

    await ƒS.Progress.delay(2); //increase time
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_1.T0003);
    ƒS.Speech.clear();
    ƒS.Speech.hide();

    await ƒS.Location.show(locations.blackScreen);
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);
    await ƒS.Location.show(locations.bonnysRoom);
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);

    await ƒS.Progress.delay(2); //increase time
    await ƒS.Text.print(text.bonny.scene3_1.T0004);
    }
}