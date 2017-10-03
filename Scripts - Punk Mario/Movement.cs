using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Movement : MonoBehaviour {

	// Use this for initialization
	public float MoveSpeed = 10;
	public float RotateSpeed = 40;
	public AnimationClip run;



	void Start()
	{
		
	}
	// Update is called once per frame


	void Update () 
	{
		// Amount to Move
		float MoveForward = Input.GetAxis("Vertical")  *MoveSpeed * Time.deltaTime;
		float MoveRotate = Input.GetAxis("Horizontal") * RotateSpeed*  Time.deltaTime;


		// Move the player
		transform.Translate(Vector3.forward * MoveForward);

		GetComponent<Animation> ().Play ("run", PlayMode.StopAll);
		//transform.Rotate(Vector3.up * MoveRotate);

	}

}

