namespace Revived {
    export async function Test(): ƒS.SceneReturn {
    console.log("Scene3_2 starting");

    // ƒS.Inventory.add(items.bar);
    // await ƒS.Inventory.open();
    // ƒS.update();

    // dataForSave.Protagonist.name = await ƒS.Speech.getInput();
    // console.log(dataForSave.Protagonist.name);

    // await ƒS.Speech.tell(characters.Doctor, "Hallo, " + dataForSave.Protagonist.name + ".");
    await ƒS.Location.show(locations.bar);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update();
    // await ƒS.Character.animate(characters.bonny, characters.bonny.pose.neutral, rightFrame());
    // await ƒS.Speech.tell(characters.unknown, text.bonny.scene3_1.T0001);
    // ƒS.Speech.clear();
    // ƒS.Speech.hide(); 
    // await ƒS.update(5);
    // await ƒS.Progress.delay(6); //increase time
    await ƒS.Character.hide(characters.bonny);
    
    await ƒS.Location.show(locations.busyStreet.rain);
    await ƒS.update(transitions.bigWipe2.duration, transitions.bigWipe2.alpha, transitions.bigWipe2.edge);
    await ƒS.update(0);

    await ƒS.Progress.delay(5); //increase time
   
    await ƒS.Location.show(locations.blackScreen);
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);
    await ƒS.Location.show(locations.bonnysRoom);
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);
    // await ƒS.update();

    // await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_1.T0002);
    
    // await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0001);
    // await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0002);
    // await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0003);

    // await ƒS.Text.print(text.bonny.scene3_2.T0026);
    
    }
}