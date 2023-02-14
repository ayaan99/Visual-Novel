namespace Revived {
    export async function Scene5_2(): ƒS.SceneReturn {
    console.log("Scene5_2 starting");

    dataForSave.ending = 1;
    
    ƒS.Speech.hide();

    await ƒS.Location.show(locations.park);
    await ƒS.update(transitions.bigWipe.duration, transitions.bigWipe.alpha, transitions.bigWipe.edge);

    await ƒS.Character.animate(characters.bonny, characters.bonny.pose.neutral, introLeftBorder());
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0009);
    await ƒS.Speech.tell(characters.bonny, "This could anybody!");
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0010);
    
    ƒS.Character.animate(characters.nat, characters.nat.pose.neutral, introRightBorder());

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0011);
    
    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.happy, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0012);

    await ƒS.Character.hide(characters.nat);
    await ƒS.Character.show(characters.nat, characters.nat.pose.happy, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.unknown, text.nat.scene5.T0001);
    await ƒS.Speech.tell(characters.unknown, text.nat.scene5.T0002);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0013);

    await ƒS.Character.hide(characters.nat);
    await ƒS.Character.show(characters.nat, characters.nat.pose.irritated, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.unknown, text.nat.scene5.T0003);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0013);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0014);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0015);

    await ƒS.Speech.tell(characters.unknown, text.nat.scene5.T0004);
    await ƒS.Speech.tell(characters.unknown, "We never met before.");

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.sad, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0016);

    await ƒS.Speech.tell(characters.unknown, text.nat.scene5.T0005);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0017);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0018);

    await ƒS.Character.hide(characters.nat);
    await ƒS.Character.show(characters.nat, characters.nat.pose.neutral, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.unknown, text.nat.scene5.T0006);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.neutral, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0019);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0020);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0021);

    await ƒS.Speech.tell(characters.unknown, text.nat.scene5.T0007);
    await ƒS.Speech.tell(characters.unknown, text.nat.scene5.T0008);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene5.T0022);

    await ƒS.Character.hide(characters.bonny);
    ƒS.Character.animate(characters.bonny, characters.bonny.pose.sad, outroLeftBorder());
    await ƒS.update();

    await ƒS.Speech.tell(characters.nat, text.nat.scene5.T0009);
    ƒS.Speech.hide();
    await ƒS.Progress.delay(2.5);

    await ƒS.Character.hide(characters.nat);
    await ƒS.Character.show(characters.nat, characters.nat.pose.irritated, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.nat, text.nat.scene5.T0010);
    await ƒS.Speech.tell(characters.nat, text.nat.scene5.T0011);
    await ƒS.Speech.tell(characters.nat, text.nat.scene5.T0012);
    await ƒS.Speech.tell(characters.nat, text.nat.scene5.T0013);

    await ƒS.Character.hide(characters.nat);
    await ƒS.Character.show(characters.nat, characters.nat.pose.neutral, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.nat, text.nat.scene5.T0014);
    await ƒS.Speech.tell(characters.nat, "What a strange girl...");

    ƒS.Speech.hide();

    await ƒS.Character.animate(characters.nat, characters.nat.pose.neutral, outroRightBorder());
    await ƒS.Progress.delay(2.5);

    ƒS.Character.hideAll();

    ƒS.Inventory.add(items.park);
    dataForSave.progressBar += 16.7;
    return "Scene7";
    }
}