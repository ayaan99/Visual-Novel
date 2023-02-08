namespace Revived {
    export async function Scene3_3(): ƒS.SceneReturn {
    console.log("Scene3_3 starting");

    switch (dataForSave.accidentScene) {
        case 0:
            break;
        case 1:
            ƒS.Speech.hide();
            ƒS.Character.hideAll();
            await ƒS.Location.show(locations.busyStreet.normal);
            await ƒS.update(transitions.bigWipe.duration, transitions.bigWipe.alpha, transitions.bigWipe.edge);

            ƒS.Sound.play(sounds.themes.carCrash, 0, true);
            ƒS.Sound.fade(sounds.themes.carCrash, 0.07, 0.5);

            await ƒS.Speech.tell(characters.bonny, "I just need to quickly cross the street...");
            ƒS.Speech.hide();
            await ƒS.Progress.delay(1.25);
            horizontalShake();
            await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_3.T0005);
            ƒS.Speech.hide();
            await ƒS.Location.show(locations.blackScreen);
            await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);
            ƒS.Sound.fade(sounds.themes.carCrash, 0, 2);
            await ƒS.Progress.delay(3);
            ƒS.Inventory.add(items.busyStreet);
            return "Scene5_1";
    }
    
    ƒS.Speech.hide();

    await ƒS.Location.show(locations.busyStreet.rain);
    await ƒS.update(transitions.bigWipe.duration, transitions.bigWipe.alpha, transitions.bigWipe.edge);

    ƒS.Sound.play(sounds.themes.carCrash, 0, true);
    ƒS.Sound.fade(sounds.themes.carCrash, 0.07, 0.5);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_3.T0001);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_3.T0002);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_3.T0003);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_3.T0004);
    ƒS.Speech.hide();
    await ƒS.Progress.delay(1.25);

    horizontalShake();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_3.T0005);
    ƒS.Speech.hide();

    await ƒS.Location.show(locations.blackScreen);
    await ƒS.update(3);
    ƒS.Sound.fade(sounds.themes.carCrash, 0, 2);
    await ƒS.Progress.delay(3);    

    ƒS.Inventory.add(items.busyStreetRain);
    dataForSave.progressBar += 12.5;
    return "Scene5_1";
    }
}