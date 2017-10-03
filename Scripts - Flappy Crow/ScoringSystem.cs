using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ScoringSystem : MonoBehaviour {






	public static int TheScore;
	public static int BallCount=3;
	public Text ScoreDisplay;
	public Text BallDisplay;


	void  Start () {
		InvokeRepeating("AddScore", 1f, 0.1f);
	}


	void AddScore() {

		ScoreDisplay.text = ""+ TheScore;
		BallDisplay.text = ""+ BallCount;
	}

}
