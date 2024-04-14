from lcu_driver import Connector

connector = Connector()


# fired when LCU API is ready to be used
@connector.ready
async def connect(connection):
    print("LCU API is ready to be used.")


@connector.ws.register("/lol-summoner/v1/current-summoner", event_types=("UPDATE",))
async def icon_changed(connection, event):
    print(event.data)
    print("The summoner was updated.")


@connector.ws.register(
    "/lol-ranked/v1/current-lp-change-notification", event_types=("UPDATE",)
)
async def lp_change(connection, event):
    print(event.data)
    print("The summoner was updated.")


# fired when League Client is closed (or disconnected from websocket)
@connector.close
async def disconnect(_):
    print("The client have been closed!")


# starts the connector
connector.start()
