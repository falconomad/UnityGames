function Start () {
	yield WaitForSeconds (2);
	PlayerPrefs.SetInt ("Level", 7);
	Application.LoadLevel(17);

}