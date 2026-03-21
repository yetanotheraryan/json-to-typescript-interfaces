import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand(
		'json-to-typescript-interfaces.generateTypes',
		async () => {

			const editor = vscode.window.activeTextEditor;

			if (!editor) {
				vscode.window.showErrorMessage("No active editor found");
				return;
			}

			const selection = editor.selection;
			if (selection.isEmpty) {
				vscode.window.showErrorMessage("Please select some JSON");
				return;
			}
			const text = editor.document.getText(selection);

			if (!text) {
				vscode.window.showErrorMessage("No JSON found");
				return;
			}

			try {
				const json = JSON.parse(text);

				const ts = jsonToTs(json);
				// vscode.env.clipboard.writeText(ts); // commented for getting control over the cursor.
				await editor.insertSnippet(
					new vscode.SnippetString(ts)
				);
				vscode.window.showInformationMessage("Types created successfully!");

			} catch (err) {
				vscode.window.showErrorMessage("Invalid JSON");
			}
		}
	);

	context.subscriptions.push(disposable);
}

export function deactivate() { }

function jsonToTs(obj: any, name = "T"): string {
	if (Array.isArray(obj)) {
		return `type \${1:${name}} = ${mapType(typeof obj[0], obj[0])}[]`;
	}

	if (typeof obj === "object" && obj !== null) {
		const fields = Object.entries(obj)
			.map(([key, value]) => `${key}: ${mapType(typeof value, value)};`)
			.join("\n");

		return `type \${1:${name}} = {\n${fields}\n}`;
	}

	return typeof obj;
}

function mapType(type: string, value: any): string {
	if (value === null) {
		return "null";
	}

	if (Array.isArray(value)) {
		if (value.length === 0) {
			return "any[]";
		}
		return `${mapType(typeof value[0], value[0])}[]`;
	}

	if (type === "object") {
		const fields = Object.entries(value)
			.map(([k, v]) => `${k}: ${mapType(typeof v, v)};`)
			.join(" ");
		return `{ ${fields} }`;
	}

	switch (type) {
		case "string":
		case "number":
		case "boolean":
			return type;
		default:
			return "any";
	}
}