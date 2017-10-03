using System.Collections;
using System.Collections.Generic;
using UnityEngine;




public class NextAxis : MonoBehaviour {

	public static float TheXAxis =199.7f;
	public float InternalAxis;

	void Update () {
		//TheXAxis=199.7;
		InternalAxis=TheXAxis;
	}
}
