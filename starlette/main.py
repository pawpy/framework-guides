import os

import uvicorn
from starlette.applications import Starlette
from starlette.responses import PlainTextResponse
from starlette.routing import Route


async def home(request):
    return PlainTextResponse("Hello from Starlette")


app = Starlette(routes=[Route("/", home)])

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=int(os.environ.get("PORT", 8000)))
