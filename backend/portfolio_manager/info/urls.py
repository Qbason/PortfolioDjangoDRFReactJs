from info import views
from info.views_webpage import robots_txt
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register(
    r'contentwebpage',
    views.ContentWebPageViewSet
)

urlpatterns = [
    path("api/",include(router.urls)),
    path("robots.txt",robots_txt)
]
