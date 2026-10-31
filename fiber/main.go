package main

import (
	"os"

	"github.com/gofiber/fiber/v3"
)

func main() {
	app := fiber.New()
	app.Get("/", func(c fiber.Ctx) error { return c.SendString("Hello from Fiber") })
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	app.Listen("0.0.0.0:" + port)
}
