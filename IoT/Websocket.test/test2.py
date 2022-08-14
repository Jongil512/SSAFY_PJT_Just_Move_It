from socket import *
from websocket import create_connection

# react
def sendmessage(data):
    try:
        # 연결
        ws = create_connection("ws://localhost:8081/api/socket")
        connected = ws.recv()
        # 연결 되었으면
        if connected == 'all_connected':
            ws.send('request')  # 값 요청
            ret = ws.recv()
            print(ret)
            ws.close()

    except Exception as e:
        print(e)

if __name__ == "__main__":
    sendmessage("vscode!!!")