class Pizza(object):
    def __init__(self, size):
        self.size = size

    def get_size(self):
        return self.size

print(Pizza.get_size(Pizza(42)))

print(Pizza(42).get_size())