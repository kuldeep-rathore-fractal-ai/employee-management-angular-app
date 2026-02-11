import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailsComponent implements OnInit {
  employee$ = new BehaviorSubject<Employee | null>(null);
  isLoading$ = new BehaviorSubject<boolean>(false);
  errorMessage$ = new BehaviorSubject<string | null>(null);

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.loadEmployee(id);
    });
  }

  loadEmployee(id: string): void {
    this.isLoading$.next(true);
    this.employeeService.getEmployeeById(id).subscribe({
      next: (emp) => {
        this.employee$.next(emp);
        this.isLoading$.next(false);
      },
      error: (error) => {
        console.error('Error fetching employee:', error);
        this.errorMessage$.next('Failed to load employee. Redirecting...');
        setTimeout(() => this.router.navigate(['/employees']), 2000);
      },
    });
  }

  onBack(): void {
    this.router.navigate(['/employees']);
  }
}
