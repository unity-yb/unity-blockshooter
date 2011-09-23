// ターゲット色の切り替えと、得点の判定を行うスクリプト。
// ついでに得点の表示も行う。

@script RequireComponent(Scorekeeper) // 同オブジェクト内にScorekeeperが必須

var skin : GUISkin;			// 表示に使うスキン。
var switchInterval : float;	// 色を切り替える間隔。
var rewardPoint : int;		// 正しい色に対する得点。
var penaltyPoint : int;		// 間違った色に対する減点。

private var scorekeeper : Scorekeeper; // Scorekeeperコンポーネントへの参照。
private var targetIsRed : boolean;	   // 色を切り替えるためのスイッチ的なフラグ。
									   // 現在のターゲットが赤のときにtrueとなる。
private var switchTimer : float;	   // 色の切り替えまでの時間を計るタイマー。

// 現在ターゲットとなっている色名を得るための関数。
private function GetTargetColorName() : String {
	return targetIsRed ? "Red" : "Blue";
}

// ゲーム開始メッセージの処理。
function StartGame() {
	// スクリプトの処理を開始する。
	enabled = true;
}

// タイムアップメッセージの処理。
function TimeUp() {
	// スクリプトの処理を停止する。
	enabled = false;
}

// 箱の破壊の通知メッセージの処理。
function OnDestroyBox(boxColorName : String) {
	// 破壊された箱の色は、現在のターゲット色と同じか？
	if (boxColorName == GetTargetColorName()) {
		// 加点を行う。
		scorekeeper.score += rewardPoint;
	} else {
		// 原点を行う。
		scorekeeper.score -= penaltyPoint;
	}
}

// 初期化処理。
function Start() {
	// Scorekeeperコンポーネントへの参照を取得する。
	scorekeeper = GetComponent(Scorekeeper);
	// ターゲット色は赤から始める。
	targetIsRed = true;
	// 最初の色切り替えまでの時間を設定する。
	switchTimer = switchInterval;
}

// 更新処理。
function Update() {
	// 色切り替えタイマーを進める。
	switchTimer -= Time.deltaTime;
	// タイマーが0に達していたら……
	if (switchTimer <= 0.0) {
		// 色を反転する。
		targetIsRed = !targetIsRed;
		// 次の色切り替えまでの時間を設定する。
		switchTimer = switchInterval;
	}
}

function OnGUI () {
	// 色切り替えが間もない場合は表示を行わない。
	if (switchTimer < 1.5) return;
	// スキンを設定する。
	GUI.skin = skin;
	// 画面の幅と高さを取得する。
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	// 文字列で"Shoot 色名 Boxes"を生成する。
   	var message : String = "Shoot " + GetTargetColorName() + " Boxes";
   	// 現在のターゲット色に応じた文字色を設定する。
   	GUI.color = targetIsRed ? Color.red : Color.blue;
	// 画面中央付近にスタイル"message"で文字を表示する。
   	GUI.Label(Rect(0, sh / 4, sw, sh / 2), message, "message");
}
