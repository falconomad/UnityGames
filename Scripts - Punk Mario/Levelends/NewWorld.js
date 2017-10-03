var FadeScreen : GameObject;

function OnTriggerEnter (col : Collider) 
{
FadeScreen.SetActive(true);
yield WaitForSeconds(0.6);

Application.LoadLevel(7);
FadeScreen.SetActive(false);
}