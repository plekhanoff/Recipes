from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, RecipeViewSet
from .views import RecipeListByCategory

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'recipes', RecipeViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api/recipes/category/<int:category_id>/', RecipeListByCategory.as_view(), name='recipes-by-category'),
]