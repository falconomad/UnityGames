var QBlock : GameObject;
var DeadBlock : GameObject;
var Mushroom : GameObject;
var Qblk     :GameObject;

function OnTriggerEnter (col : Collider) {
	QBlock.SetActive(false);
	DeadBlock.SetActive(true);
	//DeadBlock.GetComponent("BoxCollider").enabled=false;
	//Qblk.GetComponent("BoxCollider").enabled=false;
	//Qblk.Find("BoxCollider").GetComponent(QBlock001).enabled = false;
	(Qblk.GetComponent("BoxCollider") as BoxCollider).enabled = false;
	yield WaitForSeconds (0.2);
//	Mushroom.SetActive(true);
}
