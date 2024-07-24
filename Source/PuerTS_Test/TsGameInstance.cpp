#include "TsGameInstance.h"

void UTsGameInstance::Init()
{
    Super::Init();
}

void UTsGameInstance::OnStart()
{
    Super::OnStart();
    UE_LOG(LogTemp, Warning, TEXT("TsGameInstance OnStart."));
    UE_LOG(LogTemp, Log, TEXT("TsGameInstance OnStart."));
    // 虚拟机默认加载JavaScript文件的根目录是Content/JavaScript, 该目录可以在FJsEnv构造函数指定
    GameScript = MakeShared<puerts::FJsEnv>(std::make_unique<puerts::DefaultJSModuleLoader>(TEXT("JavaScript")), std::make_shared<puerts::FDefaultLogger>(), 8080);
    // GameScript = MakeShared<puerts::FJsEnv>();

    // 传入参数
    TArray<TPair<FString, UObject*>> Arguments;
    Arguments.Add(TPair<FString, UObject*>(TEXT("GameInstance"), this));
    
    GameScript->Start("QuickStart", Arguments);
}

void UTsGameInstance::Shutdown()
{
    Super::Shutdown();
    GameScript.Reset();
}