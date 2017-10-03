using System.Collections;
using System.Collections.Generic;
using UnityEngine;




public class GenerateSections : MonoBehaviour {
	public float NewXAxis = NextAxis.TheXAxis;
	public int  GenSec ;
	public GameObject NewSec;
	public GameObject Section01;
	public GameObject Section02;
	public GameObject Section03;
	public GameObject Section04;
	public GameObject Section05;
	public GameObject Section06;



	void OnTriggerEnter(Collider col)
	{

		Vector3	NextPosition =new Vector3 (NextAxis.TheXAxis, 19.1f, 0f);
		GenSec = Random.Range (2, 7);


		if (GenSec == 2) {
			NewSec = Section02;
		}
		if (GenSec == 3) {
			NewSec = Section03;
		}
		if (GenSec == 4) {
			NewSec = Section04;
		}
		if (GenSec == 5) {
			NewSec = Section05;
		}
		if (GenSec == 6) {
			NewSec = Section06;
		}
		Instantiate (NewSec, NextPosition, Quaternion.Euler (new Vector3 (90, 0, 180)));
		NextAxis.TheXAxis += 200;
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
