from django.urls import path
from . import views

from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('categories/', views.CategoryListAPIView.as_view()),
    path('categories/<int:pk>/', views.CategoryDetailAPIView.as_view()),
    path('products/', views.ProductListAPIView.as_view()),
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view()),
    path('categories/<int:product_id>/products/', views.CategoryProductsAPIView.as_view()),
]