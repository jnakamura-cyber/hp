# J-Craft 公式サイト デザインアイデア

## 背景・コンテキスト
建設職人を支援する非営利一般社団法人。既存サイトはネイビー＋レッドのカラーで、シリアスで信頼感のある雰囲気。ブラッシュアップとして、より洗練されたビジュアルと高いUX品質を目指す。

---

<response>
<probability>0.07</probability>
<text>

## アイデア A：「構造的モダニズム」

**Design Movement:** Swiss International Style + Japanese Minimalism

**Core Principles:**
1. 厳格なグリッドシステムと非対称レイアウトの組み合わせ
2. タイポグラフィを主役とした情報設計
3. 余白を積極的に使った「呼吸するデザイン」
4. 建設・構造物を連想させる幾何学的モチーフ

**Color Philosophy:**
- 深みのあるネイビー（#0D1B2A）を基調に、コンクリートグレー（#8B9EB7）でテクスチャを表現
- アクセントは燃えるような朱色（#C8442A）を抑制的に使用
- 背景はオフホワイト（#F5F4F0）で温かみを加える

**Layout Paradigm:**
- ヒーローは左寄せの大きなタイポグラフィ、右側に斜めのグラフィック要素
- セクション間は細い水平線で区切り、建築図面のような精密さを演出
- カードは境界線のみで構成し、影を使わない

**Signature Elements:**
1. 建設現場の鉄骨を模した細い縦線モチーフ
2. 大きな数字（01, 02, 03）を背景に薄く配置するレイヤー効果
3. テキストの一部を朱色でアンダーライン

**Interaction Philosophy:**
- ホバーで境界線の色が変化し、コンテンツが微妙にシフト
- スクロールに連動したパララックスは最小限

**Animation:**
- フェードイン＋スライドアップ（translateY: 20px → 0）、200ms ease-out
- 数字カウントアップアニメーション
- ナビゲーションのアンダーラインが左から右へ展開

**Typography System:**
- 見出し：Noto Serif JP（weight 700）
- 本文：Noto Sans JP（weight 400/500）
- 英語キャプション：letter-spacing 0.15em

</text>
</response>

<response>
<probability>0.06</probability>
<text>

## アイデア B：「産業的エレガンス」（採用）

**Design Movement:** Industrial Brutalism meets Japanese Craftsmanship

**Core Principles:**
1. 力強さと精緻さの共存 — 太いタイポグラフィと繊細な細部
2. 建設産業の「誠実さ」を視覚化する重厚感
3. 縦方向の流れを強調した没入感のあるスクロール体験
4. データと数字を美しく見せるインフォグラフィック的アプローチ

**Color Philosophy:**
- 深夜の工事現場を想起させるダークネイビー（#0E1A30）をベースに
- 鉄骨の錆びた朱色（#C8442A）でエネルギーを注入
- 砂岩のようなクリーム（#F7F4EE）でコントラストを生む
- ゴールドのアクセント（#B8965A）で格調を加える

**Layout Paradigm:**
- フルブリードのヒーローセクションに大きな見出しと斜めのグラデーションオーバーレイ
- 3カラムグリッドを基本に、時折フルワイドのセクションで変化をつける
- 左端に細い縦線のタイムライン要素を配置

**Signature Elements:**
1. セクション番号を大きなゴーストテキスト（opacity: 0.05）で背景に配置
2. 認定バッジをSVGで精緻に描画し、ゴールドのリング装飾
3. ニュースリストの日付部分を縦書き風に配置

**Interaction Philosophy:**
- スクロールで要素が左右から滑り込む（Intersection Observer）
- CTAボタンは押下時にスケールダウン（0.97）で物理的な感触
- カードホバーで微妙な上昇エフェクト（translateY: -4px）

**Animation:**
- 初回ロード時にヒーローテキストが行ごとに遅延フェードイン
- 統計数値のカウントアップ（Intersection Observer起動）
- ナビゲーションのスクロール時に背景がブラー付きで変化

**Typography System:**
- 大見出し：Noto Serif JP 700（56px）、letter-spacing 0.02em
- セクション見出し：Noto Serif JP 600（32px）
- 本文：Noto Sans JP 400（16px）、line-height 1.9
- キャプション・ラベル：Noto Sans JP 600（11-12px）、letter-spacing 0.15em

</text>
</response>

<response>
<probability>0.05</probability>
<text>

## アイデア C：「現代的公共性」

**Design Movement:** New Public Modernism + Digital Governance

**Core Principles:**
1. 行政・公共機関の信頼感をモダンに再解釈
2. アクセシビリティを最優先とした明快な情報設計
3. データドリブンな視覚化でエビデンスを強調
4. 中立性と専門性を両立するクリーンな美学

**Color Philosophy:**
- 純白（#FFFFFF）を基調に、ミッドナイトブルー（#1B2B4B）で権威を表現
- 朱色（#C8442A）は警告・強調のみに使用し、メインカラーはブルー系
- ライトグレー（#F0F2F5）でセクションの区切りを表現

**Layout Paradigm:**
- 左サイドバーに固定ナビゲーション、右側にコンテンツ
- テーブルとリストを多用した情報密度の高いレイアウト
- ブレッドクラムとページ内ナビゲーションで迷子防止

**Signature Elements:**
1. 政府機関サイト風の「お知らせ」バナー
2. 認定企業一覧をデータテーブルで表示
3. 政策提言ページにタイムライン形式の進捗表示

**Interaction Philosophy:**
- インタラクションは最小限、コンテンツ優先
- フォームは段階的に表示するウィザード形式
- 印刷用スタイルシートも用意

**Animation:**
- アニメーションはほぼなし、必要最小限のトランジションのみ
- ページ遷移はフェードのみ

**Typography System:**
- 全体：Noto Sans JP（読みやすさ優先）
- 見出しのみNoto Serif JP
- 文字サイズは大きめ（17-18px）でアクセシビリティ配慮

</text>
</response>

---

## 採用デザイン：アイデア B「産業的エレガンス」

建設産業の力強さと、非営利法人としての誠実さ・格調を両立するデザイン。
既存サイトのカラーパレット（ネイビー＋朱色）を継承しつつ、
スクロールアニメーション・精緻なSVGバッジ・インパクトのある統計表示で
大幅にビジュアルクオリティを向上させる。
