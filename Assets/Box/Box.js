// 箱の挙動を制御するスクリプト。

var deathEffect : GameObject;	// 破壊エフェクト
var colorName : String;			// このボックスの色名

private var damaged : boolean;	// ダメージを受けた
private var deathTimer : float;	// 死亡までの時間。

// ダメージメッセージの処理。
function ApplyDamage () {
	if (!damaged) {
		damaged = true;
		deathTimer = 0.4;
	}
}

function Update () {
	if (!damaged) return;
	deathTimer -= Time.deltaTime;
	if (deathTimer <= 0.0) {
		// 破壊をゲームコントローラーに通知。
		var game = GameObject.FindWithTag("GameController");
		game.SendMessage("OnDestroyBox", colorName);
		// エフェクトを出しつつ自分を破壊。
		Instantiate(deathEffect, transform.position, transform.rotation);
		Destroy(gameObject);
	}
}
