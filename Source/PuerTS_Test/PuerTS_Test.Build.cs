// Copyright Epic Games, Inc. All Rights Reserved.

using UnrealBuildTool;

public class PuerTS_Test : ModuleRules
{
	public PuerTS_Test(ReadOnlyTargetRules Target) : base(Target)
	{
		PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;
	
		PublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine", "InputCore" });

		PrivateDependencyModuleNames.AddRange(new string[] {  });
		
	}
}
