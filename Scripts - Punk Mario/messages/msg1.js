var msg : GameObject;
var trigger : GameObject;
var controlmsg : GameObject;

function OnTriggerEnter(col : Collider) {
controlmsg.SetActive(false);
msg.SetActive(true);
yield WaitForSeconds(3.5);
msg.SetActive(false);

(trigger.GetComponent("BoxCollider") as BoxCollider).enabled=false;
}

function Update () {
	
}
