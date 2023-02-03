namespace Revived {
    export function bonnyIntro(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positions.bottomright,
            color: ƒS.Color.CSS("white", 0)
          },
          end: {
            translation: ƒS.positionPercent(30, 110),
            color: ƒS.Color.CSS("white", 1)
          },
          duration: 5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }

    export function boIntro(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positions.bottomright,
            color: ƒS.Color.CSS("white", 0)
          },
          end: {
            translation: ƒS.positionPercent(70, 100),
            color: ƒS.Color.CSS("white", 1)
          },
          duration: 3,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }

    export function introLeftBorder(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(-20, 100)
          },
          end: {
            translation: ƒS.positionPercent(30, 100)
          },
          duration: 3.5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }

    export function outroLeftBorder(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(30, 100)
          },
          end: {
            translation: ƒS.positionPercent(-30, 100)
          },
          duration: 3,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }

    export function introRightBorder(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(110, 100)
          },
          end: {
            translation: ƒS.positionPercent(70, 100)
          },
          duration: 2,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }
    export function outroRightBorder(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(70, 100)
          },
          end: {
            translation: ƒS.positionPercent(115, 100)
          },
          duration: 2,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }

    export function leftToRightBorder(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(30, 100)
          },
          end: {
            translation: ƒS.positionPercent(110, 100)
          },
          duration: 3,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }

    export function outroRightToLeftBorder(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(70, 100)
          },
          end: {
            translation: ƒS.positionPercent(-30, 100)
          },
          duration: 3,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }
    
    export function bumpingAnimationBonny(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(30, 100)
          },
          end: {
            translation: ƒS.positionPercent(70, 100)
          },
          duration: 1.5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }
      
    export function bumpingAnimationNat(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(110, 100)
          },
          end: {
            translation: ƒS.positionPercent(30, 100)
          },
          duration: 1.5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }
    
    export function fadeIn(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(30, 100),
            color: ƒS.Color.CSS("white", 0)
          },
          end: {
            translation: ƒS.positionPercent(30, 100),
            color: ƒS.Color.CSS("white", 1)
          },
          duration: 3,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }
    
    export function fadeOut(): ƒS.AnimationDefinition {
        return {
          start: {
            color: ƒS.Color.CSS("white", 1)
          },
          end: {
            color: ƒS.Color.CSS("white", 0)
          },
          duration: 3,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }
      
    // export function rightToLeft(): ƒS.AnimationDefinition {
      //   return {
      //   start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.3) },
      //   end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
      //   duration: 1,
      //   playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
      //   };
      //   }
}