import re

from Person import Person


class Employee(Person):

    def __init__(self):
        self.id = 0
        self.__email = 'admin@admin.com'
        self.work_mood = ''
        self.__salary = 2000
        self.is_manager = False
        self.age = 0
        self.__health_rate = 50

    def work(self, hours):
        if hours == 8:
            self.work_mood = 'Happy'
        elif hours > 8:
            self.work_mood = 'Tired'
        else:
            self.work_mood = 'lazy'

    def send_email(self):
        return

    @property
    def salary(self):
        return self.__salary

    @salary.setter
    def salary(self, salary):
        if salary > 1000:
            self.__salary = salary
        else:
            raise ValueError("Sorry you age is below eligibility criteria")

    @property
    def health_rate(self):
        return self.__health_rate

    @health_rate.setter
    def health_rate(self, rate):
        if 100 > rate > 0:
            self.__health_rate = rate
        else:
            raise ValueError("Sorry you age is below eligibility criteria")

    @property
    def email(self):
        return self.__email

    @email.setter
    def email(self, email):
        regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
        if re.match(regex, email):
            self.__email = email
        else:
            raise ValueError("Invalid Email")
