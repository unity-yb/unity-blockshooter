// 点数を管理するスクリプト。

var skin : GUISkin;	// 表示に使うスキン

@HideInInspector
var score : int;	// スコアの値

function Start () {
	score = 0;
}

function OnGUI () {
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	var scoreText : String = "SCORE: " + score.ToString();
	GUI.skin = skin;
	GUI.Label(Rect(0, 0, sw / 2, sh / 4), scoreText, "score");
}
