from django.http import HttpResponse, JsonResponse
from .models import Address
from .serializers import AddressSerializer

# TODO : Integrate the @api_view decorator by requests
# >>> from rest_framework.decorators import api_view


def address_list(request):
    if request.method == 'GET':
        addresses = Address.objects.all()
        serializer = AddressSerializer(addresses, many=True)
        return JsonResponse(serializer.data, safe=False)
    else:
        return HttpResponse("Requests other than GET are not yet developed")


def address_detail(request, pk):
    if request.method == 'GET':
        try:
            address = Address.objects.get(pk=pk)
        except Address.DoesNotExist:
            return HttpResponse("This address does not exist", status=404)

        serializer = AddressSerializer(address)
        return JsonResponse(serializer.data)
    else:
        return HttpResponse("Requests other than GET are not yet developed")
