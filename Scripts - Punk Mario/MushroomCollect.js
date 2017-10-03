var GrowSound : AudioSource;
var ThePlayer : GameObject;
var mushroom  : GameObject;

function OnTriggerEnter (col : Collider) {
	if (col.gameObject.tag == "Player") {
		this.transform.position = Vector3(0, -1000, 0);
		GrowSound.Play();
		ThePlayer.transform.localScale += new Vector3(0.1, 0.1, 0.1);
		//yield WaitForSeconds(0.05);
		//ThePlayer.transform.localScale += new Vector3(0.2, 0.2, 0.2);
		//yield WaitForSeconds(0.05);
		//ThePlayer.transform.localScale += new Vector3(0.2, 0.2, 0.2);
		//yield WaitForSeconds(0.05);
		//ThePlayer.transform.localScale += new Vector3(0.2, 0.2, 0.2);
		//yield WaitForSeconds(0.05);
		//ThePlayer.transform.localScale += new Vector3(0.2, 0.2, 0.2);
	}
}
