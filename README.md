# 🚀 JSON to TypeScript Interfaces

Convert JSON into TypeScript types instantly — inside VS Code.

No context switching. No online tools. Just select JSON and generate types in seconds.

---

## ✨ Features

* ⚡ Convert JSON → TypeScript types instantly
* 🎯 Works on selected JSON or entire file
* 🧠 Smart type inference (objects, arrays, primitives)
* ✏️ Editable type name (no more `T` pain)
* 📌 Cursor placed exactly where you need to edit
* 🧩 Seamless VS Code integration

---

## 📦 Installation

### From VS Code Marketplace

Search for:

```
JSON to TypeScript Interfaces
```

### Manual (Development)

```bash
git clone https://github.com/YOUR_USERNAME/json-to-typescript-interfaces.git
cd json-to-typescript-interfaces
npm install
```

Then press:

```
F5
```

---

## 🚀 Usage

### 1. Open a JSON file

```json
{
  "name": "Aryan",
  "age": 24,
  "isActive": true
}
```

---

### 2. Select JSON (or leave unselected for full file)

---

### 3. Open Command Palette

```
Ctrl + Shift + P
```

---

### 4. Run command

```
Generate TypeScript from JSON
```

---

### 5. Enter type name

Example:

```
User
```

---

### ✅ Output

```ts
type T = {
  name: string;
  age: number;
  isActive: boolean;
}
```

👉 The type name is pre-selected — just start typing to rename.

---

## 🧠 How It Works

* Parses selected JSON
* Infers TypeScript types
* Generates a clean type definition
* Inserts it directly into your editor with smart cursor positioning

---

## 🎯 Example

### Input

```json
{
  "user": {
    "id": 1,
    "name": "John"
  },
  "tags": ["dev", "ts"]
}
```

### Output

```ts
type T = {
  user: { id: number; name: string; };
  tags: string[];
}
```

---

## ⚠️ Limitations (v1)

* Mixed-type arrays are simplified (`(string | number)[]` not yet supported)
* No optional field detection yet
* Nested types are inlined (no separate interfaces)

---

## 🛣️ Roadmap

* [ ] Optional field detection
* [ ] JSON schema support

---

## 🤝 Contributing

Contributions are welcome!

```bash
git clone https://github.com/YOUR_USERNAME/json-to-typescript-interfaces.git
```

Open an issue or submit a PR 🚀

---

## ⭐ Support

If you find this useful:

* ⭐ Star the repo
* 🐦 Share with other devs
* 🧠 Suggest improvements

---

## 📄 License

MIT

---

## 💡 Why this exists

Because switching to random websites to convert JSON → TS breaks flow.

This extension keeps you **in the zone**.

---

Made with ❤️ for developers
