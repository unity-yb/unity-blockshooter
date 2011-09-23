// 弾丸の衝突判定を処理するスクリプト。

// 衝突が発生したときに実行される関数。
function OnCollisionEnter(collision : Collision) {
	// 衝突相手が箱であるかどうかを調べる。
   	if (collision.gameObject.tag == "Box") {
   		// 衝突相手にダメージメッセージを送信する。
   		collision.gameObject.SendMessage("ApplyDamage");
   	}
   	// 相手が何であろうが弾丸は消滅する。
    Destroy(gameObject);
}
