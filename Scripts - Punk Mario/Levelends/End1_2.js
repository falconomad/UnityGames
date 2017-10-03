var FadeScreen : GameObject;
var ThePlayer : GameObject;
var TimeScore : int;
var TimeLeftInt : int;

function OnTriggerEnter() {
	FadeScreen.SetActive(true);
	//FadeScreen.GetComponent("Animator").enabled=true;
	(FadeScreen.GetComponent("Animator") as Animator).enabled=true;
	//FadeScreen.Find("Animator").GetComponent(End1_1).enabled= true;
	TimeLeftInt=CountingDown.TimeLeft;
	TimeScore=TimeLeftInt*10;
	GlobalScore.CurrentScore+=TimeScore;
	yield WaitForSeconds(0.495);
	//FadeScreen.GetComponent("Animator").enabled=false;
	//FadeScreen.Find("Animator").GetComponent(End1_1).enabled= false;
	(FadeScreen.GetComponent("Animator") as Animator).enabled=false;
	Application.LoadLevel(9);
}