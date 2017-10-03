static var LivesAmount : int = 2;
var InternalLives : int;
var LifeTextBox : GameObject;

function Update () {
	InternalLives = LivesAmount;
	LifeTextBox.GetComponent.<Text>().text =""+InternalLives;

	if (InternalLives == 0) {

Application.LoadLevel(4);	}

}

function GameOverScene () {
		yield WaitForSeconds(2);
		Application.LoadLevel (4);
}
