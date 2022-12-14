namespace Template {
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

    export function leftToRight(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positions.bottomleft
          },
          end: {
            translation: ƒS.positionPercent(30, 100)
          },
          duration: 3,
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