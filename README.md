# smart-library-seat-occupancy-system
IoT-based Smart Library Seat Occupancy System with Break-Time Logic and QR Login — detects real-time seat usage using FSR and capacitive sensors integrated with a cloud-hosted website.

# 🏛️ Smart Library Seat Occupancy System with Break-Time Logic and QR Login

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-ESP32-green)](https://www.espressif.com/en/products/socs/esp32)
[![Web Dashboard](https://img.shields.io/badge/Web-Dashboard-orange)](#)

---

## 📘 Project Overview
The **Smart Library Seat Occupancy System** is an IoT solution for efficient library seat management.  
It integrates **FSR sensors** and **capacitive touch sensors** to detect seat occupancy and manage break times.  
All updates are reflected in real-time on a **cloud-hosted web dashboard**, helping users and administrators monitor seats effectively.  

---

## 🧩 Key Features
- ✅ **Automatic Seat Occupancy Detection**  
- ⏱️ **Break-Time Management** (via capacitive touch sensors)  
- 🌈 **Color-Coded Seat Status**:  
  ![Green](https://img.shields.io/badge/Vacant-Green?style=flat-square)  
  ![Orange](https://img.shields.io/badge/Occupied--NoQR-Orange?style=flat-square)  
  ![Red](https://img.shields.io/badge/Occupied--QR-Red?style=flat-square)  
  ![Yellow](https://img.shields.io/badge/Break-Yellow?style=flat-square)  
- 🔐 **QR-Based User Authentication**  
- 🌐 **Cloud-Hosted Dashboard** for remote monitoring  
- 🔒 **Secure HTTPS Communication**  

---

## ⚙️ Hardware Components
- **ESP32 Microcontroller**  
- **FSR Sensors** – Detect weight on seats  
- **Capacitive Touch Sensors** – Initiate break timers  
- **Power Supply** – 3.3V regulated or USB  

---

## 🌐 Website Integration
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js hosted on **Render**  
- **Real-Time Updates:** Dynamic seat status & timer info  
- **Secure Communication:** HTTPS for encrypted data transfer  

---

## 💡 Implementation Details
1. **Occupancy Detection:** FSR sensors monitor each seat.  
2. **Break-Time Logic:**  
   - Activated via capacitive touch sensors  
   - Only QR-logged users can start breaks  
   - Timer updates the web interface automatically  
3. **Data Flow:**  
   `ESP32 → Sensor Processing → POST Requests → Web Dashboard Updates`  

---

## 🎯 Future Scope
- AI-based seat utilization analytics for peak-hour prediction  
- Dynamic break durations based on seat occupancy  
- Reservation system integration  
- Full automation with agentic AI  
- Mobile app integration for real-time seat tracking  

---

## 📸 Demo

---

## 📱 QR Login
 

---

## 📝 Installation & Setup
1. **Hardware:** Connect FSR & capacitive touch sensors to ESP32  
2. **Firmware:** Upload Arduino/ESP32 code  
3. **Server:** Deploy Node.js backend on Render  
4. **Frontend:** Host dashboard files (Render/static hosting)  
5. **Configuration:** Update ESP32 with WiFi credentials & server endpoint  

---

## 🔗 Contributions
This project welcomes:  
- New sensor integration or feature enhancements  
- Improved web dashboard UI/UX  
- Machine learning for predictive seat management  

---

## 📚 References
- [ESP32 Official Documentation](https://www.espressif.com/en/products/socs/esp32)  
- FSR Sensor Technical Sheets  
- Capacitive Touch Sensor Guides  
- Node.js & Render Hosting Documentation  

---

> Developed as an innovative IoT solution to optimize library seat management with real-time monitoring and smart break-time logic.

