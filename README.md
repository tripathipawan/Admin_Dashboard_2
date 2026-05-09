# 🖥️ Admin Dashboard 2

A fully multi-page, browser-based admin dashboard UI built with pure HTML, CSS, and JavaScript — featuring 13 dedicated pages covering analytics, orders, users, products, messages, calendar, reports, settings, backups, and more. Every page is self-contained, navigation is JavaScript-driven, and the entire interface works without any framework or build tool.

---

## 📌 Overview

This project is a production-style admin panel UI that demonstrates how a complete, multi-page dashboard can be built using nothing but vanilla web technologies. Rather than relying on React, Vue, or any CSS framework, every layout, component, and interactive behavior is handcrafted — making this a strong demonstration of core frontend fundamentals.

The dashboard covers the full scope of a real admin panel: a main overview at `index.html`, dedicated pages for every functional area, shared navigation powered by `App.js`, and a unified design system defined in `Styles.css`.

---

## ✨ Pages Included

| # | File | Page Description |
|---|---|---|
| 1 | `index.html` | Main dashboard overview — summary cards, key metrics, and quick navigation |
| 2 | `Analytics.html` | Analytics page — traffic data, visitor stats, and performance metrics |
| 3 | `Orders.html` | Orders management — order listing, status indicators, and order details |
| 4 | `Products.html` | Product management — product listings, categories, and inventory view |
| 5 | `Users.html` | User management — user table with roles, status, and account details |
| 6 | `Messages.html` | Messages/inbox page — conversation list and message thread layout |
| 7 | `Calendar.html` | Calendar page — date-based event view and scheduling layout |
| 8 | `Posts.html` | Posts management — content listing with status (published/draft) indicators |
| 9 | `Reports.html` | Reports page — data summaries and downloadable report section layout |
| 10 | `Elements.html` | UI elements reference page — buttons, badges, form inputs, alerts, and components |
| 11 | `Profile.html` | Admin user profile page — personal info, avatar, and account settings |
| 12 | `Settings.html` | Settings page — system preferences, toggle options, and configuration sections |
| 13 | `Backups.html` | Backup management page — backup history, status indicators, and action controls |

---

## ✨ Features

- **13-Page Multi-Page Architecture** — Each functional area of the dashboard has its own dedicated HTML page, keeping concerns separated and the codebase organized.
- **Shared Navigation System** — `App.js` powers the sidebar/navigation across all pages, handling active state highlighting and any shared interactive behavior without duplicating code across files.
- **Unified Design System** — A single `Styles.css` file defines the complete visual language — color palette, typography scale, spacing, card components, table styles, button variants, badge styles, and status indicators — applied consistently across all 13 pages.
- **Data Tables** — Multiple pages (Orders, Products, Users, Posts) feature structured HTML tables with column headers, row data, status badges, and action buttons.
- **Summary / Metric Cards** — The main dashboard and Analytics page display KPI-style summary cards showing counts, percentages, and trend indicators.
- **Status Badge System** — Visual status indicators (active, inactive, pending, published, draft, completed, failed) implemented with CSS class-based badge components.
- **UI Elements Reference Page** — `Elements.html` acts as a living style guide, cataloguing all reusable components — buttons (primary, secondary, danger, ghost), form inputs, checkboxes, alerts, tooltips, and badges — in one place.
- **Calendar Layout** — `Calendar.html` renders a date grid with event indicators, demonstrating DOM-driven calendar generation via JavaScript.
- **Profile & Settings Pages** — Complete account management UI sections including form fields, toggle switches, avatar layout, and section-based settings grouping.
- **Backup Management UI** — `Backups.html` displays a backup log table with timestamps, file sizes, status indicators, and restore/download action controls.
- **Zero Dependencies** — No npm packages, no CSS frameworks, no external UI libraries. Open any `.html` file directly in a browser and it works.
- **Responsive Layout** — CSS media queries ensure the sidebar, content area, tables, and cards adapt correctly across desktop and tablet screen widths.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure for all 13 pages |
| CSS3 | Unified design system — layout, components, badges, tables, responsive breakpoints |
| JavaScript (ES6+) | Shared navigation logic, active state management, calendar generation, DOM interactions |

---

## 📁 Project Structure

```
Admin_Dashboard_2/
├── index.html           # Main dashboard overview page
├── Analytics.html       # Analytics and traffic metrics page
├── Orders.html          # Order management page
├── Products.html        # Product management page
├── Users.html           # User management page
├── Messages.html        # Messages and inbox page
├── Calendar.html        # Calendar and scheduling page
├── Posts.html           # Content/posts management page
├── Reports.html         # Reports and data summary page
├── Elements.html        # UI elements style guide page
├── Profile.html         # Admin profile page
├── Settings.html        # System settings page
├── Backups.html         # Backup management page
├── App.js               # Shared navigation, active states, and interactive logic
└── Styles.css           # Complete unified design system
```

---

## 🚀 Getting Started

No installation or build step required.

**1. Clone the repository**
```bash
git clone https://github.com/tripathipawan/Admin_Dashboard_2.git
cd Admin_Dashboard_2
```

**2. Open the dashboard**

Open `index.html` in any modern browser to start from the main overview, then navigate to any page from the sidebar.

```bash
# macOS
open index.html

# Windows
start index.html
```

**3. Recommended: VS Code Live Server**
```
Right-click on index.html → Open with Live Server
```
Live Server provides auto-reload on save and correct relative path resolution for all linked pages.

---

## 🎮 Navigation Guide

Start at `index.html` for the main dashboard overview, then explore each page:

- **Analytics** → Traffic, visitors, and performance data
- **Orders** → Order table with status tracking
- **Products** → Product inventory and listings
- **Users** → User account management table
- **Messages** → Inbox and conversation layout
- **Calendar** → Date grid with event display
- **Posts** → Content management with publish/draft states
- **Reports** → Report summaries and export layout
- **Elements** → Complete UI component reference
- **Profile** → Admin account and personal info
- **Settings** → System configuration and preferences
- **Backups** → Backup history and management controls

---

## 🧠 Architecture Highlights

| Concern | Implementation |
|---|---|
| Shared Navigation | `App.js` dynamically sets active states and handles sidebar interactions across all pages |
| Design Consistency | Single `Styles.css` with CSS custom properties ensures all 13 pages share the same visual tokens |
| Component Patterns | Reusable CSS classes (`.card`, `.badge`, `.table`, `.btn`) applied across pages without duplication |
| Multi-Page Without Framework | Standard HTML `<a href>` linking between pages, enhanced by `App.js` for active state management |

---

## 🌱 What I Learned

- Architecting a multi-page application with shared CSS and JavaScript without any framework
- Building a complete, consistent design system from scratch using CSS custom properties
- Structuring reusable component classes that scale cleanly across 13 separate pages
- Implementing table-heavy data layouts (orders, users, products) with proper visual hierarchy
- Managing active navigation states and shared sidebar behavior across multiple HTML files

---

## 🤝 Contributing

Contributions are welcome! To add a new page or improve an existing component:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/page-or-component-name`)
3. Follow the existing HTML structure and use the shared `Styles.css` classes
4. Commit your changes (`git commit -m 'Add: description of change'`)
5. Push to the branch (`git push origin feature/page-or-component-name`)
6. Open a Pull Request

---

## 👨‍💻 Author

**Pawan Tripathi**
- GitHub: [@tripathipawan](https://github.com/tripathipawan)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
