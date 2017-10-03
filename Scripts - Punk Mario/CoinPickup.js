var CoinSound : AudioSource;
function OnTriggerEnter (col : Collider) 
{
    CoinSound.Play();
	transform.position = Vector3(0, -1000, 0);
	GlobalCoin.CoinCount += 1;
	GlobalScore.CurrentScore +=10;
}