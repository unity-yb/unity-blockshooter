var flickerAmount : float; // チラツキ量

private var intensity : float; // 元の輝度

function Start () {
	intensity = light.intensity;
}

function Update () {
	light.intensity = intensity * (1.0 - Random.Range(0.0, flickerAmount));
}
