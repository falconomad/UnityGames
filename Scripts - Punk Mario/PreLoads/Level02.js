
var levelch : int;
function Start () {
    levelch =PlayerPrefs.GetInt("Level");
	yield WaitForSeconds (2);
	if (levelch<=2)
	{
	PlayerPrefs.SetInt ("Level", 2);
	}
	Application.LoadLevel(6);

}