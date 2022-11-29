from django.shortcuts import render, redirect
from.models import todo
from django.http import HttpResponse

def index(request):
    
    todos = todo.objects.all()[:10]
    context = {
        'todos':todos
    }

    return render(request, 'index.html', context)

def details(request, id):
    global Todo 
    Todo = todo.objects.get(id=id)

    context = {
        'todo':Todo
        }

    return render(request, 'details.html', context)

def add(request):
    if(request.method == 'POST'):
        title = request.POST['title']
        text = request.POST['text']

        Todopost = todo(title=title, text=text)
        Todopost.save()

        return redirect('/todos')

    else:
        return render(request, 'add.html')



# Create your views here.
