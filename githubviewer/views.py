from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    context = {}
    template = "index.html"
    return render(request, template, context)

def results(request):
    context = {}
    template = "results.html"
    return render(request, template, context)

def results2(request):
    context = {}
    template = "results2.html"
    return render(request, template, context)


def githubFinder(request):
    context = {}
    template = "GithubFinder.html"
    return render(request, template, context)
# def home2(request):
#     context = {}
#     template = "home2.html"
#     return render(request, template, context)
