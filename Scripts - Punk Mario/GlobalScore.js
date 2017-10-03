
static var CurrentScore : int;
var InternalScore : int;
var ScoreDisplay  : GameObject;
function Start () {

InternalScore= CurrentScore;
ScoreDisplay.GetComponent.<Text>().text = "Score "+ InternalScore;
	
}

function Update () {
	
}
