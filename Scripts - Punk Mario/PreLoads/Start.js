var levelno : int =1;
var button1  : GameObject;
var button2  : GameObject;
var button3  : GameObject;
var button4  : GameObject;
var button5  : GameObject;
var next     : GameObject;


function Start () {
    levelno =PlayerPrefs.GetInt("Level");
    if (levelno == 1 || levelno ==0)
    {
    button1.SetActive(true);
    }
    if (levelno == 2)
    {
    button1.SetActive(true);
    button2.SetActive(true);
    }
    if (levelno == 3)
    {
    button1.SetActive(true);
    button2.SetActive(true);
    button3.SetActive(true);

    }
    if (levelno == 4)
    {
    button1.SetActive(true);
    button2.SetActive(true);
    button3.SetActive(true);
    button4.SetActive(true);
    }
     if (levelno == 5)
    {
    button1.SetActive(true);
    button2.SetActive(true);
    button3.SetActive(true);
    button4.SetActive(true);
    button5.SetActive(true);
    }
    if (levelno>5)
    {
     button1.SetActive(true);
    button2.SetActive(true);
    button3.SetActive(true);
    button4.SetActive(true);
    button5.SetActive(true);
    next.SetActive(true);
    }
//	yield WaitForSeconds (3);
//	Application.LoadLevel(1);
	//PlayerPrefs.SetInt ("Level", 1);
}