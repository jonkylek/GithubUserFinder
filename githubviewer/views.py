from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    response = HttpResponse("Here's the text of the web page.")
    context = {}
    template = "index.html"
    return render(request, template, context)

def githubFinder(request):
    context = {}
    template = "GithubFinder.html"
    return render(request, template, context)
