from socket import *
import time
from websocket import create_connection


def sendmessage(msg):
    try:
        ws = create_connection("ws://localhost:8081/api/socket")

        # while 1:
        #     time.sleep(1)
        #     print("Sending")
        #     ws.send("/print")
        #     # ws.close()
        #     ret = ws.recv()
        #     print(ret)
        #     if ret == "done": break

        for _ in range(0, 10):
            time.sleep(1)
            ws.send("/print")
            print(ws.recv())

        ws.close()
    except Exception as e:
        print(e)

if __name__ == "__main__":
    sendmessage('fuck off')