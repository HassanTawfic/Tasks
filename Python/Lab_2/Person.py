class Person:
    full_name = ''
    money = 0
    sleep_mood = ''
    health_rate = ''

    def sleep(self, hours):
        if hours == 7:
            self.sleep_mood = 'Happy'
        elif hours > 7:
            self.sleep_mood = 'Lazy'
        else:
            self.sleep_mood = 'Tired'

    def eat(self, meals):
        if meals == 3:
            self.health_rate = '100'
        elif meals == 2:
            self.health_rate = '75'
        else:
            self.health_rate = '50'

    def buy(self, items):
        self.money -= len(items) * 10
