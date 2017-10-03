var levelno : int =1;
var button1  : GameObject;
var button2  : GameObject;
var button3  : GameObject;
var button4  : GameObject;
var button5  : GameObject;
var next     : GameObject;


function Start () {
    levelno =PlayerPrefs.GetInt("Level");
    if (levelno == 6 || levelno ==0)
    {
    button1.SetActive(true);
    }
    if (levelno == 7)
    {
    button1.SetActive(true);
    button2.SetActive(true);
    }
    if (levelno == 8)
    {
    button1.SetActive(true);
    button2.SetActive(true);
    button3.SetActive(true);

    }
    if (levelno == 9)
    {
    button1.SetActive(true);
    button2.SetActive(true);
    button3.SetActive(true);
    button4.SetActive(true);
    }
     if (levelno == 10)
    {
    button1.SetActive(true);
    button2.SetActive(true);
    button3.SetActive(true);
    button4.SetActive(true);
    button5.SetActive(true);
    }
  
//	yield WaitForSeconds (3);
//	Application.LoadLevel(1);
	//PlayerPrefs.SetInt ("Level", 1);
}