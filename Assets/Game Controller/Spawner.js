// 箱を生成するスクリプト。

var interval : float;	// 箱を生成する間隔
var maxBoxCount : int;	// シーン中に配置できる箱の最大数

var redBoxPrefab : GameObject;	// 赤箱のプレハブ
var blueBoxPrefab : GameObject;	// 青箱のプレハブ

private var timer : float;			// 次に箱を生成するまでの時間
private var nextIsRed : boolean;	// 色を切り替えるための変数

// ゲーム開始メッセージの処理。
function StartGame () {
	nextIsRed = true;
	enabled = true;
}

// タイムアップメッセージの処理。
function TimeUp () {
	enabled = false;
}

function Update () {
	timer -= Time.deltaTime;
	if (timer < 0.0) {
		// シーンにある箱をカウントし、設定された最大個数と比較する。
		var boxCount = GameObject.FindGameObjectsWithTag("Box").length;
		if (boxCount < maxBoxCount) {
			// ランダムな座標に箱をインスタンス化する。
			var offsx : int = Random.Range(-5, 5);
			var offsz : int = Random.Range(0, 5);
			var position = transform.position + Vector3(offsx, 0, offsz);
			var prefab = nextIsRed ? redBoxPrefab : blueBoxPrefab;
   			Instantiate(prefab, position, Random.rotation);
   			// 次の生成の予約。
    		timer = interval;
    		nextIsRed ^= true;
		}
	}
}
