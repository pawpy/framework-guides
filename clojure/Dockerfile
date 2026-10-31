FROM clojure:temurin-21-lein-jammy AS build
WORKDIR /app
COPY project.clj .
RUN lein deps
COPY . .
RUN lein uberjar

FROM eclipse-temurin:21-jre
COPY --from=build /app/target/my-app.jar /app/app.jar
CMD ["java", "-jar", "/app/app.jar"]
