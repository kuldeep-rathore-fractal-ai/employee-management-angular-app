import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEmployeeComponent {
  employee = {
    firstName: '',
    lastName: '',
    position: '',
    department: '',
    email: '',
    salary: 0,
    dateOfJoining: '',
  };

  isLoading$ = new BehaviorSubject<boolean>(false);
  errorMessage$ = new BehaviorSubject<string | null>(null);

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.validateForm()) {
      this.isLoading$.next(true);
      this.errorMessage$.next(null);
      this.employeeService.addEmployee(this.employee).subscribe({
        next: () => {
          this.isLoading$.next(false);
          this.router.navigate(['/employees']);
        },
        error: (error) => {
          console.error('Error adding employee:', error);
          this.errorMessage$.next('Failed to add employee. Please try again.');
          this.isLoading$.next(false);
        },
      });
    }
  }

  clearError(): void {
    this.errorMessage$.next(null);
  }

  validateForm(): boolean {
    return (
      this.employee.firstName.trim() !== '' &&
      this.employee.lastName.trim() !== '' &&
      this.employee.position.trim() !== '' &&
      this.employee.department.trim() !== '' &&
      this.employee.email.trim() !== '' &&
      this.employee.salary > 0 &&
      this.employee.dateOfJoining.trim() !== ''
    );
  }

  onCancel(): void {
    this.router.navigate(['/employees']);
  }
}
