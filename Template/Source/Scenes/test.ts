namespace Template {
    export async function Test(): ƒS.SceneReturn {
    console.log("Scene3_2 starting");

    // ƒS.Inventory.add(items.bar);
    // await ƒS.Inventory.open();
    // ƒS.update();

    // dataForSave.Protagonist.name = await ƒS.Speech.getInput();
    // console.log(dataForSave.Protagonist.name);

    // await ƒS.Speech.tell(characters.Doctor, "Hallo, " + dataForSave.Protagonist.name + ".");

    await ƒS.Speech.tell(characters.unknown, text.bonny.scene3_1.T0001);
    await ƒS.update();

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_1.T0002);
    
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0001);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0002);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0003);

    // await ƒS.Text.print(text.bonny.scene3_2.T0026);
    
    }
}