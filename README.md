# 思考・発想フレームワーク集

システム開発・ビジネス戦略・思考法・プロジェクト管理・経営戦略・ノウハウの主要フレームワークを、PC/スマートフォン両対応のスライド形式でまとめたリファレンス集。

**公開URL:** `https://<username>.github.io/<repository>/`

---

## フォルダ構成

```
.
├── index.html                  # エントリポイント（HTMLシェル）
├── css/
│   └── style.css               # 全スタイル（PC・SP共通 + メディアクエリ）
├── js/
│   ├── config.js               # カテゴリ定義 & スライドマニフェスト ★編集ここ
│   └── engine.js               # レンダリング・ナビゲーションエンジン（通常編集不要）
└── slides/                     # スライドHTMLファイル群
    ├── shared/                # カテゴリ横断（表紙・まとめ）
    │   ├── cover.html
    │   └── closer.html
    ├── sys/                    # ① システム開発
    │   ├── div-sys.html        # カテゴリ区切りスライド
    │   ├── sys-qcd.html
    │   ├── sys-furps.html
    │   ├── sys-solid.html
    │   ├── sys-arch.html
    │   ├── sys-test.html
    │   ├── sys-risk.html
    │   └── sys-incident.html
    ├── biz/                    # ② ビジネス戦略
    │   ├── div-biz.html
    │   ├── biz-swot.html
    │   ├── biz-4p.html
    │   ├── biz-3c.html
    │   └── biz-pest.html
    ├── think/                  # ③ 思考法・問題解決
    │   ├── div-think.html
    │   ├── think-mece.html
    │   ├── think-5w2h.html
    │   └── think-pdca.html
    ├── pm/                     # ④ プロジェクト管理
    │   ├── div-pm.html
    │   ├── pm-wbs.html
    │   ├── pm-raci.html
    │   ├── pm-kpi.html
    │   └── pm-agile.html
    ├── exec/                   # ⑤ 経営戦略
    │   ├── div-exec.html
    │   ├── exec-bsc.html
    │   ├── exec-bcg.html
    │   ├── exec-bmc.html
    │   └── exec-blue.html
    └── knowhow/                # ⑥ ノウハウ（随時追加）
        ├── div-knowhow.html
        └── knowhow-catchup-1.html
```

---

## 各ファイルの役割

| ファイル | 役割 | 編集頻度 |
|---|---|---|
| `index.html` | HTMLシェル。カテゴリタブのみ保持。コンテンツは持たない。 | カテゴリ追加時のみ |
| `css/style.css` | 全スタイル。PC・SP両対応をメディアクエリで分岐。 | UIデザイン変更時 |
| `js/config.js` | カテゴリ定義とスライドの一覧（マニフェスト）。IDと順序を管理。 | スライド追加・並び替え時 |
| `js/engine.js` | fetch・DOM構築・ナビゲーション・SP対応の全ロジック。 | 原則編集不要 |
| `slides/*/*.html` | 各スライドのHTML断片。`<div class="s-header">` から始まる中身だけ。 | コンテンツ編集時 |

---

## 設計方針

### オープン・クローズド原則 (OCP)

**「拡張に開いて、修正に閉じる」** を軸に設計している。

- スライドを追加しても `engine.js` は変更不要
- カテゴリを追加しても `engine.js` は変更不要
- 変更が発生するファイルを最小化し、影響範囲を局所化する

### 関心の分離 (SoC)

| 関心 | 担当ファイル |
|---|---|
| コンテンツ（何を見せるか） | `slides/*/*.html` |
| 構成・順序（何がどの順か） | `js/config.js` |
| 振る舞い（どう動くか）| `js/engine.js` |
| 見た目（どう見えるか） | `css/style.css` |
| 骨格（どう置くか） | `index.html` |

### データフロー

```
config.js (SLIDES配列)
    ↓ import
engine.js
    ↓ fetch("slides/{cat}/{id}.html")
    ↓ Promise.all（並列取得）
DOM構築 → ナビゲーション
```

スライドHTMLはページロード時に **全件並列fetch** してキャッシュする。  
2回目以降のスライド切替はキャッシュから即時表示されるため高速。

---

## スライドの追加手順

### 既存カテゴリにスライドを追加する場合

**変更するファイル: 2つ**

**Step 1.** `slides/<カテゴリ>/` にHTMLファイルを作成する

```html
<!-- slides/knowhow/knowhow-catchup-2.html -->
<div class="s-header">
  <div class="s-tag" style="background:#4a7a7a">ノウハウ</div>
  <div class="s-title">スライドタイトル</div>
  <div class="s-pg">knowhow-02</div>
</div>
<div class="s-body">
  <!-- コンテンツ -->
</div>
```

**Step 2.** `js/config.js` の `SLIDES` 配列に1行追記する

```js
{ id: 'knowhow-catchup-2', cat: 'knowhow', title: 'キャッチアップ②', tags: ['タグ1', 'タグ2'] },
```

以上。`engine.js` も `index.html` も変更不要。

---

### 新カテゴリを追加する場合

**変更するファイル: 3つ**

**Step 1.** `slides/<新カテゴリ>/` フォルダを作成し、HTMLファイルを追加する

**Step 2.** `js/config.js` の `CATEGORIES` にエントリを追加する

```js
export const CATEGORIES = {
  // 既存...
  newcat: { name: '新カテゴリ名', color: '#2a6a4a', order: 7 },
};
```

同じく `SLIDES` にスライドエントリを追加する。

**Step 3.** `index.html` のタブに1行追加する

```html
<button class="cat-tab" onclick="filterCat('newcat',this)">⑦ 新カテゴリ</button>
```

---

## スライドHTMLの書き方

スライドHTMLは `.slide-frame` の**中身だけ**を書く。  
`.slide` ラッパーは `engine.js` が自動生成するため不要。

### 標準スライド構造

```html
<div class="s-header">
  <div class="s-tag" style="background:#4a7a7a">カテゴリ名</div>
  <div class="s-title">スライドタイトル</div>
  <div class="s-pg">cat-01</div>
</div>
<div class="s-body">
  <!-- コンテンツ -->
</div>
```

### 利用可能なCSSクラス

| クラス | 用途 |
|---|---|
| `.g2` `.g3` `.g4` | 2〜4カラムグリッド（SP時は1カラムに自動崩れ） |
| `.two-col` | 左右2分割レイアウト |
| `.card` | カード（左端にカラーバー付き） |
| `.card-bar` | カード左端のアクセントバー |
| `.card-name` `.card-desc` `.card-full` | カード内テキスト |
| `.tbl` | テーブル（SP時は横スクロール） |
| `.raci` | RACI専用テーブル（`.rR` `.rA` `.rC` `.rI`） |
| `.cl` | チェックリスト（`<ul class="cl"><li>`) |
| `.info-box` | 薄背景の補足ボックス |
| `.step-flow` `.step-item` `.step-num` `.step-body` | ステップフロー |
| `.label-sm` | 小ラベル（Space Mono） |
| `.qcd-wrap` `.qcd-cell` | QCD専用3分割レイアウト |
| `.m2` `.m2-cell` | 2×2マトリクス |
| `.tree-root` `.tree-row` `.tree-branch` `.tree-node` `.tree-leaf` | ロジックツリー |
| `.div-wrap` `.div-num` `.div-h2` `.div-desc` `.div-chips` | カテゴリ区切りスライド |
| `.cover-wrap` `.cover-h1` `.cover-pills` | 表紙スライド |
| `.closer-wrap` `.closer-h` | まとめスライド |

---

## レスポンシブ対応

| ブレークポイント | レイアウト |
|---|---|
| 1024px 以上 | サイドバー（280px）＋ スライド固定表示（16:10） |
| 768〜1024px | サイドバー縮小（220px）＋ スライド固定表示 |
| 768px 以下 | 縦スクロール・カード形式。サイドバーはドロワー（☰ボタン）。画面下にPREV/NEXTナビ固定。 |

iPhoneのアドレスバー出し入れによるリロード問題を避けるため、`resize` イベントではなく `orientationchange` イベントのみでリロードする。

---

## 使用技術

| 技術 | バージョン | 用途 |
|---|---|---|
| HTML5 | - | マークアップ |
| CSS3 | - | スタイル・レスポンシブ対応（Grid / Flexbox / CSS Custom Properties / `dvh`単位） |
| JavaScript (ES Modules) | ES2020以上 | `import/export` でファイル分割、`fetch` API でスライドHTML取得、`IntersectionObserver` でSPスクロール追跡 |
| Google Fonts | - | Noto Serif JP / Noto Sans JP / Space Mono（`preconnect` + `display=swap` で最適化） |

**サードパーティライブラリ: なし**  
バンドラー（Webpack / Vite 等）も不使用。ブラウザネイティブのES Modulesのみで動作する。

### 動作要件

- **GitHub Pages 必須**（`type="module"` と `fetch` はローカルの `file://` では動作しない）
- 対応ブラウザ: Chrome / Safari / Firefox / Edge の現行版（ES Modules対応ブラウザ）
- iOS Safari 15以上推奨（`dvh` 単位の対応）

---

## GitHub Pages へのデプロイ

```bash
# リポジトリをpushする
git add .
git commit -m "add slide"
git push

# GitHub → Settings → Pages → Branch: main / root → Save
# 数分後に以下のURLで公開される
# https://<username>.github.io/<repository>/
```

リポジトリは **Public** に設定すること（Privateの場合はGitHub Pro以上が必要）。

---

## カテゴリ一覧

| # | key | 名前 | カラー |
|---|---|---|---|
| 1 | `sys` | システム開発 | `#c94a2c` |
| 2 | `biz` | ビジネス戦略 | `#1a4a7a` |
| 3 | `think` | 思考法・問題解決 | `#2d7a4a` |
| 4 | `pm` | プロジェクト管理 | `#7a4a1a` |
| 5 | `exec` | 経営戦略 | `#5a2d7a` |
| 6 | `knowhow` | ノウハウ | `#4a7a7a` |
| - | `all` | 全体（表紙・まとめ用） | - |
