### **Step 1: Make Code Changes**

Modify your React project as needed.


### **Step 2: Commit and Push Changes**

In the **VS Code terminal** , run:

```bash
git add .
git commit -m "Updated project with new changes"
git push origin main
```


### **Step 3: Redeploy to GitHub Pages**

Run:

```bash
yarn deploy
```


This will:

1. Build the latest version of your React app.
2. Push the updated **`dist` (or** **`build`) folder to the** `gh-pages` branch.
3. Automatically update your website.

### **Step 4: Verify the Update**

Wait a couple of minutes, then visit:

https://ramaiyakushal.github.io/resume
