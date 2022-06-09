#!/usr/bin/env python3
import sys

from DatabaseConnector import DatabaseConnector
from Employee import Employee


def main():
    database = DatabaseConnector()
    database.Connection()
    employee = Employee()
    flag = 1
    while flag == 1:
        value = input("Please enter 'add' to add a new employee:\n"
                      "or q to quit!")
        if value == 'add':
            print('if Employee is manager press 1\n')
            print('if Employee is not manager press 2\n')
            value = input('Choose:')
            if value == 1:
                employee.is_manager = True
            else:
                employee.is_manager = False
            print('Enter Your Data:\n')
            name = input('Enter Name')
            age = input('Enter Age')
            employee.full_name = name
            employee.age = age
        if value == 'q':
            flag -= 1
            database.terminate()


main()
