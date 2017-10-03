function Start () {
	yield WaitForSeconds (2);
	PlayerPrefs.SetInt ("Level", 4);
	Application.LoadLevel(10);

}