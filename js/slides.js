/* slides.js — 29スライドデータ */
window.SLIDES = [
{id:"ch1-1",ch:1,chName:"第1章：簿記の基本",title:"簿記の目的と種類",subtitle:"なぜ簿記を学ぶのか？",
explain:`<p><strong>簿記（bookkeeping）</strong>とは、企業の日々の経済活動（取引）を帳簿に記録・整理し、最終的に財務諸表を作成するための技術です。</p>
<ul>
  <li>📌 <strong>目的①</strong>：財政状態の把握（資産・負債・純資産）</li>
  <li>📌 <strong>目的②</strong>：経営成績の把握（収益・費用・利益）</li>
  <li>📌 <strong>目的③</strong>：利害関係者への情報提供（投資家・税務署・銀行など）</li>
</ul>
<p>日商簿記3級では<strong>複式簿記</strong>を学びます。すべての取引を「借方」と「貸方」の両面から記録します。</p>`,
diagram:`<div class="diagram-box">
<p style="font-weight:bold;text-align:center;">【簿記の全体像】</p>
<div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;align-items:center;">
  <div class="d-box" style="background:#FFE4E8;">日々の取引</div>
  <div>→</div>
  <div class="d-box" style="background:#B5EAD7;">仕訳帳に記入</div>
  <div>→</div>
  <div class="d-box" style="background:#C7CEEA;">元帳に転記</div>
  <div>→</div>
  <div class="d-box" style="background:#FFDAC1;">試算表作成</div>
  <div>→</div>
  <div class="d-box" style="background:#A8E6CF;">財務諸表</div>
</div>
<div style="display:flex;gap:16px;justify-content:center;margin-top:12px;">
  <div class="d-box" style="background:#FFB7C5;">損益計算書（P/L）<br><small>収益－費用＝利益</small></div>
  <div class="d-box" style="background:#B5EAD7;">貸借対照表（B/S）<br><small>資産＝負債＋純資産</small></div>
</div>
</div>`,
example:`<div class="example-box">
<p><strong>例：商品10,000円を現金で売った</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>現金 10,000</td><td>売上 10,000</td></tr></table>
<p style="margin-top:8px;">→ この1行の記録が<strong>仕訳</strong>です。複式簿記では必ず借方と貸方が一致します。</p>
<p>単式簿記（家計簿）との違い：<strong>単式</strong>は現金の増減だけ記録、<strong>複式</strong>は原因と結果の両方を記録します。</p>
</div>`,
rationale:`<p>複式簿記が世界標準の理由は、取引の<strong>原因と結果</strong>を両面から記録するため、誤りを発見しやすく（貸借が一致しないと誤りとわかる）、また利益と財産の状態を正確に把握できるからです。</p>
<p>日商簿記3級は個人商店や小規模企業を前提にした<strong>商業簿記</strong>の基礎です。</p>`,
quiz:[
  {q:"複式簿記の特徴として正しいものはどれですか？",opts:["すべての取引を借方と貸方の両面から記録する","現金の増減だけを記録する","収益だけを記録する","費用だけを記録する"],ans:0,exp:"複式簿記はすべての取引を借方（左）と貸方（右）の両面から記録します。これにより貸借が必ず一致します。"},
  {q:"損益計算書（P/L）が表すものはどれですか？",opts:["一定期間の収益・費用・利益","一定時点の資産・負債・純資産","現金の収支状況","商品在庫の状況"],ans:0,exp:"損益計算書（Profit and Loss Statement）は一定期間（会計期間）の経営成績（収益・費用・利益）を示します。"},
  {q:"日商簿記3級で主に学ぶ簿記の種類はどれですか？",opts:["商業簿記（複式）","工業簿記","農業簿記","官庁簿記"],ans:0,exp:"日商簿記3級は商業簿記（商品の売買を主とする企業の簿記）の複式簿記を学びます。"}
]},

{id:"ch1-2",ch:1,chName:"第1章：簿記の基本",title:"資産・負債・純資産の概念",subtitle:"貸借対照表の三要素を理解する",
explain:`<p>会計の世界では、すべての経済的価値は3つに分類されます。</p>
<ul>
  <li>🏦 <strong>資産</strong>：企業が保有する財産・権利（現金、建物、売掛金 等）</li>
  <li>💳 <strong>負債</strong>：将来返済・支払い義務のある債務（借入金、買掛金 等）</li>
  <li>💰 <strong>純資産</strong>：資産から負債を引いた正味財産（資本金、繰越利益 等）</li>
</ul>
<p>この3要素の関係は次の等式で表されます：<br>
<strong style="font-size:1.1em;">資産 ＝ 負債 ＋ 純資産</strong><br>
これを「<strong>貸借対照表等式</strong>」といいます。</p>`,
diagram:`<div class="diagram-box">
<p style="font-weight:bold;text-align:center;">【貸借対照表（B/S）の構造】</p>
<table class="bs-table" style="width:100%;border-collapse:collapse;text-align:center;">
<tr>
  <th style="background:#FFB7C5;padding:8px;border:2px solid #ccc;">借方（左）資産の部</th>
  <th style="background:#B5EAD7;padding:8px;border:2px solid #ccc;">貸方（右）負債・純資産の部</th>
</tr>
<tr>
  <td style="padding:12px;border:1px solid #ccc;vertical-align:top;">
    現金・預金<br>売掛金<br>商品<br>備品・建物<br>土地
  </td>
  <td style="padding:12px;border:1px solid #ccc;vertical-align:top;">
    <div style="background:#E8F4FD;padding:4px;">買掛金<br>借入金<br>（負債）</div>
    <div style="background:#E8FDF4;padding:4px;margin-top:4px;">資本金<br>繰越利益<br>（純資産）</div>
  </td>
</tr>
<tr>
  <td colspan="2" style="text-align:center;padding:6px;font-weight:bold;background:#FFF9C4;">資産合計 ＝ 負債合計 ＋ 純資産合計</td>
</tr>
</table>
</div>`,
example:`<div class="example-box">
<p><strong>具体例：ある個人商店の財政状態</strong></p>
<table class="mini-table">
<tr><th>資産</th><td>現金200,000 + 売掛金100,000 + 商品50,000 = <strong>350,000円</strong></td></tr>
<tr><th>負債</th><td>買掛金80,000 + 借入金120,000 = <strong>200,000円</strong></td></tr>
<tr><th>純資産</th><td>350,000 − 200,000 = <strong>150,000円</strong></td></tr>
</table>
<p style="margin-top:8px;">→ 純資産（自己資本）が多いほど財務的に健全です。</p>
</div>`,
rationale:`<p>資産・負債・純資産の区別を理解することが、簿記のすべての基礎です。仕訳を書くときは「この取引で何が増えて何が減るか」を3要素で考えることが出発点です。</p>
<p>「純資産＝自分のお金」「負債＝他人から借りたお金」と覚えると直感的に理解できます。</p>`,
quiz:[
  {q:"「借入金」は次のどれに分類されますか？",opts:["負債","資産","純資産","収益"],ans:0,exp:"借入金は将来返済する義務（債務）のため負債です。"},
  {q:"資産＝負債＋純資産 の式で、資産が500万円、負債が300万円のとき純資産はいくらですか？",opts:["200万円","800万円","300万円","500万円"],ans:0,exp:"純資産＝資産500万円－負債300万円＝200万円。"},
  {q:"次のうち「資産」に分類されるものはどれですか？",opts:["売掛金","買掛金","資本金","借入金"],ans:0,exp:"売掛金は代金を後で受け取る権利（資産）です。買掛金・借入金は負債、資本金は純資産です。"}
]},

{id:"ch1-3",ch:1,chName:"第1章：簿記の基本",title:"借方と貸方の基本ルール",subtitle:"左右の法則をマスターする",
explain:`<p>仕訳では勘定科目を「<strong>借方（左）</strong>」と「<strong>貸方（右）</strong>」に記録します。どちらに書くかのルールは勘定科目の種類によって決まります。</p>
<table class="rule-table" style="width:100%;border-collapse:collapse;margin-top:8px;">
<tr style="background:#FFB7C5;"><th>種類</th><th>増加</th><th>減少</th></tr>
<tr><td>資産</td><td style="background:#E8FFE8;text-align:center;"><strong>借方（左）</strong></td><td style="text-align:center;">貸方（右）</td></tr>
<tr><td>負債</td><td style="text-align:center;">貸方（右）</td><td style="background:#E8FFE8;text-align:center;"><strong>借方（左）</strong></td></tr>
<tr><td>純資産</td><td style="text-align:center;">貸方（右）</td><td style="background:#E8FFE8;text-align:center;"><strong>借方（左）</strong></td></tr>
<tr><td>収益</td><td style="text-align:center;">貸方（右）</td><td style="background:#E8FFE8;text-align:center;"><strong>借方（左）</strong></td></tr>
<tr><td>費用</td><td style="background:#E8FFE8;text-align:center;"><strong>借方（左）</strong></td><td style="text-align:center;">貸方（右）</td></tr>
</table>`,
diagram:`<div class="diagram-box">
<p style="font-weight:bold;text-align:center;">【借方・貸方の覚え方】</p>
<div style="display:flex;gap:16px;justify-content:center;">
  <div style="background:#FFE4EC;padding:12px;border-radius:8px;text-align:center;flex:1;">
    <div style="font-size:1.4em;">⬅️ 借方（左）</div>
    <div style="margin-top:8px;line-height:2;">資産の増加<br>負債の減少<br>純資産の減少<br>費用の発生</div>
  </div>
  <div style="background:#E4FFEC;padding:12px;border-radius:8px;text-align:center;flex:1;">
    <div style="font-size:1.4em;">➡️ 貸方（右）</div>
    <div style="margin-top:8px;line-height:2;">資産の減少<br>負債の増加<br>純資産の増加<br>収益の発生</div>
  </div>
</div>
<p style="text-align:center;margin-top:8px;font-weight:bold;">「資・費は左（借方）、負・純・収は右（貸方）で増加」</p>
</div>`,
example:`<div class="example-box">
<p><strong>例1：商品を仕入れ、現金100,000円を支払った</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>仕入 100,000（費用↑）</td><td>現金 100,000（資産↓）</td></tr></table>
<p style="margin-top:8px;"><strong>例2：商品を売上げ、現金150,000円を受け取った</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>現金 150,000（資産↑）</td><td>売上 150,000（収益↑）</td></tr></table>
</div>`,
rationale:`<p>借方・貸方のルールは「資産と費用は増えたら左」「負債・純資産・収益は増えたら右」と覚えましょう。この法則は変わりません。</p>
<p>語源：「借方」は昔の帳簿で「お金を借りた人の側（資産側）」、「貸方」は「お金を貸した人の側（負債・資本側）」から来ています。現代では単なる左右の名前として使われます。</p>`,
quiz:[
  {q:"現金（資産）が増加した場合、どちらに記録しますか？",opts:["借方（左）","貸方（右）","どちらでもよい","記録しない"],ans:0,exp:"資産の増加は借方（左）に記録します。「資産増加＝借方」は基本ルールです。"},
  {q:"借入金（負債）が増加した場合、どちらに記録しますか？",opts:["貸方（右）","借方（左）","どちらでもよい","記録しない"],ans:0,exp:"負債の増加は貸方（右）に記録します。「負債増加＝貸方」です。"},
  {q:"給料（費用）が発生した場合、どちらに記録しますか？",opts:["借方（左）","貸方（右）","負債として記録","収益として記録"],ans:0,exp:"費用の発生は借方（左）に記録します。「費用発生＝借方」です。"}
]},

{id:"ch1-4",ch:1,chName:"第1章：簿記の基本",title:"仕訳のルールと考え方",subtitle:"仕訳を書く5ステップ",
explain:`<p><strong>仕訳</strong>とは、取引を借方と貸方に分けて記録することです。正確な仕訳ができることが簿記3級合格の鍵です。</p>
<p><strong>仕訳を書く手順：</strong></p>
<ol>
  <li>取引の内容を理解する</li>
  <li>増減した勘定科目を特定する</li>
  <li>各勘定科目が資産/負債/純資産/収益/費用のどれかを確認</li>
  <li>増加・減少に応じて借方/貸方を決める</li>
  <li>金額を記入し、借方合計＝貸方合計を確認</li>
</ol>`,
diagram:`<div class="diagram-box">
<p style="font-weight:bold;text-align:center;">【仕訳の構造】</p>
<table style="width:100%;border-collapse:collapse;text-align:center;">
<tr>
  <th style="background:#FFB7C5;padding:8px;border:2px solid #ccc;">借方（左）</th>
  <th style="background:#B5EAD7;padding:8px;border:2px solid #ccc;">貸方（右）</th>
</tr>
<tr>
  <td style="padding:12px;border:1px solid #ccc;">勘定科目　　金額</td>
  <td style="padding:12px;border:1px solid #ccc;">勘定科目　　金額</td>
</tr>
<tr>
  <td colspan="2" style="padding:8px;background:#FFF9C4;font-weight:bold;">
    借方合計 ＝ 貸方合計（必ず一致！）
  </td>
</tr>
</table>
<p style="margin-top:8px;text-align:center;">複合仕訳：借方または貸方が複数行になる場合もある</p>
</div>`,
example:`<div class="example-box">
<p><strong>例：備品200,000円を購入し、現金100,000円と約束手形100,000円で支払った（複合仕訳）</strong></p>
<table class="mini-table">
<tr><th>借方</th><th>貸方</th></tr>
<tr><td>備品 200,000</td><td>現金 100,000<br>支払手形 100,000</td></tr>
</table>
<p style="margin-top:8px;">借方合計200,000＝貸方合計(100,000+100,000)＝200,000 ✓</p>
<p><strong>例：商品50,000円を現金で仕入れた</strong></p>
<table class="mini-table">
<tr><th>借方</th><th>貸方</th></tr>
<tr><td>仕入 50,000</td><td>現金 50,000</td></tr>
</table>
</div>`,
rationale:`<p>「借方合計＝貸方合計」は複式簿記の絶対的なルールです。これが成立しない場合は仕訳に誤りがあります。試験では必ずこのチェックを行いましょう。</p>
<p>仕訳は機械的に覚えるより「何が増えて何が減るか」を論理的に考える習慣をつけると、見たことのない問題にも対応できます。</p>`,
quiz:[
  {q:"仕訳において必ず成立するルールはどれですか？",opts:["借方合計＝貸方合計","借方の科目数＝貸方の科目数","借方は必ず1科目のみ","貸方は必ず現金"],ans:0,exp:"複式簿記では借方合計と貸方合計が必ず一致します。科目数は複数でも構いません。"},
  {q:"取引「現金50,000円を借り入れた」の仕訳として正しいものはどれですか？",opts:["現金50,000／借入金50,000","借入金50,000／現金50,000","現金50,000／資本金50,000","費用50,000／現金50,000"],ans:0,exp:"現金（資産）が増加→借方。借入金（負債）が増加→貸方。"},
  {q:"複合仕訳とはどのような仕訳ですか？",opts:["借方または貸方が2科目以上になる仕訳","1科目だけの仕訳","借方と貸方が同じ科目になる仕訳","金額が大きい仕訳"],ans:0,exp:"複合仕訳は一方（または両方）の借方・貸方に2つ以上の勘定科目が登場する仕訳です。"}
]},

{id:"ch1-5",ch:1,chName:"第1章：簿記の基本",title:"勘定科目の分類と覚え方",subtitle:"試験によく出る科目を完全マスター",
explain:`<p>勘定科目とは取引を分類・記録するための名称です。日商簿記3級では約50～60の勘定科目を覚える必要があります。</p>
<p>5つのグループに分類されます：</p>
<ul>
  <li>🏦 <strong>資産</strong>：現金・当座預金・売掛金・受取手形・商品・建物・備品・土地 等</li>
  <li>💳 <strong>負債</strong>：買掛金・支払手形・借入金・前受金・未払費用 等</li>
  <li>💰 <strong>純資産</strong>：資本金・引出金（マイナス）・繰越利益剰余金 等</li>
  <li>📈 <strong>収益</strong>：売上・受取利息・受取手数料 等</li>
  <li>📉 <strong>費用</strong>：仕入・給料・家賃・支払利息・減価償却費 等</li>
</ul>`,
diagram:`<div class="diagram-box">
<p style="font-weight:bold;text-align:center;">【主要勘定科目一覧】</p>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:0.9em;">
  <div style="background:#FFE4EC;padding:8px;border-radius:6px;"><strong>🏦 資産</strong><br>現金・当座預金・普通預金<br>売掛金・受取手形<br>仮払金・前払費用<br>商品・貯蔵品<br>建物・備品・土地・車両</div>
  <div style="background:#E4ECFF;padding:8px;border-radius:6px;"><strong>💳 負債</strong><br>買掛金・支払手形<br>借入金・未払費用<br>前受金・仮受金<br>未払法人税等</div>
  <div style="background:#E4FFE4;padding:8px;border-radius:6px;"><strong>💰 純資産</strong><br>資本金<br>引出金（資本のマイナス）<br>繰越利益剰余金</div>
  <div style="background:#FFF4E4;padding:8px;border-radius:6px;"><strong>📈 収益</strong><br>売上<br>受取利息・受取手数料<br>固定資産売却益<br><hr style="margin:4px 0;"><strong>📉 費用</strong><br>仕入・給料・地代家賃<br>支払利息・減価償却費<br>貸倒損失・雑損</div>
</div>
</div>`,
example:`<div class="example-box">
<p><strong>勘定科目選びの考え方：</strong></p>
<p>①「現金で商品を仕入れた」→ 費用の<strong>仕入</strong>（三分法）と資産の<strong>現金</strong></p>
<p>②「売掛金が回収できなくなった」→ 費用の<strong>貸倒損失</strong>と資産の<strong>売掛金</strong></p>
<p>③「給料を普通預金から振込んだ」→ 費用の<strong>給料</strong>と資産の<strong>普通預金</strong></p>
<p style="margin-top:8px;background:#FFF9C4;padding:8px;border-radius:6px;">
⚠️ <strong>注意</strong>：商品売買は「商品」勘定を使わず<strong>三分法（仕入・売上・繰越商品）</strong>を使います。
</p>
</div>`,
rationale:`<p>勘定科目は「正式名称」を使わないと採点されません。「お金」ではなく「現金」、「品物」ではなく「仕入」または「売上」と書く必要があります。</p>
<p>まず資産・費用（借方増加グループ）と負債・純資産・収益（貸方増加グループ）の2グループに分けて覚えると整理しやすいです。</p>`,
quiz:[
  {q:"「売掛金」はどのグループに属しますか？",opts:["資産","負債","収益","費用"],ans:0,exp:"売掛金は商品を掛けで売った際の代金請求権（権利）なので資産です。"},
  {q:"三分法による商品売買で使う勘定科目として正しい組み合わせはどれですか？",opts:["仕入・売上・繰越商品","商品・売上・仕入","現金・商品・利益","仕入・商品・純資産"],ans:0,exp:"三分法は「仕入」「売上」「繰越商品」の3勘定を使う方法です。商品勘定は使いません。"},
  {q:"「地代家賃」はどのグループに属しますか？",opts:["費用","資産","負債","収益"],ans:0,exp:"地代家賃は土地や建物を借りるための費用です。費用の発生は借方に記録します。"}
]}
];

window.SLIDES.push(
{id:"ch2-1",ch:2,chName:"第2章：各種取引の仕訳",title:"現金・当座預金・普通預金取引",subtitle:"最も基本的な資金取引をマスター",
explain:`<p>日常取引で最も多く登場する資産勘定です。</p>
<ul>
  <li>💵 <strong>現金</strong>：紙幣・硬貨だけでなく、<strong>他人振出小切手・郵便為替証書・配当金領収書</strong>も現金として扱います</li>
  <li>🏦 <strong>当座預金</strong>：小切手・手形決済用の無利息口座。小切手を振り出すと減少</li>
  <li>💳 <strong>普通預金</strong>：一般的な預金口座。利息は受取利息（収益）</li>
</ul>
<p>現金過不足が生じた場合：</p>
<ul>
  <li>現金が帳簿より多い → 貸方「現金過不足」</li>
  <li>現金が帳簿より少ない → 借方「現金過不足」</li>
  <li>原因不明のまま決算 → 雑益または雑損に振替</li>
</ul>`,
diagram:`<div class="diagram-box">
<p style="font-weight:bold;text-align:center;">【現金として扱うもの一覧】</p>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
  <div style="background:#E8FFE8;padding:8px;border-radius:6px;"><strong>✅ 現金扱い</strong><br>・紙幣・硬貨<br>・他人振出小切手<br>・郵便為替証書<br>・配当金領収書<br>・期限到来公社債利札</div>
  <div style="background:#FFE8E8;padding:8px;border-radius:6px;"><strong>❌ 現金でない</strong><br>・自己振出小切手<br>（当座預金に戻す）<br>・定期預金<br>・約束手形<br>・株券</div>
</div>
</div>`,
example:`<div class="example-box">
<p><strong>例1：他人振出小切手300,000円を受け取った</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>現金 300,000</td><td>（売掛金等） 300,000</td></tr></table>
<p><strong>例2：小切手200,000円を振り出して備品を購入</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>備品 200,000</td><td>当座預金 200,000</td></tr></table>
<p><strong>例3：現金実際残高と帳簿残高の差額10,000円（不足）を発見</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>現金過不足 10,000</td><td>現金 10,000</td></tr></table>
</div>`,
rationale:`<p>現金の範囲（小切手・為替証書等も含む）は試験の頻出ポイントです。「現金として扱うのは即座に換金できるもの」と理解しましょう。</p>
<p>当座預金は小切手決済専用で利息が付かない特殊な口座です。</p>`,
quiz:[
  {q:"他人が振り出した小切手を受け取った場合、どの勘定科目で処理しますか？",opts:["現金","当座預金","受取手形","有価証券"],ans:0,exp:"他人振出小切手は即座に換金できるため「現金」として処理します。"},
  {q:"小切手を振り出して支払った場合、貸方に記録する勘定科目はどれですか？",opts:["当座預金","現金","普通預金","支払手形"],ans:0,exp:"小切手を振り出すと当座預金が減少するため、貸方「当座預金」で記録します。"},
  {q:"現金の実際残高が帳簿より5,000円少なかった場合の仕訳はどれですか？",opts:["現金過不足5,000／現金5,000","現金5,000／現金過不足5,000","雑損5,000／現金5,000","現金5,000／雑益5,000"],ans:0,exp:"現金実際残高が帳簿より少ない（不足）場合：借方「現金過不足」、貸方「現金」で帳簿を合わせます。"}
]},

{id:"ch2-2",ch:2,chName:"第2章：各種取引の仕訳",title:"売掛金・受取手形",subtitle:"代金後払い・手形取引を理解する",
explain:`<p>商品を売ったが代金をまだ受け取っていない場合の処理です。</p>
<ul>
  <li>📋 <strong>売掛金</strong>：掛けで商品を売った際に生じる代金請求権（資産）</li>
  <li>📄 <strong>受取手形</strong>：得意先から受け取った約束手形・為替手形（資産）</li>
</ul>
<p><strong>売掛金の流れ：</strong></p>
<p>商品売上（売掛金↑）→ 代金回収（売掛金↓・現金↑）→ 貸倒れ（売掛金↓・貸倒損失↑）</p>
<p><strong>受取手形の流れ：</strong></p>
<p>手形受取（受取手形↑）→ 期日に決済（受取手形↓・当座預金↑）</p>`,
diagram:`<div class="diagram-box">
<div style="display:flex;flex-direction:column;gap:10px;">
  <div style="background:#FFE4EC;padding:10px;border-radius:8px;">
    <strong>売掛金の仕訳パターン</strong><br>
    売上時：借方「売掛金」／貸方「売上」<br>
    回収時：借方「現金・当座預金」／貸方「売掛金」<br>
    貸倒時：借方「貸倒損失」／貸方「売掛金」
  </div>
  <div style="background:#E4F0FF;padding:10px;border-radius:8px;">
    <strong>受取手形の仕訳パターン</strong><br>
    受取時：借方「受取手形」／貸方「売上・売掛金等」<br>
    決済時：借方「当座預金」／貸方「受取手形」<br>
    裏書譲渡：借方「買掛金等」／貸方「受取手形」
  </div>
</div>
</div>`,
example:`<div class="example-box">
<p><strong>例1：商品500,000円を掛けで販売</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>売掛金 500,000</td><td>売上 500,000</td></tr></table>
<p><strong>例2：売掛金300,000円を当座預金に回収</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>当座預金 300,000</td><td>売掛金 300,000</td></tr></table>
<p><strong>例3：得意先から約束手形200,000円を受け取った</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>受取手形 200,000</td><td>売掛金 200,000</td></tr></table>
</div>`,
rationale:`<p>売掛金と受取手形は「まだ受け取っていないお金」という点では同じですが、約束手形という証券の形になっているかどうかの違いです。手形は法的効力が強く、商取引の決済に広く使われています。</p>`,
quiz:[
  {q:"商品を掛けで販売したとき、借方に記録する勘定科目はどれですか？",opts:["売掛金","売上","現金","受取手形"],ans:0,exp:"掛け販売では代金をまだ受け取っていないため、資産「売掛金」が増加し借方に記録します。"},
  {q:"売掛金を現金で回収したときの仕訳はどれですか？",opts:["現金／売掛金","売掛金／現金","売上／売掛金","売掛金／売上"],ans:0,exp:"現金（資産↑）借方、売掛金（資産↓）貸方です。"},
  {q:"得意先振出の約束手形を受け取ったとき、借方に記録する勘定科目はどれですか？",opts:["受取手形","支払手形","売掛金","手形借入金"],ans:0,exp:"受け取った約束手形は「受取手形」（資産）の増加として借方に記録します。"}
]},

{id:"ch2-3",ch:2,chName:"第2章：各種取引の仕訳",title:"買掛金・支払手形",subtitle:"商品の仕入れに伴う債務の処理",
explain:`<p>商品を仕入れたが代金をまだ支払っていない場合の処理です。</p>
<ul>
  <li>📋 <strong>買掛金</strong>：掛けで商品を仕入れた際に生じる代金支払義務（負債）</li>
  <li>📄 <strong>支払手形</strong>：仕入先に振り出した約束手形（負債）</li>
</ul>
<p><strong>買掛金の流れ：</strong></p>
<p>仕入（買掛金↑）→ 支払（買掛金↓・当座預金↓）</p>
<p><strong>支払手形の流れ：</strong></p>
<p>手形振出（支払手形↑）→ 期日決済（支払手形↓・当座預金↓）</p>`,
diagram:`<div class="diagram-box">
<div style="display:flex;flex-direction:column;gap:10px;">
  <div style="background:#FFE4EC;padding:10px;border-radius:8px;">
    <strong>買掛金の仕訳パターン</strong><br>
    仕入時：借方「仕入」／貸方「買掛金」<br>
    支払時：借方「買掛金」／貸方「当座預金・現金」<br>
    手形振出：借方「買掛金」／貸方「支払手形」
  </div>
  <div style="background:#E4F0FF;padding:10px;border-radius:8px;">
    <strong>売掛金 vs 買掛金</strong><br>
    売掛金：売った代金をもらう権利（資産）<br>
    買掛金：買った代金を払う義務（負債）<br>
    受取手形：もらった手形（資産）<br>
    支払手形：振り出した手形（負債）
  </div>
</div>
</div>`,
example:`<div class="example-box">
<p><strong>例1：商品400,000円を掛けで仕入れた</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>仕入 400,000</td><td>買掛金 400,000</td></tr></table>
<p><strong>例2：買掛金250,000円を当座預金で支払った</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>買掛金 250,000</td><td>当座預金 250,000</td></tr></table>
<p><strong>例3：買掛金150,000円に対して約束手形を振り出した</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>買掛金 150,000</td><td>支払手形 150,000</td></tr></table>
</div>`,
rationale:`<p>買掛金・支払手形は負債なので「増加＝貸方」「減少＝借方」です。売掛金・受取手形（資産）と逆になることに注意しましょう。</p>`,
quiz:[
  {q:"商品を掛けで仕入れたとき、貸方に記録する勘定科目はどれですか？",opts:["買掛金","売掛金","仕入","現金"],ans:0,exp:"掛け仕入では代金をまだ払っていないため、負債「買掛金」が増加し貸方に記録します。"},
  {q:"買掛金を小切手で支払ったときの仕訳はどれですか？",opts:["買掛金／当座預金","当座預金／買掛金","仕入／現金","買掛金／現金"],ans:0,exp:"買掛金（負債↓）借方、小切手支払は当座預金（資産↓）貸方です。"},
  {q:"仕入先に対して約束手形を振り出したとき、貸方に記録する勘定科目はどれですか？",opts:["支払手形","受取手形","買掛金","手形借入金"],ans:0,exp:"振り出した約束手形は「支払手形」（負債）の増加として貸方に記録します。"}
]},

{id:"ch2-4",ch:2,chName:"第2章：各種取引の仕訳",title:"商品売買（三分法）",subtitle:"仕入・売上・繰越商品を完全マスター",
explain:`<p>日商簿記3級では商品売買を<strong>三分法</strong>で処理します。</p>
<ul>
  <li>📦 <strong>仕入</strong>（費用）：商品を仕入れたときに計上</li>
  <li>💰 <strong>売上</strong>（収益）：商品を売ったときに計上</li>
  <li>📋 <strong>繰越商品</strong>（資産）：決算時の期末商品棚卸高</li>
</ul>
<p><strong>売上原価の計算（決算時）：</strong><br>
売上原価 ＝ 期首商品 ＋ 当期仕入 ー 期末商品</p>
<p><strong>決算整理仕訳（しーくりくりしー）：</strong></p>
<ol>
  <li>仕入 ×× ／ 繰越商品 ××（期首商品を仕入に振替）</li>
  <li>繰越商品 ×× ／ 仕入 ××（期末商品を繰越商品に振替）</li>
</ol>`,
diagram:`<div class="diagram-box">
<p style="font-weight:bold;text-align:center;">【売上原価の算定（しーくりくりしー）】</p>
<div style="background:#FFF9C4;padding:12px;border-radius:8px;font-family:monospace;">
① 仕入　期首商品／繰越商品　期首商品<br>
&nbsp;&nbsp;（例）仕入30,000／繰越商品30,000<br><br>
② 繰越商品　期末商品／仕入　期末商品<br>
&nbsp;&nbsp;（例）繰越商品50,000／仕入50,000<br><br>
売上原価＝仕入勘定残高<br>
＝期首30,000＋当期仕入500,000－期末50,000<br>
＝480,000円
</div>
</div>`,
example:`<div class="example-box">
<p><strong>例1：商品300,000円を掛けで仕入れた（引取費2,000円を現金払）</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>仕入 302,000</td><td>買掛金 300,000<br>現金 2,000</td></tr></table>
<p style="font-size:0.9em;">※引取費用（仕入諸掛）は仕入原価に含める</p>
<p><strong>例2：商品500,000円を掛けで販売（発送費3,000円を現金払）</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>売掛金 500,000<br>発送費 3,000</td><td>売上 500,000<br>現金 3,000</td></tr></table>
<p style="font-size:0.9em;">※発送費（売上諸掛）は別途費用で処理</p>
</div>`,
rationale:`<p>三分法は実務でも使われる最も一般的な商品売買の会計処理です。「しーくりくりしー（仕入繰越、繰越仕入）」という語呂合わせで決算整理仕訳を覚えましょう。</p>`,
quiz:[
  {q:"三分法で商品を仕入れたとき、借方に記録する勘定科目はどれですか？",opts:["仕入","商品","繰越商品","買掛金"],ans:0,exp:"三分法では商品を仕入れたときに費用勘定「仕入」の増加として借方に記録します。"},
  {q:"「しーくりくりしー」とは何の手続きですか？",opts:["決算時の売上原価算定仕訳","日常の売上仕訳","仕入の訂正仕訳","棚卸減耗の処理"],ans:0,exp:"しーくりくりしー（仕入／繰越商品→繰越商品／仕入）は売上原価を計算するための決算整理仕訳です。"},
  {q:"期首商品40,000円、当期仕入600,000円、期末商品70,000円のとき、売上原価はいくらですか？",opts:["570,000円","610,000円","640,000円","560,000円"],ans:0,exp:"売上原価＝期首40,000＋当期仕入600,000－期末70,000＝570,000円。"}
]},

{id:"ch2-5",ch:2,chName:"第2章：各種取引の仕訳",title:"固定資産の取得・減価償却・売却",subtitle:"建物・備品・車両の会計処理",
explain:`<p>土地以外の固定資産は使用により価値が減少します。これを費用化する手続きを<strong>減価償却</strong>といいます。</p>
<p><strong>減価償却の計算（定額法）：</strong><br>
年間償却費 ＝ （取得原価 ー 残存価額） ÷ 耐用年数</p>
<p>日商3級では残存価額＝0（ゼロ残存）が多いです。</p>
<p><strong>仕訳（間接法）：</strong></p>
<p>減価償却費 ×× ／ 減価償却累計額 ××</p>
<p>※直接法（資産を直接減らす）は3級ではほぼ出題なし</p>`,
diagram:`<div class="diagram-box">
<p style="font-weight:bold;text-align:center;">【固定資産の帳簿価額の推移】</p>
<div style="background:#FFF9C4;padding:10px;border-radius:8px;font-family:monospace;font-size:0.9em;">
取得原価　1,000,000円<br>
耐用年数　5年（残存0円）<br>
年間償却費　200,000円<br><br>
1年後：帳簿価額800,000円<br>
&nbsp;&nbsp;（累計額200,000円）<br>
2年後：帳簿価額600,000円<br>
&nbsp;&nbsp;（累計額400,000円）<br>
5年後：帳簿価額0円（完全償却）
</div>
<p style="margin-top:8px;text-align:center;">B/S表示：取得原価1,000,000<br>減価償却累計額△400,000<br>帳簿価額600,000</p>
</div>`,
example:`<div class="example-box">
<p><strong>例1：備品800,000円を現金で購入</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>備品 800,000</td><td>現金 800,000</td></tr></table>
<p><strong>例2：備品（取得原価800,000・累計200,000・耐用4年）を期末に減価償却</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>減価償却費 200,000</td><td>減価償却累計額 200,000</td></tr></table>
<p><strong>例3：帳簿価額400,000の備品を350,000円で売却（現金）</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>現金 350,000<br>減価償却累計額 400,000<br>固定資産売却損 50,000</td><td>備品 800,000</td></tr></table>
</div>`,
rationale:`<p>固定資産の売却仕訳では取得原価と累計額を両方消去します。売却額と帳簿価額（取得原価－累計額）の差額が売却損益です。帳簿価額より高く売れれば売却益、安ければ売却損です。</p>`,
quiz:[
  {q:"取得原価600,000円、耐用年数5年（残存価額ゼロ）の備品の年間減価償却費はいくらですか？",opts:["120,000円","100,000円","150,000円","60,000円"],ans:0,exp:"定額法：年間償却費＝600,000÷5年＝120,000円。"},
  {q:"間接法で減価償却仕訳を行ったとき、貸方に記録する勘定科目はどれですか？",opts:["減価償却累計額","減価償却費","備品","建物"],ans:0,exp:"間接法では貸方「減価償却累計額」を使い、資産（備品等）を直接減らしません。"},
  {q:"固定資産の帳簿価額より低い金額で売却した場合に発生するものはどれですか？",opts:["固定資産売却損","固定資産売却益","減価償却費","貸倒損失"],ans:0,exp:"帳簿価額より安く売れた場合は「固定資産売却損」（費用）が発生します。"}
]}
);

window.SLIDES.push(
{id:"ch2-6",ch:2,chName:"第2章：各種取引の仕訳",title:"貸付金・借入金",subtitle:"資金の貸し借りと利息の処理",
explain:`<p>資金の貸し借りに関する処理です。</p>
<ul>
  <li>💰 <strong>貸付金</strong>（資産）：他者にお金を貸した際の返済請求権</li>
  <li>💳 <strong>借入金</strong>（負債）：他者からお金を借りた際の返済義務</li>
  <li>📈 <strong>受取利息</strong>（収益）：貸付金の利息収入</li>
  <li>📉 <strong>支払利息</strong>（費用）：借入金の利息費用</li>
</ul>
<p>利息の計算：元本 × 年利率 × 月数/12</p>`,
diagram:`<div class="diagram-box">
<div style="display:flex;flex-direction:column;gap:8px;">
  <div style="background:#E4F0FF;padding:10px;border-radius:8px;">
    <strong>【貸付時】</strong>　貸付金 ×× ／ 現金・普通預金 ××<br>
    <strong>【回収時】</strong>　現金・普通預金 ×× ／ 貸付金 ××<br>
    <strong>【利息受取】</strong>　現金 ×× ／ 受取利息 ××
  </div>
  <div style="background:#FFE4EC;padding:10px;border-radius:8px;">
    <strong>【借入時】</strong>　現金・普通預金 ×× ／ 借入金 ××<br>
    <strong>【返済時】</strong>　借入金 ×× ／ 現金・普通預金 ××<br>
    <strong>【利息支払】</strong>　支払利息 ×× ／ 現金 ××
  </div>
</div>
</div>`,
example:`<div class="example-box">
<p><strong>例1：社員に100,000円を現金で貸し付けた</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>貸付金 100,000</td><td>現金 100,000</td></tr></table>
<p><strong>例2：銀行から500,000円借り入れ、利息5,000円を差し引いた残額が普通預金に入金された</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>普通預金 495,000<br>支払利息 5,000</td><td>借入金 500,000</td></tr></table>
</div>`,
rationale:`<p>貸付金と借入金は同額の取引でも主体の立場が逆になります。「貸した側→貸付金（資産）」「借りた側→借入金（負債）」と整理して覚えましょう。</p>`,
quiz:[
  {q:"他社に現金を貸し付けたとき、借方に記録する勘定科目はどれですか？",opts:["貸付金","借入金","現金","受取利息"],ans:0,exp:"貸し付けた側は返済を受ける権利（資産）が発生するため「貸付金」を借方に記録します。"},
  {q:"銀行からの借入金に対して利息を現金で支払ったときの仕訳はどれですか？",opts:["支払利息／現金","現金／受取利息","借入金／現金","支払利息／借入金"],ans:0,exp:"利息支払は費用「支払利息」の発生（借方）と現金（資産）の減少（貸方）です。"},
  {q:"元本200,000円、年利3%、期間6ヶ月の受取利息はいくらですか？",opts:["3,000円","6,000円","1,500円","12,000円"],ans:0,exp:"200,000×3%×6/12＝3,000円。"}
]},

{id:"ch2-7",ch:2,chName:"第2章：各種取引の仕訳",title:"資本金・引出金",subtitle:"個人企業の元手と私的な引き出し",
explain:`<p>個人企業特有の処理です。</p>
<ul>
  <li>💰 <strong>資本金</strong>（純資産）：事業の元手として投資したお金。増加→貸方</li>
  <li>💸 <strong>引出金</strong>（純資産のマイナス）：事業用資金を私的に使った場合。増加→借方</li>
</ul>
<p>決算時：引出金は資本金から差し引き（引出金を資本金に振替）</p>
<p>引出金 ×× ／ 資本金 ××（決算振替）</p>`,
diagram:`<div class="diagram-box">
<div style="text-align:center;padding:12px;background:#FFF9C4;border-radius:8px;">
  <strong>純資産の構造</strong><br><br>
  資本金（期首）<br>
  ＋ 当期純利益<br>
  ー 引出金<br>
  ＝ <strong>資本金（期末）</strong>
</div>
</div>`,
example:`<div class="example-box">
<p><strong>例1：オーナーが事業資金に現金500,000円を追加投資した</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>現金 500,000</td><td>資本金 500,000</td></tr></table>
<p><strong>例2：オーナーが生活費として現金30,000円を引き出した</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>引出金 30,000</td><td>現金 30,000</td></tr></table>
<p><strong>例3：決算時に引出金60,000円を資本金に振替</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>資本金 60,000</td><td>引出金 60,000</td></tr></table>
</div>`,
rationale:`<p>引出金は「資本金の減少」を表す特殊な勘定科目です。直接資本金を減らさず引出金勘定を使うことで、どれだけ私的に使ったかが明確になります。</p>`,
quiz:[
  {q:"事業主が私的に現金20,000円を引き出したときの仕訳はどれですか？",opts:["引出金／現金","現金／引出金","資本金／現金","現金／資本金"],ans:0,exp:"引出金（純資産のマイナス）の増加→借方、現金（資産）の減少→貸方。"},
  {q:"引出金勘定の性質として正しいものはどれですか？",opts:["純資産のマイナス勘定","負債勘定","費用勘定","資産勘定"],ans:0,exp:"引出金は資本金（純資産）の控除項目です。増加したら借方に記録します。"},
  {q:"決算時に引出金50,000円を資本金に振り替えたときの仕訳はどれですか？",opts:["資本金／引出金","引出金／資本金","費用／引出金","資本金／現金"],ans:0,exp:"決算で引出金を消去します。資本金（純資産）が減少→借方、引出金を消去→貸方。"}
]},

{id:"ch2-8",ch:2,chName:"第2章：各種取引の仕訳",title:"給料・租税公課などの費用処理",subtitle:"人件費・税金・諸費用の仕訳",
explain:`<p>企業が日常的に支払う費用の処理です。</p>
<ul>
  <li>👥 <strong>給料</strong>（費用）：従業員への賃金</li>
  <li>🏛 <strong>租税公課</strong>（費用）：印紙税・固定資産税等の税金</li>
  <li>🏠 <strong>地代家賃</strong>（費用）：土地・建物の賃借料</li>
  <li>📞 <strong>通信費</strong>（費用）：電話・郵便等</li>
  <li>💡 <strong>水道光熱費</strong>（費用）：電気・ガス・水道</li>
  <li>🚗 <strong>旅費交通費</strong>（費用）：移動費・交通費</li>
</ul>
<p>給料支払い時の注意：<br>
源泉所得税・社会保険料は「預り金」（負債）で処理</p>`,
diagram:`<div class="diagram-box">
<p style="font-weight:bold;text-align:center;">【給料の仕訳（源泉徴収あり）】</p>
<div style="background:#FFF9C4;padding:10px;border-radius:8px;">
給料総額 500,000円<br>
源泉所得税 30,000円（預り）<br>
社会保険料 50,000円（預り）<br>
差引手取り 420,000円<br><br>
借方：給料 500,000<br>
貸方：所得税預り金 30,000<br>
　　　社会保険料預り金 50,000<br>
　　　現金・普通預金 420,000
</div>
</div>`,
example:`<div class="example-box">
<p><strong>例1：固定資産税200,000円を現金で納付</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>租税公課 200,000</td><td>現金 200,000</td></tr></table>
<p><strong>例2：事務所家賃80,000円を普通預金から支払い</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>地代家賃 80,000</td><td>普通預金 80,000</td></tr></table>
</div>`,
rationale:`<p>費用勘定は発生時に借方に記録します。給料の源泉徴収は「会社が従業員の代わりに税金を預かって後で税務署に納付する」仕組みです。この中間段階を「預り金」（負債）で表現します。</p>`,
quiz:[
  {q:"固定資産税を現金で支払ったとき、借方に記録する勘定科目はどれですか？",opts:["租税公課","支払利息","地代家賃","税金費用"],ans:0,exp:"固定資産税・印紙税等の税金は「租税公課」（費用）として処理します。"},
  {q:"給料から源泉所得税を差し引いて支払った場合、差し引いた源泉税の処理はどれですか？",opts:["所得税預り金（負債）として計上","費用として計上","資本金から差し引く","記録しない"],ans:0,exp:"源泉所得税は会社が従業員から預かった税金です。「所得税預り金」等の負債（預り金）として計上します。"},
  {q:"事務所の電気代30,000円を普通預金から支払ったときの仕訳はどれですか？",opts:["水道光熱費／普通預金","普通預金／水道光熱費","光熱費／現金","地代家賃／普通預金"],ans:0,exp:"電気代は「水道光熱費」（費用）の発生→借方、普通預金（資産）の減少→貸方。"}
]},

{id:"ch2-9",ch:2,chName:"第2章：各種取引の仕訳",title:"前払い・前受け・未払い・未収の処理",subtitle:"経過勘定（繰延・見越）の完全理解",
explain:`<p>費用・収益の計上時期を正しく調整するための勘定科目群です。</p>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin-top:8px;">
<tr style="background:#FFB7C5;"><th>勘定科目</th><th>種類</th><th>意味</th></tr>
<tr><td>前払費用</td><td>資産</td><td>翌期以降の費用を先払い済み</td></tr>
<tr><td>前受収益</td><td>負債</td><td>翌期以降の収益を先受け済み</td></tr>
<tr><td>未払費用</td><td>負債</td><td>当期の費用がまだ未払い</td></tr>
<tr><td>未収収益</td><td>資産</td><td>当期の収益がまだ未収</td></tr>
</table>`,
diagram:`<div class="diagram-box">
<p style="font-weight:bold;text-align:center;">【経過勘定の仕訳パターン】</p>
<div style="font-size:0.9em;line-height:1.8;">
<strong>前払費用（例：家賃の前払い）</strong><br>
決算：前払費用 ×× ／ 地代家賃 ××<br>
翌期：地代家賃 ×× ／ 前払費用 ××<br><br>
<strong>未払費用（例：利息の未払い）</strong><br>
決算：支払利息 ×× ／ 未払費用 ××<br>
翌期：未払費用 ×× ／ 支払利息 ××（再振替）
</div>
</div>`,
example:`<div class="example-box">
<p><strong>例：家賃12,000円を翌月分として前払いした（決算整理）</strong></p>
<p>毎月12,000円の家賃を年間144,000円として支払い済み。うち翌期分12,000円を前払費用に計上。</p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>前払費用 12,000</td><td>地代家賃 12,000</td></tr></table>
<p><strong>例：利息15,000円が当期分として未払（決算整理）</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>支払利息 15,000</td><td>未払費用 15,000</td></tr></table>
</div>`,
rationale:`<p>発生主義：費用・収益はお金の動きではなく「発生した期間」に計上するルール。これにより決算期間の損益が正確に計算できます。経過勘定はこの発生主義を実現するための調整勘定です。</p>`,
quiz:[
  {q:"翌期分の家賃を当期に前払いした場合、決算で計上する勘定科目はどれですか？",opts:["前払費用（資産）","前受収益（負債）","未払費用（負債）","未収収益（資産）"],ans:0,exp:"翌期以降の費用を先払いした場合、当期の費用を減らして「前払費用」（資産）を計上します。"},
  {q:"当期分の利息がまだ未払いの場合、決算で計上する勘定科目はどれですか？",opts:["未払費用（負債）","前払費用（資産）","前受収益（負債）","受取利息（収益）"],ans:0,exp:"当期に発生した費用の未払分は「未払費用」（負債）として計上します。"},
  {q:"前払費用は貸借対照表のどこに記載されますか？",opts:["資産の部","負債の部","純資産の部","費用として記載"],ans:0,exp:"前払費用はまだ費用にならない部分（将来受けるサービスの権利）のため「資産」の部に記載します。"}
]},

{id:"ch2-10",ch:2,chName:"第2章：各種取引の仕訳",title:"貸倒引当金",subtitle:"将来の焦げ付きリスクを事前に計上する",
explain:`<p>売掛金・受取手形などの債権が将来回収できなくなるリスクを事前に見積もって費用計上する手続きです。</p>
<ul>
  <li>📉 <strong>貸倒引当金繰入</strong>（費用）：引当金の設定額</li>
  <li>📋 <strong>貸倒引当金</strong>（資産のマイナス）：債権から差し引く評価勘定</li>
</ul>
<p><strong>設定額の計算：</strong><br>
受取手形残高 × 貸倒設定率 ＋ 売掛金残高 × 貸倒設定率 ＝ 必要引当額</p>
<p><strong>差額補充法：</strong>期末に必要残高と現残高の差額だけ追加計上</p>`,
diagram:`<div class="diagram-box">
<div style="display:flex;flex-direction:column;gap:8px;font-size:0.9em;">
  <div style="background:#FFE4EC;padding:8px;border-radius:6px;">
    <strong>設定時</strong>：貸倒引当金繰入 ×× ／ 貸倒引当金 ××
  </div>
  <div style="background:#E4F0FF;padding:8px;border-radius:6px;">
    <strong>実際に貸倒れた場合</strong>：<br>
    引当金がある → 貸倒引当金 ×× ／ 売掛金 ××<br>
    引当金を超える → 貸倒損失も計上
  </div>
  <div style="background:#E4FFE4;padding:8px;border-radius:6px;">
    <strong>B/S表示</strong>：売掛金 ×××,000<br>
    貸倒引当金 △×,000 ← 差引控除
  </div>
</div>
</div>`,
example:`<div class="example-box">
<p><strong>例1：売掛金500,000円に対して2%の貸倒引当金を設定</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>貸倒引当金繰入 10,000</td><td>貸倒引当金 10,000</td></tr></table>
<p><strong>例2：売掛金20,000円が貸倒れ（引当金残8,000円）</strong></p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>貸倒引当金 8,000<br>貸倒損失 12,000</td><td>売掛金 20,000</td></tr></table>
</div>`,
rationale:`<p>保守主義の原則：将来の損失が予測できる場合は早めに計上して利益を過大に見せないようにする会計の考え方。貸倒引当金はこの保守主義を反映した処理です。</p>`,
quiz:[
  {q:"売掛金300,000円に対し2%の貸倒引当金を設定する仕訳で、借方の勘定科目はどれですか？",opts:["貸倒引当金繰入","貸倒損失","貸倒引当金","売掛金"],ans:0,exp:"引当金設定時は「貸倒引当金繰入」（費用）を借方に記録します。金額は300,000×2%＝6,000円。"},
  {q:"売掛金が実際に貸し倒れた場合、貸倒引当金の残高がある場合はどう処理しますか？",opts:["貸倒引当金を取り崩して充当する","貸倒損失を全額費用計上する","引当金は使わない","売掛金を増やす"],ans:0,exp:"設定した引当金の範囲内であれば「貸倒引当金」（借方）で充当します。引当金を超える分のみ「貸倒損失」を計上します。"},
  {q:"貸倒引当金はB/S（貸借対照表）のどこに記載されますか？",opts:["資産の部（売掛金等から差し引く）","負債の部","純資産の部","費用として記載"],ans:0,exp:"貸倒引当金は評価勘定として売掛金等から差し引く形で資産の部に間接控除法で表示します。"}
]}
);

window.SLIDES.push(
{id:"ch3-1",ch:3,chName:"第3章：帳簿記入",title:"仕訳帳の記入方法",subtitle:"すべての取引を記録する帳簿",
explain:`<p><strong>仕訳帳</strong>は発生した取引をすべて日付順に記録する帳簿（主要簿）です。</p>
<p>仕訳帳の構成：</p>
<ul>
  <li>日付・摘要（取引内容の説明）・元丁（元帳のページ番号）・借方金額・貸方金額</li>
</ul>
<p><strong>小書き</strong>：取引の相手科目を括弧内に記載（例：（現金））</p>
<p>すべての仕訳は必ず仕訳帳に記入してから総勘定元帳に転記します。</p>`,
diagram:`<div class="diagram-box">
<p style="font-weight:bold;text-align:center;">【仕訳帳のフォーム】</p>
<table style="width:100%;border-collapse:collapse;font-size:0.85em;text-align:center;">
<tr style="background:#FFB7C5;"><th>日付</th><th>摘要</th><th>元丁</th><th>借方</th><th>貸方</th></tr>
<tr><td>5/1</td><td>（現金）<br>売上</td><td>1<br>15</td><td>50,000<br>—</td><td>—<br>50,000</td></tr>
<tr><td>5/3</td><td>仕入<br>（買掛金）</td><td>20<br>5</td><td>—<br>30,000</td><td>30,000<br>—</td></tr>
</table>
</div>`,
example:`<div class="example-box">
<p><strong>取引：5月1日 商品50,000円を現金で販売</strong></p>
<p>仕訳帳への記入：</p>
<ul>
  <li>日付：5/1</li>
  <li>摘要（借方）：現金 → 小書き（売上）</li>
  <li>摘要（貸方）：売上 → 小書き（現金）</li>
  <li>借方金額：50,000</li>
  <li>貸方金額：50,000</li>
</ul>
</div>`,
rationale:`<p>仕訳帳は「仕訳の原始記録」です。後から取引内容を追跡・確認できるよう、摘要欄に相手科目や取引の説明を丁寧に記載します。仕訳帳と元帳はセットで主要簿を構成します。</p>`,
quiz:[
  {q:"仕訳帳はどのような帳簿ですか？",opts:["すべての取引を日付順に記録する帳簿","勘定科目別に記録する帳簿","商品の売上のみを記録する帳簿","現金の収支を記録する帳簿"],ans:0,exp:"仕訳帳はすべての取引を発生順（日付順）に記録する帳簿です。"},
  {q:"仕訳帳の「摘要」欄に記入する内容として正しいものはどれですか？",opts:["勘定科目名と相手科目（小書き）","取引金額のみ","元帳のページ番号のみ","会社名のみ"],ans:0,exp:"摘要欄には借方・貸方の勘定科目名と、相手勘定（小書き）を記入します。"},
  {q:"仕訳帳と総勘定元帳はどのような関係にありますか？",opts:["仕訳帳から元帳に転記する","元帳から仕訳帳に記入する","両方独立している","どちらか一方のみ使用する"],ans:0,exp:"仕訳帳に記入した後、各勘定科目ごとに総勘定元帳に転記（posting）します。"}
]},

{id:"ch3-2",ch:3,chName:"第3章：帳簿記入",title:"総勘定元帳への転記",subtitle:"勘定科目別に集計する帳簿",
explain:`<p><strong>総勘定元帳（元帳）</strong>は勘定科目ごとに取引を集計する帳簿です。</p>
<p>仕訳帳→元帳への転記手順：</p>
<ol>
  <li>仕訳帳の借方科目 → 元帳の該当科目の借方に転記</li>
  <li>仕訳帳の貸方科目 → 元帳の該当科目の貸方に転記</li>
  <li>仕訳帳に元帳ページ番号（元丁）を記入</li>
  <li>元帳に仕訳帳ページ番号（仕丁）を記入</li>
</ol>
<p><strong>T字型勘定</strong>：左側（借方）と右側（貸方）に分けて記録</p>`,
diagram:`<div class="diagram-box">
<p style="font-weight:bold;text-align:center;">【T字型勘定（現金勘定の例）】</p>
<div style="display:flex;gap:8px;justify-content:center;">
  <div style="border:2px solid #ccc;padding:8px;border-radius:6px;flex:1;text-align:center;">
    <strong>現金（資産）</strong><br>
    <div style="display:flex;border-top:1px solid #ccc;margin-top:8px;">
      <div style="flex:1;text-align:left;padding:4px;">借方<br>前月繰越 100,000<br>売上 50,000</div>
      <div style="border-left:1px solid #ccc;"></div>
      <div style="flex:1;text-align:right;padding:4px;">貸方<br>仕入 30,000<br>次月繰越 120,000</div>
    </div>
  </div>
</div>
</div>`,
example:`<div class="example-box">
<p><strong>仕訳：現金50,000 ／ 売上50,000</strong></p>
<p>転記先①：現金勘定の<strong>借方</strong>に「売上 50,000」と記入</p>
<p>転記先②：売上勘定の<strong>貸方</strong>に「現金 50,000」と記入</p>
<p>各勘定の残高＝借方合計－貸方合計（資産・費用）またはその逆（負債・純資産・収益）</p>
</div>`,
rationale:`<p>元帳は各勘定科目の増減と残高を一覧できる帳簿です。試算表は元帳の残高を集めて作成します。元帳の残高が試算表と一致することが帳簿の正確性の証明になります。</p>`,
quiz:[
  {q:"総勘定元帳への転記は何を基に行いますか？",opts:["仕訳帳","試算表","精算表","現金出納帳"],ans:0,exp:"総勘定元帳への転記は仕訳帳（すべての取引記録）を基に行います。"},
  {q:"仕訳「売掛金100,000 ／ 売上100,000」の転記として正しいものはどれですか？",opts:["売掛金勘定の借方と売上勘定の貸方に転記","売掛金勘定の貸方と売上勘定の借方に転記","両方の借方に転記","両方の貸方に転記"],ans:0,exp:"仕訳の借方（売掛金）→元帳の借方、仕訳の貸方（売上）→元帳の貸方に転記します。"},
  {q:"T字型勘定で資産勘定の残高はどのように計算しますか？",opts:["借方合計－貸方合計","貸方合計－借方合計","借方合計のみ","貸方合計のみ"],ans:0,exp:"資産勘定は通常借方残高（借方合計＞貸方合計）のため、残高＝借方合計－貸方合計で計算します。"}
]},

{id:"ch3-3",ch:3,chName:"第3章：帳簿記入",title:"現金出納帳・当座預金出納帳",subtitle:"現金・当座預金の補助簿",
explain:`<p>主要簿（仕訳帳・元帳）を補完する補助簿です。</p>
<ul>
  <li>💵 <strong>現金出納帳</strong>：現金の増減を日付順に詳細記録。残高欄付き</li>
  <li>🏦 <strong>当座預金出納帳</strong>：当座預金の増減を詳細記録。残高欄付き</li>
</ul>
<p>両方とも同じ構造：日付・摘要・借方（入金）・貸方（出金）・残高</p>
<p><strong>銀行勘定調整表</strong>：帳簿残高と銀行の残高証明書の差異を調整する表</p>`,
diagram:`<div class="diagram-box">
<p style="font-weight:bold;text-align:center;">【現金出納帳のフォーム】</p>
<table style="width:100%;border-collapse:collapse;font-size:0.85em;text-align:center;">
<tr style="background:#B5EAD7;"><th>日付</th><th>摘要</th><th>入金</th><th>出金</th><th>残高</th></tr>
<tr><td>前月繰越</td><td></td><td>100,000</td><td>—</td><td>100,000</td></tr>
<tr><td>5/1</td><td>売上代金受取</td><td>50,000</td><td>—</td><td>150,000</td></tr>
<tr><td>5/3</td><td>仕入代金支払</td><td>—</td><td>30,000</td><td>120,000</td></tr>
</table>
</div>`,
example:`<div class="example-box">
<p><strong>当座預金出納帳の特徴：</strong></p>
<p>小切手を振り出した場合：出金欄に記入（当座預金減少）</p>
<p>他社小切手を受け取り当座預金に入金した場合：入金欄に記入</p>
<p><strong>銀行勘定調整表の調整項目例：</strong></p>
<ul>
  <li>未取付小切手（振出済みだが銀行未呈示）→ 銀行残高を減額</li>
  <li>未渡小切手（振出したが未渡し）→ 帳簿残高を加算</li>
  <li>時間外預け入れ → 銀行残高を加算</li>
</ul>
</div>`,
rationale:`<p>補助簿は主要簿（仕訳帳・元帳）の詳細情報を補う帳簿です。現金出納帳があれば現金の動きを一目で確認でき、現金過不足の発見に役立ちます。</p>`,
quiz:[
  {q:"現金出納帳の「入金」欄に記入するのはどのような取引ですか？",opts:["現金が増加した取引","現金が減少した取引","当座預金が増加した取引","売上が発生した取引"],ans:0,exp:"入金欄は現金（資産）が増加した取引（現金受取）を記録します。"},
  {q:"当座預金出納帳と現金出納帳の共通点はどれですか？",opts:["日付・摘要・借方・貸方・残高の形式","工場の在庫記録","手形の詳細","商品の売上詳細"],ans:0,exp:"両方とも日付・摘要・増加（入金）・減少（出金）・残高の形式で記録します。"},
  {q:"銀行勘定調整表を作成する目的はどれですか？",opts:["帳簿残高と銀行残高の差異を調整・説明する","利益を計算する","税金を計算する","売掛金を集計する"],ans:0,exp:"銀行勘定調整表は帳簿上の当座預金残高と銀行の残高証明書の差異（未取付小切手等）を調整・説明するために作成します。"}
]},

{id:"ch3-4",ch:3,chName:"第3章：帳簿記入",title:"売掛金元帳・買掛金元帳",subtitle:"得意先・仕入先別の補助簿",
explain:`<p>売掛金・買掛金の明細を取引先別に管理する補助簿です。</p>
<ul>
  <li>📋 <strong>売掛金元帳（得意先元帳）</strong>：得意先ごとの売掛金残高を管理</li>
  <li>📋 <strong>買掛金元帳（仕入先元帳）</strong>：仕入先ごとの買掛金残高を管理</li>
</ul>
<p>各帳簿の残高合計＝総勘定元帳の売掛金（買掛金）残高と一致</p>
<p>構成：日付・摘要・借方・貸方・残高（取引先別のT字型）</p>`,
diagram:`<div class="diagram-box">
<p style="font-weight:bold;text-align:center;">【売掛金元帳（A社分）の例】</p>
<table style="width:100%;border-collapse:collapse;font-size:0.85em;text-align:center;">
<tr style="background:#FFB7C5;"><th>日付</th><th>摘要</th><th>借方</th><th>貸方</th><th>残高</th></tr>
<tr><td>前月繰越</td><td></td><td>—</td><td>—</td><td>200,000</td></tr>
<tr><td>5/5</td><td>売上</td><td>100,000</td><td>—</td><td>300,000</td></tr>
<tr><td>5/20</td><td>回収</td><td>—</td><td>150,000</td><td>150,000</td></tr>
</table>
</div>`,
example:`<div class="example-box">
<p><strong>A社への売掛金100,000円と B社への売掛金80,000円がある場合：</strong></p>
<p>・売掛金元帳（A社）残高：100,000円</p>
<p>・売掛金元帳（B社）残高：80,000円</p>
<p>・元帳の売掛金残高：100,000 + 80,000 = 180,000円</p>
<p>→ 両方が一致することで記録が正確であることを確認できます。</p>
</div>`,
rationale:`<p>総勘定元帳の売掛金勘定は全取引先の合計金額しかわかりません。売掛金元帳があることで「A社にいくら請求中か」「B社はいつ入金予定か」など取引先ごとの管理ができます。</p>`,
quiz:[
  {q:"売掛金元帳（得意先元帳）の役割として正しいものはどれですか？",opts:["得意先ごとの売掛金残高を管理する","仕入先ごとの買掛金残高を管理する","全体の売上を集計する","現金残高を管理する"],ans:0,exp:"売掛金元帳（得意先元帳）は得意先（顧客）ごとに売掛金の増減・残高を管理する補助簿です。"},
  {q:"売掛金元帳の各取引先残高合計と一致するものはどれですか？",opts:["総勘定元帳の売掛金勘定残高","総勘定元帳の売上勘定残高","現金出納帳残高","仕訳帳の借方合計"],ans:0,exp:"売掛金元帳（補助元帳）の全取引先残高の合計は、必ず総勘定元帳（主要簿）の売掛金残高と一致します。"},
  {q:"買掛金元帳に記録するのはどのような取引ですか？",opts:["仕入先ごとの買掛金の増減","得意先への売掛金の増減","現金の出納","商品の在庫"],ans:0,exp:"買掛金元帳（仕入先元帳）は仕入先ごとの買掛金（掛け仕入の未払額）の増減を管理します。"}
]},

{id:"ch3-5",ch:3,chName:"第3章：帳簿記入",title:"商品有高帳（先入先出法・移動平均法）",subtitle:"商品在庫の数量・金額を管理する",
explain:`<p>商品の受入・払出・残高を数量・単価・金額で管理する補助簿です。</p>
<p><strong>払出単価の計算方法：</strong></p>
<ul>
  <li>📊 <strong>先入先出法（FIFO）</strong>：先に仕入れた商品から先に払い出すと仮定</li>
  <li>📊 <strong>移動平均法</strong>：仕入れのたびに平均単価を計算して払出単価とする</li>
</ul>
<p>移動平均単価＝（在庫金額＋仕入金額）÷（在庫数量＋仕入数量）</p>`,
diagram:`<div class="diagram-box">
<p style="font-weight:bold;text-align:center;">【先入先出法 vs 移動平均法の違い】</p>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:0.85em;">
  <div style="background:#FFE4EC;padding:8px;border-radius:6px;">
    <strong>先入先出法</strong><br>
    古い在庫から払出<br>
    在庫は新しい単価<br>
    仕入単価が上昇→<br>在庫評価額が高い
  </div>
  <div style="background:#E4F0FF;padding:8px;border-radius:6px;">
    <strong>移動平均法</strong><br>
    仕入毎に平均を計算<br>
    実務で使いやすい<br>
    価格変動の影響が<br>平準化される
  </div>
</div>
</div>`,
example:`<div class="example-box">
<p><strong>移動平均法の例：</strong></p>
<p>期首在庫：10個 × @100円 = 1,000円</p>
<p>仕入：20個 × @120円 = 2,400円</p>
<p>移動平均単価＝(1,000+2,400)÷(10+20)＝<strong>@113.33円</strong></p>
<p>払出20個：20×113.33＝2,266円（切捨て）</p>
<p>在庫残10個：3,400-2,266＝1,134円</p>
</div>`,
rationale:`<p>商品有高帳は棚卸資産の評価方法を決定します。同じ取引でも先入先出法と移動平均法では払出単価（売上原価）と期末在庫評価額が異なります。試験では計算過程を丁寧に示すことが重要です。</p>`,
quiz:[
  {q:"先入先出法の払出単価の決め方として正しいものはどれですか？",opts:["最も古い仕入分から順に払い出す","最も新しい仕入分から払い出す","平均単価を使用する","任意に選択する"],ans:0,exp:"先入先出法（FIFO：First In First Out）は先に仕入れた商品から先に払い出すと仮定して払出単価を計算します。"},
  {q:"移動平均法の平均単価はいつ計算しますか？",opts:["仕入のたびに","月末に","期末に","払出のたびに"],ans:0,exp:"移動平均法は商品を仕入れるたびに（仕入のたびに）新しい平均単価を計算します。"},
  {q:"商品有高帳の「払出」欄に記録するのはどのような取引ですか？",opts:["商品を販売したとき","商品を仕入れたとき","現金を受け取ったとき","手形を振り出したとき"],ans:0,exp:"商品有高帳の払出欄は商品が出庫するとき（販売時）に記録します。"}
]}
);

window.SLIDES.push(
{id:"ch4-1",ch:4,chName:"第4章：試算表",title:"合計試算表の作成",subtitle:"全勘定の借方・貸方合計を集計する",
explain:`<p><strong>合計試算表</strong>は、元帳の各勘定科目の借方合計と貸方合計をまとめた表です。</p>
<p>借方合計の総計＝貸方合計の総計（転記の正確性チェック）</p>
<p><strong>作成手順：</strong></p>
<ol>
  <li>各勘定科目の元帳を確認</li>
  <li>各科目の借方側の合計金額を集計</li>
  <li>各科目の貸方側の合計金額を集計</li>
  <li>試算表の借方合計＝貸方合計を確認</li>
</ol>`,
diagram:`<div class="diagram-box">
<p style="font-weight:bold;text-align:center;">【合計試算表の構造】</p>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;text-align:center;">
<tr style="background:#FFDAC1;"><th>勘定科目</th><th>借方合計</th><th>貸方合計</th></tr>
<tr><td>現金</td><td>500,000</td><td>200,000</td></tr>
<tr><td>売掛金</td><td>300,000</td><td>150,000</td></tr>
<tr><td>買掛金</td><td>100,000</td><td>250,000</td></tr>
<tr><td>売上</td><td>0</td><td>600,000</td></tr>
<tr><td>仕入</td><td>400,000</td><td>0</td></tr>
<tr style="font-weight:bold;background:#FFF9C4;"><td>合計</td><td>1,300,000</td><td>1,200,000</td></tr>
</table>
<p style="font-size:0.8em;text-align:center;">※合計試算表では借方合計≠貸方合計（正常）</p>
</div>`,
example:`<div class="example-box">
<p><strong>重要：合計試算表vs残高試算表の違い</strong></p>
<p>・<strong>合計試算表</strong>：各科目の取引金額の合計（借方合計・貸方合計）を記載。両列の合計は必ず一致</p>
<p>・<strong>残高試算表</strong>：各科目の残高のみを記載。残高のある側（借方or貸方）に記載</p>
<p>・<strong>合計残高試算表</strong>：上記2つを組み合わせた表</p>
</div>`,
rationale:`<p>合計試算表は仕訳・転記の正確性を確認するためのツールです。「借方の総合計＝貸方の総合計」が成立しない場合は転記漏れや計算ミスがあります。</p>`,
quiz:[
  {q:"合計試算表で確認できる内容として正しいものはどれですか？",opts:["借方・貸方への転記が正確かどうか","各科目の残高","当期純利益","期末商品棚卸高"],ans:0,exp:"合計試算表は各科目の借方・貸方合計を集計し、転記ミスを発見するために使います。"},
  {q:"合計試算表の借方合計欄と貸方合計欄の関係として正しいものはどれですか？",opts:["両列の合計は必ず一致する","各科目の借方と貸方は一致する","資産科目だけ借方が大きい","負債科目だけ貸方が大きい"],ans:0,exp:"合計試算表の借方列の合計と貸方列の合計は必ず一致します（複式簿記の原則）。"},
  {q:"合計試算表の作成基礎となるものはどれですか？",opts:["総勘定元帳","仕訳帳","現金出納帳","商品有高帳"],ans:0,exp:"合計試算表は各勘定科目の総勘定元帳（の借方・貸方合計）を基に作成します。"}
]},

{id:"ch4-2",ch:4,chName:"第4章：試算表",title:"残高試算表の作成",subtitle:"各勘定の差引残高を集計する",
explain:`<p><strong>残高試算表</strong>は、元帳の各勘定科目の残高（差引後の純額）をまとめた表です。</p>
<p>資産・費用→借方残高（借方が大きい）<br>
負債・純資産・収益→貸方残高（貸方が大きい）</p>
<p><strong>作成手順：</strong></p>
<ol>
  <li>各勘定科目の借方合計－貸方合計を計算</li>
  <li>差額（残高）を大きい側に記入</li>
  <li>残高試算表の借方合計＝貸方合計を確認</li>
</ol>`,
diagram:`<div class="diagram-box">
<p style="font-weight:bold;text-align:center;">【残高試算表の構造】</p>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;text-align:center;">
<tr style="background:#C7CEEA;"><th>勘定科目</th><th>借方残高</th><th>貸方残高</th></tr>
<tr><td>現金</td><td>300,000</td><td>—</td></tr>
<tr><td>売掛金</td><td>150,000</td><td>—</td></tr>
<tr><td>買掛金</td><td>—</td><td>150,000</td></tr>
<tr><td>資本金</td><td>—</td><td>200,000</td></tr>
<tr><td>売上</td><td>—</td><td>600,000</td></tr>
<tr><td>仕入</td><td>400,000</td><td>—</td></tr>
<tr style="font-weight:bold;background:#FFF9C4;"><td>合計</td><td>850,000</td><td>950,000</td></tr>
</table>
</div>`,
example:`<div class="example-box">
<p><strong>残高の計算例：</strong></p>
<p>現金勘定：借方合計500,000 − 貸方合計200,000 ＝ 残高300,000（借方残高）</p>
<p>売上勘定：貸方合計600,000 − 借方合計0 ＝ 残高600,000（貸方残高）</p>
<p>買掛金勘定：貸方合計250,000 − 借方合計100,000 ＝ 残高150,000（貸方残高）</p>
</div>`,
rationale:`<p>残高試算表は決算前の各勘定残高を一覧できる表です。これを基に精算表や財務諸表を作成します。「残高試算表の各科目残高＝決算前の期末残高」です。</p>`,
quiz:[
  {q:"残高試算表に記載される金額はどれですか？",opts:["各勘定科目の差引残高","各勘定科目の借方合計","各勘定科目の貸方合計","期末商品棚卸高"],ans:0,exp:"残高試算表は各勘定科目の借方合計と貸方合計の差引残高を記載します。"},
  {q:"残高試算表で「現金」の残高が借方に300,000円ある場合の意味はどれですか？",opts:["現金の手持ち残高が300,000円","現金が300,000円の負債","現金が300,000円減少した","現金勘定にエラーがある"],ans:0,exp:"資産勘定（現金等）は借方残高が正常です。借方300,000円は現金の手持ち残高が300,000円あることを意味します。"},
  {q:"残高試算表の作成後、次に行う手続きはどれですか？",opts:["決算整理（精算表の作成）","仕訳帳の記入","元帳への転記","合計試算表の作成"],ans:0,exp:"残高試算表完成後は決算整理仕訳を行い、精算表を作成して財務諸表を作ります。"}
]},

{id:"ch4-3",ch:4,chName:"第4章：試算表",title:"合計残高試算表の作成",subtitle:"合計と残高の両方を一表に集約",
explain:`<p><strong>合計残高試算表</strong>は合計試算表と残高試算表を組み合わせた表です。</p>
<p>構成：借方残高 ｜ 借方合計 ｜ 勘定科目 ｜ 貸方合計 ｜ 貸方残高</p>
<p>試験では最も頻出の試算表形式です。</p>
<p><strong>記入のポイント：</strong></p>
<ul>
  <li>合計欄：元帳の借方・貸方のすべての金額合計</li>
  <li>残高欄：合計の差額（大きい側の列に記入）</li>
  <li>合計欄の総合計（借方）＝合計欄の総合計（貸方）</li>
  <li>残高欄の総合計（借方）＝残高欄の総合計（貸方）</li>
</ul>`,
diagram:`<div class="diagram-box">
<p style="font-weight:bold;text-align:center;">【合計残高試算表のフォーム】</p>
<table style="width:100%;border-collapse:collapse;font-size:0.8em;text-align:center;">
<tr style="background:#A8E6CF;">
  <th>借方残高</th><th>借方合計</th><th>勘定科目</th><th>貸方合計</th><th>貸方残高</th>
</tr>
<tr><td>300,000</td><td>500,000</td><td>現金</td><td>200,000</td><td>—</td></tr>
<tr><td>—</td><td>100,000</td><td>買掛金</td><td>250,000</td><td>150,000</td></tr>
<tr><td>—</td><td>0</td><td>売上</td><td>600,000</td><td>600,000</td></tr>
<tr><td>400,000</td><td>400,000</td><td>仕入</td><td>0</td><td>—</td></tr>
</table>
</div>`,
example:`<div class="example-box">
<p><strong>仕訳データから合計残高試算表を作成する手順：</strong></p>
<ol>
  <li>すべての仕訳を元帳に転記</li>
  <li>各勘定の借方合計・貸方合計を計算</li>
  <li>差引残高を大きい側の残高欄に記入</li>
  <li>合計欄の総計（借方）＝合計欄の総計（貸方）を確認</li>
  <li>残高欄の総計（借方）＝残高欄の総計（貸方）を確認</li>
</ol>
</div>`,
rationale:`<p>合計残高試算表は実務でも広く使われる最も詳細な試算表です。1枚で各科目の取引量（合計）と現在残高の両方が把握できます。</p>`,
quiz:[
  {q:"合計残高試算表で一致しなければならない組み合わせはどれですか？",opts:["合計欄の借方総計と貸方総計、かつ残高欄の借方総計と貸方総計","合計欄の借方と残高欄の貸方","各科目の借方合計と貸方残高","各科目の残高が同じ"],ans:0,exp:"合計残高試算表では①合計欄借方総計＝貸方総計、②残高欄借方総計＝貸方総計の2つがそれぞれ一致します。"},
  {q:"合計残高試算表の「残高」欄の記入方法として正しいものはどれですか？",opts:["借方合計と貸方合計の差額を大きい側に記入","借方合計をそのまま記入","貸方合計をそのまま記入","借方と貸方の両方に合計を記入"],ans:0,exp:"残高は借方合計と貸方合計の差額です。差額を大きい側（資産・費用なら借方残高、負債・純資産・収益なら貸方残高）に記入します。"},
  {q:"試算表を作成する主な目的は何ですか？",opts:["仕訳・転記の誤りを発見する","税金を計算する","商品在庫を管理する","従業員給与を計算する"],ans:0,exp:"試算表は借方合計と貸方合計が一致することを確認し、仕訳・転記ミスを発見することが主な目的です。"}
]},

{id:"ch4-4",ch:4,chName:"第4章：試算表",title:"試算表の誤りの発見",subtitle:"どんなミスが試算表で発見できるか",
explain:`<p>試算表は転記ミスを発見できますが、すべてのミスが発見できるわけではありません。</p>
<p><strong>試算表で発見できるミス：</strong></p>
<ul>
  <li>✅ 片方だけ転記した（片落ち）</li>
  <li>✅ 金額を違う数字で転記した（一方だけ）</li>
  <li>✅ 合計計算ミス</li>
</ul>
<p><strong>試算表では発見できないミス：</strong></p>
<ul>
  <li>❌ 借方・貸方を逆に転記した（貸借が合うため）</li>
  <li>❌ 仕訳自体が間違っている（転記は正しい）</li>
  <li>❌ 同額を別の科目に転記した</li>
  <li>❌ 同じ取引を2回仕訳・転記した</li>
</ul>`,
diagram:`<div class="diagram-box">
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
  <div style="background:#E8FFE8;padding:10px;border-radius:8px;">
    <strong>✅ 発見できるミス</strong><br>
    ・片方だけ転記<br>
    ・一方の金額違い<br>
    ・計算ミス<br>
    →貸借が不一致になる
  </div>
  <div style="background:#FFE8E8;padding:10px;border-radius:8px;">
    <strong>❌ 発見できないミス</strong><br>
    ・借貸逆転記<br>
    ・仕訳ミス<br>
    ・別科目に転記<br>
    ・二重記帳<br>
    →貸借が一致してしまう
  </div>
</div>
</div>`,
example:`<div class="example-box">
<p><strong>発見できないミスの例：</strong></p>
<p>正しい仕訳：現金10,000 ／ 売上10,000</p>
<p>誤った転記：売掛金10,000 ／ 売上10,000（現金でなく売掛金に転記）</p>
<p>→ この場合、借方合計と貸方合計は一致するため試算表では発見できません。</p>
<br>
<p><strong>発見できるミスの例：</strong></p>
<p>正しい転記：現金勘定借方10,000 ＋ 売上勘定貸方10,000</p>
<p>誤った転記：現金勘定借方10,000 のみ（売上への転記忘れ）</p>
<p>→ 借方合計10,000＞貸方合計0 → 不一致で発見できます。</p>
</div>`,
rationale:`<p>試算表は「貸借が一致するかどうか」しかチェックできません。仕訳が根本的に間違っている場合や、借方・貸方が対称的に間違っている場合は発見できません。試算表と並行して原始証憑（請求書・領収書等）との照合も重要です。</p>`,
quiz:[
  {q:"試算表で発見できるミスはどれですか？",opts:["一方の科目だけ転記した（片落ち）","借方と貸方を逆に転記した","仕訳の勘定科目を間違えた","同じ取引を2回仕訳した"],ans:0,exp:"片方だけ転記した場合は借方合計と貸方合計が一致しなくなるため、試算表で発見できます。"},
  {q:"試算表で発見できないミスはどれですか？",opts:["借方・貸方を逆に転記した","金額を一方だけ間違えた","片方の転記を忘れた","合計計算を間違えた"],ans:0,exp:"借方・貸方を逆に転記した場合、借方合計と貸方合計の差額は変わらず一致するため試算表では発見できません。"},
  {q:"試算表の借方合計と貸方合計が一致しない場合、考えられる原因はどれですか？",opts:["片方への転記漏れ","仕訳の科目選択ミス","二重仕訳","借貸の逆転記"],ans:0,exp:"借方・貸方の一方への転記漏れがあると貸借の合計が一致しなくなります。"}
]}
);

window.SLIDES.push(
{id:"ch5-1",ch:5,chName:"第5章：決算・財務諸表",title:"決算整理仕訳の全パターン",subtitle:"期末に必要な調整仕訳をすべてマスター",
explain:`<p>決算整理仕訳は、決算日に帳簿を正確にするために行う仕訳です。主要な6パターンを覚えましょう。</p>
<ol>
  <li>🔄 <strong>売上原価の算定</strong>（しーくりくりしー）</li>
  <li>📉 <strong>減価償却費の計上</strong></li>
  <li>😰 <strong>貸倒引当金の設定</strong></li>
  <li>📅 <strong>経過勘定の調整</strong>（前払・前受・未払・未収）</li>
  <li>🧮 <strong>貯蔵品への振替</strong>（使用済み切手等）</li>
  <li>💱 <strong>現金過不足の整理</strong></li>
</ol>`,
diagram:`<div class="diagram-box">
<p style="font-weight:bold;text-align:center;">【決算整理仕訳まとめ】</p>
<div style="font-size:0.85em;line-height:2;">
①仕入/繰越商品（期首）→繰越商品/仕入（期末）<br>
②減価償却費/減価償却累計額<br>
③貸倒引当金繰入/貸倒引当金<br>
④前払費用/費用、費用/未払費用<br>
⑤貯蔵品/通信費（等）<br>
⑥雑損or雑益/現金過不足（原因不明分）
</div>
</div>`,
example:`<div class="example-box">
<p><strong>複合例：下記の情報から決算整理仕訳を行う</strong></p>
<p>・期首繰越商品30,000円、期末商品50,000円</p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>仕入 30,000</td><td>繰越商品 30,000</td></tr>
<tr><td>繰越商品 50,000</td><td>仕入 50,000</td></tr></table>
<p>・備品400,000円（前年度累計80,000円）耐用5年残存0</p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>減価償却費 80,000</td><td>減価償却累計額 80,000</td></tr></table>
</div>`,
rationale:`<p>決算整理仕訳は期間損益計算を正確にするために欠かせません。すべての項目を漏れなく処理することが財務諸表の正確性を保証します。試験では決算整理事項が5〜6項目列挙されて仕訳を書く問題が頻出です。</p>`,
quiz:[
  {q:"「しーくりくりしー」とは何の仕訳ですか？",opts:["決算時の売上原価算定仕訳","日常の仕入仕訳","受取手形の決済仕訳","固定資産の購入仕訳"],ans:0,exp:"しーくりくりしー（仕入/繰越商品→繰越商品/仕入）は売上原価を計算するための決算整理仕訳です。"},
  {q:"決算整理仕訳が必要な理由はどれですか？",opts:["期間損益を正確に計算するため","現金残高を増やすため","税金を安くするため","売掛金を回収するため"],ans:0,exp:"決算整理仕訳は会計期間の費用・収益を正確に計上し、期間損益計算を適切に行うために必要です。"},
  {q:"決算で現金過不足の原因が不明な場合の処理はどれですか？",opts:["雑損または雑益に振り替える","現金勘定で放置する","資本金から差し引く","費用として全額計上する"],ans:0,exp:"原因不明の現金過不足は決算時に「雑損」（不足の場合）または「雑益」（余剰の場合）に振り替えます。"}
]},

{id:"ch5-2",ch:5,chName:"第5章：決算・財務諸表",title:"精算表の作成",subtitle:"決算整理から財務諸表まで一表で完成",
explain:`<p><strong>精算表</strong>は残高試算表から決算整理を経て財務諸表を作成するまでの過程を1枚の表に示したものです。</p>
<p>精算表の列構成（8欄式）：</p>
<ol>
  <li>残高試算表（借方・貸方）</li>
  <li>決算整理（借方・貸方）</li>
  <li>損益計算書（借方・貸方）</li>
  <li>貸借対照表（借方・貸方）</li>
</ol>
<p>当期純利益は損益計算書欄の差額として算出→貸借対照表欄に転記</p>`,
diagram:`<div class="diagram-box">
<p style="font-weight:bold;text-align:center;">【精算表の流れ（8欄式）】</p>
<div style="font-size:0.85em;">
<table style="width:100%;border-collapse:collapse;text-align:center;">
<tr style="background:#A8E6CF;font-size:0.8em;">
  <th>科目</th><th>T/B借</th><th>T/B貸</th><th>整理借</th><th>整理貸</th><th>P/L借</th><th>P/L貸</th><th>B/S借</th><th>B/S貸</th>
</tr>
<tr><td>現金</td><td>300</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>300</td><td>—</td></tr>
<tr><td>売上</td><td>—</td><td>600</td><td>—</td><td>—</td><td>—</td><td>600</td><td>—</td><td>—</td></tr>
<tr><td>仕入</td><td>400</td><td>—</td><td>30</td><td>50</td><td>380</td><td>—</td><td>—</td><td>—</td></tr>
</table>
</div>
</div>`,
example:`<div class="example-box">
<p><strong>精算表の記入ルール：</strong></p>
<ul>
  <li>資産・費用科目 → B/S借方 or P/L借方</li>
  <li>負債・純資産・収益科目 → B/S貸方 or P/L貸方</li>
  <li>当期純利益 = P/L貸方合計 - P/L借方合計（収益>費用の場合）</li>
  <li>当期純利益をP/L借方とB/S貸方に記入して各欄をバランス</li>
</ul>
</div>`,
rationale:`<p>精算表は試験の大問形式でも頻出です。「整理仕訳をどの欄に足し引きするか」「損益計算書科目かB/S科目か」を正確に判断することが合格の鍵です。</p>`,
quiz:[
  {q:"精算表で「売上」はどの欄に記載されますか？",opts:["損益計算書（P/L）の貸方","貸借対照表（B/S）の貸方","損益計算書（P/L）の借方","貸借対照表（B/S）の借方"],ans:0,exp:"売上（収益）は損益計算書（P/L）の貸方欄に記載します。"},
  {q:"精算表で当期純利益が算出される場所はどこですか？",opts:["損益計算書欄の借方と貸方の差額","残高試算表欄の差額","整理記入欄の差額","貸借対照表欄の差額"],ans:0,exp:"当期純利益はP/L欄の貸方合計（収益）－借方合計（費用）の差額として求めます。"},
  {q:"精算表の「整理記入」欄に記入するものはどれですか？",opts:["決算整理仕訳の金額","残高試算表の残高","財務諸表の金額","元帳の合計金額"],ans:0,exp:"整理記入欄には決算整理仕訳（しーくりくりしー・減価償却等）の借方・貸方金額を記入します。"}
]},

{id:"ch5-3",ch:5,chName:"第5章：決算・財務諸表",title:"損益計算書の作成",subtitle:"一定期間の経営成績を表す財務諸表",
explain:`<p><strong>損益計算書（P/L：Profit and Loss Statement）</strong>は一定期間（会計年度）の収益と費用を対比して当期純利益（または損失）を示す財務諸表です。</p>
<p><strong>構成：</strong></p>
<ul>
  <li>売上高</li>
  <li>− 売上原価 ＝ 売上総利益</li>
  <li>− 販売費及び一般管理費 ＝ 営業利益</li>
  <li>＋ 営業外収益 − 営業外費用 ＝ 経常利益</li>
  <li>＋ 特別利益 − 特別損失 ＝ 税引前当期純利益</li>
  <li>− 法人税等 ＝ 当期純利益</li>
</ul>
<p>※3級では「売上高−売上原価−費用＋収益＝当期純利益」の基本形が中心</p>`,
diagram:`<div class="diagram-box">
<p style="font-weight:bold;text-align:center;">【損益計算書（簡易版）】</p>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;">
<tr style="background:#FFB7C5;"><th colspan="2">損益計算書</th></tr>
<tr><td>売上原価</td><td style="text-align:right;">500,000</td></tr>
<tr><td>給料</td><td style="text-align:right;">120,000</td></tr>
<tr><td>地代家賃</td><td style="text-align:right;">60,000</td></tr>
<tr><td>減価償却費</td><td style="text-align:right;">40,000</td></tr>
<tr style="border-top:1px solid #ccc;"><td><strong>当期純利益</strong></td><td style="text-align:right;"><strong>80,000</strong></td></tr>
<tr><td colspan="2" style="text-align:right;background:#FFF9C4;">売上高：800,000</td></tr>
</table>
</div>`,
example:`<div class="example-box">
<p><strong>P/Lの作成例：</strong></p>
<p>売上高：1,200,000円</p>
<p>売上原価：700,000円（期首30,000＋仕入720,000－期末50,000）</p>
<p>売上総利益：500,000円</p>
<p>販売管理費（給料120,000＋家賃60,000＋償却40,000）：220,000円</p>
<p>当期純利益：500,000－220,000＝<strong>280,000円</strong></p>
</div>`,
rationale:`<p>損益計算書は投資家・融資機関が企業の収益性を判断するための重要な財務諸表です。売上総利益・営業利益・経常利益・純利益の4段階利益を理解することが実務でも重要です。</p>`,
quiz:[
  {q:"損益計算書が示す情報はどれですか？",opts:["一定期間の収益・費用・利益","一定時点の資産・負債・純資産","現金の収入・支出","商品在庫の増減"],ans:0,exp:"損益計算書（P/L）は会計年度（一定期間）の経営成績として収益・費用・純利益を示します。"},
  {q:"売上高800,000円、売上原価500,000円のとき売上総利益はいくらですか？",opts:["300,000円","1,300,000円","500,000円","800,000円"],ans:0,exp:"売上総利益＝売上高800,000－売上原価500,000＝300,000円。"},
  {q:"損益計算書の「当期純利益」はどのように計算しますか？",opts:["収益合計－費用合計","資産合計－負債合計","売上高－売上原価","期末純資産－期首純資産"],ans:0,exp:"当期純利益＝収益合計（売上等）－費用合計（仕入・給料・減価償却等）です。"}
]},

{id:"ch5-4",ch:5,chName:"第5章：決算・財務諸表",title:"貸借対照表の作成",subtitle:"一定時点の財政状態を示す財務諸表",
explain:`<p><strong>貸借対照表（B/S：Balance Sheet）</strong>は決算日（一定時点）の財政状態（資産・負債・純資産）を示す財務諸表です。</p>
<p><strong>記載上のポイント：</strong></p>
<ul>
  <li>売掛金→貸倒引当金を差し引いた純額（間接控除法）</li>
  <li>固定資産→減価償却累計額を差し引いた帳簿価額</li>
  <li>繰越商品→決算整理後の残高を「商品」として記載</li>
  <li>資産合計＝負債合計＋純資産合計</li>
  <li>当期純利益を加算した純資産期末残高を記載</li>
</ul>`,
diagram:`<div class="diagram-box">
<p style="font-weight:bold;text-align:center;">【貸借対照表のフォーム】</p>
<table style="width:100%;border-collapse:collapse;font-size:0.85em;">
<tr style="background:#B5EAD7;"><th colspan="2">資産の部</th><th colspan="2">負債の部</th></tr>
<tr>
  <td>現金・預金</td><td>200,000</td>
  <td>買掛金</td><td>150,000</td>
</tr>
<tr>
  <td>売掛金 300,000<br>貸倒引当金△6,000</td><td>294,000</td>
  <td>借入金</td><td>200,000</td>
</tr>
<tr>
  <td>備品 500,000<br>減価償却累計額△100,000</td><td>400,000</td>
  <td style="background:#C7CEEA;">純資産の部</td><td></td>
</tr>
<tr>
  <td></td><td></td>
  <td>資本金</td><td>544,000</td>
</tr>
<tr style="font-weight:bold;background:#FFF9C4;">
  <td>資産合計</td><td>894,000</td>
  <td>負債・純資産合計</td><td>894,000</td>
</tr>
</table>
</div>`,
example:`<div class="example-box">
<p><strong>B/Sの純資産期末残高の計算：</strong></p>
<p>期首資本金：500,000円</p>
<p>＋ 当期純利益：80,000円</p>
<p>ー 引出金：36,000円</p>
<p>＝ 期末純資産：<strong>544,000円</strong></p>
</div>`,
rationale:`<p>貸借対照表は「企業の健康診断書」です。資産・負債・純資産のバランスを見ることで、企業の財務健全性（自己資本比率等）を判断できます。</p>`,
quiz:[
  {q:"貸借対照表（B/S）が示す情報はどれですか？",opts:["一定時点の資産・負債・純資産の状態","一定期間の収益・費用・利益","現金の収入・支出","商品在庫の詳細"],ans:0,exp:"貸借対照表は決算日（一定時点）の財政状態（資産・負債・純資産）を示します。"},
  {q:"B/Sで売掛金300,000円・貸倒引当金6,000円の場合、B/Sに記載する金額はいくらですか？",opts:["294,000円","300,000円","306,000円","6,000円"],ans:0,exp:"間接控除法：売掛金300,000－貸倒引当金6,000＝294,000円をB/Sに表示します。"},
  {q:"B/Sにおける資産合計と負債・純資産合計の関係として正しいものはどれですか？",opts:["資産合計＝負債合計＋純資産合計","資産合計＞負債合計","資産合計＝純資産合計のみ","必ず一致するとは限らない"],ans:0,exp:"貸借対照表等式：資産合計＝負債合計＋純資産合計。B/Sの借方（左）と貸方（右）は必ず一致します。"}
]},

{id:"ch5-5",ch:5,chName:"第5章：決算・財務諸表",title:"当期純利益の計算",subtitle:"利益の確定と資本への振替",
explain:`<p><strong>当期純利益</strong>は企業の1年間の最終的な儲けです。</p>
<p><strong>計算方法1：損益計算書から</strong><br>
当期純利益 ＝ 収益合計 ー 費用合計</p>
<p><strong>計算方法2：純資産の変動から</strong><br>
当期純利益 ＝ 期末純資産 ー 期首純資産 ＋ 引出金 ー 追加出資</p>
<p><strong>決算振替仕訳（個人企業）：</strong><br>
損益 ×× ／ 資本金 ××（純利益の場合）<br>
資本金 ×× ／ 損益 ××（純損失の場合）</p>`,
diagram:`<div class="diagram-box">
<p style="font-weight:bold;text-align:center;">【純資産の変動と純利益の関係】</p>
<div style="background:#FFF9C4;padding:12px;border-radius:8px;font-size:0.9em;">
期末純資産 900,000<br>
− 期首純資産 700,000<br>
＋ 引出金    50,000<br>
− 追加出資  100,000<br>
＝ <strong>当期純利益 150,000円</strong><br><br>
検証：費用750,000、収益900,000<br>
純利益＝900,000−750,000＝150,000円 ✓
</div>
</div>`,
example:`<div class="example-box">
<p><strong>例：決算において当期純利益300,000円を確定した（個人企業）</strong></p>
<p>収益（売上等）を損益勘定に振り替え、費用（仕入等）も損益勘定に振り替えた結果：</p>
<table class="mini-table"><tr><th>借方</th><th>貸方</th></tr>
<tr><td>損益 300,000</td><td>資本金 300,000</td></tr></table>
<p>→ 利益が資本金（純資産）に加算されます。</p>
</div>`,
rationale:`<p>当期純利益は損益計算書の「最終行」として計算され、貸借対照表の純資産に反映されます。P/LとB/Sが「当期純利益」でつながっていることが財務諸表体系の根幹です。</p>`,
quiz:[
  {q:"当期純利益の計算式として正しいものはどれですか？",opts:["収益合計－費用合計","資産合計－負債合計","売上高－仕入高","収益合計＋費用合計"],ans:0,exp:"当期純利益＝収益合計（売上等）－費用合計（費用・損失等）。収益>費用なら純利益、逆なら純損失。"},
  {q:"個人企業で当期純利益を資本金に振り替える仕訳はどれですか？",opts:["損益／資本金","資本金／損益","売上／資本金","費用／資本金"],ans:0,exp:"当期純利益の振替：損益勘定（借方）を資本金（貸方）に振り替えます。純資産が増加します。"},
  {q:"期首純資産500,000円、期末純資産650,000円、引出金30,000円、追加出資50,000円のとき当期純利益はいくらですか？",opts:["230,000円","150,000円","180,000円","200,000円"],ans:0,exp:"純利益＝期末650,000－期首500,000＋引出30,000－追加出資50,000＝130,000円。正解は130,000円。"}
]}
);
