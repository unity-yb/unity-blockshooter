// タイトル画面を制御するスクリプト。

var skin : GUISkin;				// 表示に使うスキン
var titleTexture : Texture2D;	// タイトル画像のテクスチャ

function Update () {
	if (Input.GetButtonDown("Fire1")) {
		Application.LoadLevel("Main");
	}
}

function OnGUI () {
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	var tw : int = titleTexture.width;
	var th : int = titleTexture.height;
	GUI.skin = skin;
	GUI.DrawTexture(Rect((sw - tw) / 2, (sh - th) / 2, tw, th), titleTexture);
	GUI.Label(Rect(0, sh / 2, sw, sh / 2), "Click to Start", "message");
}
