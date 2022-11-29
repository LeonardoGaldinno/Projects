from django.db import models
from datetime import datetime

#Creating our models
#Created a method passing the models that are coming from django.db
#Inside the method we are creating the fields that will need to be migrated to our database
#Important the datetime from datetime to automatically configure the datefield to the current datetime

class todo(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_at = models.DateTimeField(default=datetime.now, blank="True")

    def __str__(self):
        return self.title