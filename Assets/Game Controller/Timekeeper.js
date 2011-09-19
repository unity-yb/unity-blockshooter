// ゲーム開始から終了までの時間経過を管理するスクリプト。

var gameLength : float; // ゲーム開始から終了までの長さ

private var elapsed : float; // 経過時間

function Start () {
	elapsed = 0.0;
}

// ゲーム開始メッセージの処理。
function StartGame () {
	enabled = true;
}

function Update () {
	elapsed += Time.deltaTime;
	if (elapsed >= gameLength) {
		// このゲームオブジェクトとカメラに
		// タイムアップメッセージを送信して終了する。
		BroadcastMessage("TimeUp");
		GameObject.FindWithTag("MainCamera").BroadcastMessage("TimeUp");
		Destroy(this);
	}
}
