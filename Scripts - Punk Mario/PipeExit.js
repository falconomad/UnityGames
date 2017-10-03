var PipeSound : AudioSource;
var FadeScreen : GameObject;
var MainCam : GameObject;
var SecondCam : GameObject;
var PipeEntry : GameObject;
var MainPlayer : GameObject;

function OnTriggerEnter (col : Collider) {
	PipeSound.Play();
	FadeScreen.SetActive(true);
	//FadeScreen.GetComponent("Animator").enabled=true;
	(FadeScreen.GetComponent("Animator") as Animator).enabled=true;
//	FadeScreen.Find("Animator").GetComponent(PipeExit).enabled = true;
	yield WaitForSeconds(0.4);
	//FadeScreen.GetComponent("Animator").enabled=false;
	(FadeScreen.GetComponent("Animator") as Animator).enabled = false;
	//FadeScreen.Find("Animator").GetComponent(PipeExit).enabled = false;
	MainCam.SetActive(true);
	SecondCam.SetActive(false);
	MainPlayer.transform.position = Vector3(46.2, 3.49, 1.5);
	//PipeEntry.GetComponent("Animator").enabled=true;
	(PipeEntry.GetComponent("Animator")as Animator).enabled=true;
	//PipeEntry.Find("Animator").GetComponent(PipeExit).enabled = true;
	//FadeScreen.GetComponent("Animator").enabled=true;
	(FadeScreen.GetComponent("Animator") as Animator).enabled=true;
	//FadeScreen.Find("Animator").GetComponent(PipeExit).enabled = true;
	yield WaitForSeconds(0.3);
	//FadeScreen.GetComponent("Animator").enabled=false;
	(FadeScreen.GetComponent("Animator") as Animator).enabled=false;
	//FadeScreen.Find("Animator").GetComponent(PipeExit).enabled = false;
	yield WaitForSeconds(0.8);
	//PipeEntry.GetComponent("Animator").enabled=false;
	(PipeEntry.GetComponent("Animator")as Animator).enabled=false;
	//PipeEntry.Find("Animator").GetComponent(PipeExit).enabled = false;
	FadeScreen.SetActive(false);
}