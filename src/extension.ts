import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const { commands, window } = vscode;

  let disposable = commands.registerCommand(
    "extension.expandSnippet",
    async () => {
      if (!window.activeTextEditor) return;
      const input = await window.showInputBox();
      const snippet = new vscode.SnippetString(input);
      window.activeTextEditor.insertSnippet(snippet);
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
