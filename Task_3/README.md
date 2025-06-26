# 📚 Book Management REST API

This project is a simple RESTful API built using **Node.js** and **Express** to manage a list of books. It supports full **CRUD (Create, Read, Update, Delete)** operations and stores data in memory (no database).

---

## 🚀 Features

- Get all books
- Add a new book
- Update an existing book by ID
- Delete a book by ID

---

## 🛠️ Tech Stack

- Node.js
- Express
- Postman (for API testing)

---

## 📁 Project Structure

book-api/
├── node_modules/
├── package.json
└── index.js

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/book-api.git
cd book-api
npm install
node index.js


OR

mkdir book-api
cd book-api
npm init -y
npm install express
touch index.js
- Copy the code in index.js and paste
node index.js

The server will run at:
👉 http://localhost:3000


Postman

1. GET
![GET Request Screenshot](../Postman_Screenshots/1_Initial_Get.png)

2. POST
![POST Request Screenshot](../Postman_Screenshots/2_Post.png)
![Check POST Request](../Postman_Screenshots/3_CheckPost.png)

3. PUT
![PUT Request Screenshot](../Postman_Screenshots/4_Put.png)
![Check PUT Request](../Postman_Screenshots/5_CheckPut.png)

4. DELETE
![DELETE Request Screenshot](../Postman_Screenshots/6_Delete.png)
![Check DELETE Request](../Postman_Screenshots/7_CheckDelete.png)
```
