// 弾丸を撃ち出す処理のスクリプト。

var bulletPrefab : GameObject;	// 弾丸のプレハブ。
var initialVelocity : float;	// 弾丸の初速。

function Update() {
	// "Fire1"ボタン（マウスクリックの代用）が押されていたら……
	if (Input.GetButtonDown("Fire1")) {
		// 弾丸プレハブのインスタンス化して、変数bulletに代入する。
		var bullet : GameObject =
		  Instantiate(bulletPrefab, transform.position, transform.rotation);
		// クリックした位置（マウスの位置）をワールド座標系上の位置に変換する。
        var screenPoint : Vector3 = Input.mousePosition;
        screenPoint.z = 10.0;
        var worldPoint : Vector3 = Camera.main.ScreenToWorldPoint(screenPoint);
        // カメラからクリックした位置へ向かう単位ベクトルを求める。
        var direction = (worldPoint - transform.position).normalized;
		// 初速を掛け合わせた上で、弾丸の速度として代入する。
        bullet.rigidbody.velocity = direction * initialVelocity;
    }
}

// タイムアップメッセージの処理。
function TimeUp() {
	// スクリプトの処理を止める。
	enabled = false;
}
