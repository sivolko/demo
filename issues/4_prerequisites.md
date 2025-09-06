---
## Prerequisites for Resolving Issue #4: Add UI Screenshots with Playwright for Mobile, Tablet, and Desktop Views

### 1. Node.js & npm
- Ensure Node.js (>=16.0.0) and npm are installed on your system.
- Confirm that npm is able to install dev dependencies.

### 2. Playwright & Related Packages
- Add the following to devDependencies in package.json:
  - "@playwright/test": "^1.40.0"
  - "playwright": "^1.40.0"
- Run `npm install` to fetch these dependencies.

### 3. Project Structure
- The following files and directories must exist or be created:
  - `playwright.config.js` (for Playwright configuration)
  - `tests/screenshot.spec.js` (for the screenshot automation script)
  - `.github/workflows/screenshots.yml` (GitHub Actions workflow for automation)
  - `screenshots/` directory (for storing generated screenshots)

### 4. HTML Pages
- The following pages must exist in the project root or be available via local server:
  - index.html
  - shop.html
  - about.html
  - services.html
  - blog.html
  - contact.html

### 5. Dark Mode Toggle
- The site must support toggling between light and dark modes programmatically for Playwright to capture both variants.
- Document the selector or JavaScript method used to switch modes.

### 6. GitHub Actions Permissions
- Ensure the repository allows GitHub Actions to:
  - Install Node.js dependencies
  - Add workflow artifacts
  - Push changes to the screenshots/ directory if auto-committing is enabled

### 7. Documentation
- README.md should be structured to include a new "UI Screenshots" section and image gallery as described in the issue.

---
Once these prerequisites are met, implementation can proceed as described in the issue requirements and acceptance criteria.
