namespace Revived {
    export async function Scene6(): ƒS.SceneReturn {
    console.log("Scene6 starting");
    
    dataForSave.ending = 1;

    ƒS.Speech.hide();

    await ƒS.Location.show(locations.bar);
    await ƒS.update(transitions.bigWipe2.duration, transitions.bigWipe2.alpha, transitions.bigWipe2.edge);
    // await ƒS.Progress.delay(1);

    ƒS.Sound.fade(sounds.themes.bar, 0.02, 3);

    await ƒS.Character.animate(characters.bonny, characters.bonny.pose.happy, introLeftBorder());
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene6.T0001);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene6.T0002);

    ƒS.Speech.hide();
    await ƒS.Progress.delay(2);

    await ƒS.Character.animate(characters.nat, characters.nat.pose.laughing, introRightBorder());
    await ƒS.Speech.tell(characters.nat, text.nat.scene6.T0001);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene6.T0003);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene6.T0004);
    await ƒS.Speech.tell(characters.bonny, "It has a really special meaning to me.");

    await ƒS.Speech.tell(characters.nat, text.nat.scene6.T0002);
    await ƒS.Speech.tell(characters.nat, text.nat.scene6.T0003);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene6.T0005);

    await ƒS.Character.hide(characters.nat);
    await ƒS.Character.show(characters.nat, characters.nat.pose.irritated, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.nat, "No.");
    await ƒS.Speech.tell(characters.nat, text.nat.scene6.T0004);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.neutral, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene6.T0006);

    await ƒS.Character.hide(characters.nat);
    await ƒS.Character.show(characters.nat, characters.nat.pose.neutral, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.nat, "Well...");
    await ƒS.Speech.tell(characters.nat, text.nat.scene6.T0005);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene6.T0007);

    ƒS.Speech.hide();
    ƒS.Character.hideAll();

    await ƒS.Location.show(locations.blackScreen);
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);

    await ƒS.Location.show(locations.barInside);
    await ƒS.Character.show(characters.nat, characters.nat.pose.neutral, ƒS.positionPercent(70, 100));
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.neutral, ƒS.positionPercent(30, 100));
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);

    ƒS.Sound.play(sounds.sfx.bar, 0.02, false);
    await ƒS.Progress.delay(2);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene6.T0008);
    await ƒS.Speech.tell(characters.nat, text.nat.scene6.T0006);
    await ƒS.Character.animate(characters.bonny, characters.bonny.pose.neutral, outroLeftBorder());
    await ƒS.Character.hide(characters.bonny);

    ƒS.Speech.hide();
    await ƒS.Progress.delay(1);

    await ƒS.Speech.tell(characters.nat, text.nat.scene6.T0007);
    await ƒS.Speech.tell(characters.nat, text.nat.scene6.T0008);
    ƒS.Speech.hide();
    await ƒS.Progress.delay(1);

    await ƒS.Character.animate(characters.bonny, characters.bonny.pose.neutral, introLeftBorder());
    await ƒS.Speech.tell(characters.nat, text.nat.scene6.T0009);

    let barChoice = {
        milk: "A big cup of fresh milk",
        same: "The same like me",
        bubbleTea: "A matcha bubble tea"
    };

    let choiceElement = await ƒS.Menu.getInput(barChoice, "choices");
    
    switch (choiceElement) {
        case barChoice.milk:
            await ƒS.Speech.tell(characters.bonny, "I got my favourite choco milk shake and I thought you would love a big cup of fresh milk...");
            await ƒS.Speech.tell(characters.bonny, "Like always!");
            break;
        case barChoice.same:
            await ƒS.Speech.tell(characters.bonny, "I got my favourite choco milk shake and I thought you would love the same...");
            await ƒS.Speech.tell(characters.bonny, "Like always!");
            break;
        case barChoice.bubbleTea:
            await ƒS.Speech.tell(characters.bonny, "I got my favourite choco milk shake and I thought you would love a matcha bubble tea...");
            await ƒS.Speech.tell(characters.bonny, "Like always!");
            break;
            }
    
    await ƒS.Speech.tell(characters.nat, text.nat.scene6.T0010);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene6.T0009);
    await ƒS.Speech.tell(characters.nat, text.nat.scene6.T0011);

    ƒS.Sound.fade(sounds.themes.bar, 0, 3);
    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.frustrated, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene6.T0010);

    ƒS.Sound.play(sounds.themes.park, 0, true);
    ƒS.Sound.fade(sounds.themes.park, 0.02, 2);

    await ƒS.Character.hide(characters.nat);
    await ƒS.Character.show(characters.nat, characters.nat.pose.irritated, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.nat, text.nat.scene6.T0012);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene6.T0011);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene6.T0012);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene6.T0013);
    
    await ƒS.Speech.tell(characters.nat, text.nat.scene6.T0013);
    await ƒS.Speech.tell(characters.nat, "What are you talking about?");

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.sad, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene6.T0014);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene6.T0015);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene6.T0016);

    await ƒS.Character.hide(characters.bonny);
    ƒS.Character.animate(characters.bonny, characters.bonny.pose.sad, outroLeftBorder());
    await ƒS.update();

    await ƒS.Speech.tell(characters.nat, text.nat.scene6.T0014);

    ƒS.Sound.fade(sounds.sfx.bar, 0, 1);

    ƒS.Character.hideAll();

    ƒS.Inventory.add(items.bar);
    ƒS.Inventory.add(items.barOutside);
    dataForSave.progressBar += 12.5;
    return "Scene7";
    }
}