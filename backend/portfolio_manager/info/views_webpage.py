from info.serializers import ContentWebPageSerializer
from info.models import ContentWebPage

#for rendering in html
from django.shortcuts import render

from django.views.decorators.http import require_GET
from django.http import HttpResponse

@require_GET
def robots_txt(request):
    lines = [
        "User-agent: *",
        "Allow: /"

    ]
    return HttpResponse("\n".join(lines),content_type="text/plain")


def page_not_found_view(request, exception):
    return render(request,'404.html',status=404)

