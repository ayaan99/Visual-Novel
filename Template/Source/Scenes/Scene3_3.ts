namespace Template {
    export async function Scene3_3(): ƒS.SceneReturn {
    console.log("Scene3_3 starting");

    switch (dataForSave.accidentScene) {
        case 0:
            break;
        case 1:
            ƒS.Speech.hide();
            await ƒS.Location.show(locations.busyStreet.normal);
            await ƒS.update(transitions.bigWipe.duration, transitions.bigWipe.alpha, transitions.bigWipe.edge);
            await ƒS.Speech.tell(characters.bonny, "I just need to quickly cross the street...");
            ƒS.Speech.hide();
            await ƒS.Progress.delay(2);
            await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_3.T0005);
            ƒS.Speech.hide();
            await ƒS.Location.show(locations.blackScreen);
            await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);
            await ƒS.Progress.delay(3);

            return Scene5();
    }
    
    ƒS.Speech.hide();
    // ƒS.Sound.play(sounds.afterlifeSoundBeginning, 0.1, true);
    await ƒS.Location.show(locations.busyStreet.rain);
    await ƒS.update(transitions.bigWipe.duration, transitions.bigWipe.alpha, transitions.bigWipe.edge);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_3.T0001);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_3.T0001);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_3.T0002);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_3.T0003);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_3.T0004);
    ƒS.Speech.hide();
    await ƒS.Progress.delay(2);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_3.T0005);
    ƒS.Speech.hide();

    await ƒS.Location.show(locations.blackScreen);
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);
    await ƒS.Progress.delay(3);

    return Scene5();
    }
}