from rest_framework import viewsets, status
from .models import User  # 사용자 모델 임포트
from .serializer import UserSerializer  # 사용자 시리얼라이저 임포트
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import action

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)  # 필요에 따라 권한 수정

    # @action(detail=True, methods=['POST'])
    # def SignUp_message(self, request):
    #     required_fields = ['user_id', 'password', 'name', 'gender', 'birth', 'phone', 'email']

    #     if all(field in request.data for field in required_fields):
    #         response = {'message': "회원가입이 완료되었습니다"}
    #         return Response(response, status=status.HTTP_200_OK)
    #     else:
    #         response = {'message': "빈칸을 채워주세요"}
    #         return Response(response, status=status.HTTP_400_BAD_REQUEST)

    