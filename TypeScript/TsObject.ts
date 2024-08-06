import * as UE from 'ue';


class TsObject extends UE.Object {
    public static WorldContext: UE.Object | undefined = undefined;

    public Init(worldContext: UE.Object): void {
        UE.KismetSystemLibrary.PrintString(null, "TsObject Init", true, true, new UE.LinearColor(1.0, 0.0, 0.66, 1.0), 2.0)
    }
}




export default TsObject;