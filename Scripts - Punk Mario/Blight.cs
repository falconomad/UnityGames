using UnityEngine;
using System.Collections;

public class Blight : MonoBehaviour 
{
	Light light;
	public float minIntensity = 0.0f;
	public float maxIntensity = 1.5f;	
	public float frequency = 0.01f;
	public float phase = 0.0f;
	//public AudioClip maxSound = null;

	void Start () 
	{
		light = GetComponent<Light>();
	}

	void Update () 
	{
		float x = (Time.time + phase) * frequency;
		x = x - Mathf.Floor(x); // normalized value to 0..1
		light.intensity = maxIntensity * Mathf.Sin(2 * Mathf.PI * x) + minIntensity;

		//if (light.intensity >= (maxIntensity - 1) && maxSound != null)
		//	audio.PlayOneShot(maxSound);
		}
}