**📌 QA Automation – Playwright (UI + API)**
**📖 Project Overview**

This project demonstrates end-to-end UI and API automation using **JavaScript with Playwright.**

The automation covers:

- UI testing for DemoQA Book Store Application

- API automation using ReqRes public APIs

- File handling for storing extracted data

- Structured automation framework approach

**🛠 Tech Stack**

- JavaScript (Node.js)

- Playwright

- REST API Testing

- Git

- VS Code

**📂 Project Structure**
QA-Automation/
│
├── tests/
│   ├── ui.spec.js
│   ├── api.spec.js
│
├── pages/
│   ├── loginPage.js
│   ├── bookStorePage.js
│
├── utils/
│   ├── fileUtils.js
│
├── playwright.config.js
├── package.json
└── README.md

**✅ UI Automation Flow**

Website: https://demoqa.com/

**Test Scenario:**

1. Navigate to DemoQA

2. Login using manually created user

3. Validate:
  - Username display
  - Logout button visibility
4. Navigate to Book Store
5. Search for:
   Learning JavaScript Design Patterns
6. Validate search result contains the book
7. Extract:
     -Title
     -Author
     -Publisher
8. Write extracted details into a file
9. Logout

**Key Features Used:**
    -Playwright locators
    -Assertions using expect
    -Auto-wait mechanism
    -File handling using Node fs module

**🌐 API Automation Flow**
Base URL: https://reqres.in/
**Test Scenarios:**
**1️⃣ Create User (POST)**
    -Validate status code
    -Extract user ID
**2️⃣ Get User (GET)**
    -Fetch created user details
    -Validate response data
**3️⃣ Update User (PUT)**
    -Update user name
    -Validate updated response

**API Concepts Covered:**
    -REST methods (GET, POST, PUT)
    -Status code validation
    -JSON response validation
    -Data extraction from response

**🧠 Framework Approach**
    -Modular structure
    -Reusable methods
    -Clear separation of UI & API tests
    -Maintainable and scalable design
    -Follows basic Page Object Model structure

**▶️ How to Run the Project**
**1️⃣ Clone the repository**
    git clone <your-repo-url>
**2️⃣ Install dependencies**
    npm install
**3️⃣ Install Playwright browsers**
    npx playwright install
**4️⃣ Run all tests**
    npx playwright test
**5️⃣ Run specific test file**
    npx playwright test tests/ui.spec.js

**📊 Test Reporting**
After execution:
    npx playwright show-report
Playwright generates an HTML report with execution details.

**🚀 Skills Demonstrated**
   -JavaScript fundamentals
   -UI automation using Playwright
   -API automation testing
   -Assertions and validations
   -File handling
   -Git version control
   -Debugging & troubleshooting

**📌 Future Improvements**
   -Add CI/CD integration (GitHub Actions/Jenkins)
   -Add environment configuration
   -Implement advanced reporting
   -Add negative test scenarios

**👨‍💻 Author**
Ganga Jagadeesh
QA Automation Intern Candidate

    
  

