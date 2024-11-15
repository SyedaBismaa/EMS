const employees = [
  {
    "id": 1,
    "firstName": "Arjun",
    "password": "123",
    "email": "employee1@example.com",
    "taskCounts": {
      "active": 3,
      "newTask": 2,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "taskTittle": "Deploy New Build",
        "taskDescription": "Deploy the latest build to production, ensuring all configurations are accurate.",
        "taskDate": "2024-10-01",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTittle": "Team Meeting",
        "taskDescription": "Attend team meeting to discuss project status and provide updates on current tasks.",
        "taskDate": "2024-10-02",
        "category": "Meetings",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTittle": "Update Project Plan",
        "taskDescription": "Revise the project plan based on team feedback to align with new objectives.",
        "taskDate": "2024-10-03",
        "category": "Planning",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Priya",
    "password": "123",
    "email": "employee2@example.com",
    "taskCounts": {
      "active": 1,
      "newTask": 2,
      "completed": 3,
      "failed": 1
    },
    "tasks": [
      {
        "taskTittle": "Code Review",
        "taskDescription": "Review code changes submitted by the team to ensure they meet quality standards.",
        "taskDate": "2024-10-01",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTittle": "Bug Fixes",
        "taskDescription": "Fix bugs identified during the last testing phase to improve system stability.",
        "taskDate": "2024-10-02",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTittle": "Documentation Writing",
        "taskDescription": "Write comprehensive documentation for the project, covering all functionalities and features.",
        "taskDate": "2024-10-03",
        "category": "Documentation",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Ravi",
    "password": "123",
    "email": "employee3@example.com",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 2,
      "failed": 2
    },
    "tasks": [
      {
        "taskTittle": "Market Research",
        "taskDescription": "Conduct research on market trends and competitors, compiling findings into a detailed report.",
        "taskDate": "2024-10-01",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTittle": "Prepare Presentation",
        "taskDescription": "Create a presentation for the upcoming stakeholder meeting, highlighting key achievements.",
        "taskDate": "2024-10-02",
        "category": "Presentations",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTittle": "Feedback Analysis",
        "taskDescription": "Analyze feedback from the recent survey to identify areas for improvement.",
        "taskDate": "2024-10-03",
        "category": "Analysis",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Anjali",
    "password": "123",
    "email": "employee4@example.com",
    "taskCounts": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed": 2
    },
    "tasks": [
      {
        "taskTittle": "Client Meeting Setup",
        "taskDescription": "Set up a meeting with clients to discuss project deliverables and address any concerns.",
        "taskDate": "2024-10-01",
        "category": "Meetings",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTittle": "Draft Proposal",
        "taskDescription": "Draft a proposal for the new project, outlining objectives, resources, and timelines.",
        "taskDate": "2024-10-02",
        "category": "Proposals",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTittle": "Lead Follow-Up",
        "taskDescription": "Follow up with leads from last week’s event, providing them with additional information.",
        "taskDate": "2024-10-03",
        "category": "Sales",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Vikram",
    "password": "123",
    "email": "employee5@example.com",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 2,
      "failed": 3
    },
    "tasks": [
      {
        "taskTittle": "User Guide Creation",
        "taskDescription": "Create a user guide for the new software release, detailing all features and usage tips.",
        "taskDate": "2024-10-01",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTittle": "Training Session",
        "taskDescription": "Conduct a training session for new hires to familiarize them with company tools.",
        "taskDate": "2024-10-02",
        "category": "Training",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTittle": "Training Effectiveness Evaluation",
        "taskDescription": "Evaluate the effectiveness of the recent training session based on attendee feedback.",
        "taskDate": "2024-10-03",
        "category": "Evaluation",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
];




  const admin = [{
    "id": 1,
    "password": "123",
    "email": "admin@example.com"
  }];


  export const setLocalStorage=()=>{
       localStorage.setItem('employees', JSON.stringify(employees))
       localStorage.setItem('admin', JSON.stringify(admin))

  }
  

  
  export const getLocalStorage=()=>{
   const employees =  JSON.parse( localStorage.getItem('employees'))
   const admin =  JSON.parse( localStorage.getItem('admin'))

  return {employees , admin}
  }