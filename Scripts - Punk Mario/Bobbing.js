var XPos : float;
var YPos : float;
var ZPos : float;




function OnTriggerEnter (col : Collider) {
XPos  = transform.position.x;
 YPos  = transform.position.y;
 ZPos  = transform.position.z;
transform.GetComponent.<Collider>().isTrigger = false;
	if (col.gameObject.tag == "Player") {
	this.transform.position = Vector3(XPos, YPos+0.2, ZPos);
	yield WaitForSeconds(0.08);
	this.transform.position = Vector3(XPos, YPos, ZPos);
	yield WaitForSeconds(0.25);
	transform.GetComponent.<Collider>().isTrigger = true;
	}
}