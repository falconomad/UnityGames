import UnityEngine.SceneManagement;
var StarSound : AudioSource;
var plane     : GameObject;
var death     : GameObject;
var button1   : GameObject;
var button2   : GameObject;
//static var crashed   : int =0;;

var HighScore : GameObject;

function start()
{
 death.SetActive(false);

}

function OnTriggerEnter (col : Collider) {

    HighScore.SetActive(true);
    plane.SetActive(false);
	StarSound.Play();
	death.SetActive(true);
	//crashed = 1;
	button1.SetActive(false);
	button2.SetActive(false);
	yield WaitForSeconds (1);

	//NextAxis.TheXAxis=0;
	SceneManager.LoadScene (2);


	//ScoringSystem.TheScore += StarScore;
	//this.transform.position = Vector3(0, 1000, 0);
}