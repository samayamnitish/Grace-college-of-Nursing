# Grace College of Nursing — Official Web Portal

> **Sara Grace Educational Society (Est. 1987)**  
> **Affiliated to Dr. N.T.R. University of Health Sciences, Vijayawada, Andhra Pradesh**  
> **Recognised by Government of Andhra Pradesh & Indian Nursing Council (INC), New Delhi**  
> **Approved by Andhra Pradesh Nursing Council (APNC)**

---

## 📌 Overview

**Grace College of Nursing** is a premier collegiate healthcare institution located in Machilipatnam, Krishna District, Andhra Pradesh. This repository contains the source code for the official modern web application of the college, engineered for prospective students, current nursing cadets, faculty, and administrative stakeholders.

---

## 🌟 Key Features

### 1. 🎓 Academic & Curriculum Showcase
- **4-Year B.Sc. Nursing Program**: Detailed 8-semester course structure aligned with the latest **Indian Nursing Council (INC)** regulations.
- **Clinical Training Rotations**: Bedside clinical postings at the **Government Teaching General Hospital, Machilipatnam** and rural primary health centers in Guduru & Pedana.

### 2. 📝 Interactive Online Application Portal (`/apply`)
- **Digital Admission Application Form**: Comprehensive application form for 2026–27 B.Sc. Nursing admissions.
- **Automated Marks Calculation**: Real-time auto-calculation of Intermediate Science Group (Physics, Chemistry, Biology) and Language aggregate totals.
- **Statutory Document Checklist**: Identity verification inputs (Aadhaar, RICE Card, Meeseva Caste/Income Certificates).
- **Dual Submission System**: Instant automated delivery to `sges112@gmail.com` via backend API with client mail composer fallback.
- **Print & PDF Mode**: Fully formatted, print-optimized stylesheet for offline physical submission and record-keeping.

### 3. ⏱️ 2026 Admissions Floating Drawer & Timer Popup
- Automated, non-intrusive bottom-right timer popup on website open.
- Live urgency countdown timer, zoomable high-resolution admissions poster lightbox, and quick-action calling & WhatsApp buttons.
- Collapsible into a floating indicator badge (`🎓 Admissions 2026 Open`).

### 4. 🏛️ Institutional Profile & History
- Comprehensive about page detailing **Sara Grace Educational Society** (founded in 1987 by **Bishop Rev. Dr. S.S. John**).
- Verified statutory accreditations and official 1:1 emblems of AP Government, INC New Delhi, APNC, and Dr. NTR UHS.
- Executive Committee and Leadership directory.

### 5. 🔬 Campus Infrastructure & Laboratories
- Interactive showcase of 5 specialized simulation laboratories (Anatomy & Physiology, Foundations of Nursing, Community Health, Nutrition & Dietetics, Computer Lab).
- Central Academic Library, comfortable campus hostel, and in-house RO mineral water plant.

### 6. 📱 Omnichannel Contact & Direct WhatsApp QR
- Real scannable WhatsApp QR Code for 1-click messaging with the admission desk (`+91 85002 54345`).
- Direct inquiry form delivering message payloads straight to `sges112@gmail.com` with automated confirmation banners.
- Integrated interactive Google Maps location coordinates for Pothepalle campus.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) with Custom Nursing Theme Tokens |
| **UI Components** | [Radix UI](https://www.radix-ui.com/) Primitives & [shadcn/ui](https://ui.shadcn.com/) |
| **Routing** | [React Router DOM v6](https://reactrouter.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Notifications** | [Sonner](https://sonner.emilkowal.ski/) |
| **Forms & Inquiries** | FormSubmit API Integration + Native Mailto Fallback |

---

## 📂 Project Structure

```text
WEBSITE COLLEGE/
├── public/
│   ├── images/
│   │   ├── logos/              # Official accreditation emblems (AP Govt, INC, APNC, NTR UHS)
│   │   ├── admissions_popup_poster.png # 2026 Admissions poster asset
│   │   ├── whatsapp_qr.png     # Scannable WhatsApp QR Code
│   │   └── ...                 # Campus and laboratory photographs
│   └── favicon.ico
├── src/
│   ├── assets/                 # High-resolution optimized local assets
│   ├── components/
│   │   ├── ui/                 # Reusable Radix UI & Shadcn components
│   │   ├── Header.tsx          # Responsive navbar with mobile drawer & top notice bar
│   │   ├── Hero.tsx            # High-impact hero section with live admissions CTA
│   │   ├── About.tsx           # Society profile & key institutional stats
│   │   ├── Courses.tsx         # B.Sc. Nursing curriculum highlights
│   │   ├── FacilitiesPreview.tsx # Icon-driven campus facilities overview
│   │   ├── NewsEvents.tsx      # Milestone dispatches & convocation events
│   │   ├── Gallery.tsx         # Campus life photo gallery preview
│   │   ├── Admissions.tsx      # Quota eligibility & application guide
│   │   ├── Contact.tsx         # Direct admissions inquiry form
│   │   ├── AdmissionsPopup.tsx # Interactive bottom-right floating timer popup
│   │   ├── FloatingWhatsApp.tsx# Global WhatsApp floating button & back-to-top trigger
│   │   └── Footer.tsx          # Campus coordinates, statutory links & copyright
│   ├── pages/
│   │   ├── Index.tsx           # Homepage
│   │   ├── AboutPage.tsx       # Full About Us, History & Recognitions
│   │   ├── AcademicsPage.tsx   # 4-Year B.Sc. Nursing 8-Semester Syllabus
│   │   ├── AdmissionsPage.tsx  # Eligibility, Quotas & Guidelines
│   │   ├── ApplicationPage.tsx # Digital B.Sc. Nursing Application Portal
│   │   ├── FacilitiesPage.tsx  # Campus Labs, Hospital Postings & Library
│   │   ├── ManagementPage.tsx  # Executive Committee Roster
│   │   ├── StudentLifePage.tsx # Clinical Postings, Anti-Ragging & Campus Culture
│   │   ├── GalleryPage.tsx     # Filterable photo gallery
│   │   └── ContactPage.tsx     # Full contact desk & WhatsApp QR
│   ├── App.tsx                 # Route declarations & global providers
│   ├── index.css               # Design system tokens & global styling
│   └── main.tsx                # Application entry point
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version `18.x` or higher recommended)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
The application will be live at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
Production assets are compiled and bundled into the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📞 Administrative Contact & Campus Coordinates

- **Institution**: Grace College of Nursing (Sara Grace Educational Society)
- **Campus Address**: Door No: 3/39, Pothepalle, Machilipatnam - 521 002, Krishna District, Andhra Pradesh, India.
- **Admission Helplines**: 
  - `+91 94926 44555`
  - `+91 85002 54345`
  - `+91 79897 66058`
  - `+91 89857 54346`
- **Official Emails**:
  - `sges112@gmail.com`
  - `info@gracecollegeofnursing.org`
  - `gracecollegeofnursing@gmail.com`
- **Statutory Portals**:
  - [Andhra Pradesh Nurses Council](https://hmis.ap.nic.in/)
  - [Dr. N.T.R. University of Health Sciences](https://drntr.uhsap.in)

---

## 📄 License
© 2026 Sara Grace Educational Society • Grace College of Nursing. All rights reserved.
