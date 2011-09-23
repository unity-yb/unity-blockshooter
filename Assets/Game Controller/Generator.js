// 箱を生成するジェネレーターの制御スクリプト。

var interval : float;			 // 箱を生成する間隔。
var redBoxPrefab : GameObject;	 // 赤箱のプレハブ。
var blueBoxPrefab : GameObject;	 // 青箱のプレハブ。

private var nextIsRed : boolean; // 次に生み出す箱の色を表すフラグ。
								 // 次の箱の色が赤の場合にtrueとなる。
private var timer : float;	     // 次に箱を生成するまでの時間を計るタイマー。

// ゲーム開始メッセージの処理。
function StartGame() {
	// 赤から始める。
	nextIsRed = true;
	// スクリプトの処理を開始する。
	enabled = true;
}

// タイムアップメッセージの処理。
function TimeUp() {
	// スクリプトの処理を停止する。
	enabled = false;
}

function Update () {
	// タイマーを進める。
	timer -= Time.deltaTime;
	// タイマーが0に達したら……
	if (timer < 0.0) {
		// ジェネレーターの配置座標にランダム値を足すことで、
		// 箱の生まれる位置に揺らぎを与える。
		var offsx : int = Random.Range(-5.0, 5.0);
		var offsz : int = Random.Range(0.0, 5.0);
		var position = transform.position + Vector3(offsx, 0, offsz);
		// 生み出すべき色の箱のプレハブを選択する。
		var prefab = nextIsRed ? redBoxPrefab : blueBoxPrefab;
		// ランダムな座標に箱をインスタンス化する。
  		Instantiate(prefab, position, Random.rotation);
  		// 次の生成までのタイマーを設定する。
   		timer = interval;
   		// 次に生み出す箱の色を反転する。
   		nextIsRed = !nextIsRed;
	}
}
