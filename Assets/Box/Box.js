// 箱の挙動を制御するスクリプト。

var explosionEffect : GameObject; // 爆発エフェクトのプレハブ。
var colorName : String;			  // この箱の色名。

private var damaged : boolean;	  // ダメージを受けたことを表すフラグ。
private var killTimer : float;	  // 死亡までの時間を計るためのタイマー。

// ダメージメッセージの処理。
function ApplyDamage() {
	// まだダメージを受けていないなら……
	if (!damaged) {
		// ダメージを受けたことを表すフラグをtrueにする。
		damaged = true;
		// 死亡までのタイマーを0.4秒に設定する。
		killTimer = 0.4;
		// Impulse（力積）モードで上方向に力を与える。
		rigidbody.AddForce(Vector3.up * 15.0, ForceMode.Impulse);
	}
}

// 更新処理。
function Update() {
	// ダメージを受けていなければ、処理すべきことは無いので関数を終える。
	if (!damaged) return;

	// これ以下はダメージを受けた後の処理。

	// 死亡までのタイマーを進める。
	killTimer -= Time.deltaTime;
	// もしタイマーが0に達していたら……
	if (killTimer <= 0.0) {
		// この箱の破壊をゲームコントローラーに通知する。
		var game = GameObject.FindWithTag("GameController");
		game.SendMessage("OnDestroyBox", colorName);
		// 箱の位置にエフェクトを出しつつ自分を破棄する。
		Instantiate(explosionEffect, transform.position, transform.rotation);
		Destroy(gameObject);
	}
}
