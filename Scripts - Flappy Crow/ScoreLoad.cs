using System.Collections;
using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ScoreLoad : MonoBehaviour {

	//public fileName = "highscore.data";
	public int ScoreL;
	public static int CompareScore;

	public Text HighScoreDisplay;

	//var line : String;

	void Start () {
		//var sr : StreamReader = new StreamReader(fileName);

		//line = sr.ReadLine();
		//while (line != null) {
		//	ScoreLoad = line;
		//	line = sr.ReadLine();
		//}
		//sr.Close();
		ScoreL= PlayerPrefs.GetInt("HighScore");

		HighScoreDisplay.text = "" + ScoreL;
		CompareScore = ScoreL;
	}
}
