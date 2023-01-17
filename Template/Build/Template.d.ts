declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        nameProtagonist: string;
        pickedChoice: boolean;
        progressBar: number;
        pickedMeterScene: boolean;
    };
}
declare namespace Template {
    function bonnyIntro(): ƒS.AnimationDefinition;
    function boIntro(): ƒS.AnimationDefinition;
    function leftToRight(): ƒS.AnimationDefinition;
    function fadeIn(): ƒS.AnimationDefinition;
    function fadeOut(): ƒS.AnimationDefinition;
}
declare namespace Template {
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
                flustered: string;
                frustrated: string;
                thinking: string;
            };
        };
        unknownBo: {
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
        unknownNat: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                irritated: string;
            };
        };
        nat: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                angry: string;
                flustered: string;
                happy: string;
                irritated: string;
                laughing: string;
                smiling: string;
            };
        };
    };
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
            scene2: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
                T0013: string;
                T0014: string;
                T0015: string;
                T0016: string;
                T0017: string;
                T0018: string;
                T0019: string;
                T0020: string;
                T0021: string;
                T0022: string;
                T0023: string;
                T0024: string;
                T0025: string;
                T0026: string;
            };
            scene3_1: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
            };
            scene3_2: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
                T0013: string;
                T0014: string;
                T0015: string;
                T0016: string;
                T0017: string;
                T0018: string;
                T0019: string;
                T0020: string;
                T0021: string;
                T0022: string;
                T0023: string;
                T0024: string;
                T0025: string;
                T0026: string;
            };
            scene3_3: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
            };
            scene4: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
                T0013: string;
                T0014: string;
                T0015: string;
                T0016: string;
                T0017: string;
                T0018: string;
                T0019: string;
                T0020: string;
                T0021: string;
                T0022: string;
                T0023: string;
                T0024: string;
                T0025: string;
                T0026: string;
                T0027: string;
                T0028: string;
            };
        };
        unknownBo: {
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
        unknownNat: {
            scene3_1: {
                T0001: string;
                T0002: string;
                T0003: string;
            };
        };
        nat: {
            scene3_1: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
            };
            scene4: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
            };
        };
    };
}
declare namespace Template {
}
declare namespace Template {
    let locations: {
        blackScreen: {
            name: string;
            background: string;
        };
        afterlife: {
            name: string;
            background: string;
        };
        bonnysRoom: {
            name: string;
            background: string;
        };
        toDoList: {
            empty: {
                name: string;
                background: string;
            };
            projectCheck: {
                name: string;
                background: string;
            };
            cookingCheck: {
                name: string;
                background: string;
            };
            projectAndCookingCheck: {
                name: string;
                background: string;
            };
        };
        supermarket: {
            name: string;
            background: string;
        };
        emptyStreet: {
            normal: {
                name: string;
                background: string;
            };
            rain: {
                name: string;
                background: string;
            };
        };
        busyStreet: {
            normal: {
                name: string;
                background: string;
            };
            rain: {
                name: string;
                background: string;
            };
        };
        cutScenes: {
            study: {
                name: string;
                background: string;
            };
            cooking: {
                name: string;
                background: string;
            };
            shopping: {
                name: string;
                background: string;
            };
        };
    };
}
declare namespace Template {
    let sounds: {
        afterlifeSoundBeginning: string;
    };
}
declare namespace Template {
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
        bigWipe2: {
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
        wet: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
}
declare namespace Template {
    function Scene1_1(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene1_2(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene2(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene3_1(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene3_2(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene3_3(): ƒS.SceneReturn;
}
