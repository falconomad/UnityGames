var MushroomMan : GameObject;
var Fart        :AudioSource;
var BossTheme   : GameObject;
//var ShroomDeath :GameObject;     

function OnTriggerEnter (col : Collider) {
//	this.GetComponent("BoxCollider").enabled = false;
	(this.GetComponent("BoxCollider") as BoxCollider).enabled = false;
//	ShroomDeath.Find("BoxCollider").GetComponent(MushroomManDeath).enabled=false;


	//MushroomMan.GetComponent("MushroomManMove").enabled = false;
	//MushroomMan.Find("Animator").GetComponent(MushroomManDeath).enabled=false;
	Fart.Play();
	BossTheme.SetActive(false);
	MushroomMan.transform.localScale -= new Vector3(0, 9, 0);
	MushroomMan.transform.localPosition -= new Vector3(0, 1, 0);
	yield WaitForSeconds(0.5);
	MushroomMan.transform.position = Vector3(0, -1000, 0);
}