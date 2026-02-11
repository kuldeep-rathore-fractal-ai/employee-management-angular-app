import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent implements OnInit {
  employees$ = new BehaviorSubject<Employee[]>([]);
  isLoading$ = new BehaviorSubject<boolean>(false);
  errorMessage$ = new BehaviorSubject<string | null>(null);

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.isLoading$.next(true);
    this.errorMessage$.next(null);

    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        console.log('Employees fetched successfully:', data);
        console.log('Number of employees:', data.length);
        this.employees$.next(data || []);
        this.isLoading$.next(false);
      },
      error: (error) => {
        console.error('Error fetching employees:', error);
        this.errorMessage$.next('Failed to load employees. Please try again.');
        this.isLoading$.next(false);
      },
    });
  }

  deleteEmployee(id: string): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe({
        next: () => {
          const updated = this.employees$.value.filter((emp) => emp._id !== id);
          this.employees$.next(updated);
        },
        error: (error) => {
          console.error('Error deleting employee:', error);
          this.errorMessage$.next('Failed to delete employee. Please try again.');
        },
      });
    }
  }

  clearError(): void {
    this.errorMessage$.next(null);
  }
}
