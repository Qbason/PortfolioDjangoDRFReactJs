#rest api 
from rest_framework import viewsets
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter

#model
from info.models import ContentWebPage
from info.serializers import ContentWebPageSerializer


class ContentWebPageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ContentWebPage.objects.all()
    serializer_class = ContentWebPageSerializer
    filter_backends = [DjangoFilterBackend,OrderingFilter]
    filterset_fields = ['id','name','language']
    ordering_fields = ['id','name','language']
    #authentication_classes = [BasicAuthentication]
    #permission_classes = [IsAuthenticated]



class ContentWebPageManagementViewSet(viewsets.ModelViewSet):
    queryset = ContentWebPage.objects.all()
    serializer_class = ContentWebPageSerializer
    filter_backends = [DjangoFilterBackend,OrderingFilter]
    filterset_fields = ['id','name','language']
    ordering_fields = ['id','name','language']
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]
