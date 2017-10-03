var MainCam : GameObject;
var BackWall : GameObject;
var BossTheme  : AudioSource;
var BossTrigger : GameObject;
var msg         :GameObject;

function OnTriggerEnter () {
	//MainCam.GetComponent("CameraFollow").enabled = false;
	(MainCam.GetComponent("CameraFollow") as CameraFollow).enabled = false;
	BossTheme.Play();

	BossTrigger.SetActive(false);
	BackWall.SetActive(true);
	msg.SetActive(true);
	yield WaitForSeconds(3);
	msg.SetActive(false);


}