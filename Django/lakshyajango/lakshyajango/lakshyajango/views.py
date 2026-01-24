from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    #return HttpResponse("Jai shri Ram (Home)")
    return render(request,'website/index.html')

def about(request):
    return HttpResponse("Jai shri Ram (about)")

def contact(request):
    return HttpResponse("Jai shri Ram (contact)")