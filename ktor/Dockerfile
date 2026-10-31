FROM gradle:9.8-jdk21 AS build
WORKDIR /app
COPY . .
RUN gradle buildFatJar --no-daemon

FROM eclipse-temurin:21-jre
COPY --from=build /app/build/libs/*-all.jar /app/app.jar
CMD ["java", "-jar", "/app/app.jar"]
