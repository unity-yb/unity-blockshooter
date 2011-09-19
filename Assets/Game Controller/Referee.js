// ターゲット色の切り替えと、得点の判定を行うスクリプト。

@script RequireComponent(Scorekeeper)	// 同オブジェクト内にScorekeeperが必須

var skin : GUISkin;			// 表示に使うスキン
var switchInterval : float;	// 色の切り替えの間隔
var rewardPoint : int;		// 正しい色に対する加点
var penaltyPoint : int;		// 間違った色に対する減点

private var scorekeeper : Scorekeeper;	// Scorekeeperコンポーネントへの参照
private var targetIsRed : boolean;		// 現在のターゲットが赤のときtrue
private var switchTimer : float;		// 色の切り替えまでの時間

// 現在ターゲットとなっている色名を得る。
private function GetTargetColorName () : String {
	return targetIsRed ? "Red" : "Blue";
}

function Start () {
	// Scorekeeperコンポーネントへの参照を確保する。
	scorekeeper = GetComponent(Scorekeeper);
	// ターゲット色は赤から始める。
	targetIsRed = true;
	// 最初の色切り替えまでの時間を設定。
	switchTimer = switchInterval;
}

function Update () {
	switchTimer -= Time.deltaTime;
	if (switchTimer <= 0.0) {
		// 色を反転する。
		targetIsRed = !targetIsRed;
		// 次の色切り替えまでの時間を設定。
		switchTimer = switchInterval;
	}
}

// ゲーム開始メッセージの処理。
function StartGame () {
	enabled = true;
}

// タイムアップメッセージの処理。
function TimeUp () {
	enabled = false;
}

// 箱の破壊の通知の処理。
function OnDestroyBox (boxColorName : String) {
	// 現在のターゲット色と同じなら加点を、異なっていれば減点を行う。
	if (boxColorName == GetTargetColorName()) {
		scorekeeper.score += rewardPoint;
	} else {
		scorekeeper.score -= penaltyPoint;
	}
}

function OnGUI () {
	// 色切り替えが間もない場合は表示を行わない。
	if (switchTimer < 1.5) return;
	// ターゲット色の名前を、対応する色のラベルで表示する。
	var sw : int = Screen.width;
	var sh : int = Screen.height;
   	var message : String = "Shoot " + GetTargetColorName() + " Boxes";
	GUI.skin = skin;
   	GUI.color = targetIsRed ? Color.red : Color.blue;
   	GUI.Label(Rect(0, sh / 4, sw, sh / 2), message, "message");
}
