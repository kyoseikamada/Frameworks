/**
 * config.js — カテゴリ定義 & スライドマニフェスト
 *
 * ■ カテゴリを追加する場合
 *   1. CATEGORIES にエントリを追加する
 *   2. slides/<カテゴリkey>/ フォルダを作成する
 *   3. index.html の #cat-tabs にタブボタンを追加する
 *   → エンジン (engine.js) は変更不要
 *
 * ■ スライドを追加する場合
 *   1. slides/<カテゴリ>/<id>.html を作成する
 *   2. 該当カテゴリの SLIDES エントリに1行追記する
 *   → それ以外のファイルは変更不要
 */

/* ============================================================
   カテゴリ定義
   ============================================================ */
export const CATEGORIES = {
  sys:     { name: 'システム開発',     color: '#c94a2c', order: 1 },
  biz:     { name: 'ビジネス戦略',     color: '#1a4a7a', order: 2 },
  think:   { name: '思考法・問題解決', color: '#2d7a4a', order: 3 },
  pm:      { name: 'プロジェクト管理', color: '#7a4a1a', order: 4 },
  exec:    { name: '経営戦略',         color: '#5a2d7a', order: 5 },
  knowhow: { name: 'ノウハウ',         color: '#4a7a7a', order: 6 },
  // ↑ 新カテゴリはここに追加するだけ
};

/* ============================================================
   スライドマニフェスト
   各エントリの意味:
     id      : 一意のID（ファイル名と一致させること）
     cat     : CATEGORIES のキー、または 'all'（表紙・まとめ等）
     title   : サイドバーに表示するラベル
     tags    : サイドバーに表示するキーワード（最大3件）
     divider : true のときカテゴリ区切りスライド扱い
   ============================================================ */
export const SLIDES = [

  // ---- 表紙 / まとめ ----
  { id: 'cover',   cat: 'all', title: '表紙',   tags: [] },
  { id: 'closer',  cat: 'all', title: 'まとめ', tags: [] },

  // ---- ① システム開発 ----
  { id: 'div-sys',      cat: 'sys', title: '① システム開発',        tags: [], divider: true },
  { id: 'sys-qcd',      cat: 'sys', title: 'QCD ＋ 品質・性能・保守性', tags: ['QCD', '品質', 'コスト'] },
  { id: 'sys-furps',    cat: 'sys', title: '非機能要件 FURPS+',       tags: ['FURPS+', '非機能'] },
  { id: 'sys-solid',    cat: 'sys', title: '設計原則 SOLID / DRY',    tags: ['SOLID', 'DRY', 'KISS'] },
  { id: 'sys-arch',     cat: 'sys', title: 'アーキテクチャパターン',   tags: ['マイクロサービス', 'CQRS'] },
  { id: 'sys-test',     cat: 'sys', title: 'テスト戦略ピラミッド',     tags: ['TDD', 'BDD', 'CI/CD'] },
  { id: 'sys-risk',     cat: 'sys', title: 'リスク管理マトリクス',     tags: ['リスク', '4T'] },
  { id: 'sys-incident', cat: 'sys', title: 'インシデント管理 / SRE',   tags: ['ITIL', 'SRE', 'SLA'] },

  // ---- ② ビジネス戦略 ----
  { id: 'div-biz',  cat: 'biz', title: '② ビジネス戦略',              tags: [], divider: true },
  { id: 'biz-swot', cat: 'biz', title: 'SWOT 分析 ＋ クロス戦略',      tags: ['SWOT'] },
  { id: 'biz-4p',   cat: 'biz', title: '4P / 4C マーケティングミックス', tags: ['4P', '4C'] },
  { id: 'biz-3c',   cat: 'biz', title: '3C / STP / ポーターの5力',      tags: ['3C', 'STP', '5力'] },
  { id: 'biz-pest', cat: 'biz', title: 'PEST 分析',                    tags: ['PEST', 'マクロ環境'] },

  // ---- ③ 思考法 ----
  { id: 'div-think',   cat: 'think', title: '③ 思考法・問題解決',             tags: [], divider: true },
  { id: 'think-mece',  cat: 'think', title: 'MECE ＆ ロジックツリー',          tags: ['MECE', 'ロジックツリー'] },
  { id: 'think-5w2h',  cat: 'think', title: '5W2H',                          tags: ['5W2H', '問題定義'] },
  { id: 'think-pdca',  cat: 'think', title: 'PDCA / OODA / なぜなぜ / DT',   tags: ['PDCA', 'OODA'] },

  // ---- ④ プロジェクト管理 ----
  { id: 'div-pm',    cat: 'pm', title: '④ プロジェクト管理',           tags: [], divider: true },
  { id: 'pm-wbs',    cat: 'pm', title: 'WBS',                         tags: ['WBS', 'スコープ'] },
  { id: 'pm-raci',   cat: 'pm', title: 'RACI',                        tags: ['RACI', '役割'] },
  { id: 'pm-kpi',    cat: 'pm', title: 'KPI / OKR / スケジュール管理', tags: ['KPI', 'OKR'] },
  { id: 'pm-agile',  cat: 'pm', title: 'アジャイル / スクラム / カンバン', tags: ['スクラム', 'カンバン'] },

  // ---- ⑤ 経営戦略 ----
  { id: 'div-exec', cat: 'exec', title: '⑤ 経営戦略',             tags: [], divider: true },
  { id: 'exec-bsc', cat: 'exec', title: 'BSC',                    tags: ['BSC', '戦略マップ'] },
  { id: 'exec-bcg', cat: 'exec', title: 'BCG マトリクス / アンゾフ', tags: ['BCG', 'アンゾフ'] },
  { id: 'exec-bmc', cat: 'exec', title: 'ビジネスモデルキャンバス',  tags: ['BMC'] },
  { id: 'exec-blue',cat: 'exec', title: 'ブルーオーシャン / VRIO',  tags: ['ブルーオーシャン', 'VRIO'] },

  // ---- ⑥ ノウハウ ----
  // ↓ スライドを追加するときはここに1行追記するだけ
  { id: 'div-knowhow',        cat: 'knowhow', title: '⑥ ノウハウ',   tags: [], divider: true },
  { id: 'knowhow-catchup-1',  cat: 'knowhow', title: 'キャッチアップ①', tags: ['スコープ', '期間', '体制'] },

];
