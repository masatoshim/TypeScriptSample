# VS Code で TypeScript をデバッグする方法

[参考](https://zenn.dev/byebyeworld/articles/vscode-typescript-debug)

## `.vscode/launch.json` を作成

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch TypeScript",
      "preLaunchTask": "Compile TypeScript",
      "cwd": "${workspaceFolder}",
      "program": "${file}"
    }
  ]
}
```

- `version`  
  → この設定ファイルのバージョン。VS Code のデバッグ設定フォーマットのバージョンを示します。
- `configurations`  
  → 複数のデバッグ構成を配列で定義できます。ここでは 1 つだけ定義されています。
- `type`: **"node"**  
  → デバッグ対象が Node.js であることを指定。TypeScript をコンパイルした後、Node.js で実行します。
- `request`: **"launch"**  
  → プログラムを新しく起動してデバッグするモード。他に "attach" を指定すると、既に動いている Node.js プロセスにアタッチできます。
- `name`: **"Launch TypeScript"**  
  → この構成の表示名。VS Code のデバッグパネルで選択するときに見える名前です。
- `preLaunchTask`: **"Compile TypeScript"**  
  → デバッグ開始前に必ず実行するタスク。ここでは TypeScript のコンパイルタスクを呼び出しています。  
  → `tasks.json` に `"label": "Compile TypeScript"` というタスクが定義されている必要があります。
- `cwd`: **"\${workspaceFolder}"**  
  → デバッグ時のカレントディレクトリをワークスペースのルートに設定。`${workspaceFolder}` は VS Code が提供する変数で、プロジェクトのルートを指します。
- `program`: **"\${file}"**  
  → 実行するプログラムを指定。ここでは現在開いているファイル (`${file}`) を Node.js で実行します。TypeScript の場合、通常は ts-node を使うか、コンパイル後の .js ファイルを指定します。

### この設定の流れ

1. デバッグ開始 → `preLaunchTask` で TypeScript をコンパイル
1. コンパイルが終わると、Node.js が `${file}` を実行
1. VS Code のデバッガが起動して、ブレークポイントやステップ実行が可能になる

## `.vscode/task.json` を作成

```
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Compile TypeScript",
      "type": "typescript",
      "tsconfig": "tsconfig.json",
      "problemMatcher": ["$tsc"]
    }
  ]
}
```

- `version`  
  → tasks.json のフォーマットバージョン。
- `tasks`  
  → 実行可能なタスクの一覧。ここでは 1 つだけ定義されています。
- `label`: **"Compile TypeScript"**  
  → タスクの名前。launch.json の `preLaunchTask` でこのラベルを指定すると、このタスクが呼び出されます。
- `type`: **"typescript"**  
  → タスクの種類。VS Code が持つ TypeScript ビルド機能を利用します。  
  → 内部的には `tsc` (TypeScript Compiler) を呼び出します。
- `tsconfig`: **"tsconfig.json"**  
  → 使用する TypeScript 設定ファイルを指定。ここではプロジェクトルートの `tsconfig.json` を参照しています。
- `problemMatcher`: **["$tsc"]**  
  → コンパイル時のエラーや警告を VS Code の「問題」パネルに表示するための設定。  
   `$tsc` は TypeScript コンパイラの標準的な出力フォーマットに対応しています。

### この設定の流れ

1. ユーザーがデバッグを開始すると、`launch.json` の `preLaunchTask` によりこのタスクが呼ばれる
1. `tsc` が `tsconfig.json` を使って TypeScript をコンパイル
1. エラーがあれば VS Code の「問題」パネルに表示される
1. コンパイルが成功すれば、Node.js がコンパイル済みのファイルを実行してデバッグ開始

### ポイント

- `launch.json` と組み合わせることで「デバッグ開始前に必ず TypeScript をコンパイルする」仕組みになります。
- `tsconfig.json` の設定次第で、出力先 (`outDir`) や対象ファイルが決まります。
- よくある構成は：
  - `tasks.json` → コンパイルタスク定義
  - `launch.json` → デバッグ設定（コンパイル後の JS を実行）

## `tsconfig.json`を作成

```
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "sourceMap": true,
    "outDir": "./build/js/",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

- `target`: **"es2020"**  
  → 出力される JavaScript のバージョンを指定。ここでは ES2020 準拠の構文に変換されます。  
  例: `async/await` や `BigInt` など ES2020 の機能がそのまま使える。
- `module`: **"commonjs"**  
  → モジュールシステムを指定。Node.js 環境で一般的な CommonJS (`require`, `module.exports`) 形式に変換されます。
- `sourceMap`: **true**  
  → `.map` ファイルを生成。デバッグ時に TypeScript の元コードとコンパイル後の JS を対応付けるために使います。  
  VS Code のブレークポイントが .ts ファイルで効くのはこの設定のおかげ。
- `outDir`: **"./build/js/"**  
  → コンパイル後の JavaScript ファイルを出力するディレクトリ。ここでは `build/js/` フォルダにまとめて出力されます。
- `esModuleInterop`: **true**  
  → CommonJS モジュールを ES Modules 風に `import` できるようにする設定。
- `forceConsistentCasingInFileNames`: **true**  
  → ファイル名の大文字小文字の不一致を禁止。Windows と Linux での差異によるバグを防ぎます。
- `strict`: **true**  
  → 厳格モードを有効化。型チェックがより厳しくなり、バグを早期に発見できます。  
  （`noImplicitAny`, `strictNullChecks` などがまとめて有効になる）
- `skipLibCheck`: **true**  
  → 型定義ファイル (`.d.ts`) のチェックをスキップ。コンパイル速度が向上しますが、型定義の不整合は見逃される可能性があります。

## 動作確認

1. テスト用ファイル作成(`debug.ts`)
1. ブレークポイントを設置する  
   行の左側をクリックするとブレークポイントを設置できる
1. デバッグの実行
   1. デバッグ対象のファイルを開く
   1. VSCode の左側の三角と虫のアイコンをクリック
   1. 実行とデバッグより「Launch TypeScript」を選択して開始する  
      ＊実装に誤りがあればコンパイルエラーが発生し、実行不可
   1. ブレークポイントで止まる
