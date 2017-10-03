var levelch : int;

function Start () {
    levelch =PlayerPrefs.GetInt("Level");
	yield WaitForSeconds (2);
	if(levelch<=3)
	{
	PlayerPrefs.SetInt ("Level", 3);
	}
	Application.LoadLevel(8);

}