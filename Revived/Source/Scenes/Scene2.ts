namespace Revived {
    export async function Scene2(): ƒS.SceneReturn {
    console.log("Scene2_1 starting");

    dataForSave.progressBar += 10;

    ƒS.Speech.hide();
    // ƒS.Sound.play(sounds.afterlifeSoundBeginning, 0.1, true);
    await ƒS.Location.show(locations.bonnysRoom);
    await ƒS.update(3);

    await ƒS.Character.show(characters.bonny, characters.bonny.pose.sleepy, ƒS.positionPercent(30, 100)); 
    await ƒS.update(2.5);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated, ƒS.positionPercent(30, 100));
    await ƒS.update();

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0000);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0001);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0002);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0003);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0004);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.sad, ƒS.positionPercent(30, 100));
    await ƒS.update(0.25);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0005);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0006);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0007);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.shocked, ƒS.positionPercent(30, 100));
    await ƒS.update(0.25);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0008);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0009);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0010);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0011);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.sad, ƒS.positionPercent(30, 100));
    await ƒS.update(0.4);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0012);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0013);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.neutral, ƒS.positionPercent(30, 100));
    await ƒS.update(0.25);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0014);

    console.log(dataForSave.pickedChoice); //true

    let roomChoices = {
        lookAtPictures: "Look at the pictures",
        lookOutWindow: "Look out the window.",
        lookAtDesk: "Look at the desk"
      };

    do {
        
        let roomChoiceElement = await ƒS.Menu.getInput(roomChoices, "choices");
   
        switch (roomChoiceElement) {
        case roomChoices.lookAtDesk:
            ƒS.Speech.hide();
            ƒS.Character.hideAll();
            await ƒS.Location.show(locations.toDoList.empty);
            await ƒS.update(transitions.bigWipe.duration, transitions.bigWipe.alpha, transitions.bigWipe.edge);
            await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0015);
            await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0016);
            await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0017);
            await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0018);
            dataForSave.pickedChoice = false;
            break;
        case roomChoices.lookAtPictures:
            await ƒS.Inventory.open();
            await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0019);
            await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0020);
            break;
        case roomChoices.lookOutWindow:
            await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0021);
            break;
      }
    } while (dataForSave.pickedChoice);

    
    let toDoListChoices = {
        runErrands: "run errands",
        finishProject: "finish school project",
        cooking: "cooking"
    };

    //pickedChoice == true;
    let pickedErrands: boolean;
    let pickedProject: boolean;
    let pickedCooking: boolean;

    do {
    if (pickedErrands && !pickedProject && !pickedCooking) {
        dataForSave.pickedChoice = true;
        return Scene3_1();
    } 
    else if (pickedErrands && pickedProject && !pickedCooking || pickedErrands && pickedCooking && !pickedProject) {
        dataForSave.pickedChoice = true;
        return Scene3_2();
    }
    else if (pickedErrands && pickedProject && pickedCooking) {
        dataForSave.pickedChoice = true;
        return Scene3_3();
    } 

    let toDoListChoiceElements = await ƒS.Menu.getInput(toDoListChoices, "choices");

    switch (toDoListChoiceElements) {
        case toDoListChoices.runErrands:
            await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0022);
            ƒS.Speech.hide();
            pickedErrands = true;
            break;
        case toDoListChoices.finishProject:
            await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0023);
            ƒS.Speech.hide();
            await ƒS.Location.show(locations.cutScenes.study);
            await ƒS.update(transitions.bigWipe.duration, transitions.bigWipe.alpha, transitions.bigWipe.edge);
            await ƒS.Progress.delay(5);
            await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0024);
            await ƒS.Location.show(locations.toDoList.empty);
            await ƒS.update(transitions.bigWipe.duration, transitions.bigWipe.alpha, transitions.bigWipe.edge);
            await ƒS.Speech.tell(characters.bonny, "What should I do next?");
            pickedProject = true;
            break;
        case toDoListChoices.cooking:
            await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0025);
            ƒS.Speech.hide();
            await ƒS.Location.show(locations.cutScenes.cooking);
            await ƒS.update(transitions.bigWipe.duration, transitions.bigWipe.alpha, transitions.bigWipe.edge);
            await ƒS.Progress.delay(5);
            await ƒS.Speech.tell(characters.bonny, text.bonny.scene2.T0026);
            await ƒS.Location.show(locations.toDoList.empty);
            await ƒS.update(transitions.bigWipe.duration, transitions.bigWipe.alpha, transitions.bigWipe.edge);
            await ƒS.Speech.tell(characters.bonny, "What else do I have to finish?");
            pickedCooking = true;
            break;
    }
    } while (!dataForSave.pickedChoice); //pickedChoices == true
    
    }
}