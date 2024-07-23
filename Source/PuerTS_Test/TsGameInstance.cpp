#include "TsGameInstance.h"

void UTsGameInstance::Init()
{
    Super::Init();
}

void UTsGameInstance::OnStart()
{
    Super::OnStart();
    // �����Ĭ�ϼ���JavaScript�ļ��ĸ�Ŀ¼��Content/JavaScript, ��Ŀ¼������FJsEnv���캯��ָ��
    // GameScript = MakeShared<puerts::FJsEnv>(std::make_unique<puerts::DefaultJSModuleLoader>(TEXT("JavaScript")), std::make_shared<puerts::FDefaultLogger>(), 8080);

    GameScript = MakeShared<puerts::FJsEnv>();
    TArray<TPair<FString, UObject*>> Arguments;
    Arguments.Add(TPair<FString, UObject*>(TEXT("GameInstance"), this));
    GameScript->Start("QuickStart", Arguments);
}

void UTsGameInstance::Shutdown()
{
    Super::Shutdown();
    GameScript.Reset();
}