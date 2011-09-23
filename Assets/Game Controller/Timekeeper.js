// ゲーム開始から終了までの時間経過を計るスクリプト。

var gameLength : float; // ゲーム開始から終了までの長さ。

private var elapsed : float; // 経過時間。

// ゲーム開始メッセージの処理。
function StartGame() {
	// スクリプトの処理を開始する。
	enabled = true;
}

// 更新処理。
function Update() {
	// 時間を進める。
	elapsed += Time.deltaTime;
	// 時間が終了時間に達したら……
	if (elapsed >= gameLength) {
		// このゲームオブジェクトとカメラに
		// タイムアップメッセージをブロードキャストする。
		BroadcastMessage("TimeUp");
		GameObject.FindWithTag("MainCamera").BroadcastMessage("TimeUp");
		// スクリプトの処理を停止する。
		enabled = false;
	}
}
