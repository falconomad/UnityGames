
var PipeEnt : GameObject;
var StoodOn : int;
var qwerty  : int;
var MainCam : GameObject;
var SecondCam  : GameObject;
var MainPlayer :GameObject;
var fadeScreen : GameObject;
var PipeSound  :AudioSource;
var PipeDownButton : GameObject;


function OnTriggerEnter (col : Collider) {
	StoodOn = 1;
	PipeDownButton.SetActive(true);

}

function OnTriggerExit (col : Collider) {
	StoodOn = 0;
	PipeDownButton.SetActive(false);
}


function Update () {
	if (Input.GetButtonDown("GoDown")) {
		if (StoodOn == 1) {
			//GameObject.Find("FPSController").GetComponent("FirstPersonController").enabled=false;
			transform.position = Vector3(0, -1000, 0);
			WaitingForPipe();
			qwerty =1;
		}
	}
}

function WaitingForPipe () {
    PipeSound.Play();
    fadeScreen.SetActive(true);

	//PipeEnt.GetComponent("Animator").enabled=true;
	(PipeEnt.GetComponent("Animator") as Animator).enabled=true;
	//PipeEnt.Find("Animator").GetComponent(PipeEntry).enabled=true;
	yield WaitForSeconds(0.5);
	//fadeScreen.GetComponent("Animator").enabled=true;
	(fadeScreen.GetComponent("Animator") as Animator).enabled=true;
	//fadeScreen.Find("Animator").GetComponent(PipeEntry).enabled = true;
	//yield WaitForSeconds(0.1);
	//fadeScreen.GetComponent("Animator").enabled=false;
	(fadeScreen.GetComponent("Animator") as Animator).enabled=false;
	//fadeScreen.Find("Animator").GetComponent(PipeEntry).enabled = false;
	//PipeEnt.GetComponent("Animator").enabled=false;
	(PipeEnt.GetComponent("Animator")as Animator).enabled=false;
	//PipeEnt.Find("Animator").GetComponent(PipeEntry).enabled=false;
	//GameObject.Find("FPSController").GetComponent("FirstPersonController").enabled=true;
	SecondCam.SetActive(true);
	MainCam.SetActive(false);
	MainPlayer.transform.position= new Vector3 (23.4,-19.24,1.31);
	//fadeScreen.GetComponent("Animator").enabled=true;
	(fadeScreen.GetComponent("Animator") as Animator).enabled=true;
	//fadeScreen.Find("Animator").GetComponent(PipeEntry).enabled = true;
	yield WaitForSeconds(0.5);
	//fadeScreen.GetComponent("Animator").enabled=false;
	(fadeScreen.GetComponent("Animator") as Animator).enabled=false;
	//fadeScreen.Find("Animator").GetComponent(PipeEntry).enabled = false;
	fadeScreen.SetActive(false );
}

function blah () {
//	if (Input.GetButtonDown("GoDown")) {
		if (StoodOn == 1) {
			//GameObject.Find("FPSController").GetComponent("FirstPersonController").enabled=false;
			transform.position = Vector3(0, -1000, 0);
			WaitingForPipe();
			qwerty =1;
		}
	}
//}