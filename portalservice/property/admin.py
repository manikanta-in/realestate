from django.contrib import admin

# Register your models here.
from .models import Property,PropertyLikes,AdminUser


class PropertyAdmin(admin.ModelAdmin):
    list_display = ("location_name", "latitute", "longtitue",)


admin.site.register(Property, PropertyAdmin)

admin.site.register(PropertyLikes)
admin.site.register(AdminUser)