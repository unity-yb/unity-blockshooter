// 結果画面を制御するスクリプト。

@script RequireComponent(Scorekeeper)	// 同オブジェクト内にScorekeeperが必須

var skin : GUISkin; // 表示に使うスキン

private var scorekeeper : Scorekeeper;	// Scorekeeperコンポーネントへの参照
private var state : String;				// 現在の状態を表す文字列

function Start () {
	// Scorekeeperコンポーネントへの参照を確保する。
	scorekeeper = GetComponent(Scorekeeper);
}

// タイムアップメッセージの処理。
function TimeUp () {
	enabled = true;
	// "Time Up"テキストの表示
	state = "Time Up";
	yield WaitForSeconds(3.0);
	// ちょっと非表示期間を置く。
	state = "";
	yield WaitForSeconds(0.5);
	// スコアを表示しボタン押下を待つ。
	state = "Show Score";
	while (!Input.GetButtonDown("Fire1")) yield;
	// タイトルシーンへ移行する。
	Application.LoadLevel("Title");
}

function OnGUI () {
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	GUI.skin = skin;
	// 現在の状態によって表示を切り替える。
	if (state == "Time Up") {
		// "Time Up"テキストの表示。
		GUI.Label(Rect(0, 0, sw, sh), "Time Up!!", "message");
	} else if (state == "Show Score") {
		// スコア表示。
		var scoreText : String = "Your score is " + scorekeeper.score.ToString();
		GUI.Label(Rect(0, sh / 4, sw, sh / 4), scoreText, "message");
		GUI.Label(Rect(0, sh / 2, sw, sh / 4), "Click to Exit", "message");
	}
}
