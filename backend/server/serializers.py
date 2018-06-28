
from .models import Todo, Obj, User,Osker
from rest_framework import serializers

class TodoSerializer(serializers.ModelSerializer):

    class Meta:
        fields = (
            'id',
            'title',
            'description',
        )
        model = Todo

class ObjSerializer(serializers.ModelSerializer):
      class Meta:
          fields = (
             'name',
             'contaminated',
             'time',
             'oskid',
          )
          model = Obj
# at this moment each osker has a signle capacity
class OskerSerializer(serializers.ModelSerializer):
      class Meta:
          fields = (
             'oskid',
             'bin_capacity'
             'bin_one'
             'bin_two',
             'bin_three'
             'bin_four'
          )
          model = Osker

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        fiels = (
            'email'
            'password'
            'oskids'
            'customer'

        )
        model = User
