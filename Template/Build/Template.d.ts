declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transitions: {
        lightbeam: {
            duration: number;
            alpha: string;
            edge: number;
        };
        bigWipe: {
            duration: number;
            alpha: string;
            edge: number;
        };
        noise: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wipes: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sounds: {
        afterlifeSoundBeginning: string;
    };
    let locations: {
        afterlife: {
            name: string;
            background: string;
        };
        bonnysRoom: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
        };
        bonny: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                happy: string;
                sleepy: string;
                irritated: string;
                irritated2: string;
                shocked: string;
                angry: string;
                upset: string;
                sad: string;
                crying: string;
            };
        };
        unknown: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                irritated: string;
            };
        };
        bo: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                happy: string;
                irritated: string;
                upset: string;
                frustrated: string;
            };
        };
    };
    let dataForSave: {
        nameProtagonist: string;
    };
    function rightToLeft(): ƒS.AnimationDefinition;
    function boIntro(): ƒS.AnimationDefinition;
    function fade(): ƒS.AnimationDefinition;
}
declare namespace Template {
    let text: {
        bonny: {
            scene1: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007_1: string;
                T0007_2: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011_1: string;
                T0011_2: string;
                T0012: string;
            };
        };
        unknown: {
            scene1: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
            };
        };
        bo: {
            scene1: {
                T0001: string;
                T0002: string;
                T0003_1: string;
                T0003_2: string;
                T0003_3: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007_1: string;
                T0007_2: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
                T0013: string;
                T0014_1: string;
                T0014_2: string;
                T0015: string;
                T0016: string;
                T0017: string;
            };
        };
    };
}
declare namespace Template {
    function Scene1(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene2(): ƒS.SceneReturn;
}
