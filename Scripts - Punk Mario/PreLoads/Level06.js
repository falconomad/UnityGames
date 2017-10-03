function Start () {
	yield WaitForSeconds (2);
	PlayerPrefs.SetInt ("Level", 6);
	Application.LoadLevel(14);

}