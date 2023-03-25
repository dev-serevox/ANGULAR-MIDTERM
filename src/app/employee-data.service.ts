import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee-data';

export class EmployeeData implements InMemoryDbService {
  createDb() {
    let employees: Employee[] = [
      {
        id: 1,
        name: 'Noie',
        location: 'Arayat',
        email: 'noie@gmail.com',
        mobile: '9550461830',
        dept_code: '11',
        dept: 'Strategy Department',
        salary: '20,000 - 120,000',
        work: 'Strategize',
      },
      {
        id: 2,
        name: 'Glenn',
        location: 'Magalang',
        email: 'glenn@gmail.com',
        mobile: '9038164055',
        dept_code: '22',
        dept: 'Marketing Department',
        salary: '30,000 - 130,000',
        work: 'Sell',
      },
      {
        id: 3,
        name: 'Manoy',
        location: 'Mexico',
        email: 'manoy@gmail.com',
        mobile: '9975287450',
        dept_code: '33',
        dept: 'Finance Department',
        salary: '40,000 - 140,000',
        work: 'Audit',
      },
      {
        id: 4,
        name: 'Abigail',
        location: 'Angeles',
        email: 'abi@gmail.com',
        mobile: '9897238738',
        dept_code: '44',
        dept: 'Human Resource Department',
        salary: '25,000 - 50,000',
        work: 'Hire',
      },
      {
        id: 5,
        name: 'Asby',
        location: 'Porac',
        email: 'asby@gmail.com',
        mobile: '9018934222',
        dept_code: '55',
        dept: 'IT Department',
        salary: '100,000 - 150,000',
        work: 'Handle IT',
      },
      {
        id: 6,
        name: 'Barrientos',
        location: 'San Fernando',
        email: 'barrientos@gmail.com',
        mobile: '9826525132',
        dept_code: '66',
        dept: 'Logistic Department',
        salary: '70,000 - 90,000',
        work: 'Logistics',
      },
    ];
    return { employees };
  }

  genId(employees: Employee[]): number {
    return employees.length > 0
      ? Math.max(...employees.map((emp) => emp.id)) + 1
      : 1;
  }
}
