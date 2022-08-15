from socket import *
from websocket import create_connection

# raspberry
def sendmessage(data):
    try:
        ws = create_connection("ws://i7d207.p.ssafy.io/api/socket")
        # 연결됨
        connected = ws.recv()

        if connected == 'all_connected':
            while 1:
                # 초음파 측정????
                # 메세지 보냄
                ws.send(data)
                # 재전송 요청 받음?
                ret = ws.recv()
                if ret == 'done':
                    print("초음파 종료")
                    break

        ws.close()

    except Exception as e:
        print(e)


if __name__ == "__main__":
    sendmessage("파이참!!!")