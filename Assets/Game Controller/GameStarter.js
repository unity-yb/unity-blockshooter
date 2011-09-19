// ゲームの開始時のカウントダウンを行うスクリプト。

var skin : GUISkin; // 表示に使うスキン

private var timer : float; // カウントダウン用のタイマー

function Start () {
	timer = 3.5; // スリーカウント＋α
}

function Update () {
	timer -= Time.deltaTime;
	if (timer <= 0.0) {
		// ゲーム開始メッセージをブロードキャストして終了する。
		BroadcastMessage("StartGame");
		Destroy(this);
	}
}

function OnGUI () {
	// スリーカウントの期間中でなければ表示しない。
	if (timer > 3.0 || timer <= 0.0) return;
	// スリーカウントを表示する。
	// 各カウントにおいてアルファブレンディングでフェードアウトする。
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	var text : String = Mathf.CeilToInt(timer).ToString();
	GUI.skin = skin;
	GUI.color = Color(1, 1, 1, timer - Mathf.FloorToInt(timer));
	GUI.Label(Rect(0, sh / 4, sw, sh / 2), text, "message");
}
