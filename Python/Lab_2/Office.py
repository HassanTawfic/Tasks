from Employee import Employee


class Office:
    def __init__(self):
        self.name = ''
        self.employees = [Employee()]

    def get_all_employees(self):
        return self.employees

    def get_employee(self, emp_id):
        return self.employees[emp_id]

    def hire(self, employee):
        self.employees.append(employee)

    def fire(self, emp_id):
        del self.employees[emp_id]
