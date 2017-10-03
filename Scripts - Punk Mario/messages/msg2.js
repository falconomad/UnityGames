var msg1 : GameObject;
var msg2 : GameObject;



function OnTriggerEnter(col : Collider) {
msg1.SetActive(false);
msg2.SetActive(true);
yield WaitForSeconds(3.5);
msg2.SetActive(false);

}

function Update () {
	
}
