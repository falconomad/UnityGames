var speed : float = 8.0;
var jumpspeed : float = 20.5;
var gravity : float = 20.0;
var moveDirection : Vector3 = Vector3.zero;
var fly	          : AnimationClip;


function Update () {
	var controller : CharacterController = GetComponent.<CharacterController>();

      
		if (controller.isGrounded) {
			moveDirection = Vector3(0, 0, Input.GetAxis("Horizontal")+3);
			moveDirection = transform.TransformDirection(moveDirection);
			moveDirection *= speed;


			if (Input.GetButtonDown ("Jump")) {
				moveDirection.y += jumpspeed;
				GetComponent.<Animation>().Play("fly", PlayMode.StopAll);
			}

			}
			else {
			if (Input.GetButtonDown ("Jump")) {
				moveDirection.y += jumpspeed;
				GetComponent.<Animation>().Play("fly", PlayMode.StopAll);
			}
			}

			moveDirection.y -= gravity * Time.deltaTime;
			//speed +=.15;
			moveDirection.x +=Time.deltaTime;;
			controller.Move(moveDirection * Time.deltaTime);
			}
			function jump()
			{
			var controller : CharacterController = GetComponent.<CharacterController>();
			moveDirection.y += jumpspeed;
				GetComponent.<Animation>().Play("fly", PlayMode.StopAll);

				controller.Move(moveDirection * Time.deltaTime);
				}