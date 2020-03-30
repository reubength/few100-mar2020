// import { Employee } from '../src/hr/employee';
// import { VacationRequests } from '../src/hr/vacation-requests';

import { Employee, VacationRequests, DAYS_OF_PTO as pto } from '../src/hr';

describe('using classes', () => {
    describe('creating instanes', () => {
        it('using contructors', () => {
            const bob = new Employee(60_000, 'Robert', 'Jones');
            // bob.firstName = 'Robert';
            // bob.lastName = 'Jones';

            expect(bob.getSalary()).toBe(60_000);
            expect(bob.firstname).toBe('Robert');
            expect(bob.lastName).toBe('Jones');

            expect(bob.fullName).toBe('Jones, Robert');

            const sue = new Employee(undefined, 'Sue', 'Smith');
            expect(sue.getSalary()).toBe(50_000);
            expect(sue.firstname).toBe('Sue');
            expect(sue.lastName).toBe('Smith');

            expect(sue.fullName).toBe('Smith, Sue');

            const vacation = new VacationRequests(sue);

            expect(vacation.employee.firstname).toBe('Sue');


        });


    });
});
