import RPi.GPIO as gpio
import time
from socket import *
from select import select
from websocket import create_connection

# 서버에 신호를 보내는 함수 정의
def send_distance(data):
    try:
        print("Sending: ", data)
        ws.send(data)
        # ws.close()
        received = ws.recv()
    except Exception as e:
        print(e)
    return received

# 초음파 센서 세팅
gpio.setmode(gpio.BCM)
# 초음파 센서의 GPIO 포트 정보 불러오기
trig = 3
echo = 2
gpio.setup(trig, gpio.OUT)
gpio.setup(echo, gpio.IN)

# 서버와 소켓 연결
ws = create_connection("ws://https://i7d207.p.ssafy.io/api/socket")
# 소켓연결 후 서버에서 받은 메세지
received = ws.recv()

# 받은 메세지가 all_connected(react, python 둘 다 연결됨)이면 초음파 시작
if received == 'all_connected':
    # 서버와 연결된 후 초음파는 계속 켜놓음
    while True:
        # 수신된 메세지(=received)가 done이면
        if received == "done":
            # 다시 메세지를 받고 반복문 다시 시작
            received = ws.recv()
            continue
        
        # 아니면 초음파 돌려돌려
        try:
            gpio.output(trig, False)
            # 1초마다 초음파 측정을 위함
            time.sleep(1)
            
            gpio.output(trig, True)
            time.sleep(0.00001)
            gpio.output(trig, False)
            
            # 초음파 발신
            while gpio.input(echo) == 0:
                # 초음파가 발신된 시간
                pulse_start = time.time()
            
            # 초음파 수신
            while gpio.input(echo) == 1:
                # 초음파가 수신된 시간
                pulse_end = time.time()
            
            # 초음파가 돌아올 때까지 걸린 시간
            pulse_duration = pulse_end - pulse_start
            # 초음파로 측정한 거리 계산
            distance = pulse_duration * 17000
            # 소수점 둘째자리에서 반올림
            distance = round(distance, 2)
            while True:
                # 서버에 데이터를 보내고 메세지를 수신함
                received = send_distance(distance)
                # '서버가 데이터를 받았다'(=done)이면 데이터 보내는 것 종료 
                if received == 'done':
                    print("Stop send data")
                    break

        except Exception as e:
            gpio.cleanup()
            print(e)

ws.close()