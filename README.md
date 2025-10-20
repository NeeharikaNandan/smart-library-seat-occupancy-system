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
- 🔒 **Secure HTTPS Communication**  
- 🔐 **Student Authentication:** Unique usernames and passwords per student  
- 📊 **Library Analytics:** Track usage, peak hours, demand, and individual student activity  

---

## ⚙️ Hardware Components
- **ESP32 Microcontroller**  
- **FSR Sensors** – Detect weight on seats (threshold >25–30 kg to avoid false occupancy by books/bags)  
- **Capacitive Touch Sensors** – Initiate break timers; enter sleep mode during active break  
- **Power Supply** – DC power or rechargeable LiPo batteries for portability  
- **Optional Magnetic Chair Locking System** – For paid seats or reserved seating  

---

## 💡 Implementation Details
1. **Occupancy Detection & Algorithm:**  
   - FSR sensors detect humans only (ignore objects like books or bags)  
   - Seat is considered **occupied** only if weight >25 kg  
   - Break time triggers **only for logged-in users**, and login is allowed **only if seat is occupied**  
2. **Break-Time Logic:**  
   - Manual buttons or software timers available  
   - Breaktime disabled for 30 min after activation to prevent misuse  
3. **Real-World Sensor Placement:**  
   - FSR sensors embedded inside chair cushions  
   - Capacitive touch sensors attached to chair arm or leg for easy accessibility  
4. **Seat Management:**  
   - If user doesn’t return after breaktime, seat is freed and belongings moved to lockers  
   - Repeat offenders can be fined via user database  
5. **Data Flow:**  
   `ESP32 → Sensor Processing → POST Requests → Web Dashboard Updates`  

---

## 🎯 Features & Future Integrations
- Break-time activates **only if seat is occupied**  
- Students login via seat-specific QR or URL  
- Library analytics for **daily, seasonal, and individual usage**  
- Fair seat usage without time wastage  
- Expansion to **high-demand areas**: bus stands, airports, metros  
- Paid seats & **magnetic chair locking system** integration  
- Scheduled study slots and pre-booking through app interface  
- Premium seating categories for monetization  
- Damage alert system for library property  
- Manual timers and actuator integration for break control  
- Future agentic AI integration to analyze library usage and requirements  

---

## 🧩 Unique Features
- Simple and **compact design** easily embedded in chairs  
- **1 ESP32 can control 4–5 chairs**, reducing costs (<₹500 per chair)  
- Portable chairs with rechargeable LiPo or DC power supply  
- Breaktime logic with **manual or software activation**, disables misuse  
- FSR programmed to detect weight >25–30 kg to avoid false positives  
- Capacitive touch sensors go into sleep mode during active break  
- Automatic freeing of seats if user misses break; belongings moved to lockers  
- Logging of repeated break violations in user database with fines  
- Optional **magnetic chair locking system** for premium or paid seats  

---

## 🌐 Website Integration
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js hosted on **Render**  
- **Real-Time Updates:** Dynamic seat status & timer info  
- **Secure Communication:** HTTPS for encrypted data transfer  

---

## 📸 Demo
![Demo GIF](https://via.placeholder.com/600x300?text=Insert+Demo+GIF+Here)  
  https://youtu.be/DlTMYujHCAw?feature=shared

---

## 🌐 Public Display & Seat Login
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

> Developed as an innovative IoT solution to optimize library seat management with real-time monitoring, smart break-time logic, and potential for magnetic chair locking system integration.
> note:we have done this project using http and hosted it by render,which is bit basic it can be made way better with event driven websocket for more varied interfaces and way better response times and multi detection and we are going to implement this in future

  
