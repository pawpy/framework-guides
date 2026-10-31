plugins {
    kotlin("jvm") version "2.2.20"
    id("io.ktor.plugin") version "3.3.1"
}

application {
    mainClass.set("com.example.ApplicationKt")
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("io.ktor:ktor-server-core")
    implementation("io.ktor:ktor-server-netty")
    implementation("ch.qos.logback:logback-classic:1.5.18")
}
