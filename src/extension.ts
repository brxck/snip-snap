import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const { commands, window } = vscode;

  let disposable = commands.registerCommand(
    "extension.insertArbitrarySnippet",
    async () => {
      if (!window.activeTextEditor) return;

      const input = (await window.showInputBox()) || "";
      // restore newlines that were escaped by inputBox
      const unescapedInput = input.replace(/\\n/g, "\n");
      const snippet = new vscode.SnippetString(unescapedInput);

      window.activeTextEditor.insertSnippet(snippet);
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
