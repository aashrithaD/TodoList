# Todo List Application

## **Project Description**
The Todo List is a full-stack web application designed to help users manage their tasks efficiently. This project utilizes modern web development technologies, including React for the frontend, Node.js and Express for the backend, and MongoDB for data storage. The app allows users to add, edit, delete, and toggle the completion status of tasks, with a focus on simplicity and usability.

## **Expected Outcomes**
- Users can add, complete, delete, and manage their tasks seamlessly.
- Tasks are persisted in the database, ensuring no loss of data on page refresh.
- A clean and modern UI provides an intuitive user experience.
- Efficient backend handling of CRUD operations with proper state management on the frontend.

---

## **Environment Setup**

### Clone the Repository
```bash
git clone <repository_url>
cd <folder_name>
```

## **Install Dependencies**
```bash
npm install
```

## **Configure MongoDB**
Ensure MongoDB is installed and running locally. Use the default connection URL:
```bash
mongodb://127.0.0.1:27017/todo
```

## **How to Run**
Start the Backend:

In the project directory, start the backend server:
```bash
npm start
```
Start the Frontend
In the frontend directory, start the React development server:
```bash
npm run dev
```

## **Features**

1. Add Task
Enter a task in the input field and click the "Add" button to add it to the list.

2. Toggle Completion
Click the circle icon next to a task to toggle its completion status.  
Completed tasks are styled with a strikethrough effect.  

3. Delete Task
Click the trash icon to delete a task from the list.

4. Persistent Data
All tasks are stored in MongoDB, ensuring they persist across sessions.

## **Folder Structure**
```
├── backend
│   ├── index.js          # Backend server
│   ├── Models
│   │   └── Todo.js       # Mongoose schema for tasks
│   └── package.json      # Backend dependencies
├── frontend
│   ├── src
│   │   ├── App.jsx       # Main React component
│   │   ├── Home.jsx      # Home page with task list
│   │   ├── Create.jsx    # Form for adding tasks
│   │   ├── index.css     # CSS styles
│   │   └── main.jsx      # React entry point
│   └── package.json      # Frontend dependencies
```

## **API Endpoints**

1. GET /get
Fetch all tasks from the database.  

2. POST /add
Add a new task.  
Request Body:  
```bash
"task": "Example Task"
```

3. PUT /update/:id
Toggle the completion status of a task.

4. DELETE /delete/:id
Delete a task by ID.
