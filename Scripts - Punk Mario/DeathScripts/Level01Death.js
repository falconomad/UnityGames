var DeathSound : AudioSource;
//var LevelMusic : GameObject;
var CamFollow : GameObject;
var ThePlayer : GameObject;
var Temp      :Component;

function OnTriggerEnter (col : Collider) {
//LevelMusic.SetActive(false);
    GlobalLives.LivesAmount -=1;
	DeathSound.Play();
	//CamFollow.GetComponent("CameraFollow").enabled=false;
	//CamFollow.Find("CameraFollow").GetComponent(Level01Death).enabled=false;
	(CamFollow.GetComponent("CameraFollow") as CameraFollow).enabled = false;
	//ThePlayer.GetComponent("ThirdPersonUserControl").enabled=false;
	//ThePlayer.Find("ThirdPersonUserControl").GetComponent(Level01Death).enabled=false;
	//(ThePlayer.GetComponent("ThirdPersonUserControl") as ThirdPersonUserControl).enabled = false;
 
	//ThePlayer.GetComponent("ThirdPersonCharacter").enabled=false;
	//ThePlayer.Find("ThirdPersonCharacter").GetComponent(Level01Death).enabled=false;
	//(ThePlayer.GetComponent("ThirdPersonCharacter") as ThirdPersonCharacter).enabled = false;
	//ThePlayer.transform.localScale -=new Vector3(0.0,0.7,0.0);
	//ThePlayer.GetComponent("CapsuleCollider").enabled=false;

	//yield WaitForSeconds(0.5);
	//ThePlayer.Find("CapsuleCollider").GetComponent(Level01Death).enabled=false;
	//(ThePlayer.GetComponent("CapsuleCollider") as CapsuleCollider).enabled = false;
	ThePlayer.SetActive(false);


	yield WaitForSeconds(2);
	Application.LoadLevel(2);
}