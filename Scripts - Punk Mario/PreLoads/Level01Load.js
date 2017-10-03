var levelch : int;

function  Start () {
    
    levelch =PlayerPrefs.GetInt("Level");

	yield WaitForSeconds (2);
	Application.LoadLevel(3);
	//PlayerPrefs.SetInt ("Level", 1);
}