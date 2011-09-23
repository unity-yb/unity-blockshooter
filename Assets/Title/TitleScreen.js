// タイトル画面の表示を行うスクリプト。

// ※ 書籍の内容との違い
//
// 書籍内の解説では、タイトルの表示にも通常のGUI.Labelを使用していますが、
// ここではGUI.DrawTextureによるテクスチャの描画を使ってみました。
//
// このスクリプトで行なっているように、GUI.DrawTextureに描画の領域(Rect)と
// テクスチャを渡すと、そのテクスチャを画面上に描画することができます。

var skin : GUISkin;			  // 表示に使うスキン
var titleTexture : Texture2D; // タイトル画像のテクスチャ

// 更新処理。
function Update() {
	// "Fire1"ボタン（画面クリックの代わり）が押されてたら……
	if (Input.GetButtonDown("Fire1")) {
		// Mainシーンをロードする。
		Application.LoadLevel("Main");
	}
}

// GUI表示処理。
function OnGUI() {
	// スキンを設定する。
	GUI.skin = skin;
	// 画面の幅/高さを取得する。
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	// タイトル画像の幅/高さを取得する。
	var tw : int = titleTexture.width;
	var th : int = titleTexture.height;
	// タイトル画像を画面中央に表示する。
	GUI.DrawTexture(Rect((sw - tw) / 2, (sh - th) / 2, tw, th), titleTexture);
	// 画面下辺りに"Click to Start"の文字列を、スタイル"message"で表示する。
	GUI.Label(Rect(0, sh / 2, sw, sh / 2), "Click to Start", "message");
}
