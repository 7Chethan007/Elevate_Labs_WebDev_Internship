## ✅ Key Concepts Summary

### 🔄 **Fetch API**

An in-built browser API to make HTTP requests (like GET, POST) and handle responses asynchronously using promises.

### 🧵 **Promises**

A promise is an object that represents the **eventual result** of an asynchronous operation. It can be in one of three states: `pending`, `fulfilled`, or `rejected`.

### 🕰️ **Asynchronous JavaScript**

Allows code to run in the background (non-blocking) using **callbacks, promises, or async/await**, enabling better performance and user experience.

### 🧾 **JSON (JavaScript Object Notation)**

A lightweight, text-based data format used to exchange data between client and server. Easily parsed using `JSON.parse()` or created using `JSON.stringify()`.

### 🌐 **API (Application Programming Interface)**

A set of rules that allows one software to interact with another. REST APIs use HTTP methods like GET, POST, PUT, DELETE to manipulate resources.

### 🚨 **Error Handling**

Errors in Fetch API are handled using `.catch()` or `try...catch` blocks when using `async/await`. Useful for catching network or parsing errors.

---

## 🧠 Interview Questions & Answers

---

### 1. ❓ **What is Fetch API?**

**Answer:**
The Fetch API provides a modern interface to make HTTP requests in the browser. It returns a **Promise** that resolves to the response of the request.

```js
fetch("url")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

---

### 2. ❓ **How do promises work?**

**Answer:**
Promises represent the result of an asynchronous operation. They have three states:

- `pending` (initial),
- `fulfilled` (resolved),
- `rejected` (error).

```js
const promise = new Promise((resolve, reject) => {
  resolve("Success!");
});
```

---

### 3. ❓ **Difference between synchronous and asynchronous code?**

**Answer:**

- **Synchronous**: Code runs line-by-line, blocking the next step until complete.
- **Asynchronous**: Code doesn’t wait — operations like fetching data run in the background, using callbacks/promises.

---

### 4. ❓ **How to handle errors in Fetch?**

**Answer:**

```js
try {
  const response = await fetch("api-url");
  if (!response.ok) throw new Error("Network error");
  const data = await response.json();
} catch (error) {
  console.error("Fetch failed:", error.message);
}
```

---

### 5. ❓ **What is JSON?**

**Answer:**
JSON stands for **JavaScript Object Notation**. It’s a lightweight data format used for storing and transferring data between server and client.

---

### 6. ❓ **What is CORS?**

**Answer:**
CORS (Cross-Origin Resource Sharing) is a **security feature** in browsers that blocks requests from different domains unless explicitly allowed by the server.

---

### 7. ❓ **How to parse JSON?**

**Answer:**

- To convert a JSON string to an object:

  ```js
  const obj = JSON.parse(jsonString);
  ```

- To convert an object to a JSON string:

  ```js
  const json = JSON.stringify(obj);
  ```

---

### 8. ❓ **Explain async/await.**

**Answer:**
`async`/`await` are modern JavaScript keywords used to handle asynchronous code in a **synchronous-looking way**.
Example:

```js
async function getData() {
  const response = await fetch("url");
  const data = await response.json();
  console.log(data);
}
```

---

### 9. ❓ **What are HTTP status codes?**

**Answer:**
Status codes indicate the result of an HTTP request:

- `200`: OK
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `404`: Not Found
- `500`: Server Error

---

### 10. ❓ **What is a REST API?**

**Answer:**
A REST API is a way for clients and servers to communicate over HTTP using standard methods like GET, POST, PUT, DELETE. Resources are usually accessed via URLs.

---

## ✅ Bonus Questions

---

### 11. ❓ **What is the difference between `fetch()` and `XMLHttpRequest`?**

**Answer:**
`fetch()` is a modern, promise-based API with cleaner syntax. `XMLHttpRequest` is older and more verbose.

---

### 12. ❓ **What is the difference between `.then()` and `async/await`?**

**Answer:**
Both handle promises, but:

- `.then()` chains callbacks
- `async/await` makes async code look synchronous

---

### 13. ❓ **What happens if you forget `await` in async functions?**

**Answer:**
The promise won’t be resolved before the next line runs, which can lead to bugs or undefined results.

---
