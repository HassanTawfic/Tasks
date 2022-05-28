import mysql.connector


class DatabaseConnector:

    def __init__(self):
        self.__connection = None

    def Connection(self):
        self.__connection = mysql.connector.connect(host='localhost',
                                                    database='python',
                                                    user='root',
                                                    password='12345678')

        if self.__connection.is_connected():
            db_info = self.__connection.get_server_info()
            print("Connected to MySQL Server version ", db_info)
            cursor = self.__connection.cursor()
            cursor.execute("select database();")
            record = cursor.fetchone()
            print("You're connected to database: ", record)

    def terminate(self):
        if self.__connection.is_connected():
            self.__connection.cursor.close()
            self.__connection.close()
            print("MySQL connection is closed")

