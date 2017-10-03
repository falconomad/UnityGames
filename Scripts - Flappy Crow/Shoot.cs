using UnityEngine;


public class Shoot : MonoBehaviour
{
	public GameObject bulletPrefab;
	public Transform bulletSpawn;
	public float fallSpeed = 100.0f;
	public float spinSpeed = 250.0f;
	public AudioSource drop;


	void Update()
	{
		

		var x = Input.GetAxis("Horizontal") * Time.deltaTime * 150.0f;
		var z = Input.GetAxis("Vertical") * Time.deltaTime * 3.0f;

		transform.Rotate(0, x, 0);
		transform.Translate(0, 0, z);

		if (Input.GetButtonDown ("drop"))
		{
			Fire();
			drop.Play ();

		}
	}


	void Fire()
	{
		// Create the Bullet from the Bullet Prefab
		var bullet = (GameObject)Instantiate(
			bulletPrefab,
			bulletSpawn.position,
			bulletSpawn.rotation);

		//transform.Translate(Vector3.down * fallSpeed * Time.deltaTime, Space.World);
		//transform.Rotate(Vector3.forward, spinSpeed * Time.deltaTime);

		// Destroy the bullet after 2 seconds
		Destroy(bullet, 1.0f);        
	}


}