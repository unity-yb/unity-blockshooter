// 弾丸を撃ち出す処理のスクリプト。

var bulletPrefab : GameObject; // 弾丸のプレハブ

function Update () {
	if (Input.GetButtonDown("Fire1")) {
		// 弾丸プレハブのインスタンス化。
		var bullet : GameObject =
		  Instantiate(bulletPrefab, transform.position, transform.rotation);
		// クリックした点をワールド座標系に変換。
        var screenPoint = Input.mousePosition;
        screenPoint.z = camera.nearClipPlane;
        var worldPoint = Camera.main.ScreenToWorldPoint(screenPoint);
		// クリックした点へ向かうベクトルを速度ベクトルとして設定。
        var direction = (worldPoint - transform.position).normalized;
        bullet.rigidbody.velocity = direction * 40.0;
    }
}

// タイムアップメッセージの処理。
function TimeUp () {
	enabled = false;
}
