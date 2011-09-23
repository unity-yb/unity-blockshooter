// ゲーム開始時のカウントダウンを行うスクリプト。

var skin : GUISkin;			// 文字表示に使うスキン。

private var timer : float;	// カウントダウン用のタイマー。

// 初期化処理。
function Start() {
	// スリーカウントの3.0秒と、開始時の余裕を持たせるための0.5秒。
	timer = 3.5;
}

// 更新処理。
function Update() {
	// タイマーを進める。
	timer -= Time.deltaTime;
	// タイマーが0に達したら……
	if (timer <= 0.0) {
		// ゲーム開始メッセージをブロードキャストする。
		BroadcastMessage("StartGame");
		// このスクリプトは停止する。
		enabled = false;
	}
}

// GUI表示処理。
function OnGUI() {
	// スリーカウントの期間中でなければ表示しない。
	if (timer > 3.0 || timer <= 0.0) return;
	// スキンを設定する。
	GUI.skin = skin;
	// 画面の幅と高さを取得する。
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	// タイマーを繰り上げで整数に変換し、さらに文字列へ変換する。
	var text : String = Mathf.CeilToInt(timer).ToString();
	// タイマーの小数点部分のみを切り出すことで、
	// 各カウントにおけるアルファ値のフェードアウトを表現する。
	GUI.color = Color(1, 1, 1, timer - Mathf.FloorToInt(timer));
	// 画面中央付近にスタイル"message"を使って文字を表示する。
	GUI.Label(Rect(0, sh / 4, sw, sh / 2), text, "message");
}
