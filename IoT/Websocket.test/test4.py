import asyncio
import websockets

async def hello():
    async with websockets.connect('ws://i7d207.p.ssafy.io/api/socket') as websocket:

        name = input("What's your name? ")
        await websocket.send(name)
        print("> {}".format(name))

        greeting = await websocket.recv()
        print("< {}".format(greeting))

if __name__ == "__main__":
    asyncio.get_event_loop().run_until_complete(hello())