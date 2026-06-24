# PRD - Utility Maintenance CMMS Web Application

## 1. Product Overview

### Product Name

Utility CMMS

### Product Vision

Membangun platform Computerized Maintenance Management System (CMMS) berbasis web yang memudahkan Departemen Utility dalam mengelola aset, preventive maintenance, corrective maintenance, work order, inspeksi, dan pelaporan secara terintegrasi dalam satu sistem.

### Target Users

| Role          | Description                                                      |
| ------------- | ---------------------------------------------------------------- |
| Technician    | Melaksanakan pekerjaan maintenance dan mengisi laporan pekerjaan |
| Supervisor    | Monitoring pekerjaan, approval, dan evaluasi kinerja             |
| Planner       | Membuat jadwal preventive maintenance dan work order             |
| Administrator | Mengelola user, master data, dan konfigurasi sistem              |

---

# 2. Functional Requirements

## Asset Management

Sistem harus mampu:

* Menyimpan seluruh data asset utility
* Menampilkan lokasi asset
* Menampilkan status asset
* Menampilkan histori maintenance asset
* Menampilkan dokumentasi asset
* Menampilkan spesifikasi teknis asset

### Asset Information

* Asset Code
* Asset Name
* Category
* Location
* Manufacturer
* Model
* Serial Number
* Installation Date
* Status
* Photo
* Document Attachment

---

## Preventive Maintenance Management

Sistem harus mampu:

* Membuat jadwal PM otomatis
* Membuat PM harian
* Membuat PM mingguan
* Membuat PM bulanan
* Membuat PM triwulan
* Membuat PM semester
* Membuat PM tahunan
* Menghasilkan Work Order otomatis berdasarkan jadwal

---

## Corrective Maintenance

Sistem harus mampu:

* Membuat laporan kerusakan
* Membuat breakdown ticket
* Mengubah laporan menjadi work order
* Memantau status pekerjaan

Status:

* Open
* Assigned
* In Progress
* Pending
* Completed
* Closed

---

## Work Order Management

Sistem harus mampu:

* Membuat WO
* Menugaskan WO ke teknisi
* Monitoring progress WO
* Upload foto before-after
* Upload checklist pekerjaan
* Menambahkan komentar
* Menambahkan sparepart yang digunakan
* Menambahkan durasi pekerjaan

---

## Spare Part Management

Sistem harus mampu:

* Menyimpan data spare part
* Monitoring stock
* Monitoring minimum stock
* Monitoring penggunaan spare part
* Monitoring transaksi stock

---

## Inspection Management

Sistem harus mampu:

* Membuat checklist inspeksi
* Mengisi checklist digital
* Upload foto inspeksi
* Menyimpan hasil inspeksi

---

## Dashboard & Reporting

Sistem harus mampu menampilkan:

* Total Asset
* Total Work Order
* Open Work Order
* Completed Work Order
* PM Compliance
* Asset Downtime
* MTBF
* MTTR
* Breakdown Trend
* Maintenance Cost

---

# 3. Core Features

## Dashboard

### Main Widgets

* Total Assets
* Active Work Orders
* Preventive Maintenance Due
* Breakdown Today
* Asset Health Score
* Technician Workload
* Monthly Performance
* Spare Part Low Stock Alert

### Charts

* WO Status Chart
* PM Compliance Trend
* Breakdown Trend
* Asset Downtime Trend
* Spare Part Usage Trend

---

## Asset Module

### Features

* Asset List
* Asset Detail
* Asset History
* Asset Documents
* Asset Photo Gallery
* Asset Location View

---

## Maintenance Module

### Features

* Work Order List
* Work Order Calendar
* Preventive Maintenance
* Corrective Maintenance
* Inspection Checklist
* Maintenance History

---

## Spare Part Module

### Features

* Inventory List
* Stock In
* Stock Out
* Purchase Tracking
* Stock Alert

---

## Reporting Module

### Features

* Maintenance Report
* Asset Report
* Breakdown Report
* PM Compliance Report
* Spare Part Usage Report
* Technician Performance Report

---

## User Management

### Features

* User List
* Role Management
* Permission Management
* Activity Log

---

# 4. Frontend Design Requirements

## Design Principles

* Modern Industrial UI
* Clean Layout
* Mobile Responsive
* Fast Navigation
* Minimal Clicks
* Dark Mode Support
* Aviation Industry Theme

---

## Layout Structure

### Sidebar Navigation

Sections:

* Dashboard
* Assets
* Work Orders
* Preventive Maintenance
* Corrective Maintenance
* Inspections
* Spare Parts
* Reports
* Users
* Settings

---

### Top Navigation

Components:

* Search Bar
* Notification Center
* User Profile
* Theme Switcher
* Quick Create Button

---

## Dashboard Layout

### Header

* Welcome Message
* Current Date
* Department Information

### KPI Cards

Grid 4 x 2

* Assets
* Open WO
* PM Due
* Breakdown Today
* MTBF
* MTTR
* Compliance
* Downtime

### Analytics Area

* Maintenance Trend
* WO Status
* PM Compliance
* Cost Trend

---

## Asset Detail Page

### Tabs

* Overview
* Maintenance History
* Work Orders
* Documents
* Photos

---

## Work Order Detail Page

### Sections

* WO Information
* Asset Information
* Assigned Technician
* Checklist
* Spare Parts
* Attachments
* Activity Timeline

---

## Mobile Design

### Priority Pages

* Dashboard
* Work Orders
* Asset Search
* Inspection Checklist

### Mobile Actions

* Scan QR Asset
* Create WO
* Upload Photo
* Complete Checklist

---

# 5. User Flow

## Technician Flow

Login

↓

Dashboard

↓

Assigned Work Orders

↓

Open Work Order

↓

View Checklist

↓

Perform Maintenance

↓

Upload Photo

↓

Input Findings

↓

Complete Work Order

↓

Submit Report

---

## Supervisor Flow

Login

↓

Dashboard

↓

Review Work Orders

↓

Monitor Progress

↓

Review Findings

↓

Approve Completion

↓

Generate Reports

---

## Planner Flow

Login

↓

Dashboard

↓

Preventive Maintenance

↓

Create Schedule

↓

Generate Work Orders

↓

Assign Technicians

↓

Monitor Completion

---

## Administrator Flow

Login

↓

Dashboard

↓

Manage Users

↓

Manage Roles

↓

Manage Assets

↓

Manage System Configuration

↓

Audit Activity Logs

---

# 6. Frontend Pages

## Authentication

* Login
* Forgot Password
* Reset Password

## Dashboard

* Main Dashboard

## Asset Management

* Asset List
* Asset Detail
* Asset Create
* Asset Edit

## Work Orders

* WO List
* WO Detail
* WO Create

## Preventive Maintenance

* PM Schedule
* PM Calendar
* PM Templates

## Corrective Maintenance

* Breakdown Ticket
* Corrective WO

## Inspection

* Inspection List
* Inspection Form

## Spare Parts

* Inventory
* Transactions
* Stock Alerts

## Reports

* Reports Dashboard
* Export Reports

## Administration

* User Management
* Role Management
* Activity Logs
* Settings

---

# 7. UI Component Requirements

### Data Components

* Data Table
* Advanced Filter
* Search
* Pagination
* Export Button

### Form Components

* Text Input
* Select
* Multi Select
* Date Picker
* File Upload
* Image Upload

### Visualization Components

* KPI Cards
* Line Chart
* Bar Chart
* Pie Chart
* Calendar View
* Timeline View

### Utility Components

* Notification Panel
* Confirmation Dialog
* Loading Skeleton
* Toast Notification
* QR Scanner
* QR Generator

---

# 8. Design System

### Typography

* Inter
* Roboto

### Color Palette

Primary:

* #0F172A

Secondary:

* #1E40AF

Success:

* #16A34A

Warning:

* #F59E0B

Danger:

* #DC2626

Background:

* #F8FAFC

Dark Background:

* #0F172A

### Border Radius

* 12px

### Card Style

* Soft Shadow
* Minimal Border
* Rounded Corners

### Icon Library

* Lucide React

### Recommended UI Library

* Shadcn UI
* Tailwind CSS
* React Hook Form
* TanStack Table
* Recharts
* React Query
