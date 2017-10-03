var resume : GameObject;
var main   : GameObject;
var CamFollow : GameObject;
var ThePlayer : GameObject;


function pause () {

resume.SetActive(true);
main.SetActive(true);
(CamFollow.GetComponent("CameraFollow") as CameraFollow).enabled = false;
ThePlayer.SetActive(false);

}

function back () 
{
resume.SetActive(false);
main.SetActive(false);
(CamFollow.GetComponent("CameraFollow") as CameraFollow).enabled = true;
ThePlayer.SetActive(true);

	
}

function mainmenu()
{
Application.LoadLevel(0);
}
