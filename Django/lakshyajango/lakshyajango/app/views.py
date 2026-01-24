from django.shortcuts import render
from .models import ChaiVariety
from django.shortcuts import get_object_or_404
# Create your views here.
def all_chai(request):
    chais = ChaiVariety.objects.all() # arrays aayenge
    return render(request,'app/all_chai.html',{'chais':chais})

def order(request,chai_id):
    chai = get_object_or_404(ChaiVariety,pk=chai_id)
    return render(request,'app/order.html',{'chai':chai})

