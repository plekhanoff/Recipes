from django.contrib import admin
from .models import Category, Recipe


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    search_fields = ('name',)
    list_display = ('name',)


@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin): 
    list_display = ('title', 'description', "category")
    search_fields = ('title',)
