// 点数を管理するスクリプト。

var skin : GUISkin; // 表示に使うスキン。

@HideInInspector
var score : int; // スコアの値。
				 // HideInInspector属性により、この変数は
				 // Inspectorビューに表示されなくなる。

// GUI表示処理。
function OnGUI() {
	// スキンを設定する。
	GUI.skin = skin;
	// 画面の幅と高さを取得する。
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	// 文字列で"SCORE: 得点"を生成する。
	var scoreText : String = "SCORE: " + score.ToString();
	// 画面左上にスタイル"score"で文字表示する。
	GUI.Label(Rect(0, 0, sw / 2, sh / 4), scoreText, "score");
}
