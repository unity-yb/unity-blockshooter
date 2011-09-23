// 結果画面を制御するスクリプト。

@script RequireComponent(Scorekeeper) // 同オブジェクト内にScorekeeperが必須。

var skin : GUISkin; // 表示に使うスキン。

private var scorekeeper : Scorekeeper; // Scorekeeperコンポーネントへの参照。
private var state : String;			   // 現在の状態を表す文字列。

// 初期化処理。
function Start() {
	// Scorekeeperコンポーネントへの参照を確保する。
	scorekeeper = GetComponent(Scorekeeper);
}

// タイムアップメッセージの処理。
function TimeUp() {
	// "Time Up"テキストの表示。
	state = "Time Up";
	yield WaitForSeconds(3.0);
	// ちょっと非表示期間を置く。
	state = "";
	yield WaitForSeconds(0.5);
	// スコアを表示し"Fire1"ボタン（マウスクリックの代用）の押下を待つ。
	state = "Show Score";
	while (!Input.GetButtonDown("Fire1")) yield;
	// Titleシーン（タイトル画面）をロードする。
	Application.LoadLevel("Title");
}

// GUI表示処理。
function OnGUI() {
	// スキンを設定する。
	GUI.skin = skin;
	// 画面の幅と高さを取得する。
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	
	// 以下の処理は、現在の状態（state変数が表す文字列）によって
	// 表示の内容を切り替える。
	
	if (state == "Time Up") {
		// "Time Up"をスタイル"message"で文字表示する。
		GUI.Label(Rect(0, 0, sw, sh), "Time Up!!", "message");
	}
	
	if (state == "Show Score") {
		// 文字列で"Your score is 得点"を生成する。
		var scoreText : String = "Your score is " + scorekeeper.score.ToString();
		// 得点と"Click to Exit"をスタイル"message"で文字表示する。
		GUI.Label(Rect(0, sh / 4, sw, sh / 4), scoreText, "message");
		GUI.Label(Rect(0, sh / 2, sw, sh / 4), "Click to Exit", "message");
	}
}
