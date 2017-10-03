var speed : float = 8.0;
var jumpspeed : float = 20.5;
var gravity : float = 20.0;
var moveDirection : Vector3 = Vector3.zero;
var fly	          : AnimationClip;

function Update () {
	var controller : CharacterController = GetComponent.<CharacterController>();
	    
		moveDirection = Vector3(0, 0, Input.GetAxis("Horizontal")+3);
			moveDirection = transform.TransformDirection(moveDirection);


			 {
				moveDirection.y += jumpspeed;
//				GetComponent.<Animation>().Play("fly", PlayMode.StopAll);
			}





			moveDirection.y -= gravity * Time.deltaTime;
			//speed +=.15;
			//speed +=Time.deltaTime;
			controller.Move(moveDirection * Time.deltaTime);
			}
