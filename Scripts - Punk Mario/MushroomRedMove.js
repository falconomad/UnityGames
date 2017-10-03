var LeftPoint : float = -20;
var RightPoint : float = 11;
var Direction : int = 1;  //  1 = moving right, 2 = moving left


function Update () {
		transform.parent = null;
		if (Direction == 1) {
			transform.Translate(Vector3.right * 5 * Time.deltaTime, Space.World);
			Direction = 1;
		}
	
		if (this.transform.position.x > RightPoint) {
			Direction = 2;
		}

		if (Direction == 2) {
			transform.Translate(Vector3.right * -5 * Time.deltaTime, Space.World);
			Direction = 2;
		}
		
		if (this.transform.position.x < LeftPoint) {
			Direction = 1;
		}
}
