using UnityEngine;
using System.Collections;

public class drop: MonoBehaviour {

	public float fallSpeed = 50.0f;
	public float spinSpeed = 250.0f;

	void Update() {

		transform.Translate(Vector3.down * fallSpeed * Time.deltaTime, Space.World);
		transform.Rotate(Vector3.forward, spinSpeed * Time.deltaTime);

	}

	//void OnMouseDown() {

	//	renderer.enabled = false;

	//}


}
