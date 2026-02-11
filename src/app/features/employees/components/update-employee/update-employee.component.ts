import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateEmployeeComponent implements OnInit {
  employee$ = new BehaviorSubject<Employee | null>(null);
  employeeId: string = '';
  isLoading$ = new BehaviorSubject<boolean>(false);
  errorMessage$ = new BehaviorSubject<string | null>(null);

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.employeeId = params['id'];
      this.loadEmployee();
    });
  }

  loadEmployee(): void {
    this.isLoading$.next(true);
    this.employeeService.getEmployeeById(this.employeeId).subscribe({
      next: (emp) => {
        this.employee$.next({ ...emp });
        this.isLoading$.next(false);
      },
      error: (error) => {
        console.error('Error fetching employee:', error);
        this.errorMessage$.next('Failed to load employee. Redirecting...');
        setTimeout(() => this.router.navigate(['/employees']), 2000);
      },
    });
  }

  onSubmit(): void {
    const current = this.employee$.value;
    if (current && this.validateForm()) {
      this.isLoading$.next(true);
      this.employeeService.updateEmployee(this.employeeId, current).subscribe({
        next: () => {
          this.isLoading$.next(false);
          this.router.navigate(['/employees']);
        },
        error: (error) => {
          console.error('Error updating employee:', error);
          this.errorMessage$.next('Failed to update employee. Please try again.');
          this.isLoading$.next(false);
        },
      });
    }
  }

  validateForm(): boolean {
    const current = this.employee$.value;
    if (!current) return false;
    return (
      current.firstName.trim() !== '' &&
      current.lastName.trim() !== '' &&
      current.position.trim() !== '' &&
      current.department.trim() !== '' &&
      current.email.trim() !== '' &&
      current.salary > 0 &&
      current.dateOfJoining.trim() !== ''
    );
  }

  onCancel(): void {
    this.router.navigate(['/employees']);
  }

  clearError(): void {
    this.errorMessage$.next(null);
  }
}
