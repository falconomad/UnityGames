var LifeSound : AudioSource;
var LifeShroom : GameObject;


function OnTriggerEnter (col : Collider) {
	if (col.gameObject.tag == "Player") {
		this.transform.position = Vector3(0, -1000, 0);
		LifeSound.Play();
		GlobalLives.LivesAmount +=1;
		LifeShroom.SetActive(false);

	}
}
