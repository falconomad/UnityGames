using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ScoreSave : MonoBehaviour {



	//var fileName = "highscore.data";
	public int ScoreAmount;
	public int HighScore;
	public GameObject newhigh;

	IEnumerator Start () 
	{
		HighScore = ScoreLoad.CompareScore;
		ScoreAmount = ScoringSystem.TheScore;
		//var OurFile = File.CreateText(fileName);
		//OurFile.WriteLine (ScoreAmount);
		//OurFile.Close();
		if (ScoreAmount >= ScoreLoad.CompareScore) 
		{
			PlayerPrefs.SetInt ("HighScore", ScoreAmount);
			newhigh.SetActive (true);
			yield return new WaitForSeconds (0.5f);
			newhigh.SetActive (false);
		}
	}
}
