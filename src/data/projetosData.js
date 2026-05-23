// src/data/projetosData.js

export const projetosData = [
  {
    id: 1,
    slug: "estacao-meteorologica",
    titulo: "Estação Meteorológica WiFi",
    descricao: "Monitore temperatura, umidade e pressão ambiente e envie os dados para a nuvem.",
    nivel: "Intermediário",
    tempo: "2-3 horas",
    imagem: "/img/projetos/meteorologica.jpg",
    componentes: [
      { id: 1, slug: "esp32", nome: "ESP32" },
      { id: 4, slug: "sensor-dht22", nome: "Sensor DHT22" },
      { id: 10, slug: "display-oled-ssd1306", nome: "Display OLED SSD1306" }
    ],
    bibliotecas: [
      { nome: "WiFi.h", link: "https://github.com/espressif/arduino-esp32/tree/master/libraries/WiFi" },
      { nome: "DHT.h", link: "https://github.com/adafruit/DHT-sensor-library" },
      { nome: "Adafruit_SSD1306.h", link: "https://github.com/adafruit/Adafruit_SSD1306" },
      { nome: "HTTPClient.h", link: "https://github.com/espressif/arduino-esp32/tree/master/libraries/HTTPClient" }
    ],
    codigoBase: `#include <WiFi.h>
#include <DHT.h>
#include <Adafruit_SSD1306.h>
#include <HTTPClient.h>

// Configurações
#define DHTPIN 4
#define DHTTYPE DHT22
const char* ssid = "SEU_WIFI";
const char* password = "SUA_SENHA";

DHT dht(DHTPIN, DHTTYPE);
Adafruit_SSD1306 display(128, 64, &Wire, -1);

void setup() {
  Serial.begin(115200);
  dht.begin();
  
  // Conexão WiFi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  // Inicializa display
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.clearDisplay();
}

void loop() {
  float temp = dht.readTemperature();
  float humidity = dht.readHumidity();
  
  // Mostra no display
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(0, 0);
  display.print("Temp: ");
  display.print(temp);
  display.println(" C");
  display.print("Umid: ");
  display.print(humidity);
  display.println(" %");
  display.display();
  
  delay(2000);
}`
  },
  {
    id: 2,
    slug: "carro-controle-remoto",
    titulo: "Carro Robô Controle Remoto Bluetooth",
    descricao: "Controle um carrinho robô usando seu smartphone via Bluetooth.",
    nivel: "Avançado",
    tempo: "4-5 horas",
    imagem: "/img/projetos/carro.jpg",
    componentes: [
      { id: 1, slug: "esp32", nome: "ESP32" },
      { id: 9, slug: "motor-nema17", nome: "Motor NEMA 17" },
      { id: 6, slug: "sensor-hc-sr04", nome: "Sensor Ultrassônico HC-SR04" }
    ],
    bibliotecas: [
      { nome: "BluetoothSerial.h", link: "https://github.com/espressif/arduino-esp32/tree/master/libraries/BluetoothSerial" },
      { nome: "AccelStepper.h", link: "https://www.airspayce.com/mikem/arduino/AccelStepper/" }
    ],
    codigoBase: `#include <BluetoothSerial.h>
#include <AccelStepper.h>

BluetoothSerial SerialBT;

// Pinos do motor
#define STEP_PIN 2
#define DIR_PIN 3
AccelStepper stepper(AccelStepper::DRIVER, STEP_PIN, DIR_PIN);

void setup() {
  Serial.begin(115200);
  SerialBT.begin("CarroRobo");
  
  stepper.setMaxSpeed(1000);
  stepper.setAcceleration(500);
}

void loop() {
  if (SerialBT.available()) {
    char comando = SerialBT.read();
    
    switch(comando) {
      case 'F': // Frente
        stepper.moveTo(10000);
        stepper.runToPosition();
        break;
      case 'B': // Ré
        stepper.moveTo(-10000);
        stepper.runToPosition();
        break;
      case 'S': // Parar
        stepper.stop();
        break;
    }
  }
}`
  },
  {
    id: 3,
    slug: "controle-led-rgb",
    titulo: "Controle de LED RGB com App",
    descricao: "Controle as cores de um LED RGB via Bluetooth usando um aplicativo de celular.",
    nivel: "Iniciante",
    tempo: "1-2 horas",
    imagem: "/img/projetos/led-rgb.jpg",
    componentes: [
      { id: 1, slug: "esp32", nome: "ESP32" },
      { id: 8, slug: "led-rgb", nome: "LED RGB" }
    ],
    bibliotecas: [
      { nome: "BluetoothSerial.h", link: "https://github.com/espressif/arduino-esp32/tree/master/libraries/BluetoothSerial" }
    ],
    codigoBase: `#include <BluetoothSerial.h>

BluetoothSerial SerialBT;

#define LED_R 4
#define LED_G 5
#define LED_B 6

void setup() {
  pinMode(LED_R, OUTPUT);
  pinMode(LED_G, OUTPUT);
  pinMode(LED_B, OUTPUT);
  
  SerialBT.begin("LED_RGB");
}

void loop() {
  if (SerialBT.available()) {
    char cor = SerialBT.read();
    
    digitalWrite(LED_R, LOW);
    digitalWrite(LED_G, LOW);
    digitalWrite(LED_B, LOW);
    
    switch(cor) {
      case 'R': // Vermelho
        digitalWrite(LED_R, HIGH);
        break;
      case 'G': // Verde
        digitalWrite(LED_G, HIGH);
        break;
      case 'B': // Azul
        digitalWrite(LED_B, HIGH);
        break;
      case 'Y': // Amarelo (Vermelho + Verde)
        digitalWrite(LED_R, HIGH);
        digitalWrite(LED_G, HIGH);
        break;
    }
  }
}`
  },
  {
    id: 4,
    slug: "estacao-base-raspberry",
    titulo: "Estação Base com Raspberry Pi",
    descricao: "Crie um servidor local para monitoramento e controle de dispositivos IoT.",
    nivel: "Avançado",
    tempo: "6-8 horas",
    imagem: "/img/projetos/raspberry.jpg",
    componentes: [
      { id: 5, slug: "raspberry-pi-4", nome: "Raspberry Pi 4" },
      { id: 4, slug: "sensor-dht22", nome: "Sensor DHT22" },
      { id: 10, slug: "display-oled-ssd1306", nome: "Display OLED SSD1306" }
    ],
    bibliotecas: [
      { nome: "RPi.GPIO", link: "https://pypi.org/project/RPi.GPIO/" },
      { nome: "Adafruit_DHT", link: "https://github.com/adafruit/Adafruit_Python_DHT" },
      { nome: "Flask", link: "https://flask.palletsprojects.com/" }
    ],
    codigoBase: `import RPi.GPIO as GPIO
import Adafruit_DHT
from flask import Flask, jsonify
import time

app = Flask(__name__)
sensor = Adafruit_DHT.DHT22
pin = 4

@app.route('/temperatura')
def get_temperatura():
    humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)
    return jsonify({
        'temperatura': temperature,
        'umidade': humidity
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)`
  },
  {
    id: 5,
    slug: "semaforo-inteligente",
    titulo: "Semáforo Inteligente com Arduino",
    descricao: "Construa um semáforo com temporização ajustável e detecção de pedestres.",
    nivel: "Iniciante",
    tempo: "1-2 horas",
    imagem: "/img/projetos/semaforo.jpg",
    componentes: [
      { id: 2, slug: "arduino-uno", nome: "Arduino Uno" },
      { id: 8, slug: "led-rgb", nome: "LED RGB" }
    ],
    bibliotecas: [],
    codigoBase: `// Semáforo com Arduino
const int vermelho = 9;
const int amarelo = 10;
const int verde = 11;

void setup() {
  pinMode(vermelho, OUTPUT);
  pinMode(amarelo, OUTPUT);
  pinMode(verde, OUTPUT);
}

void loop() {
  // Verde por 5 segundos
  digitalWrite(verde, HIGH);
  delay(5000);
  digitalWrite(verde, LOW);
  
  // Amarelo por 2 segundos
  digitalWrite(amarelo, HIGH);
  delay(2000);
  digitalWrite(amarelo, LOW);
  
  // Vermelho por 5 segundos
  digitalWrite(vermelho, HIGH);
  delay(5000);
  digitalWrite(vermelho, LOW);
}`
  }
];