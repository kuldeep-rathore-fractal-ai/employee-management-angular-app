# Employee Management System (Angular 19)

A modern, fully-functional employee management application built with Angular 19, featuring complete CRUD operations, responsive design, and proper folder structure organization.

## 🚀 Quick Start

### Prerequisites
- Node.js (v20 or higher)
- npm (v10 or higher)

### Installation

```bash
# Install dependencies
npm install
```

### Run the Application

**Terminal 1 - Frontend (already running):**
```bash
npm start
# Opens on http://localhost:4200
```

**Terminal 2 - Backend (start in NEW terminal):**
```bash
npm install express cors  # Required - run once
node backend-mock.js
# Starts on http://localhost:3000/api/v1
```

### Test the Application
1. Open http://localhost:4200 in your browser
2. Click "Employees" in the navbar
3. You should see 4 mock employees loaded from the API
4. Test Add → Edit → View → Delete workflows

## 📋 Features

✅ **Home Page** - Landing page with company info  
✅ **Employee List** - View all employees with table layout  
✅ **Add Employee** - Create new employees with form validation  
✅ **Edit Employee** - Update existing employee information  
✅ **View Details** - See full employee details with contact links  
✅ **Delete Employee** - Remove employees from system  
✅ **About Page** - Company and tech stack information  
✅ **Contact Page** - Contact form for inquiries  
✅ **Responsive Design** - Works on desktop and mobile devices  

## 📁 Folder Structure

```
src/app/
├── shared/
│   └── components/
│       ├── header/          [Navigation with 4 links]
│       └── footer/          [Company info & links]
├── features/
│   ├── employees/
│   │   ├── components/
│   │   │   ├── employee-list/       [List view from API]
│   │   │   ├── add-employee/        [Create form]
│   │   │   ├── update-employee/     [Edit form]
│   │   │   └── employee-details/    [Details view]
│   │   ├── services/
│   │   │   └── employee.service.ts  [HTTP API calls]
│   │   └── models/
│   │       └── employee.model.ts    [Interface]
│   ├── home/                    [Landing page]
│   ├── about/                   [About page]
│   └── contact/                 [Contact form]
├── environments/
│   ├── environment.ts           [Dev config: localhost:3000]
│   └── environment.prod.ts      [Prod config]
├── app.routes.ts                [All 7 routes defined]
├── app.config.ts                [HTTP provider, router setup]
└── app.ts                       [Root component]
```

## 🔌 API Integration

### Backend Endpoints
Base URL: `http://localhost:3000/api/v1`

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/employees` | Fetch all employees |
| POST | `/employees` | Create new employee |
| GET | `/employees/:id` | Get single employee |
| PUT | `/employees/:id` | Update employee |
| DELETE | `/employees/:id` | Delete employee |

### Employee Data Model
```typescript
interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
}
```

## 🛣️ Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Home | Landing page |
| `/employees` | EmployeeList | All employees |
| `/add-employee` | AddEmployee | Create new |
| `/update-employee/:id` | UpdateEmployee | Edit existing |
| `/employee-details/:id` | EmployeeDetails | View details |
| `/about-us` | About | Company info |
| `/contact-us` | Contact | Contact form |

## 🎨 Technology Stack

- **Framework**: Angular 19 (Standalone Components)
- **Language**: TypeScript
- **HTTP Client**: Angular HttpClient with RxJS
- **Backend**: Node.js / Express (mock server)
- **Styling**: CSS3 with Flexbox & Grid
- **Architecture**: Feature-based folder structure
- **Routing**: Angular Router with lazy loading support
- **Build Tool**: Angular CLI / Webpack

## ⚙️ Configuration

### Development Server
- Port: `4200`
- URL: `http://localhost:4200`
- Environment: `src/environments/environment.ts`

### Backend Server
- Port: `3000`
- Base Path: `/api/v1`
- Mock Server: `backend-mock.js`

### API Configuration
Edit `src/environments/environment.ts`:
```typescript
export const environment = {
  apiUrl: 'http://localhost:3000/api/v1'  // Change this for production
};
```

## 🧪 Testing

### Workflow Test Sequence

1. **Navigate to Employees Page**
   - Expected: 4 mock employees load in table

2. **Create New Employee**
   - Click "Add Employee"
   - Fill: Name, Role, Department, Email, Phone
   - Submit
   - Expected: New employee appears in list

3. **View Employee Details**
   - Click "View" for any employee
   - Expected: Full details with clickable email/phone

4. **Edit Employee**
   - Click "Edit" for any employee
   - Change any field
   - Submit
   - Expected: Changes reflected in list

5. **Delete Employee**
   - Click "Delete" for any employee
   - Expected: Employee removed from list

6. **Test Navigation**
   - Home → Employees → About Us → Contact Us
   - Expected: All pages load correctly

## 🐛 Troubleshooting

### Issue: "Only seeing home page"
**Solution**: Click "Employees" in navbar

### Issue: "Failed to load employees"
**Solution**: 
1. Verify backend is running: `node backend-mock.js`
2. Check port 3000 is not blocked
3. Open browser console (F12) for error details

### Issue: Empty employee list
**Solution**: 
1. Ensure backend is running
2. Check network tab in DevTools (F12 → Network)
3. Verify API URL in environment.ts

### Issue: CORS errors
**Solution**: Backend already has CORS enabled, but custom backends need:
```javascript
const cors = require('cors');
app.use(cors());
```

## 📝 Available Scripts

```bash
# Start development server (frontend on port 4200)
npm start

# Run tests
npm test

# Build for production
npm run build

# Development server with watch mode
ng serve --watch
```

## 🚀 Production Build

```bash
# Build optimized production bundle
npm run build

# Outputs to dist/ folder with optimizations
```

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| **APPLICATION_STATUS.md** | Detailed status and testing guide |
| **TROUBLESHOOTING.md** | Common issues and solutions |
| **BACKEND_SETUP.md** | Backend configuration details |
| **backend-mock.js** | Mock Express backend server |

## ✅ Checklist - Everything Works!

- [x] All 7 routes configured
- [x] All components created and functional
- [x] HTTP service with CRUD operations
- [x] Proper folder structure (shared, features, environments)
- [x] Environment configuration
- [x] Mock backend server with sample data
- [x] Error handling and loading states
- [x] Form validation
- [x] Responsive design
- [x] Navigation and routing
- [x] Development server running

## 👤 Sample Employees (Mock Backend)

When backend starts, these 4 employees are available:

1. **John Doe** - Developer, IT Dept
2. **Jane Smith** - Manager, HR Dept
3. **Mike Johnson** - Designer, Marketing Dept
4. **Sarah Williams** - Analyst, Finance Dept

## 🎓 Key Angular 19 Features Used

✅ Standalone Components  
✅ Functional Routing  
✅ Dependency Injection  
✅ RxJS Observables  
✅ HttpClient  
✅ Component Composition  
✅ Two-way Binding  
✅ Form Validation  
✅ Error Handling  

## 🤝 Support

For issues or questions:
1. Check **TROUBLESHOOTING.md** in the root directory
2. Review browser console (F12)
3. Verify both frontend and backend are running
4. Check environment configuration

---

## 🎉 Ready to Go!

Everything is set up and ready to test. Simply:

```bash
# Terminal 1: (already running)
npm start

# Terminal 2: (new terminal)
npm install express cors && node backend-mock.js
```

Then open http://localhost:4200 and click "Employees" to see it in action!

**Happy coding! 🚀**
