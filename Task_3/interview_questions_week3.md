### 📄 `interview-prep.md` — Week 3: Express.js & REST API Interview Questions

````markdown
# 🧠 Week 3 – Express.js & REST API Interview Questions

This document covers essential interview questions and answers related to REST APIs and Express.js based on the Book Management project.

---

### 1. ❓ What is REST?

**REST (Representational State Transfer)** is an architectural style used for designing networked applications. It relies on standard HTTP methods and stateless communication.

Key principles of REST:

- Stateless: Each request is independent.
- Uses standard HTTP methods: GET, POST, PUT, DELETE.
- Works with resources identified by URLs.

---

### 2. ❓ What are HTTP methods and their use?

- **GET** – Read/fetch data from the server.
- **POST** – Create a new resource on the server.
- **PUT** – Update an existing resource entirely.
- **PATCH** – Partially update a resource (not used in this project).
- **DELETE** – Remove a resource from the server.

---

### 3. ❓ How do you handle routes in Express?

Express provides routing using:

```js
app.get("/route", callback);
app.post("/route", callback);
app.put("/route/:id", callback);
app.delete("/route/:id", callback);
```

Each route method matches an HTTP verb and endpoint path.

---

### 4. ❓ What is middleware in Express?

Middleware in Express are functions that execute during the request-response cycle. They can:

- Modify `req` and `res` objects.
- End the request-response cycle.
- Call the next middleware in the stack.

Example: `express.json()` is middleware to parse incoming JSON payloads.

---

### 5. ❓ How do you parse JSON in Express?

Use built-in middleware:

```js
app.use(express.json());
```

This allows Express to parse JSON in the request body, making it accessible via `req.body`.

---

### 6. ❓ What status codes do you use for CRUD?

- `200 OK` – Request successful (GET, PUT, DELETE).
- `201 Created` – Resource created (POST).
- `400 Bad Request` – Client-side error in input.
- `404 Not Found` – Resource not found.
- `500 Internal Server Error` – Server-side issues.

---

### 7. ❓ How would you handle errors in Express?

You can manually return error responses like:

```js
if (!book) {
  return res.status(404).json({ message: "Book not found" });
}
```

For advanced handling, use centralized error middleware:

```js
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});
```

---

### 8. ❓ What is CORS?

**CORS (Cross-Origin Resource Sharing)** is a browser security feature that blocks cross-origin requests unless explicitly allowed.

In Express, you enable it using:

```bash
npm install cors
```

```js
const cors = require("cors");
app.use(cors());
```

---

### 9. ❓ Explain request and response objects in Express.

- `req` – Contains information about the HTTP request:

  - `req.params` → route parameters (e.g., ID)
  - `req.body` → JSON payload
  - `req.query` → URL query parameters

- `res` – Used to send a response back:

  - `res.send()`, `res.json()`, `res.status().json()`

---

### 10. ❓ How do you test API endpoints?

You can test using **Postman** or **cURL**.

Steps in Postman:

- Choose method (GET, POST, etc.)
- Enter the endpoint URL (e.g., `http://localhost:3000/books`)
- For POST/PUT, go to Body → raw → JSON
- Click Send and inspect response/status code

---

## 📌 Bonus Questions

### 11. ❓ What happens if you don’t use `express.json()`?

Without it, `req.body` will be `undefined`, and you won't be able to access the data sent in JSON format.

---

### 12. ❓ How would you structure a larger Express project?

You'd:

- Separate routes into different files (`routes/books.js`)
- Use controllers for logic
- Apply middleware for logging, error handling
- Use a service layer for business logic (especially when using a DB)

---

### 13. ❓ What are some alternatives to Express?

- **Fastify** – High performance alternative to Express.
- **Koa** – Lightweight and modular.
- **NestJS** – Full-featured framework built on Express/Fastify.

---

## ✅ Prepared Topics Summary

### ✅ Prepared Topics Summary

1. **REST Architecture**: REST (Representational State Transfer) is an architectural style for designing APIs. It emphasizes stateless communication, resource identification via URLs, and standard HTTP methods like GET, POST, PUT, DELETE.

2. **HTTP Methods**: HTTP methods define actions performed on resources. Common methods include:

   - **GET**: Fetch data from the server.
   - **POST**: Create a new resource.
   - **PUT**: Update an existing resource entirely.
   - **DELETE**: Remove a resource.

3. **Express Routing**: Express simplifies routing by providing methods like `app.get()`, `app.post()`, `app.put()`, and `app.delete()` to handle HTTP requests at specific endpoints. These methods map HTTP verbs to corresponding routes.

4. **Middleware**: Middleware functions in Express are executed during the request-response cycle. They can modify `req` and `res` objects, terminate the cycle, or pass control to the next middleware. Examples include `express.json()` for JSON parsing and custom error handlers.

5. **JSON Parsing**: Use the built-in `express.json()` middleware to parse incoming JSON payloads. This makes the data accessible via `req.body`, simplifying request handling.

6. **Status Codes**: HTTP status codes communicate the result of a request:

   - `200 OK`: Request succeeded.
   - `201 Created`: Resource successfully created.
   - `400 Bad Request`: Client-side input error.
   - `404 Not Found`: Resource not found.
   - `500 Internal Server Error`: Server-side issue.

7. **Error Handling**: Errors can be handled by returning custom responses or using centralized error middleware. This ensures consistent error management across the application.

8. **CORS**: Cross-Origin Resource Sharing (CORS) is a security feature that controls cross-origin requests. Enable it in Express using the `cors` package to allow or restrict access from different origins.

9. **Request/Response Lifecycle**:

   - `req`: Contains request data, including `req.params` (route parameters), `req.body` (JSON payload), and `req.query` (query parameters).
   - `res`: Used to send responses back to the client via methods like `res.send()`, `res.json()`, and `res.status()`.

10. **Postman Testing Basics**: Postman is a tool for testing API endpoints. You can select HTTP methods, enter endpoint URLs, and inspect responses and status codes. For POST/PUT requests, you can send JSON payloads via the Body tab.

🎯 These topics provide a solid foundation for discussing and demonstrating your Express.js and REST API knowledge during interviews.

---

🎯 You are now ready to confidently discuss and demonstrate your Express + REST API project in interviews!
````
