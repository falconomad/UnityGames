using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Shoot1 : MonoBehaviour {




	public GameObject bulletPrefab;
	public Transform bulletSpawn;
	public float fallSpeed= 100.0f;
	public float spinSpeed = 250.0f;
	public AudioSource drop;
	public GameObject bullet;
	public GameObject HighScore;
	public GameObject plane;
	public GameObject death;


	public void  Update()
	{


		var x = Input.GetAxis("Horizontal") * Time.deltaTime * 150.0f;
		var z = Input.GetAxis("Vertical") * Time.deltaTime * 3.0f;

		transform.Rotate(0, x, 0);
		transform.Translate(0, 0, z);

		if (Input.GetButtonDown ("drop"))

		{
			if (ScoringSystem.BallCount > 0) {
				Fire ();
				drop.Play ();
				ScoringSystem.BallCount -= 1;
			} else {
				HighScore.SetActive (true);
				plane.SetActive (false);
				death.SetActive (true);

			}
		}
	}

	public void  Fire()
	{
		
		bullet= Instantiate(bulletPrefab,bulletSpawn.position,bulletSpawn.rotation);
		Destroy(bullet,1.0f);
	}


}
