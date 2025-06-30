# Git, GitHub & Static Hosting: Key Concepts & Interview Questions

---

## 🚀 Key Concepts Summary

### 🔧 Git
Git is a **distributed version control system** that helps developers track changes in source code, collaborate, and manage project versions efficiently.

### 🌐 GitHub
GitHub is a **web-based platform** for hosting Git repositories. It enables **collaboration**, **code review**, **issue tracking**, and supports **pull requests** for contributing to projects.

### 🖥️ GitHub Pages
GitHub Pages is a **free static hosting service** that allows users to host websites directly from a GitHub repository (typically from the `main` or `gh-pages` branch).

### 📦 Version Control
Version control records changes to files over time. Git implements this, allowing you to **revert**, **branch**, **merge**, and track the **history** of a project.

### 🏠 Static Hosting
Static hosting serves **pre-built HTML/CSS/JS files** as-is from the server. It’s simple, fast, and ideal for **personal websites, portfolios, and documentation**.

---

## 📘 Interview Questions and Answers

### 1. What is Git and why use it?
**Git** is a distributed version control system that tracks changes to files and helps manage code across teams.  
✅ Enables collaboration, undoing changes, and safe branching.

---

### 2. How do you push code to GitHub?
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repo.git
git push -u origin main
```
✅ Uploads your local project to a GitHub repository.

---

### 3. What is GitHub Pages?
**GitHub Pages** is a GitHub feature for hosting **static websites** for free directly from your repository.

---

### 4. Difference between static and dynamic websites?

| Static Website        | Dynamic Website          |
|----------------------|-------------------------|
| Pre-rendered HTML/CSS | Server-generated content |
| Fast and easy to host | Needs backend logic      |
| Examples: Portfolio   | Examples: E-commerce     |

---

### 5. How do you revert commits in Git?
- Use `git revert <commit>` to undo a commit by creating a new one.
- Use `git reset` to move HEAD to a previous commit:
    - `--soft` keeps changes staged
    - `--hard` discards changes completely

---

### 6. What is branching in Git?
A **branch** is a separate line of development.  
✅ The `main` branch is default; create feature branches with:
```bash
git checkout -b feature-login
```

---

### 7. Explain pull requests.
A **pull request (PR)** proposes changes from one branch to another (often from a fork or feature branch to `main`). It enables **code review and discussion** before merging.

---

### 8. How to resolve merge conflicts?
- Git marks conflicts in files during a merge.
- Manually edit files to resolve.
- Then run:
    ```bash
    git add <resolved_file>
    git commit
    ```

---

### 9. How to host a website for free?
Use **GitHub Pages**:
- Create a repo named `yourusername.github.io`
- Add your `index.html` and static files
- Push to `main`
- Enable Pages under **Settings → Pages**

✅ Site is live at `https://yourusername.github.io`

---

### 10. What is continuous deployment?
A DevOps practice where **code changes are automatically deployed** to production after passing tests, ensuring rapid delivery.

---

## 🔄 Additional Must-Know Questions

### 11. What is the difference between `git pull` and `git fetch`?
- `git pull` = `fetch` + `merge`
- `git fetch` only downloads changes, doesn’t apply them

---

### 12. What are forks and clones in GitHub?
- **Fork**: Copy of a repo to your GitHub account (for contribution or customization)
- **Clone**: Local copy of a remote GitHub repo on your machine

---

### 13. What is `.gitignore`?
A `.gitignore` file tells Git which files/folders to **exclude** from tracking (e.g., build files, `node_modules`, `.env`).

---

### 14. How do you check Git history?
Use:
```bash
git log
```
To view commits, authors, and messages.

---

### 15. What are tags in Git?
Tags mark **specific points** (like release versions) in history:
```bash
git tag v1.0.0
```