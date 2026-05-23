// src/data/componentsData.js

export const componentsData = [
  {
    id: 1,
    slug: 'esp32',
    image: '/img/esp32.png',
    name: 'ESP32',
    
    especificacoes: [
      { caracteristica: 'Microcontrolador', valor: 'Xtensa LX6 dual-core' },
      { caracteristica: 'Frequência', valor: '160-240 MHz' },
      { caracteristica: 'RAM', valor: '520 KB' },
      { caracteristica: 'Flash', valor: '4-16 MB' },
      { caracteristica: 'Bluetooth', valor: 'BLE 4.2' },
      { caracteristica: 'WiFi', valor: '802.11 b/g/n' }
    ],
    
    descricao: 'Microcontrolador com WiFi e Bluetooth integrados, ideal para projetos IoT e automação residencial.',
    arquitetura: 'Xtensa LX6 dual-core',
    tensaoOperacao: '2.2 - 3.6 V',
    corrente: '80 mA (ativo), < 5 µA (deep sleep)',
    gpios: '34 pinos',
    adc: '12 bits, 18 canais',
    pwm: '16 canais',
    
    bibliotecas: [
      { nome: 'WiFi.h', link: 'https://github.com/espressif/arduino-esp32/tree/master/libraries/WiFi' },
      { nome: 'BluetoothSerial.h', link: 'https://github.com/espressif/arduino-esp32/tree/master/libraries/BluetoothSerial' },
      { nome: 'PubSubClient.h (MQTT)', link: 'https://github.com/knolleary/pubsubclient' },
      { nome: 'HTTPClient.h', link: 'https://github.com/espressif/arduino-esp32/tree/master/libraries/HTTPClient' }
    ],
    
    linguagens: ['C++', 'MicroPython', 'CircuitPython'],
    usoRecomendado: 'Automação residencial, IoT, sensoriamento remoto, wearables',
    categoria: 'Microcontrolador',
    fabricante: 'Espressif',
    siteFabricante: 'https://www.espressif.com/en/products/socs/esp32',
    documentacao: 'https://docs.espressif.com/projects/esp-idf/en/latest/esp32/',
    naturezaCor: 'Branco',
    outrosNomes: '',
    
    // Imagens
    imageCard: '/img/Dumont.jpg',
    imageDetail: '/img/Dumont.jpg',
  },
  {
    id: 2,
    slug: 'arduino-uno',
    image: '/img/arduino-uno.png',
    name: 'Arduino Uno',
    
    especificacoes: [
      { caracteristica: 'Microcontrolador', valor: 'ATmega328P' },
      { caracteristica: 'Frequência', valor: '16 MHz' },
      { caracteristica: 'RAM', valor: '2 KB' },
      { caracteristica: 'Flash', valor: '32 KB' },
      { caracteristica: 'EEPROM', valor: '1 KB' }
    ],
    
    descricao: 'Placa mais popular para aprendizado e prototipagem. Possui pinos de fácil acesso e vasta biblioteca de exemplos.',
    arquitetura: 'AVR',
    tensaoOperacao: '5 V',
    corrente: '~50 mA',
    gpios: '14 pinos digitais (6 PWM)',
    adc: '10 bits, 6 canais',
    
    bibliotecas: [
      { nome: 'Wire.h (I2C)', link: 'https://www.arduino.cc/reference/en/language/functions/communication/wire/' },
      { nome: 'SPI.h', link: 'https://www.arduino.cc/reference/en/language/functions/communication/spi/' },
      { nome: 'Servo.h', link: 'https://www.arduino.cc/reference/en/libraries/servo/' },
      { nome: 'LiquidCrystal.h', link: 'https://www.arduino.cc/reference/en/libraries/liquidcrystal/' }
    ],
    
    linguagens: ['C++', 'Arduino Language'],
    usoRecomendado: 'Educação, prototipagem rápida, robótica básica',
    categoria: 'Plataforma de Desenvolvimento',
    fabricante: 'Arduino LLC',
    siteFabricante: 'https://www.arduino.cc/en/software',
    documentacao: 'https://docs.arduino.cc/',
    naturezaCor: 'Bege',
    outrosNomes: '',
    
    imageCard: '/img/Bege-Ipanema.jpg',
    imageDetail: '/img/Bege-Ipanema.jpg',
  },
  {
    id: 3,
    slug: 'raspberry-pi-pico',
    image: '/img/raspberry-pi-pico.png',
    name: 'Raspberry Pi Pico',
    
    especificacoes: [
      { caracteristica: 'Microcontrolador', valor: 'RP2040' },
      { caracteristica: 'Frequência', valor: '133 MHz' },
      { caracteristica: 'RAM', valor: '264 KB' },
      { caracteristica: 'Flash', valor: '2 MB (até 16 MB)' }
    ],
    
    descricao: 'Microcontrolador de baixo custo com dual-core ARM Cortex-M0+. Suporta MicroPython e C++.',
    arquitetura: 'ARM Cortex-M0+ dual-core',
    tensaoOperacao: '1.8 - 5.5 V',
    corrente: '~30 mA (ativo)',
    gpios: '26 pinos',
    adc: '12 bits, 3 canais',
    pwm: '16 canais',
    
    bibliotecas: [
      { nome: 'machine (MicroPython)', link: 'https://docs.micropython.org/en/latest/library/machine.html' },
      { nome: 'pico/stdlib.h', link: 'https://raspberrypi.github.io/pico-sdk-doxygen/' },
      { nome: 'hardware/pwm.h', link: 'https://raspberrypi.github.io/pico-sdk-doxygen/group__hardware__pwm.html' }
    ],
    
    linguagens: ['C++', 'MicroPython'],
    usoRecomendado: 'Projetos educacionais, controle de motores, sensores',
    categoria: 'Microcontrolador',
    fabricante: 'Raspberry Pi Foundation',
    siteFabricante: 'https://www.raspberrypi.com/products/raspberry-pi-pico/',
    documentacao: 'https://www.raspberrypi.com/documentation/microcontrollers/',
    naturezaCor: 'Bege',
    outrosNomes: '',
    
    imageCard: '/img/Luna-Perla.jpg',
    imageDetail: '/img/Luna-Perla.jpg',
  },
  {
    id: 4,
    slug: 'sensor-dht22',
    image: '/img/sensor-dht22.png',
    name: 'Sensor DHT22',
    
    especificacoes: [
      { caracteristica: 'Tipo', valor: 'Temperatura e Umidade' },
      { caracteristica: 'Tensão', valor: '3.3 - 6 V' },
      { caracteristica: 'Corrente', valor: '1.5 mA' },
      { caracteristica: 'Faixa Temp.', valor: '-40°C a 80°C' },
      { caracteristica: 'Faixa Umid.', valor: '0-100%' }
    ],
    
    descricao: 'Sensor digital de temperatura e umidade com alta precisão. Comunicação one-wire.',
    arquitetura: 'Digital one-wire',
    tensaoOperacao: '3.3 - 6 V',
    corrente: '1.5 mA',
    precisaoTemperatura: '±0.5°C',
    precisaoUmidade: '±2%',
    
    bibliotecas: [
      { nome: 'DHT.h (Adafruit)', link: 'https://github.com/adafruit/DHT-sensor-library' },
      { nome: 'DHTesp.h (ESP32)', link: 'https://github.com/bertmelis/ESP32-DHT' }
    ],
    
    linguagens: ['C++', 'MicroPython'],
    usoRecomendado: 'Monitoramento ambiental, estufas, automação residencial',
    categoria: 'Sensor',
    fabricante: 'Aosong',
    siteFabricante: 'https://www.aosong.com/',
    documentacao: 'https://www.sparkfun.com/datasheets/Sensors/Temperature/DHT22.pdf',
    naturezaCor: 'Branco',
    outrosNomes: '',
    
    imageCard: '/img/Branco-Cintilante.jpg',
    imageDetail: '/img/Branco-Cintilante.jpg',
  },
  {
    id: 5,
    slug: 'raspberry-pi-4',
    image: '/img/raspberry-pi-4.png',
    name: 'Raspberry Pi 4',
    
    especificacoes: [
      { caracteristica: 'Processador', valor: 'BCM2711' },
      { caracteristica: 'Frequência', valor: '1.5 GHz' },
      { caracteristica: 'RAM', valor: '2/4/8 GB' },
      { caracteristica: 'Portas USB', valor: '4x USB 2.0/3.0' },
      { caracteristica: 'Ethernet', valor: 'Gigabit' }
    ],
    
    descricao: 'Computador de placa única (SBC) completo, capaz de rodar sistemas Linux.',
    arquitetura: 'ARM Cortex-A72',
    tensaoOperacao: '5 V / 3 A',
    gpios: '40 pinos',
    
    bibliotecas: [
      { nome: 'RPi.GPIO (Python)', link: 'https://pypi.org/project/RPi.GPIO/' },
      { nome: 'pigpio', link: 'https://abyz.me.uk/rpi/pigpio/' },
      { nome: 'WiringPi', link: 'http://wiringpi.com/' }
    ],
    
    linguagens: ['Python', 'C++', 'JavaScript', 'Node-RED'],
    usoRecomendado: 'Servidores caseiros, automação avançada, media center',
    categoria: 'Computador de Placa Única',
    fabricante: 'Raspberry Pi Foundation',
    siteFabricante: 'https://www.raspberrypi.com/products/raspberry-pi-4-model-b/',
    documentacao: 'https://www.raspberrypi.com/documentation/computers/raspberry-pi-4.html',
    naturezaCor: 'Preto',
    outrosNomes: '',
    
    imageCard: '/img/Arabesco.jpg',
    imageDetail: '/img/Arabesco.jpg',
  },
  {
    id: 6,
    slug: 'sensor-hc-sr04',
    image: '/img/sensor-hc-sr04.png',
    name: 'Sensor Ultrassônico HC-SR04',
    
    especificacoes: [
      { caracteristica: 'Tipo', valor: 'Distância' },
      { caracteristica: 'Tensão', valor: '5 V' },
      { caracteristica: 'Alcance', valor: '2 cm - 400 cm' },
      { caracteristica: 'Precisão', valor: '±3 mm' }
    ],
    
    descricao: 'Sensor de distância por ultrassom. Emite um pulso sonoro e mede o tempo de retorno do eco.',
    arquitetura: 'Trigger/Echo',
    tensaoOperacao: '5 V',
    corrente: '15 mA',
    anguloEfeito: '<15°',
    
    bibliotecas: [
      { nome: 'NewPing.h', link: 'https://bitbucket.org/teckel12/arduino-new-ping/wiki/Home' },
      { nome: 'Ultrasonic.h', link: 'https://github.com/rodrigosfa/Ultrasonic' }
    ],
    
    linguagens: ['C++', 'MicroPython'],
    usoRecomendado: 'Robótica, detecção de obstáculos, medição de nível',
    categoria: 'Sensor',
    fabricante: 'Generic',
    siteFabricante: 'https://www.electronicwings.com/sensors-modules/hc-sr04-ultrasonic-sensor',
    documentacao: 'https://www.sparkfun.com/datasheets/Sensors/Proximity/HCSR04.pdf',
    naturezaCor: 'Bege',
    outrosNomes: '',
    
    imageCard: '/img/Bege-Ipanema.jpg',
    imageDetail: '/img/Bege-Ipanema.jpg',
  },
  {
    id: 7,
    slug: 'atmega328p',
    image: '/img/atmega328p.png',
    name: 'ATmega328P',
    
    especificacoes: [
      { caracteristica: 'Microcontrolador', valor: 'ATmega328P' },
      { caracteristica: 'Frequência', valor: '20 MHz' },
      { caracteristica: 'RAM', valor: '2 KB' },
      { caracteristica: 'Flash', valor: '32 KB' },
      { caracteristica: 'EEPROM', valor: '1 KB' }
    ],
    
    descricao: 'Microcontrolador clássico da família AVR. É o coração do Arduino Uno.',
    arquitetura: 'AVR',
    tensaoOperacao: '1.8 - 5.5 V',
    gpios: '23 pinos',
    adc: '10 bits, 6 canais',
    timers: '2x 8-bit, 1x 16-bit',
    
    bibliotecas: [
      { nome: 'AVR Libc', link: 'https://www.nongnu.org/avr-libc/' },
      { nome: 'Arduino Core', link: 'https://github.com/arduino/ArduinoCore-avr' }
    ],
    
    linguagens: ['C++', 'Assembly'],
    usoRecomendado: 'Projetos standalone, educação, sistemas embarcados',
    categoria: 'Microcontrolador',
    fabricante: 'Microchip Technology',
    siteFabricante: 'https://www.microchip.com/en-us/product/ATmega328P',
    documentacao: 'https://ww1.microchip.com/downloads/en/DeviceDoc/ATmega48A-PA-88A-PA-168A-PA-328-P-DS-DS40002074B.pdf',
    naturezaCor: 'Cinza',
    outrosNomes: '',
    
    imageCard: '/img/Luna-Perla.jpg',
    imageDetail: '/img/Luna-Perla.jpg',
  },
  {
    id: 8,
    slug: 'led-rgb',
    image: '/img/led-rgb.png',
    name: 'LED RGB (5mm)',
    
    especificacoes: [
      { caracteristica: 'Tipo', valor: 'LED RGB' },
      { caracteristica: 'Tensão (R)', valor: '2.0-2.2 V' },
      { caracteristica: 'Tensão (G/B)', valor: '3.0-3.2 V' },
      { caracteristica: 'Corrente', valor: '20 mA' }
    ],
    
    descricao: 'LED capaz de emitir luz vermelha, verde e azul. Controlado via PWM pode gerar milhões de cores.',
    arquitetura: 'Ânodo/Cátodo comum',
    tensaoOperacao: '2-3.5 V',
    corrente: '20 mA por canal',
    anguloVisao: '30°',
    
    bibliotecas: [
      { nome: 'Adafruit_NeoPixel.h', link: 'https://github.com/adafruit/Adafruit_NeoPixel' },
      { nome: 'FastLED.h', link: 'https://github.com/FastLED/FastLED' }
    ],
    
    linguagens: ['C++', 'MicroPython'],
    usoRecomendado: 'Indicadores visuais, iluminação decorativa, feedback de estados',
    categoria: 'Atuador',
    fabricante: 'Generic',
    siteFabricante: 'https://components101.com/led/rgb-led-pinout-working',
    documentacao: 'https://www.arduino.cc/en/Tutorial/BuiltInExamples/RGBLED',
    naturezaCor: 'Vermelho',
    outrosNomes: '',
    
    imageCard: '/img/Branco-Cintilante.jpg',
    imageDetail: '/img/Branco-Cintilante.jpg',
  },
  {
    id: 9,
    slug: 'motor-nema17',
    image: '/img/motor-nema17.png',
    name: 'Motor de Passo NEMA 17',
    
    especificacoes: [
      { caracteristica: 'Tipo', valor: 'Motor de Passo' },
      { caracteristica: 'Tensão', valor: '2.4 - 12 V' },
      { caracteristica: 'Corrente', valor: '1.7 A' },
      { caracteristica: 'Passos/Volta', valor: '200' },
      { caracteristica: 'Ângulo de Passo', valor: '1.8°' }
    ],
    
    descricao: 'Motor de passo de alto torque. Requer driver externo (A4988, DRV8825, TMC2209).',
    arquitetura: 'Bipolar',
    tensaoOperacao: '2.4 - 12 V',
    corrente: '1.7 A',
    torque: '~4 kg·cm',
    
    bibliotecas: [
      { nome: 'AccelStepper.h', link: 'https://www.airspayce.com/mikem/arduino/AccelStepper/' },
      { nome: 'TMCStepper.h', link: 'https://github.com/teemuatlut/TMCStepper' }
    ],
    
    linguagens: ['C++'],
    usoRecomendado: 'Impressoras 3D, CNC, robótica, posicionamento de precisão',
    categoria: 'Atuador',
    fabricante: 'Generic',
    siteFabricante: 'https://www.omc-stepperonline.com/',
    documentacao: 'https://reprap.org/wiki/NEMA_17_Stepper_Motor',
    naturezaCor: 'Preto',
    outrosNomes: '',
    
    imageCard: '/img/Arabesco.jpg',
    imageDetail: '/img/Arabesco.jpg',
  },
  {
    id: 10,
    slug: 'display-oled-ssd1306',
    image: '/img/display-oled-ssd1306.png',
    name: 'Display OLED 0.96" SSD1306',
    
    especificacoes: [
      { caracteristica: 'Tipo', valor: 'OLED' },
      { caracteristica: 'Resolução', valor: '128x64 pixels' },
      { caracteristica: 'Interface', valor: 'I2C / SPI' },
      { caracteristica: 'Tensão', valor: '3.3 - 5 V' }
    ],
    
    descricao: 'Display gráfico OLED de baixo consumo, alto contraste. Não requer backlight.',
    arquitetura: 'SSD1306',
    tensaoOperacao: '3.3 - 5 V',
    consumo: '~20 mA (ligado)',
    cores: 'Monocromático (branco/azul/amarelo)',
    
    bibliotecas: [
      { nome: 'Adafruit_SSD1306.h', link: 'https://github.com/adafruit/Adafruit_SSD1306' },
      { nome: 'U8g2lib.h', link: 'https://github.com/olikraus/u8g2' }
    ],
    
    linguagens: ['C++', 'MicroPython'],
    usoRecomendado: 'Dashboards, monitores de sensores, relógios, interfaces simples',
    categoria: 'Display',
    fabricante: 'Generic',
    siteFabricante: 'https://www.adafruit.com/product/938',
    documentacao: 'https://cdn-shop.adafruit.com/datasheets/SSD1306.pdf',
    naturezaCor: 'Branco',
    outrosNomes: '',
    
    imageCard: '/img/Bege-Ipanema.jpg',
    imageDetail: '/img/Bege-Ipanema.jpg',
  }
];

// Funções auxiliares
export const getComponentBySlug = (slug) => {
  return componentsData.find(component => component.slug === slug);
};

export const getComponentById = (id) => {
  return componentsData.find(component => component.id === id);
};

export const getAllComponents = () => {
  return componentsData;
};

export const getComponentsByCategory = (categoria) => {
  return componentsData.filter(component => component.categoria === categoria);
};