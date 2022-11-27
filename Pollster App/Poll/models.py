from django.db import models

class Question(models.Model): #Creating a class named Question and extending it to models.
    question_text = models.CharField(max_length=200) #It creates an ID automatically that it's going to be a primary key
    pub_date = models.DateTimeField('Date published')

    def __str__(self):
        return self.question_text
   
class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE) # Creating a Foreign key field to named question to link it to the primary key of the question table. Added a model on the () with the option on delete that will basically delete the choices in case of a question is deleted
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
    
    def __str__(self):
        return self.choice_text


 
 

# Create your models here.
