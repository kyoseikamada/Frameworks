/**
 * config.js — カテゴリ定義 & スライドマニフェスト
 *
 * ■ スライドを追加する場合
 *   1. slides/<カテゴリ>/<id>.html を作成する
 *   2. 該当カテゴリの SLIDES エントリに1行追記する
 *
 * ■ カテゴリを新設する場合
 *   1. CATEGORIES にエントリを追加する
 *   2. slides/<新カテゴリ>/ フォルダを作成する
 *   3. index.html の #cat-tabs にタブボタンを追加する
 */

export const CATEGORIES = {
  sys:          { name: 'システム開発',        color: '#c94a2c', order: 1 },
  biz:          { name: 'ビジネス戦略',        color: '#1a4a7a', order: 2 },
  think:        { name: '思考法・問題解決',    color: '#2d7a4a', order: 3 },
  pm:           { name: 'プロジェクト管理',    color: '#7a4a1a', order: 4 },
  exec:         { name: '経営戦略',            color: '#5a2d7a', order: 5 },
  knowhow:      { name: 'ノウハウ',            color: '#4a7a7a', order: 6 },
  gof:          { name: 'GoFデザインパターン', color: '#7a3a6a', order: 7 },
  linux_basics: { name: 'Linux基礎',           color: '#3a5a7a', order: 8 },
  linux_cmd:    { name: 'Linuxコマンド',       color: '#2a4a6a', order: 9 },
};

export const SLIDES = [

  // ---- 表紙 / まとめ ----
  { id: 'cover',  cat: 'all', title: '表紙',   tags: [] },
  { id: 'closer', cat: 'all', title: 'まとめ', tags: [] },

  // ---- ① システム開発 ----
  { id: 'div-sys',      cat: 'sys', title: '① システム開発',          tags: [], divider: true },
  { id: 'sys-qcd',      cat: 'sys', title: 'QCD ＋ 品質・性能・保守性', tags: ['QCD', '品質', 'コスト'] },
  { id: 'sys-furps',    cat: 'sys', title: '非機能要件 FURPS+',         tags: ['FURPS+', '非機能'] },
  { id: 'sys-solid',    cat: 'sys', title: '設計原則 SOLID / DRY',      tags: ['SOLID', 'DRY', 'KISS'] },
  { id: 'sys-arch',     cat: 'sys', title: 'アーキテクチャパターン',     tags: ['マイクロサービス', 'CQRS'] },
  { id: 'sys-test',     cat: 'sys', title: 'テスト戦略ピラミッド',       tags: ['TDD', 'BDD', 'CI/CD'] },
  { id: 'sys-risk',     cat: 'sys', title: 'リスク管理マトリクス',       tags: ['リスク', '4T'] },
  { id: 'sys-incident', cat: 'sys', title: 'インシデント管理 / SRE',     tags: ['ITIL', 'SRE', 'SLA'] },

  // ---- ② ビジネス戦略 ----
  { id: 'div-biz',  cat: 'biz', title: '② ビジネス戦略',               tags: [], divider: true },
  { id: 'biz-swot', cat: 'biz', title: 'SWOT 分析 ＋ クロス戦略',       tags: ['SWOT'] },
  { id: 'biz-4p',   cat: 'biz', title: '4P / 4C マーケティングミックス', tags: ['4P', '4C'] },
  { id: 'biz-3c',   cat: 'biz', title: '3C / STP / ポーターの5力',      tags: ['3C', 'STP', '5力'] },
  { id: 'biz-pest', cat: 'biz', title: 'PEST 分析',                     tags: ['PEST', 'マクロ環境'] },

  // ---- ③ 思考法 ----
  { id: 'div-think',  cat: 'think', title: '③ 思考法・問題解決',           tags: [], divider: true },
  { id: 'think-mece', cat: 'think', title: 'MECE ＆ ロジックツリー',        tags: ['MECE', 'ロジックツリー'] },
  { id: 'think-5w2h', cat: 'think', title: '5W2H',                         tags: ['5W2H', '問題定義'] },
  { id: 'think-pdca', cat: 'think', title: 'PDCA / OODA / なぜなぜ / DT', tags: ['PDCA', 'OODA'] },

  // ---- ④ プロジェクト管理 ----
  { id: 'div-pm',   cat: 'pm', title: '④ プロジェクト管理',              tags: [], divider: true },
  { id: 'pm-wbs',   cat: 'pm', title: 'WBS',                            tags: ['WBS', 'スコープ'] },
  { id: 'pm-raci',  cat: 'pm', title: 'RACI',                           tags: ['RACI', '役割'] },
  { id: 'pm-kpi',   cat: 'pm', title: 'KPI / OKR / スケジュール管理',   tags: ['KPI', 'OKR'] },
  { id: 'pm-agile', cat: 'pm', title: 'アジャイル / スクラム / カンバン', tags: ['スクラム', 'カンバン'] },

  // ---- ⑤ 経営戦略 ----
  { id: 'div-exec',  cat: 'exec', title: '⑤ 経営戦略',              tags: [], divider: true },
  { id: 'exec-bsc',  cat: 'exec', title: 'BSC',                     tags: ['BSC', '戦略マップ'] },
  { id: 'exec-bcg',  cat: 'exec', title: 'BCG マトリクス / アンゾフ', tags: ['BCG', 'アンゾフ'] },
  { id: 'exec-bmc',  cat: 'exec', title: 'ビジネスモデルキャンバス',  tags: ['BMC'] },
  { id: 'exec-blue', cat: 'exec', title: 'ブルーオーシャン / VRIO',   tags: ['ブルーオーシャン', 'VRIO'] },

  // ---- ⑥ ノウハウ ----
  { id: 'div-knowhow',       cat: 'knowhow', title: '⑥ ノウハウ',       tags: [], divider: true },
  { id: 'knowhow-catchup-1', cat: 'knowhow', title: 'キャッチアップ①',  tags: ['スコープ', '期間', '体制'] },

  // ---- ⑦ GoF デザインパターン ----
  { id: 'div-gof',            cat: 'gof', title: '⑦ GoFデザインパターン', tags: [], divider: true },
  { id: 'gof-overview',       cat: 'gof', title: '23種 一覧',             tags: ['Creational', 'Structural', 'Behavioral'] },
  // Creational
  { id: 'gof-singleton',      cat: 'gof', title: 'Singleton',             tags: ['生成', 'インスタンス管理'] },
  { id: 'gof-factory-method', cat: 'gof', title: 'Factory Method',        tags: ['生成', '継承', 'サブクラス'] },
  { id: 'gof-abstract-factory',cat:'gof', title: 'Abstract Factory',      tags: ['生成', 'ファミリー', '委譲'] },
  { id: 'gof-builder',        cat: 'gof', title: 'Builder',               tags: ['生成', '段階的構築', 'Fluent'] },
  { id: 'gof-prototype',      cat: 'gof', title: 'Prototype',             tags: ['生成', 'クローン', 'コピー'] },
  // Structural
  { id: 'gof-adapter',        cat: 'gof', title: 'Adapter',               tags: ['構造', 'Wrapper', '変換'] },
  { id: 'gof-bridge',         cat: 'gof', title: 'Bridge',                tags: ['構造', '抽象', '実装分離'] },
  { id: 'gof-composite',      cat: 'gof', title: 'Composite',             tags: ['構造', '木構造', '再帰'] },
  { id: 'gof-decorator',      cat: 'gof', title: 'Decorator',             tags: ['構造', '動的追加', 'Wrapper'] },
  { id: 'gof-facade',         cat: 'gof', title: 'Facade',                tags: ['構造', '窓口', '隠蔽'] },
  { id: 'gof-flyweight',      cat: 'gof', title: 'Flyweight',             tags: ['構造', '共有', '軽量化'] },
  { id: 'gof-proxy',          cat: 'gof', title: 'Proxy',                 tags: ['構造', '代理', 'キャッシュ'] },
  // Behavioral
  { id: 'gof-chain',          cat: 'gof', title: 'Chain of Responsibility', tags: ['振る舞い', 'チェーン', 'ミドルウェア'] },
  { id: 'gof-command',        cat: 'gof', title: 'Command',               tags: ['振る舞い', 'Undo', 'キュー'] },
  { id: 'gof-iterator',       cat: 'gof', title: 'Iterator',              tags: ['振る舞い', '順次アクセス'] },
  { id: 'gof-mediator',       cat: 'gof', title: 'Mediator',              tags: ['振る舞い', '疎結合', '集中管理'] },
  { id: 'gof-memento',        cat: 'gof', title: 'Memento',               tags: ['振る舞い', 'Undo', 'スナップショット'] },
  { id: 'gof-observer',       cat: 'gof', title: 'Observer',              tags: ['振る舞い', 'イベント', 'PubSub'] },
  { id: 'gof-state',          cat: 'gof', title: 'State',                 tags: ['振る舞い', '状態機械', 'if排除'] },
  { id: 'gof-strategy',       cat: 'gof', title: 'Strategy',              tags: ['振る舞い', 'アルゴリズム交換', 'OCP'] },
  { id: 'gof-template-method',cat: 'gof', title: 'Template Method',       tags: ['振る舞い', '骨格', 'hook'] },
  { id: 'gof-visitor',        cat: 'gof', title: 'Visitor',               tags: ['振る舞い', '処理外部化', 'Double Dispatch'] },
  { id: 'gof-interpreter',    cat: 'gof', title: 'Interpreter',           tags: ['振る舞い', 'DSL', 'AST'] },

  // ---- ⑧ Linux 基礎 ----
  { id: 'div-linux-basics',      cat: 'linux_basics', title: '⑧ Linux基礎',            tags: [], divider: true },
  { id: 'linux-filesystem',      cat: 'linux_basics', title: 'ファイルシステム構造',    tags: ['FHS', '/etc', '/var'] },
  { id: 'linux-permission',      cat: 'linux_basics', title: 'パーミッションと所有権',  tags: ['chmod', 'chown', 'SUID'] },
  { id: 'linux-process',         cat: 'linux_basics', title: 'プロセスとシグナル',      tags: ['PID', 'kill', 'systemd'] },
  { id: 'linux-user',            cat: 'linux_basics', title: 'ユーザー・グループ管理',  tags: ['useradd', 'sudo', 'passwd'] },
  { id: 'linux-network-basics',  cat: 'linux_basics', title: 'ネットワーク基礎',        tags: ['ip', 'DNS', 'ポート'] },
  { id: 'linux-io-redirect',     cat: 'linux_basics', title: '入出力・リダイレクト・パイプ', tags: ['stdout', 'pipe', 'redirect'] },

  // ---- ⑨ Linux コマンド ----
  { id: 'div-linux-cmd',         cat: 'linux_cmd', title: '⑨ Linuxコマンド',            tags: [], divider: true },
  { id: 'linux-cmd-file',        cat: 'linux_cmd', title: 'ファイル操作',                tags: ['ls', 'cp', 'find', 'du'] },
  { id: 'linux-cmd-text',        cat: 'linux_cmd', title: 'テキスト処理',                tags: ['grep', 'sed', 'awk', 'tail'] },
  { id: 'linux-cmd-search',      cat: 'linux_cmd', title: '検索（find / grep / locate）', tags: ['find', 'grep', 'locate'] },
  { id: 'linux-cmd-process',     cat: 'linux_cmd', title: 'プロセス・システム監視',      tags: ['ps', 'top', 'systemctl'] },
  { id: 'linux-cmd-network',     cat: 'linux_cmd', title: 'ネットワーク・SSH',           tags: ['ssh', 'curl', 'rsync', 'ss'] },
  { id: 'linux-cmd-archive',     cat: 'linux_cmd', title: 'アーカイブ・パッケージ管理',  tags: ['tar', 'apt', 'dnf'] },

];
