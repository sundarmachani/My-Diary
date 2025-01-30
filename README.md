# MY DIARY Application README

## **Overview**
MY DIARY is a full-stack application designed to manage personal diary entries. It consists of a **backend service** built with Java 21, Spring Boot, and PostgreSQL, and a **frontend application** developed using ReactJS. The application provides secure authentication using JWT (JSON Web Token), API documentation via Swagger, and a user-friendly interface for managing diary entries.

---

## **Features**
- **Backend Features**:
  - Secure authentication using JWT.
  - RESTful APIs for CRUD operations on diary entries.
  - Swagger integration for API documentation and testing.
  - PostgreSQL database for persistent data storage.
  - Built with Java 21 and Spring Boot for high performance and scalability.

- **Frontend Features**:
  - Login screen with secure token-based authentication.
  - Welcome page with personalized greetings.
  - Entries list to view all diary entries.
  - Add entry form to create new diary entries.
  - Update entry form to edit existing diary entries.
  - Built with ReactJS, Axios for API calls, and React Router for navigation.

---

## **Technologies Used**

### Backend
- **Programming Language**: Java 21
- **Framework**: Spring Boot
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Token)
- **API Documentation**: Swagger (OpenAPI)
- **Build Tool**: Maven

### Frontend
- **Framework**: ReactJS
- **HTTP Client**: Axios
- **Routing**: React Router (react-dom)
- **Styling**: Bootstrap/Material-UI (optional)

---

## **Project Structure**
```
my-diary/
├── my-diary-backend/               # Backend service
│   ├── src/main/java/     # Java source files
│   ├── src/main/resources # Configuration files (application.properties)
│   └── pom.xml            # Maven dependencies
├── my-diary-frontend/              # Frontend application
│   ├── public/            # Static files
│   ├── src/               # ReactJS source files
│   └── package.json       # npm dependencies
└── README.md              # Project documentation
```

---

## **Setup Instructions**

### Prerequisites
1. Install Java 21 and Maven for the backend.
2. Install Node.js and npm for the frontend.
3. Set up PostgreSQL database.

---

### Backend Setup

#### Steps to Run the Backend:
1. Navigate to the `my-diary-backend` directory:
   ```bash
   cd my-diary-backend
   ```
2. Configure the PostgreSQL database in `src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/<database_name>
   spring.datasource.username=<your_db_username>
   spring.datasource.password=<your_db_password>
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   ```
3. Build the project using Maven:
   ```bash
   mvn clean install
   ```
4. Run the application:
   ```bash
   mvn spring-boot:run
   ```
5. Access Swagger UI for API documentation at:
   ```
   http://localhost:8080/swagger-ui/index.html [JWT protected]
   http://localhost:8080/v3/api-docs
   ```

---

### Frontend Setup

#### Steps to Run the Frontend:
1. Navigate to the `my-diary-frontend` directory:
   ```bash
   cd my-diary-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to:
   ```
   http://localhost:5173/
   ```

---

## **Backend API Details**

### Authentication Workflow (JWT)
1. Users log in via `/authenticate` endpoint with valid credentials 
```
{
    username : "admin", 
    password : "password"
}
```
2. A JWT token is generated and returned in the response.
3. The token must be included in the `Authorization` header for all secured endpoints:
   ```
   Authorization: Bearer <jwt_token>
   ```

### Key Endpoints

| Endpoint                | Method | Description                        |
|-------------------------|--------|------------------------------------|
| `/authenticate`         | POST   | Authenticates user and returns JWT |
| `/new-entry`            | POST   | Creates a new diary entry          |
| `/get-all`              | GET    | Retrieves all diary entries        |
| `/get-entry/{id}`       | GET    | Retrieves a specific diary entry by ID |
| `/update-entry`         | PUT    | Updates an existing diary entry    |
| `/delete-entry/{id}`    | DELETE | Deletes a specific diary entry     |

---

## **Frontend Features**

### Pages and Components

| Page/Component          | Description                              |
|-------------------------|------------------------------------------|
| `LoginComponent.jsx`              | Login screen with JWT-based authentication |
| `WelcomeComponent.jsx`            | Welcome page after successful login      |
| `ListEntriesComponent.jsx`        | Displays all diary entries               |
| `EntryComponent.jsx`           | Form to add a new diary entry and update entry           |
---

## **Database Schema**
The application uses PostgreSQL as its database. Below is an example schema for storing diary entries: The table is automatically created by JPA with table name "Diary".

---

## **Running Both Frontend and Backend**
1. Start the backend service by following the backend setup instructions.
2. Start the frontend application by following the frontend setup instructions.
3. Access the application via your browser at:
   ```
   http://localhost:5173/

   username : admin
   password : password
   ```

---

## **Future Enhancements**
1. Add user registration functionality.
2. Implement pagination or search functionality for diary entries.
3. Enhance UI with themes or animations.

---

## **Contact**
For any issues or inquiries, please contact [sundarmachani@gmail.com].
