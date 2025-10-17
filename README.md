# 🏛️ Smart Library Seat Occupancy System with Break-Time Logic and Seat Login URLs

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-ESP32-green)](https://www.espressif.com/en/products/socs/esp32)
[![Web Dashboard](https://img.shields.io/badge/Web-Dashboard-orange)](https://seat-tracker-4.onrender.com/display.html)

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

[![Vacant](https://img.shields.io/badge/Green-Vacant-brightgreen)](#)  
[![Occupied-NoLogin](https://img.shields.io/badge/Orange-Occupied--NoLogin-orange)](#)  
[![Occupied-LoggedIn](https://img.shields.io/badge/Red-Occupied--LoggedIn-red)](#)  
[![Break](https://img.shields.io/badge/Yellow-Break-yellow)](#)  

- 🌐 **Public Library Display & Seat Login URLs:**  
  - [Library Seat Map](https://seat-tracker-4.onrender.com/display.html)  
  - [Seat 1 Login](https://seat-tracker-4.onrender.com/seat1.html)  
  - [Seat 2 Login](https://seat-tracker-4.onrender.com/seat2.html)  
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
   - Only logged-in users can start breaks  
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
![Demo GIF](https://via.placeholder.com/600x300?text=Insert+Demo+GIF+Here)  
 https://youtu.be/DlTMYujHCAw?feature=shared

---

## 🌐 Public Display & Seat Login
Access the live library dashboard and seat login pages here:  
- **Library Seat Map:** [Click Here](https://seat-tracker-4.onrender.com/display.html)  
- **Seat 1 Login:** [Click Here](https://seat-tracker-4.onrender.com/seat1.html)  
- **Seat 2 Login:** [Click Here](https://seat-tracker-4.onrender.com/seat2.html)  

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

  
