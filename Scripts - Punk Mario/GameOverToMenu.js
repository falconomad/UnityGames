
//import AppAdvisory.ads;

function Start () {
	yield WaitForSeconds (2);
	GlobalLives.LivesAmount += 3;
	GlobalCoin.CoinCount=0;
	Application.LoadLevel (1);
}