 var speed = 20.0;
 
 function Update () {
    var x = Input.GetAxis("Horizontal") * Time.deltaTime * speed;
    var y = Input.GetAxis("Vertical") * Time.deltaTime * speed;
    transform.Translate(x, y, 0);
 }