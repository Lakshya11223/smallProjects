
from django.urls import path 
from . import views
# localhost:8000/app
urlpatterns = [
    path('',views.all_chai,name='all_chai'),
    path('<int:chai_id>/',views.order,name='order'),
    path('chai_stores/',views.chai_store_view,name='chai_stores')
]
