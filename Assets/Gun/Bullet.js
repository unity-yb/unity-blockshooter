// 弾丸を制御するスクリプト。

function OnCollisionEnter (collision : Collision) {
   	if (collision.gameObject.tag == "Box") {
   		// 上方向に衝撃を与える。
   		collision.rigidbody.AddForce(Vector3.up * 15.0, ForceMode.Impulse);
   		// ダメージメッセージを送信する。
   		collision.gameObject.SendMessage("ApplyDamage");
   	}
    Destroy(gameObject);
}
