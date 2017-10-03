using UnityEngine;
using UnityEngine.UI; // <-- you need this to access UI (button in this case) functionalities

public class fk3 : MonoBehaviour {
	Button myButton;

	void Awake()
	{
		myButton = GetComponent<Button>(); // <-- you get access to the button component here

		myButton.onClick.AddListener( () => {myFunctionForOnClickEvent("stringValue", 4.5f);} );  // <-- you assign a method to the button OnClick event here
		//myButton.onClick.AddListener(() => {myAnotherFunctionForOnClickEvent("stringValue", 3);}); // <-- you can assign multiple methods
	}

	void myFunctionForOnClickEvent(string argument1, float argument2)
	{
		// your code goes here
		Application.LoadLevel(7);
	}


}