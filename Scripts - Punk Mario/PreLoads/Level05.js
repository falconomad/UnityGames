function Start () {
	yield WaitForSeconds (2);
	PlayerPrefs.SetInt ("Level", 5);
	Application.LoadLevel(12);

}