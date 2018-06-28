from django.db import models


class Todo(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        """A string representation of the model."""
        return self.title

class Obj(models.Model):
    name = models.CharField(max_length=200)
    time = models.DateField()
    contaminated = models.BooleanField(default=False)
    def __str__(self):
        return self.name+ self.osker.id



class User(models.Model):
    customer = models.CharField(max_length=30)
    password = models.CharField(max_length=40)
    email = models.EmailField()
    #okser ideas are separated by '/' saved as a single string
    oskids = models.CharField(max_length=30)
    def __str__(self):
        return self.name + self.last_name + self.email+ self.osker


class Osker(models.Model):
    oskid = models.IntegerField(default=0)
    bin_capacity = models.CharField(max_length=40)
    bin_one  = models.IntegerField(default=0)
    bin_two = models.IntegerField(default=0)
    bin_three =  models.IntegerField(default=0)
    bin_four =   models.IntegerField(default=0)
    obj = models.ForeignKey(Obj, on_delete=models.CASCADE)
    user = models.ManyToManyField(User)
    def __str__(self):
        return self.id + self.bin_capacity
