using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class eggcollect1 : MonoBehaviour {


	public AudioSource StarSound;
	public GameObject bonus;
	public AudioSource cry;
	public GameObject egg;


	IEnumerator OnTriggerEnter (Collider col) {
		StarSound.Play();
		cry.Play();
		ScoringSystem.TheScore += 1;
		ScoringSystem.BallCount +=1;
		//Destroy(egg,0.5f);
		//ScoringSystem.TheScore += StarScore;
		//this.transform.position = Vector3(0, 1000, 0);
		//	bonus.GetComponent.<Text> ().enabled = true;
		bonus.SetActive (true);
		yield return new WaitForSeconds (0.5f);
		bonus.SetActive (false);
	}
}