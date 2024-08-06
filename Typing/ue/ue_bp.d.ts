/// <reference path="puerts.d.ts" />
declare module "ue" {
    import {$Ref, $Nullable} from "puerts"

    import * as cpp from "cpp"

    import * as UE from "ue"

// __TYPE_DECL_START: 35E4F29743DB244845ED1CA24AACE095
    namespace Game.Blueprints.TypeScript.TS_Player {
        class TS_Player_C extends UE.Character {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            GunLocation: UE.SceneComponent;
            FpsCamera: UE.CameraComponent;
            ExecuteUbergraph_TS_Player(EntryPoint: number) : void;
            InpAxisEvt_MoveForward_K2Node_InputAxisEvent_0(AxisValue: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TS_Player_C;
            static Load(InName: string): TS_Player_C;
        
            __tid_TS_Player_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: C42C9C7C4EE098C45E3DE298F1E469B0
    namespace Game.PuerTS_Test.Blueprints.GM_Tutorial {
        class GM_Tutorial_C extends UE.GameModeBase {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            DefaultSceneRoot: UE.SceneComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): GM_Tutorial_C;
            static Load(InName: string): GM_Tutorial_C;
        
            __tid_GM_Tutorial_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
}
