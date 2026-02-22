/**
 * 思考・発想フレームワーク集 — slides.js
 *
 * ============================================================
 * 新しいスライドを追加するには SLIDES 配列にオブジェクトを追記する。
 *
 * フィールド説明:
 *   id      : 固有 ID（文字列、URLアンカーなどには未使用だが管理用に付ける）
 *   cat     : "sys" | "biz" | "think" | "pm" | "exec" | "all"
 *   title   : サイドバー / dots のラベル
 *   tags    : サイドバーに表示するキーワード配列（最大3件表示）
 *   divider : true のとき区切りスライド（サイドバーでセクション見出し扱い）
 *   html    : スライド内の HTML文字列（.slide-frame の中身）
 *             ※ .slide ラッパーは JS 側が生成するので書かなくてよい
 *
 * カテゴリを新設する場合は CAT_COLOR / CAT_NAME にも追記し、
 * index.html の #cat-tabs にタブボタンを追加してください。
 * ============================================================
 */

/* ---- カテゴリ設定 ---- */
const CAT_COLOR = {
  sys:   '#c94a2c',
  biz:   '#1a4a7a',
  think: '#2d7a4a',
  pm:    '#7a4a1a',
  exec:  '#5a2d7a',
  all:   '#555',
};
const CAT_NAME = {
  sys:   'システム開発',
  biz:   'ビジネス戦略',
  think: '思考法・問題解決',
  pm:    'プロジェクト管理',
  exec:  '経営戦略',
  all:   '全体',
};

/* ==============================================================
   SLIDES — ここを編集・追記するだけで保守できます
   ============================================================== */
const SLIDES = [

/* ------------------------------------------------------------ */
/* 表紙                                                          */
/* ------------------------------------------------------------ */
{
  id: 'cover', cat: 'all', title: '表紙', tags: [],
  html: `
    <div class="cover-wrap">
      <div class="cover-eyebrow">THINKING FRAMEWORKS REFERENCE</div>
      <div class="cover-h1">思考・発想<br>フレームワーク集</div>
      <div class="cover-sub">
        システム開発・ビジネス戦略・思考法・<br>
        プロジェクト管理・経営戦略の主要フレームワークを一冊に。<br>
        困ったときに開く、思考の地図。
      </div>
      <div class="cover-pills">
        <div class="cover-pill">① システム開発</div>
        <div class="cover-pill">② ビジネス戦略</div>
        <div class="cover-pill">③ 思考法・問題解決</div>
        <div class="cover-pill">④ プロジェクト管理</div>
        <div class="cover-pill">⑤ 経営戦略</div>
      </div>
      <div class="cover-deco"></div>
    </div>`,
},

/* ==============================================================
   ① システム開発
   ============================================================== */
{
  id: 'div-sys', cat: 'sys', title: '① システム開発', tags: [], divider: true,
  html: `
    <div class="div-wrap">
      <div class="div-num">01</div>
      <div>
        <div class="div-cat-tag" style="background:#c94a2c">システム開発</div>
        <div class="div-h2">システム開発の<br>主要観点</div>
        <div class="div-desc">品質・コスト・納期の基本軸から、設計原則・セキュリティ・テスト戦略・インシデント管理まで。要件定義〜保守フェーズで抜け漏れを防ぐ視点のフルセット。</div>
        <div class="div-chips">
          <span class="div-chip">QCD</span>
          <span class="div-chip">非機能要件 FURPS+</span>
          <span class="div-chip">設計原則 SOLID</span>
          <span class="div-chip">テスト戦略</span>
          <span class="div-chip">セキュリティ</span>
          <span class="div-chip">CI/CD</span>
          <span class="div-chip">インシデント管理</span>
          <span class="div-chip">技術的負債</span>
        </div>
      </div>
    </div>`,
},
{
  id: 'sys-qcd', cat: 'sys', title: 'QCD ＋ 品質・性能・保守性', tags: ['QCD', '品質', 'コスト', '納期', 'セキュリティ'],
  html: `
    <div class="s-header">
      <div class="s-tag" style="background:#c94a2c">システム開発</div>
      <div class="s-title">QCD ＋ 品質・性能・保守性の観点</div>
      <div class="s-pg">sys-01</div>
    </div>
    <div class="s-body">
      <div class="qcd-wrap" style="margin-bottom:12px">
        <div class="qcd-cell" style="background:#fdf0ee">
          <div class="qcd-bg-letter" style="color:#c94a2c">Q</div>
          <div class="qcd-label" style="color:#c94a2c">Q — Quality</div>
          <div class="qcd-jp">品質</div>
          <div class="qcd-list">バグ・欠陥密度<br>テストカバレッジ<br>コードレビュー基準<br>受入基準（DoD）</div>
        </div>
        <div class="qcd-cell" style="background:#fdf6e8">
          <div class="qcd-bg-letter" style="color:#7a4a1a">C</div>
          <div class="qcd-label" style="color:#7a4a1a">C — Cost</div>
          <div class="qcd-jp">コスト</div>
          <div class="qcd-list">工数・予算消化率<br>ライセンス・インフラ費<br>技術的負債コスト<br>運用・保守コスト</div>
        </div>
        <div class="qcd-cell" style="background:#e8eef8">
          <div class="qcd-bg-letter" style="color:#1a4a7a">D</div>
          <div class="qcd-label" style="color:#1a4a7a">D — Delivery</div>
          <div class="qcd-jp">納期</div>
          <div class="qcd-list">マイルストーン遵守<br>スコープクリープ管理<br>バッファ・余裕率<br>依存関係の解消</div>
        </div>
      </div>
      <div class="g3">
        <div class="card">
          <div class="card-bar" style="background:#c94a2c"></div>
          <div class="card-name">セキュリティ</div>
          <div class="card-desc">認証・認可 / 暗号化 / 脆弱性診断 / OWASP Top10 / ログ監査 / ゼロトラスト</div>
        </div>
        <div class="card">
          <div class="card-bar" style="background:#1a4a7a"></div>
          <div class="card-name">性能・可用性</div>
          <div class="card-desc">レスポンスタイム / スループット / SLA / 冗長化 / RTO・RPO / スケーラビリティ</div>
        </div>
        <div class="card">
          <div class="card-bar" style="background:#2d7a4a"></div>
          <div class="card-name">保守性・拡張性</div>
          <div class="card-desc">結合度・凝集度 / コード可読性 / ドキュメント整備 / API 後方互換 / CI/CD</div>
        </div>
      </div>
    </div>`,
},
{
  id: 'sys-furps', cat: 'sys', title: '非機能要件 FURPS+', tags: ['FURPS+', '非機能', '品質属性'],
  html: `
    <div class="s-header">
      <div class="s-tag" style="background:#c94a2c">システム開発</div>
      <div class="s-title">非機能要件 — FURPS+</div>
      <div class="s-pg">sys-02</div>
    </div>
    <div class="s-body">
      <div class="label-sm" style="margin-bottom:10px">非機能要件を漏れなく洗い出すための分類フレームワーク（HP 社が提唱）</div>
      <table class="tbl">
        <tr><th>区分</th><th>内容</th><th>主な指標・チェック項目</th></tr>
        <tr><td>F — Functionality</td><td>機能性・セキュリティ</td><td>機能要件の網羅性、認可・監査ログ</td></tr>
        <tr><td>U — Usability</td><td>使いやすさ</td><td>操作ステップ数、エラー回復、アクセシビリティ（WCAG）</td></tr>
        <tr><td>R — Reliability</td><td>信頼性・可用性</td><td>MTBF / MTTR / SLA (99.9%など) / RTO・RPO</td></tr>
        <tr><td>P — Performance</td><td>性能・効率性</td><td>レスポンス ≤ 2秒 / スループット / CPU・メモリ上限</td></tr>
        <tr><td>S — Supportability</td><td>保守性・移植性</td><td>ログ・監視設計、デプロイ自動化、環境差異の排除</td></tr>
        <tr><td>+ Design</td><td>設計制約</td><td>使用言語・FW・OS・DB 制約</td></tr>
        <tr><td>+ Implementation</td><td>実装制約</td><td>コーディング規約、ライセンス制約</td></tr>
        <tr><td>+ Interface</td><td>外部 I/F 制約</td><td>外部 API・レガシー連携仕様</td></tr>
        <tr><td>+ Physical</td><td>物理制約</td><td>ハードウェア仕様、設置場所・電源要件</td></tr>
      </table>
    </div>`,
},
{
  id: 'sys-solid', cat: 'sys', title: '設計原則 SOLID / DRY / KISS', tags: ['SOLID', 'DRY', 'KISS', '設計原則'],
  html: `
    <div class="s-header">
      <div class="s-tag" style="background:#c94a2c">システム開発</div>
      <div class="s-title">設計原則 — SOLID / DRY / KISS / YAGNI</div>
      <div class="s-pg">sys-03</div>
    </div>
    <div class="s-body">
      <div class="two-col">
        <div>
          <div class="label-sm" style="margin-bottom:8px">SOLID 原則（オブジェクト指向設計）</div>
          <table class="tbl" style="font-size:10px">
            <tr><th>原則</th><th>内容</th></tr>
            <tr><td>S — SRP</td><td>Single Responsibility：クラスの変更理由は1つだけ</td></tr>
            <tr><td>O — OCP</td><td>Open/Closed：拡張に開き、修正に閉じる</td></tr>
            <tr><td>L — LSP</td><td>Liskov置換：派生クラスは基底クラスと置換可能</td></tr>
            <tr><td>I — ISP</td><td>Interface分離：使わないメソッドに依存させない</td></tr>
            <tr><td>D — DIP</td><td>依存性逆転：抽象に依存し具体に依存しない</td></tr>
          </table>
        </div>
        <div>
          <div class="label-sm" style="margin-bottom:8px">その他の重要原則</div>
          <div class="g2" style="gap:8px">
            <div class="card" style="padding:12px">
              <div class="card-bar" style="background:#c94a2c"></div>
              <div class="card-name" style="font-size:10px">DRY</div>
              <div class="card-full">Don't Repeat Yourself</div>
              <div class="card-desc">同じ知識は一箇所に。コピペを排除し変更箇所を局所化する。</div>
            </div>
            <div class="card" style="padding:12px">
              <div class="card-bar" style="background:#1a4a7a"></div>
              <div class="card-name" style="font-size:10px">KISS</div>
              <div class="card-full">Keep It Simple, Stupid</div>
              <div class="card-desc">シンプルに保つ。複雑さはバグと保守コストの温床。</div>
            </div>
            <div class="card" style="padding:12px">
              <div class="card-bar" style="background:#2d7a4a"></div>
              <div class="card-name" style="font-size:10px">YAGNI</div>
              <div class="card-full">You Aren't Gonna Need It</div>
              <div class="card-desc">今必要でない機能を先回りして実装しない。</div>
            </div>
            <div class="card" style="padding:12px">
              <div class="card-bar" style="background:#7a4a1a"></div>
              <div class="card-name" style="font-size:10px">LoD</div>
              <div class="card-full">Law of Demeter</div>
              <div class="card-desc">直接の友人とだけ話す。結合を最小に保つ。</div>
            </div>
          </div>
        </div>
      </div>
    </div>`,
},
{
  id: 'sys-arch', cat: 'sys', title: 'アーキテクチャパターン', tags: ['マイクロサービス', 'クリーンアーキテクチャ', 'CQRS'],
  html: `
    <div class="s-header">
      <div class="s-tag" style="background:#c94a2c">システム開発</div>
      <div class="s-title">アーキテクチャパターン</div>
      <div class="s-pg">sys-04</div>
    </div>
    <div class="s-body">
      <div class="g3" style="margin-bottom:10px">
        <div class="card">
          <div class="card-bar" style="background:#c94a2c"></div>
          <div class="card-name">レイヤードアーキテクチャ</div>
          <div class="card-desc">プレゼン→アプリ→ドメイン→インフラの階層。依存は上から下の一方向。変更箇所が明確。</div>
          <div class="card-tags"><span class="tag">伝統的</span><span class="tag">明快</span></div>
        </div>
        <div class="card">
          <div class="card-bar" style="background:#c94a2c"></div>
          <div class="card-name">クリーンアーキテクチャ</div>
          <div class="card-desc">ドメイン層を中心に依存性逆転。フレームワーク・DB・UIを外側に置き、テスト容易性を高める。</div>
          <div class="card-tags"><span class="tag">DIP</span><span class="tag">テスタブル</span></div>
        </div>
        <div class="card">
          <div class="card-bar" style="background:#c94a2c"></div>
          <div class="card-name">マイクロサービス</div>
          <div class="card-desc">機能をサービス単位に分割し独立デプロイ。スケーラブルだが分散システムの複雑さに注意。</div>
          <div class="card-tags"><span class="tag">スケール</span><span class="tag">独立性</span></div>
        </div>
      </div>
      <div class="g3">
        <div class="card">
          <div class="card-bar" style="background:#1a4a7a"></div>
          <div class="card-name">イベント駆動（EDA）</div>
          <div class="card-desc">コンポーネント間をイベントバスで疎結合。Kafka / SQS 等。非同期処理・スケーラビリティに優れる。</div>
          <div class="card-tags"><span class="tag">非同期</span><span class="tag">疎結合</span></div>
        </div>
        <div class="card">
          <div class="card-bar" style="background:#1a4a7a"></div>
          <div class="card-name">CQRS ＋ Event Sourcing</div>
          <div class="card-desc">Command（書込）とQuery（読込）を分離。Event Sourcing で状態変化を全履歴として保持。</div>
          <div class="card-tags"><span class="tag">監査</span><span class="tag">スケール</span></div>
        </div>
        <div class="card">
          <div class="card-bar" style="background:#1a4a7a"></div>
          <div class="card-name">サーバーレス / BFF</div>
          <div class="card-desc">Lambda 等で運用負荷を削減。BFF（Backend For Frontend）でクライアント最適の API を提供。</div>
          <div class="card-tags"><span class="tag">運用軽減</span><span class="tag">UX最適化</span></div>
        </div>
      </div>
    </div>`,
},
{
  id: 'sys-test', cat: 'sys', title: 'テスト戦略ピラミッド', tags: ['テストピラミッド', 'TDD', 'BDD', 'CI/CD'],
  html: `
    <div class="s-header">
      <div class="s-tag" style="background:#c94a2c">システム開発</div>
      <div class="s-title">テスト戦略ピラミッド</div>
      <div class="s-pg">sys-05</div>
    </div>
    <div class="s-body">
      <div class="two-col">
        <div>
          <div style="display:flex;flex-direction:column;align-items:center;margin-bottom:10px">
            <div style="width:58%;padding:10px;background:#fdf0ee;border:1px solid var(--line);text-align:center;font-size:10px">
              <strong>E2E テスト</strong><br>
              <span style="font-size:9px;color:var(--muted)">少量・低速・高コスト<br>Cypress / Playwright</span>
            </div>
            <div style="width:76%;padding:10px;background:#fdf6e8;border:1px solid var(--line);text-align:center;font-size:10px;margin-top:-1px">
              <strong>統合テスト</strong><br>
              <span style="font-size:9px;color:var(--muted)">中量・API/DB 結合確認</span>
            </div>
            <div style="width:94%;padding:10px;background:#e8f4ec;border:1px solid var(--line);text-align:center;font-size:10px;margin-top:-1px">
              <strong>ユニットテスト</strong><br>
              <span style="font-size:9px;color:var(--muted)">多量・高速・安価 / Jest / pytest / JUnit</span>
            </div>
          </div>
          <div class="info-box" style="font-size:10px">
            <strong>テストトロフィー（Kent C. Dodds）</strong><br>
            静的解析 → ユニット → 統合 → E2E の比率で<strong>統合テストを最重視</strong>するモデル。
          </div>
        </div>
        <div>
          <div class="label-sm" style="margin-bottom:8px">テスト設計・手法</div>
          <table class="tbl" style="font-size:10px;margin-bottom:8px">
            <tr><th>手法</th><th>概要</th></tr>
            <tr><td>TDD</td><td>テストを先に書いてから実装（Red → Green → Refactor）</td></tr>
            <tr><td>BDD</td><td>Given/When/Then で振る舞いを仕様として記述</td></tr>
            <tr><td>モック・スタブ</td><td>外部依存を差し替えて単体テストを独立化</td></tr>
            <tr><td>プロパティテスト</td><td>ランダム値を大量入力し不変条件を検証</td></tr>
            <tr><td>カオスエンジニアリング</td><td>本番で意図的に障害注入し耐障害性を検証</td></tr>
          </table>
          <div class="card" style="padding:10px">
            <div class="card-name" style="font-size:10px">CI/CD パイプライン観点</div>
            <div class="card-desc">Lint → Build → Unit → Integration → Deploy(Staging) → E2E → Deploy(Prod)。フィードバックループを短く保つ。</div>
          </div>
        </div>
      </div>
    </div>`,
},
{
  id: 'sys-risk', cat: 'sys', title: 'リスク管理マトリクス', tags: ['リスク', 'リスク4T', '障害対応'],
  html: `
    <div class="s-header">
      <div class="s-tag" style="background:#c94a2c">システム開発</div>
      <div class="s-title">リスク管理 — 特定・評価・対応</div>
      <div class="s-pg">sys-06</div>
    </div>
    <div class="s-body">
      <div class="two-col">
        <div>
          <div class="label-sm" style="margin-bottom:8px">リスク評価：発生確率 × 影響度</div>
          <table class="tbl" style="font-size:11px;margin-bottom:10px">
            <tr><th>レベル</th><th>対応方針</th></tr>
            <tr><td style="background:#f8d8d0;font-family:'Space Mono',monospace;font-size:10px">Critical</td><td>即時対処・エスカレーション・代替手段発動</td></tr>
            <tr><td style="background:#fdf0ee;font-family:'Space Mono',monospace;font-size:10px">High</td><td>対策計画策定・オーナー指定・週次監視</td></tr>
            <tr><td style="background:#fdf6e8;font-family:'Space Mono',monospace;font-size:10px">Mid</td><td>対策検討・月次レビュー</td></tr>
            <tr><td style="background:#e8f4ec;font-family:'Space Mono',monospace;font-size:10px">Low</td><td>受容・リスク登録簿に記録</td></tr>
          </table>
          <div class="label-sm" style="margin-bottom:6px">リスクの 4T 対応戦略</div>
          <div class="g2" style="gap:6px">
            <div class="card" style="padding:9px"><div class="card-name" style="font-size:10px">Transfer 転嫁</div><div class="card-desc">保険・外注化で第三者へ移転</div></div>
            <div class="card" style="padding:9px"><div class="card-name" style="font-size:10px">Terminate 回避</div><div class="card-desc">計画変更・アプローチ廃止</div></div>
            <div class="card" style="padding:9px"><div class="card-name" style="font-size:10px">Treat 軽減</div><div class="card-desc">対策実施・発生確率を下げる</div></div>
            <div class="card" style="padding:9px"><div class="card-name" style="font-size:10px">Tolerate 受容</div><div class="card-desc">認識した上で許容・監視</div></div>
          </div>
        </div>
        <div>
          <div class="label-sm" style="margin-bottom:8px">システム開発固有リスク一覧</div>
          <ul class="cl">
            <li>要件の曖昧さ・スコープクリープ</li>
            <li>技術的負債・レガシー依存</li>
            <li>キーパーソン依存（バス係数 = 1）</li>
            <li>外部 API・サービスの仕様変更</li>
            <li>セキュリティ脆弱性の混入（Supply Chain）</li>
            <li>テスト不足による品質劣化</li>
            <li>クラウド障害・マルチリージョン未対応</li>
            <li>ベンダーロックイン</li>
            <li>データ移行ミス・データ損失</li>
            <li>ライセンス違反・OSS リスク</li>
          </ul>
        </div>
      </div>
    </div>`,
},
{
  id: 'sys-incident', cat: 'sys', title: 'インシデント管理 / SRE', tags: ['ITIL', 'インシデント', 'SRE', 'SLA'],
  html: `
    <div class="s-header">
      <div class="s-tag" style="background:#c94a2c">システム開発</div>
      <div class="s-title">インシデント管理 ＆ SRE の観点</div>
      <div class="s-pg">sys-07</div>
    </div>
    <div class="s-body">
      <div class="two-col">
        <div>
          <div class="label-sm" style="margin-bottom:8px">インシデント対応フロー（ITIL ベース）</div>
          <div class="step-flow" style="margin-bottom:12px">
            <div class="step-item"><div class="step-num" style="background:#c94a2c">1</div><div class="step-body"><strong>検知</strong> — 監視アラート・ユーザー報告</div></div>
            <div class="step-item"><div class="step-num" style="background:#c94a2c">2</div><div class="step-body"><strong>初動・トリアージ</strong> — 影響範囲・優先度判定</div></div>
            <div class="step-item"><div class="step-num" style="background:#c94a2c">3</div><div class="step-body"><strong>エスカレーション</strong> — インシデントコマンダー指名</div></div>
            <div class="step-item"><div class="step-num" style="background:#c94a2c">4</div><div class="step-body"><strong>緩和・復旧</strong> — ロールバック / フェイルオーバー</div></div>
            <div class="step-item"><div class="step-num" style="background:#2d7a4a">5</div><div class="step-body"><strong>ポストモーテム</strong> — 根本原因・再発防止策（非 blame）</div></div>
          </div>
        </div>
        <div>
          <div class="label-sm" style="margin-bottom:8px">SRE（Site Reliability Engineering）の主要指標</div>
          <table class="tbl" style="font-size:10px;margin-bottom:8px">
            <tr><th>指標</th><th>概要</th></tr>
            <tr><td>SLA</td><td>顧客と合意した可用性・性能の最低保証水準</td></tr>
            <tr><td>SLO</td><td>SLA 達成のための内部目標値（SLA より厳しく設定）</td></tr>
            <tr><td>SLI</td><td>SLO 計測に使うメトリクス（レイテンシ・成功率等）</td></tr>
            <tr><td>Error Budget</td><td>許容エラー率の残高。消化率で開発速度を調整する。</td></tr>
            <tr><td>MTTR</td><td>Mean Time To Recovery：平均復旧時間</td></tr>
            <tr><td>MTBF</td><td>Mean Time Between Failures：平均障害間隔</td></tr>
          </table>
          <div class="info-box" style="font-size:10px">
            <strong>技術的負債の管理：</strong>
            新規開発 vs リファクタリングの比率（例：80:20）をチームで合意し、スプリントに定期的に組み込む。負債の可視化には「アーキテクチャ決定記録（ADR）」が有効。
          </div>
        </div>
      </div>
    </div>`,
},

/* ==============================================================
   ② ビジネス戦略
   ============================================================== */
{
  id: 'div-biz', cat: 'biz', title: '② ビジネス戦略', tags: [], divider: true,
  html: `
    <div class="div-wrap">
      <div class="div-num">02</div>
      <div>
        <div class="div-cat-tag" style="background:#1a4a7a">ビジネス戦略</div>
        <div class="div-h2">ビジネス戦略の<br>主要フレームワーク</div>
        <div class="div-desc">市場・競合・自社を多角的に分析し、勝ち筋を描く構造化ツール。外部環境の把握から市場参入・マーケティング戦略の立案まで体系化する。</div>
        <div class="div-chips">
          <span class="div-chip">SWOT</span>
          <span class="div-chip">4P / 4C</span>
          <span class="div-chip">3C</span>
          <span class="div-chip">STP</span>
          <span class="div-chip">バリューチェーン</span>
          <span class="div-chip">ポーターの5力</span>
          <span class="div-chip">PEST</span>
        </div>
      </div>
    </div>`,
},
{
  id: 'biz-swot', cat: 'biz', title: 'SWOT 分析 ＋ クロス戦略', tags: ['SWOT', '強み', '弱み', '機会', '脅威'],
  html: `
    <div class="s-header">
      <div class="s-tag" style="background:#1a4a7a">ビジネス戦略</div>
      <div class="s-title">SWOT 分析 ＋ クロス戦略</div>
      <div class="s-pg">biz-01</div>
    </div>
    <div class="s-body" style="padding-top:14px">
      <div style="display:flex;gap:16px">
        <div class="m2" style="flex:1.5;height:290px">
          <div class="m2-cell" style="background:#e8f4ec"><div class="m2-label" style="color:#2d7a4a">S — 強み</div><ul><li>独自技術・ブランド</li><li>コスト構造の優位性</li><li>顧客ロイヤルティ</li></ul></div>
          <div class="m2-cell" style="background:#fdf0ee"><div class="m2-label" style="color:#c94a2c">W — 弱み</div><ul><li>リソース・スキル不足</li><li>認知度の低さ</li><li>プロセスの非効率</li></ul></div>
          <div class="m2-cell" style="background:#e8eef8"><div class="m2-label" style="color:#1a4a7a">O — 機会</div><ul><li>市場成長・需要拡大</li><li>規制緩和・技術トレンド</li><li>競合の空白市場</li></ul></div>
          <div class="m2-cell" style="background:#fdf6e8"><div class="m2-label" style="color:#7a4a1a">T — 脅威</div><ul><li>競合激化・新規参入</li><li>規制強化・市場縮小</li><li>代替品・技術破壊</li></ul></div>
        </div>
        <div style="flex:1;display:flex;flex-direction:column;gap:7px">
          <div class="label-sm" style="margin-bottom:2px">SWOT × クロス戦略</div>
          <div class="card" style="padding:10px"><div class="card-bar" style="background:#2d7a4a"></div><div class="card-name" style="color:#2d7a4a;font-size:10px">S×O 積極攻勢</div><div class="card-desc">強みで機会を最大活用する拡大戦略</div></div>
          <div class="card" style="padding:10px"><div class="card-bar" style="background:#c94a2c"></div><div class="card-name" style="color:#c94a2c;font-size:10px">S×T 差別化</div><div class="card-desc">強みで脅威を回避・競争優位を維持</div></div>
          <div class="card" style="padding:10px"><div class="card-bar" style="background:#1a4a7a"></div><div class="card-name" style="color:#1a4a7a;font-size:10px">W×O 弱点克服</div><div class="card-desc">機会を活かして弱みを補強・投資</div></div>
          <div class="card" style="padding:10px"><div class="card-bar" style="background:#7a4a1a"></div><div class="card-name" style="color:#7a4a1a;font-size:10px">W×T 防衛撤退</div><div class="card-desc">弱みと脅威が重なるリスク最小化</div></div>
        </div>
      </div>
    </div>`,
},
{
  id: 'biz-4p', cat: 'biz', title: '4P / 4C マーケティングミックス', tags: ['4P', '4C', 'マーケティング'],
  html: `
    <div class="s-header">
      <div class="s-tag" style="background:#1a4a7a">ビジネス戦略</div>
      <div class="s-title">4P マーケティングミックス ＆ 4C</div>
      <div class="s-pg">biz-02</div>
    </div>
    <div class="s-body" style="padding-top:14px">
      <div style="display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:8px;height:310px">
        <div style="padding:16px;background:#fdf0ee">
          <div style="font-family:'Noto Serif JP',serif;font-size:30px;font-weight:900;opacity:.2;color:#c94a2c;line-height:1">P</div>
          <div style="font-size:12px;font-weight:700">Product（製品）</div>
          <div style="font-size:10px;color:#555;line-height:1.7;margin-top:4px">品質・機能・ブランド・パッケージ・保証・ライフサイクル管理</div>
          <div style="font-size:9px;color:var(--muted);margin-top:6px;font-family:'Space Mono',monospace">4C: Customer Value（顧客価値）</div>
        </div>
        <div style="padding:16px;background:#e8eef8">
          <div style="font-family:'Noto Serif JP',serif;font-size:30px;font-weight:900;opacity:.2;color:#1a4a7a;line-height:1">P</div>
          <div style="font-size:12px;font-weight:700">Price（価格）</div>
          <div style="font-size:10px;color:#555;line-height:1.7;margin-top:4px">価格戦略（浸透/スキミング）・割引・支払方法・競合比較・価格弾力性</div>
          <div style="font-size:9px;color:var(--muted);margin-top:6px;font-family:'Space Mono',monospace">4C: Cost（顧客コスト）</div>
        </div>
        <div style="padding:16px;background:#e8f4ec">
          <div style="font-family:'Noto Serif JP',serif;font-size:30px;font-weight:900;opacity:.2;color:#2d7a4a;line-height:1">P</div>
          <div style="font-size:12px;font-weight:700">Place（流通）</div>
          <div style="font-size:10px;color:#555;line-height:1.7;margin-top:4px">チャネル戦略・物流・在庫・D2C/間接販売・デジタル流通・地域展開</div>
          <div style="font-size:9px;color:var(--muted);margin-top:6px;font-family:'Space Mono',monospace">4C: Convenience（利便性）</div>
        </div>
        <div style="padding:16px;background:#fdf6e8">
          <div style="font-family:'Noto Serif JP',serif;font-size:30px;font-weight:900;opacity:.2;color:#7a4a1a;line-height:1">P</div>
          <div style="font-size:12px;font-weight:700">Promotion（販促）</div>
          <div style="font-size:10px;color:#555;line-height:1.7;margin-top:4px">広告・PR・SNS・セールスプロモーション・コンテンツ・SEO</div>
          <div style="font-size:9px;color:var(--muted);margin-top:6px;font-family:'Space Mono',monospace">4C: Communication（対話）</div>
        </div>
      </div>
    </div>`,
},
{
  id: 'biz-3c-stp', cat: 'biz', title: '3C / STP / ポーターの5力', tags: ['3C', 'STP', 'ポジショニング', '5力'],
  html: `
    <div class="s-header">
      <div class="s-tag" style="background:#1a4a7a">ビジネス戦略</div>
      <div class="s-title">3C / STP / ポーターの5力</div>
      <div class="s-pg">biz-03</div>
    </div>
    <div class="s-body">
      <div class="g3" style="margin-bottom:10px">
        <div class="card">
          <div class="card-bar" style="background:#1a4a7a"></div>
          <div class="card-name">3C 分析</div>
          <div class="card-full">Customer / Competitor / Company</div>
          <div class="card-desc">顧客ニーズ・競合動向・自社能力の3軸で戦略機会を発見。</div>
        </div>
        <div class="card">
          <div class="card-bar" style="background:#1a4a7a"></div>
          <div class="card-name">STP 戦略</div>
          <div class="card-full">Segmentation → Targeting → Positioning</div>
          <div class="card-desc">市場を細分化し狙うセグメントを選択。差別化されたポジションを確立する。</div>
        </div>
        <div class="card">
          <div class="card-bar" style="background:#1a4a7a"></div>
          <div class="card-name">バリューチェーン</div>
          <div class="card-full">Porter's Value Chain</div>
          <div class="card-desc">主活動（購買→製造→出荷→販売→サービス）と支援活動で付加価値の源泉を特定。</div>
        </div>
      </div>
      <div class="card" style="padding:14px">
        <div class="card-bar" style="background:#1a4a7a"></div>
        <div class="card-name">ポーターの5力（Five Forces）</div>
        <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin-top:10px">
          <div style="text-align:center;padding:10px 6px;background:#e8eef8;font-size:10px;line-height:1.5;border:1px solid var(--line)"><strong>①新規参入<br>の脅威</strong><br><span style="color:var(--muted);font-size:9px">参入障壁の高さ</span></div>
          <div style="text-align:center;padding:10px 6px;background:#e8eef8;font-size:10px;line-height:1.5;border:1px solid var(--line)"><strong>②売り手の<br>交渉力</strong><br><span style="color:var(--muted);font-size:9px">サプライヤー集中度</span></div>
          <div style="text-align:center;padding:10px 6px;background:#1a4a7a;color:#fff;font-size:10px;line-height:1.5"><strong>③業界内<br>競合</strong><br><span style="color:#aac;font-size:9px">競争の激しさ</span></div>
          <div style="text-align:center;padding:10px 6px;background:#e8eef8;font-size:10px;line-height:1.5;border:1px solid var(--line)"><strong>④買い手の<br>交渉力</strong><br><span style="color:var(--muted);font-size:9px">顧客集中度</span></div>
          <div style="text-align:center;padding:10px 6px;background:#e8eef8;font-size:10px;line-height:1.5;border:1px solid var(--line)"><strong>⑤代替品の<br>脅威</strong><br><span style="color:var(--muted);font-size:9px">代替コスト</span></div>
        </div>
      </div>
    </div>`,
},
{
  id: 'biz-pest', cat: 'biz', title: 'PEST 分析', tags: ['PEST', 'マクロ環境', '政治', '経済', '技術'],
  html: `
    <div class="s-header">
      <div class="s-tag" style="background:#1a4a7a">ビジネス戦略</div>
      <div class="s-title">PEST 分析 — マクロ環境の把握</div>
      <div class="s-pg">biz-04</div>
    </div>
    <div class="s-body" style="padding-top:14px">
      <div class="g2" style="gap:10px">
        <div class="card" style="padding:16px;background:#fdf0ee">
          <div class="card-bar" style="background:#c94a2c"></div>
          <div style="font-family:'Noto Serif JP',serif;font-size:28px;font-weight:900;opacity:.15;color:#c94a2c;line-height:1">P</div>
          <div class="card-name">Political（政治）</div>
          <div style="font-size:11px;color:#444;margin-top:6px;line-height:1.7">政府の安定性・政策動向 / 規制・法律の変化 / 税制・補助金 / 貿易障壁・関税 / 地政学リスク</div>
        </div>
        <div class="card" style="padding:16px;background:#e8eef8">
          <div class="card-bar" style="background:#1a4a7a"></div>
          <div style="font-family:'Noto Serif JP',serif;font-size:28px;font-weight:900;opacity:.15;color:#1a4a7a;line-height:1">E</div>
          <div class="card-name">Economic（経済）</div>
          <div style="font-size:11px;color:#444;margin-top:6px;line-height:1.7">GDP 成長率・景気動向 / 金利・為替レート / インフレ・物価変動 / 失業率・購買力 / 原材料コスト</div>
        </div>
        <div class="card" style="padding:16px;background:#e8f4ec">
          <div class="card-bar" style="background:#2d7a4a"></div>
          <div style="font-family:'Noto Serif JP',serif;font-size:28px;font-weight:900;opacity:.15;color:#2d7a4a;line-height:1">S</div>
          <div class="card-name">Social（社会）</div>
          <div style="font-size:11px;color:#444;margin-top:6px;line-height:1.7">人口動態・少子高齢化 / ライフスタイル変化 / 文化・価値観 / 教育水準・労働市場 / 健康・環境意識</div>
        </div>
        <div class="card" style="padding:16px;background:#f3eef8">
          <div class="card-bar" style="background:#5a2d7a"></div>
          <div style="font-family:'Noto Serif JP',serif;font-size:28px;font-weight:900;opacity:.15;color:#5a2d7a;line-height:1">T</div>
          <div class="card-name">Technological（技術）</div>
          <div style="font-size:11px;color:#444;margin-top:6px;line-height:1.7">技術革新の速度・AI/DX / R&D 投資水準 / 特許・知財動向 / インフラ整備（5G/クラウド）/ 技術代替リスク</div>
        </div>
      </div>
      <div class="info-box" style="margin-top:10px;font-size:10px">
        <strong>PESTLE：</strong> Legal（法規制）と Environmental（環境・ESG）を加えた拡張版も広く使われる。
      </div>
    </div>`,
},

/* ==============================================================
   ③ 思考法・問題解決
   ============================================================== */
{
  id: 'div-think', cat: 'think', title: '③ 思考法・問題解決', tags: [], divider: true,
  html: `
    <div class="div-wrap">
      <div class="div-num">03</div>
      <div>
        <div class="div-cat-tag" style="background:#2d7a4a">思考法・問題解決</div>
        <div class="div-h2">思考の型と<br>問題解決フレームワーク</div>
        <div class="div-desc">MECEな分解、論理的な仮説構築、根本原因の追求。問題を正しく定義し、解決策を体系的に導くための思考ツール集。</div>
        <div class="div-chips">
          <span class="div-chip">MECE</span>
          <span class="div-chip">ロジックツリー</span>
          <span class="div-chip">5W2H</span>
          <span class="div-chip">なぜなぜ分析</span>
          <span class="div-chip">PDCA / OODA</span>
          <span class="div-chip">デザイン思考</span>
        </div>
      </div>
    </div>`,
},
{
  id: 'think-mece', cat: 'think', title: 'MECE ＆ ロジックツリー', tags: ['MECE', 'ロジックツリー', 'ピラミッド原則'],
  html: `
    <div class="s-header">
      <div class="s-tag" style="background:#2d7a4a">思考法</div>
      <div class="s-title">MECE ＆ ロジックツリー</div>
      <div class="s-pg">think-01</div>
    </div>
    <div class="s-body">
      <div class="two-col">
        <div>
          <div class="card" style="margin-bottom:10px;padding:14px">
            <div class="card-bar" style="background:#2d7a4a"></div>
            <div class="card-name">MECE</div>
            <div class="card-full">Mutually Exclusive, Collectively Exhaustive</div>
            <div class="card-desc" style="margin-top:6px">「漏れなく、ダブりなく」要素を分解する思考原則。論点・課題・市場の整理に必須。</div>
            <div style="margin-top:8px;padding:8px;background:var(--paper);font-size:10px;line-height:1.8">
              <strong>よくある分解軸：</strong><br>
              時間軸（before/after）/ 地理軸 / 顧客属性<br>
              プロセス軸 / 組織軸 / 機能軸 / 因数分解
            </div>
          </div>
          <div class="card" style="padding:12px">
            <div class="card-bar" style="background:#2d7a4a"></div>
            <div class="card-name">ピラミッド原則</div>
            <div class="card-desc">「結論→理由→根拠」の階層構造で論理を組み立て、説得力ある文書・プレゼンを構成。Barbara Minto 提唱。</div>
          </div>
        </div>
        <div>
          <div class="label-sm" style="margin-bottom:10px">ロジックツリー例（売上低下の原因分解）</div>
          <div><div class="tree-root">売上低下</div></div>
          <div class="tree-row">
            <div class="tree-branch">
              <div class="tree-node">顧客数減少</div>
              <div class="tree-conn"></div>
              <div class="tree-leaves">
                <div class="tree-leaf">新規獲得↓</div>
                <div class="tree-leaf">離脱率↑</div>
              </div>
            </div>
            <div class="tree-branch">
              <div class="tree-node">購買頻度↓</div>
              <div class="tree-conn"></div>
              <div class="tree-leaves">
                <div class="tree-leaf">リピート率↓</div>
                <div class="tree-leaf">季節変動</div>
              </div>
            </div>
            <div class="tree-branch">
              <div class="tree-node">単価低下</div>
              <div class="tree-conn"></div>
              <div class="tree-leaves">
                <div class="tree-leaf">値引き増</div>
                <div class="tree-leaf">客単価↓</div>
              </div>
            </div>
          </div>
          <div class="info-box" style="margin-top:12px;font-size:10px">
            売上 = 顧客数 × 購買頻度 × 客単価（KPIツリー化）<br>
            各ノードを KPI に紐付けると施策を絞り込みやすい。
          </div>
        </div>
      </div>
    </div>`,
},
{
  id: 'think-5w2h', cat: 'think', title: '5W2H', tags: ['5W2H', '問題定義', '要件定義'],
  html: `
    <div class="s-header">
      <div class="s-tag" style="background:#2d7a4a">思考法</div>
      <div class="s-title">5W2H — 問題・施策の全体像を把握する</div>
      <div class="s-pg">think-02</div>
    </div>
    <div class="s-body" style="padding-top:14px">
      <table class="tbl">
        <tr><th>要素</th><th>問い</th><th>活用シーン例</th></tr>
        <tr><td>Who（誰が）</td><td>主体・担当者・ターゲット顧客は誰か？</td><td>オーナー特定 / ペルソナ設定 / 依頼者確認</td></tr>
        <tr><td>What（何を）</td><td>何を行うか？ 何が問題か？ 何を提供するか？</td><td>要件定義 / 課題特定 / 成果物定義</td></tr>
        <tr><td>When（いつ）</td><td>いつ実施するか？ 期限・タイミングは？</td><td>スケジューリング / リリース計画</td></tr>
        <tr><td>Where（どこで）</td><td>どこで発生しているか？ どのチャネルか？</td><td>障害箇所特定 / 市場選定 / 拠点</td></tr>
        <tr><td>Why（なぜ）</td><td>目的・理由・根拠は何か？</td><td>根本原因分析 / 戦略目的 / 優先度付け</td></tr>
        <tr><td>How（どうやって）</td><td>どのような方法・プロセスで実施するか？</td><td>実装方針 / 施策立案 / アーキテクチャ選定</td></tr>
        <tr><td>How Much（いくら）</td><td>コスト・予算・規模・数値目標は？</td><td>予算策定 / KPI 設定 / ROI 試算</td></tr>
      </table>
    </div>`,
},
{
  id: 'think-pdca', cat: 'think', title: 'PDCA / OODA / なぜなぜ / デザイン思考', tags: ['PDCA', 'OODA', 'なぜなぜ', 'デザイン思考'],
  html: `
    <div class="s-header">
      <div class="s-tag" style="background:#2d7a4a">思考法</div>
      <div class="s-title">PDCA / OODA / なぜなぜ分析 / デザイン思考</div>
      <div class="s-pg">think-03</div>
    </div>
    <div class="s-body">
      <div class="g4" style="margin-bottom:10px">
        <div class="card" style="padding:12px">
          <div class="card-bar" style="background:#2d7a4a"></div>
          <div class="card-name">PDCA</div>
          <div class="card-desc" style="font-size:10px"><strong>Plan</strong>→目標設定<br><strong>Do</strong>→実行<br><strong>Check</strong>→測定・評価<br><strong>Act</strong>→改善・標準化</div>
          <div class="card-tags"><span class="tag">継続改善</span></div>
        </div>
        <div class="card" style="padding:12px">
          <div class="card-bar" style="background:#2d7a4a"></div>
          <div class="card-name">OODA ループ</div>
          <div class="card-desc" style="font-size:10px"><strong>Observe</strong>→状況観察<br><strong>Orient</strong>→状況判断<br><strong>Decide</strong>→意思決定<br><strong>Act</strong>→実行</div>
          <div class="card-tags"><span class="tag">速い環境</span><span class="tag">軍事発祥</span></div>
        </div>
        <div class="card" style="padding:12px">
          <div class="card-bar" style="background:#c94a2c"></div>
          <div class="card-name">なぜなぜ分析</div>
          <div class="card-desc" style="font-size:10px">「なぜ？」を5回繰り返し<strong>根本原因</strong>を特定。「人の責任」でなく「仕組みの欠如」に着地させる。</div>
          <div class="card-tags"><span class="tag">根本原因</span><span class="tag">障害対応</span></div>
        </div>
        <div class="card" style="padding:12px">
          <div class="card-bar" style="background:#1a4a7a"></div>
          <div class="card-name">デザイン思考</div>
          <div class="card-desc" style="font-size:10px">①共感→②定義→③発想→④試作→⑤テスト。ユーザー起点でイノベーションを生む反復プロセス。</div>
          <div class="card-tags"><span class="tag">UX</span><span class="tag">新規事業</span></div>
        </div>
      </div>
      <div class="two-col">
        <div class="info-box" style="font-size:10px">
          <strong>PDCA vs OODA：</strong><br>
          PDCA は「計画→実行→振り返り」の安定環境向き。<br>
          OODA は「観察→素早い判断・行動」の変化が速い環境向き。スタートアップ・緊急対応に有効。
        </div>
        <div class="info-box" style="font-size:10px">
          <strong>デザイン思考 × システム開発：</strong><br>
          要件定義フェーズに組み込むと「作ったが使われない」を防ぐ。ペルソナ・ユーザーストーリーマッピング・ペーパープロトタイプが有効。
        </div>
      </div>
    </div>`,
},

/* ==============================================================
   ④ プロジェクト管理
   ============================================================== */
{
  id: 'div-pm', cat: 'pm', title: '④ プロジェクト管理', tags: [], divider: true,
  html: `
    <div class="div-wrap">
      <div class="div-num">04</div>
      <div>
        <div class="div-cat-tag" style="background:#7a4a1a">プロジェクト管理</div>
        <div class="div-h2">プロジェクト管理の<br>主要ツールと観点</div>
        <div class="div-desc">スコープ・スケジュール・コスト・品質・リスクを統合的にコントロール。役割定義から進捗管理・目標設定まで体系化する実践ツール集。</div>
        <div class="div-chips">
          <span class="div-chip">WBS</span>
          <span class="div-chip">RACI</span>
          <span class="div-chip">ガントチャート</span>
          <span class="div-chip">クリティカルパス</span>
          <span class="div-chip">KPI / OKR</span>
          <span class="div-chip">アジャイル / スクラム</span>
        </div>
      </div>
    </div>`,
},
{
  id: 'pm-wbs', cat: 'pm', title: 'WBS — 作業分解構造', tags: ['WBS', 'スコープ', '工数見積もり'],
  html: `
    <div class="s-header">
      <div class="s-tag" style="background:#7a4a1a">PM</div>
      <div class="s-title">WBS — Work Breakdown Structure</div>
      <div class="s-pg">pm-01</div>
    </div>
    <div class="s-body">
      <div class="two-col">
        <div>
          <div class="card" style="margin-bottom:10px;padding:14px">
            <div class="card-bar" style="background:#7a4a1a"></div>
            <div class="card-name">WBS とは</div>
            <div class="card-desc" style="margin-top:6px">プロジェクトの成果物・作業を階層的に分解し、管理可能な<strong>ワークパッケージ</strong>に落とし込む。スコープ可視化・工数見積もり・進捗管理の基盤。</div>
          </div>
          <div class="card" style="padding:12px">
            <div class="card-name">WBS 作成のポイント</div>
            <ul class="cl">
              <li>成果物（名詞）で分解する</li>
              <li>最小単位は 1〜2 週間以内の作業</li>
              <li>100%ルール：上位 = 下位の総和</li>
              <li>「誰が・何を・いつまでに」を明確に</li>
            </ul>
          </div>
        </div>
        <div>
          <div class="label-sm" style="margin-bottom:8px">WBS 階層例（Web システム開発）</div>
          <div style="display:flex;flex-direction:column;gap:3px;font-size:11px">
            <div style="padding:8px 12px;background:var(--ink);color:var(--paper);font-family:'Space Mono',monospace;font-size:10px">▶ Web システム開発</div>
            <div style="padding:7px 12px 7px 26px;background:#fff;border:1px solid var(--line)">┣ 要件定義</div>
            <div style="padding:6px 12px 6px 46px;background:var(--paper);border:1px solid var(--line);font-size:10px;color:#555">ヒアリング / 要件書作成 / レビュー・承認</div>
            <div style="padding:7px 12px 7px 26px;background:#fff;border:1px solid var(--line)">┣ 設計</div>
            <div style="padding:6px 12px 6px 46px;background:var(--paper);border:1px solid var(--line);font-size:10px;color:#555">基本設計 / 詳細設計 / DB 設計 / API 設計</div>
            <div style="padding:7px 12px 7px 26px;background:#fff;border:1px solid var(--line)">┣ 開発・実装</div>
            <div style="padding:7px 12px 7px 26px;background:#fff;border:1px solid var(--line)">┣ テスト</div>
            <div style="padding:6px 12px 6px 46px;background:var(--paper);border:1px solid var(--line);font-size:10px;color:#555">単体 / 結合 / システム / UAT</div>
            <div style="padding:7px 12px 7px 26px;background:#fff;border:1px solid var(--line)">┗ リリース・移行</div>
          </div>
        </div>
      </div>
    </div>`,
},
{
  id: 'pm-raci', cat: 'pm', title: 'RACI — 役割と責任', tags: ['RACI', '役割', '責任', 'ステークホルダー'],
  html: `
    <div class="s-header">
      <div class="s-tag" style="background:#7a4a1a">PM</div>
      <div class="s-title">RACI — 役割と責任の明確化</div>
      <div class="s-pg">pm-02</div>
    </div>
    <div class="s-body">
      <div class="two-col">
        <div>
          <div class="g2" style="gap:6px;margin-bottom:10px">
            <div class="card" style="padding:10px;background:#fdf0ee"><div class="card-name" style="color:#c94a2c;font-size:10px">R — Responsible</div><div class="card-desc">実際に作業を<strong>実行</strong>する人。複数可。</div></div>
            <div class="card" style="padding:10px;background:#e8eef8"><div class="card-name" style="color:#1a4a7a;font-size:10px">A — Accountable</div><div class="card-desc">最終的に<strong>承認・説明責任</strong>を持つ人。必ず 1 人。</div></div>
            <div class="card" style="padding:10px;background:#e8f4ec"><div class="card-name" style="color:#2d7a4a;font-size:10px">C — Consulted</div><div class="card-desc">作業前に<strong>相談・意見</strong>を求める人（双方向）</div></div>
            <div class="card" style="padding:10px;background:#fdf6e8"><div class="card-name" style="color:#7a4a1a;font-size:10px">I — Informed</div><div class="card-desc">結果を<strong>情報共有</strong>される人（一方向）</div></div>
          </div>
          <div class="card" style="padding:10px"><div class="card-name">よくある落とし穴</div><ul class="cl" style="font-size:10px"><li>A が複数 → 責任が曖昧になる</li><li>C が多すぎ → 意思決定が遅延する</li><li>全員 R かつ A → 管理者の負荷過多</li></ul></div>
        </div>
        <div>
          <div class="label-sm" style="margin-bottom:8px">RACI マトリクス例</div>
          <table class="raci">
            <tr><th>タスク</th><th>PM</th><th>開発</th><th>QA</th><th>経営</th></tr>
            <tr><td>要件定義</td><td class="rA">A</td><td class="rC">C</td><td class="rI">I</td><td class="rC">C</td></tr>
            <tr><td>設計レビュー</td><td class="rA">A</td><td class="rR">R</td><td class="rC">C</td><td class="rI">I</td></tr>
            <tr><td>実装</td><td class="rI">I</td><td class="rR">R</td><td class="rC">C</td><td class="rI">I</td></tr>
            <tr><td>テスト実施</td><td class="rA">A</td><td class="rC">C</td><td class="rR">R</td><td class="rI">I</td></tr>
            <tr><td>リリース承認</td><td class="rR">R</td><td class="rC">C</td><td class="rC">C</td><td class="rA">A</td></tr>
          </table>
        </div>
      </div>
    </div>`,
},
{
  id: 'pm-kpi-okr', cat: 'pm', title: 'KPI / OKR / スケジュール管理', tags: ['KPI', 'OKR', 'SMART', 'ガントチャート'],
  html: `
    <div class="s-header">
      <div class="s-tag" style="background:#7a4a1a">PM</div>
      <div class="s-title">KPI / OKR ＆ スケジュール管理</div>
      <div class="s-pg">pm-03</div>
    </div>
    <div class="s-body">
      <div class="two-col" style="margin-bottom:10px">
        <div class="card" style="padding:14px">
          <div class="card-bar" style="background:#7a4a1a"></div>
          <div class="card-name">KPI</div>
          <div class="card-full">Key Performance Indicator</div>
          <div class="card-desc" style="margin-top:6px">目標達成度を測る<strong>定量指標</strong>。KGI（最終ゴール）→ KPI → KSF（成功要因）→ 施策の階層で管理する。</div>
          <div style="margin-top:8px;padding:8px;background:var(--paper);font-size:10px"><strong>SMART 原則：</strong> Specific / Measurable / Achievable / Relevant / Time-bound</div>
        </div>
        <div class="card" style="padding:14px">
          <div class="card-bar" style="background:#7a4a1a"></div>
          <div class="card-name">OKR</div>
          <div class="card-full">Objectives and Key Results</div>
          <div class="card-desc" style="margin-top:6px"><strong>O：</strong>定性的・野心的な方向性<br><strong>KR：</strong>目標達成を測る 2〜5 個の定量指標</div>
          <div style="margin-top:8px;padding:8px;background:var(--paper);font-size:10px">KPI との違い：OKR は「ストレッチゴール」。達成率 60〜70% が理想（Google 流）。</div>
        </div>
      </div>
      <div class="g3" style="gap:8px">
        <div class="card" style="padding:11px"><div class="card-name" style="font-size:10px">ガントチャート</div><div class="card-desc">タスクと時間軸を可視化。依存関係・並行作業の把握。Notion / Jira / MS Project。</div></div>
        <div class="card" style="padding:11px"><div class="card-name" style="font-size:10px">クリティカルパス (CPM)</div><div class="card-desc">最長依存タスク経路。ここを短縮するとプロジェクト全体が短縮する。PERT 図と組み合わせる。</div></div>
        <div class="card" style="padding:11px"><div class="card-name" style="font-size:10px">バーンダウンチャート</div><div class="card-desc">残作業量の推移を可視化。アジャイル開発で理想線との乖離を早期検知する。</div></div>
      </div>
    </div>`,
},
{
  id: 'pm-agile', cat: 'pm', title: 'アジャイル / スクラム / カンバン', tags: ['スクラム', 'カンバン', 'スプリント', 'アジャイル'],
  html: `
    <div class="s-header">
      <div class="s-tag" style="background:#7a4a1a">PM</div>
      <div class="s-title">アジャイル開発 / スクラム / カンバン</div>
      <div class="s-pg">pm-04</div>
    </div>
    <div class="s-body">
      <div class="two-col">
        <div>
          <div class="label-sm" style="margin-bottom:8px">スクラムのロール・イベント・アーティファクト</div>
          <table class="tbl" style="font-size:10px;margin-bottom:10px">
            <tr><th>区分</th><th>内容</th></tr>
            <tr><td>PO</td><td>プロダクトオーナー。バックログ管理・優先度決定。</td></tr>
            <tr><td>SM</td><td>スクラムマスター。プロセスのファシリテート・障害除去。</td></tr>
            <tr><td>Dev Team</td><td>自己組織化されたクロスファンクショナルチーム（3〜9人）。</td></tr>
            <tr><td>Sprint</td><td>1〜4週間の反復サイクル。毎回動く成果物を届ける。</td></tr>
            <tr><td>Daily Scrum</td><td>15分の進捗共有。昨日・今日・障害を確認。</td></tr>
            <tr><td>Retro</td><td>ふりかえり。KPT（Keep/Problem/Try）で継続改善。</td></tr>
          </table>
        </div>
        <div>
          <div class="label-sm" style="margin-bottom:8px">ウォーターフォール vs アジャイル</div>
          <table class="tbl" style="font-size:10px;margin-bottom:10px">
            <tr><th></th><th>ウォーターフォール</th><th>アジャイル</th></tr>
            <tr><td>要件</td><td>事前に固定</td><td>継続的に変更可</td></tr>
            <tr><td>納品</td><td>最後に一括</td><td>毎スプリント</td></tr>
            <tr><td>変更</td><td>高コスト</td><td>受け入れる</td></tr>
            <tr><td>向き不向き</td><td>要件明確・規制業界</td><td>不確実性が高い</td></tr>
          </table>
          <div class="card" style="padding:10px">
            <div class="card-name" style="font-size:10px">カンバン（Kanban）</div>
            <div class="card-desc">Todo → In Progress → Done の流れで WIP（仕掛かり）を制限し、フロー効率を最大化する。スプリント境界がなく柔軟。</div>
          </div>
        </div>
      </div>
    </div>`,
},

/* ==============================================================
   ⑤ 経営戦略
   ============================================================== */
{
  id: 'div-exec', cat: 'exec', title: '⑤ 経営戦略', tags: [], divider: true,
  html: `
    <div class="div-wrap">
      <div class="div-num">05</div>
      <div>
        <div class="div-cat-tag" style="background:#5a2d7a">経営戦略</div>
        <div class="div-h2">経営戦略の<br>フレームワーク</div>
        <div class="div-desc">事業ポートフォリオの評価から、競争戦略の策定、組織と戦略の整合まで。経営レベルの意思決定を支える俯瞰的ツール集。</div>
        <div class="div-chips">
          <span class="div-chip">BSC</span>
          <span class="div-chip">BCG マトリクス</span>
          <span class="div-chip">アンゾフマトリクス</span>
          <span class="div-chip">ビジネスモデルキャンバス</span>
          <span class="div-chip">ブルーオーシャン</span>
          <span class="div-chip">VRIO</span>
        </div>
      </div>
    </div>`,
},
{
  id: 'exec-bsc', cat: 'exec', title: 'BSC — バランスト・スコアカード', tags: ['BSC', 'バランスト・スコアカード', '戦略マップ'],
  html: `
    <div class="s-header">
      <div class="s-tag" style="background:#5a2d7a">経営戦略</div>
      <div class="s-title">BSC — バランスト・スコアカード</div>
      <div class="s-pg">exec-01</div>
    </div>
    <div class="s-body" style="padding-top:14px">
      <div class="label-sm" style="margin-bottom:10px">財務だけでなく4つの視点でバランスよく戦略を評価・管理する（Kaplan & Norton, 1992）</div>
      <div class="g2" style="gap:10px">
        <div class="card" style="padding:16px;background:#f3eef8">
          <div class="card-bar" style="background:#5a2d7a"></div>
          <div style="font-size:24px;font-weight:900;opacity:.2;font-family:'Noto Serif JP',serif;color:#5a2d7a;line-height:1">財</div>
          <div class="card-name">財務の視点</div>
          <div style="font-size:11px;color:#444;margin-top:4px;line-height:1.7">株主にどう見られたいか？<br>売上成長率 / 利益率 / ROI / EVA / コスト削減</div>
        </div>
        <div class="card" style="padding:16px;background:#e8eef8">
          <div class="card-bar" style="background:#1a4a7a"></div>
          <div style="font-size:24px;font-weight:900;opacity:.2;font-family:'Noto Serif JP',serif;color:#1a4a7a;line-height:1">顧</div>
          <div class="card-name">顧客の視点</div>
          <div style="font-size:11px;color:#444;margin-top:4px;line-height:1.7">顧客にどう見られたいか？<br>顧客満足度 / 市場シェア / NPS / 顧客維持率</div>
        </div>
        <div class="card" style="padding:16px;background:#fdf0ee">
          <div class="card-bar" style="background:#c94a2c"></div>
          <div style="font-size:24px;font-weight:900;opacity:.2;font-family:'Noto Serif JP',serif;color:#c94a2c;line-height:1">業</div>
          <div class="card-name">業務プロセスの視点</div>
          <div style="font-size:11px;color:#444;margin-top:4px;line-height:1.7">何を優れて行うべきか？<br>プロセス効率 / 品質コスト / サイクルタイム / 不良率</div>
        </div>
        <div class="card" style="padding:16px;background:#e8f4ec">
          <div class="card-bar" style="background:#2d7a4a"></div>
          <div style="font-size:24px;font-weight:900;opacity:.2;font-family:'Noto Serif JP',serif;color:#2d7a4a;line-height:1">学</div>
          <div class="card-name">学習・成長の視点</div>
          <div style="font-size:11px;color:#444;margin-top:4px;line-height:1.7">改善・革新し続けられるか？<br>従業員満足度 / スキル習得率 / 情報システム整備度</div>
        </div>
      </div>
      <div class="info-box" style="margin-top:10px;font-size:10px">
        <strong>戦略マップ：</strong> 4つの視点を「学習・成長 → 業務プロセス → 顧客 → 財務」の因果連鎖で繋ぎ、戦略の論理を可視化する。
      </div>
    </div>`,
},
{
  id: 'exec-bcg', cat: 'exec', title: 'BCG マトリクス / アンゾフ', tags: ['BCGマトリクス', 'アンゾフ', 'ポートフォリオ'],
  html: `
    <div class="s-header">
      <div class="s-tag" style="background:#5a2d7a">経営戦略</div>
      <div class="s-title">BCG マトリクス ＆ アンゾフマトリクス</div>
      <div class="s-pg">exec-02</div>
    </div>
    <div class="s-body">
      <div class="two-col">
        <div>
          <div class="label-sm" style="margin-bottom:8px">BCG 成長・シェア・マトリクス</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:5px;height:230px;margin-bottom:6px">
            <div style="background:#e8f4ec;padding:12px;border:1px solid var(--line)"><div class="label-sm" style="color:#2d7a4a;margin-bottom:4px">★ スター</div><div style="font-size:10px;line-height:1.6;color:#444">高成長・高シェア<br>積極投資で維持<br>→ 将来の金のなる木</div></div>
            <div style="background:#fdf6e8;padding:12px;border:1px solid var(--line)"><div class="label-sm" style="color:#7a4a1a;margin-bottom:4px">？ 問題児</div><div style="font-size:10px;line-height:1.6;color:#444">高成長・低シェア<br>投資か撤退かを判断<br>→ スターか負け犬へ</div></div>
            <div style="background:#e8eef8;padding:12px;border:1px solid var(--line)"><div class="label-sm" style="color:#1a4a7a;margin-bottom:4px">$ 金のなる木</div><div style="font-size:10px;line-height:1.6;color:#444">低成長・高シェア<br>キャッシュを生む主力<br>→ 他事業への投資源</div></div>
            <div style="background:#fdf0ee;padding:12px;border:1px solid var(--line)"><div class="label-sm" style="color:#c94a2c;margin-bottom:4px">✗ 負け犬</div><div style="font-size:10px;line-height:1.6;color:#444">低成長・低シェア<br>撤退・縮小を検討<br>→ 資源を他へ回す</div></div>
          </div>
        </div>
        <div>
          <div class="label-sm" style="margin-bottom:8px">アンゾフマトリクス（成長戦略）</div>
          <div style="display:grid;grid-template-columns:28px 1fr 1fr;grid-template-rows:28px 1fr 1fr;gap:4px;height:240px">
            <div></div>
            <div style="font-family:'Space Mono',monospace;font-size:9px;color:var(--muted);display:flex;align-items:center;justify-content:center">既存市場</div>
            <div style="font-family:'Space Mono',monospace;font-size:9px;color:var(--muted);display:flex;align-items:center;justify-content:center">新規市場</div>
            <div style="font-family:'Space Mono',monospace;font-size:9px;color:var(--muted);display:flex;align-items:center;justify-content:center;writing-mode:vertical-rl">既存製品</div>
            <div style="background:#e8f4ec;padding:10px;border:1px solid var(--line);font-size:10px;line-height:1.6"><strong style="color:#2d7a4a">市場浸透</strong><br>既存顧客へ既存製品を深堀り。最低リスク。</div>
            <div style="background:#e8eef8;padding:10px;border:1px solid var(--line);font-size:10px;line-height:1.6"><strong style="color:#1a4a7a">市場開拓</strong><br>既存製品で新市場へ参入。地理・セグメント。</div>
            <div style="font-family:'Space Mono',monospace;font-size:9px;color:var(--muted);display:flex;align-items:center;justify-content:center;writing-mode:vertical-rl">新規製品</div>
            <div style="background:#fdf6e8;padding:10px;border:1px solid var(--line);font-size:10px;line-height:1.6"><strong style="color:#7a4a1a">製品開発</strong><br>既存市場に新製品投入。R&D が必要。</div>
            <div style="background:#f3eef8;padding:10px;border:1px solid var(--line);font-size:10px;line-height:1.6"><strong style="color:#5a2d7a">多角化</strong><br>新製品×新市場。最高リスク・最高リターン。</div>
          </div>
        </div>
      </div>
    </div>`,
},
{
  id: 'exec-bmc', cat: 'exec', title: 'ビジネスモデルキャンバス', tags: ['BMC', 'バリュープロポジション', 'キャンバス'],
  html: `
    <div class="s-header">
      <div class="s-tag" style="background:#5a2d7a">経営戦略</div>
      <div class="s-title">ビジネスモデルキャンバス (BMC)</div>
      <div class="s-pg">exec-03</div>
    </div>
    <div class="s-body" style="padding-top:12px">
      <div style="display:grid;grid-template-columns:1fr 1fr 1.4fr 1fr 1fr;grid-template-rows:1fr 1fr;gap:5px;height:290px">
        <div style="grid-row:1/3;padding:10px;background:#e8eef8;border:1px solid var(--line)"><div class="label-sm" style="color:#1a4a7a;margin-bottom:4px">KP</div><div style="font-size:11px;font-weight:700;margin-bottom:4px">主要パートナー</div><div style="font-size:10px;color:#555;line-height:1.6">誰が重要なパートナー・サプライヤーか？どんなリソースを得るか？</div></div>
        <div style="padding:10px;background:var(--paper);border:1px solid var(--line)"><div class="label-sm" style="margin-bottom:4px">KA</div><div style="font-size:11px;font-weight:700;margin-bottom:4px">主要活動</div><div style="font-size:10px;color:#555;line-height:1.6">VP 実現に必要な主要活動は？</div></div>
        <div style="grid-row:1/3;padding:10px;background:#5a2d7a;border:1px solid #5a2d7a"><div class="label-sm" style="color:#c9b8e0;margin-bottom:4px">VP</div><div style="font-size:11px;font-weight:700;margin-bottom:6px;color:#fff">バリュー<br>プロポジション</div><div style="font-size:10px;color:#c9b8e0;line-height:1.6">どんな価値を提供するか？顧客のどの問題を解決するか？</div></div>
        <div style="padding:10px;background:var(--paper);border:1px solid var(--line)"><div class="label-sm" style="margin-bottom:4px">CR</div><div style="font-size:11px;font-weight:700;margin-bottom:4px">顧客関係</div><div style="font-size:10px;color:#555;line-height:1.6">顧客とどんな関係を構築・維持するか？</div></div>
        <div style="grid-row:1/3;padding:10px;background:#e8f4ec;border:1px solid var(--line)"><div class="label-sm" style="color:#2d7a4a;margin-bottom:4px">CS</div><div style="font-size:11px;font-weight:700;margin-bottom:4px">顧客セグメント</div><div style="font-size:10px;color:#555;line-height:1.6">誰のために価値を創造するか？最重要顧客は誰か？</div></div>
        <div style="padding:10px;background:var(--paper);border:1px solid var(--line)"><div class="label-sm" style="margin-bottom:4px">KR</div><div style="font-size:11px;font-weight:700;margin-bottom:4px">主要リソース</div><div style="font-size:10px;color:#555;line-height:1.6">VP 実現に必要なリソースは？</div></div>
        <div style="padding:10px;background:var(--paper);border:1px solid var(--line)"><div class="label-sm" style="margin-bottom:4px">CH</div><div style="font-size:11px;font-weight:700;margin-bottom:4px">チャネル</div><div style="font-size:10px;color:#555;line-height:1.6">どのチャネルで VP を届けるか？</div></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-top:5px">
        <div style="padding:8px 12px;background:#fdf0ee;border:1px solid var(--line);font-size:10px"><span class="label-sm" style="color:#c94a2c">C$ コスト構造：</span> 最重要コストは？最も高価な KA・KR は？</div>
        <div style="padding:8px 12px;background:#e8f4ec;border:1px solid var(--line);font-size:10px"><span class="label-sm" style="color:#2d7a4a">R$ 収益の流れ：</span> 顧客が支払う対価は？収益モデル（サブスク / 都度 / 広告等）は？</div>
      </div>
    </div>`,
},
{
  id: 'exec-blue', cat: 'exec', title: 'ブルーオーシャン戦略 / VRIO', tags: ['ブルーオーシャン', 'VRIO', 'コアコンピタンス', '競争優位'],
  html: `
    <div class="s-header">
      <div class="s-tag" style="background:#5a2d7a">経営戦略</div>
      <div class="s-title">ブルーオーシャン戦略 ＆ 競争優位の源泉</div>
      <div class="s-pg">exec-04</div>
    </div>
    <div class="s-body">
      <div class="two-col">
        <div>
          <div class="card" style="margin-bottom:10px;padding:14px">
            <div class="card-bar" style="background:#5a2d7a"></div>
            <div class="card-name">ブルーオーシャン戦略</div>
            <div class="card-full">Kim & Mauborgne, 2005</div>
            <div class="card-desc" style="margin-top:6px">競争の激しいレッドオーシャンを避け、<strong>競争のない新市場を創造</strong>する戦略。「低コスト」と「差別化」を同時追求する。</div>
            <div style="margin-top:8px;padding:8px;background:var(--paper);font-size:10px;line-height:1.7">
              <strong>ERRC フレームワーク：</strong><br>
              Eliminate（取り除く）/ Reduce（減らす）<br>
              Raise（増やす）/ Create（付け加える）
            </div>
          </div>
          <div class="card" style="padding:12px">
            <div class="card-bar" style="background:#5a2d7a"></div>
            <div class="card-name">コアコンピタンス</div>
            <div class="card-full">Prahalad & Hamel, 1990</div>
            <div class="card-desc">競合に真似されにくい<strong>中核能力</strong>。「顧客に価値を提供できる」「多様な市場に応用できる」「競合が模倣困難」の3条件。</div>
          </div>
        </div>
        <div>
          <div class="label-sm" style="margin-bottom:8px">競争優位の源泉（比較）</div>
          <table class="tbl" style="font-size:10px;margin-bottom:10px">
            <tr><th>戦略</th><th>概要</th><th>代表例</th></tr>
            <tr><td>コストリーダー</td><td>業界最安値でシェア獲得</td><td>コストコ / ユニクロ</td></tr>
            <tr><td>差別化</td><td>独自性でプレミアム価格</td><td>Apple / ダイソン</td></tr>
            <tr><td>集中</td><td>特定セグメントに特化</td><td>ニッチトップ企業</td></tr>
            <tr><td>プラットフォーム</td><td>ネットワーク効果で独占</td><td>Amazon / Uber</td></tr>
          </table>
          <div class="card" style="padding:12px">
            <div class="card-name" style="font-size:10px">VRIO 分析（競争優位の持続性）</div>
            <div style="font-size:10px;margin-top:6px;line-height:1.7">
              <strong>V</strong>alue（経済価値がある）<br>
              <strong>R</strong>arity（希少性がある）<br>
              <strong>I</strong>mitability（模倣困難である）<br>
              <strong>O</strong>rganization（組織が活用できる）<br>
              → 4つを満たすと<strong>持続的競争優位</strong>
            </div>
          </div>
        </div>
      </div>
    </div>`,
},

/* ---- まとめ ---- */
{
  id: 'closer', cat: 'all', title: 'まとめ', tags: [],
  html: `
    <div class="closer-wrap">
      <div class="closer-h">「観点」は思考の道具。<br>使うたびに研ぎ澄ます。</div>
      <div class="closer-sub">フレームワークはゴールではなく、思考の出発点。<br>状況に合わせて組み合わせ、独自の観点を育てていく。</div>
      <div class="closer-tags">
        <span class="closer-tag">QCD</span><span class="closer-tag">FURPS+</span><span class="closer-tag">SOLID / DRY / KISS</span>
        <span class="closer-tag">テストピラミッド</span><span class="closer-tag">アーキテクチャパターン</span><span class="closer-tag">インシデント管理</span>
        <span class="closer-tag">SWOT / クロス</span><span class="closer-tag">4P / 4C</span><span class="closer-tag">3C / STP</span>
        <span class="closer-tag">PEST</span><span class="closer-tag">MECE</span><span class="closer-tag">5W2H</span>
        <span class="closer-tag">PDCA / OODA</span><span class="closer-tag">なぜなぜ</span>
        <span class="closer-tag">WBS</span><span class="closer-tag">RACI</span><span class="closer-tag">KPI / OKR</span>
        <span class="closer-tag">スクラム / カンバン</span><span class="closer-tag">BSC</span><span class="closer-tag">BCG マトリクス</span>
        <span class="closer-tag">アンゾフ</span><span class="closer-tag">BMC</span><span class="closer-tag">ブルーオーシャン</span><span class="closer-tag">VRIO</span>
      </div>
      <div class="cover-deco"></div>
    </div>`,
},

]; // ← ここに新しいスライドオブジェクトを追記してください


/* ==============================================================
   ENGINE — 以下は通常編集不要
   ============================================================== */

let current = 0;
let filteredIndices = SLIDES.map((_, i) => i);

/* ---- スライドDOMを生成 ---- */
function buildSlides() {
  const frame = document.getElementById('slide-frame');
  frame.innerHTML = '';
  SLIDES.forEach((s, i) => {
    const div = document.createElement('div');
    div.className = 'slide';
    div.id = 'slide-' + i;
    div.setAttribute('data-cat', s.cat);
    div.innerHTML = s.html;
    frame.appendChild(div);
  });
}

/* ---- サイドバー生成 ---- */
function buildSidebar() {
  const container = document.getElementById('sb-content');
  container.innerHTML = '';

  // "all" カテゴリ（表紙・まとめ）を最上部に
  const topItems = SLIDES.reduce((acc, s, i) => {
    if (s.cat === 'all') acc.push({ s, i });
    return acc;
  }, []);
  if (topItems.length) {
    const sec = document.createElement('div');
    sec.className = 'sb-section';
    topItems.forEach(({ s, i }) => {
      sec.appendChild(makeSbItem(s, i));
    });
    container.appendChild(sec);
  }

  // カテゴリごとのセクション
  const ORDER = ['sys', 'biz', 'think', 'pm', 'exec'];
  ORDER.forEach(cat => {
    const items = SLIDES.reduce((acc, s, i) => {
      if (s.cat === cat) acc.push({ s, i });
      return acc;
    }, []);
    if (!items.length) return;

    const sec = document.createElement('div');
    sec.className = 'sb-section';
    sec.id = 'sb-sec-' + cat;

    const hdr = document.createElement('div');
    hdr.className = 'sb-section-header';
    hdr.innerHTML = `
      <div class="sb-section-bar" style="background:${CAT_COLOR[cat]}"></div>
      <div class="sb-section-name">${CAT_NAME[cat]}</div>
      <div class="sb-section-arrow">▾</div>`;
    hdr.addEventListener('click', () => sec.classList.toggle('collapsed'));
    sec.appendChild(hdr);

    const wrap = document.createElement('div');
    wrap.className = 'sb-items';
    items.forEach(({ s, i }) => {
      if (s.divider) {
        const lbl = document.createElement('div');
        lbl.className = 'sb-divider-label';
        lbl.textContent = s.title;
        lbl.addEventListener('click', () => goTo(i));
        wrap.appendChild(lbl);
      } else {
        wrap.appendChild(makeSbItem(s, i));
      }
    });
    sec.appendChild(wrap);
    container.appendChild(sec);
  });
}

function makeSbItem(s, i) {
  const el = document.createElement('div');
  el.className = 'sb-item';
  el.id = 'sb-item-' + i;
  el.innerHTML = `
    <div class="sb-item-num">${String(i + 1).padStart(2, '0')}</div>
    <div>
      <div class="sb-item-text">${s.title}</div>
      ${s.tags.length ? `<div class="sb-item-tags">${s.tags.slice(0, 3).map(t => `<span class="sb-item-tag">${t}</span>`).join('')}</div>` : ''}
    </div>`;
  el.addEventListener('click', () => goTo(i));
  return el;
}

/* ---- SP判定 ---- */
const isSP = () => window.innerWidth <= 768;

/* ---- プログレスドット生成（PC用） ---- */
function buildDots() {
  const container = document.getElementById('progress-dots');
  if (!container) return;
  container.innerHTML = '';
  filteredIndices.forEach((fi, pos) => {
    const d = document.createElement('div');
    d.className = 'pdot';
    d.title = SLIDES[fi].title;
    d.addEventListener('click', () => goToByPos(pos));
    container.appendChild(d);
  });
}

/* ---- SP用スクロールナビを生成 ---- */
function buildSpNav() {
  // 既存があれば削除
  const old = document.getElementById('sp-nav');
  if (old) old.remove();

  const nav = document.createElement('div');
  nav.id = 'sp-nav';
  nav.innerHTML = `
    <button class="sp-nav-btn" id="sp-prev" aria-label="前へ">← PREV</button>
    <div id="sp-counter"></div>
    <button class="sp-nav-btn" id="sp-next" aria-label="次へ">NEXT →</button>`;

  document.body.appendChild(nav);

  document.getElementById('sp-prev').addEventListener('click', () => spChangeSlide(-1));
  document.getElementById('sp-next').addEventListener('click', () => spChangeSlide(1));
}

/* SP用: フィルタ済みインデックス内の "表示中スライド" の位置 */
function spCurrentPos() {
  // 表示中スライド = sp-hidden でないもののうち、画面に最も近いもの
  // 簡易版: filteredIndices 上の current 位置
  return filteredIndices.indexOf(spCurrentIdx);
}

let spCurrentIdx = 0;  // SP時に「今フォーカス中」のスライドインデックス

function spChangeSlide(dir) {
  const pos = filteredIndices.indexOf(spCurrentIdx);
  const next = pos + dir;
  if (next < 0 || next >= filteredIndices.length) return;
  spCurrentIdx = filteredIndices[next];
  syncSpNav();
  // そのスライドまでスムーズスクロール
  const target = document.getElementById('slide-' + spCurrentIdx);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ---- オーバーレイDOM生成 ---- */
function buildOverlay() {
  if (document.getElementById('sb-overlay')) return;
  const ov = document.createElement('div');
  ov.id = 'sb-overlay';
  document.body.appendChild(ov);
  ov.addEventListener('click', () => closeSidebar());
}

/* ---- UI 同期 ---- */
function syncUI() {
  const pos = filteredIndices.indexOf(current);

  // PC: dots
  const dots = document.querySelectorAll('.pdot');
  dots.forEach((d, i) => d.classList.toggle('active', i === pos));

  // PC: ボタン
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  if (btnPrev) btnPrev.disabled = pos === 0;
  if (btnNext) btnNext.disabled = pos === filteredIndices.length - 1;

  // counter (PC)
  const ctr = document.getElementById('header-counter');
  if (ctr) ctr.textContent = (pos + 1) + ' / ' + filteredIndices.length;

  // sidebar active
  document.querySelectorAll('.sb-item').forEach(el => el.classList.remove('active'));
  const sbi = document.getElementById('sb-item-' + current);
  if (sbi) {
    sbi.classList.add('active');
    sbi.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}

function syncSpNav() {
  const pos = filteredIndices.indexOf(spCurrentIdx);
  const total = filteredIndices.length;
  const prev = document.getElementById('sp-prev');
  const next = document.getElementById('sp-next');
  const ctr  = document.getElementById('sp-counter');
  if (prev) prev.disabled = pos <= 0;
  if (next) next.disabled = pos >= total - 1;
  if (ctr)  ctr.textContent = (pos + 1) + ' / ' + total;

  // sidebar active
  document.querySelectorAll('.sb-item').forEach(el => el.classList.remove('active'));
  const sbi = document.getElementById('sb-item-' + spCurrentIdx);
  if (sbi) sbi.classList.add('active');
}

/* ---- スライド移動（PC） ---- */
function goTo(idx) {
  document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('slide-' + idx);
  if (target) target.classList.add('active');
  current = idx;
  syncUI();
}

function goToByPos(pos) {
  if (pos >= 0 && pos < filteredIndices.length) goTo(filteredIndices[pos]);
}

/* ---- SP: フィルタ適用（sp-hidden クラスで制御） ---- */
function applySpFilter() {
  SLIDES.forEach((s, i) => {
    const el = document.getElementById('slide-' + i);
    if (!el) return;
    const visible = filteredIndices.includes(i);
    el.classList.toggle('sp-hidden', !visible);
  });
  // 先頭スライドにスクロール
  spCurrentIdx = filteredIndices[0] ?? 0;
  const first = document.getElementById('slide-' + spCurrentIdx);
  if (first) first.scrollIntoView({ behavior: 'smooth', block: 'start' });
  syncSpNav();
}

/* ---- サイドバー開閉 ---- */
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('toc-toggle').classList.add('open');
  const ov = document.getElementById('sb-overlay');
  if (ov) ov.classList.add('visible');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('toc-toggle').classList.remove('open');
  const ov = document.getElementById('sb-overlay');
  if (ov) ov.classList.remove('visible');
}

/* グローバル公開 */
window.changeSlide = function (dir) {
  const pos = filteredIndices.indexOf(current);
  goToByPos(pos + dir);
};

window.filterCat = function (cat, btn) {
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  filteredIndices = cat === 'all'
    ? SLIDES.map((_, i) => i)
    : SLIDES.reduce((acc, s, i) => {
        if (s.cat === cat || s.cat === 'all') acc.push(i);
        return acc;
      }, []);

  if (isSP()) {
    applySpFilter();
    closeSidebar();
  } else {
    buildDots();
    goTo(filteredIndices[0] ?? 0);
  }
};

window.toggleSidebar = function () {
  if (isSP()) {
    const sb = document.getElementById('sidebar');
    sb.classList.contains('open') ? closeSidebar() : openSidebar();
  } else {
    document.getElementById('sidebar').classList.toggle('closed');
    document.getElementById('toc-toggle').classList.toggle('open');
  }
};

/* ---- SP: サイドバーから直接ジャンプ ---- */
function spGoTo(idx) {
  spCurrentIdx = idx;
  closeSidebar();
  const target = document.getElementById('slide-' + idx);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  syncSpNav();
}

/* ---- SP: IntersectionObserver でスクロール位置を追跡 ---- */
function setupScrollObserver() {
  const opts = { rootMargin: '-40% 0px -40% 0px', threshold: 0 };
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = parseInt(e.target.id.replace('slide-', ''), 10);
        if (filteredIndices.includes(id)) {
          spCurrentIdx = id;
          syncSpNav();
        }
      }
    });
  }, opts);
  document.querySelectorAll('.slide').forEach(el => obs.observe(el));
}

/* ---- キーボード ---- */
document.addEventListener('keydown', e => {
  if (isSP()) return;
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') window.changeSlide(1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   window.changeSlide(-1);
  if (e.key === 'Escape') window.toggleSidebar();
});

/* ---- 初期化 ---- */
buildSlides();
buildSidebar();
buildOverlay();

if (isSP()) {
  // SP: サイドバー項目クリックでジャンプ
  document.querySelectorAll('.sb-item').forEach(el => {
    const idx = parseInt(el.id.replace('sb-item-', ''), 10);
    el.replaceWith(el.cloneNode(true));  // listener を一旦除去
  });
  // makeSbItem の click を spGoTo で上書き
  document.querySelectorAll('.sb-item').forEach(el => {
    const idx = parseInt(el.id.replace('sb-item-', ''), 10);
    el.addEventListener('click', () => spGoTo(idx));
  });
  document.querySelectorAll('.sb-divider-label').forEach(el => {
    el.addEventListener('click', closeSidebar);
  });

  buildSpNav();
  spCurrentIdx = 0;
  syncSpNav();
  setupScrollObserver();
} else {
  buildDots();
  goTo(0);
}

/* 画面回転時のみリロード（resize は使わない — iPhone のアドレスバー出し入れでリロードしてしまうため） */
window.addEventListener('orientationchange', () => {
  setTimeout(() => location.reload(), 300);
});
