using UnityEngine;
using System.Collections;
using UnityEngine.UI;

//Add this Script Directly to The Death Zone
public class eggcollect : MonoBehaviour
{
	public AudioSource ping;
	public GameObject bonus;// Add your Audi Clip Here;
	// This Will Configure the  AudioSource Component; 
	// MAke Sure You added AudioSouce to death Zone;
	       

	void OnCollisionEnter (Collision collision)  //Plays Sound Whenever collision detected
	{
		ping.Play ();
		bonus.SetActive (false);
	}
	// Make sure that deathzone has a collider, box, or mesh.. ect..,
	// Make sure to turn "off" collider trigger for your deathzone Area;
	// Make sure That anything that collides into deathzone, is rigidbody;
}